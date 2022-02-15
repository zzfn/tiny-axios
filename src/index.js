import Axios from './core/axios.js'
import bind from './helpers/bind.js'

function createInstance() {
    // 创建 Axios 实例, 核心的一个对象
    var context = new Axios();
    // 把 request() 方法的 this 指向 context, 方便后面 request() 方法内部能访问到 Axios 对象，因为后续的系列方法、参数配置等都会放在 Axios 对象上
    var instance = bind(Axios.prototype.request, context);
    // 返回 Axios.prototype.request 方法
    return instance;
}

// 创建 axios 对象
var axios = createInstance();

export default axios;
