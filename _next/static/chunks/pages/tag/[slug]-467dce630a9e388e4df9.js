(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6369], {
        4941: function(e, t, s) {
            "use strict";
            s.d(t, {
                Z: function() {
                    return r
                }
            });
            var n = s(5893);

            function r(e) {
                e.preview;
                var t = e.children,
                    s = e.className;
                return (0, n.jsx)("div", {
                    className: "flex-1 flex py-28 md:py-32 relative z-20 layout ".concat(s && s),
                    children: t
                })
            }
        },
        8130: function(e, t, s) {
            "use strict";
            var n = s(5893);
            t.Z = function() {
                return (0, n.jsx)("div", {
                    className: " fixed h-full bg-black   inset-0 z-50 flex items-center justify-center ",
                    children: (0, n.jsxs)("svg", {
                        class: "animate-spin h-7 w-7 text-hellblade-blue",
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        children: [(0, n.jsx)("circle", {
                            class: "opacity-25",
                            cx: "12",
                            cy: "12",
                            r: "10",
                            stroke: "currentColor",
                            "stroke-width": "4"
                        }), (0, n.jsx)("path", {
                            class: "opacity-75",
                            fill: "currentColor",
                            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        })]
                    })
                })
            }
        },
        6353: function(e, t, s) {
            "use strict";
            var n = s(1664),
                r = s(6666),
                l = s(5893);
            t.Z = function(e) {
                var t, s = e.post,
                    a = null !== (t = s.featuredImage) && void 0 !== t && t.node.sourceUrl ? s.featuredImage.node.sourceUrl : "/placeholder.jpg";
                return (0, l.jsx)("div", {
                    className: "my-10 ",
                    children: (0, l.jsx)(n.default, {
                        as: "/posts/".concat(s.slug),
                        href: "/posts/[slug]",
                        children: (0, l.jsxs)("a", {
                            className: " hover:opacity-75 relative flex flex-col-reverse",
                            children: [(0, l.jsxs)("div", {
                                className: "mt-5",
                                children: [(0, l.jsx)("time", {
                                    className: " text-hellblade-orange font-proxima-nova-extra-condensed font-light uppercase text-3xl\tblock",
                                    dateTime: (0, r.p)(s.date),
                                    children: (0, r.p)(s.date)
                                }), (0, l.jsx)("p", {
                                    className: "uppercase font-proxima-nova-extra-condensed font-bold text-3xl block mb-5",
                                    children: s.title
                                })]
                            }), (0, l.jsx)("div", {
                                className: "image-wrapper max-w-lg bg-black",
                                children: a && (0, l.jsx)("img", {
                                    className: " absolute inset-0 center-center",
                                    alt: "",
                                    src: a
                                })
                            })]
                        })
                    })
                })
            }
        },
        2743: function(e, t, s) {
            "use strict";
            s.d(t, {
                Z: function() {
                    return r
                }
            });
            var n = s(5893);

            function r(e) {
                var t = e.size,
                    s = e.children.replace(/ /g, "&nbsp;"),
                    r = {
                        large: "text-5xl md:text-6xl 2xl:text-9xl 2xl:leading-snug 2xl:-mt-5 -mt-1 leading-snug",
                        regular: " leading-none text-lg md:text-xl 2xl:text-3xl"
                    },
                    l = void 0 !== r[t] ? r[t] : t;
                return (0, n.jsx)("div", {
                    className: " ".concat(l, " tracking-tight\t text-gradient block bg-gradient-to-b from-white to-gray-600 uppercase font-trajan font-light"),
                    dangerouslySetInnerHTML: {
                        __html: s
                    }
                })
            }
        },
        7230: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                __N_SSG: function() {
                    return d
                },
                default: function() {
                    return u
                }
            });
            var n = s(1163),
                r = s(2918),
                l = s(4941),
                a = s(2743),
                c = s(6353),
                i = s(8130),
                o = s(5893),
                d = !0;

            function u(e) {
                var t = e.posts,
                    s = e.preview,
                    d = e.slug,
                    u = e.tag,
                    x = (0, n.useRouter)();
                return x.isFallback || u ? (0, o.jsx)(l.Z, {
                    preview: s,
                    children: (0, o.jsx)("div", {
                        className: "wrapper",
                        children: x.isFallback ? (0, o.jsx)(i.Z, {}) : (0, o.jsxs)(o.Fragment, {
                            children: [(0, o.jsxs)("h1", {
                                children: [(0, o.jsx)(a.Z, {
                                    size: "small",
                                    children: "Tag"
                                }), (0, o.jsx)(a.Z, {
                                    size: "regular",
                                    children: d
                                })]
                            }), (0, o.jsxs)("div", {
                                className: " max-w-3xl -bg-green-500",
                                children: [t.edges.length > 0 && t.edges.map((function(e, t) {
                                    var s = e.node;
                                    return (0, o.jsx)(c.Z, {
                                        post: s
                                    }, t)
                                })), 0 === t.edges.length && (0, o.jsx)("div", {
                                    children: "No posts"
                                })]
                            })]
                        })
                    })
                }) : (0, o.jsx)(r.default, {
                    statusCode: 404
                })
            }
        },
        4987: function(e, t, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/tag/[slug]", function() {
                return s(7230)
            }])
        },
        2918: function(e, t, s) {
            e.exports = s(3359)
        }
    },
    function(e) {
        e.O(0, [9774, 2888, 179], (function() {
            return t = 4987, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);