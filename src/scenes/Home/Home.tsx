/* eslint-disable @typescript-eslint/no-explicit-any */
import ListUsers from "../../components/organisms/ListUsers/ListUsers";
import useUsersContext from "../../hooks/useUsersContext";

const Home = () => {
  const { listUsers }: any = useUsersContext();
  return (
    <div>
      {listUsers ? <ListUsers users={listUsers} /> : <div className="loader" />}
    </div>
  );
};

export default Home;
