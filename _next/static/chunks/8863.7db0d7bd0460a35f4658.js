(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8863], {
        3868: function(e, t, r) {
            "use strict";
            r.d(t, {
                x: function() {
                    return X
                }
            });
            var n = r(7462),
                o = r(3366),
                i = r(7294),
                a = r(9158),
                s = r(2212);
            r(4155);

            function u() {
                var e, t = 0,
                    r = [],
                    n = 0,
                    o = 0;
                var i = d((function(e) {
                        o || s(1, e)
                    })),
                    a = d((function(e) {
                        o || s(-1, e)
                    }));

                function s(r, n) {
                    o++;
                    var i = 0;
                    try {
                        n === g && p();
                        var a = r > 0 && c(n);
                        a ? a.call(n, d((function(e) {
                            i++, s(1, e)
                        })), d((function(e) {
                            i++, s(-1, e)
                        }))) : (t = r, e = n, f())
                    } catch (u) {
                        t || i || s(-1, u)
                    }
                }

                function f() {
                    n || (setTimeout(l, 0), n = 1)
                }

                function l() {
                    var e = r;
                    n = 0, r = [], e.forEach(h)
                }

                function h(e) {
                    e()
                }

                function c(e) {
                    var t = e && (v(e) || "object" === typeof e) && e.then;
                    return v(t) && t
                }

                function d(e) {
                    var t = 0;
                    return function() {
                        for (var r = [], n = arguments.length; n--;) r[n] = arguments[n];
                        t++ || e.apply(this, r)
                    }
                }

                function p() {
                    throw new TypeError("Chaining cycle detected")
                }
                var v = function(e) {
                        return "function" === typeof e
                    },
                    g = {
                        then: function(n, o) {
                            var i = u();
                            return r.push((function() {
                                var r = t > 0 ? n : o;
                                if (v(r)) try {
                                    var a = r(e);
                                    a === i && p();
                                    var s = c(a);
                                    s ? s.call(a, i.resolve, i.reject) : i.resolve(a)
                                } catch (u) {
                                    i.reject(u)
                                } else i[t > 0 ? "resolve" : "reject"](e)
                            })), t && f(), i
                        },
                        resolve: i,
                        reject: a
                    };
                return g
            }

            function f() {
                var e, t, r = new Promise((function(r, n) {
                    e = r, t = n
                }));
                return {
                    then: r.then.bind(r),
                    resolve: e,
                    reject: t
                }
            }
            u.all = f.all = function(e) {
                var t = 0,
                    r = [],
                    n = l();
                return 0 === e.length ? n.resolve([]) : e.forEach((function(o, i) {
                    var a = l();
                    a.resolve(o), a.then((function(o) {
                        t++, r[i] = o, t === e.length && n.resolve(r)
                    }), n.reject)
                })), n
            };
            var l = "function" === typeof Promise ? f : u;

            function h() {
                var e = Object.create(null);

                function t(n, o) {
                    var i = n.id,
                        a = n.name,
                        s = n.dependencies;
                    void 0 === s && (s = []);
                    var u = n.init;
                    void 0 === u && (u = function() {});
                    var f = n.getTransferables;
                    if (void 0 === f && (f = null), !e[i]) try {
                        s = s.map((function(r) {
                            return r && r.isWorkerModule && (t(r, (function(e) {
                                if (e instanceof Error) throw e
                            })), r = e[r.id].value), r
                        })), u = r("<" + a + ">.init", u), f && (f = r("<" + a + ">.getTransferables", f));
                        var l = null;
                        "function" === typeof u ? l = u.apply(void 0, s) : console.error("worker module init function failed to rehydrate"), e[i] = {
                            id: i,
                            value: l,
                            getTransferables: f
                        }, o(l)
                    } catch (h) {
                        h && h.noLog || console.error(h), o(h)
                    }
                }

                function r(e, t) {
                    var r = void 0;
                    self.troikaDefine = function(e) {
                        return r = e
                    };
                    var n = URL.createObjectURL(new Blob(["/** " + e.replace(/\*/g, "") + " **/\n\ntroikaDefine(\n" + t + "\n)"], {
                        type: "application/javascript"
                    }));
                    try {
                        importScripts(n)
                    } catch (o) {
                        console.error(o)
                    }
                    return URL.revokeObjectURL(n), delete self.troikaDefine, r
                }
                self.addEventListener("message", (function(r) {
                    var n = r.data,
                        o = n.messageId,
                        i = n.action,
                        a = n.data;
                    try {
                        "registerModule" === i && t(a, (function(e) {
                            e instanceof Error ? postMessage({
                                messageId: o,
                                success: !1,
                                error: e.message
                            }) : postMessage({
                                messageId: o,
                                success: !0,
                                result: {
                                    isCallable: "function" === typeof e
                                }
                            })
                        })), "callModule" === i && function(t, r) {
                            var n, o = t.id,
                                i = t.args;
                            e[o] && "function" === typeof e[o].value || r(new Error("Worker module " + o + ": not found or its 'init' did not return a function"));
                            try {
                                var a = (n = e[o]).value.apply(n, i);
                                a && "function" === typeof a.then ? a.then(s, (function(e) {
                                    return r(e instanceof Error ? e : new Error("" + e))
                                })) : s(a)
                            } catch (u) {
                                r(u)
                            }

                            function s(t) {
                                try {
                                    var n = e[o].getTransferables && e[o].getTransferables(t);
                                    n && Array.isArray(n) && n.length || (n = void 0), r(t, n)
                                } catch (u) {
                                    console.error(u), r(u)
                                }
                            }
                        }(a, (function(e, t) {
                            e instanceof Error ? postMessage({
                                messageId: o,
                                success: !1,
                                error: e.message
                            }) : postMessage({
                                messageId: o,
                                success: !0,
                                result: e
                            }, t || void 0)
                        }))
                    } catch (s) {
                        postMessage({
                            messageId: o,
                            success: !1,
                            error: s.stack
                        })
                    }
                }))
            }
            var c = function() {
                    var e = !1;
                    if ("undefined" !== typeof window && "undefined" !== typeof window.document) try {
                        new Worker(URL.createObjectURL(new Blob([""], {
                            type: "application/javascript"
                        }))).terminate(), e = !0
                    } catch (t) {
                        console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: [" + t.message + "]")
                    }
                    return c = function() {
                        return e
                    }, e
                },
                d = 0,
                p = 0,
                v = !1,
                g = Object.create(null),
                y = function() {
                    var e = Object.create(null);
                    return e._count = 0, e
                }();

            function m(e) {
                if ((!e || "function" !== typeof e.init) && !v) throw new Error("requires `options.init` function");
                var t = e.dependencies,
                    r = e.init,
                    n = e.getTransferables,
                    o = e.workerId;
                if (!c()) return function(e) {
                    var t = function() {
                        for (var e = [], r = arguments.length; r--;) e[r] = arguments[r];
                        return t._getInitResult().then((function(t) {
                            if ("function" === typeof t) return t.apply(void 0, e);
                            throw new Error("Worker module function was called but `init` did not return a callable function")
                        }))
                    };
                    return t._getInitResult = function() {
                        var r = e.dependencies,
                            n = e.init;
                        r = Array.isArray(r) ? r.map((function(e) {
                            return e && e._getInitResult ? e._getInitResult() : e
                        })) : [];
                        var o = l.all(r).then((function(e) {
                            return n.apply(null, e)
                        }));
                        return t._getInitResult = function() {
                            return o
                        }, o
                    }, t
                }(e);
                null == o && (o = "#default");
                var i = "workerModule" + ++d,
                    a = e.name || i,
                    s = null;

                function u() {
                    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
                    return s || (s = U(o, "registerModule", u.workerModuleData)), s.then((function(t) {
                        if (t.isCallable) return U(o, "callModule", {
                            id: i,
                            args: e
                        });
                        throw new Error("Worker module function was called but `init` did not return a callable function")
                    }))
                }
                return t = t && t.map((function(e) {
                    return "function" !== typeof e || e.workerModuleData || (v = !0, e = m({
                        workerId: o,
                        name: "<" + a + "> function dependency: " + e.name,
                        init: "function(){return (\n" + b(e) + "\n)}"
                    }), v = !1), e && e.workerModuleData && (e = e.workerModuleData), e
                })), u.workerModuleData = {
                    isWorkerModule: !0,
                    id: i,
                    name: a,
                    dependencies: t,
                    init: b(r),
                    getTransferables: n && b(n)
                }, u
            }

            function b(e) {
                var t = e.toString();
                return !/^function/.test(t) && /^\w+\s*\(/.test(t) && (t = "function " + t), t
            }

            function U(e, t, r) {
                var n = l(),
                    o = ++p;
                return y[o] = function(e) {
                        e.success ? n.resolve(e.result) : n.reject(new Error("Error in worker " + t + " call: " + e.error))
                    }, y._count++, y._count > 1e3 && console.warn("Large number of open WorkerModule requests, some may not be returning"),
                    function(e) {
                        var t = g[e];
                        if (!t) {
                            var r = b(h);
                            (t = g[e] = new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: " + e.replace(/\*/g, "") + " **/\n\n;(" + r + ")()"], {
                                type: "application/javascript"
                            })))).onmessage = function(e) {
                                var t = e.data,
                                    r = t.messageId,
                                    n = y[r];
                                if (!n) throw new Error("WorkerModule response with empty or unknown messageId");
                                delete y[r], y._count--, n(t)
                            }
                        }
                        return t
                    }(e).postMessage({
                        messageId: o,
                        action: t,
                        data: r
                    }), n
            }
            var S = m({
                name: "Thenable",
                dependencies: [l],
                init: function(e) {
                    return e
                }
            });
            const w = /\bvoid\s+main\s*\(\s*\)\s*{/g;

            function T(e) {
                return e.replace(/^[ \t]*#include +<([\w\d./]+)>/gm, (function(e, t) {
                    let r = s.ShaderChunk[t];
                    return r ? T(r) : e
                }))
            }
            const _ = Object.assign || function() {
                    let e = arguments[0];
                    for (let t = 1, r = arguments.length; t < r; t++) {
                        let r = arguments[t];
                        if (r)
                            for (let t in r) r.hasOwnProperty(t) && (e[t] = r[t])
                    }
                    return e
                },
                x = Date.now(),
                E = new WeakMap,
                k = new Map;
            let O = 1e10;

            function C(e, t) {
                const r = function(e) {
                    const t = JSON.stringify(e, F);
                    let r = P.get(t);
                    null == r && P.set(t, r = ++A);
                    return r
                }(t);
                let n = E.get(e);
                if (n || E.set(e, n = Object.create(null)), n[r]) return new n[r];
                const o = `_onBeforeCompile${r}`,
                    i = function(n) {
                        e.onBeforeCompile.call(this, n);
                        const i = r + "|||" + n.vertexShader + "|||" + n.fragmentShader;
                        let a = k[i];
                        if (!a) {
                            const e = function({
                                vertexShader: e,
                                fragmentShader: t
                            }, r, n) {
                                let {
                                    vertexDefs: o,
                                    vertexMainIntro: i,
                                    vertexMainOutro: a,
                                    vertexTransform: s,
                                    fragmentDefs: u,
                                    fragmentMainIntro: f,
                                    fragmentMainOutro: l,
                                    fragmentColorTransform: h,
                                    customRewriter: c,
                                    timeUniform: d
                                } = r;
                                o = o || "", i = i || "", a = a || "", u = u || "", f = f || "", l = l || "", (s || c) && (e = T(e));
                                (h || c) && (t = T(t = t.replace(/^[ \t]*#include <((?:tonemapping|encodings|fog|premultiplied_alpha|dithering)_fragment)>/gm, "\n//!BEGIN_POST_CHUNK $1\n$&\n//!END_POST_CHUNK\n")));
                                if (c) {
                                    let r = c({
                                        vertexShader: e,
                                        fragmentShader: t
                                    });
                                    e = r.vertexShader, t = r.fragmentShader
                                }
                                if (h) {
                                    let e = [];
                                    t = t.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm, (t => (e.push(t), ""))), l = `${h}\n${e.join("\n")}\n${l}`
                                }
                                if (d) {
                                    const e = `\nuniform float ${d};\n`;
                                    o = e + o, u = e + u
                                }
                                s && (o = `${o}\nvoid troikaVertexTransform${n}(inout vec3 position, inout vec3 normal, inout vec2 uv) {\n  ${s}\n}\n`, i = `\ntroika_position_${n} = vec3(position);\ntroika_normal_${n} = vec3(normal);\ntroika_uv_${n} = vec2(uv);\ntroikaVertexTransform${n}(troika_position_${n}, troika_normal_${n}, troika_uv_${n});\n${i}\n`, e = (e = `vec3 troika_position_${n};\nvec3 troika_normal_${n};\nvec2 troika_uv_${n};\n${e}\n`).replace(/\b(position|normal|uv)\b/g, ((e, t, r, o) => /\battribute\s+vec[23]\s+$/.test(o.substr(0, r)) ? t : `troika_${t}_${n}`)));
                                return e = I(e, n, o, i, a), t = I(t, n, u, f, l), {
                                    vertexShader: e,
                                    fragmentShader: t
                                }
                            }(n, t, r);
                            a = k[i] = e
                        }
                        n.vertexShader = a.vertexShader, n.fragmentShader = a.fragmentShader, _(n.uniforms, this.uniforms), t.timeUniform && (n.uniforms[t.timeUniform] = {
                            get value() {
                                return Date.now() - x
                            }
                        }), this[o] && this[o](n)
                    },
                    a = function() {
                        return u(t.chained ? e : e.clone())
                    },
                    u = function(n) {
                        const o = Object.create(n, f);
                        return Object.defineProperty(o, "baseMaterial", {
                            value: e
                        }), Object.defineProperty(o, "id", {
                            value: O++
                        }), o.uuid = s.MathUtils.generateUUID(), o.uniforms = _({}, n.uniforms, t.uniforms), o.defines = _({}, n.defines, t.defines), o.defines[`TROIKA_DERIVED_MATERIAL_${r}`] = "", o.extensions = _({}, n.extensions, t.extensions), o._listeners = void 0, o
                    },
                    f = {
                        constructor: {
                            value: a
                        },
                        isDerivedMaterial: {
                            value: !0
                        },
                        customProgramCacheKey: {
                            writable: !0,
                            configurable: !0,
                            value: function() {
                                return r
                            }
                        },
                        onBeforeCompile: {
                            get: () => i,
                            set(e) {
                                this[o] = e
                            }
                        },
                        copy: {
                            writable: !0,
                            configurable: !0,
                            value: function(t) {
                                return e.copy.call(this, t), e.isShaderMaterial || e.isDerivedMaterial || (_(this.extensions, t.extensions), _(this.defines, t.defines), _(this.uniforms, s.UniformsUtils.clone(t.uniforms))), this
                            }
                        },
                        clone: {
                            writable: !0,
                            configurable: !0,
                            value: function() {
                                const t = new e.constructor;
                                return u(t).copy(this)
                            }
                        },
                        getDepthMaterial: {
                            writable: !0,
                            configurable: !0,
                            value: function() {
                                let r = this._depthMaterial;
                                return r || (r = this._depthMaterial = C(e.isDerivedMaterial ? e.getDepthMaterial() : new s.MeshDepthMaterial({
                                    depthPacking: s.RGBADepthPacking
                                }), t), r.defines.IS_DEPTH_MATERIAL = "", r.uniforms = this.uniforms), r
                            }
                        },
                        getDistanceMaterial: {
                            writable: !0,
                            configurable: !0,
                            value: function() {
                                let r = this._distanceMaterial;
                                return r || (r = this._distanceMaterial = C(e.isDerivedMaterial ? e.getDistanceMaterial() : new s.MeshDistanceMaterial, t), r.defines.IS_DISTANCE_MATERIAL = "", r.uniforms = this.uniforms), r
                            }
                        },
                        dispose: {
                            writable: !0,
                            configurable: !0,
                            value() {
                                const {
                                    _depthMaterial: t,
                                    _distanceMaterial: r
                                } = this;
                                t && t.dispose(), r && r.dispose(), e.dispose.call(this)
                            }
                        }
                    };
                return n[r] = a, new a
            }

            function I(e, t, r, n, o) {
                return (n || o || r) && (e = e.replace(w, `\n${r}\nvoid troikaOrigMain${t}() {`), e += `\nvoid main() {\n  ${n}\n  troikaOrigMain${t}();\n  ${o}\n}`), e
            }

            function F(e, t) {
                return "uniforms" === e ? void 0 : "function" === typeof t ? t.toString() : t
            }
            let A = 0;
            const P = new Map;
            s.DoubleSide;
            const D = m({
                    name: "Typr Font Parser",
                    dependencies: [function() {
                        return "undefined" == typeof window && (self.window = self),
                            function(e) {
                                var t = {
                                    parse: function(e) {
                                        var r = t._bin,
                                            n = new Uint8Array(e);
                                        if ("ttcf" == r.readASCII(n, 0, 4)) {
                                            var o = 4;
                                            r.readUshort(n, o), o += 2, r.readUshort(n, o), o += 2;
                                            var i = r.readUint(n, o);
                                            o += 4;
                                            for (var a = [], s = 0; s < i; s++) {
                                                var u = r.readUint(n, o);
                                                o += 4, a.push(t._readFont(n, u))
                                            }
                                            return a
                                        }
                                        return [t._readFont(n, 0)]
                                    },
                                    _readFont: function(e, r) {
                                        var n = t._bin,
                                            o = r;
                                        n.readFixed(e, r), r += 4;
                                        var i = n.readUshort(e, r);
                                        r += 2, n.readUshort(e, r), r += 2, n.readUshort(e, r), r += 2, n.readUshort(e, r), r += 2;
                                        for (var a = ["cmap", "head", "hhea", "maxp", "hmtx", "name", "OS/2", "post", "loca", "glyf", "kern", "CFF ", "GPOS", "GSUB", "SVG "], s = {
                                                _data: e,
                                                _offset: o
                                            }, u = {}, f = 0; f < i; f++) {
                                            var l = n.readASCII(e, r, 4);
                                            r += 4, n.readUint(e, r), r += 4;
                                            var h = n.readUint(e, r);
                                            r += 4;
                                            var c = n.readUint(e, r);
                                            r += 4, u[l] = {
                                                offset: h,
                                                length: c
                                            }
                                        }
                                        for (f = 0; f < a.length; f++) {
                                            var d = a[f];
                                            u[d] && (s[d.trim()] = t[d.trim()].parse(e, u[d].offset, u[d].length, s))
                                        }
                                        return s
                                    },
                                    _tabOffset: function(e, r, n) {
                                        for (var o = t._bin, i = o.readUshort(e, n + 4), a = n + 12, s = 0; s < i; s++) {
                                            var u = o.readASCII(e, a, 4);
                                            a += 4, o.readUint(e, a), a += 4;
                                            var f = o.readUint(e, a);
                                            if (a += 4, o.readUint(e, a), a += 4, u == r) return f
                                        }
                                        return 0
                                    }
                                };
                                t._bin = {
                                    readFixed: function(e, t) {
                                        return (e[t] << 8 | e[t + 1]) + (e[t + 2] << 8 | e[t + 3]) / 65540
                                    },
                                    readF2dot14: function(e, r) {
                                        return t._bin.readShort(e, r) / 16384
                                    },
                                    readInt: function(e, r) {
                                        var n = t._bin.t.uint8;
                                        return n[0] = e[r + 3], n[1] = e[r + 2], n[2] = e[r + 1], n[3] = e[r], t._bin.t.int32[0]
                                    },
                                    readInt8: function(e, r) {
                                        return t._bin.t.uint8[0] = e[r], t._bin.t.int8[0]
                                    },
                                    readShort: function(e, r) {
                                        var n = t._bin.t.uint8;
                                        return n[1] = e[r], n[0] = e[r + 1], t._bin.t.int16[0]
                                    },
                                    readUshort: function(e, t) {
                                        return e[t] << 8 | e[t + 1]
                                    },
                                    readUshorts: function(e, r, n) {
                                        for (var o = [], i = 0; i < n; i++) o.push(t._bin.readUshort(e, r + 2 * i));
                                        return o
                                    },
                                    readUint: function(e, r) {
                                        var n = t._bin.t.uint8;
                                        return n[3] = e[r], n[2] = e[r + 1], n[1] = e[r + 2], n[0] = e[r + 3], t._bin.t.uint32[0]
                                    },
                                    readUint64: function(e, r) {
                                        return 4294967296 * t._bin.readUint(e, r) + t._bin.readUint(e, r + 4)
                                    },
                                    readASCII: function(e, t, r) {
                                        for (var n = "", o = 0; o < r; o++) n += String.fromCharCode(e[t + o]);
                                        return n
                                    },
                                    readUnicode: function(e, t, r) {
                                        for (var n = "", o = 0; o < r; o++) {
                                            var i = e[t++] << 8 | e[t++];
                                            n += String.fromCharCode(i)
                                        }
                                        return n
                                    },
                                    _tdec: "undefined" != typeof window && window.TextDecoder ? new window.TextDecoder : null,
                                    readUTF8: function(e, r, n) {
                                        var o = t._bin._tdec;
                                        return o && 0 == r && n == e.length ? o.decode(e) : t._bin.readASCII(e, r, n)
                                    },
                                    readBytes: function(e, t, r) {
                                        for (var n = [], o = 0; o < r; o++) n.push(e[t + o]);
                                        return n
                                    },
                                    readASCIIArray: function(e, t, r) {
                                        for (var n = [], o = 0; o < r; o++) n.push(String.fromCharCode(e[t + o]));
                                        return n
                                    }
                                }, t._bin.t = {
                                    buff: new ArrayBuffer(8)
                                }, t._bin.t.int8 = new Int8Array(t._bin.t.buff), t._bin.t.uint8 = new Uint8Array(t._bin.t.buff), t._bin.t.int16 = new Int16Array(t._bin.t.buff), t._bin.t.uint16 = new Uint16Array(t._bin.t.buff), t._bin.t.int32 = new Int32Array(t._bin.t.buff), t._bin.t.uint32 = new Uint32Array(t._bin.t.buff), t._lctf = {}, t._lctf.parse = function(e, r, n, o, i) {
                                    var a = t._bin,
                                        s = {},
                                        u = r;
                                    a.readFixed(e, r), r += 4;
                                    var f = a.readUshort(e, r);
                                    r += 2;
                                    var l = a.readUshort(e, r);
                                    r += 2;
                                    var h = a.readUshort(e, r);
                                    return r += 2, s.scriptList = t._lctf.readScriptList(e, u + f), s.featureList = t._lctf.readFeatureList(e, u + l), s.lookupList = t._lctf.readLookupList(e, u + h, i), s
                                }, t._lctf.readLookupList = function(e, r, n) {
                                    var o = t._bin,
                                        i = r,
                                        a = [],
                                        s = o.readUshort(e, r);
                                    r += 2;
                                    for (var u = 0; u < s; u++) {
                                        var f = o.readUshort(e, r);
                                        r += 2;
                                        var l = t._lctf.readLookupTable(e, i + f, n);
                                        a.push(l)
                                    }
                                    return a
                                }, t._lctf.readLookupTable = function(e, r, n) {
                                    var o = t._bin,
                                        i = r,
                                        a = {
                                            tabs: []
                                        };
                                    a.ltype = o.readUshort(e, r), r += 2, a.flag = o.readUshort(e, r), r += 2;
                                    var s = o.readUshort(e, r);
                                    r += 2;
                                    for (var u = a.ltype, f = 0; f < s; f++) {
                                        var l = o.readUshort(e, r);
                                        r += 2;
                                        var h = n(e, u, i + l, a);
                                        a.tabs.push(h)
                                    }
                                    return a
                                }, t._lctf.numOfOnes = function(e) {
                                    for (var t = 0, r = 0; r < 32; r++) 0 != (e >>> r & 1) && t++;
                                    return t
                                }, t._lctf.readClassDef = function(e, r) {
                                    var n = t._bin,
                                        o = [],
                                        i = n.readUshort(e, r);
                                    if (r += 2, 1 == i) {
                                        var a = n.readUshort(e, r);
                                        r += 2;
                                        var s = n.readUshort(e, r);
                                        r += 2;
                                        for (var u = 0; u < s; u++) o.push(a + u), o.push(a + u), o.push(n.readUshort(e, r)), r += 2
                                    }
                                    if (2 == i) {
                                        var f = n.readUshort(e, r);
                                        for (r += 2, u = 0; u < f; u++) o.push(n.readUshort(e, r)), r += 2, o.push(n.readUshort(e, r)), r += 2, o.push(n.readUshort(e, r)), r += 2
                                    }
                                    return o
                                }, t._lctf.getInterval = function(e, t) {
                                    for (var r = 0; r < e.length; r += 3) {
                                        var n = e[r],
                                            o = e[r + 1];
                                        if (e[r + 2], n <= t && t <= o) return r
                                    }
                                    return -1
                                }, t._lctf.readCoverage = function(e, r) {
                                    var n = t._bin,
                                        o = {};
                                    o.fmt = n.readUshort(e, r), r += 2;
                                    var i = n.readUshort(e, r);
                                    return r += 2, 1 == o.fmt && (o.tab = n.readUshorts(e, r, i)), 2 == o.fmt && (o.tab = n.readUshorts(e, r, 3 * i)), o
                                }, t._lctf.coverageIndex = function(e, r) {
                                    var n = e.tab;
                                    if (1 == e.fmt) return n.indexOf(r);
                                    if (2 == e.fmt) {
                                        var o = t._lctf.getInterval(n, r);
                                        if (-1 != o) return n[o + 2] + (r - n[o])
                                    }
                                    return -1
                                }, t._lctf.readFeatureList = function(e, r) {
                                    var n = t._bin,
                                        o = r,
                                        i = [],
                                        a = n.readUshort(e, r);
                                    r += 2;
                                    for (var s = 0; s < a; s++) {
                                        var u = n.readASCII(e, r, 4);
                                        r += 4;
                                        var f = n.readUshort(e, r);
                                        r += 2;
                                        var l = t._lctf.readFeatureTable(e, o + f);
                                        l.tag = u.trim(), i.push(l)
                                    }
                                    return i
                                }, t._lctf.readFeatureTable = function(e, r) {
                                    var n = t._bin,
                                        o = r,
                                        i = {},
                                        a = n.readUshort(e, r);
                                    r += 2, a > 0 && (i.featureParams = o + a);
                                    var s = n.readUshort(e, r);
                                    r += 2, i.tab = [];
                                    for (var u = 0; u < s; u++) i.tab.push(n.readUshort(e, r + 2 * u));
                                    return i
                                }, t._lctf.readScriptList = function(e, r) {
                                    var n = t._bin,
                                        o = r,
                                        i = {},
                                        a = n.readUshort(e, r);
                                    r += 2;
                                    for (var s = 0; s < a; s++) {
                                        var u = n.readASCII(e, r, 4);
                                        r += 4;
                                        var f = n.readUshort(e, r);
                                        r += 2, i[u.trim()] = t._lctf.readScriptTable(e, o + f)
                                    }
                                    return i
                                }, t._lctf.readScriptTable = function(e, r) {
                                    var n = t._bin,
                                        o = r,
                                        i = {},
                                        a = n.readUshort(e, r);
                                    r += 2, i.default = t._lctf.readLangSysTable(e, o + a);
                                    var s = n.readUshort(e, r);
                                    r += 2;
                                    for (var u = 0; u < s; u++) {
                                        var f = n.readASCII(e, r, 4);
                                        r += 4;
                                        var l = n.readUshort(e, r);
                                        r += 2, i[f.trim()] = t._lctf.readLangSysTable(e, o + l)
                                    }
                                    return i
                                }, t._lctf.readLangSysTable = function(e, r) {
                                    var n = t._bin,
                                        o = {};
                                    n.readUshort(e, r), r += 2, o.reqFeature = n.readUshort(e, r), r += 2;
                                    var i = n.readUshort(e, r);
                                    return r += 2, o.features = n.readUshorts(e, r, i), o
                                }, t.CFF = {}, t.CFF.parse = function(e, r, n) {
                                    var o = t._bin;
                                    (e = new Uint8Array(e.buffer, r, n))[r = 0], e[++r], e[++r], e[++r], r++;
                                    var i = [];
                                    r = t.CFF.readIndex(e, r, i);
                                    for (var a = [], s = 0; s < i.length - 1; s++) a.push(o.readASCII(e, r + i[s], i[s + 1] - i[s]));
                                    r += i[i.length - 1];
                                    var u = [];
                                    r = t.CFF.readIndex(e, r, u);
                                    var f = [];
                                    for (s = 0; s < u.length - 1; s++) f.push(t.CFF.readDict(e, r + u[s], r + u[s + 1]));
                                    r += u[u.length - 1];
                                    var l = f[0],
                                        h = [];
                                    r = t.CFF.readIndex(e, r, h);
                                    var c = [];
                                    for (s = 0; s < h.length - 1; s++) c.push(o.readASCII(e, r + h[s], h[s + 1] - h[s]));
                                    if (r += h[h.length - 1], t.CFF.readSubrs(e, r, l), l.CharStrings) {
                                        r = l.CharStrings, h = [], r = t.CFF.readIndex(e, r, h);
                                        var d = [];
                                        for (s = 0; s < h.length - 1; s++) d.push(o.readBytes(e, r + h[s], h[s + 1] - h[s]));
                                        l.CharStrings = d
                                    }
                                    if (l.ROS) {
                                        r = l.FDArray;
                                        var p = [];
                                        for (r = t.CFF.readIndex(e, r, p), l.FDArray = [], s = 0; s < p.length - 1; s++) {
                                            var v = t.CFF.readDict(e, r + p[s], r + p[s + 1]);
                                            t.CFF._readFDict(e, v, c), l.FDArray.push(v)
                                        }
                                        r += p[p.length - 1], r = l.FDSelect, l.FDSelect = [];
                                        var g = e[r];
                                        if (r++, 3 != g) throw g;
                                        var y = o.readUshort(e, r);
                                        for (r += 2, s = 0; s < y + 1; s++) l.FDSelect.push(o.readUshort(e, r), e[r + 2]), r += 3
                                    }
                                    return l.Encoding && (l.Encoding = t.CFF.readEncoding(e, l.Encoding, l.CharStrings.length)), l.charset && (l.charset = t.CFF.readCharset(e, l.charset, l.CharStrings.length)), t.CFF._readFDict(e, l, c), l
                                }, t.CFF._readFDict = function(e, r, n) {
                                    var o;
                                    for (var i in r.Private && (o = r.Private[1], r.Private = t.CFF.readDict(e, o, o + r.Private[0]), r.Private.Subrs && t.CFF.readSubrs(e, o + r.Private.Subrs, r.Private)), r) - 1 != ["FamilyName", "FontName", "FullName", "Notice", "version", "Copyright"].indexOf(i) && (r[i] = n[r[i] - 426 + 35])
                                }, t.CFF.readSubrs = function(e, r, n) {
                                    var o = t._bin,
                                        i = [];
                                    r = t.CFF.readIndex(e, r, i);
                                    var a, s = i.length;
                                    a = s < 1240 ? 107 : s < 33900 ? 1131 : 32768, n.Bias = a, n.Subrs = [];
                                    for (var u = 0; u < i.length - 1; u++) n.Subrs.push(o.readBytes(e, r + i[u], i[u + 1] - i[u]))
                                }, t.CFF.tableSE = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 0, 111, 112, 113, 114, 0, 115, 116, 117, 118, 119, 120, 121, 122, 0, 123, 0, 124, 125, 126, 127, 128, 129, 130, 131, 0, 132, 133, 0, 134, 135, 136, 137, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 138, 0, 139, 0, 0, 0, 0, 140, 141, 142, 143, 0, 0, 0, 0, 0, 144, 0, 0, 0, 145, 0, 0, 146, 147, 148, 149, 0, 0, 0, 0], t.CFF.glyphByUnicode = function(e, t) {
                                    for (var r = 0; r < e.charset.length; r++)
                                        if (e.charset[r] == t) return r;
                                    return -1
                                }, t.CFF.glyphBySE = function(e, r) {
                                    return r < 0 || r > 255 ? -1 : t.CFF.glyphByUnicode(e, t.CFF.tableSE[r])
                                }, t.CFF.readEncoding = function(e, r, n) {
                                    t._bin;
                                    var o = [".notdef"],
                                        i = e[r];
                                    if (r++, 0 != i) throw "error: unknown encoding format: " + i;
                                    var a = e[r];
                                    r++;
                                    for (var s = 0; s < a; s++) o.push(e[r + s]);
                                    return o
                                }, t.CFF.readCharset = function(e, r, n) {
                                    var o = t._bin,
                                        i = [".notdef"],
                                        a = e[r];
                                    if (r++, 0 == a)
                                        for (var s = 0; s < n; s++) {
                                            var u = o.readUshort(e, r);
                                            r += 2, i.push(u)
                                        } else {
                                            if (1 != a && 2 != a) throw "error: format: " + a;
                                            for (; i.length < n;) {
                                                u = o.readUshort(e, r), r += 2;
                                                var f = 0;
                                                for (1 == a ? (f = e[r], r++) : (f = o.readUshort(e, r), r += 2), s = 0; s <= f; s++) i.push(u), u++
                                            }
                                        }
                                    return i
                                }, t.CFF.readIndex = function(e, r, n) {
                                    var o = t._bin,
                                        i = o.readUshort(e, r) + 1,
                                        a = e[r += 2];
                                    if (r++, 1 == a)
                                        for (var s = 0; s < i; s++) n.push(e[r + s]);
                                    else if (2 == a)
                                        for (s = 0; s < i; s++) n.push(o.readUshort(e, r + 2 * s));
                                    else if (3 == a)
                                        for (s = 0; s < i; s++) n.push(16777215 & o.readUint(e, r + 3 * s - 1));
                                    else if (1 != i) throw "unsupported offset size: " + a + ", count: " + i;
                                    return (r += i * a) - 1
                                }, t.CFF.getCharString = function(e, r, n) {
                                    var o = t._bin,
                                        i = e[r],
                                        a = e[r + 1],
                                        s = (e[r + 2], e[r + 3], e[r + 4], 1),
                                        u = null,
                                        f = null;
                                    i <= 20 && (u = i, s = 1), 12 == i && (u = 100 * i + a, s = 2), 21 <= i && i <= 27 && (u = i, s = 1), 28 == i && (f = o.readShort(e, r + 1), s = 3), 29 <= i && i <= 31 && (u = i, s = 1), 32 <= i && i <= 246 && (f = i - 139, s = 1), 247 <= i && i <= 250 && (f = 256 * (i - 247) + a + 108, s = 2), 251 <= i && i <= 254 && (f = 256 * -(i - 251) - a - 108, s = 2), 255 == i && (f = o.readInt(e, r + 1) / 65535, s = 5), n.val = null != f ? f : "o" + u, n.size = s
                                }, t.CFF.readCharString = function(e, r, n) {
                                    for (var o = r + n, i = t._bin, a = []; r < o;) {
                                        var s = e[r],
                                            u = e[r + 1],
                                            f = (e[r + 2], e[r + 3], e[r + 4], 1),
                                            l = null,
                                            h = null;
                                        s <= 20 && (l = s, f = 1), 12 == s && (l = 100 * s + u, f = 2), 19 != s && 20 != s || (l = s, f = 2), 21 <= s && s <= 27 && (l = s, f = 1), 28 == s && (h = i.readShort(e, r + 1), f = 3), 29 <= s && s <= 31 && (l = s, f = 1), 32 <= s && s <= 246 && (h = s - 139, f = 1), 247 <= s && s <= 250 && (h = 256 * (s - 247) + u + 108, f = 2), 251 <= s && s <= 254 && (h = 256 * -(s - 251) - u - 108, f = 2), 255 == s && (h = i.readInt(e, r + 1) / 65535, f = 5), a.push(null != h ? h : "o" + l), r += f
                                    }
                                    return a
                                }, t.CFF.readDict = function(e, r, n) {
                                    for (var o = t._bin, i = {}, a = []; r < n;) {
                                        var s = e[r],
                                            u = e[r + 1],
                                            f = (e[r + 2], e[r + 3], e[r + 4], 1),
                                            l = null,
                                            h = null;
                                        if (28 == s && (h = o.readShort(e, r + 1), f = 3), 29 == s && (h = o.readInt(e, r + 1), f = 5), 32 <= s && s <= 246 && (h = s - 139, f = 1), 247 <= s && s <= 250 && (h = 256 * (s - 247) + u + 108, f = 2), 251 <= s && s <= 254 && (h = 256 * -(s - 251) - u - 108, f = 2), 255 == s) throw h = o.readInt(e, r + 1) / 65535, f = 5, "unknown number";
                                        if (30 == s) {
                                            var c = [];
                                            for (f = 1;;) {
                                                var d = e[r + f];
                                                f++;
                                                var p = d >> 4,
                                                    v = 15 & d;
                                                if (15 != p && c.push(p), 15 != v && c.push(v), 15 == v) break
                                            }
                                            for (var g = "", y = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ".", "e", "e-", "reserved", "-", "endOfNumber"], m = 0; m < c.length; m++) g += y[c[m]];
                                            h = parseFloat(g)
                                        }
                                        s <= 21 && (l = ["version", "Notice", "FullName", "FamilyName", "Weight", "FontBBox", "BlueValues", "OtherBlues", "FamilyBlues", "FamilyOtherBlues", "StdHW", "StdVW", "escape", "UniqueID", "XUID", "charset", "Encoding", "CharStrings", "Private", "Subrs", "defaultWidthX", "nominalWidthX"][s], f = 1, 12 == s && (l = ["Copyright", "isFixedPitch", "ItalicAngle", "UnderlinePosition", "UnderlineThickness", "PaintType", "CharstringType", "FontMatrix", "StrokeWidth", "BlueScale", "BlueShift", "BlueFuzz", "StemSnapH", "StemSnapV", "ForceBold", 0, 0, "LanguageGroup", "ExpansionFactor", "initialRandomSeed", "SyntheticBase", "PostScript", "BaseFontName", "BaseFontBlend", 0, 0, 0, 0, 0, 0, "ROS", "CIDFontVersion", "CIDFontRevision", "CIDFontType", "CIDCount", "UIDBase", "FDArray", "FDSelect", "FontName"][u], f = 2)), null != l ? (i[l] = 1 == a.length ? a[0] : a, a = []) : a.push(h), r += f
                                    }
                                    return i
                                }, t.cmap = {}, t.cmap.parse = function(e, r, n) {
                                    e = new Uint8Array(e.buffer, r, n), r = 0;
                                    var o = t._bin,
                                        i = {};
                                    o.readUshort(e, r), r += 2;
                                    var a = o.readUshort(e, r);
                                    r += 2;
                                    var s = [];
                                    i.tables = [];
                                    for (var u = 0; u < a; u++) {
                                        var f = o.readUshort(e, r);
                                        r += 2;
                                        var l = o.readUshort(e, r);
                                        r += 2;
                                        var h = o.readUint(e, r);
                                        r += 4;
                                        var c = "p" + f + "e" + l,
                                            d = s.indexOf(h);
                                        if (-1 == d) {
                                            var p;
                                            d = i.tables.length, s.push(h);
                                            var v = o.readUshort(e, h);
                                            0 == v ? p = t.cmap.parse0(e, h) : 4 == v ? p = t.cmap.parse4(e, h) : 6 == v ? p = t.cmap.parse6(e, h) : 12 == v ? p = t.cmap.parse12(e, h) : console.debug("unknown format: " + v, f, l, h), i.tables.push(p)
                                        }
                                        if (null != i[c]) throw "multiple tables for one platform+encoding";
                                        i[c] = d
                                    }
                                    return i
                                }, t.cmap.parse0 = function(e, r) {
                                    var n = t._bin,
                                        o = {};
                                    o.format = n.readUshort(e, r), r += 2;
                                    var i = n.readUshort(e, r);
                                    r += 2, n.readUshort(e, r), r += 2, o.map = [];
                                    for (var a = 0; a < i - 6; a++) o.map.push(e[r + a]);
                                    return o
                                }, t.cmap.parse4 = function(e, r) {
                                    var n = t._bin,
                                        o = r,
                                        i = {};
                                    i.format = n.readUshort(e, r), r += 2;
                                    var a = n.readUshort(e, r);
                                    r += 2, n.readUshort(e, r), r += 2;
                                    var s = n.readUshort(e, r);
                                    r += 2;
                                    var u = s / 2;
                                    i.searchRange = n.readUshort(e, r), r += 2, i.entrySelector = n.readUshort(e, r), r += 2, i.rangeShift = n.readUshort(e, r), r += 2, i.endCount = n.readUshorts(e, r, u), r += 2 * u, r += 2, i.startCount = n.readUshorts(e, r, u), r += 2 * u, i.idDelta = [];
                                    for (var f = 0; f < u; f++) i.idDelta.push(n.readShort(e, r)), r += 2;
                                    for (i.idRangeOffset = n.readUshorts(e, r, u), r += 2 * u, i.glyphIdArray = []; r < o + a;) i.glyphIdArray.push(n.readUshort(e, r)), r += 2;
                                    return i
                                }, t.cmap.parse6 = function(e, r) {
                                    var n = t._bin,
                                        o = {};
                                    o.format = n.readUshort(e, r), r += 2, n.readUshort(e, r), r += 2, n.readUshort(e, r), r += 2, o.firstCode = n.readUshort(e, r), r += 2;
                                    var i = n.readUshort(e, r);
                                    r += 2, o.glyphIdArray = [];
                                    for (var a = 0; a < i; a++) o.glyphIdArray.push(n.readUshort(e, r)), r += 2;
                                    return o
                                }, t.cmap.parse12 = function(e, r) {
                                    var n = t._bin,
                                        o = {};
                                    o.format = n.readUshort(e, r), r += 2, r += 2, n.readUint(e, r), r += 4, n.readUint(e, r), r += 4;
                                    var i = n.readUint(e, r);
                                    r += 4, o.groups = [];
                                    for (var a = 0; a < i; a++) {
                                        var s = r + 12 * a,
                                            u = n.readUint(e, s + 0),
                                            f = n.readUint(e, s + 4),
                                            l = n.readUint(e, s + 8);
                                        o.groups.push([u, f, l])
                                    }
                                    return o
                                }, t.glyf = {}, t.glyf.parse = function(e, t, r, n) {
                                    for (var o = [], i = 0; i < n.maxp.numGlyphs; i++) o.push(null);
                                    return o
                                }, t.glyf._parseGlyf = function(e, r) {
                                    var n = t._bin,
                                        o = e._data,
                                        i = t._tabOffset(o, "glyf", e._offset) + e.loca[r];
                                    if (e.loca[r] == e.loca[r + 1]) return null;
                                    var a = {};
                                    if (a.noc = n.readShort(o, i), i += 2, a.xMin = n.readShort(o, i), i += 2, a.yMin = n.readShort(o, i), i += 2, a.xMax = n.readShort(o, i), i += 2, a.yMax = n.readShort(o, i), i += 2, a.xMin >= a.xMax || a.yMin >= a.yMax) return null;
                                    if (a.noc > 0) {
                                        a.endPts = [];
                                        for (var s = 0; s < a.noc; s++) a.endPts.push(n.readUshort(o, i)), i += 2;
                                        var u = n.readUshort(o, i);
                                        if (i += 2, o.length - i < u) return null;
                                        a.instructions = n.readBytes(o, i, u), i += u;
                                        var f = a.endPts[a.noc - 1] + 1;
                                        for (a.flags = [], s = 0; s < f; s++) {
                                            var l = o[i];
                                            if (i++, a.flags.push(l), 0 != (8 & l)) {
                                                var h = o[i];
                                                i++;
                                                for (var c = 0; c < h; c++) a.flags.push(l), s++
                                            }
                                        }
                                        for (a.xs = [], s = 0; s < f; s++) {
                                            var d = 0 != (2 & a.flags[s]),
                                                p = 0 != (16 & a.flags[s]);
                                            d ? (a.xs.push(p ? o[i] : -o[i]), i++) : p ? a.xs.push(0) : (a.xs.push(n.readShort(o, i)), i += 2)
                                        }
                                        for (a.ys = [], s = 0; s < f; s++) d = 0 != (4 & a.flags[s]), p = 0 != (32 & a.flags[s]), d ? (a.ys.push(p ? o[i] : -o[i]), i++) : p ? a.ys.push(0) : (a.ys.push(n.readShort(o, i)), i += 2);
                                        var v = 0,
                                            g = 0;
                                        for (s = 0; s < f; s++) v += a.xs[s], g += a.ys[s], a.xs[s] = v, a.ys[s] = g
                                    } else {
                                        var y;
                                        a.parts = [];
                                        do {
                                            y = n.readUshort(o, i), i += 2;
                                            var m = {
                                                m: {
                                                    a: 1,
                                                    b: 0,
                                                    c: 0,
                                                    d: 1,
                                                    tx: 0,
                                                    ty: 0
                                                },
                                                p1: -1,
                                                p2: -1
                                            };
                                            if (a.parts.push(m), m.glyphIndex = n.readUshort(o, i), i += 2, 1 & y) {
                                                var b = n.readShort(o, i);
                                                i += 2;
                                                var U = n.readShort(o, i);
                                                i += 2
                                            } else b = n.readInt8(o, i), i++, U = n.readInt8(o, i), i++;
                                            2 & y ? (m.m.tx = b, m.m.ty = U) : (m.p1 = b, m.p2 = U), 8 & y ? (m.m.a = m.m.d = n.readF2dot14(o, i), i += 2) : 64 & y ? (m.m.a = n.readF2dot14(o, i), i += 2, m.m.d = n.readF2dot14(o, i), i += 2) : 128 & y && (m.m.a = n.readF2dot14(o, i), i += 2, m.m.b = n.readF2dot14(o, i), i += 2, m.m.c = n.readF2dot14(o, i), i += 2, m.m.d = n.readF2dot14(o, i), i += 2)
                                        } while (32 & y);
                                        if (256 & y) {
                                            var S = n.readUshort(o, i);
                                            for (i += 2, a.instr = [], s = 0; s < S; s++) a.instr.push(o[i]), i++
                                        }
                                    }
                                    return a
                                }, t.GPOS = {}, t.GPOS.parse = function(e, r, n, o) {
                                    return t._lctf.parse(e, r, n, o, t.GPOS.subt)
                                }, t.GPOS.subt = function(e, r, n, o) {
                                    var i = t._bin,
                                        a = n,
                                        s = {};
                                    if (s.fmt = i.readUshort(e, n), n += 2, 1 == r || 2 == r || 3 == r || 7 == r || 8 == r && s.fmt <= 2) {
                                        var u = i.readUshort(e, n);
                                        n += 2, s.coverage = t._lctf.readCoverage(e, u + a)
                                    }
                                    if (1 == r && 1 == s.fmt) {
                                        var f = i.readUshort(e, n);
                                        n += 2;
                                        var l = t._lctf.numOfOnes(f);
                                        0 != f && (s.pos = t.GPOS.readValueRecord(e, n, f))
                                    } else if (2 == r && s.fmt >= 1 && s.fmt <= 2) {
                                        f = i.readUshort(e, n), n += 2;
                                        var h = i.readUshort(e, n);
                                        n += 2, l = t._lctf.numOfOnes(f);
                                        var c = t._lctf.numOfOnes(h);
                                        if (1 == s.fmt) {
                                            s.pairsets = [];
                                            var d = i.readUshort(e, n);
                                            n += 2;
                                            for (var p = 0; p < d; p++) {
                                                var v = a + i.readUshort(e, n);
                                                n += 2;
                                                var g = i.readUshort(e, v);
                                                v += 2;
                                                for (var y = [], m = 0; m < g; m++) {
                                                    var b = i.readUshort(e, v);
                                                    v += 2, 0 != f && (x = t.GPOS.readValueRecord(e, v, f), v += 2 * l), 0 != h && (E = t.GPOS.readValueRecord(e, v, h), v += 2 * c), y.push({
                                                        gid2: b,
                                                        val1: x,
                                                        val2: E
                                                    })
                                                }
                                                s.pairsets.push(y)
                                            }
                                        }
                                        if (2 == s.fmt) {
                                            var U = i.readUshort(e, n);
                                            n += 2;
                                            var S = i.readUshort(e, n);
                                            n += 2;
                                            var w = i.readUshort(e, n);
                                            n += 2;
                                            var T = i.readUshort(e, n);
                                            for (n += 2, s.classDef1 = t._lctf.readClassDef(e, a + U), s.classDef2 = t._lctf.readClassDef(e, a + S), s.matrix = [], p = 0; p < w; p++) {
                                                var _ = [];
                                                for (m = 0; m < T; m++) {
                                                    var x = null,
                                                        E = null;
                                                    0 != f && (x = t.GPOS.readValueRecord(e, n, f), n += 2 * l), 0 != h && (E = t.GPOS.readValueRecord(e, n, h), n += 2 * c), _.push({
                                                        val1: x,
                                                        val2: E
                                                    })
                                                }
                                                s.matrix.push(_)
                                            }
                                        }
                                    } else {
                                        if (9 == r && 1 == s.fmt) {
                                            var k = i.readUshort(e, n);
                                            n += 2;
                                            var O = i.readUint(e, n);
                                            if (n += 4, 9 == o.ltype) o.ltype = k;
                                            else if (o.ltype != k) throw "invalid extension substitution";
                                            return t.GPOS.subt(e, o.ltype, a + O)
                                        }
                                        console.debug("unsupported GPOS table LookupType", r, "format", s.fmt)
                                    }
                                    return s
                                }, t.GPOS.readValueRecord = function(e, r, n) {
                                    var o = t._bin,
                                        i = [];
                                    return i.push(1 & n ? o.readShort(e, r) : 0), r += 1 & n ? 2 : 0, i.push(2 & n ? o.readShort(e, r) : 0), r += 2 & n ? 2 : 0, i.push(4 & n ? o.readShort(e, r) : 0), r += 4 & n ? 2 : 0, i.push(8 & n ? o.readShort(e, r) : 0), r += 8 & n ? 2 : 0, i
                                }, t.GSUB = {}, t.GSUB.parse = function(e, r, n, o) {
                                    return t._lctf.parse(e, r, n, o, t.GSUB.subt)
                                }, t.GSUB.subt = function(e, r, n, o) {
                                    var i = t._bin,
                                        a = n,
                                        s = {};
                                    if (s.fmt = i.readUshort(e, n), n += 2, 1 != r && 4 != r && 5 != r && 6 != r) return null;
                                    if (1 == r || 4 == r || 5 == r && s.fmt <= 2 || 6 == r && s.fmt <= 2) {
                                        var u = i.readUshort(e, n);
                                        n += 2, s.coverage = t._lctf.readCoverage(e, a + u)
                                    }
                                    if (1 == r && s.fmt >= 1 && s.fmt <= 2) {
                                        if (1 == s.fmt) s.delta = i.readShort(e, n), n += 2;
                                        else if (2 == s.fmt) {
                                            var f = i.readUshort(e, n);
                                            n += 2, s.newg = i.readUshorts(e, n, f), n += 2 * s.newg.length
                                        }
                                    } else if (4 == r) {
                                        s.vals = [], f = i.readUshort(e, n), n += 2;
                                        for (var l = 0; l < f; l++) {
                                            var h = i.readUshort(e, n);
                                            n += 2, s.vals.push(t.GSUB.readLigatureSet(e, a + h))
                                        }
                                    } else if (5 == r && 2 == s.fmt) {
                                        if (2 == s.fmt) {
                                            var c = i.readUshort(e, n);
                                            n += 2, s.cDef = t._lctf.readClassDef(e, a + c), s.scset = [];
                                            var d = i.readUshort(e, n);
                                            for (n += 2, l = 0; l < d; l++) {
                                                var p = i.readUshort(e, n);
                                                n += 2, s.scset.push(0 == p ? null : t.GSUB.readSubClassSet(e, a + p))
                                            }
                                        }
                                    } else if (6 == r && 3 == s.fmt) {
                                        if (3 == s.fmt) {
                                            for (l = 0; l < 3; l++) {
                                                f = i.readUshort(e, n), n += 2;
                                                for (var v = [], g = 0; g < f; g++) v.push(t._lctf.readCoverage(e, a + i.readUshort(e, n + 2 * g)));
                                                n += 2 * f, 0 == l && (s.backCvg = v), 1 == l && (s.inptCvg = v), 2 == l && (s.ahedCvg = v)
                                            }
                                            f = i.readUshort(e, n), n += 2, s.lookupRec = t.GSUB.readSubstLookupRecords(e, n, f)
                                        }
                                    } else {
                                        if (7 == r && 1 == s.fmt) {
                                            var y = i.readUshort(e, n);
                                            n += 2;
                                            var m = i.readUint(e, n);
                                            if (n += 4, 9 == o.ltype) o.ltype = y;
                                            else if (o.ltype != y) throw "invalid extension substitution";
                                            return t.GSUB.subt(e, o.ltype, a + m)
                                        }
                                        console.debug("unsupported GSUB table LookupType", r, "format", s.fmt)
                                    }
                                    return s
                                }, t.GSUB.readSubClassSet = function(e, r) {
                                    var n = t._bin.readUshort,
                                        o = r,
                                        i = [],
                                        a = n(e, r);
                                    r += 2;
                                    for (var s = 0; s < a; s++) {
                                        var u = n(e, r);
                                        r += 2, i.push(t.GSUB.readSubClassRule(e, o + u))
                                    }
                                    return i
                                }, t.GSUB.readSubClassRule = function(e, r) {
                                    var n = t._bin.readUshort,
                                        o = {},
                                        i = n(e, r),
                                        a = n(e, r += 2);
                                    r += 2, o.input = [];
                                    for (var s = 0; s < i - 1; s++) o.input.push(n(e, r)), r += 2;
                                    return o.substLookupRecords = t.GSUB.readSubstLookupRecords(e, r, a), o
                                }, t.GSUB.readSubstLookupRecords = function(e, r, n) {
                                    for (var o = t._bin.readUshort, i = [], a = 0; a < n; a++) i.push(o(e, r), o(e, r + 2)), r += 4;
                                    return i
                                }, t.GSUB.readChainSubClassSet = function(e, r) {
                                    var n = t._bin,
                                        o = r,
                                        i = [],
                                        a = n.readUshort(e, r);
                                    r += 2;
                                    for (var s = 0; s < a; s++) {
                                        var u = n.readUshort(e, r);
                                        r += 2, i.push(t.GSUB.readChainSubClassRule(e, o + u))
                                    }
                                    return i
                                }, t.GSUB.readChainSubClassRule = function(e, r) {
                                    for (var n = t._bin, o = {}, i = ["backtrack", "input", "lookahead"], a = 0; a < i.length; a++) {
                                        var s = n.readUshort(e, r);
                                        r += 2, 1 == a && s--, o[i[a]] = n.readUshorts(e, r, s), r += 2 * o[i[a]].length
                                    }
                                    return s = n.readUshort(e, r), r += 2, o.subst = n.readUshorts(e, r, 2 * s), r += 2 * o.subst.length, o
                                }, t.GSUB.readLigatureSet = function(e, r) {
                                    var n = t._bin,
                                        o = r,
                                        i = [],
                                        a = n.readUshort(e, r);
                                    r += 2;
                                    for (var s = 0; s < a; s++) {
                                        var u = n.readUshort(e, r);
                                        r += 2, i.push(t.GSUB.readLigature(e, o + u))
                                    }
                                    return i
                                }, t.GSUB.readLigature = function(e, r) {
                                    var n = t._bin,
                                        o = {
                                            chain: []
                                        };
                                    o.nglyph = n.readUshort(e, r), r += 2;
                                    var i = n.readUshort(e, r);
                                    r += 2;
                                    for (var a = 0; a < i - 1; a++) o.chain.push(n.readUshort(e, r)), r += 2;
                                    return o
                                }, t.head = {}, t.head.parse = function(e, r, n) {
                                    var o = t._bin,
                                        i = {};
                                    return o.readFixed(e, r), r += 4, i.fontRevision = o.readFixed(e, r), r += 4, o.readUint(e, r), r += 4, o.readUint(e, r), r += 4, i.flags = o.readUshort(e, r), r += 2, i.unitsPerEm = o.readUshort(e, r), r += 2, i.created = o.readUint64(e, r), r += 8, i.modified = o.readUint64(e, r), r += 8, i.xMin = o.readShort(e, r), r += 2, i.yMin = o.readShort(e, r), r += 2, i.xMax = o.readShort(e, r), r += 2, i.yMax = o.readShort(e, r), r += 2, i.macStyle = o.readUshort(e, r), r += 2, i.lowestRecPPEM = o.readUshort(e, r), r += 2, i.fontDirectionHint = o.readShort(e, r), r += 2, i.indexToLocFormat = o.readShort(e, r), r += 2, i.glyphDataFormat = o.readShort(e, r), r += 2, i
                                }, t.hhea = {}, t.hhea.parse = function(e, r, n) {
                                    var o = t._bin,
                                        i = {};
                                    return o.readFixed(e, r), r += 4, i.ascender = o.readShort(e, r), r += 2, i.descender = o.readShort(e, r), r += 2, i.lineGap = o.readShort(e, r), r += 2, i.advanceWidthMax = o.readUshort(e, r), r += 2, i.minLeftSideBearing = o.readShort(e, r), r += 2, i.minRightSideBearing = o.readShort(e, r), r += 2, i.xMaxExtent = o.readShort(e, r), r += 2, i.caretSlopeRise = o.readShort(e, r), r += 2, i.caretSlopeRun = o.readShort(e, r), r += 2, i.caretOffset = o.readShort(e, r), r += 2, r += 8, i.metricDataFormat = o.readShort(e, r), r += 2, i.numberOfHMetrics = o.readUshort(e, r), r += 2, i
                                }, t.hmtx = {}, t.hmtx.parse = function(e, r, n, o) {
                                    for (var i = t._bin, a = {
                                            aWidth: [],
                                            lsBearing: []
                                        }, s = 0, u = 0, f = 0; f < o.maxp.numGlyphs; f++) f < o.hhea.numberOfHMetrics && (s = i.readUshort(e, r), r += 2, u = i.readShort(e, r), r += 2), a.aWidth.push(s), a.lsBearing.push(u);
                                    return a
                                }, t.kern = {}, t.kern.parse = function(e, r, n, o) {
                                    var i = t._bin,
                                        a = i.readUshort(e, r);
                                    if (r += 2, 1 == a) return t.kern.parseV1(e, r - 2, n, o);
                                    var s = i.readUshort(e, r);
                                    r += 2;
                                    for (var u = {
                                            glyph1: [],
                                            rval: []
                                        }, f = 0; f < s; f++) {
                                        r += 2, n = i.readUshort(e, r), r += 2;
                                        var l = i.readUshort(e, r);
                                        r += 2;
                                        var h = l >>> 8;
                                        if (0 != (h &= 15)) throw "unknown kern table format: " + h;
                                        r = t.kern.readFormat0(e, r, u)
                                    }
                                    return u
                                }, t.kern.parseV1 = function(e, r, n, o) {
                                    var i = t._bin;
                                    i.readFixed(e, r), r += 4;
                                    var a = i.readUint(e, r);
                                    r += 4;
                                    for (var s = {
                                            glyph1: [],
                                            rval: []
                                        }, u = 0; u < a; u++) {
                                        i.readUint(e, r), r += 4;
                                        var f = i.readUshort(e, r);
                                        r += 2, i.readUshort(e, r), r += 2;
                                        var l = f >>> 8;
                                        if (0 != (l &= 15)) throw "unknown kern table format: " + l;
                                        r = t.kern.readFormat0(e, r, s)
                                    }
                                    return s
                                }, t.kern.readFormat0 = function(e, r, n) {
                                    var o = t._bin,
                                        i = -1,
                                        a = o.readUshort(e, r);
                                    r += 2, o.readUshort(e, r), r += 2, o.readUshort(e, r), r += 2, o.readUshort(e, r), r += 2;
                                    for (var s = 0; s < a; s++) {
                                        var u = o.readUshort(e, r);
                                        r += 2;
                                        var f = o.readUshort(e, r);
                                        r += 2;
                                        var l = o.readShort(e, r);
                                        r += 2, u != i && (n.glyph1.push(u), n.rval.push({
                                            glyph2: [],
                                            vals: []
                                        }));
                                        var h = n.rval[n.rval.length - 1];
                                        h.glyph2.push(f), h.vals.push(l), i = u
                                    }
                                    return r
                                }, t.loca = {}, t.loca.parse = function(e, r, n, o) {
                                    var i = t._bin,
                                        a = [],
                                        s = o.head.indexToLocFormat,
                                        u = o.maxp.numGlyphs + 1;
                                    if (0 == s)
                                        for (var f = 0; f < u; f++) a.push(i.readUshort(e, r + (f << 1)) << 1);
                                    if (1 == s)
                                        for (f = 0; f < u; f++) a.push(i.readUint(e, r + (f << 2)));
                                    return a
                                }, t.maxp = {}, t.maxp.parse = function(e, r, n) {
                                    var o = t._bin,
                                        i = {},
                                        a = o.readUint(e, r);
                                    return r += 4, i.numGlyphs = o.readUshort(e, r), r += 2, 65536 == a && (i.maxPoints = o.readUshort(e, r), r += 2, i.maxContours = o.readUshort(e, r), r += 2, i.maxCompositePoints = o.readUshort(e, r), r += 2, i.maxCompositeContours = o.readUshort(e, r), r += 2, i.maxZones = o.readUshort(e, r), r += 2, i.maxTwilightPoints = o.readUshort(e, r), r += 2, i.maxStorage = o.readUshort(e, r), r += 2, i.maxFunctionDefs = o.readUshort(e, r), r += 2, i.maxInstructionDefs = o.readUshort(e, r), r += 2, i.maxStackElements = o.readUshort(e, r), r += 2, i.maxSizeOfInstructions = o.readUshort(e, r), r += 2, i.maxComponentElements = o.readUshort(e, r), r += 2, i.maxComponentDepth = o.readUshort(e, r), r += 2), i
                                }, t.name = {}, t.name.parse = function(e, r, n) {
                                    var o = t._bin,
                                        i = {};
                                    o.readUshort(e, r), r += 2;
                                    var a = o.readUshort(e, r);
                                    r += 2, o.readUshort(e, r);
                                    for (var s, u = ["copyright", "fontFamily", "fontSubfamily", "ID", "fullName", "version", "postScriptName", "trademark", "manufacturer", "designer", "description", "urlVendor", "urlDesigner", "licence", "licenceURL", "---", "typoFamilyName", "typoSubfamilyName", "compatibleFull", "sampleText", "postScriptCID", "wwsFamilyName", "wwsSubfamilyName", "lightPalette", "darkPalette"], f = r += 2, l = 0; l < a; l++) {
                                        var h = o.readUshort(e, r);
                                        r += 2;
                                        var c = o.readUshort(e, r);
                                        r += 2;
                                        var d = o.readUshort(e, r);
                                        r += 2;
                                        var p = o.readUshort(e, r);
                                        r += 2;
                                        var v = o.readUshort(e, r);
                                        r += 2;
                                        var g = o.readUshort(e, r);
                                        r += 2;
                                        var y, m = u[p],
                                            b = f + 12 * a + g;
                                        if (0 == h) y = o.readUnicode(e, b, v / 2);
                                        else if (3 == h && 0 == c) y = o.readUnicode(e, b, v / 2);
                                        else if (0 == c) y = o.readASCII(e, b, v);
                                        else if (1 == c) y = o.readUnicode(e, b, v / 2);
                                        else if (3 == c) y = o.readUnicode(e, b, v / 2);
                                        else {
                                            if (1 != h) throw "unknown encoding " + c + ", platformID: " + h;
                                            y = o.readASCII(e, b, v), console.debug("reading unknown MAC encoding " + c + " as ASCII")
                                        }
                                        var U = "p" + h + "," + d.toString(16);
                                        null == i[U] && (i[U] = {}), i[U][void 0 !== m ? m : p] = y, i[U]._lang = d
                                    }
                                    for (var S in i)
                                        if (null != i[S].postScriptName && 1033 == i[S]._lang) return i[S];
                                    for (var S in i)
                                        if (null != i[S].postScriptName && 0 == i[S]._lang) return i[S];
                                    for (var S in i)
                                        if (null != i[S].postScriptName && 3084 == i[S]._lang) return i[S];
                                    for (var S in i)
                                        if (null != i[S].postScriptName) return i[S];
                                    for (var S in i) {
                                        s = S;
                                        break
                                    }
                                    return console.debug("returning name table with languageID " + i[s]._lang), i[s]
                                }, t["OS/2"] = {}, t["OS/2"].parse = function(e, r, n) {
                                    var o = t._bin.readUshort(e, r);
                                    r += 2;
                                    var i = {};
                                    if (0 == o) t["OS/2"].version0(e, r, i);
                                    else if (1 == o) t["OS/2"].version1(e, r, i);
                                    else if (2 == o || 3 == o || 4 == o) t["OS/2"].version2(e, r, i);
                                    else {
                                        if (5 != o) throw "unknown OS/2 table version: " + o;
                                        t["OS/2"].version5(e, r, i)
                                    }
                                    return i
                                }, t["OS/2"].version0 = function(e, r, n) {
                                    var o = t._bin;
                                    return n.xAvgCharWidth = o.readShort(e, r), r += 2, n.usWeightClass = o.readUshort(e, r), r += 2, n.usWidthClass = o.readUshort(e, r), r += 2, n.fsType = o.readUshort(e, r), r += 2, n.ySubscriptXSize = o.readShort(e, r), r += 2, n.ySubscriptYSize = o.readShort(e, r), r += 2, n.ySubscriptXOffset = o.readShort(e, r), r += 2, n.ySubscriptYOffset = o.readShort(e, r), r += 2, n.ySuperscriptXSize = o.readShort(e, r), r += 2, n.ySuperscriptYSize = o.readShort(e, r), r += 2, n.ySuperscriptXOffset = o.readShort(e, r), r += 2, n.ySuperscriptYOffset = o.readShort(e, r), r += 2, n.yStrikeoutSize = o.readShort(e, r), r += 2, n.yStrikeoutPosition = o.readShort(e, r), r += 2, n.sFamilyClass = o.readShort(e, r), r += 2, n.panose = o.readBytes(e, r, 10), r += 10, n.ulUnicodeRange1 = o.readUint(e, r), r += 4, n.ulUnicodeRange2 = o.readUint(e, r), r += 4, n.ulUnicodeRange3 = o.readUint(e, r), r += 4, n.ulUnicodeRange4 = o.readUint(e, r), r += 4, n.achVendID = [o.readInt8(e, r), o.readInt8(e, r + 1), o.readInt8(e, r + 2), o.readInt8(e, r + 3)], r += 4, n.fsSelection = o.readUshort(e, r), r += 2, n.usFirstCharIndex = o.readUshort(e, r), r += 2, n.usLastCharIndex = o.readUshort(e, r), r += 2, n.sTypoAscender = o.readShort(e, r), r += 2, n.sTypoDescender = o.readShort(e, r), r += 2, n.sTypoLineGap = o.readShort(e, r), r += 2, n.usWinAscent = o.readUshort(e, r), r += 2, n.usWinDescent = o.readUshort(e, r), r + 2
                                }, t["OS/2"].version1 = function(e, r, n) {
                                    var o = t._bin;
                                    return r = t["OS/2"].version0(e, r, n), n.ulCodePageRange1 = o.readUint(e, r), r += 4, n.ulCodePageRange2 = o.readUint(e, r), r + 4
                                }, t["OS/2"].version2 = function(e, r, n) {
                                    var o = t._bin;
                                    return r = t["OS/2"].version1(e, r, n), n.sxHeight = o.readShort(e, r), r += 2, n.sCapHeight = o.readShort(e, r), r += 2, n.usDefault = o.readUshort(e, r), r += 2, n.usBreak = o.readUshort(e, r), r += 2, n.usMaxContext = o.readUshort(e, r), r + 2
                                }, t["OS/2"].version5 = function(e, r, n) {
                                    var o = t._bin;
                                    return r = t["OS/2"].version2(e, r, n), n.usLowerOpticalPointSize = o.readUshort(e, r), r += 2, n.usUpperOpticalPointSize = o.readUshort(e, r), r + 2
                                }, t.post = {}, t.post.parse = function(e, r, n) {
                                    var o = t._bin,
                                        i = {};
                                    return i.version = o.readFixed(e, r), r += 4, i.italicAngle = o.readFixed(e, r), r += 4, i.underlinePosition = o.readShort(e, r), r += 2, i.underlineThickness = o.readShort(e, r), r += 2, i
                                }, t.SVG = {}, t.SVG.parse = function(e, r, n) {
                                    var o = t._bin,
                                        i = {
                                            entries: []
                                        },
                                        a = r;
                                    o.readUshort(e, r), r += 2;
                                    var s = o.readUint(e, r);
                                    r += 4, o.readUint(e, r), r += 4, r = s + a;
                                    var u = o.readUshort(e, r);
                                    r += 2;
                                    for (var f = 0; f < u; f++) {
                                        var l = o.readUshort(e, r);
                                        r += 2;
                                        var h = o.readUshort(e, r);
                                        r += 2;
                                        var c = o.readUint(e, r);
                                        r += 4;
                                        var d = o.readUint(e, r);
                                        r += 4;
                                        for (var p = new Uint8Array(e.buffer, a + c + s, d), v = o.readUTF8(p, 0, p.length), g = l; g <= h; g++) i.entries[g] = v
                                    }
                                    return i
                                }, t.SVG.toPath = function(e) {
                                    var r = {
                                        cmds: [],
                                        crds: []
                                    };
                                    if (null == e) return r;
                                    for (var n = (new DOMParser).parseFromString(e, "image/svg+xml").firstChild;
                                        "svg" != n.tagName;) n = n.nextSibling;
                                    var o = n.getAttribute("viewBox");
                                    o = o ? o.trim().split(" ").map(parseFloat) : [0, 0, 1e3, 1e3], t.SVG._toPath(n.children, r);
                                    for (var i = 0; i < r.crds.length; i += 2) {
                                        var a = r.crds[i],
                                            s = r.crds[i + 1];
                                        a -= o[0], s = -(s -= o[1]), r.crds[i] = a, r.crds[i + 1] = s
                                    }
                                    return r
                                }, t.SVG._toPath = function(e, r, n) {
                                    for (var o = 0; o < e.length; o++) {
                                        var i = e[o],
                                            a = i.tagName,
                                            s = i.getAttribute("fill");
                                        if (null == s && (s = n), "g" == a) t.SVG._toPath(i.children, r, s);
                                        else if ("path" == a) {
                                            r.cmds.push(s || "#000000");
                                            var u = i.getAttribute("d"),
                                                f = t.SVG._tokens(u);
                                            t.SVG._toksToPath(f, r), r.cmds.push("X")
                                        } else "defs" == a || console.debug(a, i)
                                    }
                                }, t.SVG._tokens = function(e) {
                                    for (var t = [], r = 0, n = !1, o = ""; r < e.length;) {
                                        var i = e.charCodeAt(r),
                                            a = e.charAt(r);
                                        r++;
                                        var s = 48 <= i && i <= 57 || "." == a || "-" == a;
                                        n ? "-" == a ? (t.push(parseFloat(o)), o = a) : s ? o += a : (t.push(parseFloat(o)), "," != a && " " != a && t.push(a), n = !1) : s ? (o = a, n = !0) : "," != a && " " != a && t.push(a)
                                    }
                                    return n && t.push(parseFloat(o)), t
                                }, t.SVG._toksToPath = function(e, r) {
                                    for (var n = 0, o = 0, i = 0, a = 0, s = 0, u = {
                                            M: 2,
                                            L: 2,
                                            H: 1,
                                            V: 1,
                                            S: 4,
                                            C: 6
                                        }, f = r.cmds, l = r.crds; n < e.length;) {
                                        var h = e[n];
                                        if (n++, "z" == h) f.push("Z"), o = a, i = s;
                                        else
                                            for (var c = h.toUpperCase(), d = u[c], p = t.SVG._reps(e, n, d), v = 0; v < p; v++) {
                                                var g = 0,
                                                    y = 0;
                                                if (h != c && (g = o, y = i), "M" == c) o = g + e[n++], i = y + e[n++], f.push("M"), l.push(o, i), a = o, s = i;
                                                else if ("L" == c) o = g + e[n++], i = y + e[n++], f.push("L"), l.push(o, i);
                                                else if ("H" == c) o = g + e[n++], f.push("L"), l.push(o, i);
                                                else if ("V" == c) i = y + e[n++], f.push("L"), l.push(o, i);
                                                else if ("C" == c) {
                                                    var m = g + e[n++],
                                                        b = y + e[n++],
                                                        U = g + e[n++],
                                                        S = y + e[n++],
                                                        w = g + e[n++],
                                                        T = y + e[n++];
                                                    f.push("C"), l.push(m, b, U, S, w, T), o = w, i = T
                                                } else if ("S" == c) {
                                                    var _ = Math.max(l.length - 4, 0);
                                                    m = o + o - l[_], b = i + i - l[_ + 1], U = g + e[n++], S = y + e[n++], w = g + e[n++], T = y + e[n++], f.push("C"), l.push(m, b, U, S, w, T), o = w, i = T
                                                } else console.debug("Unknown SVG command " + h)
                                            }
                                    }
                                }, t.SVG._reps = function(e, t, r) {
                                    for (var n = t; n < e.length && "string" != typeof e[n];) n += r;
                                    return (n - t) / r
                                }, null == t && (t = {}), null == t.U && (t.U = {}), t.U.codeToGlyph = function(e, t) {
                                    var r = e.cmap,
                                        n = -1;
                                    if (null != r.p0e4 ? n = r.p0e4 : null != r.p3e1 ? n = r.p3e1 : null != r.p1e0 ? n = r.p1e0 : null != r.p0e3 && (n = r.p0e3), -1 == n) throw "no familiar platform and encoding!";
                                    var o = r.tables[n];
                                    if (0 == o.format) return t >= o.map.length ? 0 : o.map[t];
                                    if (4 == o.format) {
                                        for (var i = -1, a = 0; a < o.endCount.length; a++)
                                            if (t <= o.endCount[a]) {
                                                i = a;
                                                break
                                            }
                                        return -1 == i || o.startCount[i] > t ? 0 : 65535 & (0 != o.idRangeOffset[i] ? o.glyphIdArray[t - o.startCount[i] + (o.idRangeOffset[i] >> 1) - (o.idRangeOffset.length - i)] : t + o.idDelta[i])
                                    }
                                    if (12 == o.format) {
                                        if (t > o.groups[o.groups.length - 1][1]) return 0;
                                        for (a = 0; a < o.groups.length; a++) {
                                            var s = o.groups[a];
                                            if (s[0] <= t && t <= s[1]) return s[2] + (t - s[0])
                                        }
                                        return 0
                                    }
                                    throw "unknown cmap table format " + o.format
                                }, t.U.glyphToPath = function(e, r) {
                                    var n = {
                                        cmds: [],
                                        crds: []
                                    };
                                    if (e.SVG && e.SVG.entries[r]) {
                                        var o = e.SVG.entries[r];
                                        return null == o ? n : ("string" == typeof o && (o = t.SVG.toPath(o), e.SVG.entries[r] = o), o)
                                    }
                                    if (e.CFF) {
                                        var i = {
                                                x: 0,
                                                y: 0,
                                                stack: [],
                                                nStems: 0,
                                                haveWidth: !1,
                                                width: e.CFF.Private ? e.CFF.Private.defaultWidthX : 0,
                                                open: !1
                                            },
                                            a = e.CFF,
                                            s = e.CFF.Private;
                                        if (a.ROS) {
                                            for (var u = 0; a.FDSelect[u + 2] <= r;) u += 2;
                                            s = a.FDArray[a.FDSelect[u + 1]].Private
                                        }
                                        t.U._drawCFF(e.CFF.CharStrings[r], i, a, s, n)
                                    } else e.glyf && t.U._drawGlyf(r, e, n);
                                    return n
                                }, t.U._drawGlyf = function(e, r, n) {
                                    var o = r.glyf[e];
                                    null == o && (o = r.glyf[e] = t.glyf._parseGlyf(r, e)), null != o && (o.noc > -1 ? t.U._simpleGlyph(o, n) : t.U._compoGlyph(o, r, n))
                                }, t.U._simpleGlyph = function(e, r) {
                                    for (var n = 0; n < e.noc; n++) {
                                        for (var o = 0 == n ? 0 : e.endPts[n - 1] + 1, i = e.endPts[n], a = o; a <= i; a++) {
                                            var s = a == o ? i : a - 1,
                                                u = a == i ? o : a + 1,
                                                f = 1 & e.flags[a],
                                                l = 1 & e.flags[s],
                                                h = 1 & e.flags[u],
                                                c = e.xs[a],
                                                d = e.ys[a];
                                            if (a == o)
                                                if (f) {
                                                    if (!l) {
                                                        t.U.P.moveTo(r, c, d);
                                                        continue
                                                    }
                                                    t.U.P.moveTo(r, e.xs[s], e.ys[s])
                                                } else l ? t.U.P.moveTo(r, e.xs[s], e.ys[s]) : t.U.P.moveTo(r, (e.xs[s] + c) / 2, (e.ys[s] + d) / 2);
                                            f ? l && t.U.P.lineTo(r, c, d) : h ? t.U.P.qcurveTo(r, c, d, e.xs[u], e.ys[u]) : t.U.P.qcurveTo(r, c, d, (c + e.xs[u]) / 2, (d + e.ys[u]) / 2)
                                        }
                                        t.U.P.closePath(r)
                                    }
                                }, t.U._compoGlyph = function(e, r, n) {
                                    for (var o = 0; o < e.parts.length; o++) {
                                        var i = {
                                                cmds: [],
                                                crds: []
                                            },
                                            a = e.parts[o];
                                        t.U._drawGlyf(a.glyphIndex, r, i);
                                        for (var s = a.m, u = 0; u < i.crds.length; u += 2) {
                                            var f = i.crds[u],
                                                l = i.crds[u + 1];
                                            n.crds.push(f * s.a + l * s.b + s.tx), n.crds.push(f * s.c + l * s.d + s.ty)
                                        }
                                        for (u = 0; u < i.cmds.length; u++) n.cmds.push(i.cmds[u])
                                    }
                                }, t.U._getGlyphClass = function(e, r) {
                                    var n = t._lctf.getInterval(r, e);
                                    return -1 == n ? 0 : r[n + 2]
                                }, t.U.getPairAdjustment = function(e, r, n) {
                                    var o = 0;
                                    if (e.GPOS)
                                        for (var i = e.GPOS, a = i.lookupList, s = i.featureList, u = [], f = 0; f < s.length; f++) {
                                            var l = s[f];
                                            if ("kern" == l.tag)
                                                for (var h = 0; h < l.tab.length; h++)
                                                    if (!u[l.tab[h]]) {
                                                        u[l.tab[h]] = !0;
                                                        for (var c = a[l.tab[h]], d = 0; d < c.tabs.length; d++)
                                                            if (null != c.tabs[d]) {
                                                                var p, v = c.tabs[d];
                                                                if (!v.coverage || -1 != (p = t._lctf.coverageIndex(v.coverage, r)))
                                                                    if (1 == c.ltype);
                                                                    else if (2 == c.ltype) {
                                                                    var g;
                                                                    if (1 == v.fmt) {
                                                                        var y = v.pairsets[p];
                                                                        for (f = 0; f < y.length; f++) y[f].gid2 == n && (g = y[f])
                                                                    } else if (2 == v.fmt) {
                                                                        var m = t.U._getGlyphClass(r, v.classDef1),
                                                                            b = t.U._getGlyphClass(n, v.classDef2);
                                                                        g = v.matrix[m][b]
                                                                    }
                                                                    g && g.val1 && g.val1[2] && (o += g.val1[2]), g && g.val2 && g.val2[0] && (o += g.val2[0])
                                                                }
                                                            }
                                                    }
                                        }
                                    if (e.kern) {
                                        var U = e.kern.glyph1.indexOf(r);
                                        if (-1 != U) {
                                            var S = e.kern.rval[U].glyph2.indexOf(n); - 1 != S && (o += e.kern.rval[U].vals[S])
                                        }
                                    }
                                    return o
                                }, t.U.stringToGlyphs = function(e, r) {
                                    for (var n = [], o = 0; o < r.length; o++)(i = r.codePointAt(o)) > 65535 && o++, n.push(t.U.codeToGlyph(e, i));
                                    for (o = 0; o < r.length; o++) {
                                        var i;
                                        if (2367 == (i = r.codePointAt(o))) {
                                            var a = n[o - 1];
                                            n[o - 1] = n[o], n[o] = a
                                        }
                                        i > 65535 && o++
                                    }
                                    var s = e.GSUB;
                                    if (null == s) return n;
                                    for (var u = s.lookupList, f = s.featureList, l = ["rlig", "liga", "mset", "isol", "init", "fina", "medi", "half", "pres", "blws"], h = [], c = 0; c < f.length; c++) {
                                        var d = f[c];
                                        if (-1 != l.indexOf(d.tag))
                                            for (var p = 0; p < d.tab.length; p++)
                                                if (!h[d.tab[p]]) {
                                                    h[d.tab[p]] = !0;
                                                    for (var v = u[d.tab[p]], g = 0; g < n.length; g++) {
                                                        var y = t.U._getWPfeature(r, g); - 1 != "isol,init,fina,medi".indexOf(d.tag) && d.tag != y || t.U._applySubs(n, g, v, u)
                                                    }
                                                }
                                    }
                                    return n
                                }, t.U._getWPfeature = function(e, t) {
                                    var r = '\n\t" ,.:;!?()  \u060c',
                                        n = "\u0622\u0623\u0624\u0625\u0627\u0629\u062f\u0630\u0631\u0632\u0648\u0671\u0672\u0673\u0675\u0676\u0677\u0688\u0689\u068a\u068b\u068c\u068d\u068e\u068f\u0690\u0691\u0692\u0693\u0694\u0695\u0696\u0697\u0698\u0699\u06c0\u06c3\u06c4\u06c5\u06c6\u06c7\u06c8\u06c9\u06ca\u06cb\u06cd\u06cf\u06d2\u06d3\u06d5\u06ee\u06ef\u0710\u0715\u0716\u0717\u0718\u0719\u071e\u0728\u072a\u072c\u072f\u074d\u0759\u075a\u075b\u076b\u076c\u0771\u0773\u0774\u0778\u0779\u0840\u0846\u0847\u0849\u0854\u0867\u0869\u086a\u08aa\u08ab\u08ac\u08ae\u08b1\u08b2\u08b9\u0ac5\u0ac7\u0ac9\u0aca\u0ace\u0acf\u0ad0\u0ad1\u0ad2\u0add\u0ae1\u0ae4\u0aef\u0b81\u0b83\u0b84\u0b85\u0b89\u0b8c\u0b8e\u0b8f\u0b91\u0ba9\u0baa\u0bab\u0bac",
                                        o = 0 == t || -1 != r.indexOf(e[t - 1]),
                                        i = t == e.length - 1 || -1 != r.indexOf(e[t + 1]);
                                    return o || -1 == n.indexOf(e[t - 1]) || (o = !0), i || -1 == n.indexOf(e[t]) || (i = !0), i || -1 == "\ua872\u0acd\u0ad7".indexOf(e[t + 1]) || (i = !0), o || -1 == "\ua872\u0acd\u0ad7".indexOf(e[t]) || (o = !0), o ? i ? "isol" : "init" : i ? "fina" : "medi"
                                }, t.U._applySubs = function(e, r, n, o) {
                                    for (var i = e.length - r - 1, a = 0; a < n.tabs.length; a++)
                                        if (null != n.tabs[a]) {
                                            var s, u = n.tabs[a];
                                            if (!u.coverage || -1 != (s = t._lctf.coverageIndex(u.coverage, e[r])))
                                                if (1 == n.ltype) e[r], 1 == u.fmt ? e[r] = e[r] + u.delta : e[r] = u.newg[s];
                                                else if (4 == n.ltype)
                                                for (var f = u.vals[s], l = 0; l < f.length; l++) {
                                                    var h = f[l],
                                                        c = h.chain.length;
                                                    if (!(c > i)) {
                                                        for (var d = !0, p = 0, v = 0; v < c; v++) {
                                                            for (; - 1 == e[r + p + (1 + v)];) p++;
                                                            h.chain[v] != e[r + p + (1 + v)] && (d = !1)
                                                        }
                                                        if (d) {
                                                            for (e[r] = h.nglyph, v = 0; v < c + p; v++) e[r + v + 1] = -1;
                                                            break
                                                        }
                                                    }
                                                } else if (5 == n.ltype && 2 == u.fmt)
                                                    for (var g = t._lctf.getInterval(u.cDef, e[r]), y = u.cDef[g + 2], m = u.scset[y], b = 0; b < m.length; b++) {
                                                        var U = m[b],
                                                            S = U.input;
                                                        if (!(S.length > i)) {
                                                            for (d = !0, v = 0; v < S.length; v++) {
                                                                var w = t._lctf.getInterval(u.cDef, e[r + 1 + v]);
                                                                if (-1 == g && u.cDef[w + 2] != S[v]) {
                                                                    d = !1;
                                                                    break
                                                                }
                                                            }
                                                            if (d) {
                                                                var T = U.substLookupRecords;
                                                                for (l = 0; l < T.length; l += 2) T[l], T[l + 1]
                                                            }
                                                        }
                                                    } else if (6 == n.ltype && 3 == u.fmt) {
                                                        if (!t.U._glsCovered(e, u.backCvg, r - u.backCvg.length)) continue;
                                                        if (!t.U._glsCovered(e, u.inptCvg, r)) continue;
                                                        if (!t.U._glsCovered(e, u.ahedCvg, r + u.inptCvg.length)) continue;
                                                        var _ = u.lookupRec;
                                                        for (b = 0; b < _.length; b += 2) {
                                                            g = _[b];
                                                            var x = o[_[b + 1]];
                                                            t.U._applySubs(e, r + g, x, o)
                                                        }
                                                    }
                                        }
                                }, t.U._glsCovered = function(e, r, n) {
                                    for (var o = 0; o < r.length; o++)
                                        if (-1 == t._lctf.coverageIndex(r[o], e[n + o])) return !1;
                                    return !0
                                }, t.U.glyphsToPath = function(e, r, n) {
                                    for (var o = {
                                            cmds: [],
                                            crds: []
                                        }, i = 0, a = 0; a < r.length; a++) {
                                        var s = r[a];
                                        if (-1 != s) {
                                            for (var u = a < r.length - 1 && -1 != r[a + 1] ? r[a + 1] : 0, f = t.U.glyphToPath(e, s), l = 0; l < f.crds.length; l += 2) o.crds.push(f.crds[l] + i), o.crds.push(f.crds[l + 1]);
                                            for (n && o.cmds.push(n), l = 0; l < f.cmds.length; l++) o.cmds.push(f.cmds[l]);
                                            n && o.cmds.push("X"), i += e.hmtx.aWidth[s], a < r.length - 1 && (i += t.U.getPairAdjustment(e, s, u))
                                        }
                                    }
                                    return o
                                }, t.U.pathToSVG = function(e, t) {
                                    null == t && (t = 5);
                                    for (var r = [], n = 0, o = {
                                            M: 2,
                                            L: 2,
                                            Q: 4,
                                            C: 6
                                        }, i = 0; i < e.cmds.length; i++) {
                                        var a = e.cmds[i],
                                            s = n + (o[a] ? o[a] : 0);
                                        for (r.push(a); n < s;) {
                                            var u = e.crds[n++];
                                            r.push(parseFloat(u.toFixed(t)) + (n == s ? "" : " "))
                                        }
                                    }
                                    return r.join("")
                                }, t.U.pathToContext = function(e, t) {
                                    for (var r = 0, n = e.crds, o = 0; o < e.cmds.length; o++) {
                                        var i = e.cmds[o];
                                        "M" == i ? (t.moveTo(n[r], n[r + 1]), r += 2) : "L" == i ? (t.lineTo(n[r], n[r + 1]), r += 2) : "C" == i ? (t.bezierCurveTo(n[r], n[r + 1], n[r + 2], n[r + 3], n[r + 4], n[r + 5]), r += 6) : "Q" == i ? (t.quadraticCurveTo(n[r], n[r + 1], n[r + 2], n[r + 3]), r += 4) : "#" == i.charAt(0) ? (t.beginPath(), t.fillStyle = i) : "Z" == i ? t.closePath() : "X" == i && t.fill()
                                    }
                                }, t.U.P = {}, t.U.P.moveTo = function(e, t, r) {
                                    e.cmds.push("M"), e.crds.push(t, r)
                                }, t.U.P.lineTo = function(e, t, r) {
                                    e.cmds.push("L"), e.crds.push(t, r)
                                }, t.U.P.curveTo = function(e, t, r, n, o, i, a) {
                                    e.cmds.push("C"), e.crds.push(t, r, n, o, i, a)
                                }, t.U.P.qcurveTo = function(e, t, r, n, o) {
                                    e.cmds.push("Q"), e.crds.push(t, r, n, o)
                                }, t.U.P.closePath = function(e) {
                                    e.cmds.push("Z")
                                }, t.U._drawCFF = function(e, r, n, o, i) {
                                    for (var a = r.stack, s = r.nStems, u = r.haveWidth, f = r.width, l = r.open, h = 0, c = r.x, d = r.y, p = 0, v = 0, g = 0, y = 0, m = 0, b = 0, U = 0, S = 0, w = 0, T = 0, _ = {
                                            val: 0,
                                            size: 0
                                        }; h < e.length;) {
                                        t.CFF.getCharString(e, h, _);
                                        var x = _.val;
                                        if (h += _.size, "o1" == x || "o18" == x) a.length % 2 != 0 && !u && (f = a.shift() + o.nominalWidthX), s += a.length >> 1, a.length = 0, u = !0;
                                        else if ("o3" == x || "o23" == x) a.length % 2 != 0 && !u && (f = a.shift() + o.nominalWidthX), s += a.length >> 1, a.length = 0, u = !0;
                                        else if ("o4" == x) a.length > 1 && !u && (f = a.shift() + o.nominalWidthX, u = !0), l && t.U.P.closePath(i), d += a.pop(), t.U.P.moveTo(i, c, d), l = !0;
                                        else if ("o5" == x)
                                            for (; a.length > 0;) c += a.shift(), d += a.shift(), t.U.P.lineTo(i, c, d);
                                        else if ("o6" == x || "o7" == x)
                                            for (var E = a.length, k = "o6" == x, O = 0; O < E; O++) {
                                                var C = a.shift();
                                                k ? c += C : d += C, k = !k, t.U.P.lineTo(i, c, d)
                                            } else if ("o8" == x || "o24" == x) {
                                                E = a.length;
                                                for (var I = 0; I + 6 <= E;) p = c + a.shift(), v = d + a.shift(), g = p + a.shift(), y = v + a.shift(), c = g + a.shift(), d = y + a.shift(), t.U.P.curveTo(i, p, v, g, y, c, d), I += 6;
                                                "o24" == x && (c += a.shift(), d += a.shift(), t.U.P.lineTo(i, c, d))
                                            } else {
                                                if ("o11" == x) break;
                                                if ("o1234" == x || "o1235" == x || "o1236" == x || "o1237" == x) "o1234" == x && (v = d, g = (p = c + a.shift()) + a.shift(), T = y = v + a.shift(), b = y, S = d, c = (U = (m = (w = g + a.shift()) + a.shift()) + a.shift()) + a.shift(), t.U.P.curveTo(i, p, v, g, y, w, T), t.U.P.curveTo(i, m, b, U, S, c, d)), "o1235" == x && (p = c + a.shift(), v = d + a.shift(), g = p + a.shift(), y = v + a.shift(), w = g + a.shift(), T = y + a.shift(), m = w + a.shift(), b = T + a.shift(), U = m + a.shift(), S = b + a.shift(), c = U + a.shift(), d = S + a.shift(), a.shift(), t.U.P.curveTo(i, p, v, g, y, w, T), t.U.P.curveTo(i, m, b, U, S, c, d)), "o1236" == x && (p = c + a.shift(), v = d + a.shift(), g = p + a.shift(), T = y = v + a.shift(), b = y, U = (m = (w = g + a.shift()) + a.shift()) + a.shift(), S = b + a.shift(), c = U + a.shift(), t.U.P.curveTo(i, p, v, g, y, w, T), t.U.P.curveTo(i, m, b, U, S, c, d)), "o1237" == x && (p = c + a.shift(), v = d + a.shift(), g = p + a.shift(), y = v + a.shift(), w = g + a.shift(), T = y + a.shift(), m = w + a.shift(), b = T + a.shift(), U = m + a.shift(), S = b + a.shift(), Math.abs(U - c) > Math.abs(S - d) ? c = U + a.shift() : d = S + a.shift(), t.U.P.curveTo(i, p, v, g, y, w, T), t.U.P.curveTo(i, m, b, U, S, c, d));
                                                else if ("o14" == x) {
                                                    if (a.length > 0 && !u && (f = a.shift() + n.nominalWidthX, u = !0), 4 == a.length) {
                                                        var F = a.shift(),
                                                            A = a.shift(),
                                                            P = a.shift(),
                                                            D = a.shift(),
                                                            B = t.CFF.glyphBySE(n, P),
                                                            M = t.CFF.glyphBySE(n, D);
                                                        t.U._drawCFF(n.CharStrings[B], r, n, o, i), r.x = F, r.y = A, t.U._drawCFF(n.CharStrings[M], r, n, o, i)
                                                    }
                                                    l && (t.U.P.closePath(i), l = !1)
                                                } else if ("o19" == x || "o20" == x) a.length % 2 != 0 && !u && (f = a.shift() + o.nominalWidthX), s += a.length >> 1, a.length = 0, u = !0, h += s + 7 >> 3;
                                                else if ("o21" == x) a.length > 2 && !u && (f = a.shift() + o.nominalWidthX, u = !0), d += a.pop(), c += a.pop(), l && t.U.P.closePath(i), t.U.P.moveTo(i, c, d), l = !0;
                                                else if ("o22" == x) a.length > 1 && !u && (f = a.shift() + o.nominalWidthX, u = !0), c += a.pop(), l && t.U.P.closePath(i), t.U.P.moveTo(i, c, d), l = !0;
                                                else if ("o25" == x) {
                                                    for (; a.length > 6;) c += a.shift(), d += a.shift(), t.U.P.lineTo(i, c, d);
                                                    p = c + a.shift(), v = d + a.shift(), g = p + a.shift(), y = v + a.shift(), c = g + a.shift(), d = y + a.shift(), t.U.P.curveTo(i, p, v, g, y, c, d)
                                                } else if ("o26" == x)
                                                    for (a.length % 2 && (c += a.shift()); a.length > 0;) p = c, v = d + a.shift(), c = g = p + a.shift(), d = (y = v + a.shift()) + a.shift(), t.U.P.curveTo(i, p, v, g, y, c, d);
                                                else if ("o27" == x)
                                                    for (a.length % 2 && (d += a.shift()); a.length > 0;) v = d, g = (p = c + a.shift()) + a.shift(), y = v + a.shift(), c = g + a.shift(), d = y, t.U.P.curveTo(i, p, v, g, y, c, d);
                                                else if ("o10" == x || "o29" == x) {
                                                    var R = "o10" == x ? o : n;
                                                    if (0 == a.length) console.debug("error: empty stack");
                                                    else {
                                                        var L = a.pop(),
                                                            G = R.Subrs[L + R.Bias];
                                                        r.x = c, r.y = d, r.nStems = s, r.haveWidth = u, r.width = f, r.open = l, t.U._drawCFF(G, r, n, o, i), c = r.x, d = r.y, s = r.nStems, u = r.haveWidth, f = r.width, l = r.open
                                                    }
                                                } else if ("o30" == x || "o31" == x) {
                                                    var N = a.length,
                                                        W = (I = 0, "o31" == x);
                                                    for (I += N - (E = -3 & N); I < E;) W ? (v = d, g = (p = c + a.shift()) + a.shift(), d = (y = v + a.shift()) + a.shift(), E - I == 5 ? (c = g + a.shift(), I++) : c = g, W = !1) : (p = c, v = d + a.shift(), g = p + a.shift(), y = v + a.shift(), c = g + a.shift(), E - I == 5 ? (d = y + a.shift(), I++) : d = y, W = !0), t.U.P.curveTo(i, p, v, g, y, c, d), I += 4
                                                } else {
                                                    if ("o" == (x + "").charAt(0)) throw console.debug("Unknown operation: " + x, e), x;
                                                    a.push(x)
                                                }
                                            }
                                    }
                                    r.x = c, r.y = d, r.nStems = s, r.haveWidth = u, r.width = f, r.open = l
                                };
                                var r = t,
                                    n = {
                                        Typr: r
                                    };
                                return e.Typr = r, e.default = n, e
                            }({}).Typr
                    }, function() {
                        return function(e) {
                            var t = Uint8Array,
                                r = Uint16Array,
                                n = Uint32Array,
                                o = new t([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
                                i = new t([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
                                a = new t([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
                                s = function(e, t) {
                                    for (var o = new r(31), i = 0; i < 31; ++i) o[i] = t += 1 << e[i - 1];
                                    var a = new n(o[30]);
                                    for (i = 1; i < 30; ++i)
                                        for (var s = o[i]; s < o[i + 1]; ++s) a[s] = s - o[i] << 5 | i;
                                    return [o, a]
                                },
                                u = s(o, 2),
                                f = u[0],
                                l = u[1];
                            f[28] = 258, l[258] = 28;
                            for (var h = s(i, 0)[0], c = new r(32768), d = 0; d < 32768; ++d) {
                                var p = (43690 & d) >>> 1 | (21845 & d) << 1;
                                p = (61680 & (p = (52428 & p) >>> 2 | (13107 & p) << 2)) >>> 4 | (3855 & p) << 4, c[d] = ((65280 & p) >>> 8 | (255 & p) << 8) >>> 1
                            }
                            var v = function(e, t, n) {
                                    for (var o = e.length, i = 0, a = new r(t); i < o; ++i) ++a[e[i] - 1];
                                    var s, u = new r(t);
                                    for (i = 0; i < t; ++i) u[i] = u[i - 1] + a[i - 1] << 1;
                                    if (n) {
                                        s = new r(1 << t);
                                        var f = 15 - t;
                                        for (i = 0; i < o; ++i)
                                            if (e[i])
                                                for (var l = i << 4 | e[i], h = t - e[i], d = u[e[i] - 1]++ << h, p = d | (1 << h) - 1; d <= p; ++d) s[c[d] >>> f] = l
                                    } else
                                        for (s = new r(o), i = 0; i < o; ++i) s[i] = c[u[e[i] - 1]++] >>> 15 - e[i];
                                    return s
                                },
                                g = new t(288);
                            for (d = 0; d < 144; ++d) g[d] = 8;
                            for (d = 144; d < 256; ++d) g[d] = 9;
                            for (d = 256; d < 280; ++d) g[d] = 7;
                            for (d = 280; d < 288; ++d) g[d] = 8;
                            var y = new t(32);
                            for (d = 0; d < 32; ++d) y[d] = 5;
                            var m = v(g, 9, 1),
                                b = v(y, 5, 1),
                                U = function(e) {
                                    for (var t = e[0], r = 1; r < e.length; ++r) e[r] > t && (t = e[r]);
                                    return t
                                },
                                S = function(e, t, r) {
                                    var n = t / 8 >> 0;
                                    return (e[n] | e[n + 1] << 8) >>> (7 & t) & r
                                },
                                w = function(e, t) {
                                    var r = t / 8 >> 0;
                                    return (e[r] | e[r + 1] << 8 | e[r + 2] << 16) >>> (7 & t)
                                },
                                T = function(e, s, u) {
                                    var l = e.length,
                                        c = !s || u,
                                        d = !u || u.i;
                                    u || (u = {}), s || (s = new t(3 * l));
                                    var p, g = function(e) {
                                            var r = s.length;
                                            if (e > r) {
                                                var n = new t(Math.max(2 * r, e));
                                                n.set(s), s = n
                                            }
                                        },
                                        y = u.f || 0,
                                        T = u.p || 0,
                                        _ = u.b || 0,
                                        x = u.l,
                                        E = u.d,
                                        k = u.m,
                                        O = u.n,
                                        C = 8 * l;
                                    do {
                                        if (!x) {
                                            u.f = y = S(e, T, 1);
                                            var I = S(e, T + 1, 3);
                                            if (T += 3, !I) {
                                                var F = e[(V = ((p = T) / 8 >> 0) + (7 & p && 1) + 4) - 4] | e[V - 3] << 8,
                                                    A = V + F;
                                                if (A > l) {
                                                    if (d) throw "unexpected EOF";
                                                    break
                                                }
                                                c && g(_ + F), s.set(e.subarray(V, A), _), u.b = _ += F, u.p = T = 8 * A;
                                                continue
                                            }
                                            if (1 == I) x = m, E = b, k = 9, O = 5;
                                            else {
                                                if (2 != I) throw "invalid block type";
                                                var P = S(e, T, 31) + 257,
                                                    D = S(e, T + 10, 15) + 4,
                                                    B = P + S(e, T + 5, 31) + 1;
                                                T += 14;
                                                for (var M = new t(B), R = new t(19), L = 0; L < D; ++L) R[a[L]] = S(e, T + 3 * L, 7);
                                                T += 3 * D;
                                                var G = U(R),
                                                    N = (1 << G) - 1;
                                                if (!d && T + B * (G + 7) > C) break;
                                                var W = v(R, G, 1);
                                                for (L = 0; L < B;) {
                                                    var V, z = W[S(e, T, N)];
                                                    if (T += 15 & z, (V = z >>> 4) < 16) M[L++] = V;
                                                    else {
                                                        var j = 0,
                                                            X = 0;
                                                        for (16 == V ? (X = 3 + S(e, T, 3), T += 2, j = M[L - 1]) : 17 == V ? (X = 3 + S(e, T, 7), T += 3) : 18 == V && (X = 11 + S(e, T, 127), T += 7); X--;) M[L++] = j
                                                    }
                                                }
                                                var Y = M.subarray(0, P),
                                                    H = M.subarray(P);
                                                k = U(Y), O = U(H), x = v(Y, k, 1), E = v(H, O, 1)
                                            }
                                            if (T > C) throw "unexpected EOF"
                                        }
                                        c && g(_ + 131072);
                                        for (var $ = (1 << k) - 1, q = (1 << O) - 1, J = k + O + 18; d || T + J < C;) {
                                            var Z = (j = x[w(e, T) & $]) >>> 4;
                                            if ((T += 15 & j) > C) throw "unexpected EOF";
                                            if (!j) throw "invalid length/literal";
                                            if (Z < 256) s[_++] = Z;
                                            else {
                                                if (256 == Z) {
                                                    x = null;
                                                    break
                                                }
                                                var K = Z - 254;
                                                if (Z > 264) {
                                                    var Q = o[L = Z - 257];
                                                    K = S(e, T, (1 << Q) - 1) + f[L], T += Q
                                                }
                                                var ee = E[w(e, T) & q],
                                                    te = ee >>> 4;
                                                if (!ee) throw "invalid distance";
                                                if (T += 15 & ee, H = h[te], te > 3 && (Q = i[te], H += w(e, T) & (1 << Q) - 1, T += Q), T > C) throw "unexpected EOF";
                                                c && g(_ + 131072);
                                                for (var re = _ + K; _ < re; _ += 4) s[_] = s[_ - H], s[_ + 1] = s[_ + 1 - H], s[_ + 2] = s[_ + 2 - H], s[_ + 3] = s[_ + 3 - H];
                                                _ = re
                                            }
                                        }
                                        u.l = x, u.p = T, u.b = _, x && (y = 1, u.m = k, u.d = E, u.n = O)
                                    } while (!y);
                                    return _ == s.length ? s : function(e, o, i) {
                                        (null == o || o < 0) && (o = 0), (null == i || i > e.length) && (i = e.length);
                                        var a = new(e instanceof r ? r : e instanceof n ? n : t)(i - o);
                                        return a.set(e.subarray(o, i)), a
                                    }(s, 0, _)
                                };
                            return e.convert_streams = function(e) {
                                var t = new DataView(e),
                                    r = 0;

                                function n() {
                                    var e = t.getUint16(r);
                                    return r += 2, e
                                }

                                function o() {
                                    var e = t.getUint32(r);
                                    return r += 4, e
                                }

                                function i(e) {
                                    y.setUint16(m, e), m += 2
                                }

                                function a(e) {
                                    y.setUint32(m, e), m += 4
                                }
                                for (var s = {
                                        signature: o(),
                                        flavor: o(),
                                        length: o(),
                                        numTables: n(),
                                        reserved: n(),
                                        totalSfntSize: o(),
                                        majorVersion: n(),
                                        minorVersion: n(),
                                        metaOffset: o(),
                                        metaLength: o(),
                                        metaOrigLength: o(),
                                        privOffset: o(),
                                        privLength: o()
                                    }, u = 0; Math.pow(2, u) <= s.numTables;) u++;
                                u--;
                                for (var f = 16 * Math.pow(2, u), l = 16 * s.numTables - f, h = 12, c = [], d = 0; d < s.numTables; d++) c.push({
                                    tag: o(),
                                    offset: o(),
                                    compLength: o(),
                                    origLength: o(),
                                    origChecksum: o()
                                }), h += 16;
                                var p, v = new Uint8Array(12 + 16 * c.length + c.reduce((function(e, t) {
                                        return e + t.origLength + 4
                                    }), 0)),
                                    g = v.buffer,
                                    y = new DataView(g),
                                    m = 0;
                                return a(s.flavor), i(s.numTables), i(f), i(u), i(l), c.forEach((function(e) {
                                    a(e.tag), a(e.origChecksum), a(h), a(e.origLength), e.outOffset = h, (h += e.origLength) % 4 != 0 && (h += 4 - h % 4)
                                })), c.forEach((function(t) {
                                    var r, n = e.slice(t.offset, t.offset + t.compLength);
                                    if (t.compLength != t.origLength) {
                                        var o = new Uint8Array(t.origLength);
                                        r = new Uint8Array(n, 2), T(r, o)
                                    } else o = new Uint8Array(n);
                                    v.set(o, t.outOffset);
                                    var i = 0;
                                    (h = t.outOffset + t.origLength) % 4 != 0 && (i = 4 - h % 4), v.set(new Uint8Array(i).buffer, t.outOffset + t.origLength), p = h + i
                                })), g.slice(0, p)
                            }, e
                        }({}).convert_streams
                    }, function(e, t) {
                        const r = {
                            M: 2,
                            L: 2,
                            Q: 4,
                            C: 6,
                            Z: 0
                        };
                        return function(n) {
                            const o = new Uint8Array(n, 0, 4),
                                i = e._bin.readASCII(o, 0, 4);
                            if ("wOFF" === i) n = t(n);
                            else if ("wOF2" === i) throw new Error("woff2 fonts not supported");
                            return function(t) {
                                const n = Object.create(null),
                                    o = {
                                        unitsPerEm: t.head.unitsPerEm,
                                        ascender: t.hhea.ascender,
                                        descender: t.hhea.descender,
                                        forEachGlyph(i, a, s, u) {
                                            let f = 0;
                                            const l = 1 / o.unitsPerEm * a,
                                                h = e.U.stringToGlyphs(t, i);
                                            let c = 0,
                                                d = -1;
                                            return h.forEach(((o, h) => {
                                                if (-1 !== o) {
                                                    let i = n[o];
                                                    if (!i) {
                                                        const {
                                                            cmds: a,
                                                            crds: s
                                                        } = e.U.glyphToPath(t, o);
                                                        let u, f, l, h;
                                                        if (s.length) {
                                                            u = f = 1 / 0, l = h = -1 / 0;
                                                            for (let e = 0, t = s.length; e < t; e += 2) {
                                                                let t = s[e],
                                                                    r = s[e + 1];
                                                                t < u && (u = t), r < f && (f = r), t > l && (l = t), r > h && (h = r)
                                                            }
                                                        } else u = l = f = h = 0;
                                                        i = n[o] = {
                                                            index: o,
                                                            advanceWidth: t.hmtx.aWidth[o],
                                                            xMin: u,
                                                            yMin: f,
                                                            xMax: l,
                                                            yMax: h,
                                                            pathCommandCount: a.length,
                                                            forEachPathCommand(e) {
                                                                let t = 0;
                                                                const n = [];
                                                                for (let o = 0, i = a.length; o < i; o++) {
                                                                    const i = r[a[o]];
                                                                    n.length = 1 + i, n[0] = a[o];
                                                                    for (let e = 1; e <= i; e++) n[e] = s[t++];
                                                                    e.apply(null, n)
                                                                }
                                                            }
                                                        }
                                                    } - 1 !== d && (f += e.U.getPairAdjustment(t, d, o) * l), u.call(null, i, f, c), i.advanceWidth && (f += i.advanceWidth * l), s && (f += s * a), d = o
                                                }
                                                c += i.codePointAt(c) > 65535 ? 2 : 1
                                            })), f
                                        }
                                    };
                                return o
                            }(e.parse(n)[0])
                        }
                    }],
                    init: (e, t, r) => r(e(), t())
                }),
                B = {
                    defaultFontURL: "https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxM.woff",
                    sdfGlyphSize: 64,
                    sdfMargin: 1 / 16,
                    sdfExponent: 9,
                    textureWidth: 2048
                },
                M = new s.Color;
            let R = !1;
            const L = Object.create(null);

            function G(e, t) {
                if (R = !0, (e = N({}, e)).font = function(e) {
                        W || (W = "undefined" === typeof document ? {} : document.createElement("a"));
                        return W.href = e, W.href
                    }(e.font || B.defaultFontURL), e.text = "" + e.text, e.sdfGlyphSize = e.sdfGlyphSize || B.sdfGlyphSize, null != e.colorRanges) {
                    let t = {};
                    for (let r in e.colorRanges)
                        if (e.colorRanges.hasOwnProperty(r)) {
                            let n = e.colorRanges[r];
                            "number" !== typeof n && (n = M.set(n).getHex()), t[r] = n
                        }
                    e.colorRanges = t
                }
                Object.freeze(e);
                const {
                    textureWidth: r,
                    sdfExponent: n
                } = B, {
                    sdfGlyphSize: o
                } = e;
                let i = `${e.font}@${o}`,
                    a = L[i];
                a || (a = L[i] = {
                    sdfTexture: new s.DataTexture(new Uint8Array(o * r), r, o, s.LuminanceFormat, void 0, void 0, void 0, void 0, s.LinearFilter, s.LinearFilter)
                }, a.sdfTexture.font = e.font), V(e).then((r => {
                    r.newGlyphSDFs && (r.newGlyphSDFs.forEach((({
                        textureData: e,
                        atlasIndex: t
                    }) => {
                        const r = a.sdfTexture.image;
                        for (; r.data.length < (t + 1) * o * o;) {
                            const e = new Uint8Array(2 * r.data.length);
                            e.set(r.data), r.data = e, r.height *= 2
                        }
                        const n = r.width / o,
                            i = r.width * o * Math.floor(t / n) + t % n * o;
                        for (let a = 0; a < o; a++) {
                            const t = a * o,
                                n = i + a * r.width;
                            for (let i = 0; i < o; i++) r.data[n + i] = e[t + i]
                        }
                    })), a.sdfTexture.needsUpdate = !0), t(Object.freeze({
                        parameters: e,
                        sdfTexture: a.sdfTexture,
                        sdfGlyphSize: o,
                        sdfExponent: n,
                        glyphBounds: r.glyphBounds,
                        glyphAtlasIndices: r.glyphAtlasIndices,
                        glyphColors: r.glyphColors,
                        caretPositions: r.caretPositions,
                        caretHeight: r.caretHeight,
                        chunkedBounds: r.chunkedBounds,
                        ascender: r.ascender,
                        descender: r.descender,
                        lineHeight: r.lineHeight,
                        topBaseline: r.topBaseline,
                        blockBounds: r.blockBounds,
                        visibleBounds: r.visibleBounds,
                        timings: r.timings,
                        get totalBounds() {
                            return console.log("totalBounds deprecated, use blockBounds instead"), r.blockBounds
                        },
                        get totalBlockSize() {
                            console.log("totalBlockSize deprecated, use blockBounds instead");
                            const [e, t, n, o] = r.blockBounds;
                            return [n - e, o - t]
                        }
                    }))
                }))
            }

            function N(e, t) {
                for (let r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                return e
            }
            let W;
            const V = m({
                    name: "TextBuilder",
                    dependencies: [m({
                        name: "FontProcessor",
                        dependencies: [B, D, function() {
                            let e = !1;
                            const t = [];

                            function r() {
                                e && (t.sort((function(e, t) {
                                    return e.maxX - t.maxX
                                })), e = !1)
                            }

                            function n(e, t, r, n, o, i) {
                                const a = o - r,
                                    s = i - n,
                                    u = a * a + s * s,
                                    f = u ? Math.max(0, Math.min(1, ((e - r) * a + (t - n) * s) / u)) : 0,
                                    l = e - (r + f * a),
                                    h = t - (n + f * s);
                                return l * l + h * h
                            }
                            return {
                                addLineSegment: function(r, n, o, i) {
                                    const a = {
                                        x0: r,
                                        y0: n,
                                        x1: o,
                                        y1: i,
                                        minX: Math.min(r, o),
                                        minY: Math.min(n, i),
                                        maxX: Math.max(r, o),
                                        maxY: Math.max(n, i)
                                    };
                                    t.push(a), e = !0
                                },
                                findNearestSignedDistance: function(e, o) {
                                    r();
                                    let i = 1 / 0,
                                        a = 1 / 0;
                                    for (let r = t.length; r--;) {
                                        const s = t[r];
                                        if (s.maxX + a <= e) break;
                                        if (e + a > s.minX && o - a < s.maxY && o + a > s.minY) {
                                            const t = n(e, o, s.x0, s.y0, s.x1, s.y1);
                                            t < i && (i = t, a = Math.sqrt(i))
                                        }
                                    }
                                    return function(e, n) {
                                        r();
                                        let o = !1;
                                        for (let r = t.length; r--;) {
                                            const i = t[r];
                                            if (i.maxX <= e) break;
                                            if (i.minY < n && i.maxY > n) {
                                                i.y0 > n !== i.y1 > n && e < (i.x1 - i.x0) * (n - i.y0) / (i.y1 - i.y0) + i.x0 && (o = !o)
                                            }
                                        }
                                        return o
                                    }(e, o) && (a = -a), a
                                }
                            }
                        }, function(e, t) {
                            const {
                                sdfExponent: r,
                                sdfMargin: n
                            } = t;

                            function o(e, t, r, n, o, i, a) {
                                const s = 1 - a;
                                return {
                                    x: s * s * e + 2 * s * a * r + a * a * o,
                                    y: s * s * t + 2 * s * a * n + a * a * i
                                }
                            }

                            function i(e, t, r, n, o, i, a, s, u) {
                                const f = 1 - u;
                                return {
                                    x: f * f * f * e + 3 * f * f * u * r + 3 * f * u * u * o + u * u * u * a,
                                    y: f * f * f * t + 3 * f * f * u * n + 3 * f * u * u * i + u * u * u * s
                                }
                            }
                            return function(t, a) {
                                const s = new Uint8Array(a * a),
                                    u = t.xMax - t.xMin,
                                    f = t.yMax - t.yMin,
                                    l = Math.max(u, f),
                                    h = Math.max(u, f) / a * (n * a + .5),
                                    c = t.xMin - h,
                                    d = t.yMin - h,
                                    p = t.xMax + h,
                                    v = t.yMax + h,
                                    g = p - c,
                                    y = v - d,
                                    m = Math.max(g, y);
                                if (t.pathCommandCount) {
                                    const n = e(t);
                                    let u, f, h, p;
                                    t.forEachPathCommand(((e, t, r, a, s, l, c) => {
                                        switch (e) {
                                            case "M":
                                                h = u = t, p = f = r;
                                                break;
                                            case "L":
                                                t === h && r === p || n.addLineSegment(h, p, h = t, p = r);
                                                break;
                                            case "Q":
                                                {
                                                    let e = {
                                                        x: h,
                                                        y: p
                                                    };
                                                    for (let i = 1; i < 16; i++) {
                                                        let u = o(h, p, t, r, a, s, i / 15);
                                                        n.addLineSegment(e.x, e.y, u.x, u.y), e = u
                                                    }
                                                    h = a,
                                                    p = s;
                                                    break
                                                }
                                            case "C":
                                                {
                                                    let e = {
                                                        x: h,
                                                        y: p
                                                    };
                                                    for (let o = 1; o < 16; o++) {
                                                        let u = i(h, p, t, r, a, s, l, c, o / 15);
                                                        n.addLineSegment(e.x, e.y, u.x, u.y), e = u
                                                    }
                                                    h = l,
                                                    p = c;
                                                    break
                                                }
                                            case "Z":
                                                h === u && p === f || n.addLineSegment(h, p, u, f)
                                        }
                                    }));
                                    for (let e = 0; e < a; e++)
                                        for (let t = 0; t < a; t++) {
                                            const o = n.findNearestSignedDistance(c + g * (e + .5) / a, d + y * (t + .5) / a, l);
                                            let i = Math.pow(1 - Math.abs(o) / m, r) / 2;
                                            o < 0 && (i = 1 - i), i = Math.max(0, Math.min(255, Math.round(255 * i))), s[t * a + e] = i
                                        }
                                }
                                return {
                                    textureData: s,
                                    renderingBounds: [c, d, p, v]
                                }
                            }
                        }, function(e, t, r) {
                            const {
                                defaultFontURL: n
                            } = r, o = Object.create(null), i = Object.create(null), a = 1 / 0;

                            function s(t, r) {
                                t || (t = n);
                                let o = i[t];
                                o ? o.pending ? o.pending.push(r) : r(o) : (i[t] = {
                                    pending: [r]
                                }, function(t, r) {
                                    ! function o() {
                                        const i = e => {
                                            console.error(`Failure loading font ${t}${t===n?"":"; trying fallback"}`, e), t !== n && (t = n, o())
                                        };
                                        try {
                                            const n = new XMLHttpRequest;
                                            n.open("get", t, !0), n.responseType = "arraybuffer", n.onload = function() {
                                                if (n.status >= 400) i(new Error(n.statusText));
                                                else if (n.status > 0) try {
                                                    const t = e(n.response);
                                                    r(t)
                                                } catch (t) {
                                                    i(t)
                                                }
                                            }, n.onerror = i, n.send()
                                        } catch (a) {
                                            i(a)
                                        }
                                    }()
                                }(t, (e => {
                                    let r = i[t].pending;
                                    i[t] = e, r.forEach((t => t(e)))
                                })))
                            }

                            function u({
                                text: e = "",
                                font: r = n,
                                sdfGlyphSize: i = 64,
                                fontSize: u = 1,
                                letterSpacing: c = 0,
                                lineHeight: d = "normal",
                                maxWidth: p = a,
                                textAlign: v = "left",
                                textIndent: g = 0,
                                whiteSpace: y = "normal",
                                overflowWrap: m = "normal",
                                anchorX: b = 0,
                                anchorY: U = 0,
                                includeCaretPositions: S = !1,
                                chunkedBoundsSize: w = 8192,
                                colorRanges: T = null
                            }, _, x = !1) {
                                const E = l(),
                                    k = {
                                        total: 0,
                                        fontLoad: 0,
                                        layout: 0,
                                        sdf: {},
                                        sdfTotal: 0
                                    };
                                e.indexOf("\r") > -1 && (console.warn("FontProcessor.process: got text with \\r chars; normalizing to \\n"), e = e.replace(/\r\n/g, "\n").replace(/\r/g, "\n")), u = +u, c = +c, p = +p, d = d || "normal", g = +g,
                                    function(e, t, r) {
                                        e || (e = n);
                                        let i = `${e}@${t}`,
                                            a = o[i];
                                        a ? r(a) : s(e, (e => {
                                            a = o[i] || (o[i] = {
                                                fontObj: e,
                                                glyphs: {},
                                                glyphCount: 0
                                            }), r(a)
                                        }))
                                    }(r, i, (r => {
                                        const n = r.fontObj,
                                            o = isFinite(p);
                                        let s = null,
                                            O = null,
                                            C = null,
                                            I = null,
                                            F = null,
                                            A = null,
                                            P = null,
                                            D = 0,
                                            B = 0,
                                            M = "nowrap" !== y;
                                        const {
                                            ascender: R,
                                            descender: L,
                                            unitsPerEm: G
                                        } = n;
                                        k.fontLoad = l() - E;
                                        const N = l(),
                                            W = u / G;
                                        "normal" === d && (d = (R - L) / G);
                                        const V = ((d *= u) - (R - L) * W) / 2,
                                            z = -(R * W + V),
                                            j = Math.min(d, (R - L) * W),
                                            X = (R + L) / 2 * W - j / 2;
                                        let Y = g,
                                            H = new h;
                                        const $ = [H];
                                        n.forEachGlyph(e, u, c, ((t, r, n) => {
                                            const i = e.charAt(n),
                                                a = t.advanceWidth * W,
                                                s = H.count;
                                            let f;
                                            if ("isEmpty" in t || (t.isWhitespace = !!i && /\s/.test(i), t.isEmpty = t.xMin === t.xMax || t.yMin === t.yMax), t.isWhitespace || t.isEmpty || B++, M && o && !t.isWhitespace && r + a + Y > p && s) {
                                                if (H.glyphAt(s - 1).glyphObj.isWhitespace) f = new h, Y = -r;
                                                else
                                                    for (let e = s; e--;) {
                                                        if (0 === e && "break-word" === m) {
                                                            f = new h, Y = -r;
                                                            break
                                                        }
                                                        if (H.glyphAt(e).glyphObj.isWhitespace) {
                                                            f = H.splitAt(e + 1);
                                                            const t = f.glyphAt(0).x;
                                                            Y -= t;
                                                            for (let e = f.count; e--;) f.glyphAt(e).x -= t;
                                                            break
                                                        }
                                                    }
                                                f && (H.isSoftWrapped = !0, H = f, $.push(H), D = p)
                                            }
                                            let l = H.glyphAt(H.count);
                                            l.glyphObj = t, l.x = r + Y, l.width = a, l.charIndex = n, "\n" === i && (H = new h, $.push(H), Y = -(r + a + c * u) + g)
                                        })), $.forEach((e => {
                                            for (let t = e.count; t--;) {
                                                let {
                                                    glyphObj: r,
                                                    x: n,
                                                    width: o
                                                } = e.glyphAt(t);
                                                if (!r.isWhitespace) return e.width = n + o, void(e.width > D && (D = e.width))
                                            }
                                        }));
                                        let q = 0,
                                            J = 0;
                                        if (b && ("number" === typeof b ? q = -b : "string" === typeof b && (q = -D * ("left" === b ? 0 : "center" === b ? .5 : "right" === b ? 1 : f(b)))), U)
                                            if ("number" === typeof U) J = -U;
                                            else if ("string" === typeof U) {
                                            let e = $.length * d;
                                            J = "top" === U ? 0 : "top-baseline" === U ? -z : "middle" === U ? e / 2 : "bottom" === U ? e : "bottom-baseline" === U ? e - V + L * W : f(U) * e
                                        }
                                        if (!x) {
                                            O = new Float32Array(4 * B), C = new Float32Array(B), A = [a, a, -1 / 0, -1 / 0], P = [];
                                            let n = z;
                                            S && (F = new Float32Array(3 * e.length)), T && (I = new Uint8Array(3 * B));
                                            let o, u, f = 0,
                                                h = -1,
                                                c = -1;
                                            $.forEach((p => {
                                                const {
                                                    count: g,
                                                    width: y
                                                } = p;
                                                if (g > 0) {
                                                    let d = 0,
                                                        m = 0;
                                                    if ("center" === v) d = (D - y) / 2;
                                                    else if ("right" === v) d = D - y;
                                                    else if ("justify" === v && p.isSoftWrapped) {
                                                        let e = 0;
                                                        for (let t = g; t--;)
                                                            if (!p.glyphAt(t).glyphObj.isWhitespace) {
                                                                for (; t--;) p.glyphAt(t).glyphObj, p.glyphAt(t).glyphObj.isWhitespace && e++;
                                                                break
                                                            }
                                                        m = (D - y) / e
                                                    }
                                                    for (let v = 0; v < g; v++) {
                                                        const g = p.glyphAt(v),
                                                            y = g.glyphObj;
                                                        if (d && (g.x += d), 0 !== m && y.isWhitespace && (d += m, g.width += m), S) {
                                                            const {
                                                                charIndex: e
                                                            } = g;
                                                            for (F[3 * e] = g.x + q, F[3 * e + 1] = g.x + g.width + q, F[3 * e + 2] = n + X + J; e - h > 1;) F[3 * (h + 1)] = F[3 * h], F[3 * (h + 1) + 1] = F[3 * h + 1], F[3 * (h + 1) + 2] = F[3 * h + 2], h++;
                                                            h = e
                                                        }
                                                        if (T) {
                                                            const {
                                                                charIndex: e
                                                            } = g;
                                                            for (; e > c;) c++, T.hasOwnProperty(c) && (u = T[c])
                                                        }
                                                        if (!y.isWhitespace && !y.isEmpty) {
                                                            const h = f++;
                                                            let c = r.glyphs[y.index];
                                                            if (!c) {
                                                                const n = l(),
                                                                    o = t(y, i);
                                                                k.sdf[e.charAt(g.charIndex)] = l() - n, o.atlasIndex = r.glyphCount++, s || (s = []), s.push(o), c = r.glyphs[y.index] = {
                                                                    atlasIndex: o.atlasIndex,
                                                                    glyphObj: y,
                                                                    renderingBounds: o.renderingBounds
                                                                }
                                                            }
                                                            const d = c.renderingBounds,
                                                                p = 4 * h,
                                                                v = g.x + q,
                                                                m = n + J;
                                                            O[p] = v + d[0] * W, O[p + 1] = m + d[1] * W, O[p + 2] = v + d[2] * W, O[p + 3] = m + d[3] * W;
                                                            const b = v + y.xMin * W,
                                                                U = m + y.yMin * W,
                                                                S = v + y.xMax * W,
                                                                _ = m + y.yMax * W;
                                                            b < A[0] && (A[0] = b), U < A[1] && (A[1] = U), S > A[2] && (A[2] = S), _ > A[3] && (A[3] = _), h % w === 0 && (o = {
                                                                start: h,
                                                                end: h,
                                                                rect: [a, a, -1 / 0, -1 / 0]
                                                            }, P.push(o)), o.end++;
                                                            const x = o.rect;
                                                            if (b < x[0] && (x[0] = b), U < x[1] && (x[1] = U), S > x[2] && (x[2] = S), _ > x[3] && (x[3] = _), C[h] = c.atlasIndex, T) {
                                                                const e = 3 * h;
                                                                I[e] = u >> 16 & 255, I[e + 1] = u >> 8 & 255, I[e + 2] = 255 & u
                                                            }
                                                        }
                                                    }
                                                }
                                                n -= d
                                            }))
                                        }
                                        for (let e in k.sdf) k.sdfTotal += k.sdf[e];
                                        k.layout = l() - N - k.sdfTotal, k.total = l() - E, _({
                                            glyphBounds: O,
                                            glyphAtlasIndices: C,
                                            caretPositions: F,
                                            caretHeight: j,
                                            glyphColors: I,
                                            chunkedBounds: P,
                                            ascender: R * W,
                                            descender: L * W,
                                            lineHeight: d,
                                            topBaseline: z,
                                            blockBounds: [q, J - $.length * d, q + D, J],
                                            visibleBounds: A,
                                            newGlyphSDFs: s,
                                            timings: k
                                        })
                                    }))
                            }

                            function f(e) {
                                let t = e.match(/^([\d.]+)%$/),
                                    r = t ? parseFloat(t[1]) : NaN;
                                return isNaN(r) ? 0 : r / 100
                            }

                            function l() {
                                return (self.performance || Date).now()
                            }

                            function h() {
                                this.data = []
                            }
                            return h.prototype = {
                                width: 0,
                                isSoftWrapped: !1,
                                get count() {
                                    return Math.ceil(this.data.length / 4)
                                },
                                glyphAt(e) {
                                    let t = h.flyweight;
                                    return t.data = this.data, t.index = e, t
                                },
                                splitAt(e) {
                                    let t = new h;
                                    return t.data = this.data.splice(4 * e), t
                                }
                            }, h.flyweight = ["glyphObj", "x", "width", "charIndex"].reduce(((e, t, r, n) => (Object.defineProperty(e, t, {
                                get() {
                                    return this.data[4 * this.index + r]
                                },
                                set(e) {
                                    this.data[4 * this.index + r] = e
                                }
                            }), e)), {
                                data: null,
                                index: 0
                            }), {
                                process: u,
                                measure: function(e, t) {
                                    u(e, (e => {
                                        const [r, n, o, i] = e.blockBounds;
                                        t({
                                            width: o - r,
                                            height: i - n
                                        })
                                    }), {
                                        metricsOnly: !0
                                    })
                                },
                                loadFont: s
                            }
                        }],
                        init(e, t, r, n, o) {
                            const {
                                sdfExponent: i,
                                sdfMargin: a,
                                defaultFontURL: s
                            } = e;
                            return o(t, n(r, {
                                sdfExponent: i,
                                sdfMargin: a
                            }), {
                                defaultFontURL: s
                            })
                        }
                    }), S],
                    init: (e, t) => function(r) {
                        const n = new t;
                        return e.process(r, n.resolve), n
                    },
                    getTransferables(e) {
                        const t = [e.glyphBounds.buffer, e.glyphAtlasIndices.buffer];
                        return e.caretPositions && t.push(e.caretPositions.buffer), e.newGlyphSDFs && e.newGlyphSDFs.forEach((e => {
                            t.push(e.textureData.buffer)
                        })), t
                    }
                }),
                z = (() => {
                    const e = {};
                    const t = new s.Vector3,
                        r = "aTroikaGlyphIndex";
                    class n extends s.InstancedBufferGeometry {
                        constructor() {
                            super(), this.detail = 1, this.groups = [{
                                start: 0,
                                count: 1 / 0,
                                materialIndex: 0
                            }, {
                                start: 0,
                                count: 1 / 0,
                                materialIndex: 1
                            }], this.boundingSphere = new s.Sphere, this.boundingBox = new s.Box3
                        }
                        computeBoundingSphere() {}
                        computeBoundingBox() {}
                        set detail(t) {
                            if (t !== this._detail) {
                                this._detail = t, ("number" !== typeof t || t < 1) && (t = 1);
                                let r = function(t) {
                                    let r = e[t];
                                    return r || (r = e[t] = new s.PlaneBufferGeometry(1, 1, t, t).translate(.5, .5, 0)), r
                                }(t);
                                ["position", "normal", "uv"].forEach((e => {
                                    this.attributes[e] = r.attributes[e].clone()
                                })), this.setIndex(r.getIndex().clone())
                            }
                        }
                        get detail() {
                            return this._detail
                        }
                        updateGlyphs(e, n, a, s, u) {
                            o(this, "aTroikaGlyphBounds", e, 4), o(this, r, n, 1), o(this, "aTroikaGlyphColor", u, 3), this._chunkedBounds = s, i(this, n.length);
                            const f = this.boundingSphere;
                            f.center.set((a[0] + a[2]) / 2, (a[1] + a[3]) / 2, 0), f.radius = f.center.distanceTo(t.set(a[0], a[1], 0));
                            const l = this.boundingBox;
                            l.min.set(a[0], a[1], 0), l.max.set(a[2], a[3], 0)
                        }
                        applyClipRect(e) {
                            let t = this.getAttribute(r).count,
                                n = this._chunkedBounds;
                            if (n)
                                for (let r = n.length; r--;) {
                                    t = n[r].end;
                                    let o = n[r].rect;
                                    if (o[1] < e.w && o[3] > e.y && o[0] < e.z && o[2] > e.x) break
                                }
                            i(this, t)
                        }
                    }

                    function o(e, t, r, n) {
                        const o = e.getAttribute(t);
                        r ? o && o.array.length === r.length ? (o.array.set(r), o.needsUpdate = !0) : (e.setAttribute(t, new s.InstancedBufferAttribute(r, n)), delete e._maxInstanceCount, e.dispose()) : o && e.deleteAttribute(t)
                    }

                    function i(e, t) {
                        e[e.hasOwnProperty("instanceCount") ? "instanceCount" : "maxInstancedCount"] = t
                    }
                    return n.prototype.setAttribute || (n.prototype.setAttribute = function(e, t) {
                        return this.attributes[e] = t, this
                    }), n
                })();
            const j = (() => {
                const e = new s.MeshBasicMaterial({
                        color: 16777215,
                        side: s.DoubleSide,
                        transparent: !0
                    }),
                    t = 8421504,
                    r = new s.Matrix4,
                    n = new s.Vector3,
                    o = new s.Vector3,
                    i = [],
                    a = new s.Vector3,
                    u = "+x+y";

                function f(e) {
                    return Array.isArray(e) ? e[0] : e
                }
                const l = new s.Mesh(new s.PlaneBufferGeometry(1, 1).translate(.5, .5, 0), e),
                    h = {
                        type: "syncstart"
                    },
                    c = {
                        type: "synccomplete"
                    },
                    d = ["font", "fontSize", "letterSpacing", "lineHeight", "maxWidth", "overflowWrap", "text", "textAlign", "textIndent", "whiteSpace", "anchorX", "anchorY", "colorRanges", "sdfGlyphSize"],
                    p = d.concat("material", "color", "depthOffset", "clipRect", "orientation", "glyphGeometryDetail");
                class v extends s.Mesh {
                    constructor() {
                        super(new z, null), this.text = "", this.anchorX = 0, this.anchorY = 0, this.font = null, this.fontSize = .1, this.letterSpacing = 0, this.lineHeight = "normal", this.maxWidth = 1 / 0, this.overflowWrap = "normal", this.textAlign = "left", this.textIndent = 0, this.whiteSpace = "normal", this.material = null, this.color = null, this.colorRanges = null, this.outlineWidth = 0, this.outlineColor = 0, this.outlineOpacity = 1, this.outlineBlur = 0, this.outlineOffsetX = 0, this.outlineOffsetY = 0, this.strokeWidth = 0, this.strokeColor = t, this.strokeOpacity = 1, this.fillOpacity = 1, this.depthOffset = 0, this.clipRect = null, this.orientation = u, this.glyphGeometryDetail = 1, this.sdfGlyphSize = null, this.debugSDF = !1
                    }
                    sync(e) {
                        this._needsSync && (this._needsSync = !1, this._isSyncing ? (this._queuedSyncs || (this._queuedSyncs = [])).push(e) : (this._isSyncing = !0, this.dispatchEvent(h), G({
                            text: this.text,
                            font: this.font,
                            fontSize: this.fontSize || .1,
                            letterSpacing: this.letterSpacing || 0,
                            lineHeight: this.lineHeight || "normal",
                            maxWidth: this.maxWidth,
                            textAlign: this.textAlign,
                            textIndent: this.textIndent,
                            whiteSpace: this.whiteSpace,
                            overflowWrap: this.overflowWrap,
                            anchorX: this.anchorX,
                            anchorY: this.anchorY,
                            colorRanges: this.colorRanges,
                            includeCaretPositions: !0,
                            sdfGlyphSize: this.sdfGlyphSize
                        }, (t => {
                            this._isSyncing = !1, this._textRenderInfo = t, this.geometry.updateGlyphs(t.glyphBounds, t.glyphAtlasIndices, t.blockBounds, t.chunkedBounds, t.glyphColors);
                            const r = this._queuedSyncs;
                            r && (this._queuedSyncs = null, this._needsSync = !0, this.sync((() => {
                                r.forEach((e => e && e()))
                            }))), this.dispatchEvent(c), e && e()
                        }))))
                    }
                    onBeforeRender(e, t, r, n, o, i) {
                        this.sync(), o.isTroikaTextMaterial && this._prepareForRender(o)
                    }
                    dispose() {
                        this.geometry.dispose()
                    }
                    get textRenderInfo() {
                        return this._textRenderInfo || null
                    }
                    get material() {
                        let t = this._derivedMaterial;
                        const r = this._baseMaterial || this._defaultMaterial || (this._defaultMaterial = e.clone());
                        if (t && t.baseMaterial === r || (t = this._derivedMaterial = function(e) {
                                const t = C(e, {
                                    chained: !0,
                                    extensions: {
                                        derivatives: !0
                                    },
                                    uniforms: {
                                        uTroikaSDFTexture: {
                                            value: null
                                        },
                                        uTroikaSDFTextureSize: {
                                            value: new s.Vector2
                                        },
                                        uTroikaSDFGlyphSize: {
                                            value: 0
                                        },
                                        uTroikaSDFExponent: {
                                            value: 0
                                        },
                                        uTroikaTotalBounds: {
                                            value: new s.Vector4(0, 0, 0, 0)
                                        },
                                        uTroikaClipRect: {
                                            value: new s.Vector4(0, 0, 0, 0)
                                        },
                                        uTroikaDistanceOffset: {
                                            value: 0
                                        },
                                        uTroikaOutlineOpacity: {
                                            value: 0
                                        },
                                        uTroikaFillOpacity: {
                                            value: 1
                                        },
                                        uTroikaPositionOffset: {
                                            value: new s.Vector2
                                        },
                                        uTroikaBlurRadius: {
                                            value: 0
                                        },
                                        uTroikaStrokeWidth: {
                                            value: 0
                                        },
                                        uTroikaStrokeColor: {
                                            value: new s.Color
                                        },
                                        uTroikaStrokeOpacity: {
                                            value: 1
                                        },
                                        uTroikaOrient: {
                                            value: new s.Matrix3
                                        },
                                        uTroikaUseGlyphColors: {
                                            value: !0
                                        },
                                        uTroikaSDFDebug: {
                                            value: !1
                                        }
                                    },
                                    vertexDefs: "\nuniform vec2 uTroikaSDFTextureSize;\nuniform float uTroikaSDFGlyphSize;\nuniform vec4 uTroikaTotalBounds;\nuniform vec4 uTroikaClipRect;\nuniform mat3 uTroikaOrient;\nuniform bool uTroikaUseGlyphColors;\nuniform float uTroikaDistanceOffset;\nuniform float uTroikaBlurRadius;\nuniform vec2 uTroikaPositionOffset;\nattribute vec4 aTroikaGlyphBounds;\nattribute float aTroikaGlyphIndex;\nattribute vec3 aTroikaGlyphColor;\nvarying vec2 vTroikaGlyphUV;\nvarying vec4 vTroikaTextureUVBounds;\nvarying vec3 vTroikaGlyphColor;\nvarying vec2 vTroikaGlyphDimensions;\n",
                                    vertexTransform: "\nvec4 bounds = aTroikaGlyphBounds;\nbounds.xz += uTroikaPositionOffset.x;\nbounds.yw -= uTroikaPositionOffset.y;\n\nvec4 outlineBounds = vec4(\n  bounds.xy - uTroikaDistanceOffset - uTroikaBlurRadius,\n  bounds.zw + uTroikaDistanceOffset + uTroikaBlurRadius\n);\nvec4 clippedBounds = vec4(\n  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),\n  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)\n);\n\nvec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);\n\nposition.xy = mix(bounds.xy, bounds.zw, clippedXY);\n\nuv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);\n\nposition = uTroikaOrient * position;\nnormal = uTroikaOrient * normal;\n\nvTroikaGlyphUV = clippedXY.xy;\nvTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);\n\n\nfloat txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;\nvec2 txUvPerGlyph = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;\nvec2 txStartUV = txUvPerGlyph * vec2(\n  mod(aTroikaGlyphIndex, txCols),\n  floor(aTroikaGlyphIndex / txCols)\n);\nvTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerGlyph);\n",
                                    fragmentDefs: "\nuniform sampler2D uTroikaSDFTexture;\nuniform vec2 uTroikaSDFTextureSize;\nuniform float uTroikaSDFGlyphSize;\nuniform float uTroikaSDFExponent;\nuniform float uTroikaDistanceOffset;\nuniform float uTroikaFillOpacity;\nuniform float uTroikaOutlineOpacity;\nuniform float uTroikaBlurRadius;\nuniform vec3 uTroikaStrokeColor;\nuniform float uTroikaStrokeWidth;\nuniform float uTroikaStrokeOpacity;\nuniform bool uTroikaSDFDebug;\nvarying vec2 vTroikaGlyphUV;\nvarying vec4 vTroikaTextureUVBounds;\nvarying vec2 vTroikaGlyphDimensions;\n\nfloat troikaSdfValueToSignedDistance(float alpha) {\n  // Inverse of encoding in SDFGenerator.js\n  \n  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);\n  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;\n  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);\n  return signedDist;\n}\n\nfloat troikaGlyphUvToSdfValue(vec2 glyphUV) {\n  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);\n  return texture2D(uTroikaSDFTexture, textureUV).r;\n}\n\nfloat troikaGlyphUvToDistance(vec2 uv) {\n  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));\n}\n\nfloat troikaGetAADist() {\n  \n  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300\n  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;\n  #else\n  return vTroikaGlyphDimensions.x / 64.0;\n  #endif\n}\n\nfloat troikaGetFragDistValue() {\n  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);\n  float distance = troikaGlyphUvToDistance(clampedGlyphUV);\n \n  // Extrapolate distance when outside bounds:\n  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : \n    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);\n\n  \n\n  return distance;\n}\n\nfloat troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {\n  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)\n  float alpha = step(-distanceOffset, -distance);\n  #else\n\n  float alpha = smoothstep(\n    distanceOffset + aaDist,\n    distanceOffset - aaDist,\n    distance\n  );\n  #endif\n\n  return alpha;\n}\n",
                                    fragmentColorTransform: "\nfloat aaDist = troikaGetAADist();\nfloat distance = troikaGetFragDistValue();\nfloat edgeAlpha = uTroikaSDFDebug ?\n  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :\n  troikaGetEdgeAlpha(distance, uTroikaDistanceOffset, max(aaDist, uTroikaBlurRadius));\n\n#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)\nvec4 fillRGBA = gl_FragColor;\nfillRGBA.a *= uTroikaFillOpacity;\nvec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);\nif (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;\ngl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(\n  -uTroikaStrokeWidth - aaDist,\n  -uTroikaStrokeWidth + aaDist,\n  distance\n));\ngl_FragColor.a *= edgeAlpha;\n#endif\n\nif (edgeAlpha == 0.0) {\n  discard;\n}\n",
                                    customRewriter({
                                        vertexShader: e,
                                        fragmentShader: t
                                    }) {
                                        let r = /\buniform\s+vec3\s+diffuse\b/;
                                        return r.test(t) && (t = t.replace(r, "varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g, "vTroikaGlyphColor"), r.test(e) || (e = e.replace(w, "uniform vec3 diffuse;\n$&\nvTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;\n"))), {
                                            vertexShader: e,
                                            fragmentShader: t
                                        }
                                    }
                                });
                                return t.transparent = !0, Object.defineProperties(t, {
                                    isTroikaTextMaterial: {
                                        value: !0
                                    },
                                    shadowSide: {
                                        get() {
                                            return this.side
                                        },
                                        set() {}
                                    }
                                }), t
                            }(r), r.addEventListener("dispose", (function e() {
                                r.removeEventListener("dispose", e), t.dispose()
                            }))), this.outlineWidth || this.outlineBlur || this.outlineOffsetX || this.outlineOffsetY) {
                            let e = t._outlineMtl;
                            return e || (e = t._outlineMtl = Object.create(t, {
                                id: {
                                    value: t.id + .1
                                }
                            }), e.isTextOutlineMaterial = !0, e.depthWrite = !1, e.map = null, t.addEventListener("dispose", (function r() {
                                t.removeEventListener("dispose", r), e.dispose()
                            }))), [e, t]
                        }
                        return t
                    }
                    set material(e) {
                        e && e.isTroikaTextMaterial ? (this._derivedMaterial = e, this._baseMaterial = e.baseMaterial) : this._baseMaterial = e
                    }
                    get glyphGeometryDetail() {
                        return this.geometry.detail
                    }
                    set glyphGeometryDetail(e) {
                        this.geometry.detail = e
                    }
                    get customDepthMaterial() {
                        return f(this.material).getDepthMaterial()
                    }
                    get customDistanceMaterial() {
                        return f(this.material).getDistanceMaterial()
                    }
                    _prepareForRender(e) {
                        const i = e.isTextOutlineMaterial,
                            f = e.uniforms,
                            l = this.textRenderInfo;
                        if (l) {
                            const {
                                sdfTexture: e,
                                blockBounds: r
                            } = l;
                            f.uTroikaSDFTexture.value = e, f.uTroikaSDFTextureSize.value.set(e.image.width, e.image.height), f.uTroikaSDFGlyphSize.value = l.sdfGlyphSize, f.uTroikaSDFExponent.value = l.sdfExponent, f.uTroikaTotalBounds.value.fromArray(r), f.uTroikaUseGlyphColors.value = !i && !!l.glyphColors;
                            let n, o, a, s = 0,
                                u = 0,
                                h = 0,
                                c = 0,
                                d = 0;
                            if (i) {
                                let {
                                    outlineWidth: e,
                                    outlineOffsetX: t,
                                    outlineOffsetY: r,
                                    outlineBlur: o,
                                    outlineOpacity: i
                                } = this;
                                s = this._parsePercent(e) || 0, u = Math.max(0, this._parsePercent(o) || 0), n = i, c = this._parsePercent(t) || 0, d = this._parsePercent(r) || 0
                            } else h = Math.max(0, this._parsePercent(this.strokeWidth) || 0), h && (a = this.strokeColor, f.uTroikaStrokeColor.value.set(null == a ? t : a), o = this.strokeOpacity, null == o && (o = 1)), n = this.fillOpacity;
                            f.uTroikaDistanceOffset.value = s, f.uTroikaPositionOffset.value.set(c, d), f.uTroikaBlurRadius.value = u, f.uTroikaStrokeWidth.value = h, f.uTroikaStrokeOpacity.value = o, f.uTroikaFillOpacity.value = null == n ? 1 : n;
                            let p = this.clipRect;
                            if (p && Array.isArray(p) && 4 === p.length) f.uTroikaClipRect.value.fromArray(p);
                            else {
                                const e = 100 * (this.fontSize || .1);
                                f.uTroikaClipRect.value.set(r[0] - e, r[1] - e, r[2] + e, r[3] + e)
                            }
                            this.geometry.applyClipRect(f.uTroikaClipRect.value)
                        }
                        f.uTroikaSDFDebug.value = !!this.debugSDF, e.polygonOffset = !!this.depthOffset, e.polygonOffsetFactor = e.polygonOffsetUnits = this.depthOffset || 0;
                        const h = i ? this.outlineColor || 0 : this.color;
                        if (null == h) delete e.color;
                        else {
                            const t = e.hasOwnProperty("color") ? e.color : e.color = new s.Color;
                            h === t._input && "object" !== typeof h || t.set(t._input = h)
                        }
                        let c = this.orientation || u;
                        if (c !== e._orientation) {
                            let t = f.uTroikaOrient.value;
                            c = c.replace(/[^-+xyz]/g, "");
                            let i = c !== u && c.match(/^([-+])([xyz])([-+])([xyz])$/);
                            if (i) {
                                let [, e, s, u, f] = i;
                                n.set(0, 0, 0)[s] = "-" === e ? 1 : -1, o.set(0, 0, 0)[f] = "-" === u ? -1 : 1, r.lookAt(a, n.cross(o), o), t.setFromMatrix4(r)
                            } else t.identity();
                            e._orientation = c
                        }
                    }
                    _parsePercent(e) {
                        if ("string" === typeof e) {
                            let t = e.match(/^(-?[\d.]+)%$/),
                                r = t ? parseFloat(t[1]) : NaN;
                            e = (isNaN(r) ? 0 : r / 100) * this.fontSize
                        }
                        return e
                    }
                    raycast(e, t) {
                        const n = this.textRenderInfo;
                        if (n) {
                            const o = n.blockBounds;
                            l.matrixWorld.multiplyMatrices(this.matrixWorld, r.set(o[2] - o[0], 0, 0, o[0], 0, o[3] - o[1], 0, o[1], 0, 0, 1, 0, 0, 0, 0, 1)), i.length = 0, l.raycast(e, i);
                            for (let e = 0; e < i.length; e++) i[e].object = this, t.push(i[e])
                        }
                    }
                    copy(e) {
                        const t = this.geometry;
                        return super.copy(e), this.geometry = t, p.forEach((t => {
                            this[t] = e[t]
                        })), this
                    }
                    clone() {
                        return (new this.constructor).copy(this)
                    }
                }
                d.forEach((e => {
                    const t = "_private_" + e;
                    Object.defineProperty(v.prototype, e, {
                        get() {
                            return this[t]
                        },
                        set(e) {
                            e !== this[t] && (this[t] = e, this._needsSync = !0)
                        }
                    })
                }));
                let g = !1;
                return Object.defineProperty(v.prototype, "anchor", {
                    get() {
                        return this._deprecated_anchor
                    },
                    set(e) {
                        this._deprecated_anchor = e, g || (console.warn("TextMesh: `anchor` has been deprecated; use `anchorX` and `anchorY` instead."), g = !0), Array.isArray(e) ? (this.anchorX = 100 * (+e[0] || 0) + "%", this.anchorY = 100 * (+e[1] || 0) + "%") : this.anchorX = this.anchorY = 0
                    }
                }), v
            })();
            new WeakMap;
            new WeakMap;
            const X = (0, i.forwardRef)(((e, t) => {
                let {
                    anchorX: r = "center",
                    anchorY: s = "middle",
                    children: u,
                    onSync: f
                } = e, l = (0, o.Z)(e, ["anchorX", "anchorY", "children", "onSync"]);
                const {
                    invalidate: h
                } = (0, a.Ky)(), [c] = (0, i.useState)((() => new j)), [d, p] = (0, i.useMemo)((() => {
                    let e = [],
                        t = "";
                    return i.Children.forEach(u, (r => {
                        "string" === typeof r || "number" === typeof r ? t += r : e.push(r)
                    })), [e, t]
                }), [u]);
                return (0, i.useLayoutEffect)((() => {
                    c.sync((() => {
                        h(), f && f(c)
                    }))
                })), (0, i.createElement)("primitive", (0, n.Z)({
                    dispose: void 0,
                    object: c,
                    ref: t,
                    text: p,
                    anchorX: r,
                    anchorY: s
                }, l), d)
            }))
        },
        7091: function(e, t, r) {
            "use strict";
            r.d(t, {
                Pt: function() {
                    return a
                }
            });
            var n = r(7294);
            r(5009), r(2212);
            const o = (0, n.createContext)({
                scaleFactor: 100,
                requestReflow() {
                    console.warn("Flex not initialized! Please report")
                },
                registerBox() {
                    console.warn("Flex not initialized! Please report")
                },
                unregisterBox() {
                    console.warn("Flex not initialized! Please report")
                }
            });
            (0, n.createContext)({
                node: null,
                size: [0, 0]
            });

            function i(e) {
                let t = (0, n.useContext)(e);
                return t || console.warn("You must place this hook/component under a <Flex/> component!"), t
            }

            function a() {
                const {
                    requestReflow: e
                } = i(o);
                return e
            }
        },
        9742: function(e, t) {
            "use strict";
            t.byteLength = function(e) {
                var t = u(e),
                    r = t[0],
                    n = t[1];
                return 3 * (r + n) / 4 - n
            }, t.toByteArray = function(e) {
                var t, r, i = u(e),
                    a = i[0],
                    s = i[1],
                    f = new o(function(e, t, r) {
                        return 3 * (t + r) / 4 - r
                    }(0, a, s)),
                    l = 0,
                    h = s > 0 ? a - 4 : a;
                for (r = 0; r < h; r += 4) t = n[e.charCodeAt(r)] << 18 | n[e.charCodeAt(r + 1)] << 12 | n[e.charCodeAt(r + 2)] << 6 | n[e.charCodeAt(r + 3)], f[l++] = t >> 16 & 255, f[l++] = t >> 8 & 255, f[l++] = 255 & t;
                2 === s && (t = n[e.charCodeAt(r)] << 2 | n[e.charCodeAt(r + 1)] >> 4, f[l++] = 255 & t);
                1 === s && (t = n[e.charCodeAt(r)] << 10 | n[e.charCodeAt(r + 1)] << 4 | n[e.charCodeAt(r + 2)] >> 2, f[l++] = t >> 8 & 255, f[l++] = 255 & t);
                return f
            }, t.fromByteArray = function(e) {
                for (var t, n = e.length, o = n % 3, i = [], a = 16383, s = 0, u = n - o; s < u; s += a) i.push(f(e, s, s + a > u ? u : s + a));
                1 === o ? (t = e[n - 1], i.push(r[t >> 2] + r[t << 4 & 63] + "==")) : 2 === o && (t = (e[n - 2] << 8) + e[n - 1], i.push(r[t >> 10] + r[t >> 4 & 63] + r[t << 2 & 63] + "="));
                return i.join("")
            };
            for (var r = [], n = [], o = "undefined" !== typeof Uint8Array ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, s = i.length; a < s; ++a) r[a] = i[a], n[i.charCodeAt(a)] = a;

            function u(e) {
                var t = e.length;
                if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                var r = e.indexOf("=");
                return -1 === r && (r = t), [r, r === t ? 0 : 4 - r % 4]
            }

            function f(e, t, n) {
                for (var o, i, a = [], s = t; s < n; s += 3) o = (e[s] << 16 & 16711680) + (e[s + 1] << 8 & 65280) + (255 & e[s + 2]), a.push(r[(i = o) >> 18 & 63] + r[i >> 12 & 63] + r[i >> 6 & 63] + r[63 & i]);
                return a.join("")
            }
            n["-".charCodeAt(0)] = 62, n["_".charCodeAt(0)] = 63
        },
        8764: function(e, t, r) {
            "use strict";
            var n = r(9742),
                o = r(645),
                i = "function" === typeof Symbol && "function" === typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
            t.Buffer = u, t.SlowBuffer = function(e) {
                +e != e && (e = 0);
                return u.alloc(+e)
            }, t.INSPECT_MAX_BYTES = 50;
            var a = 2147483647;

            function s(e) {
                if (e > a) throw new RangeError('The value "' + e + '" is invalid for option "size"');
                var t = new Uint8Array(e);
                return Object.setPrototypeOf(t, u.prototype), t
            }

            function u(e, t, r) {
                if ("number" === typeof e) {
                    if ("string" === typeof t) throw new TypeError('The "string" argument must be of type string. Received type number');
                    return h(e)
                }
                return f(e, t, r)
            }

            function f(e, t, r) {
                if ("string" === typeof e) return function(e, t) {
                    "string" === typeof t && "" !== t || (t = "utf8");
                    if (!u.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
                    var r = 0 | v(e, t),
                        n = s(r),
                        o = n.write(e, t);
                    o !== r && (n = n.slice(0, o));
                    return n
                }(e, t);
                if (ArrayBuffer.isView(e)) return c(e);
                if (null == e) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
                if (V(e, ArrayBuffer) || e && V(e.buffer, ArrayBuffer)) return d(e, t, r);
                if ("undefined" !== typeof SharedArrayBuffer && (V(e, SharedArrayBuffer) || e && V(e.buffer, SharedArrayBuffer))) return d(e, t, r);
                if ("number" === typeof e) throw new TypeError('The "value" argument must not be of type number. Received type number');
                var n = e.valueOf && e.valueOf();
                if (null != n && n !== e) return u.from(n, t, r);
                var o = function(e) {
                    if (u.isBuffer(e)) {
                        var t = 0 | p(e.length),
                            r = s(t);
                        return 0 === r.length || e.copy(r, 0, 0, t), r
                    }
                    if (void 0 !== e.length) return "number" !== typeof e.length || z(e.length) ? s(0) : c(e);
                    if ("Buffer" === e.type && Array.isArray(e.data)) return c(e.data)
                }(e);
                if (o) return o;
                if ("undefined" !== typeof Symbol && null != Symbol.toPrimitive && "function" === typeof e[Symbol.toPrimitive]) return u.from(e[Symbol.toPrimitive]("string"), t, r);
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e)
            }

            function l(e) {
                if ("number" !== typeof e) throw new TypeError('"size" argument must be of type number');
                if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"')
            }

            function h(e) {
                return l(e), s(e < 0 ? 0 : 0 | p(e))
            }

            function c(e) {
                for (var t = e.length < 0 ? 0 : 0 | p(e.length), r = s(t), n = 0; n < t; n += 1) r[n] = 255 & e[n];
                return r
            }

            function d(e, t, r) {
                if (t < 0 || e.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds');
                if (e.byteLength < t + (r || 0)) throw new RangeError('"length" is outside of buffer bounds');
                var n;
                return n = void 0 === t && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, t) : new Uint8Array(e, t, r), Object.setPrototypeOf(n, u.prototype), n
            }

            function p(e) {
                if (e >= a) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a.toString(16) + " bytes");
                return 0 | e
            }

            function v(e, t) {
                if (u.isBuffer(e)) return e.length;
                if (ArrayBuffer.isView(e) || V(e, ArrayBuffer)) return e.byteLength;
                if ("string" !== typeof e) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
                var r = e.length,
                    n = arguments.length > 2 && !0 === arguments[2];
                if (!n && 0 === r) return 0;
                for (var o = !1;;) switch (t) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return r;
                    case "utf8":
                    case "utf-8":
                        return G(e).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * r;
                    case "hex":
                        return r >>> 1;
                    case "base64":
                        return N(e).length;
                    default:
                        if (o) return n ? -1 : G(e).length;
                        t = ("" + t).toLowerCase(), o = !0
                }
            }

            function g(e, t, r) {
                var n = !1;
                if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
                if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
                if ((r >>>= 0) <= (t >>>= 0)) return "";
                for (e || (e = "utf8");;) switch (e) {
                    case "hex":
                        return F(this, t, r);
                    case "utf8":
                    case "utf-8":
                        return k(this, t, r);
                    case "ascii":
                        return C(this, t, r);
                    case "latin1":
                    case "binary":
                        return I(this, t, r);
                    case "base64":
                        return E(this, t, r);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return A(this, t, r);
                    default:
                        if (n) throw new TypeError("Unknown encoding: " + e);
                        e = (e + "").toLowerCase(), n = !0
                }
            }

            function y(e, t, r) {
                var n = e[t];
                e[t] = e[r], e[r] = n
            }

            function m(e, t, r, n, o) {
                if (0 === e.length) return -1;
                if ("string" === typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), z(r = +r) && (r = o ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
                    if (o) return -1;
                    r = e.length - 1
                } else if (r < 0) {
                    if (!o) return -1;
                    r = 0
                }
                if ("string" === typeof t && (t = u.from(t, n)), u.isBuffer(t)) return 0 === t.length ? -1 : b(e, t, r, n, o);
                if ("number" === typeof t) return t &= 255, "function" === typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : b(e, [t], r, n, o);
                throw new TypeError("val must be string, number or Buffer")
            }

            function b(e, t, r, n, o) {
                var i, a = 1,
                    s = e.length,
                    u = t.length;
                if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                    if (e.length < 2 || t.length < 2) return -1;
                    a = 2, s /= 2, u /= 2, r /= 2
                }

                function f(e, t) {
                    return 1 === a ? e[t] : e.readUInt16BE(t * a)
                }
                if (o) {
                    var l = -1;
                    for (i = r; i < s; i++)
                        if (f(e, i) === f(t, -1 === l ? 0 : i - l)) {
                            if (-1 === l && (l = i), i - l + 1 === u) return l * a
                        } else -1 !== l && (i -= i - l), l = -1
                } else
                    for (r + u > s && (r = s - u), i = r; i >= 0; i--) {
                        for (var h = !0, c = 0; c < u; c++)
                            if (f(e, i + c) !== f(t, c)) {
                                h = !1;
                                break
                            }
                        if (h) return i
                    }
                return -1
            }

            function U(e, t, r, n) {
                r = Number(r) || 0;
                var o = e.length - r;
                n ? (n = Number(n)) > o && (n = o) : n = o;
                var i = t.length;
                n > i / 2 && (n = i / 2);
                for (var a = 0; a < n; ++a) {
                    var s = parseInt(t.substr(2 * a, 2), 16);
                    if (z(s)) return a;
                    e[r + a] = s
                }
                return a
            }

            function S(e, t, r, n) {
                return W(G(t, e.length - r), e, r, n)
            }

            function w(e, t, r, n) {
                return W(function(e) {
                    for (var t = [], r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
                    return t
                }(t), e, r, n)
            }

            function T(e, t, r, n) {
                return w(e, t, r, n)
            }

            function _(e, t, r, n) {
                return W(N(t), e, r, n)
            }

            function x(e, t, r, n) {
                return W(function(e, t) {
                    for (var r, n, o, i = [], a = 0; a < e.length && !((t -= 2) < 0); ++a) n = (r = e.charCodeAt(a)) >> 8, o = r % 256, i.push(o), i.push(n);
                    return i
                }(t, e.length - r), e, r, n)
            }

            function E(e, t, r) {
                return 0 === t && r === e.length ? n.fromByteArray(e) : n.fromByteArray(e.slice(t, r))
            }

            function k(e, t, r) {
                r = Math.min(e.length, r);
                for (var n = [], o = t; o < r;) {
                    var i, a, s, u, f = e[o],
                        l = null,
                        h = f > 239 ? 4 : f > 223 ? 3 : f > 191 ? 2 : 1;
                    if (o + h <= r) switch (h) {
                        case 1:
                            f < 128 && (l = f);
                            break;
                        case 2:
                            128 === (192 & (i = e[o + 1])) && (u = (31 & f) << 6 | 63 & i) > 127 && (l = u);
                            break;
                        case 3:
                            i = e[o + 1], a = e[o + 2], 128 === (192 & i) && 128 === (192 & a) && (u = (15 & f) << 12 | (63 & i) << 6 | 63 & a) > 2047 && (u < 55296 || u > 57343) && (l = u);
                            break;
                        case 4:
                            i = e[o + 1], a = e[o + 2], s = e[o + 3], 128 === (192 & i) && 128 === (192 & a) && 128 === (192 & s) && (u = (15 & f) << 18 | (63 & i) << 12 | (63 & a) << 6 | 63 & s) > 65535 && u < 1114112 && (l = u)
                    }
                    null === l ? (l = 65533, h = 1) : l > 65535 && (l -= 65536, n.push(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), n.push(l), o += h
                }
                return function(e) {
                    var t = e.length;
                    if (t <= O) return String.fromCharCode.apply(String, e);
                    var r = "",
                        n = 0;
                    for (; n < t;) r += String.fromCharCode.apply(String, e.slice(n, n += O));
                    return r
                }(n)
            }
            t.kMaxLength = a, u.TYPED_ARRAY_SUPPORT = function() {
                try {
                    var e = new Uint8Array(1),
                        t = {
                            foo: function() {
                                return 42
                            }
                        };
                    return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), 42 === e.foo()
                } catch (r) {
                    return !1
                }
            }(), u.TYPED_ARRAY_SUPPORT || "undefined" === typeof console || "function" !== typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(u.prototype, "parent", {
                enumerable: !0,
                get: function() {
                    if (u.isBuffer(this)) return this.buffer
                }
            }), Object.defineProperty(u.prototype, "offset", {
                enumerable: !0,
                get: function() {
                    if (u.isBuffer(this)) return this.byteOffset
                }
            }), u.poolSize = 8192, u.from = function(e, t, r) {
                return f(e, t, r)
            }, Object.setPrototypeOf(u.prototype, Uint8Array.prototype), Object.setPrototypeOf(u, Uint8Array), u.alloc = function(e, t, r) {
                return function(e, t, r) {
                    return l(e), e <= 0 ? s(e) : void 0 !== t ? "string" === typeof r ? s(e).fill(t, r) : s(e).fill(t) : s(e)
                }(e, t, r)
            }, u.allocUnsafe = function(e) {
                return h(e)
            }, u.allocUnsafeSlow = function(e) {
                return h(e)
            }, u.isBuffer = function(e) {
                return null != e && !0 === e._isBuffer && e !== u.prototype
            }, u.compare = function(e, t) {
                if (V(e, Uint8Array) && (e = u.from(e, e.offset, e.byteLength)), V(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)), !u.isBuffer(e) || !u.isBuffer(t)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                if (e === t) return 0;
                for (var r = e.length, n = t.length, o = 0, i = Math.min(r, n); o < i; ++o)
                    if (e[o] !== t[o]) {
                        r = e[o], n = t[o];
                        break
                    }
                return r < n ? -1 : n < r ? 1 : 0
            }, u.isEncoding = function(e) {
                switch (String(e).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, u.concat = function(e, t) {
                if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === e.length) return u.alloc(0);
                var r;
                if (void 0 === t)
                    for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
                var n = u.allocUnsafe(t),
                    o = 0;
                for (r = 0; r < e.length; ++r) {
                    var i = e[r];
                    if (V(i, Uint8Array) && (i = u.from(i)), !u.isBuffer(i)) throw new TypeError('"list" argument must be an Array of Buffers');
                    i.copy(n, o), o += i.length
                }
                return n
            }, u.byteLength = v, u.prototype._isBuffer = !0, u.prototype.swap16 = function() {
                var e = this.length;
                if (e % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (var t = 0; t < e; t += 2) y(this, t, t + 1);
                return this
            }, u.prototype.swap32 = function() {
                var e = this.length;
                if (e % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (var t = 0; t < e; t += 4) y(this, t, t + 3), y(this, t + 1, t + 2);
                return this
            }, u.prototype.swap64 = function() {
                var e = this.length;
                if (e % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (var t = 0; t < e; t += 8) y(this, t, t + 7), y(this, t + 1, t + 6), y(this, t + 2, t + 5), y(this, t + 3, t + 4);
                return this
            }, u.prototype.toString = function() {
                var e = this.length;
                return 0 === e ? "" : 0 === arguments.length ? k(this, 0, e) : g.apply(this, arguments)
            }, u.prototype.toLocaleString = u.prototype.toString, u.prototype.equals = function(e) {
                if (!u.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                return this === e || 0 === u.compare(this, e)
            }, u.prototype.inspect = function() {
                var e = "",
                    r = t.INSPECT_MAX_BYTES;
                return e = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim(), this.length > r && (e += " ... "), "<Buffer " + e + ">"
            }, i && (u.prototype[i] = u.prototype.inspect), u.prototype.compare = function(e, t, r, n, o) {
                if (V(e, Uint8Array) && (e = u.from(e, e.offset, e.byteLength)), !u.isBuffer(e)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
                if (void 0 === t && (t = 0), void 0 === r && (r = e ? e.length : 0), void 0 === n && (n = 0), void 0 === o && (o = this.length), t < 0 || r > e.length || n < 0 || o > this.length) throw new RangeError("out of range index");
                if (n >= o && t >= r) return 0;
                if (n >= o) return -1;
                if (t >= r) return 1;
                if (this === e) return 0;
                for (var i = (o >>>= 0) - (n >>>= 0), a = (r >>>= 0) - (t >>>= 0), s = Math.min(i, a), f = this.slice(n, o), l = e.slice(t, r), h = 0; h < s; ++h)
                    if (f[h] !== l[h]) {
                        i = f[h], a = l[h];
                        break
                    }
                return i < a ? -1 : a < i ? 1 : 0
            }, u.prototype.includes = function(e, t, r) {
                return -1 !== this.indexOf(e, t, r)
            }, u.prototype.indexOf = function(e, t, r) {
                return m(this, e, t, r, !0)
            }, u.prototype.lastIndexOf = function(e, t, r) {
                return m(this, e, t, r, !1)
            }, u.prototype.write = function(e, t, r, n) {
                if (void 0 === t) n = "utf8", r = this.length, t = 0;
                else if (void 0 === r && "string" === typeof t) n = t, r = this.length, t = 0;
                else {
                    if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    t >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0)
                }
                var o = this.length - t;
                if ((void 0 === r || r > o) && (r = o), e.length > 0 && (r < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                n || (n = "utf8");
                for (var i = !1;;) switch (n) {
                    case "hex":
                        return U(this, e, t, r);
                    case "utf8":
                    case "utf-8":
                        return S(this, e, t, r);
                    case "ascii":
                        return w(this, e, t, r);
                    case "latin1":
                    case "binary":
                        return T(this, e, t, r);
                    case "base64":
                        return _(this, e, t, r);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return x(this, e, t, r);
                    default:
                        if (i) throw new TypeError("Unknown encoding: " + n);
                        n = ("" + n).toLowerCase(), i = !0
                }
            }, u.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            };
            var O = 4096;

            function C(e, t, r) {
                var n = "";
                r = Math.min(e.length, r);
                for (var o = t; o < r; ++o) n += String.fromCharCode(127 & e[o]);
                return n
            }

            function I(e, t, r) {
                var n = "";
                r = Math.min(e.length, r);
                for (var o = t; o < r; ++o) n += String.fromCharCode(e[o]);
                return n
            }

            function F(e, t, r) {
                var n = e.length;
                (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
                for (var o = "", i = t; i < r; ++i) o += j[e[i]];
                return o
            }

            function A(e, t, r) {
                for (var n = e.slice(t, r), o = "", i = 0; i < n.length; i += 2) o += String.fromCharCode(n[i] + 256 * n[i + 1]);
                return o
            }

            function P(e, t, r) {
                if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
                if (e + t > r) throw new RangeError("Trying to access beyond buffer length")
            }

            function D(e, t, r, n, o, i) {
                if (!u.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (t > o || t < i) throw new RangeError('"value" argument is out of bounds');
                if (r + n > e.length) throw new RangeError("Index out of range")
            }

            function B(e, t, r, n, o, i) {
                if (r + n > e.length) throw new RangeError("Index out of range");
                if (r < 0) throw new RangeError("Index out of range")
            }

            function M(e, t, r, n, i) {
                return t = +t, r >>>= 0, i || B(e, 0, r, 4), o.write(e, t, r, n, 23, 4), r + 4
            }

            function R(e, t, r, n, i) {
                return t = +t, r >>>= 0, i || B(e, 0, r, 8), o.write(e, t, r, n, 52, 8), r + 8
            }
            u.prototype.slice = function(e, t) {
                var r = this.length;
                (e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e);
                var n = this.subarray(e, t);
                return Object.setPrototypeOf(n, u.prototype), n
            }, u.prototype.readUIntLE = function(e, t, r) {
                e >>>= 0, t >>>= 0, r || P(e, t, this.length);
                for (var n = this[e], o = 1, i = 0; ++i < t && (o *= 256);) n += this[e + i] * o;
                return n
            }, u.prototype.readUIntBE = function(e, t, r) {
                e >>>= 0, t >>>= 0, r || P(e, t, this.length);
                for (var n = this[e + --t], o = 1; t > 0 && (o *= 256);) n += this[e + --t] * o;
                return n
            }, u.prototype.readUInt8 = function(e, t) {
                return e >>>= 0, t || P(e, 1, this.length), this[e]
            }, u.prototype.readUInt16LE = function(e, t) {
                return e >>>= 0, t || P(e, 2, this.length), this[e] | this[e + 1] << 8
            }, u.prototype.readUInt16BE = function(e, t) {
                return e >>>= 0, t || P(e, 2, this.length), this[e] << 8 | this[e + 1]
            }, u.prototype.readUInt32LE = function(e, t) {
                return e >>>= 0, t || P(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
            }, u.prototype.readUInt32BE = function(e, t) {
                return e >>>= 0, t || P(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
            }, u.prototype.readIntLE = function(e, t, r) {
                e >>>= 0, t >>>= 0, r || P(e, t, this.length);
                for (var n = this[e], o = 1, i = 0; ++i < t && (o *= 256);) n += this[e + i] * o;
                return n >= (o *= 128) && (n -= Math.pow(2, 8 * t)), n
            }, u.prototype.readIntBE = function(e, t, r) {
                e >>>= 0, t >>>= 0, r || P(e, t, this.length);
                for (var n = t, o = 1, i = this[e + --n]; n > 0 && (o *= 256);) i += this[e + --n] * o;
                return i >= (o *= 128) && (i -= Math.pow(2, 8 * t)), i
            }, u.prototype.readInt8 = function(e, t) {
                return e >>>= 0, t || P(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
            }, u.prototype.readInt16LE = function(e, t) {
                e >>>= 0, t || P(e, 2, this.length);
                var r = this[e] | this[e + 1] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, u.prototype.readInt16BE = function(e, t) {
                e >>>= 0, t || P(e, 2, this.length);
                var r = this[e + 1] | this[e] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, u.prototype.readInt32LE = function(e, t) {
                return e >>>= 0, t || P(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
            }, u.prototype.readInt32BE = function(e, t) {
                return e >>>= 0, t || P(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
            }, u.prototype.readFloatLE = function(e, t) {
                return e >>>= 0, t || P(e, 4, this.length), o.read(this, e, !0, 23, 4)
            }, u.prototype.readFloatBE = function(e, t) {
                return e >>>= 0, t || P(e, 4, this.length), o.read(this, e, !1, 23, 4)
            }, u.prototype.readDoubleLE = function(e, t) {
                return e >>>= 0, t || P(e, 8, this.length), o.read(this, e, !0, 52, 8)
            }, u.prototype.readDoubleBE = function(e, t) {
                return e >>>= 0, t || P(e, 8, this.length), o.read(this, e, !1, 52, 8)
            }, u.prototype.writeUIntLE = function(e, t, r, n) {
                (e = +e, t >>>= 0, r >>>= 0, n) || D(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
                var o = 1,
                    i = 0;
                for (this[t] = 255 & e; ++i < r && (o *= 256);) this[t + i] = e / o & 255;
                return t + r
            }, u.prototype.writeUIntBE = function(e, t, r, n) {
                (e = +e, t >>>= 0, r >>>= 0, n) || D(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
                var o = r - 1,
                    i = 1;
                for (this[t + o] = 255 & e; --o >= 0 && (i *= 256);) this[t + o] = e / i & 255;
                return t + r
            }, u.prototype.writeUInt8 = function(e, t, r) {
                return e = +e, t >>>= 0, r || D(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1
            }, u.prototype.writeUInt16LE = function(e, t, r) {
                return e = +e, t >>>= 0, r || D(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
            }, u.prototype.writeUInt16BE = function(e, t, r) {
                return e = +e, t >>>= 0, r || D(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
            }, u.prototype.writeUInt32LE = function(e, t, r) {
                return e = +e, t >>>= 0, r || D(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e, t + 4
            }, u.prototype.writeUInt32BE = function(e, t, r) {
                return e = +e, t >>>= 0, r || D(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
            }, u.prototype.writeIntLE = function(e, t, r, n) {
                if (e = +e, t >>>= 0, !n) {
                    var o = Math.pow(2, 8 * r - 1);
                    D(this, e, t, r, o - 1, -o)
                }
                var i = 0,
                    a = 1,
                    s = 0;
                for (this[t] = 255 & e; ++i < r && (a *= 256);) e < 0 && 0 === s && 0 !== this[t + i - 1] && (s = 1), this[t + i] = (e / a >> 0) - s & 255;
                return t + r
            }, u.prototype.writeIntBE = function(e, t, r, n) {
                if (e = +e, t >>>= 0, !n) {
                    var o = Math.pow(2, 8 * r - 1);
                    D(this, e, t, r, o - 1, -o)
                }
                var i = r - 1,
                    a = 1,
                    s = 0;
                for (this[t + i] = 255 & e; --i >= 0 && (a *= 256);) e < 0 && 0 === s && 0 !== this[t + i + 1] && (s = 1), this[t + i] = (e / a >> 0) - s & 255;
                return t + r
            }, u.prototype.writeInt8 = function(e, t, r) {
                return e = +e, t >>>= 0, r || D(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
            }, u.prototype.writeInt16LE = function(e, t, r) {
                return e = +e, t >>>= 0, r || D(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
            }, u.prototype.writeInt16BE = function(e, t, r) {
                return e = +e, t >>>= 0, r || D(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
            }, u.prototype.writeInt32LE = function(e, t, r) {
                return e = +e, t >>>= 0, r || D(this, e, t, 4, 2147483647, -2147483648), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4
            }, u.prototype.writeInt32BE = function(e, t, r) {
                return e = +e, t >>>= 0, r || D(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
            }, u.prototype.writeFloatLE = function(e, t, r) {
                return M(this, e, t, !0, r)
            }, u.prototype.writeFloatBE = function(e, t, r) {
                return M(this, e, t, !1, r)
            }, u.prototype.writeDoubleLE = function(e, t, r) {
                return R(this, e, t, !0, r)
            }, u.prototype.writeDoubleBE = function(e, t, r) {
                return R(this, e, t, !1, r)
            }, u.prototype.copy = function(e, t, r, n) {
                if (!u.isBuffer(e)) throw new TypeError("argument should be a Buffer");
                if (r || (r = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < r && (n = r), n === r) return 0;
                if (0 === e.length || 0 === this.length) return 0;
                if (t < 0) throw new RangeError("targetStart out of bounds");
                if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
                if (n < 0) throw new RangeError("sourceEnd out of bounds");
                n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
                var o = n - r;
                if (this === e && "function" === typeof Uint8Array.prototype.copyWithin) this.copyWithin(t, r, n);
                else if (this === e && r < t && t < n)
                    for (var i = o - 1; i >= 0; --i) e[i + t] = this[i + r];
                else Uint8Array.prototype.set.call(e, this.subarray(r, n), t);
                return o
            }, u.prototype.fill = function(e, t, r, n) {
                if ("string" === typeof e) {
                    if ("string" === typeof t ? (n = t, t = 0, r = this.length) : "string" === typeof r && (n = r, r = this.length), void 0 !== n && "string" !== typeof n) throw new TypeError("encoding must be a string");
                    if ("string" === typeof n && !u.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
                    if (1 === e.length) {
                        var o = e.charCodeAt(0);
                        ("utf8" === n && o < 128 || "latin1" === n) && (e = o)
                    }
                } else "number" === typeof e ? e &= 255 : "boolean" === typeof e && (e = Number(e));
                if (t < 0 || this.length < t || this.length < r) throw new RangeError("Out of range index");
                if (r <= t) return this;
                var i;
                if (t >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0), "number" === typeof e)
                    for (i = t; i < r; ++i) this[i] = e;
                else {
                    var a = u.isBuffer(e) ? e : u.from(e, n),
                        s = a.length;
                    if (0 === s) throw new TypeError('The value "' + e + '" is invalid for argument "value"');
                    for (i = 0; i < r - t; ++i) this[i + t] = a[i % s]
                }
                return this
            };
            var L = /[^+/0-9A-Za-z-_]/g;

            function G(e, t) {
                var r;
                t = t || 1 / 0;
                for (var n = e.length, o = null, i = [], a = 0; a < n; ++a) {
                    if ((r = e.charCodeAt(a)) > 55295 && r < 57344) {
                        if (!o) {
                            if (r > 56319) {
                                (t -= 3) > -1 && i.push(239, 191, 189);
                                continue
                            }
                            if (a + 1 === n) {
                                (t -= 3) > -1 && i.push(239, 191, 189);
                                continue
                            }
                            o = r;
                            continue
                        }
                        if (r < 56320) {
                            (t -= 3) > -1 && i.push(239, 191, 189), o = r;
                            continue
                        }
                        r = 65536 + (o - 55296 << 10 | r - 56320)
                    } else o && (t -= 3) > -1 && i.push(239, 191, 189);
                    if (o = null, r < 128) {
                        if ((t -= 1) < 0) break;
                        i.push(r)
                    } else if (r < 2048) {
                        if ((t -= 2) < 0) break;
                        i.push(r >> 6 | 192, 63 & r | 128)
                    } else if (r < 65536) {
                        if ((t -= 3) < 0) break;
                        i.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                    } else {
                        if (!(r < 1114112)) throw new Error("Invalid code point");
                        if ((t -= 4) < 0) break;
                        i.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                    }
                }
                return i
            }

            function N(e) {
                return n.toByteArray(function(e) {
                    if ((e = (e = e.split("=")[0]).trim().replace(L, "")).length < 2) return "";
                    for (; e.length % 4 !== 0;) e += "=";
                    return e
                }(e))
            }

            function W(e, t, r, n) {
                for (var o = 0; o < n && !(o + r >= t.length || o >= e.length); ++o) t[o + r] = e[o];
                return o
            }

            function V(e, t) {
                return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name
            }

            function z(e) {
                return e !== e
            }
            var j = function() {
                for (var e = "0123456789abcdef", t = new Array(256), r = 0; r < 16; ++r)
                    for (var n = 16 * r, o = 0; o < 16; ++o) t[n + o] = e[r] + e[o];
                return t
            }()
        },
        645: function(e, t) {
            t.read = function(e, t, r, n, o) {
                var i, a, s = 8 * o - n - 1,
                    u = (1 << s) - 1,
                    f = u >> 1,
                    l = -7,
                    h = r ? o - 1 : 0,
                    c = r ? -1 : 1,
                    d = e[t + h];
                for (h += c, i = d & (1 << -l) - 1, d >>= -l, l += s; l > 0; i = 256 * i + e[t + h], h += c, l -= 8);
                for (a = i & (1 << -l) - 1, i >>= -l, l += n; l > 0; a = 256 * a + e[t + h], h += c, l -= 8);
                if (0 === i) i = 1 - f;
                else {
                    if (i === u) return a ? NaN : 1 / 0 * (d ? -1 : 1);
                    a += Math.pow(2, n), i -= f
                }
                return (d ? -1 : 1) * a * Math.pow(2, i - n)
            }, t.write = function(e, t, r, n, o, i) {
                var a, s, u, f = 8 * i - o - 1,
                    l = (1 << f) - 1,
                    h = l >> 1,
                    c = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                    d = n ? 0 : i - 1,
                    p = n ? 1 : -1,
                    v = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, a = l) : (a = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -a)) < 1 && (a--, u *= 2), (t += a + h >= 1 ? c / u : c * Math.pow(2, 1 - h)) * u >= 2 && (a++, u /= 2), a + h >= l ? (s = 0, a = l) : a + h >= 1 ? (s = (t * u - 1) * Math.pow(2, o), a += h) : (s = t * Math.pow(2, h - 1) * Math.pow(2, o), a = 0)); o >= 8; e[r + d] = 255 & s, d += p, s /= 256, o -= 8);
                for (a = a << o | s, f += o; f > 0; e[r + d] = 255 & a, d += p, a /= 256, f -= 8);
                e[r + d - p] |= 128 * v
            }
        },
        6375: function(e) {
            "use strict";
            e.exports = {
                ALIGN_COUNT: 8,
                ALIGN_AUTO: 0,
                ALIGN_FLEX_START: 1,
                ALIGN_CENTER: 2,
                ALIGN_FLEX_END: 3,
                ALIGN_STRETCH: 4,
                ALIGN_BASELINE: 5,
                ALIGN_SPACE_BETWEEN: 6,
                ALIGN_SPACE_AROUND: 7,
                DIMENSION_COUNT: 2,
                DIMENSION_WIDTH: 0,
                DIMENSION_HEIGHT: 1,
                DIRECTION_COUNT: 3,
                DIRECTION_INHERIT: 0,
                DIRECTION_LTR: 1,
                DIRECTION_RTL: 2,
                DISPLAY_COUNT: 2,
                DISPLAY_FLEX: 0,
                DISPLAY_NONE: 1,
                EDGE_COUNT: 9,
                EDGE_LEFT: 0,
                EDGE_TOP: 1,
                EDGE_RIGHT: 2,
                EDGE_BOTTOM: 3,
                EDGE_START: 4,
                EDGE_END: 5,
                EDGE_HORIZONTAL: 6,
                EDGE_VERTICAL: 7,
                EDGE_ALL: 8,
                EXPERIMENTAL_FEATURE_COUNT: 1,
                EXPERIMENTAL_FEATURE_WEB_FLEX_BASIS: 0,
                FLEX_DIRECTION_COUNT: 4,
                FLEX_DIRECTION_COLUMN: 0,
                FLEX_DIRECTION_COLUMN_REVERSE: 1,
                FLEX_DIRECTION_ROW: 2,
                FLEX_DIRECTION_ROW_REVERSE: 3,
                JUSTIFY_COUNT: 6,
                JUSTIFY_FLEX_START: 0,
                JUSTIFY_CENTER: 1,
                JUSTIFY_FLEX_END: 2,
                JUSTIFY_SPACE_BETWEEN: 3,
                JUSTIFY_SPACE_AROUND: 4,
                JUSTIFY_SPACE_EVENLY: 5,
                LOG_LEVEL_COUNT: 6,
                LOG_LEVEL_ERROR: 0,
                LOG_LEVEL_WARN: 1,
                LOG_LEVEL_INFO: 2,
                LOG_LEVEL_DEBUG: 3,
                LOG_LEVEL_VERBOSE: 4,
                LOG_LEVEL_FATAL: 5,
                MEASURE_MODE_COUNT: 3,
                MEASURE_MODE_UNDEFINED: 0,
                MEASURE_MODE_EXACTLY: 1,
                MEASURE_MODE_AT_MOST: 2,
                NODE_TYPE_COUNT: 2,
                NODE_TYPE_DEFAULT: 0,
                NODE_TYPE_TEXT: 1,
                OVERFLOW_COUNT: 3,
                OVERFLOW_VISIBLE: 0,
                OVERFLOW_HIDDEN: 1,
                OVERFLOW_SCROLL: 2,
                POSITION_TYPE_COUNT: 2,
                POSITION_TYPE_RELATIVE: 0,
                POSITION_TYPE_ABSOLUTE: 1,
                PRINT_OPTIONS_COUNT: 3,
                PRINT_OPTIONS_LAYOUT: 1,
                PRINT_OPTIONS_STYLE: 2,
                PRINT_OPTIONS_CHILDREN: 4,
                UNIT_COUNT: 4,
                UNIT_UNDEFINED: 0,
                UNIT_POINT: 1,
                UNIT_PERCENT: 2,
                UNIT_AUTO: 3,
                WRAP_COUNT: 3,
                WRAP_NO_WRAP: 0,
                WRAP_WRAP: 1,
                WRAP_WRAP_REVERSE: 2
            }
        },
        5009: function(e, t, r) {
            "use strict";
            var n = r(2137),
                o = r(8113),
                i = !1,
                a = null;
            if (o({}, (function(e, t) {
                    if (!i) {
                        if (i = !0, e) throw e;
                        a = t
                    }
                })), !i) throw new Error("Failed to load the yoga module - it needed to be loaded synchronously, but didn't");
            e.exports = n(a.bind, a.lib)
        },
        2137: function(e, t, r) {
            "use strict";
            var n = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                },
                o = function() {
                    function e(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    return function(t, r, n) {
                        return r && e(t.prototype, r), n && e(t, n), t
                    }
                }();

            function i(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            var s = r(6375),
                u = function() {
                    function e(t, r, n, o, i, s) {
                        a(this, e), this.left = t, this.right = r, this.top = n, this.bottom = o, this.width = i, this.height = s
                    }
                    return o(e, [{
                        key: "fromJS",
                        value: function(e) {
                            e(this.left, this.right, this.top, this.bottom, this.width, this.height)
                        }
                    }, {
                        key: "toString",
                        value: function() {
                            return "<Layout#" + this.left + ":" + this.right + ";" + this.top + ":" + this.bottom + ";" + this.width + ":" + this.height + ">"
                        }
                    }]), e
                }(),
                f = function() {
                    function e(t, r) {
                        a(this, e), this.width = t, this.height = r
                    }
                    return o(e, null, [{
                        key: "fromJS",
                        value: function(t) {
                            return new e(t.width, t.height)
                        }
                    }]), o(e, [{
                        key: "fromJS",
                        value: function(e) {
                            e(this.width, this.height)
                        }
                    }, {
                        key: "toString",
                        value: function() {
                            return "<Size#" + this.width + "x" + this.height + ">"
                        }
                    }]), e
                }(),
                l = function() {
                    function e(t, r) {
                        a(this, e), this.unit = t, this.value = r
                    }
                    return o(e, [{
                        key: "fromJS",
                        value: function(e) {
                            e(this.unit, this.value)
                        }
                    }, {
                        key: "toString",
                        value: function() {
                            switch (this.unit) {
                                case s.UNIT_POINT:
                                    return String(this.value);
                                case s.UNIT_PERCENT:
                                    return this.value + "%";
                                case s.UNIT_AUTO:
                                    return "auto";
                                default:
                                    return this.value + "?"
                            }
                        }
                    }, {
                        key: "valueOf",
                        value: function() {
                            return this.value
                        }
                    }]), e
                }();
            e.exports = function(e, t) {
                function r(e, t, r) {
                    var n = e[t];
                    e[t] = function() {
                        for (var e = arguments.length, t = Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                        return r.call.apply(r, [this, n].concat(t))
                    }
                }
                for (var o = ["setPosition", "setMargin", "setFlexBasis", "setWidth", "setHeight", "setMinWidth", "setMinHeight", "setMaxWidth", "setMaxHeight", "setPadding"], a = function() {
                        var e, n = o[h],
                            a = (i(e = {}, s.UNIT_POINT, t.Node.prototype[n]), i(e, s.UNIT_PERCENT, t.Node.prototype[n + "Percent"]), i(e, s.UNIT_AUTO, t.Node.prototype[n + "Auto"]), e);
                        r(t.Node.prototype, n, (function(e) {
                            for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) r[o - 1] = arguments[o];
                            var i, u, f = r.pop(),
                                h = void 0,
                                c = void 0;
                            if ("auto" === f) h = s.UNIT_AUTO, c = void 0;
                            else if (f instanceof l) h = f.unit, c = f.valueOf();
                            else if (h = "string" === typeof f && f.endsWith("%") ? s.UNIT_PERCENT : s.UNIT_POINT, c = parseFloat(f), !Number.isNaN(f) && Number.isNaN(c)) throw new Error("Invalid value " + f + " for " + n);
                            if (!a[h]) throw new Error('Failed to execute "' + n + "\": Unsupported unit '" + f + "'");
                            return void 0 !== c ? (i = a[h]).call.apply(i, [this].concat(r, [c])) : (u = a[h]).call.apply(u, [this].concat(r))
                        }))
                    }, h = 0; h < o.length; h++) a();
                return r(t.Config.prototype, "free", (function() {
                    t.Config.destroy(this)
                })), r(t.Node, "create", (function(e, r) {
                    return r ? t.Node.createWithConfig(r) : t.Node.createDefault()
                })), r(t.Node.prototype, "free", (function() {
                    t.Node.destroy(this)
                })), r(t.Node.prototype, "freeRecursive", (function() {
                    for (var e = 0, t = this.getChildCount(); e < t; ++e) this.getChild(0).freeRecursive();
                    this.free()
                })), r(t.Node.prototype, "setMeasureFunc", (function(e, t) {
                    return t ? e.call(this, (function() {
                        return f.fromJS(t.apply(void 0, arguments))
                    })) : this.unsetMeasureFunc()
                })), r(t.Node.prototype, "calculateLayout", (function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : NaN,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : NaN,
                        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : s.DIRECTION_LTR;
                    return e.call(this, t, r, n)
                })), n({
                    Config: t.Config,
                    Node: t.Node,
                    Layout: e("Layout", u),
                    Size: e("Size", f),
                    Value: e("Value", l),
                    getInstanceCount: function() {
                        return t.getInstanceCount.apply(t, arguments)
                    }
                }, s)
            }
        },
        3366: function(e, t, r) {
            "use strict";

            function n(e, t) {
                if (null == e) return {};
                var r, n, o = {},
                    i = Object.keys(e);
                for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                return o
            }
            r.d(t, {
                Z: function() {
                    return n
                }
            })
        },
        219: function(e, t, r) {
            "use strict";

            function n(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                }
                return o
            }
            r.d(t, {
                Z: function() {
                    return n
                }
            })
        }
    }
]);