import request from "@/global/request/axios";
import API from "@/global/request/api";
import DataStore from "@/global/storage/index";

const user = {
  list: function() {
    return request.get(API.user);
  },
  single: function(id) {
    return request.get(API.userItem(id));
  },
  insert: function(params) {
    return request.post(API.user, params);
  },
  update: function(id, params) {
    return request.put(API.userItem(id), params);
  },
  delete: function(id) {
    return request.delete(API.userItem(id));
  },
  loginPassword({ phone, password }) {
    return request.post(API.loginPassword, { password, phone }).then(res => {
      DataStore.setToken(res.token);
      return res
    })
  },
  accountLogout() {
    DataStore.clear();
  },
  userInfo() {
    const mapData = DataStore.map.get("userInfo");
    if(mapData) {
      return Promise.resolve(mapData);
    }
    return request.get(API.userInfo).then(res => {
      DataStore.map.set("userInfo", res);
      return res
    })
  }
};

export default user;
