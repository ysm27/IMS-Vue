import request from "@/global/request/axios";
import API from "@/global/request/api";

const article = {
  list: function() {
    return request.get(API.article);
  },
  single: function(id) {
    return request.get(API.articleItem(id));
  },
  insert: function(params) {
    return request.post(API.article, params);
  },
  update: function(id, params) {
    return request.put(API.articleItem(id), params);
  },
  delete: function(id) {
    return request.delete(API.articleItem(id));
  }
};

export default article;
