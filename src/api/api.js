import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'f7646193-df45-418b-8fb7-c4c31e162488'
  }
});


export const usersAPI = {
  getFriends(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
  },

  addFriend(id) {
    return instance.post(`follow/${id}`, {})
      .then(response => response.data);
  },

  unfriend(id) {
    return instance.delete(`follow/${id}`)
      .then(response => response.data);
  }
}

export const profileAPI = {
  getUserProfile(userId) {
    return instance.get(`profile/${userId}`)
      .then(response => response.data);
  },

  getStatus(userId) {
    return instance.get(`profile/status/${userId}`)
      .then(response => response.data);;
  },

  updateStatus(status) {
    return instance.put(`profile/status`, { status: status })
      .then(response => response.data);;
  }
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  }
}