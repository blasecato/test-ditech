/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import { useState } from "react";
import { Button, Modal } from "antd";
import useUsersContext from "../../../hooks/useUsersContext";
import {
  CopyOutlined,
  EnvironmentOutlined,
  HeartOutlined,
  MailOutlined,
  ManOutlined,
  PhoneOutlined,
  WomanOutlined,
} from "@ant-design/icons";
import ModalCreateUser from "../ModalCreateUser/ModalCreateUser";
import formaterDate from "../../../common/utils/format";
import copyClipboard from "../../../common/utils/clipboard";

interface Props {
  title: string;
  onClick: Function;
}
const ModalDetailUser = ({ title, onClick }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { userSelected, deleteUser, setUserSelected }: any = useUsersContext();
  const {
    firstName,
    lastName,
    picture,
    phone,
    email,
    gender,
    dateOfBirth,
    title: gen,
    location,
    id,
  } = userSelected;

  const showModal = () => {
    onClick();
    setIsModalOpen(true);
    setUserSelected({});
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setUserSelected({});
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setUserSelected({});
  };

  return (
    <>
      <Button className="button button-card" onClick={showModal}>
        {title}
      </Button>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={300}
      >
        {userSelected?.id ? (
          <>
            <div className="title">
              <span className="text-white text-xs">{gen}</span>
            </div>
            <img src={picture} className="avatar" alt="avatar" />
            <h1 className="h1 text-center">
              {firstName} {lastName}
            </h1>
            <div className="item-user">
              <div className="item-info">
                <MailOutlined />
                <h2 className="h2">{email}</h2>
              </div>
              <Button className="copy" onClick={() => copyClipboard(email)}>
                <CopyOutlined />
              </Button>
            </div>
            <div className="item-user">
              <div className="item-info">
                <PhoneOutlined />
                <h2 className="h2">{phone}</h2>
              </div>
              <Button className="copy" onClick={() => copyClipboard(phone)}>
                <CopyOutlined />
              </Button>
            </div>
            <div className="item-user">
              <div className="item-info">
                <HeartOutlined />
                <h2 className="small-detail">{formaterDate(dateOfBirth)}</h2>
              </div>
            </div>
            <div className="item-user">
              <div className="item-info">
                {gender === "male" ? <ManOutlined /> : <WomanOutlined />}
                <h2 className="small-detail">
                  {gender === "male" ? "Masculino" : "Femenino"}
                </h2>
              </div>
            </div>
            <div className="item-user">
              <div className="item-info">
                <EnvironmentOutlined />
                <h2 className="small-detail">
                  {location?.country} - {location?.street}
                </h2>
              </div>
            </div>

            <div className="flex justify-between gap-1 mt-7">
              <ModalCreateUser title="Editar" />
              <Button
                className="button button-delete"
                onClick={() => {
                  deleteUser(id);
                  handleOk();
                }}
              >
                Eliminar
              </Button>
            </div>
          </>
        ) : (
          <div className="flex justify-center items-center min-h-full mt-44">
            <div className="loader" />
          </div>
        )}
      </Modal>
    </>
  );
};

export default ModalDetailUser;
