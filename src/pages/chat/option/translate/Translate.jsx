"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
const TextTranslationClient =
  require("@azure-rest/ai-translation-text").default;
const apiKey = "82765534d6a742b498a9438ce2da831f";
const endpoint = "https://api.cognitive.microsofttranslator.com/";
const region = "southeastasia";

// Or of course

export default function Translate({ ontranslate, clearTranslationInput }) {
  const [expanded, setExpanded] = useState(true);
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  async function translateText(text) {
    const translateCredential = {
      key: apiKey,
      region,
    };
    const translationClient = new TextTranslationClient(
      endpoint,
      translateCredential
    );

    try {
      const translateResponse = await translationClient
        .path("/translate")
        .post({
          body: [{ text }],
          queryParameters: {
            to: "en",
            from: "si",
          },
        });

      const translations = translateResponse.body;
      if (translations.length > 0) {
        const translatedText = translations[0]?.translations[0]?.text;
        setTranslatedText(translatedText);
        ontranslate(translatedText); // Pass the translated text to the parent component
      }
    } catch (error) {
      console.error("Translation error:", error);
    }
  }

  useEffect(() => {
    translateText(inputText);
  }, [inputText]);
  return (
    <div className="translate">
      <div
        className={`form  absolute transition-all duration-500 flex justify-between -left-5  -z-50 bg-[#10151d] h-20 w-full ${
          expanded ? "-top-16" : "top-0"
        }`}
      >
        <Image
          src="/images/icon/downArrow.svg"
          width={30}
          height={30}
          onClick={() => setExpanded(!expanded)}
          alt="svg icon"
          className={`mb-10  bg-[#10151d] rounded-lg -top-7 w-14 ml-1  -mr-14 animate-pulse relative ${
            !expanded ? "rotate-180" : ""
          }`}
        />
        <Image
          src="/images/icon/translate.svg"
          width={30}
          height={30}
          alt="svg icon"
          className={`mb-6 ml-5 max-md:ml-7 relative ${
            !expanded ? "hidden" : ""
          }`}
        />
        <input
          type="text"
          value={clearTranslationInput ? "" : inputText}
          onChange={(e) => setInputText(e.target.value)}
          className={`chat-input bg-[#10151d] mr-5 ml-5 !w-full h-14  !border-green-500 ${
            !expanded ? "!hidden" : ""
          }`}
        />
      </div>
    </div>
  );
}
