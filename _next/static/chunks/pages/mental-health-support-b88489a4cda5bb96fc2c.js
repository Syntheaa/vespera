(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [590], {
        4941: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return a
                }
            });
            var r = n(5893);

            function a(e) {
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
                    return a
                }
            });
            var r = n(5893);

            function a(e) {
                var t = e.size,
                    n = e.children.replace(/ /g, "&nbsp;"),
                    a = {
                        large: "text-5xl md:text-6xl 2xl:text-9xl 2xl:leading-snug 2xl:-mt-5 -mt-1 leading-snug",
                        regular: " leading-none text-lg md:text-xl 2xl:text-3xl"
                    },
                    o = void 0 !== a[t] ? a[t] : t;
                return (0, r.jsx)("div", {
                    className: " ".concat(o, " tracking-tight\t text-gradient block bg-gradient-to-b from-white to-gray-600 uppercase font-trajan font-light"),
                    dangerouslySetInnerHTML: {
                        __html: n
                    }
                })
            }
        },
        6214: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                __N_SSG: function() {
                    return m
                },
                default: function() {
                    return g
                }
            });
            var r = n(2809),
                a = n(1163),
                o = n(2918),
                l = n(5463),
                c = n(7294),
                s = n(9008),
                i = n(8098),
                u = n(4941),
                d = n(2743),
                p = n(5893);

            function f(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function x(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var m = !0;

            function g(e) {
                var t = e.page,
                    n = e.preview;
                if (!(0, a.useRouter)().isFallback && (null === t || void 0 === t || !t.slug)) return (0, p.jsx)(o.default, {
                    statusCode: 404
                });
                var r = t.supportBlocks.supportBlock.map((function(e) {
                        return {
                            value: e.locale,
                            label: e.locale
                        }
                    })),
                    f = (0, c.useState)(r[0].value),
                    m = f[0],
                    g = f[1],
                    b = {
                        option: function(e, t) {
                            return x(x({}, e), {}, {
                                color: t.isSelected ? "#ffa25d" : "white",
                                padding: 20,
                                background: "#000",
                                fontFamily: "proxima-nova-extra-condensed",
                                textTransform: "uppercase",
                                fontWeight: "bold"
                            })
                        },
                        menu: function(e) {
                            return x(x({}, e), {}, {
                                background: "#000",
                                padding: 0,
                                color: "#ffa25d"
                            })
                        },
                        valueContainer: function(e) {
                            return x(x({}, e), {}, {
                                color: "#ffa25d",
                                padding: "6px 16px 0 16px"
                            })
                        },
                        control: function(e) {
                            return x(x({}, e), {}, {
                                background: "transparent",
                                borderColor: "#333",
                                fontFamily: "proxima-nova-extra-condensed",
                                textTransform: "uppercase",
                                fontWeight: "bold",
                                fontSize: "30px"
                            })
                        },
                        singleValue: function(e, t) {
                            return {
                                provided: e,
                                opacity: t.isDisabled ? .5 : 1,
                                transition: "opacity 300ms"
                            }
                        },
                        dropdownIndicator: function(e) {
                            return x(x({}, e), {}, {
                                color: "red",
                                padding: "8px 20px"
                            })
                        },
                        indicatorSeparator: function(e) {
                            return x(x({}, e), {}, {
                                backgroundColor: "#333",
                                marginTop: 0,
                                marginBottom: 0
                            })
                        }
                    },
                    h = function(e) {
                        var t = e.blocks,
                            n = e.locale,
                            r = t.filter((function(e) {
                                return e.locale === n
                            }));
                        return r = r[0].supportItem, (0, p.jsx)(p.Fragment, {
                            children: r.map((function(e, t) {
                                return (0, p.jsxs)("dl", {
                                    className: "mb-10",
                                    children: [(0, p.jsxs)("dt", {
                                        className: "uppercase font-proxima-nova-extra-condensed font-bold text-2xl ",
                                        children: [e.title, " ", n]
                                    }), (0, p.jsx)("dd", {
                                        className: "body",
                                        dangerouslySetInnerHTML: {
                                            __html: e.text
                                        }
                                    }), (0, p.jsx)("dd", {
                                        className: "body ",
                                        children: (0, p.jsx)("a", {
                                            href: e.url,
                                            children: e.url
                                        })
                                    })]
                                }, t)
                            }))
                        })
                    };
                return (0, p.jsxs)(u.Z, {
                    preview: n,
                    className: "bg-black bg-opacity-50 md:bg-opacity-0",
                    children: [(0, p.jsx)(s.default, {
                        children: (0, p.jsxs)("title", {
                            children: [" Support | ", i.yf]
                        })
                    }), (0, p.jsxs)("div", {
                        className: "wrapper relative z-20 ",
                        children: [(0, p.jsxs)("h1", {
                            className: "mb-10",
                            children: [(0, p.jsx)(d.Z, {
                                size: "regular",
                                children: "FOR YOUR"
                            }), (0, p.jsx)(d.Z, {
                                size: "large",
                                children: "Support"
                            })]
                        }), (0, p.jsxs)("div", {
                            className: "max-w-3xl -bg-green-500",
                            children: [(0, p.jsx)("h2", {
                                className: "uppercase font-proxima-nova-extra-condensed font-bold text-3xl md:text-6xl\tmb-5",
                                children: "Help & Information"
                            }), (0, p.jsx)("div", {
                                className: "mb-10 copy",
                                dangerouslySetInnerHTML: {
                                    __html: t.content
                                }
                            }), (0, p.jsx)("div", {
                                className: "mb-10",
                                children: (0, p.jsx)(l.ZP, {
                                    instanceId: "123",
                                    className: "basic-single",
                                    classNamePrefix: "filter",
                                    defaultValue: r[0],
                                    name: "color",
                                    defaultMenuIsOpen: !1,
                                    styles: b,
                                    options: r,
                                    onChange: function(e) {
                                        var t = e.value;
                                        g(t)
                                    }
                                })
                            }), (0, p.jsx)(h, {
                                blocks: t.supportBlocks.supportBlock,
                                locale: m
                            }), (0, p.jsx)("div", {
                                className: " pt-10 italic text-sm text-gray-949494",
                                dangerouslySetInnerHTML: {
                                    __html: t.supportBlocks.disclaimer
                                }
                            })]
                        })]
                    })]
                })
            }
        },
        2055: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/mental-health-support", function() {
                return n(6214)
            }])
        }
    },
    function(e) {
        e.O(0, [4023, 9774, 2888, 179], (function() {
            return t = 2055, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);