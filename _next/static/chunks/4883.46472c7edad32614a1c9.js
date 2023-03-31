"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4883], {
        4883: function(e, t, a) {
            a.r(t), a.d(t, {
                default: function() {
                    return f
                }
            });
            var n = a(2809),
                i = a(6311),
                r = a(2212),
                u = a(9158),
                o = a(7294),
                c = a(8940),
                s = a(5716),
                h = a(5893),
                f = function() {
                    var e = (0, u.U2)(r.TextureLoader, ["/aaa-background.jpg"]),
                        t = (0, i.Z)(e, 1)[0],
                        a = (0, u.Ky)(),
                        f = a.viewport,
                        p = (a.size.width, 1920),
                        d = p * f.width * 1 / p,
                        l = 1440 * f.width * 1 / p,
                        v = 0;
                    if (f.height > l) {
                        var g = f.height / l;
                        l *= g, d *= g;
                        var w = f.width / 2;
                        v = w - d / 2 - .75 * (w - d / 2)
                    }
                    var y = f.height / 2 - l / 2,
                        k = [d, l, 1],
                        m = (0, c.o)((function(e) {
                            return e.aaaOpacity
                        })),
                        b = (0, c.o)((function(e) {
                            return e.setAAAOpacity
                        }));
                    return (0, o.useEffect)((function() {
                        var e = {
                            value: 0
                        };
                        s.Q3.to(e, .5, {
                            value: 1,
                            onUpdate: function() {
                                b(e.value)
                            },
                            onComplete: function() {}
                        })
                    }), []), (0, h.jsxs)("mesh", {
                        scale: k,
                        position: [v, y, 0],
                        children: [(0, h.jsx)("planeBufferGeometry", {}), (0, h.jsx)("meshBasicMaterial", (0, n.Z)({
                            transparent: !0,
                            map: t,
                            opacity: 1,
                            depthTest: !1,
                            blending: r.AdditiveBlending
                        }, "opacity", m.value))]
                    })
                }
        }
    }
]);