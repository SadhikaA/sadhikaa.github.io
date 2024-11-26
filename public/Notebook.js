import React, { useState } from "react";

const BookZettelkasten = ({ bookTitle, zettelkastenTitle, zettelkastenContent, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const styles = {
    container: {
      position: "relative",
      width: "300px",
      height: isOpen ? "auto" : "400px",
      margin: "40px auto",
      perspective: "1000px",
    },
    book: {
      position: "relative",
      width: "100%",
      height: "100%",
      transformStyle: "preserve-3d",
      transition: "transform 1s",
      transform: isOpen ? "rotateY(-120deg)" : "rotateY(0deg)",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
      borderRadius: "8px",
    },
    cover: {
      position: "absolute",
      width: "100%",
      height: "100%",
      backgroundColor: "#444",
      color: "#fff",
      textAlign: "center",
      fontSize: "24px",
      fontWeight: "bold",
      lineHeight: "400px",
      backfaceVisibility: "hidden",
      borderRadius: "8px",
    },
    zettelkasten: {
      marginTop: "20px",
      width: "100%",
      padding: "20px",
      border: "2px solid #ddd",
      borderRadius: "8px",
      backgroundColor: "#f7f7f7",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      fontFamily: "'Arial', sans-serif",
      color: "#333",
    },
    zettelkastenTitle: {
      fontSize: "20px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    zettelkastenContent: {
      fontSize: "14px",
      lineHeight: "1.6",
      marginBottom: "20px",
    },
    zettelkastenLinks: {
      fontSize: "14px",
      color: "#007bff",
      cursor: "pointer",
    },
    button: {
      display: "block",
      margin: "20px auto",
      padding: "10px 20px",
      backgroundColor: "#444",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "16px",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.container}>
      {/* Book Cover */}
      <div style={styles.book}>
        <div style={styles.cover} onClick={() => setIsOpen(!isOpen)}>
          {bookTitle}
        </div>
      </div>

      {/* Zettelkasten Page */}
      {isOpen && (
        <div style={styles.zettelkasten}>
          <div style={styles.zettelkastenTitle}>{zettelkastenTitle}</div>
          <div style={styles.zettelkastenContent}>{zettelkastenContent}</div>
          <div>
            <strong>Related Links:</strong>
            {links.map((link, index) => (
              <div
                key={index}
                style={styles.zettelkastenLinks}
                onClick={() => alert(`Navigate to: ${link}`)}
              >
                {link}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button style={styles.button} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close Book" : "Open Book"}
      </button>
    </div>
  );
};

export default BookZettelkasten;
