function copyClipboard(text: string) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("Texto copiado al portapapeles:", text);
    })
    .catch((err) => {
      console.error("Error al copiar al portapapeles:", err);
    });
}
export default copyClipboard;
