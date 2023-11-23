import React, { useState } from 'react';
import "../../CSS/jsapps.css";

const TextComparator = () => {
  const [string1, setString1] = useState('');
  const [string2, setString2] = useState('');
  const [differences, setDifferences] = useState([]);

  const findDifferences = () => {
    const maxLength = Math.max(string1.length, string2.length);
    const diffArray = [];
    for (let i = 0; i < maxLength; i++) {
      if (string1[i] !== string2[i]) {
        diffArray.push(i);
      }
    }
    setDifferences(diffArray);
  };

  const renderHighlightedText = (text, differences) => {
    return text.split('').map((char, index) => {
      const isDifferent = differences.includes(index);
      return (
        <span key={index} style={{ backgroundColor: isDifferent ? 'red' : 'transparent' }}>
          {char}
        </span>
      );
    });
  };

  return (
    <div>
        <h1>String Comprator</h1>
        <hr/>
<TextAreaExample/>
<hr/>

      <textarea className="string-compare-text"
        placeholder="Enter string 1" wrap='off'
        value={string1}
        onChange={(e) => setString1(e.target.value)}
      />
      <textarea className="string-compare-text"
        placeholder="Enter string 2" wrap='off'
        value={string2}
        onChange={(e) => setString2(e.target.value)}
      />
      <button onClick={findDifferences}>Find Differences</button>
      <div>
        <p>Differences:</p>
        <div>
          {renderHighlightedText(string1, differences)}
        </div>
        <div>
          {renderHighlightedText(string2, differences)}
        </div>
      </div>
    </div>
  );
};

const TextAreaExample = () => {
  const [inputText, setInputText] = useState('');
  const [displayedText, setDisplayedText] = useState([]);

  const handleChange = (event) => {
    const newText = event.target.value;
    setInputText(newText);

    // Split the text into lines and update the displayedText state
    const lines = newText.split('\n');
    setDisplayedText(lines);
  };

  return (
    <div>
      <textarea
        value={inputText}
        onChange={handleChange}
        placeholder="Enter text here..."
      />
      <div>
        <h2>Displayed Text:</h2>
        <div>
          {/* Map through the lines of text and display them in separate div elements */}
          {displayedText.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TextComparator;
