import React from 'react';
import { marked } from 'marked';

marked.setOptions({
  breaks: true,
});

function Previewer({ markdown }) {
  return (
    <div
      id="preview"
      className="preview-container p-4 border rounded-md bg-white shadow-sm"
      style={{
        wordWrap: 'break-word',
        whiteSpace: 'pre-wrap',
      }}
      dangerouslySetInnerHTML={{ __html: marked(markdown) }}
    />
  );
}

export default Previewer;