(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2888], {
        7484: function(t) {
            t.exports = function() {
                "use strict";
                var t = 1e3,
                    e = 6e4,
                    r = 36e5,
                    i = "millisecond",
                    n = "second",
                    a = "minute",
                    s = "hour",
                    o = "day",
                    l = "week",
                    h = "month",
                    p = "quarter",
                    c = "year",
                    u = "date",
                    f = "Invalid Date",
                    d = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
                    m = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
                    y = {
                        name: "en",
                        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
                    },
                    g = function(t, e, r) {
                        var i = String(t);
                        return !i || i.length >= e ? t : "" + Array(e + 1 - i.length).join(r) + t
                    },
                    v = {
                        s: g,
                        z: function(t) {
                            var e = -t.utcOffset(),
                                r = Math.abs(e),
                                i = Math.floor(r / 60),
                                n = r % 60;
                            return (e <= 0 ? "+" : "-") + g(i, 2, "0") + ":" + g(n, 2, "0")
                        },
                        m: function t(e, r) {
                            if (e.date() < r.date()) return -t(r, e);
                            var i = 12 * (r.year() - e.year()) + (r.month() - e.month()),
                                n = e.clone().add(i, h),
                                a = r - n < 0,
                                s = e.clone().add(i + (a ? -1 : 1), h);
                            return +(-(i + (r - n) / (a ? n - s : s - n)) || 0)
                        },
                        a: function(t) {
                            return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
                        },
                        p: function(t) {
                            return {
                                M: h,
                                y: c,
                                w: l,
                                d: o,
                                D: u,
                                h: s,
                                m: a,
                                s: n,
                                ms: i,
                                Q: p
                            }[t] || String(t || "").toLowerCase().replace(/s$/, "")
                        },
                        u: function(t) {
                            return void 0 === t
                        }
                    },
                    _ = "en",
                    b = {};
                b[_] = y;
                var x = function(t) {
                        return t instanceof E
                    },
                    P = function(t, e, r) {
                        var i;
                        if (!t) return _;
                        if ("string" == typeof t) b[t] && (i = t), e && (b[t] = e, i = t);
                        else {
                            var n = t.name;
                            b[n] = t, i = n
                        }
                        return !r && i && (_ = i), i || !r && _
                    },
                    S = function(t, e) {
                        if (x(t)) return t.clone();
                        var r = "object" == typeof e ? e : {};
                        return r.date = t, r.args = arguments, new E(r)
                    },
                    A = v;
                A.l = P, A.i = x, A.w = function(t, e) {
                    return S(t, {
                        locale: e.$L,
                        utc: e.$u,
                        x: e.$x,
                        $offset: e.$offset
                    })
                };
                var E = function() {
                        function y(t) {
                            this.$L = P(t.locale, null, !0), this.parse(t)
                        }
                        var g = y.prototype;
                        return g.parse = function(t) {
                            this.$d = function(t) {
                                var e = t.date,
                                    r = t.utc;
                                if (null === e) return new Date(NaN);
                                if (A.u(e)) return new Date;
                                if (e instanceof Date) return new Date(e);
                                if ("string" == typeof e && !/Z$/i.test(e)) {
                                    var i = e.match(d);
                                    if (i) {
                                        var n = i[2] - 1 || 0,
                                            a = (i[7] || "0").substring(0, 3);
                                        return r ? new Date(Date.UTC(i[1], n, i[3] || 1, i[4] || 0, i[5] || 0, i[6] || 0, a)) : new Date(i[1], n, i[3] || 1, i[4] || 0, i[5] || 0, i[6] || 0, a)
                                    }
                                }
                                return new Date(e)
                            }(t), this.$x = t.x || {}, this.init()
                        }, g.init = function() {
                            var t = this.$d;
                            this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds()
                        }, g.$utils = function() {
                            return A
                        }, g.isValid = function() {
                            return !(this.$d.toString() === f)
                        }, g.isSame = function(t, e) {
                            var r = S(t);
                            return this.startOf(e) <= r && r <= this.endOf(e)
                        }, g.isAfter = function(t, e) {
                            return S(t) < this.startOf(e)
                        }, g.isBefore = function(t, e) {
                            return this.endOf(e) < S(t)
                        }, g.$g = function(t, e, r) {
                            return A.u(t) ? this[e] : this.set(r, t)
                        }, g.unix = function() {
                            return Math.floor(this.valueOf() / 1e3)
                        }, g.valueOf = function() {
                            return this.$d.getTime()
                        }, g.startOf = function(t, e) {
                            var r = this,
                                i = !!A.u(e) || e,
                                p = A.p(t),
                                f = function(t, e) {
                                    var n = A.w(r.$u ? Date.UTC(r.$y, e, t) : new Date(r.$y, e, t), r);
                                    return i ? n : n.endOf(o)
                                },
                                d = function(t, e) {
                                    return A.w(r.toDate()[t].apply(r.toDate("s"), (i ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), r)
                                },
                                m = this.$W,
                                y = this.$M,
                                g = this.$D,
                                v = "set" + (this.$u ? "UTC" : "");
                            switch (p) {
                                case c:
                                    return i ? f(1, 0) : f(31, 11);
                                case h:
                                    return i ? f(1, y) : f(0, y + 1);
                                case l:
                                    var _ = this.$locale().weekStart || 0,
                                        b = (m < _ ? m + 7 : m) - _;
                                    return f(i ? g - b : g + (6 - b), y);
                                case o:
                                case u:
                                    return d(v + "Hours", 0);
                                case s:
                                    return d(v + "Minutes", 1);
                                case a:
                                    return d(v + "Seconds", 2);
                                case n:
                                    return d(v + "Milliseconds", 3);
                                default:
                                    return this.clone()
                            }
                        }, g.endOf = function(t) {
                            return this.startOf(t, !1)
                        }, g.$set = function(t, e) {
                            var r, l = A.p(t),
                                p = "set" + (this.$u ? "UTC" : ""),
                                f = (r = {}, r[o] = p + "Date", r[u] = p + "Date", r[h] = p + "Month", r[c] = p + "FullYear", r[s] = p + "Hours", r[a] = p + "Minutes", r[n] = p + "Seconds", r[i] = p + "Milliseconds", r)[l],
                                d = l === o ? this.$D + (e - this.$W) : e;
                            if (l === h || l === c) {
                                var m = this.clone().set(u, 1);
                                m.$d[f](d), m.init(), this.$d = m.set(u, Math.min(this.$D, m.daysInMonth())).$d
                            } else f && this.$d[f](d);
                            return this.init(), this
                        }, g.set = function(t, e) {
                            return this.clone().$set(t, e)
                        }, g.get = function(t) {
                            return this[A.p(t)]()
                        }, g.add = function(i, p) {
                            var u, f = this;
                            i = Number(i);
                            var d = A.p(p),
                                m = function(t) {
                                    var e = S(f);
                                    return A.w(e.date(e.date() + Math.round(t * i)), f)
                                };
                            if (d === h) return this.set(h, this.$M + i);
                            if (d === c) return this.set(c, this.$y + i);
                            if (d === o) return m(1);
                            if (d === l) return m(7);
                            var y = (u = {}, u[a] = e, u[s] = r, u[n] = t, u)[d] || 1,
                                g = this.$d.getTime() + i * y;
                            return A.w(g, this)
                        }, g.subtract = function(t, e) {
                            return this.add(-1 * t, e)
                        }, g.format = function(t) {
                            var e = this,
                                r = this.$locale();
                            if (!this.isValid()) return r.invalidDate || f;
                            var i = t || "YYYY-MM-DDTHH:mm:ssZ",
                                n = A.z(this),
                                a = this.$H,
                                s = this.$m,
                                o = this.$M,
                                l = r.weekdays,
                                h = r.months,
                                p = function(t, r, n, a) {
                                    return t && (t[r] || t(e, i)) || n[r].substr(0, a)
                                },
                                c = function(t) {
                                    return A.s(a % 12 || 12, t, "0")
                                },
                                u = r.meridiem || function(t, e, r) {
                                    var i = t < 12 ? "AM" : "PM";
                                    return r ? i.toLowerCase() : i
                                },
                                d = {
                                    YY: String(this.$y).slice(-2),
                                    YYYY: this.$y,
                                    M: o + 1,
                                    MM: A.s(o + 1, 2, "0"),
                                    MMM: p(r.monthsShort, o, h, 3),
                                    MMMM: p(h, o),
                                    D: this.$D,
                                    DD: A.s(this.$D, 2, "0"),
                                    d: String(this.$W),
                                    dd: p(r.weekdaysMin, this.$W, l, 2),
                                    ddd: p(r.weekdaysShort, this.$W, l, 3),
                                    dddd: l[this.$W],
                                    H: String(a),
                                    HH: A.s(a, 2, "0"),
                                    h: c(1),
                                    hh: c(2),
                                    a: u(a, s, !0),
                                    A: u(a, s, !1),
                                    m: String(s),
                                    mm: A.s(s, 2, "0"),
                                    s: String(this.$s),
                                    ss: A.s(this.$s, 2, "0"),
                                    SSS: A.s(this.$ms, 3, "0"),
                                    Z: n
                                };
                            return i.replace(m, (function(t, e) {
                                return e || d[t] || n.replace(":", "")
                            }))
                        }, g.utcOffset = function() {
                            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
                        }, g.diff = function(i, u, f) {
                            var d, m = A.p(u),
                                y = S(i),
                                g = (y.utcOffset() - this.utcOffset()) * e,
                                v = this - y,
                                _ = A.m(this, y);
                            return _ = (d = {}, d[c] = _ / 12, d[h] = _, d[p] = _ / 3, d[l] = (v - g) / 6048e5, d[o] = (v - g) / 864e5, d[s] = v / r, d[a] = v / e, d[n] = v / t, d)[m] || v, f ? _ : A.a(_)
                        }, g.daysInMonth = function() {
                            return this.endOf(h).$D
                        }, g.$locale = function() {
                            return b[this.$L]
                        }, g.locale = function(t, e) {
                            if (!t) return this.$L;
                            var r = this.clone(),
                                i = P(t, e, !0);
                            return i && (r.$L = i), r
                        }, g.clone = function() {
                            return A.w(this.$d, this)
                        }, g.toDate = function() {
                            return new Date(this.valueOf())
                        }, g.toJSON = function() {
                            return this.isValid() ? this.toISOString() : null
                        }, g.toISOString = function() {
                            return this.$d.toISOString()
                        }, g.toString = function() {
                            return this.$d.toUTCString()
                        }, y
                    }(),
                    w = E.prototype;
                return S.prototype = w, [
                    ["$ms", i],
                    ["$s", n],
                    ["$m", a],
                    ["$H", s],
                    ["$W", o],
                    ["$M", h],
                    ["$y", c],
                    ["$D", u]
                ].forEach((function(t) {
                    w[t[1]] = function(e) {
                        return this.$g(e, t[0], t[1])
                    }
                })), S.extend = function(t, e) {
                    return t.$i || (t(e, E, S), t.$i = !0), S
                }, S.locale = P, S.isDayjs = x, S.unix = function(t) {
                    return S(1e3 * t)
                }, S.en = b[_], S.Ls = b, S.p = {}, S
            }()
        },
        1766: function(t, e, r) {
            var i;
            ! function() {
                "use strict";
                var n = function() {
                    this.init()
                };
                n.prototype = {
                    init: function() {
                        var t = this || a;
                        return t._counter = 1e3, t._html5AudioPool = [], t.html5PoolSize = 10, t._codecs = {}, t._howls = [], t._muted = !1, t._volume = 1, t._canPlayEvent = "canplaythrough", t._navigator = "undefined" !== typeof window && window.navigator ? window.navigator : null, t.masterGain = null, t.noAudio = !1, t.usingWebAudio = !0, t.autoSuspend = !0, t.ctx = null, t.autoUnlock = !0, t._setup(), t
                    },
                    volume: function(t) {
                        var e = this || a;
                        if (t = parseFloat(t), e.ctx || f(), "undefined" !== typeof t && t >= 0 && t <= 1) {
                            if (e._volume = t, e._muted) return e;
                            e.usingWebAudio && e.masterGain.gain.setValueAtTime(t, a.ctx.currentTime);
                            for (var r = 0; r < e._howls.length; r++)
                                if (!e._howls[r]._webAudio)
                                    for (var i = e._howls[r]._getSoundIds(), n = 0; n < i.length; n++) {
                                        var s = e._howls[r]._soundById(i[n]);
                                        s && s._node && (s._node.volume = s._volume * t)
                                    }
                            return e
                        }
                        return e._volume
                    },
                    mute: function(t) {
                        var e = this || a;
                        e.ctx || f(), e._muted = t, e.usingWebAudio && e.masterGain.gain.setValueAtTime(t ? 0 : e._volume, a.ctx.currentTime);
                        for (var r = 0; r < e._howls.length; r++)
                            if (!e._howls[r]._webAudio)
                                for (var i = e._howls[r]._getSoundIds(), n = 0; n < i.length; n++) {
                                    var s = e._howls[r]._soundById(i[n]);
                                    s && s._node && (s._node.muted = !!t || s._muted)
                                }
                        return e
                    },
                    stop: function() {
                        for (var t = this || a, e = 0; e < t._howls.length; e++) t._howls[e].stop();
                        return t
                    },
                    unload: function() {
                        for (var t = this || a, e = t._howls.length - 1; e >= 0; e--) t._howls[e].unload();
                        return t.usingWebAudio && t.ctx && "undefined" !== typeof t.ctx.close && (t.ctx.close(), t.ctx = null, f()), t
                    },
                    codecs: function(t) {
                        return (this || a)._codecs[t.replace(/^x-/, "")]
                    },
                    _setup: function() {
                        var t = this || a;
                        if (t.state = t.ctx && t.ctx.state || "suspended", t._autoSuspend(), !t.usingWebAudio)
                            if ("undefined" !== typeof Audio) try {
                                "undefined" === typeof(new Audio).oncanplaythrough && (t._canPlayEvent = "canplay")
                            } catch (e) {
                                t.noAudio = !0
                            } else t.noAudio = !0;
                        try {
                            (new Audio).muted && (t.noAudio = !0)
                        } catch (e) {}
                        return t.noAudio || t._setupCodecs(), t
                    },
                    _setupCodecs: function() {
                        var t = this || a,
                            e = null;
                        try {
                            e = "undefined" !== typeof Audio ? new Audio : null
                        } catch (p) {
                            return t
                        }
                        if (!e || "function" !== typeof e.canPlayType) return t;
                        var r = e.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                            i = t._navigator ? t._navigator.userAgent : "",
                            n = i.match(/OPR\/([0-6].)/g),
                            s = n && parseInt(n[0].split("/")[1], 10) < 33,
                            o = -1 !== i.indexOf("Safari") && -1 === i.indexOf("Chrome"),
                            l = i.match(/Version\/(.*?) /),
                            h = o && l && parseInt(l[1], 10) < 15;
                        return t._codecs = {
                            mp3: !(s || !r && !e.canPlayType("audio/mp3;").replace(/^no$/, "")),
                            mpeg: !!r,
                            opus: !!e.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                            ogg: !!e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                            oga: !!e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                            wav: !!(e.canPlayType('audio/wav; codecs="1"') || e.canPlayType("audio/wav")).replace(/^no$/, ""),
                            aac: !!e.canPlayType("audio/aac;").replace(/^no$/, ""),
                            caf: !!e.canPlayType("audio/x-caf;").replace(/^no$/, ""),
                            m4a: !!(e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""),
                            m4b: !!(e.canPlayType("audio/x-m4b;") || e.canPlayType("audio/m4b;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""),
                            mp4: !!(e.canPlayType("audio/x-mp4;") || e.canPlayType("audio/mp4;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""),
                            weba: !(h || !e.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
                            webm: !(h || !e.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
                            dolby: !!e.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
                            flac: !!(e.canPlayType("audio/x-flac;") || e.canPlayType("audio/flac;")).replace(/^no$/, "")
                        }, t
                    },
                    _unlockAudio: function() {
                        var t = this || a;
                        if (!t._audioUnlocked && t.ctx) {
                            t._audioUnlocked = !1, t.autoUnlock = !1, t._mobileUnloaded || 44100 === t.ctx.sampleRate || (t._mobileUnloaded = !0, t.unload()), t._scratchBuffer = t.ctx.createBuffer(1, 1, 22050);
                            var e = function(r) {
                                for (; t._html5AudioPool.length < t.html5PoolSize;) try {
                                    var i = new Audio;
                                    i._unlocked = !0, t._releaseHtml5Audio(i)
                                } catch (r) {
                                    t.noAudio = !0;
                                    break
                                }
                                for (var n = 0; n < t._howls.length; n++)
                                    if (!t._howls[n]._webAudio)
                                        for (var a = t._howls[n]._getSoundIds(), s = 0; s < a.length; s++) {
                                            var o = t._howls[n]._soundById(a[s]);
                                            o && o._node && !o._node._unlocked && (o._node._unlocked = !0, o._node.load())
                                        }
                                t._autoResume();
                                var l = t.ctx.createBufferSource();
                                l.buffer = t._scratchBuffer, l.connect(t.ctx.destination), "undefined" === typeof l.start ? l.noteOn(0) : l.start(0), "function" === typeof t.ctx.resume && t.ctx.resume(), l.onended = function() {
                                    l.disconnect(0), t._audioUnlocked = !0, document.removeEventListener("touchstart", e, !0), document.removeEventListener("touchend", e, !0), document.removeEventListener("click", e, !0), document.removeEventListener("keydown", e, !0);
                                    for (var r = 0; r < t._howls.length; r++) t._howls[r]._emit("unlock")
                                }
                            };
                            return document.addEventListener("touchstart", e, !0), document.addEventListener("touchend", e, !0), document.addEventListener("click", e, !0), document.addEventListener("keydown", e, !0), t
                        }
                    },
                    _obtainHtml5Audio: function() {
                        var t = this || a;
                        if (t._html5AudioPool.length) return t._html5AudioPool.pop();
                        var e = (new Audio).play();
                        return e && "undefined" !== typeof Promise && (e instanceof Promise || "function" === typeof e.then) && e.catch((function() {
                            console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
                        })), new Audio
                    },
                    _releaseHtml5Audio: function(t) {
                        var e = this || a;
                        return t._unlocked && e._html5AudioPool.push(t), e
                    },
                    _autoSuspend: function() {
                        var t = this;
                        if (t.autoSuspend && t.ctx && "undefined" !== typeof t.ctx.suspend && a.usingWebAudio) {
                            for (var e = 0; e < t._howls.length; e++)
                                if (t._howls[e]._webAudio)
                                    for (var r = 0; r < t._howls[e]._sounds.length; r++)
                                        if (!t._howls[e]._sounds[r]._paused) return t;
                            return t._suspendTimer && clearTimeout(t._suspendTimer), t._suspendTimer = setTimeout((function() {
                                if (t.autoSuspend) {
                                    t._suspendTimer = null, t.state = "suspending";
                                    var e = function() {
                                        t.state = "suspended", t._resumeAfterSuspend && (delete t._resumeAfterSuspend, t._autoResume())
                                    };
                                    t.ctx.suspend().then(e, e)
                                }
                            }), 3e4), t
                        }
                    },
                    _autoResume: function() {
                        var t = this;
                        if (t.ctx && "undefined" !== typeof t.ctx.resume && a.usingWebAudio) return "running" === t.state && "interrupted" !== t.ctx.state && t._suspendTimer ? (clearTimeout(t._suspendTimer), t._suspendTimer = null) : "suspended" === t.state || "running" === t.state && "interrupted" === t.ctx.state ? (t.ctx.resume().then((function() {
                            t.state = "running";
                            for (var e = 0; e < t._howls.length; e++) t._howls[e]._emit("resume")
                        })), t._suspendTimer && (clearTimeout(t._suspendTimer), t._suspendTimer = null)) : "suspending" === t.state && (t._resumeAfterSuspend = !0), t
                    }
                };
                var a = new n,
                    s = function(t) {
                        t.src && 0 !== t.src.length ? this.init(t) : console.error("An array of source files must be passed with any new Howl.")
                    };
                s.prototype = {
                    init: function(t) {
                        var e = this;
                        return a.ctx || f(), e._autoplay = t.autoplay || !1, e._format = "string" !== typeof t.format ? t.format : [t.format], e._html5 = t.html5 || !1, e._muted = t.mute || !1, e._loop = t.loop || !1, e._pool = t.pool || 5, e._preload = "boolean" !== typeof t.preload && "metadata" !== t.preload || t.preload, e._rate = t.rate || 1, e._sprite = t.sprite || {}, e._src = "string" !== typeof t.src ? t.src : [t.src], e._volume = void 0 !== t.volume ? t.volume : 1, e._xhr = {
                            method: t.xhr && t.xhr.method ? t.xhr.method : "GET",
                            headers: t.xhr && t.xhr.headers ? t.xhr.headers : null,
                            withCredentials: !(!t.xhr || !t.xhr.withCredentials) && t.xhr.withCredentials
                        }, e._duration = 0, e._state = "unloaded", e._sounds = [], e._endTimers = {}, e._queue = [], e._playLock = !1, e._onend = t.onend ? [{
                            fn: t.onend
                        }] : [], e._onfade = t.onfade ? [{
                            fn: t.onfade
                        }] : [], e._onload = t.onload ? [{
                            fn: t.onload
                        }] : [], e._onloaderror = t.onloaderror ? [{
                            fn: t.onloaderror
                        }] : [], e._onplayerror = t.onplayerror ? [{
                            fn: t.onplayerror
                        }] : [], e._onpause = t.onpause ? [{
                            fn: t.onpause
                        }] : [], e._onplay = t.onplay ? [{
                            fn: t.onplay
                        }] : [], e._onstop = t.onstop ? [{
                            fn: t.onstop
                        }] : [], e._onmute = t.onmute ? [{
                            fn: t.onmute
                        }] : [], e._onvolume = t.onvolume ? [{
                            fn: t.onvolume
                        }] : [], e._onrate = t.onrate ? [{
                            fn: t.onrate
                        }] : [], e._onseek = t.onseek ? [{
                            fn: t.onseek
                        }] : [], e._onunlock = t.onunlock ? [{
                            fn: t.onunlock
                        }] : [], e._onresume = [], e._webAudio = a.usingWebAudio && !e._html5, "undefined" !== typeof a.ctx && a.ctx && a.autoUnlock && a._unlockAudio(), a._howls.push(e), e._autoplay && e._queue.push({
                            event: "play",
                            action: function() {
                                e.play()
                            }
                        }), e._preload && "none" !== e._preload && e.load(), e
                    },
                    load: function() {
                        var t = this,
                            e = null;
                        if (a.noAudio) t._emit("loaderror", null, "No audio support.");
                        else {
                            "string" === typeof t._src && (t._src = [t._src]);
                            for (var r = 0; r < t._src.length; r++) {
                                var i, n;
                                if (t._format && t._format[r]) i = t._format[r];
                                else {
                                    if ("string" !== typeof(n = t._src[r])) {
                                        t._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                                        continue
                                    }(i = /^data:audio\/([^;,]+);/i.exec(n)) || (i = /\.([^.]+)$/.exec(n.split("?", 1)[0])), i && (i = i[1].toLowerCase())
                                }
                                if (i || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), i && a.codecs(i)) {
                                    e = t._src[r];
                                    break
                                }
                            }
                            if (e) return t._src = e, t._state = "loading", "https:" === window.location.protocol && "http:" === e.slice(0, 5) && (t._html5 = !0, t._webAudio = !1), new o(t), t._webAudio && h(t), t;
                            t._emit("loaderror", null, "No codec support for selected audio sources.")
                        }
                    },
                    play: function(t, e) {
                        var r = this,
                            i = null;
                        if ("number" === typeof t) i = t, t = null;
                        else {
                            if ("string" === typeof t && "loaded" === r._state && !r._sprite[t]) return null;
                            if ("undefined" === typeof t && (t = "__default", !r._playLock)) {
                                for (var n = 0, s = 0; s < r._sounds.length; s++) r._sounds[s]._paused && !r._sounds[s]._ended && (n++, i = r._sounds[s]._id);
                                1 === n ? t = null : i = null
                            }
                        }
                        var o = i ? r._soundById(i) : r._inactiveSound();
                        if (!o) return null;
                        if (i && !t && (t = o._sprite || "__default"), "loaded" !== r._state) {
                            o._sprite = t, o._ended = !1;
                            var l = o._id;
                            return r._queue.push({
                                event: "play",
                                action: function() {
                                    r.play(l)
                                }
                            }), l
                        }
                        if (i && !o._paused) return e || r._loadQueue("play"), o._id;
                        r._webAudio && a._autoResume();
                        var h = Math.max(0, o._seek > 0 ? o._seek : r._sprite[t][0] / 1e3),
                            p = Math.max(0, (r._sprite[t][0] + r._sprite[t][1]) / 1e3 - h),
                            c = 1e3 * p / Math.abs(o._rate),
                            u = r._sprite[t][0] / 1e3,
                            f = (r._sprite[t][0] + r._sprite[t][1]) / 1e3;
                        o._sprite = t, o._ended = !1;
                        var d = function() {
                            o._paused = !1, o._seek = h, o._start = u, o._stop = f, o._loop = !(!o._loop && !r._sprite[t][2])
                        };
                        if (!(h >= f)) {
                            var m = o._node;
                            if (r._webAudio) {
                                var y = function() {
                                    r._playLock = !1, d(), r._refreshBuffer(o);
                                    var t = o._muted || r._muted ? 0 : o._volume;
                                    m.gain.setValueAtTime(t, a.ctx.currentTime), o._playStart = a.ctx.currentTime, "undefined" === typeof m.bufferSource.start ? o._loop ? m.bufferSource.noteGrainOn(0, h, 86400) : m.bufferSource.noteGrainOn(0, h, p) : o._loop ? m.bufferSource.start(0, h, 86400) : m.bufferSource.start(0, h, p), c !== 1 / 0 && (r._endTimers[o._id] = setTimeout(r._ended.bind(r, o), c)), e || setTimeout((function() {
                                        r._emit("play", o._id), r._loadQueue()
                                    }), 0)
                                };
                                "running" === a.state && "interrupted" !== a.ctx.state ? y() : (r._playLock = !0, r.once("resume", y), r._clearTimer(o._id))
                            } else {
                                var g = function() {
                                    m.currentTime = h, m.muted = o._muted || r._muted || a._muted || m.muted, m.volume = o._volume * a.volume(), m.playbackRate = o._rate;
                                    try {
                                        var i = m.play();
                                        if (i && "undefined" !== typeof Promise && (i instanceof Promise || "function" === typeof i.then) ? (r._playLock = !0, d(), i.then((function() {
                                                r._playLock = !1, m._unlocked = !0, e ? r._loadQueue() : r._emit("play", o._id)
                                            })).catch((function() {
                                                r._playLock = !1, r._emit("playerror", o._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), o._ended = !0, o._paused = !0
                                            }))) : e || (r._playLock = !1, d(), r._emit("play", o._id)), m.playbackRate = o._rate, m.paused) return void r._emit("playerror", o._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                                        "__default" !== t || o._loop ? r._endTimers[o._id] = setTimeout(r._ended.bind(r, o), c) : (r._endTimers[o._id] = function() {
                                            r._ended(o), m.removeEventListener("ended", r._endTimers[o._id], !1)
                                        }, m.addEventListener("ended", r._endTimers[o._id], !1))
                                    } catch (n) {
                                        r._emit("playerror", o._id, n)
                                    }
                                };
                                "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === m.src && (m.src = r._src, m.load());
                                var v = window && window.ejecta || !m.readyState && a._navigator.isCocoonJS;
                                if (m.readyState >= 3 || v) g();
                                else {
                                    r._playLock = !0, r._state = "loading";
                                    var _ = function() {
                                        r._state = "loaded", g(), m.removeEventListener(a._canPlayEvent, _, !1)
                                    };
                                    m.addEventListener(a._canPlayEvent, _, !1), r._clearTimer(o._id)
                                }
                            }
                            return o._id
                        }
                        r._ended(o)
                    },
                    pause: function(t) {
                        var e = this;
                        if ("loaded" !== e._state || e._playLock) return e._queue.push({
                            event: "pause",
                            action: function() {
                                e.pause(t)
                            }
                        }), e;
                        for (var r = e._getSoundIds(t), i = 0; i < r.length; i++) {
                            e._clearTimer(r[i]);
                            var n = e._soundById(r[i]);
                            if (n && !n._paused && (n._seek = e.seek(r[i]), n._rateSeek = 0, n._paused = !0, e._stopFade(r[i]), n._node))
                                if (e._webAudio) {
                                    if (!n._node.bufferSource) continue;
                                    "undefined" === typeof n._node.bufferSource.stop ? n._node.bufferSource.noteOff(0) : n._node.bufferSource.stop(0), e._cleanBuffer(n._node)
                                } else isNaN(n._node.duration) && n._node.duration !== 1 / 0 || n._node.pause();
                            arguments[1] || e._emit("pause", n ? n._id : null)
                        }
                        return e
                    },
                    stop: function(t, e) {
                        var r = this;
                        if ("loaded" !== r._state || r._playLock) return r._queue.push({
                            event: "stop",
                            action: function() {
                                r.stop(t)
                            }
                        }), r;
                        for (var i = r._getSoundIds(t), n = 0; n < i.length; n++) {
                            r._clearTimer(i[n]);
                            var a = r._soundById(i[n]);
                            a && (a._seek = a._start || 0, a._rateSeek = 0, a._paused = !0, a._ended = !0, r._stopFade(i[n]), a._node && (r._webAudio ? a._node.bufferSource && ("undefined" === typeof a._node.bufferSource.stop ? a._node.bufferSource.noteOff(0) : a._node.bufferSource.stop(0), r._cleanBuffer(a._node)) : isNaN(a._node.duration) && a._node.duration !== 1 / 0 || (a._node.currentTime = a._start || 0, a._node.pause(), a._node.duration === 1 / 0 && r._clearSound(a._node))), e || r._emit("stop", a._id))
                        }
                        return r
                    },
                    mute: function(t, e) {
                        var r = this;
                        if ("loaded" !== r._state || r._playLock) return r._queue.push({
                            event: "mute",
                            action: function() {
                                r.mute(t, e)
                            }
                        }), r;
                        if ("undefined" === typeof e) {
                            if ("boolean" !== typeof t) return r._muted;
                            r._muted = t
                        }
                        for (var i = r._getSoundIds(e), n = 0; n < i.length; n++) {
                            var s = r._soundById(i[n]);
                            s && (s._muted = t, s._interval && r._stopFade(s._id), r._webAudio && s._node ? s._node.gain.setValueAtTime(t ? 0 : s._volume, a.ctx.currentTime) : s._node && (s._node.muted = !!a._muted || t), r._emit("mute", s._id))
                        }
                        return r
                    },
                    volume: function() {
                        var t, e, r, i = this,
                            n = arguments;
                        if (0 === n.length) return i._volume;
                        if (1 === n.length || 2 === n.length && "undefined" === typeof n[1]) {
                            var s = i._getSoundIds(),
                                o = s.indexOf(n[0]);
                            o >= 0 ? e = parseInt(n[0], 10) : t = parseFloat(n[0])
                        } else n.length >= 2 && (t = parseFloat(n[0]), e = parseInt(n[1], 10));
                        if (!("undefined" !== typeof t && t >= 0 && t <= 1)) return (r = e ? i._soundById(e) : i._sounds[0]) ? r._volume : 0;
                        if ("loaded" !== i._state || i._playLock) return i._queue.push({
                            event: "volume",
                            action: function() {
                                i.volume.apply(i, n)
                            }
                        }), i;
                        "undefined" === typeof e && (i._volume = t), e = i._getSoundIds(e);
                        for (var l = 0; l < e.length; l++)(r = i._soundById(e[l])) && (r._volume = t, n[2] || i._stopFade(e[l]), i._webAudio && r._node && !r._muted ? r._node.gain.setValueAtTime(t, a.ctx.currentTime) : r._node && !r._muted && (r._node.volume = t * a.volume()), i._emit("volume", r._id));
                        return i
                    },
                    fade: function(t, e, r, i) {
                        var n = this;
                        if ("loaded" !== n._state || n._playLock) return n._queue.push({
                            event: "fade",
                            action: function() {
                                n.fade(t, e, r, i)
                            }
                        }), n;
                        t = Math.min(Math.max(0, parseFloat(t)), 1), e = Math.min(Math.max(0, parseFloat(e)), 1), r = parseFloat(r), n.volume(t, i);
                        for (var s = n._getSoundIds(i), o = 0; o < s.length; o++) {
                            var l = n._soundById(s[o]);
                            if (l) {
                                if (i || n._stopFade(s[o]), n._webAudio && !l._muted) {
                                    var h = a.ctx.currentTime,
                                        p = h + r / 1e3;
                                    l._volume = t, l._node.gain.setValueAtTime(t, h), l._node.gain.linearRampToValueAtTime(e, p)
                                }
                                n._startFadeInterval(l, t, e, r, s[o], "undefined" === typeof i)
                            }
                        }
                        return n
                    },
                    _startFadeInterval: function(t, e, r, i, n, a) {
                        var s = this,
                            o = e,
                            l = r - e,
                            h = Math.abs(l / .01),
                            p = Math.max(4, h > 0 ? i / h : i),
                            c = Date.now();
                        t._fadeTo = r, t._interval = setInterval((function() {
                            var n = (Date.now() - c) / i;
                            c = Date.now(), o += l * n, o = Math.round(100 * o) / 100, o = l < 0 ? Math.max(r, o) : Math.min(r, o), s._webAudio ? t._volume = o : s.volume(o, t._id, !0), a && (s._volume = o), (r < e && o <= r || r > e && o >= r) && (clearInterval(t._interval), t._interval = null, t._fadeTo = null, s.volume(r, t._id), s._emit("fade", t._id))
                        }), p)
                    },
                    _stopFade: function(t) {
                        var e = this,
                            r = e._soundById(t);
                        return r && r._interval && (e._webAudio && r._node.gain.cancelScheduledValues(a.ctx.currentTime), clearInterval(r._interval), r._interval = null, e.volume(r._fadeTo, t), r._fadeTo = null, e._emit("fade", t)), e
                    },
                    loop: function() {
                        var t, e, r, i = this,
                            n = arguments;
                        if (0 === n.length) return i._loop;
                        if (1 === n.length) {
                            if ("boolean" !== typeof n[0]) return !!(r = i._soundById(parseInt(n[0], 10))) && r._loop;
                            t = n[0], i._loop = t
                        } else 2 === n.length && (t = n[0], e = parseInt(n[1], 10));
                        for (var a = i._getSoundIds(e), s = 0; s < a.length; s++)(r = i._soundById(a[s])) && (r._loop = t, i._webAudio && r._node && r._node.bufferSource && (r._node.bufferSource.loop = t, t && (r._node.bufferSource.loopStart = r._start || 0, r._node.bufferSource.loopEnd = r._stop, i.playing(a[s]) && (i.pause(a[s], !0), i.play(a[s], !0)))));
                        return i
                    },
                    rate: function() {
                        var t, e, r, i = this,
                            n = arguments;
                        if (0 === n.length) e = i._sounds[0]._id;
                        else if (1 === n.length) {
                            var s = i._getSoundIds(),
                                o = s.indexOf(n[0]);
                            o >= 0 ? e = parseInt(n[0], 10) : t = parseFloat(n[0])
                        } else 2 === n.length && (t = parseFloat(n[0]), e = parseInt(n[1], 10));
                        if ("number" !== typeof t) return (r = i._soundById(e)) ? r._rate : i._rate;
                        if ("loaded" !== i._state || i._playLock) return i._queue.push({
                            event: "rate",
                            action: function() {
                                i.rate.apply(i, n)
                            }
                        }), i;
                        "undefined" === typeof e && (i._rate = t), e = i._getSoundIds(e);
                        for (var l = 0; l < e.length; l++)
                            if (r = i._soundById(e[l])) {
                                i.playing(e[l]) && (r._rateSeek = i.seek(e[l]), r._playStart = i._webAudio ? a.ctx.currentTime : r._playStart), r._rate = t, i._webAudio && r._node && r._node.bufferSource ? r._node.bufferSource.playbackRate.setValueAtTime(t, a.ctx.currentTime) : r._node && (r._node.playbackRate = t);
                                var h = i.seek(e[l]),
                                    p = (i._sprite[r._sprite][0] + i._sprite[r._sprite][1]) / 1e3 - h,
                                    c = 1e3 * p / Math.abs(r._rate);
                                !i._endTimers[e[l]] && r._paused || (i._clearTimer(e[l]), i._endTimers[e[l]] = setTimeout(i._ended.bind(i, r), c)), i._emit("rate", r._id)
                            }
                        return i
                    },
                    seek: function() {
                        var t, e, r = this,
                            i = arguments;
                        if (0 === i.length) r._sounds.length && (e = r._sounds[0]._id);
                        else if (1 === i.length) {
                            var n = r._getSoundIds(),
                                s = n.indexOf(i[0]);
                            s >= 0 ? e = parseInt(i[0], 10) : r._sounds.length && (e = r._sounds[0]._id, t = parseFloat(i[0]))
                        } else 2 === i.length && (t = parseFloat(i[0]), e = parseInt(i[1], 10));
                        if ("undefined" === typeof e) return 0;
                        if ("number" === typeof t && ("loaded" !== r._state || r._playLock)) return r._queue.push({
                            event: "seek",
                            action: function() {
                                r.seek.apply(r, i)
                            }
                        }), r;
                        var o = r._soundById(e);
                        if (o) {
                            if (!("number" === typeof t && t >= 0)) {
                                if (r._webAudio) {
                                    var l = r.playing(e) ? a.ctx.currentTime - o._playStart : 0,
                                        h = o._rateSeek ? o._rateSeek - o._seek : 0;
                                    return o._seek + (h + l * Math.abs(o._rate))
                                }
                                return o._node.currentTime
                            }
                            var p = r.playing(e);
                            p && r.pause(e, !0), o._seek = t, o._ended = !1, r._clearTimer(e), r._webAudio || !o._node || isNaN(o._node.duration) || (o._node.currentTime = t);
                            var c = function() {
                                p && r.play(e, !0), r._emit("seek", e)
                            };
                            if (p && !r._webAudio) {
                                var u = function() {
                                    r._playLock ? setTimeout(u, 0) : c()
                                };
                                setTimeout(u, 0)
                            } else c()
                        }
                        return r
                    },
                    playing: function(t) {
                        var e = this;
                        if ("number" === typeof t) {
                            var r = e._soundById(t);
                            return !!r && !r._paused
                        }
                        for (var i = 0; i < e._sounds.length; i++)
                            if (!e._sounds[i]._paused) return !0;
                        return !1
                    },
                    duration: function(t) {
                        var e = this,
                            r = e._duration,
                            i = e._soundById(t);
                        return i && (r = e._sprite[i._sprite][1] / 1e3), r
                    },
                    state: function() {
                        return this._state
                    },
                    unload: function() {
                        for (var t = this, e = t._sounds, r = 0; r < e.length; r++) e[r]._paused || t.stop(e[r]._id), t._webAudio || (t._clearSound(e[r]._node), e[r]._node.removeEventListener("error", e[r]._errorFn, !1), e[r]._node.removeEventListener(a._canPlayEvent, e[r]._loadFn, !1), e[r]._node.removeEventListener("ended", e[r]._endFn, !1), a._releaseHtml5Audio(e[r]._node)), delete e[r]._node, t._clearTimer(e[r]._id);
                        var i = a._howls.indexOf(t);
                        i >= 0 && a._howls.splice(i, 1);
                        var n = !0;
                        for (r = 0; r < a._howls.length; r++)
                            if (a._howls[r]._src === t._src || t._src.indexOf(a._howls[r]._src) >= 0) {
                                n = !1;
                                break
                            }
                        return l && n && delete l[t._src], a.noAudio = !1, t._state = "unloaded", t._sounds = [], t = null, null
                    },
                    on: function(t, e, r, i) {
                        var n = this["_on" + t];
                        return "function" === typeof e && n.push(i ? {
                            id: r,
                            fn: e,
                            once: i
                        } : {
                            id: r,
                            fn: e
                        }), this
                    },
                    off: function(t, e, r) {
                        var i = this,
                            n = i["_on" + t],
                            a = 0;
                        if ("number" === typeof e && (r = e, e = null), e || r)
                            for (a = 0; a < n.length; a++) {
                                var s = r === n[a].id;
                                if (e === n[a].fn && s || !e && s) {
                                    n.splice(a, 1);
                                    break
                                }
                            } else if (t) i["_on" + t] = [];
                            else {
                                var o = Object.keys(i);
                                for (a = 0; a < o.length; a++) 0 === o[a].indexOf("_on") && Array.isArray(i[o[a]]) && (i[o[a]] = [])
                            }
                        return i
                    },
                    once: function(t, e, r) {
                        return this.on(t, e, r, 1), this
                    },
                    _emit: function(t, e, r) {
                        for (var i = this, n = i["_on" + t], a = n.length - 1; a >= 0; a--) n[a].id && n[a].id !== e && "load" !== t || (setTimeout(function(t) {
                            t.call(this, e, r)
                        }.bind(i, n[a].fn), 0), n[a].once && i.off(t, n[a].fn, n[a].id));
                        return i._loadQueue(t), i
                    },
                    _loadQueue: function(t) {
                        var e = this;
                        if (e._queue.length > 0) {
                            var r = e._queue[0];
                            r.event === t && (e._queue.shift(), e._loadQueue()), t || r.action()
                        }
                        return e
                    },
                    _ended: function(t) {
                        var e = this,
                            r = t._sprite;
                        if (!e._webAudio && t._node && !t._node.paused && !t._node.ended && t._node.currentTime < t._stop) return setTimeout(e._ended.bind(e, t), 100), e;
                        var i = !(!t._loop && !e._sprite[r][2]);
                        if (e._emit("end", t._id), !e._webAudio && i && e.stop(t._id, !0).play(t._id), e._webAudio && i) {
                            e._emit("play", t._id), t._seek = t._start || 0, t._rateSeek = 0, t._playStart = a.ctx.currentTime;
                            var n = 1e3 * (t._stop - t._start) / Math.abs(t._rate);
                            e._endTimers[t._id] = setTimeout(e._ended.bind(e, t), n)
                        }
                        return e._webAudio && !i && (t._paused = !0, t._ended = !0, t._seek = t._start || 0, t._rateSeek = 0, e._clearTimer(t._id), e._cleanBuffer(t._node), a._autoSuspend()), e._webAudio || i || e.stop(t._id, !0), e
                    },
                    _clearTimer: function(t) {
                        var e = this;
                        if (e._endTimers[t]) {
                            if ("function" !== typeof e._endTimers[t]) clearTimeout(e._endTimers[t]);
                            else {
                                var r = e._soundById(t);
                                r && r._node && r._node.removeEventListener("ended", e._endTimers[t], !1)
                            }
                            delete e._endTimers[t]
                        }
                        return e
                    },
                    _soundById: function(t) {
                        for (var e = this, r = 0; r < e._sounds.length; r++)
                            if (t === e._sounds[r]._id) return e._sounds[r];
                        return null
                    },
                    _inactiveSound: function() {
                        var t = this;
                        t._drain();
                        for (var e = 0; e < t._sounds.length; e++)
                            if (t._sounds[e]._ended) return t._sounds[e].reset();
                        return new o(t)
                    },
                    _drain: function() {
                        var t = this,
                            e = t._pool,
                            r = 0,
                            i = 0;
                        if (!(t._sounds.length < e)) {
                            for (i = 0; i < t._sounds.length; i++) t._sounds[i]._ended && r++;
                            for (i = t._sounds.length - 1; i >= 0; i--) {
                                if (r <= e) return;
                                t._sounds[i]._ended && (t._webAudio && t._sounds[i]._node && t._sounds[i]._node.disconnect(0), t._sounds.splice(i, 1), r--)
                            }
                        }
                    },
                    _getSoundIds: function(t) {
                        if ("undefined" === typeof t) {
                            for (var e = [], r = 0; r < this._sounds.length; r++) e.push(this._sounds[r]._id);
                            return e
                        }
                        return [t]
                    },
                    _refreshBuffer: function(t) {
                        return t._node.bufferSource = a.ctx.createBufferSource(), t._node.bufferSource.buffer = l[this._src], t._panner ? t._node.bufferSource.connect(t._panner) : t._node.bufferSource.connect(t._node), t._node.bufferSource.loop = t._loop, t._loop && (t._node.bufferSource.loopStart = t._start || 0, t._node.bufferSource.loopEnd = t._stop || 0), t._node.bufferSource.playbackRate.setValueAtTime(t._rate, a.ctx.currentTime), this
                    },
                    _cleanBuffer: function(t) {
                        var e = a._navigator && a._navigator.vendor.indexOf("Apple") >= 0;
                        if (a._scratchBuffer && t.bufferSource && (t.bufferSource.onended = null, t.bufferSource.disconnect(0), e)) try {
                            t.bufferSource.buffer = a._scratchBuffer
                        } catch (r) {}
                        return t.bufferSource = null, this
                    },
                    _clearSound: function(t) {
                        /MSIE |Trident\//.test(a._navigator && a._navigator.userAgent) || (t.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
                    }
                };
                var o = function(t) {
                    this._parent = t, this.init()
                };
                o.prototype = {
                    init: function() {
                        var t = this,
                            e = t._parent;
                        return t._muted = e._muted, t._loop = e._loop, t._volume = e._volume, t._rate = e._rate, t._seek = 0, t._paused = !0, t._ended = !0, t._sprite = "__default", t._id = ++a._counter, e._sounds.push(t), t.create(), t
                    },
                    create: function() {
                        var t = this,
                            e = t._parent,
                            r = a._muted || t._muted || t._parent._muted ? 0 : t._volume;
                        return e._webAudio ? (t._node = "undefined" === typeof a.ctx.createGain ? a.ctx.createGainNode() : a.ctx.createGain(), t._node.gain.setValueAtTime(r, a.ctx.currentTime), t._node.paused = !0, t._node.connect(a.masterGain)) : a.noAudio || (t._node = a._obtainHtml5Audio(), t._errorFn = t._errorListener.bind(t), t._node.addEventListener("error", t._errorFn, !1), t._loadFn = t._loadListener.bind(t), t._node.addEventListener(a._canPlayEvent, t._loadFn, !1), t._endFn = t._endListener.bind(t), t._node.addEventListener("ended", t._endFn, !1), t._node.src = e._src, t._node.preload = !0 === e._preload ? "auto" : e._preload, t._node.volume = r * a.volume(), t._node.load()), t
                    },
                    reset: function() {
                        var t = this,
                            e = t._parent;
                        return t._muted = e._muted, t._loop = e._loop, t._volume = e._volume, t._rate = e._rate, t._seek = 0, t._rateSeek = 0, t._paused = !0, t._ended = !0, t._sprite = "__default", t._id = ++a._counter, t
                    },
                    _errorListener: function() {
                        var t = this;
                        t._parent._emit("loaderror", t._id, t._node.error ? t._node.error.code : 0), t._node.removeEventListener("error", t._errorFn, !1)
                    },
                    _loadListener: function() {
                        var t = this,
                            e = t._parent;
                        e._duration = Math.ceil(10 * t._node.duration) / 10, 0 === Object.keys(e._sprite).length && (e._sprite = {
                            __default: [0, 1e3 * e._duration]
                        }), "loaded" !== e._state && (e._state = "loaded", e._emit("load"), e._loadQueue()), t._node.removeEventListener(a._canPlayEvent, t._loadFn, !1)
                    },
                    _endListener: function() {
                        var t = this,
                            e = t._parent;
                        e._duration === 1 / 0 && (e._duration = Math.ceil(10 * t._node.duration) / 10, e._sprite.__default[1] === 1 / 0 && (e._sprite.__default[1] = 1e3 * e._duration), e._ended(t)), t._node.removeEventListener("ended", t._endFn, !1)
                    }
                };
                var l = {},
                    h = function(t) {
                        var e = t._src;
                        if (l[e]) return t._duration = l[e].duration, void u(t);
                        if (/^data:[^;]+;base64,/.test(e)) {
                            for (var r = atob(e.split(",")[1]), i = new Uint8Array(r.length), n = 0; n < r.length; ++n) i[n] = r.charCodeAt(n);
                            c(i.buffer, t)
                        } else {
                            var a = new XMLHttpRequest;
                            a.open(t._xhr.method, e, !0), a.withCredentials = t._xhr.withCredentials, a.responseType = "arraybuffer", t._xhr.headers && Object.keys(t._xhr.headers).forEach((function(e) {
                                a.setRequestHeader(e, t._xhr.headers[e])
                            })), a.onload = function() {
                                var e = (a.status + "")[0];
                                "0" === e || "2" === e || "3" === e ? c(a.response, t) : t._emit("loaderror", null, "Failed loading audio file with status: " + a.status + ".")
                            }, a.onerror = function() {
                                t._webAudio && (t._html5 = !0, t._webAudio = !1, t._sounds = [], delete l[e], t.load())
                            }, p(a)
                        }
                    },
                    p = function(t) {
                        try {
                            t.send()
                        } catch (e) {
                            t.onerror()
                        }
                    },
                    c = function(t, e) {
                        var r = function() {
                                e._emit("loaderror", null, "Decoding audio data failed.")
                            },
                            i = function(t) {
                                t && e._sounds.length > 0 ? (l[e._src] = t, u(e, t)) : r()
                            };
                        "undefined" !== typeof Promise && 1 === a.ctx.decodeAudioData.length ? a.ctx.decodeAudioData(t).then(i).catch(r) : a.ctx.decodeAudioData(t, i, r)
                    },
                    u = function(t, e) {
                        e && !t._duration && (t._duration = e.duration), 0 === Object.keys(t._sprite).length && (t._sprite = {
                            __default: [0, 1e3 * t._duration]
                        }), "loaded" !== t._state && (t._state = "loaded", t._emit("load"), t._loadQueue())
                    },
                    f = function() {
                        if (a.usingWebAudio) {
                            try {
                                "undefined" !== typeof AudioContext ? a.ctx = new AudioContext : "undefined" !== typeof webkitAudioContext ? a.ctx = new webkitAudioContext : a.usingWebAudio = !1
                            } catch (n) {
                                a.usingWebAudio = !1
                            }
                            a.ctx || (a.usingWebAudio = !1);
                            var t = /iP(hone|od|ad)/.test(a._navigator && a._navigator.platform),
                                e = a._navigator && a._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
                                r = e ? parseInt(e[1], 10) : null;
                            if (t && r && r < 9) {
                                var i = /safari/.test(a._navigator && a._navigator.userAgent.toLowerCase());
                                a._navigator && !i && (a.usingWebAudio = !1)
                            }
                            a.usingWebAudio && (a.masterGain = "undefined" === typeof a.ctx.createGain ? a.ctx.createGainNode() : a.ctx.createGain(), a.masterGain.gain.setValueAtTime(a._muted ? 0 : a._volume, a.ctx.currentTime), a.masterGain.connect(a.ctx.destination)), a._setup()
                        }
                    };
                void 0 === (i = function() {
                    return {
                        Howler: a,
                        Howl: s
                    }
                }.apply(e, [])) || (t.exports = i), e.Howler = a, e.Howl = s, "undefined" !== typeof r.g ? (r.g.HowlerGlobal = n, r.g.Howler = a, r.g.Howl = s, r.g.Sound = o) : "undefined" !== typeof window && (window.HowlerGlobal = n, window.Howler = a, window.Howl = s, window.Sound = o)
            }(),
            function() {
                "use strict";
                var t;
                HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(t) {
                    var e = this;
                    if (!e.ctx || !e.ctx.listener) return e;
                    for (var r = e._howls.length - 1; r >= 0; r--) e._howls[r].stereo(t);
                    return e
                }, HowlerGlobal.prototype.pos = function(t, e, r) {
                    var i = this;
                    return i.ctx && i.ctx.listener ? (e = "number" !== typeof e ? i._pos[1] : e, r = "number" !== typeof r ? i._pos[2] : r, "number" !== typeof t ? i._pos : (i._pos = [t, e, r], "undefined" !== typeof i.ctx.listener.positionX ? (i.ctx.listener.positionX.setTargetAtTime(i._pos[0], Howler.ctx.currentTime, .1), i.ctx.listener.positionY.setTargetAtTime(i._pos[1], Howler.ctx.currentTime, .1), i.ctx.listener.positionZ.setTargetAtTime(i._pos[2], Howler.ctx.currentTime, .1)) : i.ctx.listener.setPosition(i._pos[0], i._pos[1], i._pos[2]), i)) : i
                }, HowlerGlobal.prototype.orientation = function(t, e, r, i, n, a) {
                    var s = this;
                    if (!s.ctx || !s.ctx.listener) return s;
                    var o = s._orientation;
                    return e = "number" !== typeof e ? o[1] : e, r = "number" !== typeof r ? o[2] : r, i = "number" !== typeof i ? o[3] : i, n = "number" !== typeof n ? o[4] : n, a = "number" !== typeof a ? o[5] : a, "number" !== typeof t ? o : (s._orientation = [t, e, r, i, n, a], "undefined" !== typeof s.ctx.listener.forwardX ? (s.ctx.listener.forwardX.setTargetAtTime(t, Howler.ctx.currentTime, .1), s.ctx.listener.forwardY.setTargetAtTime(e, Howler.ctx.currentTime, .1), s.ctx.listener.forwardZ.setTargetAtTime(r, Howler.ctx.currentTime, .1), s.ctx.listener.upX.setTargetAtTime(i, Howler.ctx.currentTime, .1), s.ctx.listener.upY.setTargetAtTime(n, Howler.ctx.currentTime, .1), s.ctx.listener.upZ.setTargetAtTime(a, Howler.ctx.currentTime, .1)) : s.ctx.listener.setOrientation(t, e, r, i, n, a), s)
                }, Howl.prototype.init = (t = Howl.prototype.init, function(e) {
                    var r = this;
                    return r._orientation = e.orientation || [1, 0, 0], r._stereo = e.stereo || null, r._pos = e.pos || null, r._pannerAttr = {
                        coneInnerAngle: "undefined" !== typeof e.coneInnerAngle ? e.coneInnerAngle : 360,
                        coneOuterAngle: "undefined" !== typeof e.coneOuterAngle ? e.coneOuterAngle : 360,
                        coneOuterGain: "undefined" !== typeof e.coneOuterGain ? e.coneOuterGain : 0,
                        distanceModel: "undefined" !== typeof e.distanceModel ? e.distanceModel : "inverse",
                        maxDistance: "undefined" !== typeof e.maxDistance ? e.maxDistance : 1e4,
                        panningModel: "undefined" !== typeof e.panningModel ? e.panningModel : "HRTF",
                        refDistance: "undefined" !== typeof e.refDistance ? e.refDistance : 1,
                        rolloffFactor: "undefined" !== typeof e.rolloffFactor ? e.rolloffFactor : 1
                    }, r._onstereo = e.onstereo ? [{
                        fn: e.onstereo
                    }] : [], r._onpos = e.onpos ? [{
                        fn: e.onpos
                    }] : [], r._onorientation = e.onorientation ? [{
                        fn: e.onorientation
                    }] : [], t.call(this, e)
                }), Howl.prototype.stereo = function(t, r) {
                    var i = this;
                    if (!i._webAudio) return i;
                    if ("loaded" !== i._state) return i._queue.push({
                        event: "stereo",
                        action: function() {
                            i.stereo(t, r)
                        }
                    }), i;
                    var n = "undefined" === typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
                    if ("undefined" === typeof r) {
                        if ("number" !== typeof t) return i._stereo;
                        i._stereo = t, i._pos = [t, 0, 0]
                    }
                    for (var a = i._getSoundIds(r), s = 0; s < a.length; s++) {
                        var o = i._soundById(a[s]);
                        if (o) {
                            if ("number" !== typeof t) return o._stereo;
                            o._stereo = t, o._pos = [t, 0, 0], o._node && (o._pannerAttr.panningModel = "equalpower", o._panner && o._panner.pan || e(o, n), "spatial" === n ? "undefined" !== typeof o._panner.positionX ? (o._panner.positionX.setValueAtTime(t, Howler.ctx.currentTime), o._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), o._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : o._panner.setPosition(t, 0, 0) : o._panner.pan.setValueAtTime(t, Howler.ctx.currentTime)), i._emit("stereo", o._id)
                        }
                    }
                    return i
                }, Howl.prototype.pos = function(t, r, i, n) {
                    var a = this;
                    if (!a._webAudio) return a;
                    if ("loaded" !== a._state) return a._queue.push({
                        event: "pos",
                        action: function() {
                            a.pos(t, r, i, n)
                        }
                    }), a;
                    if (r = "number" !== typeof r ? 0 : r, i = "number" !== typeof i ? -.5 : i, "undefined" === typeof n) {
                        if ("number" !== typeof t) return a._pos;
                        a._pos = [t, r, i]
                    }
                    for (var s = a._getSoundIds(n), o = 0; o < s.length; o++) {
                        var l = a._soundById(s[o]);
                        if (l) {
                            if ("number" !== typeof t) return l._pos;
                            l._pos = [t, r, i], l._node && (l._panner && !l._panner.pan || e(l, "spatial"), "undefined" !== typeof l._panner.positionX ? (l._panner.positionX.setValueAtTime(t, Howler.ctx.currentTime), l._panner.positionY.setValueAtTime(r, Howler.ctx.currentTime), l._panner.positionZ.setValueAtTime(i, Howler.ctx.currentTime)) : l._panner.setPosition(t, r, i)), a._emit("pos", l._id)
                        }
                    }
                    return a
                }, Howl.prototype.orientation = function(t, r, i, n) {
                    var a = this;
                    if (!a._webAudio) return a;
                    if ("loaded" !== a._state) return a._queue.push({
                        event: "orientation",
                        action: function() {
                            a.orientation(t, r, i, n)
                        }
                    }), a;
                    if (r = "number" !== typeof r ? a._orientation[1] : r, i = "number" !== typeof i ? a._orientation[2] : i, "undefined" === typeof n) {
                        if ("number" !== typeof t) return a._orientation;
                        a._orientation = [t, r, i]
                    }
                    for (var s = a._getSoundIds(n), o = 0; o < s.length; o++) {
                        var l = a._soundById(s[o]);
                        if (l) {
                            if ("number" !== typeof t) return l._orientation;
                            l._orientation = [t, r, i], l._node && (l._panner || (l._pos || (l._pos = a._pos || [0, 0, -.5]), e(l, "spatial")), "undefined" !== typeof l._panner.orientationX ? (l._panner.orientationX.setValueAtTime(t, Howler.ctx.currentTime), l._panner.orientationY.setValueAtTime(r, Howler.ctx.currentTime), l._panner.orientationZ.setValueAtTime(i, Howler.ctx.currentTime)) : l._panner.setOrientation(t, r, i)), a._emit("orientation", l._id)
                        }
                    }
                    return a
                }, Howl.prototype.pannerAttr = function() {
                    var t, r, i, n = this,
                        a = arguments;
                    if (!n._webAudio) return n;
                    if (0 === a.length) return n._pannerAttr;
                    if (1 === a.length) {
                        if ("object" !== typeof a[0]) return (i = n._soundById(parseInt(a[0], 10))) ? i._pannerAttr : n._pannerAttr;
                        t = a[0], "undefined" === typeof r && (t.pannerAttr || (t.pannerAttr = {
                            coneInnerAngle: t.coneInnerAngle,
                            coneOuterAngle: t.coneOuterAngle,
                            coneOuterGain: t.coneOuterGain,
                            distanceModel: t.distanceModel,
                            maxDistance: t.maxDistance,
                            refDistance: t.refDistance,
                            rolloffFactor: t.rolloffFactor,
                            panningModel: t.panningModel
                        }), n._pannerAttr = {
                            coneInnerAngle: "undefined" !== typeof t.pannerAttr.coneInnerAngle ? t.pannerAttr.coneInnerAngle : n._coneInnerAngle,
                            coneOuterAngle: "undefined" !== typeof t.pannerAttr.coneOuterAngle ? t.pannerAttr.coneOuterAngle : n._coneOuterAngle,
                            coneOuterGain: "undefined" !== typeof t.pannerAttr.coneOuterGain ? t.pannerAttr.coneOuterGain : n._coneOuterGain,
                            distanceModel: "undefined" !== typeof t.pannerAttr.distanceModel ? t.pannerAttr.distanceModel : n._distanceModel,
                            maxDistance: "undefined" !== typeof t.pannerAttr.maxDistance ? t.pannerAttr.maxDistance : n._maxDistance,
                            refDistance: "undefined" !== typeof t.pannerAttr.refDistance ? t.pannerAttr.refDistance : n._refDistance,
                            rolloffFactor: "undefined" !== typeof t.pannerAttr.rolloffFactor ? t.pannerAttr.rolloffFactor : n._rolloffFactor,
                            panningModel: "undefined" !== typeof t.pannerAttr.panningModel ? t.pannerAttr.panningModel : n._panningModel
                        })
                    } else 2 === a.length && (t = a[0], r = parseInt(a[1], 10));
                    for (var s = n._getSoundIds(r), o = 0; o < s.length; o++)
                        if (i = n._soundById(s[o])) {
                            var l = i._pannerAttr;
                            l = {
                                coneInnerAngle: "undefined" !== typeof t.coneInnerAngle ? t.coneInnerAngle : l.coneInnerAngle,
                                coneOuterAngle: "undefined" !== typeof t.coneOuterAngle ? t.coneOuterAngle : l.coneOuterAngle,
                                coneOuterGain: "undefined" !== typeof t.coneOuterGain ? t.coneOuterGain : l.coneOuterGain,
                                distanceModel: "undefined" !== typeof t.distanceModel ? t.distanceModel : l.distanceModel,
                                maxDistance: "undefined" !== typeof t.maxDistance ? t.maxDistance : l.maxDistance,
                                refDistance: "undefined" !== typeof t.refDistance ? t.refDistance : l.refDistance,
                                rolloffFactor: "undefined" !== typeof t.rolloffFactor ? t.rolloffFactor : l.rolloffFactor,
                                panningModel: "undefined" !== typeof t.panningModel ? t.panningModel : l.panningModel
                            };
                            var h = i._panner;
                            h ? (h.coneInnerAngle = l.coneInnerAngle, h.coneOuterAngle = l.coneOuterAngle, h.coneOuterGain = l.coneOuterGain, h.distanceModel = l.distanceModel, h.maxDistance = l.maxDistance, h.refDistance = l.refDistance, h.rolloffFactor = l.rolloffFactor, h.panningModel = l.panningModel) : (i._pos || (i._pos = n._pos || [0, 0, -.5]), e(i, "spatial"))
                        }
                    return n
                }, Sound.prototype.init = function(t) {
                    return function() {
                        var e = this,
                            r = e._parent;
                        e._orientation = r._orientation, e._stereo = r._stereo, e._pos = r._pos, e._pannerAttr = r._pannerAttr, t.call(this), e._stereo ? r.stereo(e._stereo) : e._pos && r.pos(e._pos[0], e._pos[1], e._pos[2], e._id)
                    }
                }(Sound.prototype.init), Sound.prototype.reset = function(t) {
                    return function() {
                        var e = this,
                            r = e._parent;
                        return e._orientation = r._orientation, e._stereo = r._stereo, e._pos = r._pos, e._pannerAttr = r._pannerAttr, e._stereo ? r.stereo(e._stereo) : e._pos ? r.pos(e._pos[0], e._pos[1], e._pos[2], e._id) : e._panner && (e._panner.disconnect(0), e._panner = void 0, r._refreshBuffer(e)), t.call(this)
                    }
                }(Sound.prototype.reset);
                var e = function(t, e) {
                    "spatial" === (e = e || "spatial") ? (t._panner = Howler.ctx.createPanner(), t._panner.coneInnerAngle = t._pannerAttr.coneInnerAngle, t._panner.coneOuterAngle = t._pannerAttr.coneOuterAngle, t._panner.coneOuterGain = t._pannerAttr.coneOuterGain, t._panner.distanceModel = t._pannerAttr.distanceModel, t._panner.maxDistance = t._pannerAttr.maxDistance, t._panner.refDistance = t._pannerAttr.refDistance, t._panner.rolloffFactor = t._pannerAttr.rolloffFactor, t._panner.panningModel = t._pannerAttr.panningModel, "undefined" !== typeof t._panner.positionX ? (t._panner.positionX.setValueAtTime(t._pos[0], Howler.ctx.currentTime), t._panner.positionY.setValueAtTime(t._pos[1], Howler.ctx.currentTime), t._panner.positionZ.setValueAtTime(t._pos[2], Howler.ctx.currentTime)) : t._panner.setPosition(t._pos[0], t._pos[1], t._pos[2]), "undefined" !== typeof t._panner.orientationX ? (t._panner.orientationX.setValueAtTime(t._orientation[0], Howler.ctx.currentTime), t._panner.orientationY.setValueAtTime(t._orientation[1], Howler.ctx.currentTime), t._panner.orientationZ.setValueAtTime(t._orientation[2], Howler.ctx.currentTime)) : t._panner.setOrientation(t._orientation[0], t._orientation[1], t._orientation[2])) : (t._panner = Howler.ctx.createStereoPanner(), t._panner.pan.setValueAtTime(t._stereo, Howler.ctx.currentTime)), t._panner.connect(t._node), t._paused || t._parent.pause(t._id, !0).play(t._id, !0)
                }
            }()
        },
        9260: function(t, e, r) {
            ! function(t, e, r, i) {
                "use strict";
                e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
                var n = "default" in r ? r.default : r;

                function a(t, e, r) {
                    return e in t ? Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = r, t
                }

                function s(t, e) {
                    var r = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(t);
                        e && (i = i.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), r.push.apply(r, i)
                    }
                    return r
                }

                function o(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? s(Object(r), !0).forEach((function(e) {
                            a(t, e, r[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                        }))
                    }
                    return t
                }

                function l(t, e) {
                    if (null == t) return {};
                    var r, i, n = {},
                        a = Object.keys(t);
                    for (i = 0; i < a.length; i++) r = a[i], e.indexOf(r) >= 0 || (n[r] = t[r]);
                    return n
                }

                function h(t, e) {
                    if (null == t) return {};
                    var r, i, n = l(t, e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(t);
                        for (i = 0; i < a.length; i++) r = a[i], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r])
                    }
                    return n
                }

                function p(t, e) {
                    return c(t) || u(t, e) || f(t, e) || m()
                }

                function c(t) {
                    if (Array.isArray(t)) return t
                }

                function u(t, e) {
                    if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) {
                        var r = [],
                            i = !0,
                            n = !1,
                            a = void 0;
                        try {
                            for (var s, o = t[Symbol.iterator](); !(i = (s = o.next()).done) && (r.push(s.value), !e || r.length !== e); i = !0);
                        } catch (l) {
                            n = !0, a = l
                        } finally {
                            try {
                                i || null == o.return || o.return()
                            } finally {
                                if (n) throw a
                            }
                        }
                        return r
                    }
                }

                function f(t, e) {
                    if (t) {
                        if ("string" === typeof t) return d(t, e);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? d(t, e) : void 0
                    }
                }

                function d(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for (var r = 0, i = new Array(e); r < e; r++) i[r] = t[r];
                    return i
                }

                function m() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var y = function(t, i) {
                    var a = t.animationData,
                        s = t.loop,
                        l = t.autoplay,
                        c = t.initialSegment,
                        u = t.onComplete,
                        f = t.onLoopComplete,
                        d = t.onEnterFrame,
                        m = t.onSegmentStart,
                        y = t.onConfigReady,
                        g = t.onDataReady,
                        v = t.onDataFailed,
                        _ = t.onLoadedImages,
                        b = t.onDOMLoaded,
                        x = t.onDestroy,
                        P = (t.lottieRef, t.renderer, t.name, t.assetsPath, t.rendererSettings, h(t, ["animationData", "loop", "autoplay", "initialSegment", "onComplete", "onLoopComplete", "onEnterFrame", "onSegmentStart", "onConfigReady", "onDataReady", "onDataFailed", "onLoadedImages", "onDOMLoaded", "onDestroy", "lottieRef", "renderer", "name", "assetsPath", "rendererSettings"])),
                        S = p(r.useState(!1), 2),
                        A = S[0],
                        E = S[1],
                        w = r.useRef(),
                        k = r.useRef(null),
                        T = function() {
                            var t;
                            null === (t = w.current) || void 0 === t || t.play()
                        },
                        C = function() {
                            var t;
                            null === (t = w.current) || void 0 === t || t.stop()
                        },
                        M = function() {
                            var t;
                            null === (t = w.current) || void 0 === t || t.pause()
                        },
                        D = function(t) {
                            var e;
                            null === (e = w.current) || void 0 === e || e.setSpeed(t)
                        },
                        F = function(t, e) {
                            var r;
                            null === (r = w.current) || void 0 === r || r.goToAndPlay(t, e)
                        },
                        I = function(t, e) {
                            var r;
                            null === (r = w.current) || void 0 === r || r.goToAndStop(t, e)
                        },
                        V = function(t) {
                            var e;
                            null === (e = w.current) || void 0 === e || e.setDirection(t)
                        },
                        R = function(t, e) {
                            var r;
                            null === (r = w.current) || void 0 === r || r.playSegments(t, e)
                        },
                        L = function(t) {
                            var e;
                            null === (e = w.current) || void 0 === e || e.setSubframe(t)
                        },
                        O = function(t) {
                            var e;
                            return null === (e = w.current) || void 0 === e ? void 0 : e.getDuration(t)
                        },
                        B = function() {
                            var t;
                            null === (t = w.current) || void 0 === t || t.destroy()
                        },
                        j = function() {
                            var r, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            if (k.current) {
                                null === (r = w.current) || void 0 === r || r.destroy();
                                var n = o(o(o({}, t), i), {}, {
                                    container: k.current
                                });
                                w.current = e.loadAnimation(n), E(!!w.current)
                            }
                        };
                    return r.useEffect((function() {
                        j()
                    }), [a, s, l, c]), r.useEffect((function() {
                        var t = [{
                            name: "complete",
                            handler: u
                        }, {
                            name: "loopComplete",
                            handler: f
                        }, {
                            name: "enterFrame",
                            handler: d
                        }, {
                            name: "segmentStart",
                            handler: m
                        }, {
                            name: "config_ready",
                            handler: y
                        }, {
                            name: "data_ready",
                            handler: g
                        }, {
                            name: "data_failed",
                            handler: v
                        }, {
                            name: "loaded_images",
                            handler: _
                        }, {
                            name: "DOMLoaded",
                            handler: b
                        }, {
                            name: "destroy",
                            handler: x
                        }].filter((function(t) {
                            return null != t.handler
                        }));
                        if (t.length) {
                            var e = t.map((function(t) {
                                var e;
                                return null === (e = w.current) || void 0 === e || e.addEventListener(t.name, t.handler),
                                    function() {
                                        var e;
                                        null === (e = w.current) || void 0 === e || e.removeEventListener(t.name, t.handler)
                                    }
                            }));
                            return function() {
                                e.forEach((function(t) {
                                    return t()
                                }))
                            }
                        }
                    }), [u, f, d, m, y, g, v, _, b, x]), {
                        View: n.createElement("div", Object.assign({
                            style: i,
                            ref: k
                        }, P)),
                        play: T,
                        stop: C,
                        pause: M,
                        setSpeed: D,
                        goToAndStop: I,
                        goToAndPlay: F,
                        setDirection: V,
                        playSegments: R,
                        setSubframe: L,
                        getDuration: O,
                        destroy: B,
                        animationLoaded: A,
                        animationItem: w.current
                    }
                };

                function g(t) {
                    var e = t.getBoundingClientRect(),
                        r = e.top,
                        i = e.height;
                    return (window.innerHeight - r) / (window.innerHeight + i)
                }

                function v(t, e, r) {
                    var i = t.getBoundingClientRect(),
                        n = i.top;
                    return {
                        x: (e - i.left) / i.width,
                        y: (r - n) / i.height
                    }
                }
                var _ = function(t) {
                        var e = t.wrapperRef,
                            i = t.animationItem,
                            n = t.mode,
                            a = t.actions;
                        r.useEffect((function() {
                            var t = e.current;
                            if (t && i) {
                                i.stop();
                                var r = function() {
                                        var e = null,
                                            r = function() {
                                                var r = g(t),
                                                    n = a.find((function(t) {
                                                        var e = t.visibility;
                                                        return e && r >= e[0] && r <= e[1]
                                                    }));
                                                if (n) {
                                                    if ("seek" === n.type && n.visibility && 2 === n.frames.length) {
                                                        var s = n.frames[0] + Math.ceil((r - n.visibility[0]) / (n.visibility[1] - n.visibility[0]) * n.frames[1]);
                                                        i.goToAndStop(s - i.firstFrame - 1, !0)
                                                    }
                                                    "loop" === n.type && (null === e || e !== n.frames || i.isPaused) && (i.playSegments(n.frames, !0), e = n.frames), "play" === n.type && i.isPaused && (i.resetSegments(!0), i.play()), "stop" === n.type && i.goToAndStop(n.frames[0] - i.firstFrame - 1, !0)
                                                }
                                            };
                                        return document.addEventListener("scroll", r),
                                            function() {
                                                document.removeEventListener("scroll", r)
                                            }
                                    },
                                    s = function() {
                                        var e = function(e, r) {
                                                var n = e,
                                                    s = r;
                                                if (-1 !== n && -1 !== s) {
                                                    var o = v(t, n, s);
                                                    n = o.x, s = o.y
                                                }
                                                var l = a.find((function(t) {
                                                    var e = t.position;
                                                    return e && Array.isArray(e.x) && Array.isArray(e.y) ? n >= e.x[0] && n <= e.x[1] && s >= e.y[0] && s <= e.y[1] : !(!e || Number.isNaN(e.x) || Number.isNaN(e.y)) && n === e.x && s === e.y
                                                }));
                                                if (l) {
                                                    if ("seek" === l.type && l.position && Array.isArray(l.position.x) && Array.isArray(l.position.y) && 2 === l.frames.length) {
                                                        var h = (n - l.position.x[0]) / (l.position.x[1] - l.position.x[0]),
                                                            p = (s - l.position.y[0]) / (l.position.y[1] - l.position.y[0]);
                                                        i.playSegments(l.frames, !0), i.goToAndStop(Math.ceil((h + p) / 2 * (l.frames[1] - l.frames[0])), !0)
                                                    }
                                                    "loop" === l.type && i.playSegments(l.frames, !0), "play" === l.type && (i.isPaused && i.resetSegments(!1), i.playSegments(l.frames)), "stop" === l.type && i.goToAndStop(l.frames[0], !0)
                                                }
                                            },
                                            r = function(t) {
                                                e(t.clientX, t.clientY)
                                            },
                                            n = function() {
                                                e(-1, -1)
                                            };
                                        return t.addEventListener("mousemove", r), t.addEventListener("mouseout", n),
                                            function() {
                                                t.removeEventListener("mousemove", r), t.removeEventListener("mouseout", n)
                                            }
                                    };
                                switch (n) {
                                    case "scroll":
                                        return r();
                                    case "cursor":
                                        return s()
                                }
                            }
                        }), [n, i])
                    },
                    b = function(t) {
                        var e = t.actions,
                            i = t.mode,
                            a = t.lottieObj,
                            s = a.animationItem,
                            o = a.View,
                            l = r.useRef(null);
                        return _({
                            actions: e,
                            animationItem: s,
                            mode: i,
                            wrapperRef: l
                        }), n.createElement("div", {
                            ref: l
                        }, o)
                    },
                    x = function(t) {
                        var e, i = t.style,
                            n = t.interactivity,
                            a = h(t, ["style", "interactivity"]),
                            s = y(a, i),
                            l = s.View,
                            p = s.play,
                            c = s.stop,
                            u = s.pause,
                            f = s.setSpeed,
                            d = s.goToAndStop,
                            m = s.goToAndPlay,
                            g = s.setDirection,
                            v = s.playSegments,
                            _ = s.setSubframe,
                            x = s.getDuration,
                            P = s.destroy,
                            S = s.animationLoaded,
                            A = s.animationItem;
                        return r.useEffect((function() {
                            t.lottieRef && (t.lottieRef.current = {
                                play: p,
                                stop: c,
                                pause: u,
                                setSpeed: f,
                                goToAndPlay: m,
                                goToAndStop: d,
                                setDirection: g,
                                playSegments: v,
                                setSubframe: _,
                                getDuration: x,
                                destroy: P,
                                animationLoaded: S,
                                animationItem: A
                            })
                        }), [null === (e = t.lottieRef) || void 0 === e ? void 0 : e.current]), n ? b(o({
                            lottieObj: {
                                View: l,
                                play: p,
                                stop: c,
                                pause: u,
                                setSpeed: f,
                                goToAndStop: d,
                                goToAndPlay: m,
                                setDirection: g,
                                playSegments: v,
                                setSubframe: _,
                                getDuration: x,
                                destroy: P,
                                animationLoaded: S,
                                animationItem: A
                            }
                        }, n)) : l
                    };
                x.propTypes = {
                    animationData: i.shape(void 0).isRequired,
                    loop: i.oneOfType([i.bool, i.number]),
                    autoplay: i.bool,
                    initialSegment: i.arrayOf(i.number.isRequired),
                    onComplete: i.func,
                    onLoopComplete: i.func,
                    onEnterFrame: i.func,
                    onSegmentStart: i.func,
                    onConfigReady: i.func,
                    onDataReady: i.func,
                    onDataFailed: i.func,
                    onLoadedImages: i.func,
                    onDOMLoaded: i.func,
                    onDestroy: i.func,
                    style: i.shape(void 0)
                }, x.defaultProps = {
                    loop: !0,
                    autoplay: !0,
                    initialSegment: null,
                    onComplete: null,
                    onLoopComplete: null,
                    onEnterFrame: null,
                    onSegmentStart: null,
                    onConfigReady: null,
                    onDataReady: null,
                    onDataFailed: null,
                    onLoadedImages: null,
                    onDOMLoaded: null,
                    onDestroy: null,
                    style: void 0
                };
                var P = x,
                    S = y;
                t.LottiePlayer = e, t.Animator = P, t.default = x, t.useAnimator = S, t.useLottie = y, t.useLottieInteractivity = b, Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            }(e, r(1248), r(7294), r(5697))
        },
        1248: function(module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_RESULT__, root, factory;
            "undefined" !== typeof navigator && (root = window || {}, factory = function(window) {
                "use strict";
                var svgNS = "http://www.w3.org/2000/svg",
                    locationHref = "",
                    initialDefaultFrame = -999999,
                    _useWebWorker = !1,
                    subframeEnabled = !0,
                    idPrefix = "",
                    expressionsPlugin, isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
                    cachedColors = {},
                    bmRnd, bmPow = Math.pow,
                    bmSqrt = Math.sqrt,
                    bmFloor = Math.floor,
                    bmMax = Math.max,
                    bmMin = Math.min,
                    BMMath = {};

                function ProjectInterface() {
                    return {}
                }! function() {
                    var t, e = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
                        r = e.length;
                    for (t = 0; t < r; t += 1) BMMath[e[t]] = Math[e[t]]
                }(), BMMath.random = Math.random, BMMath.abs = function(t) {
                    if ("object" === typeof t && t.length) {
                        var e, r = createSizedArray(t.length),
                            i = t.length;
                        for (e = 0; e < i; e += 1) r[e] = Math.abs(t[e]);
                        return r
                    }
                    return Math.abs(t)
                };
                var defaultCurveSegments = 150,
                    degToRads = Math.PI / 180,
                    roundCorner = .5519;

                function roundValues(t) {
                    bmRnd = t ? Math.round : function(t) {
                        return t
                    }
                }

                function styleDiv(t) {
                    t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.display = "block", t.style.transformOrigin = "0 0", t.style.webkitTransformOrigin = "0 0", t.style.backfaceVisibility = "visible", t.style.webkitBackfaceVisibility = "visible", t.style.transformStyle = "preserve-3d", t.style.webkitTransformStyle = "preserve-3d", t.style.mozTransformStyle = "preserve-3d"
                }

                function BMEnterFrameEvent(t, e, r, i) {
                    this.type = t, this.currentTime = e, this.totalTime = r, this.direction = i < 0 ? -1 : 1
                }

                function BMCompleteEvent(t, e) {
                    this.type = t, this.direction = e < 0 ? -1 : 1
                }

                function BMCompleteLoopEvent(t, e, r, i) {
                    this.type = t, this.currentLoop = r, this.totalLoops = e, this.direction = i < 0 ? -1 : 1
                }

                function BMSegmentStartEvent(t, e, r) {
                    this.type = t, this.firstFrame = e, this.totalFrames = r
                }

                function BMDestroyEvent(t, e) {
                    this.type = t, this.target = e
                }

                function BMRenderFrameErrorEvent(t, e) {
                    this.type = "renderFrameError", this.nativeError = t, this.currentTime = e
                }

                function BMConfigErrorEvent(t) {
                    this.type = "configError", this.nativeError = t
                }

                function BMAnimationConfigErrorEvent(t, e) {
                    this.type = t, this.nativeError = e
                }
                roundValues(!1);
                var createElementID = function() {
                    var t = 0;
                    return function() {
                        return idPrefix + "__lottie_element_" + (t += 1)
                    }
                }();

                function HSVtoRGB(t, e, r) {
                    var i, n, a, s, o, l, h, p;
                    switch (l = r * (1 - e), h = r * (1 - (o = 6 * t - (s = Math.floor(6 * t))) * e), p = r * (1 - (1 - o) * e), s % 6) {
                        case 0:
                            i = r, n = p, a = l;
                            break;
                        case 1:
                            i = h, n = r, a = l;
                            break;
                        case 2:
                            i = l, n = r, a = p;
                            break;
                        case 3:
                            i = l, n = h, a = r;
                            break;
                        case 4:
                            i = p, n = l, a = r;
                            break;
                        case 5:
                            i = r, n = l, a = h
                    }
                    return [i, n, a]
                }

                function RGBtoHSV(t, e, r) {
                    var i, n = Math.max(t, e, r),
                        a = Math.min(t, e, r),
                        s = n - a,
                        o = 0 === n ? 0 : s / n,
                        l = n / 255;
                    switch (n) {
                        case a:
                            i = 0;
                            break;
                        case t:
                            i = e - r + s * (e < r ? 6 : 0), i /= 6 * s;
                            break;
                        case e:
                            i = r - t + 2 * s, i /= 6 * s;
                            break;
                        case r:
                            i = t - e + 4 * s, i /= 6 * s
                    }
                    return [i, o, l]
                }

                function addSaturationToRGB(t, e) {
                    var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
                    return r[1] += e, r[1] > 1 ? r[1] = 1 : r[1] <= 0 && (r[1] = 0), HSVtoRGB(r[0], r[1], r[2])
                }

                function addBrightnessToRGB(t, e) {
                    var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
                    return r[2] += e, r[2] > 1 ? r[2] = 1 : r[2] < 0 && (r[2] = 0), HSVtoRGB(r[0], r[1], r[2])
                }

                function addHueToRGB(t, e) {
                    var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
                    return r[0] += e / 360, r[0] > 1 ? r[0] -= 1 : r[0] < 0 && (r[0] += 1), HSVtoRGB(r[0], r[1], r[2])
                }
                var rgbToHex = function() {
                    var t, e, r = [];
                    for (t = 0; t < 256; t += 1) e = t.toString(16), r[t] = 1 === e.length ? "0" + e : e;
                    return function(t, e, i) {
                        return t < 0 && (t = 0), e < 0 && (e = 0), i < 0 && (i = 0), "#" + r[t] + r[e] + r[i]
                    }
                }();

                function BaseEvent() {}
                BaseEvent.prototype = {
                    triggerEvent: function(t, e) {
                        if (this._cbs[t])
                            for (var r = this._cbs[t], i = 0; i < r.length; i += 1) r[i](e)
                    },
                    addEventListener: function(t, e) {
                        return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e),
                            function() {
                                this.removeEventListener(t, e)
                            }.bind(this)
                    },
                    removeEventListener: function(t, e) {
                        if (e) {
                            if (this._cbs[t]) {
                                for (var r = 0, i = this._cbs[t].length; r < i;) this._cbs[t][r] === e && (this._cbs[t].splice(r, 1), r -= 1, i -= 1), r += 1;
                                this._cbs[t].length || (this._cbs[t] = null)
                            }
                        } else this._cbs[t] = null
                    }
                };
                var createTypedArray = function() {
                    function t(t, e) {
                        var r, i = 0,
                            n = [];
                        switch (t) {
                            case "int16":
                            case "uint8c":
                                r = 1;
                                break;
                            default:
                                r = 1.1
                        }
                        for (i = 0; i < e; i += 1) n.push(r);
                        return n
                    }
                    return "function" === typeof Uint8ClampedArray && "function" === typeof Float32Array ? function(e, r) {
                        return "float32" === e ? new Float32Array(r) : "int16" === e ? new Int16Array(r) : "uint8c" === e ? new Uint8ClampedArray(r) : t(e, r)
                    } : t
                }();

                function createSizedArray(t) {
                    return Array.apply(null, {
                        length: t
                    })
                }

                function createNS(t) {
                    return document.createElementNS(svgNS, t)
                }

                function createTag(t) {
                    return document.createElement(t)
                }

                function DynamicPropertyContainer() {}
                DynamicPropertyContainer.prototype = {
                    addDynamicProperty: function(t) {
                        -1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = !0)
                    },
                    iterateDynamicProperties: function() {
                        var t;
                        this._mdf = !1;
                        var e = this.dynamicProperties.length;
                        for (t = 0; t < e; t += 1) this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = !0)
                    },
                    initDynamicPropertyContainer: function(t) {
                        this.container = t, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
                    }
                };
                var getBlendMode = function() {
                        var t = {
                            0: "source-over",
                            1: "multiply",
                            2: "screen",
                            3: "overlay",
                            4: "darken",
                            5: "lighten",
                            6: "color-dodge",
                            7: "color-burn",
                            8: "hard-light",
                            9: "soft-light",
                            10: "difference",
                            11: "exclusion",
                            12: "hue",
                            13: "saturation",
                            14: "color",
                            15: "luminosity"
                        };
                        return function(e) {
                            return t[e] || ""
                        }
                    }(),
                    lineCapEnum = {
                        1: "butt",
                        2: "round",
                        3: "square"
                    },
                    lineJoinEnum = {
                        1: "miter",
                        2: "round",
                        3: "bevel"
                    },
                    Matrix = function() {
                        var t = Math.cos,
                            e = Math.sin,
                            r = Math.tan,
                            i = Math.round;

                        function n() {
                            return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
                        }

                        function a(r) {
                            if (0 === r) return this;
                            var i = t(r),
                                n = e(r);
                            return this._t(i, -n, 0, 0, n, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                        }

                        function s(r) {
                            if (0 === r) return this;
                            var i = t(r),
                                n = e(r);
                            return this._t(1, 0, 0, 0, 0, i, -n, 0, 0, n, i, 0, 0, 0, 0, 1)
                        }

                        function o(r) {
                            if (0 === r) return this;
                            var i = t(r),
                                n = e(r);
                            return this._t(i, 0, n, 0, 0, 1, 0, 0, -n, 0, i, 0, 0, 0, 0, 1)
                        }

                        function l(r) {
                            if (0 === r) return this;
                            var i = t(r),
                                n = e(r);
                            return this._t(i, -n, 0, 0, n, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                        }

                        function h(t, e) {
                            return this._t(1, e, t, 1, 0, 0)
                        }

                        function p(t, e) {
                            return this.shear(r(t), r(e))
                        }

                        function c(i, n) {
                            var a = t(n),
                                s = e(n);
                            return this._t(a, s, 0, 0, -s, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, r(i), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(a, -s, 0, 0, s, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                        }

                        function u(t, e, r) {
                            return r || 0 === r || (r = 1), 1 === t && 1 === e && 1 === r ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, r, 0, 0, 0, 0, 1)
                        }

                        function f(t, e, r, i, n, a, s, o, l, h, p, c, u, f, d, m) {
                            return this.props[0] = t, this.props[1] = e, this.props[2] = r, this.props[3] = i, this.props[4] = n, this.props[5] = a, this.props[6] = s, this.props[7] = o, this.props[8] = l, this.props[9] = h, this.props[10] = p, this.props[11] = c, this.props[12] = u, this.props[13] = f, this.props[14] = d, this.props[15] = m, this
                        }

                        function d(t, e, r) {
                            return r = r || 0, 0 !== t || 0 !== e || 0 !== r ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, r, 1) : this
                        }

                        function m(t, e, r, i, n, a, s, o, l, h, p, c, u, f, d, m) {
                            var y = this.props;
                            if (1 === t && 0 === e && 0 === r && 0 === i && 0 === n && 1 === a && 0 === s && 0 === o && 0 === l && 0 === h && 1 === p && 0 === c) return y[12] = y[12] * t + y[15] * u, y[13] = y[13] * a + y[15] * f, y[14] = y[14] * p + y[15] * d, y[15] *= m, this._identityCalculated = !1, this;
                            var g = y[0],
                                v = y[1],
                                _ = y[2],
                                b = y[3],
                                x = y[4],
                                P = y[5],
                                S = y[6],
                                A = y[7],
                                E = y[8],
                                w = y[9],
                                k = y[10],
                                T = y[11],
                                C = y[12],
                                M = y[13],
                                D = y[14],
                                F = y[15];
                            return y[0] = g * t + v * n + _ * l + b * u, y[1] = g * e + v * a + _ * h + b * f, y[2] = g * r + v * s + _ * p + b * d, y[3] = g * i + v * o + _ * c + b * m, y[4] = x * t + P * n + S * l + A * u, y[5] = x * e + P * a + S * h + A * f, y[6] = x * r + P * s + S * p + A * d, y[7] = x * i + P * o + S * c + A * m, y[8] = E * t + w * n + k * l + T * u, y[9] = E * e + w * a + k * h + T * f, y[10] = E * r + w * s + k * p + T * d, y[11] = E * i + w * o + k * c + T * m, y[12] = C * t + M * n + D * l + F * u, y[13] = C * e + M * a + D * h + F * f, y[14] = C * r + M * s + D * p + F * d, y[15] = C * i + M * o + D * c + F * m, this._identityCalculated = !1, this
                        }

                        function y() {
                            return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity
                        }

                        function g(t) {
                            for (var e = 0; e < 16;) {
                                if (t.props[e] !== this.props[e]) return !1;
                                e += 1
                            }
                            return !0
                        }

                        function v(t) {
                            var e;
                            for (e = 0; e < 16; e += 1) t.props[e] = this.props[e];
                            return t
                        }

                        function _(t) {
                            var e;
                            for (e = 0; e < 16; e += 1) this.props[e] = t[e]
                        }

                        function b(t, e, r) {
                            return {
                                x: t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12],
                                y: t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13],
                                z: t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]
                            }
                        }

                        function x(t, e, r) {
                            return t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12]
                        }

                        function P(t, e, r) {
                            return t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13]
                        }

                        function S(t, e, r) {
                            return t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]
                        }

                        function A() {
                            var t = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                                e = this.props[5] / t,
                                r = -this.props[1] / t,
                                i = -this.props[4] / t,
                                n = this.props[0] / t,
                                a = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t,
                                s = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t,
                                o = new Matrix;
                            return o.props[0] = e, o.props[1] = r, o.props[4] = i, o.props[5] = n, o.props[12] = a, o.props[13] = s, o
                        }

                        function E(t) {
                            return this.getInverseMatrix().applyToPointArray(t[0], t[1], t[2] || 0)
                        }

                        function w(t) {
                            var e, r = t.length,
                                i = [];
                            for (e = 0; e < r; e += 1) i[e] = E(t[e]);
                            return i
                        }

                        function k(t, e, r) {
                            var i = createTypedArray("float32", 6);
                            if (this.isIdentity()) i[0] = t[0], i[1] = t[1], i[2] = e[0], i[3] = e[1], i[4] = r[0], i[5] = r[1];
                            else {
                                var n = this.props[0],
                                    a = this.props[1],
                                    s = this.props[4],
                                    o = this.props[5],
                                    l = this.props[12],
                                    h = this.props[13];
                                i[0] = t[0] * n + t[1] * s + l, i[1] = t[0] * a + t[1] * o + h, i[2] = e[0] * n + e[1] * s + l, i[3] = e[0] * a + e[1] * o + h, i[4] = r[0] * n + r[1] * s + l, i[5] = r[0] * a + r[1] * o + h
                            }
                            return i
                        }

                        function T(t, e, r) {
                            return this.isIdentity() ? [t, e, r] : [t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]]
                        }

                        function C(t, e) {
                            if (this.isIdentity()) return t + "," + e;
                            var r = this.props;
                            return Math.round(100 * (t * r[0] + e * r[4] + r[12])) / 100 + "," + Math.round(100 * (t * r[1] + e * r[5] + r[13])) / 100
                        }

                        function M() {
                            for (var t = 0, e = this.props, r = "matrix3d("; t < 16;) r += i(1e4 * e[t]) / 1e4, r += 15 === t ? ")" : ",", t += 1;
                            return r
                        }

                        function D(t) {
                            return t < 1e-6 && t > 0 || t > -1e-6 && t < 0 ? i(1e4 * t) / 1e4 : t
                        }

                        function F() {
                            var t = this.props;
                            return "matrix(" + D(t[0]) + "," + D(t[1]) + "," + D(t[4]) + "," + D(t[5]) + "," + D(t[12]) + "," + D(t[13]) + ")"
                        }
                        return function() {
                            this.reset = n, this.rotate = a, this.rotateX = s, this.rotateY = o, this.rotateZ = l, this.skew = p, this.skewFromAxis = c, this.shear = h, this.scale = u, this.setTransform = f, this.translate = d, this.transform = m, this.applyToPoint = b, this.applyToX = x, this.applyToY = P, this.applyToZ = S, this.applyToPointArray = T, this.applyToTriplePoints = k, this.applyToPointStringified = C, this.toCSS = M, this.to2dCSS = F, this.clone = v, this.cloneFromProps = _, this.equals = g, this.inversePoints = w, this.inversePoint = E, this.getInverseMatrix = A, this._t = this.transform, this.isIdentity = y, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset()
                        }
                    }();
                ! function(t, e) {
                    var r = this,
                        i = 256,
                        n = e.pow(i, 6),
                        a = e.pow(2, 52),
                        s = 2 * a,
                        o = 255;

                    function l(t) {
                        var e, r = t.length,
                            n = this,
                            a = 0,
                            s = n.i = n.j = 0,
                            l = n.S = [];
                        for (r || (t = [r++]); a < i;) l[a] = a++;
                        for (a = 0; a < i; a++) l[a] = l[s = o & s + t[a % r] + (e = l[a])], l[s] = e;
                        n.g = function(t) {
                            for (var e, r = 0, a = n.i, s = n.j, l = n.S; t--;) e = l[a = o & a + 1], r = r * i + l[o & (l[a] = l[s = o & s + e]) + (l[s] = e)];
                            return n.i = a, n.j = s, r
                        }
                    }

                    function h(t, e) {
                        return e.i = t.i, e.j = t.j, e.S = t.S.slice(), e
                    }

                    function p(t, e) {
                        var r, i = [],
                            n = typeof t;
                        if (e && "object" == n)
                            for (r in t) try {
                                i.push(p(t[r], e - 1))
                            } catch (a) {}
                        return i.length ? i : "string" == n ? t : t + "\0"
                    }

                    function c(t, e) {
                        for (var r, i = t + "", n = 0; n < i.length;) e[o & n] = o & (r ^= 19 * e[o & n]) + i.charCodeAt(n++);
                        return u(e)
                    }

                    function u(t) {
                        return String.fromCharCode.apply(0, t)
                    }
                    e.seedrandom = function(o, f, d) {
                        var m = [],
                            y = c(p((f = !0 === f ? {
                                entropy: !0
                            } : f || {}).entropy ? [o, u(t)] : null === o ? function() {
                                try {
                                    var e = new Uint8Array(i);
                                    return (r.crypto || r.msCrypto).getRandomValues(e), u(e)
                                } catch (s) {
                                    var n = r.navigator,
                                        a = n && n.plugins;
                                    return [+new Date, r, a, r.screen, u(t)]
                                }
                            }() : o, 3), m),
                            g = new l(m),
                            v = function() {
                                for (var t = g.g(6), e = n, r = 0; t < a;) t = (t + r) * i, e *= i, r = g.g(1);
                                for (; t >= s;) t /= 2, e /= 2, r >>>= 1;
                                return (t + r) / e
                            };
                        return v.int32 = function() {
                            return 0 | g.g(4)
                        }, v.quick = function() {
                            return g.g(4) / 4294967296
                        }, v.double = v, c(u(g.S), t), (f.pass || d || function(t, r, i, n) {
                            return n && (n.S && h(n, g), t.state = function() {
                                return h(g, {})
                            }), i ? (e.random = t, r) : t
                        })(v, y, "global" in f ? f.global : this == e, f.state)
                    }, c(e.random(), t)
                }([], BMMath);
                var BezierFactory = function() {
                    var t = {
                            getBezierEasing: function(t, r, i, n, a) {
                                var s = a || ("bez_" + t + "_" + r + "_" + i + "_" + n).replace(/\./g, "p");
                                if (e[s]) return e[s];
                                var o = new h([t, r, i, n]);
                                return e[s] = o, o
                            }
                        },
                        e = {},
                        r = .1,
                        i = "function" === typeof Float32Array;

                    function n(t, e) {
                        return 1 - 3 * e + 3 * t
                    }

                    function a(t, e) {
                        return 3 * e - 6 * t
                    }

                    function s(t) {
                        return 3 * t
                    }

                    function o(t, e, r) {
                        return ((n(e, r) * t + a(e, r)) * t + s(e)) * t
                    }

                    function l(t, e, r) {
                        return 3 * n(e, r) * t * t + 2 * a(e, r) * t + s(e)
                    }

                    function h(t) {
                        this._p = t, this._mSampleValues = i ? new Float32Array(11) : new Array(11), this._precomputed = !1, this.get = this.get.bind(this)
                    }
                    return h.prototype = {
                        get: function(t) {
                            var e = this._p[0],
                                r = this._p[1],
                                i = this._p[2],
                                n = this._p[3];
                            return this._precomputed || this._precompute(), e === r && i === n ? t : 0 === t ? 0 : 1 === t ? 1 : o(this._getTForX(t), r, n)
                        },
                        _precompute: function() {
                            var t = this._p[0],
                                e = this._p[1],
                                r = this._p[2],
                                i = this._p[3];
                            this._precomputed = !0, t === e && r === i || this._calcSampleValues()
                        },
                        _calcSampleValues: function() {
                            for (var t = this._p[0], e = this._p[2], i = 0; i < 11; ++i) this._mSampleValues[i] = o(i * r, t, e)
                        },
                        _getTForX: function(t) {
                            for (var e = this._p[0], i = this._p[2], n = this._mSampleValues, a = 0, s = 1; 10 !== s && n[s] <= t; ++s) a += r;
                            var h = a + (t - n[--s]) / (n[s + 1] - n[s]) * r,
                                p = l(h, e, i);
                            return p >= .001 ? function(t, e, r, i) {
                                for (var n = 0; n < 4; ++n) {
                                    var a = l(e, r, i);
                                    if (0 === a) return e;
                                    e -= (o(e, r, i) - t) / a
                                }
                                return e
                            }(t, h, e, i) : 0 === p ? h : function(t, e, r, i, n) {
                                var a, s, l = 0;
                                do {
                                    (a = o(s = e + (r - e) / 2, i, n) - t) > 0 ? r = s : e = s
                                } while (Math.abs(a) > 1e-7 && ++l < 10);
                                return s
                            }(t, a, a + r, e, i)
                        }
                    }, t
                }();

                function extendPrototype(t, e) {
                    var r, i, n = t.length;
                    for (r = 0; r < n; r += 1)
                        for (var a in i = t[r].prototype) Object.prototype.hasOwnProperty.call(i, a) && (e.prototype[a] = i[a])
                }

                function getDescriptor(t, e) {
                    return Object.getOwnPropertyDescriptor(t, e)
                }

                function createProxyFunction(t) {
                    function e() {}
                    return e.prototype = t, e
                }

                function bezFunction() {
                    var t = Math;

                    function e(t, e, r, i, n, a) {
                        var s = t * i + e * n + r * a - n * i - a * t - r * e;
                        return s > -.001 && s < .001
                    }
                    var r = function(t, e, r, i) {
                        var n, a, s, o, l, h, p = defaultCurveSegments,
                            c = 0,
                            u = [],
                            f = [],
                            d = bezierLengthPool.newElement();
                        for (s = r.length, n = 0; n < p; n += 1) {
                            for (l = n / (p - 1), h = 0, a = 0; a < s; a += 1) o = bmPow(1 - l, 3) * t[a] + 3 * bmPow(1 - l, 2) * l * r[a] + 3 * (1 - l) * bmPow(l, 2) * i[a] + bmPow(l, 3) * e[a], u[a] = o, null !== f[a] && (h += bmPow(u[a] - f[a], 2)), f[a] = u[a];
                            h && (c += h = bmSqrt(h)), d.percents[n] = l, d.lengths[n] = c
                        }
                        return d.addedLength = c, d
                    };

                    function i(t) {
                        this.segmentLength = 0, this.points = new Array(t)
                    }

                    function n(t, e) {
                        this.partialLength = t, this.point = e
                    }
                    var a = function() {
                        var t = {};
                        return function(r, a, s, o) {
                            var l = (r[0] + "_" + r[1] + "_" + a[0] + "_" + a[1] + "_" + s[0] + "_" + s[1] + "_" + o[0] + "_" + o[1]).replace(/\./g, "p");
                            if (!t[l]) {
                                var h, p, c, u, f, d, m, y = defaultCurveSegments,
                                    g = 0,
                                    v = null;
                                2 === r.length && (r[0] !== a[0] || r[1] !== a[1]) && e(r[0], r[1], a[0], a[1], r[0] + s[0], r[1] + s[1]) && e(r[0], r[1], a[0], a[1], a[0] + o[0], a[1] + o[1]) && (y = 2);
                                var _ = new i(y);
                                for (c = s.length, h = 0; h < y; h += 1) {
                                    for (m = createSizedArray(c), f = h / (y - 1), d = 0, p = 0; p < c; p += 1) u = bmPow(1 - f, 3) * r[p] + 3 * bmPow(1 - f, 2) * f * (r[p] + s[p]) + 3 * (1 - f) * bmPow(f, 2) * (a[p] + o[p]) + bmPow(f, 3) * a[p], m[p] = u, null !== v && (d += bmPow(m[p] - v[p], 2));
                                    g += d = bmSqrt(d), _.points[h] = new n(d, m), v = m
                                }
                                _.segmentLength = g, t[l] = _
                            }
                            return t[l]
                        }
                    }();

                    function s(t, e) {
                        var r = e.percents,
                            i = e.lengths,
                            n = r.length,
                            a = bmFloor((n - 1) * t),
                            s = t * e.addedLength,
                            o = 0;
                        if (a === n - 1 || 0 === a || s === i[a]) return r[a];
                        for (var l = i[a] > s ? -1 : 1, h = !0; h;)
                            if (i[a] <= s && i[a + 1] > s ? (o = (s - i[a]) / (i[a + 1] - i[a]), h = !1) : a += l, a < 0 || a >= n - 1) {
                                if (a === n - 1) return r[a];
                                h = !1
                            }
                        return r[a] + (r[a + 1] - r[a]) * o
                    }
                    var o = createTypedArray("float32", 8);
                    return {
                        getSegmentsLength: function(t) {
                            var e, i = segmentsLengthPool.newElement(),
                                n = t.c,
                                a = t.v,
                                s = t.o,
                                o = t.i,
                                l = t._length,
                                h = i.lengths,
                                p = 0;
                            for (e = 0; e < l - 1; e += 1) h[e] = r(a[e], a[e + 1], s[e], o[e + 1]), p += h[e].addedLength;
                            return n && l && (h[e] = r(a[e], a[0], s[e], o[0]), p += h[e].addedLength), i.totalLength = p, i
                        },
                        getNewSegment: function(e, r, i, n, a, l, h) {
                            a < 0 ? a = 0 : a > 1 && (a = 1);
                            var p, c = s(a, h),
                                u = s(l = l > 1 ? 1 : l, h),
                                f = e.length,
                                d = 1 - c,
                                m = 1 - u,
                                y = d * d * d,
                                g = c * d * d * 3,
                                v = c * c * d * 3,
                                _ = c * c * c,
                                b = d * d * m,
                                x = c * d * m + d * c * m + d * d * u,
                                P = c * c * m + d * c * u + c * d * u,
                                S = c * c * u,
                                A = d * m * m,
                                E = c * m * m + d * u * m + d * m * u,
                                w = c * u * m + d * u * u + c * m * u,
                                k = c * u * u,
                                T = m * m * m,
                                C = u * m * m + m * u * m + m * m * u,
                                M = u * u * m + m * u * u + u * m * u,
                                D = u * u * u;
                            for (p = 0; p < f; p += 1) o[4 * p] = t.round(1e3 * (y * e[p] + g * i[p] + v * n[p] + _ * r[p])) / 1e3, o[4 * p + 1] = t.round(1e3 * (b * e[p] + x * i[p] + P * n[p] + S * r[p])) / 1e3, o[4 * p + 2] = t.round(1e3 * (A * e[p] + E * i[p] + w * n[p] + k * r[p])) / 1e3, o[4 * p + 3] = t.round(1e3 * (T * e[p] + C * i[p] + M * n[p] + D * r[p])) / 1e3;
                            return o
                        },
                        getPointInSegment: function(e, r, i, n, a, o) {
                            var l = s(a, o),
                                h = 1 - l;
                            return [t.round(1e3 * (h * h * h * e[0] + (l * h * h + h * l * h + h * h * l) * i[0] + (l * l * h + h * l * l + l * h * l) * n[0] + l * l * l * r[0])) / 1e3, t.round(1e3 * (h * h * h * e[1] + (l * h * h + h * l * h + h * h * l) * i[1] + (l * l * h + h * l * l + l * h * l) * n[1] + l * l * l * r[1])) / 1e3]
                        },
                        buildBezierData: a,
                        pointOnLine2D: e,
                        pointOnLine3D: function(r, i, n, a, s, o, l, h, p) {
                            if (0 === n && 0 === o && 0 === p) return e(r, i, a, s, l, h);
                            var c, u = t.sqrt(t.pow(a - r, 2) + t.pow(s - i, 2) + t.pow(o - n, 2)),
                                f = t.sqrt(t.pow(l - r, 2) + t.pow(h - i, 2) + t.pow(p - n, 2)),
                                d = t.sqrt(t.pow(l - a, 2) + t.pow(h - s, 2) + t.pow(p - o, 2));
                            return (c = u > f ? u > d ? u - f - d : d - f - u : d > f ? d - f - u : f - u - d) > -1e-4 && c < 1e-4
                        }
                    }
                }! function() {
                    for (var t = 0, e = ["ms", "moz", "webkit", "o"], r = 0; r < e.length && !window.requestAnimationFrame; ++r) window.requestAnimationFrame = window[e[r] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[r] + "CancelAnimationFrame"] || window[e[r] + "CancelRequestAnimationFrame"];
                    window.requestAnimationFrame || (window.requestAnimationFrame = function(e) {
                        var r = (new Date).getTime(),
                            i = Math.max(0, 16 - (r - t)),
                            n = setTimeout((function() {
                                e(r + i)
                            }), i);
                        return t = r + i, n
                    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
                        clearTimeout(t)
                    })
                }();
                var bez = bezFunction(),
                    dataManager = function() {
                        var t, e, r = 1,
                            i = [],
                            n = {
                                onmessage: function() {},
                                postMessage: function(e) {
                                    t({
                                        data: e
                                    })
                                }
                            },
                            a = {
                                postMessage: function(t) {
                                    n.onmessage({
                                        data: t
                                    })
                                }
                            };

                        function s() {
                            e || ((e = function(e) {
                                if (window.Worker && window.Blob && _useWebWorker) {
                                    var r = new Blob(["var _workerSelf = self; self.onmessage = ", e.toString()], {
                                            type: "text/javascript"
                                        }),
                                        i = URL.createObjectURL(r);
                                    return new Worker(i)
                                }
                                return t = e, n
                            }((function(t) {
                                if (a.dataManager || (a.dataManager = function() {
                                        function t(n, a) {
                                            var s, o, l, h, c, u, f = n.length;
                                            for (o = 0; o < f; o += 1)
                                                if ("ks" in (s = n[o]) && !s.completed) {
                                                    if (s.completed = !0, s.tt && (n[o - 1].td = s.tt), s.hasMask) {
                                                        var d = s.masksProperties;
                                                        for (h = d.length, l = 0; l < h; l += 1)
                                                            if (d[l].pt.k.i) i(d[l].pt.k);
                                                            else
                                                                for (u = d[l].pt.k.length, c = 0; c < u; c += 1) d[l].pt.k[c].s && i(d[l].pt.k[c].s[0]), d[l].pt.k[c].e && i(d[l].pt.k[c].e[0])
                                                    }
                                                    0 === s.ty ? (s.layers = e(s.refId, a), t(s.layers, a)) : 4 === s.ty ? r(s.shapes) : 5 === s.ty && p(s)
                                                }
                                        }

                                        function e(t, e) {
                                            for (var r = 0, i = e.length; r < i;) {
                                                if (e[r].id === t) return e[r].layers.__used ? JSON.parse(JSON.stringify(e[r].layers)) : (e[r].layers.__used = !0, e[r].layers);
                                                r += 1
                                            }
                                            return null
                                        }

                                        function r(t) {
                                            var e, n, a;
                                            for (e = t.length - 1; e >= 0; e -= 1)
                                                if ("sh" === t[e].ty)
                                                    if (t[e].ks.k.i) i(t[e].ks.k);
                                                    else
                                                        for (a = t[e].ks.k.length, n = 0; n < a; n += 1) t[e].ks.k[n].s && i(t[e].ks.k[n].s[0]), t[e].ks.k[n].e && i(t[e].ks.k[n].e[0]);
                                            else "gr" === t[e].ty && r(t[e].it)
                                        }

                                        function i(t) {
                                            var e, r = t.i.length;
                                            for (e = 0; e < r; e += 1) t.i[e][0] += t.v[e][0], t.i[e][1] += t.v[e][1], t.o[e][0] += t.v[e][0], t.o[e][1] += t.v[e][1]
                                        }

                                        function n(t, e) {
                                            var r = e ? e.split(".") : [100, 100, 100];
                                            return t[0] > r[0] || !(r[0] > t[0]) && (t[1] > r[1] || !(r[1] > t[1]) && (t[2] > r[2] || !(r[2] > t[2]) && null))
                                        }
                                        var a = function() {
                                                var t = [4, 4, 14];

                                                function e(t) {
                                                    var e = t.t.d;
                                                    t.t.d = {
                                                        k: [{
                                                            s: e,
                                                            t: 0
                                                        }]
                                                    }
                                                }

                                                function r(t) {
                                                    var r, i = t.length;
                                                    for (r = 0; r < i; r += 1) 5 === t[r].ty && e(t[r])
                                                }
                                                return function(e) {
                                                    if (n(t, e.v) && (r(e.layers), e.assets)) {
                                                        var i, a = e.assets.length;
                                                        for (i = 0; i < a; i += 1) e.assets[i].layers && r(e.assets[i].layers)
                                                    }
                                                }
                                            }(),
                                            s = function() {
                                                var t = [4, 7, 99];
                                                return function(e) {
                                                    if (e.chars && !n(t, e.v)) {
                                                        var r, a, s, o, l, h = e.chars.length;
                                                        for (r = 0; r < h; r += 1)
                                                            if (e.chars[r].data && e.chars[r].data.shapes)
                                                                for (s = (l = e.chars[r].data.shapes[0].it).length, a = 0; a < s; a += 1)(o = l[a].ks.k).__converted || (i(l[a].ks.k), o.__converted = !0)
                                                    }
                                                }
                                            }(),
                                            o = function() {
                                                var t = [5, 7, 15];

                                                function e(t) {
                                                    var e = t.t.p;
                                                    "number" === typeof e.a && (e.a = {
                                                        a: 0,
                                                        k: e.a
                                                    }), "number" === typeof e.p && (e.p = {
                                                        a: 0,
                                                        k: e.p
                                                    }), "number" === typeof e.r && (e.r = {
                                                        a: 0,
                                                        k: e.r
                                                    })
                                                }

                                                function r(t) {
                                                    var r, i = t.length;
                                                    for (r = 0; r < i; r += 1) 5 === t[r].ty && e(t[r])
                                                }
                                                return function(e) {
                                                    if (n(t, e.v) && (r(e.layers), e.assets)) {
                                                        var i, a = e.assets.length;
                                                        for (i = 0; i < a; i += 1) e.assets[i].layers && r(e.assets[i].layers)
                                                    }
                                                }
                                            }(),
                                            l = function() {
                                                var t = [4, 1, 9];

                                                function e(t) {
                                                    var r, i, n, a = t.length;
                                                    for (r = 0; r < a; r += 1)
                                                        if ("gr" === t[r].ty) e(t[r].it);
                                                        else if ("fl" === t[r].ty || "st" === t[r].ty)
                                                        if (t[r].c.k && t[r].c.k[0].i)
                                                            for (n = t[r].c.k.length, i = 0; i < n; i += 1) t[r].c.k[i].s && (t[r].c.k[i].s[0] /= 255, t[r].c.k[i].s[1] /= 255, t[r].c.k[i].s[2] /= 255, t[r].c.k[i].s[3] /= 255), t[r].c.k[i].e && (t[r].c.k[i].e[0] /= 255, t[r].c.k[i].e[1] /= 255, t[r].c.k[i].e[2] /= 255, t[r].c.k[i].e[3] /= 255);
                                                        else t[r].c.k[0] /= 255, t[r].c.k[1] /= 255, t[r].c.k[2] /= 255, t[r].c.k[3] /= 255
                                                }

                                                function r(t) {
                                                    var r, i = t.length;
                                                    for (r = 0; r < i; r += 1) 4 === t[r].ty && e(t[r].shapes)
                                                }
                                                return function(e) {
                                                    if (n(t, e.v) && (r(e.layers), e.assets)) {
                                                        var i, a = e.assets.length;
                                                        for (i = 0; i < a; i += 1) e.assets[i].layers && r(e.assets[i].layers)
                                                    }
                                                }
                                            }(),
                                            h = function() {
                                                var t = [4, 4, 18];

                                                function e(t) {
                                                    var r, i, n;
                                                    for (r = t.length - 1; r >= 0; r -= 1)
                                                        if ("sh" === t[r].ty)
                                                            if (t[r].ks.k.i) t[r].ks.k.c = t[r].closed;
                                                            else
                                                                for (n = t[r].ks.k.length, i = 0; i < n; i += 1) t[r].ks.k[i].s && (t[r].ks.k[i].s[0].c = t[r].closed), t[r].ks.k[i].e && (t[r].ks.k[i].e[0].c = t[r].closed);
                                                    else "gr" === t[r].ty && e(t[r].it)
                                                }

                                                function r(t) {
                                                    var r, i, n, a, s, o, l = t.length;
                                                    for (i = 0; i < l; i += 1) {
                                                        if ((r = t[i]).hasMask) {
                                                            var h = r.masksProperties;
                                                            for (a = h.length, n = 0; n < a; n += 1)
                                                                if (h[n].pt.k.i) h[n].pt.k.c = h[n].cl;
                                                                else
                                                                    for (o = h[n].pt.k.length, s = 0; s < o; s += 1) h[n].pt.k[s].s && (h[n].pt.k[s].s[0].c = h[n].cl), h[n].pt.k[s].e && (h[n].pt.k[s].e[0].c = h[n].cl)
                                                        }
                                                        4 === r.ty && e(r.shapes)
                                                    }
                                                }
                                                return function(e) {
                                                    if (n(t, e.v) && (r(e.layers), e.assets)) {
                                                        var i, a = e.assets.length;
                                                        for (i = 0; i < a; i += 1) e.assets[i].layers && r(e.assets[i].layers)
                                                    }
                                                }
                                            }();

                                        function p(t) {
                                            0 !== t.t.a.length || "m" in t.t.p || (t.singleShape = !0)
                                        }
                                        var c = {
                                            completeData: function(e) {
                                                e.__complete || (l(e), a(e), s(e), o(e), h(e), t(e.layers, e.assets), e.__complete = !0)
                                            }
                                        };
                                        return c.checkColors = l, c.checkChars = s, c.checkPathProperties = o, c.checkShapes = h, c.completeLayers = t, c
                                    }()), a.assetLoader || (a.assetLoader = function() {
                                        function t(t) {
                                            var e = t.getResponseHeader("content-type");
                                            return e && "json" === t.responseType && -1 !== e.indexOf("json") || t.response && "object" === typeof t.response ? t.response : t.response && "string" === typeof t.response ? JSON.parse(t.response) : t.responseText ? JSON.parse(t.responseText) : null
                                        }
                                        return {
                                            load: function(e, r, i, n) {
                                                var a, s = new XMLHttpRequest;
                                                try {
                                                    s.responseType = "json"
                                                } catch (o) {}
                                                s.onreadystatechange = function() {
                                                    if (4 === s.readyState)
                                                        if (200 === s.status) a = t(s), i(a);
                                                        else try {
                                                            a = t(s), i(a)
                                                        } catch (o) {
                                                            n && n(o)
                                                        }
                                                };
                                                try {
                                                    s.open("GET", e, !0)
                                                } catch (l) {
                                                    s.open("GET", r + "/" + e, !0)
                                                }
                                                s.send()
                                            }
                                        }
                                    }()), "loadAnimation" === t.data.type) a.assetLoader.load(t.data.path, t.data.fullPath, (function(e) {
                                    a.dataManager.completeData(e), a.postMessage({
                                        id: t.data.id,
                                        payload: e,
                                        status: "success"
                                    })
                                }), (function() {
                                    a.postMessage({
                                        id: t.data.id,
                                        status: "error"
                                    })
                                }));
                                else if ("complete" === t.data.type) {
                                    var e = t.data.animation;
                                    a.dataManager.completeData(e), a.postMessage({
                                        id: t.data.id,
                                        payload: e,
                                        status: "success"
                                    })
                                } else "loadData" === t.data.type && a.assetLoader.load(t.data.path, t.data.fullPath, (function(e) {
                                    a.postMessage({
                                        id: t.data.id,
                                        payload: e,
                                        status: "success"
                                    })
                                }), (function() {
                                    a.postMessage({
                                        id: t.data.id,
                                        status: "error"
                                    })
                                }))
                            }))).onmessage = function(t) {
                                var e = t.data,
                                    r = e.id,
                                    n = i[r];
                                i[r] = null, "success" === e.status ? n.onComplete(e.payload) : n.onError && n.onError()
                            })
                        }

                        function o(t, e) {
                            var n = "processId_" + (r += 1);
                            return i[n] = {
                                onComplete: t,
                                onError: e
                            }, n
                        }
                        return {
                            loadAnimation: function(t, r, i) {
                                s();
                                var n = o(r, i);
                                e.postMessage({
                                    type: "loadAnimation",
                                    path: t,
                                    fullPath: window.location.origin + window.location.pathname,
                                    id: n
                                })
                            },
                            loadData: function(t, r, i) {
                                s();
                                var n = o(r, i);
                                e.postMessage({
                                    type: "loadData",
                                    path: t,
                                    fullPath: window.location.origin + window.location.pathname,
                                    id: n
                                })
                            },
                            completeAnimation: function(t, r, i) {
                                s();
                                var n = o(r, i);
                                e.postMessage({
                                    type: "complete",
                                    animation: t,
                                    id: n
                                })
                            }
                        }
                    }();

                function getFontProperties(t) {
                    for (var e = t.fStyle ? t.fStyle.split(" ") : [], r = "normal", i = "normal", n = e.length, a = 0; a < n; a += 1) switch (e[a].toLowerCase()) {
                        case "italic":
                            i = "italic";
                            break;
                        case "bold":
                            r = "700";
                            break;
                        case "black":
                            r = "900";
                            break;
                        case "medium":
                            r = "500";
                            break;
                        case "regular":
                        case "normal":
                            r = "400";
                            break;
                        case "light":
                        case "thin":
                            r = "200"
                    }
                    return {
                        style: i,
                        weight: t.fWeight || r
                    }
                }
                var FontManager = function() {
                        var t = {
                                w: 0,
                                size: 0,
                                shapes: []
                            },
                            e = [];
                        e = e.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
                        var r = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"],
                            i = [65039, 8205];

                        function n(t, e) {
                            var r = createTag("span");
                            r.setAttribute("aria-hidden", !0), r.style.fontFamily = e;
                            var i = createTag("span");
                            i.innerText = "giItT1WQy@!-/#", r.style.position = "absolute", r.style.left = "-10000px", r.style.top = "-10000px", r.style.fontSize = "300px", r.style.fontVariant = "normal", r.style.fontStyle = "normal", r.style.fontWeight = "normal", r.style.letterSpacing = "0", r.appendChild(i), document.body.appendChild(r);
                            var n = i.offsetWidth;
                            return i.style.fontFamily = function(t) {
                                var e, r = t.split(","),
                                    i = r.length,
                                    n = [];
                                for (e = 0; e < i; e += 1) "sans-serif" !== r[e] && "monospace" !== r[e] && n.push(r[e]);
                                return n.join(",")
                            }(t) + ", " + e, {
                                node: i,
                                w: n,
                                parent: r
                            }
                        }

                        function a(t, e) {
                            var r = createNS("text");
                            r.style.fontSize = "100px";
                            var i = getFontProperties(e);
                            return r.setAttribute("font-family", e.fFamily), r.setAttribute("font-style", i.style), r.setAttribute("font-weight", i.weight), r.textContent = "1", e.fClass ? (r.style.fontFamily = "inherit", r.setAttribute("class", e.fClass)) : r.style.fontFamily = e.fFamily, t.appendChild(r), createTag("canvas").getContext("2d").font = e.fWeight + " " + e.fStyle + " 100px " + e.fFamily, r
                        }
                        var s = function() {
                            this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
                        };
                        return s.isModifier = function(t, e) {
                            var i = t.toString(16) + e.toString(16);
                            return -1 !== r.indexOf(i)
                        }, s.isZeroWidthJoiner = function(t, e) {
                            return e ? t === i[0] && e === i[1] : t === i[1]
                        }, s.isCombinedCharacter = function(t) {
                            return -1 !== e.indexOf(t)
                        }, s.prototype = {
                            addChars: function(t) {
                                if (t) {
                                    var e;
                                    this.chars || (this.chars = []);
                                    var r, i, n = t.length,
                                        a = this.chars.length;
                                    for (e = 0; e < n; e += 1) {
                                        for (r = 0, i = !1; r < a;) this.chars[r].style === t[e].style && this.chars[r].fFamily === t[e].fFamily && this.chars[r].ch === t[e].ch && (i = !0), r += 1;
                                        i || (this.chars.push(t[e]), a += 1)
                                    }
                                }
                            },
                            addFonts: function(t, e) {
                                if (t) {
                                    if (this.chars) return this.isLoaded = !0, void(this.fonts = t.list);
                                    var r, i = t.list,
                                        s = i.length,
                                        o = s;
                                    for (r = 0; r < s; r += 1) {
                                        var l, h, p = !0;
                                        if (i[r].loaded = !1, i[r].monoCase = n(i[r].fFamily, "monospace"), i[r].sansCase = n(i[r].fFamily, "sans-serif"), i[r].fPath) {
                                            if ("p" === i[r].fOrigin || 3 === i[r].origin) {
                                                if ((l = document.querySelectorAll('style[f-forigin="p"][f-family="' + i[r].fFamily + '"], style[f-origin="3"][f-family="' + i[r].fFamily + '"]')).length > 0 && (p = !1), p) {
                                                    var c = createTag("style");
                                                    c.setAttribute("f-forigin", i[r].fOrigin), c.setAttribute("f-origin", i[r].origin), c.setAttribute("f-family", i[r].fFamily), c.type = "text/css", c.innerText = "@font-face {font-family: " + i[r].fFamily + "; font-style: normal; src: url('" + i[r].fPath + "');}", e.appendChild(c)
                                                }
                                            } else if ("g" === i[r].fOrigin || 1 === i[r].origin) {
                                                for (l = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), h = 0; h < l.length; h += 1) - 1 !== l[h].href.indexOf(i[r].fPath) && (p = !1);
                                                if (p) {
                                                    var u = createTag("link");
                                                    u.setAttribute("f-forigin", i[r].fOrigin), u.setAttribute("f-origin", i[r].origin), u.type = "text/css", u.rel = "stylesheet", u.href = i[r].fPath, document.body.appendChild(u)
                                                }
                                            } else if ("t" === i[r].fOrigin || 2 === i[r].origin) {
                                                for (l = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), h = 0; h < l.length; h += 1) i[r].fPath === l[h].src && (p = !1);
                                                if (p) {
                                                    var f = createTag("link");
                                                    f.setAttribute("f-forigin", i[r].fOrigin), f.setAttribute("f-origin", i[r].origin), f.setAttribute("rel", "stylesheet"), f.setAttribute("href", i[r].fPath), e.appendChild(f)
                                                }
                                            }
                                        } else i[r].loaded = !0, o -= 1;
                                        i[r].helper = a(e, i[r]), i[r].cache = {}, this.fonts.push(i[r])
                                    }
                                    0 === o ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
                                } else this.isLoaded = !0
                            },
                            getCharData: function(e, r, i) {
                                for (var n = 0, a = this.chars.length; n < a;) {
                                    if (this.chars[n].ch === e && this.chars[n].style === r && this.chars[n].fFamily === i) return this.chars[n];
                                    n += 1
                                }
                                return ("string" === typeof e && 13 !== e.charCodeAt(0) || !e) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", e, r, i)), t
                            },
                            getFontByName: function(t) {
                                for (var e = 0, r = this.fonts.length; e < r;) {
                                    if (this.fonts[e].fName === t) return this.fonts[e];
                                    e += 1
                                }
                                return this.fonts[0]
                            },
                            measureText: function(t, e, r) {
                                var i = this.getFontByName(e),
                                    n = t.charCodeAt(0);
                                if (!i.cache[n + 1]) {
                                    var a = i.helper;
                                    if (" " === t) {
                                        a.textContent = "|" + t + "|";
                                        var s = a.getComputedTextLength();
                                        a.textContent = "||";
                                        var o = a.getComputedTextLength();
                                        i.cache[n + 1] = (s - o) / 100
                                    } else a.textContent = t, i.cache[n + 1] = a.getComputedTextLength() / 100
                                }
                                return i.cache[n + 1] * r
                            },
                            checkLoadedFonts: function() {
                                var t, e, r, i = this.fonts.length,
                                    n = i;
                                for (t = 0; t < i; t += 1) this.fonts[t].loaded ? n -= 1 : "n" === this.fonts[t].fOrigin || 0 === this.fonts[t].origin ? this.fonts[t].loaded = !0 : (e = this.fonts[t].monoCase.node, r = this.fonts[t].monoCase.w, e.offsetWidth !== r ? (n -= 1, this.fonts[t].loaded = !0) : (e = this.fonts[t].sansCase.node, r = this.fonts[t].sansCase.w, e.offsetWidth !== r && (n -= 1, this.fonts[t].loaded = !0)), this.fonts[t].loaded && (this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent), this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));
                                0 !== n && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
                            },
                            setIsLoaded: function() {
                                this.isLoaded = !0
                            }
                        }, s
                    }(),
                    PropertyFactory = function() {
                        var t = initialDefaultFrame,
                            e = Math.abs;

                        function r(t, e) {
                            var r, n = this.offsetTime;
                            "multidimensional" === this.propType && (r = createTypedArray("float32", this.pv.length));
                            for (var a, s, o, l, h, p, c, u, f, d = e.lastIndex, m = d, y = this.keyframes.length - 1, g = !0; g;) {
                                if (a = this.keyframes[m], s = this.keyframes[m + 1], m === y - 1 && t >= s.t - n) {
                                    a.h && (a = s), d = 0;
                                    break
                                }
                                if (s.t - n > t) {
                                    d = m;
                                    break
                                }
                                m < y - 1 ? m += 1 : (d = 0, g = !1)
                            }
                            o = this.keyframesMetadata[m] || {};
                            var v, _ = s.t - n,
                                b = a.t - n;
                            if (a.to) {
                                o.bezierData || (o.bezierData = bez.buildBezierData(a.s, s.s || a.e, a.to, a.ti));
                                var x = o.bezierData;
                                if (t >= _ || t < b) {
                                    var P = t >= _ ? x.points.length - 1 : 0;
                                    for (h = x.points[P].point.length, l = 0; l < h; l += 1) r[l] = x.points[P].point[l]
                                } else {
                                    o.__fnct ? f = o.__fnct : (f = BezierFactory.getBezierEasing(a.o.x, a.o.y, a.i.x, a.i.y, a.n).get, o.__fnct = f), p = f((t - b) / (_ - b));
                                    var S, A = x.segmentLength * p,
                                        E = e.lastFrame < t && e._lastKeyframeIndex === m ? e._lastAddedLength : 0;
                                    for (u = e.lastFrame < t && e._lastKeyframeIndex === m ? e._lastPoint : 0, g = !0, c = x.points.length; g;) {
                                        if (E += x.points[u].partialLength, 0 === A || 0 === p || u === x.points.length - 1) {
                                            for (h = x.points[u].point.length, l = 0; l < h; l += 1) r[l] = x.points[u].point[l];
                                            break
                                        }
                                        if (A >= E && A < E + x.points[u + 1].partialLength) {
                                            for (S = (A - E) / x.points[u + 1].partialLength, h = x.points[u].point.length, l = 0; l < h; l += 1) r[l] = x.points[u].point[l] + (x.points[u + 1].point[l] - x.points[u].point[l]) * S;
                                            break
                                        }
                                        u < c - 1 ? u += 1 : g = !1
                                    }
                                    e._lastPoint = u, e._lastAddedLength = E - x.points[u].partialLength, e._lastKeyframeIndex = m
                                }
                            } else {
                                var w, k, T, C, M;
                                if (y = a.s.length, v = s.s || a.e, this.sh && 1 !== a.h) t >= _ ? (r[0] = v[0], r[1] = v[1], r[2] = v[2]) : t <= b ? (r[0] = a.s[0], r[1] = a.s[1], r[2] = a.s[2]) : function(t, e) {
                                    var r = e[0],
                                        i = e[1],
                                        n = e[2],
                                        a = e[3],
                                        s = Math.atan2(2 * i * a - 2 * r * n, 1 - 2 * i * i - 2 * n * n),
                                        o = Math.asin(2 * r * i + 2 * n * a),
                                        l = Math.atan2(2 * r * a - 2 * i * n, 1 - 2 * r * r - 2 * n * n);
                                    t[0] = s / degToRads, t[1] = o / degToRads, t[2] = l / degToRads
                                }(r, function(t, e, r) {
                                    var i, n, a, s, o, l = [],
                                        h = t[0],
                                        p = t[1],
                                        c = t[2],
                                        u = t[3],
                                        f = e[0],
                                        d = e[1],
                                        m = e[2],
                                        y = e[3];
                                    return (n = h * f + p * d + c * m + u * y) < 0 && (n = -n, f = -f, d = -d, m = -m, y = -y), 1 - n > 1e-6 ? (i = Math.acos(n), a = Math.sin(i), s = Math.sin((1 - r) * i) / a, o = Math.sin(r * i) / a) : (s = 1 - r, o = r), l[0] = s * h + o * f, l[1] = s * p + o * d, l[2] = s * c + o * m, l[3] = s * u + o * y, l
                                }(i(a.s), i(v), (t - b) / (_ - b)));
                                else
                                    for (m = 0; m < y; m += 1) 1 !== a.h && (t >= _ ? p = 1 : t < b ? p = 0 : (a.o.x.constructor === Array ? (o.__fnct || (o.__fnct = []), o.__fnct[m] ? f = o.__fnct[m] : (w = void 0 === a.o.x[m] ? a.o.x[0] : a.o.x[m], k = void 0 === a.o.y[m] ? a.o.y[0] : a.o.y[m], T = void 0 === a.i.x[m] ? a.i.x[0] : a.i.x[m], C = void 0 === a.i.y[m] ? a.i.y[0] : a.i.y[m], f = BezierFactory.getBezierEasing(w, k, T, C).get, o.__fnct[m] = f)) : o.__fnct ? f = o.__fnct : (w = a.o.x, k = a.o.y, T = a.i.x, C = a.i.y, f = BezierFactory.getBezierEasing(w, k, T, C).get, a.keyframeMetadata = f), p = f((t - b) / (_ - b)))), v = s.s || a.e, M = 1 === a.h ? a.s[m] : a.s[m] + (v[m] - a.s[m]) * p, "multidimensional" === this.propType ? r[m] = M : r = M
                            }
                            return e.lastIndex = d, r
                        }

                        function i(t) {
                            var e = t[0] * degToRads,
                                r = t[1] * degToRads,
                                i = t[2] * degToRads,
                                n = Math.cos(e / 2),
                                a = Math.cos(r / 2),
                                s = Math.cos(i / 2),
                                o = Math.sin(e / 2),
                                l = Math.sin(r / 2),
                                h = Math.sin(i / 2);
                            return [o * l * s + n * a * h, o * a * s + n * l * h, n * l * s - o * a * h, n * a * s - o * l * h]
                        }

                        function n() {
                            var e = this.comp.renderedFrame - this.offsetTime,
                                r = this.keyframes[0].t - this.offsetTime,
                                i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
                            if (!(e === this._caching.lastFrame || this._caching.lastFrame !== t && (this._caching.lastFrame >= i && e >= i || this._caching.lastFrame < r && e < r))) {
                                this._caching.lastFrame >= e && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
                                var n = this.interpolateValue(e, this._caching);
                                this.pv = n
                            }
                            return this._caching.lastFrame = e, this.pv
                        }

                        function a(t) {
                            var r;
                            if ("unidimensional" === this.propType) r = t * this.mult, e(this.v - r) > 1e-5 && (this.v = r, this._mdf = !0);
                            else
                                for (var i = 0, n = this.v.length; i < n;) r = t[i] * this.mult, e(this.v[i] - r) > 1e-5 && (this.v[i] = r, this._mdf = !0), i += 1
                        }

                        function s() {
                            if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
                                if (this.lock) this.setVValue(this.pv);
                                else {
                                    var t;
                                    this.lock = !0, this._mdf = this._isFirstFrame;
                                    var e = this.effectsSequence.length,
                                        r = this.kf ? this.pv : this.data.k;
                                    for (t = 0; t < e; t += 1) r = this.effectsSequence[t](r);
                                    this.setVValue(r), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
                                }
                        }

                        function o(t) {
                            this.effectsSequence.push(t), this.container.addDynamicProperty(this)
                        }

                        function l(t, e, r, i) {
                            this.propType = "unidimensional", this.mult = r || 1, this.data = e, this.v = r ? e.k * r : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = i, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = s, this.setVValue = a, this.addEffect = o
                        }

                        function h(t, e, r, i) {
                            var n;
                            this.propType = "multidimensional", this.mult = r || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = i, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1;
                            var l = e.k.length;
                            for (this.v = createTypedArray("float32", l), this.pv = createTypedArray("float32", l), this.vel = createTypedArray("float32", l), n = 0; n < l; n += 1) this.v[n] = e.k[n] * this.mult, this.pv[n] = e.k[n];
                            this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = s, this.setVValue = a, this.addEffect = o
                        }

                        function p(e, i, l, h) {
                            this.propType = "unidimensional", this.keyframes = i.k, this.keyframesMetadata = [], this.offsetTime = e.data.st, this.frameId = -1, this._caching = {
                                lastFrame: t,
                                lastIndex: 0,
                                value: 0,
                                _lastKeyframeIndex: -1
                            }, this.k = !0, this.kf = !0, this.data = i, this.mult = l || 1, this.elem = e, this.container = h, this.comp = e.comp, this.v = t, this.pv = t, this._isFirstFrame = !0, this.getValue = s, this.setVValue = a, this.interpolateValue = r, this.effectsSequence = [n.bind(this)], this.addEffect = o
                        }

                        function c(e, i, l, h) {
                            var p;
                            this.propType = "multidimensional";
                            var c, u, f, d, m = i.k.length;
                            for (p = 0; p < m - 1; p += 1) i.k[p].to && i.k[p].s && i.k[p + 1] && i.k[p + 1].s && (c = i.k[p].s, u = i.k[p + 1].s, f = i.k[p].to, d = i.k[p].ti, (2 === c.length && (c[0] !== u[0] || c[1] !== u[1]) && bez.pointOnLine2D(c[0], c[1], u[0], u[1], c[0] + f[0], c[1] + f[1]) && bez.pointOnLine2D(c[0], c[1], u[0], u[1], u[0] + d[0], u[1] + d[1]) || 3 === c.length && (c[0] !== u[0] || c[1] !== u[1] || c[2] !== u[2]) && bez.pointOnLine3D(c[0], c[1], c[2], u[0], u[1], u[2], c[0] + f[0], c[1] + f[1], c[2] + f[2]) && bez.pointOnLine3D(c[0], c[1], c[2], u[0], u[1], u[2], u[0] + d[0], u[1] + d[1], u[2] + d[2])) && (i.k[p].to = null, i.k[p].ti = null), c[0] === u[0] && c[1] === u[1] && 0 === f[0] && 0 === f[1] && 0 === d[0] && 0 === d[1] && (2 === c.length || c[2] === u[2] && 0 === f[2] && 0 === d[2]) && (i.k[p].to = null, i.k[p].ti = null));
                            this.effectsSequence = [n.bind(this)], this.data = i, this.keyframes = i.k, this.keyframesMetadata = [], this.offsetTime = e.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = l || 1, this.elem = e, this.container = h, this.comp = e.comp, this.getValue = s, this.setVValue = a, this.interpolateValue = r, this.frameId = -1;
                            var y = i.k[0].s.length;
                            for (this.v = createTypedArray("float32", y), this.pv = createTypedArray("float32", y), p = 0; p < y; p += 1) this.v[p] = t, this.pv[p] = t;
                            this._caching = {
                                lastFrame: t,
                                lastIndex: 0,
                                value: createTypedArray("float32", y)
                            }, this.addEffect = o
                        }
                        return {
                            getProp: function(t, e, r, i, n) {
                                var a;
                                if (e.k.length)
                                    if ("number" === typeof e.k[0]) a = new h(t, e, i, n);
                                    else switch (r) {
                                        case 0:
                                            a = new p(t, e, i, n);
                                            break;
                                        case 1:
                                            a = new c(t, e, i, n)
                                    } else a = new l(t, e, i, n);
                                return a.effectsSequence.length && n.addDynamicProperty(a), a
                            }
                        }
                    }(),
                    TransformPropertyFactory = function() {
                        var t = [0, 0];

                        function e(t, e, r) {
                            if (this.elem = t, this.frameId = -1, this.propType = "transform", this.data = e, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(r || t), e.p && e.p.s ? (this.px = PropertyFactory.getProp(t, e.p.x, 0, 0, this), this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this), e.p.z && (this.pz = PropertyFactory.getProp(t, e.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(t, e.p || {
                                    k: [0, 0, 0]
                                }, 1, 0, this), e.rx) {
                                if (this.rx = PropertyFactory.getProp(t, e.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(t, e.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(t, e.rz, 0, degToRads, this), e.or.k[0].ti) {
                                    var i, n = e.or.k.length;
                                    for (i = 0; i < n; i += 1) e.or.k[i].to = null, e.or.k[i].ti = null
                                }
                                this.or = PropertyFactory.getProp(t, e.or, 1, degToRads, this), this.or.sh = !0
                            } else this.r = PropertyFactory.getProp(t, e.r || {
                                k: 0
                            }, 0, degToRads, this);
                            e.sk && (this.sk = PropertyFactory.getProp(t, e.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(t, e.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(t, e.a || {
                                k: [0, 0, 0]
                            }, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s || {
                                k: [100, 100, 100]
                            }, 1, .01, this), e.o ? this.o = PropertyFactory.getProp(t, e.o, 0, .01, t) : this.o = {
                                _mdf: !1,
                                v: 1
                            }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
                        }
                        return e.prototype = {
                            applyToMatrix: function(t) {
                                var e = this._mdf;
                                this.iterateDynamicProperties(), this._mdf = this._mdf || e, this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && t.skewFromAxis(-this.sk.v, this.sa.v), this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                            },
                            getValue: function(e) {
                                if (this.elem.globalData.frameId !== this.frameId) {
                                    if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || e) {
                                        var r;
                                        if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                                            var i, n;
                                            if (r = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (i = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / r, 0), n = this.p.getValueAtTime(this.p.keyframes[0].t / r, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (i = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / r, 0), n = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / r, 0)) : (i = this.p.pv, n = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / r, this.p.offsetTime));
                                            else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                                i = [], n = [];
                                                var a = this.px,
                                                    s = this.py;
                                                a._caching.lastFrame + a.offsetTime <= a.keyframes[0].t ? (i[0] = a.getValueAtTime((a.keyframes[0].t + .01) / r, 0), i[1] = s.getValueAtTime((s.keyframes[0].t + .01) / r, 0), n[0] = a.getValueAtTime(a.keyframes[0].t / r, 0), n[1] = s.getValueAtTime(s.keyframes[0].t / r, 0)) : a._caching.lastFrame + a.offsetTime >= a.keyframes[a.keyframes.length - 1].t ? (i[0] = a.getValueAtTime(a.keyframes[a.keyframes.length - 1].t / r, 0), i[1] = s.getValueAtTime(s.keyframes[s.keyframes.length - 1].t / r, 0), n[0] = a.getValueAtTime((a.keyframes[a.keyframes.length - 1].t - .01) / r, 0), n[1] = s.getValueAtTime((s.keyframes[s.keyframes.length - 1].t - .01) / r, 0)) : (i = [a.pv, s.pv], n[0] = a.getValueAtTime((a._caching.lastFrame + a.offsetTime - .01) / r, a.offsetTime), n[1] = s.getValueAtTime((s._caching.lastFrame + s.offsetTime - .01) / r, s.offsetTime))
                                            } else i = n = t;
                                            this.v.rotate(-Math.atan2(i[1] - n[1], i[0] - n[0]))
                                        }
                                        this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                                    }
                                    this.frameId = this.elem.globalData.frameId
                                }
                            },
                            precalculateMatrix: function() {
                                if (!this.a.k && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
                                    if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
                                        if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                                        this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3
                                    }
                                    this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
                                }
                            },
                            autoOrient: function() {}
                        }, extendPrototype([DynamicPropertyContainer], e), e.prototype.addDynamicProperty = function(t) {
                            this._addDynamicProperty(t), this.elem.addDynamicProperty(t), this._isDirty = !0
                        }, e.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, {
                            getTransformProperty: function(t, r, i) {
                                return new e(t, r, i)
                            }
                        }
                    }();

                function ShapePath() {
                    this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength)
                }
                ShapePath.prototype.setPathData = function(t, e) {
                    this.c = t, this.setLength(e);
                    for (var r = 0; r < e;) this.v[r] = pointPool.newElement(), this.o[r] = pointPool.newElement(), this.i[r] = pointPool.newElement(), r += 1
                }, ShapePath.prototype.setLength = function(t) {
                    for (; this._maxLength < t;) this.doubleArrayLength();
                    this._length = t
                }, ShapePath.prototype.doubleArrayLength = function() {
                    this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2
                }, ShapePath.prototype.setXYAt = function(t, e, r, i, n) {
                    var a;
                    switch (this._length = Math.max(this._length, i + 1), this._length >= this._maxLength && this.doubleArrayLength(), r) {
                        case "v":
                            a = this.v;
                            break;
                        case "i":
                            a = this.i;
                            break;
                        case "o":
                            a = this.o;
                            break;
                        default:
                            a = []
                    }(!a[i] || a[i] && !n) && (a[i] = pointPool.newElement()), a[i][0] = t, a[i][1] = e
                }, ShapePath.prototype.setTripleAt = function(t, e, r, i, n, a, s, o) {
                    this.setXYAt(t, e, "v", s, o), this.setXYAt(r, i, "o", s, o), this.setXYAt(n, a, "i", s, o)
                }, ShapePath.prototype.reverse = function() {
                    var t = new ShapePath;
                    t.setPathData(this.c, this._length);
                    var e = this.v,
                        r = this.o,
                        i = this.i,
                        n = 0;
                    this.c && (t.setTripleAt(e[0][0], e[0][1], i[0][0], i[0][1], r[0][0], r[0][1], 0, !1), n = 1);
                    var a, s = this._length - 1,
                        o = this._length;
                    for (a = n; a < o; a += 1) t.setTripleAt(e[s][0], e[s][1], i[s][0], i[s][1], r[s][0], r[s][1], a, !1), s -= 1;
                    return t
                };
                var ShapePropertyFactory = function() {
                        var t = -999999;

                        function e(t, e, r) {
                            var i, n, a, s, o, l, h, p, c, u = r.lastIndex,
                                f = this.keyframes;
                            if (t < f[0].t - this.offsetTime) i = f[0].s[0], a = !0, u = 0;
                            else if (t >= f[f.length - 1].t - this.offsetTime) i = f[f.length - 1].s ? f[f.length - 1].s[0] : f[f.length - 2].e[0], a = !0;
                            else {
                                for (var d, m, y, g = u, v = f.length - 1, _ = !0; _ && (d = f[g], !((m = f[g + 1]).t - this.offsetTime > t));) g < v - 1 ? g += 1 : _ = !1;
                                if (y = this.keyframesMetadata[g] || {}, u = g, !(a = 1 === d.h)) {
                                    if (t >= m.t - this.offsetTime) p = 1;
                                    else if (t < d.t - this.offsetTime) p = 0;
                                    else {
                                        var b;
                                        y.__fnct ? b = y.__fnct : (b = BezierFactory.getBezierEasing(d.o.x, d.o.y, d.i.x, d.i.y).get, y.__fnct = b), p = b((t - (d.t - this.offsetTime)) / (m.t - this.offsetTime - (d.t - this.offsetTime)))
                                    }
                                    n = m.s ? m.s[0] : d.e[0]
                                }
                                i = d.s[0]
                            }
                            for (l = e._length, h = i.i[0].length, r.lastIndex = u, s = 0; s < l; s += 1)
                                for (o = 0; o < h; o += 1) c = a ? i.i[s][o] : i.i[s][o] + (n.i[s][o] - i.i[s][o]) * p, e.i[s][o] = c, c = a ? i.o[s][o] : i.o[s][o] + (n.o[s][o] - i.o[s][o]) * p, e.o[s][o] = c, c = a ? i.v[s][o] : i.v[s][o] + (n.v[s][o] - i.v[s][o]) * p, e.v[s][o] = c
                        }

                        function r() {
                            var e = this.comp.renderedFrame - this.offsetTime,
                                r = this.keyframes[0].t - this.offsetTime,
                                i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                                n = this._caching.lastFrame;
                            return n !== t && (n < r && e < r || n > i && e > i) || (this._caching.lastIndex = n < e ? this._caching.lastIndex : 0, this.interpolateShape(e, this.pv, this._caching)), this._caching.lastFrame = e, this.pv
                        }

                        function i() {
                            this.paths = this.localShapeCollection
                        }

                        function n(t) {
                            (function(t, e) {
                                if (t._length !== e._length || t.c !== e.c) return !1;
                                var r, i = t._length;
                                for (r = 0; r < i; r += 1)
                                    if (t.v[r][0] !== e.v[r][0] || t.v[r][1] !== e.v[r][1] || t.o[r][0] !== e.o[r][0] || t.o[r][1] !== e.o[r][1] || t.i[r][0] !== e.i[r][0] || t.i[r][1] !== e.i[r][1]) return !1;
                                return !0
                            })(this.v, t) || (this.v = shapePool.clone(t), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
                        }

                        function a() {
                            if (this.elem.globalData.frameId !== this.frameId)
                                if (this.effectsSequence.length)
                                    if (this.lock) this.setVValue(this.pv);
                                    else {
                                        var t, e;
                                        this.lock = !0, this._mdf = !1, t = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
                                        var r = this.effectsSequence.length;
                                        for (e = 0; e < r; e += 1) t = this.effectsSequence[e](t);
                                        this.setVValue(t), this.lock = !1, this.frameId = this.elem.globalData.frameId
                                    }
                            else this._mdf = !1
                        }

                        function s(t, e, r) {
                            this.propType = "shape", this.comp = t.comp, this.container = t, this.elem = t, this.data = e, this.k = !1, this.kf = !1, this._mdf = !1;
                            var n = 3 === r ? e.pt.k : e.ks.k;
                            this.v = shapePool.clone(n), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = i, this.effectsSequence = []
                        }

                        function o(t) {
                            this.effectsSequence.push(t), this.container.addDynamicProperty(this)
                        }

                        function l(e, n, a) {
                            this.propType = "shape", this.comp = e.comp, this.elem = e, this.container = e, this.offsetTime = e.data.st, this.keyframes = 3 === a ? n.pt.k : n.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
                            var s = this.keyframes[0].s[0].i.length;
                            this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, s), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = t, this.reset = i, this._caching = {
                                lastFrame: t,
                                lastIndex: 0
                            }, this.effectsSequence = [r.bind(this)]
                        }
                        s.prototype.interpolateShape = e, s.prototype.getValue = a, s.prototype.setVValue = n, s.prototype.addEffect = o, l.prototype.getValue = a, l.prototype.interpolateShape = e, l.prototype.setVValue = n, l.prototype.addEffect = o;
                        var h = function() {
                                var t = roundCorner;

                                function e(t, e) {
                                    this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = e.d, this.elem = t, this.comp = t.comp, this.frameId = -1, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
                                }
                                return e.prototype = {
                                    reset: i,
                                    getValue: function() {
                                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
                                    },
                                    convertEllToPath: function() {
                                        var e = this.p.v[0],
                                            r = this.p.v[1],
                                            i = this.s.v[0] / 2,
                                            n = this.s.v[1] / 2,
                                            a = 3 !== this.d,
                                            s = this.v;
                                        s.v[0][0] = e, s.v[0][1] = r - n, s.v[1][0] = a ? e + i : e - i, s.v[1][1] = r, s.v[2][0] = e, s.v[2][1] = r + n, s.v[3][0] = a ? e - i : e + i, s.v[3][1] = r, s.i[0][0] = a ? e - i * t : e + i * t, s.i[0][1] = r - n, s.i[1][0] = a ? e + i : e - i, s.i[1][1] = r - n * t, s.i[2][0] = a ? e + i * t : e - i * t, s.i[2][1] = r + n, s.i[3][0] = a ? e - i : e + i, s.i[3][1] = r + n * t, s.o[0][0] = a ? e + i * t : e - i * t, s.o[0][1] = r - n, s.o[1][0] = a ? e + i : e - i, s.o[1][1] = r + n * t, s.o[2][0] = a ? e - i * t : e + i * t, s.o[2][1] = r + n, s.o[3][0] = a ? e - i : e + i, s.o[3][1] = r - n * t
                                    }
                                }, extendPrototype([DynamicPropertyContainer], e), e
                            }(),
                            p = function() {
                                function t(t, e) {
                                    this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = t, this.comp = t.comp, this.data = e, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), 1 === e.sy ? (this.ir = PropertyFactory.getProp(t, e.ir, 0, 0, this), this.is = PropertyFactory.getProp(t, e.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(t, e.pt, 0, 0, this), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, degToRads, this), this.or = PropertyFactory.getProp(t, e.or, 0, 0, this), this.os = PropertyFactory.getProp(t, e.os, 0, .01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
                                }
                                return t.prototype = {
                                    reset: i,
                                    getValue: function() {
                                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
                                    },
                                    convertStarToPath: function() {
                                        var t, e, r, i, n = 2 * Math.floor(this.pt.v),
                                            a = 2 * Math.PI / n,
                                            s = !0,
                                            o = this.or.v,
                                            l = this.ir.v,
                                            h = this.os.v,
                                            p = this.is.v,
                                            c = 2 * Math.PI * o / (2 * n),
                                            u = 2 * Math.PI * l / (2 * n),
                                            f = -Math.PI / 2;
                                        f += this.r.v;
                                        var d = 3 === this.data.d ? -1 : 1;
                                        for (this.v._length = 0, t = 0; t < n; t += 1) {
                                            r = s ? h : p, i = s ? c : u;
                                            var m = (e = s ? o : l) * Math.cos(f),
                                                y = e * Math.sin(f),
                                                g = 0 === m && 0 === y ? 0 : y / Math.sqrt(m * m + y * y),
                                                v = 0 === m && 0 === y ? 0 : -m / Math.sqrt(m * m + y * y);
                                            m += +this.p.v[0], y += +this.p.v[1], this.v.setTripleAt(m, y, m - g * i * r * d, y - v * i * r * d, m + g * i * r * d, y + v * i * r * d, t, !0), s = !s, f += a * d
                                        }
                                    },
                                    convertPolygonToPath: function() {
                                        var t, e = Math.floor(this.pt.v),
                                            r = 2 * Math.PI / e,
                                            i = this.or.v,
                                            n = this.os.v,
                                            a = 2 * Math.PI * i / (4 * e),
                                            s = .5 * -Math.PI,
                                            o = 3 === this.data.d ? -1 : 1;
                                        for (s += this.r.v, this.v._length = 0, t = 0; t < e; t += 1) {
                                            var l = i * Math.cos(s),
                                                h = i * Math.sin(s),
                                                p = 0 === l && 0 === h ? 0 : h / Math.sqrt(l * l + h * h),
                                                c = 0 === l && 0 === h ? 0 : -l / Math.sqrt(l * l + h * h);
                                            l += +this.p.v[0], h += +this.p.v[1], this.v.setTripleAt(l, h, l - p * a * n * o, h - c * a * n * o, l + p * a * n * o, h + c * a * n * o, t, !0), s += r * o
                                        }
                                        this.paths.length = 0, this.paths[0] = this.v
                                    }
                                }, extendPrototype([DynamicPropertyContainer], t), t
                            }(),
                            c = function() {
                                function t(t, e) {
                                    this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = t, this.comp = t.comp, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
                                }
                                return t.prototype = {
                                    convertRectToPath: function() {
                                        var t = this.p.v[0],
                                            e = this.p.v[1],
                                            r = this.s.v[0] / 2,
                                            i = this.s.v[1] / 2,
                                            n = bmMin(r, i, this.r.v),
                                            a = n * (1 - roundCorner);
                                        this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + r, e - i + n, t + r, e - i + n, t + r, e - i + a, 0, !0), this.v.setTripleAt(t + r, e + i - n, t + r, e + i - a, t + r, e + i - n, 1, !0), 0 !== n ? (this.v.setTripleAt(t + r - n, e + i, t + r - n, e + i, t + r - a, e + i, 2, !0), this.v.setTripleAt(t - r + n, e + i, t - r + a, e + i, t - r + n, e + i, 3, !0), this.v.setTripleAt(t - r, e + i - n, t - r, e + i - n, t - r, e + i - a, 4, !0), this.v.setTripleAt(t - r, e - i + n, t - r, e - i + a, t - r, e - i + n, 5, !0), this.v.setTripleAt(t - r + n, e - i, t - r + n, e - i, t - r + a, e - i, 6, !0), this.v.setTripleAt(t + r - n, e - i, t + r - a, e - i, t + r - n, e - i, 7, !0)) : (this.v.setTripleAt(t - r, e + i, t - r + a, e + i, t - r, e + i, 2), this.v.setTripleAt(t - r, e - i, t - r, e - i + a, t - r, e - i, 3))) : (this.v.setTripleAt(t + r, e - i + n, t + r, e - i + a, t + r, e - i + n, 0, !0), 0 !== n ? (this.v.setTripleAt(t + r - n, e - i, t + r - n, e - i, t + r - a, e - i, 1, !0), this.v.setTripleAt(t - r + n, e - i, t - r + a, e - i, t - r + n, e - i, 2, !0), this.v.setTripleAt(t - r, e - i + n, t - r, e - i + n, t - r, e - i + a, 3, !0), this.v.setTripleAt(t - r, e + i - n, t - r, e + i - a, t - r, e + i - n, 4, !0), this.v.setTripleAt(t - r + n, e + i, t - r + n, e + i, t - r + a, e + i, 5, !0), this.v.setTripleAt(t + r - n, e + i, t + r - a, e + i, t + r - n, e + i, 6, !0), this.v.setTripleAt(t + r, e + i - n, t + r, e + i - n, t + r, e + i - a, 7, !0)) : (this.v.setTripleAt(t - r, e - i, t - r + a, e - i, t - r, e - i, 1, !0), this.v.setTripleAt(t - r, e + i, t - r, e + i - a, t - r, e + i, 2, !0), this.v.setTripleAt(t + r, e + i, t + r - a, e + i, t + r, e + i, 3, !0)))
                                    },
                                    getValue: function() {
                                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
                                    },
                                    reset: i
                                }, extendPrototype([DynamicPropertyContainer], t), t
                            }(),
                            u = {
                                getShapeProp: function(t, e, r) {
                                    var i;
                                    return 3 === r || 4 === r ? i = (3 === r ? e.pt : e.ks).k.length ? new l(t, e, r) : new s(t, e, r) : 5 === r ? i = new c(t, e) : 6 === r ? i = new h(t, e) : 7 === r && (i = new p(t, e)), i.k && t.addDynamicProperty(i), i
                                },
                                getConstructorFunction: function() {
                                    return s
                                },
                                getKeyframedConstructorFunction: function() {
                                    return l
                                }
                            };
                        return u
                    }(),
                    ShapeModifiers = function() {
                        var t = {},
                            e = {};
                        return t.registerModifier = function(t, r) {
                            e[t] || (e[t] = r)
                        }, t.getModifier = function(t, r, i) {
                            return new e[t](r, i)
                        }, t
                    }();

                function ShapeModifier() {}

                function TrimModifier() {}

                function RoundCornersModifier() {}

                function PuckerAndBloatModifier() {}

                function RepeaterModifier() {}

                function ShapeCollection() {
                    this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength)
                }

                function DashProperty(t, e, r, i) {
                    var n;
                    this.elem = t, this.frameId = -1, this.dataProps = createSizedArray(e.length), this.renderer = r, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(i);
                    var a, s = e.length || 0;
                    for (n = 0; n < s; n += 1) a = PropertyFactory.getProp(t, e[n].v, 0, 0, this), this.k = a.k || this.k, this.dataProps[n] = {
                        n: e[n].n,
                        p: a
                    };
                    this.k || this.getValue(!0), this._isAnimated = this.k
                }

                function GradientProperty(t, e, r) {
                    this.data = e, this.c = createTypedArray("uint8c", 4 * e.p);
                    var i = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
                    this.o = createTypedArray("float32", i), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = i, this.initDynamicPropertyContainer(r), this.prop = PropertyFactory.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
                }
                ShapeModifier.prototype.initModifierProperties = function() {}, ShapeModifier.prototype.addShapeToModifier = function() {}, ShapeModifier.prototype.addShape = function(t) {
                    if (!this.closed) {
                        t.sh.container.addDynamicProperty(t.sh);
                        var e = {
                            shape: t.sh,
                            data: t,
                            localShapeCollection: shapeCollectionPool.newShapeCollection()
                        };
                        this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated()
                    }
                }, ShapeModifier.prototype.init = function(t, e) {
                    this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
                }, ShapeModifier.prototype.processKeys = function() {
                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
                }, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(t, e) {
                    this.s = PropertyFactory.getProp(t, e.s, 0, .01, this), this.e = PropertyFactory.getProp(t, e.e, 0, .01, this), this.o = PropertyFactory.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
                }, TrimModifier.prototype.addShapeToModifier = function(t) {
                    t.pathsData = []
                }, TrimModifier.prototype.calculateShapeEdges = function(t, e, r, i, n) {
                    var a = [];
                    e <= 1 ? a.push({
                        s: t,
                        e: e
                    }) : t >= 1 ? a.push({
                        s: t - 1,
                        e: e - 1
                    }) : (a.push({
                        s: t,
                        e: 1
                    }), a.push({
                        s: 0,
                        e: e - 1
                    }));
                    var s, o, l = [],
                        h = a.length;
                    for (s = 0; s < h; s += 1) {
                        var p, c;
                        (o = a[s]).e * n < i || o.s * n > i + r || (p = o.s * n <= i ? 0 : (o.s * n - i) / r, c = o.e * n >= i + r ? 1 : (o.e * n - i) / r, l.push([p, c]))
                    }
                    return l.length || l.push([0, 0]), l
                }, TrimModifier.prototype.releasePathsData = function(t) {
                    var e, r = t.length;
                    for (e = 0; e < r; e += 1) segmentsLengthPool.release(t[e]);
                    return t.length = 0, t
                }, TrimModifier.prototype.processShapes = function(t) {
                    var e, r, i, n;
                    if (this._mdf || t) {
                        var a = this.o.v % 360 / 360;
                        if (a < 0 && (a += 1), (e = this.s.v > 1 ? 1 + a : this.s.v < 0 ? 0 + a : this.s.v + a) > (r = this.e.v > 1 ? 1 + a : this.e.v < 0 ? 0 + a : this.e.v + a)) {
                            var s = e;
                            e = r, r = s
                        }
                        e = 1e-4 * Math.round(1e4 * e), r = 1e-4 * Math.round(1e4 * r), this.sValue = e, this.eValue = r
                    } else e = this.sValue, r = this.eValue;
                    var o, l, h, p, c, u = this.shapes.length,
                        f = 0;
                    if (r === e)
                        for (n = 0; n < u; n += 1) this.shapes[n].localShapeCollection.releaseShapes(), this.shapes[n].shape._mdf = !0, this.shapes[n].shape.paths = this.shapes[n].localShapeCollection, this._mdf && (this.shapes[n].pathsData.length = 0);
                    else if (1 === r && 0 === e || 0 === r && 1 === e) {
                        if (this._mdf)
                            for (n = 0; n < u; n += 1) this.shapes[n].pathsData.length = 0, this.shapes[n].shape._mdf = !0
                    } else {
                        var d, m, y = [];
                        for (n = 0; n < u; n += 1)
                            if ((d = this.shapes[n]).shape._mdf || this._mdf || t || 2 === this.m) {
                                if (l = (i = d.shape.paths)._length, c = 0, !d.shape._mdf && d.pathsData.length) c = d.totalShapeLength;
                                else {
                                    for (h = this.releasePathsData(d.pathsData), o = 0; o < l; o += 1) p = bez.getSegmentsLength(i.shapes[o]), h.push(p), c += p.totalLength;
                                    d.totalShapeLength = c, d.pathsData = h
                                }
                                f += c, d.shape._mdf = !0
                            } else d.shape.paths = d.localShapeCollection;
                        var g, v = e,
                            _ = r,
                            b = 0;
                        for (n = u - 1; n >= 0; n -= 1)
                            if ((d = this.shapes[n]).shape._mdf) {
                                for ((m = d.localShapeCollection).releaseShapes(), 2 === this.m && u > 1 ? (g = this.calculateShapeEdges(e, r, d.totalShapeLength, b, f), b += d.totalShapeLength) : g = [
                                        [v, _]
                                    ], l = g.length, o = 0; o < l; o += 1) {
                                    v = g[o][0], _ = g[o][1], y.length = 0, _ <= 1 ? y.push({
                                        s: d.totalShapeLength * v,
                                        e: d.totalShapeLength * _
                                    }) : v >= 1 ? y.push({
                                        s: d.totalShapeLength * (v - 1),
                                        e: d.totalShapeLength * (_ - 1)
                                    }) : (y.push({
                                        s: d.totalShapeLength * v,
                                        e: d.totalShapeLength
                                    }), y.push({
                                        s: 0,
                                        e: d.totalShapeLength * (_ - 1)
                                    }));
                                    var x = this.addShapes(d, y[0]);
                                    if (y[0].s !== y[0].e) {
                                        if (y.length > 1)
                                            if (d.shape.paths.shapes[d.shape.paths._length - 1].c) {
                                                var P = x.pop();
                                                this.addPaths(x, m), x = this.addShapes(d, y[1], P)
                                            } else this.addPaths(x, m), x = this.addShapes(d, y[1]);
                                        this.addPaths(x, m)
                                    }
                                }
                                d.shape.paths = m
                            }
                    }
                }, TrimModifier.prototype.addPaths = function(t, e) {
                    var r, i = t.length;
                    for (r = 0; r < i; r += 1) e.addShape(t[r])
                }, TrimModifier.prototype.addSegment = function(t, e, r, i, n, a, s) {
                    n.setXYAt(e[0], e[1], "o", a), n.setXYAt(r[0], r[1], "i", a + 1), s && n.setXYAt(t[0], t[1], "v", a), n.setXYAt(i[0], i[1], "v", a + 1)
                }, TrimModifier.prototype.addSegmentFromArray = function(t, e, r, i) {
                    e.setXYAt(t[1], t[5], "o", r), e.setXYAt(t[2], t[6], "i", r + 1), i && e.setXYAt(t[0], t[4], "v", r), e.setXYAt(t[3], t[7], "v", r + 1)
                }, TrimModifier.prototype.addShapes = function(t, e, r) {
                    var i, n, a, s, o, l, h, p, c = t.pathsData,
                        u = t.shape.paths.shapes,
                        f = t.shape.paths._length,
                        d = 0,
                        m = [],
                        y = !0;
                    for (r ? (o = r._length, p = r._length) : (r = shapePool.newElement(), o = 0, p = 0), m.push(r), i = 0; i < f; i += 1) {
                        for (l = c[i].lengths, r.c = u[i].c, a = u[i].c ? l.length : l.length + 1, n = 1; n < a; n += 1)
                            if (d + (s = l[n - 1]).addedLength < e.s) d += s.addedLength, r.c = !1;
                            else {
                                if (d > e.e) {
                                    r.c = !1;
                                    break
                                }
                                e.s <= d && e.e >= d + s.addedLength ? (this.addSegment(u[i].v[n - 1], u[i].o[n - 1], u[i].i[n], u[i].v[n], r, o, y), y = !1) : (h = bez.getNewSegment(u[i].v[n - 1], u[i].v[n], u[i].o[n - 1], u[i].i[n], (e.s - d) / s.addedLength, (e.e - d) / s.addedLength, l[n - 1]), this.addSegmentFromArray(h, r, o, y), y = !1, r.c = !1), d += s.addedLength, o += 1
                            }
                        if (u[i].c && l.length) {
                            if (s = l[n - 1], d <= e.e) {
                                var g = l[n - 1].addedLength;
                                e.s <= d && e.e >= d + g ? (this.addSegment(u[i].v[n - 1], u[i].o[n - 1], u[i].i[0], u[i].v[0], r, o, y), y = !1) : (h = bez.getNewSegment(u[i].v[n - 1], u[i].v[0], u[i].o[n - 1], u[i].i[0], (e.s - d) / g, (e.e - d) / g, l[n - 1]), this.addSegmentFromArray(h, r, o, y), y = !1, r.c = !1)
                            } else r.c = !1;
                            d += s.addedLength, o += 1
                        }
                        if (r._length && (r.setXYAt(r.v[p][0], r.v[p][1], "i", p), r.setXYAt(r.v[r._length - 1][0], r.v[r._length - 1][1], "o", r._length - 1)), d > e.e) break;
                        i < f - 1 && (r = shapePool.newElement(), y = !0, m.push(r), o = 0)
                    }
                    return m
                }, ShapeModifiers.registerModifier("tm", TrimModifier), extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(t, e) {
                    this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
                }, RoundCornersModifier.prototype.processPath = function(t, e) {
                    var r, i = shapePool.newElement();
                    i.c = t.c;
                    var n, a, s, o, l, h, p, c, u, f, d, m, y = t._length,
                        g = 0;
                    for (r = 0; r < y; r += 1) n = t.v[r], s = t.o[r], a = t.i[r], n[0] === s[0] && n[1] === s[1] && n[0] === a[0] && n[1] === a[1] ? 0 !== r && r !== y - 1 || t.c ? (o = 0 === r ? t.v[y - 1] : t.v[r - 1], h = (l = Math.sqrt(Math.pow(n[0] - o[0], 2) + Math.pow(n[1] - o[1], 2))) ? Math.min(l / 2, e) / l : 0, p = d = n[0] + (o[0] - n[0]) * h, c = m = n[1] - (n[1] - o[1]) * h, u = p - (p - n[0]) * roundCorner, f = c - (c - n[1]) * roundCorner, i.setTripleAt(p, c, u, f, d, m, g), g += 1, o = r === y - 1 ? t.v[0] : t.v[r + 1], h = (l = Math.sqrt(Math.pow(n[0] - o[0], 2) + Math.pow(n[1] - o[1], 2))) ? Math.min(l / 2, e) / l : 0, p = u = n[0] + (o[0] - n[0]) * h, c = f = n[1] + (o[1] - n[1]) * h, d = p - (p - n[0]) * roundCorner, m = c - (c - n[1]) * roundCorner, i.setTripleAt(p, c, u, f, d, m, g), g += 1) : (i.setTripleAt(n[0], n[1], s[0], s[1], a[0], a[1], g), g += 1) : (i.setTripleAt(t.v[r][0], t.v[r][1], t.o[r][0], t.o[r][1], t.i[r][0], t.i[r][1], g), g += 1);
                    return i
                }, RoundCornersModifier.prototype.processShapes = function(t) {
                    var e, r, i, n, a, s, o = this.shapes.length,
                        l = this.rd.v;
                    if (0 !== l)
                        for (r = 0; r < o; r += 1) {
                            if (s = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || t)
                                for (s.releaseShapes(), a.shape._mdf = !0, e = a.shape.paths.shapes, n = a.shape.paths._length, i = 0; i < n; i += 1) s.addShape(this.processPath(e[i], l));
                            a.shape.paths = a.localShapeCollection
                        }
                    this.dynamicProperties.length || (this._mdf = !1)
                }, ShapeModifiers.registerModifier("rd", RoundCornersModifier), extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(t, e) {
                    this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length
                }, PuckerAndBloatModifier.prototype.processPath = function(t, e) {
                    var r = e / 100,
                        i = [0, 0],
                        n = t._length,
                        a = 0;
                    for (a = 0; a < n; a += 1) i[0] += t.v[a][0], i[1] += t.v[a][1];
                    i[0] /= n, i[1] /= n;
                    var s, o, l, h, p, c, u = shapePool.newElement();
                    for (u.c = t.c, a = 0; a < n; a += 1) s = t.v[a][0] + (i[0] - t.v[a][0]) * r, o = t.v[a][1] + (i[1] - t.v[a][1]) * r, l = t.o[a][0] + (i[0] - t.o[a][0]) * -r, h = t.o[a][1] + (i[1] - t.o[a][1]) * -r, p = t.i[a][0] + (i[0] - t.i[a][0]) * -r, c = t.i[a][1] + (i[1] - t.i[a][1]) * -r, u.setTripleAt(s, o, l, h, p, c, a);
                    return u
                }, PuckerAndBloatModifier.prototype.processShapes = function(t) {
                    var e, r, i, n, a, s, o = this.shapes.length,
                        l = this.amount.v;
                    if (0 !== l)
                        for (r = 0; r < o; r += 1) {
                            if (s = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || t)
                                for (s.releaseShapes(), a.shape._mdf = !0, e = a.shape.paths.shapes, n = a.shape.paths._length, i = 0; i < n; i += 1) s.addShape(this.processPath(e[i], l));
                            a.shape.paths = a.localShapeCollection
                        }
                    this.dynamicProperties.length || (this._mdf = !1)
                }, ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(t, e) {
                    this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this), this.o = PropertyFactory.getProp(t, e.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this), this.so = PropertyFactory.getProp(t, e.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, .01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix
                }, RepeaterModifier.prototype.applyTransforms = function(t, e, r, i, n, a) {
                    var s = a ? -1 : 1,
                        o = i.s.v[0] + (1 - i.s.v[0]) * (1 - n),
                        l = i.s.v[1] + (1 - i.s.v[1]) * (1 - n);
                    t.translate(i.p.v[0] * s * n, i.p.v[1] * s * n, i.p.v[2]), e.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), e.rotate(-i.r.v * s * n), e.translate(i.a.v[0], i.a.v[1], i.a.v[2]), r.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), r.scale(a ? 1 / o : o, a ? 1 / l : l), r.translate(i.a.v[0], i.a.v[1], i.a.v[2])
                }, RepeaterModifier.prototype.init = function(t, e, r, i) {
                    for (this.elem = t, this.arr = e, this.pos = r, this.elemsData = i, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[r]); r > 0;) r -= 1, this._elements.unshift(e[r]);
                    this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
                }, RepeaterModifier.prototype.resetElements = function(t) {
                    var e, r = t.length;
                    for (e = 0; e < r; e += 1) t[e]._processed = !1, "gr" === t[e].ty && this.resetElements(t[e].it)
                }, RepeaterModifier.prototype.cloneElements = function(t) {
                    var e = JSON.parse(JSON.stringify(t));
                    return this.resetElements(e), e
                }, RepeaterModifier.prototype.changeGroupRender = function(t, e) {
                    var r, i = t.length;
                    for (r = 0; r < i; r += 1) t[r]._render = e, "gr" === t[r].ty && this.changeGroupRender(t[r].it, e)
                }, RepeaterModifier.prototype.processShapes = function(t) {
                    var e, r, i, n, a, s = !1;
                    if (this._mdf || t) {
                        var o, l = Math.ceil(this.c.v);
                        if (this._groups.length < l) {
                            for (; this._groups.length < l;) {
                                var h = {
                                    it: this.cloneElements(this._elements),
                                    ty: "gr"
                                };
                                h.it.push({
                                    a: {
                                        a: 0,
                                        ix: 1,
                                        k: [0, 0]
                                    },
                                    nm: "Transform",
                                    o: {
                                        a: 0,
                                        ix: 7,
                                        k: 100
                                    },
                                    p: {
                                        a: 0,
                                        ix: 2,
                                        k: [0, 0]
                                    },
                                    r: {
                                        a: 1,
                                        ix: 6,
                                        k: [{
                                            s: 0,
                                            e: 0,
                                            t: 0
                                        }, {
                                            s: 0,
                                            e: 0,
                                            t: 1
                                        }]
                                    },
                                    s: {
                                        a: 0,
                                        ix: 3,
                                        k: [100, 100]
                                    },
                                    sa: {
                                        a: 0,
                                        ix: 5,
                                        k: 0
                                    },
                                    sk: {
                                        a: 0,
                                        ix: 4,
                                        k: 0
                                    },
                                    ty: "tr"
                                }), this.arr.splice(0, 0, h), this._groups.splice(0, 0, h), this._currentCopies += 1
                            }
                            this.elem.reloadShapes(), s = !0
                        }
                        for (a = 0, i = 0; i <= this._groups.length - 1; i += 1) {
                            if (o = a < l, this._groups[i]._render = o, this.changeGroupRender(this._groups[i].it, o), !o) {
                                var p = this.elemsData[i].it,
                                    c = p[p.length - 1];
                                0 !== c.transform.op.v ? (c.transform.op._mdf = !0, c.transform.op.v = 0) : c.transform.op._mdf = !1
                            }
                            a += 1
                        }
                        this._currentCopies = l;
                        var u = this.o.v,
                            f = u % 1,
                            d = u > 0 ? Math.floor(u) : Math.ceil(u),
                            m = this.pMatrix.props,
                            y = this.rMatrix.props,
                            g = this.sMatrix.props;
                        this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
                        var v, _, b = 0;
                        if (u > 0) {
                            for (; b < d;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), b += 1;
                            f && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, f, !1), b += f)
                        } else if (u < 0) {
                            for (; b > d;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), b -= 1;
                            f && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -f, !0), b -= f)
                        }
                        for (i = 1 === this.data.m ? 0 : this._currentCopies - 1, n = 1 === this.data.m ? 1 : -1, a = this._currentCopies; a;) {
                            if (_ = (r = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v.props).length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = 1 === this._currentCopies ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1)), 0 !== b) {
                                for ((0 !== i && 1 === n || i !== this._currentCopies - 1 && -1 === n) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(y[0], y[1], y[2], y[3], y[4], y[5], y[6], y[7], y[8], y[9], y[10], y[11], y[12], y[13], y[14], y[15]), this.matrix.transform(g[0], g[1], g[2], g[3], g[4], g[5], g[6], g[7], g[8], g[9], g[10], g[11], g[12], g[13], g[14], g[15]), this.matrix.transform(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]), v = 0; v < _; v += 1) r[v] = this.matrix.props[v];
                                this.matrix.reset()
                            } else
                                for (this.matrix.reset(), v = 0; v < _; v += 1) r[v] = this.matrix.props[v];
                            b += 1, a -= 1, i += n
                        }
                    } else
                        for (a = this._currentCopies, i = 0, n = 1; a;) r = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, a -= 1, i += n;
                    return s
                }, RepeaterModifier.prototype.addShape = function() {}, ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeCollection.prototype.addShape = function(t) {
                    this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1
                }, ShapeCollection.prototype.releaseShapes = function() {
                    var t;
                    for (t = 0; t < this._length; t += 1) shapePool.release(this.shapes[t]);
                    this._length = 0
                }, DashProperty.prototype.getValue = function(t) {
                    if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
                        var e = 0,
                            r = this.dataProps.length;
                        for ("svg" === this.renderer && (this.dashStr = ""), e = 0; e < r; e += 1) "o" !== this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v
                    }
                }, extendPrototype([DynamicPropertyContainer], DashProperty), GradientProperty.prototype.comparePoints = function(t, e) {
                    for (var r = 0, i = this.o.length / 2; r < i;) {
                        if (Math.abs(t[4 * r] - t[4 * e + 2 * r]) > .01) return !1;
                        r += 1
                    }
                    return !0
                }, GradientProperty.prototype.checkCollapsable = function() {
                    if (this.o.length / 2 !== this.c.length / 4) return !1;
                    if (this.data.k.k[0].s)
                        for (var t = 0, e = this.data.k.k.length; t < e;) {
                            if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;
                            t += 1
                        } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
                    return !0
                }, GradientProperty.prototype.getValue = function(t) {
                    if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
                        var e, r, i, n = 4 * this.data.p;
                        for (e = 0; e < n; e += 1) r = e % 4 === 0 ? 100 : 255, i = Math.round(this.prop.v[e] * r), this.c[e] !== i && (this.c[e] = i, this._cmdf = !t);
                        if (this.o.length)
                            for (n = this.prop.v.length, e = 4 * this.data.p; e < n; e += 1) r = e % 2 === 0 ? 100 : 1, i = e % 2 === 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== i && (this.o[e - 4 * this.data.p] = i, this._omdf = !t);
                        this._mdf = !t
                    }
                }, extendPrototype([DynamicPropertyContainer], GradientProperty);
                var buildShapeString = function(t, e, r, i) {
                        if (0 === e) return "";
                        var n, a = t.o,
                            s = t.i,
                            o = t.v,
                            l = " M" + i.applyToPointStringified(o[0][0], o[0][1]);
                        for (n = 1; n < e; n += 1) l += " C" + i.applyToPointStringified(a[n - 1][0], a[n - 1][1]) + " " + i.applyToPointStringified(s[n][0], s[n][1]) + " " + i.applyToPointStringified(o[n][0], o[n][1]);
                        return r && e && (l += " C" + i.applyToPointStringified(a[n - 1][0], a[n - 1][1]) + " " + i.applyToPointStringified(s[0][0], s[0][1]) + " " + i.applyToPointStringified(o[0][0], o[0][1]), l += "z"), l
                    },
                    audioControllerFactory = function() {
                        function t(t) {
                            this.audios = [], this.audioFactory = t, this._volume = 1, this._isMuted = !1
                        }
                        return t.prototype = {
                                addAudio: function(t) {
                                    this.audios.push(t)
                                },
                                pause: function() {
                                    var t, e = this.audios.length;
                                    for (t = 0; t < e; t += 1) this.audios[t].pause()
                                },
                                resume: function() {
                                    var t, e = this.audios.length;
                                    for (t = 0; t < e; t += 1) this.audios[t].resume()
                                },
                                setRate: function(t) {
                                    var e, r = this.audios.length;
                                    for (e = 0; e < r; e += 1) this.audios[e].setRate(t)
                                },
                                createAudio: function(t) {
                                    return this.audioFactory ? this.audioFactory(t) : Howl ? new Howl({
                                        src: [t]
                                    }) : {
                                        isPlaying: !1,
                                        play: function() {
                                            this.isPlaying = !0
                                        },
                                        seek: function() {
                                            this.isPlaying = !1
                                        },
                                        playing: function() {},
                                        rate: function() {},
                                        setVolume: function() {}
                                    }
                                },
                                setAudioFactory: function(t) {
                                    this.audioFactory = t
                                },
                                setVolume: function(t) {
                                    this._volume = t, this._updateVolume()
                                },
                                mute: function() {
                                    this._isMuted = !0, this._updateVolume()
                                },
                                unmute: function() {
                                    this._isMuted = !1, this._updateVolume()
                                },
                                getVolume: function() {
                                    return this._volume
                                },
                                _updateVolume: function() {
                                    var t, e = this.audios.length;
                                    for (t = 0; t < e; t += 1) this.audios[t].volume(this._volume * (this._isMuted ? 0 : 1))
                                }
                            },
                            function() {
                                return new t
                            }
                    }(),
                    ImagePreloader = function() {
                        var t = function() {
                            var t = createTag("canvas");
                            t.width = 1, t.height = 1;
                            var e = t.getContext("2d");
                            return e.fillStyle = "rgba(0,0,0,0)", e.fillRect(0, 0, 1, 1), t
                        }();

                        function e() {
                            this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                        }

                        function r() {
                            this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                        }

                        function i(t, e, r) {
                            var i = "";
                            if (t.e) i = t.p;
                            else if (e) {
                                var n = t.p; - 1 !== n.indexOf("images/") && (n = n.split("/")[1]), i = e + n
                            } else i = r, i += t.u ? t.u : "", i += t.p;
                            return i
                        }

                        function n(t) {
                            var e = 0,
                                r = setInterval(function() {
                                    (t.getBBox().width || e > 500) && (this._imageLoaded(), clearInterval(r)), e += 1
                                }.bind(this), 50)
                        }

                        function a(t) {
                            var e = {
                                    assetData: t
                                },
                                r = i(t, this.assetsPath, this.path);
                            return dataManager.loadData(r, function(t) {
                                e.img = t, this._footageLoaded()
                            }.bind(this), function() {
                                e.img = {}, this._footageLoaded()
                            }.bind(this)), e
                        }

                        function s() {
                            this._imageLoaded = e.bind(this), this._footageLoaded = r.bind(this), this.testImageLoaded = n.bind(this), this.createFootageData = a.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = []
                        }
                        return s.prototype = {
                            loadAssets: function(t, e) {
                                var r;
                                this.imagesLoadedCb = e;
                                var i = t.length;
                                for (r = 0; r < i; r += 1) t[r].layers || (t[r].t && "seq" !== t[r].t ? 3 === t[r].t && (this.totalFootages += 1, this.images.push(this.createFootageData(t[r]))) : (this.totalImages += 1, this.images.push(this._createImageData(t[r]))))
                            },
                            setAssetsPath: function(t) {
                                this.assetsPath = t || ""
                            },
                            setPath: function(t) {
                                this.path = t || ""
                            },
                            loadedImages: function() {
                                return this.totalImages === this.loadedAssets
                            },
                            loadedFootages: function() {
                                return this.totalFootages === this.loadedFootagesCount
                            },
                            destroy: function() {
                                this.imagesLoadedCb = null, this.images.length = 0
                            },
                            getAsset: function(t) {
                                for (var e = 0, r = this.images.length; e < r;) {
                                    if (this.images[e].assetData === t) return this.images[e].img;
                                    e += 1
                                }
                                return null
                            },
                            createImgData: function(e) {
                                var r = i(e, this.assetsPath, this.path),
                                    n = createTag("img");
                                n.crossOrigin = "anonymous", n.addEventListener("load", this._imageLoaded, !1), n.addEventListener("error", function() {
                                    a.img = t, this._imageLoaded()
                                }.bind(this), !1), n.src = r;
                                var a = {
                                    img: n,
                                    assetData: e
                                };
                                return a
                            },
                            createImageData: function(e) {
                                var r = i(e, this.assetsPath, this.path),
                                    n = createNS("image");
                                isSafari ? this.testImageLoaded(n) : n.addEventListener("load", this._imageLoaded, !1), n.addEventListener("error", function() {
                                    a.img = t, this._imageLoaded()
                                }.bind(this), !1), n.setAttributeNS("http://www.w3.org/1999/xlink", "href", r), this._elementHelper.append ? this._elementHelper.append(n) : this._elementHelper.appendChild(n);
                                var a = {
                                    img: n,
                                    assetData: e
                                };
                                return a
                            },
                            imageLoaded: e,
                            footageLoaded: r,
                            setCacheType: function(t, e) {
                                "svg" === t ? (this._elementHelper = e, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
                            }
                        }, s
                    }(),
                    featureSupport = function() {
                        var t = {
                            maskType: !0
                        };
                        return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = !1), t
                    }(),
                    filtersFactory = function() {
                        var t = {
                            createFilter: function(t, e) {
                                var r = createNS("filter");
                                return r.setAttribute("id", t), !0 !== e && (r.setAttribute("filterUnits", "objectBoundingBox"), r.setAttribute("x", "0%"), r.setAttribute("y", "0%"), r.setAttribute("width", "100%"), r.setAttribute("height", "100%")), r
                            },
                            createAlphaToLuminanceFilter: function() {
                                var t = createNS("feColorMatrix");
                                return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t
                            }
                        };
                        return t
                    }();

                function TextAnimatorProperty(t, e, r) {
                    this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = r, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {
                        alignment: {}
                    }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(r)
                }

                function TextAnimatorDataProperty(t, e, r) {
                    var i = {
                            propType: !1
                        },
                        n = PropertyFactory.getProp,
                        a = e.a;
                    this.a = {
                        r: a.r ? n(t, a.r, 0, degToRads, r) : i,
                        rx: a.rx ? n(t, a.rx, 0, degToRads, r) : i,
                        ry: a.ry ? n(t, a.ry, 0, degToRads, r) : i,
                        sk: a.sk ? n(t, a.sk, 0, degToRads, r) : i,
                        sa: a.sa ? n(t, a.sa, 0, degToRads, r) : i,
                        s: a.s ? n(t, a.s, 1, .01, r) : i,
                        a: a.a ? n(t, a.a, 1, 0, r) : i,
                        o: a.o ? n(t, a.o, 0, .01, r) : i,
                        p: a.p ? n(t, a.p, 1, 0, r) : i,
                        sw: a.sw ? n(t, a.sw, 0, 0, r) : i,
                        sc: a.sc ? n(t, a.sc, 1, 0, r) : i,
                        fc: a.fc ? n(t, a.fc, 1, 0, r) : i,
                        fh: a.fh ? n(t, a.fh, 0, 0, r) : i,
                        fs: a.fs ? n(t, a.fs, 0, .01, r) : i,
                        fb: a.fb ? n(t, a.fb, 0, .01, r) : i,
                        t: a.t ? n(t, a.t, 0, 0, r) : i
                    }, this.s = TextSelectorProp.getTextSelectorProp(t, e.s, r), this.s.t = e.s.t
                }

                function LetterProps(t, e, r, i, n, a) {
                    this.o = t, this.sw = e, this.sc = r, this.fc = i, this.m = n, this.p = a, this._mdf = {
                        o: !0,
                        sw: !!e,
                        sc: !!r,
                        fc: !!i,
                        m: !0,
                        p: !0
                    }
                }

                function TextProperty(t, e) {
                    this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
                        ascent: 0,
                        boxWidth: this.defaultBoxWidth,
                        f: "",
                        fStyle: "",
                        fWeight: "",
                        fc: "",
                        j: "",
                        justifyOffset: "",
                        l: [],
                        lh: 0,
                        lineWidths: [],
                        ls: "",
                        of: "",
                        s: "",
                        sc: "",
                        sw: 0,
                        t: 0,
                        tr: 0,
                        sz: 0,
                        ps: null,
                        fillColorAnim: !1,
                        strokeColorAnim: !1,
                        strokeWidthAnim: !1,
                        yOffset: 0,
                        finalSize: 0,
                        finalText: [],
                        finalLineHeight: 0,
                        __complete: !1
                    }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData)
                }
                TextAnimatorProperty.prototype.searchProperties = function() {
                    var t, e, r = this._textData.a.length,
                        i = PropertyFactory.getProp;
                    for (t = 0; t < r; t += 1) e = this._textData.a[t], this._animatorsData[t] = new TextAnimatorDataProperty(this._elem, e, this);
                    this._textData.p && "m" in this._textData.p ? (this._pathData = {
                        a: i(this._elem, this._textData.p.a, 0, 0, this),
                        f: i(this._elem, this._textData.p.f, 0, 0, this),
                        l: i(this._elem, this._textData.p.l, 0, 0, this),
                        r: i(this._elem, this._textData.p.r, 0, 0, this),
                        p: i(this._elem, this._textData.p.p, 0, 0, this),
                        m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
                    }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = i(this._elem, this._textData.m.a, 1, 0, this)
                }, TextAnimatorProperty.prototype.getMeasures = function(t, e) {
                    if (this.lettersChangedFlag = e, this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
                        this._isFirstFrame = !1;
                        var r, i, n, a, s, o, l, h, p, c, u, f, d, m, y, g, v, _, b, x = this._moreOptions.alignment.v,
                            P = this._animatorsData,
                            S = this._textData,
                            A = this.mHelper,
                            E = this._renderType,
                            w = this.renderedLetters.length,
                            k = t.l;
                        if (this._hasMaskedPath) {
                            if (b = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                                var T, C = b.v;
                                for (this._pathData.r.v && (C = C.reverse()), s = {
                                        tLength: 0,
                                        segments: []
                                    }, a = C._length - 1, g = 0, n = 0; n < a; n += 1) T = bez.buildBezierData(C.v[n], C.v[n + 1], [C.o[n][0] - C.v[n][0], C.o[n][1] - C.v[n][1]], [C.i[n + 1][0] - C.v[n + 1][0], C.i[n + 1][1] - C.v[n + 1][1]]), s.tLength += T.segmentLength, s.segments.push(T), g += T.segmentLength;
                                n = a, b.v.c && (T = bez.buildBezierData(C.v[n], C.v[0], [C.o[n][0] - C.v[n][0], C.o[n][1] - C.v[n][1]], [C.i[0][0] - C.v[0][0], C.i[0][1] - C.v[0][1]]), s.tLength += T.segmentLength, s.segments.push(T), g += T.segmentLength), this._pathData.pi = s
                            }
                            if (s = this._pathData.pi, o = this._pathData.f.v, u = 0, c = 1, h = 0, p = !0, m = s.segments, o < 0 && b.v.c)
                                for (s.tLength < Math.abs(o) && (o = -Math.abs(o) % s.tLength), c = (d = m[u = m.length - 1].points).length - 1; o < 0;) o += d[c].partialLength, (c -= 1) < 0 && (c = (d = m[u -= 1].points).length - 1);
                            f = (d = m[u].points)[c - 1], y = (l = d[c]).partialLength
                        }
                        a = k.length, r = 0, i = 0;
                        var M, D, F, I, V, R = 1.2 * t.finalSize * .714,
                            L = !0;
                        F = P.length;
                        var O, B, j, G, N, z, H, q, $, W, Y, X, Z = -1,
                            U = o,
                            K = u,
                            J = c,
                            Q = -1,
                            tt = "",
                            et = this.defaultPropsArray;
                        if (2 === t.j || 1 === t.j) {
                            var rt = 0,
                                it = 0,
                                nt = 2 === t.j ? -.5 : -1,
                                at = 0,
                                st = !0;
                            for (n = 0; n < a; n += 1)
                                if (k[n].n) {
                                    for (rt && (rt += it); at < n;) k[at].animatorJustifyOffset = rt, at += 1;
                                    rt = 0, st = !0
                                } else {
                                    for (D = 0; D < F; D += 1)(M = P[D].a).t.propType && (st && 2 === t.j && (it += M.t.v * nt), (V = P[D].s.getMult(k[n].anIndexes[D], S.a[D].s.totalChars)).length ? rt += M.t.v * V[0] * nt : rt += M.t.v * V * nt);
                                    st = !1
                                }
                            for (rt && (rt += it); at < n;) k[at].animatorJustifyOffset = rt, at += 1
                        }
                        for (n = 0; n < a; n += 1) {
                            if (A.reset(), G = 1, k[n].n) r = 0, i += t.yOffset, i += L ? 1 : 0, o = U, L = !1, this._hasMaskedPath && (c = J, f = (d = m[u = K].points)[c - 1], y = (l = d[c]).partialLength, h = 0), tt = "", Y = "", $ = "", X = "", et = this.defaultPropsArray;
                            else {
                                if (this._hasMaskedPath) {
                                    if (Q !== k[n].line) {
                                        switch (t.j) {
                                            case 1:
                                                o += g - t.lineWidths[k[n].line];
                                                break;
                                            case 2:
                                                o += (g - t.lineWidths[k[n].line]) / 2
                                        }
                                        Q = k[n].line
                                    }
                                    Z !== k[n].ind && (k[Z] && (o += k[Z].extra), o += k[n].an / 2, Z = k[n].ind), o += x[0] * k[n].an * .005;
                                    var ot = 0;
                                    for (D = 0; D < F; D += 1)(M = P[D].a).p.propType && ((V = P[D].s.getMult(k[n].anIndexes[D], S.a[D].s.totalChars)).length ? ot += M.p.v[0] * V[0] : ot += M.p.v[0] * V), M.a.propType && ((V = P[D].s.getMult(k[n].anIndexes[D], S.a[D].s.totalChars)).length ? ot += M.a.v[0] * V[0] : ot += M.a.v[0] * V);
                                    for (p = !0, this._pathData.a.v && (o = .5 * k[0].an + (g - this._pathData.f.v - .5 * k[0].an - .5 * k[k.length - 1].an) * Z / (a - 1), o += this._pathData.f.v); p;) h + y >= o + ot || !d ? (v = (o + ot - h) / l.partialLength, B = f.point[0] + (l.point[0] - f.point[0]) * v, j = f.point[1] + (l.point[1] - f.point[1]) * v, A.translate(-x[0] * k[n].an * .005, -x[1] * R * .01), p = !1) : d && (h += l.partialLength, (c += 1) >= d.length && (c = 0, m[u += 1] ? d = m[u].points : b.v.c ? (c = 0, d = m[u = 0].points) : (h -= l.partialLength, d = null)), d && (f = l, y = (l = d[c]).partialLength));
                                    O = k[n].an / 2 - k[n].add, A.translate(-O, 0, 0)
                                } else O = k[n].an / 2 - k[n].add, A.translate(-O, 0, 0), A.translate(-x[0] * k[n].an * .005, -x[1] * R * .01, 0);
                                for (D = 0; D < F; D += 1)(M = P[D].a).t.propType && (V = P[D].s.getMult(k[n].anIndexes[D], S.a[D].s.totalChars), 0 === r && 0 === t.j || (this._hasMaskedPath ? V.length ? o += M.t.v * V[0] : o += M.t.v * V : V.length ? r += M.t.v * V[0] : r += M.t.v * V));
                                for (t.strokeWidthAnim && (z = t.sw || 0), t.strokeColorAnim && (N = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (H = [t.fc[0], t.fc[1], t.fc[2]]), D = 0; D < F; D += 1)(M = P[D].a).a.propType && ((V = P[D].s.getMult(k[n].anIndexes[D], S.a[D].s.totalChars)).length ? A.translate(-M.a.v[0] * V[0], -M.a.v[1] * V[1], M.a.v[2] * V[2]) : A.translate(-M.a.v[0] * V, -M.a.v[1] * V, M.a.v[2] * V));
                                for (D = 0; D < F; D += 1)(M = P[D].a).s.propType && ((V = P[D].s.getMult(k[n].anIndexes[D], S.a[D].s.totalChars)).length ? A.scale(1 + (M.s.v[0] - 1) * V[0], 1 + (M.s.v[1] - 1) * V[1], 1) : A.scale(1 + (M.s.v[0] - 1) * V, 1 + (M.s.v[1] - 1) * V, 1));
                                for (D = 0; D < F; D += 1) {
                                    if (M = P[D].a, V = P[D].s.getMult(k[n].anIndexes[D], S.a[D].s.totalChars), M.sk.propType && (V.length ? A.skewFromAxis(-M.sk.v * V[0], M.sa.v * V[1]) : A.skewFromAxis(-M.sk.v * V, M.sa.v * V)), M.r.propType && (V.length ? A.rotateZ(-M.r.v * V[2]) : A.rotateZ(-M.r.v * V)), M.ry.propType && (V.length ? A.rotateY(M.ry.v * V[1]) : A.rotateY(M.ry.v * V)), M.rx.propType && (V.length ? A.rotateX(M.rx.v * V[0]) : A.rotateX(M.rx.v * V)), M.o.propType && (V.length ? G += (M.o.v * V[0] - G) * V[0] : G += (M.o.v * V - G) * V), t.strokeWidthAnim && M.sw.propType && (V.length ? z += M.sw.v * V[0] : z += M.sw.v * V), t.strokeColorAnim && M.sc.propType)
                                        for (q = 0; q < 3; q += 1) V.length ? N[q] += (M.sc.v[q] - N[q]) * V[0] : N[q] += (M.sc.v[q] - N[q]) * V;
                                    if (t.fillColorAnim && t.fc) {
                                        if (M.fc.propType)
                                            for (q = 0; q < 3; q += 1) V.length ? H[q] += (M.fc.v[q] - H[q]) * V[0] : H[q] += (M.fc.v[q] - H[q]) * V;
                                        M.fh.propType && (H = V.length ? addHueToRGB(H, M.fh.v * V[0]) : addHueToRGB(H, M.fh.v * V)), M.fs.propType && (H = V.length ? addSaturationToRGB(H, M.fs.v * V[0]) : addSaturationToRGB(H, M.fs.v * V)), M.fb.propType && (H = V.length ? addBrightnessToRGB(H, M.fb.v * V[0]) : addBrightnessToRGB(H, M.fb.v * V))
                                    }
                                }
                                for (D = 0; D < F; D += 1)(M = P[D].a).p.propType && (V = P[D].s.getMult(k[n].anIndexes[D], S.a[D].s.totalChars), this._hasMaskedPath ? V.length ? A.translate(0, M.p.v[1] * V[0], -M.p.v[2] * V[1]) : A.translate(0, M.p.v[1] * V, -M.p.v[2] * V) : V.length ? A.translate(M.p.v[0] * V[0], M.p.v[1] * V[1], -M.p.v[2] * V[2]) : A.translate(M.p.v[0] * V, M.p.v[1] * V, -M.p.v[2] * V));
                                if (t.strokeWidthAnim && ($ = z < 0 ? 0 : z), t.strokeColorAnim && (W = "rgb(" + Math.round(255 * N[0]) + "," + Math.round(255 * N[1]) + "," + Math.round(255 * N[2]) + ")"), t.fillColorAnim && t.fc && (Y = "rgb(" + Math.round(255 * H[0]) + "," + Math.round(255 * H[1]) + "," + Math.round(255 * H[2]) + ")"), this._hasMaskedPath) {
                                    if (A.translate(0, -t.ls), A.translate(0, x[1] * R * .01 + i, 0), this._pathData.p.v) {
                                        _ = (l.point[1] - f.point[1]) / (l.point[0] - f.point[0]);
                                        var lt = 180 * Math.atan(_) / Math.PI;
                                        l.point[0] < f.point[0] && (lt += 180), A.rotate(-lt * Math.PI / 180)
                                    }
                                    A.translate(B, j, 0), o -= x[0] * k[n].an * .005, k[n + 1] && Z !== k[n + 1].ind && (o += k[n].an / 2, o += .001 * t.tr * t.finalSize)
                                } else {
                                    switch (A.translate(r, i, 0), t.ps && A.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                                        case 1:
                                            A.translate(k[n].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[k[n].line]), 0, 0);
                                            break;
                                        case 2:
                                            A.translate(k[n].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[k[n].line]) / 2, 0, 0)
                                    }
                                    A.translate(0, -t.ls), A.translate(O, 0, 0), A.translate(x[0] * k[n].an * .005, x[1] * R * .01, 0), r += k[n].l + .001 * t.tr * t.finalSize
                                }
                                "html" === E ? tt = A.toCSS() : "svg" === E ? tt = A.to2dCSS() : et = [A.props[0], A.props[1], A.props[2], A.props[3], A.props[4], A.props[5], A.props[6], A.props[7], A.props[8], A.props[9], A.props[10], A.props[11], A.props[12], A.props[13], A.props[14], A.props[15]], X = G
                            }
                            w <= n ? (I = new LetterProps(X, $, W, Y, tt, et), this.renderedLetters.push(I), w += 1, this.lettersChangedFlag = !0) : (I = this.renderedLetters[n], this.lettersChangedFlag = I.update(X, $, W, Y, tt, et) || this.lettersChangedFlag)
                        }
                    }
                }, TextAnimatorProperty.prototype.getValue = function() {
                    this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
                }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), LetterProps.prototype.update = function(t, e, r, i, n, a) {
                    this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
                    var s = !1;
                    return this.o !== t && (this.o = t, this._mdf.o = !0, s = !0), this.sw !== e && (this.sw = e, this._mdf.sw = !0, s = !0), this.sc !== r && (this.sc = r, this._mdf.sc = !0, s = !0), this.fc !== i && (this.fc = i, this._mdf.fc = !0, s = !0), this.m !== n && (this.m = n, this._mdf.m = !0, s = !0), !a.length || this.p[0] === a[0] && this.p[1] === a[1] && this.p[4] === a[4] && this.p[5] === a[5] && this.p[12] === a[12] && this.p[13] === a[13] || (this.p = a, this._mdf.p = !0, s = !0), s
                }, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(t, e) {
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }, TextProperty.prototype.setCurrentData = function(t) {
                    t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
                }, TextProperty.prototype.searchProperty = function() {
                    return this.searchKeyframes()
                }, TextProperty.prototype.searchKeyframes = function() {
                    return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
                }, TextProperty.prototype.addEffect = function(t) {
                    this.effectsSequence.push(t), this.elem.addDynamicProperty(this)
                }, TextProperty.prototype.getValue = function(t) {
                    if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {
                        this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                        var e = this.currentData,
                            r = this.keysIndex;
                        if (this.lock) this.setCurrentData(this.currentData);
                        else {
                            var i;
                            this.lock = !0, this._mdf = !1;
                            var n = this.effectsSequence.length,
                                a = t || this.data.d.k[this.keysIndex].s;
                            for (i = 0; i < n; i += 1) a = r !== this.keysIndex ? this.effectsSequence[i](a, a.t) : this.effectsSequence[i](this.currentData, a.t);
                            e !== a && this.setCurrentData(a), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId
                        }
                    }
                }, TextProperty.prototype.getKeyframeValue = function() {
                    for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, r = 0, i = t.length; r <= i - 1 && !(r === i - 1 || t[r + 1].t > e);) r += 1;
                    return this.keysIndex !== r && (this.keysIndex = r), this.data.d.k[this.keysIndex].s
                }, TextProperty.prototype.buildFinalText = function(t) {
                    for (var e, r, i = [], n = 0, a = t.length, s = !1; n < a;) e = t.charCodeAt(n), FontManager.isCombinedCharacter(e) ? i[i.length - 1] += t.charAt(n) : e >= 55296 && e <= 56319 ? (r = t.charCodeAt(n + 1)) >= 56320 && r <= 57343 ? (s || FontManager.isModifier(e, r) ? (i[i.length - 1] += t.substr(n, 2), s = !1) : i.push(t.substr(n, 2)), n += 1) : i.push(t.charAt(n)) : e > 56319 ? (r = t.charCodeAt(n + 1), FontManager.isZeroWidthJoiner(e, r) ? (s = !0, i[i.length - 1] += t.substr(n, 2), n += 1) : i.push(t.charAt(n))) : FontManager.isZeroWidthJoiner(e) ? (i[i.length - 1] += t.charAt(n), s = !0) : i.push(t.charAt(n)), n += 1;
                    return i
                }, TextProperty.prototype.completeTextData = function(t) {
                    t.__complete = !0;
                    var e, r, i, n, a, s, o, l = this.elem.globalData.fontManager,
                        h = this.data,
                        p = [],
                        c = 0,
                        u = h.m.g,
                        f = 0,
                        d = 0,
                        m = 0,
                        y = [],
                        g = 0,
                        v = 0,
                        _ = l.getFontByName(t.f),
                        b = 0,
                        x = getFontProperties(_);
                    t.fWeight = x.weight, t.fStyle = x.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), r = t.finalText.length, t.finalLineHeight = t.lh;
                    var P, S = t.tr / 1e3 * t.finalSize;
                    if (t.sz)
                        for (var A, E, w = !0, k = t.sz[0], T = t.sz[1]; w;) {
                            A = 0, g = 0, r = (E = this.buildFinalText(t.t)).length, S = t.tr / 1e3 * t.finalSize;
                            var C = -1;
                            for (e = 0; e < r; e += 1) P = E[e].charCodeAt(0), i = !1, " " === E[e] ? C = e : 13 !== P && 3 !== P || (g = 0, i = !0, A += t.finalLineHeight || 1.2 * t.finalSize), l.chars ? (o = l.getCharData(E[e], _.fStyle, _.fFamily), b = i ? 0 : o.w * t.finalSize / 100) : b = l.measureText(E[e], t.f, t.finalSize), g + b > k && " " !== E[e] ? (-1 === C ? r += 1 : e = C, A += t.finalLineHeight || 1.2 * t.finalSize, E.splice(e, C === e ? 1 : 0, "\r"), C = -1, g = 0) : (g += b, g += S);
                            A += _.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && T < A ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = E, r = t.finalText.length, w = !1)
                        }
                    g = -S, b = 0;
                    var M, D = 0;
                    for (e = 0; e < r; e += 1)
                        if (i = !1, 13 === (P = (M = t.finalText[e]).charCodeAt(0)) || 3 === P ? (D = 0, y.push(g), v = g > v ? g : v, g = -2 * S, n = "", i = !0, m += 1) : n = M, l.chars ? (o = l.getCharData(M, _.fStyle, l.getFontByName(t.f).fFamily), b = i ? 0 : o.w * t.finalSize / 100) : b = l.measureText(n, t.f, t.finalSize), " " === M ? D += b + S : (g += b + S + D, D = 0), p.push({
                                l: b,
                                an: b,
                                add: f,
                                n: i,
                                anIndexes: [],
                                val: n,
                                line: m,
                                animatorJustifyOffset: 0
                            }), 2 == u) {
                            if (f += b, "" === n || " " === n || e === r - 1) {
                                for ("" !== n && " " !== n || (f -= b); d <= e;) p[d].an = f, p[d].ind = c, p[d].extra = b, d += 1;
                                c += 1, f = 0
                            }
                        } else if (3 == u) {
                        if (f += b, "" === n || e === r - 1) {
                            for ("" === n && (f -= b); d <= e;) p[d].an = f, p[d].ind = c, p[d].extra = b, d += 1;
                            f = 0, c += 1
                        }
                    } else p[c].ind = c, p[c].extra = 0, c += 1;
                    if (t.l = p, v = g > v ? g : v, y.push(g), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
                    else switch (t.boxWidth = v, t.j) {
                        case 1:
                            t.justifyOffset = -t.boxWidth;
                            break;
                        case 2:
                            t.justifyOffset = -t.boxWidth / 2;
                            break;
                        default:
                            t.justifyOffset = 0
                    }
                    t.lineWidths = y;
                    var F, I, V, R, L = h.a;
                    s = L.length;
                    var O = [];
                    for (a = 0; a < s; a += 1) {
                        for ((F = L[a]).a.sc && (t.strokeColorAnim = !0), F.a.sw && (t.strokeWidthAnim = !0), (F.a.fc || F.a.fh || F.a.fs || F.a.fb) && (t.fillColorAnim = !0), R = 0, V = F.s.b, e = 0; e < r; e += 1)(I = p[e]).anIndexes[a] = R, (1 == V && "" !== I.val || 2 == V && "" !== I.val && " " !== I.val || 3 == V && (I.n || " " == I.val || e == r - 1) || 4 == V && (I.n || e == r - 1)) && (1 === F.s.rn && O.push(R), R += 1);
                        h.a[a].s.totalChars = R;
                        var B, j = -1;
                        if (1 === F.s.rn)
                            for (e = 0; e < r; e += 1) j != (I = p[e]).anIndexes[a] && (j = I.anIndexes[a], B = O.splice(Math.floor(Math.random() * O.length), 1)[0]), I.anIndexes[a] = B
                    }
                    t.yOffset = t.finalLineHeight || 1.2 * t.finalSize, t.ls = t.ls || 0, t.ascent = _.ascent * t.finalSize / 100
                }, TextProperty.prototype.updateDocumentData = function(t, e) {
                    e = void 0 === e ? this.keysIndex : e;
                    var r = this.copyData({}, this.data.d.k[e].s);
                    r = this.copyData(r, t), this.data.d.k[e].s = r, this.recalculate(e), this.elem.addDynamicProperty(this)
                }, TextProperty.prototype.recalculate = function(t) {
                    var e = this.data.d.k[t].s;
                    e.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e)
                }, TextProperty.prototype.canResizeFont = function(t) {
                    this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
                }, TextProperty.prototype.setMinimumFontSize = function(t) {
                    this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
                };
                var TextSelectorProp = function() {
                        var t = Math.max,
                            e = Math.min,
                            r = Math.floor;

                        function i(t, e) {
                            this._currentTextLength = -1, this.k = !1, this.data = e, this.elem = t, this.comp = t.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(t), this.s = PropertyFactory.getProp(t, e.s || {
                                k: 0
                            }, 0, 0, this), this.e = "e" in e ? PropertyFactory.getProp(t, e.e, 0, 0, this) : {
                                v: 100
                            }, this.o = PropertyFactory.getProp(t, e.o || {
                                k: 0
                            }, 0, 0, this), this.xe = PropertyFactory.getProp(t, e.xe || {
                                k: 0
                            }, 0, 0, this), this.ne = PropertyFactory.getProp(t, e.ne || {
                                k: 0
                            }, 0, 0, this), this.sm = PropertyFactory.getProp(t, e.sm || {
                                k: 100
                            }, 0, 0, this), this.a = PropertyFactory.getProp(t, e.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
                        }
                        return i.prototype = {
                            getMult: function(i) {
                                this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                                var n = 0,
                                    a = 0,
                                    s = 1,
                                    o = 1;
                                this.ne.v > 0 ? n = this.ne.v / 100 : a = -this.ne.v / 100, this.xe.v > 0 ? s = 1 - this.xe.v / 100 : o = 1 + this.xe.v / 100;
                                var l = BezierFactory.getBezierEasing(n, a, s, o).get,
                                    h = 0,
                                    p = this.finalS,
                                    c = this.finalE,
                                    u = this.data.sh;
                                if (2 === u) h = l(h = c === p ? i >= c ? 1 : 0 : t(0, e(.5 / (c - p) + (i - p) / (c - p), 1)));
                                else if (3 === u) h = l(h = c === p ? i >= c ? 0 : 1 : 1 - t(0, e(.5 / (c - p) + (i - p) / (c - p), 1)));
                                else if (4 === u) c === p ? h = 0 : (h = t(0, e(.5 / (c - p) + (i - p) / (c - p), 1))) < .5 ? h *= 2 : h = 1 - 2 * (h - .5), h = l(h);
                                else if (5 === u) {
                                    if (c === p) h = 0;
                                    else {
                                        var f = c - p,
                                            d = -f / 2 + (i = e(t(0, i + .5 - p), c - p)),
                                            m = f / 2;
                                        h = Math.sqrt(1 - d * d / (m * m))
                                    }
                                    h = l(h)
                                } else 6 === u ? (c === p ? h = 0 : (i = e(t(0, i + .5 - p), c - p), h = (1 + Math.cos(Math.PI + 2 * Math.PI * i / (c - p))) / 2), h = l(h)) : (i >= r(p) && (h = t(0, e(i - p < 0 ? e(c, 1) - (p - i) : c - i, 1))), h = l(h));
                                if (100 !== this.sm.v) {
                                    var y = .01 * this.sm.v;
                                    0 === y && (y = 1e-8);
                                    var g = .5 - .5 * y;
                                    h < g ? h = 0 : (h = (h - g) / y) > 1 && (h = 1)
                                }
                                return h * this.a.v
                            },
                            getValue: function(t) {
                                this.iterateDynamicProperties(), this._mdf = t || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, t && 2 === this.data.r && (this.e.v = this._currentTextLength);
                                var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                                    r = this.o.v / e,
                                    i = this.s.v / e + r,
                                    n = this.e.v / e + r;
                                if (i > n) {
                                    var a = i;
                                    i = n, n = a
                                }
                                this.finalS = i, this.finalE = n
                            }
                        }, extendPrototype([DynamicPropertyContainer], i), {
                            getTextSelectorProp: function(t, e, r) {
                                return new i(t, e, r)
                            }
                        }
                    }(),
                    poolFactory = function(t, e, r) {
                        var i = 0,
                            n = t,
                            a = createSizedArray(n);
                        return {
                            newElement: function() {
                                return i ? a[i -= 1] : e()
                            },
                            release: function(t) {
                                i === n && (a = pooling.double(a), n *= 2), r && r(t), a[i] = t, i += 1
                            }
                        }
                    },
                    pooling = {
                        double: function(t) {
                            return t.concat(createSizedArray(t.length))
                        }
                    },
                    pointPool = poolFactory(8, (function() {
                        return createTypedArray("float32", 2)
                    })),
                    shapePool = function() {
                        var t = poolFactory(4, (function() {
                            return new ShapePath
                        }), (function(t) {
                            var e, r = t._length;
                            for (e = 0; e < r; e += 1) pointPool.release(t.v[e]), pointPool.release(t.i[e]), pointPool.release(t.o[e]), t.v[e] = null, t.i[e] = null, t.o[e] = null;
                            t._length = 0, t.c = !1
                        }));
                        return t.clone = function(e) {
                            var r, i = t.newElement(),
                                n = void 0 === e._length ? e.v.length : e._length;
                            for (i.setLength(n), i.c = e.c, r = 0; r < n; r += 1) i.setTripleAt(e.v[r][0], e.v[r][1], e.o[r][0], e.o[r][1], e.i[r][0], e.i[r][1], r);
                            return i
                        }, t
                    }(),
                    shapeCollectionPool = function() {
                        var t = {
                                newShapeCollection: function() {
                                    return e ? i[e -= 1] : new ShapeCollection
                                },
                                release: function(t) {
                                    var n, a = t._length;
                                    for (n = 0; n < a; n += 1) shapePool.release(t.shapes[n]);
                                    t._length = 0, e === r && (i = pooling.double(i), r *= 2), i[e] = t, e += 1
                                }
                            },
                            e = 0,
                            r = 4,
                            i = createSizedArray(r);
                        return t
                    }(),
                    segmentsLengthPool = poolFactory(8, (function() {
                        return {
                            lengths: [],
                            totalLength: 0
                        }
                    }), (function(t) {
                        var e, r = t.lengths.length;
                        for (e = 0; e < r; e += 1) bezierLengthPool.release(t.lengths[e]);
                        t.lengths.length = 0
                    })),
                    bezierLengthPool = poolFactory(8, (function() {
                        return {
                            addedLength: 0,
                            percents: createTypedArray("float32", defaultCurveSegments),
                            lengths: createTypedArray("float32", defaultCurveSegments)
                        }
                    })),
                    markerParser = function() {
                        function t(t) {
                            for (var e, r = t.split("\r\n"), i = {}, n = 0, a = 0; a < r.length; a += 1) 2 === (e = r[a].split(":")).length && (i[e[0]] = e[1].trim(), n += 1);
                            if (0 === n) throw new Error;
                            return i
                        }
                        return function(e) {
                            for (var r = [], i = 0; i < e.length; i += 1) {
                                var n = e[i],
                                    a = {
                                        time: n.tm,
                                        duration: n.dr
                                    };
                                try {
                                    a.payload = JSON.parse(e[i].cm)
                                } catch (s) {
                                    try {
                                        a.payload = t(e[i].cm)
                                    } catch (o) {
                                        a.payload = {
                                            name: e[i]
                                        }
                                    }
                                }
                                r.push(a)
                            }
                            return r
                        }
                    }();

                function BaseRenderer() {}

                function SVGRenderer(t, e) {
                    this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
                    var r = "";
                    if (e && e.title) {
                        var i = createNS("title"),
                            n = createElementID();
                        i.setAttribute("id", n), i.textContent = e.title, this.svgElement.appendChild(i), r += n
                    }
                    if (e && e.description) {
                        var a = createNS("desc"),
                            s = createElementID();
                        a.setAttribute("id", s), a.textContent = e.description, this.svgElement.appendChild(a), r += " " + s
                    }
                    r && this.svgElement.setAttribute("aria-labelledby", r);
                    var o = createNS("defs");
                    this.svgElement.appendChild(o);
                    var l = createNS("g");
                    this.svgElement.appendChild(l), this.layerElement = l, this.renderConfig = {
                        preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                        imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                        contentVisibility: e && e.contentVisibility || "visible",
                        progressiveLoad: e && e.progressiveLoad || !1,
                        hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                        viewBoxOnly: e && e.viewBoxOnly || !1,
                        viewBoxSize: e && e.viewBoxSize || !1,
                        className: e && e.className || "",
                        id: e && e.id || "",
                        focusable: e && e.focusable,
                        filterSize: {
                            width: e && e.filterSize && e.filterSize.width || "100%",
                            height: e && e.filterSize && e.filterSize.height || "100%",
                            x: e && e.filterSize && e.filterSize.x || "0%",
                            y: e && e.filterSize && e.filterSize.y || "0%"
                        }
                    }, this.globalData = {
                        _mdf: !1,
                        frameNum: -1,
                        defs: o,
                        renderConfig: this.renderConfig
                    }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg"
                }

                function CanvasRenderer(t, e) {
                    this.animationItem = t, this.renderConfig = {
                        clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
                        context: e && e.context || null,
                        progressiveLoad: e && e.progressiveLoad || !1,
                        preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                        imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                        contentVisibility: e && e.contentVisibility || "visible",
                        className: e && e.className || "",
                        id: e && e.id || ""
                    }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
                        frameNum: -1,
                        _mdf: !1,
                        renderConfig: this.renderConfig,
                        currentGlobalAlpha: -1
                    }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas"
                }

                function HybridRenderer(t, e) {
                    this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
                        className: e && e.className || "",
                        imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                        hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                        filterSize: {
                            width: e && e.filterSize && e.filterSize.width || "400%",
                            height: e && e.filterSize && e.filterSize.height || "400%",
                            x: e && e.filterSize && e.filterSize.x || "-100%",
                            y: e && e.filterSize && e.filterSize.y || "-100%"
                        }
                    }, this.globalData = {
                        _mdf: !1,
                        frameNum: -1,
                        renderConfig: this.renderConfig
                    }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
                }

                function MaskElement(t, e, r) {
                    this.data = t, this.element = e, this.globalData = r, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
                    var i, n, a = this.globalData.defs,
                        s = this.masksProperties ? this.masksProperties.length : 0;
                    this.viewData = createSizedArray(s), this.solidPath = "";
                    var o, l, h, p, c, u, f = this.masksProperties,
                        d = 0,
                        m = [],
                        y = createElementID(),
                        g = "clipPath",
                        v = "clip-path";
                    for (i = 0; i < s; i += 1)
                        if (("a" !== f[i].mode && "n" !== f[i].mode || f[i].inv || 100 !== f[i].o.k || f[i].o.x) && (g = "mask", v = "mask"), "s" !== f[i].mode && "i" !== f[i].mode || 0 !== d ? h = null : ((h = createNS("rect")).setAttribute("fill", "#ffffff"), h.setAttribute("width", this.element.comp.data.w || 0), h.setAttribute("height", this.element.comp.data.h || 0), m.push(h)), n = createNS("path"), "n" === f[i].mode) this.viewData[i] = {
                            op: PropertyFactory.getProp(this.element, f[i].o, 0, .01, this.element),
                            prop: ShapePropertyFactory.getShapeProp(this.element, f[i], 3),
                            elem: n,
                            lastPath: ""
                        }, a.appendChild(n);
                        else {
                            var _;
                            if (d += 1, n.setAttribute("fill", "s" === f[i].mode ? "#000000" : "#ffffff"), n.setAttribute("clip-rule", "nonzero"), 0 !== f[i].x.k ? (g = "mask", v = "mask", u = PropertyFactory.getProp(this.element, f[i].x, 0, null, this.element), _ = createElementID(), (p = createNS("filter")).setAttribute("id", _), (c = createNS("feMorphology")).setAttribute("operator", "erode"), c.setAttribute("in", "SourceGraphic"), c.setAttribute("radius", "0"), p.appendChild(c), a.appendChild(p), n.setAttribute("stroke", "s" === f[i].mode ? "#000000" : "#ffffff")) : (c = null, u = null), this.storedData[i] = {
                                    elem: n,
                                    x: u,
                                    expan: c,
                                    lastPath: "",
                                    lastOperator: "",
                                    filterId: _,
                                    lastRadius: 0
                                }, "i" === f[i].mode) {
                                l = m.length;
                                var b = createNS("g");
                                for (o = 0; o < l; o += 1) b.appendChild(m[o]);
                                var x = createNS("mask");
                                x.setAttribute("mask-type", "alpha"), x.setAttribute("id", y + "_" + d), x.appendChild(n), a.appendChild(x), b.setAttribute("mask", "url(" + locationHref + "#" + y + "_" + d + ")"), m.length = 0, m.push(b)
                            } else m.push(n);
                            f[i].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[i] = {
                                elem: n,
                                lastPath: "",
                                op: PropertyFactory.getProp(this.element, f[i].o, 0, .01, this.element),
                                prop: ShapePropertyFactory.getShapeProp(this.element, f[i], 3),
                                invRect: h
                            }, this.viewData[i].prop.k || this.drawPath(f[i], this.viewData[i].prop.v, this.viewData[i])
                        }
                    for (this.maskElement = createNS(g), s = m.length, i = 0; i < s; i += 1) this.maskElement.appendChild(m[i]);
                    d > 0 && (this.maskElement.setAttribute("id", y), this.element.maskedElement.setAttribute(v, "url(" + locationHref + "#" + y + ")"), a.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
                }

                function HierarchyElement() {}

                function FrameElement() {}

                function TransformElement() {}

                function RenderableElement() {}

                function RenderableDOMElement() {}

                function ProcessedElement(t, e) {
                    this.elem = t, this.pos = e
                }

                function SVGStyleData(t, e) {
                    this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = !1, this.closed = !0 === t.hd, this.pElem = createNS("path"), this.msElem = null
                }

                function SVGShapeData(t, e, r) {
                    this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = r, this.lvl = e, this._isAnimated = !!r.k;
                    for (var i = 0, n = t.length; i < n;) {
                        if (t[i].mProps.dynamicProperties.length) {
                            this._isAnimated = !0;
                            break
                        }
                        i += 1
                    }
                }

                function SVGTransformData(t, e, r) {
                    this.transform = {
                        mProps: t,
                        op: e,
                        container: r
                    }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
                }

                function SVGStrokeStyleData(t, e, r) {
                    this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = r, this._isAnimated = !!this._isAnimated
                }

                function SVGFillStyleData(t, e, r) {
                    this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = r
                }

                function SVGGradientFillStyleData(t, e, r) {
                    this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, r)
                }

                function SVGGradientStrokeStyleData(t, e, r) {
                    this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.initGradientData(t, e, r), this._isAnimated = !!this._isAnimated
                }

                function ShapeGroupData() {
                    this.it = [], this.prevViewData = [], this.gr = createNS("g")
                }
                BaseRenderer.prototype.checkLayers = function(t) {
                    var e, r, i = this.layers.length;
                    for (this.completeLayers = !0, e = i - 1; e >= 0; e -= 1) this.elements[e] || (r = this.layers[e]).ip - r.st <= t - this.layers[e].st && r.op - r.st > t - this.layers[e].st && this.buildItem(e), this.completeLayers = !!this.elements[e] && this.completeLayers;
                    this.checkPendingElements()
                }, BaseRenderer.prototype.createItem = function(t) {
                    switch (t.ty) {
                        case 2:
                            return this.createImage(t);
                        case 0:
                            return this.createComp(t);
                        case 1:
                            return this.createSolid(t);
                        case 3:
                            return this.createNull(t);
                        case 4:
                            return this.createShape(t);
                        case 5:
                            return this.createText(t);
                        case 6:
                            return this.createAudio(t);
                        case 13:
                            return this.createCamera(t);
                        case 15:
                            return this.createFootage(t);
                        default:
                            return this.createNull(t)
                    }
                }, BaseRenderer.prototype.createCamera = function() {
                    throw new Error("You're using a 3d camera. Try the html renderer.")
                }, BaseRenderer.prototype.createAudio = function(t) {
                    return new AudioElement(t, this.globalData, this)
                }, BaseRenderer.prototype.createFootage = function(t) {
                    return new FootageElement(t, this.globalData, this)
                }, BaseRenderer.prototype.buildAllItems = function() {
                    var t, e = this.layers.length;
                    for (t = 0; t < e; t += 1) this.buildItem(t);
                    this.checkPendingElements()
                }, BaseRenderer.prototype.includeLayers = function(t) {
                    var e;
                    this.completeLayers = !1;
                    var r, i = t.length,
                        n = this.layers.length;
                    for (e = 0; e < i; e += 1)
                        for (r = 0; r < n;) {
                            if (this.layers[r].id === t[e].id) {
                                this.layers[r] = t[e];
                                break
                            }
                            r += 1
                        }
                }, BaseRenderer.prototype.setProjectInterface = function(t) {
                    this.globalData.projectInterface = t
                }, BaseRenderer.prototype.initItems = function() {
                    this.globalData.progressiveLoad || this.buildAllItems()
                }, BaseRenderer.prototype.buildElementParenting = function(t, e, r) {
                    for (var i = this.elements, n = this.layers, a = 0, s = n.length; a < s;) n[a].ind == e && (i[a] && !0 !== i[a] ? (r.push(i[a]), i[a].setAsParent(), void 0 !== n[a].parent ? this.buildElementParenting(t, n[a].parent, r) : t.setHierarchy(r)) : (this.buildItem(a), this.addPendingElement(t))), a += 1
                }, BaseRenderer.prototype.addPendingElement = function(t) {
                    this.pendingElements.push(t)
                }, BaseRenderer.prototype.searchExtraCompositions = function(t) {
                    var e, r = t.length;
                    for (e = 0; e < r; e += 1)
                        if (t[e].xt) {
                            var i = this.createComp(t[e]);
                            i.initExpressions(), this.globalData.projectInterface.registerComposition(i)
                        }
                }, BaseRenderer.prototype.setupGlobalData = function(t, e) {
                    this.globalData.fontManager = new FontManager, this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = {
                        w: t.w,
                        h: t.h
                    }
                }, extendPrototype([BaseRenderer], SVGRenderer), SVGRenderer.prototype.createNull = function(t) {
                    return new NullElement(t, this.globalData, this)
                }, SVGRenderer.prototype.createShape = function(t) {
                    return new SVGShapeElement(t, this.globalData, this)
                }, SVGRenderer.prototype.createText = function(t) {
                    return new SVGTextLottieElement(t, this.globalData, this)
                }, SVGRenderer.prototype.createImage = function(t) {
                    return new IImageElement(t, this.globalData, this)
                }, SVGRenderer.prototype.createComp = function(t) {
                    return new SVGCompElement(t, this.globalData, this)
                }, SVGRenderer.prototype.createSolid = function(t) {
                    return new ISolidElement(t, this.globalData, this)
                }, SVGRenderer.prototype.configAnimation = function(t) {
                    this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
                    var e = this.globalData.defs;
                    this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
                    var r = createNS("clipPath"),
                        i = createNS("rect");
                    i.setAttribute("width", t.w), i.setAttribute("height", t.h), i.setAttribute("x", 0), i.setAttribute("y", 0);
                    var n = createElementID();
                    r.setAttribute("id", n), r.appendChild(i), this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + n + ")"), e.appendChild(r), this.layers = t.layers, this.elements = createSizedArray(t.layers.length)
                }, SVGRenderer.prototype.destroy = function() {
                    var t;
                    this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
                    var e = this.layers ? this.layers.length : 0;
                    for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy();
                    this.elements.length = 0, this.destroyed = !0, this.animationItem = null
                }, SVGRenderer.prototype.updateContainerSize = function() {}, SVGRenderer.prototype.buildItem = function(t) {
                    var e = this.elements;
                    if (!e[t] && 99 !== this.layers[t].ty) {
                        e[t] = !0;
                        var r = this.createItem(this.layers[t]);
                        e[t] = r, expressionsPlugin && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(r), r.initExpressions()), this.appendElementInPos(r, t), this.layers[t].tt && (this.elements[t - 1] && !0 !== this.elements[t - 1] ? r.setMatte(e[t - 1].layerId) : (this.buildItem(t - 1), this.addPendingElement(r)))
                    }
                }, SVGRenderer.prototype.checkPendingElements = function() {
                    for (; this.pendingElements.length;) {
                        var t = this.pendingElements.pop();
                        if (t.checkParenting(), t.data.tt)
                            for (var e = 0, r = this.elements.length; e < r;) {
                                if (this.elements[e] === t) {
                                    t.setMatte(this.elements[e - 1].layerId);
                                    break
                                }
                                e += 1
                            }
                    }
                }, SVGRenderer.prototype.renderFrame = function(t) {
                    if (this.renderedFrame !== t && !this.destroyed) {
                        var e;
                        null === t ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1;
                        var r = this.layers.length;
                        for (this.completeLayers || this.checkLayers(t), e = r - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
                        if (this.globalData._mdf)
                            for (e = 0; e < r; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
                    }
                }, SVGRenderer.prototype.appendElementInPos = function(t, e) {
                    var r = t.getBaseElement();
                    if (r) {
                        for (var i, n = 0; n < e;) this.elements[n] && !0 !== this.elements[n] && this.elements[n].getBaseElement() && (i = this.elements[n].getBaseElement()), n += 1;
                        i ? this.layerElement.insertBefore(r, i) : this.layerElement.appendChild(r)
                    }
                }, SVGRenderer.prototype.hide = function() {
                    this.layerElement.style.display = "none"
                }, SVGRenderer.prototype.show = function() {
                    this.layerElement.style.display = "block"
                }, extendPrototype([BaseRenderer], CanvasRenderer), CanvasRenderer.prototype.createShape = function(t) {
                    return new CVShapeElement(t, this.globalData, this)
                }, CanvasRenderer.prototype.createText = function(t) {
                    return new CVTextElement(t, this.globalData, this)
                }, CanvasRenderer.prototype.createImage = function(t) {
                    return new CVImageElement(t, this.globalData, this)
                }, CanvasRenderer.prototype.createComp = function(t) {
                    return new CVCompElement(t, this.globalData, this)
                }, CanvasRenderer.prototype.createSolid = function(t) {
                    return new CVSolidElement(t, this.globalData, this)
                }, CanvasRenderer.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRenderer.prototype.ctxTransform = function(t) {
                    if (1 !== t[0] || 0 !== t[1] || 0 !== t[4] || 1 !== t[5] || 0 !== t[12] || 0 !== t[13])
                        if (this.renderConfig.clearCanvas) {
                            this.transformMat.cloneFromProps(t);
                            var e = this.contextData.cTr.props;
                            this.transformMat.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]), this.contextData.cTr.cloneFromProps(this.transformMat.props);
                            var r = this.contextData.cTr.props;
                            this.canvasContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13])
                        } else this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13])
                }, CanvasRenderer.prototype.ctxOpacity = function(t) {
                    if (!this.renderConfig.clearCanvas) return this.canvasContext.globalAlpha *= t < 0 ? 0 : t, void(this.globalData.currentGlobalAlpha = this.contextData.cO);
                    this.contextData.cO *= t < 0 ? 0 : t, this.globalData.currentGlobalAlpha !== this.contextData.cO && (this.canvasContext.globalAlpha = this.contextData.cO, this.globalData.currentGlobalAlpha = this.contextData.cO)
                }, CanvasRenderer.prototype.reset = function() {
                    this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore()
                }, CanvasRenderer.prototype.save = function(t) {
                    if (this.renderConfig.clearCanvas) {
                        t && this.canvasContext.save();
                        var e, r = this.contextData.cTr.props;
                        this.contextData._length <= this.contextData.cArrPos && this.contextData.duplicate();
                        var i = this.contextData.saved[this.contextData.cArrPos];
                        for (e = 0; e < 16; e += 1) i[e] = r[e];
                        this.contextData.savedOp[this.contextData.cArrPos] = this.contextData.cO, this.contextData.cArrPos += 1
                    } else this.canvasContext.save()
                }, CanvasRenderer.prototype.restore = function(t) {
                    if (this.renderConfig.clearCanvas) {
                        t && (this.canvasContext.restore(), this.globalData.blendMode = "source-over"), this.contextData.cArrPos -= 1;
                        var e, r = this.contextData.saved[this.contextData.cArrPos],
                            i = this.contextData.cTr.props;
                        for (e = 0; e < 16; e += 1) i[e] = r[e];
                        this.canvasContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]), r = this.contextData.savedOp[this.contextData.cArrPos], this.contextData.cO = r, this.globalData.currentGlobalAlpha !== r && (this.canvasContext.globalAlpha = r, this.globalData.currentGlobalAlpha = r)
                    } else this.canvasContext.restore()
                }, CanvasRenderer.prototype.configAnimation = function(t) {
                    if (this.animationItem.wrapper) {
                        this.animationItem.container = createTag("canvas");
                        var e = this.animationItem.container.style;
                        e.width = "100%", e.height = "100%";
                        var r = "0px 0px 0px";
                        e.transformOrigin = r, e.mozTransformOrigin = r, e.webkitTransformOrigin = r, e["-webkit-transform"] = r, e.contentVisibility = this.renderConfig.contentVisibility, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id)
                    } else this.canvasContext = this.renderConfig.context;
                    this.data = t, this.layers = t.layers, this.transformCanvas = {
                        w: t.w,
                        h: t.h,
                        sx: 0,
                        sy: 0,
                        tx: 0,
                        ty: 0
                    }, this.setupGlobalData(t, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(t.layers.length), this.updateContainerSize()
                }, CanvasRenderer.prototype.updateContainerSize = function() {
                    var t, e, r, i;
                    if (this.reset(), this.animationItem.wrapper && this.animationItem.container ? (t = this.animationItem.wrapper.offsetWidth, e = this.animationItem.wrapper.offsetHeight, this.animationItem.container.setAttribute("width", t * this.renderConfig.dpr), this.animationItem.container.setAttribute("height", e * this.renderConfig.dpr)) : (t = this.canvasContext.canvas.width * this.renderConfig.dpr, e = this.canvasContext.canvas.height * this.renderConfig.dpr), -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
                        var n = this.renderConfig.preserveAspectRatio.split(" "),
                            a = n[1] || "meet",
                            s = n[0] || "xMidYMid",
                            o = s.substr(0, 4),
                            l = s.substr(4);
                        r = t / e, (i = this.transformCanvas.w / this.transformCanvas.h) > r && "meet" === a || i < r && "slice" === a ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = t / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = e / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = "xMid" === o && (i < r && "meet" === a || i > r && "slice" === a) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === o && (i < r && "meet" === a || i > r && "slice" === a) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = "YMid" === l && (i > r && "meet" === a || i < r && "slice" === a) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === l && (i > r && "meet" === a || i < r && "slice" === a) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) * this.renderConfig.dpr : 0
                    } else "none" === this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
                    this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0)
                }, CanvasRenderer.prototype.destroy = function() {
                    var t;
                    for (this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), t = (this.layers ? this.layers.length : 0) - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy();
                    this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
                }, CanvasRenderer.prototype.renderFrame = function(t, e) {
                    if ((this.renderedFrame !== t || !0 !== this.renderConfig.clearCanvas || e) && !this.destroyed && -1 !== t) {
                        var r;
                        this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || e, this.globalData.projectInterface.currentFrame = t;
                        var i = this.layers.length;
                        for (this.completeLayers || this.checkLayers(t), r = 0; r < i; r += 1)(this.completeLayers || this.elements[r]) && this.elements[r].prepareFrame(t - this.layers[r].st);
                        if (this.globalData._mdf) {
                            for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), r = i - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && this.elements[r].renderFrame();
                            !0 !== this.renderConfig.clearCanvas && this.restore()
                        }
                    }
                }, CanvasRenderer.prototype.buildItem = function(t) {
                    var e = this.elements;
                    if (!e[t] && 99 !== this.layers[t].ty) {
                        var r = this.createItem(this.layers[t], this, this.globalData);
                        e[t] = r, r.initExpressions()
                    }
                }, CanvasRenderer.prototype.checkPendingElements = function() {
                    for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
                }, CanvasRenderer.prototype.hide = function() {
                    this.animationItem.container.style.display = "none"
                }, CanvasRenderer.prototype.show = function() {
                    this.animationItem.container.style.display = "block"
                }, extendPrototype([BaseRenderer], HybridRenderer), HybridRenderer.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRenderer.prototype.checkPendingElements = function() {
                    for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
                }, HybridRenderer.prototype.appendElementInPos = function(t, e) {
                    var r = t.getBaseElement();
                    if (r) {
                        var i = this.layers[e];
                        if (i.ddd && this.supports3d) this.addTo3dContainer(r, e);
                        else if (this.threeDElements) this.addTo3dContainer(r, e);
                        else {
                            for (var n, a, s = 0; s < e;) this.elements[s] && !0 !== this.elements[s] && this.elements[s].getBaseElement && (a = this.elements[s], n = (this.layers[s].ddd ? this.getThreeDContainerByPos(s) : a.getBaseElement()) || n), s += 1;
                            n ? i.ddd && this.supports3d || this.layerElement.insertBefore(r, n) : i.ddd && this.supports3d || this.layerElement.appendChild(r)
                        }
                    }
                }, HybridRenderer.prototype.createShape = function(t) {
                    return this.supports3d ? new HShapeElement(t, this.globalData, this) : new SVGShapeElement(t, this.globalData, this)
                }, HybridRenderer.prototype.createText = function(t) {
                    return this.supports3d ? new HTextElement(t, this.globalData, this) : new SVGTextLottieElement(t, this.globalData, this)
                }, HybridRenderer.prototype.createCamera = function(t) {
                    return this.camera = new HCameraElement(t, this.globalData, this), this.camera
                }, HybridRenderer.prototype.createImage = function(t) {
                    return this.supports3d ? new HImageElement(t, this.globalData, this) : new IImageElement(t, this.globalData, this)
                }, HybridRenderer.prototype.createComp = function(t) {
                    return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this)
                }, HybridRenderer.prototype.createSolid = function(t) {
                    return this.supports3d ? new HSolidElement(t, this.globalData, this) : new ISolidElement(t, this.globalData, this)
                }, HybridRenderer.prototype.createNull = SVGRenderer.prototype.createNull, HybridRenderer.prototype.getThreeDContainerByPos = function(t) {
                    for (var e = 0, r = this.threeDElements.length; e < r;) {
                        if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t) return this.threeDElements[e].perspectiveElem;
                        e += 1
                    }
                    return null
                }, HybridRenderer.prototype.createThreeDContainer = function(t, e) {
                    var r, i, n = createTag("div");
                    styleDiv(n);
                    var a = createTag("div");
                    if (styleDiv(a), "3d" === e) {
                        (r = n.style).width = this.globalData.compSize.w + "px", r.height = this.globalData.compSize.h + "px";
                        var s = "50% 50%";
                        r.webkitTransformOrigin = s, r.mozTransformOrigin = s, r.transformOrigin = s;
                        var o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                        (i = a.style).transform = o, i.webkitTransform = o
                    }
                    n.appendChild(a);
                    var l = {
                        container: a,
                        perspectiveElem: n,
                        startPos: t,
                        endPos: t,
                        type: e
                    };
                    return this.threeDElements.push(l), l
                }, HybridRenderer.prototype.build3dContainers = function() {
                    var t, e, r = this.layers.length,
                        i = "";
                    for (t = 0; t < r; t += 1) this.layers[t].ddd && 3 !== this.layers[t].ty ? ("3d" !== i && (i = "3d", e = this.createThreeDContainer(t, "3d")), e.endPos = Math.max(e.endPos, t)) : ("2d" !== i && (i = "2d", e = this.createThreeDContainer(t, "2d")), e.endPos = Math.max(e.endPos, t));
                    for (t = (r = this.threeDElements.length) - 1; t >= 0; t -= 1) this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem)
                }, HybridRenderer.prototype.addTo3dContainer = function(t, e) {
                    for (var r = 0, i = this.threeDElements.length; r < i;) {
                        if (e <= this.threeDElements[r].endPos) {
                            for (var n, a = this.threeDElements[r].startPos; a < e;) this.elements[a] && this.elements[a].getBaseElement && (n = this.elements[a].getBaseElement()), a += 1;
                            n ? this.threeDElements[r].container.insertBefore(t, n) : this.threeDElements[r].container.appendChild(t);
                            break
                        }
                        r += 1
                    }
                }, HybridRenderer.prototype.configAnimation = function(t) {
                    var e = createTag("div"),
                        r = this.animationItem.wrapper,
                        i = e.style;
                    i.width = t.w + "px", i.height = t.h + "px", this.resizerElem = e, styleDiv(e), i.transformStyle = "flat", i.mozTransformStyle = "flat", i.webkitTransformStyle = "flat", this.renderConfig.className && e.setAttribute("class", this.renderConfig.className), r.appendChild(e), i.overflow = "hidden";
                    var n = createNS("svg");
                    n.setAttribute("width", "1"), n.setAttribute("height", "1"), styleDiv(n), this.resizerElem.appendChild(n);
                    var a = createNS("defs");
                    n.appendChild(a), this.data = t, this.setupGlobalData(t, n), this.globalData.defs = a, this.layers = t.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize()
                }, HybridRenderer.prototype.destroy = function() {
                    var t;
                    this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
                    var e = this.layers ? this.layers.length : 0;
                    for (t = 0; t < e; t += 1) this.elements[t].destroy();
                    this.elements.length = 0, this.destroyed = !0, this.animationItem = null
                }, HybridRenderer.prototype.updateContainerSize = function() {
                    var t, e, r, i, n = this.animationItem.wrapper.offsetWidth,
                        a = this.animationItem.wrapper.offsetHeight,
                        s = n / a;
                    this.globalData.compSize.w / this.globalData.compSize.h > s ? (t = n / this.globalData.compSize.w, e = n / this.globalData.compSize.w, r = 0, i = (a - this.globalData.compSize.h * (n / this.globalData.compSize.w)) / 2) : (t = a / this.globalData.compSize.h, e = a / this.globalData.compSize.h, r = (n - this.globalData.compSize.w * (a / this.globalData.compSize.h)) / 2, i = 0);
                    var o = this.resizerElem.style;
                    o.webkitTransform = "matrix3d(" + t + ",0,0,0,0," + e + ",0,0,0,0,1,0," + r + "," + i + ",0,1)", o.transform = o.webkitTransform
                }, HybridRenderer.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRenderer.prototype.hide = function() {
                    this.resizerElem.style.display = "none"
                }, HybridRenderer.prototype.show = function() {
                    this.resizerElem.style.display = "block"
                }, HybridRenderer.prototype.initItems = function() {
                    if (this.buildAllItems(), this.camera) this.camera.setup();
                    else {
                        var t, e = this.globalData.compSize.w,
                            r = this.globalData.compSize.h,
                            i = this.threeDElements.length;
                        for (t = 0; t < i; t += 1) {
                            var n = this.threeDElements[t].perspectiveElem.style;
                            n.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(r, 2)) + "px", n.perspective = n.webkitPerspective
                        }
                    }
                }, HybridRenderer.prototype.searchExtraCompositions = function(t) {
                    var e, r = t.length,
                        i = createTag("div");
                    for (e = 0; e < r; e += 1)
                        if (t[e].xt) {
                            var n = this.createComp(t[e], i, this.globalData.comp, null);
                            n.initExpressions(), this.globalData.projectInterface.registerComposition(n)
                        }
                }, MaskElement.prototype.getMaskProperty = function(t) {
                    return this.viewData[t].prop
                }, MaskElement.prototype.renderFrame = function(t) {
                    var e, r = this.element.finalTransform.mat,
                        i = this.masksProperties.length;
                    for (e = 0; e < i; e += 1)
                        if ((this.viewData[e].prop._mdf || t) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]), (this.viewData[e].op._mdf || t) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v), "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[e].invRect.setAttribute("transform", r.getInverseMatrix().to2dCSS()), this.storedData[e].x && (this.storedData[e].x._mdf || t))) {
                            var n = this.storedData[e].expan;
                            this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode", this.storedData[e].elem.setAttribute("filter", "url(" + locationHref + "#" + this.storedData[e].filterId + ")")), n.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate", this.storedData[e].elem.setAttribute("filter", null)), this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v))
                        }
                }, MaskElement.prototype.getMaskelement = function() {
                    return this.maskElement
                }, MaskElement.prototype.createLayerSolidPath = function() {
                    var t = "M0,0 ";
                    return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, t += " h-" + this.globalData.compSize.w, t += " v-" + this.globalData.compSize.h + " "
                }, MaskElement.prototype.drawPath = function(t, e, r) {
                    var i, n, a = " M" + e.v[0][0] + "," + e.v[0][1];
                    for (n = e._length, i = 1; i < n; i += 1) a += " C" + e.o[i - 1][0] + "," + e.o[i - 1][1] + " " + e.i[i][0] + "," + e.i[i][1] + " " + e.v[i][0] + "," + e.v[i][1];
                    if (e.c && n > 1 && (a += " C" + e.o[i - 1][0] + "," + e.o[i - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), r.lastPath !== a) {
                        var s = "";
                        r.elem && (e.c && (s = t.inv ? this.solidPath + a : a), r.elem.setAttribute("d", s)), r.lastPath = a
                    }
                }, MaskElement.prototype.destroy = function() {
                    this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
                }, HierarchyElement.prototype = {
                    initHierarchy: function() {
                        this.hierarchy = [], this._isParent = !1, this.checkParenting()
                    },
                    setHierarchy: function(t) {
                        this.hierarchy = t
                    },
                    setAsParent: function() {
                        this._isParent = !0
                    },
                    checkParenting: function() {
                        void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, [])
                    }
                }, FrameElement.prototype = {
                    initFrame: function() {
                        this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
                    },
                    prepareProperties: function(t, e) {
                        var r, i = this.dynamicProperties.length;
                        for (r = 0; r < i; r += 1)(e || this._isParent && "transform" === this.dynamicProperties[r].propType) && (this.dynamicProperties[r].getValue(), this.dynamicProperties[r]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
                    },
                    addDynamicProperty: function(t) {
                        -1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t)
                    }
                }, TransformElement.prototype = {
                    initTransform: function() {
                        this.finalTransform = {
                            mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
                                o: 0
                            },
                            _matMdf: !1,
                            _opMdf: !1,
                            mat: new Matrix
                        }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty
                    },
                    renderTransform: function() {
                        if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
                            var t, e = this.finalTransform.mat,
                                r = 0,
                                i = this.hierarchy.length;
                            if (!this.finalTransform._matMdf)
                                for (; r < i;) {
                                    if (this.hierarchy[r].finalTransform.mProp._mdf) {
                                        this.finalTransform._matMdf = !0;
                                        break
                                    }
                                    r += 1
                                }
                            if (this.finalTransform._matMdf)
                                for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), r = 0; r < i; r += 1) t = this.hierarchy[r].finalTransform.mProp.v.props, e.transform(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15])
                        }
                    },
                    globalToLocal: function(t) {
                        var e = [];
                        e.push(this.finalTransform);
                        for (var r, i = !0, n = this.comp; i;) n.finalTransform ? (n.data.hasMask && e.splice(0, 0, n.finalTransform), n = n.comp) : i = !1;
                        var a, s = e.length;
                        for (r = 0; r < s; r += 1) a = e[r].mat.applyToPointArray(0, 0, 0), t = [t[0] - a[0], t[1] - a[1], 0];
                        return t
                    },
                    mHelper: new Matrix
                }, RenderableElement.prototype = {
                    initRenderable: function() {
                        this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
                    },
                    addRenderableComponent: function(t) {
                        -1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t)
                    },
                    removeRenderableComponent: function(t) {
                        -1 !== this.renderableComponents.indexOf(t) && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1)
                    },
                    prepareRenderableFrame: function(t) {
                        this.checkLayerLimits(t)
                    },
                    checkTransparency: function() {
                        this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
                    },
                    checkLayerLimits: function(t) {
                        this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
                    },
                    renderRenderable: function() {
                        var t, e = this.renderableComponents.length;
                        for (t = 0; t < e; t += 1) this.renderableComponents[t].renderFrame(this._isFirstFrame)
                    },
                    sourceRectAtTime: function() {
                        return {
                            top: 0,
                            left: 0,
                            width: 100,
                            height: 100
                        }
                    },
                    getLayerSize: function() {
                        return 5 === this.data.ty ? {
                            w: this.data.textData.width,
                            h: this.data.textData.height
                        } : {
                            w: this.data.width,
                            h: this.data.height
                        }
                    }
                }, extendPrototype([RenderableElement, createProxyFunction({
                    initElement: function(t, e, r) {
                        this.initFrame(), this.initBaseData(t, e, r), this.initTransform(t, e, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
                    },
                    hide: function() {
                        this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0)
                    },
                    show: function() {
                        this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0)
                    },
                    renderFrame: function() {
                        this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
                    },
                    renderInnerContent: function() {},
                    prepareFrame: function(t) {
                        this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.checkTransparency()
                    },
                    destroy: function() {
                        this.innerElem = null, this.destroyBaseElement()
                    }
                })], RenderableDOMElement), SVGStyleData.prototype.reset = function() {
                    this.d = "", this._mdf = !1
                }, SVGShapeData.prototype.setAsAnimated = function() {
                    this._isAnimated = !0
                }, extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), SVGGradientFillStyleData.prototype.initGradientData = function(t, e, r) {
                    this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.s = PropertyFactory.getProp(t, e.s, 1, null, this), this.e = PropertyFactory.getProp(t, e.e, 1, null, this), this.h = PropertyFactory.getProp(t, e.h || {
                        k: 0
                    }, 0, .01, this), this.a = PropertyFactory.getProp(t, e.a || {
                        k: 0
                    }, 0, degToRads, this), this.g = new GradientProperty(t, e.g, this), this.style = r, this.stops = [], this.setGradientData(r.pElem, e), this.setGradientOpacity(e, r), this._isAnimated = !!this._isAnimated
                }, SVGGradientFillStyleData.prototype.setGradientData = function(t, e) {
                    var r = createElementID(),
                        i = createNS(1 === e.t ? "linearGradient" : "radialGradient");
                    i.setAttribute("id", r), i.setAttribute("spreadMethod", "pad"), i.setAttribute("gradientUnits", "userSpaceOnUse");
                    var n, a, s, o = [];
                    for (s = 4 * e.g.p, a = 0; a < s; a += 4) n = createNS("stop"), i.appendChild(n), o.push(n);
                    t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + locationHref + "#" + r + ")"), this.gf = i, this.cst = o
                }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(t, e) {
                    if (this.g._hasOpacity && !this.g._collapsable) {
                        var r, i, n, a = createNS("mask"),
                            s = createNS("path");
                        a.appendChild(s);
                        var o = createElementID(),
                            l = createElementID();
                        a.setAttribute("id", l);
                        var h = createNS(1 === t.t ? "linearGradient" : "radialGradient");
                        h.setAttribute("id", o), h.setAttribute("spreadMethod", "pad"), h.setAttribute("gradientUnits", "userSpaceOnUse"), n = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
                        var p = this.stops;
                        for (i = 4 * t.g.p; i < n; i += 2)(r = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), h.appendChild(r), p.push(r);
                        s.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + locationHref + "#" + o + ")"), "gs" === t.ty && (s.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), s.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), 1 === t.lj && s.setAttribute("stroke-miterlimit", t.ml)), this.of = h, this.ms = a, this.ost = p, this.maskId = l, e.msElem = s
                    }
                }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
                var SVGElementsRenderer = function() {
                    var t = new Matrix,
                        e = new Matrix;

                    function r(t, e, r) {
                        (r || e.transform.op._mdf) && e.transform.container.setAttribute("opacity", e.transform.op.v), (r || e.transform.mProps._mdf) && e.transform.container.setAttribute("transform", e.transform.mProps.v.to2dCSS())
                    }

                    function i(r, i, n) {
                        var a, s, o, l, h, p, c, u, f, d, m, y = i.styles.length,
                            g = i.lvl;
                        for (p = 0; p < y; p += 1) {
                            if (l = i.sh._mdf || n, i.styles[p].lvl < g) {
                                for (u = e.reset(), d = g - i.styles[p].lvl, m = i.transformers.length - 1; !l && d > 0;) l = i.transformers[m].mProps._mdf || l, d -= 1, m -= 1;
                                if (l)
                                    for (d = g - i.styles[p].lvl, m = i.transformers.length - 1; d > 0;) f = i.transformers[m].mProps.v.props, u.transform(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8], f[9], f[10], f[11], f[12], f[13], f[14], f[15]), d -= 1, m -= 1
                            } else u = t;
                            if (s = (c = i.sh.paths)._length, l) {
                                for (o = "", a = 0; a < s; a += 1)(h = c.shapes[a]) && h._length && (o += buildShapeString(h, h._length, h.c, u));
                                i.caches[p] = o
                            } else o = i.caches[p];
                            i.styles[p].d += !0 === r.hd ? "" : o, i.styles[p]._mdf = l || i.styles[p]._mdf
                        }
                    }

                    function n(t, e, r) {
                        var i = e.style;
                        (e.c._mdf || r) && i.pElem.setAttribute("fill", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r) && i.pElem.setAttribute("fill-opacity", e.o.v)
                    }

                    function a(t, e, r) {
                        s(t, e, r), o(0, e, r)
                    }

                    function s(t, e, r) {
                        var i, n, a, s, o, l = e.gf,
                            h = e.g._hasOpacity,
                            p = e.s.v,
                            c = e.e.v;
                        if (e.o._mdf || r) {
                            var u = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
                            e.style.pElem.setAttribute(u, e.o.v)
                        }
                        if (e.s._mdf || r) {
                            var f = 1 === t.t ? "x1" : "cx",
                                d = "x1" === f ? "y1" : "cy";
                            l.setAttribute(f, p[0]), l.setAttribute(d, p[1]), h && !e.g._collapsable && (e.of.setAttribute(f, p[0]), e.of.setAttribute(d, p[1]))
                        }
                        if (e.g._cmdf || r) {
                            i = e.cst;
                            var m = e.g.c;
                            for (a = i.length, n = 0; n < a; n += 1)(s = i[n]).setAttribute("offset", m[4 * n] + "%"), s.setAttribute("stop-color", "rgb(" + m[4 * n + 1] + "," + m[4 * n + 2] + "," + m[4 * n + 3] + ")")
                        }
                        if (h && (e.g._omdf || r)) {
                            var y = e.g.o;
                            for (a = (i = e.g._collapsable ? e.cst : e.ost).length, n = 0; n < a; n += 1) s = i[n], e.g._collapsable || s.setAttribute("offset", y[2 * n] + "%"), s.setAttribute("stop-opacity", y[2 * n + 1])
                        }
                        if (1 === t.t)(e.e._mdf || r) && (l.setAttribute("x2", c[0]), l.setAttribute("y2", c[1]), h && !e.g._collapsable && (e.of.setAttribute("x2", c[0]), e.of.setAttribute("y2", c[1])));
                        else if ((e.s._mdf || e.e._mdf || r) && (o = Math.sqrt(Math.pow(p[0] - c[0], 2) + Math.pow(p[1] - c[1], 2)), l.setAttribute("r", o), h && !e.g._collapsable && e.of.setAttribute("r", o)), e.e._mdf || e.h._mdf || e.a._mdf || r) {
                            o || (o = Math.sqrt(Math.pow(p[0] - c[0], 2) + Math.pow(p[1] - c[1], 2)));
                            var g = Math.atan2(c[1] - p[1], c[0] - p[0]),
                                v = e.h.v;
                            v >= 1 ? v = .99 : v <= -1 && (v = -.99);
                            var _ = o * v,
                                b = Math.cos(g + e.a.v) * _ + p[0],
                                x = Math.sin(g + e.a.v) * _ + p[1];
                            l.setAttribute("fx", b), l.setAttribute("fy", x), h && !e.g._collapsable && (e.of.setAttribute("fx", b), e.of.setAttribute("fy", x))
                        }
                    }

                    function o(t, e, r) {
                        var i = e.style,
                            n = e.d;
                        n && (n._mdf || r) && n.dashStr && (i.pElem.setAttribute("stroke-dasharray", n.dashStr), i.pElem.setAttribute("stroke-dashoffset", n.dashoffset[0])), e.c && (e.c._mdf || r) && i.pElem.setAttribute("stroke", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r) && i.pElem.setAttribute("stroke-opacity", e.o.v), (e.w._mdf || r) && (i.pElem.setAttribute("stroke-width", e.w.v), i.msElem && i.msElem.setAttribute("stroke-width", e.w.v))
                    }
                    return {
                        createRenderFunction: function(t) {
                            switch (t.ty) {
                                case "fl":
                                    return n;
                                case "gf":
                                    return s;
                                case "gs":
                                    return a;
                                case "st":
                                    return o;
                                case "sh":
                                case "el":
                                case "rc":
                                case "sr":
                                    return i;
                                case "tr":
                                    return r;
                                default:
                                    return null
                            }
                        }
                    }
                }();

                function ShapeTransformManager() {
                    this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0
                }

                function CVShapeData(t, e, r, i) {
                    this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
                    var n, a = 4;
                    "rc" === e.ty ? a = 5 : "el" === e.ty ? a = 6 : "sr" === e.ty && (a = 7), this.sh = ShapePropertyFactory.getShapeProp(t, e, a, t);
                    var s, o = r.length;
                    for (n = 0; n < o; n += 1) r[n].closed || (s = {
                        transforms: i.addTransformSequence(r[n].transforms),
                        trNodes: []
                    }, this.styledShapes.push(s), r[n].elements.push(s))
                }

                function BaseElement() {}

                function NullElement(t, e, r) {
                    this.initFrame(), this.initBaseData(t, e, r), this.initFrame(), this.initTransform(t, e, r), this.initHierarchy()
                }

                function SVGBaseElement() {}

                function IShapeElement() {}

                function ITextElement() {}

                function ICompElement() {}

                function IImageElement(t, e, r) {
                    this.assetData = e.getAssetData(t.refId), this.initElement(t, e, r), this.sourceRect = {
                        top: 0,
                        left: 0,
                        width: this.assetData.w,
                        height: this.assetData.h
                    }
                }

                function ISolidElement(t, e, r) {
                    this.initElement(t, e, r)
                }

                function AudioElement(t, e, r) {
                    this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, r), this._isPlaying = !1, this._canPlay = !1;
                    var i = this.globalData.getAssetsPath(this.assetData);
                    this.audio = this.globalData.audioController.createAudio(i), this._currentTime = 0, this.globalData.audioController.addAudio(this), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                        _placeholder: !0
                    }
                }

                function FootageElement(t, e, r) {
                    this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.footageData = e.imageLoader.getAsset(this.assetData), this.initBaseData(t, e, r)
                }

                function SVGCompElement(t, e, r) {
                    this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                        _placeholder: !0
                    }
                }

                function SVGTextLottieElement(t, e, r) {
                    this.textSpans = [], this.renderType = "svg", this.initElement(t, e, r)
                }

                function SVGShapeElement(t, e, r) {
                    this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, r), this.prevViewData = []
                }

                function SVGTintFilter(t, e) {
                    this.filterManager = e;
                    var r = createNS("feColorMatrix");
                    if (r.setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "linearRGB"), r.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), r.setAttribute("result", "f1"), t.appendChild(r), (r = createNS("feColorMatrix")).setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "sRGB"), r.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), r.setAttribute("result", "f2"), t.appendChild(r), this.matrixFilter = r, 100 !== e.effectElements[2].p.v || e.effectElements[2].p.k) {
                        var i, n = createNS("feMerge");
                        t.appendChild(n), (i = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"), n.appendChild(i), (i = createNS("feMergeNode")).setAttribute("in", "f2"), n.appendChild(i)
                    }
                }

                function SVGFillFilter(t, e) {
                    this.filterManager = e;
                    var r = createNS("feColorMatrix");
                    r.setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "sRGB"), r.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), t.appendChild(r), this.matrixFilter = r
                }

                function SVGGaussianBlurEffect(t, e) {
                    t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "300%"), t.setAttribute("height", "300%"), this.filterManager = e;
                    var r = createNS("feGaussianBlur");
                    t.appendChild(r), this.feGaussianBlur = r
                }

                function SVGStrokeEffect(t, e) {
                    this.initialized = !1, this.filterManager = e, this.elem = t, this.paths = []
                }

                function SVGTritoneFilter(t, e) {
                    this.filterManager = e;
                    var r = createNS("feColorMatrix");
                    r.setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "linearRGB"), r.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), r.setAttribute("result", "f1"), t.appendChild(r);
                    var i = createNS("feComponentTransfer");
                    i.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(i), this.matrixFilter = i;
                    var n = createNS("feFuncR");
                    n.setAttribute("type", "table"), i.appendChild(n), this.feFuncR = n;
                    var a = createNS("feFuncG");
                    a.setAttribute("type", "table"), i.appendChild(a), this.feFuncG = a;
                    var s = createNS("feFuncB");
                    s.setAttribute("type", "table"), i.appendChild(s), this.feFuncB = s
                }

                function SVGProLevelsFilter(t, e) {
                    this.filterManager = e;
                    var r = this.filterManager.effectElements,
                        i = createNS("feComponentTransfer");
                    (r[10].p.k || 0 !== r[10].p.v || r[11].p.k || 1 !== r[11].p.v || r[12].p.k || 1 !== r[12].p.v || r[13].p.k || 0 !== r[13].p.v || r[14].p.k || 1 !== r[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", i)), (r[17].p.k || 0 !== r[17].p.v || r[18].p.k || 1 !== r[18].p.v || r[19].p.k || 1 !== r[19].p.v || r[20].p.k || 0 !== r[20].p.v || r[21].p.k || 1 !== r[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", i)), (r[24].p.k || 0 !== r[24].p.v || r[25].p.k || 1 !== r[25].p.v || r[26].p.k || 1 !== r[26].p.v || r[27].p.k || 0 !== r[27].p.v || r[28].p.k || 1 !== r[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", i)), (r[31].p.k || 0 !== r[31].p.v || r[32].p.k || 1 !== r[32].p.v || r[33].p.k || 1 !== r[33].p.v || r[34].p.k || 0 !== r[34].p.v || r[35].p.k || 1 !== r[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", i)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (i.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(i), i = createNS("feComponentTransfer")), (r[3].p.k || 0 !== r[3].p.v || r[4].p.k || 1 !== r[4].p.v || r[5].p.k || 1 !== r[5].p.v || r[6].p.k || 0 !== r[6].p.v || r[7].p.k || 1 !== r[7].p.v) && (i.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(i), this.feFuncRComposed = this.createFeFunc("feFuncR", i), this.feFuncGComposed = this.createFeFunc("feFuncG", i), this.feFuncBComposed = this.createFeFunc("feFuncB", i))
                }

                function SVGDropShadowEffect(t, e) {
                    var r = e.container.globalData.renderConfig.filterSize;
                    t.setAttribute("x", r.x), t.setAttribute("y", r.y), t.setAttribute("width", r.width), t.setAttribute("height", r.height), this.filterManager = e;
                    var i = createNS("feGaussianBlur");
                    i.setAttribute("in", "SourceAlpha"), i.setAttribute("result", "drop_shadow_1"), i.setAttribute("stdDeviation", "0"), this.feGaussianBlur = i, t.appendChild(i);
                    var n = createNS("feOffset");
                    n.setAttribute("dx", "25"), n.setAttribute("dy", "0"), n.setAttribute("in", "drop_shadow_1"), n.setAttribute("result", "drop_shadow_2"), this.feOffset = n, t.appendChild(n);
                    var a = createNS("feFlood");
                    a.setAttribute("flood-color", "#00ff00"), a.setAttribute("flood-opacity", "1"), a.setAttribute("result", "drop_shadow_3"), this.feFlood = a, t.appendChild(a);
                    var s = createNS("feComposite");
                    s.setAttribute("in", "drop_shadow_3"), s.setAttribute("in2", "drop_shadow_2"), s.setAttribute("operator", "in"), s.setAttribute("result", "drop_shadow_4"), t.appendChild(s);
                    var o, l = createNS("feMerge");
                    t.appendChild(l), o = createNS("feMergeNode"), l.appendChild(o), (o = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"), this.feMergeNode = o, this.feMerge = l, this.originalNodeAdded = !1, l.appendChild(o)
                }
                ShapeTransformManager.prototype = {
                    addTransformSequence: function(t) {
                        var e, r = t.length,
                            i = "_";
                        for (e = 0; e < r; e += 1) i += t[e].transform.key + "_";
                        var n = this.sequences[i];
                        return n || (n = {
                            transforms: [].concat(t),
                            finalTransform: new Matrix,
                            _mdf: !1
                        }, this.sequences[i] = n, this.sequenceList.push(n)), n
                    },
                    processSequence: function(t, e) {
                        for (var r, i = 0, n = t.transforms.length, a = e; i < n && !e;) {
                            if (t.transforms[i].transform.mProps._mdf) {
                                a = !0;
                                break
                            }
                            i += 1
                        }
                        if (a)
                            for (t.finalTransform.reset(), i = n - 1; i >= 0; i -= 1) r = t.transforms[i].transform.mProps.v.props, t.finalTransform.transform(r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7], r[8], r[9], r[10], r[11], r[12], r[13], r[14], r[15]);
                        t._mdf = a
                    },
                    processSequences: function(t) {
                        var e, r = this.sequenceList.length;
                        for (e = 0; e < r; e += 1) this.processSequence(this.sequenceList[e], t)
                    },
                    getNewKey: function() {
                        return this.transform_key_count += 1, "_" + this.transform_key_count
                    }
                }, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, BaseElement.prototype = {
                    checkMasks: function() {
                        if (!this.data.hasMask) return !1;
                        for (var t = 0, e = this.data.masksProperties.length; t < e;) {
                            if ("n" !== this.data.masksProperties[t].mode && !1 !== this.data.masksProperties[t].cl) return !0;
                            t += 1
                        }
                        return !1
                    },
                    initExpressions: function() {
                        this.layerInterface = LayerExpressionInterface(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
                        var t = EffectsExpressionInterface.createEffectsInterface(this, this.layerInterface);
                        this.layerInterface.registerEffectsInterface(t), 0 === this.data.ty || this.data.xt ? this.compInterface = CompExpressionInterface(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = ShapeExpressionInterface(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = TextExpressionInterface(this), this.layerInterface.text = this.layerInterface.textInterface)
                    },
                    setBlendMode: function() {
                        var t = getBlendMode(this.data.bm);
                        (this.baseElement || this.layerElement).style["mix-blend-mode"] = t
                    },
                    initBaseData: function(t, e, r) {
                        this.globalData = e, this.comp = r, this.data = t, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties)
                    },
                    getType: function() {
                        return this.type
                    },
                    sourceRectAtTime: function() {}
                }, NullElement.prototype.prepareFrame = function(t) {
                    this.prepareProperties(t, !0)
                }, NullElement.prototype.renderFrame = function() {}, NullElement.prototype.getBaseElement = function() {
                    return null
                }, NullElement.prototype.destroy = function() {}, NullElement.prototype.sourceRectAtTime = function() {}, NullElement.prototype.hide = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), SVGBaseElement.prototype = {
                    initRendererElement: function() {
                        this.layerElement = createNS("g")
                    },
                    createContainerElements: function() {
                        this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
                        var t, e, r, i = null;
                        if (this.data.td) {
                            if (3 == this.data.td || 1 == this.data.td) {
                                var n = createNS("mask");
                                n.setAttribute("id", this.layerId), n.setAttribute("mask-type", 3 == this.data.td ? "luminance" : "alpha"), n.appendChild(this.layerElement), i = n, this.globalData.defs.appendChild(n), featureSupport.maskType || 1 != this.data.td || (n.setAttribute("mask-type", "luminance"), t = createElementID(), e = filtersFactory.createFilter(t), this.globalData.defs.appendChild(e), e.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (r = createNS("g")).appendChild(this.layerElement), i = r, n.appendChild(r), r.setAttribute("filter", "url(" + locationHref + "#" + t + ")"))
                            } else if (2 == this.data.td) {
                                var a = createNS("mask");
                                a.setAttribute("id", this.layerId), a.setAttribute("mask-type", "alpha");
                                var s = createNS("g");
                                a.appendChild(s), t = createElementID(), e = filtersFactory.createFilter(t);
                                var o = createNS("feComponentTransfer");
                                o.setAttribute("in", "SourceGraphic"), e.appendChild(o);
                                var l = createNS("feFuncA");
                                l.setAttribute("type", "table"), l.setAttribute("tableValues", "1.0 0.0"), o.appendChild(l), this.globalData.defs.appendChild(e);
                                var h = createNS("rect");
                                h.setAttribute("width", this.comp.data.w), h.setAttribute("height", this.comp.data.h), h.setAttribute("x", "0"), h.setAttribute("y", "0"), h.setAttribute("fill", "#ffffff"), h.setAttribute("opacity", "0"), s.setAttribute("filter", "url(" + locationHref + "#" + t + ")"), s.appendChild(h), s.appendChild(this.layerElement), i = s, featureSupport.maskType || (a.setAttribute("mask-type", "luminance"), e.appendChild(filtersFactory.createAlphaToLuminanceFilter()), r = createNS("g"), s.appendChild(h), r.appendChild(this.layerElement), i = r, s.appendChild(r)), this.globalData.defs.appendChild(a)
                            }
                        } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), i = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
                        if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) {
                            var p = createNS("clipPath"),
                                c = createNS("path");
                            c.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                            var u = createElementID();
                            if (p.setAttribute("id", u), p.appendChild(c), this.globalData.defs.appendChild(p), this.checkMasks()) {
                                var f = createNS("g");
                                f.setAttribute("clip-path", "url(" + locationHref + "#" + u + ")"), f.appendChild(this.layerElement), this.transformedElement = f, i ? i.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
                            } else this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + u + ")")
                        }
                        0 !== this.data.bm && this.setBlendMode()
                    },
                    renderElement: function() {
                        this.finalTransform._matMdf && this.transformedElement.setAttribute("transform", this.finalTransform.mat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.mProp.o.v)
                    },
                    destroyBaseElement: function() {
                        this.layerElement = null, this.matteElement = null, this.maskManager.destroy()
                    },
                    getBaseElement: function() {
                        return this.data.hd ? null : this.baseElement
                    },
                    createRenderableComponents: function() {
                        this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this)
                    },
                    setMatte: function(t) {
                        this.matteElement && this.matteElement.setAttribute("mask", "url(" + locationHref + "#" + t + ")")
                    }
                }, IShapeElement.prototype = {
                    addShapeToModifiers: function(t) {
                        var e, r = this.shapeModifiers.length;
                        for (e = 0; e < r; e += 1) this.shapeModifiers[e].addShape(t)
                    },
                    isShapeInAnimatedModifiers: function(t) {
                        for (var e = this.shapeModifiers.length; 0 < e;)
                            if (this.shapeModifiers[0].isAnimatedWithShape(t)) return !0;
                        return !1
                    },
                    renderModifiers: function() {
                        if (this.shapeModifiers.length) {
                            var t, e = this.shapes.length;
                            for (t = 0; t < e; t += 1) this.shapes[t].sh.reset();
                            for (t = (e = this.shapeModifiers.length) - 1; t >= 0 && !this.shapeModifiers[t].processShapes(this._isFirstFrame); t -= 1);
                        }
                    },
                    searchProcessedElement: function(t) {
                        for (var e = this.processedElements, r = 0, i = e.length; r < i;) {
                            if (e[r].elem === t) return e[r].pos;
                            r += 1
                        }
                        return 0
                    },
                    addProcessedElement: function(t, e) {
                        for (var r = this.processedElements, i = r.length; i;)
                            if (r[i -= 1].elem === t) return void(r[i].pos = e);
                        r.push(new ProcessedElement(t, e))
                    },
                    prepareFrame: function(t) {
                        this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange)
                    }
                }, ITextElement.prototype.initElement = function(t, e, r) {
                    this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, r), this.textProperty = new TextProperty(this, t.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this), this.initTransform(t, e, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
                }, ITextElement.prototype.prepareFrame = function(t) {
                    this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
                }, ITextElement.prototype.createPathShape = function(t, e) {
                    var r, i, n = e.length,
                        a = "";
                    for (r = 0; r < n; r += 1) i = e[r].ks.k, a += buildShapeString(i, i.i.length, !0, t);
                    return a
                }, ITextElement.prototype.updateDocumentData = function(t, e) {
                    this.textProperty.updateDocumentData(t, e)
                }, ITextElement.prototype.canResizeFont = function(t) {
                    this.textProperty.canResizeFont(t)
                }, ITextElement.prototype.setMinimumFontSize = function(t) {
                    this.textProperty.setMinimumFontSize(t)
                }, ITextElement.prototype.applyTextPropertiesToMatrix = function(t, e, r, i, n) {
                    switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
                        case 1:
                            e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]), 0, 0);
                            break;
                        case 2:
                            e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]) / 2, 0, 0)
                    }
                    e.translate(i, n, 0)
                }, ITextElement.prototype.buildColor = function(t) {
                    return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")"
                }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function(t, e, r) {
                    this.initFrame(), this.initBaseData(t, e, r), this.initTransform(t, e, r), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && e.progressiveLoad || this.buildAllItems(), this.hide()
                }, ICompElement.prototype.prepareFrame = function(t) {
                    if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.isInRange || this.data.xt) {
                        if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
                        else {
                            var e = this.tm.v;
                            e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e
                        }
                        var r, i = this.elements.length;
                        for (this.completeLayers || this.checkLayers(this.renderedFrame), r = i - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && (this.elements[r].prepareFrame(this.renderedFrame - this.layers[r].st), this.elements[r]._mdf && (this._mdf = !0))
                    }
                }, ICompElement.prototype.renderInnerContent = function() {
                    var t, e = this.layers.length;
                    for (t = 0; t < e; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
                }, ICompElement.prototype.setElements = function(t) {
                    this.elements = t
                }, ICompElement.prototype.getElements = function() {
                    return this.elements
                }, ICompElement.prototype.destroyElements = function() {
                    var t, e = this.layers.length;
                    for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy()
                }, ICompElement.prototype.destroy = function() {
                    this.destroyElements(), this.destroyBaseElement()
                }, extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function() {
                    var t = this.globalData.getAssetsPath(this.assetData);
                    this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem)
                }, IImageElement.prototype.sourceRectAtTime = function() {
                    return this.sourceRect
                }, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() {
                    var t = createNS("rect");
                    t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t)
                }, AudioElement.prototype.prepareFrame = function(t) {
                    if (this.prepareRenderableFrame(t, !0), this.prepareProperties(t, !0), this.tm._placeholder) this._currentTime = t / this.data.sr;
                    else {
                        var e = this.tm.v;
                        this._currentTime = e
                    }
                }, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function() {
                    this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0))
                }, AudioElement.prototype.show = function() {}, AudioElement.prototype.hide = function() {
                    this.audio.pause(), this._isPlaying = !1
                }, AudioElement.prototype.pause = function() {
                    this.audio.pause(), this._isPlaying = !1, this._canPlay = !1
                }, AudioElement.prototype.resume = function() {
                    this._canPlay = !0
                }, AudioElement.prototype.setRate = function(t) {
                    this.audio.rate(t)
                }, AudioElement.prototype.volume = function(t) {
                    this.audio.volume(t)
                }, AudioElement.prototype.getBaseElement = function() {
                    return null
                }, AudioElement.prototype.destroy = function() {}, AudioElement.prototype.sourceRectAtTime = function() {}, AudioElement.prototype.initExpressions = function() {}, FootageElement.prototype.prepareFrame = function() {}, extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement), FootageElement.prototype.getBaseElement = function() {
                    return null
                }, FootageElement.prototype.renderFrame = function() {}, FootageElement.prototype.destroy = function() {}, FootageElement.prototype.initExpressions = function() {
                    this.layerInterface = FootageInterface(this)
                }, FootageElement.prototype.getFootageData = function() {
                    return this.footageData
                }, extendPrototype([SVGRenderer, ICompElement, SVGBaseElement], SVGCompElement), extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function() {
                    this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"))
                }, SVGTextLottieElement.prototype.buildTextContents = function(t) {
                    for (var e = 0, r = t.length, i = [], n = ""; e < r;) t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (i.push(n), n = "") : n += t[e], e += 1;
                    return i.push(n), i
                }, SVGTextLottieElement.prototype.buildNewText = function() {
                    var t, e, r = this.textProperty.currentData;
                    this.renderedLetters = createSizedArray(r ? r.l.length : 0), r.fc ? this.layerElement.setAttribute("fill", this.buildColor(r.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), r.sc && (this.layerElement.setAttribute("stroke", this.buildColor(r.sc)), this.layerElement.setAttribute("stroke-width", r.sw)), this.layerElement.setAttribute("font-size", r.finalSize);
                    var i = this.globalData.fontManager.getFontByName(r.f);
                    if (i.fClass) this.layerElement.setAttribute("class", i.fClass);
                    else {
                        this.layerElement.setAttribute("font-family", i.fFamily);
                        var n = r.fWeight,
                            a = r.fStyle;
                        this.layerElement.setAttribute("font-style", a), this.layerElement.setAttribute("font-weight", n)
                    }
                    this.layerElement.setAttribute("aria-label", r.t);
                    var s, o = r.l || [],
                        l = !!this.globalData.fontManager.chars;
                    e = o.length;
                    var h, p = this.mHelper,
                        c = "",
                        u = this.data.singleShape,
                        f = 0,
                        d = 0,
                        m = !0,
                        y = .001 * r.tr * r.finalSize;
                    if (!u || l || r.sz) {
                        var g, v, _ = this.textSpans.length;
                        for (t = 0; t < e; t += 1) l && u && 0 !== t || (s = _ > t ? this.textSpans[t] : createNS(l ? "path" : "text"), _ <= t && (s.setAttribute("stroke-linecap", "butt"), s.setAttribute("stroke-linejoin", "round"), s.setAttribute("stroke-miterlimit", "4"), this.textSpans[t] = s, this.layerElement.appendChild(s)), s.style.display = "inherit"), p.reset(), p.scale(r.finalSize / 100, r.finalSize / 100), u && (o[t].n && (f = -y, d += r.yOffset, d += m ? 1 : 0, m = !1), this.applyTextPropertiesToMatrix(r, p, o[t].line, f, d), f += o[t].l || 0, f += y), l ? (h = (g = (v = this.globalData.fontManager.getCharData(r.finalText[t], i.fStyle, this.globalData.fontManager.getFontByName(r.f).fFamily)) && v.data || {}).shapes ? g.shapes[0].it : [], u ? c += this.createPathShape(p, h) : s.setAttribute("d", this.createPathShape(p, h))) : (u && s.setAttribute("transform", "translate(" + p.props[12] + "," + p.props[13] + ")"), s.textContent = o[t].val, s.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"));
                        u && s && s.setAttribute("d", c)
                    } else {
                        var b = this.textContainer,
                            x = "start";
                        switch (r.j) {
                            case 1:
                                x = "end";
                                break;
                            case 2:
                                x = "middle";
                                break;
                            default:
                                x = "start"
                        }
                        b.setAttribute("text-anchor", x), b.setAttribute("letter-spacing", y);
                        var P = this.buildTextContents(r.finalText);
                        for (e = P.length, d = r.ps ? r.ps[1] + r.ascent : 0, t = 0; t < e; t += 1)(s = this.textSpans[t] || createNS("tspan")).textContent = P[t], s.setAttribute("x", 0), s.setAttribute("y", d), s.style.display = "inherit", b.appendChild(s), this.textSpans[t] = s, d += r.finalLineHeight;
                        this.layerElement.appendChild(b)
                    }
                    for (; t < this.textSpans.length;) this.textSpans[t].style.display = "none", t += 1;
                    this._sizeChanged = !0
                }, SVGTextLottieElement.prototype.sourceRectAtTime = function() {
                    if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
                        this._sizeChanged = !1;
                        var t = this.layerElement.getBBox();
                        this.bbox = {
                            top: t.y,
                            left: t.x,
                            width: t.width,
                            height: t.height
                        }
                    }
                    return this.bbox
                }, SVGTextLottieElement.prototype.renderInnerContent = function() {
                    if (!this.data.singleShape && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
                        var t, e;
                        this._sizeChanged = !0;
                        var r, i, n = this.textAnimator.renderedLetters,
                            a = this.textProperty.currentData.l;
                        for (e = a.length, t = 0; t < e; t += 1) a[t].n || (r = n[t], i = this.textSpans[t], r._mdf.m && i.setAttribute("transform", r.m), r._mdf.o && i.setAttribute("opacity", r.o), r._mdf.sw && i.setAttribute("stroke-width", r.sw), r._mdf.sc && i.setAttribute("stroke", r.sc), r._mdf.fc && i.setAttribute("fill", r.fc))
                    }
                }, extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {}, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function() {}, SVGShapeElement.prototype.createContent = function() {
                    this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
                }, SVGShapeElement.prototype.filterUniqueShapes = function() {
                    var t, e, r, i, n = this.shapes.length,
                        a = this.stylesList.length,
                        s = [],
                        o = !1;
                    for (r = 0; r < a; r += 1) {
                        for (i = this.stylesList[r], o = !1, s.length = 0, t = 0; t < n; t += 1) - 1 !== (e = this.shapes[t]).styles.indexOf(i) && (s.push(e), o = e._isAnimated || o);
                        s.length > 1 && o && this.setShapesAsAnimated(s)
                    }
                }, SVGShapeElement.prototype.setShapesAsAnimated = function(t) {
                    var e, r = t.length;
                    for (e = 0; e < r; e += 1) t[e].setAsAnimated()
                }, SVGShapeElement.prototype.createStyleElement = function(t, e) {
                    var r, i = new SVGStyleData(t, e),
                        n = i.pElem;
                    return "st" === t.ty ? r = new SVGStrokeStyleData(this, t, i) : "fl" === t.ty ? r = new SVGFillStyleData(this, t, i) : "gf" !== t.ty && "gs" !== t.ty || (r = new("gf" === t.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, t, i), this.globalData.defs.appendChild(r.gf), r.maskId && (this.globalData.defs.appendChild(r.ms), this.globalData.defs.appendChild(r.of), n.setAttribute("mask", "url(" + locationHref + "#" + r.maskId + ")"))), "st" !== t.ty && "gs" !== t.ty || (n.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), n.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), n.setAttribute("fill-opacity", "0"), 1 === t.lj && n.setAttribute("stroke-miterlimit", t.ml)), 2 === t.r && n.setAttribute("fill-rule", "evenodd"), t.ln && n.setAttribute("id", t.ln), t.cl && n.setAttribute("class", t.cl), t.bm && (n.style["mix-blend-mode"] = getBlendMode(t.bm)), this.stylesList.push(i), this.addToAnimatedContents(t, r), r
                }, SVGShapeElement.prototype.createGroupElement = function(t) {
                    var e = new ShapeGroupData;
                    return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)), e
                }, SVGShapeElement.prototype.createTransformElement = function(t, e) {
                    var r = TransformPropertyFactory.getTransformProperty(this, t, this),
                        i = new SVGTransformData(r, r.o, e);
                    return this.addToAnimatedContents(t, i), i
                }, SVGShapeElement.prototype.createShapeElement = function(t, e, r) {
                    var i = 4;
                    "rc" === t.ty ? i = 5 : "el" === t.ty ? i = 6 : "sr" === t.ty && (i = 7);
                    var n = new SVGShapeData(e, r, ShapePropertyFactory.getShapeProp(this, t, i, this));
                    return this.shapes.push(n), this.addShapeToModifiers(n), this.addToAnimatedContents(t, n), n
                }, SVGShapeElement.prototype.addToAnimatedContents = function(t, e) {
                    for (var r = 0, i = this.animatedContents.length; r < i;) {
                        if (this.animatedContents[r].element === e) return;
                        r += 1
                    }
                    this.animatedContents.push({
                        fn: SVGElementsRenderer.createRenderFunction(t),
                        element: e,
                        data: t
                    })
                }, SVGShapeElement.prototype.setElementStyles = function(t) {
                    var e, r = t.styles,
                        i = this.stylesList.length;
                    for (e = 0; e < i; e += 1) this.stylesList[e].closed || r.push(this.stylesList[e])
                }, SVGShapeElement.prototype.reloadShapes = function() {
                    var t;
                    this._isFirstFrame = !0;
                    var e = this.itemsData.length;
                    for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
                    for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
                    this.renderModifiers()
                }, SVGShapeElement.prototype.searchShapes = function(t, e, r, i, n, a, s) {
                    var o, l, h, p, c, u, f = [].concat(a),
                        d = t.length - 1,
                        m = [],
                        y = [];
                    for (o = d; o >= 0; o -= 1) {
                        if ((u = this.searchProcessedElement(t[o])) ? e[o] = r[u - 1] : t[o]._render = s, "fl" === t[o].ty || "st" === t[o].ty || "gf" === t[o].ty || "gs" === t[o].ty) u ? e[o].style.closed = !1 : e[o] = this.createStyleElement(t[o], n), t[o]._render && e[o].style.pElem.parentNode !== i && i.appendChild(e[o].style.pElem), m.push(e[o].style);
                        else if ("gr" === t[o].ty) {
                            if (u)
                                for (h = e[o].it.length, l = 0; l < h; l += 1) e[o].prevViewData[l] = e[o].it[l];
                            else e[o] = this.createGroupElement(t[o]);
                            this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, n + 1, f, s), t[o]._render && e[o].gr.parentNode !== i && i.appendChild(e[o].gr)
                        } else "tr" === t[o].ty ? (u || (e[o] = this.createTransformElement(t[o], i)), p = e[o].transform, f.push(p)) : "sh" === t[o].ty || "rc" === t[o].ty || "el" === t[o].ty || "sr" === t[o].ty ? (u || (e[o] = this.createShapeElement(t[o], f, n)), this.setElementStyles(e[o])) : "tm" === t[o].ty || "rd" === t[o].ty || "ms" === t[o].ty || "pb" === t[o].ty ? (u ? (c = e[o]).closed = !1 : ((c = ShapeModifiers.getModifier(t[o].ty)).init(this, t[o]), e[o] = c, this.shapeModifiers.push(c)), y.push(c)) : "rp" === t[o].ty && (u ? (c = e[o]).closed = !0 : (c = ShapeModifiers.getModifier(t[o].ty), e[o] = c, c.init(this, t, o, e), this.shapeModifiers.push(c), s = !1), y.push(c));
                        this.addProcessedElement(t[o], o + 1)
                    }
                    for (d = m.length, o = 0; o < d; o += 1) m[o].closed = !0;
                    for (d = y.length, o = 0; o < d; o += 1) y[o].closed = !0
                }, SVGShapeElement.prototype.renderInnerContent = function() {
                    var t;
                    this.renderModifiers();
                    var e = this.stylesList.length;
                    for (t = 0; t < e; t += 1) this.stylesList[t].reset();
                    for (this.renderShape(), t = 0; t < e; t += 1)(this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"))
                }, SVGShapeElement.prototype.renderShape = function() {
                    var t, e, r = this.animatedContents.length;
                    for (t = 0; t < r; t += 1) e = this.animatedContents[t], (this._isFirstFrame || e.element._isAnimated) && !0 !== e.data && e.fn(e.data, e.element, this._isFirstFrame)
                }, SVGShapeElement.prototype.destroy = function() {
                    this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
                }, SVGTintFilter.prototype.renderFrame = function(t) {
                    if (t || this.filterManager._mdf) {
                        var e = this.filterManager.effectElements[0].p.v,
                            r = this.filterManager.effectElements[1].p.v,
                            i = this.filterManager.effectElements[2].p.v / 100;
                        this.matrixFilter.setAttribute("values", r[0] - e[0] + " 0 0 0 " + e[0] + " " + (r[1] - e[1]) + " 0 0 0 " + e[1] + " " + (r[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 " + i + " 0")
                    }
                }, SVGFillFilter.prototype.renderFrame = function(t) {
                    if (t || this.filterManager._mdf) {
                        var e = this.filterManager.effectElements[2].p.v,
                            r = this.filterManager.effectElements[6].p.v;
                        this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + r + " 0")
                    }
                }, SVGGaussianBlurEffect.prototype.renderFrame = function(t) {
                    if (t || this.filterManager._mdf) {
                        var e = .3 * this.filterManager.effectElements[0].p.v,
                            r = this.filterManager.effectElements[1].p.v,
                            i = 3 == r ? 0 : e,
                            n = 2 == r ? 0 : e;
                        this.feGaussianBlur.setAttribute("stdDeviation", i + " " + n);
                        var a = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
                        this.feGaussianBlur.setAttribute("edgeMode", a)
                    }
                }, SVGStrokeEffect.prototype.initialize = function() {
                    var t, e, r, i, n = this.elem.layerElement.children || this.elem.layerElement.childNodes;
                    for (1 === this.filterManager.effectElements[1].p.v ? (i = this.elem.maskManager.masksProperties.length, r = 0) : i = 1 + (r = this.filterManager.effectElements[0].p.v - 1), (e = createNS("g")).setAttribute("fill", "none"), e.setAttribute("stroke-linecap", "round"), e.setAttribute("stroke-dashoffset", 1); r < i; r += 1) t = createNS("path"), e.appendChild(t), this.paths.push({
                        p: t,
                        m: r
                    });
                    if (3 === this.filterManager.effectElements[10].p.v) {
                        var a = createNS("mask"),
                            s = createElementID();
                        a.setAttribute("id", s), a.setAttribute("mask-type", "alpha"), a.appendChild(e), this.elem.globalData.defs.appendChild(a);
                        var o = createNS("g");
                        for (o.setAttribute("mask", "url(" + locationHref + "#" + s + ")"); n[0];) o.appendChild(n[0]);
                        this.elem.layerElement.appendChild(o), this.masker = a, e.setAttribute("stroke", "#fff")
                    } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
                        if (2 === this.filterManager.effectElements[10].p.v)
                            for (n = this.elem.layerElement.children || this.elem.layerElement.childNodes; n.length;) this.elem.layerElement.removeChild(n[0]);
                        this.elem.layerElement.appendChild(e), this.elem.layerElement.removeAttribute("mask"), e.setAttribute("stroke", "#fff")
                    }
                    this.initialized = !0, this.pathMasker = e
                }, SVGStrokeEffect.prototype.renderFrame = function(t) {
                    var e;
                    this.initialized || this.initialize();
                    var r, i, n = this.paths.length;
                    for (e = 0; e < n; e += 1)
                        if (-1 !== this.paths[e].m && (r = this.elem.maskManager.viewData[this.paths[e].m], i = this.paths[e].p, (t || this.filterManager._mdf || r.prop._mdf) && i.setAttribute("d", r.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || r.prop._mdf)) {
                            var a;
                            if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
                                var s = .01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                                    o = .01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                                    l = i.getTotalLength();
                                a = "0 0 0 " + l * s + " ";
                                var h, p = l * (o - s),
                                    c = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01,
                                    u = Math.floor(p / c);
                                for (h = 0; h < u; h += 1) a += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01 + " ";
                                a += "0 " + 10 * l + " 0 0"
                            } else a = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01;
                            i.setAttribute("stroke-dasharray", a)
                        }
                    if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (t || this.filterManager.effectElements[3].p._mdf)) {
                        var f = this.filterManager.effectElements[3].p.v;
                        this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(255 * f[0]) + "," + bmFloor(255 * f[1]) + "," + bmFloor(255 * f[2]) + ")")
                    }
                }, SVGTritoneFilter.prototype.renderFrame = function(t) {
                    if (t || this.filterManager._mdf) {
                        var e = this.filterManager.effectElements[0].p.v,
                            r = this.filterManager.effectElements[1].p.v,
                            i = this.filterManager.effectElements[2].p.v,
                            n = i[0] + " " + r[0] + " " + e[0],
                            a = i[1] + " " + r[1] + " " + e[1],
                            s = i[2] + " " + r[2] + " " + e[2];
                        this.feFuncR.setAttribute("tableValues", n), this.feFuncG.setAttribute("tableValues", a), this.feFuncB.setAttribute("tableValues", s)
                    }
                }, SVGProLevelsFilter.prototype.createFeFunc = function(t, e) {
                    var r = createNS(t);
                    return r.setAttribute("type", "table"), e.appendChild(r), r
                }, SVGProLevelsFilter.prototype.getTableValue = function(t, e, r, i, n) {
                    for (var a, s, o = 0, l = Math.min(t, e), h = Math.max(t, e), p = Array.call(null, {
                            length: 256
                        }), c = 0, u = n - i, f = e - t; o <= 256;) s = (a = o / 256) <= l ? f < 0 ? n : i : a >= h ? f < 0 ? i : n : i + u * Math.pow((a - t) / f, 1 / r), p[c] = s, c += 1, o += 256 / 255;
                    return p.join(" ")
                }, SVGProLevelsFilter.prototype.renderFrame = function(t) {
                    if (t || this.filterManager._mdf) {
                        var e, r = this.filterManager.effectElements;
                        this.feFuncRComposed && (t || r[3].p._mdf || r[4].p._mdf || r[5].p._mdf || r[6].p._mdf || r[7].p._mdf) && (e = this.getTableValue(r[3].p.v, r[4].p.v, r[5].p.v, r[6].p.v, r[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || r[10].p._mdf || r[11].p._mdf || r[12].p._mdf || r[13].p._mdf || r[14].p._mdf) && (e = this.getTableValue(r[10].p.v, r[11].p.v, r[12].p.v, r[13].p.v, r[14].p.v), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || r[17].p._mdf || r[18].p._mdf || r[19].p._mdf || r[20].p._mdf || r[21].p._mdf) && (e = this.getTableValue(r[17].p.v, r[18].p.v, r[19].p.v, r[20].p.v, r[21].p.v), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || r[24].p._mdf || r[25].p._mdf || r[26].p._mdf || r[27].p._mdf || r[28].p._mdf) && (e = this.getTableValue(r[24].p.v, r[25].p.v, r[26].p.v, r[27].p.v, r[28].p.v), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || r[31].p._mdf || r[32].p._mdf || r[33].p._mdf || r[34].p._mdf || r[35].p._mdf) && (e = this.getTableValue(r[31].p.v, r[32].p.v, r[33].p.v, r[34].p.v, r[35].p.v), this.feFuncA.setAttribute("tableValues", e))
                    }
                }, SVGDropShadowEffect.prototype.renderFrame = function(t) {
                    if (t || this.filterManager._mdf) {
                        if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), t || this.filterManager.effectElements[0].p._mdf) {
                            var e = this.filterManager.effectElements[0].p.v;
                            this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2])))
                        }
                        if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
                            var r = this.filterManager.effectElements[3].p.v,
                                i = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
                                n = r * Math.cos(i),
                                a = r * Math.sin(i);
                            this.feOffset.setAttribute("dx", n), this.feOffset.setAttribute("dy", a)
                        }
                    }
                };
                var _svgMatteSymbols = [];

                function SVGMatte3Effect(t, e, r) {
                    this.initialized = !1, this.filterManager = e, this.filterElem = t, this.elem = r, r.matteElement = createNS("g"), r.matteElement.appendChild(r.layerElement), r.matteElement.appendChild(r.transformedElement), r.baseElement = r.matteElement
                }

                function SVGEffects(t) {
                    var e, r, i = t.data.ef ? t.data.ef.length : 0,
                        n = createElementID(),
                        a = filtersFactory.createFilter(n, !0),
                        s = 0;
                    for (this.filters = [], e = 0; e < i; e += 1) r = null, 20 === t.data.ef[e].ty ? (s += 1, r = new SVGTintFilter(a, t.effectsManager.effectElements[e])) : 21 === t.data.ef[e].ty ? (s += 1, r = new SVGFillFilter(a, t.effectsManager.effectElements[e])) : 22 === t.data.ef[e].ty ? r = new SVGStrokeEffect(t, t.effectsManager.effectElements[e]) : 23 === t.data.ef[e].ty ? (s += 1, r = new SVGTritoneFilter(a, t.effectsManager.effectElements[e])) : 24 === t.data.ef[e].ty ? (s += 1, r = new SVGProLevelsFilter(a, t.effectsManager.effectElements[e])) : 25 === t.data.ef[e].ty ? (s += 1, r = new SVGDropShadowEffect(a, t.effectsManager.effectElements[e])) : 28 === t.data.ef[e].ty ? r = new SVGMatte3Effect(a, t.effectsManager.effectElements[e], t) : 29 === t.data.ef[e].ty && (s += 1, r = new SVGGaussianBlurEffect(a, t.effectsManager.effectElements[e])), r && this.filters.push(r);
                    s && (t.globalData.defs.appendChild(a), t.layerElement.setAttribute("filter", "url(" + locationHref + "#" + n + ")")), this.filters.length && t.addRenderableComponent(this)
                }

                function CVContextData() {
                    var t;
                    for (this.saved = [], this.cArrPos = 0, this.cTr = new Matrix, this.cO = 1, this.savedOp = createTypedArray("float32", 15), t = 0; t < 15; t += 1) this.saved[t] = createTypedArray("float32", 16);
                    this._length = 15
                }

                function CVBaseElement() {}

                function CVImageElement(t, e, r) {
                    this.assetData = e.getAssetData(t.refId), this.img = e.imageLoader.getAsset(this.assetData), this.initElement(t, e, r)
                }

                function CVCompElement(t, e, r) {
                    this.completeLayers = !1, this.layers = t.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                        _placeholder: !0
                    }
                }

                function CVMaskElement(t, e) {
                    var r;
                    this.data = t, this.element = e, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
                    var i = this.masksProperties.length,
                        n = !1;
                    for (r = 0; r < i; r += 1) "n" !== this.masksProperties[r].mode && (n = !0), this.viewData[r] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[r], 3);
                    this.hasMasks = n, n && this.element.addRenderableComponent(this)
                }

                function CVShapeElement(t, e, r) {
                    this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(t, e, r)
                }

                function CVSolidElement(t, e, r) {
                    this.initElement(t, e, r)
                }

                function CVTextElement(t, e, r) {
                    this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
                        fill: "rgba(0,0,0,0)",
                        stroke: "rgba(0,0,0,0)",
                        sWidth: 0,
                        fValue: ""
                    }, this.initElement(t, e, r)
                }

                function CVEffects() {}

                function HBaseElement() {}

                function HSolidElement(t, e, r) {
                    this.initElement(t, e, r)
                }

                function HCompElement(t, e, r) {
                    this.layers = t.layers, this.supports3d = !t.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                        _placeholder: !0
                    }
                }

                function HShapeElement(t, e, r) {
                    this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(t, e, r), this.prevViewData = [], this.currentBBox = {
                        x: 999999,
                        y: -999999,
                        h: 0,
                        w: 0
                    }
                }

                function HTextElement(t, e, r) {
                    this.textSpans = [], this.textPaths = [], this.currentBBox = {
                        x: 999999,
                        y: -999999,
                        h: 0,
                        w: 0
                    }, this.renderType = "svg", this.isMasked = !1, this.initElement(t, e, r)
                }

                function HImageElement(t, e, r) {
                    this.assetData = e.getAssetData(t.refId), this.initElement(t, e, r)
                }

                function HCameraElement(t, e, r) {
                    this.initFrame(), this.initBaseData(t, e, r), this.initHierarchy();
                    var i = PropertyFactory.getProp;
                    if (this.pe = i(this, t.pe, 0, 0, this), t.ks.p.s ? (this.px = i(this, t.ks.p.x, 1, 0, this), this.py = i(this, t.ks.p.y, 1, 0, this), this.pz = i(this, t.ks.p.z, 1, 0, this)) : this.p = i(this, t.ks.p, 1, 0, this), t.ks.a && (this.a = i(this, t.ks.a, 1, 0, this)), t.ks.or.k.length && t.ks.or.k[0].to) {
                        var n, a = t.ks.or.k.length;
                        for (n = 0; n < a; n += 1) t.ks.or.k[n].to = null, t.ks.or.k[n].ti = null
                    }
                    this.or = i(this, t.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = i(this, t.ks.rx, 0, degToRads, this), this.ry = i(this, t.ks.ry, 0, degToRads, this), this.rz = i(this, t.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0, this.finalTransform = {
                        mProp: this
                    }
                }

                function HEffects() {}
                SVGMatte3Effect.prototype.findSymbol = function(t) {
                    for (var e = 0, r = _svgMatteSymbols.length; e < r;) {
                        if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
                        e += 1
                    }
                    return null
                }, SVGMatte3Effect.prototype.replaceInParent = function(t, e) {
                    var r = t.layerElement.parentNode;
                    if (r) {
                        for (var i, n = r.children, a = 0, s = n.length; a < s && n[a] !== t.layerElement;) a += 1;
                        a <= s - 2 && (i = n[a + 1]);
                        var o = createNS("use");
                        o.setAttribute("href", "#" + e), i ? r.insertBefore(o, i) : r.appendChild(o)
                    }
                }, SVGMatte3Effect.prototype.setElementAsMask = function(t, e) {
                    if (!this.findSymbol(e)) {
                        var r = createElementID(),
                            i = createNS("mask");
                        i.setAttribute("id", e.layerId), i.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(e);
                        var n = t.globalData.defs;
                        n.appendChild(i);
                        var a = createNS("symbol");
                        a.setAttribute("id", r), this.replaceInParent(e, r), a.appendChild(e.layerElement), n.appendChild(a);
                        var s = createNS("use");
                        s.setAttribute("href", "#" + r), i.appendChild(s), e.data.hd = !1, e.show()
                    }
                    t.setMatte(e.layerId)
                }, SVGMatte3Effect.prototype.initialize = function() {
                    for (var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, r = 0, i = e.length; r < i;) e[r] && e[r].data.ind === t && this.setElementAsMask(this.elem, e[r]), r += 1;
                    this.initialized = !0
                }, SVGMatte3Effect.prototype.renderFrame = function() {
                    this.initialized || this.initialize()
                }, SVGEffects.prototype.renderFrame = function(t) {
                    var e, r = this.filters.length;
                    for (e = 0; e < r; e += 1) this.filters[e].renderFrame(t)
                }, CVContextData.prototype.duplicate = function() {
                    var t = 2 * this._length,
                        e = this.savedOp;
                    this.savedOp = createTypedArray("float32", t), this.savedOp.set(e);
                    var r = 0;
                    for (r = this._length; r < t; r += 1) this.saved[r] = createTypedArray("float32", 16);
                    this._length = t
                }, CVContextData.prototype.reset = function() {
                    this.cArrPos = 0, this.cTr.reset(), this.cO = 1
                }, CVBaseElement.prototype = {
                    createElements: function() {},
                    initRendererElement: function() {},
                    createContainerElements: function() {
                        this.canvasContext = this.globalData.canvasContext, this.renderableEffectsManager = new CVEffects(this)
                    },
                    createContent: function() {},
                    setBlendMode: function() {
                        var t = this.globalData;
                        if (t.blendMode !== this.data.bm) {
                            t.blendMode = this.data.bm;
                            var e = getBlendMode(this.data.bm);
                            t.canvasContext.globalCompositeOperation = e
                        }
                    },
                    createRenderableComponents: function() {
                        this.maskManager = new CVMaskElement(this.data, this)
                    },
                    hideElement: function() {
                        this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0)
                    },
                    showElement: function() {
                        this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0)
                    },
                    renderFrame: function() {
                        if (!this.hidden && !this.data.hd) {
                            this.renderTransform(), this.renderRenderable(), this.setBlendMode();
                            var t = 0 === this.data.ty;
                            this.globalData.renderer.save(t), this.globalData.renderer.ctxTransform(this.finalTransform.mat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v), this.renderInnerContent(), this.globalData.renderer.restore(t), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1)
                        }
                    },
                    destroy: function() {
                        this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy()
                    },
                    mHelper: new Matrix
                }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
                    if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
                        var t = createTag("canvas");
                        t.width = this.assetData.w, t.height = this.assetData.h;
                        var e, r, i = t.getContext("2d"),
                            n = this.img.width,
                            a = this.img.height,
                            s = n / a,
                            o = this.assetData.w / this.assetData.h,
                            l = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
                        s > o && "xMidYMid slice" === l || s < o && "xMidYMid slice" !== l ? e = (r = a) * o : r = (e = n) / o, i.drawImage(this.img, (n - e) / 2, (a - r) / 2, e, r, 0, 0, this.assetData.w, this.assetData.h), this.img = t
                    }
                }, CVImageElement.prototype.renderInnerContent = function() {
                    this.canvasContext.drawImage(this.img, 0, 0)
                }, CVImageElement.prototype.destroy = function() {
                    this.img = null
                }, extendPrototype([CanvasRenderer, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function() {
                    var t, e = this.canvasContext;
                    for (e.beginPath(), e.moveTo(0, 0), e.lineTo(this.data.w, 0), e.lineTo(this.data.w, this.data.h), e.lineTo(0, this.data.h), e.lineTo(0, 0), e.clip(), t = this.layers.length - 1; t >= 0; t -= 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
                }, CVCompElement.prototype.destroy = function() {
                    var t;
                    for (t = this.layers.length - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy();
                    this.layers = null, this.elements = null
                }, CVMaskElement.prototype.renderFrame = function() {
                    if (this.hasMasks) {
                        var t, e, r, i, n = this.element.finalTransform.mat,
                            a = this.element.canvasContext,
                            s = this.masksProperties.length;
                        for (a.beginPath(), t = 0; t < s; t += 1)
                            if ("n" !== this.masksProperties[t].mode) {
                                var o;
                                this.masksProperties[t].inv && (a.moveTo(0, 0), a.lineTo(this.element.globalData.compSize.w, 0), a.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), a.lineTo(0, this.element.globalData.compSize.h), a.lineTo(0, 0)), i = this.viewData[t].v, e = n.applyToPointArray(i.v[0][0], i.v[0][1], 0), a.moveTo(e[0], e[1]);
                                var l = i._length;
                                for (o = 1; o < l; o += 1) r = n.applyToTriplePoints(i.o[o - 1], i.i[o], i.v[o]), a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
                                r = n.applyToTriplePoints(i.o[o - 1], i.i[0], i.v[0]), a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5])
                            }
                        this.element.globalData.renderer.save(!0), a.clip()
                    }
                }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() {
                    this.element = null
                }, extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = {
                    opacity: 1,
                    _opMdf: !1
                }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() {
                    this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, [])
                }, CVShapeElement.prototype.createStyleElement = function(t, e) {
                    var r = {
                            data: t,
                            type: t.ty,
                            preTransforms: this.transformsManager.addTransformSequence(e),
                            transforms: [],
                            elements: [],
                            closed: !0 === t.hd
                        },
                        i = {};
                    if ("fl" === t.ty || "st" === t.ty ? (i.c = PropertyFactory.getProp(this, t.c, 1, 255, this), i.c.k || (r.co = "rgb(" + bmFloor(i.c.v[0]) + "," + bmFloor(i.c.v[1]) + "," + bmFloor(i.c.v[2]) + ")")) : "gf" !== t.ty && "gs" !== t.ty || (i.s = PropertyFactory.getProp(this, t.s, 1, null, this), i.e = PropertyFactory.getProp(this, t.e, 1, null, this), i.h = PropertyFactory.getProp(this, t.h || {
                            k: 0
                        }, 0, .01, this), i.a = PropertyFactory.getProp(this, t.a || {
                            k: 0
                        }, 0, degToRads, this), i.g = new GradientProperty(this, t.g, this)), i.o = PropertyFactory.getProp(this, t.o, 0, .01, this), "st" === t.ty || "gs" === t.ty) {
                        if (r.lc = lineCapEnum[t.lc || 2], r.lj = lineJoinEnum[t.lj || 2], 1 == t.lj && (r.ml = t.ml), i.w = PropertyFactory.getProp(this, t.w, 0, null, this), i.w.k || (r.wi = i.w.v), t.d) {
                            var n = new DashProperty(this, t.d, "canvas", this);
                            i.d = n, i.d.k || (r.da = i.d.dashArray, r.do = i.d.dashoffset[0])
                        }
                    } else r.r = 2 === t.r ? "evenodd" : "nonzero";
                    return this.stylesList.push(r), i.style = r, i
                }, CVShapeElement.prototype.createGroupElement = function() {
                    return {
                        it: [],
                        prevViewData: []
                    }
                }, CVShapeElement.prototype.createTransformElement = function(t) {
                    return {
                        transform: {
                            opacity: 1,
                            _opMdf: !1,
                            key: this.transformsManager.getNewKey(),
                            op: PropertyFactory.getProp(this, t.o, 0, .01, this),
                            mProps: TransformPropertyFactory.getTransformProperty(this, t, this)
                        }
                    }
                }, CVShapeElement.prototype.createShapeElement = function(t) {
                    var e = new CVShapeData(this, t, this.stylesList, this.transformsManager);
                    return this.shapes.push(e), this.addShapeToModifiers(e), e
                }, CVShapeElement.prototype.reloadShapes = function() {
                    var t;
                    this._isFirstFrame = !0;
                    var e = this.itemsData.length;
                    for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
                    for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
                    this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame)
                }, CVShapeElement.prototype.addTransformToStyleList = function(t) {
                    var e, r = this.stylesList.length;
                    for (e = 0; e < r; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.push(t)
                }, CVShapeElement.prototype.removeTransformFromStyleList = function() {
                    var t, e = this.stylesList.length;
                    for (t = 0; t < e; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.pop()
                }, CVShapeElement.prototype.closeStyles = function(t) {
                    var e, r = t.length;
                    for (e = 0; e < r; e += 1) t[e].closed = !0
                }, CVShapeElement.prototype.searchShapes = function(t, e, r, i, n) {
                    var a, s, o, l, h, p, c = t.length - 1,
                        u = [],
                        f = [],
                        d = [].concat(n);
                    for (a = c; a >= 0; a -= 1) {
                        if ((l = this.searchProcessedElement(t[a])) ? e[a] = r[l - 1] : t[a]._shouldRender = i, "fl" === t[a].ty || "st" === t[a].ty || "gf" === t[a].ty || "gs" === t[a].ty) l ? e[a].style.closed = !1 : e[a] = this.createStyleElement(t[a], d), u.push(e[a].style);
                        else if ("gr" === t[a].ty) {
                            if (l)
                                for (o = e[a].it.length, s = 0; s < o; s += 1) e[a].prevViewData[s] = e[a].it[s];
                            else e[a] = this.createGroupElement(t[a]);
                            this.searchShapes(t[a].it, e[a].it, e[a].prevViewData, i, d)
                        } else "tr" === t[a].ty ? (l || (p = this.createTransformElement(t[a]), e[a] = p), d.push(e[a]), this.addTransformToStyleList(e[a])) : "sh" === t[a].ty || "rc" === t[a].ty || "el" === t[a].ty || "sr" === t[a].ty ? l || (e[a] = this.createShapeElement(t[a])) : "tm" === t[a].ty || "rd" === t[a].ty || "pb" === t[a].ty ? (l ? (h = e[a]).closed = !1 : ((h = ShapeModifiers.getModifier(t[a].ty)).init(this, t[a]), e[a] = h, this.shapeModifiers.push(h)), f.push(h)) : "rp" === t[a].ty && (l ? (h = e[a]).closed = !0 : (h = ShapeModifiers.getModifier(t[a].ty), e[a] = h, h.init(this, t, a, e), this.shapeModifiers.push(h), i = !1), f.push(h));
                        this.addProcessedElement(t[a], a + 1)
                    }
                    for (this.removeTransformFromStyleList(), this.closeStyles(u), c = f.length, a = 0; a < c; a += 1) f[a].closed = !0
                }, CVShapeElement.prototype.renderInnerContent = function() {
                    this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
                }, CVShapeElement.prototype.renderShapeTransform = function(t, e) {
                    (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = !0)
                }, CVShapeElement.prototype.drawLayer = function() {
                    var t, e, r, i, n, a, s, o, l, h = this.stylesList.length,
                        p = this.globalData.renderer,
                        c = this.globalData.canvasContext;
                    for (t = 0; t < h; t += 1)
                        if (("st" !== (o = (l = this.stylesList[t]).type) && "gs" !== o || 0 !== l.wi) && l.data._shouldRender && 0 !== l.coOp && 0 !== this.globalData.currentGlobalAlpha) {
                            for (p.save(), a = l.elements, "st" === o || "gs" === o ? (c.strokeStyle = "st" === o ? l.co : l.grd, c.lineWidth = l.wi, c.lineCap = l.lc, c.lineJoin = l.lj, c.miterLimit = l.ml || 0) : c.fillStyle = "fl" === o ? l.co : l.grd, p.ctxOpacity(l.coOp), "st" !== o && "gs" !== o && c.beginPath(), p.ctxTransform(l.preTransforms.finalTransform.props), r = a.length, e = 0; e < r; e += 1) {
                                for ("st" !== o && "gs" !== o || (c.beginPath(), l.da && (c.setLineDash(l.da), c.lineDashOffset = l.do)), n = (s = a[e].trNodes).length, i = 0; i < n; i += 1) "m" === s[i].t ? c.moveTo(s[i].p[0], s[i].p[1]) : "c" === s[i].t ? c.bezierCurveTo(s[i].pts[0], s[i].pts[1], s[i].pts[2], s[i].pts[3], s[i].pts[4], s[i].pts[5]) : c.closePath();
                                "st" !== o && "gs" !== o || (c.stroke(), l.da && c.setLineDash(this.dashResetter))
                            }
                            "st" !== o && "gs" !== o && c.fill(l.r), p.restore()
                        }
                }, CVShapeElement.prototype.renderShape = function(t, e, r, i) {
                    var n, a;
                    for (a = t, n = e.length - 1; n >= 0; n -= 1) "tr" === e[n].ty ? (a = r[n].transform, this.renderShapeTransform(t, a)) : "sh" === e[n].ty || "el" === e[n].ty || "rc" === e[n].ty || "sr" === e[n].ty ? this.renderPath(e[n], r[n]) : "fl" === e[n].ty ? this.renderFill(e[n], r[n], a) : "st" === e[n].ty ? this.renderStroke(e[n], r[n], a) : "gf" === e[n].ty || "gs" === e[n].ty ? this.renderGradientFill(e[n], r[n], a) : "gr" === e[n].ty ? this.renderShape(a, e[n].it, r[n].it) : e[n].ty;
                    i && this.drawLayer()
                }, CVShapeElement.prototype.renderStyledShape = function(t, e) {
                    if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
                        var r, i, n, a = t.trNodes,
                            s = e.paths,
                            o = s._length;
                        a.length = 0;
                        var l = t.transforms.finalTransform;
                        for (n = 0; n < o; n += 1) {
                            var h = s.shapes[n];
                            if (h && h.v) {
                                for (i = h._length, r = 1; r < i; r += 1) 1 === r && a.push({
                                    t: "m",
                                    p: l.applyToPointArray(h.v[0][0], h.v[0][1], 0)
                                }), a.push({
                                    t: "c",
                                    pts: l.applyToTriplePoints(h.o[r - 1], h.i[r], h.v[r])
                                });
                                1 === i && a.push({
                                    t: "m",
                                    p: l.applyToPointArray(h.v[0][0], h.v[0][1], 0)
                                }), h.c && i && (a.push({
                                    t: "c",
                                    pts: l.applyToTriplePoints(h.o[r - 1], h.i[0], h.v[0])
                                }), a.push({
                                    t: "z"
                                }))
                            }
                        }
                        t.trNodes = a
                    }
                }, CVShapeElement.prototype.renderPath = function(t, e) {
                    if (!0 !== t.hd && t._shouldRender) {
                        var r, i = e.styledShapes.length;
                        for (r = 0; r < i; r += 1) this.renderStyledShape(e.styledShapes[r], e.sh)
                    }
                }, CVShapeElement.prototype.renderFill = function(t, e, r) {
                    var i = e.style;
                    (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * r.opacity)
                }, CVShapeElement.prototype.renderGradientFill = function(t, e, r) {
                    var i, n = e.style;
                    if (!n.grd || e.g._mdf || e.s._mdf || e.e._mdf || 1 !== t.t && (e.h._mdf || e.a._mdf)) {
                        var a, s = this.globalData.canvasContext,
                            o = e.s.v,
                            l = e.e.v;
                        if (1 === t.t) i = s.createLinearGradient(o[0], o[1], l[0], l[1]);
                        else {
                            var h = Math.sqrt(Math.pow(o[0] - l[0], 2) + Math.pow(o[1] - l[1], 2)),
                                p = Math.atan2(l[1] - o[1], l[0] - o[0]),
                                c = e.h.v;
                            c >= 1 ? c = .99 : c <= -1 && (c = -.99);
                            var u = h * c,
                                f = Math.cos(p + e.a.v) * u + o[0],
                                d = Math.sin(p + e.a.v) * u + o[1];
                            i = s.createRadialGradient(f, d, 0, o[0], o[1], h)
                        }
                        var m = t.g.p,
                            y = e.g.c,
                            g = 1;
                        for (a = 0; a < m; a += 1) e.g._hasOpacity && e.g._collapsable && (g = e.g.o[2 * a + 1]), i.addColorStop(y[4 * a] / 100, "rgba(" + y[4 * a + 1] + "," + y[4 * a + 2] + "," + y[4 * a + 3] + "," + g + ")");
                        n.grd = i
                    }
                    n.coOp = e.o.v * r.opacity
                }, CVShapeElement.prototype.renderStroke = function(t, e, r) {
                    var i = e.style,
                        n = e.d;
                    n && (n._mdf || this._isFirstFrame) && (i.da = n.dashArray, i.do = n.dashoffset[0]), (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * r.opacity), (e.w._mdf || this._isFirstFrame) && (i.wi = e.w.v)
                }, CVShapeElement.prototype.destroy = function() {
                    this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0
                }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
                    var t = this.canvasContext;
                    t.fillStyle = this.data.sc, t.fillRect(0, 0, this.data.sw, this.data.sh)
                }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
                    var t = this.textProperty.currentData;
                    this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
                    var e = !1;
                    t.fc ? (e = !0, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = e;
                    var r = !1;
                    t.sc && (r = !0, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw);
                    var i, n, a, s, o, l, h, p, c, u, f, d, m = this.globalData.fontManager.getFontByName(t.f),
                        y = t.l,
                        g = this.mHelper;
                    this.stroke = r, this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, n = t.finalText.length;
                    var v = this.data.singleShape,
                        _ = .001 * t.tr * t.finalSize,
                        b = 0,
                        x = 0,
                        P = !0,
                        S = 0;
                    for (i = 0; i < n; i += 1) {
                        for (s = (a = this.globalData.fontManager.getCharData(t.finalText[i], m.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) && a.data || {}, g.reset(), v && y[i].n && (b = -_, x += t.yOffset, x += P ? 1 : 0, P = !1), c = (h = s.shapes ? s.shapes[0].it : []).length, g.scale(t.finalSize / 100, t.finalSize / 100), v && this.applyTextPropertiesToMatrix(t, g, y[i].line, b, x), f = createSizedArray(c), p = 0; p < c; p += 1) {
                            for (l = h[p].ks.k.i.length, u = h[p].ks.k, d = [], o = 1; o < l; o += 1) 1 === o && d.push(g.applyToX(u.v[0][0], u.v[0][1], 0), g.applyToY(u.v[0][0], u.v[0][1], 0)), d.push(g.applyToX(u.o[o - 1][0], u.o[o - 1][1], 0), g.applyToY(u.o[o - 1][0], u.o[o - 1][1], 0), g.applyToX(u.i[o][0], u.i[o][1], 0), g.applyToY(u.i[o][0], u.i[o][1], 0), g.applyToX(u.v[o][0], u.v[o][1], 0), g.applyToY(u.v[o][0], u.v[o][1], 0));
                            d.push(g.applyToX(u.o[o - 1][0], u.o[o - 1][1], 0), g.applyToY(u.o[o - 1][0], u.o[o - 1][1], 0), g.applyToX(u.i[0][0], u.i[0][1], 0), g.applyToY(u.i[0][0], u.i[0][1], 0), g.applyToX(u.v[0][0], u.v[0][1], 0), g.applyToY(u.v[0][0], u.v[0][1], 0)), f[p] = d
                        }
                        v && (b += y[i].l, b += _), this.textSpans[S] ? this.textSpans[S].elem = f : this.textSpans[S] = {
                            elem: f
                        }, S += 1
                    }
                }, CVTextElement.prototype.renderInnerContent = function() {
                    var t, e, r, i, n, a, s = this.canvasContext;
                    s.font = this.values.fValue, s.lineCap = "butt", s.lineJoin = "miter", s.miterLimit = 4, this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
                    var o, l = this.textAnimator.renderedLetters,
                        h = this.textProperty.currentData.l;
                    e = h.length;
                    var p, c, u = null,
                        f = null,
                        d = null;
                    for (t = 0; t < e; t += 1)
                        if (!h[t].n) {
                            if ((o = l[t]) && (this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(o.p), this.globalData.renderer.ctxOpacity(o.o)), this.fill) {
                                for (o && o.fc ? u !== o.fc && (u = o.fc, s.fillStyle = o.fc) : u !== this.values.fill && (u = this.values.fill, s.fillStyle = this.values.fill), i = (p = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < i; r += 1)
                                    for (a = (c = p[r]).length, this.globalData.canvasContext.moveTo(c[0], c[1]), n = 2; n < a; n += 6) this.globalData.canvasContext.bezierCurveTo(c[n], c[n + 1], c[n + 2], c[n + 3], c[n + 4], c[n + 5]);
                                this.globalData.canvasContext.closePath(), this.globalData.canvasContext.fill()
                            }
                            if (this.stroke) {
                                for (o && o.sw ? d !== o.sw && (d = o.sw, s.lineWidth = o.sw) : d !== this.values.sWidth && (d = this.values.sWidth, s.lineWidth = this.values.sWidth), o && o.sc ? f !== o.sc && (f = o.sc, s.strokeStyle = o.sc) : f !== this.values.stroke && (f = this.values.stroke, s.strokeStyle = this.values.stroke), i = (p = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < i; r += 1)
                                    for (a = (c = p[r]).length, this.globalData.canvasContext.moveTo(c[0], c[1]), n = 2; n < a; n += 6) this.globalData.canvasContext.bezierCurveTo(c[n], c[n + 1], c[n + 2], c[n + 3], c[n + 4], c[n + 5]);
                                this.globalData.canvasContext.closePath(), this.globalData.canvasContext.stroke()
                            }
                            o && this.globalData.renderer.restore()
                        }
                }, CVEffects.prototype.renderFrame = function() {}, HBaseElement.prototype = {
                    checkBlendMode: function() {},
                    initRendererElement: function() {
                        this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement)
                    },
                    createContainerElements: function() {
                        this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 !== this.data.bm && this.setBlendMode()
                    },
                    renderElement: function() {
                        var t = this.transformedElement ? this.transformedElement.style : {};
                        if (this.finalTransform._matMdf) {
                            var e = this.finalTransform.mat.toCSS();
                            t.transform = e, t.webkitTransform = e
                        }
                        this.finalTransform._opMdf && (t.opacity = this.finalTransform.mProp.o.v)
                    },
                    renderFrame: function() {
                        this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
                    },
                    destroy: function() {
                        this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null)
                    },
                    createRenderableComponents: function() {
                        this.maskManager = new MaskElement(this.data, this, this.globalData)
                    },
                    addEffects: function() {},
                    setMatte: function() {}
                }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = HybridRenderer.prototype.buildElementParenting, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function() {
                    var t;
                    this.data.hasMask ? ((t = createNS("rect")).setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((t = createTag("div")).style.width = this.data.sw + "px", t.style.height = this.data.sh + "px", t.style.backgroundColor = this.data.sc), this.layerElement.appendChild(t)
                }, extendPrototype([HybridRenderer, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() {
                    this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
                }, HCompElement.prototype.addTo3dContainer = function(t, e) {
                    for (var r, i = 0; i < e;) this.elements[i] && this.elements[i].getBaseElement && (r = this.elements[i].getBaseElement()), i += 1;
                    r ? this.layerElement.insertBefore(t, r) : this.layerElement.appendChild(t)
                }, extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() {
                    var t;
                    if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), t = this.svgElement;
                    else {
                        t = createNS("svg");
                        var e = this.comp.data ? this.comp.data : this.globalData.compSize;
                        t.setAttribute("width", e.w), t.setAttribute("height", e.h), t.appendChild(this.shapesContainer), this.layerElement.appendChild(t)
                    }
                    this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = t
                }, HShapeElement.prototype.getTransformedPoint = function(t, e) {
                    var r, i = t.length;
                    for (r = 0; r < i; r += 1) e = t[r].mProps.v.applyToPointArray(e[0], e[1], 0);
                    return e
                }, HShapeElement.prototype.calculateShapeBoundingBox = function(t, e) {
                    var r, i, n, a, s, o = t.sh.v,
                        l = t.transformers,
                        h = o._length;
                    if (!(h <= 1)) {
                        for (r = 0; r < h - 1; r += 1) i = this.getTransformedPoint(l, o.v[r]), n = this.getTransformedPoint(l, o.o[r]), a = this.getTransformedPoint(l, o.i[r + 1]), s = this.getTransformedPoint(l, o.v[r + 1]), this.checkBounds(i, n, a, s, e);
                        o.c && (i = this.getTransformedPoint(l, o.v[r]), n = this.getTransformedPoint(l, o.o[r]), a = this.getTransformedPoint(l, o.i[0]), s = this.getTransformedPoint(l, o.v[0]), this.checkBounds(i, n, a, s, e))
                    }
                }, HShapeElement.prototype.checkBounds = function(t, e, r, i, n) {
                    this.getBoundsOfCurve(t, e, r, i);
                    var a = this.shapeBoundingBox;
                    n.x = bmMin(a.left, n.x), n.xMax = bmMax(a.right, n.xMax), n.y = bmMin(a.top, n.y), n.yMax = bmMax(a.bottom, n.yMax)
                }, HShapeElement.prototype.shapeBoundingBox = {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }, HShapeElement.prototype.tempBoundingBox = {
                    x: 0,
                    xMax: 0,
                    y: 0,
                    yMax: 0,
                    width: 0,
                    height: 0
                }, HShapeElement.prototype.getBoundsOfCurve = function(t, e, r, i) {
                    for (var n, a, s, o, l, h, p, c = [
                            [t[0], i[0]],
                            [t[1], i[1]]
                        ], u = 0; u < 2; ++u) a = 6 * t[u] - 12 * e[u] + 6 * r[u], n = -3 * t[u] + 9 * e[u] - 9 * r[u] + 3 * i[u], s = 3 * e[u] - 3 * t[u], a |= 0, s |= 0, 0 === (n |= 0) && 0 === a || (0 === n ? (o = -s / a) > 0 && o < 1 && c[u].push(this.calculateF(o, t, e, r, i, u)) : (l = a * a - 4 * s * n) >= 0 && ((h = (-a + bmSqrt(l)) / (2 * n)) > 0 && h < 1 && c[u].push(this.calculateF(h, t, e, r, i, u)), (p = (-a - bmSqrt(l)) / (2 * n)) > 0 && p < 1 && c[u].push(this.calculateF(p, t, e, r, i, u))));
                    this.shapeBoundingBox.left = bmMin.apply(null, c[0]), this.shapeBoundingBox.top = bmMin.apply(null, c[1]), this.shapeBoundingBox.right = bmMax.apply(null, c[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, c[1])
                }, HShapeElement.prototype.calculateF = function(t, e, r, i, n, a) {
                    return bmPow(1 - t, 3) * e[a] + 3 * bmPow(1 - t, 2) * t * r[a] + 3 * (1 - t) * bmPow(t, 2) * i[a] + bmPow(t, 3) * n[a]
                }, HShapeElement.prototype.calculateBoundingBox = function(t, e) {
                    var r, i = t.length;
                    for (r = 0; r < i; r += 1) t[r] && t[r].sh ? this.calculateShapeBoundingBox(t[r], e) : t[r] && t[r].it && this.calculateBoundingBox(t[r].it, e)
                }, HShapeElement.prototype.currentBoxContains = function(t) {
                    return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height
                }, HShapeElement.prototype.renderInnerContent = function() {
                    if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
                        var t = this.tempBoundingBox,
                            e = 999999;
                        if (t.x = e, t.xMax = -e, t.y = e, t.yMax = -e, this.calculateBoundingBox(this.itemsData, t), t.width = t.xMax < t.x ? 0 : t.xMax - t.x, t.height = t.yMax < t.y ? 0 : t.yMax - t.y, this.currentBoxContains(t)) return;
                        var r = !1;
                        if (this.currentBBox.w !== t.width && (this.currentBBox.w = t.width, this.shapeCont.setAttribute("width", t.width), r = !0), this.currentBBox.h !== t.height && (this.currentBBox.h = t.height, this.shapeCont.setAttribute("height", t.height), r = !0), r || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) {
                            this.currentBBox.w = t.width, this.currentBBox.h = t.height, this.currentBBox.x = t.x, this.currentBBox.y = t.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
                            var i = this.shapeCont.style,
                                n = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                            i.transform = n, i.webkitTransform = n
                        }
                    }
                }, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function() {
                    if (this.isMasked = this.checkMasks(), this.isMasked) {
                        this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
                        var t = createNS("g");
                        this.maskedElement.appendChild(t), this.innerElem = t
                    } else this.renderType = "html", this.innerElem = this.layerElement;
                    this.checkParenting()
                }, HTextElement.prototype.buildNewText = function() {
                    var t = this.textProperty.currentData;
                    this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
                    var e = this.innerElem.style,
                        r = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)";
                    e.fill = r, e.color = r, t.sc && (e.stroke = this.buildColor(t.sc), e.strokeWidth = t.sw + "px");
                    var i, n, a = this.globalData.fontManager.getFontByName(t.f);
                    if (!this.globalData.fontManager.chars)
                        if (e.fontSize = t.finalSize + "px", e.lineHeight = t.finalSize + "px", a.fClass) this.innerElem.className = a.fClass;
                        else {
                            e.fontFamily = a.fFamily;
                            var s = t.fWeight,
                                o = t.fStyle;
                            e.fontStyle = o, e.fontWeight = s
                        }
                    var l, h, p, c = t.l;
                    n = c.length;
                    var u, f = this.mHelper,
                        d = "",
                        m = 0;
                    for (i = 0; i < n; i += 1) {
                        if (this.globalData.fontManager.chars ? (this.textPaths[m] ? l = this.textPaths[m] : ((l = createNS("path")).setAttribute("stroke-linecap", lineCapEnum[1]), l.setAttribute("stroke-linejoin", lineJoinEnum[2]), l.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[m] ? p = (h = this.textSpans[m]).children[0] : ((h = createTag("div")).style.lineHeight = 0, (p = createNS("svg")).appendChild(l), styleDiv(h)))) : this.isMasked ? l = this.textPaths[m] ? this.textPaths[m] : createNS("text") : this.textSpans[m] ? (h = this.textSpans[m], l = this.textPaths[m]) : (styleDiv(h = createTag("span")), styleDiv(l = createTag("span")), h.appendChild(l)), this.globalData.fontManager.chars) {
                            var y, g = this.globalData.fontManager.getCharData(t.finalText[i], a.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily);
                            if (y = g ? g.data : null, f.reset(), y && y.shapes && (u = y.shapes[0].it, f.scale(t.finalSize / 100, t.finalSize / 100), d = this.createPathShape(f, u), l.setAttribute("d", d)), this.isMasked) this.innerElem.appendChild(l);
                            else {
                                if (this.innerElem.appendChild(h), y && y.shapes) {
                                    document.body.appendChild(p);
                                    var v = p.getBBox();
                                    p.setAttribute("width", v.width + 2), p.setAttribute("height", v.height + 2), p.setAttribute("viewBox", v.x - 1 + " " + (v.y - 1) + " " + (v.width + 2) + " " + (v.height + 2));
                                    var _ = p.style,
                                        b = "translate(" + (v.x - 1) + "px," + (v.y - 1) + "px)";
                                    _.transform = b, _.webkitTransform = b, c[i].yOffset = v.y - 1
                                } else p.setAttribute("width", 1), p.setAttribute("height", 1);
                                h.appendChild(p)
                            }
                        } else if (l.textContent = c[i].val, l.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(l);
                        else {
                            this.innerElem.appendChild(h);
                            var x = l.style,
                                P = "translate3d(0," + -t.finalSize / 1.2 + "px,0)";
                            x.transform = P, x.webkitTransform = P
                        }
                        this.isMasked ? this.textSpans[m] = l : this.textSpans[m] = h, this.textSpans[m].style.display = "block", this.textPaths[m] = l, m += 1
                    }
                    for (; m < this.textSpans.length;) this.textSpans[m].style.display = "none", m += 1
                }, HTextElement.prototype.renderInnerContent = function() {
                    var t;
                    if (this.data.singleShape) {
                        if (!this._isFirstFrame && !this.lettersChangedFlag) return;
                        if (this.isMasked && this.finalTransform._matMdf) {
                            this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), t = this.svgElement.style;
                            var e = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
                            t.transform = e, t.webkitTransform = e
                        }
                    }
                    if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
                        var r, i, n, a, s, o = 0,
                            l = this.textAnimator.renderedLetters,
                            h = this.textProperty.currentData.l;
                        for (i = h.length, r = 0; r < i; r += 1) h[r].n ? o += 1 : (a = this.textSpans[r], s = this.textPaths[r], n = l[o], o += 1, n._mdf.m && (this.isMasked ? a.setAttribute("transform", n.m) : (a.style.webkitTransform = n.m, a.style.transform = n.m)), a.style.opacity = n.o, n.sw && n._mdf.sw && s.setAttribute("stroke-width", n.sw), n.sc && n._mdf.sc && s.setAttribute("stroke", n.sc), n.fc && n._mdf.fc && (s.setAttribute("fill", n.fc), s.style.color = n.fc));
                        if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
                            var p = this.innerElem.getBBox();
                            if (this.currentBBox.w !== p.width && (this.currentBBox.w = p.width, this.svgElement.setAttribute("width", p.width)), this.currentBBox.h !== p.height && (this.currentBBox.h = p.height, this.svgElement.setAttribute("height", p.height)), this.currentBBox.w !== p.width + 2 || this.currentBBox.h !== p.height + 2 || this.currentBBox.x !== p.x - 1 || this.currentBBox.y !== p.y - 1) {
                                this.currentBBox.w = p.width + 2, this.currentBBox.h = p.height + 2, this.currentBBox.x = p.x - 1, this.currentBBox.y = p.y - 1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), t = this.svgElement.style;
                                var c = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                                t.transform = c, t.webkitTransform = c
                            }
                        }
                    }
                }, extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function() {
                    var t = this.globalData.getAssetsPath(this.assetData),
                        e = new Image;
                    this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e), e.crossOrigin = "anonymous", e.src = t, this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
                }, extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function() {
                    var t, e, r, i, n = this.comp.threeDElements.length;
                    for (t = 0; t < n; t += 1)
                        if ("3d" === (e = this.comp.threeDElements[t]).type) {
                            r = e.perspectiveElem.style, i = e.container.style;
                            var a = this.pe.v + "px",
                                s = "0px 0px 0px",
                                o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                            r.perspective = a, r.webkitPerspective = a, i.transformOrigin = s, i.mozTransformOrigin = s, i.webkitTransformOrigin = s, r.transform = o, r.webkitTransform = o
                        }
                }, HCameraElement.prototype.createElements = function() {}, HCameraElement.prototype.hide = function() {}, HCameraElement.prototype.renderFrame = function() {
                    var t, e, r = this._isFirstFrame;
                    if (this.hierarchy)
                        for (e = this.hierarchy.length, t = 0; t < e; t += 1) r = this.hierarchy[t].finalTransform.mProp._mdf || r;
                    if (r || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
                        if (this.mat.reset(), this.hierarchy)
                            for (t = e = this.hierarchy.length - 1; t >= 0; t -= 1) {
                                var i = this.hierarchy[t].finalTransform.mProp;
                                this.mat.translate(-i.p.v[0], -i.p.v[1], i.p.v[2]), this.mat.rotateX(-i.or.v[0]).rotateY(-i.or.v[1]).rotateZ(i.or.v[2]), this.mat.rotateX(-i.rx.v).rotateY(-i.ry.v).rotateZ(i.rz.v), this.mat.scale(1 / i.s.v[0], 1 / i.s.v[1], 1 / i.s.v[2]), this.mat.translate(i.a.v[0], i.a.v[1], i.a.v[2])
                            }
                        if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
                            var n;
                            n = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
                            var a = Math.sqrt(Math.pow(n[0], 2) + Math.pow(n[1], 2) + Math.pow(n[2], 2)),
                                s = [n[0] / a, n[1] / a, n[2] / a],
                                o = Math.sqrt(s[2] * s[2] + s[0] * s[0]),
                                l = Math.atan2(s[1], o),
                                h = Math.atan2(s[0], -s[2]);
                            this.mat.rotateY(h).rotateX(-l)
                        }
                        this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
                        var p = !this._prevMat.equals(this.mat);
                        if ((p || this.pe._mdf) && this.comp.threeDElements) {
                            var c, u, f;
                            for (e = this.comp.threeDElements.length, t = 0; t < e; t += 1)
                                if ("3d" === (c = this.comp.threeDElements[t]).type) {
                                    if (p) {
                                        var d = this.mat.toCSS();
                                        (f = c.container.style).transform = d, f.webkitTransform = d
                                    }
                                    this.pe._mdf && ((u = c.perspectiveElem.style).perspective = this.pe.v + "px", u.webkitPerspective = this.pe.v + "px")
                                }
                            this.mat.clone(this._prevMat)
                        }
                    }
                    this._isFirstFrame = !1
                }, HCameraElement.prototype.prepareFrame = function(t) {
                    this.prepareProperties(t, !0)
                }, HCameraElement.prototype.destroy = function() {}, HCameraElement.prototype.getBaseElement = function() {
                    return null
                }, HEffects.prototype.renderFrame = function() {};
                var animationManager = function() {
                        var t = {},
                            e = [],
                            r = 0,
                            i = 0,
                            n = 0,
                            a = !0,
                            s = !1;

                        function o(t) {
                            for (var r = 0, n = t.target; r < i;) e[r].animation === n && (e.splice(r, 1), r -= 1, i -= 1, n.isPaused || p()), r += 1
                        }

                        function l(t, r) {
                            if (!t) return null;
                            for (var n = 0; n < i;) {
                                if (e[n].elem === t && null !== e[n].elem) return e[n].animation;
                                n += 1
                            }
                            var a = new AnimationItem;
                            return c(a, t), a.setData(t, r), a
                        }

                        function h() {
                            n += 1, d()
                        }

                        function p() {
                            n -= 1
                        }

                        function c(t, r) {
                            t.addEventListener("destroy", o), t.addEventListener("_active", h), t.addEventListener("_idle", p), e.push({
                                elem: r,
                                animation: t
                            }), i += 1
                        }

                        function u(t) {
                            var o, l = t - r;
                            for (o = 0; o < i; o += 1) e[o].animation.advanceTime(l);
                            r = t, n && !s ? window.requestAnimationFrame(u) : a = !0
                        }

                        function f(t) {
                            r = t, window.requestAnimationFrame(u)
                        }

                        function d() {
                            !s && n && a && (window.requestAnimationFrame(f), a = !1)
                        }
                        return t.registerAnimation = l, t.loadAnimation = function(t) {
                            var e = new AnimationItem;
                            return c(e, null), e.setParams(t), e
                        }, t.setSpeed = function(t, r) {
                            var n;
                            for (n = 0; n < i; n += 1) e[n].animation.setSpeed(t, r)
                        }, t.setDirection = function(t, r) {
                            var n;
                            for (n = 0; n < i; n += 1) e[n].animation.setDirection(t, r)
                        }, t.play = function(t) {
                            var r;
                            for (r = 0; r < i; r += 1) e[r].animation.play(t)
                        }, t.pause = function(t) {
                            var r;
                            for (r = 0; r < i; r += 1) e[r].animation.pause(t)
                        }, t.stop = function(t) {
                            var r;
                            for (r = 0; r < i; r += 1) e[r].animation.stop(t)
                        }, t.togglePause = function(t) {
                            var r;
                            for (r = 0; r < i; r += 1) e[r].animation.togglePause(t)
                        }, t.searchAnimations = function(t, e, r) {
                            var i, n = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
                                a = n.length;
                            for (i = 0; i < a; i += 1) r && n[i].setAttribute("data-bm-type", r), l(n[i], t);
                            if (e && 0 === a) {
                                r || (r = "svg");
                                var s = document.getElementsByTagName("body")[0];
                                s.innerText = "";
                                var o = createTag("div");
                                o.style.width = "100%", o.style.height = "100%", o.setAttribute("data-bm-type", r), s.appendChild(o), l(o, t)
                            }
                        }, t.resize = function() {
                            var t;
                            for (t = 0; t < i; t += 1) e[t].animation.resize()
                        }, t.goToAndStop = function(t, r, n) {
                            var a;
                            for (a = 0; a < i; a += 1) e[a].animation.goToAndStop(t, r, n)
                        }, t.destroy = function(t) {
                            var r;
                            for (r = i - 1; r >= 0; r -= 1) e[r].animation.destroy(t)
                        }, t.freeze = function() {
                            s = !0
                        }, t.unfreeze = function() {
                            s = !1, d()
                        }, t.setVolume = function(t, r) {
                            var n;
                            for (n = 0; n < i; n += 1) e[n].animation.setVolume(t, r)
                        }, t.mute = function(t) {
                            var r;
                            for (r = 0; r < i; r += 1) e[r].animation.mute(t)
                        }, t.unmute = function(t) {
                            var r;
                            for (r = 0; r < i; r += 1) e[r].animation.unmute(t)
                        }, t.getRegisteredAnimations = function() {
                            var t, r = e.length,
                                i = [];
                            for (t = 0; t < r; t += 1) i.push(e[t].animation);
                            return i
                        }, t
                    }(),
                    AnimationItem = function() {
                        this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = subframeEnabled, this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader, this.audioController = audioControllerFactory(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this)
                    };
                extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(t) {
                    (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
                    var e = "svg";
                    switch (t.animType ? e = t.animType : t.renderer && (e = t.renderer), e) {
                        case "canvas":
                            this.renderer = new CanvasRenderer(this, t.rendererSettings);
                            break;
                        case "svg":
                            this.renderer = new SVGRenderer(this, t.rendererSettings);
                            break;
                        default:
                            this.renderer = new HybridRenderer(this, t.rendererSettings)
                    }
                    this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, "" === t.loop || null === t.loop || void 0 === t.loop || !0 === t.loop ? this.loop = !0 : !1 === t.loop ? this.loop = !1 : this.loop = parseInt(t.loop, 10), this.autoplay = !("autoplay" in t) || t.autoplay, this.name = t.name ? t.name : "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(t, "autoloadSegments") || t.autoloadSegments, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.setupAnimation(t.animationData) : t.path && (-1 !== t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), dataManager.loadAnimation(t.path, this.configAnimation, this.onSetupError))
                }, AnimationItem.prototype.onSetupError = function() {
                    this.trigger("data_failed")
                }, AnimationItem.prototype.setupAnimation = function(t) {
                    dataManager.completeAnimation(t, this.configAnimation)
                }, AnimationItem.prototype.setData = function(t, e) {
                    e && "object" !== typeof e && (e = JSON.parse(e));
                    var r = {
                            wrapper: t,
                            animationData: e
                        },
                        i = t.attributes;
                    r.path = i.getNamedItem("data-animation-path") ? i.getNamedItem("data-animation-path").value : i.getNamedItem("data-bm-path") ? i.getNamedItem("data-bm-path").value : i.getNamedItem("bm-path") ? i.getNamedItem("bm-path").value : "", r.animType = i.getNamedItem("data-anim-type") ? i.getNamedItem("data-anim-type").value : i.getNamedItem("data-bm-type") ? i.getNamedItem("data-bm-type").value : i.getNamedItem("bm-type") ? i.getNamedItem("bm-type").value : i.getNamedItem("data-bm-renderer") ? i.getNamedItem("data-bm-renderer").value : i.getNamedItem("bm-renderer") ? i.getNamedItem("bm-renderer").value : "canvas";
                    var n = i.getNamedItem("data-anim-loop") ? i.getNamedItem("data-anim-loop").value : i.getNamedItem("data-bm-loop") ? i.getNamedItem("data-bm-loop").value : i.getNamedItem("bm-loop") ? i.getNamedItem("bm-loop").value : "";
                    "false" === n ? r.loop = !1 : "true" === n ? r.loop = !0 : "" !== n && (r.loop = parseInt(n, 10));
                    var a = i.getNamedItem("data-anim-autoplay") ? i.getNamedItem("data-anim-autoplay").value : i.getNamedItem("data-bm-autoplay") ? i.getNamedItem("data-bm-autoplay").value : !i.getNamedItem("bm-autoplay") || i.getNamedItem("bm-autoplay").value;
                    r.autoplay = "false" !== a, r.name = i.getNamedItem("data-name") ? i.getNamedItem("data-name").value : i.getNamedItem("data-bm-name") ? i.getNamedItem("data-bm-name").value : i.getNamedItem("bm-name") ? i.getNamedItem("bm-name").value : "", "false" === (i.getNamedItem("data-anim-prerender") ? i.getNamedItem("data-anim-prerender").value : i.getNamedItem("data-bm-prerender") ? i.getNamedItem("data-bm-prerender").value : i.getNamedItem("bm-prerender") ? i.getNamedItem("bm-prerender").value : "") && (r.prerender = !1), this.setParams(r)
                }, AnimationItem.prototype.includeLayers = function(t) {
                    t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
                    var e, r, i = this.animationData.layers,
                        n = i.length,
                        a = t.layers,
                        s = a.length;
                    for (r = 0; r < s; r += 1)
                        for (e = 0; e < n;) {
                            if (i[e].id === a[r].id) {
                                i[e] = a[r];
                                break
                            }
                            e += 1
                        }
                    if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets)
                        for (n = t.assets.length, e = 0; e < n; e += 1) this.animationData.assets.push(t.assets[e]);
                    this.animationData.__complete = !1, dataManager.completeAnimation(this.animationData, this.onSegmentComplete)
                }, AnimationItem.prototype.onSegmentComplete = function(t) {
                    this.animationData = t, expressionsPlugin && expressionsPlugin.initExpressions(this), this.loadNextSegment()
                }, AnimationItem.prototype.loadNextSegment = function() {
                    var t = this.animationData.segments;
                    if (!t || 0 === t.length || !this.autoloadSegments) return this.trigger("data_ready"), void(this.timeCompleted = this.totalFrames);
                    var e = t.shift();
                    this.timeCompleted = e.time * this.frameRate;
                    var r = this.path + this.fileName + "_" + this.segmentPos + ".json";
                    this.segmentPos += 1, dataManager.loadData(r, this.includeLayers.bind(this), function() {
                        this.trigger("data_failed")
                    }.bind(this))
                }, AnimationItem.prototype.loadSegments = function() {
                    this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
                }, AnimationItem.prototype.imagesLoaded = function() {
                    this.trigger("loaded_images"), this.checkLoaded()
                }, AnimationItem.prototype.preloadImages = function() {
                    this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
                }, AnimationItem.prototype.configAnimation = function(t) {
                    if (this.renderer) try {
                        this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.markers = markerParser(t.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause()
                    } catch (e) {
                        this.triggerConfigError(e)
                    }
                }, AnimationItem.prototype.waitForFontsLoaded = function() {
                    this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
                }, AnimationItem.prototype.checkLoaded = function() {
                    !this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || "canvas" !== this.renderer.rendererType) && this.imagePreloader.loadedFootages() && (this.isLoaded = !0, expressionsPlugin && expressionsPlugin.initExpressions(this), this.renderer.initItems(), setTimeout(function() {
                        this.trigger("DOMLoaded")
                    }.bind(this), 0), this.gotoFrame(), this.autoplay && this.play())
                }, AnimationItem.prototype.resize = function() {
                    this.renderer.updateContainerSize()
                }, AnimationItem.prototype.setSubframe = function(t) {
                    this.isSubframeEnabled = !!t
                }, AnimationItem.prototype.gotoFrame = function() {
                    this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame")
                }, AnimationItem.prototype.renderFrame = function() {
                    if (!1 !== this.isLoaded && this.renderer) try {
                        this.renderer.renderFrame(this.currentFrame + this.firstFrame)
                    } catch (t) {
                        this.triggerRenderFrameError(t)
                    }
                }, AnimationItem.prototype.play = function(t) {
                    t && this.name !== t || !0 === this.isPaused && (this.isPaused = !1, this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")))
                }, AnimationItem.prototype.pause = function(t) {
                    t && this.name !== t || !1 === this.isPaused && (this.isPaused = !0, this._idle = !0, this.trigger("_idle"), this.audioController.pause())
                }, AnimationItem.prototype.togglePause = function(t) {
                    t && this.name !== t || (!0 === this.isPaused ? this.play() : this.pause())
                }, AnimationItem.prototype.stop = function(t) {
                    t && this.name !== t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
                }, AnimationItem.prototype.getMarkerData = function(t) {
                    for (var e, r = 0; r < this.markers.length; r += 1)
                        if ((e = this.markers[r]).payload && e.payload.name === t) return e;
                    return null
                }, AnimationItem.prototype.goToAndStop = function(t, e, r) {
                    if (!r || this.name === r) {
                        var i = Number(t);
                        if (isNaN(i)) {
                            var n = this.getMarkerData(t);
                            n && this.goToAndStop(n.time, !0)
                        } else e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
                        this.pause()
                    }
                }, AnimationItem.prototype.goToAndPlay = function(t, e, r) {
                    if (!r || this.name === r) {
                        var i = Number(t);
                        if (isNaN(i)) {
                            var n = this.getMarkerData(t);
                            n && (n.duration ? this.playSegments([n.time, n.time + n.duration], !0) : this.goToAndStop(n.time, !0))
                        } else this.goToAndStop(i, e, r);
                        this.play()
                    }
                }, AnimationItem.prototype.advanceTime = function(t) {
                    if (!0 !== this.isPaused && !1 !== this.isLoaded) {
                        var e = this.currentRawFrame + t * this.frameModifier,
                            r = !1;
                        e >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (r = !0, e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (r = !0, e = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(e), r && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"))
                    }
                }, AnimationItem.prototype.adjustSegment = function(t, e) {
                    this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(.001 + e)), this.trigger("segmentStart")
                }, AnimationItem.prototype.setSegment = function(t, e) {
                    var r = -1;
                    this.isPaused && (this.currentRawFrame + this.firstFrame < t ? r = t : this.currentRawFrame + this.firstFrame > e && (r = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, -1 !== r && this.goToAndStop(r, !0)
                }, AnimationItem.prototype.playSegments = function(t, e) {
                    if (e && (this.segments.length = 0), "object" === typeof t[0]) {
                        var r, i = t.length;
                        for (r = 0; r < i; r += 1) this.segments.push(t[r])
                    } else this.segments.push(t);
                    this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
                }, AnimationItem.prototype.resetSegments = function(t) {
                    this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0)
                }, AnimationItem.prototype.checkSegments = function(t) {
                    return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), !0)
                }, AnimationItem.prototype.destroy = function(t) {
                    t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.renderer = null, this.imagePreloader = null, this.projectInterface = null)
                }, AnimationItem.prototype.setCurrentRawFrameValue = function(t) {
                    this.currentRawFrame = t, this.gotoFrame()
                }, AnimationItem.prototype.setSpeed = function(t) {
                    this.playSpeed = t, this.updaFrameModifier()
                }, AnimationItem.prototype.setDirection = function(t) {
                    this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier()
                }, AnimationItem.prototype.setVolume = function(t, e) {
                    e && this.name !== e || this.audioController.setVolume(t)
                }, AnimationItem.prototype.getVolume = function() {
                    return this.audioController.getVolume()
                }, AnimationItem.prototype.mute = function(t) {
                    t && this.name !== t || this.audioController.mute()
                }, AnimationItem.prototype.unmute = function(t) {
                    t && this.name !== t || this.audioController.unmute()
                }, AnimationItem.prototype.updaFrameModifier = function() {
                    this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection)
                }, AnimationItem.prototype.getPath = function() {
                    return this.path
                }, AnimationItem.prototype.getAssetsPath = function(t) {
                    var e = "";
                    if (t.e) e = t.p;
                    else if (this.assetsPath) {
                        var r = t.p; - 1 !== r.indexOf("images/") && (r = r.split("/")[1]), e = this.assetsPath + r
                    } else e = this.path, e += t.u ? t.u : "", e += t.p;
                    return e
                }, AnimationItem.prototype.getAssetData = function(t) {
                    for (var e = 0, r = this.assets.length; e < r;) {
                        if (t === this.assets[e].id) return this.assets[e];
                        e += 1
                    }
                    return null
                }, AnimationItem.prototype.hide = function() {
                    this.renderer.hide()
                }, AnimationItem.prototype.show = function() {
                    this.renderer.show()
                }, AnimationItem.prototype.getDuration = function(t) {
                    return t ? this.totalFrames : this.totalFrames / this.frameRate
                }, AnimationItem.prototype.trigger = function(t) {
                    if (this._cbs && this._cbs[t]) switch (t) {
                        case "enterFrame":
                        case "drawnFrame":
                            this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameModifier));
                            break;
                        case "loopComplete":
                            this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));
                            break;
                        case "complete":
                            this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
                            break;
                        case "segmentStart":
                            this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));
                            break;
                        case "destroy":
                            this.triggerEvent(t, new BMDestroyEvent(t, this));
                            break;
                        default:
                            this.triggerEvent(t)
                    }
                    "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)), "complete" === t && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)), "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)), "destroy" === t && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this))
                }, AnimationItem.prototype.triggerRenderFrameError = function(t) {
                    var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
                    this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
                }, AnimationItem.prototype.triggerConfigError = function(t) {
                    var e = new BMConfigErrorEvent(t, this.currentFrame);
                    this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
                };
                var Expressions = function() {
                    var t = {
                        initExpressions: function(t) {
                            var e = 0,
                                r = [];
                            t.renderer.compInterface = CompExpressionInterface(t.renderer), t.renderer.globalData.projectInterface.registerComposition(t.renderer), t.renderer.globalData.pushExpression = function() {
                                e += 1
                            }, t.renderer.globalData.popExpression = function() {
                                0 === (e -= 1) && function() {
                                    var t, e = r.length;
                                    for (t = 0; t < e; t += 1) r[t].release();
                                    r.length = 0
                                }()
                            }, t.renderer.globalData.registerExpressionProperty = function(t) {
                                -1 === r.indexOf(t) && r.push(t)
                            }
                        }
                    };
                    return t
                }();
                expressionsPlugin = Expressions;
                var ExpressionManager = function() {
                        var ob = {},
                            Math = BMMath,
                            window = null,
                            document = null,
                            XMLHttpRequest = null,
                            fetch = null,
                            frames = null;

                        function $bm_isInstanceOfArray(t) {
                            return t.constructor === Array || t.constructor === Float32Array
                        }

                        function isNumerable(t, e) {
                            return "number" === t || "boolean" === t || "string" === t || e instanceof Number
                        }

                        function $bm_neg(t) {
                            var e = typeof t;
                            if ("number" === e || "boolean" === e || t instanceof Number) return -t;
                            if ($bm_isInstanceOfArray(t)) {
                                var r, i = t.length,
                                    n = [];
                                for (r = 0; r < i; r += 1) n[r] = -t[r];
                                return n
                            }
                            return t.propType ? t.v : -t
                        }
                        var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
                            easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
                            easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;

                        function sum(t, e) {
                            var r = typeof t,
                                i = typeof e;
                            if ("string" === r || "string" === i) return t + e;
                            if (isNumerable(r, t) && isNumerable(i, e)) return t + e;
                            if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) return (t = t.slice(0))[0] += e, t;
                            if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t + e[0], e;
                            if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                                for (var n = 0, a = t.length, s = e.length, o = []; n < a || n < s;)("number" === typeof t[n] || t[n] instanceof Number) && ("number" === typeof e[n] || e[n] instanceof Number) ? o[n] = t[n] + e[n] : o[n] = void 0 === e[n] ? t[n] : t[n] || e[n], n += 1;
                                return o
                            }
                            return 0
                        }
                        var add = sum;

                        function sub(t, e) {
                            var r = typeof t,
                                i = typeof e;
                            if (isNumerable(r, t) && isNumerable(i, e)) return "string" === r && (t = parseInt(t, 10)), "string" === i && (e = parseInt(e, 10)), t - e;
                            if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) return (t = t.slice(0))[0] -= e, t;
                            if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t - e[0], e;
                            if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                                for (var n = 0, a = t.length, s = e.length, o = []; n < a || n < s;)("number" === typeof t[n] || t[n] instanceof Number) && ("number" === typeof e[n] || e[n] instanceof Number) ? o[n] = t[n] - e[n] : o[n] = void 0 === e[n] ? t[n] : t[n] || e[n], n += 1;
                                return o
                            }
                            return 0
                        }

                        function mul(t, e) {
                            var r, i, n, a = typeof t,
                                s = typeof e;
                            if (isNumerable(a, t) && isNumerable(s, e)) return t * e;
                            if ($bm_isInstanceOfArray(t) && isNumerable(s, e)) {
                                for (n = t.length, r = createTypedArray("float32", n), i = 0; i < n; i += 1) r[i] = t[i] * e;
                                return r
                            }
                            if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
                                for (n = e.length, r = createTypedArray("float32", n), i = 0; i < n; i += 1) r[i] = t * e[i];
                                return r
                            }
                            return 0
                        }

                        function div(t, e) {
                            var r, i, n, a = typeof t,
                                s = typeof e;
                            if (isNumerable(a, t) && isNumerable(s, e)) return t / e;
                            if ($bm_isInstanceOfArray(t) && isNumerable(s, e)) {
                                for (n = t.length, r = createTypedArray("float32", n), i = 0; i < n; i += 1) r[i] = t[i] / e;
                                return r
                            }
                            if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
                                for (n = e.length, r = createTypedArray("float32", n), i = 0; i < n; i += 1) r[i] = t / e[i];
                                return r
                            }
                            return 0
                        }

                        function mod(t, e) {
                            return "string" === typeof t && (t = parseInt(t, 10)), "string" === typeof e && (e = parseInt(e, 10)), t % e
                        }
                        var $bm_sum = sum,
                            $bm_sub = sub,
                            $bm_mul = mul,
                            $bm_div = div,
                            $bm_mod = mod;

                        function clamp(t, e, r) {
                            if (e > r) {
                                var i = r;
                                r = e, e = i
                            }
                            return Math.min(Math.max(t, e), r)
                        }

                        function radiansToDegrees(t) {
                            return t / degToRads
                        }
                        var radians_to_degrees = radiansToDegrees;

                        function degreesToRadians(t) {
                            return t * degToRads
                        }
                        var degrees_to_radians = radiansToDegrees,
                            helperLengthArray = [0, 0, 0, 0, 0, 0];

                        function length(t, e) {
                            if ("number" === typeof t || t instanceof Number) return e = e || 0, Math.abs(t - e);
                            var r;
                            e || (e = helperLengthArray);
                            var i = Math.min(t.length, e.length),
                                n = 0;
                            for (r = 0; r < i; r += 1) n += Math.pow(e[r] - t[r], 2);
                            return Math.sqrt(n)
                        }

                        function normalize(t) {
                            return div(t, length(t))
                        }

                        function rgbToHsl(t) {
                            var e, r, i = t[0],
                                n = t[1],
                                a = t[2],
                                s = Math.max(i, n, a),
                                o = Math.min(i, n, a),
                                l = (s + o) / 2;
                            if (s === o) e = 0, r = 0;
                            else {
                                var h = s - o;
                                switch (r = l > .5 ? h / (2 - s - o) : h / (s + o), s) {
                                    case i:
                                        e = (n - a) / h + (n < a ? 6 : 0);
                                        break;
                                    case n:
                                        e = (a - i) / h + 2;
                                        break;
                                    case a:
                                        e = (i - n) / h + 4
                                }
                                e /= 6
                            }
                            return [e, r, l, t[3]]
                        }

                        function hue2rgb(t, e, r) {
                            return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + 6 * (e - t) * r : r < .5 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
                        }

                        function hslToRgb(t) {
                            var e, r, i, n = t[0],
                                a = t[1],
                                s = t[2];
                            if (0 === a) e = s, i = s, r = s;
                            else {
                                var o = s < .5 ? s * (1 + a) : s + a - s * a,
                                    l = 2 * s - o;
                                e = hue2rgb(l, o, n + 1 / 3), r = hue2rgb(l, o, n), i = hue2rgb(l, o, n - 1 / 3)
                            }
                            return [e, r, i, t[3]]
                        }

                        function linear(t, e, r, i, n) {
                            if (void 0 !== i && void 0 !== n || (i = e, n = r, e = 0, r = 1), r < e) {
                                var a = r;
                                r = e, e = a
                            }
                            if (t <= e) return i;
                            if (t >= r) return n;
                            var s, o = r === e ? 0 : (t - e) / (r - e);
                            if (!i.length) return i + (n - i) * o;
                            var l = i.length,
                                h = createTypedArray("float32", l);
                            for (s = 0; s < l; s += 1) h[s] = i[s] + (n[s] - i[s]) * o;
                            return h
                        }

                        function random(t, e) {
                            if (void 0 === e && (void 0 === t ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) {
                                var r, i = e.length;
                                t || (t = createTypedArray("float32", i));
                                var n = createTypedArray("float32", i),
                                    a = BMMath.random();
                                for (r = 0; r < i; r += 1) n[r] = t[r] + a * (e[r] - t[r]);
                                return n
                            }
                            return void 0 === t && (t = 0), t + BMMath.random() * (e - t)
                        }

                        function createPath(t, e, r, i) {
                            var n, a = t.length,
                                s = shapePool.newElement();
                            s.setPathData(!!i, a);
                            var o, l, h = [0, 0];
                            for (n = 0; n < a; n += 1) o = e && e[n] ? e[n] : h, l = r && r[n] ? r[n] : h, s.setTripleAt(t[n][0], t[n][1], l[0] + t[n][0], l[1] + t[n][1], o[0] + t[n][0], o[1] + t[n][1], n, !0);
                            return s
                        }

                        function initiateExpression(elem, data, property) {
                            var val = data.x,
                                needsVelocity = /velocity(?![\w\d])/.test(val),
                                _needsRandom = -1 !== val.indexOf("random"),
                                elemType = elem.data.ty,
                                transform, $bm_transform, content, effect, thisProperty = property;
                            thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
                                get: function() {
                                    return thisProperty.v
                                }
                            }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
                            var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
                                outPoint = elem.data.op / elem.comp.globalData.frameRate,
                                width = elem.data.sw ? elem.data.sw : 0,
                                height = elem.data.sh ? elem.data.sh : 0,
                                name = elem.data.nm,
                                loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0],
                                numKeys = property.kf ? data.k.length : 0,
                                active = !this.data || !0 !== this.data.hd,
                                wiggle = function(t, e) {
                                    var r, i, n = this.pv.length ? this.pv.length : 1,
                                        a = createTypedArray("float32", n),
                                        s = Math.floor(5 * time);
                                    for (r = 0, i = 0; r < s;) {
                                        for (i = 0; i < n; i += 1) a[i] += -e + 2 * e * BMMath.random();
                                        r += 1
                                    }
                                    var o = 5 * time,
                                        l = o - Math.floor(o),
                                        h = createTypedArray("float32", n);
                                    if (n > 1) {
                                        for (i = 0; i < n; i += 1) h[i] = this.pv[i] + a[i] + (-e + 2 * e * BMMath.random()) * l;
                                        return h
                                    }
                                    return this.pv + a[0] + (-e + 2 * e * BMMath.random()) * l
                                }.bind(this);

                            function loopInDuration(t, e) {
                                return loopIn(t, e, !0)
                            }

                            function loopOutDuration(t, e) {
                                return loopOut(t, e, !0)
                            }
                            thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
                            var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),
                                time, velocity, value, text, textIndex, textTotal, selectorValue;

                            function lookAt(t, e) {
                                var r = [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
                                    i = Math.atan2(r[0], Math.sqrt(r[1] * r[1] + r[2] * r[2])) / degToRads;
                                return [-Math.atan2(r[1], r[2]) / degToRads, i, 0]
                            }

                            function easeOut(t, e, r, i, n) {
                                return applyEase(easeOutBez, t, e, r, i, n)
                            }

                            function easeIn(t, e, r, i, n) {
                                return applyEase(easeInBez, t, e, r, i, n)
                            }

                            function ease(t, e, r, i, n) {
                                return applyEase(easeInOutBez, t, e, r, i, n)
                            }

                            function applyEase(t, e, r, i, n, a) {
                                void 0 === n ? (n = r, a = i) : e = (e - r) / (i - r), e > 1 ? e = 1 : e < 0 && (e = 0);
                                var s = t(e);
                                if ($bm_isInstanceOfArray(n)) {
                                    var o, l = n.length,
                                        h = createTypedArray("float32", l);
                                    for (o = 0; o < l; o += 1) h[o] = (a[o] - n[o]) * s + n[o];
                                    return h
                                }
                                return (a - n) * s + n
                            }

                            function nearestKey(t) {
                                var e, r, i, n = data.k.length;
                                if (data.k.length && "number" !== typeof data.k[0])
                                    if (r = -1, (t *= elem.comp.globalData.frameRate) < data.k[0].t) r = 1, i = data.k[0].t;
                                    else {
                                        for (e = 0; e < n - 1; e += 1) {
                                            if (t === data.k[e].t) {
                                                r = e + 1, i = data.k[e].t;
                                                break
                                            }
                                            if (t > data.k[e].t && t < data.k[e + 1].t) {
                                                t - data.k[e].t > data.k[e + 1].t - t ? (r = e + 2, i = data.k[e + 1].t) : (r = e + 1, i = data.k[e].t);
                                                break
                                            }
                                        } - 1 === r && (r = e + 1, i = data.k[e].t)
                                    }
                                else r = 0, i = 0;
                                var a = {};
                                return a.index = r, a.time = i / elem.comp.globalData.frameRate, a
                            }

                            function key(t) {
                                var e, r, i;
                                if (!data.k.length || "number" === typeof data.k[0]) throw new Error("The property has no keyframe at index " + t);
                                t -= 1, e = {
                                    time: data.k[t].t / elem.comp.globalData.frameRate,
                                    value: []
                                };
                                var n = Object.prototype.hasOwnProperty.call(data.k[t], "s") ? data.k[t].s : data.k[t - 1].e;
                                for (i = n.length, r = 0; r < i; r += 1) e[r] = n[r], e.value[r] = n[r];
                                return e
                            }

                            function framesToTime(t, e) {
                                return e || (e = elem.comp.globalData.frameRate), t / e
                            }

                            function timeToFrames(t, e) {
                                return t || 0 === t || (t = time), e || (e = elem.comp.globalData.frameRate), t * e
                            }

                            function seedRandom(t) {
                                BMMath.seedrandom(randSeed + t)
                            }

                            function sourceRectAtTime() {
                                return elem.sourceRectAtTime()
                            }

                            function substring(t, e) {
                                return "string" === typeof value ? void 0 === e ? value.substring(t) : value.substring(t, e) : ""
                            }

                            function substr(t, e) {
                                return "string" === typeof value ? void 0 === e ? value.substr(t) : value.substr(t, e) : ""
                            }

                            function posterizeTime(t) {
                                time = 0 === t ? 0 : Math.floor(time * t) / t, value = valueAtTime(time)
                            }
                            var index = elem.data.ind,
                                hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
                                parent, randSeed = Math.floor(1e6 * Math.random()),
                                globalData = elem.globalData;

                            function executeExpression(t) {
                                return value = t, this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType ? value : ("textSelector" === this.propType && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), 4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, _needsRandom && seedRandom(randSeed + time), needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, "shape" === scoped_bm_rt.propType && (scoped_bm_rt = scoped_bm_rt.v), scoped_bm_rt)
                            }
                            return executeExpression
                        }
                        return ob.initiateExpression = initiateExpression, ob
                    }(),
                    expressionHelpers = {
                        searchExpressions: function(t, e, r) {
                            e.x && (r.k = !0, r.x = !0, r.initiateExpression = ExpressionManager.initiateExpression, r.effectsSequence.push(r.initiateExpression(t, e, r).bind(r)))
                        },
                        getSpeedAtTime: function(t) {
                            var e = this.getValueAtTime(t),
                                r = this.getValueAtTime(t + -.01),
                                i = 0;
                            if (e.length) {
                                var n;
                                for (n = 0; n < e.length; n += 1) i += Math.pow(r[n] - e[n], 2);
                                i = 100 * Math.sqrt(i)
                            } else i = 0;
                            return i
                        },
                        getVelocityAtTime: function(t) {
                            if (void 0 !== this.vel) return this.vel;
                            var e, r, i = -.001,
                                n = this.getValueAtTime(t),
                                a = this.getValueAtTime(t + i);
                            if (n.length)
                                for (e = createTypedArray("float32", n.length), r = 0; r < n.length; r += 1) e[r] = (a[r] - n[r]) / i;
                            else e = (a - n) / i;
                            return e
                        },
                        getValueAtTime: function(t) {
                            return t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < t ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(t, this._cachingAtTime), this._cachingAtTime.lastFrame = t), this._cachingAtTime.value
                        },
                        getStaticValueAtTime: function() {
                            return this.pv
                        },
                        setGroupProperty: function(t) {
                            this.propertyGroup = t
                        }
                    };
                ! function() {
                    function t(t, e, r) {
                        if (!this.k || !this.keyframes) return this.pv;
                        t = t ? t.toLowerCase() : "";
                        var i, n, a, s, o, l = this.comp.renderedFrame,
                            h = this.keyframes,
                            p = h[h.length - 1].t;
                        if (l <= p) return this.pv;
                        if (r ? n = p - (i = e ? Math.abs(p - this.elem.comp.globalData.frameRate * e) : Math.max(0, p - this.elem.data.ip)) : ((!e || e > h.length - 1) && (e = h.length - 1), i = p - (n = h[h.length - 1 - e].t)), "pingpong" === t) {
                            if (Math.floor((l - n) / i) % 2 !== 0) return this.getValueAtTime((i - (l - n) % i + n) / this.comp.globalData.frameRate, 0)
                        } else {
                            if ("offset" === t) {
                                var c = this.getValueAtTime(n / this.comp.globalData.frameRate, 0),
                                    u = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                                    f = this.getValueAtTime(((l - n) % i + n) / this.comp.globalData.frameRate, 0),
                                    d = Math.floor((l - n) / i);
                                if (this.pv.length) {
                                    for (s = (o = new Array(c.length)).length, a = 0; a < s; a += 1) o[a] = (u[a] - c[a]) * d + f[a];
                                    return o
                                }
                                return (u - c) * d + f
                            }
                            if ("continue" === t) {
                                var m = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                                    y = this.getValueAtTime((p - .001) / this.comp.globalData.frameRate, 0);
                                if (this.pv.length) {
                                    for (s = (o = new Array(m.length)).length, a = 0; a < s; a += 1) o[a] = m[a] + (m[a] - y[a]) * ((l - p) / this.comp.globalData.frameRate) / 5e-4;
                                    return o
                                }
                                return m + (l - p) / .001 * (m - y)
                            }
                        }
                        return this.getValueAtTime(((l - n) % i + n) / this.comp.globalData.frameRate, 0)
                    }

                    function e(t, e, r) {
                        if (!this.k) return this.pv;
                        t = t ? t.toLowerCase() : "";
                        var i, n, a, s, o, l = this.comp.renderedFrame,
                            h = this.keyframes,
                            p = h[0].t;
                        if (l >= p) return this.pv;
                        if (r ? n = p + (i = e ? Math.abs(this.elem.comp.globalData.frameRate * e) : Math.max(0, this.elem.data.op - p)) : ((!e || e > h.length - 1) && (e = h.length - 1), i = (n = h[e].t) - p), "pingpong" === t) {
                            if (Math.floor((p - l) / i) % 2 === 0) return this.getValueAtTime(((p - l) % i + p) / this.comp.globalData.frameRate, 0)
                        } else {
                            if ("offset" === t) {
                                var c = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                                    u = this.getValueAtTime(n / this.comp.globalData.frameRate, 0),
                                    f = this.getValueAtTime((i - (p - l) % i + p) / this.comp.globalData.frameRate, 0),
                                    d = Math.floor((p - l) / i) + 1;
                                if (this.pv.length) {
                                    for (s = (o = new Array(c.length)).length, a = 0; a < s; a += 1) o[a] = f[a] - (u[a] - c[a]) * d;
                                    return o
                                }
                                return f - (u - c) * d
                            }
                            if ("continue" === t) {
                                var m = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                                    y = this.getValueAtTime((p + .001) / this.comp.globalData.frameRate, 0);
                                if (this.pv.length) {
                                    for (s = (o = new Array(m.length)).length, a = 0; a < s; a += 1) o[a] = m[a] + (m[a] - y[a]) * (p - l) / .001;
                                    return o
                                }
                                return m + (m - y) * (p - l) / .001
                            }
                        }
                        return this.getValueAtTime((i - ((p - l) % i + p)) / this.comp.globalData.frameRate, 0)
                    }

                    function r(t, e) {
                        if (!this.k) return this.pv;
                        if (t = .5 * (t || .4), (e = Math.floor(e || 5)) <= 1) return this.pv;
                        var r, i, n = this.comp.renderedFrame / this.comp.globalData.frameRate,
                            a = n - t,
                            s = e > 1 ? (n + t - a) / (e - 1) : 1,
                            o = 0,
                            l = 0;
                        for (r = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; o < e;) {
                            if (i = this.getValueAtTime(a + o * s), this.pv.length)
                                for (l = 0; l < this.pv.length; l += 1) r[l] += i[l];
                            else r += i;
                            o += 1
                        }
                        if (this.pv.length)
                            for (l = 0; l < this.pv.length; l += 1) r[l] /= e;
                        else r /= e;
                        return r
                    }

                    function i(t) {
                        this._transformCachingAtTime || (this._transformCachingAtTime = {
                            v: new Matrix
                        });
                        var e = this._transformCachingAtTime.v;
                        if (e.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
                            var r = this.a.getValueAtTime(t);
                            e.translate(-r[0] * this.a.mult, -r[1] * this.a.mult, r[2] * this.a.mult)
                        }
                        if (this.appliedTransformations < 2) {
                            var i = this.s.getValueAtTime(t);
                            e.scale(i[0] * this.s.mult, i[1] * this.s.mult, i[2] * this.s.mult)
                        }
                        if (this.sk && this.appliedTransformations < 3) {
                            var n = this.sk.getValueAtTime(t),
                                a = this.sa.getValueAtTime(t);
                            e.skewFromAxis(-n * this.sk.mult, a * this.sa.mult)
                        }
                        if (this.r && this.appliedTransformations < 4) {
                            var s = this.r.getValueAtTime(t);
                            e.rotate(-s * this.r.mult)
                        } else if (!this.r && this.appliedTransformations < 4) {
                            var o = this.rz.getValueAtTime(t),
                                l = this.ry.getValueAtTime(t),
                                h = this.rx.getValueAtTime(t),
                                p = this.or.getValueAtTime(t);
                            e.rotateZ(-o * this.rz.mult).rotateY(l * this.ry.mult).rotateX(h * this.rx.mult).rotateZ(-p[2] * this.or.mult).rotateY(p[1] * this.or.mult).rotateX(p[0] * this.or.mult)
                        }
                        if (this.data.p && this.data.p.s) {
                            var c = this.px.getValueAtTime(t),
                                u = this.py.getValueAtTime(t);
                            if (this.data.p.z) {
                                var f = this.pz.getValueAtTime(t);
                                e.translate(c * this.px.mult, u * this.py.mult, -f * this.pz.mult)
                            } else e.translate(c * this.px.mult, u * this.py.mult, 0)
                        } else {
                            var d = this.p.getValueAtTime(t);
                            e.translate(d[0] * this.p.mult, d[1] * this.p.mult, -d[2] * this.p.mult)
                        }
                        return e
                    }

                    function n() {
                        return this.v.clone(new Matrix)
                    }
                    var a = TransformPropertyFactory.getTransformProperty;
                    TransformPropertyFactory.getTransformProperty = function(t, e, r) {
                        var s = a(t, e, r);
                        return s.dynamicProperties.length ? s.getValueAtTime = i.bind(s) : s.getValueAtTime = n.bind(s), s.setGroupProperty = expressionHelpers.setGroupProperty, s
                    };
                    var s = PropertyFactory.getProp;
                    PropertyFactory.getProp = function(i, n, a, o, l) {
                        var h = s(i, n, a, o, l);
                        h.kf ? h.getValueAtTime = expressionHelpers.getValueAtTime.bind(h) : h.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(h), h.setGroupProperty = expressionHelpers.setGroupProperty, h.loopOut = t, h.loopIn = e, h.smooth = r, h.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(h), h.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(h), h.numKeys = 1 === n.a ? n.k.length : 0, h.propertyIndex = n.ix;
                        var p = 0;
                        return 0 !== a && (p = createTypedArray("float32", 1 === n.a ? n.k[0].s.length : n.k.length)), h._cachingAtTime = {
                            lastFrame: initialDefaultFrame,
                            lastIndex: 0,
                            value: p
                        }, expressionHelpers.searchExpressions(i, n, h), h.k && l.addDynamicProperty(h), h
                    };
                    var o = ShapePropertyFactory.getConstructorFunction(),
                        l = ShapePropertyFactory.getKeyframedConstructorFunction();

                    function h() {}
                    h.prototype = {
                        vertices: function(t, e) {
                            this.k && this.getValue();
                            var r, i = this.v;
                            void 0 !== e && (i = this.getValueAtTime(e, 0));
                            var n = i._length,
                                a = i[t],
                                s = i.v,
                                o = createSizedArray(n);
                            for (r = 0; r < n; r += 1) o[r] = "i" === t || "o" === t ? [a[r][0] - s[r][0], a[r][1] - s[r][1]] : [a[r][0], a[r][1]];
                            return o
                        },
                        points: function(t) {
                            return this.vertices("v", t)
                        },
                        inTangents: function(t) {
                            return this.vertices("i", t)
                        },
                        outTangents: function(t) {
                            return this.vertices("o", t)
                        },
                        isClosed: function() {
                            return this.v.c
                        },
                        pointOnPath: function(t, e) {
                            var r = this.v;
                            void 0 !== e && (r = this.getValueAtTime(e, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(r));
                            for (var i, n = this._segmentsLength, a = n.lengths, s = n.totalLength * t, o = 0, l = a.length, h = 0; o < l;) {
                                if (h + a[o].addedLength > s) {
                                    var p = o,
                                        c = r.c && o === l - 1 ? 0 : o + 1,
                                        u = (s - h) / a[o].addedLength;
                                    i = bez.getPointInSegment(r.v[p], r.v[c], r.o[p], r.i[c], u, a[o]);
                                    break
                                }
                                h += a[o].addedLength, o += 1
                            }
                            return i || (i = r.c ? [r.v[0][0], r.v[0][1]] : [r.v[r._length - 1][0], r.v[r._length - 1][1]]), i
                        },
                        vectorOnPath: function(t, e, r) {
                            1 == t ? t = this.v.c : 0 == t && (t = .999);
                            var i = this.pointOnPath(t, e),
                                n = this.pointOnPath(t + .001, e),
                                a = n[0] - i[0],
                                s = n[1] - i[1],
                                o = Math.sqrt(Math.pow(a, 2) + Math.pow(s, 2));
                            return 0 === o ? [0, 0] : "tangent" === r ? [a / o, s / o] : [-s / o, a / o]
                        },
                        tangentOnPath: function(t, e) {
                            return this.vectorOnPath(t, e, "tangent")
                        },
                        normalOnPath: function(t, e) {
                            return this.vectorOnPath(t, e, "normal")
                        },
                        setGroupProperty: expressionHelpers.setGroupProperty,
                        getValueAtTime: expressionHelpers.getStaticValueAtTime
                    }, extendPrototype([h], o), extendPrototype([h], l), l.prototype.getValueAtTime = function(t) {
                        return this._cachingAtTime || (this._cachingAtTime = {
                            shapeValue: shapePool.clone(this.pv),
                            lastIndex: 0,
                            lastTime: initialDefaultFrame
                        }), t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < t ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = t, this.interpolateShape(t, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue
                    }, l.prototype.initiateExpression = ExpressionManager.initiateExpression;
                    var p = ShapePropertyFactory.getShapeProp;
                    ShapePropertyFactory.getShapeProp = function(t, e, r, i, n) {
                        var a = p(t, e, r, i, n);
                        return a.propertyIndex = e.ix, a.lock = !1, 3 === r ? expressionHelpers.searchExpressions(t, e.pt, a) : 4 === r && expressionHelpers.searchExpressions(t, e.ks, a), a.k && t.addDynamicProperty(a), a
                    }
                }(), TextProperty.prototype.getExpressionValue = function(t, e) {
                    var r = this.calculateExpression(e);
                    if (t.t !== r) {
                        var i = {};
                        return this.copyData(i, t), i.t = r.toString(), i.__complete = !1, i
                    }
                    return t
                }, TextProperty.prototype.searchProperty = function() {
                    var t = this.searchKeyframes(),
                        e = this.searchExpressions();
                    return this.kf = t || e, this.kf
                }, TextProperty.prototype.searchExpressions = function() {
                    return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null
                };
                var ShapePathInterface = function(t, e, r) {
                        var i = e.sh;

                        function n(t) {
                            return "Shape" === t || "shape" === t || "Path" === t || "path" === t || "ADBE Vector Shape" === t || 2 === t ? n.path : null
                        }
                        var a = propertyGroupFactory(n, r);
                        return i.setGroupProperty(PropertyInterface("Path", a)), Object.defineProperties(n, {
                            path: {
                                get: function() {
                                    return i.k && i.getValue(), i
                                }
                            },
                            shape: {
                                get: function() {
                                    return i.k && i.getValue(), i
                                }
                            },
                            _name: {
                                value: t.nm
                            },
                            ix: {
                                value: t.ix
                            },
                            propertyIndex: {
                                value: t.ix
                            },
                            mn: {
                                value: t.mn
                            },
                            propertyGroup: {
                                value: r
                            }
                        }), n
                    },
                    propertyGroupFactory = function(t, e) {
                        return function(r) {
                            return (r = void 0 === r ? 1 : r) <= 0 ? t : e(r - 1)
                        }
                    },
                    PropertyInterface = function(t, e) {
                        var r = {
                            _name: t
                        };
                        return function(t) {
                            return (t = void 0 === t ? 1 : t) <= 0 ? r : e(t - 1)
                        }
                    },
                    ShapeExpressionInterface = function() {
                        function t(t, s, u) {
                            var f, d = [],
                                m = t ? t.length : 0;
                            for (f = 0; f < m; f += 1) "gr" === t[f].ty ? d.push(e(t[f], s[f], u)) : "fl" === t[f].ty ? d.push(r(t[f], s[f], u)) : "st" === t[f].ty ? d.push(n(t[f], s[f], u)) : "tm" === t[f].ty ? d.push(a(t[f], s[f], u)) : "tr" === t[f].ty || ("el" === t[f].ty ? d.push(o(t[f], s[f], u)) : "sr" === t[f].ty ? d.push(l(t[f], s[f], u)) : "sh" === t[f].ty ? d.push(ShapePathInterface(t[f], s[f], u)) : "rc" === t[f].ty ? d.push(h(t[f], s[f], u)) : "rd" === t[f].ty ? d.push(p(t[f], s[f], u)) : "rp" === t[f].ty ? d.push(c(t[f], s[f], u)) : "gf" === t[f].ty ? d.push(i(t[f], s[f], u)) : d.push((t[f], s[f], function() {
                                return null
                            })));
                            return d
                        }

                        function e(e, r, i) {
                            var n = function(t) {
                                switch (t) {
                                    case "ADBE Vectors Group":
                                    case "Contents":
                                    case 2:
                                        return n.content;
                                    default:
                                        return n.transform
                                }
                            };
                            n.propertyGroup = propertyGroupFactory(n, i);
                            var a = function(e, r, i) {
                                    var n, a = function(t) {
                                        for (var e = 0, r = n.length; e < r;) {
                                            if (n[e]._name === t || n[e].mn === t || n[e].propertyIndex === t || n[e].ix === t || n[e].ind === t) return n[e];
                                            e += 1
                                        }
                                        return "number" === typeof t ? n[t - 1] : null
                                    };
                                    a.propertyGroup = propertyGroupFactory(a, i), n = t(e.it, r.it, a.propertyGroup), a.numProperties = n.length;
                                    var o = s(e.it[e.it.length - 1], r.it[r.it.length - 1], a.propertyGroup);
                                    return a.transform = o, a.propertyIndex = e.cix, a._name = e.nm, a
                                }(e, r, n.propertyGroup),
                                o = s(e.it[e.it.length - 1], r.it[r.it.length - 1], n.propertyGroup);
                            return n.content = a, n.transform = o, Object.defineProperty(n, "_name", {
                                get: function() {
                                    return e.nm
                                }
                            }), n.numProperties = e.np, n.propertyIndex = e.ix, n.nm = e.nm, n.mn = e.mn, n
                        }

                        function r(t, e, r) {
                            function i(t) {
                                return "Color" === t || "color" === t ? i.color : "Opacity" === t || "opacity" === t ? i.opacity : null
                            }
                            return Object.defineProperties(i, {
                                color: {
                                    get: ExpressionPropertyInterface(e.c)
                                },
                                opacity: {
                                    get: ExpressionPropertyInterface(e.o)
                                },
                                _name: {
                                    value: t.nm
                                },
                                mn: {
                                    value: t.mn
                                }
                            }), e.c.setGroupProperty(PropertyInterface("Color", r)), e.o.setGroupProperty(PropertyInterface("Opacity", r)), i
                        }

                        function i(t, e, r) {
                            function i(t) {
                                return "Start Point" === t || "start point" === t ? i.startPoint : "End Point" === t || "end point" === t ? i.endPoint : "Opacity" === t || "opacity" === t ? i.opacity : null
                            }
                            return Object.defineProperties(i, {
                                startPoint: {
                                    get: ExpressionPropertyInterface(e.s)
                                },
                                endPoint: {
                                    get: ExpressionPropertyInterface(e.e)
                                },
                                opacity: {
                                    get: ExpressionPropertyInterface(e.o)
                                },
                                type: {
                                    get: function() {
                                        return "a"
                                    }
                                },
                                _name: {
                                    value: t.nm
                                },
                                mn: {
                                    value: t.mn
                                }
                            }), e.s.setGroupProperty(PropertyInterface("Start Point", r)), e.e.setGroupProperty(PropertyInterface("End Point", r)), e.o.setGroupProperty(PropertyInterface("Opacity", r)), i
                        }

                        function n(t, e, r) {
                            var i, n = propertyGroupFactory(h, r),
                                a = propertyGroupFactory(l, n);

                            function s(r) {
                                Object.defineProperty(l, t.d[r].nm, {
                                    get: ExpressionPropertyInterface(e.d.dataProps[r].p)
                                })
                            }
                            var o = t.d ? t.d.length : 0,
                                l = {};
                            for (i = 0; i < o; i += 1) s(i), e.d.dataProps[i].p.setGroupProperty(a);

                            function h(t) {
                                return "Color" === t || "color" === t ? h.color : "Opacity" === t || "opacity" === t ? h.opacity : "Stroke Width" === t || "stroke width" === t ? h.strokeWidth : null
                            }
                            return Object.defineProperties(h, {
                                color: {
                                    get: ExpressionPropertyInterface(e.c)
                                },
                                opacity: {
                                    get: ExpressionPropertyInterface(e.o)
                                },
                                strokeWidth: {
                                    get: ExpressionPropertyInterface(e.w)
                                },
                                dash: {
                                    get: function() {
                                        return l
                                    }
                                },
                                _name: {
                                    value: t.nm
                                },
                                mn: {
                                    value: t.mn
                                }
                            }), e.c.setGroupProperty(PropertyInterface("Color", n)), e.o.setGroupProperty(PropertyInterface("Opacity", n)), e.w.setGroupProperty(PropertyInterface("Stroke Width", n)), h
                        }

                        function a(t, e, r) {
                            function i(e) {
                                return e === t.e.ix || "End" === e || "end" === e ? i.end : e === t.s.ix ? i.start : e === t.o.ix ? i.offset : null
                            }
                            var n = propertyGroupFactory(i, r);
                            return i.propertyIndex = t.ix, e.s.setGroupProperty(PropertyInterface("Start", n)), e.e.setGroupProperty(PropertyInterface("End", n)), e.o.setGroupProperty(PropertyInterface("Offset", n)), i.propertyIndex = t.ix, i.propertyGroup = r, Object.defineProperties(i, {
                                start: {
                                    get: ExpressionPropertyInterface(e.s)
                                },
                                end: {
                                    get: ExpressionPropertyInterface(e.e)
                                },
                                offset: {
                                    get: ExpressionPropertyInterface(e.o)
                                },
                                _name: {
                                    value: t.nm
                                }
                            }), i.mn = t.mn, i
                        }

                        function s(t, e, r) {
                            function i(e) {
                                return t.a.ix === e || "Anchor Point" === e ? i.anchorPoint : t.o.ix === e || "Opacity" === e ? i.opacity : t.p.ix === e || "Position" === e ? i.position : t.r.ix === e || "Rotation" === e || "ADBE Vector Rotation" === e ? i.rotation : t.s.ix === e || "Scale" === e ? i.scale : t.sk && t.sk.ix === e || "Skew" === e ? i.skew : t.sa && t.sa.ix === e || "Skew Axis" === e ? i.skewAxis : null
                            }
                            var n = propertyGroupFactory(i, r);
                            return e.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", n)), e.transform.mProps.p.setGroupProperty(PropertyInterface("Position", n)), e.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", n)), e.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", n)), e.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", n)), e.transform.mProps.sk && (e.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", n)), e.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", n))), e.transform.op.setGroupProperty(PropertyInterface("Opacity", n)), Object.defineProperties(i, {
                                opacity: {
                                    get: ExpressionPropertyInterface(e.transform.mProps.o)
                                },
                                position: {
                                    get: ExpressionPropertyInterface(e.transform.mProps.p)
                                },
                                anchorPoint: {
                                    get: ExpressionPropertyInterface(e.transform.mProps.a)
                                },
                                scale: {
                                    get: ExpressionPropertyInterface(e.transform.mProps.s)
                                },
                                rotation: {
                                    get: ExpressionPropertyInterface(e.transform.mProps.r)
                                },
                                skew: {
                                    get: ExpressionPropertyInterface(e.transform.mProps.sk)
                                },
                                skewAxis: {
                                    get: ExpressionPropertyInterface(e.transform.mProps.sa)
                                },
                                _name: {
                                    value: t.nm
                                }
                            }), i.ty = "tr", i.mn = t.mn, i.propertyGroup = r, i
                        }

                        function o(t, e, r) {
                            function i(e) {
                                return t.p.ix === e ? i.position : t.s.ix === e ? i.size : null
                            }
                            var n = propertyGroupFactory(i, r);
                            i.propertyIndex = t.ix;
                            var a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                            return a.s.setGroupProperty(PropertyInterface("Size", n)), a.p.setGroupProperty(PropertyInterface("Position", n)), Object.defineProperties(i, {
                                size: {
                                    get: ExpressionPropertyInterface(a.s)
                                },
                                position: {
                                    get: ExpressionPropertyInterface(a.p)
                                },
                                _name: {
                                    value: t.nm
                                }
                            }), i.mn = t.mn, i
                        }

                        function l(t, e, r) {
                            function i(e) {
                                return t.p.ix === e ? i.position : t.r.ix === e ? i.rotation : t.pt.ix === e ? i.points : t.or.ix === e || "ADBE Vector Star Outer Radius" === e ? i.outerRadius : t.os.ix === e ? i.outerRoundness : !t.ir || t.ir.ix !== e && "ADBE Vector Star Inner Radius" !== e ? t.is && t.is.ix === e ? i.innerRoundness : null : i.innerRadius
                            }
                            var n = propertyGroupFactory(i, r),
                                a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                            return i.propertyIndex = t.ix, a.or.setGroupProperty(PropertyInterface("Outer Radius", n)), a.os.setGroupProperty(PropertyInterface("Outer Roundness", n)), a.pt.setGroupProperty(PropertyInterface("Points", n)), a.p.setGroupProperty(PropertyInterface("Position", n)), a.r.setGroupProperty(PropertyInterface("Rotation", n)), t.ir && (a.ir.setGroupProperty(PropertyInterface("Inner Radius", n)), a.is.setGroupProperty(PropertyInterface("Inner Roundness", n))), Object.defineProperties(i, {
                                position: {
                                    get: ExpressionPropertyInterface(a.p)
                                },
                                rotation: {
                                    get: ExpressionPropertyInterface(a.r)
                                },
                                points: {
                                    get: ExpressionPropertyInterface(a.pt)
                                },
                                outerRadius: {
                                    get: ExpressionPropertyInterface(a.or)
                                },
                                outerRoundness: {
                                    get: ExpressionPropertyInterface(a.os)
                                },
                                innerRadius: {
                                    get: ExpressionPropertyInterface(a.ir)
                                },
                                innerRoundness: {
                                    get: ExpressionPropertyInterface(a.is)
                                },
                                _name: {
                                    value: t.nm
                                }
                            }), i.mn = t.mn, i
                        }

                        function h(t, e, r) {
                            function i(e) {
                                return t.p.ix === e ? i.position : t.r.ix === e ? i.roundness : t.s.ix === e || "Size" === e || "ADBE Vector Rect Size" === e ? i.size : null
                            }
                            var n = propertyGroupFactory(i, r),
                                a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                            return i.propertyIndex = t.ix, a.p.setGroupProperty(PropertyInterface("Position", n)), a.s.setGroupProperty(PropertyInterface("Size", n)), a.r.setGroupProperty(PropertyInterface("Rotation", n)), Object.defineProperties(i, {
                                position: {
                                    get: ExpressionPropertyInterface(a.p)
                                },
                                roundness: {
                                    get: ExpressionPropertyInterface(a.r)
                                },
                                size: {
                                    get: ExpressionPropertyInterface(a.s)
                                },
                                _name: {
                                    value: t.nm
                                }
                            }), i.mn = t.mn, i
                        }

                        function p(t, e, r) {
                            function i(e) {
                                return t.r.ix === e || "Round Corners 1" === e ? i.radius : null
                            }
                            var n = propertyGroupFactory(i, r),
                                a = e;
                            return i.propertyIndex = t.ix, a.rd.setGroupProperty(PropertyInterface("Radius", n)), Object.defineProperties(i, {
                                radius: {
                                    get: ExpressionPropertyInterface(a.rd)
                                },
                                _name: {
                                    value: t.nm
                                }
                            }), i.mn = t.mn, i
                        }

                        function c(t, e, r) {
                            function i(e) {
                                return t.c.ix === e || "Copies" === e ? i.copies : t.o.ix === e || "Offset" === e ? i.offset : null
                            }
                            var n = propertyGroupFactory(i, r),
                                a = e;
                            return i.propertyIndex = t.ix, a.c.setGroupProperty(PropertyInterface("Copies", n)), a.o.setGroupProperty(PropertyInterface("Offset", n)), Object.defineProperties(i, {
                                copies: {
                                    get: ExpressionPropertyInterface(a.c)
                                },
                                offset: {
                                    get: ExpressionPropertyInterface(a.o)
                                },
                                _name: {
                                    value: t.nm
                                }
                            }), i.mn = t.mn, i
                        }
                        return function(e, r, i) {
                            var n;

                            function a(t) {
                                if ("number" === typeof t) return 0 === (t = void 0 === t ? 1 : t) ? i : n[t - 1];
                                for (var e = 0, r = n.length; e < r;) {
                                    if (n[e]._name === t) return n[e];
                                    e += 1
                                }
                                return null
                            }
                            return a.propertyGroup = propertyGroupFactory(a, (function() {
                                return i
                            })), n = t(e, r, a.propertyGroup), a.numProperties = n.length, a._name = "Contents", a
                        }
                    }(),
                    TextExpressionInterface = function(t) {
                        var e, r;

                        function i(t) {
                            switch (t) {
                                case "ADBE Text Document":
                                    return i.sourceText;
                                default:
                                    return null
                            }
                        }
                        return Object.defineProperty(i, "sourceText", {
                            get: function() {
                                t.textProperty.getValue();
                                var i = t.textProperty.currentData.t;
                                return i !== e && (t.textProperty.currentData.t = e, (r = new String(i)).value = i || new String(i)), r
                            }
                        }), i
                    },
                    LayerExpressionInterface = function() {
                        function t(t) {
                            var e = new Matrix;
                            return void 0 !== t ? this._elem.finalTransform.mProp.getValueAtTime(t).clone(e) : this._elem.finalTransform.mProp.applyToMatrix(e), e
                        }

                        function e(t, e) {
                            var r = this.getMatrix(e);
                            return r.props[12] = 0, r.props[13] = 0, r.props[14] = 0, this.applyPoint(r, t)
                        }

                        function r(t, e) {
                            var r = this.getMatrix(e);
                            return this.applyPoint(r, t)
                        }

                        function i(t, e) {
                            var r = this.getMatrix(e);
                            return r.props[12] = 0, r.props[13] = 0, r.props[14] = 0, this.invertPoint(r, t)
                        }

                        function n(t, e) {
                            var r = this.getMatrix(e);
                            return this.invertPoint(r, t)
                        }

                        function a(t, e) {
                            if (this._elem.hierarchy && this._elem.hierarchy.length) {
                                var r, i = this._elem.hierarchy.length;
                                for (r = 0; r < i; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(t)
                            }
                            return t.applyToPointArray(e[0], e[1], e[2] || 0)
                        }

                        function s(t, e) {
                            if (this._elem.hierarchy && this._elem.hierarchy.length) {
                                var r, i = this._elem.hierarchy.length;
                                for (r = 0; r < i; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(t)
                            }
                            return t.inversePoint(e)
                        }

                        function o(t) {
                            var e = new Matrix;
                            if (e.reset(), this._elem.finalTransform.mProp.applyToMatrix(e), this._elem.hierarchy && this._elem.hierarchy.length) {
                                var r, i = this._elem.hierarchy.length;
                                for (r = 0; r < i; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(e);
                                return e.inversePoint(t)
                            }
                            return e.inversePoint(t)
                        }

                        function l() {
                            return [1, 1, 1, 1]
                        }
                        return function(h) {
                            var p;

                            function c(t) {
                                switch (t) {
                                    case "ADBE Root Vectors Group":
                                    case "Contents":
                                    case 2:
                                        return c.shapeInterface;
                                    case 1:
                                    case 6:
                                    case "Transform":
                                    case "transform":
                                    case "ADBE Transform Group":
                                        return p;
                                    case 4:
                                    case "ADBE Effect Parade":
                                    case "effects":
                                    case "Effects":
                                        return c.effect;
                                    case "ADBE Text Properties":
                                        return c.textInterface;
                                    default:
                                        return null
                                }
                            }
                            c.getMatrix = t, c.invertPoint = s, c.applyPoint = a, c.toWorld = r, c.toWorldVec = e, c.fromWorld = n, c.fromWorldVec = i, c.toComp = r, c.fromComp = o, c.sampleImage = l, c.sourceRectAtTime = h.sourceRectAtTime.bind(h), c._elem = h;
                            var u = getDescriptor(p = TransformExpressionInterface(h.finalTransform.mProp), "anchorPoint");
                            return Object.defineProperties(c, {
                                hasParent: {
                                    get: function() {
                                        return h.hierarchy.length
                                    }
                                },
                                parent: {
                                    get: function() {
                                        return h.hierarchy[0].layerInterface
                                    }
                                },
                                rotation: getDescriptor(p, "rotation"),
                                scale: getDescriptor(p, "scale"),
                                position: getDescriptor(p, "position"),
                                opacity: getDescriptor(p, "opacity"),
                                anchorPoint: u,
                                anchor_point: u,
                                transform: {
                                    get: function() {
                                        return p
                                    }
                                },
                                active: {
                                    get: function() {
                                        return h.isInRange
                                    }
                                }
                            }), c.startTime = h.data.st, c.index = h.data.ind, c.source = h.data.refId, c.height = 0 === h.data.ty ? h.data.h : 100, c.width = 0 === h.data.ty ? h.data.w : 100, c.inPoint = h.data.ip / h.comp.globalData.frameRate, c.outPoint = h.data.op / h.comp.globalData.frameRate, c._name = h.data.nm, c.registerMaskInterface = function(t) {
                                c.mask = new MaskManagerInterface(t, h)
                            }, c.registerEffectsInterface = function(t) {
                                c.effect = t
                            }, c
                        }
                    }(),
                    FootageInterface = function() {
                        var t = function(t) {
                            function e(t) {
                                return "Outline" === t ? e.outlineInterface() : null
                            }
                            return e._name = "Outline", e.outlineInterface = function(t) {
                                var e = "",
                                    r = t.getFootageData();

                                function i(t) {
                                    if (r[t]) return e = t, "object" === typeof(r = r[t]) ? i : r;
                                    var n = t.indexOf(e);
                                    if (-1 !== n) {
                                        var a = parseInt(t.substr(n + e.length), 10);
                                        return "object" === typeof(r = r[a]) ? i : r
                                    }
                                    return ""
                                }
                                return function() {
                                    return e = "", r = t.getFootageData(), i
                                }
                            }(t), e
                        };
                        return function(e) {
                            function r(t) {
                                return "Data" === t ? r.dataInterface : null
                            }
                            return r._name = "Data", r.dataInterface = t(e), r
                        }
                    }(),
                    CompExpressionInterface = function(t) {
                        function e(e) {
                            for (var r = 0, i = t.layers.length; r < i;) {
                                if (t.layers[r].nm === e || t.layers[r].ind === e) return t.elements[r].layerInterface;
                                r += 1
                            }
                            return null
                        }
                        return Object.defineProperty(e, "_name", {
                            value: t.data.nm
                        }), e.layer = e, e.pixelAspect = 1, e.height = t.data.h || t.globalData.compSize.h, e.width = t.data.w || t.globalData.compSize.w, e.pixelAspect = 1, e.frameDuration = 1 / t.globalData.frameRate, e.displayStartTime = 0, e.numLayers = t.layers.length, e
                    },
                    TransformExpressionInterface = function(t) {
                        function e(t) {
                            switch (t) {
                                case "scale":
                                case "Scale":
                                case "ADBE Scale":
                                case 6:
                                    return e.scale;
                                case "rotation":
                                case "Rotation":
                                case "ADBE Rotation":
                                case "ADBE Rotate Z":
                                case 10:
                                    return e.rotation;
                                case "ADBE Rotate X":
                                    return e.xRotation;
                                case "ADBE Rotate Y":
                                    return e.yRotation;
                                case "position":
                                case "Position":
                                case "ADBE Position":
                                case 2:
                                    return e.position;
                                case "ADBE Position_0":
                                    return e.xPosition;
                                case "ADBE Position_1":
                                    return e.yPosition;
                                case "ADBE Position_2":
                                    return e.zPosition;
                                case "anchorPoint":
                                case "AnchorPoint":
                                case "Anchor Point":
                                case "ADBE AnchorPoint":
                                case 1:
                                    return e.anchorPoint;
                                case "opacity":
                                case "Opacity":
                                case 11:
                                    return e.opacity;
                                default:
                                    return null
                            }
                        }
                        var r, i, n, a;
                        return Object.defineProperty(e, "rotation", {
                            get: ExpressionPropertyInterface(t.r || t.rz)
                        }), Object.defineProperty(e, "zRotation", {
                            get: ExpressionPropertyInterface(t.rz || t.r)
                        }), Object.defineProperty(e, "xRotation", {
                            get: ExpressionPropertyInterface(t.rx)
                        }), Object.defineProperty(e, "yRotation", {
                            get: ExpressionPropertyInterface(t.ry)
                        }), Object.defineProperty(e, "scale", {
                            get: ExpressionPropertyInterface(t.s)
                        }), t.p ? a = ExpressionPropertyInterface(t.p) : (r = ExpressionPropertyInterface(t.px), i = ExpressionPropertyInterface(t.py), t.pz && (n = ExpressionPropertyInterface(t.pz))), Object.defineProperty(e, "position", {
                            get: function() {
                                return t.p ? a() : [r(), i(), n ? n() : 0]
                            }
                        }), Object.defineProperty(e, "xPosition", {
                            get: ExpressionPropertyInterface(t.px)
                        }), Object.defineProperty(e, "yPosition", {
                            get: ExpressionPropertyInterface(t.py)
                        }), Object.defineProperty(e, "zPosition", {
                            get: ExpressionPropertyInterface(t.pz)
                        }), Object.defineProperty(e, "anchorPoint", {
                            get: ExpressionPropertyInterface(t.a)
                        }), Object.defineProperty(e, "opacity", {
                            get: ExpressionPropertyInterface(t.o)
                        }), Object.defineProperty(e, "skew", {
                            get: ExpressionPropertyInterface(t.sk)
                        }), Object.defineProperty(e, "skewAxis", {
                            get: ExpressionPropertyInterface(t.sa)
                        }), Object.defineProperty(e, "orientation", {
                            get: ExpressionPropertyInterface(t.or)
                        }), e
                    },
                    ProjectInterface = function() {
                        function t(t) {
                            this.compositions.push(t)
                        }
                        return function() {
                            function e(t) {
                                for (var e = 0, r = this.compositions.length; e < r;) {
                                    if (this.compositions[e].data && this.compositions[e].data.nm === t) return this.compositions[e].prepareFrame && this.compositions[e].data.xt && this.compositions[e].prepareFrame(this.currentFrame), this.compositions[e].compInterface;
                                    e += 1
                                }
                                return null
                            }
                            return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e
                        }
                    }(),
                    EffectsExpressionInterface = function() {
                        function t(r, i, n, a) {
                            function s(t) {
                                for (var e = r.ef, i = 0, n = e.length; i < n;) {
                                    if (t === e[i].nm || t === e[i].mn || t === e[i].ix) return 5 === e[i].ty ? h[i] : h[i]();
                                    i += 1
                                }
                                throw new Error
                            }
                            var o, l = propertyGroupFactory(s, n),
                                h = [],
                                p = r.ef.length;
                            for (o = 0; o < p; o += 1) 5 === r.ef[o].ty ? h.push(t(r.ef[o], i.effectElements[o], i.effectElements[o].propertyGroup, a)) : h.push(e(i.effectElements[o], r.ef[o].ty, a, l));
                            return "ADBE Color Control" === r.mn && Object.defineProperty(s, "color", {
                                get: function() {
                                    return h[0]()
                                }
                            }), Object.defineProperties(s, {
                                numProperties: {
                                    get: function() {
                                        return r.np
                                    }
                                },
                                _name: {
                                    value: r.nm
                                },
                                propertyGroup: {
                                    value: l
                                }
                            }), s.enabled = 0 !== r.en, s.active = s.enabled, s
                        }

                        function e(t, e, r, i) {
                            var n = ExpressionPropertyInterface(t.p);
                            return t.p.setGroupProperty && t.p.setGroupProperty(PropertyInterface("", i)),
                                function() {
                                    return 10 === e ? r.comp.compInterface(t.p.v) : n()
                                }
                        }
                        return {
                            createEffectsInterface: function(e, r) {
                                if (e.effectsManager) {
                                    var i, n = [],
                                        a = e.data.ef,
                                        s = e.effectsManager.effectElements.length;
                                    for (i = 0; i < s; i += 1) n.push(t(a[i], e.effectsManager.effectElements[i], r, e));
                                    var o = e.data.ef || [],
                                        l = function(t) {
                                            for (i = 0, s = o.length; i < s;) {
                                                if (t === o[i].nm || t === o[i].mn || t === o[i].ix) return n[i];
                                                i += 1
                                            }
                                            return null
                                        };
                                    return Object.defineProperty(l, "numProperties", {
                                        get: function() {
                                            return o.length
                                        }
                                    }), l
                                }
                                return null
                            }
                        }
                    }(),
                    MaskManagerInterface = function() {
                        function t(t, e) {
                            this._mask = t, this._data = e
                        }
                        return Object.defineProperty(t.prototype, "maskPath", {
                                get: function() {
                                    return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop
                                }
                            }), Object.defineProperty(t.prototype, "maskOpacity", {
                                get: function() {
                                    return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v
                                }
                            }),
                            function(e) {
                                var r, i = createSizedArray(e.viewData.length),
                                    n = e.viewData.length;
                                for (r = 0; r < n; r += 1) i[r] = new t(e.viewData[r], e.masksProperties[r]);
                                return function(t) {
                                    for (r = 0; r < n;) {
                                        if (e.masksProperties[r].nm === t) return i[r];
                                        r += 1
                                    }
                                    return null
                                }
                            }
                    }(),
                    ExpressionPropertyInterface = function() {
                        var t = {
                                pv: 0,
                                v: 0,
                                mult: 1
                            },
                            e = {
                                pv: [0, 0, 0],
                                v: [0, 0, 0],
                                mult: 1
                            };

                        function r(t, e, r) {
                            Object.defineProperty(t, "velocity", {
                                get: function() {
                                    return e.getVelocityAtTime(e.comp.currentFrame)
                                }
                            }), t.numKeys = e.keyframes ? e.keyframes.length : 0, t.key = function(i) {
                                if (!t.numKeys) return 0;
                                var n = "";
                                n = "s" in e.keyframes[i - 1] ? e.keyframes[i - 1].s : "e" in e.keyframes[i - 2] ? e.keyframes[i - 2].e : e.keyframes[i - 2].s;
                                var a = "unidimensional" === r ? new Number(n) : Object.assign({}, n);
                                return a.time = e.keyframes[i - 1].t / e.elem.comp.globalData.frameRate, a.value = "unidimensional" === r ? n[0] : n, a
                            }, t.valueAtTime = e.getValueAtTime, t.speedAtTime = e.getSpeedAtTime, t.velocityAtTime = e.getVelocityAtTime, t.propertyGroup = e.propertyGroup
                        }

                        function i() {
                            return t
                        }
                        return function(n) {
                            return n ? "unidimensional" === n.propType ? function(e) {
                                e && "pv" in e || (e = t);
                                var i = 1 / e.mult,
                                    n = e.pv * i,
                                    a = new Number(n);
                                return a.value = n, r(a, e, "unidimensional"),
                                    function() {
                                        return e.k && e.getValue(), n = e.v * i, a.value !== n && ((a = new Number(n)).value = n, r(a, e, "unidimensional")), a
                                    }
                            }(n) : function(t) {
                                t && "pv" in t || (t = e);
                                var i = 1 / t.mult,
                                    n = t.data && t.data.l || t.pv.length,
                                    a = createTypedArray("float32", n),
                                    s = createTypedArray("float32", n);
                                return a.value = s, r(a, t, "multidimensional"),
                                    function() {
                                        t.k && t.getValue();
                                        for (var e = 0; e < n; e += 1) s[e] = t.v[e] * i, a[e] = s[e];
                                        return a
                                    }
                            }(n) : i
                        }
                    }(),
                    TextExpressionSelectorPropFactory = function() {
                        function t(t, e) {
                            return this.textIndex = t + 1, this.textTotal = e, this.v = this.getValue() * this.mult, this.v
                        }
                        return function(e, r) {
                            this.pv = 1, this.comp = e.comp, this.elem = e, this.mult = .01, this.propType = "textSelector", this.textTotal = r.totalChars, this.selectorValue = 100, this.lastValue = [1, 1, 1], this.k = !0, this.x = !0, this.getValue = ExpressionManager.initiateExpression.bind(this)(e, r, this), this.getMult = t, this.getVelocityAtTime = expressionHelpers.getVelocityAtTime, this.kf ? this.getValueAtTime = expressionHelpers.getValueAtTime.bind(this) : this.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(this), this.setGroupProperty = expressionHelpers.setGroupProperty
                        }
                    }(),
                    propertyGetTextProp = TextSelectorProp.getTextSelectorProp;

                function SliderEffect(t, e, r) {
                    this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
                }

                function AngleEffect(t, e, r) {
                    this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
                }

                function ColorEffect(t, e, r) {
                    this.p = PropertyFactory.getProp(e, t.v, 1, 0, r)
                }

                function PointEffect(t, e, r) {
                    this.p = PropertyFactory.getProp(e, t.v, 1, 0, r)
                }

                function LayerIndexEffect(t, e, r) {
                    this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
                }

                function MaskIndexEffect(t, e, r) {
                    this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
                }

                function CheckboxEffect(t, e, r) {
                    this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
                }

                function NoValueEffect() {
                    this.p = {}
                }

                function EffectsManager(t, e) {
                    var r, i = t.ef || [];
                    this.effectElements = [];
                    var n, a = i.length;
                    for (r = 0; r < a; r += 1) n = new GroupEffect(i[r], e), this.effectElements.push(n)
                }

                function GroupEffect(t, e) {
                    this.init(t, e)
                }
                TextSelectorProp.getTextSelectorProp = function(t, e, r) {
                    return 1 === e.t ? new TextExpressionSelectorPropFactory(t, e, r) : propertyGetTextProp(t, e, r)
                }, extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(t, e) {
                    var r;
                    this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
                    var i, n = this.data.ef.length,
                        a = this.data.ef;
                    for (r = 0; r < n; r += 1) {
                        switch (i = null, a[r].ty) {
                            case 0:
                                i = new SliderEffect(a[r], e, this);
                                break;
                            case 1:
                                i = new AngleEffect(a[r], e, this);
                                break;
                            case 2:
                                i = new ColorEffect(a[r], e, this);
                                break;
                            case 3:
                                i = new PointEffect(a[r], e, this);
                                break;
                            case 4:
                            case 7:
                                i = new CheckboxEffect(a[r], e, this);
                                break;
                            case 10:
                                i = new LayerIndexEffect(a[r], e, this);
                                break;
                            case 11:
                                i = new MaskIndexEffect(a[r], e, this);
                                break;
                            case 5:
                                i = new EffectsManager(a[r], e, this);
                                break;
                            default:
                                i = new NoValueEffect(a[r], e, this)
                        }
                        i && this.effectElements.push(i)
                    }
                };
                var lottie = {};

                function setLocationHref(t) {
                    locationHref = t
                }

                function searchAnimations() {
                    !0 === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations()
                }

                function setSubframeRendering(t) {
                    subframeEnabled = t
                }

                function setIDPrefix(t) {
                    idPrefix = t
                }

                function loadAnimation(t) {
                    return !0 === standalone && (t.animationData = JSON.parse(animationData)), animationManager.loadAnimation(t)
                }

                function setQuality(t) {
                    if ("string" === typeof t) switch (t) {
                        case "high":
                            defaultCurveSegments = 200;
                            break;
                        default:
                        case "medium":
                            defaultCurveSegments = 50;
                            break;
                        case "low":
                            defaultCurveSegments = 10
                    } else !isNaN(t) && t > 1 && (defaultCurveSegments = t);
                    roundValues(!(defaultCurveSegments >= 50))
                }

                function inBrowser() {
                    return "undefined" !== typeof navigator
                }

                function installPlugin(t, e) {
                    "expressions" === t && (expressionsPlugin = e)
                }

                function getFactory(t) {
                    switch (t) {
                        case "propertyFactory":
                            return PropertyFactory;
                        case "shapePropertyFactory":
                            return ShapePropertyFactory;
                        case "matrix":
                            return Matrix;
                        default:
                            return null
                    }
                }

                function checkReady() {
                    "complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations())
                }

                function getQueryVariable(t) {
                    for (var e = queryString.split("&"), r = 0; r < e.length; r += 1) {
                        var i = e[r].split("=");
                        if (decodeURIComponent(i[0]) == t) return decodeURIComponent(i[1])
                    }
                    return null
                }
                lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocationHref, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.useWebWorker = function(t) {
                    _useWebWorker = t
                }, lottie.setIDPrefix = setIDPrefix, lottie.__getFactory = getFactory, lottie.version = "5.8.1";
                var standalone = "__[STANDALONE]__",
                    animationData = "__[ANIMATIONDATA]__",
                    renderer = "",
                    queryString;
                if (standalone) {
                    var scripts = document.getElementsByTagName("script"),
                        index = scripts.length - 1,
                        myScript = scripts[index] || {
                            src: ""
                        };
                    queryString = myScript.src.replace(/^[^\?]+\??/, ""), renderer = getQueryVariable("renderer")
                }
                var readyStateCheckInterval = setInterval(checkReady, 100);
                return lottie
            }, void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = function() {
                return factory(root)
            }.call(exports, __webpack_require__, exports, module)) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
        },
        8940: function(t, e, r) {
            "use strict";
            r.d(e, {
                o: function() {
                    return s
                }
            });
            var i = r(7294);

            function n(t) {
                let e;
                const r = new Set,
                    i = (t, i) => {
                        const n = "function" === typeof t ? t(e) : t;
                        if (n !== e) {
                            const t = e;
                            e = i ? n : Object.assign({}, e, n), r.forEach((r => r(e, t)))
                        }
                    },
                    n = () => e,
                    a = {
                        setState: i,
                        getState: n,
                        subscribe: (t, i, a) => i || a ? ((t, i = n, a = Object.is) => {
                            console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");
                            let s = i(e);

                            function o() {
                                const r = i(e);
                                if (!a(s, r)) {
                                    const e = s;
                                    t(s = r, e)
                                }
                            }
                            return r.add(o), () => r.delete(o)
                        })(t, i, a) : (r.add(t), () => r.delete(t)),
                        destroy: () => r.clear()
                    };
                return e = t(i, n, a), a
            }
            const a = "undefined" === typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent) ? i.useEffect : i.useLayoutEffect;
            var s = function(t) {
                const e = "function" === typeof t ? n(t) : t,
                    r = (t = e.getState, r = Object.is) => {
                        const [, n] = (0, i.useReducer)((t => t + 1), 0), s = e.getState(), o = (0, i.useRef)(s), l = (0, i.useRef)(t), h = (0, i.useRef)(r), p = (0, i.useRef)(!1), c = (0, i.useRef)();
                        let u;
                        void 0 === c.current && (c.current = t(s));
                        let f = !1;
                        (o.current !== s || l.current !== t || h.current !== r || p.current) && (u = t(s), f = !r(c.current, u)), a((() => {
                            f && (c.current = u), o.current = s, l.current = t, h.current = r, p.current = !1
                        }));
                        const d = (0, i.useRef)(s);
                        a((() => {
                            const t = () => {
                                    try {
                                        const t = e.getState(),
                                            r = l.current(t);
                                        h.current(c.current, r) || (o.current = t, c.current = r, n())
                                    } catch (t) {
                                        p.current = !0, n()
                                    }
                                },
                                r = e.subscribe(t);
                            return e.getState() !== d.current && t(), r
                        }), []);
                        const m = f ? u : c.current;
                        return (0, i.useDebugValue)(m), m
                    };
                return Object.assign(r, e), r[Symbol.iterator] = function() {
                    console.warn("[useStore, api] = create() is deprecated and will be removed in v4");
                    const t = [r, e];
                    return {
                        next() {
                            const e = t.length <= 0;
                            return {
                                value: t.shift(),
                                done: e
                            }
                        }
                    }
                }, r
            }((function(t) {
                return {
                    hover: !1,
                    setHovered: function(e) {
                        return t((function(t) {
                            return {
                                hover: e
                            }
                        }))
                    },
                    showHero: !1,
                    setShowHero: function() {
                        return t((function(t) {
                            return {
                                hover: t.showHero = !t.showHero
                            }
                        }))
                    },
                    swipeProgress: {
                        value: 50
                    },
                    setSwipeProgress: function(e) {
                        return t((function(t) {
                            return {
                                swipeProgress: {
                                    value: e
                                }
                            }
                        }))
                    },
                    heroOpacity: 1,
                    setHeroOpacity: function(e) {
                        return t((function(t) {
                            return {
                                heroOpacity: {
                                    value: e
                                }
                            }
                        }))
                    },
                    currentPage: "",
                    setCurrentPage: function(e) {
                        return t((function(t) {
                            return {
                                currentPage: e
                            }
                        }))
                    },
                    faqOpacity: 1,
                    setFaqOpacity: function(e) {
                        return t((function(t) {
                            return {
                                faqOpacity: {
                                    value: e
                                }
                            }
                        }))
                    },
                    mhsOpacity: 1,
                    setMhsOpacity: function(e) {
                        return t((function(t) {
                            return {
                                mhsOpacity: {
                                    value: e
                                }
                            }
                        }))
                    },
                    buyOpacity: 1,
                    setBuyOpacity: function(e) {
                        return t((function(t) {
                            return {
                                buyOpacity: {
                                    value: e
                                }
                            }
                        }))
                    },
                    aaaOpacity: 1,
                    setAAAOpacity: function(e) {
                        return t((function(t) {
                            return {
                                aaaOpacity: {
                                    value: e
                                }
                            }
                        }))
                    },
                    postsY: 0,
                    setPostsY: function(e) {
                        return t((function(t) {
                            return {
                                postsY: {
                                    value: e
                                }
                            }
                        }))
                    },
                    allPosts: [],
                    filteredPosts: [],
                    setAllPosts: function(e) {
                        return t((function(t) {
                            return {
                                allPosts: e
                            }
                        }))
                    },
                    setFilteredPosts: function(e) {
                        return t((function(t) {
                            return {
                                filteredPosts: e
                            }
                        }))
                    },
                    tabbedPost: "",
                    setTabbedPost: function(e) {
                        return t((function(t) {
                            return {
                                tabbedPost: e
                            }
                        }))
                    },
                    currentFilter: "All",
                    setCurrentFilter: function(e) {
                        return t((function(t) {
                            return {
                                currentFilter: e
                            }
                        }))
                    },
                    offSet: 0,
                    setOffSet: function(e) {
                        return t((function(t) {
                            return {
                                offSet: e
                            }
                        }))
                    },
                    howlerHome: "",
                    setHowlerHome: function(e) {
                        return t((function(t) {
                            return {
                                howlerHome: e
                            }
                        }))
                    },
                    howlerOther: "",
                    setHowlerOther: function(e) {
                        return t((function(t) {
                            return {
                                howlerOther: e
                            }
                        }))
                    },
                    audioFile: "/hellblade-home.mp3",
                    setAudioFile: function(e) {
                        return t((function(t) {
                            return {
                                audioFile: e
                            }
                        }))
                    },
                    playingHomeAudio: !1,
                    setPlayingHomeAudio: function(e) {
                        return t((function(t) {
                            return {
                                playingHomeAudio: e
                            }
                        }))
                    },
                    playingOtherAudio: !1,
                    setPlayingOtherAudio: function(e) {
                        return t((function(t) {
                            return {
                                playingOtherAudio: e
                            }
                        }))
                    }
                }
            }))
        },
        8098: function(t, e, r) {
            "use strict";
            r.d(e, {
                yf: function() {
                    return i
                },
                cx: function() {
                    return n
                },
                IQ: function() {
                    return a
                }
            });
            var i = "Vespera | games's Secret ",
                n = [{
                    label: "Gallery",
                    url: "/gallery"
                }, {
                    label: "FAQ",
                    url: "/faq"
                }, {
                    label: "About vespera",
                    url: "/the-independent-aaa-proposition"
                }, {
                    label: " Blog",
                    url: "/posts"
                }, {
                    label: " Support",
                    url: "/mental-health-support"
                }, {
                    label: "Market",
                    url: "https://www.facebook.com/profile.php?id=100087548769022&mibextid=ZbWKwL",
                    passHref: !0
                }, {
                    label: "",
                    url: "/buy"
                }],
                a = [{
                    title: "Privacy and Cookies",
                    passHref: !0,
                    url: "https://go.microsoft.com/fwlink/?LinkId=521839"
                }, {
                    title: "Trademarks",
                    passHref: !0,
                    url: "https://www.microsoft.com/trademarks"
                }, {
                    title: "Terms of Use",
                    passHref: !0,
                    url: "https://www.microsoft.com/servicesagreement/"
                }, {
                    title: "Code of Conduct",
                    passHref: !0,
                    url: "https://www.xbox.com/en-US/Legal/CodeOfConduct"
                }]
        },
        6666: function(t, e, r) {
            "use strict";
            r.d(e, {
                p: function() {
                    return a
                },
                u: function() {
                    return s
                }
            });
            var i = r(7484),
                n = r.n(i),
                a = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "DD MMM YYYY";
                    return n()(t).format(e)
                },
                s = function(t) {
                    return "/" === t ? "home" : t.replace(/\//g, "").replace("[", "-").replace("]", "")
                }
        },
        2167: function(t, e, r) {
            "use strict";
            var i = r(3848);
            e.default = void 0;
            var n, a = (n = r(7294)) && n.__esModule ? n : {
                    default: n
                },
                s = r(1063),
                o = r(4651),
                l = r(7426);
            var h = {};

            function p(t, e, r, i) {
                if (t && s.isLocalURL(e)) {
                    t.prefetch(e, r, i).catch((function(t) {
                        0
                    }));
                    var n = i && "undefined" !== typeof i.locale ? i.locale : t && t.locale;
                    h[e + "%" + r + (n ? "%" + n : "")] = !0
                }
            }
            var c = function(t) {
                var e, r = !1 !== t.prefetch,
                    n = o.useRouter(),
                    c = a.default.useMemo((function() {
                        var e = s.resolveHref(n, t.href, !0),
                            r = i(e, 2),
                            a = r[0],
                            o = r[1];
                        return {
                            href: a,
                            as: t.as ? s.resolveHref(n, t.as) : o || a
                        }
                    }), [n, t.href, t.as]),
                    u = c.href,
                    f = c.as,
                    d = t.children,
                    m = t.replace,
                    y = t.shallow,
                    g = t.scroll,
                    v = t.locale;
                "string" === typeof d && (d = a.default.createElement("a", null, d));
                var _ = (e = a.default.Children.only(d)) && "object" === typeof e && e.ref,
                    b = l.useIntersection({
                        rootMargin: "200px"
                    }),
                    x = i(b, 2),
                    P = x[0],
                    S = x[1],
                    A = a.default.useCallback((function(t) {
                        P(t), _ && ("function" === typeof _ ? _(t) : "object" === typeof _ && (_.current = t))
                    }), [_, P]);
                a.default.useEffect((function() {
                    var t = S && r && s.isLocalURL(u),
                        e = "undefined" !== typeof v ? v : n && n.locale,
                        i = h[u + "%" + f + (e ? "%" + e : "")];
                    t && !i && p(n, u, f, {
                        locale: e
                    })
                }), [f, u, S, v, r, n]);
                var E = {
                    ref: A,
                    onClick: function(t) {
                        e.props && "function" === typeof e.props.onClick && e.props.onClick(t), t.defaultPrevented || function(t, e, r, i, n, a, o, l) {
                            ("A" !== t.currentTarget.nodeName || ! function(t) {
                                var e = t.currentTarget.target;
                                return e && "_self" !== e || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which
                            }(t) && s.isLocalURL(r)) && (t.preventDefault(), null == o && i.indexOf("#") >= 0 && (o = !1), e[n ? "replace" : "push"](r, i, {
                                shallow: a,
                                locale: l,
                                scroll: o
                            }))
                        }(t, n, u, f, m, y, g, v)
                    },
                    onMouseEnter: function(t) {
                        s.isLocalURL(u) && (e.props && "function" === typeof e.props.onMouseEnter && e.props.onMouseEnter(t), p(n, u, f, {
                            priority: !0
                        }))
                    }
                };
                if (t.passHref || "a" === e.type && !("href" in e.props)) {
                    var w = "undefined" !== typeof v ? v : n && n.locale,
                        k = n && n.isLocaleDomain && s.getDomainLocale(f, w, n && n.locales, n && n.domainLocales);
                    E.href = k || s.addBasePath(s.addLocale(f, w, n && n.defaultLocale))
                }
                return a.default.cloneElement(e, E)
            };
            e.default = c
        },
        7426: function(t, e, r) {
            "use strict";
            var i = r(3848);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.useIntersection = function(t) {
                var e = t.rootMargin,
                    r = t.disabled || !s,
                    l = n.useRef(),
                    h = n.useState(!1),
                    p = i(h, 2),
                    c = p[0],
                    u = p[1],
                    f = n.useCallback((function(t) {
                        l.current && (l.current(), l.current = void 0), r || c || t && t.tagName && (l.current = function(t, e, r) {
                            var i = function(t) {
                                    var e = t.rootMargin || "",
                                        r = o.get(e);
                                    if (r) return r;
                                    var i = new Map,
                                        n = new IntersectionObserver((function(t) {
                                            t.forEach((function(t) {
                                                var e = i.get(t.target),
                                                    r = t.isIntersecting || t.intersectionRatio > 0;
                                                e && r && e(r)
                                            }))
                                        }), t);
                                    return o.set(e, r = {
                                        id: e,
                                        observer: n,
                                        elements: i
                                    }), r
                                }(r),
                                n = i.id,
                                a = i.observer,
                                s = i.elements;
                            return s.set(t, e), a.observe(t),
                                function() {
                                    s.delete(t), a.unobserve(t), 0 === s.size && (a.disconnect(), o.delete(n))
                                }
                        }(t, (function(t) {
                            return t && u(t)
                        }), {
                            rootMargin: e
                        }))
                    }), [r, e, c]);
                return n.useEffect((function() {
                    if (!s && !c) {
                        var t = a.requestIdleCallback((function() {
                            return u(!0)
                        }));
                        return function() {
                            return a.cancelIdleCallback(t)
                        }
                    }
                }), [c]), [f, c]
            };
            var n = r(7294),
                a = r(3447),
                s = "undefined" !== typeof IntersectionObserver;
            var o = new Map
        },
        8771: function(t, e, r) {
            "use strict";
            var i = r(1682);

            function n(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, i)
                }
                return r
            }

            function a(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? n(Object(r), !0).forEach((function(e) {
                        i(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }
            e.default = function(t, e) {
                var r = s.default,
                    i = {
                        loading: function(t) {
                            t.error, t.isLoading;
                            return t.pastDelay, null
                        }
                    };
                t instanceof Promise ? i.loader = function() {
                    return t
                } : "function" === typeof t ? i.loader = t : "object" === typeof t && (i = a(a({}, i), t));
                var n = i = a(a({}, i), e);
                if (n.suspense) throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");
                if (n.suspense) return r(n);
                i.loadableGenerated && delete(i = a(a({}, i), i.loadableGenerated)).loadableGenerated;
                if ("boolean" === typeof i.ssr) {
                    if (!i.ssr) return delete i.ssr, l(r, i);
                    delete i.ssr
                }
                return r(i)
            };
            o(r(7294));
            var s = o(r(4860));

            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function l(t, e) {
                return delete e.webpack, delete e.modules, t(e)
            }
        },
        1083: function(t, e, r) {
            "use strict";
            var i;
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.LoadableContext = void 0;
            var n = ((i = r(7294)) && i.__esModule ? i : {
                default: i
            }).default.createContext(null);
            e.LoadableContext = n
        },
        4860: function(t, e, r) {
            "use strict";
            var i = r(2553),
                n = r(2012),
                a = r(1682);

            function s(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, i)
                }
                return r
            }

            function o(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? s(Object(r), !0).forEach((function(e) {
                        a(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function l(t, e) {
                var r = "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!r) {
                    if (Array.isArray(t) || (r = function(t, e) {
                            if (!t) return;
                            if ("string" === typeof t) return h(t, e);
                            var r = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === r && t.constructor && (r = t.constructor.name);
                            if ("Map" === r || "Set" === r) return Array.from(t);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return h(t, e)
                        }(t)) || e && t && "number" === typeof t.length) {
                        r && (t = r);
                        var i = 0,
                            n = function() {};
                        return {
                            s: n,
                            n: function() {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: n
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var a, s = !0,
                    o = !1;
                return {
                    s: function() {
                        r = r.call(t)
                    },
                    n: function() {
                        var t = r.next();
                        return s = t.done, t
                    },
                    e: function(t) {
                        o = !0, a = t
                    },
                    f: function() {
                        try {
                            s || null == r.return || r.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                }
            }

            function h(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, i = new Array(e); r < e; r++) i[r] = t[r];
                return i
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var p, c = (p = r(7294)) && p.__esModule ? p : {
                    default: p
                },
                u = r(7161),
                f = r(1083);
            var d = [],
                m = [],
                y = !1;

            function g(t) {
                var e = t(),
                    r = {
                        loading: !0,
                        loaded: null,
                        error: null
                    };
                return r.promise = e.then((function(t) {
                    return r.loading = !1, r.loaded = t, t
                })).catch((function(t) {
                    throw r.loading = !1, r.error = t, t
                })), r
            }
            var v = function() {
                function t(e, r) {
                    i(this, t), this._loadFn = e, this._opts = r, this._callbacks = new Set, this._delay = null, this._timeout = null, this.retry()
                }
                return n(t, [{
                    key: "promise",
                    value: function() {
                        return this._res.promise
                    }
                }, {
                    key: "retry",
                    value: function() {
                        var t = this;
                        this._clearTimeouts(), this._res = this._loadFn(this._opts.loader), this._state = {
                            pastDelay: !1,
                            timedOut: !1
                        };
                        var e = this._res,
                            r = this._opts;
                        e.loading && ("number" === typeof r.delay && (0 === r.delay ? this._state.pastDelay = !0 : this._delay = setTimeout((function() {
                            t._update({
                                pastDelay: !0
                            })
                        }), r.delay)), "number" === typeof r.timeout && (this._timeout = setTimeout((function() {
                            t._update({
                                timedOut: !0
                            })
                        }), r.timeout))), this._res.promise.then((function() {
                            t._update({}), t._clearTimeouts()
                        })).catch((function(e) {
                            t._update({}), t._clearTimeouts()
                        })), this._update({})
                    }
                }, {
                    key: "_update",
                    value: function(t) {
                        this._state = o(o({}, this._state), {}, {
                            error: this._res.error,
                            loaded: this._res.loaded,
                            loading: this._res.loading
                        }, t), this._callbacks.forEach((function(t) {
                            return t()
                        }))
                    }
                }, {
                    key: "_clearTimeouts",
                    value: function() {
                        clearTimeout(this._delay), clearTimeout(this._timeout)
                    }
                }, {
                    key: "getCurrentValue",
                    value: function() {
                        return this._state
                    }
                }, {
                    key: "subscribe",
                    value: function(t) {
                        var e = this;
                        return this._callbacks.add(t),
                            function() {
                                e._callbacks.delete(t)
                            }
                    }
                }]), t
            }();

            function _(t) {
                return function(t, e) {
                    var r = Object.assign({
                        loader: null,
                        loading: null,
                        delay: 200,
                        timeout: null,
                        webpack: null,
                        modules: null,
                        suspense: !1
                    }, e);
                    r.suspense && (r.lazy = c.default.lazy(r.loader));
                    var i = null;

                    function n() {
                        if (!i) {
                            var e = new v(t, r);
                            i = {
                                getCurrentValue: e.getCurrentValue.bind(e),
                                subscribe: e.subscribe.bind(e),
                                retry: e.retry.bind(e),
                                promise: e.promise.bind(e)
                            }
                        }
                        return i.promise()
                    }
                    if (!y && "function" === typeof r.webpack && !r.suspense) {
                        var a = r.webpack();
                        m.push((function(t) {
                            var e, r = l(a);
                            try {
                                for (r.s(); !(e = r.n()).done;) {
                                    var i = e.value;
                                    if (-1 !== t.indexOf(i)) return n()
                                }
                            } catch (s) {
                                r.e(s)
                            } finally {
                                r.f()
                            }
                        }))
                    }
                    var s = r.suspense ? function(t, e) {
                        return c.default.createElement(r.lazy, o(o({}, t), {}, {
                            ref: e
                        }))
                    } : function(t, e) {
                        n();
                        var a = c.default.useContext(f.LoadableContext),
                            s = u.useSubscription(i);
                        return c.default.useImperativeHandle(e, (function() {
                            return {
                                retry: i.retry
                            }
                        }), []), a && Array.isArray(r.modules) && r.modules.forEach((function(t) {
                            a(t)
                        })), c.default.useMemo((function() {
                            return s.loading || s.error ? c.default.createElement(r.loading, {
                                isLoading: s.loading,
                                pastDelay: s.pastDelay,
                                timedOut: s.timedOut,
                                error: s.error,
                                retry: i.retry
                            }) : s.loaded ? c.default.createElement(function(t) {
                                return t && t.__esModule ? t.default : t
                            }(s.loaded), t) : null
                        }), [t, s])
                    };
                    return s.preload = function() {
                        return !r.suspense && n()
                    }, s.displayName = "LoadableComponent", c.default.forwardRef(s)
                }(g, t)
            }

            function b(t, e) {
                for (var r = []; t.length;) {
                    var i = t.pop();
                    r.push(i(e))
                }
                return Promise.all(r).then((function() {
                    if (t.length) return b(t, e)
                }))
            }
            _.preloadAll = function() {
                return new Promise((function(t, e) {
                    b(d).then(t, e)
                }))
            }, _.preloadReady = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return new Promise((function(e) {
                    var r = function() {
                        return y = !0, e()
                    };
                    b(m, t).then(r, r)
                }))
            }, window.__NEXT_PRELOADREADY = _.preloadReady;
            var x = _;
            e.default = x
        },
        8450: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                default: function() {
                    return F
                }
            });
            var i = r(2809),
                n = (r(5210), r(7294)),
                a = r(1664),
                s = r(1163),
                o = r(8940),
                l = r(5893),
                h = function(t) {
                    var e = t.label,
                        r = t.url,
                        i = t.passHref,
                        n = t.className,
                        h = !!(0, s.useRouter)().pathname.includes(r),
                        p = (0, o.o)((function(t) {
                            return t.setHovered
                        }));
                    return (0, l.jsx)(a.default, {
                        href: r,
                        passHref: i,
                        children: (0, l.jsx)("a", {
                            onMouseEnter: function() {
                                return p(!0)
                            },
                            onMouseLeave: function() {
                                return p(!1)
                            },
                            className: "".concat(h ? "text-white" : "text-hellblade-light-grey", " focus:outline-none focus:ring-1 uppercase font-proxima-nova-extra-condensed font-2xl font-bold  hover:text-white md:text-lg  ").concat(n),
                            children: e
                        })
                    })
                },
                p = r(8098),
                c = r(9260),
                u = r.n(c),
                f = JSON.parse('{"v":"5.7.6","fr":30,"ip":0,"op":93,"w":100,"h":100,"nm":"hellblade-burger","ddd":0,"assets":[{"id":"image_0","w":24,"h":9,"u":"/burger/","p":"img_0.png","e":0},{"id":"image_1","w":24,"h":9,"u":"/burger/","p":"img_1.png","e":0},{"id":"image_2","w":24,"h":9,"u":"/burger/","p":"img_2.png","e":0},{"id":"image_3","w":1239,"h":1547,"u":"/burger/","p":"img_3.jpg","e":0}],"layers":[{"ddd":0,"ind":1,"ty":2,"nm":"line1.png","cl":"png","refId":"image_0","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":25,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":27,"s":[100]},{"t":38,"s":[100],"h":1}],"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.4],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":48,"s":[0]},{"i":{"x":[0.4],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":65,"s":[0]},{"t":74,"s":[-45]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.25,"y":1},"o":{"x":0.167,"y":0.167},"t":25,"s":[50,40,0],"to":[0,0.417,0],"ti":[0,-0.417,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":37,"s":[50,42.5,0],"to":[0,0.417,0],"ti":[0,0,0]},{"t":38,"s":[50,42.5,0],"h":1},{"t":48,"s":[50,42.5,0],"h":1},{"i":{"x":0.4,"y":1},"o":{"x":0.167,"y":0.167},"t":65,"s":[50,42.5,0],"to":[0,0,0],"ti":[0,0,0]},{"t":74,"s":[50,50.25,0]}],"ix":2,"l":2},"a":{"a":0,"k":[12,4.5,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":25,"op":93,"st":25,"bm":0},{"ddd":0,"ind":2,"ty":2,"nm":"line2.png","cl":"png","refId":"image_1","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":20,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":22,"s":[100]},{"t":38,"s":[100],"h":1},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":67,"s":[100]},{"t":70,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.25,"y":1},"o":{"x":0.167,"y":0.167},"t":20,"s":[50,47.5,0],"to":[0,0.417,0],"ti":[0,-0.417,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":32,"s":[50,50,0],"to":[0,0.417,0],"ti":[0,0,0]},{"t":38,"s":[50,50,0],"h":1},{"t":48,"s":[50,50,0],"h":1}],"ix":2,"l":2},"a":{"a":0,"k":[12,4.5,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.4,0.4,0.4],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0]},"t":65,"s":[100,100,100]},{"t":69,"s":[20,20,100]}],"ix":6,"l":2}},"ao":0,"ip":20,"op":93,"st":20,"bm":0},{"ddd":0,"ind":3,"ty":2,"nm":"line3.png","cl":"png","refId":"image_2","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":15,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":17,"s":[100]},{"t":38,"s":[100],"h":1}],"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.4],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":48,"s":[0]},{"i":{"x":[0.4],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":65,"s":[0]},{"t":74,"s":[45]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.25,"y":1},"o":{"x":0.167,"y":0.167},"t":15,"s":[50,55,0],"to":[0,0.417,0],"ti":[0,-0.417,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":27,"s":[50,57.5,0],"to":[0,0.417,0],"ti":[0,0,0]},{"t":38,"s":[50,57.5,0],"h":1},{"t":48,"s":[50,57.5,0],"h":1},{"i":{"x":0.4,"y":1},"o":{"x":0.167,"y":0.167},"t":65,"s":[50,57.5,0],"to":[0,0,0],"ti":[0,0,0]},{"t":74,"s":[50.5,50.75,0]}],"ix":2,"l":2},"a":{"a":0,"k":[12,4.5,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":15,"op":93,"st":15,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Inner","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[50,50,0],"ix":2,"l":2},"a":{"a":0,"k":[-3.3,-5.55,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":48,"s":[100,100,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":51,"s":[120,120,100]},{"i":{"x":[0.572,0.572,0.572],"y":[0.382,0.382,0.844]},"o":{"x":[0.222,0.222,0.222],"y":[0,0,0]},"t":58,"s":[110,110,100]},{"t":59,"s":[109.049,109.049,100],"h":1},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":68,"s":[110,110,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":71,"s":[120,120,100]},{"i":{"x":[0.833,0.833,0.833],"y":[1,1,1]},"o":{"x":[0.222,0.222,0.222],"y":[0,0,0]},"t":78,"s":[100,100,100]},{"t":79,"s":[100,100,100],"h":1},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":83,"s":[100,100,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":86,"s":[120,120,100]},{"t":93,"s":[110,110,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[40,40],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.352941185236,0.352941185236,0.352941185236,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[-3.3,-5.55],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":10,"s":[0]},{"t":32,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":93,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":2,"nm":"grunge-003-bw-texture.png","cl":"png","td":1,"refId":"image_3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[443.25,103.75,0],"ix":2,"l":2},"a":{"a":0,"k":[619.5,773.5,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":93,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"Outer","tt":3,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[50,50,0],"ix":2,"l":2},"a":{"a":0,"k":[-3.3,-5.55,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":45,"s":[100,100,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":48,"s":[120,120,100]},{"i":{"x":[0.833,0.833,0.833],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":55,"s":[110,110,100]},{"t":56,"s":[110,110,100],"h":1},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":65,"s":[110,110,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":68,"s":[120,120,100]},{"i":{"x":[0.833,0.833,0.833],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":75,"s":[100,100,100]},{"t":79,"s":[100,100,100],"h":1},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":80,"s":[100,100,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":83,"s":[120,120,100]},{"t":90,"s":[110,110,100]}],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[50,50],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.352941185236,0.352941185236,0.352941185236,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1.5,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[-3.3,-5.55],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[100]},{"t":30,"s":[0]}],"ix":1},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":93,"st":0,"bm":0}],"markers":[]}'),
                d = n.forwardRef((function(t, e) {
                    var r = t.open,
                        i = t.onClick,
                        a = t.className,
                        s = (0, n.useRef)(),
                        h = (0, o.o)((function(t) {
                            return t.setHovered
                        }));
                    return (0, n.useEffect)((function() {
                        s.current.playSegments([0, 44], !0)
                    }), []), (0, l.jsx)("button", {
                        ref: e,
                        onClick: function() {
                            i(), document.body.classList.toggle("overflow-hidden"), r ? s.current.playSegments([78, 60], !0) : s.current.playSegments([60, 78], !0)
                        },
                        onMouseEnter: function() {
                            h(!0), r ? s.current.playSegments([80, 90], !0) : s.current.playSegments([45, 59], !0)
                        },
                        onMouseLeave: function() {
                            h(!1), r ? s.current.playSegments([90, 80], !0) : s.current.playSegments([59, 45], !0)
                        },
                        className: "home-burger focus:outline-none focus:shadow-outline pointer-events-auto ".concat(a),
                        children: (0, l.jsx)(u(), {
                            lottieRef: s,
                            animationData: f,
                            autoplay: !1,
                            loop: !1
                        })
                    })
                }));

            function m(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, i)
                }
                return r
            }

            function y(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? m(Object(r), !0).forEach((function(e) {
                        (0, i.Z)(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : m(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }
            var g = function(t) {
                    var e = t.home,
                        r = t.children,
                        i = (0, n.useState)(!1),
                        s = i[0],
                        o = i[1],
                        c = (0, n.useState)(!1),
                        u = c[0],
                        f = c[1],
                        m = (0, n.useState)(!1),
                        g = m[0],
                        v = m[1],
                        _ = (0, n.useState)(!1),
                        b = _[0],
                        x = _[1],
                        P = (0, n.useState)(!1),
                        S = P[0],
                        A = P[1],
                        E = (p.cx.length, (0, n.useRef)());
                    (0, n.useEffect)((function() {
                        setTimeout((function() {
                            v(!0)
                        }), 2500)
                    }));
                    var w = function() {
                            A(!0), o(!0), f(!0), setTimeout((function() {
                                x(!0)
                            }), 500)
                        },
                        k = function() {
                            o(!1), x(!1), setTimeout((function() {
                                f(!1), A(!1)
                            }), 1e3)
                        };
                    return (0, l.jsx)("header", {
                        className: " ".concat(g ? " translate-y-0" : " -translate-y-full", " transform duration-1000 ease-in-out  fixed top-0 w-full nav-wrapper z-50"),
                        children: (0, l.jsxs)("div", {
                            className: "wrapper lg:flex lg:justify-between items-center",
                            children: [(0, l.jsx)(a.default, {
                                href: "/",
                                children: (0, l.jsx)("a", {
                                    onClick: function() {
                                        s && E.current.click()
                                    },
                                    className: " top-2 lg:top-0 nav-logo relative z-10 focus:outline-none focus:ring-1 transition-opacity duration-200 ".concat(e ? "opacity-0" : "opacity-100"),
                                    children: "Hellblade: Senua's Sacrifice"
                                })
                            }), (0, l.jsx)(d, {
                                className: "lg:hidden absolute right-0 top-0 z-10",
                                open: s,
                                onClick: function() {
                                    s ? k() : w()
                                },
                                ref: E
                            }), (0, l.jsx)("nav", {
                                className: " transform flex  absolute inset-0 h-screen lg:pt-0  lg:px-0 lg:static lg:h-auto  ".concat(u ? "" : " -translate-x-full lg:translate-x-0", "\n          "),
                                children: (0, l.jsxs)("ul", {
                                    className: "bg-black pb-10 pt-28 px-5 lg:px-0 transition duration-500 lg:transition-none lg:bg-transparent lg:pb-0 lg:pt-0 flex-1 flex flex-col justify-between lg:flex-row lg:space-x-8 xl:space-x-10\n              ".concat(S ? "bg-opacity-100 lg:bg-opacity-100" : " bg-opacity-0 lg:bg-opacity-100", "\n              "),
                                    children: [p.cx.map((function(t, e) {
                                        return (0, l.jsx)("li", {
                                            onClick: function() {
                                                s && E.current.click()
                                            },
                                            className: "transition-all duration-500 lg:duration-0 lg:transition-none   ".concat(b ? "  translate-x-0 opacity-100 transform delay-".concat(e, " ") : " -translate-x-".concat(.5 * (e + 1), " opacity-0 transform delay-").concat(p.cx.length - e, " lg:opacity-100")),
                                            children: (0, l.jsx)(h, y({}, t))
                                        }, "item-".concat(e))
                                    })), (0, l.jsx)("li", {
                                        className: "transition-all duration-500 lg:duration-0 lg:transition-none   ".concat(b ? "  translate-x-0 opacity-100 transform delay-".concat(p.cx.length, " ") : " -translate-x-".concat(.5 * (p.cx.length + 1), " opacity-0 transform delay-0 lg:opacity-100")),
                                        children: r
                                    })]
                                })
                            })]
                        })
                    })
                },
                v = function(t) {
                    var e = t.onSubmit,
                        r = (0, n.useState)(!1),
                        i = r[0],
                        a = r[1];
                    return (0, l.jsx)("div", {
                        className: " agegate fixed top-0 left-0 flex justify-center items-center w-full h-screen bg-black- z-10",
                        children: (0, l.jsxs)("form", {
                            onSubmit: function(t) {
                                t.preventDefault(), a(!0), setTimeout((function() {
                                    e()
                                }), 1e3)
                            },
                            className: " ".concat(i ? "out" : "", " flex justify-center flex-col "),
                            children: [(0, l.jsx)("div", {
                                className: "logo",
                                children: "Hellblade: Senua's Sacrifice"
                            }), (0, l.jsxs)("label", {
                                className: "inline-flex items-center justify-center mt-20 mb-10 cursor-pointer",
                                children: [(0, l.jsx)("input", {
                                    type: "checkbox",
                                    required: !0,
                                    className: "checkbox bg-transparent  "
                                }), (0, l.jsx)("span", {
                                    className: "ml-2 text-center font-proxima-nova-extra-condensed font-bold uppercase text-lg leading-title-tight ",
                                    children: "I confirm that I am 16 or older to enter"
                                })]
                            }), (0, l.jsx)("div", {
                                className: "flex justify-center",
                                children: (0, l.jsx)("button", {
                                    className: "focus:outline-none focus:ring-2  focus:ring-gray-300 focus:ring-opacity-50 trajan font-bold border bg-black border-white rounded py-2 px-8 uppercase hover:bg-white hover:text-black transition-all duration-300 hover:border-black ",
                                    children: "Submit"
                                })
                            })]
                        })
                    })
                },
                _ = function() {
                    return (0, l.jsx)("div", {
                        children: (0, l.jsxs)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 1096.38 141.85",
                            className: "fill-current",
                            children: [(0, l.jsxs)("g", {
                                children: [(0, l.jsx)("path", {
                                    fill: "#000000",
                                    style: {
                                        opacity: .4
                                    },
                                    d: "M14.14,70c0-50.89.28-32.56.14-59.91,0-5.5.42-7,1.55-7s3.52,3.1,4.93,4.51c2.12,2.4,23.12,25.09,44.83,48.35C79.54,70.8,94.91,88,99.42,92.65L97.87,21c-.14-9.16-1.13-12.26-5.5-13.39A29.49,29.49,0,0,0,86.31,7c-1.55,0-2-.43-2-1,0-.85,1.13-1,2.82-1,6.35,0,13.11.43,14.66.43S108,5,113.8,5c1.55,0,2.53.14,2.53,1,0,.56-.56.85-1.55,1s-2,.28-3.66.56c-4,.85-4.94,3-4.94,12.69l-.28,82.32c0,9.3-.28,10-1.27,10s-2.82-1.55-10.29-9c-1.55-1.41-21.85-22.13-36.79-38.2C41.2,47.69,25.27,29.92,20.76,24.85l1.83,67.52c.29,11.56,1.7,15.22,5.5,16.35a30.69,30.69,0,0,0,7.05.85c.7,0,1.13.28,1.13.84,0,.85-.85,1.13-2.54,1.13-8,0-13.67-.42-14.94-.42s-7.19.42-13.54.42c-1.4,0-2.25-.14-2.25-1.13,0-.56.42-.84,1.13-.84a20.13,20.13,0,0,0,5.78-.85c3.52-1,4.23-5.07,4.23-17.9Z"
                                }), (0, l.jsx)("path", {
                                    fill: "#000000",
                                    style: {
                                        opacity: .4
                                    },
                                    d: "M152.55,55.58c0-18.61,0-22-.28-25.8s-1.13-5.92-4.09-6.48c-1.41-.28-2.4-.28-3.25-.42s-1.55-.43-1.55-1c0-.71.57-1,2.12-1,4.37,0,12.4.43,12.83.43s8.74-.43,12.68-.43c1.41,0,2.12.28,2.12,1,0,.56-.42.84-1.55,1-.85.14-1.55.14-2.54.28-4.09.56-4.51,2.68-4.79,6.76-.28,3.81-.14,7-.14,25.66V76.72c0,10.86-.14,20.73.56,25.8.56,4.09,1.13,5.64,4.79,6.48a32.08,32.08,0,0,0,5.36.57c1.27.14,1.55.42,1.55,1s-.56,1-2,1c-7.19,0-15.37-.42-16.07-.42-.43,0-8.74.42-12.69.42-1.27,0-2.26-.28-2.26-1,0-.56.57-1,1.84-1a16.45,16.45,0,0,0,3.38-.43c2.4-.56,2.82-3.38,3.24-6.76.71-5.08.71-15.08.71-25.66Z"
                                }), (0, l.jsx)("path", {
                                    fill: "#000000",
                                    style: {
                                        opacity: .4
                                    },
                                    d: "M207.52,25c0-4.37.42-5.78,1.55-5.78S212.45,22,213.44,23C214.71,24.43,234.3,44.44,254,64.6c11,10.71,25.1,25.23,28.76,28.62l-1.55-58.64c-.14-7.62-1-10.15-4.79-11.14a35.68,35.68,0,0,0-5.5-.56c-1.41,0-1.69-.57-1.69-1.13,0-.71,1.13-.85,2.54-.85,6.06,0,12,.43,13.25.43s5.78-.43,11.27-.43c1.55,0,2,.14,2,.85,0,.56-.43,1-1.27,1.13s-2,.14-3.53.42c-3.24.7-4.23,2.11-4.23,10.57L289,104.63c0,7.05-.28,7.76-1.27,7.76s-2.39-1-9.3-7.47c-.56-.29-20.16-19.74-32.42-31.72C231.34,58,217.24,43.32,213.72,39.65l1.83,55.12c.28,9.72,1.13,13.39,4.65,14.23a24.2,24.2,0,0,0,5.78.57c1.13,0,1.69.42,1.69,1,0,.71-.7,1-2.25,1-7.61,0-12.69-.42-13.67-.42s-6.21.42-12.27.42c-1.27,0-2.11-.14-2.11-1,0-.56.56-1,2-1a13.93,13.93,0,0,0,4.37-.57c3.1-1,3.81-4.79,3.81-15.08C207.52,26.68,207.66,48.39,207.52,25Z"
                                }), (0, l.jsx)("path", {
                                    fill: "#000000",
                                    style: {
                                        opacity: .4
                                    },
                                    d: "M342.27,82.5c0,20.3.14,28.2-3.81,37.22-2.54,6.06-8.18,11.7-19.17,19-1.55.84-3.67,2.39-4.93,3-.15.14-.43.14-.85.14s-1-.14-1-.71c0-.84.85-1.12,1.84-1.83a17.77,17.77,0,0,0,3.94-3c8.46-8,12.55-14.1,12.55-46.38V55.58c0-18.61,0-21.85-.28-25.66s-1.55-5.78-5.5-6.76a37.81,37.81,0,0,0-4.23-.28c-.42,0-1-.43-1-.85,0-.85.71-1.13,2.12-1.13,5.92,0,14.09.43,14.52.43s8.88-.43,12.82-.43c1.41,0,2,.28,2,1.13a1.06,1.06,0,0,1-.85.85c-.84,0-1.69.14-3.24.28-3.24.7-4.37,2.82-4.65,6.9-.28,3.81-.28,6.91-.28,25.52Z"
                                }), (0, l.jsx)("path", {
                                    fill: "#000000",
                                    style: {
                                        opacity: .4
                                    },
                                    d: "M392.72,77.15a1.47,1.47,0,0,0-1.4,1.12l-6.21,17.62c-1.41,4-2.39,7.76-2.39,10,0,2.54,1.55,3.67,4.65,3.67h1c1.26,0,1.69.42,1.69,1,0,.71-1.13,1-2.12,1-3.1,0-9.58-.42-11.13-.42s-7.62.42-13.54.42c-1.55,0-2.25-.28-2.25-1,0-.56.56-1,1.69-1a20.06,20.06,0,0,0,2.82-.14c6.06-.57,8.46-5.22,10.85-11.14L404.57,24c1.55-4.08,2-4.79,3-4.79.7,0,1.26.56,2.82,4.51,2,4.65,21.14,53.85,28.61,71.47,4.65,11.14,8.74,13,10.71,13.67a13.4,13.4,0,0,0,4.8.71c1,0,1.69.28,1.69,1s-.57,1-2.12,1-12,0-21.42-.28c-2.68-.14-3.53-.28-3.53-1,0-.42.43-.84,1-1,.56-.29,1.41-1,.56-3.11L419.51,77.85a1.26,1.26,0,0,0-1.13-.7Zm24-4.94c.56,0,.56-.42.42-.84L406,40.21c-.7-2-.84-2-1.55,0L393.85,71.37c-.28.56,0,.84.28.84Z"
                                }), (0, l.jsx)("path", {
                                    fill: "#000000",
                                    style: {
                                        opacity: .4
                                    },
                                    d: "M559.47,70.66c0,13.53,0,24.67.7,30.59.43,4.09,1.27,7.19,5.5,7.75a59.78,59.78,0,0,0,6.34.57c.85,0,1.13.42,1.13.84,0,.71-.7,1.13-2.25,1.13-7.76,0-16.64-.42-17.34-.42s-9.59.42-13.82.42c-1.55,0-2.25-.28-2.25-1.13,0-.42.28-.84,1.13-.84a21.18,21.18,0,0,0,4.23-.57c2.81-.56,3.52-3.66,4.08-7.75.71-5.92.71-17.06.71-30.59V11c-6.91.14-14,.14-20.86.28-8.74.14-12.13,1.12-14.38,4.51A24.39,24.39,0,0,0,510,20.2c-.42,1.13-.84,1.41-1.41,1.41-.42,0-.7-.43-.7-1.27,0-1.41,2.82-13.53,3.1-14.66.28-.85.84-2.68,1.41-2.68,1,0,2.39,1.41,6.2,1.69,4.09.42,9.44.71,11.14.71h52.86a56.59,56.59,0,0,0,10-.71c2.11-.28,3.38-.7,3.94-.7.71,0,.71.84.71,1.69,0,4.23-.43,14-.43,15.5,0,1.27-.42,1.84-1,1.84-.71,0-1-.43-1.13-2.4,0-.56-.14-1-.14-1.55-.42-4.23-3.81-7.47-17.34-7.75-5.92-.14-11.84-.14-17.76-.28Z"
                                }), (0, l.jsx)("path", {
                                    fill: "#000000",
                                    style: {
                                        opacity: .4
                                    },
                                    d: "M689.15,58.68c.42,0,.84,0,.84-.7V55.44c0-18.61,0-21.85-.28-25.66s-.85-5.78-5.5-6.62a27.59,27.59,0,0,0-3.52-.28c-1,0-1.69-.43-1.69-1,0-.85.7-1,2-1,5.92,0,14.24.43,14.8.43s8.46-.43,12.69-.43c1.41,0,2.25.14,2.25,1,0,.42-.42,1-1.55,1a19.38,19.38,0,0,0-2.82.28c-3.8.56-4.37,2.82-4.65,6.76s-.14,7-.14,25.66V76.72c0,11.56,0,20.73.56,25.8.43,3.38,1.13,6.2,4.8,6.62a33.76,33.76,0,0,0,4.93.43c1.13,0,1.83.42,1.83,1,0,.71-.7,1-2.11,1-7,0-15.22-.42-15.93-.42-.56,0-8.74.42-12.55.42-1.41,0-2.11-.28-2.11-1.13,0-.42.42-.84,1.55-.84a12.65,12.65,0,0,0,3.24-.28c2.4-.43,3.1-3.53,3.53-6.77.7-5.07.7-14,.7-25.37V64.6a.81.81,0,0,0-.84-.84H638c-.43,0-.71.14-.71.84V77.15c0,11.41,0,20.58.71,25.65.42,3.1,1.12,5.92,4.79,6.34a37.3,37.3,0,0,0,5.07.43c1,0,1.7.42,1.7,1s-.57,1-1.84,1c-7.19,0-15.5-.42-16.21-.42-.42,0-9,.42-12.68.42-1.41,0-2.26-.28-2.26-1,0-.42.28-1,1.55-1a13.45,13.45,0,0,0,3.38-.43c2.54-.56,3.11-3.24,3.53-6.34.84-5.07.7-14.52.7-26.08V55.86c0-18.61,0-22.27-.28-26.08-.28-3.66-1.27-6.34-5.36-6.76a37.32,37.32,0,0,0-3.8-.29c-1,0-1.55-.42-1.55-.84,0-.85.7-1,2.11-1,6.06,0,12.83.43,14.66.43.57,0,8.74-.43,12.69-.43,1.41,0,2.11.28,2.11,1,0,.56-.56.84-1.41.84a12,12,0,0,0-2.82.29c-3.52.56-4.37,3-4.65,6.9s-.14,6.91-.14,25.52V58c0,.7.42.7.85.7Z"
                                }), (0, l.jsx)("path", {
                                    fill: "#000000",
                                    style: {
                                        opacity: .4
                                    },
                                    d: "M748.48,55.58c0-18.47,0-21.85-.28-25.66s-1.27-5.92-5.36-6.76a23.4,23.4,0,0,0-3.38-.28c-1,0-1.83-.43-1.83-.85,0-.85.7-1.13,2.11-1.13,2.82,0,6.63.28,14.52.43.7,0,25.79,0,28.61-.15a19.94,19.94,0,0,0,5.5-.7,4.34,4.34,0,0,1,1.55-.42c.28,0,.57.28.57,1,0,.85-.85,2.82-1.13,6.35-.14,2.39-.28,4.65-.42,7.33,0,1.27-.29,2.11-1,2.11s-1-.56-1-1.55a13.59,13.59,0,0,0-1-4.51c-.85-2.82-2.12-3.81-9.17-4.23-1.83-.14-15.79-.28-16.07-.28s-.7.28-.7,1.13v32c0,.84.14,1.41.84,1.41,1.7,0,16.07-.15,19-.43,3.25-.14,5.36-.56,6.49-2.11.56-.85,1-1.13,1.55-1.13.28,0,.56.14.56.85s-.56,3.38-1,7.47c-.43,3.94-.43,6.76-.57,8.6-.14,1.12-.42,1.55-1,1.55-.71,0-.85-.85-.85-1.84a15.94,15.94,0,0,0-.42-3.38c-.57-1.83-1.41-3.81-6.77-4.23-3.24-.28-14.66-.56-16.92-.56-.84,0-1,.42-1,1V76.86c0,4.37-.14,16.78,0,19.18.28,5.21,1,7.89,4,9.16,2.11,1,5.49,1.27,10.29,1.27,2.67,0,7.19.14,10.71-.85,4.23-1.27,5.21-4.09,6.34-9.3.28-1.41.71-2,1.27-2,.85,0,.85,1.27.85,2.12s-1.13,9.87-1.55,12.26c-.57,2.82-1.55,3.1-6.21,3.1-9.3,0-13.25-.28-18.18-.28s-11.42-.42-16.63-.42c-3.25,0-5.93.42-9.31.42-1.27,0-2-.28-2-1,0-.56.56-1,1.27-1a10.3,10.3,0,0,0,2.82-.43c2.53-.56,4.23-2.39,4.51-11.13.14-4.79.28-10.57.28-21.29Z"
                                }), (0, l.jsx)("path", {
                                    fill: "#000000",
                                    style: {
                                        opacity: .4
                                    },
                                    d: "M813.3,66c0-18.75,14.52-46.8,49.34-46.8,27.91,0,49.19,16.63,49.19,45,0,26.92-19.87,48.91-49.9,48.91C827.4,113.09,813.3,87.44,813.3,66Zm85.28,1.69c0-28.33-17.48-44.12-36.79-44.12-19.59,0-35.38,12.12-35.38,38.77,0,27.62,15.37,45.95,39.05,45.95C874.9,108.3,898.58,103.51,898.58,67.7Z"
                                }), (0, l.jsx)("path", {
                                    fill: "#000000",
                                    style: {
                                        opacity: .4
                                    },
                                    d: "M935.82,55.58c0-18.61,0-22-.28-25.8s-1.27-5.92-5.64-6.76a23.42,23.42,0,0,0-3.38-.29c-1,0-1.55-.28-1.55-.84s.42-1,1.69-1c6.06,0,14.66.43,14.94.43,1.27,0,10.85-.43,14.8-.43,7.9,0,16.5.71,23.12,5.36A21.38,21.38,0,0,1,988,43.46c0,7.75-3.81,17.62-15,26.64,10.3,12.68,18.75,23.12,25.94,30.59,6.77,6.9,11,8,14.94,8.6,1,.14,4,.28,4.37.28,1.13,0,1.55.42,1.55,1,0,.71-.56,1-2.53,1h-9.87c-6.63,0-9.73-.42-12.83-1.69-5.92-2.54-10.15-8.88-17.48-18.33-5.49-6.76-11.13-14.37-13.53-17.33a2,2,0,0,0-1.69-.85l-14.52-.14c-.56,0-.7.14-.7.7v2c0,11.27,0,21.57.7,26.64.42,3.38.85,6.2,5.5,6.77,1.41.14,3,.28,4.09.28s1.83.42,1.83.84c0,.71-.57,1.13-2,1.13-7.32,0-15.22-.42-15.78-.42-2.26,0-8.46.42-12.27.42-1.41,0-2-.28-2-1.13,0-.42.85-.84,1.69-.84a12.12,12.12,0,0,0,3.1-.28c2.4-.43,3.24-2,3.67-5.36.7-5.08.56-16.63.56-27.21Zm10.86,10a1.76,1.76,0,0,0,.7,1.69c1.83,1,7.47,1.83,12.55,1.83,3,0,6.48-.14,9.44-2.11,4.23-2.68,7-8.88,7-17.9,0-15.37-8.18-23.83-20.72-23.83a37.34,37.34,0,0,0-8.18.71,1.27,1.27,0,0,0-.84,1.27Z"
                                }), (0, l.jsx)("path", {
                                    fill: "#000000",
                                    style: {
                                        opacity: .4
                                    },
                                    d: "M1045.49,80.81c0-6.76-1-9.3-3.1-13-.84-1.55-17.2-28.19-21.56-34.25-3.81-5.36-5.22-7.05-7.19-8.6a11.27,11.27,0,0,0-6.63-2.11c-.84,0-1.55-.43-1.55-1.13,0-.42.56-.85,1.69-.85,2.26,0,13,.43,13.25.43.85,0,5.5-.43,10.72-.43,1.41,0,1.83.43,1.83.85s-.42.84-1.55,1.13c-2,.42-2.26,1.12-2.26,2.25,0,1.41.85,2.82,1.83,4.65,1.84,3.53,20.44,33.41,22.56,36.93,2.25-4.93,18-30.72,20-34.25,2.68-4.65,3.25-5.92,3.25-7.47,0-1.83-1.69-1.83-3.25-2.11-1.12-.15-1.55-.57-1.55-1.13s.29-.85,1.7-.85c3.38,0,6.34.43,8.6.43,1.83,0,10-.43,12.4-.43,1.27,0,1.69.43,1.69.85,0,.7-.7,1.13-1.69,1.13-3,.14-5.07.42-7,1.83s-3,2.68-5.21,5.78c-8.18,11.27-21.85,34.25-24,39.19-1.69,4.37-1.41,7.47-1.41,11.13V91.1c0,1,0,6.2.29,11.28.28,3.38.56,5.78,4.93,6.62a27,27,0,0,0,5.21.57c1.13,0,1.56.42,1.56.84,0,.71-.43,1.13-1.7,1.13-7,0-15.78-.42-16.21-.42s-8.74.42-12.68.42c-1.41,0-2-.42-2-1.13,0-.42.42-.84,1.41-.84a14.7,14.7,0,0,0,3.53-.43c2.39-.42,3.38-3.38,3.66-6.76.42-5.08.42-10.15.42-11.28Z"
                                })]
                            }), (0, l.jsx)("path", {
                                d: "M11.14,67c0-50.89.28-32.56.14-59.91,0-5.5.42-7,1.55-7s3.52,3.1,4.93,4.51c2.12,2.4,23.12,25.09,44.83,48.35C76.54,67.8,91.91,85,96.42,89.65L94.87,18c-.14-9.16-1.13-12.26-5.5-13.39A29.49,29.49,0,0,0,83.31,4c-1.55,0-2-.43-2-1,0-.85,1.13-1,2.82-1,6.35,0,13.11.43,14.66.43S105,2,110.8,2c1.55,0,2.53.14,2.53,1,0,.56-.56.85-1.55,1s-2,.28-3.66.56c-4,.85-4.94,3-4.94,12.69l-.28,82.32c0,9.3-.28,10-1.27,10s-2.82-1.55-10.29-9c-1.55-1.41-21.85-22.13-36.79-38.2C38.2,44.69,22.27,26.92,17.76,21.85l1.83,67.52c.29,11.56,1.7,15.22,5.5,16.35a30.69,30.69,0,0,0,7.05.85c.7,0,1.13.28,1.13.84,0,.85-.85,1.13-2.54,1.13-8,0-13.67-.42-14.94-.42s-7.19.42-13.54.42c-1.4,0-2.25-.14-2.25-1.13,0-.56.42-.84,1.13-.84a20.13,20.13,0,0,0,5.78-.85c3.52-1,4.23-5.07,4.23-17.9Z"
                            }), (0, l.jsx)("path", {
                                d: "M149.55,52.58c0-18.61,0-22-.28-25.8s-1.13-5.92-4.09-6.48c-1.41-.28-2.4-.28-3.25-.42s-1.55-.43-1.55-1c0-.71.57-1,2.12-1,4.37,0,12.4.43,12.83.43s8.74-.43,12.68-.43c1.41,0,2.12.28,2.12,1,0,.56-.42.84-1.55,1-.85.14-1.55.14-2.54.28-4.09.56-4.51,2.68-4.79,6.76-.28,3.81-.14,7-.14,25.66V73.72c0,10.86-.14,20.73.56,25.8.56,4.09,1.13,5.64,4.79,6.48a32.08,32.08,0,0,0,5.36.57c1.27.14,1.55.42,1.55,1s-.56,1-2,1c-7.19,0-15.37-.42-16.07-.42-.43,0-8.74.42-12.69.42-1.27,0-2.26-.28-2.26-1,0-.56.57-1,1.84-1a16.45,16.45,0,0,0,3.38-.43c2.4-.56,2.82-3.38,3.24-6.76.71-5.08.71-15.08.71-25.66Z"
                            }), (0, l.jsx)("path", {
                                d: "M204.52,22c0-4.37.42-5.78,1.55-5.78S209.45,19,210.44,20C211.71,21.43,231.3,41.44,251,61.6c11,10.71,25.1,25.23,28.76,28.62l-1.55-58.64c-.14-7.62-1-10.15-4.79-11.14a35.68,35.68,0,0,0-5.5-.56c-1.41,0-1.69-.57-1.69-1.13,0-.71,1.13-.85,2.54-.85,6.06,0,12,.43,13.25.43s5.78-.43,11.27-.43c1.55,0,2,.14,2,.85,0,.56-.43,1-1.27,1.13s-2,.14-3.53.42c-3.24.7-4.23,2.11-4.23,10.57L286,101.63c0,7.05-.28,7.76-1.27,7.76s-2.39-1-9.3-7.47c-.56-.29-20.16-19.74-32.42-31.72C228.34,55,214.24,40.32,210.72,36.65l1.83,55.12c.28,9.72,1.13,13.39,4.65,14.23a24.2,24.2,0,0,0,5.78.57c1.13,0,1.69.42,1.69,1,0,.71-.7,1-2.25,1-7.61,0-12.69-.42-13.67-.42s-6.21.42-12.27.42c-1.27,0-2.11-.14-2.11-1,0-.56.56-1,2-1a13.93,13.93,0,0,0,4.37-.57c3.1-1,3.81-4.79,3.81-15.08C204.52,23.68,204.66,45.39,204.52,22Z"
                            }), (0, l.jsx)("path", {
                                d: "M339.27,79.5c0,20.3.14,28.2-3.81,37.22-2.54,6.06-8.18,11.7-19.17,19-1.55.84-3.67,2.39-4.93,3-.15.14-.43.14-.85.14s-1-.14-1-.71c0-.84.85-1.12,1.84-1.83a17.77,17.77,0,0,0,3.94-3c8.46-8,12.55-14.1,12.55-46.38V52.58c0-18.61,0-21.85-.28-25.66s-1.55-5.78-5.5-6.76a37.81,37.81,0,0,0-4.23-.28c-.42,0-1-.43-1-.85,0-.85.71-1.13,2.12-1.13,5.92,0,14.09.43,14.52.43s8.88-.43,12.82-.43c1.41,0,2,.28,2,1.13a1.06,1.06,0,0,1-.85.85c-.84,0-1.69.14-3.24.28-3.24.7-4.37,2.82-4.65,6.9-.28,3.81-.28,6.91-.28,25.52Z"
                            }), (0, l.jsx)("path", {
                                d: "M389.72,74.15a1.47,1.47,0,0,0-1.4,1.12l-6.21,17.62c-1.41,4-2.39,7.76-2.39,10,0,2.54,1.55,3.67,4.65,3.67h1c1.26,0,1.69.42,1.69,1,0,.71-1.13,1-2.12,1-3.1,0-9.58-.42-11.13-.42s-7.62.42-13.54.42c-1.55,0-2.25-.28-2.25-1,0-.56.56-1,1.69-1a20.06,20.06,0,0,0,2.82-.14c6.06-.57,8.46-5.22,10.85-11.14L401.57,21c1.55-4.08,2-4.79,3-4.79.7,0,1.26.56,2.82,4.51,2,4.65,21.14,53.85,28.61,71.47,4.65,11.14,8.74,13,10.71,13.67a13.4,13.4,0,0,0,4.8.71c1,0,1.69.28,1.69,1s-.57,1-2.12,1-12,0-21.42-.28c-2.68-.14-3.53-.28-3.53-1,0-.42.43-.84,1-1,.56-.29,1.41-1,.56-3.11L416.51,74.85a1.26,1.26,0,0,0-1.13-.7Zm24-4.94c.56,0,.56-.42.42-.84L403,37.21c-.7-2-.84-2-1.55,0L390.85,68.37c-.28.56,0,.84.28.84Z"
                            }), (0, l.jsx)("path", {
                                d: "M556.47,67.66c0,13.53,0,24.67.7,30.59.43,4.09,1.27,7.19,5.5,7.75a59.78,59.78,0,0,0,6.34.57c.85,0,1.13.42,1.13.84,0,.71-.7,1.13-2.25,1.13-7.76,0-16.64-.42-17.34-.42s-9.59.42-13.82.42c-1.55,0-2.25-.28-2.25-1.13,0-.42.28-.84,1.13-.84a21.18,21.18,0,0,0,4.23-.57c2.81-.56,3.52-3.66,4.08-7.75.71-5.92.71-17.06.71-30.59V8c-6.91.14-14,.14-20.86.28-8.74.14-12.13,1.12-14.38,4.51A24.39,24.39,0,0,0,507,17.2c-.42,1.13-.84,1.41-1.41,1.41-.42,0-.7-.43-.7-1.27,0-1.41,2.82-13.53,3.1-14.66.28-.85.84-2.68,1.41-2.68,1,0,2.39,1.41,6.2,1.69,4.09.42,9.44.71,11.14.71h52.86a56.59,56.59,0,0,0,10-.71c2.11-.28,3.38-.7,3.94-.7.71,0,.71.84.71,1.69,0,4.23-.43,14-.43,15.5,0,1.27-.42,1.84-1,1.84-.71,0-1-.43-1.13-2.4,0-.56-.14-1-.14-1.55-.42-4.23-3.81-7.47-17.34-7.75-5.92-.14-11.84-.14-17.76-.28Z"
                            }), (0, l.jsx)("path", {
                                d: "M686.15,55.68c.42,0,.84,0,.84-.7V52.44c0-18.61,0-21.85-.28-25.66s-.85-5.78-5.5-6.62a27.59,27.59,0,0,0-3.52-.28c-1,0-1.69-.43-1.69-1,0-.85.7-1,2-1,5.92,0,14.24.43,14.8.43s8.46-.43,12.69-.43c1.41,0,2.25.14,2.25,1,0,.42-.42,1-1.55,1a19.38,19.38,0,0,0-2.82.28c-3.8.56-4.37,2.82-4.65,6.76s-.14,7-.14,25.66V73.72c0,11.56,0,20.73.56,25.8.43,3.38,1.13,6.2,4.8,6.62a33.76,33.76,0,0,0,4.93.43c1.13,0,1.83.42,1.83,1,0,.71-.7,1-2.11,1-7,0-15.22-.42-15.93-.42-.56,0-8.74.42-12.55.42-1.41,0-2.11-.28-2.11-1.13,0-.42.42-.84,1.55-.84a12.65,12.65,0,0,0,3.24-.28c2.4-.43,3.1-3.53,3.53-6.77.7-5.07.7-14,.7-25.37V61.6a.81.81,0,0,0-.84-.84H635c-.43,0-.71.14-.71.84V74.15c0,11.41,0,20.58.71,25.65.42,3.1,1.12,5.92,4.79,6.34a37.3,37.3,0,0,0,5.07.43c1,0,1.7.42,1.7,1s-.57,1-1.84,1c-7.19,0-15.5-.42-16.21-.42-.42,0-9,.42-12.68.42-1.41,0-2.26-.28-2.26-1,0-.42.28-1,1.55-1a13.45,13.45,0,0,0,3.38-.43c2.54-.56,3.11-3.24,3.53-6.34.84-5.07.7-14.52.7-26.08V52.86c0-18.61,0-22.27-.28-26.08s-1.27-6.34-5.36-6.76a37.32,37.32,0,0,0-3.8-.29c-1,0-1.55-.42-1.55-.84,0-.85.7-1,2.11-1,6.06,0,12.83.43,14.66.43.57,0,8.74-.43,12.69-.43,1.41,0,2.11.28,2.11,1,0,.56-.56.84-1.41.84a12,12,0,0,0-2.82.29c-3.52.56-4.37,3-4.65,6.9s-.14,6.91-.14,25.52V55c0,.7.42.7.85.7Z"
                            }), (0, l.jsx)("path", {
                                d: "M745.48,52.58c0-18.47,0-21.85-.28-25.66s-1.27-5.92-5.36-6.76a23.4,23.4,0,0,0-3.38-.28c-1,0-1.83-.43-1.83-.85,0-.85.7-1.13,2.11-1.13,2.82,0,6.63.28,14.52.43.7,0,25.79,0,28.61-.15a19.94,19.94,0,0,0,5.5-.7,4.34,4.34,0,0,1,1.55-.42c.28,0,.57.28.57,1,0,.85-.85,2.82-1.13,6.35-.14,2.39-.28,4.65-.42,7.33,0,1.27-.29,2.11-1,2.11s-1-.56-1-1.55a13.59,13.59,0,0,0-1-4.51c-.85-2.82-2.12-3.81-9.17-4.23-1.83-.14-15.79-.28-16.07-.28s-.7.28-.7,1.13v32c0,.84.14,1.41.84,1.41,1.7,0,16.07-.15,19-.43,3.25-.14,5.36-.56,6.49-2.11.56-.85,1-1.13,1.55-1.13.28,0,.56.14.56.85s-.56,3.38-1,7.47c-.43,3.94-.43,6.76-.57,8.6-.14,1.12-.42,1.55-1,1.55-.71,0-.85-.85-.85-1.84a15.94,15.94,0,0,0-.42-3.38c-.57-1.83-1.41-3.81-6.77-4.23-3.24-.28-14.66-.56-16.92-.56-.84,0-1,.42-1,1V73.86c0,4.37-.14,16.78,0,19.18.28,5.21,1,7.89,4,9.16,2.11,1,5.49,1.27,10.29,1.27,2.67,0,7.19.14,10.71-.85,4.23-1.27,5.21-4.09,6.34-9.3.28-1.41.71-2,1.27-2,.85,0,.85,1.27.85,2.12s-1.13,9.87-1.55,12.26c-.57,2.82-1.55,3.1-6.21,3.1-9.3,0-13.25-.28-18.18-.28s-11.42-.42-16.63-.42c-3.25,0-5.93.42-9.31.42-1.27,0-2-.28-2-1,0-.56.56-1,1.27-1a10.3,10.3,0,0,0,2.82-.43c2.53-.56,4.23-2.39,4.51-11.13.14-4.79.28-10.57.28-21.29Z"
                            }), (0, l.jsx)("path", {
                                d: "M810.3,63c0-18.75,14.52-46.8,49.34-46.8,27.91,0,49.19,16.63,49.19,45,0,26.92-19.87,48.91-49.9,48.91C824.4,110.09,810.3,84.44,810.3,63Zm85.28,1.69c0-28.33-17.48-44.12-36.79-44.12-19.59,0-35.38,12.12-35.38,38.77,0,27.62,15.37,45.95,39.05,45.95C871.9,105.3,895.58,100.51,895.58,64.7Z"
                            }), (0, l.jsx)("path", {
                                d: "M932.82,52.58c0-18.61,0-22-.28-25.8s-1.27-5.92-5.64-6.76a23.42,23.42,0,0,0-3.38-.29c-1,0-1.55-.28-1.55-.84s.42-1,1.69-1c6.06,0,14.66.43,14.94.43,1.27,0,10.85-.43,14.8-.43,7.9,0,16.5.71,23.12,5.36A21.38,21.38,0,0,1,985,40.46c0,7.75-3.81,17.62-15,26.64,10.3,12.68,18.75,23.12,25.94,30.59,6.77,6.9,11,8,14.94,8.6,1,.14,4,.28,4.37.28,1.13,0,1.55.42,1.55,1,0,.71-.56,1-2.53,1h-9.87c-6.63,0-9.73-.42-12.83-1.69-5.92-2.54-10.15-8.88-17.48-18.33-5.49-6.76-11.13-14.37-13.53-17.33a2,2,0,0,0-1.69-.85l-14.52-.14c-.56,0-.7.14-.7.7v2c0,11.27,0,21.57.7,26.64.42,3.38.85,6.2,5.5,6.77,1.41.14,3,.28,4.09.28s1.83.42,1.83.84c0,.71-.57,1.13-2,1.13-7.32,0-15.22-.42-15.78-.42-2.26,0-8.46.42-12.27.42-1.41,0-2-.28-2-1.13,0-.42.85-.84,1.69-.84a12.12,12.12,0,0,0,3.1-.28c2.4-.43,3.24-2,3.67-5.36.7-5.08.56-16.63.56-27.21Zm10.86,10a1.76,1.76,0,0,0,.7,1.69c1.83,1,7.47,1.83,12.55,1.83,3,0,6.48-.14,9.44-2.11,4.23-2.68,7-8.88,7-17.9,0-15.37-8.18-23.83-20.72-23.83a37.34,37.34,0,0,0-8.18.71,1.27,1.27,0,0,0-.84,1.27Z"
                            }), (0, l.jsx)("path", {
                                d: "M1042.49,77.81c0-6.76-1-9.3-3.1-13-.84-1.55-17.2-28.19-21.56-34.25-3.81-5.36-5.22-7-7.19-8.6a11.27,11.27,0,0,0-6.63-2.11c-.84,0-1.55-.43-1.55-1.13,0-.42.56-.85,1.69-.85,2.26,0,13,.43,13.25.43.85,0,5.5-.43,10.72-.43,1.41,0,1.83.43,1.83.85s-.42.84-1.55,1.13c-2,.42-2.26,1.12-2.26,2.25,0,1.41.85,2.82,1.83,4.65,1.84,3.53,20.44,33.41,22.56,36.93,2.25-4.93,18-30.72,20-34.25,2.68-4.65,3.25-5.92,3.25-7.47,0-1.83-1.69-1.83-3.25-2.11-1.12-.15-1.55-.57-1.55-1.13s.29-.85,1.7-.85c3.38,0,6.34.43,8.6.43,1.83,0,10-.43,12.4-.43,1.27,0,1.69.43,1.69.85,0,.7-.7,1.13-1.69,1.13-3,.14-5.07.42-7,1.83s-3,2.68-5.21,5.78c-8.18,11.27-21.85,34.25-24,39.19-1.69,4.37-1.41,7.47-1.41,11.13V88.1c0,1,0,6.2.29,11.28.28,3.38.56,5.78,4.93,6.62a27,27,0,0,0,5.21.57c1.13,0,1.56.42,1.56.84,0,.71-.43,1.13-1.7,1.13-7,0-15.78-.42-16.21-.42s-8.74.42-12.68.42c-1.41,0-2-.42-2-1.13,0-.42.42-.84,1.41-.84a14.7,14.7,0,0,0,3.53-.43c2.39-.42,3.38-3.38,3.66-6.76.42-5.08.42-10.15.42-11.28Z"
                            })]
                        })
                    })
                },
                b = function() {
                    return (0, l.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "60.418",
                        height: "90.628",
                        children: (0, l.jsx)("g", {
                            "data-name": "",
                            children: (0, l.jsxs)("g", {
                                "data-name": "",
                                children: [(0, l.jsx)("path", {
                                    "data-name": "",
                                    d: "",
                                    fill: "#fff"
                                }), (0, l.jsxs)("g", {
                                    "data-name": "",
                                    children: [(0, l.jsx)("g", {
                                        "data-name": "",
                                        children: (0, l.jsx)("path", {
                                            "data-name": "",
                                            d: "",
                                            fill: "#1a1818"
                                        })
                                    }), (0, l.jsx)("path", {
                                        "data-name": "",
                                        fill: "#fff",
                                        d: ""
                                    }), (0, l.jsx)("path", {
                                        "data-name": "",
                                        fill: "#fff",
                                        d: ""
                                    }), (0, l.jsxs)("g", {
                                        "data-name": "",
                                        fill: "#fff",
                                        children: [(0, l.jsx)("path", {
                                            "data-name": "",
                                            d: ""
                                        }), (0, l.jsx)("path", {
                                            "data-name": "",
                                            d: ""
                                        }), (0, l.jsx)("path", {
                                            "data-name": "",
                                            d: ""
                                        }), (0, l.jsx)("path", {
                                            "data-name": "",
                                            d: ""
                                        })]
                                    }), (0, l.jsx)("g", {
                                        "data-name": "",
                                        children: (0, l.jsx)("path", {
                                            "data-name": "",
                                            d: "",
                                            fill: "#1a1818"
                                        })
                                    }), (0, l.jsxs)("g", {
                                        "data-name": "",
                                        fill: "#1a1818",
                                        children: [(0, l.jsx)("path", {
                                            "data-name": "",
                                            d: ""
                                        }), (0, l.jsx)("path", {
                                            "data-name": "",
                                            d: ""
                                        }), (0, l.jsx)("path", {
                                            "data-name": "",
                                            d: ""
                                        }), (0, l.jsx)("path", {
                                            "data-name": "",
                                            d: ""
                                        }), (0, l.jsx)("path", {
                                            "data-name": "",
                                            d: ""
                                        }), (0, l.jsx)("path", {
                                            "data-name": "Path 266",
                                            d: "M35.002 15.627V7.299h3.834v1.28h-2.363v2.055h2.179v1.279h-2.179v2.431h2.44v1.283z"
                                        }), (0, l.jsx)("path", {
                                            "data-name": "Path 267",
                                            d: "M41.895 8.549a6.8 6.8 0 00.711-.565 3.48 3.48 0 00.6-.732h1.3v8.373h-1.471V9.183a4.914 4.914 0 01-.551.505c-.195.149-.393.294-.594.431z"
                                        }), (0, l.jsx)("path", {
                                            "data-name": "Path 268",
                                            d: "M49.688 8.849l-1.656 6.776h-1.527l1.86-7.076h-2.328v-1.3h3.651z"
                                        }), (0, l.jsx)("path", {
                                            "data-name": "Path 269",
                                            d: "M51.954 8.913h1.082v2.273h1.643v1.279h-1.643v2.271h-1.082v-2.271h-1.655v-1.279h1.655z"
                                        })]
                                    })]
                                })]
                            })
                        })
                    })
                };

            function x() {
                var t = (0, o.o)((function(t) {
                    return t.setHovered
                }));
                return (0, l.jsx)("footer", {
                    className: "bg-black app-footer py-10 relative z-10",
                    children: (0, l.jsxs)("div", {
                        className: "wrapper",
                        children: [(0, l.jsx)("div", {
                            className: " w-40",
                            children: (0, l.jsx)(_, {})
                        }), (0, l.jsxs)("div", {
                            className: "md:flex justify-between",
                            children: [(0, l.jsxs)("div", {
                                children: [(0, l.jsxs)("nav", {
                                    className: "md:flex md:space-x-10 py-10",
                                    children: [p.IQ.map((function(e, r) {
                                        return (0, l.jsx)(a.default, {
                                            href: e.url,
                                            passHref: e.passHref,
                                            onMouseEnter: function() {
                                                return t(!0)
                                            },
                                            onMouseLeave: function() {
                                                return t(!1)
                                            },
                                            children: (0, l.jsx)("a", {
                                                className: " focus:outline-none focus:ring-1 block font-proxima-nova-extra-condensed uppercase font-bold text-sm hover:text-hellblade-light-grey py-3 md:py-0 ",
                                                children: e.title
                                            })
                                        }, r)
                                    })), (0, l.jsx)("a", {
                                        id: "manageCookies",
                                        onClick: function() {
                                            window.siteConsent.isConsentRequired && window.siteConsent.manageConsent()
                                        },
                                        className: " cursor-pointer focus:outline-none focus:ring-1 block font-proxima-nova-extra-condensed uppercase font-bold text-sm hover:text-hellblade-light-grey py-3 md:py-0 ",
                                        children: "Manage Cookies"
                                    })]
                                }), (0, l.jsxs)("div", {
                                    className: " text-xs text-hellblade-legal max-w-xl",
                                    children: [(0, l.jsxs)("p", {
                                        className: "mb-2",
                                        children: ["\xa9 Copyright ", (new Date).getFullYear(), " vespera game's secret."]
                                    }), (0, l.jsx)("p", {
                                        children: "This website is owned and operated by Vespera's woner , London, United Kingdom,"
                                    })]
                                })]
                            }), (0, l.jsx)("div", {
                                children: (0, l.jsx)("div", {
                                    className: "mt-9",
                                    children: (0, l.jsx)(b, {})
                                })
                            })]
                        })]
                    })
                })
            }
            var P = r(9008);

            function S() {
                return (0, l.jsxs)(P.default, {
                    children: [(0, l.jsx)("link", {
                        rel: "apple-touch-icon",
                        sizes: "57x57",
                        href: "/apple-icon-57x57.png"
                    }), (0, l.jsx)("link", {
                        rel: "apple-touch-icon",
                        sizes: "60x60",
                        href: "/apple-icon-60x60.png"
                    }), (0, l.jsx)("link", {
                        rel: "apple-touch-icon",
                        sizes: "72x72",
                        href: "/apple-icon-72x72.png"
                    }), (0, l.jsx)("link", {
                        rel: "apple-touch-icon",
                        sizes: "76x76",
                        href: "/apple-icon-76x76.png"
                    }), (0, l.jsx)("link", {
                        rel: "apple-touch-icon",
                        sizes: "114x114",
                        href: "/apple-icon-114x114.png"
                    }), (0, l.jsx)("link", {
                        rel: "apple-touch-icon",
                        sizes: "120x120",
                        href: "/apple-icon-120x120.png"
                    }), (0, l.jsx)("link", {
                        rel: "apple-touch-icon",
                        sizes: "144x144",
                        href: "/apple-icon-144x144.png"
                    }), (0, l.jsx)("link", {
                        rel: "apple-touch-icon",
                        sizes: "152x152",
                        href: "/apple-icon-152x152.png"
                    }), (0, l.jsx)("link", {
                        rel: "apple-touch-icon",
                        sizes: "180x180",
                        href: "/apple-icon-180x180.png"
                    }), (0, l.jsx)("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "192x192",
                        href: "/android-icon-192x192.png"
                    }), (0, l.jsx)("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "32x32",
                        href: "/favicon-32x32.png"
                    }), (0, l.jsx)("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "96x96",
                        href: "/favicon-96x96.png"
                    }), (0, l.jsx)("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "16x16",
                        href: "/favicon-16x16.png"
                    }), (0, l.jsx)("link", {
                        rel: "manifest",
                        href: "/manifest.json"
                    }), (0, l.jsx)("meta", {
                        name: "msapplication-TileColor",
                        content: "#ffffff"
                    }), (0, l.jsx)("meta", {
                        name: "msapplication-TileImage",
                        content: "/ms-icon-144x144.png"
                    }), (0, l.jsx)("meta", {
                        name: "theme-color",
                        content: "#ffffff"
                    }), (0, l.jsx)("meta", {
                        name: "description",
                        content: "Hellblade: Senua's Sacrifice is a action-adventure game developed and published by the British video game development studio Ninja Theory"
                    }), (0, l.jsx)("meta", {
                        property: "og:image",
                        content: "https://hellblade.com/placeholder.jpg"
                    })]
                })
            }
            var A = r(6666),
                E = function() {
                    var t = (0, s.useRouter)(),
                        e = (0, A.u)(t.route);
                    return (0, n.useEffect)((function() {
                        var t = document.querySelector("html");
                        t.classList.value = "", t.classList.add(e)
                    })), null
                },
                w = r(5152),
                k = r(8913),
                T = r.n(k);

            function C(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, i)
                }
                return r
            }

            function M(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? C(Object(r), !0).forEach((function(e) {
                        (0, i.Z)(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : C(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }
            var D = (0, w.default)((function() {
                return Promise.all([r.e(8011), r.e(3737), r.e(5716), r.e(8863), r.e(3376), r.e(2156), r.e(7966)]).then(r.bind(r, 7966))
            }), {
                ssr: !1,
                loadableGenerated: {
                    webpack: function() {
                        return [7966]
                    },
                    modules: ["_app.js -> components/InternalCanvas"]
                }
            });
            var F = function(t) {
                var e = t.Component,
                    r = t.pageProps,
                    i = t.router,
                    a = "/" === i.route,
                    s = (0, A.u)(i.route),
                    h = (0, n.useState)(!0),
                    p = h[0],
                    c = h[1],
                    u = (0, n.useState)(!1),
                    f = u[0],
                    d = u[1],
                    m = (0, o.o)((function(t) {
                        return t.setAudioFile
                    })),
                    y = ((0, o.o)((function(t) {
                        return t.audioFile
                    })), (0, o.o)((function(t) {
                        return t.setHowlerHome
                    }))),
                    _ = (0, o.o)((function(t) {
                        return t.setHowlerOther
                    })),
                    b = (0, o.o)((function(t) {
                        return t.setPlayingHomeAudio
                    })),
                    P = (0, o.o)((function(t) {
                        return t.playingHomeAudio
                    })),
                    w = (0, o.o)((function(t) {
                        return t.setPlayingOtherAudio
                    })),
                    k = (0, o.o)((function(t) {
                        return t.playingOtherAudio
                    })),
                    C = (0, n.useRef)(),
                    F = (0, n.useRef)();
                return (0, n.useEffect)((function() {
                    "true" === window.localStorage.getItem("age-gate") && c(!1), m(a ? "HOME" : "OTHER"), w(!a), b(a), y(C.current.howler), _(F.current.howler)
                }), []), (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(S, {}), (0, l.jsx)(E, {}), !p && (0, l.jsx)(g, {
                        home: a,
                        children: (0, l.jsxs)("button", {
                            className: "focus:outline-none focus:ring-1",
                            onClick: function() {
                                return d(!f)
                            },
                            children: [(0, l.jsx)("span", {
                                className: "sr-only",
                                children: f ? "pause audio" : "play audio"
                            }), !f && (0, l.jsx)("svg", {
                                viewBox: "0 0 140 140",
                                height: "24",
                                width: "24",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: (0, l.jsxs)("g", {
                                    transform: "matrix(5.833333333333333,0,0,5.833333333333333,0,0)",
                                    children: [(0, l.jsx)("path", {
                                        d: "M13.422,4.658a1.5,1.5,0,0,0-1.571.142L5.251,9h-3a1.5,1.5,0,0,0-1.5,1.5v3a1.5,1.5,0,0,0,1.5,1.5h3l6.6,4.2a1.5,1.5,0,0,0,2.4-1.2V6A1.5,1.5,0,0,0,13.422,4.658Z",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "1.5"
                                    }), (0, l.jsx)("path", {
                                        d: "M5.251 9L5.251 15",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "1.5"
                                    }), (0, l.jsx)("path", {
                                        d: "M23.249 9.375L17.999 14.625",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "1.5"
                                    }), (0, l.jsx)("path", {
                                        d: "M17.999 9.375L23.249 14.625",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "1.5"
                                    })]
                                })
                            }), f && (0, l.jsx)("svg", {
                                viewBox: "0 0 140 140",
                                height: "24",
                                width: "24",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: (0, l.jsxs)("g", {
                                    transform: "matrix(5.833333333333333,0,0,5.833333333333333,0,0)",
                                    children: [(0, l.jsx)("path", {
                                        d: "M14.171,4.658A1.5,1.5,0,0,0,12.6,4.8L6,9H3a1.5,1.5,0,0,0-1.5,1.5v3A1.5,1.5,0,0,0,3,15H6l6.6,4.2A1.5,1.5,0,0,0,15,18V6A1.5,1.5,0,0,0,14.171,4.658Z",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "1.5"
                                    }), (0, l.jsx)("path", {
                                        d: "M21.463,15.75a6.6,6.6,0,0,0,0-7.1",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "1.5"
                                    }), (0, l.jsx)("path", {
                                        d: "M18.562,14.441a3.493,3.493,0,0,0,0-4.405",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "1.5"
                                    }), (0, l.jsx)("path", {
                                        d: "M6 9L6 15",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "1.5"
                                    })]
                                })
                            })]
                        })
                    }), (0, l.jsxs)("div", {
                        className: "min-h-screen flex flex-col",
                        children: [(0, l.jsxs)("main", {
                            className: "flex-1 min-h-screen flex relative",
                            children: [!p && (0, l.jsx)(e, M({}, r), i.route), (0, l.jsx)("div", {
                                className: " w-full h-screen overflow-hidden fixed",
                                children: (0, l.jsx)(D, {
                                    path: s,
                                    showAgegate: p
                                })
                            })]
                        }), p && (0, l.jsx)(v, {
                            onSubmit: function() {
                                c(!1), window.localStorage.setItem("age-gate", !0)
                            }
                        }), !p && !a && (0, l.jsx)(x, {}), (0, l.jsx)(T(), {
                            src: "/hellblade-bg-audio.mp3",
                            playing: f && k,
                            loop: !0,
                            ref: F
                        }), (0, l.jsx)(T(), {
                            src: "/hellblade-home.mp3",
                            playing: f && P,
                            loop: !0,
                            ref: C
                        })]
                    })]
                })
            }
        },
        1780: function(t, e, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                return r(8450)
            }])
        },
        5210: function() {},
        5152: function(t, e, r) {
            t.exports = r(8771)
        },
        9008: function(t, e, r) {
            t.exports = r(639)
        },
        1664: function(t, e, r) {
            t.exports = r(2167)
        },
        1163: function(t, e, r) {
            t.exports = r(4651)
        },
        9424: function(t, e, r) {
            "use strict";
            var i = function() {
                    function t(t, e) {
                        for (var r = 0; r < e.length; r++) {
                            var i = e[r];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                        }
                    }
                    return function(e, r, i) {
                        return r && t(e.prototype, r), i && t(e, i), e
                    }
                }(),
                n = r(7294),
                a = h(n),
                s = h(r(5697)),
                o = r(2249),
                l = r(9848);

            function h(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            var p = function(t) {
                function e(t) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    var r = function(t, e) {
                        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" !== typeof e && "function" !== typeof e ? t : e
                    }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
                    return r.initHowler = r.initHowler.bind(r), r
                }
                return function(t, e) {
                    if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }(e, t), i(e, [{
                    key: "componentDidMount",
                    value: function() {
                        this.initHowler()
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(t) {
                        JSON.stringify(t.src) !== JSON.stringify(this.props.src) ? this.initHowler(this.props) : this.toggleHowler(t)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.destroyHowler()
                    }
                }, {
                    key: "initHowler",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
                        this.destroyHowler(), "undefined" !== typeof o.Howl && (this.howler = new o.Howl({
                            src: t.src,
                            xhr: t.xhr,
                            format: t.format,
                            mute: t.mute,
                            loop: t.loop,
                            preload: t.preload,
                            volume: t.volume,
                            rate: t.rate,
                            onend: t.onEnd,
                            onplay: t.onPlay,
                            onplayerror: t.onPlayError,
                            onpause: t.onPause,
                            onvolume: t.onVolume,
                            onstop: t.onStop,
                            onload: t.onLoad,
                            onseek: t.onSeek,
                            onloaderror: t.onLoadError,
                            html5: t.html5
                        }), t.playing && this.play())
                    }
                }, {
                    key: "destroyHowler",
                    value: function() {
                        this.howler && (this.howler.off(), this.howler.stop(), this.howler.unload(), this.howler = null)
                    }
                }, {
                    key: "toggleHowler",
                    value: function(t) {
                        this.props.playing ? this.play() : this.pause(), this.loop(this.props.loop), t.mute !== this.props.mute && this.mute(this.props.mute), t.volume !== this.props.volume && this.volume(this.props.volume), this.props.preload && "unloaded" === this.howlerState() && this.load()
                    }
                }, {
                    key: "play",
                    value: function() {
                        this.howler.playing() || ("unloaded" === this.howlerState() && this.load(), this.howler.play())
                    }
                }, {
                    key: "pause",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
                        t ? this.howler.pause(t) : this.howler.pause()
                    }
                }, {
                    key: "rate",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                        "number" === typeof t && (e ? this.howler.rate(t, e) : this.howler.rate(t))
                    }
                }, {
                    key: "howlerState",
                    value: function() {
                        return this.howler.state()
                    }
                }, {
                    key: "stop",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
                        t ? this.howler.stop(t) : this.howler.stop()
                    }
                }, {
                    key: "mute",
                    value: function() {
                        var t;
                        (t = this.howler).mute.apply(t, arguments)
                    }
                }, {
                    key: "volume",
                    value: function() {
                        var t;
                        return (t = this.howler).volume.apply(t, arguments)
                    }
                }, {
                    key: "loop",
                    value: function() {
                        var t;
                        return (t = this.howler).loop.apply(t, arguments)
                    }
                }, {
                    key: "seek",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                        return this.howler ? t || 0 === t ? t || 0 === t ? (this.howler.seek(t), t) : void 0 : this.howler.seek() : 0
                    }
                }, {
                    key: "duration",
                    value: function() {
                        return this.howler.duration()
                    }
                }, {
                    key: "load",
                    value: function() {
                        this.howler.load()
                    }
                }, {
                    key: "render",
                    value: function() {
                        return a.default.createElement("div", null)
                    }
                }, {
                    key: "howler",
                    set: function(t) {
                        t && (this._howler = t)
                    },
                    get: function() {
                        return this._howler
                    }
                }]), e
            }(n.Component);
            p.propTypes = {
                src: s.default.oneOfType([s.default.string, s.default.arrayOf(s.default.string)]).isRequired,
                format: s.default.arrayOf(s.default.string),
                xhr: s.default.object,
                playing: s.default.bool,
                mute: s.default.bool,
                loop: s.default.bool,
                preload: s.default.bool,
                volume: s.default.number,
                rate: s.default.number,
                onEnd: s.default.func,
                onPause: s.default.func,
                onPlay: s.default.func,
                onPlayError: s.default.func,
                onVolume: s.default.func,
                onStop: s.default.func,
                onLoad: s.default.func,
                onSeek: s.default.func,
                onLoadError: s.default.func,
                html5: s.default.bool
            }, p.defaultProps = {
                playing: !0,
                format: [],
                xhr: {},
                mute: !1,
                preload: !0,
                loop: !1,
                volume: 1,
                rate: 1,
                onEnd: l.noop,
                onPause: l.noop,
                onPlay: l.noop,
                onPlayError: l.noop,
                onVolume: l.noop,
                onStop: l.noop,
                onLoad: l.noop,
                onSeek: l.noop,
                onLoadError: l.noop,
                html5: !1
            }, e.default = p
        },
        2249: function(t, e, r) {
            "use strict";
            var i = void 0;
            "undefined" !== typeof window && (i = r(1766)), t.exports = i
        },
        8913: function(t, e, r) {
            "use strict";
            t.exports = r(9424).default
        },
        9848: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            e.noop = function() {}
        },
        2809: function(t, e, r) {
            "use strict";

            function i(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            r.d(e, {
                Z: function() {
                    return i
                }
            })
        }
    },
    function(t) {
        var e = function(e) {
            return t(t.s = e)
        };
        t.O(0, [9774, 179], (function() {
            return e(1780), e(4651)
        }));
        var r = t.O();
        _N_E = r
    }
]);