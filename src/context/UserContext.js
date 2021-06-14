import React, { useState, createContext, useEffect } from "react";
import { api } from "../api/api";
import Swal from "sweetalert2";
import Loading from "../components/Loading";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [pointsLoading, setPointsLoading] = useState(true);

  const handleAddPoints = async (pointsToAdd) => {
    setPointsLoading(true);
    return api.addPoints(pointsToAdd).then((res) => {
      setUser({ ...user, points: res["New Points"] });
      setPointsLoading(false);
    });
  };

  const handleRedeem = async (id) => {
    setPointsLoading(true);
    return api.redeem(id).then(({ message, error }) => {
      if (message) {
        api
          .getUser()
          .then((user) => setUser(user))
          .then(() => {
            setPointsLoading(false);
            Swal.fire({
              icon: "success",
              title: "Product Buy!",
              text: "Yes",
            });
          });
      } else {
        Swal.fire({
          icon: "error",
          title: "There is an error",
          text: "Can't redeem now, try later",
          footer: error,
        });
        setPointsLoading(false);
      }
    });
  };

  useEffect(() => {
    api.getUser().then((user) => {
      setUser(user);
      setPointsLoading(false);
      setLoading(false);
    });
  }, []);

  if (!user || loading) {
    return <Loading />;
  }

  return (
    <UserContext.Provider
      value={{
        user,
        addPoints: handleAddPoints,
        redeem: handleRedeem,
        pointsLoading,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
