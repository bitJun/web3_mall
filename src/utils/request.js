import axios from 'axios';
// import { useUserStore } from '@/stores/user'; // 假设使用Pinia管理用户状态
import { ElMessage } from 'element-plus'; // 可选：用于提示错误

// 创建axios实例

const service = axios.create({
  baseURL: '/api', // 环境变量配置
  timeout: 10000, // 请求超时时间（ms）
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 1. 添加token（从Pinia获取）
    // const userStore = useUserStore();
    const token = '';
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // 2. 统一设置请求头（如Content-Type）
    config.headers['Content-Type'] = 'application/json;charset=UTF-8';

    // 3. 可选：显示请求loading（需配合UI库）
    // ElLoading.service({ fullscreen: true });

    return config;
  },
  (error) => {
    console.error('请求拦截错误:', error);
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    // 1. 直接返回响应数据（假设后端返回 { code, data, message }）
    const { code, data, message, status } = response.data;

    if (status === 'success') {
      return data; // 成功直接返回data
    } else {
      // 2. 处理业务错误（如401未登录）
      if (code === 401) {
        ElMessage.error('登录过期，请重新登录');
        userStore.logout(); // 清除用户状态
        window.location.href = '/login'; // 跳转登录页
      } else {
        ElMessage.error(message || '请求失败');
        return Promise.reject(new Error(message || '请求失败'));
      }
    }
  },
  (error) => {
    // 3. 处理网络错误（如404、500）
    if (error.response) {
      switch (error.response.status) {
        case 404:
          ElMessage.error('接口不存在');
          break;
        case 500:
          ElMessage.error('服务器错误');
          break;
        default:
          ElMessage.error(`请求错误：${error.response.status}`);
      }
    } else {
      ElMessage.error('网络连接异常');
    }
    return Promise.reject(error);
  }
);

// 封装GET/POST请求
export function get(url, params = {}) {
  return service.get(url, { params });
}

export function post(url, data = {}) {
  return service.post(url, data);
}

export function put(url, data = {}) {
  return service.put(url, data);
}

export function del(url, params = {}) {
  return service.delete(url, { params });
}

export default service; // 导出实例（可选，用于直接调用）