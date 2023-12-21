import { message } from "antd";

function copyClipboard(text: string) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      message.open({
        type: "success",
        content: "Texto copiado al portapapeles",
      });
    })
    .catch(() => {
      message.open({
        type: "success",
        content: "Error al copiar al portapapeles",
      });
    });
}
export default copyClipboard;
