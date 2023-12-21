import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { message } from "antd";
import { user } from "../common/utils/interfaces";
const API = import.meta.env.VITE_API;
const API_KEY = import.meta.env.VITE_API_KEY;

const UsersContext = createContext({});

const UsersProvider = ({ children }: { children: React.ReactNode }) => {
  const [userSelected, setUserSelected] = useState({});
  const [messageApi, contextHolder] = message.useMessage();
  const [listUsers, setlistUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [userEdit, setUserEdit] = useState({});

  async function getUsers() {
    const url = `${API}/user?page=${page}&limit=12`;
    const { data: dataUsers } = await axios.get(url, {
      headers: {
        "app-id": API_KEY,
      },
    });
    setlistUsers(dataUsers);
  }

  async function getUserId(id: string) {
    const url = `${API}/user/${id}`;
    const { data: dataUser } = await axios.get(url, {
      headers: {
        "app-id": API_KEY,
      },
    });
    setUserSelected(dataUser);
  }

  async function deleteUser(id: string) {
    const url = `${API}/user/${id}`;
    await axios.delete(url, {
      headers: {
        "app-id": API_KEY,
      },
    });
    getUsers();
    messageApi.open({
      type: "success",
      content: "Usuario Eliminado exitosamente",
    });
  }

  async function createUser(values: string) {
    const config = {
      headers: {
        "app-id": API_KEY,
        "Content-Type": "application/json",
      },
    };
    const url = `${API}/user/create`;
    await axios
      .post(url, values, config)
      .then(function () {
        getUsers();
        messageApi.open({
          type: "success",
          content: "Usuario creado exitosamente",
        });
      })
      .catch(function (error) {
        console.log("====================================");
        console.log(error);
        console.log("====================================");
        messageApi.open({
          type: "error",
          content: "Email en uso",
        });
      });
  }

  async function updateUser(values: user) {
    console.log("=========dsfsdfdsfsdfdsfsd====");
    console.log(values);
    console.log("====================================");
    const config = {
      headers: {
        "app-id": API_KEY,
        "Content-Type": "application/json",
      },
    };
    const url = `${API}/user/${values.id}`;
    await axios.put(url, values, config);
    getUsers();
    getUserId(values.id);
    messageApi.open({
      type: "success",
      content: "Usuario Editado exitosamente",
    });
  }

  const changePage = (page: number) => {
    setPage(page);
  };
  const selectUser = (user: user) => {
    setUserEdit(user);
  };

  useEffect(() => {
    getUsers();
  }, [page]);

  return (
    <UsersContext.Provider
      value={{
        userSelected,
        listUsers,
        userEdit,
        setUserSelected,
        getUserId,
        deleteUser,
        getUsers,
        createUser,
        updateUser,
        changePage,
        selectUser,
      }}
    >
      {contextHolder}
      {children}
    </UsersContext.Provider>
  );
};

export { UsersProvider };
export default UsersContext;
