import { FiUpload, FiDownload } from 'react-icons/fi';
import React, { useState } from 'react';

const FileActions = ({ setText, outputText }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleFileUpload = (file) => {
    if (file && file.type === 'text/plain') {
      const reader = new FileReader();
      reader.onload = (event) => {
        setText(event.target.result);
      };
      reader.readAsText(file);
    } else {
      alert('Please upload a valid .txt file');
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleFileUpload(file);
  };

  const handleExport = () => {
    const blob = new Blob([outputText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = 'converted-text.txt';
    link.href = url;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="file-actions">
      <div
        className={`drop-zone ${isDragging ? 'dragging' : ''}`}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
      >
        <p>Drag & drop a .txt file here or</p>
        <label>
          <input
            type="file"
            accept=".txt"
            onChange={(e) => handleFileUpload(e.target.files[0])}
            style={{ display: 'none' }}
            id="upload-file"
          />
          <button type="button" onClick={() => document.getElementById('upload-file').click()}>
            <FiUpload className="icon" /> Upload .txt
          </button>
        </label>
      </div>

      <button onClick={handleExport} disabled={!outputText}>
        <FiDownload className="icon" /> Export as .txt
      </button>
    </div>
  );
};

export default FileActions;
