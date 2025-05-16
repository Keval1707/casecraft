import React from 'react';

const OutputArea = ({ output }) => {
  return (
    <div>
      <h3>Transformed Text:</h3>
      <textarea readOnly rows="6" cols="60" value={output}></textarea>
    </div>
  );
};

export default OutputArea;
