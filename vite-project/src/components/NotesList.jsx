import { useContext, useState } from "react";
import { NotesContext } from "../context/NotesContext";

const NotesList = () => {
  const { notes } = useContext(NotesContext);
  const [selected, setSelected] = useState(null);

  return (
    <ul>
      {notes.map((note, index) => (
        <li
          key={index}
          onClick={() => setSelected(index)}
          style={{
            cursor: "pointer",
            backgroundColor: selected === index ? "yellow" : "white",
            padding: "5px",
            margin: "5px",
          }}
        >
          {note}
        </li>
      ))}
    </ul>
  );
};

export default NotesList;