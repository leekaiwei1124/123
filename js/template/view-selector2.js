!function (t) {
    var e = {};
    function r(n) {
        if (e[n])
            return e[n].exports;
        var o = e[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(o.exports, o, o.exports, r),
            o.l = !0,
            o.exports
    }
    r.m = t,
        r.c = e,
        r.d = function (t, e, n) {
            r.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: n
            })
        }
        ,
        r.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
        }
        ,
        r.t = function (t, e) {
            if (1 & e && (t = r(t)),
                8 & e)
                return t;
            if (4 & e && "object" == typeof t && t && t.__esModule)
                return t;
            var n = Object.create(null);
            if (r.r(n),
                Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: t
                }),
                2 & e && "string" != typeof t)
                for (var o in t)
                    r.d(n, o, function (e) {
                        return t[e]
                    }
                        .bind(null, o));
            return n
        }
        ,
        r.n = function (t) {
            var e = t && t.__esModule ? function () {
                return t.default
            }
                : function () {
                    return t
                }
                ;
            return r.d(e, "a", e),
                e
        }
        ,
        r.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
        ,
        r.p = "",
        r(r.s = 130)
}([function (t, e, r) {
    function n(t) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        }
            : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
        )(t)
    }
    var o = r(20)
        , i = "object" == ("undefined" == typeof self ? "undefined" : n(self)) && self && self.Object === Object && self
        , u = o || i || Function("return this")();
    t.exports = u
}
    , function (t, e) {
        var r = Array.isArray;
        t.exports = r
    }
    , function (t, e, r) {
        var n = r(62)
            , o = r(65);
        t.exports = function (t, e) {
            var r = o(t, e);
            return n(r) ? r : void 0
        }
    }
    , function (t, e, r) {
        var n = r(5)
            , o = r(47)
            , i = r(48)
            , u = "[object Null]"
            , c = "[object Undefined]"
            , s = n ? n.toStringTag : void 0;
        t.exports = function (t) {
            return null == t ? void 0 === t ? c : u : s && s in Object(t) ? o(t) : i(t)
        }
    }
    , function (t, e) {
        function r(t) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            }
                : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
            )(t)
        }
        t.exports = function (t) {
            return null != t && "object" == r(t)
        }
    }
    , function (t, e, r) {
        var n = r(0).Symbol;
        t.exports = n
    }
    , function (t, e, r) {
        var n = r(52)
            , o = r(53)
            , i = r(54)
            , u = r(55)
            , c = r(56);
        function s(t) {
            var e = -1
                , r = null == t ? 0 : t.length;
            for (this.clear(); ++e < r;) {
                var n = t[e];
                this.set(n[0], n[1])
            }
        }
        s.prototype.clear = n,
            s.prototype.delete = o,
            s.prototype.get = i,
            s.prototype.has = u,
            s.prototype.set = c,
            t.exports = s
    }
    , function (t, e, r) {
        var n = r(23);
        t.exports = function (t, e) {
            for (var r = t.length; r--;)
                if (n(t[r][0], e))
                    return r;
            return -1
        }
    }
    , function (t, e, r) {
        var n = r(2)(Object, "create");
        t.exports = n
    }
    , function (t, e, r) {
        var n = r(74);
        t.exports = function (t, e) {
            var r = t.__data__;
            return n(e) ? r["string" == typeof e ? "string" : "hash"] : r.map
        }
    }
    , function (t, e, r) {
        var n = r(11)
            , o = 1 / 0;
        t.exports = function (t) {
            if ("string" == typeof t || n(t))
                return t;
            var e = t + "";
            return "0" == e && 1 / t == -o ? "-0" : e
        }
    }
    , function (t, e, r) {
        function n(t) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            }
                : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
            )(t)
        }
        var o = r(3)
            , i = r(4)
            , u = "[object Symbol]";
        t.exports = function (t) {
            return "symbol" == n(t) || i(t) && o(t) == u
        }
    }
    , function (t, e, r) {
        var n = r(2)(r(0), "Map");
        t.exports = n
    }
    , function (t, e) {
        function r(t) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            }
                : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
            )(t)
        }
        t.exports = function (t) {
            var e = r(t);
            return null != t && ("object" == e || "function" == e)
        }
    }
    , function (t, e, r) {
        var n = r(66)
            , o = r(73)
            , i = r(75)
            , u = r(76)
            , c = r(77);
        function s(t) {
            var e = -1
                , r = null == t ? 0 : t.length;
            for (this.clear(); ++e < r;) {
                var n = t[e];
                this.set(n[0], n[1])
            }
        }
        s.prototype.clear = n,
            s.prototype.delete = o,
            s.prototype.get = i,
            s.prototype.has = u,
            s.prototype.set = c,
            t.exports = s
    }
    , function (t, e, r) {
        var n = r(95)
            , o = r(102)
            , i = r(17);
        t.exports = function (t) {
            return i(t) ? n(t) : o(t)
        }
    }
    , function (t, e) {
        var r = 9007199254740991;
        t.exports = function (t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && t <= r
        }
    }
    , function (t, e, r) {
        var n = r(24)
            , o = r(16);
        t.exports = function (t) {
            return null != t && o(t.length) && !n(t)
        }
    }
    , function (t, e, r) {
        function n(t) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            }
                : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
            )(t)
        }
        var o = r(1)
            , i = r(11)
            , u = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
            , c = /^\w*$/;
        t.exports = function (t, e) {
            if (o(t))
                return !1;
            var r = n(t);
            return !("number" != r && "symbol" != r && "boolean" != r && null != t && !i(t)) || c.test(t) || !u.test(t) || null != e && t in Object(e)
        }
    }
    , function (t, e, r) {
        var n = r(45);
        t.exports = function (t) {
            return null == t ? "" : n(t)
        }
    }
    , function (t, e, r) {
        (function (e) {
            function r(t) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                }
                    : function (t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    }
                )(t)
            }
            var n = "object" == (void 0 === e ? "undefined" : r(e)) && e && e.Object === Object && e;
            t.exports = n
        }
        ).call(this, r(46))
    }
    , function (t, e) {
        t.exports = function (t, e) {
            for (var r = -1, n = null == t ? 0 : t.length, o = Array(n); ++r < n;)
                o[r] = e(t[r], r, t);
            return o
        }
    }
    , function (t, e, r) {
        var n = r(6)
            , o = r(57)
            , i = r(58)
            , u = r(59)
            , c = r(60)
            , s = r(61);
        function a(t) {
            var e = this.__data__ = new n(t);
            this.size = e.size
        }
        a.prototype.clear = o,
            a.prototype.delete = i,
            a.prototype.get = u,
            a.prototype.has = c,
            a.prototype.set = s,
            t.exports = a
    }
    , function (t, e) {
        t.exports = function (t, e) {
            return t === e || t != t && e != e
        }
    }
    , function (t, e, r) {
        var n = r(3)
            , o = r(13)
            , i = "[object AsyncFunction]"
            , u = "[object Function]"
            , c = "[object GeneratorFunction]"
            , s = "[object Proxy]";
        t.exports = function (t) {
            if (!o(t))
                return !1;
            var e = n(t);
            return e == u || e == c || e == i || e == s
        }
    }
    , function (t, e) {
        var r = Function.prototype.toString;
        t.exports = function (t) {
            if (null != t) {
                try {
                    return r.call(t)
                } catch (t) { }
                try {
                    return t + ""
                } catch (t) { }
            }
            return ""
        }
    }
    , function (t, e, r) {
        var n = r(78)
            , o = r(4);
        t.exports = function t(e, r, i, u, c) {
            return e === r || (null == e || null == r || !o(e) && !o(r) ? e != e && r != r : n(e, r, i, u, t, c))
        }
    }
    , function (t, e, r) {
        var n = r(79)
            , o = r(82)
            , i = r(83)
            , u = 1
            , c = 2;
        t.exports = function (t, e, r, s, a, f) {
            var p = r & u
                , l = t.length
                , y = e.length;
            if (l != y && !(p && y > l))
                return !1;
            var h = f.get(t);
            if (h && f.get(e))
                return h == e;
            var v = -1
                , b = !0
                , d = r & c ? new n : void 0;
            for (f.set(t, e),
                f.set(e, t); ++v < l;) {
                var _ = t[v]
                    , m = e[v];
                if (s)
                    var g = p ? s(m, _, v, e, t, f) : s(_, m, v, t, e, f);
                if (void 0 !== g) {
                    if (g)
                        continue;
                    b = !1;
                    break
                }
                if (d) {
                    if (!o(e, function (t, e) {
                        if (!i(d, e) && (_ === t || a(_, t, r, s, f)))
                            return d.push(e)
                    })) {
                        b = !1;
                        break
                    }
                } else if (_ !== m && !a(_, m, r, s, f)) {
                    b = !1;
                    break
                }
            }
            return f.delete(t),
                f.delete(e),
                b
        }
    }
    , function (t, e, r) {
        var n = r(97)
            , o = r(4)
            , i = Object.prototype
            , u = i.hasOwnProperty
            , c = i.propertyIsEnumerable
            , s = n(function () {
                return arguments
            }()) ? n : function (t) {
                return o(t) && u.call(t, "callee") && !c.call(t, "callee")
            }
            ;
        t.exports = s
    }
    , function (t, e, r) {
        (function (t) {
            function n(t) {
                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                }
                    : function (t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    }
                )(t)
            }
            var o = r(0)
                , i = r(98)
                , u = "object" == n(e) && e && !e.nodeType && e
                , c = u && "object" == n(t) && t && !t.nodeType && t
                , s = c && c.exports === u ? o.Buffer : void 0
                , a = (s ? s.isBuffer : void 0) || i;
            t.exports = a
        }
        ).call(this, r(30)(t))
    }
    , function (t, e) {
        t.exports = function (t) {
            return t.webpackPolyfill || (t.deprecate = function () { }
                ,
                t.paths = [],
                t.children || (t.children = []),
                Object.defineProperty(t, "loaded", {
                    enumerable: !0,
                    get: function () {
                        return t.l
                    }
                }),
                Object.defineProperty(t, "id", {
                    enumerable: !0,
                    get: function () {
                        return t.i
                    }
                }),
                t.webpackPolyfill = 1),
                t
        }
    }
    , function (t, e) {
        function r(t) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            }
                : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
            )(t)
        }
        var n = 9007199254740991
            , o = /^(?:0|[1-9]\d*)$/;
        t.exports = function (t, e) {
            var i = r(t);
            return !!(e = null == e ? n : e) && ("number" == i || "symbol" != i && o.test(t)) && t > -1 && t % 1 == 0 && t < e
        }
    }
    , function (t, e, r) {
        var n = r(99)
            , o = r(100)
            , i = r(101)
            , u = i && i.isTypedArray
            , c = u ? o(u) : n;
        t.exports = c
    }
    , function (t, e, r) {
        var n = r(13);
        t.exports = function (t) {
            return t == t && !n(t)
        }
    }
    , function (t, e) {
        t.exports = function (t, e) {
            return function (r) {
                return null != r && r[t] === e && (void 0 !== e || t in Object(r))
            }
        }
    }
    , function (t, e, r) {
        var n = r(36)
            , o = r(10);
        t.exports = function (t, e) {
            for (var r = 0, i = (e = n(e, t)).length; null != t && r < i;)
                t = t[o(e[r++])];
            return r && r == i ? t : void 0
        }
    }
    , function (t, e, r) {
        var n = r(1)
            , o = r(18)
            , i = r(114)
            , u = r(19);
        t.exports = function (t, e) {
            return n(t) ? t : o(t, e) ? [t] : i(u(t))
        }
    }
    , function (t, e, r) {
        var n, o = r(42), i = "/analytics/v3/management/accountSummaries";
        t.exports = {
            get: function (t) {
                var e;
                return t && t.noCache && (n = null,
                    delete t.noCache),
                    n || (e = gapi.client.request({
                        path: i
                    }).then(function (t) {
                        return t
                    }),
                        n = new e.constructor(function (t, r) {
                            var n = [];
                            e.then(function e(r) {
                                var o = r.result;
                                o.items && (n = n.concat(o.items)),
                                    o.startIndex + o.itemsPerPage <= o.totalResults ? gapi.client.request({
                                        path: i,
                                        params: {
                                            "start-index": o.startIndex + o.itemsPerPage
                                        }
                                    }).then(e) : t(n)
                            }).then(null, r)
                        }
                        )),
                    n.then(function (e) {
                        return new o(e, t)
                    })
            }
        }
    }
    , function (t, e, r) {
        var n = r(43)
            , o = r(19)
            , i = /[&<>"']/g
            , u = RegExp(i.source);
        t.exports = function (t) {
            return (t = o(t)) && u.test(t) ? t.replace(i, n) : t
        }
    }
    , function (t, e, r) {
        var n = r(21)
            , o = r(49)
            , i = r(124)
            , u = r(1);
        t.exports = function (t, e) {
            return (u(t) ? n : i)(t, o(e, 3))
        }
    }
    , , , function (t, e) {
        function r(t, e) {
            e = e || {},
                this.accounts_ = t,
                this.webProperties_ = [],
                this.profiles_ = [],
                this.accountsById_ = {},
                this.webPropertiesById_ = this.propertiesById_ = {},
                this.profilesById_ = this.viewsById_ = {};
            for (var r, u = 0; r = this.accounts_[u]; u++)
                if (!e.ignoreEmpty || o(r)) {
                    if (this.accountsById_[r.id] = {
                        self: r
                    },
                        r.webProperties) {
                        n(r, "webProperties", "properties");
                        for (var c, s = 0; c = r.webProperties[s]; s++)
                            if (!e.ignoreEmpty || i(c)) {
                                if (this.webProperties_.push(c),
                                    this.webPropertiesById_[c.id] = {
                                        self: c,
                                        parent: r
                                    },
                                    c.profiles) {
                                    n(c, "profiles", "views");
                                    for (var a, f = 0; a = c.profiles[f]; f++)
                                        this.profiles_.push(a),
                                            this.profilesById_[a.id] = {
                                                self: a,
                                                parent: c,
                                                grandParent: r
                                            }
                                }
                            } else
                                r.webProperties.splice(s, 1),
                                    s--
                    }
                } else
                    this.accounts_.splice(u, 1),
                        u--
        }
        function n(t, e, r) {
            Object.defineProperty && !Object.hasOwnProperty.call(t, r) ? Object.defineProperty(t, r, {
                get: function () {
                    return t[e]
                }
            }) : t[r] = t[e]
        }
        function o(t) {
            if (t.webProperties && t.webProperties.length)
                for (var e, r = 0; e = t.webProperties[r]; r++)
                    if (i(e))
                        return !0;
            return !1
        }
        function i(t) {
            return !(!t.profiles || !t.profiles.length)
        }
        r.prototype.all = function () {
            return this.accounts_
        }
            ,
            n(r.prototype, "all", "allAccounts"),
            r.prototype.allWebProperties = function () {
                return this.webProperties_
            }
            ,
            n(r.prototype, "allWebProperties", "allProperties"),
            r.prototype.allProfiles = function () {
                return this.profiles_
            }
            ,
            n(r.prototype, "allProfiles", "allViews"),
            r.prototype.get = function (t) {
                if (!!t.accountId + !!t.webPropertyId + !!t.propertyId + !!t.profileId + !!t.viewId > 1)
                    throw new Error('get() only accepts an object with a single property: either "accountId", "webPropertyId", "propertyId", "profileId" or "viewId"');
                return this.getProfile(t.profileId || t.viewId) || this.getWebProperty(t.webPropertyId || t.propertyId) || this.getAccount(t.accountId)
            }
            ,
            r.prototype.getAccount = function (t) {
                return this.accountsById_[t] && this.accountsById_[t].self
            }
            ,
            r.prototype.getWebProperty = function (t) {
                return this.webPropertiesById_[t] && this.webPropertiesById_[t].self
            }
            ,
            n(r.prototype, "getWebProperty", "getProperty"),
            r.prototype.getProfile = function (t) {
                return this.profilesById_[t] && this.profilesById_[t].self
            }
            ,
            n(r.prototype, "getProfile", "getView"),
            r.prototype.getAccountByProfileId = function (t) {
                return this.profilesById_[t] && this.profilesById_[t].grandParent
            }
            ,
            n(r.prototype, "getAccountByProfileId", "getAccountByViewId"),
            r.prototype.getWebPropertyByProfileId = function (t) {
                return this.profilesById_[t] && this.profilesById_[t].parent
            }
            ,
            n(r.prototype, "getWebPropertyByProfileId", "getPropertyByViewId"),
            r.prototype.getAccountByWebPropertyId = function (t) {
                return this.webPropertiesById_[t] && this.webPropertiesById_[t].parent
            }
            ,
            n(r.prototype, "getAccountByWebPropertyId", "getAccountByPropertyId"),
            t.exports = r
    }
    , function (t, e, r) {
        var n = r(44)({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        });
        t.exports = n
    }
    , function (t, e) {
        t.exports = function (t) {
            return function (e) {
                return null == t ? void 0 : t[e]
            }
        }
    }
    , function (t, e, r) {
        var n = r(5)
            , o = r(21)
            , i = r(1)
            , u = r(11)
            , c = 1 / 0
            , s = n ? n.prototype : void 0
            , a = s ? s.toString : void 0;
        t.exports = function t(e) {
            if ("string" == typeof e)
                return e;
            if (i(e))
                return o(e, t) + "";
            if (u(e))
                return a ? a.call(e) : "";
            var r = e + "";
            return "0" == r && 1 / e == -c ? "-0" : r
        }
    }
    , function (t, e) {
        function r(t) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            }
                : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
            )(t)
        }
        var n;
        n = function () {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (t) {
            "object" === ("undefined" == typeof window ? "undefined" : r(window)) && (n = window)
        }
        t.exports = n
    }
    , function (t, e, r) {
        var n = r(5)
            , o = Object.prototype
            , i = o.hasOwnProperty
            , u = o.toString
            , c = n ? n.toStringTag : void 0;
        t.exports = function (t) {
            var e = i.call(t, c)
                , r = t[c];
            try {
                t[c] = void 0;
                var n = !0
            } catch (t) { }
            var o = u.call(t);
            return n && (e ? t[c] = r : delete t[c]),
                o
        }
    }
    , function (t, e) {
        var r = Object.prototype.toString;
        t.exports = function (t) {
            return r.call(t)
        }
    }
    , function (t, e, r) {
        function n(t) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            }
                : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
            )(t)
        }
        var o = r(50)
            , i = r(112)
            , u = r(120)
            , c = r(1)
            , s = r(121);
        t.exports = function (t) {
            return "function" == typeof t ? t : null == t ? u : "object" == n(t) ? c(t) ? i(t[0], t[1]) : o(t) : s(t)
        }
    }
    , function (t, e, r) {
        var n = r(51)
            , o = r(111)
            , i = r(34);
        t.exports = function (t) {
            var e = o(t);
            return 1 == e.length && e[0][2] ? i(e[0][0], e[0][1]) : function (r) {
                return r === t || n(r, t, e)
            }
        }
    }
    , function (t, e, r) {
        var n = r(22)
            , o = r(26)
            , i = 1
            , u = 2;
        t.exports = function (t, e, r, c) {
            var s = r.length
                , a = s
                , f = !c;
            if (null == t)
                return !a;
            for (t = Object(t); s--;) {
                var p = r[s];
                if (f && p[2] ? p[1] !== t[p[0]] : !(p[0] in t))
                    return !1
            }
            for (; ++s < a;) {
                var l = (p = r[s])[0]
                    , y = t[l]
                    , h = p[1];
                if (f && p[2]) {
                    if (void 0 === y && !(l in t))
                        return !1
                } else {
                    var v = new n;
                    if (c)
                        var b = c(y, h, l, t, e, v);
                    if (!(void 0 === b ? o(h, y, i | u, c, v) : b))
                        return !1
                }
            }
            return !0
        }
    }
    , function (t, e) {
        t.exports = function () {
            this.__data__ = [],
                this.size = 0
        }
    }
    , function (t, e, r) {
        var n = r(7)
            , o = Array.prototype.splice;
        t.exports = function (t) {
            var e = this.__data__
                , r = n(e, t);
            return !(r < 0 || (r == e.length - 1 ? e.pop() : o.call(e, r, 1),
                --this.size,
                0))
        }
    }
    , function (t, e, r) {
        var n = r(7);
        t.exports = function (t) {
            var e = this.__data__
                , r = n(e, t);
            return r < 0 ? void 0 : e[r][1]
        }
    }
    , function (t, e, r) {
        var n = r(7);
        t.exports = function (t) {
            return n(this.__data__, t) > -1
        }
    }
    , function (t, e, r) {
        var n = r(7);
        t.exports = function (t, e) {
            var r = this.__data__
                , o = n(r, t);
            return o < 0 ? (++this.size,
                r.push([t, e])) : r[o][1] = e,
                this
        }
    }
    , function (t, e, r) {
        var n = r(6);
        t.exports = function () {
            this.__data__ = new n,
                this.size = 0
        }
    }
    , function (t, e) {
        t.exports = function (t) {
            var e = this.__data__
                , r = e.delete(t);
            return this.size = e.size,
                r
        }
    }
    , function (t, e) {
        t.exports = function (t) {
            return this.__data__.get(t)
        }
    }
    , function (t, e) {
        t.exports = function (t) {
            return this.__data__.has(t)
        }
    }
    , function (t, e, r) {
        var n = r(6)
            , o = r(12)
            , i = r(14)
            , u = 200;
        t.exports = function (t, e) {
            var r = this.__data__;
            if (r instanceof n) {
                var c = r.__data__;
                if (!o || c.length < u - 1)
                    return c.push([t, e]),
                        this.size = ++r.size,
                        this;
                r = this.__data__ = new i(c)
            }
            return r.set(t, e),
                this.size = r.size,
                this
        }
    }
    , function (t, e, r) {
        var n = r(24)
            , o = r(63)
            , i = r(13)
            , u = r(25)
            , c = /^\[object .+?Constructor\]$/
            , s = Function.prototype
            , a = Object.prototype
            , f = s.toString
            , p = a.hasOwnProperty
            , l = RegExp("^" + f.call(p).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        t.exports = function (t) {
            return !(!i(t) || o(t)) && (n(t) ? l : c).test(u(t))
        }
    }
    , function (t, e, r) {
        var n, o = r(64), i = (n = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "";
        t.exports = function (t) {
            return !!i && i in t
        }
    }
    , function (t, e, r) {
        var n = r(0)["__core-js_shared__"];
        t.exports = n
    }
    , function (t, e) {
        t.exports = function (t, e) {
            return null == t ? void 0 : t[e]
        }
    }
    , function (t, e, r) {
        var n = r(67)
            , o = r(6)
            , i = r(12);
        t.exports = function () {
            this.size = 0,
                this.__data__ = {
                    hash: new n,
                    map: new (i || o),
                    string: new n
                }
        }
    }
    , function (t, e, r) {
        var n = r(68)
            , o = r(69)
            , i = r(70)
            , u = r(71)
            , c = r(72);
        function s(t) {
            var e = -1
                , r = null == t ? 0 : t.length;
            for (this.clear(); ++e < r;) {
                var n = t[e];
                this.set(n[0], n[1])
            }
        }
        s.prototype.clear = n,
            s.prototype.delete = o,
            s.prototype.get = i,
            s.prototype.has = u,
            s.prototype.set = c,
            t.exports = s
    }
    , function (t, e, r) {
        var n = r(8);
        t.exports = function () {
            this.__data__ = n ? n(null) : {},
                this.size = 0
        }
    }
    , function (t, e) {
        t.exports = function (t) {
            var e = this.has(t) && delete this.__data__[t];
            return this.size -= e ? 1 : 0,
                e
        }
    }
    , function (t, e, r) {
        var n = r(8)
            , o = "__lodash_hash_undefined__"
            , i = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
            var e = this.__data__;
            if (n) {
                var r = e[t];
                return r === o ? void 0 : r
            }
            return i.call(e, t) ? e[t] : void 0
        }
    }
    , function (t, e, r) {
        var n = r(8)
            , o = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
            var e = this.__data__;
            return n ? void 0 !== e[t] : o.call(e, t)
        }
    }
    , function (t, e, r) {
        var n = r(8)
            , o = "__lodash_hash_undefined__";
        t.exports = function (t, e) {
            var r = this.__data__;
            return this.size += this.has(t) ? 0 : 1,
                r[t] = n && void 0 === e ? o : e,
                this
        }
    }
    , function (t, e, r) {
        var n = r(9);
        t.exports = function (t) {
            var e = n(this, t).delete(t);
            return this.size -= e ? 1 : 0,
                e
        }
    }
    , function (t, e) {
        function r(t) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            }
                : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
            )(t)
        }
        t.exports = function (t) {
            var e = r(t);
            return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
        }
    }
    , function (t, e, r) {
        var n = r(9);
        t.exports = function (t) {
            return n(this, t).get(t)
        }
    }
    , function (t, e, r) {
        var n = r(9);
        t.exports = function (t) {
            return n(this, t).has(t)
        }
    }
    , function (t, e, r) {
        var n = r(9);
        t.exports = function (t, e) {
            var r = n(this, t)
                , o = r.size;
            return r.set(t, e),
                this.size += r.size == o ? 0 : 1,
                this
        }
    }
    , function (t, e, r) {
        var n = r(22)
            , o = r(27)
            , i = r(84)
            , u = r(88)
            , c = r(106)
            , s = r(1)
            , a = r(29)
            , f = r(32)
            , p = 1
            , l = "[object Arguments]"
            , y = "[object Array]"
            , h = "[object Object]"
            , v = Object.prototype.hasOwnProperty;
        t.exports = function (t, e, r, b, d, _) {
            var m = s(t)
                , g = s(e)
                , x = m ? y : c(t)
                , w = g ? y : c(e)
                , j = (x = x == l ? h : x) == h
                , S = (w = w == l ? h : w) == h
                , I = x == w;
            if (I && a(t)) {
                if (!a(e))
                    return !1;
                m = !0,
                    j = !1
            }
            if (I && !j)
                return _ || (_ = new n),
                    m || f(t) ? o(t, e, r, b, d, _) : i(t, e, x, r, b, d, _);
            if (!(r & p)) {
                var P = j && v.call(t, "__wrapped__")
                    , O = S && v.call(e, "__wrapped__");
                if (P || O) {
                    var A = P ? t.value() : t
                        , B = O ? e.value() : e;
                    return _ || (_ = new n),
                        d(A, B, r, b, _)
                }
            }
            return !!I && (_ || (_ = new n),
                u(t, e, r, b, d, _))
        }
    }
    , function (t, e, r) {
        var n = r(14)
            , o = r(80)
            , i = r(81);
        function u(t) {
            var e = -1
                , r = null == t ? 0 : t.length;
            for (this.__data__ = new n; ++e < r;)
                this.add(t[e])
        }
        u.prototype.add = u.prototype.push = o,
            u.prototype.has = i,
            t.exports = u
    }
    , function (t, e) {
        var r = "__lodash_hash_undefined__";
        t.exports = function (t) {
            return this.__data__.set(t, r),
                this
        }
    }
    , function (t, e) {
        t.exports = function (t) {
            return this.__data__.has(t)
        }
    }
    , function (t, e) {
        t.exports = function (t, e) {
            for (var r = -1, n = null == t ? 0 : t.length; ++r < n;)
                if (e(t[r], r, t))
                    return !0;
            return !1
        }
    }
    , function (t, e) {
        t.exports = function (t, e) {
            return t.has(e)
        }
    }
    , function (t, e, r) {
        var n = r(5)
            , o = r(85)
            , i = r(23)
            , u = r(27)
            , c = r(86)
            , s = r(87)
            , a = 1
            , f = 2
            , p = "[object Boolean]"
            , l = "[object Date]"
            , y = "[object Error]"
            , h = "[object Map]"
            , v = "[object Number]"
            , b = "[object RegExp]"
            , d = "[object Set]"
            , _ = "[object String]"
            , m = "[object Symbol]"
            , g = "[object ArrayBuffer]"
            , x = "[object DataView]"
            , w = n ? n.prototype : void 0
            , j = w ? w.valueOf : void 0;
        t.exports = function (t, e, r, n, w, S, I) {
            switch (r) {
                case x:
                    if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
                        return !1;
                    t = t.buffer,
                        e = e.buffer;
                case g:
                    return !(t.byteLength != e.byteLength || !S(new o(t), new o(e)));
                case p:
                case l:
                case v:
                    return i(+t, +e);
                case y:
                    return t.name == e.name && t.message == e.message;
                case b:
                case _:
                    return t == e + "";
                case h:
                    var P = c;
                case d:
                    var O = n & a;
                    if (P || (P = s),
                        t.size != e.size && !O)
                        return !1;
                    var A = I.get(t);
                    if (A)
                        return A == e;
                    n |= f,
                        I.set(t, e);
                    var B = u(P(t), P(e), n, w, S, I);
                    return I.delete(t),
                        B;
                case m:
                    if (j)
                        return j.call(t) == j.call(e)
            }
            return !1
        }
    }
    , function (t, e, r) {
        var n = r(0).Uint8Array;
        t.exports = n
    }
    , function (t, e) {
        t.exports = function (t) {
            var e = -1
                , r = Array(t.size);
            return t.forEach(function (t, n) {
                r[++e] = [n, t]
            }),
                r
        }
    }
    , function (t, e) {
        t.exports = function (t) {
            var e = -1
                , r = Array(t.size);
            return t.forEach(function (t) {
                r[++e] = t
            }),
                r
        }
    }
    , function (t, e, r) {
        var n = r(89)
            , o = 1
            , i = Object.prototype.hasOwnProperty;
        t.exports = function (t, e, r, u, c, s) {
            var a = r & o
                , f = n(t)
                , p = f.length;
            if (p != n(e).length && !a)
                return !1;
            for (var l = p; l--;) {
                var y = f[l];
                if (!(a ? y in e : i.call(e, y)))
                    return !1
            }
            var h = s.get(t);
            if (h && s.get(e))
                return h == e;
            var v = !0;
            s.set(t, e),
                s.set(e, t);
            for (var b = a; ++l < p;) {
                var d = t[y = f[l]]
                    , _ = e[y];
                if (u)
                    var m = a ? u(_, d, y, e, t, s) : u(d, _, y, t, e, s);
                if (!(void 0 === m ? d === _ || c(d, _, r, u, s) : m)) {
                    v = !1;
                    break
                }
                b || (b = "constructor" == y)
            }
            if (v && !b) {
                var g = t.constructor
                    , x = e.constructor;
                g != x && "constructor" in t && "constructor" in e && !("function" == typeof g && g instanceof g && "function" == typeof x && x instanceof x) && (v = !1)
            }
            return s.delete(t),
                s.delete(e),
                v
        }
    }
    , function (t, e, r) {
        var n = r(90)
            , o = r(92)
            , i = r(15);
        t.exports = function (t) {
            return n(t, i, o)
        }
    }
    , function (t, e, r) {
        var n = r(91)
            , o = r(1);
        t.exports = function (t, e, r) {
            var i = e(t);
            return o(t) ? i : n(i, r(t))
        }
    }
    , function (t, e) {
        t.exports = function (t, e) {
            for (var r = -1, n = e.length, o = t.length; ++r < n;)
                t[o + r] = e[r];
            return t
        }
    }
    , function (t, e, r) {
        var n = r(93)
            , o = r(94)
            , i = Object.prototype.propertyIsEnumerable
            , u = Object.getOwnPropertySymbols
            , c = u ? function (t) {
                return null == t ? [] : (t = Object(t),
                    n(u(t), function (e) {
                        return i.call(t, e)
                    }))
            }
                : o;
        t.exports = c
    }
    , function (t, e) {
        t.exports = function (t, e) {
            for (var r = -1, n = null == t ? 0 : t.length, o = 0, i = []; ++r < n;) {
                var u = t[r];
                e(u, r, t) && (i[o++] = u)
            }
            return i
        }
    }
    , function (t, e) {
        t.exports = function () {
            return []
        }
    }
    , function (t, e, r) {
        var n = r(96)
            , o = r(28)
            , i = r(1)
            , u = r(29)
            , c = r(31)
            , s = r(32)
            , a = Object.prototype.hasOwnProperty;
        t.exports = function (t, e) {
            var r = i(t)
                , f = !r && o(t)
                , p = !r && !f && u(t)
                , l = !r && !f && !p && s(t)
                , y = r || f || p || l
                , h = y ? n(t.length, String) : []
                , v = h.length;
            for (var b in t)
                !e && !a.call(t, b) || y && ("length" == b || p && ("offset" == b || "parent" == b) || l && ("buffer" == b || "byteLength" == b || "byteOffset" == b) || c(b, v)) || h.push(b);
            return h
        }
    }
    , function (t, e) {
        t.exports = function (t, e) {
            for (var r = -1, n = Array(t); ++r < t;)
                n[r] = e(r);
            return n
        }
    }
    , function (t, e, r) {
        var n = r(3)
            , o = r(4)
            , i = "[object Arguments]";
        t.exports = function (t) {
            return o(t) && n(t) == i
        }
    }
    , function (t, e) {
        t.exports = function () {
            return !1
        }
    }
    , function (t, e, r) {
        var n = r(3)
            , o = r(16)
            , i = r(4)
            , u = {};
        u["[object Float32Array]"] = u["[object Float64Array]"] = u["[object Int8Array]"] = u["[object Int16Array]"] = u["[object Int32Array]"] = u["[object Uint8Array]"] = u["[object Uint8ClampedArray]"] = u["[object Uint16Array]"] = u["[object Uint32Array]"] = !0,
            u["[object Arguments]"] = u["[object Array]"] = u["[object ArrayBuffer]"] = u["[object Boolean]"] = u["[object DataView]"] = u["[object Date]"] = u["[object Error]"] = u["[object Function]"] = u["[object Map]"] = u["[object Number]"] = u["[object Object]"] = u["[object RegExp]"] = u["[object Set]"] = u["[object String]"] = u["[object WeakMap]"] = !1,
            t.exports = function (t) {
                return i(t) && o(t.length) && !!u[n(t)]
            }
    }
    , function (t, e) {
        t.exports = function (t) {
            return function (e) {
                return t(e)
            }
        }
    }
    , function (t, e, r) {
        (function (t) {
            function n(t) {
                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                }
                    : function (t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    }
                )(t)
            }
            var o = r(20)
                , i = "object" == n(e) && e && !e.nodeType && e
                , u = i && "object" == n(t) && t && !t.nodeType && t
                , c = u && u.exports === i && o.process
                , s = function () {
                    try {
                        var t = u && u.require && u.require("util").types;
                        return t || c && c.binding && c.binding("util")
                    } catch (t) { }
                }();
            t.exports = s
        }
        ).call(this, r(30)(t))
    }
    , function (t, e, r) {
        var n = r(103)
            , o = r(104)
            , i = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
            if (!n(t))
                return o(t);
            var e = [];
            for (var r in Object(t))
                i.call(t, r) && "constructor" != r && e.push(r);
            return e
        }
    }
    , function (t, e) {
        var r = Object.prototype;
        t.exports = function (t) {
            var e = t && t.constructor;
            return t === ("function" == typeof e && e.prototype || r)
        }
    }
    , function (t, e, r) {
        var n = r(105)(Object.keys, Object);
        t.exports = n
    }
    , function (t, e) {
        t.exports = function (t, e) {
            return function (r) {
                return t(e(r))
            }
        }
    }
    , function (t, e, r) {
        var n = r(107)
            , o = r(12)
            , i = r(108)
            , u = r(109)
            , c = r(110)
            , s = r(3)
            , a = r(25)
            , f = a(n)
            , p = a(o)
            , l = a(i)
            , y = a(u)
            , h = a(c)
            , v = s;
        (n && "[object DataView]" != v(new n(new ArrayBuffer(1))) || o && "[object Map]" != v(new o) || i && "[object Promise]" != v(i.resolve()) || u && "[object Set]" != v(new u) || c && "[object WeakMap]" != v(new c)) && (v = function (t) {
            var e = s(t)
                , r = "[object Object]" == e ? t.constructor : void 0
                , n = r ? a(r) : "";
            if (n)
                switch (n) {
                    case f:
                        return "[object DataView]";
                    case p:
                        return "[object Map]";
                    case l:
                        return "[object Promise]";
                    case y:
                        return "[object Set]";
                    case h:
                        return "[object WeakMap]"
                }
            return e
        }
        ),
            t.exports = v
    }
    , function (t, e, r) {
        var n = r(2)(r(0), "DataView");
        t.exports = n
    }
    , function (t, e, r) {
        var n = r(2)(r(0), "Promise");
        t.exports = n
    }
    , function (t, e, r) {
        var n = r(2)(r(0), "Set");
        t.exports = n
    }
    , function (t, e, r) {
        var n = r(2)(r(0), "WeakMap");
        t.exports = n
    }
    , function (t, e, r) {
        var n = r(33)
            , o = r(15);
        t.exports = function (t) {
            for (var e = o(t), r = e.length; r--;) {
                var i = e[r]
                    , u = t[i];
                e[r] = [i, u, n(u)]
            }
            return e
        }
    }
    , function (t, e, r) {
        var n = r(26)
            , o = r(113)
            , i = r(117)
            , u = r(18)
            , c = r(33)
            , s = r(34)
            , a = r(10)
            , f = 1
            , p = 2;
        t.exports = function (t, e) {
            return u(t) && c(e) ? s(a(t), e) : function (r) {
                var u = o(r, t);
                return void 0 === u && u === e ? i(r, t) : n(e, u, f | p)
            }
        }
    }
    , function (t, e, r) {
        var n = r(35);
        t.exports = function (t, e, r) {
            var o = null == t ? void 0 : n(t, e);
            return void 0 === o ? r : o
        }
    }
    , function (t, e, r) {
        var n = r(115)
            , o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
            , i = /\\(\\)?/g
            , u = n(function (t) {
                var e = [];
                return 46 === t.charCodeAt(0) && e.push(""),
                    t.replace(o, function (t, r, n, o) {
                        e.push(n ? o.replace(i, "$1") : r || t)
                    }),
                    e
            });
        t.exports = u
    }
    , function (t, e, r) {
        var n = r(116)
            , o = 500;
        t.exports = function (t) {
            var e = n(t, function (t) {
                return r.size === o && r.clear(),
                    t
            })
                , r = e.cache;
            return e
        }
    }
    , function (t, e, r) {
        var n = r(14)
            , o = "Expected a function";
        function i(t, e) {
            if ("function" != typeof t || null != e && "function" != typeof e)
                throw new TypeError(o);
            var r = function r() {
                var n = arguments
                    , o = e ? e.apply(this, n) : n[0]
                    , i = r.cache;
                if (i.has(o))
                    return i.get(o);
                var u = t.apply(this, n);
                return r.cache = i.set(o, u) || i,
                    u
            };
            return r.cache = new (i.Cache || n),
                r
        }
        i.Cache = n,
            t.exports = i
    }
    , function (t, e, r) {
        var n = r(118)
            , o = r(119);
        t.exports = function (t, e) {
            return null != t && o(t, e, n)
        }
    }
    , function (t, e) {
        t.exports = function (t, e) {
            return null != t && e in Object(t)
        }
    }
    , function (t, e, r) {
        var n = r(36)
            , o = r(28)
            , i = r(1)
            , u = r(31)
            , c = r(16)
            , s = r(10);
        t.exports = function (t, e, r) {
            for (var a = -1, f = (e = n(e, t)).length, p = !1; ++a < f;) {
                var l = s(e[a]);
                if (!(p = null != t && r(t, l)))
                    break;
                t = t[l]
            }
            return p || ++a != f ? p : !!(f = null == t ? 0 : t.length) && c(f) && u(l, f) && (i(t) || o(t))
        }
    }
    , function (t, e) {
        t.exports = function (t) {
            return t
        }
    }
    , function (t, e, r) {
        var n = r(122)
            , o = r(123)
            , i = r(18)
            , u = r(10);
        t.exports = function (t) {
            return i(t) ? n(u(t)) : o(t)
        }
    }
    , function (t, e) {
        t.exports = function (t) {
            return function (e) {
                return null == e ? void 0 : e[t]
            }
        }
    }
    , function (t, e, r) {
        var n = r(35);
        t.exports = function (t) {
            return function (e) {
                return n(e, t)
            }
        }
    }
    , function (t, e, r) {
        var n = r(125)
            , o = r(17);
        t.exports = function (t, e) {
            var r = -1
                , i = o(t) ? Array(t.length) : [];
            return n(t, function (t, n, o) {
                i[++r] = e(t, n, o)
            }),
                i
        }
    }
    , function (t, e, r) {
        var n = r(126)
            , o = r(129)(n);
        t.exports = o
    }
    , function (t, e, r) {
        var n = r(127)
            , o = r(15);
        t.exports = function (t, e) {
            return t && n(t, e, o)
        }
    }
    , function (t, e, r) {
        var n = r(128)();
        t.exports = n
    }
    , function (t, e) {
        t.exports = function (t) {
            return function (e, r, n) {
                for (var o = -1, i = Object(e), u = n(e), c = u.length; c--;) {
                    var s = u[t ? c : ++o];
                    if (!1 === r(i[s], s, i))
                        break
                }
                return e
            }
        }
    }
    , function (t, e, r) {
        var n = r(17);
        t.exports = function (t, e) {
            return function (r, o) {
                if (null == r)
                    return r;
                if (!n(r))
                    return t(r, o);
                for (var i = r.length, u = e ? i : -1, c = Object(r); (e ? u-- : ++u < i) && !1 !== o(c[u], u, c);)
                    ;
                return r
            }
        }
    }
    , function (t, e, r) {
        "use strict";
        r.r(e);
        var n = r(37)
            , o = r.n(n)
            , i = r(38)
            , u = r.n(i);
        r(39);
        var c = function (t) {
            return null == t || "" === t
        }
            , s = function (t) {
                for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
                    r[n - 1] = arguments[n];
                var o = [];
                return t.forEach(function (t, e) {
                    var n = r[e];
                    c(t) || o.push(t),
                        c(n) || o.push(u()(n))
                }),
                    o.join("")
            };
        function a() {
            var t = function (t, e) {
                e || (e = t.slice(0));
                return Object.freeze(Object.defineProperties(t, {
                    raw: {
                        value: Object.freeze(e)
                    }
                }))
            }(["<option ", ' value="', '">\n        ', "\n      </option>"]);
            return a = function () {
                return t
            }
                ,
                t
        }
        gapi.analytics.ready(function () {
            function t(t, e, r) {
                t.innerHTML = e.map(function (t) {
                    var e = t.id
                        , n = t.name;
                    return s(a(), e == r ? "selected" : "", e, n)
                }).join("")
            }
            gapi.analytics.createComponent("ViewSelector2", {
                execute: function () {
                    return this.setup_(function () {
                        this.updateAccounts_(),
                            this.changed_ && (this.render_(),
                                this.onChange_())
                    }
                        .bind(this)),
                        this
                },
                set: function (t) {
                    if (!!t.ids + !!t.viewId + !!t.propertyId + !!t.accountId > 1)
                        throw new Error('You cannot specify more than one of the following options: "ids", "viewId", "accountId", "propertyId"');
                    if (t.container && this.container)
                        throw new Error("You cannot change containers once a view selector has been rendered on the page.");
                    var e = this.get();
                    return e.ids == t.ids && e.viewId == t.viewId && e.propertyId == t.propertyId && e.accountId == t.accountId || (e.ids = null,
                        e.viewId = null,
                        e.propertyId = null,
                        e.accountId = null),
                        gapi.analytics.Component.prototype.set.call(this, t)
                },
                setup_: function (t) {
                    var e = this
                        , r = function () {
                            o.a.get().then(function (r) {
                                e.summaries = r,
                                    e.accounts = e.summaries.all(),
                                    t()
                            }, function (t) {
                                e.emit("error", t)
                            })
                        };
                    gapi.analytics.auth.isAuthorized() ? r() : gapi.analytics.auth.on("signIn", r)
                },
                updateAccounts_: function () {
                    var t, e, r, n = function (t) {
                        if (t.ids || t.viewId)
                            return {
                                prop: "viewId",
                                value: t.viewId || t.ids && t.ids.replace(/^ga:/, "")
                            };
                        if (t.propertyId)
                            return {
                                prop: "propertyId",
                                value: t.propertyId
                            };
                        if (t.accountId)
                            return {
                                prop: "accountId",
                                value: t.accountId
                            }
                    }(this.get());
                    if (this.summaries.all().length) {
                        if (n)
                            switch (n.prop) {
                                case "viewId":
                                    t = this.summaries.getProfile(n.value),
                                        e = this.summaries.getAccountByProfileId(n.value),
                                        r = this.summaries.getWebPropertyByProfileId(n.value);
                                    break;
                                case "propertyId":
                                    r = this.summaries.getWebProperty(n.value),
                                        e = this.summaries.getAccountByWebPropertyId(n.value),
                                        t = r && r.views && r.views[0];
                                    break;
                                case "accountId":
                                    t = (r = (e = this.summaries.getAccount(n.value)) && e.properties && e.properties[0]) && r.views && r.views[0]
                            }
                        else
                            t = (r = (e = this.accounts[0]) && e.properties && e.properties[0]) && r.views && r.views[0];
                        e || r || t ? e == this.account && r == this.property && t == this.view || (this.changed_ = {
                            account: e && e != this.account,
                            property: r && r != this.property,
                            view: t && t != this.view
                        },
                            this.account = e,
                            this.properties = e.properties,
                            this.property = r,
                            this.views = r && r.views,
                            this.view = t,
                            this.ids = t && "ga:" + t.id) : this.emit("error", new Error("This user does not have access to " + n.prop.slice(0, -2) + " : " + n.value))
                    } else
                        this.emit("error", new Error('This user does not have any Google Analytics accounts. You can sign up at "www.google.com/analytics".'))
                },
                render_: function () {
                    var e = this.get();
                    this.container = "string" == typeof e.container ? document.getElementById(e.container) : e.container,
                        this.container.innerHTML = e.template || this.template;
                    var r = this.container.querySelectorAll("select")
                        , n = this.accounts
                        , o = this.properties || [{
                            name: "(Empty)",
                            id: ""
                        }]
                        , i = this.views || [{
                            name: "(Empty)",
                            id: ""
                        }];
                    t(r[0], n, this.account.id),
                        t(r[1], o, this.property && this.property.id),
                        t(r[2], i, this.view && this.view.id),
                        r[0].onchange = this.onUserSelect_.bind(this, r[0], "accountId"),
                        r[1].onchange = this.onUserSelect_.bind(this, r[1], "propertyId"),
                        r[2].onchange = this.onUserSelect_.bind(this, r[2], "viewId")
                },
                onChange_: function () {
                    var t = {
                        account: this.account,
                        property: this.property,
                        view: this.view,
                        ids: this.view && "ga:" + this.view.id
                    };
                    this.changed_ && (this.changed_.account && this.emit("accountChange", t),
                        this.changed_.property && this.emit("propertyChange", t),
                        this.changed_.view && (this.emit("viewChange", t),
                            this.emit("idsChange", t),
                            this.emit("change", t.ids))),
                        this.changed_ = null
                },
                onUserSelect_: function (t, e) {
                    var r = {};
                    r[e] = t.value,
                        this.set(r),
                        this.execute()
                },
                template: '<div class="ViewSelector2">  <div class="ViewSelector2-item">    <label>Account</label>    <select class="FormField"></select>  </div>  <div class="ViewSelector2-item">    <label>Property</label>    <select class="FormField"></select>  </div>  <div class="ViewSelector2-item">    <label>View</label>    <select class="FormField"></select>  </div></div>'
            })
        })
    }
]);
//# sourceMappingURL=view-selector2.js.map
