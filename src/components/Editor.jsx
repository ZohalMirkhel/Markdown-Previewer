import React from 'react';

function Editor({ markdown, setMarkdown }) {
  return (
    <div className="relative w-full h-96">
    <textarea
      id="editor"
      className="w-full h-96 p-4 rounded-lg shadow-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 resize"
      value={markdown}
      onChange={(e) => setMarkdown(e.target.value)}
    />
    </div>
  );
}

export default Editor;
