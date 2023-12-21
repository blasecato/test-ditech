/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Button, Modal } from "antd";
import FormUsers from "../../atoms/FormUsers/FormUsers";
import useUsersContext from "../../../hooks/useUsersContext";

interface Props {
  title: string;
}
const ModalCreateUser = ({ title }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { selectUser, userSelected }: any = useUsersContext();

  const showModal = () => {
    setIsModalOpen(true);
    if (title === "Editar") {
      selectUser(userSelected);
    }
  };

  const handleOk = () => {
    selectUser();
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    selectUser();
    setIsModalOpen(false);
  };
  return (
    <>
      <Button className="button button-primary" onClick={showModal}>
        {title}
      </Button>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        width={400}
        onCancel={handleCancel}
      >
        <h1 className="h1">
          {title === "Editar" ? "Editar Usuario" : "Crear Usuario"}
        </h1>
        <FormUsers handleOk={handleOk} />
      </Modal>
    </>
  );
};

export default ModalCreateUser;
