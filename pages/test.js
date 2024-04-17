import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import styles from '../components/markdown.module.css';

function MarkdownEditor() {
  const [markdown, setMarkdown] = useState('');
  const [showMarkdown, setShowMarkdown] = useState(true);
  const [savedMarkdown, setSavedMarkdown] = useState('');
  const [savedRawMarkdown, setSavedRawMarkdown] = useState('');

  useEffect(() => {
    const savedContent = localStorage.getItem('savedMarkdown');
    const savedRawContent = localStorage.getItem('savedRawMarkdown');
    if (savedContent && savedRawContent) {
      setSavedMarkdown(savedContent);
      setSavedRawMarkdown(savedRawContent);
    }
  }, []); // Load saved content on component mount

  const handleToggle = () => {
    setShowMarkdown(!showMarkdown);
  };

  const handleSaveMarkdown = () => {
    setSavedMarkdown(markdown);
    setSavedRawMarkdown(markdown);
    localStorage.setItem('savedMarkdown', markdown); // Save content to localStorage
    localStorage.setItem('savedRawMarkdown', markdown); // Save raw content to localStorage
  };

  const handleInputChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div className={styles.container}>
      <div>
        <button onClick={handleToggle} className={styles.toggle}>
          {showMarkdown ? '📝' : '📓'}
        </button>
        <button onClick={handleSaveMarkdown} className={styles.save}>Save</button>
      </div>
      {showMarkdown ? (
        <textarea className={styles.textarea}
          value={markdown}
          onChange={handleInputChange}
          placeholder="start typing..."
          style={{ width: '100%', height: '300px'}}
        />
      ) : (
        <div style={{ marginTop: '10px' }}>
          <ReactMarkdown>{savedMarkdown}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}

export default MarkdownEditor;
