(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [214], {
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
        9960: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                __N_SSG: function() {
                    return x
                },
                default: function() {
                    return m
                }
            });
            var r = n(4941),
                l = n(2743),
                o = n(9566),
                i = n.n(o),
                u = n(2879),
                c = (n(2062), n(7294)),
                a = n(8940),
                s = n(9008),
                f = n(8098),
                d = n(5893),
                h = {
                    fitWidth: !1,
                    gutter: 0,
                    itemSelector: ".photo-item",
                    columnWidth: ".grid-sizer",
                    percentPosition: !0
                },
                g = function(e) {
                    var t = e.label,
                        n = e.filter,
                        r = e.currentFilter,
                        l = e.onClick,
                        o = (0, a.o)((function(e) {
                            return e.setHovered
                        }));
                    return (0, d.jsx)("button", {
                        onClick: l,
                        onMouseEnter: function() {
                            return o(!0)
                        },
                        onMouseLeave: function() {
                            return o(!1)
                        },
                        className: "".concat(n === r ? "bg-black text-white border-black" : "text-gray-8E8E8E border-gray-585959 hover:bg-black hover:text-white hover:border-black", " uppercase rounded border w-24 h-8 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-10"),
                        children: t
                    })
                },
                x = !0;

            function m(e) {
                var t = e.gallery,
                    n = e.preview,
                    o = (0, c.useState)("All"),
                    x = o[0],
                    m = o[1],
                    p = (0, c.useState)(0),
                    v = p[0],
                    b = p[1],
                    w = (0, c.useState)(!1),
                    y = w[0],
                    j = w[1],
                    N = (0, c.useState)(t),
                    _ = N[0],
                    k = N[1],
                    S = (0, a.o)((function(e) {
                        return e.setHovered
                    })),
                    E = (0, c.useState)(0),
                    C = E[0],
                    M = E[1],
                    z = t.reduce((function(e, t) {
                        return !e.includes(t.category) && e.push(t.category), e
                    }), ["All"]);
                return (0, d.jsxs)(r.Z, {
                    preview: n,
                    children: [(0, d.jsx)(s.default, {
                        children: (0, d.jsxs)("title", {
                            children: ["Gallery | ", f.yf]
                        })
                    }), (0, d.jsxs)("div", {
                        className: "wrapper relative z-20 min-h-screen",
                        children: [(0, d.jsx)("h1", {
                            children: (0, d.jsx)(l.Z, {
                                size: "large",
                                children: "Gallery"
                            })
                        }), (0, d.jsx)("div", {
                            className: "flex space-x-5 mt-5 mb-10",
                            children: z.map((function(e, n) {
                                return (0, d.jsx)(g, {
                                    onClick: function() {
                                        m(e), k((function() {
                                            return t.filter((function(t) {
                                                return "All" === e || t.category === e
                                            }))
                                        }))
                                    },
                                    label: e,
                                    filter: e,
                                    currentFilter: x
                                }, n)
                            }))
                        }), (0, d.jsxs)(i(), {
                            className: "photo-list -mr-2 -ml-2",
                            elementType: "ul",
                            options: h,
                            disableImagesLoaded: !1,
                            updateOnEachImageLoad: !1,
                            onLayoutComplete: function() {
                                M(100)
                            },
                            children: [(0, d.jsx)("div", {
                                className: "grid-sizer w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
                            }), _.map((function(e, t) {
                                return (0, d.jsx)("li", {
                                    className: "photo-item-".concat(t, " photo-item w-full md:w-1/2 lg:w-1/3 xl:w-1/4  p-2 ").concat((n = e.category, "All" == x || n === x ? "" : "hidden")),
                                    children: (0, d.jsx)("button", {
                                        className: "focus:outline-none focus:ring-opacity-20 focus:ring-2 focus:ring-white transition-opacity duration-200 hover:opacity-75 w-full",
                                        onMouseEnter: function() {
                                            return S(!0)
                                        },
                                        onMouseLeave: function() {
                                            return S(!1)
                                        },
                                        onClick: function() {
                                            var t = _.findIndex((function(t) {
                                                return t.full == e.full
                                            }));
                                            b(t), j(!0)
                                        },
                                        children: (0, d.jsx)("img", {
                                            className: "block w-full transition-opacity duration-200 ease-in-out opacity-".concat(C),
                                            src: e.thumb,
                                            alt: e.title
                                        })
                                    })
                                }, e.id);
                                var n
                            }))]
                        }), y && (0, d.jsx)(u.Z, {
                            enableZoom: !1,
                            mainSrc: _[v].full,
                            nextSrc: _[(v + 1) % _.length].full,
                            prevSrc: _[(v + _.length - 1) % _.length].full,
                            onCloseRequest: function() {
                                return j(!1)
                            },
                            onMovePrevRequest: function() {
                                return b((v + _.length - 1) % _.length)
                            },
                            onMoveNextRequest: function() {
                                return b((v + 1) % _.length)
                            }
                        })]
                    })]
                })
            }
        },
        7899: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/gallery", function() {
                return n(9960)
            }])
        }
    },
    function(e) {
        e.O(0, [6733, 9774, 2888, 179], (function() {
            return t = 7899, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);