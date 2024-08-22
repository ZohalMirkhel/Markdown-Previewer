import React from 'react';

function Editor({ markdown, setMarkdown }) {
  return (
    <textarea
      id="editor"
      className="w-full h-96 p-4 rounded-lg shadow-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
      value={markdown}
      onChange={(e) => setMarkdown(e.target.value)}
    />
  );
}

export default Editor;
