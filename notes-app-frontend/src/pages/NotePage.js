import React, { useState, useEffect } from "react";

import { Link, useParams, useNavigate } from "react-router-dom";
import { Icon } from "semantic-ui-react";

const NotePage = () => {
  let params = useParams();
  let navigate = useNavigate();

  const [note, setNote] = useState(null);

  const getNote = async () => {
    if (params.id === "add") {
      return;
    }
    let response = await fetch(`/api/notes/${params.id}/`);
    let data = await response.json();
    setNote(data);
  };

  useEffect(() => {
    getNote();
  },[]);

  const addNote = async () => {
    fetch(`/api/notes/add/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };

  const updateNote = async () => {
    fetch(`/api/notes/${params.id}/update/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };

  const deleteNote = async () => {
    fetch(`/api/notes/${params.id}/delete/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    navigate("/");
  };

  const handleSubmit = () => {
    if (params.id !== "add" && note.body === "") {
      deleteNote();
    } else if (params.id !== "add") {
      updateNote();
    } else if (params.id === "add") {
      addNote();
    }
    navigate("/");
  };

  return (
    <div className="note">
      <div className="note-header">
        <Link to="/">
          <Icon.Group size="big" style={{ color: "blue" }}>
            <Icon name="angle left" />
          </Icon.Group>
        </Link>

        {params.id !== "add" ? (
          <div>
            <Icon.Group
              size="big"
              style={{ color: "purple", marginRight: "10px" }}
            >
              <Icon name="edit" onClick={handleSubmit} />
            </Icon.Group>
            <Icon.Group size="big" style={{ color: "red" }}>
              <Icon name="delete" onClick={deleteNote} />
            </Icon.Group>
          </div>
        ) : (
          <div className="note-header" style={{ fontSize: "15px" }}>
            <button onClick={handleSubmit}>Done</button>
          </div>
        )}
      </div>

      <textarea
        onChange={(e) => {
          setNote({ ...note, body: e.target.value });
        }}
        value={note?.body}
      ></textarea>
    </div>
  );
};

export default NotePage;
