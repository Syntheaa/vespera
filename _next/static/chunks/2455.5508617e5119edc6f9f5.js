"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2455], {
        2455: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var i = n(2809),
                a = n(2212),
                r = n(9158),
                u = n(7294),
                o = n(8940),
                s = n(5716),
                c = n(5893),
                h = function() {
                    var e = (0, r.U2)(a.TextureLoader, "/mhs-bkg.jpg"),
                        t = (0, r.Ky)().viewport,
                        n = 96 * t.width * 1 / 96,
                        h = 59 * t.width * 1 / 96,
                        f = 0;
                    if (t.height > h) {
                        var p = t.height / h;
                        h *= p, n *= p;
                        var l = t.width / 2;
                        f = l - n / 2 - .75 * (l - n / 2)
                    }
                    var d = t.height / 2 - h / 2,
                        v = [n, h, 1],
                        g = (0, o.o)((function(e) {
                            return e.mhsOpacity
                        })),
                        m = (0, o.o)((function(e) {
                            return e.setMhsOpacity
                        }));
                    return (0, u.useEffect)((function() {
                        var e = {
                            value: 0
                        };
                        s.Q3.to(e, .5, {
                            value: 1,
                            onUpdate: function() {
                                m(e.value)
                            },
                            onComplete: function() {}
                        })
                    }), []), (0, c.jsxs)("mesh", {
                        scale: v,
                        position: [f, d, 0],
                        children: [(0, c.jsx)("planeBufferGeometry", {}), (0, c.jsx)("meshBasicMaterial", (0, i.Z)({
                            transparent: !0,
                            map: e,
                            opacity: 1,
                            depthTest: !1,
                            blending: a.AdditiveBlending
                        }, "opacity", g.value))]
                    })
                }
        }
    }
]);