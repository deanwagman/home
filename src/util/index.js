export const getToday = () => {
  const now = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return now.toLocaleDateString("en-US", options);
};
