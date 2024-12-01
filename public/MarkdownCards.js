import React, { useEffect, useState } from 'react';

// Card Component
const Card = ({ word, description }) => (
  <div style={styles.card}>
    <div style={styles.content}>
      <div style={styles.wordSection}>
        <h2 style={styles.word}><span style={styles.highlight}>{word}</span></h2>
      </div>
    </div>
    <p style={styles.description}>{parseMarkdown(description)}</p>
  </div>
);

// Function to parse Markdown for bold (**word**), italic (*word*), and code (`word`)
const parseMarkdown = (text) => {
  const regex = /(\*\*(.*?)\*\*|\*(.*?)\*|`(.*?)`)/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    if (match[1].startsWith('**')) {
      parts.push(<strong key={match.index}>{match[2]}</strong>);
    } else if (match[1].startsWith('*')) {
      parts.push(<em key={match.index}>{match[3]}</em>);
    } else if (match[1].startsWith('`')) {
      parts.push(<code key={match.index} style={styles.inlineCode}>{match[4]}</code>);
    }
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
};

const MarkdownCards = ({ fileName }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchMarkdown = async () => {
      if (!fileName) return;
      try {
        const response = await fetch(fileName);
        if (!response.ok) {
          throw new Error(`Failed to load file: ${response.statusText}`);
        }
        const text = await response.text();

        const lines = text.trim().split('\n\n');
        const parsedData = [];
        let currentHeading = null;

        lines.forEach((block) => {
          if (block.startsWith('####')) {
            currentHeading = block.replace(/^####\s*/, '').trim();
            parsedData.push({ heading: currentHeading, cards: [] });
          } else {
            const [word, ...descriptionParts] = block.split('\n');
            if (currentHeading) {
              parsedData[parsedData.length - 1].cards.push({
                word: word.trim(),
                description: descriptionParts.join(' ').trim(),
              });
            }
          }
        });

        setData(parsedData);
      } catch (error) {
        console.error('Error fetching markdown file:', error);
      }
    };

    fetchMarkdown();
  }, [fileName]);

  return (
    <div>
      {data.map((section, index) => (
        <div key={`section-${index}`}>
          <h4 id={`heading-${index}`}>{section.heading}</h4>
          {section.cards.map((card, cardIndex) => (
            <Card
              key={`card-${index}-${cardIndex}`}
              word={card.word}
              description={card.description}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

const styles = {
  card: {
    width: '50vw',
    padding: '13px',
    borderRadius: '10px',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: '#eaeaea',
    backgroundColor: '#fff',
    fontFamily: '"Inter", sans-serif',
    color: '#000',
    margin: '12px auto',
  },
  word: {
    fontSize: '14px',
    fontFamily: 'JetBrains Mono, monospace',
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: '0px',
    color: '#333',
    marginBottom: '10px',
    marginTop: '0px',
  },
  description: {
    fontSize: '14px',
    color: '#444',
    lineHeight: '1.4',
    backgroundColor: '#f7f8fa',
    padding: '12px',
    borderRadius: '8px',
    margin: '0',
  },
  highlight: {
    color: '#000',
    backgroundColor: '#FFFACD',
    padding: '2px 6px',
    borderRadius: '4px',
  },
  inlineCode: {
    padding: '3px 4px',
    borderRadius: '4px',
    backgroundColor: '#f8d7da',
    fontFamily: 'JetBrains Mono, monospace',
    fontSize: '0.9em',
    color: '#d6336c',
  },
};

export default MarkdownCards;
