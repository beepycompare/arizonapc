(() => {
    "use strict";
    var e = {};

    function t() {}
    e.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), (() => {
        var t;
        e.g.importScripts && (t = e.g.location + "");
        var n = e.g.document;
        if (!t && n && (n.currentScript && (t = n.currentScript.src), !t)) {
            var o = n.getElementsByTagName("script");
            o.length && (t = o[o.length - 1].src)
        }
        if (!t) throw new Error("Automatic publicPath is not supported in this browser");
        t = t.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), e.p = t + "../"
    })();
    const n = e => e;

    function o(e) {
        return e()
    }

    function r() {
        return Object.create(null)
    }

    function i(e) {
        e.forEach(o)
    }

    function a(e) {
        return "function" == typeof e
    }

    function s(e, t) {
        return e != e ? t == t : e !== t || e && "object" == typeof e || "function" == typeof e
    }
    let l;

    function c(e, t) {
        return l || (l = document.createElement("a")), l.href = t, e === l.href
    }

    function d(e) {
        return 0 === Object.keys(e).length
    }
    const u = "undefined" != typeof window;
    let g = u ? () => window.performance.now() : () => Date.now(),
        f = u ? e => requestAnimationFrame(e) : t;
    const p = new Set;

    function m(e) {
        p.forEach((t => {
            t.c(e) || (p.delete(t), t.f())
        })), 0 !== p.size && f(m)
    }
    let h = !1;

    function $(e, t) {
        e.appendChild(t)
    }

    function w(e) {
        if (!e) return document;
        const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
        return t && t.host ? t : e.ownerDocument
    }

    function y(e) {
        const t = v("style");
        return function(e, t) {
            $(e.head || e, t)
        }(w(e), t), t.sheet
    }

    function b(e, t, n) {
        e.insertBefore(t, n || null)
    }

    function _(e) {
        e.parentNode.removeChild(e)
    }

    function v(e) {
        return document.createElement(e)
    }

    function x(e) {
        return document.createElementNS("http://www.w3.org/2000/svg", e)
    }

    function S() {
        return e = " ", document.createTextNode(e);
        var e
    }

    function k(e, t, n) {
        null == n ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n)
    }

    function A(e, t, n, o) {
        null === n ? e.style.removeProperty(t) : e.style.setProperty(t, n, o ? "important" : "")
    }

    function C(e, t, n) {
        e.classList[n ? "add" : "remove"](t)
    }
    const E = new Map;
    let R, z = 0;

    function M(e, t, n, o, r, i, a, s = 0) {
        const l = 16.666 / o;
        let c = "{\n";
        for (let e = 0; e <= 1; e += l) {
            const o = t + (n - t) * i(e);
            c += 100 * e + `%{${a(o,1-o)}}\n`
        }
        const d = c + `100% {${a(n,1-n)}}\n}`,
            u = `__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(d)}_${s}`,
            g = w(e),
            {
                stylesheet: f,
                rules: p
            } = E.get(g) || function(e, t) {
                const n = {
                    stylesheet: y(t),
                    rules: {}
                };
                return E.set(e, n), n
            }(g, e);
        p[u] || (p[u] = !0, f.insertRule(`@keyframes ${u} ${d}`, f.cssRules.length));
        const m = e.style.animation || "";
        return e.style.animation = `${m?`${m}, `:""}${u} ${o}ms linear ${r}ms 1 both`, z += 1, u
    }

    function F(e) {
        R = e
    }
    const T = [],
        O = [],
        I = [],
        N = [],
        q = Promise.resolve();
    let B = !1;

    function G(e) {
        I.push(e)
    }
    const P = new Set;
    let j, D = 0;

    function L() {
        const e = R;
        do {
            for (; D < T.length;) {
                const e = T[D];
                D++, F(e), U(e.$$)
            }
            for (F(null), T.length = 0, D = 0; O.length;) O.pop()();
            for (let e = 0; e < I.length; e += 1) {
                const t = I[e];
                P.has(t) || (P.add(t), t())
            }
            I.length = 0
        } while (T.length);
        for (; N.length;) N.pop()();
        B = !1, P.clear(), F(e)
    }

    function U(e) {
        if (null !== e.fragment) {
            e.update(), i(e.before_update);
            const t = e.dirty;
            e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(G)
        }
    }

    function V(e, t, n) {
        e.dispatchEvent(function(e, t, n = !1) {
            const o = document.createEvent("CustomEvent");
            return o.initCustomEvent(e, n, !1, t), o
        }(`${t?"intro":"outro"}${n}`))
    }
    const H = new Set;
    let Y;
    const J = {
        duration: 0
    };

    function K(e, o, r, s) {
        let l = o(e, r),
            c = s ? 0 : 1,
            d = null,
            u = null,
            h = null;

        function $() {
            h && function(e, t) {
                const n = (e.style.animation || "").split(", "),
                    o = n.filter(t ? e => e.indexOf(t) < 0 : e => -1 === e.indexOf("__svelte")),
                    r = n.length - o.length;
                r && (e.style.animation = o.join(", "), z -= r, z || f((() => {
                    z || (E.forEach((e => {
                        const {
                            stylesheet: t
                        } = e;
                        let n = t.cssRules.length;
                        for (; n--;) t.deleteRule(n);
                        e.rules = {}
                    })), E.clear())
                })))
            }(e, h)
        }

        function w(e, t) {
            const n = e.b - c;
            return t *= Math.abs(n), {
                a: c,
                b: e.b,
                d: n,
                duration: t,
                start: e.start,
                end: e.start + t,
                group: e.group
            }
        }

        function y(o) {
            const {
                delay: r = 0,
                duration: a = 300,
                easing: s = n,
                tick: y = t,
                css: b
            } = l || J, _ = {
                start: g() + r,
                b: o
            };
            o || (_.group = Y, Y.r += 1), d || u ? u = _ : (b && ($(), h = M(e, c, o, a, r, s, b)), o && y(0, 1), d = w(_, a), G((() => V(e, o, "start"))), function(e) {
                let t;
                0 === p.size && f(m), new Promise((n => {
                    p.add(t = {
                        c: e,
                        f: n
                    })
                }))
            }((t => {
                if (u && t > u.start && (d = w(u, a), u = null, V(e, d.b, "start"), b && ($(), h = M(e, c, d.b, d.duration, 0, s, l.css))), d)
                    if (t >= d.end) y(c = d.b, 1 - c), V(e, d.b, "end"), u || (d.b ? $() : --d.group.r || i(d.group.c)), d = null;
                    else if (t >= d.start) {
                    const e = t - d.start;
                    c = d.a + d.d * s(e / d.duration), y(c, 1 - c)
                }
                return !(!d && !u)
            })))
        }
        return {
            run(e) {
                a(l) ? (j || (j = Promise.resolve(), j.then((() => {
                    j = null
                }))), j).then((() => {
                    l = l(), y(e)
                })) : y(e)
            },
            end() {
                $(), d = u = null
            }
        }
    }
    let Q;

    function W(e, t) {
        const n = e.$$;
        null !== n.fragment && (i(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = [])
    }

    function X(e, n, s, l, c, d, u, g = [-1]) {
        const f = R;
        F(e);
        const p = e.$$ = {
            fragment: null,
            ctx: null,
            props: d,
            update: t,
            not_equal: c,
            bound: r(),
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(n.context || (f ? f.$$.context : [])),
            callbacks: r(),
            dirty: g,
            skip_bound: !1,
            root: n.target || f.$$.root
        };
        u && u(p.root);
        let m = !1;
        if (p.ctx = s ? s(e, n.props || {}, ((t, n, ...o) => {
                const r = o.length ? o[0] : n;
                return p.ctx && c(p.ctx[t], p.ctx[t] = r) && (!p.skip_bound && p.bound[t] && p.bound[t](r), m && function(e, t) {
                    -1 === e.$$.dirty[0] && (T.push(e), B || (B = !0, q.then(L)), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31
                }(e, t)), n
            })) : [], p.update(), m = !0, i(p.before_update), p.fragment = !!l && l(p.ctx), n.target) {
            if (n.hydrate) {
                h = !0;
                const e = (y = n.target, Array.from(y.childNodes));
                p.fragment && p.fragment.l(e), e.forEach(_)
            } else p.fragment && p.fragment.c();
            n.intro && (($ = e.$$.fragment) && $.i && (H.delete($), $.i(w))),
                function(e, t, n, r) {
                    const {
                        fragment: s,
                        on_mount: l,
                        on_destroy: c,
                        after_update: d
                    } = e.$$;
                    s && s.m(t, n), r || G((() => {
                        const t = l.map(o).filter(a);
                        c ? c.push(...t) : i(t), e.$$.on_mount = []
                    })), d.forEach(G)
                }(e, n.target, n.anchor, n.customElement), h = !1, L()
        }
        var $, w, y;
        F(f)
    }
    "undefined" != typeof window ? window : "undefined" != typeof globalThis ? globalThis : global, new Set(["allowfullscreen", "allowpaymentrequest", "async", "autofocus", "autoplay", "checked", "controls", "default", "defer", "disabled", "formnovalidate", "hidden", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "selected"]), "function" == typeof HTMLElement && (Q = class extends HTMLElement {
        constructor() {
            super(), this.attachShadow({
                mode: "open"
            })
        }
        connectedCallback() {
            const {
                on_mount: e
            } = this.$$;
            this.$$.on_disconnect = e.map(o).filter(a);
            for (const e in this.$$.slotted) this.appendChild(this.$$.slotted[e])
        }
        attributeChangedCallback(e, t, n) {
            this[e] = n
        }
        disconnectedCallback() {
            i(this.$$.on_disconnect)
        }
        $destroy() {
            W(this, 1), this.$destroy = t
        }
        $on(e, t) {
            const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
            return n.push(t), () => {
                const e = n.indexOf(t); - 1 !== e && n.splice(e, 1)
            }
        }
        $set(e) {
            this.$$set && !d(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1)
        }
    });

    function Z(e, {
        delay: t = 0,
        duration: o = 400,
        easing: r = n
    } = {}) {
        const i = +getComputedStyle(e).opacity;
        return {
            delay: t,
            duration: o,
            easing: r,
            css: e => "opacity: " + e * i
        }
    }
    const ee = e.p + "loader/assets/cf2c5114382f9454fab3.png",
        te = e.p + "loader/assets/24ab4254bba00a5a00fd.png",
        ne = e.p + "loader/assets/05b7070bdc42a5dd3346.png",
        oe = e.p + "loader/assets/cb132ea5f230239b9b63.png";

    function re(e) {
        let t, n;
        return {
            c() {
                t = v("img"), k(t, "class", "game-loader-window__logo"), c(t.src, n = e[4]) || k(t, "src", n), k(t, "alt", "")
            },
            m(e, n) {
                b(e, t, n)
            },
            p(e, o) {
                16 & o && !c(t.src, n = e[4]) && k(t, "src", n)
            },
            d(e) {
                e && _(t)
            }
        }
    }

    function ie(e) {
        let t, n, o, r, i, a, s, l, c, d, u, g, f, p, m, h, w, y, E, R, z, M, F, T, O, I, N, q, B, P, j, D, L, U, V, H, Y, J, Q, W, X, ee, te = e[4] && re(e);
        return {
            c() {
                t = v("div"), n = v("div"), o = v("div"), r = x("svg"), i = x("defs"), a = x("filter"), s = x("feTurbulence"), c = x("feDisplacementMap"), m = x("filter"), h = x("feColorMatrix"), w = x("feComponentTransfer"), y = x("feFuncR"), E = x("feFuncG"), R = x("feFuncB"), M = x("mask"), F = x("g"), T = x("rect"), P = x("image"), D = x("image"), V = S(), H = v("div"), Y = S(), te && te.c(), J = S(), Q = v("div"), Q.innerHTML = '<div class="game-loader-window__sweep"></div>', k(s, "type", "fractalNoise"), k(s, "baseFrequency", l = (1 / ge).toFixed(4)), k(s, "numOctaves", "3"), k(s, "seed", "7"), k(s, "result", "n"), k(c, "in", "SourceGraphic"), k(c, "in2", "n"), k(c, "scale", fe), k(c, "xChannelSelector", "R"), k(c, "yChannelSelector", "G"), k(a, "id", d = "tex-" + e[6]), k(a, "filterUnits", "userSpaceOnUse"), k(a, "x", u = e[5] - ue), k(a, "y", g = -ce - ue), k(a, "width", f = de + 2 * ue), k(a, "height", p = se + 2 * ce + 2 * ue), k(a, "color-interpolation-filters", "sRGB"), k(h, "type", "saturate"), k(h, "values", "0"), k(y, "type", "linear"), k(y, "slope", pe), k(y, "intercept", me), k(E, "type", "linear"), k(E, "slope", pe), k(E, "intercept", me), k(R, "type", "linear"), k(R, "slope", pe), k(R, "intercept", me), k(m, "id", z = "dim-" + e[6]), k(m, "x", "0"), k(m, "y", "0"), k(m, "width", "100%"), k(m, "height", "100%"), k(m, "color-interpolation-filters", "sRGB"), k(T, "class", "game-loader-window__reveal"), k(T, "x", e[5]), k(T, "y", O = -ce), k(T, "height", I = se + 2 * ce), k(T, "fill", "#fff"), k(T, "filter", N = "url(#tex-" + e[6] + ")"), A(T, "--full-w", de + "px"), A(T, "--reveal-dur", e[0] + "ms"), C(T, "game-loader-window__reveal--on", e[1]), k(F, "transform", q = "rotate(" + le + " " + ae / 2 + " " + se / 2 + ")"), k(M, "id", B = "reveal-" + e[6]), k(M, "maskUnits", "userSpaceOnUse"), k(M, "x", "0"), k(M, "y", "0"), k(M, "width", ae), k(M, "height", se), k(P, "class", "game-loader-window__dark"), k(P, "href", e[3]), k(P, "x", "0"), k(P, "y", "0"), k(P, "width", ae), k(P, "height", se), k(P, "preserveAspectRatio", "xMidYMid slice"), k(P, "filter", j = "url(#dim-" + e[6] + ")"), k(P, "opacity", he), k(D, "class", "game-loader-window__bright"), k(D, "href", e[3]), k(D, "x", "0"), k(D, "y", "0"), k(D, "width", ae), k(D, "height", se), k(D, "preserveAspectRatio", "xMidYMid slice"), k(D, "mask", L = "url(#reveal-" + e[6] + ")"), A(D, "--reveal-dur", e[0] + "ms"), C(D, "game-loader-window__bright--on", e[1]), k(r, "class", "game-loader-window__stage"), k(r, "viewBox", U = "0 0 " + ae + " " + se), k(r, "preserveAspectRatio", "none"), k(H, "class", "game-loader-window__shade"), k(o, "class", "game-loader-window__media"), k(Q, "class", "game-loader-window__border"), k(n, "class", "game-loader-window__card"), k(n, "style", W = e[2] ? `--sweep-gradient: ${e[2]};` : ""), k(t, "class", "game-loader-window")
            },
            m(e, l) {
                b(e, t, l), $(t, n), $(n, o), $(o, r), $(r, i), $(i, a), $(a, s), $(a, c), $(i, m), $(m, h), $(m, w), $(w, y), $(w, E), $(w, R), $(i, M), $(M, F), $(F, T), $(r, P), $(r, D), $(o, V), $(o, H), $(n, Y), te && te.m(n, null), $(n, J), $(n, Q), ee = !0
            },
            p(e, [t]) {
                (!ee || 1 & t) && A(T, "--reveal-dur", e[0] + "ms"), 2 & t && C(T, "game-loader-window__reveal--on", e[1]), (!ee || 8 & t) && k(P, "href", e[3]), (!ee || 8 & t) && k(D, "href", e[3]), (!ee || 1 & t) && A(D, "--reveal-dur", e[0] + "ms"), 2 & t && C(D, "game-loader-window__bright--on", e[1]), e[4] ? te ? te.p(e, t) : (te = re(e), te.c(), te.m(n, J)) : te && (te.d(1), te = null), (!ee || 4 & t && W !== (W = e[2] ? `--sweep-gradient: ${e[2]};` : "")) && k(n, "style", W)
            },
            i(e) {
                ee || (G((() => {
                    X || (X = K(t, Z, {
                        duration: 200
                    }, !0)), X.run(1)
                })), ee = !0)
            },
            o(e) {
                X || (X = K(t, Z, {
                    duration: 200
                }, !1)), X.run(0), ee = !1
            },
            d(e) {
                e && _(t), te && te.d(), e && X && X.end()
            }
        }
    }
    const ae = 866,
        se = 546,
        le = 15,
        ce = 300,
        de = 1350,
        ue = 100,
        ge = 12,
        fe = 24,
        pe = .165,
        me = .005,
        he = .5;

    function $e(e, t, n) {
        let o, r, i, a, {
                gameId: s = ""
            } = t,
            {
                bg: l = ""
            } = t,
            {
                logo: c = ""
            } = t,
            {
                duration: d = 1e4
            } = t;
        const u = {
                logo: ne,
                bg: ee
            },
            g = {
                Arizona: "arizona",
                ArizonaStaging: "arizona_staging",
                ArizonaV: "arizonav",
                ArizonaVStaging: "arizonav_staging",
                Village: "village",
                VillageStaging: "village_staging",
                Rodina: "rodina",
                RodinaStaging: "rodina_staging",
                Trilogy: "trilogy"
            },
            f = {
                [g.Arizona]: u,
                [g.ArizonaStaging]: u,
                [g.Rodina]: {
                    logo: oe,
                    bg: te,
                    sweepColor: "#D3002C"
                },
                [g.RodinaStaging]: {
                    logo: oe,
                    bg: te,
                    sweepColor: "#D3002C"
                }
            },
            p = "glo" + Math.random().toString(36).slice(2, 8);
        let m = !1;
        var h;
        return h = () => {
                let e;
                const t = requestAnimationFrame((() => {
                    e = requestAnimationFrame((() => n(1, m = !0)))
                }));
                return () => {
                    cancelAnimationFrame(t), cancelAnimationFrame(e)
                }
            },
            function() {
                if (!R) throw new Error("Function called outside component initialization");
                return R
            }().$$.on_mount.push(h), e.$$set = e => {
                "gameId" in e && n(7, s = e.gameId), "bg" in e && n(8, l = e.bg), "logo" in e && n(9, c = e.logo), "duration" in e && n(0, d = e.duration)
            }, e.$$.update = () => {
                128 & e.$$.dirty && n(11, o = f[s] || u), 2560 & e.$$.dirty && n(4, r = "none" === c ? "" : c || o.logo), 2304 & e.$$.dirty && n(3, i = l || o.bg), 2048 & e.$$.dirty && n(2, a = o.sweepColor)
            }, [d, m, a, i, r, -240, p, s, l, c, g, o]
    }
    var we = new URLSearchParams(window.location.search);
    console.log(we.get("game"), "game"), new class extends class {
        $destroy() {
            W(this, 1), this.$destroy = t
        }
        $on(e, t) {
            const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
            return n.push(t), () => {
                const e = n.indexOf(t); - 1 !== e && n.splice(e, 1)
            }
        }
        $set(e) {
            this.$$set && !d(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1)
        }
    } {
        constructor(e) {
            super(), X(this, e, $e, ie, s, {
                gameId: 7,
                bg: 8,
                logo: 9,
                duration: 0,
                GameId: 10
            })
        }
        get GameId() {
            return this.$$.ctx[10]
        }
    }({
        target: document.getElementById("root"),
        props: {
            gameId: we.get("game"),
            bg: we.get("bg") || "",
            logo: we.get("logo") || ""
        }
    })
})();