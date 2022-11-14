import React, { useState, useEffect } from "react";

import ListItem from "../components/ListItem";

const NotesListPage = () => {
  const [notes, setNotes] = useState([]);

  const getNotes = async () => {
    let response = await fetch("/api/notes/");
    let data = await response.json();
    setNotes(data);
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div className="notes">
      <div className="notes-header">
        <h2
          className="notes-title"
          style={{ marginTop: "20px", color: "black" }}
        >
          &#9782; Notes
        </h2>
        <p className="notes-count">{notes.length}</p>
      </div>
      <div
        className="notes-list"
        style={{ overflow: "scroll", height: "420px" }}
      >
        {notes.map((note, index) => (
          <ListItem key={index} note={note} />
        ))}
      </div>
    </div>
  );
};

export default NotesListPage;
