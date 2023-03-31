"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8923], {
        8923: function(e, n, t) {
            t.r(n), t.d(n, {
                default: function() {
                    return v
                }
            });
            var r = t(7294),
                o = t(9158),
                i = t(2212),
                s = (0, t(9137).g)({
                    uTime: 0,
                    progress: 5,
                    resolution: new i.Vector2
                }, "varying vec2 vUv;\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", "\n\nvarying vec2 vUv; \nuniform float uTime;\nuniform float progress;\nuniform vec2 resolution;\n\nfloat dist(vec2 p0, vec2 pf){return sqrt((pf.x-p0.x)*(pf.x-p0.x)+(pf.y-p0.y)*(pf.y-p0.y));}\n\n\n\nvoid main() {\n\n   vec2 st = vUv;\n   float pct = 0.0;\n\n  // // a. The DISTANCE from the pixel to the center\n  pct = distance(vec2(st.x,st.y),vec2(0.5)) * progress;\n  pct = smoothstep(0.4,0.5, pct);\n\n\n  vec3 color = vec3(pct);\n\n  gl_FragColor = vec4( color * vec3(0.0,0.0,0.0), pct );\n\n\n}\n\n");
            (0, o.l7)({
                ScreenSwipeMaterial: s
            });
            var c = t(8940),
                u = t(5716),
                a = t(5893),
                v = function(e) {
                    e.state;
                    var n = (0, o.Ky)(),
                        t = n.viewport,
                        i = n.size,
                        s = (0, r.useRef)(),
                        v = (0, c.o)((function(e) {
                            return e.swipeProgress
                        })),
                        p = (0, c.o)((function(e) {
                            return e.setSwipeProgress
                        })),
                        f = (0, c.o)((function(e) {
                            return e.setShowHero
                        }));
                    return (0, r.useEffect)((function() {
                        s.current.uniforms.resolution.value.x = i.width, s.current.uniforms.resolution.value.y = i.height;
                        var e = {
                            value: v.value
                        };
                        u.Q3.to(e, 2, {
                            value: 0,
                            onUpdate: function() {
                                p(e.value)
                            },
                            onComplete: function() {
                                f()
                            }
                        })
                    }), []), (0, a.jsxs)("mesh", {
                        scale: [t.width, t.height, 1],
                        "position-z": 8,
                        children: [(0, a.jsx)("planeBufferGeometry", {
                            args: [1, 1]
                        }), (0, a.jsx)("screenSwipeMaterial", {
                            ref: s,
                            transparent: !0,
                            progress: v.value
                        })]
                    })
                }
        }
    }
]);