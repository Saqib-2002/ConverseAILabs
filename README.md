# Hello ConversAILabs,

Just worked on the logic part and didn't focused on the UI much but it's pretty decent, and if you want me to work on the UI part than I can make the UI much better by using tailwind css, ui libraries, and even using framer motion or react suite.

Added the comment on most of the line of code and just copied those comments in the readme as it is the answer of the "why"

---

## 1. Why of App.jsx

- use this state to conditionally render the component
- sending this function as a prop so that whenever the user add a note, they can redirect to the list component to view notes.
- adding two buttons to switch between the component to view the selected component details
- conditionally rendering the component based on the view value which is changed during clicking the specific button

---

## 2. Why of AddNotes.jsx

- use useState hook because whenever the value of the input changes, than the value of title changes
- use useState hook because whenever the value of the input changes, than the value of content changes
- use this to handle the button ui part, it will set to true when you submit the form and the content in the button tag changes
- using handleSubmit arrow function here to save notes in localstorage by calling utility functions.
- preventing the default submitting behaviour of the form
- setting saving to true to change the button content to - saving...
- using try, catch and finally to try to save the note into the local storage, if it is fails to save than execution goes to the catch block and at the end(either try/catch) the finally block executes
- storing the title and content in the object
- fetching existing notes from the localstorage by calling utility func
- updating the notes by adding newNotes and existingNotes in an array to save them in localStorage
- saving the updated notes in the localStorage by calling utility func
- calling the refresh func which i created on the App.jsx to trigger a re-render by setting the view = list
- clearing the value of title
- clearing the value of content
- logging error in the console for now, can handle error also by doing ui changes
- finally setting the saving to false to change the content of the button

---

## 3. Why of NotesList.jsx

- this react hook triggers when the component mounts
- fetching the notes from localStorage
- setting the notes array by adding storednotes in the localStorage
- logging error in the console for now

---

## 4. Why of Utility Function

- name/key of the localStorage
- saving the notes in the localStorage
- throwing error if notes didn't save to localStorage
- fetching notes from the localStorage by giving it's key/name
- reading the notes in the JSON format
- returning an empty array if there's no notes.
