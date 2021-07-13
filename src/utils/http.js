import axios from 'axios';
import { ElMessage, ElMessageBox } from 'element-plus';
import router from '@/router';

axios.defaults.timeout = 1000 * 60;

axios.defaults.withCredentials = true;

// http request 拦截器
axios.interceptors.request.use(
  (config) => {
    const $config = { ...config };
    if (config.method === 'get') {
      $config.data = $config.data || true;
    }
    return $config;
  },
  (error) => Promise.reject(error),
);

// http response 拦截器
axios.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.retCode !== 200 && res.retCode !== '200' && res.retCode !== '403') {
      ElMessage({
        message: res.retMessage || '服务器傲娇了~',
        type: 'error',
      });
    }

    if (res.retCode === '403') { // 登陆过期
      ElMessageBox.confirm('您已经登出，请重新登陆', {
        confirmButtonText: '重新登陆',
        showCancelButton: false,
        type: 'warning',
      }).then(() => {
        router.push({ name: 'login' });
      }).catch(() => {
        router.push({ name: 'login' });
      });
    }
    return response;
  },
  (error) => Promise.reject(error),
);

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function fetch(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params,
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data = {}, config = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data, config)
      .then((response) => {
        resolve(response.data);
      }, (err) => {
        reject(err);
      });
  });
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data)
      .then((response) => {
        resolve(response.data);
      }, (err) => {
        reject(err);
        ElMessage({
          message: '请求超时!请稍后再试',
          type: 'error',
        });
      });
  });
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then((response) => {
        resolve(response.data);
      }, (err) => {
        reject(err);
        ElMessage({
          message: '请求超时!请稍后再试',
          type: 'error',
        });
      });
  });
}

/**
 * 封装delete请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function del(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.delete(url, { params })
      .then((response) => {
        resolve(response.data);
      }, (err) => {
        reject(err);
        ElMessage({
          message: '请求超时!请稍后再试',
          type: 'error',
        });
      });
  });
}

export const { baseURL } = axios.defaults;
