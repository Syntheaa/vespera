"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5945], {
        5945: function(e, r, t) {
            t.r(r), t.d(r, {
                default: function() {
                    return i
                }
            });
            var n = t(2212),
                s = t(7294),
                u = t(9158),
                a = t(5893),
                i = function(e) {
                    var r = (0, s.useRef)(),
                        t = (0, u.Ky)(),
                        i = t.viewport,
                        c = t.size,
                        o = (new n.Vector3, e.state, (0, u.U2)(n.TextureLoader, "/rune-circle-256.png"));
                    c.height, i.height;
                    return (0, u.xQ)((function() {
                        r.current && (r.current.rotation.z = r.current.rotation.z -= .001)
                    })), (0, a.jsx)("group", {
                        position: [0, -.5, -2],
                        children: (0, a.jsxs)("mesh", {
                            ref: r,
                            scale: [14, 14, 14],
                            children: [(0, a.jsx)("planeBufferGeometry", {
                                args: [1, 1, 1, 1]
                            }), (0, a.jsx)("meshBasicMaterial", {
                                map: o,
                                transparent: !0,
                                depthTest: !0
                            })]
                        })
                    })
                }
        }
    }
]);