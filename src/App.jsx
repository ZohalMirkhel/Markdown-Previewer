import React, { useState } from 'react';
import Editor from './components/Editor';
import Previewer from './components/Previewer';

function App() {
  
  const [markdown, setMarkdown] = useState(`# Markdown Previewer\n\nType some *Markdown* here!`);

  const handleMarkdownChange = (newMarkdown) => {
    setMarkdown(newMarkdown);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Markdown Previewer</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Editor markdown={markdown} onMarkdownChange={handleMarkdownChange} />
        <Previewer markdown={markdown} />
      </div>
    </div>
  );
}

export default App;
