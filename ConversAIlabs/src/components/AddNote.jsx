import { useState } from "react";
import { saveNotes, getNotes } from "../utils/storage";

const AddNote = ({ onSave }) => {
  const [title, setTitle] = useState(""); // use useState hook because whenever the value of the input changes, than the value of title changes
  const [content, setContent] = useState(""); // use useState hook because whenever the value of the input changes, than the value of content changes

  const [saving, setSaving] = useState(false); // use this to handle the button ui part, it will set to true when you submit the form and the content in the button tag changes

  // using handleSubmit arrow function here to save notes in localstorage by calling utility functions.
  const handleSubmit = (e) => {
    e.preventDefault(); // preventing the default submitting behaviour of the form
    setSaving(true); // setting saving to true to change the button content to - saving...

    //   using try, catch and finally to try to save the note into the local storage, if it is fails to save than execution goes to the catch block and at the end(either try/catch) the finally block executes
    try {
      const newNote = { title, content }; // storing the title and content in the object
      const existingNotes = getNotes(); // fetching existing notes from the localstorage by calling utility func
      const updatedNotes = [newNote, ...existingNotes]; // updating the notes by adding newNotes and existingNotes in an array to save them in localStorage
      saveNotes(updatedNotes); // saving the updated notes in the localStorage by calling utility func
      onSave(); // calling the refresh func which i created on the App.jsx to trigger a re-render by setting the view = list
      setTitle(""); // clearing the value of title
      setContent(""); // clearing the value of content
    } catch (error) {
      console.log(error); // logging error in the console for now, can handle error also by doing ui changes
    } finally {
      setSaving(false); // finally setting the saving to false to change the content of the button
    }
  };
  return (
    <section className="mx-auto max-w-xl p-4">
      <h2 className="mb-4 text-center text-2xl font-bold">Add Note</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="write your title here..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded border p-2"
        />

        <textarea
          type="text"
          placeholder="write your content here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full rounded border p-2"
        />
        <div className="flex justify-center">
          <button
            type="submit"
            className="rounded bg-purple-500 px-4 py-2 text-white hover:bg-purple-600 cursor-pointer"
            disabled={saving}
          >
            {saving ? "Saving..." : "Add Note"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddNote;
