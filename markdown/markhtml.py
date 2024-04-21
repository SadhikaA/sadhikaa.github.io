import markdown
import re

def paragraph(line):
    while "**" in line:
        line = line.replace("**", "<b>", 1)
        line = line.replace("**", "</b>", 1)
    # check for == in line 
    while "==" in line:
        line = line.replace("==", "<em>", 1)
        line = line.replace("==", "</em>", 1)
    # check for ` in line 
    while "`" in line:
        code_started = True
        line = line.replace("`", "<code>", 1)
        line = line.replace("`", "</code>", 1)
        code_started = False
    # check for _ in line
    while "!" in line:
        line = line.replace("!", "<i>", 1)
        line = line.replace("!", "</i>", 1)
    # check for inline math, $
    while "$" in line:
        line = line.replace("$", "<span class='math'>\(", 1)
        line = line.replace("$", "\)</span>", 1)
    return line

def parse_markdown(markdown_text):
    # get title between --- and ---
    title = re.findall(r'---(.*?)---', markdown_text, re.DOTALL)[0][8:]

    html_output = f"""<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>{title}</title>
        <link rel="stylesheet" href="../markdown/styles.css">
        <link href="../markdown/prism.css" rel="stylesheet" />
        <script src="../markdown/prism.js"></script>
        <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
        <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
    </head>"""

    # Split markdown content by lines
    lines = markdown_text.split('\n')
    header_count = 1
    code_started = False
    num_lines = len(lines)
    i = 4
    headings = []

    while i < num_lines:
        line = lines[i]
        # subheading 
        if line.startswith("###"):
            html_output += f'\n<h4 id="h{header_count}">{line[4:]}</h4>'
            headings.append((line[4:], header_count, "sub"))
            header_count += 1
        # heading 
        elif line.startswith("##"):
            html_output += f'\n<h3 id="h{header_count}">{line[3:]}</h3>'
            headings.append((line[3:], header_count, "ch"))
            header_count += 1
        # page title - include top 
        elif line.startswith("#") and not code_started:
            html_output += f'\n<h2 id="top">{line[2:]}</h2>'
            html_output += f'\n<hr>'
            html_output += f'\n<hr>'
        # check for python code block
        elif line.startswith("```") and "python" in line:
            lang = "python"
            html_output += f'<pre><code class="language-{lang}">'
            code_started = True
        # check for js code block
        elif line.startswith("```") and "javascript" in line:
            lang = "javascript"
            html_output += f'<pre><code class="language-{lang}">'
            code_started = True
        # check for swift code 
        elif line.startswith("```") and "swift" in line:
            lang = "swift"
            html_output += f'<pre><code class="language-{lang}">'
            code_started = True
        # check for c code
        elif line.startswith("```") and "c" in line:
            lang = "c"
            html_output += f'<pre><code class="language-{lang}">'
            code_started = True
        # check for end of code block 
        elif line.startswith("```") and code_started:
            html_output += '\n\t</code></pre>'
            code_started = False
        # add code between lines 
        elif code_started:
            html_output += f'\n\t{line}'
        # table setup 
        elif line.startswith("<"):
            # given <rowxcol>, split and store values as int
            dimensions = line[1:-1].split("x")
            rows, cols = int(dimensions[0]), int(dimensions[1])
            html_output += f'\n<div class="row">'
            for r in range(rows):
                for c in range(cols):
                    html_output += f'\n<div class="column">'
                    i += 1
                    line = lines[i]
                    if not line.startswith("<img"):
                        line = paragraph(line)
                        html_output += f'<p style="text-align:left">{line}</p>'
                    else:
                        html_output += f'{line}'
                    html_output += f'</div>'
            html_output += f'\n</div>'
        # list support 
        elif line.startswith("-"):
            html_output += f'\n<ul>'
            while line.startswith("-"):
                line = paragraph(line)
                html_output += f'\n<li>{line[2:]}</li>'
                i += 1
                line = lines[i]
            html_output += f'\n</ul>'
        # ignore empty lines
        elif line == "":
            pass
        # basic p code
        else:
            curr = f'\n<p>'
            # check for ** in line 
            line = paragraph(line)
            curr += line
            curr += '</p>'
            # otherwise add a normal p 
            html_output += curr
        i += 1

    html_output += """
        <p style="padding-bottom: 60px"></p>
        <a class="top" href="#top"><button class="orange">⬆</button></a>
    </body>
    </html>
    """

    # replace the html_output between <hr> to have the table of contents
    # find the position of the first <hr> tag
    pos = html_output.find("<hr>")
    pos += 4
    for ch in headings:
        # insert the table of contents after the first <hr> tag
        if ch[2] == "ch":
            html_output = html_output[:pos] + f'\n<a href="#h{ch[1]}" class="bloglink">{ch[0]}</a><br>' + html_output[pos:]
            pos += len(f'\n<a href="#h{ch[1]}" class="bloglink">{ch[0]}</a><br>')
        else:
            html_output = html_output[:pos] + f'\n<a href="#h{ch[1]}" class="subheading">{ch[0]}</a><br>' + html_output[pos:]
            pos += len(f'\n<a href="#h{ch[1]}" class="subheading">{ch[0]}</a><br>')
    

    return html_output

def convert_markdown_to_html(input_file, output_file):
    # Read Markdown file
    with open(input_file, 'r', encoding='utf-8') as f:
        md_text = f.read()

    # Parse Markdown to HTML
    html_text = parse_markdown(md_text)

    # Write HTML to file
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(html_text)

    print(f"🚀 Success! Generated: {output_file}")

# Example usage: Convert input.md to output.html
convert_markdown_to_html('markdown/animation.md', 'markdown/animation.html')