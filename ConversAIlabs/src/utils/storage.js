const storageKey = "customNotes"; // name/key of the localStorage

export const saveNotes = (notes) => {
  try {
    localStorage.setItem(storageKey, JSON.stringify(notes)); // saving the notes in the localStorage
  } catch (error) {
    throw new Error("Storage write failed", error); // throwing error if notes didn't save to localStorage
  }
};

export const getNotes = () => {
  try {
    const notes = localStorage.getItem(storageKey); // fetching notes from the localStorage by giving it's key/name
    if (notes) {
      return JSON.parse(notes); // reading the notes in the JSON format
    } else {
      return []; // returning an empty array if there's no notes.
    }
  } catch (error) {
    throw new Error("Storage read failed", error);
  }
};
