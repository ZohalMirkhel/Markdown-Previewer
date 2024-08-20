import React, { useState } from "react";
import { marked } from "marked";

function App() {
  const [markdown, setMarkdown] = useState(`# Markdown Previewer\n\nType some *Markdown* here!`);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Markdown Previewer</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="editor-container">
          <textarea
            id="editor"
            className="w-full h-64 p-4 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={markdown}
            onChange={handleChange}
          />
        </div>
        <div
          id="preview"
          className="preview-container p-4 border rounded-md bg-white shadow-sm"
          dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        />
      </div>
    </div>
  );
}

export default App;