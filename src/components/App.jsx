import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map( note => (
        <Card 
          key={note.key}
          title={note.title}
          content={note.content}
        /> 
      ))
      }
      <Footer />
    </div>
  );
}

export default App;
