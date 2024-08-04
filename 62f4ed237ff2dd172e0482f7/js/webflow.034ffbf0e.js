/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
    var Y_ = Object.create;
    var nn = Object.defineProperty;
    var $_ = Object.getOwnPropertyDescriptor;
    var Q_ = Object.getOwnPropertyNames;
    var Z_ = Object.getPrototypeOf,
        J_ = Object.prototype.hasOwnProperty;
    var de = (e, t) => () => (e && (t = e(e = 0)), t);
    var c = (e, t) => () => (t || e((t = {
            exports: {}
        }).exports, t), t.exports),
        Pe = (e, t) => {
            for (var r in t) nn(e, r, {
                get: t[r],
                enumerable: !0
            })
        },
        Ls = (e, t, r, n) => {
            if (t && typeof t == "object" || typeof t == "function")
                for (let i of Q_(t)) !J_.call(e, i) && i !== r && nn(e, i, {
                    get: () => t[i],
                    enumerable: !(n = $_(t, i)) || n.enumerable
                });
            return e
        };
    var oe = (e, t, r) => (r = e != null ? Y_(Z_(e)) : {}, Ls(t || !e || !e.__esModule ? nn(r, "default", {
            value: e,
            enumerable: !0
        }) : r, e)),
        et = e => Ls(nn({}, "__esModule", {
            value: !0
        }), e);
    var Ns = c(() => {
        "use strict";
        (function() {
            if (typeof window > "u") return;
            let e = window.navigator.userAgent.match(/Edge\/(\d{2})\./),
                t = e ? parseInt(e[1], 10) >= 16 : !1;
            if ("objectFit" in document.documentElement.style && !t) {
                window.objectFitPolyfill = function() {
                    return !1
                };
                return
            }
            let n = function(a) {
                    let u = window.getComputedStyle(a, null),
                        l = u.getPropertyValue("position"),
                        y = u.getPropertyValue("overflow"),
                        p = u.getPropertyValue("display");
                    (!l || l === "static") && (a.style.position = "relative"), y !== "hidden" && (a.style.overflow = "hidden"), (!p || p === "inline") && (a.style.display = "block"), a.clientHeight === 0 && (a.style.height = "100%"), a.className.indexOf("object-fit-polyfill") === -1 && (a.className += " object-fit-polyfill")
                },
                i = function(a) {
                    let u = window.getComputedStyle(a, null),
                        l = {
                            "max-width": "none",
                            "max-height": "none",
                            "min-width": "0px",
                            "min-height": "0px",
                            top: "auto",
                            right: "auto",
                            bottom: "auto",
                            left: "auto",
                            "margin-top": "0px",
                            "margin-right": "0px",
                            "margin-bottom": "0px",
                            "margin-left": "0px"
                        };
                    for (let y in l) u.getPropertyValue(y) !== l[y] && (a.style[y] = l[y])
                },
                o = function(a) {
                    let u = a.parentNode;
                    n(u), i(a), a.style.position = "absolute", a.style.height = "100%", a.style.width = "auto", a.clientWidth > u.clientWidth ? (a.style.top = "0", a.style.marginTop = "0", a.style.left = "50%", a.style.marginLeft = a.clientWidth / -2 + "px") : (a.style.width = "100%", a.style.height = "auto", a.style.left = "0", a.style.marginLeft = "0", a.style.top = "50%", a.style.marginTop = a.clientHeight / -2 + "px")
                },
                s = function(a) {
                    if (typeof a > "u" || a instanceof Event) a = document.querySelectorAll("[data-object-fit]");
                    else if (a && a.nodeName) a = [a];
                    else if (typeof a == "object" && a.length && a[0].nodeName) a = a;
                    else return !1;
                    for (let u = 0; u < a.length; u++) {
                        if (!a[u].nodeName) continue;
                        let l = a[u].nodeName.toLowerCase();
                        if (l === "img") {
                            if (t) continue;
                            a[u].complete ? o(a[u]) : a[u].addEventListener("load", function() {
                                o(this)
                            })
                        } else l === "video" ? a[u].readyState > 0 ? o(a[u]) : a[u].addEventListener("loadedmetadata", function() {
                            o(this)
                        }) : o(a[u])
                    }
                    return !0
                };
            document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", s) : s(), window.addEventListener("resize", s), window.objectFitPolyfill = s
        })()
    });
    var Ps = c(() => {
        "use strict";
        (function() {
            if (typeof window > "u") return;

            function e(n) {
                Webflow.env("design") || ($("video").each(function() {
                    n && $(this).prop("autoplay") ? this.play() : this.pause()
                }), $(".w-background-video--control").each(function() {
                    n ? r($(this)) : t($(this))
                }))
            }

            function t(n) {
                n.find("> span").each(function(i) {
                    $(this).prop("hidden", () => i === 0)
                })
            }

            function r(n) {
                n.find("> span").each(function(i) {
                    $(this).prop("hidden", () => i === 1)
                })
            }
            $(document).ready(() => {
                let n = window.matchMedia("(prefers-reduced-motion: reduce)");
                n.addEventListener("change", i => {
                    e(!i.matches)
                }), n.matches && e(!1), $("video:not([autoplay])").each(function() {
                    $(this).parent().find(".w-background-video--control").each(function() {
                        t($(this))
                    })
                }), $(document).on("click", ".w-background-video--control", function(i) {
                    if (Webflow.env("design")) return;
                    let o = $(i.currentTarget),
                        s = $(`video#${o.attr("aria-controls")}`).get(0);
                    if (s)
                        if (s.paused) {
                            let a = s.play();
                            r(o), a && typeof a.catch == "function" && a.catch(() => {
                                t(o)
                            })
                        } else s.pause(), t(o)
                })
            })
        })()
    });
    var Li = c(() => {
        "use strict";
        window.tram = function(e) {
            function t(f, _) {
                var O = new E.Bare;
                return O.init(f, _)
            }

            function r(f) {
                return f.replace(/[A-Z]/g, function(_) {
                    return "-" + _.toLowerCase()
                })
            }

            function n(f) {
                var _ = parseInt(f.slice(1), 16),
                    O = _ >> 16 & 255,
                    C = _ >> 8 & 255,
                    A = 255 & _;
                return [O, C, A]
            }

            function i(f, _, O) {
                return "#" + (1 << 24 | f << 16 | _ << 8 | O).toString(16).slice(1)
            }

            function o() {}

            function s(f, _) {
                l("Type warning: Expected: [" + f + "] Got: [" + typeof _ + "] " + _)
            }

            function a(f, _, O) {
                l("Units do not match [" + f + "]: " + _ + ", " + O)
            }

            function u(f, _, O) {
                if (_ !== void 0 && (O = _), f === void 0) return O;
                var C = O;
                return lt.test(f) || !Gt.test(f) ? C = parseInt(f, 10) : Gt.test(f) && (C = 1e3 * parseFloat(f)), 0 > C && (C = 0), C === C ? C : O
            }

            function l(f) {
                se.debug && window && window.console.warn(f)
            }

            function y(f) {
                for (var _ = -1, O = f ? f.length : 0, C = []; ++_ < O;) {
                    var A = f[_];
                    A && C.push(A)
                }
                return C
            }
            var p = function(f, _, O) {
                    function C(te) {
                        return typeof te == "object"
                    }

                    function A(te) {
                        return typeof te == "function"
                    }

                    function R() {}

                    function K(te, le) {
                        function B() {
                            var xe = new re;
                            return A(xe.init) && xe.init.apply(xe, arguments), xe
                        }

                        function re() {}
                        le === O && (le = te, te = Object), B.Bare = re;
                        var ne, ye = R[f] = te[f],
                            Je = re[f] = B[f] = new R;
                        return Je.constructor = B, B.mixin = function(xe) {
                            return re[f] = B[f] = K(B, xe)[f], B
                        }, B.open = function(xe) {
                            if (ne = {}, A(xe) ? ne = xe.call(B, Je, ye, B, te) : C(xe) && (ne = xe), C(ne))
                                for (var Er in ne) _.call(ne, Er) && (Je[Er] = ne[Er]);
                            return A(Je.init) || (Je.init = te), B
                        }, B.open(le)
                    }
                    return K
                }("prototype", {}.hasOwnProperty),
                h = {
                    ease: ["ease", function(f, _, O, C) {
                        var A = (f /= C) * f,
                            R = A * f;
                        return _ + O * (-2.75 * R * A + 11 * A * A + -15.5 * R + 8 * A + .25 * f)
                    }],
                    "ease-in": ["ease-in", function(f, _, O, C) {
                        var A = (f /= C) * f,
                            R = A * f;
                        return _ + O * (-1 * R * A + 3 * A * A + -3 * R + 2 * A)
                    }],
                    "ease-out": ["ease-out", function(f, _, O, C) {
                        var A = (f /= C) * f,
                            R = A * f;
                        return _ + O * (.3 * R * A + -1.6 * A * A + 2.2 * R + -1.8 * A + 1.9 * f)
                    }],
                    "ease-in-out": ["ease-in-out", function(f, _, O, C) {
                        var A = (f /= C) * f,
                            R = A * f;
                        return _ + O * (2 * R * A + -5 * A * A + 2 * R + 2 * A)
                    }],
                    linear: ["linear", function(f, _, O, C) {
                        return O * f / C + _
                    }],
                    "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(f, _, O, C) {
                        return O * (f /= C) * f + _
                    }],
                    "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(f, _, O, C) {
                        return -O * (f /= C) * (f - 2) + _
                    }],
                    "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(f, _, O, C) {
                        return (f /= C / 2) < 1 ? O / 2 * f * f + _ : -O / 2 * (--f * (f - 2) - 1) + _
                    }],
                    "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(f, _, O, C) {
                        return O * (f /= C) * f * f + _
                    }],
                    "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(f, _, O, C) {
                        return O * ((f = f / C - 1) * f * f + 1) + _
                    }],
                    "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(f, _, O, C) {
                        return (f /= C / 2) < 1 ? O / 2 * f * f * f + _ : O / 2 * ((f -= 2) * f * f + 2) + _
                    }],
                    "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(f, _, O, C) {
                        return O * (f /= C) * f * f * f + _
                    }],
                    "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(f, _, O, C) {
                        return -O * ((f = f / C - 1) * f * f * f - 1) + _
                    }],
                    "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(f, _, O, C) {
                        return (f /= C / 2) < 1 ? O / 2 * f * f * f * f + _ : -O / 2 * ((f -= 2) * f * f * f - 2) + _
                    }],
                    "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(f, _, O, C) {
                        return O * (f /= C) * f * f * f * f + _
                    }],
                    "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(f, _, O, C) {
                        return O * ((f = f / C - 1) * f * f * f * f + 1) + _
                    }],
                    "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(f, _, O, C) {
                        return (f /= C / 2) < 1 ? O / 2 * f * f * f * f * f + _ : O / 2 * ((f -= 2) * f * f * f * f + 2) + _
                    }],
                    "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(f, _, O, C) {
                        return -O * Math.cos(f / C * (Math.PI / 2)) + O + _
                    }],
                    "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(f, _, O, C) {
                        return O * Math.sin(f / C * (Math.PI / 2)) + _
                    }],
                    "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(f, _, O, C) {
                        return -O / 2 * (Math.cos(Math.PI * f / C) - 1) + _
                    }],
                    "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(f, _, O, C) {
                        return f === 0 ? _ : O * Math.pow(2, 10 * (f / C - 1)) + _
                    }],
                    "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(f, _, O, C) {
                        return f === C ? _ + O : O * (-Math.pow(2, -10 * f / C) + 1) + _
                    }],
                    "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(f, _, O, C) {
                        return f === 0 ? _ : f === C ? _ + O : (f /= C / 2) < 1 ? O / 2 * Math.pow(2, 10 * (f - 1)) + _ : O / 2 * (-Math.pow(2, -10 * --f) + 2) + _
                    }],
                    "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(f, _, O, C) {
                        return -O * (Math.sqrt(1 - (f /= C) * f) - 1) + _
                    }],
                    "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(f, _, O, C) {
                        return O * Math.sqrt(1 - (f = f / C - 1) * f) + _
                    }],
                    "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(f, _, O, C) {
                        return (f /= C / 2) < 1 ? -O / 2 * (Math.sqrt(1 - f * f) - 1) + _ : O / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + _
                    }],
                    "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(f, _, O, C, A) {
                        return A === void 0 && (A = 1.70158), O * (f /= C) * f * ((A + 1) * f - A) + _
                    }],
                    "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(f, _, O, C, A) {
                        return A === void 0 && (A = 1.70158), O * ((f = f / C - 1) * f * ((A + 1) * f + A) + 1) + _
                    }],
                    "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(f, _, O, C, A) {
                        return A === void 0 && (A = 1.70158), (f /= C / 2) < 1 ? O / 2 * f * f * (((A *= 1.525) + 1) * f - A) + _ : O / 2 * ((f -= 2) * f * (((A *= 1.525) + 1) * f + A) + 2) + _
                    }]
                },
                b = {
                    "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                    "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                    "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
                },
                I = document,
                T = window,
                x = "bkwld-tram",
                w = /[\-\.0-9]/g,
                P = /[A-Z]/,
                S = "number",
                M = /^(rgb|#)/,
                F = /(em|cm|mm|in|pt|pc|px)$/,
                q = /(em|cm|mm|in|pt|pc|px|%)$/,
                X = /(deg|rad|turn)$/,
                H = "unitless",
                j = /(all|none) 0s ease 0s/,
                Q = /^(width|height)$/,
                V = " ",
                L = I.createElement("a"),
                v = ["Webkit", "Moz", "O", "ms"],
                N = ["-webkit-", "-moz-", "-o-", "-ms-"],
                D = function(f) {
                    if (f in L.style) return {
                        dom: f,
                        css: f
                    };
                    var _, O, C = "",
                        A = f.split("-");
                    for (_ = 0; _ < A.length; _++) C += A[_].charAt(0).toUpperCase() + A[_].slice(1);
                    for (_ = 0; _ < v.length; _++)
                        if (O = v[_] + C, O in L.style) return {
                            dom: O,
                            css: N[_] + f
                        }
                },
                G = t.support = {
                    bind: Function.prototype.bind,
                    transform: D("transform"),
                    transition: D("transition"),
                    backface: D("backface-visibility"),
                    timing: D("transition-timing-function")
                };
            if (G.transition) {
                var Z = G.timing.dom;
                if (L.style[Z] = h["ease-in-back"][0], !L.style[Z])
                    for (var J in b) h[J][0] = b[J]
            }
            var k = t.frame = function() {
                    var f = T.requestAnimationFrame || T.webkitRequestAnimationFrame || T.mozRequestAnimationFrame || T.oRequestAnimationFrame || T.msRequestAnimationFrame;
                    return f && G.bind ? f.bind(T) : function(_) {
                        T.setTimeout(_, 16)
                    }
                }(),
                W = t.now = function() {
                    var f = T.performance,
                        _ = f && (f.now || f.webkitNow || f.msNow || f.mozNow);
                    return _ && G.bind ? _.bind(f) : Date.now || function() {
                        return +new Date
                    }
                }(),
                d = p(function(f) {
                    function _(ee, ie) {
                        var ge = y(("" + ee).split(V)),
                            ue = ge[0];
                        ie = ie || {};
                        var Se = Ze[ue];
                        if (!Se) return l("Unsupported property: " + ue);
                        if (!ie.weak || !this.props[ue]) {
                            var We = Se[0],
                                Ne = this.props[ue];
                            return Ne || (Ne = this.props[ue] = new We.Bare), Ne.init(this.$el, ge, Se, ie), Ne
                        }
                    }

                    function O(ee, ie, ge) {
                        if (ee) {
                            var ue = typeof ee;
                            if (ie || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), ue == "number" && ie) return this.timer = new ae({
                                duration: ee,
                                context: this,
                                complete: R
                            }), void(this.active = !0);
                            if (ue == "string" && ie) {
                                switch (ee) {
                                    case "hide":
                                        B.call(this);
                                        break;
                                    case "stop":
                                        K.call(this);
                                        break;
                                    case "redraw":
                                        re.call(this);
                                        break;
                                    default:
                                        _.call(this, ee, ge && ge[1])
                                }
                                return R.call(this)
                            }
                            if (ue == "function") return void ee.call(this, this);
                            if (ue == "object") {
                                var Se = 0;
                                Je.call(this, ee, function(Ee, K_) {
                                    Ee.span > Se && (Se = Ee.span), Ee.stop(), Ee.animate(K_)
                                }, function(Ee) {
                                    "wait" in Ee && (Se = u(Ee.wait, 0))
                                }), ye.call(this), Se > 0 && (this.timer = new ae({
                                    duration: Se,
                                    context: this
                                }), this.active = !0, ie && (this.timer.complete = R));
                                var We = this,
                                    Ne = !1,
                                    rn = {};
                                k(function() {
                                    Je.call(We, ee, function(Ee) {
                                        Ee.active && (Ne = !0, rn[Ee.name] = Ee.nextStyle)
                                    }), Ne && We.$el.css(rn)
                                })
                            }
                        }
                    }

                    function C(ee) {
                        ee = u(ee, 0), this.active ? this.queue.push({
                            options: ee
                        }) : (this.timer = new ae({
                            duration: ee,
                            context: this,
                            complete: R
                        }), this.active = !0)
                    }

                    function A(ee) {
                        return this.active ? (this.queue.push({
                            options: ee,
                            args: arguments
                        }), void(this.timer.complete = R)) : l("No active transition timer. Use start() or wait() before then().")
                    }

                    function R() {
                        if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                            var ee = this.queue.shift();
                            O.call(this, ee.options, !0, ee.args)
                        }
                    }

                    function K(ee) {
                        this.timer && this.timer.destroy(), this.queue = [], this.active = !1;
                        var ie;
                        typeof ee == "string" ? (ie = {}, ie[ee] = 1) : ie = typeof ee == "object" && ee != null ? ee : this.props, Je.call(this, ie, xe), ye.call(this)
                    }

                    function te(ee) {
                        K.call(this, ee), Je.call(this, ee, Er, j_)
                    }

                    function le(ee) {
                        typeof ee != "string" && (ee = "block"), this.el.style.display = ee
                    }

                    function B() {
                        K.call(this), this.el.style.display = "none"
                    }

                    function re() {
                        this.el.offsetHeight
                    }

                    function ne() {
                        K.call(this), e.removeData(this.el, x), this.$el = this.el = null
                    }

                    function ye() {
                        var ee, ie, ge = [];
                        this.upstream && ge.push(this.upstream);
                        for (ee in this.props) ie = this.props[ee], ie.active && ge.push(ie.string);
                        ge = ge.join(","), this.style !== ge && (this.style = ge, this.el.style[G.transition.dom] = ge)
                    }

                    function Je(ee, ie, ge) {
                        var ue, Se, We, Ne, rn = ie !== xe,
                            Ee = {};
                        for (ue in ee) We = ee[ue], ue in Oe ? (Ee.transform || (Ee.transform = {}), Ee.transform[ue] = We) : (P.test(ue) && (ue = r(ue)), ue in Ze ? Ee[ue] = We : (Ne || (Ne = {}), Ne[ue] = We));
                        for (ue in Ee) {
                            if (We = Ee[ue], Se = this.props[ue], !Se) {
                                if (!rn) continue;
                                Se = _.call(this, ue)
                            }
                            ie.call(this, Se, We)
                        }
                        ge && Ne && ge.call(this, Ne)
                    }

                    function xe(ee) {
                        ee.stop()
                    }

                    function Er(ee, ie) {
                        ee.set(ie)
                    }

                    function j_(ee) {
                        this.$el.css(ee)
                    }

                    function Be(ee, ie) {
                        f[ee] = function() {
                            return this.children ? z_.call(this, ie, arguments) : (this.el && ie.apply(this, arguments), this)
                        }
                    }

                    function z_(ee, ie) {
                        var ge, ue = this.children.length;
                        for (ge = 0; ue > ge; ge++) ee.apply(this.children[ge], ie);
                        return this
                    }
                    f.init = function(ee) {
                        if (this.$el = e(ee), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, se.keepInherited && !se.fallback) {
                            var ie = ke(this.el, "transition");
                            ie && !j.test(ie) && (this.upstream = ie)
                        }
                        G.backface && se.hideBackface && pe(this.el, G.backface.css, "hidden")
                    }, Be("add", _), Be("start", O), Be("wait", C), Be("then", A), Be("next", R), Be("stop", K), Be("set", te), Be("show", le), Be("hide", B), Be("redraw", re), Be("destroy", ne)
                }),
                E = p(d, function(f) {
                    function _(O, C) {
                        var A = e.data(O, x) || e.data(O, x, new d.Bare);
                        return A.el || A.init(O), C ? A.start(C) : A
                    }
                    f.init = function(O, C) {
                        var A = e(O);
                        if (!A.length) return this;
                        if (A.length === 1) return _(A[0], C);
                        var R = [];
                        return A.each(function(K, te) {
                            R.push(_(te, C))
                        }), this.children = R, this
                    }
                }),
                m = p(function(f) {
                    function _() {
                        var R = this.get();
                        this.update("auto");
                        var K = this.get();
                        return this.update(R), K
                    }

                    function O(R, K, te) {
                        return K !== void 0 && (te = K), R in h ? R : te
                    }

                    function C(R) {
                        var K = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(R);
                        return (K ? i(K[1], K[2], K[3]) : R).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                    }
                    var A = {
                        duration: 500,
                        ease: "ease",
                        delay: 0
                    };
                    f.init = function(R, K, te, le) {
                        this.$el = R, this.el = R[0];
                        var B = K[0];
                        te[2] && (B = te[2]), Ge[B] && (B = Ge[B]), this.name = B, this.type = te[1], this.duration = u(K[1], this.duration, A.duration), this.ease = O(K[2], this.ease, A.ease), this.delay = u(K[3], this.delay, A.delay), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = Q.test(this.name), this.unit = le.unit || this.unit || se.defaultUnit, this.angle = le.angle || this.angle || se.defaultAngle, se.fallback || le.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + V + this.duration + "ms" + (this.ease != "ease" ? V + h[this.ease][0] : "") + (this.delay ? V + this.delay + "ms" : ""))
                    }, f.set = function(R) {
                        R = this.convert(R, this.type), this.update(R), this.redraw()
                    }, f.transition = function(R) {
                        this.active = !0, R = this.convert(R, this.type), this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()), this.redraw()), R == "auto" && (R = _.call(this))), this.nextStyle = R
                    }, f.fallback = function(R) {
                        var K = this.el.style[this.name] || this.convert(this.get(), this.type);
                        R = this.convert(R, this.type), this.auto && (K == "auto" && (K = this.convert(this.get(), this.type)), R == "auto" && (R = _.call(this))), this.tween = new Y({
                            from: K,
                            to: R,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease,
                            update: this.update,
                            context: this
                        })
                    }, f.get = function() {
                        return ke(this.el, this.name)
                    }, f.update = function(R) {
                        pe(this.el, this.name, R)
                    }, f.stop = function() {
                        (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, pe(this.el, this.name, this.get()));
                        var R = this.tween;
                        R && R.context && R.destroy()
                    }, f.convert = function(R, K) {
                        if (R == "auto" && this.auto) return R;
                        var te, le = typeof R == "number",
                            B = typeof R == "string";
                        switch (K) {
                            case S:
                                if (le) return R;
                                if (B && R.replace(w, "") === "") return +R;
                                te = "number(unitless)";
                                break;
                            case M:
                                if (B) {
                                    if (R === "" && this.original) return this.original;
                                    if (K.test(R)) return R.charAt(0) == "#" && R.length == 7 ? R : C(R)
                                }
                                te = "hex or rgb string";
                                break;
                            case F:
                                if (le) return R + this.unit;
                                if (B && K.test(R)) return R;
                                te = "number(px) or string(unit)";
                                break;
                            case q:
                                if (le) return R + this.unit;
                                if (B && K.test(R)) return R;
                                te = "number(px) or string(unit or %)";
                                break;
                            case X:
                                if (le) return R + this.angle;
                                if (B && K.test(R)) return R;
                                te = "number(deg) or string(angle)";
                                break;
                            case H:
                                if (le || B && q.test(R)) return R;
                                te = "number(unitless) or string(unit or %)"
                        }
                        return s(te, R), R
                    }, f.redraw = function() {
                        this.el.offsetHeight
                    }
                }),
                g = p(m, function(f, _) {
                    f.init = function() {
                        _.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), M))
                    }
                }),
                U = p(m, function(f, _) {
                    f.init = function() {
                        _.init.apply(this, arguments), this.animate = this.fallback
                    }, f.get = function() {
                        return this.$el[this.name]()
                    }, f.update = function(O) {
                        this.$el[this.name](O)
                    }
                }),
                z = p(m, function(f, _) {
                    function O(C, A) {
                        var R, K, te, le, B;
                        for (R in C) le = Oe[R], te = le[0], K = le[1] || R, B = this.convert(C[R], te), A.call(this, K, B, te)
                    }
                    f.init = function() {
                        _.init.apply(this, arguments), this.current || (this.current = {}, Oe.perspective && se.perspective && (this.current.perspective = se.perspective, pe(this.el, this.name, this.style(this.current)), this.redraw()))
                    }, f.set = function(C) {
                        O.call(this, C, function(A, R) {
                            this.current[A] = R
                        }), pe(this.el, this.name, this.style(this.current)), this.redraw()
                    }, f.transition = function(C) {
                        var A = this.values(C);
                        this.tween = new _e({
                            current: this.current,
                            values: A,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease
                        });
                        var R, K = {};
                        for (R in this.current) K[R] = R in A ? A[R] : this.current[R];
                        this.active = !0, this.nextStyle = this.style(K)
                    }, f.fallback = function(C) {
                        var A = this.values(C);
                        this.tween = new _e({
                            current: this.current,
                            values: A,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease,
                            update: this.update,
                            context: this
                        })
                    }, f.update = function() {
                        pe(this.el, this.name, this.style(this.current))
                    }, f.style = function(C) {
                        var A, R = "";
                        for (A in C) R += A + "(" + C[A] + ") ";
                        return R
                    }, f.values = function(C) {
                        var A, R = {};
                        return O.call(this, C, function(K, te, le) {
                            R[K] = te, this.current[K] === void 0 && (A = 0, ~K.indexOf("scale") && (A = 1), this.current[K] = this.convert(A, le))
                        }), R
                    }
                }),
                Y = p(function(f) {
                    function _(B) {
                        te.push(B) === 1 && k(O)
                    }

                    function O() {
                        var B, re, ne, ye = te.length;
                        if (ye)
                            for (k(O), re = W(), B = ye; B--;) ne = te[B], ne && ne.render(re)
                    }

                    function C(B) {
                        var re, ne = e.inArray(B, te);
                        ne >= 0 && (re = te.slice(ne + 1), te.length = ne, re.length && (te = te.concat(re)))
                    }

                    function A(B) {
                        return Math.round(B * le) / le
                    }

                    function R(B, re, ne) {
                        return i(B[0] + ne * (re[0] - B[0]), B[1] + ne * (re[1] - B[1]), B[2] + ne * (re[2] - B[2]))
                    }
                    var K = {
                        ease: h.ease[1],
                        from: 0,
                        to: 1
                    };
                    f.init = function(B) {
                        this.duration = B.duration || 0, this.delay = B.delay || 0;
                        var re = B.ease || K.ease;
                        h[re] && (re = h[re][1]), typeof re != "function" && (re = K.ease), this.ease = re, this.update = B.update || o, this.complete = B.complete || o, this.context = B.context || this, this.name = B.name;
                        var ne = B.from,
                            ye = B.to;
                        ne === void 0 && (ne = K.from), ye === void 0 && (ye = K.to), this.unit = B.unit || "", typeof ne == "number" && typeof ye == "number" ? (this.begin = ne, this.change = ye - ne) : this.format(ye, ne), this.value = this.begin + this.unit, this.start = W(), B.autoplay !== !1 && this.play()
                    }, f.play = function() {
                        this.active || (this.start || (this.start = W()), this.active = !0, _(this))
                    }, f.stop = function() {
                        this.active && (this.active = !1, C(this))
                    }, f.render = function(B) {
                        var re, ne = B - this.start;
                        if (this.delay) {
                            if (ne <= this.delay) return;
                            ne -= this.delay
                        }
                        if (ne < this.duration) {
                            var ye = this.ease(ne, 0, 1, this.duration);
                            return re = this.startRGB ? R(this.startRGB, this.endRGB, ye) : A(this.begin + ye * this.change), this.value = re + this.unit, void this.update.call(this.context, this.value)
                        }
                        re = this.endHex || this.begin + this.change, this.value = re + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
                    }, f.format = function(B, re) {
                        if (re += "", B += "", B.charAt(0) == "#") return this.startRGB = n(re), this.endRGB = n(B), this.endHex = B, this.begin = 0, void(this.change = 1);
                        if (!this.unit) {
                            var ne = re.replace(w, ""),
                                ye = B.replace(w, "");
                            ne !== ye && a("tween", re, B), this.unit = ne
                        }
                        re = parseFloat(re), B = parseFloat(B), this.begin = this.value = re, this.change = B - re
                    }, f.destroy = function() {
                        this.stop(), this.context = null, this.ease = this.update = this.complete = o
                    };
                    var te = [],
                        le = 1e3
                }),
                ae = p(Y, function(f) {
                    f.init = function(_) {
                        this.duration = _.duration || 0, this.complete = _.complete || o, this.context = _.context, this.play()
                    }, f.render = function(_) {
                        var O = _ - this.start;
                        O < this.duration || (this.complete.call(this.context), this.destroy())
                    }
                }),
                _e = p(Y, function(f, _) {
                    f.init = function(O) {
                        this.context = O.context, this.update = O.update, this.tweens = [], this.current = O.current;
                        var C, A;
                        for (C in O.values) A = O.values[C], this.current[C] !== A && this.tweens.push(new Y({
                            name: C,
                            from: this.current[C],
                            to: A,
                            duration: O.duration,
                            delay: O.delay,
                            ease: O.ease,
                            autoplay: !1
                        }));
                        this.play()
                    }, f.render = function(O) {
                        var C, A, R = this.tweens.length,
                            K = !1;
                        for (C = R; C--;) A = this.tweens[C], A.context && (A.render(O), this.current[A.name] = A.value, K = !0);
                        return K ? void(this.update && this.update.call(this.context)) : this.destroy()
                    }, f.destroy = function() {
                        if (_.destroy.call(this), this.tweens) {
                            var O, C = this.tweens.length;
                            for (O = C; O--;) this.tweens[O].destroy();
                            this.tweens = null, this.current = null
                        }
                    }
                }),
                se = t.config = {
                    debug: !1,
                    defaultUnit: "px",
                    defaultAngle: "deg",
                    keepInherited: !1,
                    hideBackface: !1,
                    perspective: "",
                    fallback: !G.transition,
                    agentTests: []
                };
            t.fallback = function(f) {
                if (!G.transition) return se.fallback = !0;
                se.agentTests.push("(" + f + ")");
                var _ = new RegExp(se.agentTests.join("|"), "i");
                se.fallback = _.test(navigator.userAgent)
            }, t.fallback("6.0.[2-5] Safari"), t.tween = function(f) {
                return new Y(f)
            }, t.delay = function(f, _, O) {
                return new ae({
                    complete: _,
                    duration: f,
                    context: O
                })
            }, e.fn.tram = function(f) {
                return t.call(null, this, f)
            };
            var pe = e.style,
                ke = e.css,
                Ge = {
                    transform: G.transform && G.transform.css
                },
                Ze = {
                    color: [g, M],
                    background: [g, M, "background-color"],
                    "outline-color": [g, M],
                    "border-color": [g, M],
                    "border-top-color": [g, M],
                    "border-right-color": [g, M],
                    "border-bottom-color": [g, M],
                    "border-left-color": [g, M],
                    "border-width": [m, F],
                    "border-top-width": [m, F],
                    "border-right-width": [m, F],
                    "border-bottom-width": [m, F],
                    "border-left-width": [m, F],
                    "border-spacing": [m, F],
                    "letter-spacing": [m, F],
                    margin: [m, F],
                    "margin-top": [m, F],
                    "margin-right": [m, F],
                    "margin-bottom": [m, F],
                    "margin-left": [m, F],
                    padding: [m, F],
                    "padding-top": [m, F],
                    "padding-right": [m, F],
                    "padding-bottom": [m, F],
                    "padding-left": [m, F],
                    "outline-width": [m, F],
                    opacity: [m, S],
                    top: [m, q],
                    right: [m, q],
                    bottom: [m, q],
                    left: [m, q],
                    "font-size": [m, q],
                    "text-indent": [m, q],
                    "word-spacing": [m, q],
                    width: [m, q],
                    "min-width": [m, q],
                    "max-width": [m, q],
                    height: [m, q],
                    "min-height": [m, q],
                    "max-height": [m, q],
                    "line-height": [m, H],
                    "scroll-top": [U, S, "scrollTop"],
                    "scroll-left": [U, S, "scrollLeft"]
                },
                Oe = {};
            G.transform && (Ze.transform = [z], Oe = {
                x: [q, "translateX"],
                y: [q, "translateY"],
                rotate: [X],
                rotateX: [X],
                rotateY: [X],
                scale: [S],
                scaleX: [S],
                scaleY: [S],
                skew: [X],
                skewX: [X],
                skewY: [X]
            }), G.transform && G.backface && (Oe.z = [q, "translateZ"], Oe.rotateZ = [X], Oe.scaleZ = [S], Oe.perspective = [F]);
            var lt = /ms/,
                Gt = /s|\./;
            return e.tram = t
        }(window.jQuery)
    });
    var Fs = c((HU, qs) => {
        "use strict";
        var eb = window.$,
            tb = Li() && eb.tram;
        qs.exports = function() {
            var e = {};
            e.VERSION = "1.6.0-Webflow";
            var t = {},
                r = Array.prototype,
                n = Object.prototype,
                i = Function.prototype,
                o = r.push,
                s = r.slice,
                a = r.concat,
                u = n.toString,
                l = n.hasOwnProperty,
                y = r.forEach,
                p = r.map,
                h = r.reduce,
                b = r.reduceRight,
                I = r.filter,
                T = r.every,
                x = r.some,
                w = r.indexOf,
                P = r.lastIndexOf,
                S = Array.isArray,
                M = Object.keys,
                F = i.bind,
                q = e.each = e.forEach = function(v, N, D) {
                    if (v == null) return v;
                    if (y && v.forEach === y) v.forEach(N, D);
                    else if (v.length === +v.length) {
                        for (var G = 0, Z = v.length; G < Z; G++)
                            if (N.call(D, v[G], G, v) === t) return
                    } else
                        for (var J = e.keys(v), G = 0, Z = J.length; G < Z; G++)
                            if (N.call(D, v[J[G]], J[G], v) === t) return;
                    return v
                };
            e.map = e.collect = function(v, N, D) {
                var G = [];
                return v == null ? G : p && v.map === p ? v.map(N, D) : (q(v, function(Z, J, k) {
                    G.push(N.call(D, Z, J, k))
                }), G)
            }, e.find = e.detect = function(v, N, D) {
                var G;
                return X(v, function(Z, J, k) {
                    if (N.call(D, Z, J, k)) return G = Z, !0
                }), G
            }, e.filter = e.select = function(v, N, D) {
                var G = [];
                return v == null ? G : I && v.filter === I ? v.filter(N, D) : (q(v, function(Z, J, k) {
                    N.call(D, Z, J, k) && G.push(Z)
                }), G)
            };
            var X = e.some = e.any = function(v, N, D) {
                N || (N = e.identity);
                var G = !1;
                return v == null ? G : x && v.some === x ? v.some(N, D) : (q(v, function(Z, J, k) {
                    if (G || (G = N.call(D, Z, J, k))) return t
                }), !!G)
            };
            e.contains = e.include = function(v, N) {
                return v == null ? !1 : w && v.indexOf === w ? v.indexOf(N) != -1 : X(v, function(D) {
                    return D === N
                })
            }, e.delay = function(v, N) {
                var D = s.call(arguments, 2);
                return setTimeout(function() {
                    return v.apply(null, D)
                }, N)
            }, e.defer = function(v) {
                return e.delay.apply(e, [v, 1].concat(s.call(arguments, 1)))
            }, e.throttle = function(v) {
                var N, D, G;
                return function() {
                    N || (N = !0, D = arguments, G = this, tb.frame(function() {
                        N = !1, v.apply(G, D)
                    }))
                }
            }, e.debounce = function(v, N, D) {
                var G, Z, J, k, W, d = function() {
                    var E = e.now() - k;
                    E < N ? G = setTimeout(d, N - E) : (G = null, D || (W = v.apply(J, Z), J = Z = null))
                };
                return function() {
                    J = this, Z = arguments, k = e.now();
                    var E = D && !G;
                    return G || (G = setTimeout(d, N)), E && (W = v.apply(J, Z), J = Z = null), W
                }
            }, e.defaults = function(v) {
                if (!e.isObject(v)) return v;
                for (var N = 1, D = arguments.length; N < D; N++) {
                    var G = arguments[N];
                    for (var Z in G) v[Z] === void 0 && (v[Z] = G[Z])
                }
                return v
            }, e.keys = function(v) {
                if (!e.isObject(v)) return [];
                if (M) return M(v);
                var N = [];
                for (var D in v) e.has(v, D) && N.push(D);
                return N
            }, e.has = function(v, N) {
                return l.call(v, N)
            }, e.isObject = function(v) {
                return v === Object(v)
            }, e.now = Date.now || function() {
                return new Date().getTime()
            }, e.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var H = /(.)^/,
                j = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                Q = /\\|'|\r|\n|\u2028|\u2029/g,
                V = function(v) {
                    return "\\" + j[v]
                },
                L = /^\s*(\w|\$)+\s*$/;
            return e.template = function(v, N, D) {
                !N && D && (N = D), N = e.defaults({}, N, e.templateSettings);
                var G = RegExp([(N.escape || H).source, (N.interpolate || H).source, (N.evaluate || H).source].join("|") + "|$", "g"),
                    Z = 0,
                    J = "__p+='";
                v.replace(G, function(E, m, g, U, z) {
                    return J += v.slice(Z, z).replace(Q, V), Z = z + E.length, m ? J += `'+
((__t=(` + m + `))==null?'':_.escape(__t))+
'` : g ? J += `'+
((__t=(` + g + `))==null?'':__t)+
'` : U && (J += `';
` + U + `
__p+='`), E
                }), J += `';
`;
                var k = N.variable;
                if (k) {
                    if (!L.test(k)) throw new Error("variable is not a bare identifier: " + k)
                } else J = `with(obj||{}){
` + J + `}
`, k = "obj";
                J = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + J + `return __p;
`;
                var W;
                try {
                    W = new Function(N.variable || "obj", "_", J)
                } catch (E) {
                    throw E.source = J, E
                }
                var d = function(E) {
                    return W.call(this, E, e)
                };
                return d.source = "function(" + k + `){
` + J + "}", d
            }, e
        }()
    });
    var Ve = c((jU, Ws) => {
        "use strict";
        var ce = {},
            Vt = {},
            Ut = [],
            Pi = window.Webflow || [],
            Et = window.jQuery,
            He = Et(window),
            rb = Et(document),
            tt = Et.isFunction,
            Xe = ce._ = Fs(),
            Ds = ce.tram = Li() && Et.tram,
            an = !1,
            qi = !1;
        Ds.config.hideBackface = !1;
        Ds.config.keepInherited = !0;
        ce.define = function(e, t, r) {
            Vt[e] && Gs(Vt[e]);
            var n = Vt[e] = t(Et, Xe, r) || {};
            return ks(n), n
        };
        ce.require = function(e) {
            return Vt[e]
        };

        function ks(e) {
            ce.env() && (tt(e.design) && He.on("__wf_design", e.design), tt(e.preview) && He.on("__wf_preview", e.preview)), tt(e.destroy) && He.on("__wf_destroy", e.destroy), e.ready && tt(e.ready) && nb(e)
        }

        function nb(e) {
            if (an) {
                e.ready();
                return
            }
            Xe.contains(Ut, e.ready) || Ut.push(e.ready)
        }

        function Gs(e) {
            tt(e.design) && He.off("__wf_design", e.design), tt(e.preview) && He.off("__wf_preview", e.preview), tt(e.destroy) && He.off("__wf_destroy", e.destroy), e.ready && tt(e.ready) && ib(e)
        }

        function ib(e) {
            Ut = Xe.filter(Ut, function(t) {
                return t !== e.ready
            })
        }
        ce.push = function(e) {
            if (an) {
                tt(e) && e();
                return
            }
            Pi.push(e)
        };
        ce.env = function(e) {
            var t = window.__wf_design,
                r = typeof t < "u";
            if (!e) return r;
            if (e === "design") return r && t;
            if (e === "preview") return r && !t;
            if (e === "slug") return r && window.__wf_slug;
            if (e === "editor") return window.WebflowEditor;
            if (e === "test") return window.__wf_test;
            if (e === "frame") return window !== window.top
        };
        var on = navigator.userAgent.toLowerCase(),
            Vs = ce.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
            ob = ce.env.chrome = /chrome/.test(on) && /Google/.test(navigator.vendor) && parseInt(on.match(/chrome\/(\d+)\./)[1], 10),
            ab = ce.env.ios = /(ipod|iphone|ipad)/.test(on);
        ce.env.safari = /safari/.test(on) && !ob && !ab;
        var Ni;
        Vs && rb.on("touchstart mousedown", function(e) {
            Ni = e.target
        });
        ce.validClick = Vs ? function(e) {
            return e === Ni || Et.contains(e, Ni)
        } : function() {
            return !0
        };
        var Us = "resize.webflow orientationchange.webflow load.webflow",
            sb = "scroll.webflow " + Us;
        ce.resize = Fi(He, Us);
        ce.scroll = Fi(He, sb);
        ce.redraw = Fi();

        function Fi(e, t) {
            var r = [],
                n = {};
            return n.up = Xe.throttle(function(i) {
                Xe.each(r, function(o) {
                    o(i)
                })
            }), e && t && e.on(t, n.up), n.on = function(i) {
                typeof i == "function" && (Xe.contains(r, i) || r.push(i))
            }, n.off = function(i) {
                if (!arguments.length) {
                    r = [];
                    return
                }
                r = Xe.filter(r, function(o) {
                    return o !== i
                })
            }, n
        }
        ce.location = function(e) {
            window.location = e
        };
        ce.env() && (ce.location = function() {});
        ce.ready = function() {
            an = !0, qi ? ub() : Xe.each(Ut, Ms), Xe.each(Pi, Ms), ce.resize.up()
        };

        function Ms(e) {
            tt(e) && e()
        }

        function ub() {
            qi = !1, Xe.each(Vt, ks)
        }
        var St;
        ce.load = function(e) {
            St.then(e)
        };

        function Bs() {
            St && (St.reject(), He.off("load", St.resolve)), St = new Et.Deferred, He.on("load", St.resolve)
        }
        ce.destroy = function(e) {
            e = e || {}, qi = !0, He.triggerHandler("__wf_destroy"), e.domready != null && (an = e.domready), Xe.each(Vt, Gs), ce.resize.off(), ce.scroll.off(), ce.redraw.off(), Ut = [], Pi = [], St.state() === "pending" && Bs()
        };
        Et(ce.ready);
        Bs();
        Ws.exports = window.Webflow = ce
    });
    var js = c((zU, Hs) => {
        "use strict";
        var Xs = Ve();
        Xs.define("brand", Hs.exports = function(e) {
            var t = {},
                r = document,
                n = e("html"),
                i = e("body"),
                o = ".w-webflow-badge",
                s = window.location,
                a = /PhantomJS/i.test(navigator.userAgent),
                u = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
                l;
            t.ready = function() {
                var b = n.attr("data-wf-status"),
                    I = n.attr("data-wf-domain") || "";
                /\.webflow\.io$/i.test(I) && s.hostname !== I && (b = !0), b && !a && (l = l || p(), h(), setTimeout(h, 500), e(r).off(u, y).on(u, y))
            };

            function y() {
                var b = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || !!r.webkitFullscreenElement;
                e(l).attr("style", b ? "display: none !important;" : "")
            }

            function p() {
                var b = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"),
                    I = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
                        marginRight: "4px",
                        width: "26px"
                    }),
                    T = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow");
                return b.append(I, T), b[0]
            }

            function h() {
                var b = i.children(o),
                    I = b.length && b.get(0) === l,
                    T = Xs.env("editor");
                if (I) {
                    T && b.remove();
                    return
                }
                b.length && b.remove(), T || i.append(l)
            }
            return t
        })
    });
    var Ks = c((KU, zs) => {
        "use strict";
        var Mi = Ve();
        Mi.define("edit", zs.exports = function(e, t, r) {
            if (r = r || {}, (Mi.env("test") || Mi.env("frame")) && !r.fixture && !cb()) return {
                exit: 1
            };
            var n = {},
                i = e(window),
                o = e(document.documentElement),
                s = document.location,
                a = "hashchange",
                u, l = r.load || h,
                y = !1;
            try {
                y = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
            } catch {}
            y ? l() : s.search ? (/[?&](edit)(?:[=&?]|$)/.test(s.search) || /\?edit$/.test(s.href)) && l() : i.on(a, p).triggerHandler(a);

            function p() {
                u || /\?edit/.test(s.hash) && l()
            }

            function h() {
                u = !0, window.WebflowEditor = !0, i.off(a, p), P(function(M) {
                    e.ajax({
                        url: w("https://editor-api.webflow.com/api/editor/view"),
                        data: {
                            siteId: o.attr("data-wf-site")
                        },
                        xhrFields: {
                            withCredentials: !0
                        },
                        dataType: "json",
                        crossDomain: !0,
                        success: b(M)
                    })
                })
            }

            function b(M) {
                return function(F) {
                    if (!F) {
                        console.error("Could not load editor data");
                        return
                    }
                    F.thirdPartyCookiesSupported = M, I(x(F.scriptPath), function() {
                        window.WebflowEditor(F)
                    })
                }
            }

            function I(M, F) {
                e.ajax({
                    type: "GET",
                    url: M,
                    dataType: "script",
                    cache: !0
                }).then(F, T)
            }

            function T(M, F, q) {
                throw console.error("Could not load editor script: " + F), q
            }

            function x(M) {
                return M.indexOf("//") >= 0 ? M : w("https://editor-api.webflow.com" + M)
            }

            function w(M) {
                return M.replace(/([^:])\/\//g, "$1/")
            }

            function P(M) {
                var F = window.document.createElement("iframe");
                F.src = "https://webflow.com/site/third-party-cookie-check.html", F.style.display = "none", F.sandbox = "allow-scripts allow-same-origin";
                var q = function(X) {
                    X.data === "WF_third_party_cookies_unsupported" ? (S(F, q), M(!1)) : X.data === "WF_third_party_cookies_supported" && (S(F, q), M(!0))
                };
                F.onerror = function() {
                    S(F, q), M(!1)
                }, window.addEventListener("message", q, !1), window.document.body.appendChild(F)
            }

            function S(M, F) {
                window.removeEventListener("message", F, !1), M.remove()
            }
            return n
        });

        function cb() {
            try {
                return window.top.__Cypress__
            } catch {
                return !1
            }
        }
    });
    var $s = c((YU, Ys) => {
        "use strict";
        var lb = Ve();
        lb.define("focus-visible", Ys.exports = function() {
            function e(r) {
                var n = !0,
                    i = !1,
                    o = null,
                    s = {
                        text: !0,
                        search: !0,
                        url: !0,
                        tel: !0,
                        email: !0,
                        password: !0,
                        number: !0,
                        date: !0,
                        month: !0,
                        week: !0,
                        time: !0,
                        datetime: !0,
                        "datetime-local": !0
                    };

                function a(S) {
                    return !!(S && S !== document && S.nodeName !== "HTML" && S.nodeName !== "BODY" && "classList" in S && "contains" in S.classList)
                }

                function u(S) {
                    var M = S.type,
                        F = S.tagName;
                    return !!(F === "INPUT" && s[M] && !S.readOnly || F === "TEXTAREA" && !S.readOnly || S.isContentEditable)
                }

                function l(S) {
                    S.getAttribute("data-wf-focus-visible") || S.setAttribute("data-wf-focus-visible", "true")
                }

                function y(S) {
                    S.getAttribute("data-wf-focus-visible") && S.removeAttribute("data-wf-focus-visible")
                }

                function p(S) {
                    S.metaKey || S.altKey || S.ctrlKey || (a(r.activeElement) && l(r.activeElement), n = !0)
                }

                function h() {
                    n = !1
                }

                function b(S) {
                    a(S.target) && (n || u(S.target)) && l(S.target)
                }

                function I(S) {
                    a(S.target) && S.target.hasAttribute("data-wf-focus-visible") && (i = !0, window.clearTimeout(o), o = window.setTimeout(function() {
                        i = !1
                    }, 100), y(S.target))
                }

                function T() {
                    document.visibilityState === "hidden" && (i && (n = !0), x())
                }

                function x() {
                    document.addEventListener("mousemove", P), document.addEventListener("mousedown", P), document.addEventListener("mouseup", P), document.addEventListener("pointermove", P), document.addEventListener("pointerdown", P), document.addEventListener("pointerup", P), document.addEventListener("touchmove", P), document.addEventListener("touchstart", P), document.addEventListener("touchend", P)
                }

                function w() {
                    document.removeEventListener("mousemove", P), document.removeEventListener("mousedown", P), document.removeEventListener("mouseup", P), document.removeEventListener("pointermove", P), document.removeEventListener("pointerdown", P), document.removeEventListener("pointerup", P), document.removeEventListener("touchmove", P), document.removeEventListener("touchstart", P), document.removeEventListener("touchend", P)
                }

                function P(S) {
                    S.target.nodeName && S.target.nodeName.toLowerCase() === "html" || (n = !1, w())
                }
                document.addEventListener("keydown", p, !0), document.addEventListener("mousedown", h, !0), document.addEventListener("pointerdown", h, !0), document.addEventListener("touchstart", h, !0), document.addEventListener("visibilitychange", T, !0), x(), r.addEventListener("focus", b, !0), r.addEventListener("blur", I, !0)
            }

            function t() {
                if (typeof document < "u") try {
                    document.querySelector(":focus-visible")
                } catch {
                    e(document)
                }
            }
            return {
                ready: t
            }
        })
    });
    var Js = c(($U, Zs) => {
        "use strict";
        var Qs = Ve();
        Qs.define("focus", Zs.exports = function() {
            var e = [],
                t = !1;

            function r(s) {
                t && (s.preventDefault(), s.stopPropagation(), s.stopImmediatePropagation(), e.unshift(s))
            }

            function n(s) {
                var a = s.target,
                    u = a.tagName;
                return /^a$/i.test(u) && a.href != null || /^(button|textarea)$/i.test(u) && a.disabled !== !0 || /^input$/i.test(u) && /^(button|reset|submit|radio|checkbox)$/i.test(a.type) && !a.disabled || !/^(button|input|textarea|select|a)$/i.test(u) && !Number.isNaN(Number.parseFloat(a.tabIndex)) || /^audio$/i.test(u) || /^video$/i.test(u) && a.controls === !0
            }

            function i(s) {
                n(s) && (t = !0, setTimeout(() => {
                    for (t = !1, s.target.focus(); e.length > 0;) {
                        var a = e.pop();
                        a.target.dispatchEvent(new MouseEvent(a.type, a))
                    }
                }, 0))
            }

            function o() {
                typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && Qs.env.safari && (document.addEventListener("mousedown", i, !0), document.addEventListener("mouseup", r, !0), document.addEventListener("click", r, !0))
            }
            return {
                ready: o
            }
        })
    });
    var ru = c((QU, tu) => {
        "use strict";
        var Di = window.jQuery,
            rt = {},
            sn = [],
            eu = ".w-ix",
            un = {
                reset: function(e, t) {
                    t.__wf_intro = null
                },
                intro: function(e, t) {
                    t.__wf_intro || (t.__wf_intro = !0, Di(t).triggerHandler(rt.types.INTRO))
                },
                outro: function(e, t) {
                    t.__wf_intro && (t.__wf_intro = null, Di(t).triggerHandler(rt.types.OUTRO))
                }
            };
        rt.triggers = {};
        rt.types = {
            INTRO: "w-ix-intro" + eu,
            OUTRO: "w-ix-outro" + eu
        };
        rt.init = function() {
            for (var e = sn.length, t = 0; t < e; t++) {
                var r = sn[t];
                r[0](0, r[1])
            }
            sn = [], Di.extend(rt.triggers, un)
        };
        rt.async = function() {
            for (var e in un) {
                var t = un[e];
                un.hasOwnProperty(e) && (rt.triggers[e] = function(r, n) {
                    sn.push([t, n])
                })
            }
        };
        rt.async();
        tu.exports = rt
    });
    var ln = c((ZU, ou) => {
        "use strict";
        var ki = ru();

        function nu(e, t) {
            var r = document.createEvent("CustomEvent");
            r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r)
        }
        var fb = window.jQuery,
            cn = {},
            iu = ".w-ix",
            db = {
                reset: function(e, t) {
                    ki.triggers.reset(e, t)
                },
                intro: function(e, t) {
                    ki.triggers.intro(e, t), nu(t, "COMPONENT_ACTIVE")
                },
                outro: function(e, t) {
                    ki.triggers.outro(e, t), nu(t, "COMPONENT_INACTIVE")
                }
            };
        cn.triggers = {};
        cn.types = {
            INTRO: "w-ix-intro" + iu,
            OUTRO: "w-ix-outro" + iu
        };
        fb.extend(cn.triggers, db);
        ou.exports = cn
    });
    var au = c((JU, ft) => {
        function Gi(e) {
            return ft.exports = Gi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
                return typeof t
            } : function(t) {
                return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, ft.exports.__esModule = !0, ft.exports.default = ft.exports, Gi(e)
        }
        ft.exports = Gi, ft.exports.__esModule = !0, ft.exports.default = ft.exports
    });
    var fn = c((eB, mr) => {
        var pb = au().default;

        function su(e) {
            if (typeof WeakMap != "function") return null;
            var t = new WeakMap,
                r = new WeakMap;
            return (su = function(i) {
                return i ? r : t
            })(e)
        }

        function hb(e, t) {
            if (!t && e && e.__esModule) return e;
            if (e === null || pb(e) !== "object" && typeof e != "function") return {
                default: e
            };
            var r = su(t);
            if (r && r.has(e)) return r.get(e);
            var n = {},
                i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                    var s = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    s && (s.get || s.set) ? Object.defineProperty(n, o, s) : n[o] = e[o]
                }
            return n.default = e, r && r.set(e, n), n
        }
        mr.exports = hb, mr.exports.__esModule = !0, mr.exports.default = mr.exports
    });
    var uu = c((tB, _r) => {
        function gb(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        _r.exports = gb, _r.exports.__esModule = !0, _r.exports.default = _r.exports
    });
    var he = c((rB, cu) => {
        var dn = function(e) {
            return e && e.Math == Math && e
        };
        cu.exports = dn(typeof globalThis == "object" && globalThis) || dn(typeof window == "object" && window) || dn(typeof self == "object" && self) || dn(typeof global == "object" && global) || function() {
            return this
        }() || Function("return this")()
    });
    var Bt = c((nB, lu) => {
        lu.exports = function(e) {
            try {
                return !!e()
            } catch {
                return !0
            }
        }
    });
    var Ct = c((iB, fu) => {
        var vb = Bt();
        fu.exports = !vb(function() {
            return Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1] != 7
        })
    });
    var pn = c((oB, du) => {
        var br = Function.prototype.call;
        du.exports = br.bind ? br.bind(br) : function() {
            return br.apply(br, arguments)
        }
    });
    var vu = c(gu => {
        "use strict";
        var pu = {}.propertyIsEnumerable,
            hu = Object.getOwnPropertyDescriptor,
            yb = hu && !pu.call({
                1: 2
            }, 1);
        gu.f = yb ? function(t) {
            var r = hu(this, t);
            return !!r && r.enumerable
        } : pu
    });
    var Vi = c((sB, yu) => {
        yu.exports = function(e, t) {
            return {
                enumerable: !(e & 1),
                configurable: !(e & 2),
                writable: !(e & 4),
                value: t
            }
        }
    });
    var je = c((uB, mu) => {
        var Eu = Function.prototype,
            Ui = Eu.bind,
            Bi = Eu.call,
            Eb = Ui && Ui.bind(Bi);
        mu.exports = Ui ? function(e) {
            return e && Eb(Bi, e)
        } : function(e) {
            return e && function() {
                return Bi.apply(e, arguments)
            }
        }
    });
    var Tu = c((cB, bu) => {
        var _u = je(),
            mb = _u({}.toString),
            _b = _u("".slice);
        bu.exports = function(e) {
            return _b(mb(e), 8, -1)
        }
    });
    var wu = c((lB, Iu) => {
        var bb = he(),
            Tb = je(),
            Ib = Bt(),
            wb = Tu(),
            Wi = bb.Object,
            Ab = Tb("".split);
        Iu.exports = Ib(function() {
            return !Wi("z").propertyIsEnumerable(0)
        }) ? function(e) {
            return wb(e) == "String" ? Ab(e, "") : Wi(e)
        } : Wi
    });
    var Xi = c((fB, Au) => {
        var Ob = he(),
            xb = Ob.TypeError;
        Au.exports = function(e) {
            if (e == null) throw xb("Can't call method on " + e);
            return e
        }
    });
    var Tr = c((dB, Ou) => {
        var Sb = wu(),
            Cb = Xi();
        Ou.exports = function(e) {
            return Sb(Cb(e))
        }
    });
    var nt = c((pB, xu) => {
        xu.exports = function(e) {
            return typeof e == "function"
        }
    });
    var Wt = c((hB, Su) => {
        var Rb = nt();
        Su.exports = function(e) {
            return typeof e == "object" ? e !== null : Rb(e)
        }
    });
    var Ir = c((gB, Cu) => {
        var Hi = he(),
            Lb = nt(),
            Nb = function(e) {
                return Lb(e) ? e : void 0
            };
        Cu.exports = function(e, t) {
            return arguments.length < 2 ? Nb(Hi[e]) : Hi[e] && Hi[e][t]
        }
    });
    var Lu = c((vB, Ru) => {
        var Pb = je();
        Ru.exports = Pb({}.isPrototypeOf)
    });
    var Pu = c((yB, Nu) => {
        var qb = Ir();
        Nu.exports = qb("navigator", "userAgent") || ""
    });
    var Vu = c((EB, Gu) => {
        var ku = he(),
            ji = Pu(),
            qu = ku.process,
            Fu = ku.Deno,
            Mu = qu && qu.versions || Fu && Fu.version,
            Du = Mu && Mu.v8,
            ze, hn;
        Du && (ze = Du.split("."), hn = ze[0] > 0 && ze[0] < 4 ? 1 : +(ze[0] + ze[1]));
        !hn && ji && (ze = ji.match(/Edge\/(\d+)/), (!ze || ze[1] >= 74) && (ze = ji.match(/Chrome\/(\d+)/), ze && (hn = +ze[1])));
        Gu.exports = hn
    });
    var zi = c((mB, Bu) => {
        var Uu = Vu(),
            Fb = Bt();
        Bu.exports = !!Object.getOwnPropertySymbols && !Fb(function() {
            var e = Symbol();
            return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && Uu && Uu < 41
        })
    });
    var Ki = c((_B, Wu) => {
        var Mb = zi();
        Wu.exports = Mb && !Symbol.sham && typeof Symbol.iterator == "symbol"
    });
    var Yi = c((bB, Xu) => {
        var Db = he(),
            kb = Ir(),
            Gb = nt(),
            Vb = Lu(),
            Ub = Ki(),
            Bb = Db.Object;
        Xu.exports = Ub ? function(e) {
            return typeof e == "symbol"
        } : function(e) {
            var t = kb("Symbol");
            return Gb(t) && Vb(t.prototype, Bb(e))
        }
    });
    var ju = c((TB, Hu) => {
        var Wb = he(),
            Xb = Wb.String;
        Hu.exports = function(e) {
            try {
                return Xb(e)
            } catch {
                return "Object"
            }
        }
    });
    var Ku = c((IB, zu) => {
        var Hb = he(),
            jb = nt(),
            zb = ju(),
            Kb = Hb.TypeError;
        zu.exports = function(e) {
            if (jb(e)) return e;
            throw Kb(zb(e) + " is not a function")
        }
    });
    var $u = c((wB, Yu) => {
        var Yb = Ku();
        Yu.exports = function(e, t) {
            var r = e[t];
            return r == null ? void 0 : Yb(r)
        }
    });
    var Zu = c((AB, Qu) => {
        var $b = he(),
            $i = pn(),
            Qi = nt(),
            Zi = Wt(),
            Qb = $b.TypeError;
        Qu.exports = function(e, t) {
            var r, n;
            if (t === "string" && Qi(r = e.toString) && !Zi(n = $i(r, e)) || Qi(r = e.valueOf) && !Zi(n = $i(r, e)) || t !== "string" && Qi(r = e.toString) && !Zi(n = $i(r, e))) return n;
            throw Qb("Can't convert object to primitive value")
        }
    });
    var ec = c((OB, Ju) => {
        Ju.exports = !1
    });
    var gn = c((xB, rc) => {
        var tc = he(),
            Zb = Object.defineProperty;
        rc.exports = function(e, t) {
            try {
                Zb(tc, e, {
                    value: t,
                    configurable: !0,
                    writable: !0
                })
            } catch {
                tc[e] = t
            }
            return t
        }
    });
    var vn = c((SB, ic) => {
        var Jb = he(),
            eT = gn(),
            nc = "__core-js_shared__",
            tT = Jb[nc] || eT(nc, {});
        ic.exports = tT
    });
    var Ji = c((CB, ac) => {
        var rT = ec(),
            oc = vn();
        (ac.exports = function(e, t) {
            return oc[e] || (oc[e] = t !== void 0 ? t : {})
        })("versions", []).push({
            version: "3.19.0",
            mode: rT ? "pure" : "global",
            copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)"
        })
    });
    var uc = c((RB, sc) => {
        var nT = he(),
            iT = Xi(),
            oT = nT.Object;
        sc.exports = function(e) {
            return oT(iT(e))
        }
    });
    var mt = c((LB, cc) => {
        var aT = je(),
            sT = uc(),
            uT = aT({}.hasOwnProperty);
        cc.exports = Object.hasOwn || function(t, r) {
            return uT(sT(t), r)
        }
    });
    var eo = c((NB, lc) => {
        var cT = je(),
            lT = 0,
            fT = Math.random(),
            dT = cT(1.toString);
        lc.exports = function(e) {
            return "Symbol(" + (e === void 0 ? "" : e) + ")_" + dT(++lT + fT, 36)
        }
    });
    var to = c((PB, gc) => {
        var pT = he(),
            hT = Ji(),
            fc = mt(),
            gT = eo(),
            dc = zi(),
            hc = Ki(),
            Xt = hT("wks"),
            Rt = pT.Symbol,
            pc = Rt && Rt.for,
            vT = hc ? Rt : Rt && Rt.withoutSetter || gT;
        gc.exports = function(e) {
            if (!fc(Xt, e) || !(dc || typeof Xt[e] == "string")) {
                var t = "Symbol." + e;
                dc && fc(Rt, e) ? Xt[e] = Rt[e] : hc && pc ? Xt[e] = pc(t) : Xt[e] = vT(t)
            }
            return Xt[e]
        }
    });
    var mc = c((qB, Ec) => {
        var yT = he(),
            ET = pn(),
            vc = Wt(),
            yc = Yi(),
            mT = $u(),
            _T = Zu(),
            bT = to(),
            TT = yT.TypeError,
            IT = bT("toPrimitive");
        Ec.exports = function(e, t) {
            if (!vc(e) || yc(e)) return e;
            var r = mT(e, IT),
                n;
            if (r) {
                if (t === void 0 && (t = "default"), n = ET(r, e, t), !vc(n) || yc(n)) return n;
                throw TT("Can't convert object to primitive value")
            }
            return t === void 0 && (t = "number"), _T(e, t)
        }
    });
    var ro = c((FB, _c) => {
        var wT = mc(),
            AT = Yi();
        _c.exports = function(e) {
            var t = wT(e, "string");
            return AT(t) ? t : t + ""
        }
    });
    var io = c((MB, Tc) => {
        var OT = he(),
            bc = Wt(),
            no = OT.document,
            xT = bc(no) && bc(no.createElement);
        Tc.exports = function(e) {
            return xT ? no.createElement(e) : {}
        }
    });
    var oo = c((DB, Ic) => {
        var ST = Ct(),
            CT = Bt(),
            RT = io();
        Ic.exports = !ST && !CT(function() {
            return Object.defineProperty(RT("div"), "a", {
                get: function() {
                    return 7
                }
            }).a != 7
        })
    });
    var ao = c(Ac => {
        var LT = Ct(),
            NT = pn(),
            PT = vu(),
            qT = Vi(),
            FT = Tr(),
            MT = ro(),
            DT = mt(),
            kT = oo(),
            wc = Object.getOwnPropertyDescriptor;
        Ac.f = LT ? wc : function(t, r) {
            if (t = FT(t), r = MT(r), kT) try {
                return wc(t, r)
            } catch {}
            if (DT(t, r)) return qT(!NT(PT.f, t, r), t[r])
        }
    });
    var wr = c((GB, xc) => {
        var Oc = he(),
            GT = Wt(),
            VT = Oc.String,
            UT = Oc.TypeError;
        xc.exports = function(e) {
            if (GT(e)) return e;
            throw UT(VT(e) + " is not an object")
        }
    });
    var Ar = c(Rc => {
        var BT = he(),
            WT = Ct(),
            XT = oo(),
            Sc = wr(),
            HT = ro(),
            jT = BT.TypeError,
            Cc = Object.defineProperty;
        Rc.f = WT ? Cc : function(t, r, n) {
            if (Sc(t), r = HT(r), Sc(n), XT) try {
                return Cc(t, r, n)
            } catch {}
            if ("get" in n || "set" in n) throw jT("Accessors not supported");
            return "value" in n && (t[r] = n.value), t
        }
    });
    var yn = c((UB, Lc) => {
        var zT = Ct(),
            KT = Ar(),
            YT = Vi();
        Lc.exports = zT ? function(e, t, r) {
            return KT.f(e, t, YT(1, r))
        } : function(e, t, r) {
            return e[t] = r, e
        }
    });
    var uo = c((BB, Nc) => {
        var $T = je(),
            QT = nt(),
            so = vn(),
            ZT = $T(Function.toString);
        QT(so.inspectSource) || (so.inspectSource = function(e) {
            return ZT(e)
        });
        Nc.exports = so.inspectSource
    });
    var Fc = c((WB, qc) => {
        var JT = he(),
            eI = nt(),
            tI = uo(),
            Pc = JT.WeakMap;
        qc.exports = eI(Pc) && /native code/.test(tI(Pc))
    });
    var co = c((XB, Dc) => {
        var rI = Ji(),
            nI = eo(),
            Mc = rI("keys");
        Dc.exports = function(e) {
            return Mc[e] || (Mc[e] = nI(e))
        }
    });
    var En = c((HB, kc) => {
        kc.exports = {}
    });
    var Xc = c((jB, Wc) => {
        var iI = Fc(),
            Bc = he(),
            lo = je(),
            oI = Wt(),
            aI = yn(),
            fo = mt(),
            po = vn(),
            sI = co(),
            uI = En(),
            Gc = "Object already initialized",
            go = Bc.TypeError,
            cI = Bc.WeakMap,
            mn, Or, _n, lI = function(e) {
                return _n(e) ? Or(e) : mn(e, {})
            },
            fI = function(e) {
                return function(t) {
                    var r;
                    if (!oI(t) || (r = Or(t)).type !== e) throw go("Incompatible receiver, " + e + " required");
                    return r
                }
            };
        iI || po.state ? (_t = po.state || (po.state = new cI), Vc = lo(_t.get), ho = lo(_t.has), Uc = lo(_t.set), mn = function(e, t) {
            if (ho(_t, e)) throw new go(Gc);
            return t.facade = e, Uc(_t, e, t), t
        }, Or = function(e) {
            return Vc(_t, e) || {}
        }, _n = function(e) {
            return ho(_t, e)
        }) : (Lt = sI("state"), uI[Lt] = !0, mn = function(e, t) {
            if (fo(e, Lt)) throw new go(Gc);
            return t.facade = e, aI(e, Lt, t), t
        }, Or = function(e) {
            return fo(e, Lt) ? e[Lt] : {}
        }, _n = function(e) {
            return fo(e, Lt)
        });
        var _t, Vc, ho, Uc, Lt;
        Wc.exports = {
            set: mn,
            get: Or,
            has: _n,
            enforce: lI,
            getterFor: fI
        }
    });
    var zc = c((zB, jc) => {
        var vo = Ct(),
            dI = mt(),
            Hc = Function.prototype,
            pI = vo && Object.getOwnPropertyDescriptor,
            yo = dI(Hc, "name"),
            hI = yo && function() {}.name === "something",
            gI = yo && (!vo || vo && pI(Hc, "name").configurable);
        jc.exports = {
            EXISTS: yo,
            PROPER: hI,
            CONFIGURABLE: gI
        }
    });
    var Zc = c((KB, Qc) => {
        var vI = he(),
            Kc = nt(),
            yI = mt(),
            Yc = yn(),
            EI = gn(),
            mI = uo(),
            $c = Xc(),
            _I = zc().CONFIGURABLE,
            bI = $c.get,
            TI = $c.enforce,
            II = String(String).split("String");
        (Qc.exports = function(e, t, r, n) {
            var i = n ? !!n.unsafe : !1,
                o = n ? !!n.enumerable : !1,
                s = n ? !!n.noTargetGet : !1,
                a = n && n.name !== void 0 ? n.name : t,
                u;
            if (Kc(r) && (String(a).slice(0, 7) === "Symbol(" && (a = "[" + String(a).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!yI(r, "name") || _I && r.name !== a) && Yc(r, "name", a), u = TI(r), u.source || (u.source = II.join(typeof a == "string" ? a : ""))), e === vI) {
                o ? e[t] = r : EI(t, r);
                return
            } else i ? !s && e[t] && (o = !0) : delete e[t];
            o ? e[t] = r : Yc(e, t, r)
        })(Function.prototype, "toString", function() {
            return Kc(this) && bI(this).source || mI(this)
        })
    });
    var Eo = c((YB, Jc) => {
        var wI = Math.ceil,
            AI = Math.floor;
        Jc.exports = function(e) {
            var t = +e;
            return t !== t || t === 0 ? 0 : (t > 0 ? AI : wI)(t)
        }
    });
    var tl = c(($B, el) => {
        var OI = Eo(),
            xI = Math.max,
            SI = Math.min;
        el.exports = function(e, t) {
            var r = OI(e);
            return r < 0 ? xI(r + t, 0) : SI(r, t)
        }
    });
    var nl = c((QB, rl) => {
        var CI = Eo(),
            RI = Math.min;
        rl.exports = function(e) {
            return e > 0 ? RI(CI(e), 9007199254740991) : 0
        }
    });
    var ol = c((ZB, il) => {
        var LI = nl();
        il.exports = function(e) {
            return LI(e.length)
        }
    });
    var mo = c((JB, sl) => {
        var NI = Tr(),
            PI = tl(),
            qI = ol(),
            al = function(e) {
                return function(t, r, n) {
                    var i = NI(t),
                        o = qI(i),
                        s = PI(n, o),
                        a;
                    if (e && r != r) {
                        for (; o > s;)
                            if (a = i[s++], a != a) return !0
                    } else
                        for (; o > s; s++)
                            if ((e || s in i) && i[s] === r) return e || s || 0;
                    return !e && -1
                }
            };
        sl.exports = {
            includes: al(!0),
            indexOf: al(!1)
        }
    });
    var bo = c((e5, cl) => {
        var FI = je(),
            _o = mt(),
            MI = Tr(),
            DI = mo().indexOf,
            kI = En(),
            ul = FI([].push);
        cl.exports = function(e, t) {
            var r = MI(e),
                n = 0,
                i = [],
                o;
            for (o in r) !_o(kI, o) && _o(r, o) && ul(i, o);
            for (; t.length > n;) _o(r, o = t[n++]) && (~DI(i, o) || ul(i, o));
            return i
        }
    });
    var bn = c((t5, ll) => {
        ll.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    });
    var dl = c(fl => {
        var GI = bo(),
            VI = bn(),
            UI = VI.concat("length", "prototype");
        fl.f = Object.getOwnPropertyNames || function(t) {
            return GI(t, UI)
        }
    });
    var hl = c(pl => {
        pl.f = Object.getOwnPropertySymbols
    });
    var vl = c((i5, gl) => {
        var BI = Ir(),
            WI = je(),
            XI = dl(),
            HI = hl(),
            jI = wr(),
            zI = WI([].concat);
        gl.exports = BI("Reflect", "ownKeys") || function(t) {
            var r = XI.f(jI(t)),
                n = HI.f;
            return n ? zI(r, n(t)) : r
        }
    });
    var El = c((o5, yl) => {
        var KI = mt(),
            YI = vl(),
            $I = ao(),
            QI = Ar();
        yl.exports = function(e, t) {
            for (var r = YI(t), n = QI.f, i = $I.f, o = 0; o < r.length; o++) {
                var s = r[o];
                KI(e, s) || n(e, s, i(t, s))
            }
        }
    });
    var _l = c((a5, ml) => {
        var ZI = Bt(),
            JI = nt(),
            e0 = /#|\.prototype\./,
            xr = function(e, t) {
                var r = r0[t0(e)];
                return r == i0 ? !0 : r == n0 ? !1 : JI(t) ? ZI(t) : !!t
            },
            t0 = xr.normalize = function(e) {
                return String(e).replace(e0, ".").toLowerCase()
            },
            r0 = xr.data = {},
            n0 = xr.NATIVE = "N",
            i0 = xr.POLYFILL = "P";
        ml.exports = xr
    });
    var Tl = c((s5, bl) => {
        var To = he(),
            o0 = ao().f,
            a0 = yn(),
            s0 = Zc(),
            u0 = gn(),
            c0 = El(),
            l0 = _l();
        bl.exports = function(e, t) {
            var r = e.target,
                n = e.global,
                i = e.stat,
                o, s, a, u, l, y;
            if (n ? s = To : i ? s = To[r] || u0(r, {}) : s = (To[r] || {}).prototype, s)
                for (a in t) {
                    if (l = t[a], e.noTargetGet ? (y = o0(s, a), u = y && y.value) : u = s[a], o = l0(n ? a : r + (i ? "." : "#") + a, e.forced), !o && u !== void 0) {
                        if (typeof l == typeof u) continue;
                        c0(l, u)
                    }(e.sham || u && u.sham) && a0(l, "sham", !0), s0(s, a, l, e)
                }
        }
    });
    var wl = c((u5, Il) => {
        var f0 = bo(),
            d0 = bn();
        Il.exports = Object.keys || function(t) {
            return f0(t, d0)
        }
    });
    var Ol = c((c5, Al) => {
        var p0 = Ct(),
            h0 = Ar(),
            g0 = wr(),
            v0 = Tr(),
            y0 = wl();
        Al.exports = p0 ? Object.defineProperties : function(t, r) {
            g0(t);
            for (var n = v0(r), i = y0(r), o = i.length, s = 0, a; o > s;) h0.f(t, a = i[s++], n[a]);
            return t
        }
    });
    var Sl = c((l5, xl) => {
        var E0 = Ir();
        xl.exports = E0("document", "documentElement")
    });
    var Ml = c((f5, Fl) => {
        var m0 = wr(),
            _0 = Ol(),
            Cl = bn(),
            b0 = En(),
            T0 = Sl(),
            I0 = io(),
            w0 = co(),
            Rl = ">",
            Ll = "<",
            wo = "prototype",
            Ao = "script",
            Pl = w0("IE_PROTO"),
            Io = function() {},
            ql = function(e) {
                return Ll + Ao + Rl + e + Ll + "/" + Ao + Rl
            },
            Nl = function(e) {
                e.write(ql("")), e.close();
                var t = e.parentWindow.Object;
                return e = null, t
            },
            A0 = function() {
                var e = I0("iframe"),
                    t = "java" + Ao + ":",
                    r;
                return e.style.display = "none", T0.appendChild(e), e.src = String(t), r = e.contentWindow.document, r.open(), r.write(ql("document.F=Object")), r.close(), r.F
            },
            Tn, In = function() {
                try {
                    Tn = new ActiveXObject("htmlfile")
                } catch {}
                In = typeof document < "u" ? document.domain && Tn ? Nl(Tn) : A0() : Nl(Tn);
                for (var e = Cl.length; e--;) delete In[wo][Cl[e]];
                return In()
            };
        b0[Pl] = !0;
        Fl.exports = Object.create || function(t, r) {
            var n;
            return t !== null ? (Io[wo] = m0(t), n = new Io, Io[wo] = null, n[Pl] = t) : n = In(), r === void 0 ? n : _0(n, r)
        }
    });
    var kl = c((d5, Dl) => {
        var O0 = to(),
            x0 = Ml(),
            S0 = Ar(),
            Oo = O0("unscopables"),
            xo = Array.prototype;
        xo[Oo] == null && S0.f(xo, Oo, {
            configurable: !0,
            value: x0(null)
        });
        Dl.exports = function(e) {
            xo[Oo][e] = !0
        }
    });
    var Gl = c(() => {
        "use strict";
        var C0 = Tl(),
            R0 = mo().includes,
            L0 = kl();
        C0({
            target: "Array",
            proto: !0
        }, {
            includes: function(t) {
                return R0(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        });
        L0("includes")
    });
    var Ul = c((g5, Vl) => {
        var N0 = he(),
            P0 = je();
        Vl.exports = function(e, t) {
            return P0(N0[e].prototype[t])
        }
    });
    var Wl = c((v5, Bl) => {
        Gl();
        var q0 = Ul();
        Bl.exports = q0("Array", "includes")
    });
    var Hl = c((y5, Xl) => {
        var F0 = Wl();
        Xl.exports = F0
    });
    var zl = c((E5, jl) => {
        var M0 = Hl();
        jl.exports = M0
    });
    var So = c((m5, Kl) => {
        var D0 = typeof global == "object" && global && global.Object === Object && global;
        Kl.exports = D0
    });
    var Ke = c((_5, Yl) => {
        var k0 = So(),
            G0 = typeof self == "object" && self && self.Object === Object && self,
            V0 = k0 || G0 || Function("return this")();
        Yl.exports = V0
    });
    var Ht = c((b5, $l) => {
        var U0 = Ke(),
            B0 = U0.Symbol;
        $l.exports = B0
    });
    var ef = c((T5, Jl) => {
        var Ql = Ht(),
            Zl = Object.prototype,
            W0 = Zl.hasOwnProperty,
            X0 = Zl.toString,
            Sr = Ql ? Ql.toStringTag : void 0;

        function H0(e) {
            var t = W0.call(e, Sr),
                r = e[Sr];
            try {
                e[Sr] = void 0;
                var n = !0
            } catch {}
            var i = X0.call(e);
            return n && (t ? e[Sr] = r : delete e[Sr]), i
        }
        Jl.exports = H0
    });
    var rf = c((I5, tf) => {
        var j0 = Object.prototype,
            z0 = j0.toString;

        function K0(e) {
            return z0.call(e)
        }
        tf.exports = K0
    });
    var bt = c((w5, af) => {
        var nf = Ht(),
            Y0 = ef(),
            $0 = rf(),
            Q0 = "[object Null]",
            Z0 = "[object Undefined]",
            of = nf ? nf.toStringTag : void 0;

        function J0(e) {
            return e == null ? e === void 0 ? Z0 : Q0 : of && of in Object(e) ? Y0(e) : $0(e)
        }
        af.exports = J0
    });
    var Co = c((A5, sf) => {
        function ew(e, t) {
            return function(r) {
                return e(t(r))
            }
        }
        sf.exports = ew
    });
    var Ro = c((O5, uf) => {
        var tw = Co(),
            rw = tw(Object.getPrototypeOf, Object);
        uf.exports = rw
    });
    var dt = c((x5, cf) => {
        function nw(e) {
            return e != null && typeof e == "object"
        }
        cf.exports = nw
    });
    var Lo = c((S5, ff) => {
        var iw = bt(),
            ow = Ro(),
            aw = dt(),
            sw = "[object Object]",
            uw = Function.prototype,
            cw = Object.prototype,
            lf = uw.toString,
            lw = cw.hasOwnProperty,
            fw = lf.call(Object);

        function dw(e) {
            if (!aw(e) || iw(e) != sw) return !1;
            var t = ow(e);
            if (t === null) return !0;
            var r = lw.call(t, "constructor") && t.constructor;
            return typeof r == "function" && r instanceof r && lf.call(r) == fw
        }
        ff.exports = dw
    });
    var df = c(No => {
        "use strict";
        Object.defineProperty(No, "__esModule", {
            value: !0
        });
        No.default = pw;

        function pw(e) {
            var t, r = e.Symbol;
            return typeof r == "function" ? r.observable ? t = r.observable : (t = r("observable"), r.observable = t) : t = "@@observable", t
        }
    });
    var pf = c((qo, Po) => {
        "use strict";
        Object.defineProperty(qo, "__esModule", {
            value: !0
        });
        var hw = df(),
            gw = vw(hw);

        function vw(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var jt;
        typeof self < "u" ? jt = self : typeof window < "u" ? jt = window : typeof global < "u" ? jt = global : typeof Po < "u" ? jt = Po : jt = Function("return this")();
        var yw = (0, gw.default)(jt);
        qo.default = yw
    });
    var Fo = c(Cr => {
        "use strict";
        Cr.__esModule = !0;
        Cr.ActionTypes = void 0;
        Cr.default = yf;
        var Ew = Lo(),
            mw = vf(Ew),
            _w = pf(),
            hf = vf(_w);

        function vf(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var gf = Cr.ActionTypes = {
            INIT: "@@redux/INIT"
        };

        function yf(e, t, r) {
            var n;
            if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
                if (typeof r != "function") throw new Error("Expected the enhancer to be a function.");
                return r(yf)(e, t)
            }
            if (typeof e != "function") throw new Error("Expected the reducer to be a function.");
            var i = e,
                o = t,
                s = [],
                a = s,
                u = !1;

            function l() {
                a === s && (a = s.slice())
            }

            function y() {
                return o
            }

            function p(T) {
                if (typeof T != "function") throw new Error("Expected listener to be a function.");
                var x = !0;
                return l(), a.push(T),
                    function() {
                        if (x) {
                            x = !1, l();
                            var P = a.indexOf(T);
                            a.splice(P, 1)
                        }
                    }
            }

            function h(T) {
                if (!(0, mw.default)(T)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (typeof T.type > "u") throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (u) throw new Error("Reducers may not dispatch actions.");
                try {
                    u = !0, o = i(o, T)
                } finally {
                    u = !1
                }
                for (var x = s = a, w = 0; w < x.length; w++) x[w]();
                return T
            }

            function b(T) {
                if (typeof T != "function") throw new Error("Expected the nextReducer to be a function.");
                i = T, h({
                    type: gf.INIT
                })
            }

            function I() {
                var T, x = p;
                return T = {
                    subscribe: function(P) {
                        if (typeof P != "object") throw new TypeError("Expected the observer to be an object.");

                        function S() {
                            P.next && P.next(y())
                        }
                        S();
                        var M = x(S);
                        return {
                            unsubscribe: M
                        }
                    }
                }, T[hf.default] = function() {
                    return this
                }, T
            }
            return h({
                type: gf.INIT
            }), n = {
                dispatch: h,
                subscribe: p,
                getState: y,
                replaceReducer: b
            }, n[hf.default] = I, n
        }
    });
    var Do = c(Mo => {
        "use strict";
        Mo.__esModule = !0;
        Mo.default = bw;

        function bw(e) {
            typeof console < "u" && typeof console.error == "function" && console.error(e);
            try {
                throw new Error(e)
            } catch {}
        }
    });
    var _f = c(ko => {
        "use strict";
        ko.__esModule = !0;
        ko.default = Ow;
        var Ef = Fo(),
            Tw = Lo(),
            N5 = mf(Tw),
            Iw = Do(),
            P5 = mf(Iw);

        function mf(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function ww(e, t) {
            var r = t && t.type,
                n = r && '"' + r.toString() + '"' || "an action";
            return "Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
        }

        function Aw(e) {
            Object.keys(e).forEach(function(t) {
                var r = e[t],
                    n = r(void 0, {
                        type: Ef.ActionTypes.INIT
                    });
                if (typeof n > "u") throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
                if (typeof r(void 0, {
                        type: i
                    }) > "u") throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + Ef.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
            })
        }

        function Ow(e) {
            for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                typeof e[i] == "function" && (r[i] = e[i])
            }
            var o = Object.keys(r);
            if (!1) var s;
            var a;
            try {
                Aw(r)
            } catch (u) {
                a = u
            }
            return function() {
                var l = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0],
                    y = arguments[1];
                if (a) throw a;
                if (!1) var p;
                for (var h = !1, b = {}, I = 0; I < o.length; I++) {
                    var T = o[I],
                        x = r[T],
                        w = l[T],
                        P = x(w, y);
                    if (typeof P > "u") {
                        var S = ww(T, y);
                        throw new Error(S)
                    }
                    b[T] = P, h = h || P !== w
                }
                return h ? b : l
            }
        }
    });
    var Tf = c(Go => {
        "use strict";
        Go.__esModule = !0;
        Go.default = xw;

        function bf(e, t) {
            return function() {
                return t(e.apply(void 0, arguments))
            }
        }

        function xw(e, t) {
            if (typeof e == "function") return bf(e, t);
            if (typeof e != "object" || e === null) throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
                var o = r[i],
                    s = e[o];
                typeof s == "function" && (n[o] = bf(s, t))
            }
            return n
        }
    });
    var Uo = c(Vo => {
        "use strict";
        Vo.__esModule = !0;
        Vo.default = Sw;

        function Sw() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            if (t.length === 0) return function(o) {
                return o
            };
            if (t.length === 1) return t[0];
            var n = t[t.length - 1],
                i = t.slice(0, -1);
            return function() {
                return i.reduceRight(function(o, s) {
                    return s(o)
                }, n.apply(void 0, arguments))
            }
        }
    });
    var If = c(Bo => {
        "use strict";
        Bo.__esModule = !0;
        var Cw = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        };
        Bo.default = Pw;
        var Rw = Uo(),
            Lw = Nw(Rw);

        function Nw(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function Pw() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return function(n) {
                return function(i, o, s) {
                    var a = n(i, o, s),
                        u = a.dispatch,
                        l = [],
                        y = {
                            getState: a.getState,
                            dispatch: function(h) {
                                return u(h)
                            }
                        };
                    return l = t.map(function(p) {
                        return p(y)
                    }), u = Lw.default.apply(void 0, l)(a.dispatch), Cw({}, a, {
                        dispatch: u
                    })
                }
            }
        }
    });
    var Wo = c(Ue => {
        "use strict";
        Ue.__esModule = !0;
        Ue.compose = Ue.applyMiddleware = Ue.bindActionCreators = Ue.combineReducers = Ue.createStore = void 0;
        var qw = Fo(),
            Fw = zt(qw),
            Mw = _f(),
            Dw = zt(Mw),
            kw = Tf(),
            Gw = zt(kw),
            Vw = If(),
            Uw = zt(Vw),
            Bw = Uo(),
            Ww = zt(Bw),
            Xw = Do(),
            k5 = zt(Xw);

        function zt(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Ue.createStore = Fw.default;
        Ue.combineReducers = Dw.default;
        Ue.bindActionCreators = Gw.default;
        Ue.applyMiddleware = Uw.default;
        Ue.compose = Ww.default
    });
    var Ye, Xo, it, Hw, jw, wn, zw, Ho = de(() => {
        "use strict";
        Ye = {
            NAVBAR_OPEN: "NAVBAR_OPEN",
            NAVBAR_CLOSE: "NAVBAR_CLOSE",
            TAB_ACTIVE: "TAB_ACTIVE",
            TAB_INACTIVE: "TAB_INACTIVE",
            SLIDER_ACTIVE: "SLIDER_ACTIVE",
            SLIDER_INACTIVE: "SLIDER_INACTIVE",
            DROPDOWN_OPEN: "DROPDOWN_OPEN",
            DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
            MOUSE_CLICK: "MOUSE_CLICK",
            MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
            MOUSE_DOWN: "MOUSE_DOWN",
            MOUSE_UP: "MOUSE_UP",
            MOUSE_OVER: "MOUSE_OVER",
            MOUSE_OUT: "MOUSE_OUT",
            MOUSE_MOVE: "MOUSE_MOVE",
            MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
            SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
            SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
            SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
            ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
            ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
            PAGE_START: "PAGE_START",
            PAGE_FINISH: "PAGE_FINISH",
            PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
            PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
            PAGE_SCROLL: "PAGE_SCROLL"
        }, Xo = {
            ELEMENT: "ELEMENT",
            CLASS: "CLASS",
            PAGE: "PAGE"
        }, it = {
            ELEMENT: "ELEMENT",
            VIEWPORT: "VIEWPORT"
        }, Hw = {
            X_AXIS: "X_AXIS",
            Y_AXIS: "Y_AXIS"
        }, jw = {
            CHILDREN: "CHILDREN",
            SIBLINGS: "SIBLINGS",
            IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
        }, wn = {
            FADE_EFFECT: "FADE_EFFECT",
            SLIDE_EFFECT: "SLIDE_EFFECT",
            GROW_EFFECT: "GROW_EFFECT",
            SHRINK_EFFECT: "SHRINK_EFFECT",
            SPIN_EFFECT: "SPIN_EFFECT",
            FLY_EFFECT: "FLY_EFFECT",
            POP_EFFECT: "POP_EFFECT",
            FLIP_EFFECT: "FLIP_EFFECT",
            JIGGLE_EFFECT: "JIGGLE_EFFECT",
            PULSE_EFFECT: "PULSE_EFFECT",
            DROP_EFFECT: "DROP_EFFECT",
            BLINK_EFFECT: "BLINK_EFFECT",
            BOUNCE_EFFECT: "BOUNCE_EFFECT",
            FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
            FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
            RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
            JELLO_EFFECT: "JELLO_EFFECT",
            GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
            SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
            PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
        }, zw = {
            LEFT: "LEFT",
            RIGHT: "RIGHT",
            BOTTOM: "BOTTOM",
            TOP: "TOP",
            BOTTOM_LEFT: "BOTTOM_LEFT",
            BOTTOM_RIGHT: "BOTTOM_RIGHT",
            TOP_RIGHT: "TOP_RIGHT",
            TOP_LEFT: "TOP_LEFT",
            CLOCKWISE: "CLOCKWISE",
            COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
        }
    });
    var qe, Kw, An = de(() => {
        "use strict";
        qe = {
            TRANSFORM_MOVE: "TRANSFORM_MOVE",
            TRANSFORM_SCALE: "TRANSFORM_SCALE",
            TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
            TRANSFORM_SKEW: "TRANSFORM_SKEW",
            STYLE_OPACITY: "STYLE_OPACITY",
            STYLE_SIZE: "STYLE_SIZE",
            STYLE_FILTER: "STYLE_FILTER",
            STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
            STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
            STYLE_BORDER: "STYLE_BORDER",
            STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
            OBJECT_VALUE: "OBJECT_VALUE",
            PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
            PLUGIN_SPLINE: "PLUGIN_SPLINE",
            PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
            GENERAL_DISPLAY: "GENERAL_DISPLAY",
            GENERAL_START_ACTION: "GENERAL_START_ACTION",
            GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
            GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
            GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
            GENERAL_LOOP: "GENERAL_LOOP",
            STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
        }, Kw = {
            ELEMENT: "ELEMENT",
            ELEMENT_CLASS: "ELEMENT_CLASS",
            TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
        }
    });
    var Yw, wf = de(() => {
        "use strict";
        Yw = {
            MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
            MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
            MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
            SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
            SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
            MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
            PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
            PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
            PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
            NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
            DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
            ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
            TAB_INTERACTION: "TAB_INTERACTION",
            SLIDER_INTERACTION: "SLIDER_INTERACTION"
        }
    });
    var $w, Qw, Zw, Jw, eA, tA, rA, jo, Af = de(() => {
        "use strict";
        An();
        ({
            TRANSFORM_MOVE: $w,
            TRANSFORM_SCALE: Qw,
            TRANSFORM_ROTATE: Zw,
            TRANSFORM_SKEW: Jw,
            STYLE_SIZE: eA,
            STYLE_FILTER: tA,
            STYLE_FONT_VARIATION: rA
        } = qe), jo = {
            [$w]: !0,
            [Qw]: !0,
            [Zw]: !0,
            [Jw]: !0,
            [eA]: !0,
            [tA]: !0,
            [rA]: !0
        }
    });
    var me = {};
    Pe(me, {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: () => mA,
        IX2_ANIMATION_FRAME_CHANGED: () => pA,
        IX2_CLEAR_REQUESTED: () => lA,
        IX2_ELEMENT_STATE_CHANGED: () => EA,
        IX2_EVENT_LISTENER_ADDED: () => fA,
        IX2_EVENT_STATE_CHANGED: () => dA,
        IX2_INSTANCE_ADDED: () => gA,
        IX2_INSTANCE_REMOVED: () => yA,
        IX2_INSTANCE_STARTED: () => vA,
        IX2_MEDIA_QUERIES_DEFINED: () => bA,
        IX2_PARAMETER_CHANGED: () => hA,
        IX2_PLAYBACK_REQUESTED: () => uA,
        IX2_PREVIEW_REQUESTED: () => sA,
        IX2_RAW_DATA_IMPORTED: () => nA,
        IX2_SESSION_INITIALIZED: () => iA,
        IX2_SESSION_STARTED: () => oA,
        IX2_SESSION_STOPPED: () => aA,
        IX2_STOP_REQUESTED: () => cA,
        IX2_TEST_FRAME_RENDERED: () => TA,
        IX2_VIEWPORT_WIDTH_CHANGED: () => _A
    });
    var nA, iA, oA, aA, sA, uA, cA, lA, fA, dA, pA, hA, gA, vA, yA, EA, mA, _A, bA, TA, Of = de(() => {
        "use strict";
        nA = "IX2_RAW_DATA_IMPORTED", iA = "IX2_SESSION_INITIALIZED", oA = "IX2_SESSION_STARTED", aA = "IX2_SESSION_STOPPED", sA = "IX2_PREVIEW_REQUESTED", uA = "IX2_PLAYBACK_REQUESTED", cA = "IX2_STOP_REQUESTED", lA = "IX2_CLEAR_REQUESTED", fA = "IX2_EVENT_LISTENER_ADDED", dA = "IX2_EVENT_STATE_CHANGED", pA = "IX2_ANIMATION_FRAME_CHANGED", hA = "IX2_PARAMETER_CHANGED", gA = "IX2_INSTANCE_ADDED", vA = "IX2_INSTANCE_STARTED", yA = "IX2_INSTANCE_REMOVED", EA = "IX2_ELEMENT_STATE_CHANGED", mA = "IX2_ACTION_LIST_PLAYBACK_CHANGED", _A = "IX2_VIEWPORT_WIDTH_CHANGED", bA = "IX2_MEDIA_QUERIES_DEFINED", TA = "IX2_TEST_FRAME_RENDERED"
    });
    var Ae = {};
    Pe(Ae, {
        ABSTRACT_NODE: () => _O,
        AUTO: () => cO,
        BACKGROUND: () => nO,
        BACKGROUND_COLOR: () => rO,
        BAR_DELIMITER: () => dO,
        BORDER_COLOR: () => iO,
        BOUNDARY_SELECTOR: () => xA,
        CHILDREN: () => pO,
        COLON_DELIMITER: () => fO,
        COLOR: () => oO,
        COMMA_DELIMITER: () => lO,
        CONFIG_UNIT: () => FA,
        CONFIG_VALUE: () => LA,
        CONFIG_X_UNIT: () => NA,
        CONFIG_X_VALUE: () => SA,
        CONFIG_Y_UNIT: () => PA,
        CONFIG_Y_VALUE: () => CA,
        CONFIG_Z_UNIT: () => qA,
        CONFIG_Z_VALUE: () => RA,
        DISPLAY: () => aO,
        FILTER: () => ZA,
        FLEX: () => sO,
        FONT_VARIATION_SETTINGS: () => JA,
        HEIGHT: () => tO,
        HTML_ELEMENT: () => EO,
        IMMEDIATE_CHILDREN: () => hO,
        IX2_ID_DELIMITER: () => IA,
        OPACITY: () => QA,
        PARENT: () => vO,
        PLAIN_OBJECT: () => mO,
        PRESERVE_3D: () => yO,
        RENDER_GENERAL: () => TO,
        RENDER_PLUGIN: () => wO,
        RENDER_STYLE: () => IO,
        RENDER_TRANSFORM: () => bO,
        ROTATE_X: () => HA,
        ROTATE_Y: () => jA,
        ROTATE_Z: () => zA,
        SCALE_3D: () => XA,
        SCALE_X: () => UA,
        SCALE_Y: () => BA,
        SCALE_Z: () => WA,
        SIBLINGS: () => gO,
        SKEW: () => KA,
        SKEW_X: () => YA,
        SKEW_Y: () => $A,
        TRANSFORM: () => MA,
        TRANSLATE_3D: () => VA,
        TRANSLATE_X: () => DA,
        TRANSLATE_Y: () => kA,
        TRANSLATE_Z: () => GA,
        WF_PAGE: () => wA,
        WIDTH: () => eO,
        WILL_CHANGE: () => uO,
        W_MOD_IX: () => OA,
        W_MOD_JS: () => AA
    });
    var IA, wA, AA, OA, xA, SA, CA, RA, LA, NA, PA, qA, FA, MA, DA, kA, GA, VA, UA, BA, WA, XA, HA, jA, zA, KA, YA, $A, QA, ZA, JA, eO, tO, rO, nO, iO, oO, aO, sO, uO, cO, lO, fO, dO, pO, hO, gO, vO, yO, EO, mO, _O, bO, TO, IO, wO, xf = de(() => {
        "use strict";
        IA = "|", wA = "data-wf-page", AA = "w-mod-js", OA = "w-mod-ix", xA = ".w-dyn-item", SA = "xValue", CA = "yValue", RA = "zValue", LA = "value", NA = "xUnit", PA = "yUnit", qA = "zUnit", FA = "unit", MA = "transform", DA = "translateX", kA = "translateY", GA = "translateZ", VA = "translate3d", UA = "scaleX", BA = "scaleY", WA = "scaleZ", XA = "scale3d", HA = "rotateX", jA = "rotateY", zA = "rotateZ", KA = "skew", YA = "skewX", $A = "skewY", QA = "opacity", ZA = "filter", JA = "font-variation-settings", eO = "width", tO = "height", rO = "backgroundColor", nO = "background", iO = "borderColor", oO = "color", aO = "display", sO = "flex", uO = "willChange", cO = "AUTO", lO = ",", fO = ":", dO = "|", pO = "CHILDREN", hO = "IMMEDIATE_CHILDREN", gO = "SIBLINGS", vO = "PARENT", yO = "preserve-3d", EO = "HTML_ELEMENT", mO = "PLAIN_OBJECT", _O = "ABSTRACT_NODE", bO = "RENDER_TRANSFORM", TO = "RENDER_GENERAL", IO = "RENDER_STYLE", wO = "RENDER_PLUGIN"
    });
    var Sf = {};
    Pe(Sf, {
        ActionAppliesTo: () => Kw,
        ActionTypeConsts: () => qe,
        EventAppliesTo: () => Xo,
        EventBasedOn: () => it,
        EventContinuousMouseAxes: () => Hw,
        EventLimitAffectedElements: () => jw,
        EventTypeConsts: () => Ye,
        IX2EngineActionTypes: () => me,
        IX2EngineConstants: () => Ae,
        InteractionTypeConsts: () => Yw,
        QuickEffectDirectionConsts: () => zw,
        QuickEffectIds: () => wn,
        ReducedMotionTypes: () => jo
    });
    var Fe = de(() => {
        "use strict";
        Ho();
        An();
        wf();
        Af();
        Of();
        xf();
        An();
        Ho()
    });
    var AO, Cf, Rf = de(() => {
        "use strict";
        Fe();
        ({
            IX2_RAW_DATA_IMPORTED: AO
        } = me), Cf = (e = Object.freeze({}), t) => {
            switch (t.type) {
                case AO:
                    return t.payload.ixData || Object.freeze({});
                default:
                    return e
            }
        }
    });
    var Kt = c(ve => {
        "use strict";
        Object.defineProperty(ve, "__esModule", {
            value: !0
        });
        var OO = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
            return typeof e
        } : function(e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        ve.clone = xn;
        ve.addLast = Pf;
        ve.addFirst = qf;
        ve.removeLast = Ff;
        ve.removeFirst = Mf;
        ve.insert = Df;
        ve.removeAt = kf;
        ve.replaceAt = Gf;
        ve.getIn = Sn;
        ve.set = Cn;
        ve.setIn = Rn;
        ve.update = Uf;
        ve.updateIn = Bf;
        ve.merge = Wf;
        ve.mergeDeep = Xf;
        ve.mergeIn = Hf;
        ve.omit = jf;
        ve.addDefaults = zf;
        var Lf = "INVALID_ARGS";

        function Nf(e) {
            throw new Error(e)
        }

        function zo(e) {
            var t = Object.keys(e);
            return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
        }
        var xO = {}.hasOwnProperty;

        function xn(e) {
            if (Array.isArray(e)) return e.slice();
            for (var t = zo(e), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                r[i] = e[i]
            }
            return r
        }

        function Me(e, t, r) {
            var n = r;
            n == null && Nf(Lf);
            for (var i = !1, o = arguments.length, s = Array(o > 3 ? o - 3 : 0), a = 3; a < o; a++) s[a - 3] = arguments[a];
            for (var u = 0; u < s.length; u++) {
                var l = s[u];
                if (l != null) {
                    var y = zo(l);
                    if (y.length)
                        for (var p = 0; p <= y.length; p++) {
                            var h = y[p];
                            if (!(e && n[h] !== void 0)) {
                                var b = l[h];
                                t && On(n[h]) && On(b) && (b = Me(e, t, n[h], b)), !(b === void 0 || b === n[h]) && (i || (i = !0, n = xn(n)), n[h] = b)
                            }
                        }
                }
            }
            return n
        }

        function On(e) {
            var t = typeof e > "u" ? "undefined" : OO(e);
            return e != null && (t === "object" || t === "function")
        }

        function Pf(e, t) {
            return Array.isArray(t) ? e.concat(t) : e.concat([t])
        }

        function qf(e, t) {
            return Array.isArray(t) ? t.concat(e) : [t].concat(e)
        }

        function Ff(e) {
            return e.length ? e.slice(0, e.length - 1) : e
        }

        function Mf(e) {
            return e.length ? e.slice(1) : e
        }

        function Df(e, t, r) {
            return e.slice(0, t).concat(Array.isArray(r) ? r : [r]).concat(e.slice(t))
        }

        function kf(e, t) {
            return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
        }

        function Gf(e, t, r) {
            if (e[t] === r) return e;
            for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
            return i[t] = r, i
        }

        function Sn(e, t) {
            if (!Array.isArray(t) && Nf(Lf), e != null) {
                for (var r = e, n = 0; n < t.length; n++) {
                    var i = t[n];
                    if (r = r ? .[i], r === void 0) return r
                }
                return r
            }
        }

        function Cn(e, t, r) {
            var n = typeof t == "number" ? [] : {},
                i = e ? ? n;
            if (i[t] === r) return i;
            var o = xn(i);
            return o[t] = r, o
        }

        function Vf(e, t, r, n) {
            var i = void 0,
                o = t[n];
            if (n === t.length - 1) i = r;
            else {
                var s = On(e) && On(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
                i = Vf(s, t, r, n + 1)
            }
            return Cn(e, o, i)
        }

        function Rn(e, t, r) {
            return t.length ? Vf(e, t, r, 0) : r
        }

        function Uf(e, t, r) {
            var n = e ? .[t],
                i = r(n);
            return Cn(e, t, i)
        }

        function Bf(e, t, r) {
            var n = Sn(e, t),
                i = r(n);
            return Rn(e, t, i)
        }

        function Wf(e, t, r, n, i, o) {
            for (var s = arguments.length, a = Array(s > 6 ? s - 6 : 0), u = 6; u < s; u++) a[u - 6] = arguments[u];
            return a.length ? Me.call.apply(Me, [null, !1, !1, e, t, r, n, i, o].concat(a)) : Me(!1, !1, e, t, r, n, i, o)
        }

        function Xf(e, t, r, n, i, o) {
            for (var s = arguments.length, a = Array(s > 6 ? s - 6 : 0), u = 6; u < s; u++) a[u - 6] = arguments[u];
            return a.length ? Me.call.apply(Me, [null, !1, !0, e, t, r, n, i, o].concat(a)) : Me(!1, !0, e, t, r, n, i, o)
        }

        function Hf(e, t, r, n, i, o, s) {
            var a = Sn(e, t);
            a == null && (a = {});
            for (var u = void 0, l = arguments.length, y = Array(l > 7 ? l - 7 : 0), p = 7; p < l; p++) y[p - 7] = arguments[p];
            return y.length ? u = Me.call.apply(Me, [null, !1, !1, a, r, n, i, o, s].concat(y)) : u = Me(!1, !1, a, r, n, i, o, s), Rn(e, t, u)
        }

        function jf(e, t) {
            for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
                if (xO.call(e, r[i])) {
                    n = !0;
                    break
                }
            if (!n) return e;
            for (var o = {}, s = zo(e), a = 0; a < s.length; a++) {
                var u = s[a];
                r.indexOf(u) >= 0 || (o[u] = e[u])
            }
            return o
        }

        function zf(e, t, r, n, i, o) {
            for (var s = arguments.length, a = Array(s > 6 ? s - 6 : 0), u = 6; u < s; u++) a[u - 6] = arguments[u];
            return a.length ? Me.call.apply(Me, [null, !0, !1, e, t, r, n, i, o].concat(a)) : Me(!0, !1, e, t, r, n, i, o)
        }
        var SO = {
            clone: xn,
            addLast: Pf,
            addFirst: qf,
            removeLast: Ff,
            removeFirst: Mf,
            insert: Df,
            removeAt: kf,
            replaceAt: Gf,
            getIn: Sn,
            set: Cn,
            setIn: Rn,
            update: Uf,
            updateIn: Bf,
            merge: Wf,
            mergeDeep: Xf,
            mergeIn: Hf,
            omit: jf,
            addDefaults: zf
        };
        ve.default = SO
    });
    var Yf, CO, RO, LO, NO, PO, Kf, $f, Qf = de(() => {
        "use strict";
        Fe();
        Yf = oe(Kt()), {
            IX2_PREVIEW_REQUESTED: CO,
            IX2_PLAYBACK_REQUESTED: RO,
            IX2_STOP_REQUESTED: LO,
            IX2_CLEAR_REQUESTED: NO
        } = me, PO = {
            preview: {},
            playback: {},
            stop: {},
            clear: {}
        }, Kf = Object.create(null, {
            [CO]: {
                value: "preview"
            },
            [RO]: {
                value: "playback"
            },
            [LO]: {
                value: "stop"
            },
            [NO]: {
                value: "clear"
            }
        }), $f = (e = PO, t) => {
            if (t.type in Kf) {
                let r = [Kf[t.type]];
                return (0, Yf.setIn)(e, [r], { ...t.payload
                })
            }
            return e
        }
    });
    var Ce, qO, FO, MO, DO, kO, GO, VO, UO, BO, WO, Zf, XO, Jf, ed = de(() => {
        "use strict";
        Fe();
        Ce = oe(Kt()), {
            IX2_SESSION_INITIALIZED: qO,
            IX2_SESSION_STARTED: FO,
            IX2_TEST_FRAME_RENDERED: MO,
            IX2_SESSION_STOPPED: DO,
            IX2_EVENT_LISTENER_ADDED: kO,
            IX2_EVENT_STATE_CHANGED: GO,
            IX2_ANIMATION_FRAME_CHANGED: VO,
            IX2_ACTION_LIST_PLAYBACK_CHANGED: UO,
            IX2_VIEWPORT_WIDTH_CHANGED: BO,
            IX2_MEDIA_QUERIES_DEFINED: WO
        } = me, Zf = {
            active: !1,
            tick: 0,
            eventListeners: [],
            eventState: {},
            playbackState: {},
            viewportWidth: 0,
            mediaQueryKey: null,
            hasBoundaryNodes: !1,
            hasDefinedMediaQueries: !1,
            reducedMotion: !1
        }, XO = 20, Jf = (e = Zf, t) => {
            switch (t.type) {
                case qO:
                    {
                        let {
                            hasBoundaryNodes: r,
                            reducedMotion: n
                        } = t.payload;
                        return (0, Ce.merge)(e, {
                            hasBoundaryNodes: r,
                            reducedMotion: n
                        })
                    }
                case FO:
                    return (0, Ce.set)(e, "active", !0);
                case MO:
                    {
                        let {
                            payload: {
                                step: r = XO
                            }
                        } = t;
                        return (0, Ce.set)(e, "tick", e.tick + r)
                    }
                case DO:
                    return Zf;
                case VO:
                    {
                        let {
                            payload: {
                                now: r
                            }
                        } = t;
                        return (0, Ce.set)(e, "tick", r)
                    }
                case kO:
                    {
                        let r = (0, Ce.addLast)(e.eventListeners, t.payload);
                        return (0, Ce.set)(e, "eventListeners", r)
                    }
                case GO:
                    {
                        let {
                            stateKey: r,
                            newState: n
                        } = t.payload;
                        return (0, Ce.setIn)(e, ["eventState", r], n)
                    }
                case UO:
                    {
                        let {
                            actionListId: r,
                            isPlaying: n
                        } = t.payload;
                        return (0, Ce.setIn)(e, ["playbackState", r], n)
                    }
                case BO:
                    {
                        let {
                            width: r,
                            mediaQueries: n
                        } = t.payload,
                        i = n.length,
                        o = null;
                        for (let s = 0; s < i; s++) {
                            let {
                                key: a,
                                min: u,
                                max: l
                            } = n[s];
                            if (r >= u && r <= l) {
                                o = a;
                                break
                            }
                        }
                        return (0, Ce.merge)(e, {
                            viewportWidth: r,
                            mediaQueryKey: o
                        })
                    }
                case WO:
                    return (0, Ce.set)(e, "hasDefinedMediaQueries", !0);
                default:
                    return e
            }
        }
    });
    var rd = c((iW, td) => {
        function HO() {
            this.__data__ = [], this.size = 0
        }
        td.exports = HO
    });
    var Ln = c((oW, nd) => {
        function jO(e, t) {
            return e === t || e !== e && t !== t
        }
        nd.exports = jO
    });
    var Rr = c((aW, id) => {
        var zO = Ln();

        function KO(e, t) {
            for (var r = e.length; r--;)
                if (zO(e[r][0], t)) return r;
            return -1
        }
        id.exports = KO
    });
    var ad = c((sW, od) => {
        var YO = Rr(),
            $O = Array.prototype,
            QO = $O.splice;

        function ZO(e) {
            var t = this.__data__,
                r = YO(t, e);
            if (r < 0) return !1;
            var n = t.length - 1;
            return r == n ? t.pop() : QO.call(t, r, 1), --this.size, !0
        }
        od.exports = ZO
    });
    var ud = c((uW, sd) => {
        var JO = Rr();

        function ex(e) {
            var t = this.__data__,
                r = JO(t, e);
            return r < 0 ? void 0 : t[r][1]
        }
        sd.exports = ex
    });
    var ld = c((cW, cd) => {
        var tx = Rr();

        function rx(e) {
            return tx(this.__data__, e) > -1
        }
        cd.exports = rx
    });
    var dd = c((lW, fd) => {
        var nx = Rr();

        function ix(e, t) {
            var r = this.__data__,
                n = nx(r, e);
            return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
        }
        fd.exports = ix
    });
    var Lr = c((fW, pd) => {
        var ox = rd(),
            ax = ad(),
            sx = ud(),
            ux = ld(),
            cx = dd();

        function Yt(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Yt.prototype.clear = ox;
        Yt.prototype.delete = ax;
        Yt.prototype.get = sx;
        Yt.prototype.has = ux;
        Yt.prototype.set = cx;
        pd.exports = Yt
    });
    var gd = c((dW, hd) => {
        var lx = Lr();

        function fx() {
            this.__data__ = new lx, this.size = 0
        }
        hd.exports = fx
    });
    var yd = c((pW, vd) => {
        function dx(e) {
            var t = this.__data__,
                r = t.delete(e);
            return this.size = t.size, r
        }
        vd.exports = dx
    });
    var md = c((hW, Ed) => {
        function px(e) {
            return this.__data__.get(e)
        }
        Ed.exports = px
    });
    var bd = c((gW, _d) => {
        function hx(e) {
            return this.__data__.has(e)
        }
        _d.exports = hx
    });
    var ot = c((vW, Td) => {
        function gx(e) {
            var t = typeof e;
            return e != null && (t == "object" || t == "function")
        }
        Td.exports = gx
    });
    var Ko = c((yW, Id) => {
        var vx = bt(),
            yx = ot(),
            Ex = "[object AsyncFunction]",
            mx = "[object Function]",
            _x = "[object GeneratorFunction]",
            bx = "[object Proxy]";

        function Tx(e) {
            if (!yx(e)) return !1;
            var t = vx(e);
            return t == mx || t == _x || t == Ex || t == bx
        }
        Id.exports = Tx
    });
    var Ad = c((EW, wd) => {
        var Ix = Ke(),
            wx = Ix["__core-js_shared__"];
        wd.exports = wx
    });
    var Sd = c((mW, xd) => {
        var Yo = Ad(),
            Od = function() {
                var e = /[^.]+$/.exec(Yo && Yo.keys && Yo.keys.IE_PROTO || "");
                return e ? "Symbol(src)_1." + e : ""
            }();

        function Ax(e) {
            return !!Od && Od in e
        }
        xd.exports = Ax
    });
    var $o = c((_W, Cd) => {
        var Ox = Function.prototype,
            xx = Ox.toString;

        function Sx(e) {
            if (e != null) {
                try {
                    return xx.call(e)
                } catch {}
                try {
                    return e + ""
                } catch {}
            }
            return ""
        }
        Cd.exports = Sx
    });
    var Ld = c((bW, Rd) => {
        var Cx = Ko(),
            Rx = Sd(),
            Lx = ot(),
            Nx = $o(),
            Px = /[\\^$.*+?()[\]{}|]/g,
            qx = /^\[object .+?Constructor\]$/,
            Fx = Function.prototype,
            Mx = Object.prototype,
            Dx = Fx.toString,
            kx = Mx.hasOwnProperty,
            Gx = RegExp("^" + Dx.call(kx).replace(Px, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

        function Vx(e) {
            if (!Lx(e) || Rx(e)) return !1;
            var t = Cx(e) ? Gx : qx;
            return t.test(Nx(e))
        }
        Rd.exports = Vx
    });
    var Pd = c((TW, Nd) => {
        function Ux(e, t) {
            return e ? .[t]
        }
        Nd.exports = Ux
    });
    var Tt = c((IW, qd) => {
        var Bx = Ld(),
            Wx = Pd();

        function Xx(e, t) {
            var r = Wx(e, t);
            return Bx(r) ? r : void 0
        }
        qd.exports = Xx
    });
    var Nn = c((wW, Fd) => {
        var Hx = Tt(),
            jx = Ke(),
            zx = Hx(jx, "Map");
        Fd.exports = zx
    });
    var Nr = c((AW, Md) => {
        var Kx = Tt(),
            Yx = Kx(Object, "create");
        Md.exports = Yx
    });
    var Gd = c((OW, kd) => {
        var Dd = Nr();

        function $x() {
            this.__data__ = Dd ? Dd(null) : {}, this.size = 0
        }
        kd.exports = $x
    });
    var Ud = c((xW, Vd) => {
        function Qx(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0, t
        }
        Vd.exports = Qx
    });
    var Wd = c((SW, Bd) => {
        var Zx = Nr(),
            Jx = "__lodash_hash_undefined__",
            eS = Object.prototype,
            tS = eS.hasOwnProperty;

        function rS(e) {
            var t = this.__data__;
            if (Zx) {
                var r = t[e];
                return r === Jx ? void 0 : r
            }
            return tS.call(t, e) ? t[e] : void 0
        }
        Bd.exports = rS
    });
    var Hd = c((CW, Xd) => {
        var nS = Nr(),
            iS = Object.prototype,
            oS = iS.hasOwnProperty;

        function aS(e) {
            var t = this.__data__;
            return nS ? t[e] !== void 0 : oS.call(t, e)
        }
        Xd.exports = aS
    });
    var zd = c((RW, jd) => {
        var sS = Nr(),
            uS = "__lodash_hash_undefined__";

        function cS(e, t) {
            var r = this.__data__;
            return this.size += this.has(e) ? 0 : 1, r[e] = sS && t === void 0 ? uS : t, this
        }
        jd.exports = cS
    });
    var Yd = c((LW, Kd) => {
        var lS = Gd(),
            fS = Ud(),
            dS = Wd(),
            pS = Hd(),
            hS = zd();

        function $t(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        $t.prototype.clear = lS;
        $t.prototype.delete = fS;
        $t.prototype.get = dS;
        $t.prototype.has = pS;
        $t.prototype.set = hS;
        Kd.exports = $t
    });
    var Zd = c((NW, Qd) => {
        var $d = Yd(),
            gS = Lr(),
            vS = Nn();

        function yS() {
            this.size = 0, this.__data__ = {
                hash: new $d,
                map: new(vS || gS),
                string: new $d
            }
        }
        Qd.exports = yS
    });
    var ep = c((PW, Jd) => {
        function ES(e) {
            var t = typeof e;
            return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
        }
        Jd.exports = ES
    });
    var Pr = c((qW, tp) => {
        var mS = ep();

        function _S(e, t) {
            var r = e.__data__;
            return mS(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
        }
        tp.exports = _S
    });
    var np = c((FW, rp) => {
        var bS = Pr();

        function TS(e) {
            var t = bS(this, e).delete(e);
            return this.size -= t ? 1 : 0, t
        }
        rp.exports = TS
    });
    var op = c((MW, ip) => {
        var IS = Pr();

        function wS(e) {
            return IS(this, e).get(e)
        }
        ip.exports = wS
    });
    var sp = c((DW, ap) => {
        var AS = Pr();

        function OS(e) {
            return AS(this, e).has(e)
        }
        ap.exports = OS
    });
    var cp = c((kW, up) => {
        var xS = Pr();

        function SS(e, t) {
            var r = xS(this, e),
                n = r.size;
            return r.set(e, t), this.size += r.size == n ? 0 : 1, this
        }
        up.exports = SS
    });
    var Pn = c((GW, lp) => {
        var CS = Zd(),
            RS = np(),
            LS = op(),
            NS = sp(),
            PS = cp();

        function Qt(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Qt.prototype.clear = CS;
        Qt.prototype.delete = RS;
        Qt.prototype.get = LS;
        Qt.prototype.has = NS;
        Qt.prototype.set = PS;
        lp.exports = Qt
    });
    var dp = c((VW, fp) => {
        var qS = Lr(),
            FS = Nn(),
            MS = Pn(),
            DS = 200;

        function kS(e, t) {
            var r = this.__data__;
            if (r instanceof qS) {
                var n = r.__data__;
                if (!FS || n.length < DS - 1) return n.push([e, t]), this.size = ++r.size, this;
                r = this.__data__ = new MS(n)
            }
            return r.set(e, t), this.size = r.size, this
        }
        fp.exports = kS
    });
    var Qo = c((UW, pp) => {
        var GS = Lr(),
            VS = gd(),
            US = yd(),
            BS = md(),
            WS = bd(),
            XS = dp();

        function Zt(e) {
            var t = this.__data__ = new GS(e);
            this.size = t.size
        }
        Zt.prototype.clear = VS;
        Zt.prototype.delete = US;
        Zt.prototype.get = BS;
        Zt.prototype.has = WS;
        Zt.prototype.set = XS;
        pp.exports = Zt
    });
    var gp = c((BW, hp) => {
        var HS = "__lodash_hash_undefined__";

        function jS(e) {
            return this.__data__.set(e, HS), this
        }
        hp.exports = jS
    });
    var yp = c((WW, vp) => {
        function zS(e) {
            return this.__data__.has(e)
        }
        vp.exports = zS
    });
    var mp = c((XW, Ep) => {
        var KS = Pn(),
            YS = gp(),
            $S = yp();

        function qn(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.__data__ = new KS; ++t < r;) this.add(e[t])
        }
        qn.prototype.add = qn.prototype.push = YS;
        qn.prototype.has = $S;
        Ep.exports = qn
    });
    var bp = c((HW, _p) => {
        function QS(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n;)
                if (t(e[r], r, e)) return !0;
            return !1
        }
        _p.exports = QS
    });
    var Ip = c((jW, Tp) => {
        function ZS(e, t) {
            return e.has(t)
        }
        Tp.exports = ZS
    });
    var Zo = c((zW, wp) => {
        var JS = mp(),
            eC = bp(),
            tC = Ip(),
            rC = 1,
            nC = 2;

        function iC(e, t, r, n, i, o) {
            var s = r & rC,
                a = e.length,
                u = t.length;
            if (a != u && !(s && u > a)) return !1;
            var l = o.get(e),
                y = o.get(t);
            if (l && y) return l == t && y == e;
            var p = -1,
                h = !0,
                b = r & nC ? new JS : void 0;
            for (o.set(e, t), o.set(t, e); ++p < a;) {
                var I = e[p],
                    T = t[p];
                if (n) var x = s ? n(T, I, p, t, e, o) : n(I, T, p, e, t, o);
                if (x !== void 0) {
                    if (x) continue;
                    h = !1;
                    break
                }
                if (b) {
                    if (!eC(t, function(w, P) {
                            if (!tC(b, P) && (I === w || i(I, w, r, n, o))) return b.push(P)
                        })) {
                        h = !1;
                        break
                    }
                } else if (!(I === T || i(I, T, r, n, o))) {
                    h = !1;
                    break
                }
            }
            return o.delete(e), o.delete(t), h
        }
        wp.exports = iC
    });
    var Op = c((KW, Ap) => {
        var oC = Ke(),
            aC = oC.Uint8Array;
        Ap.exports = aC
    });
    var Sp = c((YW, xp) => {
        function sC(e) {
            var t = -1,
                r = Array(e.size);
            return e.forEach(function(n, i) {
                r[++t] = [i, n]
            }), r
        }
        xp.exports = sC
    });
    var Rp = c(($W, Cp) => {
        function uC(e) {
            var t = -1,
                r = Array(e.size);
            return e.forEach(function(n) {
                r[++t] = n
            }), r
        }
        Cp.exports = uC
    });
    var Fp = c((QW, qp) => {
        var Lp = Ht(),
            Np = Op(),
            cC = Ln(),
            lC = Zo(),
            fC = Sp(),
            dC = Rp(),
            pC = 1,
            hC = 2,
            gC = "[object Boolean]",
            vC = "[object Date]",
            yC = "[object Error]",
            EC = "[object Map]",
            mC = "[object Number]",
            _C = "[object RegExp]",
            bC = "[object Set]",
            TC = "[object String]",
            IC = "[object Symbol]",
            wC = "[object ArrayBuffer]",
            AC = "[object DataView]",
            Pp = Lp ? Lp.prototype : void 0,
            Jo = Pp ? Pp.valueOf : void 0;

        function OC(e, t, r, n, i, o, s) {
            switch (r) {
                case AC:
                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                    e = e.buffer, t = t.buffer;
                case wC:
                    return !(e.byteLength != t.byteLength || !o(new Np(e), new Np(t)));
                case gC:
                case vC:
                case mC:
                    return cC(+e, +t);
                case yC:
                    return e.name == t.name && e.message == t.message;
                case _C:
                case TC:
                    return e == t + "";
                case EC:
                    var a = fC;
                case bC:
                    var u = n & pC;
                    if (a || (a = dC), e.size != t.size && !u) return !1;
                    var l = s.get(e);
                    if (l) return l == t;
                    n |= hC, s.set(e, t);
                    var y = lC(a(e), a(t), n, i, o, s);
                    return s.delete(e), y;
                case IC:
                    if (Jo) return Jo.call(e) == Jo.call(t)
            }
            return !1
        }
        qp.exports = OC
    });
    var Fn = c((ZW, Mp) => {
        function xC(e, t) {
            for (var r = -1, n = t.length, i = e.length; ++r < n;) e[i + r] = t[r];
            return e
        }
        Mp.exports = xC
    });
    var be = c((JW, Dp) => {
        var SC = Array.isArray;
        Dp.exports = SC
    });
    var ea = c((eX, kp) => {
        var CC = Fn(),
            RC = be();

        function LC(e, t, r) {
            var n = t(e);
            return RC(e) ? n : CC(n, r(e))
        }
        kp.exports = LC
    });
    var Vp = c((tX, Gp) => {
        function NC(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n;) {
                var s = e[r];
                t(s, r, e) && (o[i++] = s)
            }
            return o
        }
        Gp.exports = NC
    });
    var ta = c((rX, Up) => {
        function PC() {
            return []
        }
        Up.exports = PC
    });
    var ra = c((nX, Wp) => {
        var qC = Vp(),
            FC = ta(),
            MC = Object.prototype,
            DC = MC.propertyIsEnumerable,
            Bp = Object.getOwnPropertySymbols,
            kC = Bp ? function(e) {
                return e == null ? [] : (e = Object(e), qC(Bp(e), function(t) {
                    return DC.call(e, t)
                }))
            } : FC;
        Wp.exports = kC
    });
    var Hp = c((iX, Xp) => {
        function GC(e, t) {
            for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
            return n
        }
        Xp.exports = GC
    });
    var zp = c((oX, jp) => {
        var VC = bt(),
            UC = dt(),
            BC = "[object Arguments]";

        function WC(e) {
            return UC(e) && VC(e) == BC
        }
        jp.exports = WC
    });
    var qr = c((aX, $p) => {
        var Kp = zp(),
            XC = dt(),
            Yp = Object.prototype,
            HC = Yp.hasOwnProperty,
            jC = Yp.propertyIsEnumerable,
            zC = Kp(function() {
                return arguments
            }()) ? Kp : function(e) {
                return XC(e) && HC.call(e, "callee") && !jC.call(e, "callee")
            };
        $p.exports = zC
    });
    var Zp = c((sX, Qp) => {
        function KC() {
            return !1
        }
        Qp.exports = KC
    });
    var Mn = c((Fr, Jt) => {
        var YC = Ke(),
            $C = Zp(),
            th = typeof Fr == "object" && Fr && !Fr.nodeType && Fr,
            Jp = th && typeof Jt == "object" && Jt && !Jt.nodeType && Jt,
            QC = Jp && Jp.exports === th,
            eh = QC ? YC.Buffer : void 0,
            ZC = eh ? eh.isBuffer : void 0,
            JC = ZC || $C;
        Jt.exports = JC
    });
    var Dn = c((uX, rh) => {
        var eR = 9007199254740991,
            tR = /^(?:0|[1-9]\d*)$/;

        function rR(e, t) {
            var r = typeof e;
            return t = t ? ? eR, !!t && (r == "number" || r != "symbol" && tR.test(e)) && e > -1 && e % 1 == 0 && e < t
        }
        rh.exports = rR
    });
    var kn = c((cX, nh) => {
        var nR = 9007199254740991;

        function iR(e) {
            return typeof e == "number" && e > -1 && e % 1 == 0 && e <= nR
        }
        nh.exports = iR
    });
    var oh = c((lX, ih) => {
        var oR = bt(),
            aR = kn(),
            sR = dt(),
            uR = "[object Arguments]",
            cR = "[object Array]",
            lR = "[object Boolean]",
            fR = "[object Date]",
            dR = "[object Error]",
            pR = "[object Function]",
            hR = "[object Map]",
            gR = "[object Number]",
            vR = "[object Object]",
            yR = "[object RegExp]",
            ER = "[object Set]",
            mR = "[object String]",
            _R = "[object WeakMap]",
            bR = "[object ArrayBuffer]",
            TR = "[object DataView]",
            IR = "[object Float32Array]",
            wR = "[object Float64Array]",
            AR = "[object Int8Array]",
            OR = "[object Int16Array]",
            xR = "[object Int32Array]",
            SR = "[object Uint8Array]",
            CR = "[object Uint8ClampedArray]",
            RR = "[object Uint16Array]",
            LR = "[object Uint32Array]",
            fe = {};
        fe[IR] = fe[wR] = fe[AR] = fe[OR] = fe[xR] = fe[SR] = fe[CR] = fe[RR] = fe[LR] = !0;
        fe[uR] = fe[cR] = fe[bR] = fe[lR] = fe[TR] = fe[fR] = fe[dR] = fe[pR] = fe[hR] = fe[gR] = fe[vR] = fe[yR] = fe[ER] = fe[mR] = fe[_R] = !1;

        function NR(e) {
            return sR(e) && aR(e.length) && !!fe[oR(e)]
        }
        ih.exports = NR
    });
    var sh = c((fX, ah) => {
        function PR(e) {
            return function(t) {
                return e(t)
            }
        }
        ah.exports = PR
    });
    var ch = c((Mr, er) => {
        var qR = So(),
            uh = typeof Mr == "object" && Mr && !Mr.nodeType && Mr,
            Dr = uh && typeof er == "object" && er && !er.nodeType && er,
            FR = Dr && Dr.exports === uh,
            na = FR && qR.process,
            MR = function() {
                try {
                    var e = Dr && Dr.require && Dr.require("util").types;
                    return e || na && na.binding && na.binding("util")
                } catch {}
            }();
        er.exports = MR
    });
    var Gn = c((dX, dh) => {
        var DR = oh(),
            kR = sh(),
            lh = ch(),
            fh = lh && lh.isTypedArray,
            GR = fh ? kR(fh) : DR;
        dh.exports = GR
    });
    var ia = c((pX, ph) => {
        var VR = Hp(),
            UR = qr(),
            BR = be(),
            WR = Mn(),
            XR = Dn(),
            HR = Gn(),
            jR = Object.prototype,
            zR = jR.hasOwnProperty;

        function KR(e, t) {
            var r = BR(e),
                n = !r && UR(e),
                i = !r && !n && WR(e),
                o = !r && !n && !i && HR(e),
                s = r || n || i || o,
                a = s ? VR(e.length, String) : [],
                u = a.length;
            for (var l in e)(t || zR.call(e, l)) && !(s && (l == "length" || i && (l == "offset" || l == "parent") || o && (l == "buffer" || l == "byteLength" || l == "byteOffset") || XR(l, u))) && a.push(l);
            return a
        }
        ph.exports = KR
    });
    var Vn = c((hX, hh) => {
        var YR = Object.prototype;

        function $R(e) {
            var t = e && e.constructor,
                r = typeof t == "function" && t.prototype || YR;
            return e === r
        }
        hh.exports = $R
    });
    var vh = c((gX, gh) => {
        var QR = Co(),
            ZR = QR(Object.keys, Object);
        gh.exports = ZR
    });
    var Un = c((vX, yh) => {
        var JR = Vn(),
            eL = vh(),
            tL = Object.prototype,
            rL = tL.hasOwnProperty;

        function nL(e) {
            if (!JR(e)) return eL(e);
            var t = [];
            for (var r in Object(e)) rL.call(e, r) && r != "constructor" && t.push(r);
            return t
        }
        yh.exports = nL
    });
    var Nt = c((yX, Eh) => {
        var iL = Ko(),
            oL = kn();

        function aL(e) {
            return e != null && oL(e.length) && !iL(e)
        }
        Eh.exports = aL
    });
    var kr = c((EX, mh) => {
        var sL = ia(),
            uL = Un(),
            cL = Nt();

        function lL(e) {
            return cL(e) ? sL(e) : uL(e)
        }
        mh.exports = lL
    });
    var bh = c((mX, _h) => {
        var fL = ea(),
            dL = ra(),
            pL = kr();

        function hL(e) {
            return fL(e, pL, dL)
        }
        _h.exports = hL
    });
    var wh = c((_X, Ih) => {
        var Th = bh(),
            gL = 1,
            vL = Object.prototype,
            yL = vL.hasOwnProperty;

        function EL(e, t, r, n, i, o) {
            var s = r & gL,
                a = Th(e),
                u = a.length,
                l = Th(t),
                y = l.length;
            if (u != y && !s) return !1;
            for (var p = u; p--;) {
                var h = a[p];
                if (!(s ? h in t : yL.call(t, h))) return !1
            }
            var b = o.get(e),
                I = o.get(t);
            if (b && I) return b == t && I == e;
            var T = !0;
            o.set(e, t), o.set(t, e);
            for (var x = s; ++p < u;) {
                h = a[p];
                var w = e[h],
                    P = t[h];
                if (n) var S = s ? n(P, w, h, t, e, o) : n(w, P, h, e, t, o);
                if (!(S === void 0 ? w === P || i(w, P, r, n, o) : S)) {
                    T = !1;
                    break
                }
                x || (x = h == "constructor")
            }
            if (T && !x) {
                var M = e.constructor,
                    F = t.constructor;
                M != F && "constructor" in e && "constructor" in t && !(typeof M == "function" && M instanceof M && typeof F == "function" && F instanceof F) && (T = !1)
            }
            return o.delete(e), o.delete(t), T
        }
        Ih.exports = EL
    });
    var Oh = c((bX, Ah) => {
        var mL = Tt(),
            _L = Ke(),
            bL = mL(_L, "DataView");
        Ah.exports = bL
    });
    var Sh = c((TX, xh) => {
        var TL = Tt(),
            IL = Ke(),
            wL = TL(IL, "Promise");
        xh.exports = wL
    });
    var Rh = c((IX, Ch) => {
        var AL = Tt(),
            OL = Ke(),
            xL = AL(OL, "Set");
        Ch.exports = xL
    });
    var oa = c((wX, Lh) => {
        var SL = Tt(),
            CL = Ke(),
            RL = SL(CL, "WeakMap");
        Lh.exports = RL
    });
    var Bn = c((AX, kh) => {
        var aa = Oh(),
            sa = Nn(),
            ua = Sh(),
            ca = Rh(),
            la = oa(),
            Dh = bt(),
            tr = $o(),
            Nh = "[object Map]",
            LL = "[object Object]",
            Ph = "[object Promise]",
            qh = "[object Set]",
            Fh = "[object WeakMap]",
            Mh = "[object DataView]",
            NL = tr(aa),
            PL = tr(sa),
            qL = tr(ua),
            FL = tr(ca),
            ML = tr(la),
            Pt = Dh;
        (aa && Pt(new aa(new ArrayBuffer(1))) != Mh || sa && Pt(new sa) != Nh || ua && Pt(ua.resolve()) != Ph || ca && Pt(new ca) != qh || la && Pt(new la) != Fh) && (Pt = function(e) {
            var t = Dh(e),
                r = t == LL ? e.constructor : void 0,
                n = r ? tr(r) : "";
            if (n) switch (n) {
                case NL:
                    return Mh;
                case PL:
                    return Nh;
                case qL:
                    return Ph;
                case FL:
                    return qh;
                case ML:
                    return Fh
            }
            return t
        });
        kh.exports = Pt
    });
    var jh = c((OX, Hh) => {
        var fa = Qo(),
            DL = Zo(),
            kL = Fp(),
            GL = wh(),
            Gh = Bn(),
            Vh = be(),
            Uh = Mn(),
            VL = Gn(),
            UL = 1,
            Bh = "[object Arguments]",
            Wh = "[object Array]",
            Wn = "[object Object]",
            BL = Object.prototype,
            Xh = BL.hasOwnProperty;

        function WL(e, t, r, n, i, o) {
            var s = Vh(e),
                a = Vh(t),
                u = s ? Wh : Gh(e),
                l = a ? Wh : Gh(t);
            u = u == Bh ? Wn : u, l = l == Bh ? Wn : l;
            var y = u == Wn,
                p = l == Wn,
                h = u == l;
            if (h && Uh(e)) {
                if (!Uh(t)) return !1;
                s = !0, y = !1
            }
            if (h && !y) return o || (o = new fa), s || VL(e) ? DL(e, t, r, n, i, o) : kL(e, t, u, r, n, i, o);
            if (!(r & UL)) {
                var b = y && Xh.call(e, "__wrapped__"),
                    I = p && Xh.call(t, "__wrapped__");
                if (b || I) {
                    var T = b ? e.value() : e,
                        x = I ? t.value() : t;
                    return o || (o = new fa), i(T, x, r, n, o)
                }
            }
            return h ? (o || (o = new fa), GL(e, t, r, n, i, o)) : !1
        }
        Hh.exports = WL
    });
    var da = c((xX, Yh) => {
        var XL = jh(),
            zh = dt();

        function Kh(e, t, r, n, i) {
            return e === t ? !0 : e == null || t == null || !zh(e) && !zh(t) ? e !== e && t !== t : XL(e, t, r, n, Kh, i)
        }
        Yh.exports = Kh
    });
    var Qh = c((SX, $h) => {
        var HL = Qo(),
            jL = da(),
            zL = 1,
            KL = 2;

        function YL(e, t, r, n) {
            var i = r.length,
                o = i,
                s = !n;
            if (e == null) return !o;
            for (e = Object(e); i--;) {
                var a = r[i];
                if (s && a[2] ? a[1] !== e[a[0]] : !(a[0] in e)) return !1
            }
            for (; ++i < o;) {
                a = r[i];
                var u = a[0],
                    l = e[u],
                    y = a[1];
                if (s && a[2]) {
                    if (l === void 0 && !(u in e)) return !1
                } else {
                    var p = new HL;
                    if (n) var h = n(l, y, u, e, t, p);
                    if (!(h === void 0 ? jL(y, l, zL | KL, n, p) : h)) return !1
                }
            }
            return !0
        }
        $h.exports = YL
    });
    var pa = c((CX, Zh) => {
        var $L = ot();

        function QL(e) {
            return e === e && !$L(e)
        }
        Zh.exports = QL
    });
    var eg = c((RX, Jh) => {
        var ZL = pa(),
            JL = kr();

        function eN(e) {
            for (var t = JL(e), r = t.length; r--;) {
                var n = t[r],
                    i = e[n];
                t[r] = [n, i, ZL(i)]
            }
            return t
        }
        Jh.exports = eN
    });
    var ha = c((LX, tg) => {
        function tN(e, t) {
            return function(r) {
                return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
            }
        }
        tg.exports = tN
    });
    var ng = c((NX, rg) => {
        var rN = Qh(),
            nN = eg(),
            iN = ha();

        function oN(e) {
            var t = nN(e);
            return t.length == 1 && t[0][2] ? iN(t[0][0], t[0][1]) : function(r) {
                return r === e || rN(r, e, t)
            }
        }
        rg.exports = oN
    });
    var Gr = c((PX, ig) => {
        var aN = bt(),
            sN = dt(),
            uN = "[object Symbol]";

        function cN(e) {
            return typeof e == "symbol" || sN(e) && aN(e) == uN
        }
        ig.exports = cN
    });
    var Xn = c((qX, og) => {
        var lN = be(),
            fN = Gr(),
            dN = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            pN = /^\w*$/;

        function hN(e, t) {
            if (lN(e)) return !1;
            var r = typeof e;
            return r == "number" || r == "symbol" || r == "boolean" || e == null || fN(e) ? !0 : pN.test(e) || !dN.test(e) || t != null && e in Object(t)
        }
        og.exports = hN
    });
    var ug = c((FX, sg) => {
        var ag = Pn(),
            gN = "Expected a function";

        function ga(e, t) {
            if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(gN);
            var r = function() {
                var n = arguments,
                    i = t ? t.apply(this, n) : n[0],
                    o = r.cache;
                if (o.has(i)) return o.get(i);
                var s = e.apply(this, n);
                return r.cache = o.set(i, s) || o, s
            };
            return r.cache = new(ga.Cache || ag), r
        }
        ga.Cache = ag;
        sg.exports = ga
    });
    var lg = c((MX, cg) => {
        var vN = ug(),
            yN = 500;

        function EN(e) {
            var t = vN(e, function(n) {
                    return r.size === yN && r.clear(), n
                }),
                r = t.cache;
            return t
        }
        cg.exports = EN
    });
    var dg = c((DX, fg) => {
        var mN = lg(),
            _N = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            bN = /\\(\\)?/g,
            TN = mN(function(e) {
                var t = [];
                return e.charCodeAt(0) === 46 && t.push(""), e.replace(_N, function(r, n, i, o) {
                    t.push(i ? o.replace(bN, "$1") : n || r)
                }), t
            });
        fg.exports = TN
    });
    var va = c((kX, pg) => {
        function IN(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n;) i[r] = t(e[r], r, e);
            return i
        }
        pg.exports = IN
    });
    var mg = c((GX, Eg) => {
        var hg = Ht(),
            wN = va(),
            AN = be(),
            ON = Gr(),
            xN = 1 / 0,
            gg = hg ? hg.prototype : void 0,
            vg = gg ? gg.toString : void 0;

        function yg(e) {
            if (typeof e == "string") return e;
            if (AN(e)) return wN(e, yg) + "";
            if (ON(e)) return vg ? vg.call(e) : "";
            var t = e + "";
            return t == "0" && 1 / e == -xN ? "-0" : t
        }
        Eg.exports = yg
    });
    var bg = c((VX, _g) => {
        var SN = mg();

        function CN(e) {
            return e == null ? "" : SN(e)
        }
        _g.exports = CN
    });
    var Vr = c((UX, Tg) => {
        var RN = be(),
            LN = Xn(),
            NN = dg(),
            PN = bg();

        function qN(e, t) {
            return RN(e) ? e : LN(e, t) ? [e] : NN(PN(e))
        }
        Tg.exports = qN
    });
    var rr = c((BX, Ig) => {
        var FN = Gr(),
            MN = 1 / 0;

        function DN(e) {
            if (typeof e == "string" || FN(e)) return e;
            var t = e + "";
            return t == "0" && 1 / e == -MN ? "-0" : t
        }
        Ig.exports = DN
    });
    var Hn = c((WX, wg) => {
        var kN = Vr(),
            GN = rr();

        function VN(e, t) {
            t = kN(t, e);
            for (var r = 0, n = t.length; e != null && r < n;) e = e[GN(t[r++])];
            return r && r == n ? e : void 0
        }
        wg.exports = VN
    });
    var jn = c((XX, Ag) => {
        var UN = Hn();

        function BN(e, t, r) {
            var n = e == null ? void 0 : UN(e, t);
            return n === void 0 ? r : n
        }
        Ag.exports = BN
    });
    var xg = c((HX, Og) => {
        function WN(e, t) {
            return e != null && t in Object(e)
        }
        Og.exports = WN
    });
    var Cg = c((jX, Sg) => {
        var XN = Vr(),
            HN = qr(),
            jN = be(),
            zN = Dn(),
            KN = kn(),
            YN = rr();

        function $N(e, t, r) {
            t = XN(t, e);
            for (var n = -1, i = t.length, o = !1; ++n < i;) {
                var s = YN(t[n]);
                if (!(o = e != null && r(e, s))) break;
                e = e[s]
            }
            return o || ++n != i ? o : (i = e == null ? 0 : e.length, !!i && KN(i) && zN(s, i) && (jN(e) || HN(e)))
        }
        Sg.exports = $N
    });
    var Lg = c((zX, Rg) => {
        var QN = xg(),
            ZN = Cg();

        function JN(e, t) {
            return e != null && ZN(e, t, QN)
        }
        Rg.exports = JN
    });
    var Pg = c((KX, Ng) => {
        var eP = da(),
            tP = jn(),
            rP = Lg(),
            nP = Xn(),
            iP = pa(),
            oP = ha(),
            aP = rr(),
            sP = 1,
            uP = 2;

        function cP(e, t) {
            return nP(e) && iP(t) ? oP(aP(e), t) : function(r) {
                var n = tP(r, e);
                return n === void 0 && n === t ? rP(r, e) : eP(t, n, sP | uP)
            }
        }
        Ng.exports = cP
    });
    var zn = c((YX, qg) => {
        function lP(e) {
            return e
        }
        qg.exports = lP
    });
    var ya = c(($X, Fg) => {
        function fP(e) {
            return function(t) {
                return t ? .[e]
            }
        }
        Fg.exports = fP
    });
    var Dg = c((QX, Mg) => {
        var dP = Hn();

        function pP(e) {
            return function(t) {
                return dP(t, e)
            }
        }
        Mg.exports = pP
    });
    var Gg = c((ZX, kg) => {
        var hP = ya(),
            gP = Dg(),
            vP = Xn(),
            yP = rr();

        function EP(e) {
            return vP(e) ? hP(yP(e)) : gP(e)
        }
        kg.exports = EP
    });
    var It = c((JX, Vg) => {
        var mP = ng(),
            _P = Pg(),
            bP = zn(),
            TP = be(),
            IP = Gg();

        function wP(e) {
            return typeof e == "function" ? e : e == null ? bP : typeof e == "object" ? TP(e) ? _P(e[0], e[1]) : mP(e) : IP(e)
        }
        Vg.exports = wP
    });
    var Ea = c((eH, Ug) => {
        var AP = It(),
            OP = Nt(),
            xP = kr();

        function SP(e) {
            return function(t, r, n) {
                var i = Object(t);
                if (!OP(t)) {
                    var o = AP(r, 3);
                    t = xP(t), r = function(a) {
                        return o(i[a], a, i)
                    }
                }
                var s = e(t, r, n);
                return s > -1 ? i[o ? t[s] : s] : void 0
            }
        }
        Ug.exports = SP
    });
    var ma = c((tH, Bg) => {
        function CP(e, t, r, n) {
            for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i;)
                if (t(e[o], o, e)) return o;
            return -1
        }
        Bg.exports = CP
    });
    var Xg = c((rH, Wg) => {
        var RP = /\s/;

        function LP(e) {
            for (var t = e.length; t-- && RP.test(e.charAt(t)););
            return t
        }
        Wg.exports = LP
    });
    var jg = c((nH, Hg) => {
        var NP = Xg(),
            PP = /^\s+/;

        function qP(e) {
            return e && e.slice(0, NP(e) + 1).replace(PP, "")
        }
        Hg.exports = qP
    });
    var Kn = c((iH, Yg) => {
        var FP = jg(),
            zg = ot(),
            MP = Gr(),
            Kg = 0 / 0,
            DP = /^[-+]0x[0-9a-f]+$/i,
            kP = /^0b[01]+$/i,
            GP = /^0o[0-7]+$/i,
            VP = parseInt;

        function UP(e) {
            if (typeof e == "number") return e;
            if (MP(e)) return Kg;
            if (zg(e)) {
                var t = typeof e.valueOf == "function" ? e.valueOf() : e;
                e = zg(t) ? t + "" : t
            }
            if (typeof e != "string") return e === 0 ? e : +e;
            e = FP(e);
            var r = kP.test(e);
            return r || GP.test(e) ? VP(e.slice(2), r ? 2 : 8) : DP.test(e) ? Kg : +e
        }
        Yg.exports = UP
    });
    var Zg = c((oH, Qg) => {
        var BP = Kn(),
            $g = 1 / 0,
            WP = 17976931348623157e292;

        function XP(e) {
            if (!e) return e === 0 ? e : 0;
            if (e = BP(e), e === $g || e === -$g) {
                var t = e < 0 ? -1 : 1;
                return t * WP
            }
            return e === e ? e : 0
        }
        Qg.exports = XP
    });
    var _a = c((aH, Jg) => {
        var HP = Zg();

        function jP(e) {
            var t = HP(e),
                r = t % 1;
            return t === t ? r ? t - r : t : 0
        }
        Jg.exports = jP
    });
    var tv = c((sH, ev) => {
        var zP = ma(),
            KP = It(),
            YP = _a(),
            $P = Math.max;

        function QP(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n) return -1;
            var i = r == null ? 0 : YP(r);
            return i < 0 && (i = $P(n + i, 0)), zP(e, KP(t, 3), i)
        }
        ev.exports = QP
    });
    var ba = c((uH, rv) => {
        var ZP = Ea(),
            JP = tv(),
            eq = ZP(JP);
        rv.exports = eq
    });
    var ov = {};
    Pe(ov, {
        ELEMENT_MATCHES: () => tq,
        FLEX_PREFIXED: () => Ta,
        IS_BROWSER_ENV: () => $e,
        TRANSFORM_PREFIXED: () => wt,
        TRANSFORM_STYLE_PREFIXED: () => $n,
        withBrowser: () => Yn
    });
    var iv, $e, Yn, tq, Ta, wt, nv, $n, Qn = de(() => {
        "use strict";
        iv = oe(ba()), $e = typeof window < "u", Yn = (e, t) => $e ? e() : t, tq = Yn(() => (0, iv.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype)), Ta = Yn(() => {
            let e = document.createElement("i"),
                t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
                r = "";
            try {
                let {
                    length: n
                } = t;
                for (let i = 0; i < n; i++) {
                    let o = t[i];
                    if (e.style.display = o, e.style.display === o) return o
                }
                return r
            } catch {
                return r
            }
        }, "flex"), wt = Yn(() => {
            let e = document.createElement("i");
            if (e.style.transform == null) {
                let t = ["Webkit", "Moz", "ms"],
                    r = "Transform",
                    {
                        length: n
                    } = t;
                for (let i = 0; i < n; i++) {
                    let o = t[i] + r;
                    if (e.style[o] !== void 0) return o
                }
            }
            return "transform"
        }, "transform"), nv = wt.split("transform")[0], $n = nv ? nv + "TransformStyle" : "transformStyle"
    });
    var Ia = c((cH, lv) => {
        var rq = 4,
            nq = .001,
            iq = 1e-7,
            oq = 10,
            Ur = 11,
            Zn = 1 / (Ur - 1),
            aq = typeof Float32Array == "function";

        function av(e, t) {
            return 1 - 3 * t + 3 * e
        }

        function sv(e, t) {
            return 3 * t - 6 * e
        }

        function uv(e) {
            return 3 * e
        }

        function Jn(e, t, r) {
            return ((av(t, r) * e + sv(t, r)) * e + uv(t)) * e
        }

        function cv(e, t, r) {
            return 3 * av(t, r) * e * e + 2 * sv(t, r) * e + uv(t)
        }

        function sq(e, t, r, n, i) {
            var o, s, a = 0;
            do s = t + (r - t) / 2, o = Jn(s, n, i) - e, o > 0 ? r = s : t = s; while (Math.abs(o) > iq && ++a < oq);
            return s
        }

        function uq(e, t, r, n) {
            for (var i = 0; i < rq; ++i) {
                var o = cv(t, r, n);
                if (o === 0) return t;
                var s = Jn(t, r, n) - e;
                t -= s / o
            }
            return t
        }
        lv.exports = function(t, r, n, i) {
            if (!(0 <= t && t <= 1 && 0 <= n && n <= 1)) throw new Error("bezier x values must be in [0, 1] range");
            var o = aq ? new Float32Array(Ur) : new Array(Ur);
            if (t !== r || n !== i)
                for (var s = 0; s < Ur; ++s) o[s] = Jn(s * Zn, t, n);

            function a(u) {
                for (var l = 0, y = 1, p = Ur - 1; y !== p && o[y] <= u; ++y) l += Zn;
                --y;
                var h = (u - o[y]) / (o[y + 1] - o[y]),
                    b = l + h * Zn,
                    I = cv(b, t, n);
                return I >= nq ? uq(u, b, t, n) : I === 0 ? b : sq(u, l, l + Zn, t, n)
            }
            return function(l) {
                return t === r && n === i ? l : l === 0 ? 0 : l === 1 ? 1 : Jn(a(l), r, i)
            }
        }
    });
    var Wr = {};
    Pe(Wr, {
        bounce: () => Xq,
        bouncePast: () => Hq,
        ease: () => cq,
        easeIn: () => lq,
        easeInOut: () => dq,
        easeOut: () => fq,
        inBack: () => Fq,
        inCirc: () => Lq,
        inCubic: () => vq,
        inElastic: () => kq,
        inExpo: () => Sq,
        inOutBack: () => Dq,
        inOutCirc: () => Pq,
        inOutCubic: () => Eq,
        inOutElastic: () => Vq,
        inOutExpo: () => Rq,
        inOutQuad: () => gq,
        inOutQuart: () => bq,
        inOutQuint: () => wq,
        inOutSine: () => xq,
        inQuad: () => pq,
        inQuart: () => mq,
        inQuint: () => Tq,
        inSine: () => Aq,
        outBack: () => Mq,
        outBounce: () => qq,
        outCirc: () => Nq,
        outCubic: () => yq,
        outElastic: () => Gq,
        outExpo: () => Cq,
        outQuad: () => hq,
        outQuart: () => _q,
        outQuint: () => Iq,
        outSine: () => Oq,
        swingFrom: () => Bq,
        swingFromTo: () => Uq,
        swingTo: () => Wq
    });

    function pq(e) {
        return Math.pow(e, 2)
    }

    function hq(e) {
        return -(Math.pow(e - 1, 2) - 1)
    }

    function gq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
    }

    function vq(e) {
        return Math.pow(e, 3)
    }

    function yq(e) {
        return Math.pow(e - 1, 3) + 1
    }

    function Eq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
    }

    function mq(e) {
        return Math.pow(e, 4)
    }

    function _q(e) {
        return -(Math.pow(e - 1, 4) - 1)
    }

    function bq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
    }

    function Tq(e) {
        return Math.pow(e, 5)
    }

    function Iq(e) {
        return Math.pow(e - 1, 5) + 1
    }

    function wq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
    }

    function Aq(e) {
        return -Math.cos(e * (Math.PI / 2)) + 1
    }

    function Oq(e) {
        return Math.sin(e * (Math.PI / 2))
    }

    function xq(e) {
        return -.5 * (Math.cos(Math.PI * e) - 1)
    }

    function Sq(e) {
        return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
    }

    function Cq(e) {
        return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
    }

    function Rq(e) {
        return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
    }

    function Lq(e) {
        return -(Math.sqrt(1 - e * e) - 1)
    }

    function Nq(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2))
    }

    function Pq(e) {
        return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
    }

    function qq(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }

    function Fq(e) {
        let t = pt;
        return e * e * ((t + 1) * e - t)
    }

    function Mq(e) {
        let t = pt;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }

    function Dq(e) {
        let t = pt;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }

    function kq(e) {
        let t = pt,
            r = 0,
            n = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)))
    }

    function Gq(e) {
        let t = pt,
            r = 0,
            n = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / r) + 1)
    }

    function Vq(e) {
        let t = pt,
            r = 0,
            n = 1;
        return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (r || (r = .3 * 1.5), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), e < 1 ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r) * .5 + 1)
    }

    function Uq(e) {
        let t = pt;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }

    function Bq(e) {
        let t = pt;
        return e * e * ((t + 1) * e - t)
    }

    function Wq(e) {
        let t = pt;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }

    function Xq(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }

    function Hq(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
    }
    var Br, pt, cq, lq, fq, dq, wa = de(() => {
        "use strict";
        Br = oe(Ia()), pt = 1.70158, cq = (0, Br.default)(.25, .1, .25, 1), lq = (0, Br.default)(.42, 0, 1, 1), fq = (0, Br.default)(0, 0, .58, 1), dq = (0, Br.default)(.42, 0, .58, 1)
    });
    var dv = {};
    Pe(dv, {
        applyEasing: () => zq,
        createBezierEasing: () => jq,
        optimizeFloat: () => Xr
    });

    function Xr(e, t = 5, r = 10) {
        let n = Math.pow(r, t),
            i = Number(Math.round(e * n) / n);
        return Math.abs(i) > 1e-4 ? i : 0
    }

    function jq(e) {
        return (0, fv.default)(...e)
    }

    function zq(e, t, r) {
        return t === 0 ? 0 : t === 1 ? 1 : Xr(r ? t > 0 ? r(t) : t : t > 0 && e && Wr[e] ? Wr[e](t) : t)
    }
    var fv, Aa = de(() => {
        "use strict";
        wa();
        fv = oe(Ia())
    });
    var gv = {};
    Pe(gv, {
        createElementState: () => hv,
        ixElements: () => sF,
        mergeActionState: () => Oa
    });

    function hv(e, t, r, n, i) {
        let o = r === Kq ? (0, nr.getIn)(i, ["config", "target", "objectId"]) : null;
        return (0, nr.mergeIn)(e, [n], {
            id: n,
            ref: t,
            refId: o,
            refType: r
        })
    }

    function Oa(e, t, r, n, i) {
        let o = cF(i);
        return (0, nr.mergeIn)(e, [t, aF, r], n, o)
    }

    function cF(e) {
        let {
            config: t
        } = e;
        return uF.reduce((r, n) => {
            let i = n[0],
                o = n[1],
                s = t[i],
                a = t[o];
            return s != null && a != null && (r[o] = a), r
        }, {})
    }
    var nr, fH, Kq, dH, Yq, $q, Qq, Zq, Jq, eF, tF, rF, nF, iF, oF, pv, aF, sF, uF, vv = de(() => {
        "use strict";
        nr = oe(Kt());
        Fe();
        ({
            HTML_ELEMENT: fH,
            PLAIN_OBJECT: Kq,
            ABSTRACT_NODE: dH,
            CONFIG_X_VALUE: Yq,
            CONFIG_Y_VALUE: $q,
            CONFIG_Z_VALUE: Qq,
            CONFIG_VALUE: Zq,
            CONFIG_X_UNIT: Jq,
            CONFIG_Y_UNIT: eF,
            CONFIG_Z_UNIT: tF,
            CONFIG_UNIT: rF
        } = Ae), {
            IX2_SESSION_STOPPED: nF,
            IX2_INSTANCE_ADDED: iF,
            IX2_ELEMENT_STATE_CHANGED: oF
        } = me, pv = {}, aF = "refState", sF = (e = pv, t = {}) => {
            switch (t.type) {
                case nF:
                    return pv;
                case iF:
                    {
                        let {
                            elementId: r,
                            element: n,
                            origin: i,
                            actionItem: o,
                            refType: s
                        } = t.payload,
                        {
                            actionTypeId: a
                        } = o,
                        u = e;
                        return (0, nr.getIn)(u, [r, n]) !== n && (u = hv(u, n, s, r, o)),
                        Oa(u, r, a, i, o)
                    }
                case oF:
                    {
                        let {
                            elementId: r,
                            actionTypeId: n,
                            current: i,
                            actionItem: o
                        } = t.payload;
                        return Oa(e, r, n, i, o)
                    }
                default:
                    return e
            }
        };
        uF = [
            [Yq, Jq],
            [$q, eF],
            [Qq, tF],
            [Zq, rF]
        ]
    });
    var yv = c(Te => {
        "use strict";
        Object.defineProperty(Te, "__esModule", {
            value: !0
        });
        Te.renderPlugin = Te.getPluginOrigin = Te.getPluginDuration = Te.getPluginDestination = Te.getPluginConfig = Te.createPluginInstance = Te.clearPlugin = void 0;
        var lF = e => e.value;
        Te.getPluginConfig = lF;
        var fF = (e, t) => {
            if (t.config.duration !== "auto") return null;
            let r = parseFloat(e.getAttribute("data-duration"));
            return r > 0 ? r * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
        };
        Te.getPluginDuration = fF;
        var dF = e => e || {
            value: 0
        };
        Te.getPluginOrigin = dF;
        var pF = e => ({
            value: e.value
        });
        Te.getPluginDestination = pF;
        var hF = e => {
            let t = window.Webflow.require("lottie").createInstance(e);
            return t.stop(), t.setSubframe(!0), t
        };
        Te.createPluginInstance = hF;
        var gF = (e, t, r) => {
            if (!e) return;
            let n = t[r.actionTypeId].value / 100;
            e.goToFrame(e.frames * n)
        };
        Te.renderPlugin = gF;
        var vF = e => {
            window.Webflow.require("lottie").createInstance(e).stop()
        };
        Te.clearPlugin = vF
    });
    var mv = c(Ie => {
        "use strict";
        Object.defineProperty(Ie, "__esModule", {
            value: !0
        });
        Ie.renderPlugin = Ie.getPluginOrigin = Ie.getPluginDuration = Ie.getPluginDestination = Ie.getPluginConfig = Ie.createPluginInstance = Ie.clearPlugin = void 0;
        var yF = e => document.querySelector(`[data-w-id="${e}"]`),
            EF = () => window.Webflow.require("spline"),
            mF = (e, t) => e.filter(r => !t.includes(r)),
            _F = (e, t) => e.value[t];
        Ie.getPluginConfig = _F;
        var bF = () => null;
        Ie.getPluginDuration = bF;
        var Ev = Object.freeze({
                positionX: 0,
                positionY: 0,
                positionZ: 0,
                rotationX: 0,
                rotationY: 0,
                rotationZ: 0,
                scaleX: 1,
                scaleY: 1,
                scaleZ: 1
            }),
            TF = (e, t) => {
                let r = t.config.value,
                    n = Object.keys(r);
                if (e) {
                    let o = Object.keys(e),
                        s = mF(n, o);
                    return s.length ? s.reduce((u, l) => (u[l] = Ev[l], u), e) : e
                }
                return n.reduce((o, s) => (o[s] = Ev[s], o), {})
            };
        Ie.getPluginOrigin = TF;
        var IF = e => e.value;
        Ie.getPluginDestination = IF;
        var wF = (e, t) => {
            var r;
            let n = t == null || (r = t.config) === null || r === void 0 || (r = r.target) === null || r === void 0 ? void 0 : r.pluginElement;
            return n ? yF(n) : null
        };
        Ie.createPluginInstance = wF;
        var AF = (e, t, r) => {
            let n = EF(),
                i = n.getInstance(e),
                o = r.config.target.objectId,
                s = a => {
                    if (!a) throw new Error("Invalid spline app passed to renderSpline");
                    let u = o && a.findObjectById(o);
                    if (!u) return;
                    let {
                        PLUGIN_SPLINE: l
                    } = t;
                    l.positionX != null && (u.position.x = l.positionX), l.positionY != null && (u.position.y = l.positionY), l.positionZ != null && (u.position.z = l.positionZ), l.rotationX != null && (u.rotation.x = l.rotationX), l.rotationY != null && (u.rotation.y = l.rotationY), l.rotationZ != null && (u.rotation.z = l.rotationZ), l.scaleX != null && (u.scale.x = l.scaleX), l.scaleY != null && (u.scale.y = l.scaleY), l.scaleZ != null && (u.scale.z = l.scaleZ)
                };
            i ? s(i.spline) : n.setLoadHandler(e, s)
        };
        Ie.renderPlugin = AF;
        var OF = () => null;
        Ie.clearPlugin = OF
    });
    var Sa = c(xa => {
        "use strict";
        Object.defineProperty(xa, "__esModule", {
            value: !0
        });
        xa.normalizeColor = xF;
        var _v = {
            aliceblue: "#F0F8FF",
            antiquewhite: "#FAEBD7",
            aqua: "#00FFFF",
            aquamarine: "#7FFFD4",
            azure: "#F0FFFF",
            beige: "#F5F5DC",
            bisque: "#FFE4C4",
            black: "#000000",
            blanchedalmond: "#FFEBCD",
            blue: "#0000FF",
            blueviolet: "#8A2BE2",
            brown: "#A52A2A",
            burlywood: "#DEB887",
            cadetblue: "#5F9EA0",
            chartreuse: "#7FFF00",
            chocolate: "#D2691E",
            coral: "#FF7F50",
            cornflowerblue: "#6495ED",
            cornsilk: "#FFF8DC",
            crimson: "#DC143C",
            cyan: "#00FFFF",
            darkblue: "#00008B",
            darkcyan: "#008B8B",
            darkgoldenrod: "#B8860B",
            darkgray: "#A9A9A9",
            darkgreen: "#006400",
            darkgrey: "#A9A9A9",
            darkkhaki: "#BDB76B",
            darkmagenta: "#8B008B",
            darkolivegreen: "#556B2F",
            darkorange: "#FF8C00",
            darkorchid: "#9932CC",
            darkred: "#8B0000",
            darksalmon: "#E9967A",
            darkseagreen: "#8FBC8F",
            darkslateblue: "#483D8B",
            darkslategray: "#2F4F4F",
            darkslategrey: "#2F4F4F",
            darkturquoise: "#00CED1",
            darkviolet: "#9400D3",
            deeppink: "#FF1493",
            deepskyblue: "#00BFFF",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1E90FF",
            firebrick: "#B22222",
            floralwhite: "#FFFAF0",
            forestgreen: "#228B22",
            fuchsia: "#FF00FF",
            gainsboro: "#DCDCDC",
            ghostwhite: "#F8F8FF",
            gold: "#FFD700",
            goldenrod: "#DAA520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#ADFF2F",
            grey: "#808080",
            honeydew: "#F0FFF0",
            hotpink: "#FF69B4",
            indianred: "#CD5C5C",
            indigo: "#4B0082",
            ivory: "#FFFFF0",
            khaki: "#F0E68C",
            lavender: "#E6E6FA",
            lavenderblush: "#FFF0F5",
            lawngreen: "#7CFC00",
            lemonchiffon: "#FFFACD",
            lightblue: "#ADD8E6",
            lightcoral: "#F08080",
            lightcyan: "#E0FFFF",
            lightgoldenrodyellow: "#FAFAD2",
            lightgray: "#D3D3D3",
            lightgreen: "#90EE90",
            lightgrey: "#D3D3D3",
            lightpink: "#FFB6C1",
            lightsalmon: "#FFA07A",
            lightseagreen: "#20B2AA",
            lightskyblue: "#87CEFA",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#B0C4DE",
            lightyellow: "#FFFFE0",
            lime: "#00FF00",
            limegreen: "#32CD32",
            linen: "#FAF0E6",
            magenta: "#FF00FF",
            maroon: "#800000",
            mediumaquamarine: "#66CDAA",
            mediumblue: "#0000CD",
            mediumorchid: "#BA55D3",
            mediumpurple: "#9370DB",
            mediumseagreen: "#3CB371",
            mediumslateblue: "#7B68EE",
            mediumspringgreen: "#00FA9A",
            mediumturquoise: "#48D1CC",
            mediumvioletred: "#C71585",
            midnightblue: "#191970",
            mintcream: "#F5FFFA",
            mistyrose: "#FFE4E1",
            moccasin: "#FFE4B5",
            navajowhite: "#FFDEAD",
            navy: "#000080",
            oldlace: "#FDF5E6",
            olive: "#808000",
            olivedrab: "#6B8E23",
            orange: "#FFA500",
            orangered: "#FF4500",
            orchid: "#DA70D6",
            palegoldenrod: "#EEE8AA",
            palegreen: "#98FB98",
            paleturquoise: "#AFEEEE",
            palevioletred: "#DB7093",
            papayawhip: "#FFEFD5",
            peachpuff: "#FFDAB9",
            peru: "#CD853F",
            pink: "#FFC0CB",
            plum: "#DDA0DD",
            powderblue: "#B0E0E6",
            purple: "#800080",
            rebeccapurple: "#663399",
            red: "#FF0000",
            rosybrown: "#BC8F8F",
            royalblue: "#4169E1",
            saddlebrown: "#8B4513",
            salmon: "#FA8072",
            sandybrown: "#F4A460",
            seagreen: "#2E8B57",
            seashell: "#FFF5EE",
            sienna: "#A0522D",
            silver: "#C0C0C0",
            skyblue: "#87CEEB",
            slateblue: "#6A5ACD",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#FFFAFA",
            springgreen: "#00FF7F",
            steelblue: "#4682B4",
            tan: "#D2B48C",
            teal: "#008080",
            thistle: "#D8BFD8",
            tomato: "#FF6347",
            turquoise: "#40E0D0",
            violet: "#EE82EE",
            wheat: "#F5DEB3",
            white: "#FFFFFF",
            whitesmoke: "#F5F5F5",
            yellow: "#FFFF00",
            yellowgreen: "#9ACD32"
        };

        function xF(e) {
            let t, r, n, i = 1,
                o = e.replace(/\s/g, "").toLowerCase(),
                a = (typeof _v[o] == "string" ? _v[o].toLowerCase() : null) || o;
            if (a.startsWith("#")) {
                let u = a.substring(1);
                u.length === 3 ? (t = parseInt(u[0] + u[0], 16), r = parseInt(u[1] + u[1], 16), n = parseInt(u[2] + u[2], 16)) : u.length === 6 && (t = parseInt(u.substring(0, 2), 16), r = parseInt(u.substring(2, 4), 16), n = parseInt(u.substring(4, 6), 16))
            } else if (a.startsWith("rgba")) {
                let u = a.match(/rgba\(([^)]+)\)/)[1].split(",");
                t = parseInt(u[0], 10), r = parseInt(u[1], 10), n = parseInt(u[2], 10), i = parseFloat(u[3])
            } else if (a.startsWith("rgb")) {
                let u = a.match(/rgb\(([^)]+)\)/)[1].split(",");
                t = parseInt(u[0], 10), r = parseInt(u[1], 10), n = parseInt(u[2], 10)
            } else if (a.startsWith("hsla")) {
                let u = a.match(/hsla\(([^)]+)\)/)[1].split(","),
                    l = parseFloat(u[0]),
                    y = parseFloat(u[1].replace("%", "")) / 100,
                    p = parseFloat(u[2].replace("%", "")) / 100;
                i = parseFloat(u[3]);
                let h = (1 - Math.abs(2 * p - 1)) * y,
                    b = h * (1 - Math.abs(l / 60 % 2 - 1)),
                    I = p - h / 2,
                    T, x, w;
                l >= 0 && l < 60 ? (T = h, x = b, w = 0) : l >= 60 && l < 120 ? (T = b, x = h, w = 0) : l >= 120 && l < 180 ? (T = 0, x = h, w = b) : l >= 180 && l < 240 ? (T = 0, x = b, w = h) : l >= 240 && l < 300 ? (T = b, x = 0, w = h) : (T = h, x = 0, w = b), t = Math.round((T + I) * 255), r = Math.round((x + I) * 255), n = Math.round((w + I) * 255)
            } else if (a.startsWith("hsl")) {
                let u = a.match(/hsl\(([^)]+)\)/)[1].split(","),
                    l = parseFloat(u[0]),
                    y = parseFloat(u[1].replace("%", "")) / 100,
                    p = parseFloat(u[2].replace("%", "")) / 100,
                    h = (1 - Math.abs(2 * p - 1)) * y,
                    b = h * (1 - Math.abs(l / 60 % 2 - 1)),
                    I = p - h / 2,
                    T, x, w;
                l >= 0 && l < 60 ? (T = h, x = b, w = 0) : l >= 60 && l < 120 ? (T = b, x = h, w = 0) : l >= 120 && l < 180 ? (T = 0, x = h, w = b) : l >= 180 && l < 240 ? (T = 0, x = b, w = h) : l >= 240 && l < 300 ? (T = b, x = 0, w = h) : (T = h, x = 0, w = b), t = Math.round((T + I) * 255), r = Math.round((x + I) * 255), n = Math.round((w + I) * 255)
            }
            if (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n)) throw new Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`);
            return {
                red: t,
                green: r,
                blue: n,
                alpha: i
            }
        }
    });
    var bv = c(we => {
        "use strict";
        Object.defineProperty(we, "__esModule", {
            value: !0
        });
        we.renderPlugin = we.getPluginOrigin = we.getPluginDuration = we.getPluginDestination = we.getPluginConfig = we.createPluginInstance = we.clearPlugin = void 0;
        var SF = Sa(),
            CF = (e, t) => e.value[t];
        we.getPluginConfig = CF;
        var RF = () => null;
        we.getPluginDuration = RF;
        var LF = (e, t) => {
            if (e) return e;
            let r = t.config.value,
                n = t.config.target.objectId,
                i = getComputedStyle(document.documentElement).getPropertyValue(n);
            if (r.size != null) return {
                size: parseInt(i, 10)
            };
            if (r.red != null && r.green != null && r.blue != null) return (0, SF.normalizeColor)(i)
        };
        we.getPluginOrigin = LF;
        var NF = e => e.value;
        we.getPluginDestination = NF;
        var PF = () => null;
        we.createPluginInstance = PF;
        var qF = (e, t, r) => {
            let n = r.config.target.objectId,
                i = r.config.value.unit,
                {
                    PLUGIN_VARIABLE: o
                } = t,
                {
                    size: s,
                    red: a,
                    green: u,
                    blue: l,
                    alpha: y
                } = o,
                p;
            s != null && (p = s + i), a != null && l != null && u != null && y != null && (p = `rgba(${a}, ${u}, ${l}, ${y})`), p != null && document.documentElement.style.setProperty(n, p)
        };
        we.renderPlugin = qF;
        var FF = (e, t) => {
            let r = t.config.target.objectId;
            document.documentElement.style.removeProperty(r)
        };
        we.clearPlugin = FF
    });
    var Tv = c(ei => {
        "use strict";
        var Ra = fn().default;
        Object.defineProperty(ei, "__esModule", {
            value: !0
        });
        ei.pluginMethodMap = void 0;
        var Ca = (Fe(), et(Sf)),
            MF = Ra(yv()),
            DF = Ra(mv()),
            kF = Ra(bv()),
            yH = ei.pluginMethodMap = new Map([
                [Ca.ActionTypeConsts.PLUGIN_LOTTIE, { ...MF
                }],
                [Ca.ActionTypeConsts.PLUGIN_SPLINE, { ...DF
                }],
                [Ca.ActionTypeConsts.PLUGIN_VARIABLE, { ...kF
                }]
            ])
    });
    var Iv = {};
    Pe(Iv, {
        clearPlugin: () => Ma,
        createPluginInstance: () => VF,
        getPluginConfig: () => Na,
        getPluginDestination: () => qa,
        getPluginDuration: () => GF,
        getPluginOrigin: () => Pa,
        isPluginType: () => qt,
        renderPlugin: () => Fa
    });

    function qt(e) {
        return La.pluginMethodMap.has(e)
    }
    var La, Ft, Na, Pa, GF, qa, VF, Fa, Ma, Da = de(() => {
        "use strict";
        Qn();
        La = oe(Tv());
        Ft = e => t => {
            if (!$e) return () => null;
            let r = La.pluginMethodMap.get(t);
            if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
            let n = r[e];
            if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
            return n
        }, Na = Ft("getPluginConfig"), Pa = Ft("getPluginOrigin"), GF = Ft("getPluginDuration"), qa = Ft("getPluginDestination"), VF = Ft("createPluginInstance"), Fa = Ft("renderPlugin"), Ma = Ft("clearPlugin")
    });
    var Av = c((_H, wv) => {
        function UF(e, t) {
            return e == null || e !== e ? t : e
        }
        wv.exports = UF
    });
    var xv = c((bH, Ov) => {
        function BF(e, t, r, n) {
            var i = -1,
                o = e == null ? 0 : e.length;
            for (n && o && (r = e[++i]); ++i < o;) r = t(r, e[i], i, e);
            return r
        }
        Ov.exports = BF
    });
    var Cv = c((TH, Sv) => {
        function WF(e) {
            return function(t, r, n) {
                for (var i = -1, o = Object(t), s = n(t), a = s.length; a--;) {
                    var u = s[e ? a : ++i];
                    if (r(o[u], u, o) === !1) break
                }
                return t
            }
        }
        Sv.exports = WF
    });
    var Lv = c((IH, Rv) => {
        var XF = Cv(),
            HF = XF();
        Rv.exports = HF
    });
    var ka = c((wH, Nv) => {
        var jF = Lv(),
            zF = kr();

        function KF(e, t) {
            return e && jF(e, t, zF)
        }
        Nv.exports = KF
    });
    var qv = c((AH, Pv) => {
        var YF = Nt();

        function $F(e, t) {
            return function(r, n) {
                if (r == null) return r;
                if (!YF(r)) return e(r, n);
                for (var i = r.length, o = t ? i : -1, s = Object(r);
                    (t ? o-- : ++o < i) && n(s[o], o, s) !== !1;);
                return r
            }
        }
        Pv.exports = $F
    });
    var Ga = c((OH, Fv) => {
        var QF = ka(),
            ZF = qv(),
            JF = ZF(QF);
        Fv.exports = JF
    });
    var Dv = c((xH, Mv) => {
        function eM(e, t, r, n, i) {
            return i(e, function(o, s, a) {
                r = n ? (n = !1, o) : t(r, o, s, a)
            }), r
        }
        Mv.exports = eM
    });
    var Gv = c((SH, kv) => {
        var tM = xv(),
            rM = Ga(),
            nM = It(),
            iM = Dv(),
            oM = be();

        function aM(e, t, r) {
            var n = oM(e) ? tM : iM,
                i = arguments.length < 3;
            return n(e, nM(t, 4), r, i, rM)
        }
        kv.exports = aM
    });
    var Uv = c((CH, Vv) => {
        var sM = ma(),
            uM = It(),
            cM = _a(),
            lM = Math.max,
            fM = Math.min;

        function dM(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n) return -1;
            var i = n - 1;
            return r !== void 0 && (i = cM(r), i = r < 0 ? lM(n + i, 0) : fM(i, n - 1)), sM(e, uM(t, 3), i, !0)
        }
        Vv.exports = dM
    });
    var Wv = c((RH, Bv) => {
        var pM = Ea(),
            hM = Uv(),
            gM = pM(hM);
        Bv.exports = gM
    });

    function Xv(e, t) {
        return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
    }

    function yM(e, t) {
        if (Xv(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        let r = Object.keys(e),
            n = Object.keys(t);
        if (r.length !== n.length) return !1;
        for (let i = 0; i < r.length; i++)
            if (!vM.call(t, r[i]) || !Xv(e[r[i]], t[r[i]])) return !1;
        return !0
    }
    var vM, Va, Hv = de(() => {
        "use strict";
        vM = Object.prototype.hasOwnProperty;
        Va = yM
    });
    var cy = {};
    Pe(cy, {
        cleanupHTMLElement: () => h1,
        clearAllStyles: () => p1,
        clearObjectCache: () => qM,
        getActionListProgress: () => v1,
        getAffectedElements: () => Ha,
        getComputedStyle: () => BM,
        getDestinationValues: () => YM,
        getElementId: () => kM,
        getInstanceId: () => MM,
        getInstanceOrigin: () => HM,
        getItemConfigByKey: () => KM,
        getMaxDurationItemIndex: () => uy,
        getNamespacedParameterId: () => m1,
        getRenderType: () => oy,
        getStyleProp: () => $M,
        mediaQueriesEqual: () => b1,
        observeStore: () => UM,
        reduceListToGroup: () => y1,
        reifyState: () => GM,
        renderHTMLElement: () => QM,
        shallowEqual: () => Va,
        shouldAllowMediaQuery: () => _1,
        shouldNamespaceEventParameter: () => E1,
        stringifyTarget: () => T1
    });

    function qM() {
        ti.clear()
    }

    function MM() {
        return "i" + FM++
    }

    function kM(e, t) {
        for (let r in e) {
            let n = e[r];
            if (n && n.ref === t) return n.id
        }
        return "e" + DM++
    }

    function GM({
        events: e,
        actionLists: t,
        site: r
    } = {}) {
        let n = (0, oi.default)(e, (s, a) => {
                let {
                    eventTypeId: u
                } = a;
                return s[u] || (s[u] = {}), s[u][a.id] = a, s
            }, {}),
            i = r && r.mediaQueries,
            o = [];
        return i ? o = i.map(s => s.key) : (i = [], console.warn("IX2 missing mediaQueries in site data")), {
            ixData: {
                events: e,
                actionLists: t,
                eventTypeMap: n,
                mediaQueries: i,
                mediaQueryKeys: o
            }
        }
    }

    function UM({
        store: e,
        select: t,
        onChange: r,
        comparator: n = VM
    }) {
        let {
            getState: i,
            subscribe: o
        } = e, s = o(u), a = t(i());

        function u() {
            let l = t(i());
            if (l == null) {
                s();
                return
            }
            n(l, a) || (a = l, r(a, e))
        }
        return s
    }

    function Kv(e) {
        let t = typeof e;
        if (t === "string") return {
            id: e
        };
        if (e != null && t === "object") {
            let {
                id: r,
                objectId: n,
                selector: i,
                selectorGuids: o,
                appliesTo: s,
                useEventTarget: a
            } = e;
            return {
                id: r,
                objectId: n,
                selector: i,
                selectorGuids: o,
                appliesTo: s,
                useEventTarget: a
            }
        }
        return {}
    }

    function Ha({
        config: e,
        event: t,
        eventTarget: r,
        elementRoot: n,
        elementApi: i
    }) {
        if (!i) throw new Error("IX2 missing elementApi");
        let {
            targets: o
        } = e;
        if (Array.isArray(o) && o.length > 0) return o.reduce((L, v) => L.concat(Ha({
            config: {
                target: v
            },
            event: t,
            eventTarget: r,
            elementRoot: n,
            elementApi: i
        })), []);
        let {
            getValidDocument: s,
            getQuerySelector: a,
            queryDocument: u,
            getChildElements: l,
            getSiblingElements: y,
            matchSelector: p,
            elementContains: h,
            isSiblingNode: b
        } = i, {
            target: I
        } = e;
        if (!I) return [];
        let {
            id: T,
            objectId: x,
            selector: w,
            selectorGuids: P,
            appliesTo: S,
            useEventTarget: M
        } = Kv(I);
        if (x) return [ti.has(x) ? ti.get(x) : ti.set(x, {}).get(x)];
        if (S === Xo.PAGE) {
            let L = s(T);
            return L ? [L] : []
        }
        let q = (t ? .action ? .config ? .affectedElements ? ? {})[T || w] || {},
            X = !!(q.id || q.selector),
            H, j, Q, V = t && a(Kv(t.target));
        if (X ? (H = q.limitAffectedElements, j = V, Q = a(q)) : j = Q = a({
                id: T,
                selector: w,
                selectorGuids: P
            }), t && M) {
            let L = r && (Q || M === !0) ? [r] : u(V);
            if (Q) {
                if (M === LM) return u(Q).filter(v => L.some(N => h(v, N)));
                if (M === jv) return u(Q).filter(v => L.some(N => h(N, v)));
                if (M === zv) return u(Q).filter(v => L.some(N => b(N, v)))
            }
            return L
        }
        return j == null || Q == null ? [] : $e && n ? u(Q).filter(L => n.contains(L)) : H === jv ? u(j, Q) : H === RM ? l(u(j)).filter(p(Q)) : H === zv ? y(u(j)).filter(p(Q)) : u(Q)
    }

    function BM({
        element: e,
        actionItem: t
    }) {
        if (!$e) return {};
        let {
            actionTypeId: r
        } = t;
        switch (r) {
            case ur:
            case cr:
            case lr:
            case fr:
            case si:
                return window.getComputedStyle(e);
            default:
                return {}
        }
    }

    function HM(e, t = {}, r = {}, n, i) {
        let {
            getStyle: o
        } = i, {
            actionTypeId: s
        } = n;
        if (qt(s)) return Pa(s)(t[s], n);
        switch (n.actionTypeId) {
            case or:
            case ar:
            case sr:
            case Kr:
                return t[n.actionTypeId] || ja[n.actionTypeId];
            case Yr:
                return WM(t[n.actionTypeId], n.config.filters);
            case $r:
                return XM(t[n.actionTypeId], n.config.fontVariations);
            case ry:
                return {
                    value: (0, ht.default)(parseFloat(o(e, ni)), 1)
                };
            case ur:
                {
                    let a = o(e, at),
                        u = o(e, st),
                        l, y;
                    return n.config.widthUnit === At ? l = Yv.test(a) ? parseFloat(a) : parseFloat(r.width) : l = (0, ht.default)(parseFloat(a), parseFloat(r.width)),
                    n.config.heightUnit === At ? y = Yv.test(u) ? parseFloat(u) : parseFloat(r.height) : y = (0, ht.default)(parseFloat(u), parseFloat(r.height)),
                    {
                        widthValue: l,
                        heightValue: y
                    }
                }
            case cr:
            case lr:
            case fr:
                return l1({
                    element: e,
                    actionTypeId: n.actionTypeId,
                    computedStyle: r,
                    getStyle: o
                });
            case si:
                return {
                    value: (0, ht.default)(o(e, ii), r.display)
                };
            case PM:
                return t[n.actionTypeId] || {
                    value: 0
                };
            default:
                return
        }
    }

    function YM({
        element: e,
        actionItem: t,
        elementApi: r
    }) {
        if (qt(t.actionTypeId)) return qa(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
            case or:
            case ar:
            case sr:
            case Kr:
                {
                    let {
                        xValue: n,
                        yValue: i,
                        zValue: o
                    } = t.config;
                    return {
                        xValue: n,
                        yValue: i,
                        zValue: o
                    }
                }
            case ur:
                {
                    let {
                        getStyle: n,
                        setStyle: i,
                        getProperty: o
                    } = r,
                    {
                        widthUnit: s,
                        heightUnit: a
                    } = t.config,
                    {
                        widthValue: u,
                        heightValue: l
                    } = t.config;
                    if (!$e) return {
                        widthValue: u,
                        heightValue: l
                    };
                    if (s === At) {
                        let y = n(e, at);
                        i(e, at, ""), u = o(e, "offsetWidth"), i(e, at, y)
                    }
                    if (a === At) {
                        let y = n(e, st);
                        i(e, st, ""), l = o(e, "offsetHeight"), i(e, st, y)
                    }
                    return {
                        widthValue: u,
                        heightValue: l
                    }
                }
            case cr:
            case lr:
            case fr:
                {
                    let {
                        rValue: n,
                        gValue: i,
                        bValue: o,
                        aValue: s,
                        globalSwatchId: a
                    } = t.config;
                    if (a && a.startsWith("--")) {
                        let {
                            getStyle: u
                        } = r, l = u(e, a), y = (0, Zv.normalizeColor)(l);
                        return {
                            rValue: y.red,
                            gValue: y.green,
                            bValue: y.blue,
                            aValue: y.alpha
                        }
                    }
                    return {
                        rValue: n,
                        gValue: i,
                        bValue: o,
                        aValue: s
                    }
                }
            case Yr:
                return t.config.filters.reduce(jM, {});
            case $r:
                return t.config.fontVariations.reduce(zM, {});
            default:
                {
                    let {
                        value: n
                    } = t.config;
                    return {
                        value: n
                    }
                }
        }
    }

    function oy(e) {
        if (/^TRANSFORM_/.test(e)) return ey;
        if (/^STYLE_/.test(e)) return Wa;
        if (/^GENERAL_/.test(e)) return Ba;
        if (/^PLUGIN_/.test(e)) return ty
    }

    function $M(e, t) {
        return e === Wa ? t.replace("STYLE_", "").toLowerCase() : null
    }

    function QM(e, t, r, n, i, o, s, a, u) {
        switch (a) {
            case ey:
                return r1(e, t, r, i, s);
            case Wa:
                return f1(e, t, r, i, o, s);
            case Ba:
                return d1(e, i, s);
            case ty:
                {
                    let {
                        actionTypeId: l
                    } = i;
                    if (qt(l)) return Fa(l)(u, t, i)
                }
        }
    }

    function r1(e, t, r, n, i) {
        let o = t1.map(a => {
                let u = ja[a],
                    {
                        xValue: l = u.xValue,
                        yValue: y = u.yValue,
                        zValue: p = u.zValue,
                        xUnit: h = "",
                        yUnit: b = "",
                        zUnit: I = ""
                    } = t[a] || {};
                switch (a) {
                    case or:
                        return `${_M}(${l}${h}, ${y}${b}, ${p}${I})`;
                    case ar:
                        return `${bM}(${l}${h}, ${y}${b}, ${p}${I})`;
                    case sr:
                        return `${TM}(${l}${h}) ${IM}(${y}${b}) ${wM}(${p}${I})`;
                    case Kr:
                        return `${AM}(${l}${h}, ${y}${b})`;
                    default:
                        return ""
                }
            }).join(" "),
            {
                setStyle: s
            } = i;
        Mt(e, wt, i), s(e, wt, o), o1(n, r) && s(e, $n, OM)
    }

    function n1(e, t, r, n) {
        let i = (0, oi.default)(t, (s, a, u) => `${s} ${u}(${a}${e1(u,r)})`, ""),
            {
                setStyle: o
            } = n;
        Mt(e, Hr, n), o(e, Hr, i)
    }

    function i1(e, t, r, n) {
        let i = (0, oi.default)(t, (s, a, u) => (s.push(`"${u}" ${a}`), s), []).join(", "),
            {
                setStyle: o
            } = n;
        Mt(e, jr, n), o(e, jr, i)
    }

    function o1({
        actionTypeId: e
    }, {
        xValue: t,
        yValue: r,
        zValue: n
    }) {
        return e === or && n !== void 0 || e === ar && n !== void 0 || e === sr && (t !== void 0 || r !== void 0)
    }

    function c1(e, t) {
        let r = e.exec(t);
        return r ? r[1] : ""
    }

    function l1({
        element: e,
        actionTypeId: t,
        computedStyle: r,
        getStyle: n
    }) {
        let i = Xa[t],
            o = n(e, i),
            s = s1.test(o) ? o : r[i],
            a = c1(u1, s).split(zr);
        return {
            rValue: (0, ht.default)(parseInt(a[0], 10), 255),
            gValue: (0, ht.default)(parseInt(a[1], 10), 255),
            bValue: (0, ht.default)(parseInt(a[2], 10), 255),
            aValue: (0, ht.default)(parseFloat(a[3]), 1)
        }
    }

    function f1(e, t, r, n, i, o) {
        let {
            setStyle: s
        } = o;
        switch (n.actionTypeId) {
            case ur:
                {
                    let {
                        widthUnit: a = "",
                        heightUnit: u = ""
                    } = n.config,
                    {
                        widthValue: l,
                        heightValue: y
                    } = r;l !== void 0 && (a === At && (a = "px"), Mt(e, at, o), s(e, at, l + a)),
                    y !== void 0 && (u === At && (u = "px"), Mt(e, st, o), s(e, st, y + u));
                    break
                }
            case Yr:
                {
                    n1(e, r, n.config, o);
                    break
                }
            case $r:
                {
                    i1(e, r, n.config, o);
                    break
                }
            case cr:
            case lr:
            case fr:
                {
                    let a = Xa[n.actionTypeId],
                        u = Math.round(r.rValue),
                        l = Math.round(r.gValue),
                        y = Math.round(r.bValue),
                        p = r.aValue;Mt(e, a, o),
                    s(e, a, p >= 1 ? `rgb(${u},${l},${y})` : `rgba(${u},${l},${y},${p})`);
                    break
                }
            default:
                {
                    let {
                        unit: a = ""
                    } = n.config;Mt(e, i, o),
                    s(e, i, r.value + a);
                    break
                }
        }
    }

    function d1(e, t, r) {
        let {
            setStyle: n
        } = r;
        switch (t.actionTypeId) {
            case si:
                {
                    let {
                        value: i
                    } = t.config;i === xM && $e ? n(e, ii, Ta) : n(e, ii, i);
                    return
                }
        }
    }

    function Mt(e, t, r) {
        if (!$e) return;
        let n = iy[t];
        if (!n) return;
        let {
            getStyle: i,
            setStyle: o
        } = r, s = i(e, ir);
        if (!s) {
            o(e, ir, n);
            return
        }
        let a = s.split(zr).map(ny);
        a.indexOf(n) === -1 && o(e, ir, a.concat(n).join(zr))
    }

    function ay(e, t, r) {
        if (!$e) return;
        let n = iy[t];
        if (!n) return;
        let {
            getStyle: i,
            setStyle: o
        } = r, s = i(e, ir);
        !s || s.indexOf(n) === -1 || o(e, ir, s.split(zr).map(ny).filter(a => a !== n).join(zr))
    }

    function p1({
        store: e,
        elementApi: t
    }) {
        let {
            ixData: r
        } = e.getState(), {
            events: n = {},
            actionLists: i = {}
        } = r;
        Object.keys(n).forEach(o => {
            let s = n[o],
                {
                    config: a
                } = s.action,
                {
                    actionListId: u
                } = a,
                l = i[u];
            l && $v({
                actionList: l,
                event: s,
                elementApi: t
            })
        }), Object.keys(i).forEach(o => {
            $v({
                actionList: i[o],
                elementApi: t
            })
        })
    }

    function $v({
        actionList: e = {},
        event: t,
        elementApi: r
    }) {
        let {
            actionItemGroups: n,
            continuousParameterGroups: i
        } = e;
        n && n.forEach(o => {
            Qv({
                actionGroup: o,
                event: t,
                elementApi: r
            })
        }), i && i.forEach(o => {
            let {
                continuousActionGroups: s
            } = o;
            s.forEach(a => {
                Qv({
                    actionGroup: a,
                    event: t,
                    elementApi: r
                })
            })
        })
    }

    function Qv({
        actionGroup: e,
        event: t,
        elementApi: r
    }) {
        let {
            actionItems: n
        } = e;
        n.forEach(i => {
            let {
                actionTypeId: o,
                config: s
            } = i, a;
            qt(o) ? a = u => Ma(o)(u, i) : a = sy({
                effect: g1,
                actionTypeId: o,
                elementApi: r
            }), Ha({
                config: s,
                event: t,
                elementApi: r
            }).forEach(a)
        })
    }

    function h1(e, t, r) {
        let {
            setStyle: n,
            getStyle: i
        } = r, {
            actionTypeId: o
        } = t;
        if (o === ur) {
            let {
                config: s
            } = t;
            s.widthUnit === At && n(e, at, ""), s.heightUnit === At && n(e, st, "")
        }
        i(e, ir) && sy({
            effect: ay,
            actionTypeId: o,
            elementApi: r
        })(e)
    }

    function g1(e, t, r) {
        let {
            setStyle: n
        } = r;
        ay(e, t, r), n(e, t, ""), t === wt && n(e, $n, "")
    }

    function uy(e) {
        let t = 0,
            r = 0;
        return e.forEach((n, i) => {
            let {
                config: o
            } = n, s = o.delay + o.duration;
            s >= t && (t = s, r = i)
        }), r
    }

    function v1(e, t) {
        let {
            actionItemGroups: r,
            useFirstGroupAsInitialState: n
        } = e, {
            actionItem: i,
            verboseTimeElapsed: o = 0
        } = t, s = 0, a = 0;
        return r.forEach((u, l) => {
            if (n && l === 0) return;
            let {
                actionItems: y
            } = u, p = y[uy(y)], {
                config: h,
                actionTypeId: b
            } = p;
            i.id === p.id && (a = s + o);
            let I = oy(b) === Ba ? 0 : h.duration;
            s += h.delay + I
        }), s > 0 ? Xr(a / s) : 0
    }

    function y1({
        actionList: e,
        actionItemId: t,
        rawData: r
    }) {
        let {
            actionItemGroups: n,
            continuousParameterGroups: i
        } = e, o = [], s = a => (o.push((0, ai.mergeIn)(a, ["config"], {
            delay: 0,
            duration: 0
        })), a.id === t);
        return n && n.some(({
            actionItems: a
        }) => a.some(s)), i && i.some(a => {
            let {
                continuousActionGroups: u
            } = a;
            return u.some(({
                actionItems: l
            }) => l.some(s))
        }), (0, ai.setIn)(r, ["actionLists"], {
            [e.id]: {
                id: e.id,
                actionItemGroups: [{
                    actionItems: o
                }]
            }
        })
    }

    function E1(e, {
        basedOn: t
    }) {
        return e === Ye.SCROLLING_IN_VIEW && (t === it.ELEMENT || t == null) || e === Ye.MOUSE_MOVE && t === it.ELEMENT
    }

    function m1(e, t) {
        return e + NM + t
    }

    function _1(e, t) {
        return t == null ? !0 : e.indexOf(t) !== -1
    }

    function b1(e, t) {
        return Va(e && e.sort(), t && t.sort())
    }

    function T1(e) {
        if (typeof e == "string") return e;
        if (e.pluginElement && e.objectId) return e.pluginElement + Ua + e.objectId;
        if (e.objectId) return e.objectId;
        let {
            id: t = "",
            selector: r = "",
            useEventTarget: n = ""
        } = e;
        return t + Ua + r + Ua + n
    }
    var ht, oi, ri, ai, Zv, EM, mM, _M, bM, TM, IM, wM, AM, OM, xM, ni, Hr, jr, at, st, Jv, SM, CM, jv, RM, zv, LM, ii, ir, At, zr, NM, Ua, ey, Ba, Wa, ty, or, ar, sr, Kr, ry, Yr, $r, ur, cr, lr, fr, si, PM, ny, Xa, iy, ti, FM, DM, VM, Yv, WM, XM, jM, zM, KM, ja, ZM, JM, e1, t1, a1, s1, u1, sy, ly = de(() => {
        "use strict";
        ht = oe(Av()), oi = oe(Gv()), ri = oe(Wv()), ai = oe(Kt());
        Fe();
        Hv();
        Aa();
        Zv = oe(Sa());
        Da();
        Qn();
        ({
            BACKGROUND: EM,
            TRANSFORM: mM,
            TRANSLATE_3D: _M,
            SCALE_3D: bM,
            ROTATE_X: TM,
            ROTATE_Y: IM,
            ROTATE_Z: wM,
            SKEW: AM,
            PRESERVE_3D: OM,
            FLEX: xM,
            OPACITY: ni,
            FILTER: Hr,
            FONT_VARIATION_SETTINGS: jr,
            WIDTH: at,
            HEIGHT: st,
            BACKGROUND_COLOR: Jv,
            BORDER_COLOR: SM,
            COLOR: CM,
            CHILDREN: jv,
            IMMEDIATE_CHILDREN: RM,
            SIBLINGS: zv,
            PARENT: LM,
            DISPLAY: ii,
            WILL_CHANGE: ir,
            AUTO: At,
            COMMA_DELIMITER: zr,
            COLON_DELIMITER: NM,
            BAR_DELIMITER: Ua,
            RENDER_TRANSFORM: ey,
            RENDER_GENERAL: Ba,
            RENDER_STYLE: Wa,
            RENDER_PLUGIN: ty
        } = Ae), {
            TRANSFORM_MOVE: or,
            TRANSFORM_SCALE: ar,
            TRANSFORM_ROTATE: sr,
            TRANSFORM_SKEW: Kr,
            STYLE_OPACITY: ry,
            STYLE_FILTER: Yr,
            STYLE_FONT_VARIATION: $r,
            STYLE_SIZE: ur,
            STYLE_BACKGROUND_COLOR: cr,
            STYLE_BORDER: lr,
            STYLE_TEXT_COLOR: fr,
            GENERAL_DISPLAY: si,
            OBJECT_VALUE: PM
        } = qe, ny = e => e.trim(), Xa = Object.freeze({
            [cr]: Jv,
            [lr]: SM,
            [fr]: CM
        }), iy = Object.freeze({
            [wt]: mM,
            [Jv]: EM,
            [ni]: ni,
            [Hr]: Hr,
            [at]: at,
            [st]: st,
            [jr]: jr
        }), ti = new Map;
        FM = 1;
        DM = 1;
        VM = (e, t) => e === t;
        Yv = /px/, WM = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = ZM[n.type]), r), e || {}), XM = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = JM[n.type] || n.defaultValue || 0), r), e || {});
        jM = (e, t) => (t && (e[t.type] = t.value || 0), e), zM = (e, t) => (t && (e[t.type] = t.value || 0), e), KM = (e, t, r) => {
            if (qt(e)) return Na(e)(r, t);
            switch (e) {
                case Yr:
                    {
                        let n = (0, ri.default)(r.filters, ({
                            type: i
                        }) => i === t);
                        return n ? n.value : 0
                    }
                case $r:
                    {
                        let n = (0, ri.default)(r.fontVariations, ({
                            type: i
                        }) => i === t);
                        return n ? n.value : 0
                    }
                default:
                    return r[t]
            }
        };
        ja = {
            [or]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [ar]: Object.freeze({
                xValue: 1,
                yValue: 1,
                zValue: 1
            }),
            [sr]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [Kr]: Object.freeze({
                xValue: 0,
                yValue: 0
            })
        }, ZM = Object.freeze({
            blur: 0,
            "hue-rotate": 0,
            invert: 0,
            grayscale: 0,
            saturate: 100,
            sepia: 0,
            contrast: 100,
            brightness: 100
        }), JM = Object.freeze({
            wght: 0,
            opsz: 0,
            wdth: 0,
            slnt: 0
        }), e1 = (e, t) => {
            let r = (0, ri.default)(t.filters, ({
                type: n
            }) => n === e);
            if (r && r.unit) return r.unit;
            switch (e) {
                case "blur":
                    return "px";
                case "hue-rotate":
                    return "deg";
                default:
                    return "%"
            }
        }, t1 = Object.keys(ja);
        a1 = "\\(([^)]+)\\)", s1 = /^rgb/, u1 = RegExp(`rgba?${a1}`);
        sy = ({
            effect: e,
            actionTypeId: t,
            elementApi: r
        }) => n => {
            switch (t) {
                case or:
                case ar:
                case sr:
                case Kr:
                    e(n, wt, r);
                    break;
                case Yr:
                    e(n, Hr, r);
                    break;
                case $r:
                    e(n, jr, r);
                    break;
                case ry:
                    e(n, ni, r);
                    break;
                case ur:
                    e(n, at, r), e(n, st, r);
                    break;
                case cr:
                case lr:
                case fr:
                    e(n, Xa[t], r);
                    break;
                case si:
                    e(n, ii, r);
                    break
            }
        }
    });
    var Dt = c(Re => {
        "use strict";
        var dr = fn().default;
        Object.defineProperty(Re, "__esModule", {
            value: !0
        });
        Re.IX2VanillaUtils = Re.IX2VanillaPlugins = Re.IX2ElementsReducer = Re.IX2Easings = Re.IX2EasingUtils = Re.IX2BrowserSupport = void 0;
        var I1 = dr((Qn(), et(ov)));
        Re.IX2BrowserSupport = I1;
        var w1 = dr((wa(), et(Wr)));
        Re.IX2Easings = w1;
        var A1 = dr((Aa(), et(dv)));
        Re.IX2EasingUtils = A1;
        var O1 = dr((vv(), et(gv)));
        Re.IX2ElementsReducer = O1;
        var x1 = dr((Da(), et(Iv)));
        Re.IX2VanillaPlugins = x1;
        var S1 = dr((ly(), et(cy)));
        Re.IX2VanillaUtils = S1
    });
    var ci, gt, C1, R1, L1, N1, P1, q1, ui, fy, F1, M1, za, D1, k1, G1, V1, dy, py = de(() => {
        "use strict";
        Fe();
        ci = oe(Dt()), gt = oe(Kt()), {
            IX2_RAW_DATA_IMPORTED: C1,
            IX2_SESSION_STOPPED: R1,
            IX2_INSTANCE_ADDED: L1,
            IX2_INSTANCE_STARTED: N1,
            IX2_INSTANCE_REMOVED: P1,
            IX2_ANIMATION_FRAME_CHANGED: q1
        } = me, {
            optimizeFloat: ui,
            applyEasing: fy,
            createBezierEasing: F1
        } = ci.IX2EasingUtils, {
            RENDER_GENERAL: M1
        } = Ae, {
            getItemConfigByKey: za,
            getRenderType: D1,
            getStyleProp: k1
        } = ci.IX2VanillaUtils, G1 = (e, t) => {
            let {
                position: r,
                parameterId: n,
                actionGroups: i,
                destinationKeys: o,
                smoothing: s,
                restingValue: a,
                actionTypeId: u,
                customEasingFn: l,
                skipMotion: y,
                skipToValue: p
            } = e, {
                parameters: h
            } = t.payload, b = Math.max(1 - s, .01), I = h[n];
            I == null && (b = 1, I = a);
            let T = Math.max(I, 0) || 0,
                x = ui(T - r),
                w = y ? p : ui(r + x * b),
                P = w * 100;
            if (w === r && e.current) return e;
            let S, M, F, q;
            for (let H = 0, {
                    length: j
                } = i; H < j; H++) {
                let {
                    keyframe: Q,
                    actionItems: V
                } = i[H];
                if (H === 0 && (S = V[0]), P >= Q) {
                    S = V[0];
                    let L = i[H + 1],
                        v = L && P !== Q;
                    M = v ? L.actionItems[0] : null, v && (F = Q / 100, q = (L.keyframe - Q) / 100)
                }
            }
            let X = {};
            if (S && !M)
                for (let H = 0, {
                        length: j
                    } = o; H < j; H++) {
                    let Q = o[H];
                    X[Q] = za(u, Q, S.config)
                } else if (S && M && F !== void 0 && q !== void 0) {
                    let H = (w - F) / q,
                        j = S.config.easing,
                        Q = fy(j, H, l);
                    for (let V = 0, {
                            length: L
                        } = o; V < L; V++) {
                        let v = o[V],
                            N = za(u, v, S.config),
                            Z = (za(u, v, M.config) - N) * Q + N;
                        X[v] = Z
                    }
                }
            return (0, gt.merge)(e, {
                position: w,
                current: X
            })
        }, V1 = (e, t) => {
            let {
                active: r,
                origin: n,
                start: i,
                immediate: o,
                renderType: s,
                verbose: a,
                actionItem: u,
                destination: l,
                destinationKeys: y,
                pluginDuration: p,
                instanceDelay: h,
                customEasingFn: b,
                skipMotion: I
            } = e, T = u.config.easing, {
                duration: x,
                delay: w
            } = u.config;
            p != null && (x = p), w = h ? ? w, s === M1 ? x = 0 : (o || I) && (x = w = 0);
            let {
                now: P
            } = t.payload;
            if (r && n) {
                let S = P - (i + w);
                if (a) {
                    let H = P - i,
                        j = x + w,
                        Q = ui(Math.min(Math.max(0, H / j), 1));
                    e = (0, gt.set)(e, "verboseTimeElapsed", j * Q)
                }
                if (S < 0) return e;
                let M = ui(Math.min(Math.max(0, S / x), 1)),
                    F = fy(T, M, b),
                    q = {},
                    X = null;
                return y.length && (X = y.reduce((H, j) => {
                    let Q = l[j],
                        V = parseFloat(n[j]) || 0,
                        v = (parseFloat(Q) - V) * F + V;
                    return H[j] = v, H
                }, {})), q.current = X, q.position = M, M === 1 && (q.active = !1, q.complete = !0), (0, gt.merge)(e, q)
            }
            return e
        }, dy = (e = Object.freeze({}), t) => {
            switch (t.type) {
                case C1:
                    return t.payload.ixInstances || Object.freeze({});
                case R1:
                    return Object.freeze({});
                case L1:
                    {
                        let {
                            instanceId: r,
                            elementId: n,
                            actionItem: i,
                            eventId: o,
                            eventTarget: s,
                            eventStateKey: a,
                            actionListId: u,
                            groupIndex: l,
                            isCarrier: y,
                            origin: p,
                            destination: h,
                            immediate: b,
                            verbose: I,
                            continuous: T,
                            parameterId: x,
                            actionGroups: w,
                            smoothing: P,
                            restingValue: S,
                            pluginInstance: M,
                            pluginDuration: F,
                            instanceDelay: q,
                            skipMotion: X,
                            skipToValue: H
                        } = t.payload,
                        {
                            actionTypeId: j
                        } = i,
                        Q = D1(j),
                        V = k1(Q, j),
                        L = Object.keys(h).filter(N => h[N] != null && typeof h[N] != "string"),
                        {
                            easing: v
                        } = i.config;
                        return (0, gt.set)(e, r, {
                            id: r,
                            elementId: n,
                            active: !1,
                            position: 0,
                            start: 0,
                            origin: p,
                            destination: h,
                            destinationKeys: L,
                            immediate: b,
                            verbose: I,
                            current: null,
                            actionItem: i,
                            actionTypeId: j,
                            eventId: o,
                            eventTarget: s,
                            eventStateKey: a,
                            actionListId: u,
                            groupIndex: l,
                            renderType: Q,
                            isCarrier: y,
                            styleProp: V,
                            continuous: T,
                            parameterId: x,
                            actionGroups: w,
                            smoothing: P,
                            restingValue: S,
                            pluginInstance: M,
                            pluginDuration: F,
                            instanceDelay: q,
                            skipMotion: X,
                            skipToValue: H,
                            customEasingFn: Array.isArray(v) && v.length === 4 ? F1(v) : void 0
                        })
                    }
                case N1:
                    {
                        let {
                            instanceId: r,
                            time: n
                        } = t.payload;
                        return (0, gt.mergeIn)(e, [r], {
                            active: !0,
                            complete: !1,
                            start: n
                        })
                    }
                case P1:
                    {
                        let {
                            instanceId: r
                        } = t.payload;
                        if (!e[r]) return e;
                        let n = {},
                            i = Object.keys(e),
                            {
                                length: o
                            } = i;
                        for (let s = 0; s < o; s++) {
                            let a = i[s];
                            a !== r && (n[a] = e[a])
                        }
                        return n
                    }
                case q1:
                    {
                        let r = e,
                            n = Object.keys(e),
                            {
                                length: i
                            } = n;
                        for (let o = 0; o < i; o++) {
                            let s = n[o],
                                a = e[s],
                                u = a.continuous ? G1 : V1;
                            r = (0, gt.set)(r, s, u(a, t))
                        }
                        return r
                    }
                default:
                    return e
            }
        }
    });
    var U1, B1, W1, hy, gy = de(() => {
        "use strict";
        Fe();
        ({
            IX2_RAW_DATA_IMPORTED: U1,
            IX2_SESSION_STOPPED: B1,
            IX2_PARAMETER_CHANGED: W1
        } = me), hy = (e = {}, t) => {
            switch (t.type) {
                case U1:
                    return t.payload.ixParameters || {};
                case B1:
                    return {};
                case W1:
                    {
                        let {
                            key: r,
                            value: n
                        } = t.payload;
                        return e[r] = n,
                        e
                    }
                default:
                    return e
            }
        }
    });
    var Ey = {};
    Pe(Ey, {
        default: () => H1
    });
    var vy, yy, X1, H1, my = de(() => {
        "use strict";
        vy = oe(Wo());
        Rf();
        Qf();
        ed();
        yy = oe(Dt());
        py();
        gy();
        ({
            ixElements: X1
        } = yy.IX2ElementsReducer), H1 = (0, vy.combineReducers)({
            ixData: Cf,
            ixRequest: $f,
            ixSession: Jf,
            ixElements: X1,
            ixInstances: dy,
            ixParameters: hy
        })
    });
    var by = c((zH, _y) => {
        var j1 = bt(),
            z1 = be(),
            K1 = dt(),
            Y1 = "[object String]";

        function $1(e) {
            return typeof e == "string" || !z1(e) && K1(e) && j1(e) == Y1
        }
        _y.exports = $1
    });
    var Iy = c((KH, Ty) => {
        var Q1 = ya(),
            Z1 = Q1("length");
        Ty.exports = Z1
    });
    var Ay = c((YH, wy) => {
        var J1 = "\\ud800-\\udfff",
            eD = "\\u0300-\\u036f",
            tD = "\\ufe20-\\ufe2f",
            rD = "\\u20d0-\\u20ff",
            nD = eD + tD + rD,
            iD = "\\ufe0e\\ufe0f",
            oD = "\\u200d",
            aD = RegExp("[" + oD + J1 + nD + iD + "]");

        function sD(e) {
            return aD.test(e)
        }
        wy.exports = sD
    });
    var qy = c(($H, Py) => {
        var xy = "\\ud800-\\udfff",
            uD = "\\u0300-\\u036f",
            cD = "\\ufe20-\\ufe2f",
            lD = "\\u20d0-\\u20ff",
            fD = uD + cD + lD,
            dD = "\\ufe0e\\ufe0f",
            pD = "[" + xy + "]",
            Ka = "[" + fD + "]",
            Ya = "\\ud83c[\\udffb-\\udfff]",
            hD = "(?:" + Ka + "|" + Ya + ")",
            Sy = "[^" + xy + "]",
            Cy = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            Ry = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            gD = "\\u200d",
            Ly = hD + "?",
            Ny = "[" + dD + "]?",
            vD = "(?:" + gD + "(?:" + [Sy, Cy, Ry].join("|") + ")" + Ny + Ly + ")*",
            yD = Ny + Ly + vD,
            ED = "(?:" + [Sy + Ka + "?", Ka, Cy, Ry, pD].join("|") + ")",
            Oy = RegExp(Ya + "(?=" + Ya + ")|" + ED + yD, "g");

        function mD(e) {
            for (var t = Oy.lastIndex = 0; Oy.test(e);) ++t;
            return t
        }
        Py.exports = mD
    });
    var My = c((QH, Fy) => {
        var _D = Iy(),
            bD = Ay(),
            TD = qy();

        function ID(e) {
            return bD(e) ? TD(e) : _D(e)
        }
        Fy.exports = ID
    });
    var ky = c((ZH, Dy) => {
        var wD = Un(),
            AD = Bn(),
            OD = Nt(),
            xD = by(),
            SD = My(),
            CD = "[object Map]",
            RD = "[object Set]";

        function LD(e) {
            if (e == null) return 0;
            if (OD(e)) return xD(e) ? SD(e) : e.length;
            var t = AD(e);
            return t == CD || t == RD ? e.size : wD(e).length
        }
        Dy.exports = LD
    });
    var Vy = c((JH, Gy) => {
        var ND = "Expected a function";

        function PD(e) {
            if (typeof e != "function") throw new TypeError(ND);
            return function() {
                var t = arguments;
                switch (t.length) {
                    case 0:
                        return !e.call(this);
                    case 1:
                        return !e.call(this, t[0]);
                    case 2:
                        return !e.call(this, t[0], t[1]);
                    case 3:
                        return !e.call(this, t[0], t[1], t[2])
                }
                return !e.apply(this, t)
            }
        }
        Gy.exports = PD
    });
    var $a = c((ej, Uy) => {
        var qD = Tt(),
            FD = function() {
                try {
                    var e = qD(Object, "defineProperty");
                    return e({}, "", {}), e
                } catch {}
            }();
        Uy.exports = FD
    });
    var Qa = c((tj, Wy) => {
        var By = $a();

        function MD(e, t, r) {
            t == "__proto__" && By ? By(e, t, {
                configurable: !0,
                enumerable: !0,
                value: r,
                writable: !0
            }) : e[t] = r
        }
        Wy.exports = MD
    });
    var Hy = c((rj, Xy) => {
        var DD = Qa(),
            kD = Ln(),
            GD = Object.prototype,
            VD = GD.hasOwnProperty;

        function UD(e, t, r) {
            var n = e[t];
            (!(VD.call(e, t) && kD(n, r)) || r === void 0 && !(t in e)) && DD(e, t, r)
        }
        Xy.exports = UD
    });
    var Ky = c((nj, zy) => {
        var BD = Hy(),
            WD = Vr(),
            XD = Dn(),
            jy = ot(),
            HD = rr();

        function jD(e, t, r, n) {
            if (!jy(e)) return e;
            t = WD(t, e);
            for (var i = -1, o = t.length, s = o - 1, a = e; a != null && ++i < o;) {
                var u = HD(t[i]),
                    l = r;
                if (u === "__proto__" || u === "constructor" || u === "prototype") return e;
                if (i != s) {
                    var y = a[u];
                    l = n ? n(y, u, a) : void 0, l === void 0 && (l = jy(y) ? y : XD(t[i + 1]) ? [] : {})
                }
                BD(a, u, l), a = a[u]
            }
            return e
        }
        zy.exports = jD
    });
    var $y = c((ij, Yy) => {
        var zD = Hn(),
            KD = Ky(),
            YD = Vr();

        function $D(e, t, r) {
            for (var n = -1, i = t.length, o = {}; ++n < i;) {
                var s = t[n],
                    a = zD(e, s);
                r(a, s) && KD(o, YD(s, e), a)
            }
            return o
        }
        Yy.exports = $D
    });
    var Zy = c((oj, Qy) => {
        var QD = Fn(),
            ZD = Ro(),
            JD = ra(),
            e2 = ta(),
            t2 = Object.getOwnPropertySymbols,
            r2 = t2 ? function(e) {
                for (var t = []; e;) QD(t, JD(e)), e = ZD(e);
                return t
            } : e2;
        Qy.exports = r2
    });
    var eE = c((aj, Jy) => {
        function n2(e) {
            var t = [];
            if (e != null)
                for (var r in Object(e)) t.push(r);
            return t
        }
        Jy.exports = n2
    });
    var rE = c((sj, tE) => {
        var i2 = ot(),
            o2 = Vn(),
            a2 = eE(),
            s2 = Object.prototype,
            u2 = s2.hasOwnProperty;

        function c2(e) {
            if (!i2(e)) return a2(e);
            var t = o2(e),
                r = [];
            for (var n in e) n == "constructor" && (t || !u2.call(e, n)) || r.push(n);
            return r
        }
        tE.exports = c2
    });
    var iE = c((uj, nE) => {
        var l2 = ia(),
            f2 = rE(),
            d2 = Nt();

        function p2(e) {
            return d2(e) ? l2(e, !0) : f2(e)
        }
        nE.exports = p2
    });
    var aE = c((cj, oE) => {
        var h2 = ea(),
            g2 = Zy(),
            v2 = iE();

        function y2(e) {
            return h2(e, v2, g2)
        }
        oE.exports = y2
    });
    var uE = c((lj, sE) => {
        var E2 = va(),
            m2 = It(),
            _2 = $y(),
            b2 = aE();

        function T2(e, t) {
            if (e == null) return {};
            var r = E2(b2(e), function(n) {
                return [n]
            });
            return t = m2(t), _2(e, r, function(n, i) {
                return t(n, i[0])
            })
        }
        sE.exports = T2
    });
    var lE = c((fj, cE) => {
        var I2 = It(),
            w2 = Vy(),
            A2 = uE();

        function O2(e, t) {
            return A2(e, w2(I2(t)))
        }
        cE.exports = O2
    });
    var dE = c((dj, fE) => {
        var x2 = Un(),
            S2 = Bn(),
            C2 = qr(),
            R2 = be(),
            L2 = Nt(),
            N2 = Mn(),
            P2 = Vn(),
            q2 = Gn(),
            F2 = "[object Map]",
            M2 = "[object Set]",
            D2 = Object.prototype,
            k2 = D2.hasOwnProperty;

        function G2(e) {
            if (e == null) return !0;
            if (L2(e) && (R2(e) || typeof e == "string" || typeof e.splice == "function" || N2(e) || q2(e) || C2(e))) return !e.length;
            var t = S2(e);
            if (t == F2 || t == M2) return !e.size;
            if (P2(e)) return !x2(e).length;
            for (var r in e)
                if (k2.call(e, r)) return !1;
            return !0
        }
        fE.exports = G2
    });
    var hE = c((pj, pE) => {
        var V2 = Qa(),
            U2 = ka(),
            B2 = It();

        function W2(e, t) {
            var r = {};
            return t = B2(t, 3), U2(e, function(n, i, o) {
                V2(r, i, t(n, i, o))
            }), r
        }
        pE.exports = W2
    });
    var vE = c((hj, gE) => {
        function X2(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1;);
            return e
        }
        gE.exports = X2
    });
    var EE = c((gj, yE) => {
        var H2 = zn();

        function j2(e) {
            return typeof e == "function" ? e : H2
        }
        yE.exports = j2
    });
    var _E = c((vj, mE) => {
        var z2 = vE(),
            K2 = Ga(),
            Y2 = EE(),
            $2 = be();

        function Q2(e, t) {
            var r = $2(e) ? z2 : K2;
            return r(e, Y2(t))
        }
        mE.exports = Q2
    });
    var TE = c((yj, bE) => {
        var Z2 = Ke(),
            J2 = function() {
                return Z2.Date.now()
            };
        bE.exports = J2
    });
    var AE = c((Ej, wE) => {
        var ek = ot(),
            Za = TE(),
            IE = Kn(),
            tk = "Expected a function",
            rk = Math.max,
            nk = Math.min;

        function ik(e, t, r) {
            var n, i, o, s, a, u, l = 0,
                y = !1,
                p = !1,
                h = !0;
            if (typeof e != "function") throw new TypeError(tk);
            t = IE(t) || 0, ek(r) && (y = !!r.leading, p = "maxWait" in r, o = p ? rk(IE(r.maxWait) || 0, t) : o, h = "trailing" in r ? !!r.trailing : h);

            function b(q) {
                var X = n,
                    H = i;
                return n = i = void 0, l = q, s = e.apply(H, X), s
            }

            function I(q) {
                return l = q, a = setTimeout(w, t), y ? b(q) : s
            }

            function T(q) {
                var X = q - u,
                    H = q - l,
                    j = t - X;
                return p ? nk(j, o - H) : j
            }

            function x(q) {
                var X = q - u,
                    H = q - l;
                return u === void 0 || X >= t || X < 0 || p && H >= o
            }

            function w() {
                var q = Za();
                if (x(q)) return P(q);
                a = setTimeout(w, T(q))
            }

            function P(q) {
                return a = void 0, h && n ? b(q) : (n = i = void 0, s)
            }

            function S() {
                a !== void 0 && clearTimeout(a), l = 0, n = u = i = a = void 0
            }

            function M() {
                return a === void 0 ? s : P(Za())
            }

            function F() {
                var q = Za(),
                    X = x(q);
                if (n = arguments, i = this, u = q, X) {
                    if (a === void 0) return I(u);
                    if (p) return clearTimeout(a), a = setTimeout(w, t), b(u)
                }
                return a === void 0 && (a = setTimeout(w, t)), s
            }
            return F.cancel = S, F.flush = M, F
        }
        wE.exports = ik
    });
    var xE = c((mj, OE) => {
        var ok = AE(),
            ak = ot(),
            sk = "Expected a function";

        function uk(e, t, r) {
            var n = !0,
                i = !0;
            if (typeof e != "function") throw new TypeError(sk);
            return ak(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), ok(e, t, {
                leading: n,
                maxWait: t,
                trailing: i
            })
        }
        OE.exports = uk
    });
    var CE = {};
    Pe(CE, {
        actionListPlaybackChanged: () => hr,
        animationFrameChanged: () => fi,
        clearRequested: () => Pk,
        elementStateChanged: () => as,
        eventListenerAdded: () => li,
        eventStateChanged: () => ns,
        instanceAdded: () => is,
        instanceRemoved: () => os,
        instanceStarted: () => di,
        mediaQueriesDefined: () => us,
        parameterChanged: () => pr,
        playbackRequested: () => Lk,
        previewRequested: () => Rk,
        rawDataImported: () => Ja,
        sessionInitialized: () => es,
        sessionStarted: () => ts,
        sessionStopped: () => rs,
        stopRequested: () => Nk,
        testFrameRendered: () => qk,
        viewportWidthChanged: () => ss
    });
    var SE, ck, lk, fk, dk, pk, hk, gk, vk, yk, Ek, mk, _k, bk, Tk, Ik, wk, Ak, Ok, xk, Sk, Ck, Ja, es, ts, rs, Rk, Lk, Nk, Pk, li, qk, ns, fi, pr, is, di, os, as, hr, ss, us, pi = de(() => {
        "use strict";
        Fe();
        SE = oe(Dt()), {
            IX2_RAW_DATA_IMPORTED: ck,
            IX2_SESSION_INITIALIZED: lk,
            IX2_SESSION_STARTED: fk,
            IX2_SESSION_STOPPED: dk,
            IX2_PREVIEW_REQUESTED: pk,
            IX2_PLAYBACK_REQUESTED: hk,
            IX2_STOP_REQUESTED: gk,
            IX2_CLEAR_REQUESTED: vk,
            IX2_EVENT_LISTENER_ADDED: yk,
            IX2_TEST_FRAME_RENDERED: Ek,
            IX2_EVENT_STATE_CHANGED: mk,
            IX2_ANIMATION_FRAME_CHANGED: _k,
            IX2_PARAMETER_CHANGED: bk,
            IX2_INSTANCE_ADDED: Tk,
            IX2_INSTANCE_STARTED: Ik,
            IX2_INSTANCE_REMOVED: wk,
            IX2_ELEMENT_STATE_CHANGED: Ak,
            IX2_ACTION_LIST_PLAYBACK_CHANGED: Ok,
            IX2_VIEWPORT_WIDTH_CHANGED: xk,
            IX2_MEDIA_QUERIES_DEFINED: Sk
        } = me, {
            reifyState: Ck
        } = SE.IX2VanillaUtils, Ja = e => ({
            type: ck,
            payload: { ...Ck(e)
            }
        }), es = ({
            hasBoundaryNodes: e,
            reducedMotion: t
        }) => ({
            type: lk,
            payload: {
                hasBoundaryNodes: e,
                reducedMotion: t
            }
        }), ts = () => ({
            type: fk
        }), rs = () => ({
            type: dk
        }), Rk = ({
            rawData: e,
            defer: t
        }) => ({
            type: pk,
            payload: {
                defer: t,
                rawData: e
            }
        }), Lk = ({
            actionTypeId: e = qe.GENERAL_START_ACTION,
            actionListId: t,
            actionItemId: r,
            eventId: n,
            allowEvents: i,
            immediate: o,
            testManual: s,
            verbose: a,
            rawData: u
        }) => ({
            type: hk,
            payload: {
                actionTypeId: e,
                actionListId: t,
                actionItemId: r,
                testManual: s,
                eventId: n,
                allowEvents: i,
                immediate: o,
                verbose: a,
                rawData: u
            }
        }), Nk = e => ({
            type: gk,
            payload: {
                actionListId: e
            }
        }), Pk = () => ({
            type: vk
        }), li = (e, t) => ({
            type: yk,
            payload: {
                target: e,
                listenerParams: t
            }
        }), qk = (e = 1) => ({
            type: Ek,
            payload: {
                step: e
            }
        }), ns = (e, t) => ({
            type: mk,
            payload: {
                stateKey: e,
                newState: t
            }
        }), fi = (e, t) => ({
            type: _k,
            payload: {
                now: e,
                parameters: t
            }
        }), pr = (e, t) => ({
            type: bk,
            payload: {
                key: e,
                value: t
            }
        }), is = e => ({
            type: Tk,
            payload: { ...e
            }
        }), di = (e, t) => ({
            type: Ik,
            payload: {
                instanceId: e,
                time: t
            }
        }), os = e => ({
            type: wk,
            payload: {
                instanceId: e
            }
        }), as = (e, t, r, n) => ({
            type: Ak,
            payload: {
                elementId: e,
                actionTypeId: t,
                current: r,
                actionItem: n
            }
        }), hr = ({
            actionListId: e,
            isPlaying: t
        }) => ({
            type: Ok,
            payload: {
                actionListId: e,
                isPlaying: t
            }
        }), ss = ({
            width: e,
            mediaQueries: t
        }) => ({
            type: xk,
            payload: {
                width: e,
                mediaQueries: t
            }
        }), us = () => ({
            type: Sk
        })
    });
    var Le = {};
    Pe(Le, {
        elementContains: () => fs,
        getChildElements: () => Xk,
        getClosestElement: () => Qr,
        getProperty: () => Gk,
        getQuerySelector: () => ls,
        getRefType: () => ds,
        getSiblingElements: () => Hk,
        getStyle: () => kk,
        getValidDocument: () => Uk,
        isSiblingNode: () => Wk,
        matchSelector: () => Vk,
        queryDocument: () => Bk,
        setStyle: () => Dk
    });

    function Dk(e, t, r) {
        e.style[t] = r
    }

    function kk(e, t) {
        return t.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(t) : e.style[t]
    }

    function Gk(e, t) {
        return e[t]
    }

    function Vk(e) {
        return t => t[cs](e)
    }

    function ls({
        id: e,
        selector: t
    }) {
        if (e) {
            let r = e;
            if (e.indexOf(RE) !== -1) {
                let n = e.split(RE),
                    i = n[0];
                if (r = n[1], i !== document.documentElement.getAttribute(NE)) return null
            }
            return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`
        }
        return t
    }

    function Uk(e) {
        return e == null || e === document.documentElement.getAttribute(NE) ? document : null
    }

    function Bk(e, t) {
        return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
    }

    function fs(e, t) {
        return e.contains(t)
    }

    function Wk(e, t) {
        return e !== t && e.parentNode === t.parentNode
    }

    function Xk(e) {
        let t = [];
        for (let r = 0, {
                length: n
            } = e || []; r < n; r++) {
            let {
                children: i
            } = e[r], {
                length: o
            } = i;
            if (o)
                for (let s = 0; s < o; s++) t.push(i[s])
        }
        return t
    }

    function Hk(e = []) {
        let t = [],
            r = [];
        for (let n = 0, {
                length: i
            } = e; n < i; n++) {
            let {
                parentNode: o
            } = e[n];
            if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1) continue;
            r.push(o);
            let s = o.firstElementChild;
            for (; s != null;) e.indexOf(s) === -1 && t.push(s), s = s.nextElementSibling
        }
        return t
    }

    function ds(e) {
        return e != null && typeof e == "object" ? e instanceof Element ? Fk : Mk : null
    }
    var LE, cs, RE, Fk, Mk, NE, Qr, PE = de(() => {
        "use strict";
        LE = oe(Dt());
        Fe();
        ({
            ELEMENT_MATCHES: cs
        } = LE.IX2BrowserSupport), {
            IX2_ID_DELIMITER: RE,
            HTML_ELEMENT: Fk,
            PLAIN_OBJECT: Mk,
            WF_PAGE: NE
        } = Ae;
        Qr = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let r = e;
            do {
                if (r[cs] && r[cs](t)) return r;
                r = r.parentNode
            } while (r != null);
            return null
        }
    });
    var ps = c((Tj, FE) => {
        var jk = ot(),
            qE = Object.create,
            zk = function() {
                function e() {}
                return function(t) {
                    if (!jk(t)) return {};
                    if (qE) return qE(t);
                    e.prototype = t;
                    var r = new e;
                    return e.prototype = void 0, r
                }
            }();
        FE.exports = zk
    });
    var hi = c((Ij, ME) => {
        function Kk() {}
        ME.exports = Kk
    });
    var vi = c((wj, DE) => {
        var Yk = ps(),
            $k = hi();

        function gi(e, t) {
            this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
        }
        gi.prototype = Yk($k.prototype);
        gi.prototype.constructor = gi;
        DE.exports = gi
    });
    var UE = c((Aj, VE) => {
        var kE = Ht(),
            Qk = qr(),
            Zk = be(),
            GE = kE ? kE.isConcatSpreadable : void 0;

        function Jk(e) {
            return Zk(e) || Qk(e) || !!(GE && e && e[GE])
        }
        VE.exports = Jk
    });
    var XE = c((Oj, WE) => {
        var eG = Fn(),
            tG = UE();

        function BE(e, t, r, n, i) {
            var o = -1,
                s = e.length;
            for (r || (r = tG), i || (i = []); ++o < s;) {
                var a = e[o];
                t > 0 && r(a) ? t > 1 ? BE(a, t - 1, r, n, i) : eG(i, a) : n || (i[i.length] = a)
            }
            return i
        }
        WE.exports = BE
    });
    var jE = c((xj, HE) => {
        var rG = XE();

        function nG(e) {
            var t = e == null ? 0 : e.length;
            return t ? rG(e, 1) : []
        }
        HE.exports = nG
    });
    var KE = c((Sj, zE) => {
        function iG(e, t, r) {
            switch (r.length) {
                case 0:
                    return e.call(t);
                case 1:
                    return e.call(t, r[0]);
                case 2:
                    return e.call(t, r[0], r[1]);
                case 3:
                    return e.call(t, r[0], r[1], r[2])
            }
            return e.apply(t, r)
        }
        zE.exports = iG
    });
    var QE = c((Cj, $E) => {
        var oG = KE(),
            YE = Math.max;

        function aG(e, t, r) {
            return t = YE(t === void 0 ? e.length - 1 : t, 0),
                function() {
                    for (var n = arguments, i = -1, o = YE(n.length - t, 0), s = Array(o); ++i < o;) s[i] = n[t + i];
                    i = -1;
                    for (var a = Array(t + 1); ++i < t;) a[i] = n[i];
                    return a[t] = r(s), oG(e, this, a)
                }
        }
        $E.exports = aG
    });
    var JE = c((Rj, ZE) => {
        function sG(e) {
            return function() {
                return e
            }
        }
        ZE.exports = sG
    });
    var rm = c((Lj, tm) => {
        var uG = JE(),
            em = $a(),
            cG = zn(),
            lG = em ? function(e, t) {
                return em(e, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: uG(t),
                    writable: !0
                })
            } : cG;
        tm.exports = lG
    });
    var im = c((Nj, nm) => {
        var fG = 800,
            dG = 16,
            pG = Date.now;

        function hG(e) {
            var t = 0,
                r = 0;
            return function() {
                var n = pG(),
                    i = dG - (n - r);
                if (r = n, i > 0) {
                    if (++t >= fG) return arguments[0]
                } else t = 0;
                return e.apply(void 0, arguments)
            }
        }
        nm.exports = hG
    });
    var am = c((Pj, om) => {
        var gG = rm(),
            vG = im(),
            yG = vG(gG);
        om.exports = yG
    });
    var um = c((qj, sm) => {
        var EG = jE(),
            mG = QE(),
            _G = am();

        function bG(e) {
            return _G(mG(e, void 0, EG), e + "")
        }
        sm.exports = bG
    });
    var fm = c((Fj, lm) => {
        var cm = oa(),
            TG = cm && new cm;
        lm.exports = TG
    });
    var pm = c((Mj, dm) => {
        function IG() {}
        dm.exports = IG
    });
    var hs = c((Dj, gm) => {
        var hm = fm(),
            wG = pm(),
            AG = hm ? function(e) {
                return hm.get(e)
            } : wG;
        gm.exports = AG
    });
    var ym = c((kj, vm) => {
        var OG = {};
        vm.exports = OG
    });
    var gs = c((Gj, mm) => {
        var Em = ym(),
            xG = Object.prototype,
            SG = xG.hasOwnProperty;

        function CG(e) {
            for (var t = e.name + "", r = Em[t], n = SG.call(Em, t) ? r.length : 0; n--;) {
                var i = r[n],
                    o = i.func;
                if (o == null || o == e) return i.name
            }
            return t
        }
        mm.exports = CG
    });
    var Ei = c((Vj, _m) => {
        var RG = ps(),
            LG = hi(),
            NG = 4294967295;

        function yi(e) {
            this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = NG, this.__views__ = []
        }
        yi.prototype = RG(LG.prototype);
        yi.prototype.constructor = yi;
        _m.exports = yi
    });
    var Tm = c((Uj, bm) => {
        function PG(e, t) {
            var r = -1,
                n = e.length;
            for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
            return t
        }
        bm.exports = PG
    });
    var wm = c((Bj, Im) => {
        var qG = Ei(),
            FG = vi(),
            MG = Tm();

        function DG(e) {
            if (e instanceof qG) return e.clone();
            var t = new FG(e.__wrapped__, e.__chain__);
            return t.__actions__ = MG(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
        }
        Im.exports = DG
    });
    var xm = c((Wj, Om) => {
        var kG = Ei(),
            Am = vi(),
            GG = hi(),
            VG = be(),
            UG = dt(),
            BG = wm(),
            WG = Object.prototype,
            XG = WG.hasOwnProperty;

        function mi(e) {
            if (UG(e) && !VG(e) && !(e instanceof kG)) {
                if (e instanceof Am) return e;
                if (XG.call(e, "__wrapped__")) return BG(e)
            }
            return new Am(e)
        }
        mi.prototype = GG.prototype;
        mi.prototype.constructor = mi;
        Om.exports = mi
    });
    var Cm = c((Xj, Sm) => {
        var HG = Ei(),
            jG = hs(),
            zG = gs(),
            KG = xm();

        function YG(e) {
            var t = zG(e),
                r = KG[t];
            if (typeof r != "function" || !(t in HG.prototype)) return !1;
            if (e === r) return !0;
            var n = jG(r);
            return !!n && e === n[0]
        }
        Sm.exports = YG
    });
    var Pm = c((Hj, Nm) => {
        var Rm = vi(),
            $G = um(),
            QG = hs(),
            vs = gs(),
            ZG = be(),
            Lm = Cm(),
            JG = "Expected a function",
            eV = 8,
            tV = 32,
            rV = 128,
            nV = 256;

        function iV(e) {
            return $G(function(t) {
                var r = t.length,
                    n = r,
                    i = Rm.prototype.thru;
                for (e && t.reverse(); n--;) {
                    var o = t[n];
                    if (typeof o != "function") throw new TypeError(JG);
                    if (i && !s && vs(o) == "wrapper") var s = new Rm([], !0)
                }
                for (n = s ? n : r; ++n < r;) {
                    o = t[n];
                    var a = vs(o),
                        u = a == "wrapper" ? QG(o) : void 0;
                    u && Lm(u[0]) && u[1] == (rV | eV | tV | nV) && !u[4].length && u[9] == 1 ? s = s[vs(u[0])].apply(s, u[3]) : s = o.length == 1 && Lm(o) ? s[a]() : s.thru(o)
                }
                return function() {
                    var l = arguments,
                        y = l[0];
                    if (s && l.length == 1 && ZG(y)) return s.plant(y).value();
                    for (var p = 0, h = r ? t[p].apply(this, l) : y; ++p < r;) h = t[p].call(this, h);
                    return h
                }
            })
        }
        Nm.exports = iV
    });
    var Fm = c((jj, qm) => {
        var oV = Pm(),
            aV = oV();
        qm.exports = aV
    });
    var Dm = c((zj, Mm) => {
        function sV(e, t, r) {
            return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e
        }
        Mm.exports = sV
    });
    var Gm = c((Kj, km) => {
        var uV = Dm(),
            ys = Kn();

        function cV(e, t, r) {
            return r === void 0 && (r = t, t = void 0), r !== void 0 && (r = ys(r), r = r === r ? r : 0), t !== void 0 && (t = ys(t), t = t === t ? t : 0), uV(ys(e), t, r)
        }
        km.exports = cV
    });
    var Km, Ym, $m, Qm, lV, fV, dV, pV, hV, gV, vV, yV, EV, mV, _V, bV, TV, IV, wV, Zm, Jm, AV, OV, xV, e_, SV, CV, t_, RV, Es, r_, Vm, Um, n_, Jr, LV, ut, i_, NV, De, Qe, en, o_, ms, Bm, _s, PV, Zr, qV, FV, MV, a_, Wm, DV, Xm, kV, GV, VV, Hm, _i, bi, jm, zm, s_, u_ = de(() => {
        "use strict";
        Km = oe(Fm()), Ym = oe(jn()), $m = oe(Gm());
        Fe();
        bs();
        pi();
        Qm = oe(Dt()), {
            MOUSE_CLICK: lV,
            MOUSE_SECOND_CLICK: fV,
            MOUSE_DOWN: dV,
            MOUSE_UP: pV,
            MOUSE_OVER: hV,
            MOUSE_OUT: gV,
            DROPDOWN_CLOSE: vV,
            DROPDOWN_OPEN: yV,
            SLIDER_ACTIVE: EV,
            SLIDER_INACTIVE: mV,
            TAB_ACTIVE: _V,
            TAB_INACTIVE: bV,
            NAVBAR_CLOSE: TV,
            NAVBAR_OPEN: IV,
            MOUSE_MOVE: wV,
            PAGE_SCROLL_DOWN: Zm,
            SCROLL_INTO_VIEW: Jm,
            SCROLL_OUT_OF_VIEW: AV,
            PAGE_SCROLL_UP: OV,
            SCROLLING_IN_VIEW: xV,
            PAGE_FINISH: e_,
            ECOMMERCE_CART_CLOSE: SV,
            ECOMMERCE_CART_OPEN: CV,
            PAGE_START: t_,
            PAGE_SCROLL: RV
        } = Ye, Es = "COMPONENT_ACTIVE", r_ = "COMPONENT_INACTIVE", {
            COLON_DELIMITER: Vm
        } = Ae, {
            getNamespacedParameterId: Um
        } = Qm.IX2VanillaUtils, n_ = e => t => typeof t == "object" && e(t) ? !0 : t, Jr = n_(({
            element: e,
            nativeEvent: t
        }) => e === t.target), LV = n_(({
            element: e,
            nativeEvent: t
        }) => e.contains(t.target)), ut = (0, Km.default)([Jr, LV]), i_ = (e, t) => {
            if (t) {
                let {
                    ixData: r
                } = e.getState(), {
                    events: n
                } = r, i = n[t];
                if (i && !PV[i.eventTypeId]) return i
            }
            return null
        }, NV = ({
            store: e,
            event: t
        }) => {
            let {
                action: r
            } = t, {
                autoStopEventId: n
            } = r.config;
            return !!i_(e, n)
        }, De = ({
            store: e,
            event: t,
            element: r,
            eventStateKey: n
        }, i) => {
            let {
                action: o,
                id: s
            } = t, {
                actionListId: a,
                autoStopEventId: u
            } = o.config, l = i_(e, u);
            return l && gr({
                store: e,
                eventId: u,
                eventTarget: r,
                eventStateKey: u + Vm + n.split(Vm)[1],
                actionListId: (0, Ym.default)(l, "action.config.actionListId")
            }), gr({
                store: e,
                eventId: s,
                eventTarget: r,
                eventStateKey: n,
                actionListId: a
            }), tn({
                store: e,
                eventId: s,
                eventTarget: r,
                eventStateKey: n,
                actionListId: a
            }), i
        }, Qe = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n, en = {
            handler: Qe(ut, De)
        }, o_ = { ...en,
            types: [Es, r_].join(" ")
        }, ms = [{
            target: window,
            types: "resize orientationchange",
            throttle: !0
        }, {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0
        }], Bm = "mouseover mouseout", _s = {
            types: ms
        }, PV = {
            PAGE_START: t_,
            PAGE_FINISH: e_
        }, Zr = (() => {
            let e = window.pageXOffset !== void 0,
                r = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
            return () => ({
                scrollLeft: e ? window.pageXOffset : r.scrollLeft,
                scrollTop: e ? window.pageYOffset : r.scrollTop,
                stiffScrollTop: (0, $m.default)(e ? window.pageYOffset : r.scrollTop, 0, r.scrollHeight - window.innerHeight),
                scrollWidth: r.scrollWidth,
                scrollHeight: r.scrollHeight,
                clientWidth: r.clientWidth,
                clientHeight: r.clientHeight,
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            })
        })(), qV = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top), FV = ({
            element: e,
            nativeEvent: t
        }) => {
            let {
                type: r,
                target: n,
                relatedTarget: i
            } = t, o = e.contains(n);
            if (r === "mouseover" && o) return !0;
            let s = e.contains(i);
            return !!(r === "mouseout" && o && s)
        }, MV = e => {
            let {
                element: t,
                event: {
                    config: r
                }
            } = e, {
                clientWidth: n,
                clientHeight: i
            } = Zr(), o = r.scrollOffsetValue, u = r.scrollOffsetUnit === "PX" ? o : i * (o || 0) / 100;
            return qV(t.getBoundingClientRect(), {
                left: 0,
                top: u,
                right: n,
                bottom: i - u
            })
        }, a_ = e => (t, r) => {
            let {
                type: n
            } = t.nativeEvent, i = [Es, r_].indexOf(n) !== -1 ? n === Es : r.isActive, o = { ...r,
                isActive: i
            };
            return (!r || o.isActive !== r.isActive) && e(t, o) || o
        }, Wm = e => (t, r) => {
            let n = {
                elementHovered: FV(t)
            };
            return (r ? n.elementHovered !== r.elementHovered : n.elementHovered) && e(t, n) || n
        }, DV = e => (t, r) => {
            let n = { ...r,
                elementVisible: MV(t)
            };
            return (r ? n.elementVisible !== r.elementVisible : n.elementVisible) && e(t, n) || n
        }, Xm = e => (t, r = {}) => {
            let {
                stiffScrollTop: n,
                scrollHeight: i,
                innerHeight: o
            } = Zr(), {
                event: {
                    config: s,
                    eventTypeId: a
                }
            } = t, {
                scrollOffsetValue: u,
                scrollOffsetUnit: l
            } = s, y = l === "PX", p = i - o, h = Number((n / p).toFixed(2));
            if (r && r.percentTop === h) return r;
            let b = (y ? u : o * (u || 0) / 100) / p,
                I, T, x = 0;
            r && (I = h > r.percentTop, T = r.scrollingDown !== I, x = T ? h : r.anchorTop);
            let w = a === Zm ? h >= x + b : h <= x - b,
                P = { ...r,
                    percentTop: h,
                    inBounds: w,
                    anchorTop: x,
                    scrollingDown: I
                };
            return r && w && (T || P.inBounds !== r.inBounds) && e(t, P) || P
        }, kV = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom, GV = e => (t, r) => {
            let n = {
                finished: document.readyState === "complete"
            };
            return n.finished && !(r && r.finshed) && e(t), n
        }, VV = e => (t, r) => {
            let n = {
                started: !0
            };
            return r || e(t), n
        }, Hm = e => (t, r = {
            clickCount: 0
        }) => {
            let n = {
                clickCount: r.clickCount % 2 + 1
            };
            return n.clickCount !== r.clickCount && e(t, n) || n
        }, _i = (e = !0) => ({ ...o_,
            handler: Qe(e ? ut : Jr, a_((t, r) => r.isActive ? en.handler(t, r) : r))
        }), bi = (e = !0) => ({ ...o_,
            handler: Qe(e ? ut : Jr, a_((t, r) => r.isActive ? r : en.handler(t, r)))
        }), jm = { ..._s,
            handler: DV((e, t) => {
                let {
                    elementVisible: r
                } = t, {
                    event: n,
                    store: i
                } = e, {
                    ixData: o
                } = i.getState(), {
                    events: s
                } = o;
                return !s[n.action.config.autoStopEventId] && t.triggered ? t : n.eventTypeId === Jm === r ? (De(e), { ...t,
                    triggered: !0
                }) : t
            })
        }, zm = .05, s_ = {
            [EV]: _i(),
            [mV]: bi(),
            [yV]: _i(),
            [vV]: bi(),
            [IV]: _i(!1),
            [TV]: bi(!1),
            [_V]: _i(),
            [bV]: bi(),
            [CV]: {
                types: "ecommerce-cart-open",
                handler: Qe(ut, De)
            },
            [SV]: {
                types: "ecommerce-cart-close",
                handler: Qe(ut, De)
            },
            [lV]: {
                types: "click",
                handler: Qe(ut, Hm((e, {
                    clickCount: t
                }) => {
                    NV(e) ? t === 1 && De(e) : De(e)
                }))
            },
            [fV]: {
                types: "click",
                handler: Qe(ut, Hm((e, {
                    clickCount: t
                }) => {
                    t === 2 && De(e)
                }))
            },
            [dV]: { ...en,
                types: "mousedown"
            },
            [pV]: { ...en,
                types: "mouseup"
            },
            [hV]: {
                types: Bm,
                handler: Qe(ut, Wm((e, t) => {
                    t.elementHovered && De(e)
                }))
            },
            [gV]: {
                types: Bm,
                handler: Qe(ut, Wm((e, t) => {
                    t.elementHovered || De(e)
                }))
            },
            [wV]: {
                types: "mousemove mouseout scroll",
                handler: ({
                    store: e,
                    element: t,
                    eventConfig: r,
                    nativeEvent: n,
                    eventStateKey: i
                }, o = {
                    clientX: 0,
                    clientY: 0,
                    pageX: 0,
                    pageY: 0
                }) => {
                    let {
                        basedOn: s,
                        selectedAxis: a,
                        continuousParameterGroupId: u,
                        reverse: l,
                        restingState: y = 0
                    } = r, {
                        clientX: p = o.clientX,
                        clientY: h = o.clientY,
                        pageX: b = o.pageX,
                        pageY: I = o.pageY
                    } = n, T = a === "X_AXIS", x = n.type === "mouseout", w = y / 100, P = u, S = !1;
                    switch (s) {
                        case it.VIEWPORT:
                            {
                                w = T ? Math.min(p, window.innerWidth) / window.innerWidth : Math.min(h, window.innerHeight) / window.innerHeight;
                                break
                            }
                        case it.PAGE:
                            {
                                let {
                                    scrollLeft: M,
                                    scrollTop: F,
                                    scrollWidth: q,
                                    scrollHeight: X
                                } = Zr();w = T ? Math.min(M + b, q) / q : Math.min(F + I, X) / X;
                                break
                            }
                        case it.ELEMENT:
                        default:
                            {
                                P = Um(i, u);
                                let M = n.type.indexOf("mouse") === 0;
                                if (M && ut({
                                        element: t,
                                        nativeEvent: n
                                    }) !== !0) break;
                                let F = t.getBoundingClientRect(),
                                    {
                                        left: q,
                                        top: X,
                                        width: H,
                                        height: j
                                    } = F;
                                if (!M && !kV({
                                        left: p,
                                        top: h
                                    }, F)) break;S = !0,
                                w = T ? (p - q) / H : (h - X) / j;
                                break
                            }
                    }
                    return x && (w > 1 - zm || w < zm) && (w = Math.round(w)), (s !== it.ELEMENT || S || S !== o.elementHovered) && (w = l ? 1 - w : w, e.dispatch(pr(P, w))), {
                        elementHovered: S,
                        clientX: p,
                        clientY: h,
                        pageX: b,
                        pageY: I
                    }
                }
            },
            [RV]: {
                types: ms,
                handler: ({
                    store: e,
                    eventConfig: t
                }) => {
                    let {
                        continuousParameterGroupId: r,
                        reverse: n
                    } = t, {
                        scrollTop: i,
                        scrollHeight: o,
                        clientHeight: s
                    } = Zr(), a = i / (o - s);
                    a = n ? 1 - a : a, e.dispatch(pr(r, a))
                }
            },
            [xV]: {
                types: ms,
                handler: ({
                    element: e,
                    store: t,
                    eventConfig: r,
                    eventStateKey: n
                }, i = {
                    scrollPercent: 0
                }) => {
                    let {
                        scrollLeft: o,
                        scrollTop: s,
                        scrollWidth: a,
                        scrollHeight: u,
                        clientHeight: l
                    } = Zr(), {
                        basedOn: y,
                        selectedAxis: p,
                        continuousParameterGroupId: h,
                        startsEntering: b,
                        startsExiting: I,
                        addEndOffset: T,
                        addStartOffset: x,
                        addOffsetValue: w = 0,
                        endOffsetValue: P = 0
                    } = r, S = p === "X_AXIS";
                    if (y === it.VIEWPORT) {
                        let M = S ? o / a : s / u;
                        return M !== i.scrollPercent && t.dispatch(pr(h, M)), {
                            scrollPercent: M
                        }
                    } else {
                        let M = Um(n, h),
                            F = e.getBoundingClientRect(),
                            q = (x ? w : 0) / 100,
                            X = (T ? P : 0) / 100;
                        q = b ? q : 1 - q, X = I ? X : 1 - X;
                        let H = F.top + Math.min(F.height * q, l),
                            Q = F.top + F.height * X - H,
                            V = Math.min(l + Q, u),
                            v = Math.min(Math.max(0, l - H), V) / V;
                        return v !== i.scrollPercent && t.dispatch(pr(M, v)), {
                            scrollPercent: v
                        }
                    }
                }
            },
            [Jm]: jm,
            [AV]: jm,
            [Zm]: { ..._s,
                handler: Xm((e, t) => {
                    t.scrollingDown && De(e)
                })
            },
            [OV]: { ..._s,
                handler: Xm((e, t) => {
                    t.scrollingDown || De(e)
                })
            },
            [e_]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: Qe(Jr, GV(De))
            },
            [t_]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: Qe(Jr, VV(De))
            }
        }
    });
    var A_ = {};
    Pe(A_, {
        observeRequests: () => aU,
        startActionGroup: () => tn,
        startEngine: () => xi,
        stopActionGroup: () => gr,
        stopAllActionGroups: () => T_,
        stopEngine: () => Si
    });

    function aU(e) {
        kt({
            store: e,
            select: ({
                ixRequest: t
            }) => t.preview,
            onChange: cU
        }), kt({
            store: e,
            select: ({
                ixRequest: t
            }) => t.playback,
            onChange: lU
        }), kt({
            store: e,
            select: ({
                ixRequest: t
            }) => t.stop,
            onChange: fU
        }), kt({
            store: e,
            select: ({
                ixRequest: t
            }) => t.clear,
            onChange: dU
        })
    }

    function sU(e) {
        kt({
            store: e,
            select: ({
                ixSession: t
            }) => t.mediaQueryKey,
            onChange: () => {
                Si(e), E_({
                    store: e,
                    elementApi: Le
                }), xi({
                    store: e,
                    allowEvents: !0
                }), m_()
            }
        })
    }

    function uU(e, t) {
        let r = kt({
            store: e,
            select: ({
                ixSession: n
            }) => n.tick,
            onChange: n => {
                t(n), r()
            }
        })
    }

    function cU({
        rawData: e,
        defer: t
    }, r) {
        let n = () => {
            xi({
                store: r,
                rawData: e,
                allowEvents: !0
            }), m_()
        };
        t ? setTimeout(n, 0) : n()
    }

    function m_() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
    }

    function lU(e, t) {
        let {
            actionTypeId: r,
            actionListId: n,
            actionItemId: i,
            eventId: o,
            allowEvents: s,
            immediate: a,
            testManual: u,
            verbose: l = !0
        } = e, {
            rawData: y
        } = e;
        if (n && i && y && a) {
            let p = y.actionLists[n];
            p && (y = YV({
                actionList: p,
                actionItemId: i,
                rawData: y
            }))
        }
        if (xi({
                store: t,
                rawData: y,
                allowEvents: s,
                testManual: u
            }), n && r === qe.GENERAL_START_ACTION || Ts(r)) {
            gr({
                store: t,
                actionListId: n
            }), b_({
                store: t,
                actionListId: n,
                eventId: o
            });
            let p = tn({
                store: t,
                eventId: o,
                actionListId: n,
                immediate: a,
                verbose: l
            });
            l && p && t.dispatch(hr({
                actionListId: n,
                isPlaying: !a
            }))
        }
    }

    function fU({
        actionListId: e
    }, t) {
        e ? gr({
            store: t,
            actionListId: e
        }) : T_({
            store: t
        }), Si(t)
    }

    function dU(e, t) {
        Si(t), E_({
            store: t,
            elementApi: Le
        })
    }

    function xi({
        store: e,
        rawData: t,
        allowEvents: r,
        testManual: n
    }) {
        let {
            ixSession: i
        } = e.getState();
        t && e.dispatch(Ja(t)), i.active || (e.dispatch(es({
            hasBoundaryNodes: !!document.querySelector(Ii),
            reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
        })), r && (EU(e), pU(), e.getState().ixSession.hasDefinedMediaQueries && sU(e)), e.dispatch(ts()), hU(e, n))
    }

    function pU() {
        let {
            documentElement: e
        } = document;
        e.className.indexOf(c_) === -1 && (e.className += ` ${c_}`)
    }

    function hU(e, t) {
        let r = n => {
            let {
                ixSession: i,
                ixParameters: o
            } = e.getState();
            i.active && (e.dispatch(fi(n, o)), t ? uU(e, r) : requestAnimationFrame(r))
        };
        r(window.performance.now())
    }

    function Si(e) {
        let {
            ixSession: t
        } = e.getState();
        if (t.active) {
            let {
                eventListeners: r
            } = t;
            r.forEach(gU), JV(), e.dispatch(rs())
        }
    }

    function gU({
        target: e,
        listenerParams: t
    }) {
        e.removeEventListener.apply(e, t)
    }

    function vU({
        store: e,
        eventStateKey: t,
        eventTarget: r,
        eventId: n,
        eventConfig: i,
        actionListId: o,
        parameterGroup: s,
        smoothing: a,
        restingValue: u
    }) {
        let {
            ixData: l,
            ixSession: y
        } = e.getState(), {
            events: p
        } = l, h = p[n], {
            eventTypeId: b
        } = h, I = {}, T = {}, x = [], {
            continuousActionGroups: w
        } = s, {
            id: P
        } = s;
        $V(b, i) && (P = QV(t, P));
        let S = y.hasBoundaryNodes && r ? Qr(r, Ii) : null;
        w.forEach(M => {
            let {
                keyframe: F,
                actionItems: q
            } = M;
            q.forEach(X => {
                let {
                    actionTypeId: H
                } = X, {
                    target: j
                } = X.config;
                if (!j) return;
                let Q = j.boundaryMode ? S : null,
                    V = eU(j) + Is + H;
                if (T[V] = yU(T[V], F, X), !I[V]) {
                    I[V] = !0;
                    let {
                        config: L
                    } = X;
                    wi({
                        config: L,
                        event: h,
                        eventTarget: r,
                        elementRoot: Q,
                        elementApi: Le
                    }).forEach(v => {
                        x.push({
                            element: v,
                            key: V
                        })
                    })
                }
            })
        }), x.forEach(({
            element: M,
            key: F
        }) => {
            let q = T[F],
                X = (0, vt.default)(q, "[0].actionItems[0]", {}),
                {
                    actionTypeId: H
                } = X,
                j = Oi(H) ? As(H)(M, X) : null,
                Q = ws({
                    element: M,
                    actionItem: X,
                    elementApi: Le
                }, j);
            Os({
                store: e,
                element: M,
                eventId: n,
                actionListId: o,
                actionItem: X,
                destination: Q,
                continuous: !0,
                parameterId: P,
                actionGroups: q,
                smoothing: a,
                restingValue: u,
                pluginInstance: j
            })
        })
    }

    function yU(e = [], t, r) {
        let n = [...e],
            i;
        return n.some((o, s) => o.keyframe === t ? (i = s, !0) : !1), i == null && (i = n.length, n.push({
            keyframe: t,
            actionItems: []
        })), n[i].actionItems.push(r), n
    }

    function EU(e) {
        let {
            ixData: t
        } = e.getState(), {
            eventTypeMap: r
        } = t;
        __(e), (0, vr.default)(r, (i, o) => {
            let s = s_[o];
            if (!s) {
                console.warn(`IX2 event type not configured: ${o}`);
                return
            }
            wU({
                logic: s,
                store: e,
                events: i
            })
        });
        let {
            ixSession: n
        } = e.getState();
        n.eventListeners.length && _U(e)
    }

    function _U(e) {
        let t = () => {
            __(e)
        };
        mU.forEach(r => {
            window.addEventListener(r, t), e.dispatch(li(window, [r, t]))
        }), t()
    }

    function __(e) {
        let {
            ixSession: t,
            ixData: r
        } = e.getState(), n = window.innerWidth;
        if (n !== t.viewportWidth) {
            let {
                mediaQueries: i
            } = r;
            e.dispatch(ss({
                width: n,
                mediaQueries: i
            }))
        }
    }

    function wU({
        logic: e,
        store: t,
        events: r
    }) {
        AU(r);
        let {
            types: n,
            handler: i
        } = e, {
            ixData: o
        } = t.getState(), {
            actionLists: s
        } = o, a = bU(r, IU);
        if (!(0, d_.default)(a)) return;
        (0, vr.default)(a, (p, h) => {
            let b = r[h],
                {
                    action: I,
                    id: T,
                    mediaQueries: x = o.mediaQueryKeys
                } = b,
                {
                    actionListId: w
                } = I.config;
            tU(x, o.mediaQueryKeys) || t.dispatch(us()), I.actionTypeId === qe.GENERAL_CONTINUOUS_ACTION && (Array.isArray(b.config) ? b.config : [b.config]).forEach(S => {
                let {
                    continuousParameterGroupId: M
                } = S, F = (0, vt.default)(s, `${w}.continuousParameterGroups`, []), q = (0, f_.default)(F, ({
                    id: j
                }) => j === M), X = (S.smoothing || 0) / 100, H = (S.restingState || 0) / 100;
                q && p.forEach((j, Q) => {
                    let V = T + Is + Q;
                    vU({
                        store: t,
                        eventStateKey: V,
                        eventTarget: j,
                        eventId: T,
                        eventConfig: S,
                        actionListId: w,
                        parameterGroup: q,
                        smoothing: X,
                        restingValue: H
                    })
                })
            }), (I.actionTypeId === qe.GENERAL_START_ACTION || Ts(I.actionTypeId)) && b_({
                store: t,
                actionListId: w,
                eventId: T
            })
        });
        let u = p => {
                let {
                    ixSession: h
                } = t.getState();
                TU(a, (b, I, T) => {
                    let x = r[I],
                        w = h.eventState[T],
                        {
                            action: P,
                            mediaQueries: S = o.mediaQueryKeys
                        } = x;
                    if (!Ai(S, h.mediaQueryKey)) return;
                    let M = (F = {}) => {
                        let q = i({
                            store: t,
                            element: b,
                            event: x,
                            eventConfig: F,
                            nativeEvent: p,
                            eventStateKey: T
                        }, w);
                        rU(q, w) || t.dispatch(ns(T, q))
                    };
                    P.actionTypeId === qe.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(x.config) ? x.config : [x.config]).forEach(M) : M()
                })
            },
            l = (0, v_.default)(u, oU),
            y = ({
                target: p = document,
                types: h,
                throttle: b
            }) => {
                h.split(" ").filter(Boolean).forEach(I => {
                    let T = b ? l : u;
                    p.addEventListener(I, T), t.dispatch(li(p, [I, T]))
                })
            };
        Array.isArray(n) ? n.forEach(y) : typeof n == "string" && y(e)
    }

    function AU(e) {
        if (!iU) return;
        let t = {},
            r = "";
        for (let n in e) {
            let {
                eventTypeId: i,
                target: o
            } = e[n], s = ls(o);
            t[s] || (i === Ye.MOUSE_CLICK || i === Ye.MOUSE_SECOND_CLICK) && (t[s] = !0, r += s + "{cursor: pointer;touch-action: manipulation;}")
        }
        if (r) {
            let n = document.createElement("style");
            n.textContent = r, document.body.appendChild(n)
        }
    }

    function b_({
        store: e,
        actionListId: t,
        eventId: r
    }) {
        let {
            ixData: n,
            ixSession: i
        } = e.getState(), {
            actionLists: o,
            events: s
        } = n, a = s[r], u = o[t];
        if (u && u.useFirstGroupAsInitialState) {
            let l = (0, vt.default)(u, "actionItemGroups[0].actionItems", []),
                y = (0, vt.default)(a, "mediaQueries", n.mediaQueryKeys);
            if (!Ai(y, i.mediaQueryKey)) return;
            l.forEach(p => {
                let {
                    config: h,
                    actionTypeId: b
                } = p, I = h ? .target ? .useEventTarget === !0 && h ? .target ? .objectId == null ? {
                    target: a.target,
                    targets: a.targets
                } : h, T = wi({
                    config: I,
                    event: a,
                    elementApi: Le
                }), x = Oi(b);
                T.forEach(w => {
                    let P = x ? As(b)(w, p) : null;
                    Os({
                        destination: ws({
                            element: w,
                            actionItem: p,
                            elementApi: Le
                        }, P),
                        immediate: !0,
                        store: e,
                        element: w,
                        eventId: r,
                        actionItem: p,
                        actionListId: t,
                        pluginInstance: P
                    })
                })
            })
        }
    }

    function T_({
        store: e
    }) {
        let {
            ixInstances: t
        } = e.getState();
        (0, vr.default)(t, r => {
            if (!r.continuous) {
                let {
                    actionListId: n,
                    verbose: i
                } = r;
                xs(r, e), i && e.dispatch(hr({
                    actionListId: n,
                    isPlaying: !1
                }))
            }
        })
    }

    function gr({
        store: e,
        eventId: t,
        eventTarget: r,
        eventStateKey: n,
        actionListId: i
    }) {
        let {
            ixInstances: o,
            ixSession: s
        } = e.getState(), a = s.hasBoundaryNodes && r ? Qr(r, Ii) : null;
        (0, vr.default)(o, u => {
            let l = (0, vt.default)(u, "actionItem.config.target.boundaryMode"),
                y = n ? u.eventStateKey === n : !0;
            if (u.actionListId === i && u.eventId === t && y) {
                if (a && l && !fs(a, u.element)) return;
                xs(u, e), u.verbose && e.dispatch(hr({
                    actionListId: i,
                    isPlaying: !1
                }))
            }
        })
    }

    function tn({
        store: e,
        eventId: t,
        eventTarget: r,
        eventStateKey: n,
        actionListId: i,
        groupIndex: o = 0,
        immediate: s,
        verbose: a
    }) {
        let {
            ixData: u,
            ixSession: l
        } = e.getState(), {
            events: y
        } = u, p = y[t] || {}, {
            mediaQueries: h = u.mediaQueryKeys
        } = p, b = (0, vt.default)(u, `actionLists.${i}`, {}), {
            actionItemGroups: I,
            useFirstGroupAsInitialState: T
        } = b;
        if (!I || !I.length) return !1;
        o >= I.length && (0, vt.default)(p, "config.loop") && (o = 0), o === 0 && T && o++;
        let w = (o === 0 || o === 1 && T) && Ts(p.action ? .actionTypeId) ? p.config.delay : void 0,
            P = (0, vt.default)(I, [o, "actionItems"], []);
        if (!P.length || !Ai(h, l.mediaQueryKey)) return !1;
        let S = l.hasBoundaryNodes && r ? Qr(r, Ii) : null,
            M = jV(P),
            F = !1;
        return P.forEach((q, X) => {
            let {
                config: H,
                actionTypeId: j
            } = q, Q = Oi(j), {
                target: V
            } = H;
            if (!V) return;
            let L = V.boundaryMode ? S : null;
            wi({
                config: H,
                event: p,
                eventTarget: r,
                elementRoot: L,
                elementApi: Le
            }).forEach((N, D) => {
                let G = Q ? As(j)(N, q) : null,
                    Z = Q ? nU(j)(N, q) : null;
                F = !0;
                let J = M === X && D === 0,
                    k = zV({
                        element: N,
                        actionItem: q
                    }),
                    W = ws({
                        element: N,
                        actionItem: q,
                        elementApi: Le
                    }, G);
                Os({
                    store: e,
                    element: N,
                    actionItem: q,
                    eventId: t,
                    eventTarget: r,
                    eventStateKey: n,
                    actionListId: i,
                    groupIndex: o,
                    isCarrier: J,
                    computedStyle: k,
                    destination: W,
                    immediate: s,
                    verbose: a,
                    pluginInstance: G,
                    pluginDuration: Z,
                    instanceDelay: w
                })
            })
        }), F
    }

    function Os(e) {
        let {
            store: t,
            computedStyle: r,
            ...n
        } = e, {
            element: i,
            actionItem: o,
            immediate: s,
            pluginInstance: a,
            continuous: u,
            restingValue: l,
            eventId: y
        } = n, p = !u, h = XV(), {
            ixElements: b,
            ixSession: I,
            ixData: T
        } = t.getState(), x = WV(b, i), {
            refState: w
        } = b[x] || {}, P = ds(i), S = I.reducedMotion && jo[o.actionTypeId], M;
        if (S && u) switch (T.events[y] ? .eventTypeId) {
            case Ye.MOUSE_MOVE:
            case Ye.MOUSE_MOVE_IN_VIEWPORT:
                M = l;
                break;
            default:
                M = .5;
                break
        }
        let F = KV(i, w, r, o, Le, a);
        if (t.dispatch(is({
                instanceId: h,
                elementId: x,
                origin: F,
                refType: P,
                skipMotion: S,
                skipToValue: M,
                ...n
            })), I_(document.body, "ix2-animation-started", h), s) {
            OU(t, h);
            return
        }
        kt({
            store: t,
            select: ({
                ixInstances: q
            }) => q[h],
            onChange: w_
        }), p && t.dispatch(di(h, I.tick))
    }

    function xs(e, t) {
        I_(document.body, "ix2-animation-stopping", {
            instanceId: e.id,
            state: t.getState()
        });
        let {
            elementId: r,
            actionItem: n
        } = e, {
            ixElements: i
        } = t.getState(), {
            ref: o,
            refType: s
        } = i[r] || {};
        s === y_ && ZV(o, n, Le), t.dispatch(os(e.id))
    }

    function I_(e, t, r) {
        let n = document.createEvent("CustomEvent");
        n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n)
    }

    function OU(e, t) {
        let {
            ixParameters: r
        } = e.getState();
        e.dispatch(di(t, 0)), e.dispatch(fi(performance.now(), r));
        let {
            ixInstances: n
        } = e.getState();
        w_(n[t], e)
    }

    function w_(e, t) {
        let {
            active: r,
            continuous: n,
            complete: i,
            elementId: o,
            actionItem: s,
            actionTypeId: a,
            renderType: u,
            current: l,
            groupIndex: y,
            eventId: p,
            eventTarget: h,
            eventStateKey: b,
            actionListId: I,
            isCarrier: T,
            styleProp: x,
            verbose: w,
            pluginInstance: P
        } = e, {
            ixData: S,
            ixSession: M
        } = t.getState(), {
            events: F
        } = S, q = F[p] || {}, {
            mediaQueries: X = S.mediaQueryKeys
        } = q;
        if (Ai(X, M.mediaQueryKey) && (n || r || i)) {
            if (l || u === BV && i) {
                t.dispatch(as(o, a, l, s));
                let {
                    ixElements: H
                } = t.getState(), {
                    ref: j,
                    refType: Q,
                    refState: V
                } = H[o] || {}, L = V && V[a];
                (Q === y_ || Oi(a)) && HV(j, V, L, p, s, x, Le, u, P)
            }
            if (i) {
                if (T) {
                    let H = tn({
                        store: t,
                        eventId: p,
                        eventTarget: h,
                        eventStateKey: b,
                        actionListId: I,
                        groupIndex: y + 1,
                        verbose: w
                    });
                    w && !H && t.dispatch(hr({
                        actionListId: I,
                        isPlaying: !1
                    }))
                }
                xs(e, t)
            }
        }
    }
    var f_, vt, d_, p_, h_, g_, vr, v_, Ti, UV, Ts, Is, Ii, y_, BV, c_, wi, WV, ws, kt, XV, HV, E_, jV, zV, KV, YV, $V, QV, Ai, ZV, JV, eU, tU, rU, Oi, As, nU, l_, iU, oU, mU, bU, TU, IU, bs = de(() => {
        "use strict";
        f_ = oe(ba()), vt = oe(jn()), d_ = oe(ky()), p_ = oe(lE()), h_ = oe(dE()), g_ = oe(hE()), vr = oe(_E()), v_ = oe(xE());
        Fe();
        Ti = oe(Dt());
        pi();
        PE();
        u_();
        UV = Object.keys(wn), Ts = e => UV.includes(e), {
            COLON_DELIMITER: Is,
            BOUNDARY_SELECTOR: Ii,
            HTML_ELEMENT: y_,
            RENDER_GENERAL: BV,
            W_MOD_IX: c_
        } = Ae, {
            getAffectedElements: wi,
            getElementId: WV,
            getDestinationValues: ws,
            observeStore: kt,
            getInstanceId: XV,
            renderHTMLElement: HV,
            clearAllStyles: E_,
            getMaxDurationItemIndex: jV,
            getComputedStyle: zV,
            getInstanceOrigin: KV,
            reduceListToGroup: YV,
            shouldNamespaceEventParameter: $V,
            getNamespacedParameterId: QV,
            shouldAllowMediaQuery: Ai,
            cleanupHTMLElement: ZV,
            clearObjectCache: JV,
            stringifyTarget: eU,
            mediaQueriesEqual: tU,
            shallowEqual: rU
        } = Ti.IX2VanillaUtils, {
            isPluginType: Oi,
            createPluginInstance: As,
            getPluginDuration: nU
        } = Ti.IX2VanillaPlugins, l_ = navigator.userAgent, iU = l_.match(/iPad/i) || l_.match(/iPhone/), oU = 12;
        mU = ["resize", "orientationchange"];
        bU = (e, t) => (0, p_.default)((0, g_.default)(e, t), h_.default), TU = (e, t) => {
            (0, vr.default)(e, (r, n) => {
                r.forEach((i, o) => {
                    let s = n + Is + o;
                    t(i, n, s)
                })
            })
        }, IU = e => {
            let t = {
                target: e.target,
                targets: e.targets
            };
            return wi({
                config: t,
                elementApi: Le
            })
        }
    });
    var x_ = c(yt => {
        "use strict";
        var xU = fn().default,
            SU = uu().default;
        Object.defineProperty(yt, "__esModule", {
            value: !0
        });
        yt.actions = void 0;
        yt.destroy = O_;
        yt.init = PU;
        yt.setEnv = NU;
        yt.store = void 0;
        zl();
        var CU = Wo(),
            RU = SU((my(), et(Ey))),
            Ss = (bs(), et(A_)),
            LU = xU((pi(), et(CE)));
        yt.actions = LU;
        var Cs = yt.store = (0, CU.createStore)(RU.default);

        function NU(e) {
            e() && (0, Ss.observeRequests)(Cs)
        }

        function PU(e) {
            O_(), (0, Ss.startEngine)({
                store: Cs,
                rawData: e,
                allowEvents: !0
            })
        }

        function O_() {
            (0, Ss.stopEngine)(Cs)
        }
    });
    var L_ = c((nz, R_) => {
        "use strict";
        var S_ = Ve(),
            C_ = x_();
        C_.setEnv(S_.env);
        S_.define("ix2", R_.exports = function() {
            return C_
        })
    });
    var P_ = c((iz, N_) => {
        "use strict";
        var yr = Ve();
        yr.define("links", N_.exports = function(e, t) {
            var r = {},
                n = e(window),
                i, o = yr.env(),
                s = window.location,
                a = document.createElement("a"),
                u = "w--current",
                l = /index\.(html|php)$/,
                y = /\/$/,
                p, h;
            r.ready = r.design = r.preview = b;

            function b() {
                i = o && yr.env("design"), h = yr.env("slug") || s.pathname || "", yr.scroll.off(T), p = [];
                for (var w = document.links, P = 0; P < w.length; ++P) I(w[P]);
                p.length && (yr.scroll.on(T), T())
            }

            function I(w) {
                if (!w.getAttribute("hreflang")) {
                    var P = i && w.getAttribute("href-disabled") || w.getAttribute("href");
                    if (a.href = P, !(P.indexOf(":") >= 0)) {
                        var S = e(w);
                        if (a.hash.length > 1 && a.host + a.pathname === s.host + s.pathname) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(a.hash)) return;
                            var M = e(a.hash);
                            M.length && p.push({
                                link: S,
                                sec: M,
                                active: !1
                            });
                            return
                        }
                        if (!(P === "#" || P === "")) {
                            var F = a.href === s.href || P === h || l.test(P) && y.test(h);
                            x(S, u, F)
                        }
                    }
                }
            }

            function T() {
                var w = n.scrollTop(),
                    P = n.height();
                t.each(p, function(S) {
                    if (!S.link.attr("hreflang")) {
                        var M = S.link,
                            F = S.sec,
                            q = F.offset().top,
                            X = F.outerHeight(),
                            H = P * .5,
                            j = F.is(":visible") && q + X - H >= w && q + H <= w + P;
                        S.active !== j && (S.active = j, x(M, u, j))
                    }
                })
            }

            function x(w, P, S) {
                var M = w.hasClass(P);
                S && M || !S && !M || (S ? w.addClass(P) : w.removeClass(P))
            }
            return r
        })
    });
    var F_ = c((oz, q_) => {
        "use strict";
        var Ci = Ve();
        Ci.define("scroll", q_.exports = function(e) {
            var t = {
                    WF_CLICK_EMPTY: "click.wf-empty-link",
                    WF_CLICK_SCROLL: "click.wf-scroll"
                },
                r = window.location,
                n = I() ? null : window.history,
                i = e(window),
                o = e(document),
                s = e(document.body),
                a = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(L) {
                    window.setTimeout(L, 15)
                },
                u = Ci.env("editor") ? ".w-editor-body" : "body",
                l = "header, " + u + " > .header, " + u + " > .w-nav:not([data-no-scroll])",
                y = 'a[href="#"]',
                p = 'a[href*="#"]:not(.w-tab-link):not(' + y + ")",
                h = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
                b = document.createElement("style");
            b.appendChild(document.createTextNode(h));

            function I() {
                try {
                    return !!window.frameElement
                } catch {
                    return !0
                }
            }
            var T = /^#[a-zA-Z0-9][\w:.-]*$/;

            function x(L) {
                return T.test(L.hash) && L.host + L.pathname === r.host + r.pathname
            }
            let w = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");

            function P() {
                return document.body.getAttribute("data-wf-scroll-motion") === "none" || w.matches
            }

            function S(L, v) {
                var N;
                switch (v) {
                    case "add":
                        N = L.attr("tabindex"), N ? L.attr("data-wf-tabindex-swap", N) : L.attr("tabindex", "-1");
                        break;
                    case "remove":
                        N = L.attr("data-wf-tabindex-swap"), N ? (L.attr("tabindex", N), L.removeAttr("data-wf-tabindex-swap")) : L.removeAttr("tabindex");
                        break
                }
                L.toggleClass("wf-force-outline-none", v === "add")
            }

            function M(L) {
                var v = L.currentTarget;
                if (!(Ci.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(v.className))) {
                    var N = x(v) ? v.hash : "";
                    if (N !== "") {
                        var D = e(N);
                        D.length && (L && (L.preventDefault(), L.stopPropagation()), F(N, L), window.setTimeout(function() {
                            q(D, function() {
                                S(D, "add"), D.get(0).focus({
                                    preventScroll: !0
                                }), S(D, "remove")
                            })
                        }, L ? 0 : 300))
                    }
                }
            }

            function F(L) {
                if (r.hash !== L && n && n.pushState && !(Ci.env.chrome && r.protocol === "file:")) {
                    var v = n.state && n.state.hash;
                    v !== L && n.pushState({
                        hash: L
                    }, "", L)
                }
            }

            function q(L, v) {
                var N = i.scrollTop(),
                    D = X(L);
                if (N !== D) {
                    var G = H(L, N, D),
                        Z = Date.now(),
                        J = function() {
                            var k = Date.now() - Z;
                            window.scroll(0, j(N, D, k, G)), k <= G ? a(J) : typeof v == "function" && v()
                        };
                    a(J)
                }
            }

            function X(L) {
                var v = e(l),
                    N = v.css("position") === "fixed" ? v.outerHeight() : 0,
                    D = L.offset().top - N;
                if (L.data("scroll") === "mid") {
                    var G = i.height() - N,
                        Z = L.outerHeight();
                    Z < G && (D -= Math.round((G - Z) / 2))
                }
                return D
            }

            function H(L, v, N) {
                if (P()) return 0;
                var D = 1;
                return s.add(L).each(function(G, Z) {
                    var J = parseFloat(Z.getAttribute("data-scroll-time"));
                    !isNaN(J) && J >= 0 && (D = J)
                }), (472.143 * Math.log(Math.abs(v - N) + 125) - 2e3) * D
            }

            function j(L, v, N, D) {
                return N > D ? v : L + (v - L) * Q(N / D)
            }

            function Q(L) {
                return L < .5 ? 4 * L * L * L : (L - 1) * (2 * L - 2) * (2 * L - 2) + 1
            }

            function V() {
                var {
                    WF_CLICK_EMPTY: L,
                    WF_CLICK_SCROLL: v
                } = t;
                o.on(v, p, M), o.on(L, y, function(N) {
                    N.preventDefault()
                }), document.head.insertBefore(b, document.head.firstChild)
            }
            return {
                ready: V
            }
        })
    });
    var D_ = c((az, M_) => {
        "use strict";
        var qU = Ve();
        qU.define("touch", M_.exports = function(e) {
            var t = {},
                r = window.getSelection;
            e.event.special.tap = {
                bindType: "click",
                delegateType: "click"
            }, t.init = function(o) {
                return o = typeof o == "string" ? e(o).get(0) : o, o ? new n(o) : null
            };

            function n(o) {
                var s = !1,
                    a = !1,
                    u = Math.min(Math.round(window.innerWidth * .04), 40),
                    l, y;
                o.addEventListener("touchstart", p, !1), o.addEventListener("touchmove", h, !1), o.addEventListener("touchend", b, !1), o.addEventListener("touchcancel", I, !1), o.addEventListener("mousedown", p, !1), o.addEventListener("mousemove", h, !1), o.addEventListener("mouseup", b, !1), o.addEventListener("mouseout", I, !1);

                function p(x) {
                    var w = x.touches;
                    w && w.length > 1 || (s = !0, w ? (a = !0, l = w[0].clientX) : l = x.clientX, y = l)
                }

                function h(x) {
                    if (s) {
                        if (a && x.type === "mousemove") {
                            x.preventDefault(), x.stopPropagation();
                            return
                        }
                        var w = x.touches,
                            P = w ? w[0].clientX : x.clientX,
                            S = P - y;
                        y = P, Math.abs(S) > u && r && String(r()) === "" && (i("swipe", x, {
                            direction: S > 0 ? "right" : "left"
                        }), I())
                    }
                }

                function b(x) {
                    if (s && (s = !1, a && x.type === "mouseup")) {
                        x.preventDefault(), x.stopPropagation(), a = !1;
                        return
                    }
                }

                function I() {
                    s = !1
                }

                function T() {
                    o.removeEventListener("touchstart", p, !1), o.removeEventListener("touchmove", h, !1), o.removeEventListener("touchend", b, !1), o.removeEventListener("touchcancel", I, !1), o.removeEventListener("mousedown", p, !1), o.removeEventListener("mousemove", h, !1), o.removeEventListener("mouseup", b, !1), o.removeEventListener("mouseout", I, !1), o = null
                }
                this.destroy = T
            }

            function i(o, s, a) {
                var u = e.Event(o, {
                    originalEvent: s
                });
                e(s.target).trigger(u, a)
            }
            return t.instance = t.init(document), t
        })
    });
    var k_ = c(Rs => {
        "use strict";
        Object.defineProperty(Rs, "__esModule", {
            value: !0
        });
        Rs.default = FU;

        function FU(e, t, r, n, i, o, s, a, u, l, y, p, h) {
            return function(b) {
                e(b);
                var I = b.form,
                    T = {
                        name: I.attr("data-name") || I.attr("name") || "Untitled Form",
                        pageId: I.attr("data-wf-page-id") || "",
                        elementId: I.attr("data-wf-element-id") || "",
                        source: t.href,
                        test: r.env(),
                        fields: {},
                        fileUploads: {},
                        dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(I.html()),
                        trackingCookies: n()
                    };
                let x = I.attr("data-wf-flow");
                x && (T.wfFlow = x), i(b);
                var w = o(I, T.fields);
                if (w) return s(w);
                if (T.fileUploads = a(I), u(b), !l) {
                    y(b);
                    return
                }
                p.ajax({
                    url: h,
                    type: "POST",
                    data: T,
                    dataType: "json",
                    crossDomain: !0
                }).done(function(P) {
                    P && P.code === 200 && (b.success = !0), y(b)
                }).fail(function() {
                    y(b)
                })
            }
        }
    });
    var V_ = c((uz, G_) => {
        "use strict";
        var Ri = Ve();
        Ri.define("forms", G_.exports = function(e, t) {
            var r = {},
                n = e(document),
                i, o = window.location,
                s = window.XDomainRequest && !window.atob,
                a = ".w-form",
                u, l = /e(-)?mail/i,
                y = /^\S+@\S+$/,
                p = window.alert,
                h = Ri.env(),
                b, I, T, x = /list-manage[1-9]?.com/i,
                w = t.debounce(function() {
                    p("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
                }, 100);
            r.ready = r.design = r.preview = function() {
                P(), !h && !b && M()
            };

            function P() {
                u = e("html").attr("data-wf-site"), I = "https://webflow.com/api/v1/form/" + u, s && I.indexOf("https://webflow.com") >= 0 && (I = I.replace("https://webflow.com", "https://formdata.webflow.com")), T = `${I}/signFile`, i = e(a + " form"), i.length && i.each(S)
            }

            function S(k, W) {
                var d = e(W),
                    E = e.data(W, a);
                E || (E = e.data(W, a, {
                    form: d
                })), F(E);
                var m = d.closest("div.w-form");
                E.done = m.find("> .w-form-done"), E.fail = m.find("> .w-form-fail"), E.fileUploads = m.find(".w-file-upload"), E.fileUploads.each(function(z) {
                    G(z, E)
                });
                var g = E.form.attr("aria-label") || E.form.attr("data-name") || "Form";
                E.done.attr("aria-label") || E.form.attr("aria-label", g), E.done.attr("tabindex", "-1"), E.done.attr("role", "region"), E.done.attr("aria-label") || E.done.attr("aria-label", g + " success"), E.fail.attr("tabindex", "-1"), E.fail.attr("role", "region"), E.fail.attr("aria-label") || E.fail.attr("aria-label", g + " failure");
                var U = E.action = d.attr("action");
                if (E.handler = null, E.redirect = d.attr("data-redirect"), x.test(U)) {
                    E.handler = v;
                    return
                }
                if (!U) {
                    if (u) {
                        E.handler = (() => {
                            let z = k_().default;
                            return z(F, o, Ri, Q, D, X, p, H, q, u, N, e, I)
                        })();
                        return
                    }
                    w()
                }
            }

            function M() {
                b = !0, n.on("submit", a + " form", function(z) {
                    var Y = e.data(this, a);
                    Y.handler && (Y.evt = z, Y.handler(Y))
                });
                let k = ".w-checkbox-input",
                    W = ".w-radio-input",
                    d = "w--redirected-checked",
                    E = "w--redirected-focus",
                    m = "w--redirected-focus-visible",
                    g = ":focus-visible, [data-wf-focus-visible]",
                    U = [
                        ["checkbox", k],
                        ["radio", W]
                    ];
                n.on("change", a + ' form input[type="checkbox"]:not(' + k + ")", z => {
                    e(z.target).siblings(k).toggleClass(d)
                }), n.on("change", a + ' form input[type="radio"]', z => {
                    e(`input[name="${z.target.name}"]:not(${k})`).map((ae, _e) => e(_e).siblings(W).removeClass(d));
                    let Y = e(z.target);
                    Y.hasClass("w-radio-input") || Y.siblings(W).addClass(d)
                }), U.forEach(([z, Y]) => {
                    n.on("focus", a + ` form input[type="${z}"]:not(` + Y + ")", ae => {
                        e(ae.target).siblings(Y).addClass(E), e(ae.target).filter(g).siblings(Y).addClass(m)
                    }), n.on("blur", a + ` form input[type="${z}"]:not(` + Y + ")", ae => {
                        e(ae.target).siblings(Y).removeClass(`${E} ${m}`)
                    })
                })
            }

            function F(k) {
                var W = k.btn = k.form.find(':input[type="submit"]');
                k.wait = k.btn.attr("data-wait") || null, k.success = !1, W.prop("disabled", !1), k.label && W.val(k.label)
            }

            function q(k) {
                var W = k.btn,
                    d = k.wait;
                W.prop("disabled", !0), d && (k.label = W.val(), W.val(d))
            }

            function X(k, W) {
                var d = null;
                return W = W || {}, k.find(':input:not([type="submit"]):not([type="file"])').each(function(E, m) {
                    var g = e(m),
                        U = g.attr("type"),
                        z = g.attr("data-name") || g.attr("name") || "Field " + (E + 1);
                    z = encodeURIComponent(z);
                    var Y = g.val();
                    if (U === "checkbox") Y = g.is(":checked");
                    else if (U === "radio") {
                        if (W[z] === null || typeof W[z] == "string") return;
                        Y = k.find('input[name="' + g.attr("name") + '"]:checked').val() || null
                    }
                    typeof Y == "string" && (Y = e.trim(Y)), W[z] = Y, d = d || V(g, U, z, Y)
                }), d
            }

            function H(k) {
                var W = {};
                return k.find(':input[type="file"]').each(function(d, E) {
                    var m = e(E),
                        g = m.attr("data-name") || m.attr("name") || "File " + (d + 1),
                        U = m.attr("data-value");
                    typeof U == "string" && (U = e.trim(U)), W[g] = U
                }), W
            }
            let j = {
                _mkto_trk: "marketo"
            };

            function Q() {
                return document.cookie.split("; ").reduce(function(W, d) {
                    let E = d.split("="),
                        m = E[0];
                    if (m in j) {
                        let g = j[m],
                            U = E.slice(1).join("=");
                        W[g] = U
                    }
                    return W
                }, {})
            }

            function V(k, W, d, E) {
                var m = null;
                return W === "password" ? m = "Passwords cannot be submitted." : k.attr("required") ? E ? l.test(k.attr("type")) && (y.test(E) || (m = "Please enter a valid email address for: " + d)) : m = "Please fill out the required field: " + d : d === "g-recaptcha-response" && !E && (m = "Please confirm you\u2019re not a robot."), m
            }

            function L(k) {
                D(k), N(k)
            }

            function v(k) {
                F(k);
                var W = k.form,
                    d = {};
                if (/^https/.test(o.href) && !/^https/.test(k.action)) {
                    W.attr("method", "post");
                    return
                }
                D(k);
                var E = X(W, d);
                if (E) return p(E);
                q(k);
                var m;
                t.each(d, function(Y, ae) {
                    l.test(ae) && (d.EMAIL = Y), /^((full[ _-]?)?name)$/i.test(ae) && (m = Y), /^(first[ _-]?name)$/i.test(ae) && (d.FNAME = Y), /^(last[ _-]?name)$/i.test(ae) && (d.LNAME = Y)
                }), m && !d.FNAME && (m = m.split(" "), d.FNAME = m[0], d.LNAME = d.LNAME || m[1]);
                var g = k.action.replace("/post?", "/post-json?") + "&c=?",
                    U = g.indexOf("u=") + 2;
                U = g.substring(U, g.indexOf("&", U));
                var z = g.indexOf("id=") + 3;
                z = g.substring(z, g.indexOf("&", z)), d["b_" + U + "_" + z] = "", e.ajax({
                    url: g,
                    data: d,
                    dataType: "jsonp"
                }).done(function(Y) {
                    k.success = Y.result === "success" || /already/.test(Y.msg), k.success || console.info("MailChimp error: " + Y.msg), N(k)
                }).fail(function() {
                    N(k)
                })
            }

            function N(k) {
                var W = k.form,
                    d = k.redirect,
                    E = k.success;
                if (E && d) {
                    Ri.location(d);
                    return
                }
                k.done.toggle(E), k.fail.toggle(!E), E ? k.done.focus() : k.fail.focus(), W.toggle(!E), F(k)
            }

            function D(k) {
                k.evt && k.evt.preventDefault(), k.evt = null
            }

            function G(k, W) {
                if (!W.fileUploads || !W.fileUploads[k]) return;
                var d, E = e(W.fileUploads[k]),
                    m = E.find("> .w-file-upload-default"),
                    g = E.find("> .w-file-upload-uploading"),
                    U = E.find("> .w-file-upload-success"),
                    z = E.find("> .w-file-upload-error"),
                    Y = m.find(".w-file-upload-input"),
                    ae = m.find(".w-file-upload-label"),
                    _e = ae.children(),
                    se = z.find(".w-file-upload-error-msg"),
                    pe = U.find(".w-file-upload-file"),
                    ke = U.find(".w-file-remove-link"),
                    Ge = pe.find(".w-file-upload-file-name"),
                    Ze = se.attr("data-w-size-error"),
                    Oe = se.attr("data-w-type-error"),
                    lt = se.attr("data-w-generic-error");
                if (h || ae.on("click keydown", function(A) {
                        A.type === "keydown" && A.which !== 13 && A.which !== 32 || (A.preventDefault(), Y.click())
                    }), ae.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"), ke.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"), h) Y.on("click", function(A) {
                    A.preventDefault()
                }), ae.on("click", function(A) {
                    A.preventDefault()
                }), _e.on("click", function(A) {
                    A.preventDefault()
                });
                else {
                    ke.on("click keydown", function(A) {
                        if (A.type === "keydown") {
                            if (A.which !== 13 && A.which !== 32) return;
                            A.preventDefault()
                        }
                        Y.removeAttr("data-value"), Y.val(""), Ge.html(""), m.toggle(!0), U.toggle(!1), ae.focus()
                    }), Y.on("change", function(A) {
                        d = A.target && A.target.files && A.target.files[0], d && (m.toggle(!1), z.toggle(!1), g.toggle(!0), g.focus(), Ge.text(d.name), C() || q(W), W.fileUploads[k].uploading = !0, Z(d, _))
                    });
                    var Gt = ae.outerHeight();
                    Y.height(Gt), Y.width(1)
                }

                function f(A) {
                    var R = A.responseJSON && A.responseJSON.msg,
                        K = lt;
                    typeof R == "string" && R.indexOf("InvalidFileTypeError") === 0 ? K = Oe : typeof R == "string" && R.indexOf("MaxFileSizeError") === 0 && (K = Ze), se.text(K), Y.removeAttr("data-value"), Y.val(""), g.toggle(!1), m.toggle(!0), z.toggle(!0), z.focus(), W.fileUploads[k].uploading = !1, C() || F(W)
                }

                function _(A, R) {
                    if (A) return f(A);
                    var K = R.fileName,
                        te = R.postData,
                        le = R.fileId,
                        B = R.s3Url;
                    Y.attr("data-value", le), J(B, te, d, K, O)
                }

                function O(A) {
                    if (A) return f(A);
                    g.toggle(!1), U.css("display", "inline-block"), U.focus(), W.fileUploads[k].uploading = !1, C() || F(W)
                }

                function C() {
                    var A = W.fileUploads && W.fileUploads.toArray() || [];
                    return A.some(function(R) {
                        return R.uploading
                    })
                }
            }

            function Z(k, W) {
                var d = new URLSearchParams({
                    name: k.name,
                    size: k.size
                });
                e.ajax({
                    type: "GET",
                    url: `${T}?${d}`,
                    crossDomain: !0
                }).done(function(E) {
                    W(null, E)
                }).fail(function(E) {
                    W(E)
                })
            }

            function J(k, W, d, E, m) {
                var g = new FormData;
                for (var U in W) g.append(U, W[U]);
                g.append("file", d, E), e.ajax({
                    type: "POST",
                    url: k,
                    data: g,
                    processData: !1,
                    contentType: !1
                }).done(function() {
                    m(null)
                }).fail(function(z) {
                    m(z)
                })
            }
            return r
        })
    });
    var W_ = c((cz, B_) => {
        "use strict";
        var Ot = Ve(),
            MU = ln(),
            ct = {
                ARROW_LEFT: 37,
                ARROW_UP: 38,
                ARROW_RIGHT: 39,
                ARROW_DOWN: 40,
                SPACE: 32,
                ENTER: 13,
                HOME: 36,
                END: 35
            },
            U_ = 'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
        Ot.define("slider", B_.exports = function(e, t) {
            var r = {},
                n = e.tram,
                i = e(document),
                o, s, a = Ot.env(),
                u = ".w-slider",
                l = '<div class="w-slider-dot" data-wf-ignore />',
                y = '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
                p = "w-slider-force-show",
                h = MU.triggers,
                b, I = !1;
            r.ready = function() {
                s = Ot.env("design"), T()
            }, r.design = function() {
                s = !0, setTimeout(T, 1e3)
            }, r.preview = function() {
                s = !1, T()
            }, r.redraw = function() {
                I = !0, T(), I = !1
            }, r.destroy = x;

            function T() {
                o = i.find(u), o.length && (o.each(S), !b && (x(), w()))
            }

            function x() {
                Ot.resize.off(P), Ot.redraw.off(r.redraw)
            }

            function w() {
                Ot.resize.on(P), Ot.redraw.on(r.redraw)
            }

            function P() {
                o.filter(":visible").each(G)
            }

            function S(d, E) {
                var m = e(E),
                    g = e.data(E, u);
                g || (g = e.data(E, u, {
                    index: 0,
                    depth: 1,
                    hasFocus: {
                        keyboard: !1,
                        mouse: !1
                    },
                    el: m,
                    config: {}
                })), g.mask = m.children(".w-slider-mask"), g.left = m.children(".w-slider-arrow-left"), g.right = m.children(".w-slider-arrow-right"), g.nav = m.children(".w-slider-nav"), g.slides = g.mask.children(".w-slide"), g.slides.each(h.reset), I && (g.maskWidth = 0), m.attr("role") === void 0 && m.attr("role", "region"), m.attr("aria-label") === void 0 && m.attr("aria-label", "carousel");
                var U = g.mask.attr("id");
                if (U || (U = "w-slider-mask-" + d, g.mask.attr("id", U)), !s && !g.ariaLiveLabel && (g.ariaLiveLabel = e(y).appendTo(g.mask)), g.left.attr("role", "button"), g.left.attr("tabindex", "0"), g.left.attr("aria-controls", U), g.left.attr("aria-label") === void 0 && g.left.attr("aria-label", "previous slide"), g.right.attr("role", "button"), g.right.attr("tabindex", "0"), g.right.attr("aria-controls", U), g.right.attr("aria-label") === void 0 && g.right.attr("aria-label", "next slide"), !n.support.transform) {
                    g.left.hide(), g.right.hide(), g.nav.hide(), b = !0;
                    return
                }
                g.el.off(u), g.left.off(u), g.right.off(u), g.nav.off(u), M(g), s ? (g.el.on("setting" + u, v(g)), L(g), g.hasTimer = !1) : (g.el.on("swipe" + u, v(g)), g.left.on("click" + u, H(g)), g.right.on("click" + u, j(g)), g.left.on("keydown" + u, X(g, H)), g.right.on("keydown" + u, X(g, j)), g.nav.on("keydown" + u, "> div", v(g)), g.config.autoplay && !g.hasTimer && (g.hasTimer = !0, g.timerCount = 1, V(g)), g.el.on("mouseenter" + u, q(g, !0, "mouse")), g.el.on("focusin" + u, q(g, !0, "keyboard")), g.el.on("mouseleave" + u, q(g, !1, "mouse")), g.el.on("focusout" + u, q(g, !1, "keyboard"))), g.nav.on("click" + u, "> div", v(g)), a || g.mask.contents().filter(function() {
                    return this.nodeType === 3
                }).remove();
                var z = m.filter(":hidden");
                z.addClass(p);
                var Y = m.parents(":hidden");
                Y.addClass(p), I || G(d, E), z.removeClass(p), Y.removeClass(p)
            }

            function M(d) {
                var E = {};
                E.crossOver = 0, E.animation = d.el.attr("data-animation") || "slide", E.animation === "outin" && (E.animation = "cross", E.crossOver = .5), E.easing = d.el.attr("data-easing") || "ease";
                var m = d.el.attr("data-duration");
                if (E.duration = m != null ? parseInt(m, 10) : 500, F(d.el.attr("data-infinite")) && (E.infinite = !0), F(d.el.attr("data-disable-swipe")) && (E.disableSwipe = !0), F(d.el.attr("data-hide-arrows")) ? E.hideArrows = !0 : d.config.hideArrows && (d.left.show(), d.right.show()), F(d.el.attr("data-autoplay"))) {
                    E.autoplay = !0, E.delay = parseInt(d.el.attr("data-delay"), 10) || 2e3, E.timerMax = parseInt(d.el.attr("data-autoplay-limit"), 10);
                    var g = "mousedown" + u + " touchstart" + u;
                    s || d.el.off(g).one(g, function() {
                        L(d)
                    })
                }
                var U = d.right.width();
                E.edge = U ? U + 40 : 100, d.config = E
            }

            function F(d) {
                return d === "1" || d === "true"
            }

            function q(d, E, m) {
                return function(g) {
                    if (E) d.hasFocus[m] = E;
                    else if (e.contains(d.el.get(0), g.relatedTarget) || (d.hasFocus[m] = E, d.hasFocus.mouse && m === "keyboard" || d.hasFocus.keyboard && m === "mouse")) return;
                    E ? (d.ariaLiveLabel.attr("aria-live", "polite"), d.hasTimer && L(d)) : (d.ariaLiveLabel.attr("aria-live", "off"), d.hasTimer && V(d))
                }
            }

            function X(d, E) {
                return function(m) {
                    switch (m.keyCode) {
                        case ct.SPACE:
                        case ct.ENTER:
                            return E(d)(), m.preventDefault(), m.stopPropagation()
                    }
                }
            }

            function H(d) {
                return function() {
                    D(d, {
                        index: d.index - 1,
                        vector: -1
                    })
                }
            }

            function j(d) {
                return function() {
                    D(d, {
                        index: d.index + 1,
                        vector: 1
                    })
                }
            }

            function Q(d, E) {
                var m = null;
                E === d.slides.length && (T(), Z(d)), t.each(d.anchors, function(g, U) {
                    e(g.els).each(function(z, Y) {
                        e(Y).index() === E && (m = U)
                    })
                }), m != null && D(d, {
                    index: m,
                    immediate: !0
                })
            }

            function V(d) {
                L(d);
                var E = d.config,
                    m = E.timerMax;
                m && d.timerCount++ > m || (d.timerId = window.setTimeout(function() {
                    d.timerId == null || s || (j(d)(), V(d))
                }, E.delay))
            }

            function L(d) {
                window.clearTimeout(d.timerId), d.timerId = null
            }

            function v(d) {
                return function(E, m) {
                    m = m || {};
                    var g = d.config;
                    if (s && E.type === "setting") {
                        if (m.select === "prev") return H(d)();
                        if (m.select === "next") return j(d)();
                        if (M(d), Z(d), m.select == null) return;
                        Q(d, m.select);
                        return
                    }
                    if (E.type === "swipe") return g.disableSwipe || Ot.env("editor") ? void 0 : m.direction === "left" ? j(d)() : m.direction === "right" ? H(d)() : void 0;
                    if (d.nav.has(E.target).length) {
                        var U = e(E.target).index();
                        if (E.type === "click" && D(d, {
                                index: U
                            }), E.type === "keydown") switch (E.keyCode) {
                            case ct.ENTER:
                            case ct.SPACE:
                                {
                                    D(d, {
                                        index: U
                                    }),
                                    E.preventDefault();
                                    break
                                }
                            case ct.ARROW_LEFT:
                            case ct.ARROW_UP:
                                {
                                    N(d.nav, Math.max(U - 1, 0)),
                                    E.preventDefault();
                                    break
                                }
                            case ct.ARROW_RIGHT:
                            case ct.ARROW_DOWN:
                                {
                                    N(d.nav, Math.min(U + 1, d.pages)),
                                    E.preventDefault();
                                    break
                                }
                            case ct.HOME:
                                {
                                    N(d.nav, 0),
                                    E.preventDefault();
                                    break
                                }
                            case ct.END:
                                {
                                    N(d.nav, d.pages),
                                    E.preventDefault();
                                    break
                                }
                            default:
                                return
                        }
                    }
                }
            }

            function N(d, E) {
                var m = d.children().eq(E).focus();
                d.children().not(m)
            }

            function D(d, E) {
                E = E || {};
                var m = d.config,
                    g = d.anchors;
                d.previous = d.index;
                var U = E.index,
                    z = {};
                U < 0 ? (U = g.length - 1, m.infinite && (z.x = -d.endX, z.from = 0, z.to = g[0].width)) : U >= g.length && (U = 0, m.infinite && (z.x = g[g.length - 1].width, z.from = -g[g.length - 1].x, z.to = z.from - z.x)), d.index = U;
                var Y = d.nav.children().eq(U).addClass("w-active").attr("aria-pressed", "true").attr("tabindex", "0");
                d.nav.children().not(Y).removeClass("w-active").attr("aria-pressed", "false").attr("tabindex", "-1"), m.hideArrows && (d.index === g.length - 1 ? d.right.hide() : d.right.show(), d.index === 0 ? d.left.hide() : d.left.show());
                var ae = d.offsetX || 0,
                    _e = d.offsetX = -g[d.index].x,
                    se = {
                        x: _e,
                        opacity: 1,
                        visibility: ""
                    },
                    pe = e(g[d.index].els),
                    ke = e(g[d.previous] && g[d.previous].els),
                    Ge = d.slides.not(pe),
                    Ze = m.animation,
                    Oe = m.easing,
                    lt = Math.round(m.duration),
                    Gt = E.vector || (d.index > d.previous ? 1 : -1),
                    f = "opacity " + lt + "ms " + Oe,
                    _ = "transform " + lt + "ms " + Oe;
                if (pe.find(U_).removeAttr("tabindex"), pe.removeAttr("aria-hidden"), pe.find("*").removeAttr("aria-hidden"), Ge.find(U_).attr("tabindex", "-1"), Ge.attr("aria-hidden", "true"), Ge.find("*").attr("aria-hidden", "true"), s || (pe.each(h.intro), Ge.each(h.outro)), E.immediate && !I) {
                    n(pe).set(se), A();
                    return
                }
                if (d.index === d.previous) return;
                if (s || d.ariaLiveLabel.text(`Slide ${U+1} of ${g.length}.`), Ze === "cross") {
                    var O = Math.round(lt - lt * m.crossOver),
                        C = Math.round(lt - O);
                    f = "opacity " + O + "ms " + Oe, n(ke).set({
                        visibility: ""
                    }).add(f).start({
                        opacity: 0
                    }), n(pe).set({
                        visibility: "",
                        x: _e,
                        opacity: 0,
                        zIndex: d.depth++
                    }).add(f).wait(C).then({
                        opacity: 1
                    }).then(A);
                    return
                }
                if (Ze === "fade") {
                    n(ke).set({
                        visibility: ""
                    }).stop(), n(pe).set({
                        visibility: "",
                        x: _e,
                        opacity: 0,
                        zIndex: d.depth++
                    }).add(f).start({
                        opacity: 1
                    }).then(A);
                    return
                }
                if (Ze === "over") {
                    se = {
                        x: d.endX
                    }, n(ke).set({
                        visibility: ""
                    }).stop(), n(pe).set({
                        visibility: "",
                        zIndex: d.depth++,
                        x: _e + g[d.index].width * Gt
                    }).add(_).start({
                        x: _e
                    }).then(A);
                    return
                }
                m.infinite && z.x ? (n(d.slides.not(ke)).set({
                    visibility: "",
                    x: z.x
                }).add(_).start({
                    x: _e
                }), n(ke).set({
                    visibility: "",
                    x: z.from
                }).add(_).start({
                    x: z.to
                }), d.shifted = ke) : (m.infinite && d.shifted && (n(d.shifted).set({
                    visibility: "",
                    x: ae
                }), d.shifted = null), n(d.slides).set({
                    visibility: ""
                }).add(_).start({
                    x: _e
                }));

                function A() {
                    pe = e(g[d.index].els), Ge = d.slides.not(pe), Ze !== "slide" && (se.visibility = "hidden"), n(Ge).set(se)
                }
            }

            function G(d, E) {
                var m = e.data(E, u);
                if (m) {
                    if (k(m)) return Z(m);
                    s && W(m) && Z(m)
                }
            }

            function Z(d) {
                var E = 1,
                    m = 0,
                    g = 0,
                    U = 0,
                    z = d.maskWidth,
                    Y = z - d.config.edge;
                Y < 0 && (Y = 0), d.anchors = [{
                    els: [],
                    x: 0,
                    width: 0
                }], d.slides.each(function(_e, se) {
                    g - m > Y && (E++, m += z, d.anchors[E - 1] = {
                        els: [],
                        x: g,
                        width: 0
                    }), U = e(se).outerWidth(!0), g += U, d.anchors[E - 1].width += U, d.anchors[E - 1].els.push(se);
                    var pe = _e + 1 + " of " + d.slides.length;
                    e(se).attr("aria-label", pe), e(se).attr("role", "group")
                }), d.endX = g, s && (d.pages = null), d.nav.length && d.pages !== E && (d.pages = E, J(d));
                var ae = d.index;
                ae >= E && (ae = E - 1), D(d, {
                    immediate: !0,
                    index: ae
                })
            }

            function J(d) {
                var E = [],
                    m, g = d.el.attr("data-nav-spacing");
                g && (g = parseFloat(g) + "px");
                for (var U = 0, z = d.pages; U < z; U++) m = e(l), m.attr("aria-label", "Show slide " + (U + 1) + " of " + z).attr("aria-pressed", "false").attr("role", "button").attr("tabindex", "-1"), d.nav.hasClass("w-num") && m.text(U + 1), g != null && m.css({
                    "margin-left": g,
                    "margin-right": g
                }), E.push(m);
                d.nav.empty().append(E)
            }

            function k(d) {
                var E = d.mask.width();
                return d.maskWidth !== E ? (d.maskWidth = E, !0) : !1
            }

            function W(d) {
                var E = 0;
                return d.slides.each(function(m, g) {
                    E += e(g).outerWidth(!0)
                }), d.slidesWidth !== E ? (d.slidesWidth = E, !0) : !1
            }
            return r
        })
    });
    var H_ = c((lz, X_) => {
        "use strict";
        var xt = Ve(),
            DU = ln();
        xt.define("tabs", X_.exports = function(e) {
            var t = {},
                r = e.tram,
                n = e(document),
                i, o, s = xt.env,
                a = s.safari,
                u = s(),
                l = "data-w-tab",
                y = "data-w-pane",
                p = ".w-tabs",
                h = "w--current",
                b = "w--tab-active",
                I = DU.triggers,
                T = !1;
            t.ready = t.design = t.preview = x, t.redraw = function() {
                T = !0, x(), T = !1
            }, t.destroy = function() {
                i = n.find(p), i.length && (i.each(S), w())
            };

            function x() {
                o = u && xt.env("design"), i = n.find(p), i.length && (i.each(M), xt.env("preview") && !T && i.each(S), w(), P())
            }

            function w() {
                xt.redraw.off(t.redraw)
            }

            function P() {
                xt.redraw.on(t.redraw)
            }

            function S(V, L) {
                var v = e.data(L, p);
                v && (v.links && v.links.each(I.reset), v.panes && v.panes.each(I.reset))
            }

            function M(V, L) {
                var v = p.substr(1) + "-" + V,
                    N = e(L),
                    D = e.data(L, p);
                if (D || (D = e.data(L, p, {
                        el: N,
                        config: {}
                    })), D.current = null, D.tabIdentifier = v + "-" + l, D.paneIdentifier = v + "-" + y, D.menu = N.children(".w-tab-menu"), D.links = D.menu.children(".w-tab-link"), D.content = N.children(".w-tab-content"), D.panes = D.content.children(".w-tab-pane"), D.el.off(p), D.links.off(p), D.menu.attr("role", "tablist"), D.links.attr("tabindex", "-1"), F(D), !o) {
                    D.links.on("click" + p, X(D)), D.links.on("keydown" + p, H(D));
                    var G = D.links.filter("." + h),
                        Z = G.attr(l);
                    Z && j(D, {
                        tab: Z,
                        immediate: !0
                    })
                }
            }

            function F(V) {
                var L = {};
                L.easing = V.el.attr("data-easing") || "ease";
                var v = parseInt(V.el.attr("data-duration-in"), 10);
                v = L.intro = v === v ? v : 0;
                var N = parseInt(V.el.attr("data-duration-out"), 10);
                N = L.outro = N === N ? N : 0, L.immediate = !v && !N, V.config = L
            }

            function q(V) {
                var L = V.current;
                return Array.prototype.findIndex.call(V.links, v => v.getAttribute(l) === L, null)
            }

            function X(V) {
                return function(L) {
                    L.preventDefault();
                    var v = L.currentTarget.getAttribute(l);
                    v && j(V, {
                        tab: v
                    })
                }
            }

            function H(V) {
                return function(L) {
                    var v = q(V),
                        N = L.key,
                        D = {
                            ArrowLeft: v - 1,
                            ArrowUp: v - 1,
                            ArrowRight: v + 1,
                            ArrowDown: v + 1,
                            End: V.links.length - 1,
                            Home: 0
                        };
                    if (N in D) {
                        L.preventDefault();
                        var G = D[N];
                        G === -1 && (G = V.links.length - 1), G === V.links.length && (G = 0);
                        var Z = V.links[G],
                            J = Z.getAttribute(l);
                        J && j(V, {
                            tab: J
                        })
                    }
                }
            }

            function j(V, L) {
                L = L || {};
                var v = V.config,
                    N = v.easing,
                    D = L.tab;
                if (D !== V.current) {
                    V.current = D;
                    var G;
                    V.links.each(function(m, g) {
                        var U = e(g);
                        if (L.immediate || v.immediate) {
                            var z = V.panes[m];
                            g.id || (g.id = V.tabIdentifier + "-" + m), z.id || (z.id = V.paneIdentifier + "-" + m), g.href = "#" + z.id, g.setAttribute("role", "tab"), g.setAttribute("aria-controls", z.id), g.setAttribute("aria-selected", "false"), z.setAttribute("role", "tabpanel"), z.setAttribute("aria-labelledby", g.id)
                        }
                        g.getAttribute(l) === D ? (G = g, U.addClass(h).removeAttr("tabindex").attr({
                            "aria-selected": "true"
                        }).each(I.intro)) : U.hasClass(h) && U.removeClass(h).attr({
                            tabindex: "-1",
                            "aria-selected": "false"
                        }).each(I.outro)
                    });
                    var Z = [],
                        J = [];
                    V.panes.each(function(m, g) {
                        var U = e(g);
                        g.getAttribute(l) === D ? Z.push(g) : U.hasClass(b) && J.push(g)
                    });
                    var k = e(Z),
                        W = e(J);
                    if (L.immediate || v.immediate) {
                        k.addClass(b).each(I.intro), W.removeClass(b), T || xt.redraw.up();
                        return
                    } else {
                        var d = window.scrollX,
                            E = window.scrollY;
                        G.focus(), window.scrollTo(d, E)
                    }
                    W.length && v.outro ? (W.each(I.outro), r(W).add("opacity " + v.outro + "ms " + N, {
                        fallback: a
                    }).start({
                        opacity: 0
                    }).then(() => Q(v, W, k))) : Q(v, W, k)
                }
            }

            function Q(V, L, v) {
                if (L.removeClass(b).css({
                        opacity: "",
                        transition: "",
                        transform: "",
                        width: "",
                        height: ""
                    }), v.addClass(b).each(I.intro), xt.redraw.up(), !V.intro) return r(v).set({
                    opacity: 1
                });
                r(v).set({
                    opacity: 0
                }).redraw().add("opacity " + V.intro + "ms " + V.easing, {
                    fallback: a
                }).start({
                    opacity: 1
                })
            }
            return t
        })
    });
    Ns();
    Ps();
    js();
    Ks();
    $s();
    Js();
    ln();
    L_();
    P_();
    F_();
    D_();
    V_();
    W_();
    H_();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
    "events": {
        "e": {
            "id": "e",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".button-primary.for-dark-bg",
                "originalId": "bef01a54-0a42-f77a-d004-fa139bf395a1",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".button-primary",
                "originalId": "bef01a54-0a42-f77a-d004-fa139bf395a1",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1660765264009
        },
        "e-2": {
            "id": "e-2",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".button-primary.for-dark-bg",
                "originalId": "bef01a54-0a42-f77a-d004-fa139bf395a1",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".button-primary",
                "originalId": "bef01a54-0a42-f77a-d004-fa139bf395a1",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1660765264010
        },
        "e-3": {
            "id": "e-3",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "64f004ab3fd0e9128d2842e5|319f12bc-61d5-06eb-26dc-59c7f59e41be",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f004ab3fd0e9128d2842e5|319f12bc-61d5-06eb-26dc-59c7f59e41be",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-4-p",
                "smoothing": 80,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1661424196564
        },
        "e-4": {
            "id": "e-4",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-5"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".services-wrapper.left",
                "originalId": "64f004ab3fd0e9128d2842e5|51de0c46-7ed4-ee48-4cb4-4251126fa1ee",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".services-wrapper.left",
                "originalId": "64f004ab3fd0e9128d2842e5|51de0c46-7ed4-ee48-4cb4-4251126fa1ee",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1661426363151
        },
        "e-6": {
            "id": "e-6",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-7"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".services-wrapper.right",
                "originalId": "64f004ab3fd0e9128d2842e5|dae80794-460e-abda-888d-baf71b896861",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".services-wrapper.right",
                "originalId": "64f004ab3fd0e9128d2842e5|dae80794-460e-abda-888d-baf71b896861",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1661426562501
        },
        "e-9": {
            "id": "e-9",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64f004ab3fd0e9128d2842e5",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f004ab3fd0e9128d2842e5",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-8-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 40,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-8-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 40,
                "restingState": 50
            }],
            "createdOn": 1661432028648
        },
        "e-10": {
            "id": "e-10",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-9",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-11"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".video",
                "originalId": "64f004ab3fd0e9128d2842e5|fed92530-6fbe-1267-4967-91b73f9a706c",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".video",
                "originalId": "64f004ab3fd0e9128d2842e5|fed92530-6fbe-1267-4967-91b73f9a706c",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1661433108555
        },
        "e-11": {
            "id": "e-11",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-10"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".video",
                "originalId": "64f004ab3fd0e9128d2842e5|fed92530-6fbe-1267-4967-91b73f9a706c",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".video",
                "originalId": "64f004ab3fd0e9128d2842e5|fed92530-6fbe-1267-4967-91b73f9a706c",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1661433108556
        },
        "e-12": {
            "id": "e-12",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-13"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".heading-large.services",
                "originalId": "64f004ab3fd0e9128d2842e5|1c5a7e1e-4e71-8fc2-b324-1d0bb0a40a47",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".heading-large.services",
                "originalId": "64f004ab3fd0e9128d2842e5|1c5a7e1e-4e71-8fc2-b324-1d0bb0a40a47",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1661433520046
        },
        "e-13": {
            "id": "e-13",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-12"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".heading-large.services",
                "originalId": "64f004ab3fd0e9128d2842e5|1c5a7e1e-4e71-8fc2-b324-1d0bb0a40a47",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".heading-large.services",
                "originalId": "64f004ab3fd0e9128d2842e5|1c5a7e1e-4e71-8fc2-b324-1d0bb0a40a47",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1661433520047
        },
        "e-18": {
            "id": "e-18",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-19"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".section-large-hero",
                "originalId": "64f004ab3fd0e9128d2842e5|fee33675-7041-766e-2e7e-39a3e0564086",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".section-large-hero",
                "originalId": "64f004ab3fd0e9128d2842e5|fee33675-7041-766e-2e7e-39a3e0564086",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1661434494786
        },
        "e-19": {
            "id": "e-19",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-18"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".section-large-hero",
                "originalId": "64f004ab3fd0e9128d2842e5|fee33675-7041-766e-2e7e-39a3e0564086",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".section-large-hero",
                "originalId": "64f004ab3fd0e9128d2842e5|fee33675-7041-766e-2e7e-39a3e0564086",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1661434494787
        },
        "e-20": {
            "id": "e-20",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-21"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".section-navbar",
                "originalId": "099c46ae-d4ea-ae50-c408-d3b31eecd402",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".section-navbar",
                "originalId": "099c46ae-d4ea-ae50-c408-d3b31eecd402",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1661436303493
        },
        "e-21": {
            "id": "e-21",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-20"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".section-navbar",
                "originalId": "099c46ae-d4ea-ae50-c408-d3b31eecd402",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".section-navbar",
                "originalId": "099c46ae-d4ea-ae50-c408-d3b31eecd402",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1661436303494
        },
        "e-22": {
            "id": "e-22",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-23"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".bottom-row-social-media",
                "originalId": "01f7752c-2227-87c1-a872-a4790d4f5e5a",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".bottom-row-social-media",
                "originalId": "01f7752c-2227-87c1-a872-a4790d4f5e5a",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1661436373582
        },
        "e-23": {
            "id": "e-23",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-22"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".bottom-row-social-media",
                "originalId": "01f7752c-2227-87c1-a872-a4790d4f5e5a",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".bottom-row-social-media",
                "originalId": "01f7752c-2227-87c1-a872-a4790d4f5e5a",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1661436373635
        },
        "e-24": {
            "id": "e-24",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-25"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "01f7752c-2227-87c1-a872-a4790d4f5e66",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "01f7752c-2227-87c1-a872-a4790d4f5e66",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1661436695188
        },
        "e-25": {
            "id": "e-25",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-24"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "01f7752c-2227-87c1-a872-a4790d4f5e66",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "01f7752c-2227-87c1-a872-a4790d4f5e66",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1661436695188
        },
        "e-26": {
            "id": "e-26",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64f004ab3fd0e9128d2842e5|fed92530-6fbe-1267-4967-91b73f9a706c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f004ab3fd0e9128d2842e5|fed92530-6fbe-1267-4967-91b73f9a706c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-19-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 30,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-19-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 30,
                "restingState": 50
            }],
            "createdOn": 1661438099445
        },
        "e-27": {
            "id": "e-27",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64f004ab3fd0e9128d28433b",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f004ab3fd0e9128d28433b",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-8-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 40,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-8-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 40,
                "restingState": 50
            }],
            "createdOn": 1661440222847
        },
        "e-28": {
            "id": "e-28",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64f004ab3fd0e9128d284341",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f004ab3fd0e9128d284341",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-8-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 40,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-8-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 40,
                "restingState": 50
            }],
            "createdOn": 1661440239139
        },
        "e-29": {
            "id": "e-29",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64f004ab3fd0e9128d28433c",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f004ab3fd0e9128d28433c",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-8-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 40,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-8-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 40,
                "restingState": 50
            }],
            "createdOn": 1661440252889
        },
        "e-30": {
            "id": "e-30",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64f004ab3fd0e9128d28433d",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f004ab3fd0e9128d28433d",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-8-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 40,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-8-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 40,
                "restingState": 50
            }],
            "createdOn": 1661440266454
        },
        "e-31": {
            "id": "e-31",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64f004ab3fd0e9128d284340",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f004ab3fd0e9128d284340",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-8-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 40,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-8-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 40,
                "restingState": 50
            }],
            "createdOn": 1661440592762
        },
        "e-32": {
            "id": "e-32",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64f004ab3fd0e9128d28431f",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f004ab3fd0e9128d28431f",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-8-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 40,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-8-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 40,
                "restingState": 50
            }],
            "createdOn": 1661440606657
        },
        "e-33": {
            "id": "e-33",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64f004ab3fd0e9128d284331",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f004ab3fd0e9128d284331",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-8-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 40,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-8-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 40,
                "restingState": 50
            }],
            "createdOn": 1661440636031
        },
        "e-34": {
            "id": "e-34",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64f004ab3fd0e9128d284332",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f004ab3fd0e9128d284332",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-8-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 40,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-8-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 40,
                "restingState": 50
            }],
            "createdOn": 1661440669163
        },
        "e-35": {
            "id": "e-35",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64f004ab3fd0e9128d284334",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f004ab3fd0e9128d284334",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-8-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 40,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-8-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 40,
                "restingState": 50
            }],
            "createdOn": 1661440687253
        },
        "e-36": {
            "id": "e-36",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-37"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".process-tab-link",
                "originalId": "64f004ab3fd0e9128d28431f|a06c75bf-ca91-9588-e2dc-1f83d3e2a331",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".process-tab-link",
                "originalId": "64f004ab3fd0e9128d28431f|a06c75bf-ca91-9588-e2dc-1f83d3e2a331",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1661440958921
        },
        "e-37": {
            "id": "e-37",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-36"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".process-tab-link",
                "originalId": "64f004ab3fd0e9128d28431f|a06c75bf-ca91-9588-e2dc-1f83d3e2a331",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".process-tab-link",
                "originalId": "64f004ab3fd0e9128d28431f|a06c75bf-ca91-9588-e2dc-1f83d3e2a331",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1661440958922
        },
        "e-38": {
            "id": "e-38",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-39"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".idea-listing-wrapper",
                "originalId": "64f004ab3fd0e9128d2842e5|2e319188-2451-d91a-4575-3698a80b6dc7",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".idea-listing-wrapper",
                "originalId": "64f004ab3fd0e9128d2842e5|2e319188-2451-d91a-4575-3698a80b6dc7",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1661441912767
        },
        "e-39": {
            "id": "e-39",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-38"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".idea-listing-wrapper",
                "originalId": "64f004ab3fd0e9128d2842e5|2e319188-2451-d91a-4575-3698a80b6dc7",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".idea-listing-wrapper",
                "originalId": "64f004ab3fd0e9128d2842e5|2e319188-2451-d91a-4575-3698a80b6dc7",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1661441912768
        },
        "e-41": {
            "id": "e-41",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-42"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "selector": ".prev-next-wrapper",
                "originalId": "64f004ab3fd0e9128d284332|c1615196-bb92-abbb-2222-3d9fca787b13",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".prev-next-wrapper",
                "originalId": "64f004ab3fd0e9128d284332|c1615196-bb92-abbb-2222-3d9fca787b13",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1661779790852
        },
        "e-42": {
            "id": "e-42",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-41"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "selector": ".prev-next-wrapper",
                "originalId": "64f004ab3fd0e9128d284332|c1615196-bb92-abbb-2222-3d9fca787b13",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".prev-next-wrapper",
                "originalId": "64f004ab3fd0e9128d284332|c1615196-bb92-abbb-2222-3d9fca787b13",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1661779790854
        },
        "e-43": {
            "id": "e-43",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64f004ab3fd0e9128d28431f|26edb2bf-fd97-70d4-4da5-37bf33b9d91f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f004ab3fd0e9128d28431f|26edb2bf-fd97-70d4-4da5-37bf33b9d91f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-22-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 30,
                "startsExiting": false,
                "addEndOffset": true,
                "endOffsetValue": -20
            }],
            "createdOn": 1661781785781
        },
        "e-46": {
            "id": "e-46",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".section-footer",
                "originalId": "01f7752c-2227-87c1-a872-a4790d4f5e3c",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".section-footer",
                "originalId": "01f7752c-2227-87c1-a872-a4790d4f5e3c",
                "appliesTo": "CLASS"
            }],
            "config": [{
                "continuousParameterGroupId": "a-7-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": true,
                "endOffsetValue": -10
            }],
            "createdOn": 1661804064959
        },
        "e-47": {
            "id": "e-47",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-48"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".checkbox-field",
                "originalId": "64f004ab3fd0e9128d284331|83c60754-9d79-51a5-4f63-e89287328d9d",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".checkbox-field",
                "originalId": "64f004ab3fd0e9128d284331|83c60754-9d79-51a5-4f63-e89287328d9d",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1661804273693
        },
        "e-48": {
            "id": "e-48",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-47"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".checkbox-field",
                "originalId": "64f004ab3fd0e9128d284331|83c60754-9d79-51a5-4f63-e89287328d9d",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".checkbox-field",
                "originalId": "64f004ab3fd0e9128d284331|83c60754-9d79-51a5-4f63-e89287328d9d",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1661804273695
        },
        "e-49": {
            "id": "e-49",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-50"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".contact-form-field",
                "originalId": "64f004ab3fd0e9128d284331|f54f1b16-f74f-4685-cf3e-ef78b4012530",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".contact-form-field",
                "originalId": "64f004ab3fd0e9128d284331|f54f1b16-f74f-4685-cf3e-ef78b4012530",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1661804354964
        },
        "e-50": {
            "id": "e-50",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-49"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".contact-form-field",
                "originalId": "64f004ab3fd0e9128d284331|f54f1b16-f74f-4685-cf3e-ef78b4012530",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".contact-form-field",
                "originalId": "64f004ab3fd0e9128d284331|f54f1b16-f74f-4685-cf3e-ef78b4012530",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1661804354966
        },
        "e-51": {
            "id": "e-51",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-52"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "d4ceb5e3-9dc2-3950-e094-0f0316417d8a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "d4ceb5e3-9dc2-3950-e094-0f0316417d8a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1661806512353
        },
        "e-52": {
            "id": "e-52",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-51"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "d4ceb5e3-9dc2-3950-e094-0f0316417d8a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "d4ceb5e3-9dc2-3950-e094-0f0316417d8a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1661806512355
        },
        "e-55": {
            "id": "e-55",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-56"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64f004ab3fd0e9128d2842e5|26e0ce53-c786-1d27-d26f-0ddae90578ca",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f004ab3fd0e9128d2842e5|26e0ce53-c786-1d27-d26f-0ddae90578ca",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1661808706674
        },
        "e-56": {
            "id": "e-56",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-55"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64f004ab3fd0e9128d2842e5|26e0ce53-c786-1d27-d26f-0ddae90578ca",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f004ab3fd0e9128d2842e5|26e0ce53-c786-1d27-d26f-0ddae90578ca",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1661808706676
        },
        "e-59": {
            "id": "e-59",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".layout-video-only",
                "originalId": "64f004ab3fd0e9128d284332|a2743f50-af8c-da85-91dd-ffdd03dc0398",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".layout-video-only",
                "originalId": "64f004ab3fd0e9128d284332|a2743f50-af8c-da85-91dd-ffdd03dc0398",
                "appliesTo": "CLASS"
            }],
            "config": [{
                "continuousParameterGroupId": "a-25-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1661857713156
        },
        "e-60": {
            "id": "e-60",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-26",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-61"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "7c6a7512-089b-ad43-bf92-23554a5e7f74",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "7c6a7512-089b-ad43-bf92-23554a5e7f74",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1661865543037
        },
        "e-61": {
            "id": "e-61",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-60"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "7c6a7512-089b-ad43-bf92-23554a5e7f74",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "7c6a7512-089b-ad43-bf92-23554a5e7f74",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1661865543039
        },
        "e-62": {
            "id": "e-62",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-26",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-63"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64f004ab3fd0e9128d284334|f5fd02ab-a202-0cbd-6368-2b9e197958ec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f004ab3fd0e9128d284334|f5fd02ab-a202-0cbd-6368-2b9e197958ec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1661866885378
        },
        "e-63": {
            "id": "e-63",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-62"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64f004ab3fd0e9128d284334|f5fd02ab-a202-0cbd-6368-2b9e197958ec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f004ab3fd0e9128d284334|f5fd02ab-a202-0cbd-6368-2b9e197958ec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1661866885378
        },
        "e-66": {
            "id": "e-66",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-67"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".company-slide-arrows.prev",
                "originalId": "64f004ab3fd0e9128d28431f|bdff16c6-6783-bef6-1d36-b826f111a5d7",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".company-slide-arrows.prev",
                "originalId": "64f004ab3fd0e9128d28431f|bdff16c6-6783-bef6-1d36-b826f111a5d7",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1661933212201
        },
        "e-67": {
            "id": "e-67",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-66"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".company-slide-arrows.prev",
                "originalId": "64f004ab3fd0e9128d28431f|bdff16c6-6783-bef6-1d36-b826f111a5d7",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".company-slide-arrows.prev",
                "originalId": "64f004ab3fd0e9128d28431f|bdff16c6-6783-bef6-1d36-b826f111a5d7",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1661933212204
        },
        "e-68": {
            "id": "e-68",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-31",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-69"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "selector": ".company-slide-arrows.next",
                "originalId": "64f004ab3fd0e9128d28431f|bdff16c6-6783-bef6-1d36-b826f111a5d9",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".company-slide-arrows.next",
                "originalId": "64f004ab3fd0e9128d28431f|bdff16c6-6783-bef6-1d36-b826f111a5d9",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1661933519173
        },
        "e-69": {
            "id": "e-69",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-32",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-68"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "selector": ".company-slide-arrows.next",
                "originalId": "64f004ab3fd0e9128d28431f|bdff16c6-6783-bef6-1d36-b826f111a5d9",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".company-slide-arrows.next",
                "originalId": "64f004ab3fd0e9128d28431f|bdff16c6-6783-bef6-1d36-b826f111a5d9",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1661933519175
        },
        "e-70": {
            "id": "e-70",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-33",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-71"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".heading-large.services",
                "originalId": "64f004ab3fd0e9128d2842e5|1c5a7e1e-4e71-8fc2-b324-1d0bb0a40a47",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".heading-large.services",
                "originalId": "64f004ab3fd0e9128d2842e5|1c5a7e1e-4e71-8fc2-b324-1d0bb0a40a47",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1661946024979
        },
        "e-71": {
            "id": "e-71",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-70"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".heading-large.services",
                "originalId": "64f004ab3fd0e9128d2842e5|1c5a7e1e-4e71-8fc2-b324-1d0bb0a40a47",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".heading-large.services",
                "originalId": "64f004ab3fd0e9128d2842e5|1c5a7e1e-4e71-8fc2-b324-1d0bb0a40a47",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1661946024982
        },
        "e-72": {
            "id": "e-72",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-73"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "selector": ".heading-small.contact",
                "originalId": "01f7752c-2227-87c1-a872-a4790d4f5e42",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".heading-small.contact",
                "originalId": "01f7752c-2227-87c1-a872-a4790d4f5e42",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1661972146053
        },
        "e-73": {
            "id": "e-73",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-72"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "selector": ".heading-small.contact",
                "originalId": "01f7752c-2227-87c1-a872-a4790d4f5e42",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".heading-small.contact",
                "originalId": "01f7752c-2227-87c1-a872-a4790d4f5e42",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1661972146055
        },
        "e-74": {
            "id": "e-74",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-75"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".services-wrapper",
                "originalId": "64f004ab3fd0e9128d28433b|cc25ca83-d363-889f-428a-49d66a58d0de",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".services-wrapper",
                "originalId": "64f004ab3fd0e9128d28433b|cc25ca83-d363-889f-428a-49d66a58d0de",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1667821338105
        },
        "e-76": {
            "id": "e-76",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-35",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-77"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".process-item",
                "originalId": "64f004ab3fd0e9128d28431f|46056ab1-ddd3-cb83-2615-d824a5477cd1",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".process-item",
                "originalId": "64f004ab3fd0e9128d28431f|46056ab1-ddd3-cb83-2615-d824a5477cd1",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1667833112230
        },
        "e-77": {
            "id": "e-77",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-36",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-76"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".process-item",
                "originalId": "64f004ab3fd0e9128d28431f|46056ab1-ddd3-cb83-2615-d824a5477cd1",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".process-item",
                "originalId": "64f004ab3fd0e9128d28431f|46056ab1-ddd3-cb83-2615-d824a5477cd1",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1667833112231
        },
        "e-78": {
            "id": "e-78",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-79"
                }
            },
            "mediaQueries": ["medium", "small", "tiny"],
            "target": {
                "selector": ".process-item",
                "originalId": "64f004ab3fd0e9128d28431f|46056ab1-ddd3-cb83-2615-d824a5477cd1",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".process-item",
                "originalId": "64f004ab3fd0e9128d28431f|46056ab1-ddd3-cb83-2615-d824a5477cd1",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1667894923015
        },
        "e-79": {
            "id": "e-79",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-78"
                }
            },
            "mediaQueries": ["medium", "small", "tiny"],
            "target": {
                "selector": ".process-item",
                "originalId": "64f004ab3fd0e9128d28431f|46056ab1-ddd3-cb83-2615-d824a5477cd1",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".process-item",
                "originalId": "64f004ab3fd0e9128d28431f|46056ab1-ddd3-cb83-2615-d824a5477cd1",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1667894923016
        },
        "e-81": {
            "id": "e-81",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64f004ab3fd0e9128d28433a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f004ab3fd0e9128d28433a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-8-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 40,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-8-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 40,
                "restingState": 50
            }],
            "createdOn": 1667896743928
        },
        "e-87": {
            "id": "e-87",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-71",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-88"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64f004ab3fd0e9128d28433a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f004ab3fd0e9128d28433a",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1667896743928
        },
        "e-89": {
            "id": "e-89",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-40",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-90"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".button-primary.for-light-bg",
                "originalId": "64f004ab3fd0e9128d284334|531d90f9-09e0-bd2c-20a1-9e6b1f45257f",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".button-primary.for-light-bg",
                "originalId": "64f004ab3fd0e9128d284334|531d90f9-09e0-bd2c-20a1-9e6b1f45257f",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1667920007885
        },
        "e-90": {
            "id": "e-90",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-41",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-89"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".button-primary.for-light-bg",
                "originalId": "64f004ab3fd0e9128d284334|531d90f9-09e0-bd2c-20a1-9e6b1f45257f",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".button-primary.for-light-bg",
                "originalId": "64f004ab3fd0e9128d284334|531d90f9-09e0-bd2c-20a1-9e6b1f45257f",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1667920007887
        },
        "e-91": {
            "id": "e-91",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-42",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-92"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".section-navbar",
                "originalId": "f585820e-52cc-5e16-90d2-c706698909bd",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".section-navbar",
                "originalId": "f585820e-52cc-5e16-90d2-c706698909bd",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1667985037901
        },
        "e-92": {
            "id": "e-92",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-91"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".section-navbar",
                "originalId": "f585820e-52cc-5e16-90d2-c706698909bd",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".section-navbar",
                "originalId": "f585820e-52cc-5e16-90d2-c706698909bd",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1667985037901
        },
        "e-93": {
            "id": "e-93",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-94"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "f585820e-52cc-5e16-90d2-c706698909d8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "f585820e-52cc-5e16-90d2-c706698909d8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1667985037901
        },
        "e-94": {
            "id": "e-94",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-45",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-93"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "f585820e-52cc-5e16-90d2-c706698909d8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "f585820e-52cc-5e16-90d2-c706698909d8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1667985037901
        },
        "e-95": {
            "id": "e-95",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-46",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-96"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".section-navbar",
                "originalId": "64f004ab3fd0e9128d284334|3d696c6c-a23c-7695-e1a5-e809109ef898",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".section-navbar",
                "originalId": "64f004ab3fd0e9128d284334|3d696c6c-a23c-7695-e1a5-e809109ef898",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1667985753020
        },
        "e-96": {
            "id": "e-96",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-47",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-95"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".section-navbar",
                "originalId": "64f004ab3fd0e9128d284334|3d696c6c-a23c-7695-e1a5-e809109ef898",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".section-navbar",
                "originalId": "64f004ab3fd0e9128d284334|3d696c6c-a23c-7695-e1a5-e809109ef898",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1667985753020
        },
        "e-97": {
            "id": "e-97",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-48",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-98"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64f004ab3fd0e9128d284334|473386bb-7134-641b-a0e9-1c348a6c4901",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f004ab3fd0e9128d284334|473386bb-7134-641b-a0e9-1c348a6c4901",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1667985753020
        },
        "e-98": {
            "id": "e-98",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-49",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-97"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64f004ab3fd0e9128d284334|473386bb-7134-641b-a0e9-1c348a6c4901",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f004ab3fd0e9128d284334|473386bb-7134-641b-a0e9-1c348a6c4901",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1667985753020
        },
        "e-99": {
            "id": "e-99",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-50",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-100"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".section-navbar",
                "originalId": "64f004ab3fd0e9128d284334|01f882c2-affc-267f-1c7b-35b0f22c3efa",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".section-navbar",
                "originalId": "64f004ab3fd0e9128d284334|01f882c2-affc-267f-1c7b-35b0f22c3efa",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1667985790585
        },
        "e-100": {
            "id": "e-100",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-51",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-99"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".section-navbar",
                "originalId": "64f004ab3fd0e9128d284334|01f882c2-affc-267f-1c7b-35b0f22c3efa",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".section-navbar",
                "originalId": "64f004ab3fd0e9128d284334|01f882c2-affc-267f-1c7b-35b0f22c3efa",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1667985790585
        },
        "e-103": {
            "id": "e-103",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-54",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-104"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".section-navbar",
                "originalId": "64f004ab3fd0e9128d284332|347da48c-dc98-ee73-5b88-a2b7ab97af68",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".section-navbar",
                "originalId": "64f004ab3fd0e9128d284332|347da48c-dc98-ee73-5b88-a2b7ab97af68",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1667985865206
        },
        "e-104": {
            "id": "e-104",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-55",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-103"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".section-navbar",
                "originalId": "64f004ab3fd0e9128d284332|347da48c-dc98-ee73-5b88-a2b7ab97af68",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".section-navbar",
                "originalId": "64f004ab3fd0e9128d284332|347da48c-dc98-ee73-5b88-a2b7ab97af68",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1667985865206
        },
        "e-107": {
            "id": "e-107",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-58",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-108"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".section-navbar",
                "originalId": "64f004ab3fd0e9128d284332|fd2d4c19-10e1-9321-b7fa-b823a80010ba",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".section-navbar",
                "originalId": "64f004ab3fd0e9128d284332|fd2d4c19-10e1-9321-b7fa-b823a80010ba",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1667985880249
        },
        "e-108": {
            "id": "e-108",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-59",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-107"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".section-navbar",
                "originalId": "64f004ab3fd0e9128d284332|fd2d4c19-10e1-9321-b7fa-b823a80010ba",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".section-navbar",
                "originalId": "64f004ab3fd0e9128d284332|fd2d4c19-10e1-9321-b7fa-b823a80010ba",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1667985880249
        },
        "e-109": {
            "id": "e-109",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-60",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-110"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64f004ab3fd0e9128d284332|5b497988-780e-c93f-28d9-db7db02ff367",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f004ab3fd0e9128d284332|5b497988-780e-c93f-28d9-db7db02ff367",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1667985880249
        },
        "e-110": {
            "id": "e-110",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-61",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-109"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64f004ab3fd0e9128d284332|5b497988-780e-c93f-28d9-db7db02ff367",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f004ab3fd0e9128d284332|5b497988-780e-c93f-28d9-db7db02ff367",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1667985880249
        },
        "e-111": {
            "id": "e-111",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-62",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-112"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".section-navbar",
                "originalId": "64f004ab3fd0e9128d284332|218954fc-eb29-ca64-0b41-e9bb5970036f",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".section-navbar",
                "originalId": "64f004ab3fd0e9128d284332|218954fc-eb29-ca64-0b41-e9bb5970036f",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1667986265043
        },
        "e-112": {
            "id": "e-112",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-63",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-111"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".section-navbar",
                "originalId": "64f004ab3fd0e9128d284332|218954fc-eb29-ca64-0b41-e9bb5970036f",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".section-navbar",
                "originalId": "64f004ab3fd0e9128d284332|218954fc-eb29-ca64-0b41-e9bb5970036f",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1667986265043
        },
        "e-113": {
            "id": "e-113",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-64",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-114"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64f004ab3fd0e9128d284332|1854332d-8ff1-71ca-1082-396203e72670",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f004ab3fd0e9128d284332|1854332d-8ff1-71ca-1082-396203e72670",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1667986265043
        },
        "e-114": {
            "id": "e-114",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-65",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-113"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64f004ab3fd0e9128d284332|1854332d-8ff1-71ca-1082-396203e72670",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f004ab3fd0e9128d284332|1854332d-8ff1-71ca-1082-396203e72670",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1667986265043
        },
        "e-115": {
            "id": "e-115",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-66",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-116"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".section-navbar",
                "originalId": "64f004ab3fd0e9128d284334|08a05625-aba1-da58-e722-b187c9013a6e",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".section-navbar",
                "originalId": "64f004ab3fd0e9128d284334|08a05625-aba1-da58-e722-b187c9013a6e",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1667987397283
        },
        "e-116": {
            "id": "e-116",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-67",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-115"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".section-navbar",
                "originalId": "64f004ab3fd0e9128d284334|08a05625-aba1-da58-e722-b187c9013a6e",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".section-navbar",
                "originalId": "64f004ab3fd0e9128d284334|08a05625-aba1-da58-e722-b187c9013a6e",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1667987397283
        },
        "e-117": {
            "id": "e-117",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-68",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-118"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64f004ab3fd0e9128d284334|a4d278e0-8295-14cf-9bae-cd6053572352",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f004ab3fd0e9128d284334|a4d278e0-8295-14cf-9bae-cd6053572352",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1667987397283
        },
        "e-118": {
            "id": "e-118",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-69",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-117"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64f004ab3fd0e9128d284334|a4d278e0-8295-14cf-9bae-cd6053572352",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f004ab3fd0e9128d284334|a4d278e0-8295-14cf-9bae-cd6053572352",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1667987397283
        },
        "e-119": {
            "id": "e-119",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-120"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".button-primary",
                "originalId": "64f004ab3fd0e9128d28431f|2f4b0ff1-5f53-84df-1dd5-8fb2715bb660",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".button-primary",
                "originalId": "64f004ab3fd0e9128d28431f|2f4b0ff1-5f53-84df-1dd5-8fb2715bb660",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1667988205797
        },
        "e-120": {
            "id": "e-120",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-119"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".button-primary",
                "originalId": "64f004ab3fd0e9128d28431f|2f4b0ff1-5f53-84df-1dd5-8fb2715bb660",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".button-primary",
                "originalId": "64f004ab3fd0e9128d28431f|2f4b0ff1-5f53-84df-1dd5-8fb2715bb660",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1667988205799
        },
        "e-121": {
            "id": "e-121",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-122"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".work-listing-content-wrapper",
                "originalId": "64f004ab3fd0e9128d28433a|0abbe2b0-530d-0753-a0ed-b59eb2dd44cf",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".work-listing-content-wrapper",
                "originalId": "64f004ab3fd0e9128d28433a|0abbe2b0-530d-0753-a0ed-b59eb2dd44cf",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1669185859435
        },
        "e-122": {
            "id": "e-122",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-121"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".work-listing-content-wrapper",
                "originalId": "64f004ab3fd0e9128d28433a|0abbe2b0-530d-0753-a0ed-b59eb2dd44cf",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".work-listing-content-wrapper",
                "originalId": "64f004ab3fd0e9128d28433a|0abbe2b0-530d-0753-a0ed-b59eb2dd44cf",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1669185859436
        },
        "e-124": {
            "id": "e-124",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64f004ab3fd0e9128d284339",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f004ab3fd0e9128d284339",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-8-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 40,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-8-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 40,
                "restingState": 50
            }],
            "createdOn": 1671457796250
        },
        "e-132": {
            "id": "e-132",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-71",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-133"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64f004ab3fd0e9128d28433b",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f004ab3fd0e9128d28433b",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693457934071
        },
        "e-134": {
            "id": "e-134",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-71",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-135"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64f004ab3fd0e9128d284341",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f004ab3fd0e9128d284341",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693457967322
        },
        "e-137": {
            "id": "e-137",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-71",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-136"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64f004ab3fd0e9128d28433c",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f004ab3fd0e9128d28433c",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693457987021
        },
        "e-138": {
            "id": "e-138",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-71",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-139"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64f004ab3fd0e9128d28433d",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f004ab3fd0e9128d28433d",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693458005918
        },
        "e-140": {
            "id": "e-140",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-71",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-141"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64f004ab3fd0e9128d284340",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f004ab3fd0e9128d284340",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693458025935
        },
        "e-142": {
            "id": "e-142",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-71",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-143"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64f004ab3fd0e9128d28431f",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f004ab3fd0e9128d28431f",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693458043820
        },
        "e-144": {
            "id": "e-144",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-71",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-145"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64f004ab3fd0e9128d284331",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f004ab3fd0e9128d284331",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693458063169
        },
        "e-146": {
            "id": "e-146",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-71",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-147"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64f004ab3fd0e9128d284332",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f004ab3fd0e9128d284332",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693458092760
        },
        "e-148": {
            "id": "e-148",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-71",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-149"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64f004ab3fd0e9128d284334",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64f004ab3fd0e9128d284334",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693458119172
        }
    },
    "actionLists": {
        "a": {
            "id": "a",
            "title": "Primary Button Hover on",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "bef01a54-0a42-f77a-d004-fa139bf395a1"
                        },
                        "widthValue": 3.5,
                        "widthUnit": "rem",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-n-12",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-text",
                            "selectorGuids": ["4343b0cc-dfcf-b5d3-c423-c29ca0f30b12"]
                        },
                        "globalSwatchId": "ff99b87d",
                        "rValue": 17,
                        "bValue": 17,
                        "gValue": 17,
                        "aValue": 1
                    }
                }, {
                    "id": "a-n-8",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-arrow",
                            "selectorGuids": ["3f727e0a-5e05-04a4-54ee-a474685ee11a"]
                        },
                        "globalSwatchId": "302f49d0",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }, {
                    "id": "a-n-6",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "bef01a54-0a42-f77a-d004-fa139bf395a1"
                        },
                        "globalSwatchId": "302f49d0",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }, {
                    "id": "a-n-4",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "bef01a54-0a42-f77a-d004-fa139bf395a1"
                        },
                        "globalSwatchId": "",
                        "rValue": 0,
                        "bValue": 0,
                        "gValue": 0,
                        "aValue": 0
                    }
                }, {
                    "id": "a-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-text",
                            "selectorGuids": ["4343b0cc-dfcf-b5d3-c423-c29ca0f30b12"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": [0.152, 0.007, 0.31, 0.919],
                        "duration": 300,
                        "target": {
                            "useEventTarget": true,
                            "id": "bef01a54-0a42-f77a-d004-fa139bf395a1"
                        },
                        "widthValue": 11,
                        "widthUnit": "rem",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-n-11",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-text",
                            "selectorGuids": ["4343b0cc-dfcf-b5d3-c423-c29ca0f30b12"]
                        },
                        "xValue": -0.5,
                        "xUnit": "rem",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-n-9",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": [0.152, 0.007, 0.31, 0.919],
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-arrow",
                            "selectorGuids": ["3f727e0a-5e05-04a4-54ee-a474685ee11a"]
                        },
                        "globalSwatchId": "ff99b87d",
                        "rValue": 17,
                        "bValue": 17,
                        "gValue": 17,
                        "aValue": 1
                    }
                }, {
                    "id": "a-n-7",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": [0.152, 0.007, 0.31, 0.919],
                        "duration": 300,
                        "target": {
                            "useEventTarget": true,
                            "id": "bef01a54-0a42-f77a-d004-fa139bf395a1"
                        },
                        "globalSwatchId": "",
                        "rValue": 240,
                        "bValue": 228,
                        "gValue": 237,
                        "aValue": 1
                    }
                }, {
                    "id": "a-n-5",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": [0.152, 0.007, 0.31, 0.919],
                        "duration": 300,
                        "target": {
                            "useEventTarget": true,
                            "id": "bef01a54-0a42-f77a-d004-fa139bf395a1"
                        },
                        "globalSwatchId": "",
                        "rValue": 240,
                        "bValue": 228,
                        "gValue": 237,
                        "aValue": 1
                    }
                }, {
                    "id": "a-n-13",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-text",
                            "selectorGuids": ["4343b0cc-dfcf-b5d3-c423-c29ca0f30b12"]
                        },
                        "globalSwatchId": "ff99b87d",
                        "rValue": 17,
                        "bValue": 17,
                        "gValue": 17,
                        "aValue": 1
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": [0.152, 0.007, 0.31, 0.919],
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-text",
                            "selectorGuids": ["4343b0cc-dfcf-b5d3-c423-c29ca0f30b12"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1660220566210
        },
        "a-3": {
            "id": "a-3",
            "title": "Primary Button Hover off",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-3-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": [0.152, 0.007, 0.31, 0.919],
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-text",
                            "selectorGuids": ["4343b0cc-dfcf-b5d3-c423-c29ca0f30b12"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-3-n-4",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": [0.152, 0.007, 0.31, 0.919],
                        "duration": 300,
                        "target": {
                            "useEventTarget": true,
                            "id": "bef01a54-0a42-f77a-d004-fa139bf395a1"
                        },
                        "globalSwatchId": "",
                        "rValue": 0,
                        "bValue": 0,
                        "gValue": 0,
                        "aValue": 0
                    }
                }, {
                    "id": "a-3-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": [0.152, 0.007, 0.31, 0.919],
                        "duration": 300,
                        "target": {
                            "useEventTarget": true,
                            "id": "bef01a54-0a42-f77a-d004-fa139bf395a1"
                        },
                        "widthValue": 3.5,
                        "widthUnit": "rem",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-3-n-2",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": [0.152, 0.007, 0.31, 0.919],
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-arrow",
                            "selectorGuids": ["3f727e0a-5e05-04a4-54ee-a474685ee11a"]
                        },
                        "globalSwatchId": "302f49d0",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }, {
                    "id": "a-3-n-3",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": [0.152, 0.007, 0.31, 0.919],
                        "duration": 300,
                        "target": {
                            "useEventTarget": true,
                            "id": "bef01a54-0a42-f77a-d004-fa139bf395a1"
                        },
                        "globalSwatchId": "302f49d0",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1660220566210
        },
        "a-4": {
            "id": "a-4",
            "title": "Home Video Scroll",
            "continuousParameterGroups": [{
                "id": "a-4-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 36,
                    "actionItems": [{
                        "id": "a-4-n",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".video",
                                "selectorGuids": ["b27ad449-8498-5389-47b3-ceb9313dfe3d"]
                            },
                            "widthValue": 60,
                            "heightValue": 35,
                            "widthUnit": "%",
                            "heightUnit": "rem",
                            "locked": false
                        }
                    }]
                }, {
                    "keyframe": 75,
                    "actionItems": [{
                        "id": "a-4-n-2",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".video",
                                "selectorGuids": ["b27ad449-8498-5389-47b3-ceb9313dfe3d"]
                            },
                            "widthValue": 100,
                            "heightValue": 45,
                            "widthUnit": "%",
                            "heightUnit": "rem",
                            "locked": false
                        }
                    }]
                }]
            }],
            "createdOn": 1661424209294
        },
        "a-5": {
            "id": "a-5",
            "title": "Services Left Scroll In",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-5-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".heading-large.services.margin-none",
                            "selectorGuids": ["4343b0cc-dfcf-b5d3-c423-c29ca0f30b15", "044d17d3-9a20-6d1d-88e0-d305c589b83e", "7127a0c5-6a9a-90cd-e8f7-02c2487b14aa"]
                        },
                        "xValue": -105,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-5-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".heading-large.services.margin-none",
                            "selectorGuids": ["4343b0cc-dfcf-b5d3-c423-c29ca0f30b15", "044d17d3-9a20-6d1d-88e0-d305c589b83e", "7127a0c5-6a9a-90cd-e8f7-02c2487b14aa"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-5-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".heading-large.services.margin-none",
                            "selectorGuids": ["4343b0cc-dfcf-b5d3-c423-c29ca0f30b15", "044d17d3-9a20-6d1d-88e0-d305c589b83e", "7127a0c5-6a9a-90cd-e8f7-02c2487b14aa"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-5-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".heading-large.services.margin-none",
                            "selectorGuids": ["4343b0cc-dfcf-b5d3-c423-c29ca0f30b15", "044d17d3-9a20-6d1d-88e0-d305c589b83e", "7127a0c5-6a9a-90cd-e8f7-02c2487b14aa"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1661426372782
        },
        "a-6": {
            "id": "a-6",
            "title": "Services Right Scroll In",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-6-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".heading-large.services.margin-none",
                            "selectorGuids": ["4343b0cc-dfcf-b5d3-c423-c29ca0f30b15", "044d17d3-9a20-6d1d-88e0-d305c589b83e", "7127a0c5-6a9a-90cd-e8f7-02c2487b14aa"]
                        },
                        "xValue": 105,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-6-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".heading-large.services.margin-none",
                            "selectorGuids": ["4343b0cc-dfcf-b5d3-c423-c29ca0f30b15", "044d17d3-9a20-6d1d-88e0-d305c589b83e", "7127a0c5-6a9a-90cd-e8f7-02c2487b14aa"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-6-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".heading-large.services.margin-none",
                            "selectorGuids": ["4343b0cc-dfcf-b5d3-c423-c29ca0f30b15", "044d17d3-9a20-6d1d-88e0-d305c589b83e", "7127a0c5-6a9a-90cd-e8f7-02c2487b14aa"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-6-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".heading-large.services.margin-none",
                            "selectorGuids": ["4343b0cc-dfcf-b5d3-c423-c29ca0f30b15", "044d17d3-9a20-6d1d-88e0-d305c589b83e", "7127a0c5-6a9a-90cd-e8f7-02c2487b14aa"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1661426372782
        },
        "a-8": {
            "id": "a-8",
            "title": "Cursor Move",
            "continuousParameterGroups": [{
                "id": "a-8-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-8-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".cursor-dot",
                                "selectorGuids": ["3d26eb38-34ae-576b-6ee7-d76314d5dbb6"]
                            },
                            "xValue": -50,
                            "yValue": null,
                            "xUnit": "vw",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-8-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".cursor-dot",
                                "selectorGuids": ["3d26eb38-34ae-576b-6ee7-d76314d5dbb6"]
                            },
                            "xValue": 50,
                            "yValue": null,
                            "xUnit": "vw",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-8-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-8-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".cursor-dot",
                                "selectorGuids": ["3d26eb38-34ae-576b-6ee7-d76314d5dbb6"]
                            },
                            "xValue": null,
                            "yValue": -50,
                            "xUnit": "vw",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-8-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".cursor-dot",
                                "selectorGuids": ["3d26eb38-34ae-576b-6ee7-d76314d5dbb6"]
                            },
                            "xValue": null,
                            "yValue": 50,
                            "xUnit": "vw",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1661432050362
        },
        "a-9": {
            "id": "a-9",
            "title": "Mouse Video Hover In",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-9-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".cursor-text.play-reel",
                            "selectorGuids": ["3a28a813-2e69-6f53-58b6-ce7caff6c71e", "dfebd459-9c46-1c38-043a-5fad74666edb"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-9-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".cursor-text.play-reel",
                            "selectorGuids": ["3a28a813-2e69-6f53-58b6-ce7caff6c71e", "dfebd459-9c46-1c38-043a-5fad74666edb"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-9-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "selector": ".cursor-text.play-reel",
                            "selectorGuids": ["3a28a813-2e69-6f53-58b6-ce7caff6c71e", "dfebd459-9c46-1c38-043a-5fad74666edb"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1661433115739
        },
        "a-10": {
            "id": "a-10",
            "title": "Mouse Video Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-10-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "selector": ".cursor-text.play-reel",
                            "selectorGuids": ["3a28a813-2e69-6f53-58b6-ce7caff6c71e", "dfebd459-9c46-1c38-043a-5fad74666edb"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1661433374276
        },
        "a-11": {
            "id": "a-11",
            "title": "Mouse Service Hover In",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-11-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".cursor-text.click",
                            "selectorGuids": ["3a28a813-2e69-6f53-58b6-ce7caff6c71e", "bdb7b71c-5919-c1cf-c7e2-fdc698ab3b21"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-11-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".cursor-text.click",
                            "selectorGuids": ["3a28a813-2e69-6f53-58b6-ce7caff6c71e", "bdb7b71c-5919-c1cf-c7e2-fdc698ab3b21"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-11-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "selector": ".cursor-text.click",
                            "selectorGuids": ["3a28a813-2e69-6f53-58b6-ce7caff6c71e", "bdb7b71c-5919-c1cf-c7e2-fdc698ab3b21"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1661433115739
        },
        "a-12": {
            "id": "a-12",
            "title": "Mouse Service Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-12-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "selector": ".cursor-text.click",
                            "selectorGuids": ["3a28a813-2e69-6f53-58b6-ce7caff6c71e", "bdb7b71c-5919-c1cf-c7e2-fdc698ab3b21"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1661433374276
        },
        "a-15": {
            "id": "a-15",
            "title": "Mouse Hero Hover In",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-15-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".cursor-text.scroll-down",
                            "selectorGuids": ["3a28a813-2e69-6f53-58b6-ce7caff6c71e", "bce35864-60a2-c917-799b-7adbce79169a"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-15-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".cursor-text.scroll-down",
                            "selectorGuids": ["3a28a813-2e69-6f53-58b6-ce7caff6c71e", "bce35864-60a2-c917-799b-7adbce79169a"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-15-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "selector": ".cursor-text.scroll-down",
                            "selectorGuids": ["3a28a813-2e69-6f53-58b6-ce7caff6c71e", "bce35864-60a2-c917-799b-7adbce79169a"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1661433115739
        },
        "a-16": {
            "id": "a-16",
            "title": "Mouse Hero Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-16-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "selector": ".cursor-text.scroll-down",
                            "selectorGuids": ["3a28a813-2e69-6f53-58b6-ce7caff6c71e", "bce35864-60a2-c917-799b-7adbce79169a"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1661433374276
        },
        "a-17": {
            "id": "a-17",
            "title": "Mouse Shrink Hover In",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-17-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "selector": ".cursor-dot",
                            "selectorGuids": ["3d26eb38-34ae-576b-6ee7-d76314d5dbb6"]
                        },
                        "widthValue": 50,
                        "heightValue": 50,
                        "widthUnit": "px",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1661435936098
        },
        "a-18": {
            "id": "a-18",
            "title": "Mouse Shrink Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-18-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "selector": ".cursor-dot",
                            "selectorGuids": ["3d26eb38-34ae-576b-6ee7-d76314d5dbb6"]
                        },
                        "widthValue": 160,
                        "heightValue": 160,
                        "widthUnit": "px",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1661435936098
        },
        "a-19": {
            "id": "a-19",
            "title": "Video Toggle Mouse",
            "continuousParameterGroups": [{
                "id": "a-19-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-19-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "64f004ab3fd0e9128d2842e5|74fb859e-35a5-400d-cf6c-08829ec77ae6"
                            },
                            "xValue": -250,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-19-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "64f004ab3fd0e9128d2842e5|74fb859e-35a5-400d-cf6c-08829ec77ae6"
                            },
                            "xValue": 250,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-19-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-19-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "64f004ab3fd0e9128d2842e5|74fb859e-35a5-400d-cf6c-08829ec77ae6"
                            },
                            "yValue": -150,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-19-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "64f004ab3fd0e9128d2842e5|74fb859e-35a5-400d-cf6c-08829ec77ae6"
                            },
                            "yValue": 150,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1661437811613
        },
        "a-13": {
            "id": "a-13",
            "title": "Mouse View Hover In",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-13-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".cursor-text.view",
                            "selectorGuids": ["3a28a813-2e69-6f53-58b6-ce7caff6c71e", "639acc22-f613-9032-8f02-251361f0e32d"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-13-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".cursor-text.view",
                            "selectorGuids": ["3a28a813-2e69-6f53-58b6-ce7caff6c71e", "639acc22-f613-9032-8f02-251361f0e32d"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-13-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "selector": ".cursor-text.view",
                            "selectorGuids": ["3a28a813-2e69-6f53-58b6-ce7caff6c71e", "639acc22-f613-9032-8f02-251361f0e32d"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-13-n-4",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".work-tag",
                            "selectorGuids": ["6ed11f6f-e356-b288-8b75-4c2760a88a09"]
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 0.45
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1661433115739
        },
        "a-14": {
            "id": "a-14",
            "title": "Mouse View Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-14-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "selector": ".cursor-text.view",
                            "selectorGuids": ["3a28a813-2e69-6f53-58b6-ce7caff6c71e", "639acc22-f613-9032-8f02-251361f0e32d"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-14-n-2",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".text-regular.text-colour-light.work-tag.margin-none",
                            "selectorGuids": ["4343b0cc-dfcf-b5d3-c423-c29ca0f30b18", "d884b491-079a-d918-5fdb-b2b573f16c23", "9914f128-df10-548d-0ab7-f9056bc3e6cb", "6470e230-cf92-3ab5-0203-58f89caf2ba3"]
                        },
                        "globalSwatchId": "302f49d0",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1661433374276
        },
        "a-20": {
            "id": "a-20",
            "title": "Prev-Next Hover In",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-20-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".insert-prev-next",
                            "selectorGuids": ["2f490e14-130e-9828-3ee6-280717d0819c"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-20-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".insert-prev-next",
                            "selectorGuids": ["2f490e14-130e-9828-3ee6-280717d0819c"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1661779807680
        },
        "a-21": {
            "id": "a-21",
            "title": "Prev-Next Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-21-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".insert-prev-next",
                            "selectorGuids": ["2f490e14-130e-9828-3ee6-280717d0819c"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1661779931592
        },
        "a-22": {
            "id": "a-22",
            "title": "Company Scroll",
            "continuousParameterGroups": [{
                "id": "a-22-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-22-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "inOutSine",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".tada-scroll-first",
                                "selectorGuids": ["bcaa1306-62c5-090b-b807-ee27aa78b24a"]
                            },
                            "xValue": 50,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-22-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "inOutSine",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".tada-scroll-last",
                                "selectorGuids": ["63c9ee65-b03b-0bbb-c609-97778d3b2794"]
                            },
                            "xValue": 0,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-22-n-5",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "inOutSine",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".tada-grow",
                                "selectorGuids": ["4abe0af4-2a3b-3a8f-b9d6-0a5d5d9591b3"]
                            },
                            "widthValue": 0.7,
                            "widthUnit": "em",
                            "heightUnit": "PX",
                            "locked": false
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-22-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "inOutSine",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".tada-scroll-first",
                                "selectorGuids": ["bcaa1306-62c5-090b-b807-ee27aa78b24a"]
                            },
                            "xValue": -40,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-22-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "inOutSine",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".tada-scroll-last",
                                "selectorGuids": ["63c9ee65-b03b-0bbb-c609-97778d3b2794"]
                            },
                            "xValue": -60,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-22-n-6",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "inOutSine",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".tada-grow",
                                "selectorGuids": ["4abe0af4-2a3b-3a8f-b9d6-0a5d5d9591b3"]
                            },
                            "widthValue": 20,
                            "widthUnit": "em",
                            "heightUnit": "PX",
                            "locked": false
                        }
                    }]
                }]
            }],
            "createdOn": 1661781791990
        },
        "a-7": {
            "id": "a-7",
            "title": "Footer Scroll",
            "continuousParameterGroups": [{
                "id": "a-7-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 30,
                    "actionItems": [{
                        "id": "a-7-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".footer-logo.logo-left",
                                "selectorGuids": ["a3166ee2-efd8-55b6-c941-934f01b2f37d", "9ffcc3f0-d363-dceb-4c80-339bd2293f09"]
                            },
                            "xValue": -100,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-7-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".footer-logo.logo-right",
                                "selectorGuids": ["a3166ee2-efd8-55b6-c941-934f01b2f37d", "5e870030-42d9-205f-e9c5-e51dbbec59a2"]
                            },
                            "xValue": 100,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-7-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".footer-logo.logo-right",
                                "selectorGuids": ["a3166ee2-efd8-55b6-c941-934f01b2f37d", "5e870030-42d9-205f-e9c5-e51dbbec59a2"]
                            },
                            "xValue": 0,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-7-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".footer-logo.logo-left",
                                "selectorGuids": ["a3166ee2-efd8-55b6-c941-934f01b2f37d", "9ffcc3f0-d363-dceb-4c80-339bd2293f09"]
                            },
                            "xValue": 0,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1661426909829
        },
        "a-25": {
            "id": "a-25",
            "title": "CMS Video Scroll",
            "continuousParameterGroups": [{
                "id": "a-25-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-25-n",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".video-wrapper",
                                "selectorGuids": ["b0f52f80-0b0b-0a04-2c8d-4dbc2f3e42c4"]
                            },
                            "widthValue": 60,
                            "widthUnit": "%",
                            "heightUnit": "AUTO",
                            "locked": false
                        }
                    }]
                }, {
                    "keyframe": 90,
                    "actionItems": [{
                        "id": "a-25-n-2",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".video-wrapper",
                                "selectorGuids": ["b0f52f80-0b0b-0a04-2c8d-4dbc2f3e42c4"]
                            },
                            "widthValue": 100,
                            "widthUnit": "%",
                            "heightUnit": "AUTO",
                            "locked": false
                        }
                    }]
                }]
            }],
            "createdOn": 1661424209294
        },
        "a-26": {
            "id": "a-26",
            "title": "Mobile Menu Open",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-26-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".mobile-menu-items-wrapper",
                            "selectorGuids": ["7853e7af-f942-85c7-a6a9-17b3d1f42dea"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-26-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".mobile-menu-items-wrapper",
                            "selectorGuids": ["7853e7af-f942-85c7-a6a9-17b3d1f42dea"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-26-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".mobile-menu-items-wrapper",
                            "selectorGuids": ["7853e7af-f942-85c7-a6a9-17b3d1f42dea"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-26-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-trigger-menu",
                            "selectorGuids": ["56c66e40-c8e9-b727-a0cd-d7ad3a2f7e16"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-26-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".mobile-menu-items-wrapper",
                            "selectorGuids": ["7853e7af-f942-85c7-a6a9-17b3d1f42dea"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-26-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-trigger-close",
                            "selectorGuids": ["e61a547b-9666-7961-a1c0-ccd9d8123cee"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1661865548299
        },
        "a-27": {
            "id": "a-27",
            "title": "Mobile Menu Close",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-27-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-trigger-close",
                            "selectorGuids": ["e61a547b-9666-7961-a1c0-ccd9d8123cee"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-27-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-trigger-menu",
                            "selectorGuids": ["56c66e40-c8e9-b727-a0cd-d7ad3a2f7e16"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-27-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".mobile-menu-items-wrapper",
                            "selectorGuids": ["7853e7af-f942-85c7-a6a9-17b3d1f42dea"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-27-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".mobile-menu-items-wrapper",
                            "selectorGuids": ["7853e7af-f942-85c7-a6a9-17b3d1f42dea"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1661865548299
        },
        "a-29": {
            "id": "a-29",
            "title": "Mouse Previous Hover In",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-29-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".cursor-text.prev",
                            "selectorGuids": ["3a28a813-2e69-6f53-58b6-ce7caff6c71e", "3a7888af-132d-1473-6f67-3ee9419589b1"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-29-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".cursor-text.prev",
                            "selectorGuids": ["3a28a813-2e69-6f53-58b6-ce7caff6c71e", "3a7888af-132d-1473-6f67-3ee9419589b1"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-29-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "selector": ".cursor-text.prev",
                            "selectorGuids": ["3a28a813-2e69-6f53-58b6-ce7caff6c71e", "3a7888af-132d-1473-6f67-3ee9419589b1"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1661433115739
        },
        "a-30": {
            "id": "a-30",
            "title": "Mouse Previous Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-30-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "selector": ".cursor-text.prev",
                            "selectorGuids": ["3a28a813-2e69-6f53-58b6-ce7caff6c71e", "3a7888af-132d-1473-6f67-3ee9419589b1"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1661433374276
        },
        "a-31": {
            "id": "a-31",
            "title": "Mouse Next Hover In",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-31-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".cursor-text.next",
                            "selectorGuids": ["3a28a813-2e69-6f53-58b6-ce7caff6c71e", "a5d9f770-0e24-af70-38eb-dc3f6fb9ce4a"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-31-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".cursor-text.next",
                            "selectorGuids": ["3a28a813-2e69-6f53-58b6-ce7caff6c71e", "a5d9f770-0e24-af70-38eb-dc3f6fb9ce4a"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-31-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "selector": ".cursor-text.next",
                            "selectorGuids": ["3a28a813-2e69-6f53-58b6-ce7caff6c71e", "a5d9f770-0e24-af70-38eb-dc3f6fb9ce4a"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1661433115739
        },
        "a-32": {
            "id": "a-32",
            "title": "Mouse Next Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-32-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "selector": ".cursor-text.next",
                            "selectorGuids": ["3a28a813-2e69-6f53-58b6-ce7caff6c71e", "a5d9f770-0e24-af70-38eb-dc3f6fb9ce4a"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1661433374276
        },
        "a-33": {
            "id": "a-33",
            "title": "Services GIF Hover In",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-33-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".service-hover-block",
                            "selectorGuids": ["a5de6cb1-19ab-a1db-ec73-af2dfd8d998b"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-33-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".service-hover-block",
                            "selectorGuids": ["a5de6cb1-19ab-a1db-ec73-af2dfd8d998b"]
                        },
                        "yValue": 40,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-33-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".service-hover-block",
                            "selectorGuids": ["a5de6cb1-19ab-a1db-ec73-af2dfd8d998b"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-33-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".service-hover-block",
                            "selectorGuids": ["a5de6cb1-19ab-a1db-ec73-af2dfd8d998b"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-33-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 100,
                        "easing": "outQuart",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".service-hover-block",
                            "selectorGuids": ["a5de6cb1-19ab-a1db-ec73-af2dfd8d998b"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-33-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 100,
                        "easing": "outQuart",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".service-hover-block",
                            "selectorGuids": ["a5de6cb1-19ab-a1db-ec73-af2dfd8d998b"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1661946033877
        },
        "a-34": {
            "id": "a-34",
            "title": "Services GIF Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-34-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".service-hover-block",
                            "selectorGuids": ["a5de6cb1-19ab-a1db-ec73-af2dfd8d998b"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-34-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".service-hover-block",
                            "selectorGuids": ["a5de6cb1-19ab-a1db-ec73-af2dfd8d998b"]
                        },
                        "yValue": 40,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-34-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 600,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".service-hover-block",
                            "selectorGuids": ["a5de6cb1-19ab-a1db-ec73-af2dfd8d998b"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1661946096381
        },
        "a-35": {
            "id": "a-35",
            "title": "process accordion - open",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-35-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".process-item",
                            "selectorGuids": ["a695234b-9a81-fc70-d23f-9172b264ecd4"]
                        },
                        "heightValue": 190,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-35-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordion-arrow-embed",
                            "selectorGuids": ["f6ed6b1a-4fa6-6a81-660b-8f2a954ba41f"]
                        },
                        "zValue": 180,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-35-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 800,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".process-item",
                            "selectorGuids": ["a695234b-9a81-fc70-d23f-9172b264ecd4"]
                        },
                        "widthUnit": "PX",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }, {
                    "id": "a-35-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordion-arrow-embed",
                            "selectorGuids": ["f6ed6b1a-4fa6-6a81-660b-8f2a954ba41f"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1667833115878
        },
        "a-36": {
            "id": "a-36",
            "title": "process accordion - close",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-36-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 800,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".process-item",
                            "selectorGuids": ["a695234b-9a81-fc70-d23f-9172b264ecd4"]
                        },
                        "heightValue": 190,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-36-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordion-arrow-wrapper",
                            "selectorGuids": ["ecdd3309-60ee-c153-a59c-cf9644e796fb"]
                        },
                        "zValue": 180,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1667833115878
        },
        "a-37": {
            "id": "a-37",
            "title": "Mobile Process item - open",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-37-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".process-item",
                            "selectorGuids": ["a695234b-9a81-fc70-d23f-9172b264ecd4"]
                        },
                        "heightValue": 120,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-37-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordion-arrow-wrapper",
                            "selectorGuids": ["ecdd3309-60ee-c153-a59c-cf9644e796fb"]
                        },
                        "zValue": 180,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-37-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 800,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".process-item",
                            "selectorGuids": ["a695234b-9a81-fc70-d23f-9172b264ecd4"]
                        },
                        "widthUnit": "PX",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }, {
                    "id": "a-37-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordion-arrow-wrapper",
                            "selectorGuids": ["ecdd3309-60ee-c153-a59c-cf9644e796fb"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1667894466774
        },
        "a-38": {
            "id": "a-38",
            "title": "Mobile Process item - close",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-38-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".process-item",
                            "selectorGuids": ["a695234b-9a81-fc70-d23f-9172b264ecd4"]
                        },
                        "heightValue": 120,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-38-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".accordion-arrow-wrapper",
                            "selectorGuids": ["ecdd3309-60ee-c153-a59c-cf9644e796fb"]
                        },
                        "zValue": 180,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1667894466774
        },
        "a-71": {
            "id": "a-71",
            "title": "Page load",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-71-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "00e99181-7795-6427-b96d-0dc10f59a142"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-71-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "00e99181-7795-6427-b96d-0dc10f59a142"
                        },
                        "value": "block"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-71-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 700,
                        "target": {
                            "id": "00e99181-7795-6427-b96d-0dc10f59a142"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-71-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "00e99181-7795-6427-b96d-0dc10f59a142"
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1693457817870
        },
        "a-40": {
            "id": "a-40",
            "title": "Primary Button Hover on - light bg",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-40-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "bef01a54-0a42-f77a-d004-fa139bf395a1"
                        },
                        "widthValue": 3.5,
                        "widthUnit": "rem",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-40-n-2",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-arrow",
                            "selectorGuids": ["3f727e0a-5e05-04a4-54ee-a474685ee11a"]
                        },
                        "globalSwatchId": "ff99b87d",
                        "rValue": 17,
                        "bValue": 17,
                        "gValue": 17,
                        "aValue": 1
                    }
                }, {
                    "id": "a-40-n-3",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "bef01a54-0a42-f77a-d004-fa139bf395a1"
                        },
                        "globalSwatchId": "ff99b87d",
                        "rValue": 17,
                        "bValue": 17,
                        "gValue": 17,
                        "aValue": 1
                    }
                }, {
                    "id": "a-40-n-4",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "bef01a54-0a42-f77a-d004-fa139bf395a1"
                        },
                        "globalSwatchId": "",
                        "rValue": 0,
                        "bValue": 0,
                        "gValue": 0,
                        "aValue": 0
                    }
                }, {
                    "id": "a-40-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-text",
                            "selectorGuids": ["4343b0cc-dfcf-b5d3-c423-c29ca0f30b12"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-40-n-6",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": [0.152, 0.007, 0.31, 0.919],
                        "duration": 300,
                        "target": {
                            "useEventTarget": true,
                            "id": "bef01a54-0a42-f77a-d004-fa139bf395a1"
                        },
                        "widthValue": 11,
                        "widthUnit": "rem",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-40-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-text",
                            "selectorGuids": ["4343b0cc-dfcf-b5d3-c423-c29ca0f30b12"]
                        },
                        "xValue": -0.5,
                        "xUnit": "rem",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-40-n-8",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": [0.152, 0.007, 0.31, 0.919],
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-arrow",
                            "selectorGuids": ["3f727e0a-5e05-04a4-54ee-a474685ee11a"]
                        },
                        "globalSwatchId": "ff99b87d",
                        "rValue": 17,
                        "bValue": 17,
                        "gValue": 17,
                        "aValue": 1
                    }
                }, {
                    "id": "a-40-n-9",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": [0.152, 0.007, 0.31, 0.919],
                        "duration": 300,
                        "target": {
                            "useEventTarget": true,
                            "id": "bef01a54-0a42-f77a-d004-fa139bf395a1"
                        },
                        "globalSwatchId": "ff99b87d",
                        "rValue": 17,
                        "bValue": 17,
                        "gValue": 17,
                        "aValue": 1
                    }
                }, {
                    "id": "a-40-n-10",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": [0.152, 0.007, 0.31, 0.919],
                        "duration": 300,
                        "target": {
                            "useEventTarget": true,
                            "id": "bef01a54-0a42-f77a-d004-fa139bf395a1"
                        },
                        "globalSwatchId": "",
                        "rValue": 240,
                        "bValue": 228,
                        "gValue": 237,
                        "aValue": 1
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-40-n-11",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": [0.152, 0.007, 0.31, 0.919],
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-text",
                            "selectorGuids": ["4343b0cc-dfcf-b5d3-c423-c29ca0f30b12"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1660220566210
        },
        "a-41": {
            "id": "a-41",
            "title": "Primary Button Hover off - light bg",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-41-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": [0.152, 0.007, 0.31, 0.919],
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-text",
                            "selectorGuids": ["4343b0cc-dfcf-b5d3-c423-c29ca0f30b12"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-41-n-2",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": [0.152, 0.007, 0.31, 0.919],
                        "duration": 300,
                        "target": {
                            "useEventTarget": true,
                            "id": "bef01a54-0a42-f77a-d004-fa139bf395a1"
                        },
                        "globalSwatchId": "",
                        "rValue": 0,
                        "bValue": 0,
                        "gValue": 0,
                        "aValue": 0
                    }
                }, {
                    "id": "a-41-n-3",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": [0.152, 0.007, 0.31, 0.919],
                        "duration": 300,
                        "target": {
                            "useEventTarget": true,
                            "id": "bef01a54-0a42-f77a-d004-fa139bf395a1"
                        },
                        "widthValue": 3.5,
                        "widthUnit": "rem",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-41-n-4",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": [0.152, 0.007, 0.31, 0.919],
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".button-arrow",
                            "selectorGuids": ["3f727e0a-5e05-04a4-54ee-a474685ee11a"]
                        },
                        "globalSwatchId": "ff99b87d",
                        "rValue": 17,
                        "bValue": 17,
                        "gValue": 17,
                        "aValue": 1
                    }
                }, {
                    "id": "a-41-n-5",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": [0.152, 0.007, 0.31, 0.919],
                        "duration": 300,
                        "target": {
                            "useEventTarget": true,
                            "id": "bef01a54-0a42-f77a-d004-fa139bf395a1"
                        },
                        "globalSwatchId": "ff99b87d",
                        "rValue": 17,
                        "bValue": 17,
                        "gValue": 17,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1660220566210
        },
        "a-42": {
            "id": "a-42",
            "title": "Mouse Shrink Hover In 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-42-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "selector": ".cursor-dot",
                            "selectorGuids": ["3d26eb38-34ae-576b-6ee7-d76314d5dbb6"]
                        },
                        "widthValue": 50,
                        "heightValue": 50,
                        "widthUnit": "px",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1661435936098
        },
        "a-43": {
            "id": "a-43",
            "title": "Mouse Shrink Hover Out 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-43-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "selector": ".cursor-dot",
                            "selectorGuids": ["3d26eb38-34ae-576b-6ee7-d76314d5dbb6"]
                        },
                        "widthValue": 160,
                        "heightValue": 160,
                        "widthUnit": "px",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1661435936098
        },
        "a-44": {
            "id": "a-44",
            "title": "Mobile Menu Open 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-44-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".mobile-menu-items-wrapper",
                            "selectorGuids": ["7853e7af-f942-85c7-a6a9-17b3d1f42dea"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-44-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".mobile-menu-items-wrapper",
                            "selectorGuids": ["7853e7af-f942-85c7-a6a9-17b3d1f42dea"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-44-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".mobile-menu-items-wrapper",
                            "selectorGuids": ["7853e7af-f942-85c7-a6a9-17b3d1f42dea"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-44-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-trigger-menu",
                            "selectorGuids": ["56c66e40-c8e9-b727-a0cd-d7ad3a2f7e16"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-44-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".mobile-menu-items-wrapper",
                            "selectorGuids": ["7853e7af-f942-85c7-a6a9-17b3d1f42dea"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-44-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-trigger-close",
                            "selectorGuids": ["e61a547b-9666-7961-a1c0-ccd9d8123cee"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1661865548299
        },
        "a-45": {
            "id": "a-45",
            "title": "Mobile Menu Close 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-45-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-trigger-close",
                            "selectorGuids": ["e61a547b-9666-7961-a1c0-ccd9d8123cee"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-45-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-trigger-menu",
                            "selectorGuids": ["56c66e40-c8e9-b727-a0cd-d7ad3a2f7e16"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-45-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".mobile-menu-items-wrapper",
                            "selectorGuids": ["7853e7af-f942-85c7-a6a9-17b3d1f42dea"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-45-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".mobile-menu-items-wrapper",
                            "selectorGuids": ["7853e7af-f942-85c7-a6a9-17b3d1f42dea"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1661865548299
        },
        "a-46": {
            "id": "a-46",
            "title": "Mouse Shrink Hover In 3",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-46-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "selector": ".cursor-dot",
                            "selectorGuids": ["3d26eb38-34ae-576b-6ee7-d76314d5dbb6"]
                        },
                        "widthValue": 50,
                        "heightValue": 50,
                        "widthUnit": "px",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1661435936098
        },
        "a-47": {
            "id": "a-47",
            "title": "Mouse Shrink Hover Out 3",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-47-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "selector": ".cursor-dot",
                            "selectorGuids": ["3d26eb38-34ae-576b-6ee7-d76314d5dbb6"]
                        },
                        "widthValue": 160,
                        "heightValue": 160,
                        "widthUnit": "px",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1661435936098
        },
        "a-48": {
            "id": "a-48",
            "title": "Mobile Menu Open 3",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-48-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".mobile-menu-items-wrapper",
                            "selectorGuids": ["7853e7af-f942-85c7-a6a9-17b3d1f42dea"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-48-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".mobile-menu-items-wrapper",
                            "selectorGuids": ["7853e7af-f942-85c7-a6a9-17b3d1f42dea"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-48-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".mobile-menu-items-wrapper",
                            "selectorGuids": ["7853e7af-f942-85c7-a6a9-17b3d1f42dea"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-48-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-trigger-menu",
                            "selectorGuids": ["56c66e40-c8e9-b727-a0cd-d7ad3a2f7e16"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-48-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".mobile-menu-items-wrapper",
                            "selectorGuids": ["7853e7af-f942-85c7-a6a9-17b3d1f42dea"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-48-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-trigger-close",
                            "selectorGuids": ["e61a547b-9666-7961-a1c0-ccd9d8123cee"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1661865548299
        },
        "a-49": {
            "id": "a-49",
            "title": "Mobile Menu Close 3",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-49-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-trigger-close",
                            "selectorGuids": ["e61a547b-9666-7961-a1c0-ccd9d8123cee"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-49-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-trigger-menu",
                            "selectorGuids": ["56c66e40-c8e9-b727-a0cd-d7ad3a2f7e16"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-49-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".mobile-menu-items-wrapper",
                            "selectorGuids": ["7853e7af-f942-85c7-a6a9-17b3d1f42dea"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-49-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".mobile-menu-items-wrapper",
                            "selectorGuids": ["7853e7af-f942-85c7-a6a9-17b3d1f42dea"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1661865548299
        },
        "a-50": {
            "id": "a-50",
            "title": "Mouse Shrink Hover In 4",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-50-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "selector": ".cursor-dot",
                            "selectorGuids": ["3d26eb38-34ae-576b-6ee7-d76314d5dbb6"]
                        },
                        "widthValue": 50,
                        "heightValue": 50,
                        "widthUnit": "px",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1661435936098
        },
        "a-51": {
            "id": "a-51",
            "title": "Mouse Shrink Hover Out 4",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-51-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "selector": ".cursor-dot",
                            "selectorGuids": ["3d26eb38-34ae-576b-6ee7-d76314d5dbb6"]
                        },
                        "widthValue": 160,
                        "heightValue": 160,
                        "widthUnit": "px",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1661435936098
        },
        "a-54": {
            "id": "a-54",
            "title": "Mouse Shrink Hover In 5",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-54-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "selector": ".cursor-dot",
                            "selectorGuids": ["3d26eb38-34ae-576b-6ee7-d76314d5dbb6"]
                        },
                        "widthValue": 50,
                        "heightValue": 50,
                        "widthUnit": "px",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1661435936098
        },
        "a-55": {
            "id": "a-55",
            "title": "Mouse Shrink Hover Out 5",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-55-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "selector": ".cursor-dot",
                            "selectorGuids": ["3d26eb38-34ae-576b-6ee7-d76314d5dbb6"]
                        },
                        "widthValue": 160,
                        "heightValue": 160,
                        "widthUnit": "px",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1661435936098
        },
        "a-58": {
            "id": "a-58",
            "title": "Mouse Shrink Hover In 6",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-58-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "selector": ".cursor-dot",
                            "selectorGuids": ["3d26eb38-34ae-576b-6ee7-d76314d5dbb6"]
                        },
                        "widthValue": 50,
                        "heightValue": 50,
                        "widthUnit": "px",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1661435936098
        },
        "a-59": {
            "id": "a-59",
            "title": "Mouse Shrink Hover Out 6",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-59-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "selector": ".cursor-dot",
                            "selectorGuids": ["3d26eb38-34ae-576b-6ee7-d76314d5dbb6"]
                        },
                        "widthValue": 160,
                        "heightValue": 160,
                        "widthUnit": "px",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1661435936098
        },
        "a-60": {
            "id": "a-60",
            "title": "Mobile Menu Open 6",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-60-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".mobile-menu-items-wrapper",
                            "selectorGuids": ["7853e7af-f942-85c7-a6a9-17b3d1f42dea"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-60-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".mobile-menu-items-wrapper",
                            "selectorGuids": ["7853e7af-f942-85c7-a6a9-17b3d1f42dea"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-60-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".mobile-menu-items-wrapper",
                            "selectorGuids": ["7853e7af-f942-85c7-a6a9-17b3d1f42dea"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-60-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-trigger-menu",
                            "selectorGuids": ["56c66e40-c8e9-b727-a0cd-d7ad3a2f7e16"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-60-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".mobile-menu-items-wrapper",
                            "selectorGuids": ["7853e7af-f942-85c7-a6a9-17b3d1f42dea"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-60-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-trigger-close",
                            "selectorGuids": ["e61a547b-9666-7961-a1c0-ccd9d8123cee"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1661865548299
        },
        "a-61": {
            "id": "a-61",
            "title": "Mobile Menu Close 6",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-61-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-trigger-close",
                            "selectorGuids": ["e61a547b-9666-7961-a1c0-ccd9d8123cee"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-61-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-trigger-menu",
                            "selectorGuids": ["56c66e40-c8e9-b727-a0cd-d7ad3a2f7e16"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-61-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".mobile-menu-items-wrapper",
                            "selectorGuids": ["7853e7af-f942-85c7-a6a9-17b3d1f42dea"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-61-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".mobile-menu-items-wrapper",
                            "selectorGuids": ["7853e7af-f942-85c7-a6a9-17b3d1f42dea"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1661865548299
        },
        "a-62": {
            "id": "a-62",
            "title": "Mouse Shrink Hover In 7",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-62-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "selector": ".cursor-dot",
                            "selectorGuids": ["3d26eb38-34ae-576b-6ee7-d76314d5dbb6"]
                        },
                        "widthValue": 50,
                        "heightValue": 50,
                        "widthUnit": "px",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1661435936098
        },
        "a-63": {
            "id": "a-63",
            "title": "Mouse Shrink Hover Out 7",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-63-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "selector": ".cursor-dot",
                            "selectorGuids": ["3d26eb38-34ae-576b-6ee7-d76314d5dbb6"]
                        },
                        "widthValue": 160,
                        "heightValue": 160,
                        "widthUnit": "px",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1661435936098
        },
        "a-64": {
            "id": "a-64",
            "title": "Mobile Menu Open 7",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-64-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".mobile-menu-items-wrapper",
                            "selectorGuids": ["7853e7af-f942-85c7-a6a9-17b3d1f42dea"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-64-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".mobile-menu-items-wrapper",
                            "selectorGuids": ["7853e7af-f942-85c7-a6a9-17b3d1f42dea"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-64-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".mobile-menu-items-wrapper",
                            "selectorGuids": ["7853e7af-f942-85c7-a6a9-17b3d1f42dea"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-64-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-trigger-menu",
                            "selectorGuids": ["56c66e40-c8e9-b727-a0cd-d7ad3a2f7e16"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-64-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".mobile-menu-items-wrapper",
                            "selectorGuids": ["7853e7af-f942-85c7-a6a9-17b3d1f42dea"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-64-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-trigger-close",
                            "selectorGuids": ["e61a547b-9666-7961-a1c0-ccd9d8123cee"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1661865548299
        },
        "a-65": {
            "id": "a-65",
            "title": "Mobile Menu Close 7",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-65-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-trigger-close",
                            "selectorGuids": ["e61a547b-9666-7961-a1c0-ccd9d8123cee"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-65-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-trigger-menu",
                            "selectorGuids": ["56c66e40-c8e9-b727-a0cd-d7ad3a2f7e16"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-65-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".mobile-menu-items-wrapper",
                            "selectorGuids": ["7853e7af-f942-85c7-a6a9-17b3d1f42dea"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-65-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".mobile-menu-items-wrapper",
                            "selectorGuids": ["7853e7af-f942-85c7-a6a9-17b3d1f42dea"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1661865548299
        },
        "a-66": {
            "id": "a-66",
            "title": "Mouse Shrink Hover In 8",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-66-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "selector": ".cursor-dot",
                            "selectorGuids": ["3d26eb38-34ae-576b-6ee7-d76314d5dbb6"]
                        },
                        "widthValue": 50,
                        "heightValue": 50,
                        "widthUnit": "px",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1661435936098
        },
        "a-67": {
            "id": "a-67",
            "title": "Mouse Shrink Hover Out 8",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-67-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "selector": ".cursor-dot",
                            "selectorGuids": ["3d26eb38-34ae-576b-6ee7-d76314d5dbb6"]
                        },
                        "widthValue": 160,
                        "heightValue": 160,
                        "widthUnit": "px",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1661435936098
        },
        "a-68": {
            "id": "a-68",
            "title": "Mobile Menu Open 8",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-68-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".mobile-menu-items-wrapper",
                            "selectorGuids": ["7853e7af-f942-85c7-a6a9-17b3d1f42dea"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-68-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".mobile-menu-items-wrapper",
                            "selectorGuids": ["7853e7af-f942-85c7-a6a9-17b3d1f42dea"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-68-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".mobile-menu-items-wrapper",
                            "selectorGuids": ["7853e7af-f942-85c7-a6a9-17b3d1f42dea"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-68-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-trigger-menu",
                            "selectorGuids": ["56c66e40-c8e9-b727-a0cd-d7ad3a2f7e16"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-68-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".mobile-menu-items-wrapper",
                            "selectorGuids": ["7853e7af-f942-85c7-a6a9-17b3d1f42dea"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-68-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-trigger-close",
                            "selectorGuids": ["e61a547b-9666-7961-a1c0-ccd9d8123cee"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1661865548299
        },
        "a-69": {
            "id": "a-69",
            "title": "Mobile Menu Close 8",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-69-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-trigger-close",
                            "selectorGuids": ["e61a547b-9666-7961-a1c0-ccd9d8123cee"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-69-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".menu-trigger-menu",
                            "selectorGuids": ["56c66e40-c8e9-b727-a0cd-d7ad3a2f7e16"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-69-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 600,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".mobile-menu-items-wrapper",
                            "selectorGuids": ["7853e7af-f942-85c7-a6a9-17b3d1f42dea"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-69-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 500,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".mobile-menu-items-wrapper",
                            "selectorGuids": ["7853e7af-f942-85c7-a6a9-17b3d1f42dea"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1661865548299
        }
    },
    "site": {
        "mediaQueries": [{
            "key": "main",
            "min": 992,
            "max": 10000
        }, {
            "key": "medium",
            "min": 768,
            "max": 991
        }, {
            "key": "small",
            "min": 480,
            "max": 767
        }, {
            "key": "tiny",
            "min": 0,
            "max": 479
        }]
    }
});