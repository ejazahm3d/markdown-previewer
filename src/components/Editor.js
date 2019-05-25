import React from "react";

const Editor = ({ onTextChange, initialMarkdown }) => {
  return (
    <div>
      Editor
      <div className="form-group">
        <textarea
          className="form-control"
          name="editor"
          id="editor"
          rows="10"
          onChange={e => onTextChange(e)}
          defaultValue={initialMarkdown}
        />
      </div>
    </div>
  );
};

export default Editor;
