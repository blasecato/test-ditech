/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pagination } from "antd";
import { list } from "../../../common/utils/interfaces";
import CardUser from "../../atoms/CardUser/CardUser";
import type { PaginationProps } from "antd";
import useUsersContext from "../../../hooks/useUsersContext";

interface Props {
  users: list;
}

const ListUsers = ({ users }: Props) => {
  const { changePage }: any = useUsersContext();
  const onChange: PaginationProps["onChange"] = (page) => {
    changePage(page);
  };
  return (
    <div>
      <h1 className="h3 text-center mt-5">Perfiles ({users.total})</h1>
      <div className="grid gap-4 mt-5 grid-cols-1 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-4">
        {users.data?.map((user) => (
          <CardUser key={user.id} user={user} />
        ))}
      </div>
      <Pagination
        current={users.page}
        total={users.total}
        onChange={onChange}
        size="small"
        pageSize={12}
        className="mt-5 justify-center w-full"
      />
    </div>
  );
};

export default ListUsers;
