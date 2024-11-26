import React, { useEffect, useState } from 'react';

// Card Component
const Card = ({ word, description }) => (
  <div style={styles.card}>
    <div style={styles.content}>
      <div style={styles.wordSection}>
        <h2 style={styles.word}><span style={styles.highlight}>{word}</span></h2>
      </div>
    </div>
    {/* Render the description with bolded words */}
    <p style={styles.description}>{parseMarkdown(description)}</p>
  </div>
);

// Function to parse Markdown for bold (**word**) and italic (*word*)
const parseMarkdown = (text) => {
  const regex = /(\*\*(.*?)\*\*|\*(.*?)\*)/g; // Matches **bold** or *italic*
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    // Add text before the match
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    // Check whether it's bold or italic
    if (match[1].startsWith('**')) {
      parts.push(<strong key={match.index}>{match[2]}</strong>);
    } else if (match[1].startsWith('*')) {
      parts.push(<em key={match.index}>{match[3]}</em>);
    }

    lastIndex = regex.lastIndex;
  }

  // Add the remaining text after the last match
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
};

const MarkdownCards = ({ fileName }) => {
  const [cards, setCards] = useState([]);
  const [headings, setHeadings] = useState([]);

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
        const parsedCards = [];
        const parsedHeadings = [];

        // Process each block
        lines.forEach((block) => {
          if (block.startsWith('####')) {
            // Extract heading (remove #### and trim)
            parsedHeadings.push(block.replace(/^####\s*/, '').trim());
          } else {
            // Process as a card
            const [word, ...descriptionParts] = block.split('\n');
            parsedCards.push({
              word: word.trim(),
              description: descriptionParts.join(' ').trim(),
            });
          }
        });

        setCards(parsedCards);
        setHeadings(parsedHeadings);
      } catch (error) {
        console.error('Error fetching markdown file:', error);
      }
    };

    fetchMarkdown();
  }, [fileName]);

  return (
    <div>
      {/* Render headings */}
      {headings.map((heading, index) => (
        <h4 key={`heading-${index}`} id={`heading-${index}`}>{heading}</h4>
      ))}

      {/* Render cards */}
      {cards.map((card, index) => (
        <Card key={`card-${index}`} word={card.word} description={card.description} />
      ))}
    </div>
  );
};

const styles = {
  card: {
    width: '50vw',
    padding: '20px',
    borderRadius: '10px',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: '#eaeaea',
    backgroundColor: '#fff',
    fontFamily: '"Inter", sans-serif',
    color: '#000',
    margin: '20px auto',
  },
  word: {
    fontSize: '14px',
    fontFamily: 'JetBrains Mono, monospace',
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: '0px',
    color: '#222',
    marginBottom: '10px',
    marginTop: '0px',
  },
  description: {
    fontSize: '14px',
    color: '#777',
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
};

export default MarkdownCards;
