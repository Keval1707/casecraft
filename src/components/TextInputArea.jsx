import React from 'react';

const TextInputArea = ({ text, setText }) => {
  return (
    <div>
      <textarea
        rows="6"
        cols="60"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your text here..."
      />
    </div>
  );
};

export default TextInputArea;
