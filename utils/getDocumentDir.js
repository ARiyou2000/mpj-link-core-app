const getDocumentDir = (lang) => {
  return lang === "fa" ? "rtl" : "ltr";
};

export default getDocumentDir;
