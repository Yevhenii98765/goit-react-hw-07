import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: 1,
      name: "Rosie Simpson",
      number: "459-12-56",
      completed: false,
    },
  ],
};

const slice = createSlice({
  name: "contacts",
  initialState,
  selectors: {
    selectContacts: (state) => state.items,
  },
  reducers: {
    deleteContact: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    changeStep: (state, action) => {
      state.step = action.payload;
    },
    addContact: {
      prepare: (name, number) => {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
            completed: false,
            cratedAt: new Date().toLocaleDateString(),
          },
        };
      },
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
    },
  },
});

export const contactsReducer = slice.reducer;
export const { addContact, deleteContact } = slice.actions;
export const { selectContacts } = slice.selectors;
