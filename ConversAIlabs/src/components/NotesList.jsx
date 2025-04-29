import { useState, useEffect } from "react";
import { getNotes } from "../utils/storage";

const NotesList = () => {
  const [notes, setNotes] = useState([]);

  // this react hook triggers when the component mounts
  useEffect(() => {
    try {
      const stored = getNotes(); // fetching the notes from localStorage
      setNotes(stored); // setting the notes array by adding storednotes in the localStorage
    } catch (error) {
      console.log(error); // logging error in the console for now
    }
  }, []);

  return (
    <div className="mx-auto max-w-xl p-4">
      <h2 className="mb-4 text-center text-2xl font-bold">Notes</h2>
      <ul className="space-y-2">
        {notes.map((note, index) => (
          <li key={index} className="rounded border p-3 shadow">
            <h3 className="font-semibold">{note.title}</h3>
            <p className="text-sm text-gray-400">{note.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default NotesList;
