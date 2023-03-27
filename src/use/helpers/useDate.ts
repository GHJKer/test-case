let date = new Date();

let options: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

const actualDate = () => {
  return date.toLocaleString("ru", options);
};

export { actualDate };
