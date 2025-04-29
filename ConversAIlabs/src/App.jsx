import { useState } from "react";
import AddNote from "./components/AddNote";
import NotesList from "./components/NotesList";

const App = () => {
  const [view, setView] = useState("add"); // use this state to conditionally render the component
  const refresh = () => setView("list"); // sending this function as a prop so that whenever the user add a note, they can redirect to the list component to view notes.

  return (
    <div className="min-h-screen">
      <nav className="flex justify-center gap-4 p-4 shadow">
        {/* adding two buttons to switch between the component to view the selected component details */}
        <button
          className={`rounded px-4 py-2 ${view === "list" ? "cursor-not-allowed bg-purple-500 text-white" : "cursor-pointer bg-purple-200 text-black"}`}
          onClick={() => setView("list")} //setting the view to list to render <NoteList/> component later
        >
          View Notes
        </button>
        <button
          className={`rounded px-4 py-2 ${view === "add" ? "cursor-not-allowed bg-purple-500 text-white" : "cursor-pointer bg-purple-200 text-black"}`}
          onClick={() => setView("add")} //setting the view to list to render <AddNote/> component later
        >
          Add Note
        </button>
      </nav>
      {view === "add" ? <AddNote onSave={refresh} /> : <NotesList />}{" "}
      {/* conditionally rendering the component based on the view value which is changed during clicking the specific button */}
    </div>
  );
};
export default App;
