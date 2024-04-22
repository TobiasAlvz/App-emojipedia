import React from "react";
import CreatEmoji from "./CreatEmoji";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

function App() {
  return (
    <div>
      <Entry />
      <dl className="dictionary">{emojipedia.map(CreatEmoji)}</dl>
    </div>
  );
}

export default App;
