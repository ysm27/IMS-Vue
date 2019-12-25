// import { Message } from "element-ui";
import DataStore from "@/global/storage/index";
import axios from "axios";
axios.defaults.timeout = 20000;

// 添加一个请求拦截器（ 一般用于鉴权 )
axios.interceptors.request.use(
  config => {
    const newConfig = { ...config };
    const TOKEN = DataStore.getToken();
    if (TOKEN) {
      newConfig.headers.Authorization = `Bearer ${TOKEN}`;
    }
    return newConfig;
  },
  error => Promise.reject(error)
);

// // 全局错误处理
// const handleErrorRequest = error => {
//   const { response } = error;
//   const status = response ? response.status : 408;

//   if (response) {
//     const { data } = response;
//     const { errors } = data;
//     const message = data.message || "服务器发送错误，请稍后再试";
//     if (status === 401) {
//       console.log("没有登录");
//       DataStore.clear();
//       console.log(error);
//     } else if (status === 419) {
//       console.log("页面过期");
//       DataStore.clear();
//     } else if (status === 422 || status === 423 || status === 429){
//       Object.keys(errors).forEach(errorKey => {
//         const errorValue = errors[errorKey].join("\n");
//         Message.error(errorValue);
//       });
//     } else{
//       Message.error(message);
//     }
//   } else {
//     Message.error("网络超时");
//   }
// };

//添加响应拦截器
axios.interceptors.response.use(
  res => {
    //兼容包了一层 { code, data } 的情况
    //switch (true) {
      // case res.data && res.data.code === 200:
      //   return res.data.data;
      // case res.data && res.data.code !== 200:
      //   Message.error(res.data.message);
      //   return Promise.reject(res.data);
      // default:
        return res.data;
    //}
  },
  error => {
    return Promise.reject(error);
  }
);

/* [请求库]
 ** @params url         { string }   @default => '' [接口地址]
 ** @params data/params { object }   @default => {} [发送数据]
 ** @params config      { object }   配置
 */

export default {
  post(url = "", data = {}, config = {}) {
    return axios.post(url, data, config);
  },

  put(url = "", data = {}, config = {}) {
    return axios.put(url, data, config);
  },

  get(url, params = {}, config = {}) {
    const OPTIONS = Object.assign({ params }, config);
    return axios.get(url, OPTIONS);
  },

  delete(url = "", params = {}, config = {}) {
    const OPTIONS = Object.assign({ params }, config);
    return axios.delete(url, OPTIONS);
  }
};
