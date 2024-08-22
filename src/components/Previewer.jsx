import React from 'react';
import { marked } from 'marked';

marked.setOptions({
  breaks: true,
});

function Previewer({ markdown }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg border-2 border-indigo-500 overflow-y-auto max-h-[80vh]">
    <div
      id="preview"
      className="preview-container p-4 border rounded-md bg-gray-800 shadow-sm"
      style={{
        wordWrap: 'break-word',
        whiteSpace: 'pre-wrap',
      }}
      dangerouslySetInnerHTML={{ __html: marked(markdown) }}
    />
    </div>
  );
}

export default Previewer;