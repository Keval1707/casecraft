import React from 'react';

const StatsBar = ({ text }) => {
  const charCount = text.length;
  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;

  return (
    <div>
      <p>Characters: {charCount} | Words: {wordCount}</p>
    </div>
  );
};

export default StatsBar;
