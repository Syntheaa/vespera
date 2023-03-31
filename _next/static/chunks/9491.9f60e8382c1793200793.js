"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9491], {
        9137: function(e, n, t) {
            t.d(n, {
                g: function() {
                    return o
                }
            });
            var r = t(7462),
                i = t(2212);

            function o(e, n, t, o) {
                return class extends i.ShaderMaterial {
                    constructor() {
                        const a = Object.entries(e);
                        super({
                            uniforms: a.reduce(((e, [n, t]) => {
                                const o = i.UniformsUtils.clone({
                                    [n]: {
                                        value: t
                                    }
                                });
                                return (0, r.Z)({}, e, o)
                            }), {}),
                            vertexShader: n,
                            fragmentShader: t
                        }), a.forEach((([e]) => Object.defineProperty(this, e, {
                            get: () => this.uniforms[e].value,
                            set: n => this.uniforms[e].value = n
                        }))), o && o(this)
                    }
                }
            }
        },
        9491: function(e, n, t) {
            t.r(n), t.d(n, {
                default: function() {
                    return s
                }
            });
            var r = t(6311),
                i = t(2212),
                o = t(7294),
                a = t(9158);
            var u = (0, t(9137).g)({
                image0: void 0,
                image1: void 0,
                threshold: {
                    x: 100,
                    y: 100
                },
                mouse: {
                    x: 0,
                    y: 0
                },
                opacity: 1
            }, "varying vec2 vUv;\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", "varying vec2 vUv;\n\n// 3d args\nuniform vec2 mouse;\nuniform vec2 threshold;\nuniform float opacity;\n\nuniform sampler2D image0;\nuniform sampler2D image1;\n\nvec2 mirrored(vec2 v) {\n    vec2 m = mod(v,2.);\n    return mix(m,2.0 - m, step(1.0 ,m));\n  }\n\nvoid main() {\n    vec2 uv = vUv;\n    vec4 tex1 = texture2D(image1,mirrored(vUv));\n    vec2 fake3d = vec2(vUv.x + (tex1.r - 0.5)*mouse.x/threshold.x, vUv.y + (tex1.r - 0.5)*mouse.y/threshold.y);\n    vec4 final = vec4(texture2D(image0,mirrored(fake3d)));\n    final.a = opacity;\n    gl_FragColor = final;\n}\n\n");
            (0, a.l7)({
                ImageDepthMapMaterial: u
            });
            var c = t(5893);

            function s(e) {
                var n = (0, o.useRef)(),
                    t = (0, a.U2)(i.TextureLoader, [e.originalImg, e.depthImg]),
                    u = (0, r.Z)(t, 2),
                    s = u[0],
                    l = u[1],
                    v = (0, a.Ky)().size.width < 768,
                    f = (0, o.useState)(!1),
                    m = (f[0], f[1]),
                    d = function(e, n, t, r = 1) {
                        const {
                            viewport: i,
                            aspect: o
                        } = (0, a.Ky)(), u = t * (o > n / t ? i.width / n : i.height / t);
                        return [n * (o > n / t ? i.width / n : i.height / t) * r, u * r, 1]
                    }(0, v ? 900 : 1920, 1080, 1),
                    h = (0, o.useState)(0),
                    g = h[0],
                    y = h[1],
                    p = (0, o.useState)(0),
                    x = p[0],
                    w = p[1],
                    b = (0, o.useState)(0),
                    S = b[0],
                    U = b[1],
                    j = (0, o.useState)(0),
                    M = j[0],
                    A = j[1];
                return (0, o.useEffect)((function() {
                    var e = function(e) {
                        var n = window.innerWidth / 2,
                            t = window.innerHeight / 2;
                        y((n - e.clientX) / n), w((t - e.clientY) / t)
                    };
                    return window.addEventListener("mousemove", e),
                        function() {
                            window.removeEventListener("mousemove", e)
                        }
                }), []), (0, a.xQ)((function() {
                    U(S + .05 * (g - S)), A(M + .05 * (x - M)), n.current && (n.current.mouse = {
                        x: S,
                        y: -M
                    })
                })), (0, c.jsxs)("mesh", {
                    onPointerMove: function(e) {
                        return m(!0)
                    },
                    onPointerOut: function(e) {
                        return m(!1)
                    },
                    scale: d,
                    children: [(0, c.jsx)("planeBufferGeometry", {
                        attach: "geometry"
                    }), (0, c.jsx)("imageDepthMapMaterial", {
                        ref: n,
                        attach: "material",
                        image0: s,
                        image1: l,
                        opacity: e.opacity,
                        blending: i.AdditiveBlending
                    })]
                })
            }
        },
        6311: function(e, n, t) {
            function r(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }

            function i(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, n) {
                    var t = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, o = [],
                            a = !0,
                            u = !1;
                        try {
                            for (t = t.call(e); !(a = (r = t.next()).done) && (o.push(r.value), !n || o.length !== n); a = !0);
                        } catch (c) {
                            u = !0, i = c
                        } finally {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (u) throw i
                            }
                        }
                        return o
                    }
                }(e, n) || function(e, n) {
                    if (e) {
                        if ("string" === typeof e) return r(e, n);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? r(e, n) : void 0
                    }
                }(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            t.d(n, {
                Z: function() {
                    return i
                }
            })
        }
    }
]);