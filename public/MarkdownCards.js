import React, { useEffect, useState } from 'react';

// Card Component
const Card = ({ word, description }) => (
  <div style={styles.card}>
    {/* Image
  {image && <img src={image} alt="Card Visual" style={styles.image} />} */}

    {/* Two Parts: Word and Definition */}
    <div style={styles.content}>
      <div style={styles.wordSection}>
        <h2 style={styles.word}>&nbsp;{word}</h2>
      </div>
    </div>

    {/* Description */}
    <p style={styles.description}>{description}</p>
  </div>
);

const MarkdownCards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Load and process the Markdown file
    const fetchMarkdown = async () => {
      const response = await fetch('../philoscards.md'); // Replace with your Markdown file path
      const text = await response.text();

      // Split by blank lines and group into pairs
      const lines = text.trim().split('\n\n');
      const parsedCards = lines.map((block) => {
        const [word, ...descriptionParts] = block.split('\n');
        return {
          word: word.trim(),
          description: descriptionParts.join(' ').trim(),
        };
      });

      setCards(parsedCards);
    };

    fetchMarkdown();
  }, []);

  return (
    <div>
      {cards.map((card, index) => (
        <Card key={index} word={card.word} description={card.description} />
      ))}
    </div>
  );
};


const styles = {
  card: {
    width: '300px',
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
    padding: '2px 4px',
    backgroundColor: '#f7f8fa',
    borderRadius: '4px',
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
  image: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '12px',
    marginBottom: '15px',
  },
};



export default MarkdownCards;
