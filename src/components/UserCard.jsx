import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ singleUsr }) => {
  return (
    <div className="lg:w-[350px] mt-14 group rounded-2xl bg-white dark:bg-gray-800  hover:text-white dark:text-white hover:bg-primary dark:hover:bg-primary duration-300 shadow-xl ">
      <div className="h-[100px]">
        <img
          src={singleUsr?.image}
          alt=""
          className="max-w-[200px] h-[170%] mx-auto block transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300"
        />
      </div>
      <div className="text-center p-4">
        <Link to={`user/${singleUsr?.id}`}>
          <h1 className="text-xl font-bold">
            Name: {singleUsr?.firstName} {singleUsr?.lastName}
          </h1>
        </Link>

        <div className=" h-20 mt-2">
          <p className="text-gray-500 dark:text-white group-hover:text-white duration-300 text-sm line-clamp-2">
            <span className="font-bold">Email:</span> {singleUsr?.email}
          </p>
          <p className="text-gray-500 dark:text-white group-hover:text-white duration-300 text-sm line-clamp-2">
            <span className="font-bold">Address:</span>{" "}
            {singleUsr?.address?.address},{singleUsr?.address?.city},
            {singleUsr?.address?.state}
          </p>
          <p className="text-gray-500 dark:text-white group-hover:text-white duration-300 text-sm line-clamp-2">
            <span className="font-bold">Company Name:</span>{" "}
            {singleUsr?.company?.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
