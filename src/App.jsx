import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Editor from './components/Editor';
import Previewer from './components/Previewer';
import Footer from './components/Footer';

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white flex flex-col">
      <Navbar />
      <div className="container mx-auto py-10 px-4 flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/2">
          <h2 className="text-xl mb-4 font-semibold">Editor</h2>
          <Editor markdown={markdown} setMarkdown={setMarkdown} />
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="text-xl mb-4 font-semibold">Previewer</h2>
          <Previewer markdown={markdown} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
