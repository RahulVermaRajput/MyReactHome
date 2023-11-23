import React, { useState } from 'react';
import { diffLines } from 'diff';

const StringComparatorDiff = () => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');

  const compareStrings = () => {
    const lines1 = text1.split('\n');
    const lines2 = text2.split('\n');

    const diff = diffLines(lines1.join('\n'), lines2.join('\n'));

    return diff.map((part, index) => {
      const style = {
        backgroundColor: part.added ? 'lightgreen' : part.removed ? 'lightcoral' : 'white',
      };

      return (
        <span key={index} style={style}>
          {part.value}
        </span>
      );
    });
  };

  return (
    <div>
      <textarea
        value={text1}
        onChange={(e) => setText1(e.target.value)}
        placeholder="Enter text 1 here..."
      />
      <textarea
        value={text2}
        onChange={(e) => setText2(e.target.value)}
        placeholder="Enter text 2 here..."
      />
      <div>
        <h2>Comparison Result:</h2>
        <div>{compareStrings()}</div>
      </div>
    </div>
  );
};

export default StringComparatorDiff;
