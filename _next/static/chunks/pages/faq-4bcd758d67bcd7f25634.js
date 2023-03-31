(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7746], {
        4941: function(e, n, t) {
            "use strict";
            t.d(n, {
                Z: function() {
                    return l
                }
            });
            var r = t(5893);

            function l(e) {
                e.preview;
                var n = e.children,
                    t = e.className;
                return (0, r.jsx)("div", {
                    className: "flex-1 flex py-28 md:py-32 relative z-20 layout ".concat(t && t),
                    children: n
                })
            }
        },
        2743: function(e, n, t) {
            "use strict";
            t.d(n, {
                Z: function() {
                    return l
                }
            });
            var r = t(5893);

            function l(e) {
                var n = e.size,
                    t = e.children.replace(/ /g, "&nbsp;"),
                    l = {
                        large: "text-5xl md:text-6xl 2xl:text-9xl 2xl:leading-snug 2xl:-mt-5 -mt-1 leading-snug",
                        regular: " leading-none text-lg md:text-xl 2xl:text-3xl"
                    },
                    s = void 0 !== l[n] ? l[n] : n;
                return (0, r.jsx)("div", {
                    className: " ".concat(s, " tracking-tight\t text-gradient block bg-gradient-to-b from-white to-gray-600 uppercase font-trajan font-light"),
                    dangerouslySetInnerHTML: {
                        __html: t
                    }
                })
            }
        },
        830: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                __N_SSG: function() {
                    return o
                },
                default: function() {
                    return x
                }
            });
            var r = t(1163),
                l = t(2918),
                s = t(7294),
                a = t(4941),
                i = t(2743),
                c = t(9008),
                u = t(8098),
                d = t(5893),
                o = !0;

            function x(e) {
                var n, t = e.page,
                    o = e.preview;
                return (0, r.useRouter)().isFallback || null !== t && void 0 !== t && t.slug ? (0, d.jsxs)(d.Fragment, {
                    children: [(0, d.jsx)(c.default, {
                        children: (0, d.jsxs)("title", {
                            children: ["Frequently Asked Questions | ", u.yf]
                        })
                    }), (0, d.jsx)(a.Z, {
                        preview: o,
                        className: "bg-black bg-opacity-70 md:bg-opacity-0",
                        children: (0, d.jsxs)("div", {
                            className: "wrapper relative z-20",
                            children: [(0, d.jsxs)("h1", {
                                children: [(0, d.jsx)(i.Z, {
                                    size: "regular",
                                    children: "Frequently Asked"
                                }), (0, d.jsx)(i.Z, {
                                    size: "large",
                                    children: "Questions"
                                })]
                            }), (0, d.jsx)("div", {
                                className: "max-w-3xl -bg-green-500",
                                children: (0, d.jsx)("dl", {
                                    className: "mt-10",
                                    children: null === t || void 0 === t || null === (n = t.faqs) || void 0 === n ? void 0 : n.questions.map((function(e, n) {
                                        return (0, d.jsxs)(s.Fragment, {
                                            children: [(0, d.jsx)("dt", {
                                                className: "font-proxima-nova-extra-condensed leading-none uppercase text-hellblade-orange  text-2xl md:text-3xl font-bold",
                                                children: e.question
                                            }), (0, d.jsx)("dd", {
                                                className: "mb-10 body",
                                                dangerouslySetInnerHTML: {
                                                    __html: e.answer
                                                }
                                            })]
                                        }, n)
                                    }))
                                })
                            })]
                        })
                    })]
                }) : (0, d.jsx)(l.default, {
                    statusCode: 404
                })
            }
        },
        5770: function(e, n, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/faq", function() {
                return t(830)
            }])
        },
        2918: function(e, n, t) {
            e.exports = t(3359)
        }
    },
    function(e) {
        e.O(0, [9774, 2888, 179], (function() {
            return n = 5770, e(e.s = n);
            var n
        }));
        var n = e.O();
        _N_E = n
    }
]);