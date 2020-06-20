const generateMessage = (username, text) => {
  return {
    username,
    text,
    createAt: new Date().getTime()
  };
};

const generateLocation = (username, url) => {
  return {
    username,
    url,
    createdAt: new Date().getTime()
  };
};

module.exports = { generateMessage, generateLocation };
