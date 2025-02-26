import { createSlice, nanoid } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },

  reducers: {
    addTodo: (state, action) => {
      const initialData = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(initialData);
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        return todo.id === action.payload.id
          ? { ...todo, text: action.payload.editText }
          : todo;
      });
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = TodoSlice.actions;

export default TodoSlice.reducer;
