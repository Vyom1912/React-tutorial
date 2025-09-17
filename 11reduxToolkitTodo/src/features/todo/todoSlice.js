import { createSlice, nanoid } from "@reduxjs/toolkit";

// const initialState = {
//   todos: [
//     { id: 1, text: "Learn Redux", completed: false },
//     { id: 2, text: "Learn Redux Toolkit", completed: false },
//   ],
// };

export const todosSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [
      { id: 1, text: "Learn Redux", completed: false },
      { id: 2, text: "Learn Redux Toolkit", completed: false },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
    },
    toggleComplete: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
  },
});

export const { addTodo, removeTodo, updateTodo, toggleComplete } =
  todosSlice.actions;
export default todosSlice.reducer;
