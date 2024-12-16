import React, { useState } from "react";
import "./App.css";

const API_ENDPOINT = "http://localhost:7001/analyzeSentence"; // Update your API endpoint

function App() {
  const [sentence, setSentence] = useState("");
  const [analysis, setAnalysis] = useState("");
  const [error, setError] = useState("");

  const analyzeSentence = async () => {
    setError("");
    setAnalysis("");

    if (!sentence.trim()) {
      setError("Please enter a sentence first.");
      return;
    }

    try {
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sentence }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch analysis");
      }

      const data = await response.json();
      setAnalysis(data.analysis || "No analysis available.");
    } catch (err) {
      console.error(err);
      setError("An error occurred while analyzing the sentence.");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Company priority</h1>

        {/* Sentence Input Form */}
        <div className="form-container">
          <label>Company goal:</label>
          <input
            type="text"
            placeholder="Type your company goal here..."
            value={sentence}
            onChange={(e) => setSentence(e.target.value)}
          />

          <button onClick={analyzeSentence}>Submit</button>
        </div>

        {/* Display Results */}
        {error && <p className="error-text">{error}</p>}
        {analysis && (
          <div className="result-container">
            <h3>Analysis Result:</h3>
            <p>{analysis}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;