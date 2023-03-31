"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6631], {
        6631: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n(2809),
                i = n(2212),
                r = n(9158),
                u = n(7294),
                o = n(8940),
                c = n(5716),
                f = n(5893),
                s = function() {
                    var e = (0, r.U2)(i.TextureLoader, "/faq-bkg.jpg"),
                        t = (0, r.Ky)().viewport,
                        n = 16 * t.width * 1 / 16,
                        s = 9 * t.width * 1 / 16,
                        h = 0;
                    if (t.height > s) {
                        var p = t.height / s;
                        s *= p, n *= p;
                        var l = t.width / 2;
                        h = l - n / 2 - .6 * (l - n / 2)
                    }
                    var d = t.height / 2 - s / 2,
                        v = [n, s, 1],
                        g = (0, o.o)((function(e) {
                            return e.faqOpacity
                        })),
                        w = (0, o.o)((function(e) {
                            return e.setFaqOpacity
                        }));
                    return (0, u.useEffect)((function() {
                        var e = {
                            value: 0
                        };
                        c.Q3.to(e, .5, {
                            value: 1,
                            onUpdate: function() {
                                w(e.value)
                            },
                            onComplete: function() {}
                        })
                    }), []), (0, f.jsxs)("mesh", {
                        scale: v,
                        position: [h, d, 0],
                        children: [(0, f.jsx)("planeBufferGeometry", {}), (0, f.jsx)("meshBasicMaterial", (0, a.Z)({
                            transparent: !0,
                            map: e,
                            opacity: 1,
                            depthTest: !1,
                            blending: i.AdditiveBlending
                        }, "opacity", g.value))]
                    })
                }
        }
    }
]);