"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3316], {
        3316: function(t, e, a) {
            a.r(e), a.d(e, {
                default: function() {
                    return i
                }
            });
            var r = a(2212),
                n = a(7294),
                s = a(9158),
                o = a(5893);
            var i = function(t) {
                var e = t.count,
                    a = (0, n.useRef)(),
                    i = (0, s.Ky)(),
                    c = i.size,
                    u = i.viewport,
                    h = (c.width, u.width, (0, s.U2)(r.TextureLoader, "/spark-2.png")),
                    d = (0, n.useMemo)((function() {
                        return new r.Object3D
                    }), []),
                    M = (0, n.useMemo)((function() {
                        for (var t = [], a = 0; a < e; a++) {
                            var r = 100 * Math.random(),
                                n = 20 + 100 * Math.random(),
                                s = 1e-4 + Math.random() / 200,
                                o = 100 * Math.random() - 50,
                                i = 100 * Math.random() - 50,
                                c = 100 * Math.random() - 50;
                            t.push({
                                t: r,
                                factor: n,
                                speed: s,
                                xFactor: o,
                                yFactor: i,
                                zFactor: c,
                                mx: 0,
                                my: 0
                            })
                        }
                        return t
                    }), [e]);
                return (0, s.xQ)((function(t) {
                    a.current && (M.forEach((function(e, r) {
                        var n = e.t,
                            s = e.factor,
                            o = e.speed,
                            i = e.xFactor,
                            c = e.yFactor,
                            u = e.zFactor;
                        n = e.t += o / 2;
                        var h = Math.cos(n) + Math.sin(1 * n) / 10,
                            M = Math.sin(n) + Math.cos(2 * n) / 10,
                            m = Math.cos(n);
                        e.mx += .01 * (t.mouse.x - e.mx), e.my += .01 * (-1 * t.mouse.y - e.my), d.position.set(e.mx / 10 * h + i + Math.cos(n / 10 * s) + Math.sin(1 * n) * s / 10, e.my / 10 * M + c + Math.sin(n / 10 * s) + Math.cos(2 * n) * s / 10, e.my / 10 * M + u + Math.cos(n / 10 * s) + Math.sin(3 * n) * s / 10), d.rotation.set(5 * m, 5 * m, 5 * m), d.updateMatrix(), a.current.setMatrixAt(r, d.matrix)
                    })), a.current.instanceMatrix.needsUpdate = !0)
                })), (0, o.jsx)("group", {
                    "position-z": 1,
                    children: (0, o.jsxs)("instancedMesh", {
                        ref: a,
                        args: [null, null, e],
                        children: [(0, o.jsx)("sphereBufferGeometry", {
                            args: [.1, .1, 20]
                        }), (0, o.jsx)("meshBasicMaterial", {
                            map: h,
                            transparent: !1,
                            depthTest: !1,
                            blending: r.AdditiveBlending,
                            side: r.DoubleSide
                        })]
                    })
                })
            }
        }
    }
]);