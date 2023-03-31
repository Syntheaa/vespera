"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8494], {
        7854: function(e, t, n) {
            n.d(t, {
                V: function() {
                    return v
                }
            });
            var r = n(7462),
                o = n(3366),
                s = n(7294),
                i = n(3935),
                a = n(2212),
                l = n(9158);
            const c = new a.Vector3,
                u = new a.Vector3,
                d = new a.Vector3;

            function m(e, t, n) {
                const r = c.setFromMatrixPosition(e.matrixWorld);
                r.project(t);
                const o = n.width / 2,
                    s = n.height / 2;
                return [r.x * o + o, -r.y * s + s]
            }
            const f = e => Math.abs(e) < 1e-10 ? 0 : e;

            function p(e, t, n = "") {
                let r = "matrix3d(";
                for (let o = 0; 16 !== o; o++) r += f(t[o] * e.elements[o]) + (15 !== o ? "," : ")");
                return n + r
            }
            const h = (x = [1, -1, 1, 1, 1, -1, 1, 1, 1, -1, 1, 1, 1, -1, 1, 1], e => p(e, x));
            var x;
            const g = (e, t) => {
                    return p(e, [1 / (n = t), 1 / n, 1 / n, 1, -1 / n, -1 / n, -1 / n, -1, 1 / n, 1 / n, 1 / n, 1, 1, 1, 1, 1], "translate(-50%,-50%)");
                    var n
                },
                v = (0, s.forwardRef)(((e, t) => {
                    var n;
                    let {
                        children: p,
                        eps: x = .001,
                        style: v,
                        className: y,
                        prepend: b,
                        center: j,
                        fullscreen: w,
                        portal: M,
                        distanceFactor: H,
                        sprite: N = !1,
                        transform: P = !1,
                        zIndexRange: E = [16777271, 0],
                        calculatePosition: z = m
                    } = e, k = (0, o.Z)(e, ["children", "eps", "style", "className", "prepend", "center", "fullscreen", "portal", "distanceFactor", "sprite", "transform", "zIndexRange", "calculatePosition"]);
                    const {
                        gl: I,
                        scene: C,
                        camera: W,
                        size: Z
                    } = (0, l.Ky)(), [F] = (0, s.useState)((() => document.createElement("div"))), T = (0, s.useRef)(null), R = (0, s.useRef)(0), S = (0, s.useRef)([0, 0]), O = (0, s.useRef)(null), V = (0, s.useRef)(null), _ = null != (n = null == M ? void 0 : M.current) ? n : I.domElement.parentNode;
                    (0, s.useEffect)((() => {
                        if (T.current) {
                            if (C.updateMatrixWorld(), P) F.style.cssText = "position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";
                            else {
                                const e = z(T.current, W, Z);
                                F.style.cssText = "position:absolute;top:0;left:0;transform:translate3d(" + e[0] + "px," + e[1] + "px,0);transform-origin:0 0;"
                            }
                            return _ && (b ? _.prepend(F) : _.appendChild(F)), () => {
                                _ && _.removeChild(F), (0, i.unmountComponentAtNode)(F)
                            }
                        }
                    }), [_, P]);
                    const L = (0, s.useMemo)((() => P ? {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: Z.width,
                            height: Z.height,
                            transformStyle: "preserve-3d",
                            pointerEvents: "none"
                        } : (0, r.Z)({
                            position: "absolute",
                            transform: j ? "translate3d(-50%,-50%,0)" : "none"
                        }, w && {
                            top: -Z.height / 2,
                            left: -Z.width / 2,
                            width: Z.width,
                            height: Z.height
                        }, v)), [v, j, w, Z, P]),
                        G = (0, s.useMemo)((() => (0, r.Z)({
                            position: "absolute",
                            pointerEvents: "auto"
                        }, v)), [v]);
                    return (0, s.useLayoutEffect)((() => {
                        P ? (0, i.render)((0, s.createElement)("div", {
                            ref: O,
                            style: L
                        }, (0, s.createElement)("div", {
                            ref: V,
                            style: G
                        }, (0, s.createElement)("div", {
                            ref: t,
                            className: y,
                            children: p
                        }))), F) : (0, i.render)((0, s.createElement)("div", {
                            ref: t,
                            style: L,
                            className: y,
                            children: p
                        }), F)
                    })), (0, l.xQ)((() => {
                        if (T.current) {
                            W.updateMatrixWorld();
                            const e = P ? S.current : z(T.current, W, Z);
                            if (P || Math.abs(R.current - W.zoom) > x || Math.abs(S.current[0] - e[0]) > x || Math.abs(S.current[1] - e[1]) > x) {
                                if (F.style.display = function(e, t) {
                                        const n = c.setFromMatrixPosition(e.matrixWorld),
                                            r = u.setFromMatrixPosition(t.matrixWorld),
                                            o = n.sub(r),
                                            s = t.getWorldDirection(d);
                                        return o.angleTo(s) > Math.PI / 2
                                    }(T.current, W) ? "none" : "block", F.style.zIndex = "" + function(e, t, n) {
                                        if (t instanceof a.PerspectiveCamera || t instanceof a.OrthographicCamera) {
                                            const r = c.setFromMatrixPosition(e.matrixWorld),
                                                o = u.setFromMatrixPosition(t.matrixWorld),
                                                s = r.distanceTo(o),
                                                i = (n[1] - n[0]) / (t.far - t.near),
                                                a = n[1] - i * t.far;
                                            return Math.round(i * s + a)
                                        }
                                    }(T.current, W, E), P) {
                                    const [e, t] = [Z.width / 2, Z.height / 2], n = W.projectionMatrix.elements[5] * t, {
                                        isOrthographicCamera: r,
                                        top: o,
                                        left: s,
                                        bottom: i,
                                        right: a
                                    } = W, l = h(W.matrixWorldInverse), c = r ? "scale(" + n + ")translate(" + f(-(a + s) / 2) + "px," + f((o + i) / 2) + "px)" : "translateZ(" + n + "px)";
                                    let u = T.current.matrixWorld;
                                    N && (u = W.matrixWorldInverse.clone().transpose().copyPosition(u).scale(T.current.scale), u.elements[3] = u.elements[7] = u.elements[11] = 0, u.elements[15] = 1), F.style.width = Z.width + "px", F.style.height = Z.height + "px", F.style.perspective = r ? "" : n + "px", O.current && V.current && (O.current.style.transform = "" + c + l + "translate(" + e + "px," + t + "px)", V.current.style.transform = g(u, 1 / ((H || 10) / 400)))
                                } else {
                                    const t = void 0 === H ? 1 : function(e, t) {
                                        if (t instanceof a.OrthographicCamera) return t.zoom;
                                        if (t instanceof a.PerspectiveCamera) {
                                            const n = c.setFromMatrixPosition(e.matrixWorld),
                                                r = u.setFromMatrixPosition(t.matrixWorld),
                                                o = t.fov * Math.PI / 180,
                                                s = n.distanceTo(r);
                                            return 1 / (2 * Math.tan(o / 2) * s)
                                        }
                                        return 1
                                    }(T.current, W) * H;
                                    F.style.transform = "translate3d(" + e[0] + "px," + e[1] + "px,0) scale(" + t + ")"
                                }
                                S.current = e, R.current = W.zoom
                            }
                        }
                    })), (0, s.createElement)("group", (0, r.Z)({}, k, {
                        ref: T
                    }))
                }))
        },
        4937: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            var r = n(2743),
                o = n(5893),
                s = n(8940),
                i = function(e) {
                    var t = e.state,
                        n = (0, s.o)((function(e) {
                            return e.setHovered
                        })),
                        i = t.router;
                    return (0, o.jsxs)("div", {
                        className: "buy-block relative -top-5",
                        children: [(0, o.jsx)("div", {
                            className: "flex justify-center py-6",
                            children: (0, o.jsxs)("div", {
                                className: "flex-col flex justify-center items-center",
                                children: [(0, o.jsx)(r.Z, {
                                    size: " text-2xl md:text-4xl",
                                    children: "Mysterious & alluring character"
                                }), (0, o.jsx)(r.Z, {
                                    size: "text-2xl md:text-4xl",
                                    children: "for game's secret"
                                })]
                            })
                        }), (0, o.jsx)("div", {
                            className: "flex justify-center items-center click-here-to-buy py-2",
                            children: (0, o.jsx)("a", {
                                className: "buy-now cursor-pointer transition-opacity hover:opacity-75 duration-150",
                                onMouseEnter: function() {
                                    n(!0)
                                },
                                onMouseLeave: function() {
                                    return n(!1)
                                },
                                onClick: function() {
                                    i.push("optimised")
                                },
                                children: (0, o.jsx)(r.Z, {
                                    size: "text-2xl",
                                    children: "Learn more"
                                })
                            })
                        })]
                    })
                }
        },
        835: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var r = n(2212),
                o = n(7294),
                s = n(9158),
                i = n(5152),
                a = n(7854),
                l = n(4937),
                c = n(1745),
                u = n(8940),
                d = n(5716),
                m = n(5893),
                f = ((0, i.default)((function() {
                    return n.e(556).then(n.bind(n, 556))
                }), {
                    ssr: !1,
                    loadableGenerated: {
                        webpack: function() {
                            return [556]
                        },
                        modules: ["../components/Home/Hero/Hero.js -> components/Home/Buy"]
                    }
                }), (0, i.default)((function() {
                    return n.e(2525).then(n.bind(n, 2525))
                }), {
                    ssr: !1,
                    loadableGenerated: {
                        webpack: function() {
                            return [2525]
                        },
                        modules: ["../components/Home/Hero/Hero.js -> components/Home/Logo"]
                    }
                }), (0, i.default)((function() {
                    return n.e(1732).then(n.bind(n, 1732))
                }), {
                    ssr: !1,
                    loadableGenerated: {
                        webpack: function() {
                            return [1732]
                        },
                        modules: ["../components/Home/Hero/Hero.js -> components/Home/ScrollPrompt"]
                    }
                }), (0, i.default)((function() {
                    return n.e(9491).then(n.bind(n, 9491))
                }), {
                    ssr: !1,
                    loadableGenerated: {
                        webpack: function() {
                            return [9491]
                        },
                        modules: ["../components/Home/Hero/Hero.js -> components/Home/ImageDepthMap/ImageDepthMap"]
                    }
                })),
                p = function(e) {
                    var t = (0, o.useRef)(),
                        n = (0, s.Ky)().size,
                        i = (new r.Vector3, e.state),
                        p = (0, u.o)((function(e) {
                            return e.showHero
                        })),
                        h = (0, u.o)((function(e) {
                            return e.heroOpacity
                        })),
                        x = (0, u.o)((function(e) {
                            return e.setHeroOpacity
                        })),
                        g = n.width < 768;
                    return (0, o.useEffect)((function() {
                        var e = {
                            value: 0
                        };
                        return d.Q3.to(e, 1, {
                                value: 1,
                                onUpdate: function() {
                                    x(e.value)
                                },
                                onComplete: function() {}
                            }),
                            function() {}
                    }), []), (0, m.jsxs)("group", {
                        ref: t,
                        "position-z": 0,
                        children: [!g && (0, m.jsx)(f, {
                            originalImg: "./senua-hero-bg-new.jpg",
                            depthImg: "./senua-depthmap.jpg",
                            verticalThreshold: 25,
                            horizontalThreshold: 15,
                            opacity: h.value
                        }), g && (0, m.jsx)(f, {
                            originalImg: "./senua-hero-bg-mobile.jpg",
                            depthImg: "./senua-depthmap-mobile.jpg",
                            verticalThreshold: 25,
                            horizontalThreshold: 15,
                            opacity: h.value
                        }), (0, m.jsx)("group", {
                            position: [0, 0, 1],
                            onPointerOver: function() {
                                return console.log("over")
                            },
                            children: (0, m.jsx)(a.V, {
                                center: !0,
                                className: "hero-outer",
                                children: (0, m.jsx)("div", {
                                    className: "home-hero-wrapper flex wrapper flex-col ",
                                    children: (0, m.jsx)("div", {
                                        className: "inner flex-1 md:w-1/2 flex flex-col justify-between md:justify-center items-center py-10 md:py-0",
                                        children: p && (0, m.jsxs)(m.Fragment, {
                                            children: [(0, m.jsx)(c.Z, {}), (0, m.jsx)(l.Z, {
                                                state: i
                                            })]
                                        })
                                    })
                                })
                            })
                        })]
                    })
                }
        },
        1745: function(e, t, n) {
            var r = n(5893);
            t.Z = function() {
                return (0, r.jsx)("h1", {
                    className: "home-logo",
                    children: (0, r.jsx)("div", {
                        className: "inner",
                        children: (0, r.jsx)("span", {
                            children: "Vespera Game's Secret"
                        })
                    })
                })
            }
        },
        2743: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var r = n(5893);

            function o(e) {
                var t = e.size,
                    n = e.children.replace(/ /g, "&nbsp;"),
                    o = {
                        large: "text-5xl md:text-6xl 2xl:text-9xl 2xl:leading-snug 2xl:-mt-5 -mt-1 leading-snug",
                        regular: " leading-none text-lg md:text-xl 2xl:text-3xl"
                    },
                    s = void 0 !== o[t] ? o[t] : t;
                return (0, r.jsx)("div", {
                    className: " ".concat(s, " tracking-tight\t text-gradient block bg-gradient-to-b from-white to-gray-600 uppercase font-trajan font-light"),
                    dangerouslySetInnerHTML: {
                        __html: n
                    }
                })
            }
        }
    }
]);