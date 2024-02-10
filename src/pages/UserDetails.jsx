import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useUsers } from "../context/UserProvider";

const UserDetails = () => {
  let params = useParams();
  const [singleUser, setSingleUsr] = useState({});
  const {
    state: { users },
  } = useUsers();
  useEffect(() => {
    setSingleUsr(users?.find((item) => item?.id == params?.id));
  }, [params?.id]);
  console.log(params, singleUser);
  return (
    <div className="min-h-screen container">
      <div
        className=" container p-10 shadow-2xl mt-5 rounded-lg"
        style={{ boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px" }}
      >
        <h2 className="text-3xl  font-bold  bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary shadow-md p-3 text-center">
          User Details
        </h2>
        <div className="grid grid-row-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 mt-4">
          <div className="">
            <img src={singleUser?.image} />
            <div>
              <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                {singleUser?.firstName} {singleUser?.maidenName}{" "}
                {singleUser?.lastName}
              </h1>
              <p className="detail-text">
                <span className="font-bold">Email:</span> {singleUser?.email}
              </p>
              <p className="detail-text">
                <span className="font-bold">Portfolio:</span>{" "}
                {singleUser?.domain}
              </p>
              <div className="grid grid-cols-3 gap-2">
                <p className="detail-text">
                  <span className="font-bold">Gender:</span>{" "}
                  {singleUser?.gender}
                </p>
                <p className="detail-text">
                  <span className="font-bold">Blood:</span>{" "}
                  {singleUser?.bloodGroup}
                </p>
                <p className="detail-text">
                  <span className="font-bold">Age:</span> {singleUser?.age}
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div>
              <div>
                <h2 className="detail-text-2">Body Details</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 mt-1">
                  <p className="detail-text">
                    <span className="font-bold">Height:</span>{" "}
                    {(singleUser?.height * 0.032808399).toFixed(1)}"
                  </p>
                  <p className="detail-text">
                    <span className="font-bold">Weight:</span>{" "}
                    {singleUser?.weight} Kg
                  </p>
                  <p className="detail-text">
                    <span className="font-bold">Eye Color:</span>{" "}
                    {singleUser?.eyeColor}
                  </p>
                  <p className="detail-text">
                    <span className="font-bold">Hair Color:</span>{" "}
                    {singleUser?.hair?.color}
                  </p>
                </div>
              </div>
              <div>
                <h2 className="detail-text-2">Education Details</h2>
                <div className=" mt-1">
                  <p className="detail-text">
                    <span className="font-bold">University:</span>{" "}
                    {singleUser?.university}
                  </p>
                </div>
              </div>
              <div>
                <h2 className="detail-text-2">Address</h2>

                <p className="detail-text">
                  {singleUser?.address?.address},{singleUser?.address?.city},
                  {singleUser?.address?.postalCode},{singleUser?.address?.state}
                </p>
              </div>
              <div>
                <h2 className="detail-text-2">Job Details</h2>

                <p className="detail-text">
                  <span className="font-bold">Company Name:</span>{" "}
                  {singleUser?.company?.name}
                </p>
                <p className="detail-text">
                  <span className="font-bold">Job Position:</span>{" "}
                  {singleUser?.company?.title}
                </p>
                <p className="detail-text">
                  <span className="font-bold">Job Department:</span>{" "}
                  {singleUser?.company?.department}
                </p>
                <p className="detail-text">
                  <span className="font-bold">Address:</span>{" "}
                  {singleUser?.company?.address?.address},
                  {singleUser?.company?.address?.city},
                  {singleUser?.company?.address?.postalCode},
                  {singleUser?.company?.address?.state}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
