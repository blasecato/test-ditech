import { useContext } from "react";
import usersContex from "../context/UsersProvider";

const useUsersContext = () => {
  return useContext(usersContex);
};

export default useUsersContext;
