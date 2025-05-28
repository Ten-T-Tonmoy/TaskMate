import React from "react";

import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

const MarkDown = ({ msg }) => {
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeHighlight]}
      components={{
        code: ({ node, inline, className, children, ...props }) => {
          return inline ? (
            <code
              className="bg-gray-800 text-white px-1 py-0.5 my-1 rounded text-sm"
              {...props}
            >
              {children}
            </code>
          ) : (
            <pre
              className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto"
              {...props}
            >
              {children}
            </pre>
          );
        },
        h1: ({ node, ...props }) => (
          <h1 className="text-3xl font-bold my-4 p-1" {...props} />
        ),
        h2: ({ node, ...props }) => (
          <h2 className="text-2xl font-semibold my-2" {...props} />
        ),
        p: ({ node, ...props }) => (
          <p className="text-base leading-7 my-2" {...props} />
        ),
        ul: ({ node, ...props }) => (
          <ul className="list-disc pl-6 my-2" {...props} />
        ),
        ol: ({ node, ...props }) => (
          <ol className="list-decimal pl-6 my-2" {...props} />
        ),
        li: ({ node, ...props }) => <li className="mb-1" {...props} />,

        blockquote: ({ node, ...props }) => (
          <blockquote
            className="border-l-4 border-gray-500 pl-4 italic text-gray-400"
            {...props}
          />
        ),
        a: ({ node, ...props }) => (
          <a
            className="text-blue-400 hover:underline"
            target="_blank"
            rel="noreferrer"
            {...props}
          />
        ),
      }}
    >
      {msg}
    </ReactMarkdown>
  );
};

export default MarkDown;
