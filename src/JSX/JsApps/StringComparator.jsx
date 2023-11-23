import React, { useState } from 'react';

const StringComparator = () => {
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
      <textarea
        placeholder="Enter string 1"
        value={string1}
        onChange={(e) => setString1(e.target.value)}
      />
      <textarea
        placeholder="Enter string 2"
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

export default StringComparator;
