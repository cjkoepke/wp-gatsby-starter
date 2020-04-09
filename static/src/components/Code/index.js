import React from "react"
import { LightAsync as Syntax } from "react-syntax-highlighter"
import dark from "react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark"
import javascript from "react-syntax-highlighter/dist/cjs/languages/hljs/javascript"
import scss from "react-syntax-highlighter/dist/cjs/languages/hljs/scss"
import bash from "react-syntax-highlighter/dist/cjs/languages/hljs/bash"
import php from "react-syntax-highlighter/dist/cjs/languages/hljs/php"
import text from "react-syntax-highlighter/dist/cjs/languages/hljs/plaintext"
import "./styles.css"

Syntax.registerLanguage("javascript", javascript)
Syntax.registerLanguage("scss", scss)
Syntax.registerLanguage("bash", bash)
Syntax.registerLanguage("php", php)
Syntax.registerLanguage("plaintext", text)

export default ({ nonNullContent: content, className: language }) => {
  const allowedLanguages = ["javascript", "scss", "bash", "php"]
  return (
    <Syntax
      className={`code-block`}
      language={allowedLanguages.includes(language) ? language : "plaintext"}
      style={dark}
      showLineNumbers={true}
    >
      {content}
    </Syntax>
  )
}
