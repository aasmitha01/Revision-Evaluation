import { useState, useContext, useRef, useEffect } from "react";
import { NotesContext } from "../context/NotesContext";

const NotesInput = () => {
  const [note, setNote] = useState("");
  const { addNote } = useContext(NotesContext);
  const inputRef = useRef();

  // Focus input when page loads
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleAdd = () => {
    if (note.trim() === "") return;

    addNote(note);
    setNote("");
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter note..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <button onClick={handleAdd}>Add Note</button>
    </div>
  );
};

export default NotesInput;