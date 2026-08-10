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
    let f = u ? () => window.performance.now() : () => Date.now(),
        g = u ? e => requestAnimationFrame(e) : t;
    const p = new Set;

    function m(e) {
        p.forEach((t => {
            t.c(e) || (p.delete(t), t.f())
        })), 0 !== p.size && g(m)
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
        const t = _("style");
        return function(e, t) {
            $(e.head || e, t)
        }(w(e), t), t.sheet
    }

    function b(e) {
        e.parentNode.removeChild(e)
    }

    function _(e) {
        return document.createElement(e)
    }

    function v(e) {
        return document.createElementNS("http://www.w3.org/2000/svg", e)
    }

    function x() {
        return e = " ", document.createTextNode(e);
        var e
    }

    function S(e, t, n) {
        null == n ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n)
    }

    function k(e, t, n, o) {
        null === n ? e.style.removeProperty(t) : e.style.setProperty(t, n, o ? "important" : "")
    }

    function A(e, t, n) {
        e.classList[n ? "add" : "remove"](t)
    }
    const C = new Map;
    let E, R = 0;

    function z(e, t, n, o, r, i, a, s = 0) {
        const l = 16.666 / o;
        let c = "{\n";
        for (let e = 0; e <= 1; e += l) {
            const o = t + (n - t) * i(e);
            c += 100 * e + `%{${a(o,1-o)}}\n`
        }
        const d = c + `100% {${a(n,1-n)}}\n}`,
            u = `__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(d)}_${s}`,
            f = w(e),
            {
                stylesheet: g,
                rules: p
            } = C.get(f) || function(e, t) {
                const n = {
                    stylesheet: y(t),
                    rules: {}
                };
                return C.set(e, n), n
            }(f, e);
        p[u] || (p[u] = !0, g.insertRule(`@keyframes ${u} ${d}`, g.cssRules.length));
        const m = e.style.animation || "";
        return e.style.animation = `${m?`${m}, `:""}${u} ${o}ms linear ${r}ms 1 both`, R += 1, u
    }

    function M(e) {
        E = e
    }
    const F = [],
        T = [],
        O = [],
        I = [],
        N = Promise.resolve();
    let q = !1;

    function B(e) {
        O.push(e)
    }
    const G = new Set;
    let P, j = 0;

    function D() {
        const e = E;
        do {
            for (; j < F.length;) {
                const e = F[j];
                j++, M(e), L(e.$$)
            }
            for (M(null), F.length = 0, j = 0; T.length;) T.pop()();
            for (let e = 0; e < O.length; e += 1) {
                const t = O[e];
                G.has(t) || (G.add(t), t())
            }
            O.length = 0
        } while (F.length);
        for (; I.length;) I.pop()();
        q = !1, G.clear(), M(e)
    }

    function L(e) {
        if (null !== e.fragment) {
            e.update(), i(e.before_update);
            const t = e.dirty;
            e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(B)
        }
    }

    function U(e, t, n) {
        e.dispatchEvent(function(e, t, n = !1) {
            const o = document.createEvent("CustomEvent");
            return o.initCustomEvent(e, n, !1, t), o
        }(`${t?"intro":"outro"}${n}`))
    }
    const V = new Set;
    let H;
    const Y = {
        duration: 0
    };

    function J(e, o, r, s) {
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
                r && (e.style.animation = o.join(", "), R -= r, R || g((() => {
                    R || (C.forEach((e => {
                        const {
                            stylesheet: t
                        } = e;
                        let n = t.cssRules.length;
                        for (; n--;) t.deleteRule(n);
                        e.rules = {}
                    })), C.clear())
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
            } = l || Y, _ = {
                start: f() + r,
                b: o
            };
            o || (_.group = H, H.r += 1), d || u ? u = _ : (b && ($(), h = z(e, c, o, a, r, s, b)), o && y(0, 1), d = w(_, a), B((() => U(e, o, "start"))), function(e) {
                let t;
                0 === p.size && g(m), new Promise((n => {
                    p.add(t = {
                        c: e,
                        f: n
                    })
                }))
            }((t => {
                if (u && t > u.start && (d = w(u, a), u = null, U(e, d.b, "start"), b && ($(), h = z(e, c, d.b, d.duration, 0, s, l.css))), d)
                    if (t >= d.end) y(c = d.b, 1 - c), U(e, d.b, "end"), u || (d.b ? $() : --d.group.r || i(d.group.c)), d = null;
                    else if (t >= d.start) {
                    const e = t - d.start;
                    c = d.a + d.d * s(e / d.duration), y(c, 1 - c)
                }
                return !(!d && !u)
            })))
        }
        return {
            run(e) {
                a(l) ? (P || (P = Promise.resolve(), P.then((() => {
                    P = null
                }))), P).then((() => {
                    l = l(), y(e)
                })) : y(e)
            },
            end() {
                $(), d = u = null
            }
        }
    }
    let K;

    function Q(e, t) {
        const n = e.$$;
        null !== n.fragment && (i(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = [])
    }

    function W(e, n, s, l, c, d, u, f = [-1]) {
        const g = E;
        M(e);
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
            context: new Map(n.context || (g ? g.$$.context : [])),
            callbacks: r(),
            dirty: f,
            skip_bound: !1,
            root: n.target || g.$$.root
        };
        u && u(p.root);
        let m = !1;
        if (p.ctx = s ? s(e, n.props || {}, ((t, n, ...o) => {
                const r = o.length ? o[0] : n;
                return p.ctx && c(p.ctx[t], p.ctx[t] = r) && (!p.skip_bound && p.bound[t] && p.bound[t](r), m && function(e, t) {
                    -1 === e.$$.dirty[0] && (F.push(e), q || (q = !0, N.then(D)), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31
                }(e, t)), n
            })) : [], p.update(), m = !0, i(p.before_update), p.fragment = !!l && l(p.ctx), n.target) {
            if (n.hydrate) {
                h = !0;
                const e = (y = n.target, Array.from(y.childNodes));
                p.fragment && p.fragment.l(e), e.forEach(b)
            } else p.fragment && p.fragment.c();
            n.intro && (($ = e.$$.fragment) && $.i && (V.delete($), $.i(w))),
                function(e, t, n, r) {
                    const {
                        fragment: s,
                        on_mount: l,
                        on_destroy: c,
                        after_update: d
                    } = e.$$;
                    s && s.m(t, n), r || B((() => {
                        const t = l.map(o).filter(a);
                        c ? c.push(...t) : i(t), e.$$.on_mount = []
                    })), d.forEach(B)
                }(e, n.target, n.anchor, n.customElement), h = !1, D()
        }
        var $, w, y;
        M(g)
    }
    "undefined" != typeof window ? window : "undefined" != typeof globalThis ? globalThis : global, new Set(["allowfullscreen", "allowpaymentrequest", "async", "autofocus", "autoplay", "checked", "controls", "default", "defer", "disabled", "formnovalidate", "hidden", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "selected"]), "function" == typeof HTMLElement && (K = class extends HTMLElement {
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
            Q(this, 1), this.$destroy = t
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

    function X(e, {
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
    const Z = e.p + "loader/assets/cf2c5114382f9454fab3.png",
        ee = e.p + "loader/assets/656e68986603a4a734d5.png",
        te = e.p + "loader/assets/05b7070bdc42a5dd3346.png",
        ne = e.p + "loader/assets/cb132ea5f230239b9b63.png";

    function oe(e) {
        let t, n, o, r, i, a, s, l, d, u, f, g, p, m, h, w, y, C, E, R, z, M, F, T, O, I, N, q, G, P, j, D, L, U, V, H, Y, K, Q, W, Z, ee, te, ne;
        return {
            c() {
                t = _("div"), n = _("div"), o = _("div"), r = v("svg"), i = v("defs"), a = v("filter"), s = v("feTurbulence"), d = v("feDisplacementMap"), h = v("filter"), w = v("feColorMatrix"), y = v("feComponentTransfer"), C = v("feFuncR"), E = v("feFuncG"), R = v("feFuncB"), M = v("mask"), F = v("g"), T = v("rect"), P = v("image"), D = v("image"), V = x(), H = _("div"), Y = x(), K = _("img"), W = x(), Z = _("div"), Z.innerHTML = '<div class="game-loader-window__sweep"></div>', S(s, "type", "fractalNoise"), S(s, "baseFrequency", l = (1 / de).toFixed(4)), S(s, "numOctaves", "3"), S(s, "seed", "7"), S(s, "result", "n"), S(d, "in", "SourceGraphic"), S(d, "in2", "n"), S(d, "scale", ue), S(d, "xChannelSelector", "R"), S(d, "yChannelSelector", "G"), S(a, "id", u = "tex-" + e[6]), S(a, "filterUnits", "userSpaceOnUse"), S(a, "x", f = e[5] - ce), S(a, "y", g = -se - ce), S(a, "width", p = le + 2 * ce), S(a, "height", m = ie + 2 * se + 2 * ce), S(a, "color-interpolation-filters", "sRGB"), S(w, "type", "saturate"), S(w, "values", "0"), S(C, "type", "linear"), S(C, "slope", fe), S(C, "intercept", ge), S(E, "type", "linear"), S(E, "slope", fe), S(E, "intercept", ge), S(R, "type", "linear"), S(R, "slope", fe), S(R, "intercept", ge), S(h, "id", z = "dim-" + e[6]), S(h, "x", "0"), S(h, "y", "0"), S(h, "width", "100%"), S(h, "height", "100%"), S(h, "color-interpolation-filters", "sRGB"), S(T, "class", "game-loader-window__reveal"), S(T, "x", e[5]), S(T, "y", O = -se), S(T, "height", I = ie + 2 * se), S(T, "fill", "#fff"), S(T, "filter", N = "url(#tex-" + e[6] + ")"), k(T, "--full-w", le + "px"), k(T, "--reveal-dur", e[0] + "ms"), A(T, "game-loader-window__reveal--on", e[1]), S(F, "transform", q = "rotate(" + ae + " " + re / 2 + " " + ie / 2 + ")"), S(M, "id", G = "reveal-" + e[6]), S(M, "maskUnits", "userSpaceOnUse"), S(M, "x", "0"), S(M, "y", "0"), S(M, "width", re), S(M, "height", ie), S(P, "class", "game-loader-window__dark"), S(P, "href", e[3]), S(P, "x", "0"), S(P, "y", "0"), S(P, "width", re), S(P, "height", ie), S(P, "preserveAspectRatio", "xMidYMid slice"), S(P, "filter", j = "url(#dim-" + e[6] + ")"), S(P, "opacity", pe), S(D, "class", "game-loader-window__bright"), S(D, "href", e[3]), S(D, "x", "0"), S(D, "y", "0"), S(D, "width", re), S(D, "height", ie), S(D, "preserveAspectRatio", "xMidYMid slice"), S(D, "mask", L = "url(#reveal-" + e[6] + ")"), k(D, "--reveal-dur", e[0] + "ms"), A(D, "game-loader-window__bright--on", e[1]), S(r, "class", "game-loader-window__stage"), S(r, "viewBox", U = "0 0 " + re + " " + ie), S(r, "preserveAspectRatio", "none"), S(H, "class", "game-loader-window__shade"), S(o, "class", "game-loader-window__media"), S(K, "class", "game-loader-window__logo"), c(K.src, Q = e[4]) || S(K, "src", Q), S(K, "alt", ""), S(Z, "class", "game-loader-window__border"), S(n, "class", "game-loader-window__card"), S(n, "style", ee = e[2] ? `--sweep-gradient: ${e[2]};` : ""), S(t, "class", "game-loader-window")
            },
            m(e, l) {
                (function(e, t, n) {
                    e.insertBefore(t, n || null)
                })(e, t, l), $(t, n), $(n, o), $(o, r), $(r, i), $(i, a), $(a, s), $(a, d), $(i, h), $(h, w), $(h, y), $(y, C), $(y, E), $(y, R), $(i, M), $(M, F), $(F, T), $(r, P), $(r, D), $(o, V), $(o, H), $(n, Y), $(n, K), $(n, W), $(n, Z), ne = !0
            },
            p(e, [t]) {
                (!ne || 1 & t) && k(T, "--reveal-dur", e[0] + "ms"), 2 & t && A(T, "game-loader-window__reveal--on", e[1]), (!ne || 8 & t) && S(P, "href", e[3]), (!ne || 8 & t) && S(D, "href", e[3]), (!ne || 1 & t) && k(D, "--reveal-dur", e[0] + "ms"), 2 & t && A(D, "game-loader-window__bright--on", e[1]), (!ne || 16 & t && !c(K.src, Q = e[4])) && S(K, "src", Q), (!ne || 4 & t && ee !== (ee = e[2] ? `--sweep-gradient: ${e[2]};` : "")) && S(n, "style", ee)
            },
            i(e) {
                ne || (B((() => {
                    te || (te = J(t, X, {
                        duration: 200
                    }, !0)), te.run(1)
                })), ne = !0)
            },
            o(e) {
                te || (te = J(t, X, {
                    duration: 200
                }, !1)), te.run(0), ne = !1
            },
            d(e) {
                e && b(t), e && te && te.end()
            }
        }
    }
    const re = 866,
        ie = 546,
        ae = 15,
        se = 300,
        le = 1350,
        ce = 100,
        de = 12,
        ue = 24,
        fe = .165,
        ge = .005,
        pe = .5;

    function me(e, t, n) {
        let o, r, i, a, {
                gameId: s = ""
            } = t,
            {
                duration: l = 1e4
            } = t;
        const c = {
                logo: te,
                bg: Z
            },
            d = {
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
            u = {
                [d.Arizona]: c,
                [d.ArizonaStaging]: c,
                [d.Rodina]: {
                    logo: ne,
                    bg: ee,
                    sweepColor: "#D3002C"
                },
                [d.RodinaStaging]: {
                    logo: ne,
                    bg: ee,
                    sweepColor: "#D3002C"
                }
            },
            f = "glo" + Math.random().toString(36).slice(2, 8);
        let g = !1;
        var p;
        return p = () => {
                let e;
                const t = requestAnimationFrame((() => {
                    e = requestAnimationFrame((() => n(1, g = !0)))
                }));
                return () => {
                    cancelAnimationFrame(t), cancelAnimationFrame(e)
                }
            },
            function() {
                if (!E) throw new Error("Function called outside component initialization");
                return E
            }().$$.on_mount.push(p), e.$$set = e => {
                "gameId" in e && n(7, s = e.gameId), "duration" in e && n(0, l = e.duration)
            }, e.$$.update = () => {
                128 & e.$$.dirty && n(9, o = u[s] || c), 512 & e.$$.dirty && n(4, r = o.logo), 512 & e.$$.dirty && n(3, i = o.bg), 512 & e.$$.dirty && n(2, a = o.sweepColor)
            }, [l, g, a, i, r, -240, f, s, d, o]
    }
    var he = new URLSearchParams(window.location.search);
    console.log(he.get("game"), "game"), new class extends class {
        $destroy() {
            Q(this, 1), this.$destroy = t
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
            super(), W(this, e, me, oe, s, {
                gameId: 7,
                duration: 0,
                GameId: 8
            })
        }
        get GameId() {
            return this.$$.ctx[8]
        }
    }({
        target: document.getElementById("root"),
        props: {
            gameId: he.get("game")
        }
    })
})();