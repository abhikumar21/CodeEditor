import Image from "next/image";
import './globals.css'
// import Hello from "./hello";
import CodeEditor from "./editorComp/CodeEditor";


export default function Home() {
  return (
    <>
    <div className="home">
      <div className="option-bar bg-violet-200 h-12 flex items-center justify-between"
      style={{position: "sticky", top: "0px", left: "0px", zIndex: 100}}
      >
        <div className="files flex h-full">
          <div className="html h-full w-[120px] flex justify-center items-center">index.html</div>
          <div className="css h-full w-[120px] flex justify-center items-center">style.css</div>
          <div className="js h-full w-[120px] flex justify-center items-center">script.js</div>
        </div>
        <div className="buttons mr-5 gap-4 flex">
          <button className="dropdown">HTML</button>
          <button className="run">RUN</button>
        </div>
      </div>

      <CodeEditor/>

        {[...Array(100)].map((_, index) => (
          <div key={index}>This is div #{index + 1}</div>
        ))}
    </div>
      </>
  );
}
