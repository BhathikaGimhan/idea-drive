// app/chat/option/assignment/Doc/page.jsx

"use client";
import React, { useState } from "react";

export default function Page() {
  const [convertedDoc, setConvertedDoc] = useState(null);

  const handleConvert = async () => {
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Doc</title>
        </head>
        <body>
          <h1>Converted to DOC</h1>
        </body>
      </html>
    `; // Replace with your HTML content

    const response = await fetch("http://localhost:3000/api/convert", {
      // Updated API route
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ html: htmlContent }),
    });

    if (response.ok) {
      const blob = await response.blob();
      setConvertedDoc(blob);
    } else {
      console.error("Conversion failed");
    }
  };

  return (
    <div>
      <button onClick={handleConvert}>Convert to DOC</button>
      {convertedDoc && (
        <a href={URL.createObjectURL(convertedDoc)} download="document.docx">
          Download DOC
        </a>
      )}
    </div>
  );
}
