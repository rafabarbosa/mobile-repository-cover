export const download = (imageUrl, filename) => {
  const link = document.createElement("a");
  link.download = filename;
  link.href = imageUrl;
  link.click();
};
