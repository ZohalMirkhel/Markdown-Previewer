import React from 'react';
import { marked } from 'marked';

marked.setOptions({
  breaks: true,
});

function Previewer({ markdown }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg border border-gray-200 overflow-y-auto max-h-[80vh]">
    <div
      id="preview"
      className="preview-container p-4 border rounded-md bg-white shadow-sm"
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