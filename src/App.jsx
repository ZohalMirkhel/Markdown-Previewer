import React, { useState } from 'react';
import Editor from './components/Editor';
import Previewer from './components/Previewer';

const initialMarkdown = `# Zohal Mirkhel

## Markdown Previewer

Welcome to my Markdown Previewer! Here, you can write Markdown and see the live preview of how it will render.

[Click here to visit my GitHub Repository](https://github.com/ZohalMirkhel/markdown-previewer/tree/markdown-previewer)

\`inline code\`

\`\`\`
function exampleFunction() {
  console.log("This is a code block");
}
\`\`\`

- List item 1
- List item 2
- List item 3

> This is a blockquote. It is used to highlight quotes.

![Coding Image](https://markdownlivepreview.com/image/sample.webp)

**This text is bold.**

`;

function App() {
  
  const [markdown, setMarkdown] = useState(initialMarkdown);

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
