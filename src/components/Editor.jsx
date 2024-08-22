import React from 'react';

function Editor({ markdown, onMarkdownChange }) {
  const handleChange = (e) => {
    onMarkdownChange(e.target.value);
  };

  return (
    <div className="editor-container">
      <textarea
        id="editor"
        className="w-full h-64 p-4 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={markdown}
        onChange={handleChange}
      />
    </div>
  );
}

export default Editor;
