const PREFIX = "/api";

const API = {
  user: `${PREFIX}/manage/user`,
  userItem: id => `${PREFIX}/manage/user/${id}`,
  classify: `${PREFIX}/manage/classify`,
  classifyItem: id => `${PREFIX}/manage/classify/${id}`,
  article: `${PREFIX}/manage/article`,
  articleItem: id => `${PREFIX}/manage/article/${id}`,
  loginPassword: `${PREFIX}/login`,
};

export default API;
