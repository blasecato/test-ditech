/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, Input, Select } from "antd";
import useUsersContext from "../../../hooks/useUsersContext";
import { useEffect } from "react";

type FieldType = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  gender?: string;
  picture?: string;
};

interface Props {
  handleOk: Function;
}
const FormUsers = ({ handleOk }: Props) => {
  const [form] = Form.useForm();
  const { createUser, userEdit, updateUser }: any = useUsersContext();

  const onFinish = (values: any) => {
    if (userEdit?.id) {
      updateUser({ ...values, id: userEdit?.id });
    } else {
      createUser(values);
    }
    handleOk();
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    if (userEdit?.id) {
      form.setFieldsValue({
        firstName: userEdit?.firstName,
        lastName: userEdit?.lastName,
        email: userEdit?.email,
        phone: userEdit?.phone,
        gender: userEdit?.gender,
        picture: userEdit?.picture,
      });
    }
  }, [form, userEdit]);
  return (
    <Form
      form={form}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="mt-6"
    >
      <Form.Item<FieldType>
        name="firstName"
        rules={[{ required: true, message: "Ingrese sus Nombres" }]}
      >
        <Input placeholder="Nombres" />
      </Form.Item>

      <Form.Item<FieldType>
        name="lastName"
        rules={[{ required: true, message: "Ingrese sus Apellidos" }]}
      >
        <Input placeholder="Apellidos" />
      </Form.Item>

      <Form.Item<FieldType>
        name="email"
        rules={[
          {
            required: true,
            message: "Ingrese su Email",
            type: "email",
          },
        ]}
      >
        <Input placeholder="Email" />
      </Form.Item>

      <Form.Item<FieldType>
        name="phone"
        rules={[
          {
            message: "Ingrese su numero de telefono",
            required: true,
          },
        ]}
      >
        <Input placeholder="Telefono" width={400} />
      </Form.Item>

      <Form.Item<FieldType>
        name="gender"
        rules={[
          {
            required: true,
            message: "Seleccione su genero",
          },
        ]}
      >
        <Select
          defaultValue="select"
          options={[
            { value: "select", label: "Selecciona una opcion", disabled: true },
            { value: "male", label: "Masculino" },
            { value: "female", label: "Femenino" },
          ]}
        />
      </Form.Item>
      <Form.Item<FieldType>
        name="picture"
        rules={[{ required: true, message: "Ingrese la url de su foto" }]}
      >
        <Input placeholder="Url de tu foto" />
      </Form.Item>
      <Form.Item>
        <Button className="button button-primary" htmlType="submit">
          Guardar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormUsers;
