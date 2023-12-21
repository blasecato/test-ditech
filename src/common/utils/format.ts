const formaterDate = (date: number) => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString("es-ES");
};
export default formaterDate;
