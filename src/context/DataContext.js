import { createContext, useContext, useEffect, useReducer } from "react";
import { videos } from "../data/videos";

export const DataContext = createContext();

const initialState = { playlist: [], watchlater: [], videos: videos };
const reducerFunc = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WATCHLATER":
      return { ...state, watchlater: [...state.watchlater, action.payload] };
    default:
      return state;
  }
};

// const LOCAL_STORAGE_KEY = "task-list"

// function TodoList() {
//   const [todoList, setTodoList] = useState(() => {
//     return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
//   });

//   useEffect(() => {
//     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoList));
//   }, [todoList]);

export const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunc, initialState);
  localStorage.setItem("details", JSON.stringify(state));
  console.log(state);

  useEffect(() => {
    localStorage.setItem("details", JSON.stringify(state));
  }, [state]);
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
