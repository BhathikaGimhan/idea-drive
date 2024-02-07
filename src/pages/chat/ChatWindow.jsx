"use client";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const formatMessage = (message, index) => {
  // Check if the message is a heading and format it as code
  if (message.role === "model") {
    return (
      <div key={index} className="py-5">
        <div className="w-10 absolute -mt-2 md:-ml-4 max-md:-ml-8 h-10 bg-green-600 font-bold rounded-full flex justify-center items-center">
          QT
        </div>{" "}
        <ReactMarkdown className="ai-chat" components={{ code: CodeBlock }}>
          {message.parts}
        </ReactMarkdown>
      </div>
    );
  } else {
    return (
      <div key={index} className="py-5">
        <div className="w-10 absolute -mt-2 md:-ml-4 max-md:-ml-8 h-10 bg-blue-600 font-bold rounded-full flex justify-center items-center">
          ME
        </div>
        <ReactMarkdown
          className="pl-10  max-md:pl-6"
          components={{ code: CodeBlock }}
        >
          {message.parts}
        </ReactMarkdown>
      </div>
    );
  }
};

const CodeBlock = ({ node, inline, className, children, ...props }) => {
  const match = /language-(\w+)/.exec(className || "");
  return !inline && match ? (
    <SyntaxHighlighter
      style={oneDark} // Change the style here
      language={match[1]}
      wrapLines={true} // Enable line wrapping
    >
      {String(children).replace(/\n$/, "")}
    </SyntaxHighlighter>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
};

const ChatWindow = ({ chatHistory }) => {
  return (
    <div className=" ">
      {chatHistory.map((message, index) => formatMessage(message, index))}
    </div>
  );
};

export default ChatWindow;
