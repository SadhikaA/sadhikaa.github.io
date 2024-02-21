import markdown
import re

# def parse_markdown(md_text):
#     # Parse Markdown text to HTML
#     html_text = markdown.markdown(md_text)
#     return html_text

def parse_markdown(md_text):
    # convert title and date 


    # Define regular expressions for parsing Markdown elements
    headers_regex = r'^(#{1,6})\s+(.*)$'
    bold_regex = r'\*\*(.*?)\*\*'
    italic_regex = r'_(.*?)_'
    code_block_regex = r'```([^`]+)```'
    inline_code_regex = r'`([^`]+)`'
    list_regex = r'^(\s*[*-]\s+.*$)+'
    list_item_regex = r'\s*[*-]\s+(.*)$'

    # Function to replace Markdown elements with HTML tags
    def replace_markdown(match):
        level = len(match.group(1))
        content = match.group(2)
        return f'<h{level}>{content}</h{level}>'  # Replace headers

    html_text = re.sub(headers_regex, replace_markdown, md_text, flags=re.MULTILINE)
    html_text = re.sub(bold_regex, r'<strong>\1</strong>', html_text)  # Replace bold text
    html_text = re.sub(italic_regex, r'<em>\1</em>', html_text)  # Replace italic text
    html_text = re.sub(code_block_regex, r'<pre><code>\1</code></pre>', html_text, flags=re.DOTALL)  # Replace code blocks
    html_text = re.sub(inline_code_regex, r'<code>\1</code>', html_text)  # Replace inline code
    html_text = re.sub(list_regex, lambda match: '<ul>' + ''.join([f'<li>{item.strip()[2:]}</li>' for item in match.group(0).split('\n')]) + '</ul>', html_text, flags=re.MULTILINE)  # Replace lists

    return html_text

def convert_markdown_to_html(input_file, output_file):
    # Read Markdown file
    with open(input_file, 'r', encoding='utf-8') as f:
        md_text = f.read()

    # Parse Markdown to HTML
    html_text = parse_markdown(md_text)

    # Write HTML to file
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(html_text)

    print(f"HTML file generated successfully: {output_file}")

# Example usage: Convert input.md to output.html
convert_markdown_to_html('input.md', 'output.html')
