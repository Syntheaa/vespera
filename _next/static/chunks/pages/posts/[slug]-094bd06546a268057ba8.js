(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7922], {
        4941: function(e, t, l) {
            "use strict";
            l.d(t, {
                Z: function() {
                    return n
                }
            });
            var s = l(5893);

            function n(e) {
                e.preview;
                var t = e.children,
                    l = e.className;
                return (0, s.jsx)("div", {
                    className: "flex-1 flex py-28 md:py-32 relative z-20 layout ".concat(l && l),
                    children: t
                })
            }
        },
        8130: function(e, t, l) {
            "use strict";
            var s = l(5893);
            t.Z = function() {
                return (0, s.jsx)("div", {
                    className: " fixed h-full bg-black   inset-0 z-50 flex items-center justify-center ",
                    children: (0, s.jsxs)("svg", {
                        class: "animate-spin h-7 w-7 text-hellblade-blue",
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        children: [(0, s.jsx)("circle", {
                            class: "opacity-25",
                            cx: "12",
                            cy: "12",
                            r: "10",
                            stroke: "currentColor",
                            "stroke-width": "4"
                        }), (0, s.jsx)("path", {
                            class: "opacity-75",
                            fill: "currentColor",
                            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        })]
                    })
                })
            }
        },
        1683: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                __N_SSG: function() {
                    return m
                },
                default: function() {
                    return v
                }
            });
            var s = l(1163),
                n = (l(2918), l(9008)),
                a = l(8098),
                i = l(4941),
                r = (l(5675), l(1664)),
                d = l(5893),
                c = function(e) {
                    var t = e.posts,
                        l = e.path,
                        s = e.title;
                    return (0, d.jsxs)("div", {
                        className: "mb-16 md:mb-28",
                        children: [(0, d.jsx)("h2", {
                            className: "uppercase font-proxima-nova-extra-condensed font-bold text-hellblade-mid-grey text-3xl\tmb-5",
                            children: s
                        }), (0, d.jsx)("ul", {
                            children: t.map((function(e) {
                                var t = e.node;
                                return (0, d.jsx)("li", {
                                    className: "mb-2 md:mb-4",
                                    children: (0, d.jsx)(r.default, {
                                        as: "/".concat(l, "/").concat(t.slug),
                                        href: "/".concat(l, "/[slug]}"),
                                        children: (0, d.jsx)("a", {
                                            className: "hover:underline hover:text-white text-hellblade-blue",
                                            children: t.title ? t.title : t.name
                                        })
                                    })
                                }, t.slug)
                            }))
                        })]
                    })
                };

            function o() {
                return (0, d.jsxs)("a", {
                    href: "#",
                    className: "back-button uppercase font-proxima-nova-extra-condensed font-bold hover:text-hellblade-mid-grey mb-10",
                    onClick: function(e) {
                        e.preventDefault(), s.default.back()
                    },
                    children: [(0, d.jsx)("span", {
                        className: "hidden md:inline",
                        children: "Go"
                    }), "\xa0Back"]
                })
            }
            var u = l(6666),
                x = l(8130),
                m = !0;

            function v(e) {
                var t, l, r, m = e.post,
                    v = e.posts,
                    h = e.preview,
                    f = (0, s.useRouter)(),
                    p = null === v || void 0 === v ? void 0 : v.edges,
                    g = null !== m && void 0 !== m && null !== (t = m.featuredImage) && void 0 !== t && t.node.sourceUrl ? null === m || void 0 === m ? void 0 : m.featuredImage.node.sourceUrl : "/placeholder.jpg";
                return f.isFallback ? (0, d.jsx)(x.Z, {}) : (0, d.jsx)("div", {
                    className: " z-10 w-full",
                    children: (0, d.jsx)(i.Z, {
                        preview: h,
                        children: (0, d.jsx)("div", {
                            className: "wrapper relative z-20",
                            children: (0, d.jsxs)("article", {
                                children: [(0, d.jsxs)(n.default, {
                                    children: [(0, d.jsxs)("title", {
                                        children: [m.title, " | ", a.yf]
                                    }), (0, d.jsx)("meta", {
                                        property: "og:image",
                                        content: null === m || void 0 === m || null === (l = m.featuredImage) || void 0 === l || null === (r = l.node) || void 0 === r ? void 0 : r.sourceUrl
                                    })]
                                }), (0, d.jsx)(o, {}), (0, d.jsxs)("div", {
                                    className: " max-w-3xl -bg-green-500",
                                    children: [(0, d.jsx)("time", {
                                        className: " text-hellblade-orange font-proxima-nova-extra-condensed font-light uppercase text-2xl\t md:text-3xl\t",
                                        dateTime: (0, u.p)(null === m || void 0 === m ? void 0 : m.date),
                                        children: (0, u.p)(null === m || void 0 === m ? void 0 : m.date)
                                    }), (0, d.jsx)("h1", {
                                        className: "font-proxima-nova-extra-condensed font-bold uppercase text-4xl\t md:text-6xl leading-title-tight mb-10",
                                        children: null === m || void 0 === m ? void 0 : m.title
                                    })]
                                }), (0, d.jsxs)("div", {
                                    className: "md:flex flex-wrap ",
                                    children: [(0, d.jsx)("div", {
                                        className: "bg-red-600- md:w-3/4",
                                        children: (0, d.jsxs)("div", {
                                            className: " md:max-w-3xl -bg-green-500",
                                            children: [(0, d.jsx)("div", {
                                                className: "relative overflow-hidden pb-16/9 bg-black mb-10",
                                                children: g && (0, d.jsx)("img", {
                                                    className: " absolute inset-0 center-center",
                                                    alt: "",
                                                    src: g
                                                })
                                            }), (0, d.jsx)("div", {
                                                className: "body",
                                                dangerouslySetInnerHTML: {
                                                    __html: null === m || void 0 === m ? void 0 : m.content
                                                }
                                            })]
                                        })
                                    }), (0, d.jsxs)("div", {
                                        className: "bg-blue-200- md:w-1/4 mt-20 md:mt-0 sticky top-0 ",
                                        children: [p && (0, d.jsx)(c, {
                                            title: "Recent Posts",
                                            path: "posts",
                                            posts: p
                                        }), m.tags.edges.length > 0 && (0, d.jsx)(c, {
                                            title: "Tags",
                                            path: "tag",
                                            posts: null === m || void 0 === m ? void 0 : m.tags.edges
                                        })]
                                    })]
                                })]
                            })
                        })
                    })
                })
            }
        },
        9808: function(e, t, l) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/posts/[slug]", function() {
                return l(1683)
            }])
        },
        2918: function(e, t, l) {
            e.exports = l(3359)
        }
    },
    function(e) {
        e.O(0, [5675, 9774, 2888, 179], (function() {
            return t = 9808, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);