import React from "react";
import { Link } from "react-router-dom";

let getTime = (note) => {
  return new Date(note.updated).toLocaleDateString();
};

const ListItem = ({ note }) => {
  return (
    <Link to={`/note/${note.id}`}>
      <div className="notes-list-item">
        <h3>{note.body}</h3>
        <p>
          <span style={{ color: "black" }}>{getTime(note)}</span>
        </p>
      </div>
    </Link>
  );
};

export default ListItem;
