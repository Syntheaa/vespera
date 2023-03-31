"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6202], {
        6202: function(e, t, r) {
            r.r(t);
            var n = r(2809),
                o = r(6311),
                i = r(2212),
                c = r(7294),
                s = r(9158),
                a = r(5893);

            function p(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }
            var u = function(e) {
                var t = e.position,
                    r = (e.rotation, e.color, e.index, e.texture),
                    n = e.scale,
                    o = e.opacity,
                    i = e.speed,
                    p = (0, c.useRef)();
                return (0, s.xQ)((function() {
                    p.current && (p.current.rotation.z += 3e-4 * i)
                })), (0, a.jsxs)("mesh", {
                    ref: p,
                    position: t,
                    scale: [n, n, 0],
                    children: [(0, a.jsx)("planeBufferGeometry", {
                        args: [1, 1]
                    }), (0, a.jsx)("meshBasicMaterial", {
                        depthTest: !1,
                        opacity: o,
                        map: r,
                        transparent: !0
                    })]
                })
            };
            t.default = function(e) {
                e.state;
                var t = (0, s.U2)(i.TextureLoader, ["/smoke-1.png", "/smoke-2.png"]),
                    r = (0, o.Z)(t, 2),
                    f = r[0],
                    h = r[1],
                    l = (0, s.Ky)(),
                    y = l.viewport,
                    d = l.size,
                    x = (new i.Vector3, d.height, y.height, (0, c.useRef)()),
                    g = [{
                        x: y.width / 2,
                        y: 0,
                        scale: 20,
                        opacity: .5,
                        speed: 1,
                        texture: f
                    }, {
                        x: y.width / 1.5,
                        y: -y.height / 2,
                        scale: 30,
                        opacity: .5,
                        speed: 1.3,
                        texture: h
                    }, {
                        x: -y.width / 2,
                        y: y.height / 9,
                        scale: 20,
                        opacity: .5,
                        speed: -.5,
                        texture: h
                    }, {
                        x: -y.width / 3,
                        y: -y.height / 2,
                        scale: 15,
                        opacity: .5,
                        speed: -.75,
                        texture: f
                    }],
                    j = (0, c.useMemo)((function() {
                        return g.map((function(e, t) {
                            return {
                                position: [e.x, e.y, 1],
                                rotation: [0, 0, 360 * Math.random()],
                                color: "red",
                                index: t,
                                texture: e.texture,
                                scale: e.scale,
                                opacity: e.opacity,
                                speed: e.speed
                            }
                        }))
                    }), [1]);
                return (0, a.jsx)("group", {
                    position: [0, 0, -1],
                    scale: [1, 1, 1],
                    children: (0, a.jsx)("group", {
                        ref: x,
                        children: j.map((function(e, t) {
                            return (0, a.jsx)(u, function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? p(Object(r), !0).forEach((function(t) {
                                        (0, n.Z)(e, t, r[t])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach((function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                    }))
                                }
                                return e
                            }({}, e), t)
                        }))
                    })
                })
            }
        }
    }
]);