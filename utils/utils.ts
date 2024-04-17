export const formatDate = (date: Date | null) => {
  if (!date) {
    return "";
  }

  return date.toLocaleDateString("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
