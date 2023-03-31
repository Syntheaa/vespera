"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6132], {
        7854: function(e, t, r) {
            r.d(t, {
                V: function() {
                    return y
                }
            });
            var n = r(7462),
                s = r(3366),
                o = r(7294),
                a = r(3935),
                i = r(2212),
                l = r(9158);
            const c = new i.Vector3,
                u = new i.Vector3,
                d = new i.Vector3;

            function p(e, t, r) {
                const n = c.setFromMatrixPosition(e.matrixWorld);
                n.project(t);
                const s = r.width / 2,
                    o = r.height / 2;
                return [n.x * s + s, -n.y * o + o]
            }
            const h = e => Math.abs(e) < 1e-10 ? 0 : e;

            function m(e, t, r = "") {
                let n = "matrix3d(";
                for (let s = 0; 16 !== s; s++) n += h(t[s] * e.elements[s]) + (15 !== s ? "," : ")");
                return r + n
            }
            const f = (x = [1, -1, 1, 1, 1, -1, 1, 1, 1, -1, 1, 1, 1, -1, 1, 1], e => m(e, x));
            var x;
            const v = (e, t) => {
                    return m(e, [1 / (r = t), 1 / r, 1 / r, 1, -1 / r, -1 / r, -1 / r, -1, 1 / r, 1 / r, 1 / r, 1, 1, 1, 1, 1], "translate(-50%,-50%)");
                    var r
                },
                y = (0, o.forwardRef)(((e, t) => {
                    var r;
                    let {
                        children: m,
                        eps: x = .001,
                        style: y,
                        className: g,
                        prepend: w,
                        center: M,
                        fullscreen: b,
                        portal: P,
                        distanceFactor: C,
                        sprite: E = !1,
                        transform: W = !1,
                        zIndexRange: z = [16777271, 0],
                        calculatePosition: j = p
                    } = e, F = (0, s.Z)(e, ["children", "eps", "style", "className", "prepend", "center", "fullscreen", "portal", "distanceFactor", "sprite", "transform", "zIndexRange", "calculatePosition"]);
                    const {
                        gl: N,
                        scene: R,
                        camera: k,
                        size: I
                    } = (0, l.Ky)(), [V] = (0, o.useState)((() => document.createElement("div"))), T = (0, o.useRef)(null), Z = (0, o.useRef)(0), _ = (0, o.useRef)([0, 0]), B = (0, o.useRef)(null), O = (0, o.useRef)(null), A = null != (r = null == P ? void 0 : P.current) ? r : N.domElement.parentNode;
                    (0, o.useEffect)((() => {
                        if (T.current) {
                            if (R.updateMatrixWorld(), W) V.style.cssText = "position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";
                            else {
                                const e = j(T.current, k, I);
                                V.style.cssText = "position:absolute;top:0;left:0;transform:translate3d(" + e[0] + "px," + e[1] + "px,0);transform-origin:0 0;"
                            }
                            return A && (w ? A.prepend(V) : A.appendChild(V)), () => {
                                A && A.removeChild(V), (0, a.unmountComponentAtNode)(V)
                            }
                        }
                    }), [A, W]);
                    const K = (0, o.useMemo)((() => W ? {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: I.width,
                            height: I.height,
                            transformStyle: "preserve-3d",
                            pointerEvents: "none"
                        } : (0, n.Z)({
                            position: "absolute",
                            transform: M ? "translate3d(-50%,-50%,0)" : "none"
                        }, b && {
                            top: -I.height / 2,
                            left: -I.width / 2,
                            width: I.width,
                            height: I.height
                        }, y)), [y, M, b, I, W]),
                        S = (0, o.useMemo)((() => (0, n.Z)({
                            position: "absolute",
                            pointerEvents: "auto"
                        }, y)), [y]);
                    return (0, o.useLayoutEffect)((() => {
                        W ? (0, a.render)((0, o.createElement)("div", {
                            ref: B,
                            style: K
                        }, (0, o.createElement)("div", {
                            ref: O,
                            style: S
                        }, (0, o.createElement)("div", {
                            ref: t,
                            className: g,
                            children: m
                        }))), V) : (0, a.render)((0, o.createElement)("div", {
                            ref: t,
                            style: K,
                            className: g,
                            children: m
                        }), V)
                    })), (0, l.xQ)((() => {
                        if (T.current) {
                            k.updateMatrixWorld();
                            const e = W ? _.current : j(T.current, k, I);
                            if (W || Math.abs(Z.current - k.zoom) > x || Math.abs(_.current[0] - e[0]) > x || Math.abs(_.current[1] - e[1]) > x) {
                                if (V.style.display = function(e, t) {
                                        const r = c.setFromMatrixPosition(e.matrixWorld),
                                            n = u.setFromMatrixPosition(t.matrixWorld),
                                            s = r.sub(n),
                                            o = t.getWorldDirection(d);
                                        return s.angleTo(o) > Math.PI / 2
                                    }(T.current, k) ? "none" : "block", V.style.zIndex = "" + function(e, t, r) {
                                        if (t instanceof i.PerspectiveCamera || t instanceof i.OrthographicCamera) {
                                            const n = c.setFromMatrixPosition(e.matrixWorld),
                                                s = u.setFromMatrixPosition(t.matrixWorld),
                                                o = n.distanceTo(s),
                                                a = (r[1] - r[0]) / (t.far - t.near),
                                                i = r[1] - a * t.far;
                                            return Math.round(a * o + i)
                                        }
                                    }(T.current, k, z), W) {
                                    const [e, t] = [I.width / 2, I.height / 2], r = k.projectionMatrix.elements[5] * t, {
                                        isOrthographicCamera: n,
                                        top: s,
                                        left: o,
                                        bottom: a,
                                        right: i
                                    } = k, l = f(k.matrixWorldInverse), c = n ? "scale(" + r + ")translate(" + h(-(i + o) / 2) + "px," + h((s + a) / 2) + "px)" : "translateZ(" + r + "px)";
                                    let u = T.current.matrixWorld;
                                    E && (u = k.matrixWorldInverse.clone().transpose().copyPosition(u).scale(T.current.scale), u.elements[3] = u.elements[7] = u.elements[11] = 0, u.elements[15] = 1), V.style.width = I.width + "px", V.style.height = I.height + "px", V.style.perspective = n ? "" : r + "px", B.current && O.current && (B.current.style.transform = "" + c + l + "translate(" + e + "px," + t + "px)", O.current.style.transform = v(u, 1 / ((C || 10) / 400)))
                                } else {
                                    const t = void 0 === C ? 1 : function(e, t) {
                                        if (t instanceof i.OrthographicCamera) return t.zoom;
                                        if (t instanceof i.PerspectiveCamera) {
                                            const r = c.setFromMatrixPosition(e.matrixWorld),
                                                n = u.setFromMatrixPosition(t.matrixWorld),
                                                s = t.fov * Math.PI / 180,
                                                o = r.distanceTo(n);
                                            return 1 / (2 * Math.tan(s / 2) * o)
                                        }
                                        return 1
                                    }(T.current, k) * C;
                                    V.style.transform = "translate3d(" + e[0] + "px," + e[1] + "px,0) scale(" + t + ")"
                                }
                                _.current = e, Z.current = k.zoom
                            }
                        }
                    })), (0, o.createElement)("group", (0, n.Z)({}, F, {
                        ref: T
                    }))
                }))
        },
        1140: function(e, t, r) {
            r.r(t), r.d(t, {
                default: function() {
                    return a
                }
            });
            var n = r(9158),
                s = (r(5714), r(7854)),
                o = r(5893),
                a = function() {
                    var e = (0, n.Ky)(),
                        t = e.viewport;
                    e.size;
                    return (0, o.jsxs)("group", {
                        children: [(0, o.jsxs)("mesh", {
                            "position-z": 1,
                            scale: [t.width, t.height, 1],
                            children: [(0, o.jsx)("planeBufferGeometry", {
                                args: [1, 1, 1, 1]
                            }), (0, o.jsx)("meshBasicMaterial", {
                                color: "#000",
                                transparent: !0,
                                opacity: .4
                            })]
                        }), (0, o.jsx)(s.V, {
                            children: (0, o.jsxs)("svg", {
                                class: "animate-spin h-7 w-7 text-hellblade-blue",
                                xmlns: "",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                children: [(0, o.jsx)("circle", {
                                    class: "opacity-25",
                                    cx: "12",
                                    cy: "12",
                                    r: "10",
                                    stroke: "currentColor",
                                    "stroke-width": "4"
                                }), (0, o.jsx)("path", {
                                    class: "opacity-75",
                                    fill: "currentColor",
                                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                })]
                            })
                        })]
                    })
                }
        }
    }
]);