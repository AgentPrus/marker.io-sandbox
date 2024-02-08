import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Editor } from "@tinymce/tinymce-react";
import { useMarkerio } from "./hooks/useMarker";

function App() {
  useMarkerio();

  const [value, setValue] = useState("");

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Editor
        onEditorChange={(value) => {
          setValue(value);
        }}
        value={value}
        apiKey={import.meta.env.VITE_TINY_MCE_API_KEY}
      />
    </>
  );
}

export default App;
