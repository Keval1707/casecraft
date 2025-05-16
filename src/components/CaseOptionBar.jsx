const CaseOptionBar = ({ onCaseChange }) => {
  const options = [
    { type: 'upper', label: 'UPPERCASE' },
    { type: 'lower', label: 'lowercase' },
    { type: 'capitalize', label: 'Capitalize First' },
    { type: 'title', label: 'Title Case' },
    { type: 'alternate', label: 'aLtErNaTiNg' },
    { type: 'sentence', label: 'Sentence case' },
    { type: 'inverse', label: 'Inverse Case' },
  ];

  return (
    <div className="case-buttons">
      {options.map(opt => (
        <button key={opt.type} onClick={() => onCaseChange(opt.type)}>
          {opt.label}
        </button>
      ))}
    </div>
  );
};

export default CaseOptionBar;