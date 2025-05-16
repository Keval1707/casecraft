import React, { useState } from "react";
import TextInputArea from "../components/TextInputArea";
import CaseOptionBar from "../components/CaseOptionBar";
import OutputArea from "../components/OutputArea";
import StatsBar from "../components/StatsBar";
import CopyButton from "../components/CopyButton";
import ClearButton from "../components/ClearButton";
import ThemeToggle from "../components/ThemeToggle";
import { convertText } from "../utils/caseConverters";
import FileActions from "../components/FileActions";  

const HomePage = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  const handleCaseChange = (type) => {
    const result = convertText(inputText, type);
    setOutputText(result);
  };

  const clearAll = () => {
    setInputText("");
    setOutputText("");
  };

  return (
    <div className="container">
      <ThemeToggle />
      <h1>CaseCraft - Text Case Converter</h1>
      <TextInputArea text={inputText} setText={setInputText} />
      <CaseOptionBar onCaseChange={handleCaseChange} />
      <OutputArea output={outputText} />

      <div className="action-buttons">
        <CopyButton text={outputText} />
        <ClearButton onClear={clearAll} />
      </div>
      <FileActions setText={setInputText} outputText={outputText} />
      <StatsBar text={inputText} />
    </div>
  );
};

export default HomePage;
