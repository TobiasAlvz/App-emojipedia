import React from "react";
import EmojiTerm from "./EmojiTerm";

function CreatEmoji(emojipedia) {
  return (
    <EmojiTerm
      key={emojipedia.id}
      emoji={emojipedia.emoji}
      name={emojipedia.name}
      meaning={emojipedia.meaning}
    />
  );
}

export default CreatEmoji;
