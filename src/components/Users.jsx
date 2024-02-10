import React, { useEffect, useReducer, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useUsers } from "../context/UserProvider";
import UserCard from "./UserCard";
import { initialState, userReducer } from "../state/UserState/userReducer";
import { actionTypes } from "../state/UserState/actionTypes";

const Users = () => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const [sortBy, setSortBy] = useState("");
  const [sortKey, setSortKey] = useState("");
  const [sortUsers, setSortUsers] = useState([]);
  const {
    state: { users, loading, error },
  } = useUsers();
  useEffect(() => {
    if (sortBy == 1) {
      const filteredUsers = users?.filter((user) =>
        user?.firstName?.toLowerCase()?.includes(sortKey?.toLowerCase())
      );
      setSortUsers(filteredUsers);
    }
    if (sortBy == 2) {
      const filteredUsers = users?.filter((user) =>
        user?.email?.toLowerCase()?.includes(sortKey?.toLowerCase())
      );
      setSortUsers(filteredUsers);
    }
    if (sortBy == 3) {
      const filteredUsers = users?.filter((user) =>
        user?.company?.name?.toLowerCase()?.includes(sortKey?.toLowerCase())
      );
      setSortUsers(filteredUsers);
    }
  }, [sortBy, sortKey]);
  let content;

  if (loading) {
    content = (
      <div className="flex justify-center items-center h-[200px]">
        <div className="relative">
          <div
            className="w-12 h-12 rounded-full absolute
      border-2 border-solid border-gray-200"
          ></div>
          <div
            className="w-12 h-12 rounded-full animate-spin absolute
      border-2 border-solid border-primary border-t-transparent"
          ></div>
        </div>
      </div>
    );
  }

  if (error) {
    content = <p>Something went wrong</p>;
  }

  if (!loading && !error && users.length === 0) {
    content = <p>Nothing to show, user list is empty</p>;
  }

  if (!loading && !error && users.length && !sortKey) {
    content = users.map((singleUsr) => (
      <UserCard key={singleUsr.id} singleUsr={singleUsr} />
    ));
  }
  if (!loading && !error && sortUsers.length) {
    content = sortUsers.map((singleUsr) => (
      <UserCard key={singleUsr.id} singleUsr={singleUsr} />
    ));
  }
  return (
    <div className="py-10 min-h-screen">
      <div className="container ">
        <div className="text-center mb-20 w-[100%] mx-auto grid grid-cols-1 lg:grid-cols-2 justify-between ">
          <div>
            <h1 className="text-3xl  font-bold  bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              All Users
            </h1>
          </div>
          <div className="flex gap-3  mt-3">
            <div className="relative  h-10 w-[37%]  bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-white border-2 shadow-xl rounded-md">
              <select
                className=" appearance-none w-full py-1 px-2 bg-white bg-gray-100 dark:bg-gray-600 focus:ring-0 outline-none "
                name="whatever"
                id="frm-whatever"
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="">Please choose</option>
                <option value="1">Sort by name</option>
                <option value="2">Sort by email</option>
                <option value="3">Sort by Company</option>
              </select>
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 dark:text-white  border-l">
                <svg
                  className="h-4 w-4 dark:text-white dark:stroke-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            <div className=" w-[62%]">
              <li className="flex h-10  bg-gray-100 dark:bg-gray-600 mx-auto  w-full max-w-lg  rounded-md pr-3 shadow-xl border-2">
                <input
                  className="h-8 ps-4 bg-gray-100 dark:bg-gray-600 rounded-md w-full text-sm border-0 focus:ring-0 outline-none"
                  type="text"
                  name="search"
                  id="search"
                  onChange={(e) => setSortKey(e.target.value)}
                />

                <button>
                  <BiSearchAlt />
                </button>
              </li>
            </div>
          </div>
        </div>

        <div>
          {!loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-5 place-items-center">
              {content}
            </div>
          ) : (
            <>{content}</>
          )}
        </div>
      </div>
    </div>
  );
};

export default Users;
