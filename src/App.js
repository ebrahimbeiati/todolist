import React, { useState } from "react";
import Header from "./components/Header";
import "./styles.css";
import CreateArea from "./components/CreateArea";
import Footer from "./components/Footer";
import Note from "./components/Note";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  function deleteNote(index) {
    setNotes((prevNotes) => prevNotes.filter((_, i) => i !== index));
  }

  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => (
        <Note
          key={index}
          id={index} // Pass the id of the note
          title={noteItem.title}
          content={noteItem.content}
          onDelete={() => deleteNote(index)}
        />
      ))}
      <Footer /> {/* Moved the Footer component here */}
    </div>
  );
}

export default App;
