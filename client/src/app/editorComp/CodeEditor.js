"use client"; // Add this to mark it as a Client Component

import SplitPane from "react-split-pane"; // Import normally
import './CodeEditor.css'
import { Controlled as ControlledEditor } from "react-codemirror2";
import "codemirror/lib/codemirror.css"; // Core styles
import "codemirror/theme/material.css"; // Theme
import "codemirror/mode/xml/xml"; // XML mode
import { useState } from "react";
// import "codemirror/mode/javascript/javascript"; // JavaScript mode



const CodeEditor = () => {
  
  const [htmlValue, setHtmlValue] = useState("");
  const handleChange = (editor, data, value) => {
    setHtmlValue(value);
  };
  

  return (
    <div className="relative">
      <div className="component flex overflow-hidden h-[625px]">
      <SplitPane split="vertical" minSize={10} defaultSize={750} className="bg-red-400" style={{height: "100%"}}>
        <div className="split-screen w-full textArea bg-blue-500 h-full">
          <ControlledEditor
            onBeforeChange={handleChange}
            value = {htmlValue}
            className="code-mirror-wrapper"
            options={{
              lineWrapping: true,
              lint: true,
              mode: 'xml',
              theme: "material", //"" for white
              lineNumbers: true,
            }}
          />
        </div>
        <div className="split-screen w-full overflow-y-scroll h-full">
          <div className="content h-auto">
                  {/* {[...Array(100)].map((_, index) => (
                      <div key={index}>This is div #{index + 1}</div>
                    ))} */}
          </div>
        </div>
      </SplitPane>
      </div>
    </div>
  )
}

export default CodeEditor
