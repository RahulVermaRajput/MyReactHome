import React, { useState } from 'react';
import * as Prettier from 'prettier/standalone';
import parserBabel from 'prettier/parser-babel';

const TextPrettifier = () => {
  const [text, setText] = useState('');
  const [formattedText, setFormattedText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const formatTextareaContent = () => {
    try {
      const formattedContent = Prettier.format(text, {
        parser: 'babel',
        plugins: [parserBabel],
      });
      setFormattedText(formattedContent);
    } catch (error) {
      console.error('Error while formatting content:', error);
    }
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Enter your code here..."
        rows={10}
        cols={50}
      />
      <br />
      <button onClick={formatTextareaContent}>Format Text</button>
      <br />
      <h3>Formatted Text:</h3>
      <pre>{formattedText}</pre>
    </div>
  );
};

export default TextPrettifier;
