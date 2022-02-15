function Axios() {

}

// axios内部发送网络请求的核心方法, config 参数就是我们传递的请求配置信息
Axios.prototype.request = function request(config) {
    console.log('核心方法-request');
    // 创建一个成功状态(fulfilled)的 Promise
    var promise = Promise.resolve('橙某人');
    // 返回一个 Promise 对象
    return promise;
}
// 其他便捷方法
Axios.prototype.get = function () {
}
Axios.prototype.post = function () {
}

export default Axios
