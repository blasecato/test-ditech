/* eslint-disable @typescript-eslint/no-explicit-any */
import { user } from "../../../common/utils/interfaces";
import useUsersContext from "../../../hooks/useUsersContext";
import ModalDetailUser from "../../organisms/ModalDetailUser/ModalDetailUser";
import userPng from "../../../assets/images/user.jpeg";

interface Props {
  user: user;
}

const CardUser = ({ user }: Props) => {
  const { firstName, id, lastName, picture, title } = user;
  const { getUserId }: any = useUsersContext();

  return (
    <div className="card-user">
      <div className="title ml-3">
        <span className="text-white text-xs">{title ? title : "otro"}</span>
      </div>
      <img
        width={200}
        className="avatar"
        src={picture ? picture : userPng}
        alt="picture"
      />
      <div className="flex justify-center">
        <span className="body-bold">{firstName}</span>
      </div>
      <div className="flex justify-center">
        <span className="small-detail">{lastName}</span>
      </div>
      <ModalDetailUser
        onClick={() => getUserId(id)}
        title={`Ver mas sobre ${firstName}`}
      />
    </div>
  );
};

export default CardUser;
