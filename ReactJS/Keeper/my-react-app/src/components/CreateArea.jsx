import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });
  const [isExpanded, setIsExpanded] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));

    console.log(name); // Log name for debugging
  }

  function submitNote(event) {
    event.preventDefault();
    props.onAdd(note);
    setNote({ title: "", content: "" });
    setIsExpanded(false); // Collapse form after submitting
  }

  function expand() {
    setIsExpanded(true);
  }

  return (
    <div>
      <form>
        {isExpanded && (
          <input
            onChange={handleChange}
            name="title"
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea
          onClick={expand}
          onChange={handleChange}
          name="content"
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom className="zoom" in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
