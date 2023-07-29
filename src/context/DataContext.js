import { createContext, useContext, useEffect, useReducer } from "react";
import { videos } from "../data/videos";

export const DataContext = createContext();

const initialState = {
  playlist: [
    { id: 1, name: "LOFI", videolist: [] },
    { id: 2, name: "Mood", videolist: [] },
  ],
  watchlater: [],
  videos: videos,
};
const reducerFunc = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WATCHLATER":
      return { ...state, watchlater: [...state.watchlater, action.payload] };
    case "DELETE_FROM_WATCHLATER":
      return {
        ...state,
        watchlater: state.watchlater.filter(
          (video) => video._id !== action.payload
        ),
      };
    case "ADD_TO_PLAYLIST":
      const newPlaylist = 0;
      return { ...state, playlist: [...state.playlist, action.payload] };
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

  const checkIsPresentInWatchlater = (video) =>
    state.watchlater.some(
      (watchlaterVideo) => watchlaterVideo._id === video._id
    );

  useEffect(() => {
    localStorage.setItem("details", JSON.stringify(state));
  }, [state]);
  return (
    <DataContext.Provider
      value={{ state, dispatch, checkIsPresentInWatchlater }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
