(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2679], {
        4941: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return l
                }
            });
            var r = n(5893);

            function l(e) {
                e.preview;
                var t = e.children,
                    n = e.className;
                return (0, r.jsx)("div", {
                    className: "flex-1 flex py-28 md:py-32 relative z-20 layout ".concat(n && n),
                    children: t
                })
            }
        },
        2743: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return l
                }
            });
            var r = n(5893);

            function l(e) {
                var t = e.size,
                    n = e.children.replace(/ /g, "&nbsp;"),
                    l = {
                        large: "text-5xl md:text-6xl 2xl:text-9xl 2xl:leading-snug 2xl:-mt-5 -mt-1 leading-snug",
                        regular: " leading-none text-lg md:text-xl 2xl:text-3xl"
                    },
                    o = void 0 !== l[t] ? l[t] : t;
                return (0, r.jsx)("div", {
                    className: " ".concat(o, " tracking-tight\t text-gradient block bg-gradient-to-b from-white to-gray-600 uppercase font-trajan font-light"),
                    dangerouslySetInnerHTML: {
                        __html: n
                    }
                })
            }
        },
        8e3: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                __N_SSG: function() {
                    return u
                },
                default: function() {
                    return s
                }
            });
            n(9008);
            var r = n(4941),
                l = n(2743),
                o = n(8940),
                i = n(7294),
                c = n(5893),
                u = !0;

            function s(e) {
                var t = e.allPosts,
                    n = e.preview,
                    u = (0, o.o)((function(e) {
                        return e.currentFilter
                    })),
                    s = (0, o.o)((function(e) {
                        return e.setCurrentFilter
                    })),
                    a = (0, o.o)((function(e) {
                        return e.allPosts
                    })),
                    f = (0, o.o)((function(e) {
                        return e.setAllPosts
                    })),
                    d = (0, o.o)((function(e) {
                        return e.setFilteredPosts
                    })),
                    x = (0, o.o)((function(e) {
                        return e.offSet
                    })),
                    v = t.reduce((function(e, t) {
                        return !e.includes(t.year) && e.push(t.year), e
                    }), ["All"]);
                (0, i.useEffect)((function() {
                    0 === a.length && (f(t), d(t));
                    var e = document.querySelector(".scrollArea");
                    e && e.scrollTo(0, x)
                }), []);
                var g = function(e) {
                    var t = e.label,
                        n = e.filter,
                        r = e.currentFilter,
                        l = e.onClick,
                        i = (0, o.o)((function(e) {
                            return e.setHovered
                        }));
                    return (0, c.jsx)("button", {
                        onClick: l,
                        onMouseEnter: function() {
                            return i(!0)
                        },
                        onMouseLeave: function() {
                            return i(!1)
                        },
                        className: "".concat(n === r ? "bg-black text-white border-black" : "text-gray-8E8E8E border-gray-585959 hover:bg-black hover:text-white hover:border-black", " uppercase rounded border w-24 h-8 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-10 mb-5"),
                        children: t
                    })
                };
                return (0, c.jsxs)(c.Fragment, {
                    children: [t.length > 0 && (0, c.jsx)("div", {
                        className: "timeline layout"
                    }), (0, c.jsxs)(r.Z, {
                        preview: n,
                        className: "pointer-events-none flex-col relative",
                        children: [(0, c.jsxs)("div", {
                            className: "wrapper relative z-20",
                            children: [(0, c.jsx)(l.Z, {
                                size: "regular",
                                children: "Development"
                            }), (0, c.jsx)(l.Z, {
                                size: "large",
                                children: "Blog"
                            })]
                        }), t.length > 0 && (0, c.jsx)(c.Fragment, {
                            children: (0, c.jsx)("div", {
                                className: " pointer-events-none absolute w-full left-0 top-44 ",
                                children: (0, c.jsx)("div", {
                                    className: "  pt-4 lg:pt-0 wrapper flex justify-end space-x-5 pointer-events-auto",
                                    children: v.map((function(e) {
                                        return (0, c.jsx)(g, {
                                            onClick: function() {
                                                s(e);
                                                var n = t.filter((function(t) {
                                                    return "All" === e ? t : t.year === e
                                                }));
                                                d(n);
                                                var r = document.querySelector(".scrollArea");
                                                r.scrollTop;
                                                r.scrollTo(0, 0)
                                            },
                                            label: e,
                                            filter: e,
                                            currentFilter: u
                                        }, e)
                                    }))
                                })
                            })
                        })]
                    })]
                })
            }
        },
        313: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/posts", function() {
                return n(8e3)
            }])
        }
    },
    function(e) {
        e.O(0, [9774, 2888, 179], (function() {
            return t = 313, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);