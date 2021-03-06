! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("CgPlayer", [], t) : "object" == typeof exports ? exports.CgPlayer = t() : e.CgPlayer = t()
}(this, function() {
    return function(e) {
        function t(i) {
            if (n[i]) return n[i].exports;
            var a = n[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return e[i].call(a.exports, a, a.exports, t), a.l = !0, a.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.d = function(e, n, i) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: i
            })
        }, t.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "/", t(t.s = 1)
    }([function(e, t, n) {
        "use strict";
        e.exports = {
            secondToTime: function(e) {
                var t = function(e) {
                        return e < 10 ? "0" + e : "" + e
                    },
                    n = parseInt(e / 60),
                    i = parseInt(e - 60 * n);
                return t(n) + ":" + t(i)
            },
            getElementViewLeft: function(e) {
                var t = e.offsetLeft,
                    n = e.offsetParent,
                    i = document.body.scrollLeft + document.documentElement.scrollLeft;
                if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement)
                    for (; null !== n && n !== e;) t += n.offsetLeft, n = n.offsetParent;
                else
                    for (; null !== n;) t += n.offsetLeft, n = n.offsetParent;
                return t - i
            },
            getScrollPosition: function() {
                return {
                    left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0,
                    top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
                }
            },
            setScrollPosition: function(e) {
                var t = e.left,
                    n = void 0 === t ? 0 : t,
                    i = e.top,
                    a = void 0 === i ? 0 : i;
                this.isFirefox ? (document.documentElement.scrollLeft = n, document.documentElement.scrollTop = a) : window.scrollTo(n, a)
            },
            isMobile: /mobile/i.test(window.navigator.userAgent),
            isFirefox: /firefox/i.test(window.navigator.userAgent),
            isChrome: /chrome/i.test(window.navigator.userAgent),
            storage: {
                set: function(e, t) {
                    localStorage.setItem(e, t)
                },
                get: function(e) {
                    return localStorage.getItem(e)
                }
            }
        }
    }, function(e, t, n) {
        "use strict";
        console.log("\n %c CgPlayer %c http://coolwp.com/cgplayer.html\n\n", "color: #fadfa3; background: #030307; padding:5px 0;", "background: #fadfa3; padding:5px 0;"), e.exports = n(2)
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();
        n(3);
        var o = n(0),
            l = i(o),
            r = n(4),
            d = i(r),
            c = n(6),
            u = i(c),
            p = n(7),
            h = i(p),
            m = n(8),
            y = i(m),
            v = n(9),
            f = i(v),
            g = n(10),
            b = i(g),
            k = n(11),
            w = i(k),
            E = n(12),
            L = i(E),
            x = n(13),
            T = i(x),
            C = n(14),
            B = i(C),
            q = 0,
            M = [],
            S = function() {
                function e(t) {
                    var n = this;
                    a(this, e), this.options = (0, d.default)(t), this.options.container.classList.add("cgplayer"), this.options.video.quality && (this.qualityIndex = this.options.video.defaultQuality, this.quality = this.options.video.quality[this.options.video.defaultQuality]), this.tran = new u.default(this.options.lang).tran, this.icons = new y.default(this.options), this.events = new w.default, this.user = new T.default(this), this.container = this.options.container, this.options.danmaku || this.container.classList.add("cgplayer-no-danmaku"), o.isMobile && this.container.classList.add("cgplayer-mobile"), this.container.innerHTML = h.default.main(this.options, q, this.tran, this.icons);
                    var i = {};
                    i.volumeBar = this.container.getElementsByClassName("cgplayer-volume-bar-inner")[0], i.playedBar = this.container.getElementsByClassName("cgplayer-played")[0], i.loadedBar = this.container.getElementsByClassName("cgplayer-loaded")[0];
                    var s = this.container.getElementsByClassName("cgplayer-bar-wrap")[0],
                        r = this.container.getElementsByClassName("cgplayer-bar-time")[0],
                        c = void 0;
                    if (this.updateBar = function(e, t, n) {
                            t = t > 0 ? t : 0, t = t < 1 ? t : 1, i[e + "Bar"].style[n] = 100 * t + "%"
                        }, document.addEventListener("click", function() {
                            n.focus = !1
                        }, !0), this.container.addEventListener("click", function() {
                            n.focus = !0
                        }, !0), this.options.danmaku && (this.danmaku = new f.default({
                            container: this.container.getElementsByClassName("cgplayer-danmaku")[0],
                          /*  opacity: this.user.get("opacity"),*/
                            opacity: this.options.danmaku.opacity||0.7,
                            callback: function() {
                                n.container.getElementsByClassName("cgplayer-danloading")[0].style.display = "none", n.options.autoplay && !o.isMobile ? n.play() : o.isMobile && n.pause()
                            },
                            error: function(e) {
                                n.notice(e)
                            },
                            apiBackend: this.options.apiBackend,
                            borderColor: this.options.theme,
                            duration:this.options.duration,

                            margin: '200px',
                            height: this.arrow ? 24 : 30,
                            time: function() {
                                return n.video.currentTime
                            },
                            unlimited: this.user.get("unlimited"),
                            api: {
                                id: this.options.danmaku.id,
                                dmData: this.options.danmaku.dmData,
                                dmColor: this.options.danmaku.color,
                                address: this.options.danmaku.api,
                                token: this.options.danmaku.token,
                                maximum: this.options.danmaku.maximum,
                                addition: this.options.danmaku.addition,
                                user: this.options.danmaku.user
                            },
                            events: this.events
                        })), this.arrow = this.container.offsetWidth <= 500, this.arrow) {
                        var p = document.createElement("style");
                        p.innerHTML = ".cgplayer .cgplayer-danmaku{font-size:18px}", document.head.appendChild(p)
                    }
                    this.video = this.container.getElementsByClassName("cgplayer-video-current")[0], this.bezel = this.container.getElementsByClassName("cgplayer-bezel-icon")[0], this.bezel.addEventListener("animationend", function() {
                        n.bezel.classList.remove("cgplayer-bezel-transition")
                    }), this.playButton = this.container.getElementsByClassName("cgplayer-play-icon")[0], this.paused = !0, this.playButton.addEventListener("click", function() {
                        n.toggle()
                    });
                    var m = this.container.getElementsByClassName("cgplayer-video-wrap")[0],
                        v = this.container.getElementsByClassName("cgplayer-controller-mask")[0];
                    if (o.isMobile) {
                        var g = function() {
                            n.container.classList.contains("cgplayer-hide-controller") ? n.container.classList.remove("cgplayer-hide-controller") : n.container.classList.add("cgplayer-hide-controller")
                        };
                        m.addEventListener("click", g), v.addEventListener("click", g)
                    } else m.addEventListener("click", function() {
                        n.toggle()
                    }), v.addEventListener("click", function() {
                        n.toggle()
                    });
                    var b = 0,
                        k = 0,
                        E = !1;
                    window.requestAnimationFrame = function() {
                        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
                            window.setTimeout(e, 1e3 / 60)
                        }
                    }();
                    var x = function() {
                            n.checkLoading = setInterval(function() {
                                k = n.video.currentTime, E || k !== b || n.video.paused || (n.container.classList.add("cgplayer-loading"), E = !0), E && k > b && !n.video.paused && (n.container.classList.remove("cgplayer-loading"), E = !1), b = k
                            }, 100)
                        },
                        C = function() {
                            clearInterval(n.checkLoading)
                        };
                    this.playedTime = !1, this.animationFrame = function() {
                        n.playedTime && (n.updateBar("played", n.video.currentTime / n.video.duration, "width"), n.container.getElementsByClassName("cgplayer-ptime")[0].innerHTML = l.default.secondToTime(n.video.currentTime)), window.requestAnimationFrame(n.animationFrame)
                    }, window.requestAnimationFrame(this.animationFrame), this.setTime = function(e) {
                        e ? (n[e + "Time"] = !0, "played" === e && x()) : (n.playedTime = !0, x())
                    }, this.clearTime = function(e) {
                        e ? (n[e + "Time"] = !1, "played" === e && C()) : (n.playedTime = !1, C())
                    }, this.options.video.thumbnails && this.initThumbnails(), this.isTimeTipsShow = !0, this.mouseHandler = this.mouseHandler(s, r).bind(this), s.addEventListener("mousemove", this.mouseHandler), s.addEventListener("mouseenter", this.mouseHandler), s.addEventListener("mouseleave", this.mouseHandler);
                    var B = function(e) {
                            var t = (e.clientX - l.default.getElementViewLeft(s)) / c;
                            t = t > 0 ? t : 0, t = t < 1 ? t : 1, n.updateBar("played", t, "width"), n.container.getElementsByClassName("cgplayer-ptime")[0].innerHTML = l.default.secondToTime(t * n.video.duration)
                        },
                        S = function e(t) {
                            document.removeEventListener("mouseup", e), document.removeEventListener("mousemove", B);
                            var a = (t.clientX - l.default.getElementViewLeft(s)) / c;
                            a = a > 0 ? a : 0, a = a < 1 ? a : 1, n.updateBar("played", a, "width"), n.seek(parseFloat(i.playedBar.style.width) / 100 * n.video.duration), n.setTime()
                        };
                    s.addEventListener("mousedown", function() {
                        c = s.clientWidth, n.clearTime(), document.addEventListener("mousemove", B), document.addEventListener("mouseup", S)
                    });
                    var z = this.container.getElementsByClassName("cgplayer-volume")[0],
                        N = this.container.getElementsByClassName("cgplayer-volume-bar-wrap")[0],
                        _ = this.container.getElementsByClassName("cgplayer-volume-bar")[0],
                        F = this.container.getElementsByClassName("cgplayer-volume-icon")[0].getElementsByClassName("cgplayer-icon-content")[0];
                    this.switchVolumeIcon = function() {
                        n.volume() >= .95 ? F.innerHTML = n.icons.get("volume-up") : n.volume() > 0 ? F.innerHTML = n.icons.get("volume-down") : F.innerHTML = n.icons.get("volume-off")
                    };
                    var P = function(e) {
                            var t = e || window.event,
                                i = (t.clientX - l.default.getElementViewLeft(_) - 5.5) / 35;
                            n.volume(i)
                        },
                        H = function e() {
                            document.removeEventListener("mouseup", e), document.removeEventListener("mousemove", P), z.classList.remove("cgplayer-volume-active")
                        };
                    N.addEventListener("click", function(e) {
                        var t = e || window.event,
                            i = (t.clientX - l.default.getElementViewLeft(_) - 5.5) / 35;
                        n.volume(i)
                    }), N.addEventListener("mousedown", function() {
                        document.addEventListener("mousemove", P), document.addEventListener("mouseup", H), z.classList.add("cgplayer-volume-active")
                    }), F.addEventListener("click", function() {
                        n.video.muted ? (n.video.muted = !1, n.switchVolumeIcon(), n.updateBar("volume", n.volume(), "width")) : (n.video.muted = !0, F.innerHTML = n.icons.get("volume-off"), n.updateBar("volume", 0, "width"))
                    }), this.hideTime = 0;
                    var D = function() {
                        n.container.classList.remove("cgplayer-hide-controller"), clearTimeout(n.hideTime), n.hideTime = setTimeout(function() {
                            n.video.played.length && !n.disableHideController && (n.container.classList.add("cgplayer-hide-controller"))
                        }, 2e3)
                    };
                    o.isMobile || (this.container.addEventListener("mousemove", D), this.container.addEventListener("click", D));
                    var I = h.default.setting(this.tran, this.icons), R = this.container.getElementsByClassName("cgplayer-mask")[0], W = this.user.get("danmaku"),X = this.user.get("unlimited");
                      this.loop = this.options.loop;
                    W || this.danmaku && this.danmaku.hide();
                   1 !== this.video.duration && (this.container.getElementsByClassName("cgplayer-dtime")[0].innerHTML = this.video.duration ? l.default.secondToTime(this.video.duration) : "00:00"), this.danmaku || (this.options.autoplay && !o.isMobile ? this.play() : o.isMobile && this.pause());
                    var U = this.container.getElementsByClassName("cgplayer-controller")[0];
                     this.fullScreen = new L.default(this),
                      this.container.getElementsByClassName("cgplayer-full-icon")[0].addEventListener("click", function() {
                        n.fullScreen.toggle("browser")
                    }), this.container.getElementsByClassName("cgplayer-full-in-icon")[0].addEventListener("click", function() {
                        n.fullScreen.toggle("web")
                    });
                    var se = function(e) {
                        if (n.focus) {
                            var t = document.activeElement.tagName.toUpperCase(),
                                i = document.activeElement.getAttribute("contenteditable");
                            if ("INPUT" !== t && "TEXTAREA" !== t && "" !== i && "true" !== i) {
                                var a = e || window.event,
                                    s = void 0;
                                switch (a.keyCode) {
                                    case 32:
                                        a.preventDefault(), n.toggle();
                                        break;
                                    case 37:
                                        a.preventDefault(), n.seek(n.video.currentTime - 5), D();
                                        break;
                                    case 39:
                                        a.preventDefault(), n.seek(n.video.currentTime + 5), D();
                                        break;
                                    case 38:
                                        a.preventDefault(), s = n.volume() + .1, n.volume(s);
                                        break;
                                    case 40:
                                        a.preventDefault(), s = n.volume() - .1, n.volume(s)
                                }
                            }
                        }
                    };
                    this.options.hotkey && document.addEventListener("keydown", se), document.addEventListener("keydown", function(e) {
                        switch ((e || window.event).keyCode) {
                            case 27:
                                n.fullScreen.isFullScreen("web") && n.fullScreen.cancel("web")
                        }
                    });
                    var oe = this.container.getElementsByClassName("cgplayer-menu")[0];
                    /*MMM*/
                    if (this.container.addEventListener("contextmenu", function(e) {
                            var t = e || window.event;
                            t.preventDefault(), oe.classList.add("cgplayer-menu-show");
                            var i = n.container.getBoundingClientRect(),
                                a = t.clientX - i.left,
                                s = t.clientY - i.top;
                            a + oe.offsetWidth >= i.width ? (oe.style.right = i.width - a + "px", oe.style.left = "initial") : (oe.style.left = t.clientX - n.container.getBoundingClientRect().left + "px", oe.style.right = "initial"), s + oe.offsetHeight >= i.height ? (oe.style.bottom = i.height - s + "px", oe.style.top = "initial") : (oe.style.top = t.clientY - n.container.getBoundingClientRect().top + "px", oe.style.bottom = "initial"), R.classList.add("cgplayer-mask-show"), n.events.trigger("contextmenu_show"), R.addEventListener("click", function() {
                                R.classList.remove("cgplayer-mask-show"), oe.classList.remove("cgplayer-menu-show"), n.events.trigger("contextmenu_hide")
                            })
                        }), this.options.video.quality && this.container.getElementsByClassName("cgplayer-quality-list")[0].addEventListener("click", function(e) {
                            e.target.classList.contains("cgplayer-quality-item") && n.switchQuality(e.target.dataset.index)
                        }), this.options.screenshot) {
                        var le = this.container.getElementsByClassName("cgplayer-camera-icon")[0];
                        le.addEventListener("click", function() {
                            var e = document.createElement("canvas");
                            e.width = n.video.videoWidth, e.height = n.video.videoHeight, e.getContext("2d").drawImage(n.video, 0, 0, e.width, e.height);
                            var t = e.toDataURL();
                            var dtObj=new Date();
                            le.href = t, le.download = "CgPlayer_"+dtObj.getFullYear()+"_"+dtObj.getMonth()+"_"+dtObj.getDate()+"_"+dtObj.getHours()+"_"+dtObj.getMinutes()+"_"+dtObj.getSeconds()+".png", n.events.trigger("screenshot", t)
                        })
                    }
                    this.initVideo(this.video, this.quality && this.quality.type || this.options.video.type), q++, M.push(this)
                }
                return s(e, [{
                    key: "seek",
                    value: function(e) {
                        e = Math.max(e, 0), this.video.duration && (e = Math.min(e, this.video.duration)), this.video.currentTime < e ? this.notice(this.tran("FF") + " " + (e - this.video.currentTime).toFixed(0) + " " + this.tran("s")) : this.video.currentTime > e && this.notice(this.tran("REW") + " " + (this.video.currentTime - e).toFixed(0) + " " + this.tran("s")), this.video.currentTime = e, this.danmaku && this.danmaku.seek(), this.updateBar("played", e / this.video.duration, "width")
                    }
                }, {
                    key: "play",
                    value: function() {
                        if(!this.video){
                            console.log('play what?');
                        }
                        if (this.paused = !1, this.video.paused && (this.bezel.innerHTML = this.icons.get("play"), this.bezel.classList.add("cgplayer-bezel-transition")), this.playButton.innerHTML = this.icons.get("pause"), this.video.play(), this.setTime(), this.container.classList.add("cgplayer-playing"), this.danmaku && this.danmaku.play(), this.options.mutex)
                            for (var e = 0; e < M.length; e++) this !== M[e] && M[e].pause()
                    }
                }, {
                    key: "pause",
                    value: function() {
                        this.paused = !0, this.container.classList.remove("cgplayer-loading"), this.video.paused || (this.bezel.innerHTML = this.icons.get("pause"), this.bezel.classList.add("cgplayer-bezel-transition")), this.ended = !1, this.playButton.innerHTML = this.icons.get("play"), this.video.pause(), this.clearTime(), this.container.classList.remove("cgplayer-playing"), this.danmaku && this.danmaku.pause()
                    }
                }, {
                    key: "volume",
                    value: function(e, t, n) {
                        if (e = parseFloat(e), !isNaN(e)) {
                            e = e > 0 ? e : 0, e = e < 1 ? e : 1, this.updateBar("volume", e, "width");
                            var i = (100 * e).toFixed(0) + "%";
                            this.container.getElementsByClassName("cgplayer-volume-bar-wrap")[0].dataset.balloon = i, t || this.user.set("volume", e), n || this.notice(this.tran("Volume") + " " + (100 * e).toFixed(0) + "%"), this.video.volume = e, this.video.muted && (this.video.muted = !1), this.switchVolumeIcon()
                        }
                        return this.video.volume
                    }
                }, {
                    key: "toggle",
                    value: function() {
                        this.video.paused ? this.play() : this.pause()
                    }
                }, {
                    key: "on",
                    value: function(e, t) {
                        this.events.on(e, t)
                    }
                }, {
                    key: "switchVideo",
                    value: function(e, t) {
                        this.pause(), this.video.poster = e.pic ? e.pic : "", this.video.src = e.url, this.initMSE(this.video, e.type || "auto"), t && (this.container.getElementsByClassName("cgplayer-danloading")[0].style.display = "block", this.updateBar("played", 0, "width"), this.updateBar("loaded", 0, "width"), this.container.getElementsByClassName("cgplayer-ptime")[0].innerHTML = "00:00", this.container.getElementsByClassName("cgplayer-danmaku")[0].innerHTML = "", this.danmaku && this.danmaku.reload({
                            id: t.id,
                            dmData: t.dmData,
                           dmColor:t.dmColor,
                            address: t.api,
                            token: t.token,
                            maximum: t.maximum,
                            addition: t.addition,
                            user: t.user
                        }))
                    }
                }, {
                    key: "initMSE",
                    value: function(e, t) {
                        if (this.type = t, "auto" === this.type && (/m3u8(#|\?|$)/i.exec(e.src) ? this.type = "hls" : /.flv(#|\?|$)/i.exec(e.src) ? this.type = "flv" : /.mpd(#|\?|$)/i.exec(e.src) ? this.type = "dash" : this.type = "normal"), "hls" === this.type && Hls && Hls.isSupported()) {
                            var n = new Hls;
                            n.loadSource(e.src), n.attachMedia(e)
                        }
                        if ("flv" === this.type && flvjs && flvjs.isSupported()) {
                            var i = flvjs.createPlayer({
                                type: "flv",
                                url: e.src
                            });
                            i.attachMediaElement(e), i.load()
                        }
                        "dash" === this.type && dashjs && dashjs.MediaPlayer().create().initialize(e, e.src, !1)
                    }
                }, {
                    key: "initVideo",
                    value: function(e, t) {
                        var n = this;
                        this.initMSE(e, t), this.on("durationchange", function() {
                            1 !== e.duration && (n.container.getElementsByClassName("cgplayer-dtime")[0].innerHTML = l.default.secondToTime(e.duration))
                        }), this.on("progress", function() {
                            var t = e.buffered.length ? e.buffered.end(e.buffered.length - 1) / e.duration : 0;
                            n.updateBar("loaded", t, "width")
                        }), this.on("error", function() {
                            n.tran && n.notice && n.notice(n.tran("This video fails to load"), -1)
                        }), this.ended = !1, this.on("ended", function() {
                            n.updateBar("played", 1, "width"), n.loop ? (n.seek(0), e.play()) : (n.ended = !0, n.pause()), n.danmaku && (n.danmaku.danIndex = 0)
                        }), this.on("play", function() {
                            n.paused && n.play()
                        }), this.on("pause", function() {
                            n.paused || n.pause()
                        });
                        for (var i = 0; i < this.events.videoEvents.length; i++) ! function(t) {
                            e.addEventListener(n.events.videoEvents[t], function() {
                                n.events.trigger(n.events.videoEvents[t])
                            })
                        }(i);
                        this.volume(this.user.get("volume"), !0, !0)
                        /*
                        , this.options.subtitle && (this.subtitle = new B.default(this.container.getElementsByClassName("cgplayer-subtitle")[0], this.video, this.options.subtitle, this.events), this.user.get("subtitle") || this.subtitle.hide())
                         */
                    }
                }, {
                    key: "switchQuality",
                    value: function(e) {
                        var t = this;
                        if (this.qualityIndex !== e && !this.switchingQuality) {
                            this.qualityIndex = e, this.switchingQuality = !0, this.quality = this.options.video.quality[e], this.container.getElementsByClassName("cgplayer-quality-icon")[0].innerHTML = this.quality.name;
                            var n = this.video.paused;
                            this.video.pause();
                            var i = h.default.video(!1, null, this.options.screenshot, "auto", this.quality.url, this.options.subtitle),
                                a = (new DOMParser).parseFromString(i, "text/html").body.firstChild,
                                s = this.container.getElementsByClassName("cgplayer-video-wrap")[0];
                            s.insertBefore(a, s.getElementsByTagName("div")[0]), this.prevVideo = this.video, this.video = a, this.initVideo(this.video, this.quality.type || this.options.video.type), this.seek(this.prevVideo.currentTime), this.notice(this.tran("Switching to") + " " + this.quality.name + " " + this.tran("quality"), -1), this.events.trigger("quality_start", this.quality), this.on("canplay", function() {
                                if (t.prevVideo) {
                                    if (t.video.currentTime !== t.prevVideo.currentTime) return void t.seek(t.prevVideo.currentTime);
                                    s.removeChild(t.prevVideo), t.video.classList.add("cgplayer-video-current"), n || t.video.play(), t.prevVideo = null, t.notice(t.tran("Switched to") + " " + t.quality.name + " " + t.tran("quality")), t.switchingQuality = !1, t.events.trigger("quality_end")
                                }
                            })
                        }
                    }
                }, {
                    key: "mouseHandler",
                    value: function(e, t) {
                        var n = this,
                            i = function(e) {
                                var t = 0,
                                    n = 0;
                                do {
                                    t += e.offsetTop || 0, n += e.offsetLeft || 0, e = e.offsetParent
                                } while (e);
                                return {
                                    top: t,
                                    left: n
                                }
                            };
                        return function(a) {
                            if (n.video.duration) {
                                var s = a.clientX,
                                    o = i(e).left,
                                    r = s - o;
                                if (!(r < 0 || r > e.offsetWidth)) {
                                    var d = n.video.duration * (r / e.offsetWidth);
                                    switch (t.style.left = r - 20 + "px", a.type) {
                                        case "mouseenter":
                                            n.thumbnails && n.thumbnails.show();
                                            break;
                                        case "mousemove":
                                            n.thumbnails && n.thumbnails.move(r), t.innerText = l.default.secondToTime(d), n.timeTipsDisplay(!0, t);
                                            break;
                                        case "mouseleave":
                                            n.thumbnails && n.thumbnails.hide(), n.timeTipsDisplay(!1, t)
                                    }
                                }
                            }
                        }
                    }
                }, {
                    key: "timeTipsDisplay",
                    value: function(e, t) {
                        if (e) {
                            if (this.isTimeTipsShow) return;
                            t.classList.remove("hidden"), this.isTimeTipsShow = !0
                        } else {
                            if (!this.isTimeTipsShow) return;
                            t.classList.add("hidden"), this.isTimeTipsShow = !1
                        }
                    }
                }, {
                    key: "initThumbnails",
                    value: function() {
                        var e = this;
                        this.thumbnails = new b.default(this.container.getElementsByClassName("cgplayer-bar-preview")[0], this.container.getElementsByClassName("cgplayer-bar-wrap")[0].offsetWidth, this.options.video.thumbnails, this.events), this.on("loadedmetadata", function() {
                            e.thumbnails.resize(160, 90)
                        })
                    }
                }, {
                    key: "notice",
                    value: function(e) {
                        var t = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2e3,
                            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .8,
                            a = this.container.getElementsByClassName("cgplayer-notice")[0];
                        a.innerHTML = e, a.style.opacity = i, this.noticeTime && clearTimeout(this.noticeTime), this.events.trigger("notice_show", e), this.noticeTime = setTimeout(function() {
                            a.style.opacity = 0, t.events.trigger("notice_hide")
                        }, n)
                    }
                }, {
                    key: "resize",
                    value: function() {
                        this.danmaku && this.danmaku.resize(), this.events.trigger("resize")
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        M.splice(M.indexOf(this), 1), this.pause(), clearTimeout(this.hideTime), this.video.src = "", this.container.innerHTML = "", this.events.trigger("destroy");
                        for (var e in this) this.hasOwnProperty(e) && "paused" !== e && delete this[e]
                    }
                }]), e
            }();
        e.exports = S
    }, function(e, t) {}, function(e, t, n) {
        "use strict";
        var i = n(5);
        e.exports = function(e) {
            /mobile/i.test(window.navigator.userAgent) && (e.autoplay = !1);
            var t = {
                container: e.element || document.getElementsByClassName("cgplayer")[0],
                autoplay: !1,
                theme: "#b7daff",
                loop: !1,
                lang: (navigator.language || navigator.browserLanguage).toLowerCase(),
                screenshot: !1,
                hotkey: !0,
                preload: "auto",
                volume: 0.7,
                apiBackend: i,
                video: {},
                icons: {
                    play: ["0 0 16 32", "M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"],
                    pause: ["0 0 17 32", "M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"],
                    "volume-up": ["0 0 21 32", "M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056z"],
                    "volume-down": ["0 0 21 32", "M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"],
                    "volume-off": ["0 0 21 32", "M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"],
                    loop: ["0 0 32 32", "M1.882 16.941c0 4.152 3.221 7.529 7.177 7.529v1.882c-4.996 0-9.060-4.222-9.060-9.412s4.064-9.412 9.060-9.412h7.96l-3.098-3.098 1.331-1.331 5.372 5.37-5.37 5.372-1.333-1.333 3.1-3.098h-7.962c-3.957 0-7.177 3.377-7.177 7.529zM22.94 7.529v1.882c3.957 0 7.177 3.377 7.177 7.529s-3.221 7.529-7.177 7.529h-7.962l3.098-3.098-1.331-1.331-5.37 5.37 5.372 5.372 1.331-1.331-3.1-3.1h7.96c4.998 0 9.062-4.222 9.062-9.412s-4.064-9.412-9.060-9.412z"],
                    full: ["0 0 32 33", "M6.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v4h4c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333zM30.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h4v-4c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM30.667 12c-0.8 0-1.333-0.533-1.333-1.333v-4h-4c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM1.333 12c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333h-4v4c0 0.8-0.533 1.333-1.333 1.333z"],
                    "full-in": ["0 0 32 33", "M24.965 24.38h-18.132c-1.366 0-2.478-1.113-2.478-2.478v-11.806c0-1.364 1.111-2.478 2.478-2.478h18.132c1.366 0 2.478 1.113 2.478 2.478v11.806c0 1.364-1.11 2.478-2.478 2.478zM6.833 10.097v11.806h18.134l-0.002-11.806h-18.132zM2.478 28.928h5.952c0.684 0 1.238-0.554 1.238-1.239 0-0.684-0.554-1.238-1.238-1.238h-5.952v-5.802c0-0.684-0.554-1.239-1.238-1.239s-1.239 0.556-1.239 1.239v5.802c0 1.365 1.111 2.478 2.478 2.478zM30.761 19.412c-0.684 0-1.238 0.554-1.238 1.238v5.801h-5.951c-0.686 0-1.239 0.554-1.239 1.238 0 0.686 0.554 1.239 1.239 1.239h5.951c1.366 0 2.478-1.111 2.478-2.478v-5.801c0-0.683-0.554-1.238-1.239-1.238zM0 5.55v5.802c0 0.683 0.554 1.238 1.238 1.238s1.238-0.555 1.238-1.238v-5.802h5.952c0.684 0 1.238-0.554 1.238-1.238s-0.554-1.238-1.238-1.238h-5.951c-1.366-0.001-2.478 1.111-2.478 2.476zM32 11.35v-5.801c0-1.365-1.11-2.478-2.478-2.478h-5.951c-0.686 0-1.239 0.554-1.239 1.238s0.554 1.238 1.239 1.238h5.951v5.801c0 0.683 0.554 1.237 1.238 1.237 0.686 0.002 1.239-0.553 1.239-1.236z"],
                    right: ["0 0 32 32", "M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z"],
                    pallette: ["0 0 32 32", "M19.357 2.88c1.749 0 3.366 0.316 4.851 0.946 1.485 0.632 2.768 1.474 3.845 2.533s1.922 2.279 2.532 3.661c0.611 1.383 0.915 2.829 0.915 4.334 0 1.425-0.304 2.847-0.915 4.271-0.611 1.425-1.587 2.767-2.928 4.028-0.855 0.813-1.811 1.607-2.869 2.38s-2.136 1.465-3.233 2.075c-1.099 0.61-2.198 1.098-3.296 1.465-1.098 0.366-2.115 0.549-3.051 0.549-1.343 0-2.441-0.438-3.296-1.311-0.854-0.876-1.281-2.41-1.281-4.608 0-0.366 0.020-0.773 0.060-1.221s0.062-0.895 0.062-1.343c0-0.773-0.183-1.353-0.55-1.738-0.366-0.387-0.793-0.58-1.281-0.58-0.652 0-1.21 0.295-1.678 0.886s-0.926 1.23-1.373 1.921c-0.447 0.693-0.905 1.334-1.372 1.923s-1.028 0.886-1.679 0.886c-0.529 0-1.048-0.427-1.556-1.282s-0.763-2.259-0.763-4.212c0-2.197 0.529-4.241 1.587-6.133s2.462-3.529 4.21-4.912c1.75-1.383 3.762-2.471 6.041-3.264 2.277-0.796 4.617-1.212 7.018-1.253zM7.334 15.817c0.569 0 1.047-0.204 1.434-0.611s0.579-0.875 0.579-1.404c0-0.569-0.193-1.047-0.579-1.434s-0.864-0.579-1.434-0.579c-0.529 0-0.987 0.193-1.373 0.579s-0.58 0.864-0.58 1.434c0 0.53 0.194 0.998 0.58 1.404 0.388 0.407 0.845 0.611 1.373 0.611zM12.216 11.79c0.691 0 1.292-0.254 1.8-0.763s0.762-1.107 0.762-1.8c0-0.732-0.255-1.343-0.762-1.831-0.509-0.489-1.109-0.732-1.8-0.732-0.732 0-1.342 0.244-1.831 0.732-0.488 0.488-0.732 1.098-0.732 1.831 0 0.693 0.244 1.292 0.732 1.8s1.099 0.763 1.831 0.763zM16.366 25.947c0.692 0 1.282-0.214 1.77-0.64s0.732-0.987 0.732-1.678-0.244-1.261-0.732-1.709c-0.489-0.448-1.078-0.671-1.77-0.671-0.65 0-1.21 0.223-1.678 0.671s-0.702 1.018-0.702 1.709c0 0.692 0.234 1.25 0.702 1.678s1.027 0.64 1.678 0.64zM19.113 9.592c0.651 0 1.129-0.203 1.433-0.611 0.305-0.406 0.459-0.874 0.459-1.404 0-0.488-0.154-0.947-0.459-1.373-0.304-0.427-0.782-0.641-1.433-0.641-0.529 0-1.008 0.193-1.434 0.58s-0.64 0.865-0.64 1.434c0 0.571 0.213 1.049 0.64 1.434 0.427 0.389 0.905 0.581 1.434 0.581zM24.848 12.826c0.57 0 1.067-0.213 1.495-0.64 0.427-0.427 0.64-0.947 0.64-1.556 0-0.57-0.214-1.068-0.64-1.495-0.428-0.427-0.927-0.64-1.495-0.64-0.611 0-1.129 0.213-1.555 0.64-0.428 0.427-0.642 0.926-0.642 1.495 0 0.611 0.213 1.129 0.642 1.556s0.947 0.64 1.555 0.64z"],
                    camera: ["0 0 32 32", "M16 23c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zM16 13c-2.206 0-4 1.794-4 4s1.794 4 4 4c2.206 0 4-1.794 4-4s-1.794-4-4-4zM27 28h-22c-1.654 0-3-1.346-3-3v-16c0-1.654 1.346-3 3-3h3c0.552 0 1 0.448 1 1s-0.448 1-1 1h-3c-0.551 0-1 0.449-1 1v16c0 0.552 0.449 1 1 1h22c0.552 0 1-0.448 1-1v-16c0-0.551-0.448-1-1-1h-11c-0.552 0-1-0.448-1-1s0.448-1 1-1h11c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3zM24 10.5c0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5c0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5zM15 4c0 0.552-0.448 1-1 1h-4c-0.552 0-1-0.448-1-1v0c0-0.552 0.448-1 1-1h4c0.552 0 1 0.448 1 1v0z"]
                },
                iconsColor: "#ffffff",
                contextmenu: [],
                mutex: !0
            };
            for (var n in t) t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]);
            return e.video && !e.video.type && (e.video.type = "auto"), e.danmaku && !e.danmaku.user && (e.danmaku.user = "CgUser"), e.subtitle && (!e.subtitle.type && (e.subtitle.type = "webvtt"), !e.subtitle.fontSize && (e.subtitle.fontSize = "20px"), !e.subtitle.bottom && (e.subtitle.bottom = "40px"), !e.subtitle.color && (e.subtitle.color = "#fff")), e.video.quality && (e.video.url = [e.video.quality[e.video.defaultQuality].url]), e.lang && (e.lang = e.lang.toLowerCase()), e.icons && (e.icons = Object.assign({}, t.icons, e.icons)), e.contextmenu = e.contextmenu.concat([{text: "&#67;&#103;&#80;&#108;&#97;&#121;&#101;&#114;",link: "&#104;&#116;&#116;&#112;&#58;&#47;&#47;&#99;&#111;&#111;&#108;&#119;&#112;&#46;&#99;&#111;&#109;&#47;&#99;&#103;&#112;&#108;&#97;&#121;&#101;&#114;&#46;&#104;&#116;&#109;&#108;" }]), e
        }
    }, function(e, t, n) {
        "use strict";
        var i = function(e, t, n, i, a) {
            var s = new XMLHttpRequest;
            s.onreadystatechange = function() {
                if (4 === s.readyState) {
                    if (s.status >= 200 && s.status < 300 || 304 === s.status) {
                        var e = JSON.parse(s.responseText);
                        return 1 !== e.code ? i(s, e) : n(s, e)
                    }
                    a(s)
                }
            }, s.open(null !== t ? "POST" : "GET", e, !0), s.send(null !== t ? JSON.stringify(t) : null)
        };
        e.exports = {
            send: function(e, t, n) {
/*                i(e, t, function(e, t) {
                    n && n()
                }, function(e, t) {
                    alert(t.msg)
                })*/
            },
            read: function(e, t) {
                i(e, null, function(e, n) {
                    t(null, n.danmaku)
                }, function(e, n) {
                    t({
                        status: e.status,
                        response: n
                    })
                }, function(e) {
                    t({
                        status: e.status,
                        response: null
                    })
                })
            }
        }
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            var t = this;
            this.lang = e, this.tran = function(e) {
                return i[t.lang] && i[t.lang][e] ? i[t.lang][e] : e
            }
        };
        var i = {
            "zh-cn": {
                "Danmaku is loading": "\u5f39\u5e55\u52a0\u8f7d\u4e2d",
                Normal: "\u6b63\u5e38",
                "This video fails to load": "\u89c6\u9891\u52a0\u8f7d\u5931\u8d25",
                "Switching to": "\u6b63\u5728\u5207\u6362\u81f3",
                "Switched to": "\u5df2\u7ecf\u5207\u6362\u81f3",
                quality: "\u753b\u8d28",
                FF: "\u5feb\u8fdb",
                REW: "\u5feb\u9000",
                "Full screen": "\u5168\u5c4f",
                "Web full screen": "\u9875\u9762\u5168\u5c4f",
                Screenshot: "\u622a\u56fe",
                s: "\u79d2",
                Volume: "\u97f3\u91cf"
            },
            "zh-tw": {
                "Danmaku is loading": "\u5f48\u5e55\u52a0\u8f09\u4e2d",
                Normal: "\u6b63\u5e38",
                "This video fails to load": "\u8996\u983b\u52a0\u8f09\u5931\u6557",
                "Switching to": "\u6b63\u5728\u5207\u63db\u81f3",
                "Switched to": "\u5df2\u7d93\u5207\u63db\u81f3",
                quality: "\u756b\u8cea",
                FF: "\u5feb\u9032",
                REW: "\u5feb\u9000",
                "Full screen": "\u5168\u5c4f",
                "Web full screen": "\u9801\u9762\u5168\u5c4f",
                Screenshot: "\u622a\u5716",
                s: "\u79d2",
                Volume: "\u97f3\u91cf"
            }
        }
    }, function(e, t, n) {
        "use strict";
        var i = {
            main: function(e, t, n, a) {
                return '<div class="cgplayer-mask"></div><div class="cgplayer-video-wrap">' + i.video(!0, e.video.pic, e.screenshot, e.preload, e.video.url, e.subtitle) + (e.logo ? '<div class="cgplayer-logo"><img src="' + e.logo + '"></div>' : "") + '<div class="cgplayer-danmaku" style="' + (e.danmaku ? i.danmakumargin(e.danmaku.margin) : "") + '"><div class="cgplayer-danmaku-item cgplayer-danmaku-item--aboutcg"></div></div><div class="cgplayer-subtitle"></div><div class="cgplayer-bezel"><span class="cgplayer-bezel-icon"></span>' + (e.danmaku ? '<span class="cgplayer-danloading">' + n("Danmaku is loading") + "</span>" : "") + '<span class="diplayer-loading-icon"><svg height="100%" version="1.1" viewBox="0 0 22 22" width="100%">'+'<svg x="7" y="1"><circle class="diplayer-loading-dot diplayer-loading-dot-0" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-1" cx="4" cy="4" r="2"></circle></svg><svg x="13" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-2" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-3" cx="4" cy="4" r="2"></circle></svg><svg x="7" y="13"><circle class="diplayer-loading-dot diplayer-loading-dot-4" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-5" cx="4" cy="4" r="2"></circle></svg><svg x="1" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-6" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-7" cx="4" cy="4" r="2"></circle></svg></svg>'+'</span></div></div><div class="cgplayer-controller-mask"></div><div class="cgplayer-controller">'+'<div class="cgplayer-icons cgplayer-icons-left"><button class="cgplayer-icon cgplayer-play-icon"><span class="cgplayer-icon-content">' + a.get("play") + '</span></button><div class="cgplayer-volume"><button class="cgplayer-icon cgplayer-volume-icon"><span class="cgplayer-icon-content">' + a.get("volume-down") + '</span></button><div class="cgplayer-volume-bar-wrap" data-balloon-pos="up"><div class="cgplayer-volume-bar"><div class="cgplayer-volume-bar-inner" style="background: ' + e.theme + ';"><span class="cgplayer-thumb" style="background: ' + e.theme + '"></span></div></div></div></div><span class="cgplayer-time"><span class="cgplayer-ptime">0:00</span> / <span class="cgplayer-dtime">0:00</span></span></div><div class="cgplayer-icons cgplayer-icons-right">' + (e.video.quality ? '<div class="cgplayer-quality"><button class="cgplayer-icon cgplayer-quality-icon">' + e.video.quality[e.video.defaultQuality].name + '</button><div class="cgplayer-quality-mask">' + i.qualityList(e.video.quality) + "</div></div>" : "") + (e.screenshot ? '<a href="#" class="cgplayer-icon cgplayer-camera-icon" data-balloon="' + n("Screenshot") + '" data-balloon-pos="up"><span class="cgplayer-icon-content">' + a.get("camera") + "</span></a>" : "") + (e.subtitle ? '<div class="cgplayer-subtitle-btn"><button class="cgplayer-icon cgplayer-subtitle-icon" data-balloon="' + n("Hide subtitle") + '" data-balloon-pos="up"><span class="cgplayer-icon-content">' + a.get("subtitle") + "</span></button></div>" : "") +'<div class="cgplayer-full"><button class="cgplayer-icon cgplayer-full-in-icon" data-balloon="' + n("Web full screen") + '" data-balloon-pos="up"><span class="cgplayer-icon-content">' + a.get("full-in") + '</span></button><button class="cgplayer-icon cgplayer-full-icon" data-balloon="' + n("Full screen") + '" data-balloon-pos="up"><span class="cgplayer-icon-content">' + a.get("full") + '</span></button></div></div><div class="cgplayer-bar-wrap"><div class="cgplayer-bar-time hidden">00:00</div><div class="cgplayer-bar-preview"></div><div class="cgplayer-bar"><div class="cgplayer-loaded" style="width: 0;"></div><div class="cgplayer-played" style="width: 0; background: ' + e.theme + '"><span class="cgplayer-thumb" style="background: ' + e.theme + '"></span></div></div></div></div>' + i.contextmenuList(e.contextmenu, n) + '<div class="cgplayer-notice"></div>'
            },
            danmakumargin: function(e) {
                var t = "";
                if (e)
                    for (var n in e) t += n + ":" + e[n] + ";";
                return t
            },
            contextmenuList: function(e, t) {
                for (var n = '<div class="cgplayer-menu">', i = 0; i < e.length; i++) n += '<div class="cgplayer-menu-item"><a target="_blank" href="' + e[i].link + '">' + t(e[i].text) + "</a></div>";
                return n += "</div>"
            },
            qualityList: function(e) {
                for (var t = '<div class="cgplayer-quality-list">', n = 0; n < e.length; n++) t += '<div class="cgplayer-quality-item" data-index="' + n + '">' + e[n].name + "</div>";
                return t += "</div>"
            },
            video: function(e, t, n, i, a, s) {
                var o = s && "webvtt" === s.type;
                return '<video class="cgplayer-video ' + (e ? 'cgplayer-video-current"' : "") + '" ' + (t ? 'poster="' + t + '"' : "") + " webkit-playsinline playsinline " + (n || o ? 'crossorigin="anonymous"' : "") + " " + (i ? 'preload="' + i + '"' : "") + ' src="' + a + '">' + (o ? '<track kind="metadata" default src="' + s.url + '"></track>' : "") + "</video>"
            },
            setting: function(e, t) {
                return {
                    original: '',
                    speed: ''
                }
            }
        };
        e.exports = i
    }, function(e, t, n) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var a = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            s = function() {
                function e(t) {
                    i(this, e), this.icons = t.icons, this.iconColor = t.iconsColor
                }
                return a(e, [{
                    key: "get",
                    value: function(e) {
                        return '<svg xmlns="http://www.w3.org/2000/svg" width="' + (this.icons[e][2] || "100%") + '" height="' + (this.icons[e][2] || "100%") + '" version="1.1" viewBox="' + this.icons[e][0] + '"><path class="cgplayer-fill" style="fill:' + this.iconColor + '" d="' + this.icons[e][1] + '" id="cgplayer-' + e + '"></path></svg>'
                    }
                }]), e
            }();
        e.exports = s
    }, function(e, t, n) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            s = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            o = function() {
                function e(t) {
                    i(this, e), this.options = t, this.container = this.options.container, this.danTunnel = {
                        right: {},
                        top: {},
                        bottom: {}
                    }, this.danIndex = 0, this.dan = [], this.showing = !0, this._opacity = this.options.opacity, this.events = this.options.events, this.unlimited = this.options.unlimited, this._measure(""), this.load()
                }
                return s(e, [{
                    key: "load",
                    value: function() {
                        var e = this,
                            t = void 0;
                            if('data'!=this.options.api.id){
                                t = this.options.api.maximum ? this.options.api.address + "?id=" + this.options.api.id + "&max=" + this.options.api.maximum : this.options.api.address + "?id=" + this.options.api.id;

                                var n = (this.options.api.addition || []).slice(0);
                                    n.push(t);

                              this.events && this.events.trigger("danmaku_load_start", n), this._readAllEndpoints(n, function(t) {


                                    e.dan = [].concat.apply([], t).sort(function(e, t) {
                                        return e.time - t.time
                                    }), window.requestAnimationFrame(function() {
                                        e.frame()
                                    }), e.options.callback(), e.events && e.events.trigger("danmaku_load_end")
                                })
                            }else{

                             var dItem ={},dStr=this.options.api.dmData,dColor=this.options.api.dmColor,dItems = [],durationInSec = this.options.duration*60||3600;
                                if(!dStr){
                                    console.error('Error:601');
                                }
                                for(;durationInSec>0;durationInSec=durationInSec-6){
                                    dItem ={};
                                    dItem._id = 'dm_'+durationInSec;
                                    dItem.text = dStr;
                                    dItem.color = dColor;
                                   dItem.time = parseFloat(durationInSec,10);
                                    dItems.push(dItem);
                                }
                              this.events && this.events.trigger("danmaku_load_start", null), this._readAllEndpoints( null, function(t) {
                                    e.dan = [].concat.apply([], t).sort(function(e, t) {
                                        return e.time - t.time
                                    }), window.requestAnimationFrame(function() {
                                        e.frame()
                                    }), e.options.callback(), e.events && e.events.trigger("danmaku_load_end")
                                },dItems)
                            }
                    }
                }, {
                    key: "reload",
                    value: function(e) {
                        this.options.api = e, this.dan = [], this.clear(), this.load()
                    }
                }, {
                    key: "_readAllEndpoints",
                    /*第三方是数据*/
                    value: function(e, t,d) {

                        if(!d){
                            /*获取数据*/
                            for (var n = this, i = [], a = 0, s = 0; s < e.length; ++s) {
                                        this.options.apiBackend.read(e[s], function(s) {
                                        return function(o, l) {
                                            if (++a, o ? (o.response ? n.options.error(o.response.msg) : n.options.error("Request was unsuccessful: " + o.status), i[s] = []) : i[s] = l, a === e.length) return t(i)
                                        }
                                    }(s))
                            }
                        }else{
                                return setTimeout(function(d,t){
                                        return t(d)
                                }, 60, d,t);
                        }
                    }
                }, {
                    key: "send",
                    value: function(e, t) {
    /*                    var n = {
                            token: this.options.api.token,
                            player: this.options.api.id,
                            author: this.options.api.user,
                            time: this.options.time(),
                            text: e.text,
                            color: e.color,
                            margin:'100px',
                            type: e.type
                        };
                        this.options.apiBackend.send(this.options.api.address, n, t), this.dan.splice(this.danIndex, 0, n), this.danIndex++;
                        var i = {
                            text: this.htmlEncode(n.text),
                            color: n.color,
                            type: n.type,
                            margin: n.margin,
                            border: "2px solid " + this.options.borderColor
                        };
                        this.draw(i), this.events && this.events.trigger("danmaku_send", n)*/
                    }
                }, {
                    key: "frame",
                    value: function() {
                        var e = this;
                        if (this.dan.length && !this.paused && this.showing) {
                            for (var t = this.dan[this.danIndex], n = []; t && this.options.time() > parseFloat(t.time);) n.push(t), t = this.dan[++this.danIndex];
                            this.draw(n)
                        }
                        window.requestAnimationFrame(function() {
                            e.frame()
                        })
                    }
                }, {
                    key: "opacity",
                    value: function(e) {
                        if (void 0 !== e) {
                            for (var t = this.container.getElementsByClassName("cgplayer-danmaku-item"), n = 0; n < t.length; n++) t[n].style.opacity = e;
                            this._opacity = e, this.events && this.events.trigger("danmaku_opacity", this._opacity)
                        }
                        return this._opacity
                    }
                }, {
                    key: "draw",
                    value: function(e) {
                        var t = this,
                            n = this.options.height,
                            i = this.container.offsetWidth,
                            s = this.container.offsetHeight,
                            o = parseInt(s / n),
                            l = function(e) {
                                var n = e.offsetWidth || parseInt(e.style.width),
                                    i = e.getBoundingClientRect().right || t.container.getBoundingClientRect().right + n;
                                return t.container.getBoundingClientRect().right - i
                            },
                            r = function(e) {
                                return (i + e) / 5
                            },
                            d = function(e, n, s) {
                                for (var d = i / r(s), c = 0; t.unlimited || c < o; c++) {
                                    var u = function(a) {
                                        var s = t.danTunnel[n][a + ""];
                                        if (!s || !s.length) return t.danTunnel[n][a + ""] = [e], e.addEventListener("animationend", function() {
                                            t.danTunnel[n][a + ""].splice(0, 1)
                                        }), {
                                            v: a % o
                                        };
                                        if ("right" !== n) return "continue";
                                        for (var c = 0; c < s.length; c++) {
                                            var u = l(s[c]) - 10;
                                            if (u <= i - d * r(parseInt(s[c].style.width)) || u <= 0) break;
                                            if (c === s.length - 1) return t.danTunnel[n][a + ""].push(e), e.addEventListener("animationend", function() {
                                                t.danTunnel[n][a + ""].splice(0, 1)
                                            }), {
                                                v: a % o
                                            }
                                        }
                                    }(c);
                                    switch (u) {
                                        case "continue":
                                            continue;
                                        default:
                                            if ("object" === (void 0 === u ? "undefined" : a(u))) return u.v
                                    }
                                }
                                return -1
                            };
                        "[object Array]" !== Object.prototype.toString.call(e) && (e = [e]);
                        var yRandom = s/2;
                        for (var c = document.createDocumentFragment(), u = 0; u < e.length; u++) ! function(a) {
                           yRandom  = Math.floor(Math.random() * yRandom);
                            e[a].type || (e[a].type = "right"), e[a].color || (e[a].color = "#fff");
                            var s = document.createElement("div");
                            s.classList.add("cgplayer-danmaku-item"), s.classList.add("cgplayer-danmaku-" + e[a].type), e[a].border ? s.innerHTML = '<span style="border:' + e[a].border + '">' + e[a].text + "</span>" : s.innerHTML = e[a].text, s.style.opacity = t._opacity, s.style.color = e[a].color, s.addEventListener("animationend", function() {
                                t.container.removeChild(s)
                            });
                            var o = t._measure(e[a].text),
                                l = void 0;
                            switch (e[a].type) {
                                case "right":
                                    l = d(s, e[a].type, o), l >= 0 && (s.style.width = o + 1 + "px", s.style.top =  yRandom + "px", s.style.transform = "translateX(-" + i + "px)");
                                    break;
                                case "top":
                                    l = d(s, e[a].type), l >= 0 && (s.style.top = yRandom + "px");
                                    break;
                                case "bottom":
                                    l = d(s, e[a].type), l >= 0 && (s.style.bottom =yRandom+ "px");
                                    break;
                                default:
                                    console.error("Can't handled danmaku type: " + e[a].type)
                            }
                            l >= 0 && (s.classList.add("cgplayer-danmaku-move"), c.appendChild(s))
                        }(u);
                        return this.container.appendChild(c), c
                    }
                }, {
                    key: "play",
                    value: function() {
                        this.paused = !1
                    }
                }, {
                    key: "pause",
                    value: function() {
                        this.paused = !0
                    }
                }, {
                    key: "_measure",
                    value: function(e) {
                        if (!this.context) {
                            var t = getComputedStyle(this.container.getElementsByClassName("cgplayer-danmaku-item")[0], null);
                            this.context = document.createElement("canvas").getContext("2d"), this.context.font = t.getPropertyValue("font")
                        }
                        return this.context.measureText(e).width
                    }
                }, {
                    key: "seek",
                    value: function() {
                        this.clear();
                        for (var e = 0; e < this.dan.length; e++) {
                            if (this.dan[e].time >= this.options.time()) {
                                this.danIndex = e;
                                break
                            }
                            this.danIndex = this.dan.length
                        }
                    }
                }, {
                    key: "clear",
                    value: function() {
                        this.danTunnel = {
                            right: {},
                            top: {},
                            bottom: {}
                        }, this.danIndex = 0, this.options.container.innerHTML = "", this.events && this.events.trigger("danmaku_clear")
                    }
                }, {
                    key: "htmlEncode",
                    value: function(e) {
                        return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2f;")
                    }
                }, {
                    key: "resize",
                    value: function() {
                        for (var e = this.container.offsetWidth, t = this.container.getElementsByClassName("cgplayer-danmaku-item"), n = 0; n < t.length; n++) t[n].style.transform = "translateX(-" + e + "px)"
                    }
                }, {
                    key: "hide",
                    value: function() {
                        /*this.showing = !1, this.pause(), this.clear(), this.events && this.events.trigger("danmaku_hide")*/
                    }
                }, {
                    key: "show",
                    value: function() {
                        this.seek(), this.showing = !0, this.play(), this.events && this.events.trigger("danmaku_show")
                    }
                }, {
                    key: "unlimit",
                    value: function(e) {
                        this.unlimited = e
                    }
                }]), e
            }();
        e.exports = o
    }, function(e, t, n) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var a = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            s = function() {
                function e(t, n, a, s) {
                    i(this, e), this.container = t, this.width = n, this.container.style.backgroundImage = "url('" + a + "')", this.events = s
                }
                return a(e, [{
                    key: "resize",
                    value: function(e, t) {
                        this.container.style.width = e + "px", this.container.style.height = t + "px", this.container.style.top = 2 - t + "px"
                    }
                }, {
                    key: "show",
                    value: function() {
                        this.container.style.display = "block", this.events && this.events.trigger("thumbnails_show")
                    }
                }, {
                    key: "move",
                    value: function(e) {
                        this.container.style.backgroundPosition = "-" + 160 * (Math.ceil(e / this.width * 100) - 1) + "px 0", this.container.style.left = e - this.container.offsetWidth / 2 + "px"
                    }
                }, {
                    key: "hide",
                    value: function() {
                        this.container.style.display = "none", this.events && this.events.trigger("thumbnails_hide")
                    }
                }]), e
            }();
        e.exports = s
    }, function(e, t, n) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var a = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            s = function() {
                function e() {
                    i(this, e), this.events = {}, this.videoEvents = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "mozaudioavailable", "pause", "play", "playing", "progress", "ratechange", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], this.playerEvents = ["screenshot", "thumbnails_show", "thumbnails_hide", "danmaku_clear", "danmaku_loaded",  "danmaku_opacity", "contextmenu_show", "contextmenu_hide", "notice_show", "notice_hide", "quality_start", "quality_end", "destroy", "resize", "fullscreen", "fullscreen_cancel", "webfullscreen", "webfullscreen_cancel", "subtitle_show", "subtitle_hide", "subtitle_change"]
                }
                return a(e, [{
                    key: "on",
                    value: function(e, t) {
                        this.type(e) && "function" == typeof t && (this.events[e] || (this.events[e] = []), this.events[e].push(t))
                    }
                }, {
                    key: "trigger",
                    value: function(e, t) {
                        if (this.events[e] && this.events[e].length)
                            for (var n = 0; n < this.events[e].length; n++) this.events[e][n](t)
                    }
                }, {
                    key: "type",
                    value: function(e) {
                        return -1 !== this.playerEvents.indexOf(e) ? "player" : -1 !== this.videoEvents.indexOf(e) ? "video" : (console.error("Unknown event name: " + e), null)
                    }
                }]), e
            }();
        e.exports = s
    }, function(e, t, n) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var a = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            s = n(0),
            o = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(s),
            l = function() {
                function e(t) {
                    var n = this;
                    i(this, e), this.player = t, this.player.events.on("webfullscreen", function() {
                        n.player.resize()
                    }), this.player.events.on("webfullscreen_cancel", function() {
                        n.player.resize()
                    });
                    var a = function() {
                        n.player.resize(), n.isFullScreen("browser") ? n.player.events.trigger("fullscreen") : n.player.events.trigger("fullscreen_cancel")
                    };
                    this.player.container.addEventListener("fullscreenchange", a), this.player.container.addEventListener("mozfullscreenchange", a), this.player.container.addEventListener("webkitfullscreenchange", a)
                }
                return a(e, [{
                    key: "isFullScreen",
                    value: function() {
                        switch (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "browser") {
                            case "browser":
                                return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
                            case "web":
                                return this.player.container.classList.contains("cgplayer-fulled")
                        }
                    }
                }, {
                    key: "request",
                    value: function() {
                        switch (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "browser") {
                            case "browser":
                                this.player.container.requestFullscreen ? this.player.container.requestFullscreen() : this.player.container.mozRequestFullScreen ? this.player.container.mozRequestFullScreen() : this.player.container.webkitRequestFullscreen ? this.player.container.webkitRequestFullscreen() : this.player.video.webkitEnterFullscreen && this.player.video.webkitEnterFullscreen();
                                break;
                            case "web":
                                this.player.container.classList.add("cgplayer-fulled"), this.lastScrollPosition = o.default.getScrollPosition(), document.body.classList.add("cgplayer-web-fullscreen-fix"), this.player.events.trigger("webfullscreen")
                        }
                    }
                }, {
                    key: "cancel",
                    value: function() {
                        switch (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "browser") {
                            case "browser":
                                document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen();
                                break;
                            case "web":
                                this.player.container.classList.remove("cgplayer-fulled"), document.body.classList.remove("cgplayer-web-fullscreen-fix"), o.default.setScrollPosition(this.lastScrollPosition), this.player.events.trigger("webfullscreen_cancel")
                        }
                    }
                }, {
                    key: "toggle",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "browser";
                        this.isFullScreen(e) ? this.cancel(e) : this.request(e)
                    }
                }]), e
            }();
        e.exports = l
    }, function(e, t, n) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var a = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            s = n(0),
            o = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(s),
            l = function() {
                function e(t) {
                    i(this, e), this.storageName = {
                        opacity: "cgplayer-danmaku-opacity",
                        volume: "cgplayer-volume",
                        unlimited: "cgplayer-danmaku-unlimited",
                        danmaku: "cgplayer-danmaku-show",
                        subtitle: "cgplayer-subtitle-show"
                    }, this.default = {
                        opacity: .7,
                        volume: t.options.volume || .7,
                        unlimited: (t.options.danmaku && t.options.danmaku.unlimited ? 1 : 0) || 0,
                        danmaku: 1,
                        subtitle: 1
                    }, this.data = {}, this.init()
                }
                return a(e, [{
                    key: "init",
                    value: function() {
                        for (var e in this.storageName) {
                            var t = this.storageName[e];
                            this.data[e] = parseFloat(o.default.storage.get(t) || this.default[e])
                        }
                    }
                }, {
                    key: "get",
                    value: function(e) {
                        return this.data[e]
                    }
                }, {
                    key: "set",
                    value: function(e, t) {
                        this.data[e] = t, o.default.storage.set(this.storageName[e], t)
                    }
                }]), e
            }();
        e.exports = l
    }, function(e, t, n) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var a = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            s = function() {
                function e(t, n, a, s) {
                    i(this, e), this.container = t, this.video = n, this.options = a, this.events = s, this.init()
                }
                return a(e, [{
                    key: "init",
                    value: function() {
                        var e = this;
                        if (this.container.style.fontSize = this.options.fontSize, this.container.style.bottom = this.options.bottom, this.container.style.color = this.options.color, this.video.textTracks && this.video.textTracks[0]) {
                            var t = this.video.textTracks[0];
                            t.oncuechange = function() {
                                var n = t.activeCues[0];
                                if (n) {
                                    e.container.innerHTML = "";
                                    var i = document.createElement("p");
                                    i.appendChild(n.getCueAsHTML()), e.container.appendChild(i)
                                } else e.container.innerHTML = "";
                                e.events.trigger("subtitle_change")
                            }
                        }
                    }
                }, {
                    key: "show",
                    value: function() {
                        this.container.classList.remove("cgplayer-subtitle-hide"), this.events.trigger("subtitle_show")
                    }
                }, {
                    key: "hide",
                    value: function() {
                        this.container.classList.add("cgplayer-subtitle-hide"), this.events.trigger("subtitle_hide")
                    }
                }, {
                    key: "toggle",
                    value: function() {
                        this.container.classList.contains("cgplayer-subtitle-hide") ? this.show() : this.hide()
                    }
                }]), e
            }();
        e.exports = s
    }])
});