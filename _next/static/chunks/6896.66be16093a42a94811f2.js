"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6896], {
        6896: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var o = n(5152),
                s = n(2212),
                r = n(7294),
                i = n(9158),
                u = n(8940),
                a = n(5893),
                c = (0, o.default)((function() {
                    return Promise.all([n.e(8011), n.e(5716), n.e(8863), n.e(2156), n.e(9751)]).then(n.bind(n, 9751))
                }), {
                    ssr: !1,
                    loadableGenerated: {
                        webpack: function() {
                            return [9751]
                        },
                        modules: ["../components/Home/Posts/Posts.js -> components/Home/Posts/Post"]
                    }
                }),
                l = function(e) {
                    var t = e.state,
                        n = (0, r.useRef)(),
                        o = (0, i.Ky)(),
                        l = o.viewport,
                        f = o.size,
                        h = (new s.Vector3, f.height, l.height, Math.min(1, l.width / 16)),
                        p = f.width < 768,
                        d = (0, u.o)((function(e) {
                            return e.postsY
                        })),
                        m = (0, u.o)((function(e) {
                            return e.filteredPosts
                        })),
                        w = 0,
                        P = !1;
                    return (0, a.jsx)("group", {
                        position: [-20 === d.value ? -100 : 0, p ? -4 : 0, d.value],
                        children: (0, a.jsx)("group", {
                            ref: n,
                            "position-z": 0,
                            children: m.slice(0, 100).map((function(e, n) {
                                return P = !1, w !== e.year && (w = e.year, P = !0), (0, a.jsx)(c, {
                                    textScaleFactor: h,
                                    post: e,
                                    year: w,
                                    showYear: P,
                                    index: n,
                                    state: t,
                                    y: -10 * n
                                }, n)
                            }))
                        })
                    })
                }
        }
    }
]);