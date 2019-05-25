import React from "react";
import marked from "marked";

const Preview = ({ text }) => {
  const getMarkdownText = () => {
    let rawMarkup = marked(text, { sanitize: true });
    return { __html: rawMarkup };
  };
  return (
    <div>
      <h5>Previewer</h5>
      <div id="preview" dangerouslySetInnerHTML={getMarkdownText()} />
    </div>
  );
};

export default Preview;
