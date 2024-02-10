import { createContext, useContext, useEffect, useReducer } from "react";
import { initialState, userReducer } from "../state/UserState/userReducer";
import { actionTypes } from "../state/UserState/actionTypes";

const user_CONTEXT = createContext();

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  useEffect(() => {
    dispatch({ type: actionTypes?.FETCHING_START });
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: actionTypes?.FETCHING_SUCCESS, payload: data?.users }).catch(
          () => {
            dispatch({ type: actionTypes?.FETCHING_ERROR });
          }
        )
      );
  }, []);
  const value = {
    state,
    dispatch,
  };
  return (
    <user_CONTEXT.Provider value={value}>{children}</user_CONTEXT.Provider>
  );
};
export const useUsers = () => {
  const context = useContext(user_CONTEXT);
  return context;
};
export default UserProvider;
