"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7966, 9751], {
        9751: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return b
                }
            });
            var o = n(2212),
                r = n(7294),
                a = n(9158),
                s = n(5714),
                i = n(2809),
                u = n(6311),
                c = (0, n(9137).g)({
                    effectFactor: 1.2,
                    dispFactor: 0,
                    texture1: void 0,
                    texture2: void 0,
                    displacement: void 0,
                    u_colorFactor: 0,
                    opacity: .5,
                    progress: 0,
                    intensity: 1,
                    resolution: new o.Vector4
                }, "varying vec2 vUv;\n\n \n  void main() {\n    vUv = uv;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n  }", "\n\n  uniform float time;\n\t\tuniform float progress;\n\t\tuniform float intensity;\n\t\tuniform float width;\n\t\tuniform float scaleX;\n\t\tuniform float scaleY;\n\t\tuniform float transition;\n\t\tuniform float radius;\n\t\tuniform float swipe;\n\t\tuniform sampler2D texture1;\n\t\tuniform sampler2D texture2;\n\t\tuniform sampler2D displacement;\n\t\tuniform vec4 resolution;\n\t\tvarying vec2 vUv;\n\t\tmat2 getRotM(float angle) {\n\t\t    float s = sin(angle);\n\t\t    float c = cos(angle);\n\t\t    return mat2(c, -s, s, c);\n\t\t}\n\t\tconst float PI = 3.1415;\n\t\tconst float angle1 = PI *0.25;\n\t\tconst float angle2 = -PI *0.75;\n\n    uniform float u_colorFactor;\n    uniform float opacity;\n\n\n\t\tvoid main()\t{\n\t\t\tvec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);\n\n\t\t\tvec4 disp = texture2D(displacement, newUV);\n\t\t\tvec2 dispVec = vec2(disp.r, disp.g);\n\n\t\t\tvec2 distortedPosition1 = newUV + getRotM(angle1) * dispVec * intensity * progress;\n\t\t\tvec4 t1 = texture2D(texture1, distortedPosition1);\n\n      // grayscale texture 1\n      float gray = 0.05 * t1.r + 0.71 * t1.g + 0.07 * t1.b;\n       vec4 grayScale = vec4(t1.r * u_colorFactor + gray * (1.0 - u_colorFactor), t1.g * u_colorFactor + gray * (1.0 - u_colorFactor), t1.b * u_colorFactor + gray * (1.0 - u_colorFactor), opacity);\n    \n\t\t\tvec2 distortedPosition2 = newUV + getRotM(angle2) * dispVec * intensity * (1.0 - progress);\n\t\t\tvec4 t2 = texture2D(texture2, distortedPosition2);\n\n\n      grayScale = grayScale * 0.5;\n      grayScale.a = opacity;\n\t\t\tgl_FragColor = mix(grayScale, t2 * vec4(1.0, 0.0, 0.0, 1.0), progress);\n\n\t\t}\n    \n  ");
            (0, a.l7)({
                ImageFadeMaterial: c
            });
            var l = n(5893);

            function p(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(n), !0).forEach((function(t) {
                        (0, i.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var d = r.forwardRef((function(e, t) {
                    var n = e.maxWidth / 16 * (e.mobile ? 1.15 : .75),
                        s = [16 * n, 9 * n],
                        i = (0, a.U2)(o.TextureLoader, ["/disp1.jpg"]),
                        c = (0, u.Z)(i, 1)[0],
                        p = e.hovered,
                        d = (0, r.useRef)(),
                        m = (0, a.Ky)().size;
                    return (0, a.xQ)((function() {
                        d.current && (d.current.progress = o.MathUtils.lerp(d.current.progress, p ? 1 : 0, .1))
                    })), (0, l.jsxs)("mesh", f(f({
                        ref: t
                    }, e), {}, {
                        scale: s,
                        children: [(0, l.jsx)("planeBufferGeometry", {}), (0, l.jsx)("imageFadeMaterial", {
                            ref: d,
                            transparent: !0,
                            attach: "material",
                            texture1: e.texture,
                            texture2: e.texture,
                            displacement: c,
                            "resolution-x": m.width,
                            "resolution-y": m.height,
                            "resolution-z": 1,
                            "resolution-w": 1
                        })]
                    }))
                })),
                m = n(6924),
                v = n(5716),
                h = n(5317),
                g = function(e) {
                    var t = e.year,
                        n = (e.textScaleFactor, e.color),
                        o = e.position;
                    return (0, l.jsx)(s.Z, {
                        position: o,
                        bold: !0,
                        textAlign: "center",
                        fontSize: .3,
                        lineHeight: .8,
                        letterSpacing: -.05,
                        color: n,
                        anchorX: "center",
                        children: t
                    })
                },
                y = n(8940),
                b = function(e) {
                    var t = e.index,
                        n = e.y,
                        i = e.state,
                        u = e.post,
                        c = e.year,
                        p = e.showYear,
                        f = (0, a.Ky)(),
                        b = f.viewport,
                        x = f.size,
                        O = x.width < 768,
                        j = u.title.toUpperCase(),
                        w = u.date.toUpperCase(),
                        F = u.slug,
                        P = (0, r.useState)("purple"),
                        S = P[0],
                        I = P[1],
                        C = (0, r.useState)("#FFFFFF"),
                        k = C[0],
                        A = C[1],
                        Q = (0, r.useState)(!1),
                        L = Q[0],
                        R = Q[1],
                        U = (0, r.useRef)(),
                        D = (0, r.useRef)(),
                        B = (0, r.useRef)(),
                        M = (0, r.useRef)(),
                        T = (0, r.useRef)(),
                        H = (0, r.useRef)(),
                        z = (0, r.useRef)(),
                        E = (0, r.useRef)(),
                        G = new o.Vector3,
                        _ = new o.Vector3,
                        V = new o.Euler(0, 0, 0),
                        q = new o.Quaternion(0, 0, 0, 0),
                        X = x.height / b.height,
                        Y = b.height / 2,
                        Z = O ? 1 : e.textScaleFactor,
                        N = b.width / 2 > 8 ? 7 : b.width / 2 * .9,
                        W = (N = O ? .8 * b.width : N) / 2,
                        K = (0, a.U2)(o.TextureLoader, u.image),
                        J = N / 16 * .75,
                        $ = (O ? .25 : 3.5) * J,
                        ee = t % 2,
                        te = O ? 0 : 12 * J,
                        ne = Y,
                        oe = -Y,
                        re = function(e) {
                            return Z * e
                        },
                        ae = i.router,
                        se = (0, y.o)((function(e) {
                            return e.setHovered
                        })),
                        ie = ((0, y.o)((function(e) {
                            return e.postsY
                        })), (0, y.o)((function(e) {
                            return e.setOffSet
                        }))),
                        ue = (0, y.o)((function(e) {
                            return e.setPostsY
                        })),
                        ce = (0, y.o)((function(e) {
                            return e.tabbedPost
                        }));
                    (0, a.xQ)((function(e) {
                        var t = e.mouse;
                        if (U.current) {
                            var n = i.top.current / X;
                            b.height;
                            U.current.getWorldPosition(_);
                            var r = function(e, t, n) {
                                    var o = (e - n) / (t - n);
                                    return Math.min(Math.max(o, 0), 1)
                                }(_.y, ne, oe),
                                a = n * i.scrollSpeed;
                            if (a += r > .5 ? 1 - r + 3 : r + 3, U.current.position.lerp(G.set(U.current.position.x, a, 0), .1), E.current.position.lerp(G.set(E.current.position.x, a, .2), .1), r < .2) "blue" != S && (I("blue"), A("#FFFFFF"), pe());
                            else if (r > .8) "pink" != S && (I("pink"), A("#FFFFFF"), pe());
                            else if (r > .2 && r < .8)
                                if ("green" != S) I("green"), A("#e32b2b"), le();
                                else {
                                    if (O) return;
                                    var s = t.x,
                                        u = t.y,
                                        c = 1.2 * r * .25;
                                    s = o.MathUtils.clamp(s, -c, c), u = -o.MathUtils.clamp(u, -c, c), V.set(u, s, 0), q.setFromEuler(V), U.current.quaternion.slerp(q, .1)
                                }
                        }
                    }));
                    var le = function() {
                            v.Q3.to(U.current.position, {
                                x: ee ? te : -te,
                                ease: h.Lp.easeInOut,
                                duration: .5
                            }), v.Q3.to(U.current.rotation, {
                                y: 0,
                                ease: h.Lp.easeInOut,
                                duration: .5
                            }), v.Q3.to(T.current.position, {
                                x: 0,
                                ease: h.Lp.easeInOut,
                                duration: .5
                            }), v.Q3.to(H.current, {
                                fillOpacity: 1,
                                ease: h.Lp.easeInOut
                            }), H.current.outlineOpacity = 1, v.Q3.to(H.current, {
                                outlineOpacity: 0,
                                delay: 0,
                                ease: h.Lp.easeInOut
                            }), v.Q3.to(B.current.position, {
                                y: 0,
                                ease: h.Lp.easeInOut,
                                delay: .1
                            }), v.Q3.to(M.current, {
                                fillOpacity: 1,
                                ease: h.Lp.easeInOut,
                                delay: .1
                            }), v.Q3.to(D.current.scale, {
                                x: 2 * J,
                                ease: h.Lp.easeInOut,
                                delay: .1
                            }), v.Q3.to(z.current.material, {
                                opacity: 1,
                                ease: h.Lp.easeInOut
                            })
                        },
                        pe = function() {
                            v.Q3.to(U.current.position, {
                                x: 0,
                                ease: h.Lp.easeInOut,
                                duration: .5
                            }), v.Q3.to(U.current.rotation, {
                                y: (ee ? Math.PI : -Math.PI) / 2,
                                ease: h.Lp.easeInOut,
                                duration: .5
                            }), v.Q3.to(T.current.position, {
                                x: ee ? -2.5 : 2.5,
                                ease: h.Lp.easeInOut
                            }), H.current.outlineOpacity = 1, v.Q3.to(H.current, {
                                fillOpacity: 0,
                                duration: .25,
                                ease: h.Lp.easeInOut
                            }), v.Q3.to(H.current, {
                                outlineOpacity: 0,
                                delay: 0,
                                ease: h.Lp.easeInOut
                            }), v.Q3.to(B.current.position, {
                                y: -.5,
                                ease: h.Lp.easeInOut
                            }), v.Q3.to(M.current, {
                                fillOpacity: 0,
                                ease: h.Lp.easeInOut,
                                delay: .1
                            }), v.Q3.to(D.current.scale, {
                                x: 0,
                                ease: h.Lp.easeInOut,
                                delay: 0
                            }), v.Q3.to(z.current.material, {
                                opacity: 0,
                                ease: h.Lp.easeInOut,
                                delay: .1
                            })
                        };
                    return (0, l.jsxs)("group", {
                        position: [0, n * J * (O ? 2 : 1), 0],
                        onPointerOut: function() {
                            R(!1), se(!1)
                        },
                        onPointerOver: function() {
                            se(!0), R(!0)
                        },
                        onClick: function() {
                            if ("the-independent-aaa-proposition" !== F) {
                                var e = {
                                    value: 0
                                };
                                ie(document.querySelector(".scrollArea").scrollTop), v.Q3.to(e, 1, {
                                    value: -20,
                                    onUpdate: function() {
                                        ue(e.value)
                                    },
                                    onComplete: function() {
                                        ae.push("posts/".concat(F))
                                    }
                                })
                            } else ae.push("the-independent-aaa-proposition")
                        },
                        children: [(0, l.jsxs)("group", {
                            ref: U,
                            children: [(0, l.jsx)("group", {
                                ref: B,
                                children: (0, l.jsx)(s.Z, {
                                    ref: M,
                                    position: [ee ? -W + $ : W - $, (O ? -2.75 : -3.2) * J, , 0],
                                    textAlign: ee ? "left" : "right",
                                    maxWidth: N,
                                    fontSize: re(.35),
                                    anchorX: ee ? "left" : "right",
                                    color: L || ce === u.slug ? "#FFA25D" : "#B9B9B9",
                                    children: w
                                })
                            }), (0, l.jsx)("group", {
                                ref: T,
                                children: (0, l.jsx)(s.Z, {
                                    ref: H,
                                    position: [ee ? -W + $ : W - $, -4.5 * J, .1],
                                    textAlign: ee ? "left" : "right",
                                    maxWidth: N * (O ? 1 : .75),
                                    fontSize: re(.55),
                                    bold: !0,
                                    anchorX: ee ? "left" : "right",
                                    lineHeight: .8,
                                    color: L ? "#FFFFFF" : "#BABABA",
                                    outlineColor: L ? "#FFFFFF" : "#BABABA",
                                    outlineBlur: .25,
                                    outlineWidth: .001,
                                    depthTest: !1,
                                    children: j
                                })
                            }), (0, l.jsx)(m.x, {
                                ref: D,
                                position: [ee ? -W + $ - .5 * J : W - $ + .5 * J, -3.8 * J, 0],
                                points: [
                                    [ee ? -1 : 1, 0, 0],
                                    [0, 0, 0]
                                ],
                                color: L || ce === u.slug ? "#FFA25D" : "#B9B9B9",
                                lineWidth: O ? 0 : 1,
                                dashed: !1
                            }), (0, l.jsx)(d, {
                                ref: z,
                                texture: K,
                                hovered: L || ce === u.slug,
                                left: !ee,
                                maxWidth: N,
                                "position-z": -.5,
                                "position-y": O ? .25 : -.25,
                                mobile: O
                            })]
                        }), (0, l.jsx)("group", {
                            ref: E,
                            children: p && (0, l.jsx)(g, {
                                position: [0, O ? .75 * b.width / 2 : 0, 0],
                                textScaleFactor: Z,
                                year: c,
                                color: k
                            })
                        })]
                    })
                }
        },
        5714: function(e, t, n) {
            var o = n(2809),
                r = n(219),
                a = n(7294),
                s = n(7091),
                i = n(3868),
                u = n(5893),
                c = ["bold", "anchorX", "anchorY", "textAlign"];

            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }
            var p = a.forwardRef((function(e, t) {
                var n = e.bold,
                    a = void 0 !== n && n,
                    p = e.anchorX,
                    f = void 0 === p ? "left" : p,
                    d = e.anchorY,
                    m = void 0 === d ? "top" : d,
                    v = e.textAlign,
                    h = void 0 === v ? "left" : v,
                    g = (0, r.Z)(e, c),
                    y = (0, s.Pt)(),
                    b = g.font || a ? "/ProximaNovaExCn-Bold.woff" : "/ProximaNovaExCn-Light.woff";
                return (0, u.jsx)(i.x, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? l(Object(n), !0).forEach((function(t) {
                            (0, o.Z)(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }({
                    ref: t,
                    anchorX: f,
                    anchorY: m,
                    textAlign: h,
                    font: b,
                    onSync: y
                }, g))
            }));
            t.Z = p
        },
        7966: function(e, t, n) {
            n.r(t);
            var o = n(2809),
                r = n(9158),
                a = n(7294),
                s = n(1163),
                i = n(8940),
                u = n(5716),
                c = n(5152),
                l = n(6666),
                p = (n(9751), n(5893));

            function f(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(n), !0).forEach((function(t) {
                        (0, o.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var m = {
                    ref: (0, a.createRef)(),
                    top: (0, a.createRef)(),
                    hover: (0, a.createRef)(),
                    lastScrollTop: 0,
                    scrollDirection: "",
                    scrollSpeed: .25,
                    pages: 3,
                    threshold: 2,
                    rotation: {
                        value: 0
                    },
                    posts: []
                },
                v = ((0, c.default)((function() {
                    return n.e(249).then(n.bind(n, 249))
                }), {
                    ssr: !1,
                    loadableGenerated: {
                        webpack: function() {
                            return [249]
                        },
                        modules: ["../components/InternalCanvas.js -> components/Home/AppStats"]
                    }
                }), (0, c.default)((function() {
                    return n.e(8923).then(n.bind(n, 8923))
                }), {
                    ssr: !1,
                    loadableGenerated: {
                        webpack: function() {
                            return [8923]
                        },
                        modules: ["../components/InternalCanvas.js -> components/Home/ScreenSwipe"]
                    }
                })),
                h = (0, c.default)((function() {
                    return n.e(6132).then(n.bind(n, 1140))
                }), {
                    ssr: !1,
                    loadableGenerated: {
                        webpack: function() {
                            return [1140]
                        },
                        modules: ["../components/InternalCanvas.js -> components/Home/Loading"]
                    }
                }),
                g = (0, c.default)((function() {
                    return n.e(3316).then(n.bind(n, 3316))
                }), {
                    ssr: !1,
                    loadableGenerated: {
                        webpack: function() {
                            return [3316]
                        },
                        modules: ["../components/InternalCanvas.js -> components/Home/Particles"]
                    }
                }),
                y = (0, c.default)((function() {
                    return n.e(6202).then(n.bind(n, 6202))
                }), {
                    ssr: !1,
                    loadableGenerated: {
                        webpack: function() {
                            return [6202]
                        },
                        modules: ["../components/InternalCanvas.js -> components/Home/Smoke/SmokeFixed"]
                    }
                }),
                b = (0, c.default)((function() {
                    return n.e(6631).then(n.bind(n, 6631))
                }), {
                    ssr: !1,
                    loadableGenerated: {
                        webpack: function() {
                            return [6631]
                        },
                        modules: ["../components/InternalCanvas.js -> components/FaqBackground"]
                    }
                }),
                x = (0, c.default)((function() {
                    return n.e(4883).then(n.bind(n, 4883))
                }), {
                    ssr: !1,
                    loadableGenerated: {
                        webpack: function() {
                            return [4883]
                        },
                        modules: ["../components/InternalCanvas.js -> components/AAABackground"]
                    }
                }),
                O = (0, c.default)((function() {
                    return n.e(2455).then(n.bind(n, 2455))
                }), {
                    ssr: !1,
                    loadableGenerated: {
                        webpack: function() {
                            return [2455]
                        },
                        modules: ["../components/InternalCanvas.js -> components/MentalHealthSupportBackground"]
                    }
                }),
                j = (0, c.default)((function() {
                    return n.e(6896).then(n.bind(n, 6896))
                }), {
                    ssr: !1,
                    loadableGenerated: {
                        webpack: function() {
                            return [6896]
                        },
                        modules: ["../components/InternalCanvas.js -> components/Home/Posts"]
                    }
                }),
                w = (0, c.default)((function() {
                    return n.e(8494).then(n.bind(n, 835))
                }), {
                    ssr: !1,
                    loadableGenerated: {
                        webpack: function() {
                            return [835]
                        },
                        modules: ["../components/InternalCanvas.js -> components/Home/Hero"]
                    }
                }),
                F = (0, c.default)((function() {
                    return n.e(5945).then(n.bind(n, 5945))
                }), {
                    ssr: !1,
                    loadableGenerated: {
                        webpack: function() {
                            return [5945]
                        },
                        modules: ["../components/InternalCanvas.js -> components/Home/Rune"]
                    }
                }),
                P = (0, c.default)((function() {
                    return n.e(5881).then(n.bind(n, 5881))
                }), {
                    ssr: !1,
                    loadableGenerated: {
                        webpack: function() {
                            return [5881]
                        },
                        modules: ["../components/InternalCanvas.js -> components/BuyBackground"]
                    }
                });
            t.default = function(e) {
                var t = e.path,
                    n = e.showAgegate,
                    o = (0, a.useState)(0),
                    c = (o[0], o[1], (0, a.useState)(0)),
                    f = (c[0], c[1]),
                    S = (0, a.useState)(""),
                    I = S[0],
                    C = S[1],
                    k = (0, s.useRouter)(),
                    A = (0, a.useState)(),
                    Q = A[0],
                    L = A[1],
                    R = (0, a.useRef)(),
                    U = function(e) {
                        m.top.current = e.target.scrollTop, f(e.target.scrollTop * m.scrollSpeed * 3)
                    },
                    D = (0, a.useReducer)((function(e) {
                        return !e
                    }), !0),
                    B = (D[0], D[1], (0, i.o)((function(e) {
                        return e.setHeroOpacity
                    }))),
                    M = (0, i.o)((function(e) {
                        return e.setFaqOpacity
                    })),
                    T = (0, i.o)((function(e) {
                        return e.setMhsOpacity
                    })),
                    H = (0, i.o)((function(e) {
                        return e.setBuyOpacity
                    })),
                    z = (0, i.o)((function(e) {
                        return e.setAAAOpacity
                    })),
                    E = (0, i.o)((function(e) {
                        return e.setPostsY
                    })),
                    G = (0, i.o)((function(e) {
                        return e.setTabbedPost
                    })),
                    _ = (0, i.o)((function(e) {
                        return e.setOffSet
                    })),
                    V = ((0, i.o)((function(e) {
                        return e.setAudioFile
                    })), (0, i.o)((function(e) {
                        return e.setPlayingOtherAudio
                    }))),
                    q = (0, i.o)((function(e) {
                        return e.setPlayingHomeAudio
                    })),
                    X = (0, i.o)((function(e) {
                        return e.howlerHome
                    })),
                    Y = (0, i.o)((function(e) {
                        return e.howlerOther
                    })),
                    Z = (0, a.useRef)(),
                    N = (0, i.o)((function(e) {
                        return e.filteredPosts
                    }));
                (0, a.useEffect)((function() {
                    Z.current = t, C(t), s.default.events.on("routeChangeStart", (function(e) {
                        var t, n = e.split("/");
                        t = 3 === n.length && "posts" === n[1] ? "posts-slug" : (0, l.u)(e),
                            function(e, t) {
                                if (e !== t) {
                                    var n = document.querySelector(".layout");
                                    if (n && n.classList.add("out"), "home" === e && (X.fade(1, 0, 2e3), Y.volume(0), V(!0), setTimeout((function() {
                                            Y.fade(0, 1, 2e3)
                                        }), 1e3), setTimeout((function() {
                                            q(!1)
                                        }), 2100)), "home" !== e && "home" === t && (Y.fade(1, 0, 2e3), X.volume(0), q(!0), setTimeout((function() {
                                            X.fade(0, 1, 2e3)
                                        }), 1e3), setTimeout((function() {
                                            V(!1)
                                        }), 2100)), "home" === e) {
                                        var o = {
                                            value: 1
                                        };
                                        return document.querySelector(".hero-outer").classList.add("out"), void u.Q3.to(o, .5, {
                                            value: 0,
                                            onUpdate: function() {
                                                B(o.value)
                                            },
                                            onComplete: function() {
                                                Z.current = t, C(t)
                                            }
                                        })
                                    }
                                    if ("faq" !== e)
                                        if ("mental-health-support" !== e && "optimized" !== e && "optimised" !== e)
                                            if ("buy" !== e)
                                                if ("the-independent-aaa-proposition" !== e) {
                                                    if ("posts-slug" === e && "posts" === t) {
                                                        var r = {
                                                            value: -20
                                                        };
                                                        u.Q3.to(r, 1, {
                                                            value: 0,
                                                            onUpdate: function() {
                                                                E(r.value)
                                                            }
                                                        })
                                                    }
                                                    C(t), Z.current = t
                                                } else {
                                                    var a = {
                                                        value: 1
                                                    };
                                                    u.Q3.to(a, .5, {
                                                        value: 0,
                                                        onUpdate: function() {
                                                            z(a.value)
                                                        },
                                                        onComplete: function() {
                                                            setTimeout((function() {
                                                                C(t), Z.current = t
                                                            }), 0)
                                                        }
                                                    })
                                                }
                                    else {
                                        var s = {
                                            value: 1
                                        };
                                        u.Q3.to(s, .5, {
                                            value: 0,
                                            onUpdate: function() {
                                                H(s.value)
                                            },
                                            onComplete: function() {
                                                setTimeout((function() {
                                                    C(t), Z.current = t
                                                }), 0)
                                            }
                                        })
                                    } else {
                                        var i = {
                                            value: 1
                                        };
                                        u.Q3.to(i, .5, {
                                            value: 0,
                                            onUpdate: function() {
                                                T(i.value)
                                            },
                                            onComplete: function() {
                                                setTimeout((function() {
                                                    C(t), Z.current = t
                                                }), 0)
                                            }
                                        })
                                    } else {
                                        var c = {
                                            value: 1
                                        };
                                        u.Q3.to(c, .5, {
                                            value: 0,
                                            onUpdate: function() {
                                                M(c.value)
                                            },
                                            onComplete: function() {
                                                setTimeout((function() {
                                                    C(t), Z.current = t
                                                }), 0)
                                            }
                                        })
                                    }
                                }
                            }(Z.current, t)
                    })), s.default.events.on("routeChangeComplete", (function() {})), m.ref = R.current, m.router = k, U({
                        target: R.current
                    })
                }), []);
                return (0, p.jsxs)(p.Fragment, {
                    children: [(0, p.jsxs)(r.Xz, {
                        concurrent: !0,
                        colorManagement: !1,
                        shadowMap: !0,
                        pixelRatio: 2,
                        camera: {
                            position: [0, 0, 10],
                            far: 100
                        },
                        raycaster: {
                            computeOffsets: function(e) {
                                var t = e.nativeEvent,
                                    n = t.offsetX;
                                return {
                                    offsetY: t.offsetY - m.top.current,
                                    offsetX: n
                                }
                            }
                        },
                        onCreated: function(e) {
                            delete e.events.onGotPointerCaptureLegacy, L(e.events)
                        },
                        className: "internal-canvas absolute top-0 left-0 bottom-0 z-10",
                        children: [(0, p.jsx)("ambientLight", {}), (0, p.jsxs)(a.Suspense, {
                            fallback: (0, p.jsx)(h, {}),
                            children: [(0, p.jsx)(v, {
                                state: m
                            }), "home" == I && !n && (0, p.jsx)(w, {
                                state: m
                            }), ("posts" == I || "posts-slug" == I) && !n && N.length > 0 && (0, p.jsx)(p.Fragment, {
                                children: (0, p.jsx)(j, {
                                    state: m
                                })
                            }), "faq" == I && !n && (0, p.jsx)(b, {}), ("mental-health-support" == I || "optimised" == I || "optimized" == I) && !n && (0, p.jsx)(O, {}), "buy" == I && !n && (0, p.jsx)(P, {}), "the-independent-aaa-proposition" == I && !n && (0, p.jsx)(x, {}), "gallery" != I && (0, p.jsx)(g, {
                                count: 500,
                                "position-z": -.5
                            }), (!!n || "posts" == I || "posts-slug" == I) && (0, p.jsx)(F, {
                                state: m
                            }), (0, p.jsx)(y, {})]
                        })]
                    }), (0, p.jsx)("div", d(d({
                        className: "scrollArea z-20 ".concat("posts" == I ? "pointer-events-auto" : "pointer-events-none"),
                        ref: R,
                        onScroll: U
                    }, Q), {}, {
                        children: "posts" == I && (0, p.jsxs)("div", {
                            style: {
                                height: "".concat(.85 * N.slice(0, 100).length * 100, "vh"),
                                width: "100%"
                            },
                            children: [N.map((function(e, t) {
                                return (0, p.jsx)("a", {
                                    className: "block opacity-100 sr-only pointer-events-none",
                                    href: "".concat(e.slug),
                                    onFocus: function() {
                                        G(e.slug), document.querySelector(".scrollArea").scrollTo(0, 100 * t + 800 * t)
                                    },
                                    onClick: function(t) {
                                        t.preventDefault();
                                        var n = {
                                            value: 0
                                        };
                                        u.Q3.to(n, 1, {
                                            value: -20,
                                            onUpdate: function() {
                                                E(n.value)
                                            }
                                        }), "the-independent-aaa-proposition" !== e.slug ? (_(document.querySelector(".scrollArea").scrollTop), m.router.push("posts/".concat(e.slug))) : m.router.push("the-independent-aaa-proposition")
                                    },
                                    children: e.title
                                }, e.slug)
                            })), (0, p.jsx)("div", {})]
                        })
                    }))]
                })
            }
        }
    }
]);