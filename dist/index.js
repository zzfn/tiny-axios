var axios = (() => {
    var a = Object.defineProperty;
    var i = Object.getOwnPropertyDescriptor;
    var f = Object.getOwnPropertyNames;
    var c = Object.prototype.hasOwnProperty;
    var l = r => a(r, "__esModule", {value: !0});
    var g = (r, t) => {
        for (var e in t) a(r, e, {get: t[e], enumerable: !0})
    }, m = (r, t, e, n) => {
        if (t && typeof t == "object" || typeof t == "function") for (let o of f(t)) !c.call(r, o) && (e || o !== "default") && a(r, o, {
            get: () => t[o],
            enumerable: !(n = i(t, o)) || n.enumerable
        });
        return r
    };
    var v = (r => (t, e) => r && r.get(t) || (e = m(l({}), t, 1), r && r.set(t, e), e))(typeof WeakMap != "undefined" ? new WeakMap : 0);
    var q = {};
    g(q, {default: () => d});

    function u() {
    }

    u.prototype.request = function (t) {
        console.log("\u6838\u5FC3\u65B9\u6CD5-request");
        var e = Promise.resolve("\u6A59\u67D0\u4EBA");
        return e
    };
    u.prototype.get = function () {
    };
    u.prototype.post = function () {
    };
    var p = u;

    function s(r, t) {
        return function () {
            for (var n = new Array(arguments.length), o = 0; o < n.length; o++) n[o] = arguments[o];
            return r.apply(t, n)
        }
    }

    function x() {
        var r = new p, t = s(p.prototype.request, r);
        return t
    }

    var y = x(), d = y;
    return v(q);
})();
//# sourceMappingURL=index.js.map
