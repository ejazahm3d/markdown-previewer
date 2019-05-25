import React, { Component } from "react";
import Editor from "./Editor";
import Preview from "./Preview";

class App extends Component {
  state = {
    previewer: "",
    editor:
      "# Markdown Text goes here\n## You can also make subheadings\n\nOne of the **trickiest** parts of getting this project to work was learning how to use `dangerouslySetInnerHTML` to make the previewer display the output of [marked.js](https://github.com/markedjs/marked/blob/master/README.md) as HTML instead of a string.\n\nAccording to the React Documentation,\n> dangerouslySetInnerHTML is React’s replacement for using innerHTML in the browser DOM. In general, setting HTML from code is risky because it’s easy to inadvertently expose your users to a cross-site scripting (XSS) attack.\n\nExample Code:\n```\nSome Code Here```\n\nJust remember to:\n- Search, Read, Ask\n- Ask for help on the Forum (that's what worked for me.)\n\n![React Logo w/ Text](https://goo.gl/Umyytc)"
  };

  componentDidMount() {
    const script = document.createElement("script");

    script.src =
      "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
    script.async = true;

    document.body.appendChild(script);
  }
  onTextChange = e => {
    this.setState({ previewer: e.target.value });
  };
  render() {
    return (
      <div className="App container-fluid">
        <Editor
          onTextChange={this.onTextChange}
          initialMarkdown={this.state.editor}
        />
        <Preview text={this.state.previewer} />
      </div>
    );
  }
}

export default App;
