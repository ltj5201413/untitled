function $id(a) {
    return "string" == typeof a ? document.getElementById(a) : a
}
function $namespace(str) {
    for (var arr = str.split(","), i = 0, len = arr.length; len > i; i++)
        for (var arrJ = arr[i].split("."), parent = {}, j = 0, jLen = arrJ.length; jLen > j; j++) {
            var name = arrJ[j]
              , child = parent[name];
            0 === j ? eval("(typeof " + name + ')==="undefined"?(' + name + '={}):"";parent=' + name) : parent = parent[name] = "undefined" == typeof child ? {} : child
        }
}
function $loadScript(a) {
    var b = "object" == typeof a
      , c = b ? a.url : arguments[0]
      , d = b ? a.id : arguments[1]
      , a = b ? a : arguments[2];
    $loadScript.counter || ($loadScript.counter = 1),
    setTimeout(function() {
        function b(a) {
            if (f && !i) {
                if (i = !0,
                "loaded" !== f.jsonpLoadState && "function" == typeof z && z(a),
                x)
                    if (-1 == x.indexOf(".")) {
                        window[x] = null ;
                        try {
                            delete window[x]
                        } catch (b) {}
                    } else
                        for (var c = x.split("."), d = {}, e = 0, g = c.length; g > e; e++) {
                            var h = c[e];
                            if (0 === e)
                                d = window[h];
                            else if (e === g - 1)
                                try {
                                    delete d[h]
                                } catch (b) {}
                            else
                                d = d[h]
                        }
                j && clearTimeout(j),
                f.clearAttributes ? f.clearAttributes() : f.onload = f.onreadystatechange = f.onerror = null ;
                try {
                    f.parentNode.removeChild(f)
                } catch (b) {}
                f = null
            }
        }
        function e(a) {
            var b = [];
            for (var c in a)
                b.push(c + "=" + a[c]);
            return b.join("&")
        }
        var f = document.createElement("script")
          , g = new Date
          , h = g.getTime()
          , i = !1
          , j = null
          , k = a || {}
          , l = k.data || ""
          , m = k.charset || "gb2312"
          , n = k.isToken
          , o = k.timeout
          , p = k.isAutoReport || !1
          , q = k.reportOptions || {}
          , r = k.reportType || "current"
          , s = k.reportRetCodeName
          , t = "undefined" == typeof k.reportSuccessCode ? 200 : k.reportSuccessCode
          , u = "undefined" == typeof k.reportErrorCode ? 500 : k.reportErrorCode
          , v = "undefined" == typeof k.reportTimeoutCode ? 600 : k.reportTimeoutCode
          , w = k.onload
          , x = k.callbackName || ""
          , y = k.callback
          , z = k.errorback;
        if (o && (j = setTimeout(function() {
            b(v)
        }, parseInt(o, 10))),
        p && q && ("cross" == r || (q.url = q.url || c.substr(0, -1 == c.indexOf("?") ? c.length : c.indexOf("?")))),
        x && "function" == typeof y) {
            var A = x;
            if (-1 == x.indexOf("."))
                x = window[x] ? x + $loadScript.counter++ : x,
                window[x] = function(a) {
                    f.jsonpLoadState = "loaded",
                    p && s && (t = a[s]),
                    y(a)
                }
                ;
            else {
                for (var B = x.split("."), C = {}, D = [], E = 0, F = B.length; F > E; E++) {
                    var G = B[E];
                    0 === E ? C = window[G] : E === F - 1 ? (C[G] ? G += $loadScript.counter++ : "",
                    C[G] = function(a) {
                        f.jsonpLoadState = "loaded",
                        p && s && (t = a[s]),
                        y(a)
                    }
                    ) : C = C[G],
                    D.push(G)
                }
                x = D.join(".")
            }
            c = c.replace("=" + A, "=" + x)
        }
        l && (c += (-1 != c.indexOf("?") ? "&" : "?") + ("string" == typeof l ? l : e(l))),
        d = d ? d + h : h,
        c = n !== !1 ? $addToken(c, "ls") : c,
        f.charset = m,
        f.id = d,
        f.jsonpLoadState = "loading",
        f.onload = f.onreadystatechange = function() {
            var a = navigator.userAgent.toLowerCase();
            (-1 != a.indexOf("opera") || -1 == a.indexOf("msie") || /loaded|complete/i.test(this.readyState)) && ("function" == typeof w && w(),
            b("loaded" === f.jsonpLoadState ? t : u))
        }
        ,
        f.onerror = function() {
            b(u)
        }
        ,
        f.src = c,
        document.getElementsByTagName("head")[0].appendChild(f)
    }, 0)
}
function $getPageScrollHeight() {
    var a = top.document.body
      , b = "BackCompat" == document.compatMode ? a : top.document.documentElement
      , c = navigator.userAgent.toLowerCase();
    return window.MessageEvent && -1 == c.indexOf("firefox") && -1 == c.indexOf("opera") ? a.scrollTop : b.scrollTop
}
function $getPageScrollWidth() {
    var a = top.document.body
      , b = "BackCompat" == document.compatMode ? a : top.document.documentElement;
    return window.MessageEvent && -1 == navigator.userAgent.toLowerCase().indexOf("firefox") ? a.scrollLeft : b.scrollLeft
}
function $getWindowHeight() {
    var a = top.document.body;
    return ("BackCompat" == document.compatMode ? a : top.document.documentElement).clientHeight
}
function $getWindowWidth() {
    var a = top.document.body;
    return ("BackCompat" == document.compatMode ? a : top.document.documentElement).clientWidth
}
function $getContentHeight() {
    var a = top.document.body
      , b = "BackCompat" == document.compatMode ? a : top.document.documentElement;
    return window.MessageEvent && -1 == navigator.userAgent.toLowerCase().indexOf("firefox") ? a.scrollHeight : b.scrollHeight
}
function $getContentWidth() {
    var a = top.document.body
      , b = "BackCompat" == document.compatMode ? a : top.document.documentElement;
    return window.MessageEvent && -1 == navigator.userAgent.toLowerCase().indexOf("firefox") ? a.scrollWidth : b.scrollWidth
}
function $getQuery(a) {
    var b = arguments[1] || window.location.search
      , c = new RegExp("(^|&)" + a + "=([^&]*)(&|$)")
      , d = b.substr(b.indexOf("?") + 1).match(c);
    return null != d ? d[2] : ""
}
function $getScrollPosition() {
    var a = top.document.documentElement.scrollLeft || top.document.body.scrollLeft || top.window.pageXOffset
      , b = top.document.documentElement.scrollTop || top.document.body.scrollTop || top.window.pageYOffset;
    return [a ? a : 0, b ? b : 0]
}
function $getMousePosition(a) {
    var a = window.event ? window.event : a.evt
      , b = [];
    return "undefined" != typeof a.pageX ? b = [a.pageX, a.pageY] : "undefined" != typeof a.clientX && (b = [a.clientX + $getScrollPosition()[0], a.clientY + $getScrollPosition()[1]]),
    b
}
function $initDragItem(a) {
    var b = {
        barDom: "",
        targetDom: ""
    };
    for (var c in a)
        b[c] = a[c];
    window._dragOption ? "" : window._dragOption = {},
    b.barDom.style.cursor = "move",
    b.targetDom.style.position = "absolute",
    b.barDom.onmousedown = function(a) {
        var a = window.event || a;
        window._dragOption.barDom = this,
        window._dragOption.targetDom = b.targetDom;
        var c = [parseInt(b.targetDom.style.left) ? parseInt(b.targetDom.style.left) : 0, parseInt(b.targetDom.style.top) ? parseInt(b.targetDom.style.top) : 0];
        return window._dragOption.diffPostion = [$getMousePosition({
            evt: a
        })[0] - c[0], $getMousePosition({
            evt: a
        })[1] - c[1]],
        document.onselectstart = function() {
            return !1
        }
        ,
        window.onblur = window.onfocus = function() {
            document.onmouseup()
        }
        ,
        !1
    }
    ,
    b.targetDom.onmouseup = document.onmouseup = function() {
        window._dragOption.barDom && (window._dragOption = {},
        document.onselectstart = window.onblur = window.onfocus = null )
    }
    ,
    b.targetDom.onmousemove = document.onmousemove = function(a) {
        try {
            var a = window.event || a;
            window._dragOption.barDom && window._dragOption.targetDom && (window._dragOption.targetDom.style.left = $getMousePosition({
                evt: a
            })[0] - window._dragOption.diffPostion[0] + "px",
            window._dragOption.targetDom.style.top = $getMousePosition({
                evt: a
            })[1] - window._dragOption.diffPostion[1] + "px")
        } catch (a) {}
    }
}
function $setCookie(a, b, c, d, e, f) {
    var g = new Date
      , c = arguments[2] || null
      , d = arguments[3] || "/"
      , e = arguments[4] || null
      , f = arguments[5] || !1;
    c ? g.setMinutes(g.getMinutes() + parseInt(c)) : "";
    var h = escape(a) + "=" + escape(b) + (c ? "; expires=" + g.toGMTString() : "") + (d ? "; path=" + d : "") + (e ? "; domain=" + e : "") + (f ? "; secure" : "");
    document.cookie = h
}
function $isBrowser(a) {
    a = a.toLowerCase();
    var b = navigator.userAgent.toLowerCase()
      , c = [];
    return c.firefox = -1 != b.indexOf("firefox"),
    c.opera = -1 != b.indexOf("opera"),
    c.safari = -1 != b.indexOf("safari"),
    c.chrome = -1 != b.indexOf("chrome"),
    c.gecko = !c.opera && !c.safari && b.indexOf("gecko") > -1,
    c.ie = !c.opera && -1 != b.indexOf("msie"),
    c.ie6 = !c.opera && -1 != b.indexOf("msie 6"),
    c.ie7 = !c.opera && -1 != b.indexOf("msie 7"),
    c.ie8 = !c.opera && -1 != b.indexOf("msie 8"),
    c.ie9 = !c.opera && -1 != b.indexOf("msie 9"),
    c[a]
}
function $getCookie(a) {
    var b = new RegExp("(^| )" + a + "=([^;]*)(;|$)")
      , c = document.cookie.match(b);
    return c ? unescape(c[2]) : null
}
function $float(obj) {
    function closeFloat() {
        option.onClose(option) && (option.closeOther(),
        option.destruct())
    }
    function destructFloat() {
        this.cover ? window._PP_core_float_data.closeCover() : "",
        this.sizeTimer && clearInterval(this.sizeTimer),
        this.fixTimer && clearInterval(this.fixTimer),
        this.boxHandel ? document.body.removeChild(this.boxHandel) : "",
        this.boxHandel = null ;
        for (var a = 0; a < window._PP_core_float_data.list.length; a++)
            window._PP_core_float_data.list[a] && this.id == window._PP_core_float_data.list[a].id && (window._PP_core_float_data.list[a] = null )
    }
    function closeOther() {
        for (var a = 0; a < window._PP_core_float_data.list.length; a++)
            window._PP_core_float_data.list[a] && window._PP_core_float_data.list[a].leaver >= this.leaver && this.id != window._PP_core_float_data.list[a].id && window._PP_core_float_data.list[a].destruct()
    }
    function showBox() {
        this.cover ? window._PP_core_float_data.showCover() : "";
        var a = document.createElement("div");
        a.id = "floatBox_" + this.id,
        this.boxId = "floatBox_" + this.id,
        a.style.position = "absolute",
        "stand" == option.style && (a.className = option.cName,
        a.innerHTML = '<iframe frameBorder="0" style="position:absolute;left:0;top:0;z-index:-1;border:none;" id="float_iframe_' + this.id + '"></iframe><div class="box_title" style="background-color: #60b452;"><h4>' + this.title + '</h4><a href="javascript:;" style="display:' + (this.showClose ? "" : "none") + ';"  class="bt_close" id="float_closer_' + this.id + '"></a></div><div class="box_content">' + this.html + "</div>"),
        "" == option.style && (a.className = option.cName,
        a.innerHTML = '<iframe frameBorder="0" style="position:absolute;left:0;top:0;z-index:-1;border:none;" id="float_iframe_' + this.id + '"></iframe><div class="box_content">' + this.html + "</div>"),
        "none" == option.style && (a.className = "",
        a.innerHTML = '<iframe frameBorder="0" style="position:absolute;left:0;top:0;z-index:-1;border:none;" id="float_iframe_' + this.id + '"></iframe><div class="box_content">' + this.html + "</div>"),
        document.body.appendChild(a),
        this.boxHandel = document.getElementById("floatBox_" + this.id),
        this.boxIframeHandel = document.getElementById("float_iframe_" + this.id),
        this.boxTitleHandel = this.boxIframeHandel.nextSibling,
        this.boxCloseHandel = document.getElementById("float_closer_" + this.id),
        this.height ? this.boxHandel.style.height = "auto" == option.height ? option.height : option.height + "px" : "",
        this.width ? this.boxHandel.style.width = "auto" == option.width ? option.width : option.width + "px" : "",
        this.boxHandel.style.zIndex = window._PP_core_float_data.zIndex,
        this.sw = parseInt(this.boxHandel.offsetWidth),
        this.sh = parseInt(this.boxHandel.offsetHeight);
        var b = [0, 0];
        b[0] = parseInt(this.left ? this.left : $getPageScrollWidth() + ($getWindowWidth() - this.sw) / 2),
        b[1] = parseInt(this.top ? this.top : $getPageScrollHeight() + ($getWindowHeight() - this.sh) / 2),
        b[0] + this.sw > $getPageScrollWidth() - 200 + $getWindowWidth() ? b[0] = $getPageScrollWidth() - 200 + $getWindowWidth() - this.sw - 10 : "",
        b[1] + this.sh > $getPageScrollHeight() - 250 + $getWindowHeight() ? b[1] = $getPageScrollHeight() - 250 + $getWindowHeight() - this.sh - 10 : "",
        b[1] < $getPageScrollHeight() - 250 ? b[1] = $getPageScrollHeight() - 250 : "",
        b[0] < $getPageScrollWidth() - 200 ? b[0] = $getPageScrollWidth() - 200 : "",
        this.boxIframeHandel.height = this.sh - 2 + "px",
        this.boxIframeHandel.width = this.sw - 2 + "px",
        this.boxHandel.style.left = b[0] + "px",
        this.boxHandel.style.top = b[1] + "px";
        var c = this;
        if (this.boxCloseHandel ? this.boxCloseHandel.onclick = function() {
            return c.close(),
            !1
        }
        : "",
        this.closeId)
            for (var d = this.closeId.split(","), e = d.length; e--; )
                $id(d[e]).onclick = function() {
                    return c.close(),
                    !1
                }
                ;
        this.keepBoxFix(),
        !this.onInit(option)
    }
    function resize(a, b) {
        if (a && a.constructor === Number && (this.sw = a,
        this.boxHandel.style.width = this.sw + "px",
        this.boxIframeHandel.width = this.sw - 2 + "px",
        this.boxHandel.style.left = $getPageScrollWidth() + ($getWindowWidth() - this.sw) / 2 + "px"),
        b && b.constructor === Number) {
            this.sh = b,
            this.boxHandel.style.height = this.sh + "px",
            this.boxIframeHandel.height = this.sh - 2 + "px";
            var c = this.boxHandel.style
              , d = "fixed" == c.position ? 0 : $getPageScrollHeight();
            this.boxHandel.style.top = d + ($getWindowHeight() - this.sh) / 2 + "px"
        }
    }
    function keepBoxFix() {
        if (this.fix)
            if ($isBrowser("ie6")) {
                var a = this;
                this.fixTimer = setInterval(function() {
                    a.boxHandel.style.left = $getPageScrollWidth() + ($getWindowWidth() - a.sw) / 2 + "px",
                    a.boxHandel.style.top = $getPageScrollHeight() + ($getWindowHeight() - a.sh) / 2 + "px"
                }, 30)
            } else
                this.boxHandel.style.position = "fixed",
                this.boxHandel.style.left = ($getWindowWidth() - this.sw) / 2 + "px",
                this.boxHandel.style.top = ($getWindowHeight() - this.sh) / 2 + "px"
    }
    function floatInit(cssUrl) {
        function createCover() {
            var c = document.createElement("div");
            with (c.id = "floatCover",
            c.style)
                display = "none",
                width = "0px",
                height = "0px",
                backgroundColor = "#cccccc",
                zIndex = 250,
                position = "fixed",
                hasLayout = -1,
                left = "0px",
                top = "0px",
                filter = "alpha(opacity=50);",
                opacity = "0.5";
            document.body.appendChild(c),
            $isBrowser("ie6") && (c.innerHTML = '<iframe frameBorder="0" style="position:absolute;left:0;top:0;width:100%;z-index:-1;border:none;" id="floatCover_iframe"></iframe>',
            c.style.position = "absolute"),
            window._PP_core_float_data.cover = document.getElementById("floatCover"),
            window._PP_core_float_data.coverIframe = document.getElementById("floatCover_iframe"),
            window._PP_core_float_data.coverIsShow = !1,
            window._PP_core_float_data.coverSize = [0, 0]
        }
        function showCover() {
            function a() {
                var a = window._PP_core_float_data;
                if (a.coverIsShow) {
                    var b = ($getContentHeight(),
                    $getWindowHeight())
                      , c = ($getContentWidth(),
                    $getWindowWidth())
                      , d = [b, c];
                    $isBrowser("ie6") && (a.cover.style.top = $getPageScrollHeight() + "px"),
                    d.toString() != window._PP_core_float_data.coverSize.toString() && (a.coverSize = d,
                    a.cover.style.height = d[0].toFixed(0) + "px",
                    a.cover.style.width = d[1].toFixed(0) + "px",
                    a.coverIframe && (a.coverIframe.style.height = d[0].toFixed(0) + "px",
                    a.coverIframe.style.width = d[1].toFixed(0) + "px"))
                }
            }
            window._PP_core_float_data.cover.style.display = "block",
            window._PP_core_float_data.coverIsShow = !0,
            a(),
            window._PP_core_float_data.coverTimer = setInterval(function() {
                a()
            }, 50)
        }
        function closeCover() {
            window._PP_core_float_data.cover.style.display = "none",
            window._PP_core_float_data.coverIsShow = !1,
            clearInterval(window._PP_core_float_data.coverTimer)
        }
        cssUrl && $loadCss(cssUrl),
        window._PP_core_float_data = {},
        window._PP_core_float_data.zIndex = option.zindex,
        window._PP_core_float_data.list = [],
        createCover(),
        _PP_core_float_data.showCover = showCover,
        _PP_core_float_data.closeCover = closeCover
    }
    var option = {
        id: "",
        title: "",
        html: "",
        left: "",
        top: "",
        width: "400",
        showClose: !0,
        closeId: "",
        height: "",
        leaver: 2,
        fix: !1,
        style: "stand",
        cName: "module_box_normal",
        autoResize: !1,
        cover: !0,
        zindex: 255,
        cssUrl: basePath + "/resources/css/propublish/module_box.css",
        dragble: !1,
        onInit: $empty(),
        onClose: $empty()
    };
    for (var i in obj)
        option[i] = obj[i];
    return window._PP_core_float_data ? "" : floatInit(option.cssUrl),
    window._PP_core_float_data.zIndex++,
    option.id = option.id ? option.id : window._PP_core_float_data.zIndex,
    option.close = closeFloat,
    option.destruct = destructFloat,
    option.closeOther = closeOther,
    option.keepBoxFix = keepBoxFix,
    option.resize = resize,
    option.show = showBox,
    option.closeOther(),
    option.show(),
    window._PP_core_float_data.list.push(option),
    option.dragble && $initDragItem({
        barDom: option.boxTitleHandel,
        targetDom: option.boxHandel
    }),
    option
}
function $empty() {
    return function() {
        return !0
    }
}
function $getQuerySafe(a, b) {
    var c = escape($getQuery(a, b));
    return c = c.replace(/[\?|#].*/, "").replace(/(%23|%3F).*/i, "").replace(/(%2523|%253F).*/i, "")
}
function $getStrBetween(a, b, c) {
    var d = a.indexOf(b);
    if (-1 == d)
        return "";
    d += b.length;
    var e = a.indexOf(c, d);
    return -1 == e ? "" : a.substr(d, e - d)
}
function $time33(a) {
    for (var b = 0, c = a.length, d = 5381; c > b; ++b)
        d += (d << 5) + a.charAt(b).charCodeAt();
    return 2147483647 & d
}
function $addToken(a, b) {
    var c = $getToken();
    if ("" == a || 0 != a.indexOf("http"))
        return a;
    if (-1 != a.indexOf("#")) {
        var d = a.match(/\?.+\#/);
        if (d) {
            var e = d[0].split("#")
              , f = [e[0], "&g_tk=", c, "&g_ty=", b, "#", e[1]].join("");
            return a.replace(d[0], f)
        }
        var e = a.split("#");
        return [e[0], "?g_tk=", c, "&g_ty=", b, "#", e[1]].join("")
    }
    return "" == c ? a : a + (-1 != a.indexOf("?") ? "&" : "?") + "g_tk=" + c + "&g_ty=" + b
}
function $getToken() {
    var a = $getCookie("skey")
      , b = null == a ? "" : $time33(a);
    return b
}
function $classPath(a) {
    function b() {
        n.areaObj.find(".category_list").on("click", function(a) {
            a = a || window.event;
            for (var b = a.target || a.srcElement; "LI" != b.tagName; )
                b = b.parentNode;
            if (n.selectClassItem(b.id.replace("classItem_", "")),
            $(b).parents(".sort_list").next(".sort_list").find("li.selected").removeClass("selected"),
            "0" == b.getAttribute("leaf"))
                n.initClassList(b.getAttribute("path"));
            else {
                var c = b.getAttribute("path").split(",");
                c.pop(),
                n.initClassList(c.join())
            }
        }),
        n.areaObj.find(":input[tag='filter']").blur(function() {
            "" == this.value && (this.value = "输入名称或拼音首字母",
            $(this).css("color", "#999"))
        }).focus(function() {
            "输入名称或拼音首字母" == this.value && (this.value = "",
            $(this).css("color", "#000")),
            "" != this.value
        }).keyup(function() {
            var a = this.value
              , b = $(this).attr("lid");
            n.orderClassList(b, "1", a),
            n.areaObj.find("a[tag='orderList'][lid='" + b + "']").removeClass("down").removeClass("up").addClass("current").attr("state", "0").attr("title", "点击按首字母z-a排序"),
            $("#sortShowC" + b).find(".wp_category_list").attr("scrollTop", "0")
        }).val("输入名称或拼音首字母").attr("title", "输入名称或拼音首字母"),
        n.areaObj.find("a[tag='orderList']").click(function() {
            var a = $(this)
              , b = parseInt(a.attr("state"));
            return 0 == b ? a.removeClass("current").addClass("down").attr("state", "1").attr("title", "点击按首字母a-z排序") : 1 == b ? a.removeClass("down").addClass("up").attr("state", "2").attr("title", "点击返回系统默认排序") : 2 == b && a.removeClass("up").addClass("current").attr("state", "0").attr("title", "点击按首字母z-a排序"),
            n.orderClassList(a.attr("lid"), "2", a.attr("state")),
            $(":input[tag='filter'][lid='" + a.attr("lid") + "']").val("").blur(),
            $("#sortShowC" + a.attr("lid")).find(".wp_category_list").attr("scrollTop", "0"),
            !1
        }).attr("state", "0").attr("title", "点击按首字母z-a排序")
    }
    function c(a, b, c) {
        var d = []
          , e = []
          , f = [];
        for (var g in n.list)
            n.list[g].parentId == n.currState[parseInt(a)] && d.push(n.list[g]);
        if ("2" == b) {
            1 == c && (d = d.sort(function(a, b) {
                return b.pinyin.localeCompare(a.pinyin)
            })),
            2 == c && (d = d.sort(function(a, b) {
                return a.pinyin.localeCompare(b.pinyin)
            }));
            for (var g = 0; g < d.length; g++)
                0 == d[g].className.indexOf("其他") || 0 == d[g].className.indexOf("其它") ? f.push(d[g]) : e.push(n.getItemHtml(d[g]));
            for (var g = 0; g < f.length; g++)
                e.push(n.getItemHtml(f[g]))
        }
        if ("1" == b) {
            var h = 0
              , g = 0
              , i = [];
            for ("" == c && (c = "无所不能绝对不会被匹配到的强悍文字kpxu"),
            c = c.toUpperCase(); g < d.length && 2 > h; )
                ("," + i + ",").indexOf("," + d[g].classid + ",") < 0 && (0 == h && d[g].strs.indexOf(c) >= 0 && (i.push(d[g].classid),
                e.push(n.getItemHtml(d[g], !0))),
                1 == h && e.push(n.getItemHtml(d[g]))),
                ++g == d.length && 3 > h && (g = 0,
                h++)
        }
        $("#classList" + a).html(e.join(""))
    }
    function d(a) {
        if ("0" == a)
            return n.areaObj.find(".selected").removeClass("selected"),
            n.leaf = "",
            n.onSelect(),
            !1;
        var b = $("#classItem_" + a);
        return b.length > 0 && (b.parent().children(".selected").removeClass("selected"),
        b.addClass("selected")),
        n.leaf = n.list[a],
        n.onSelect(),
        !0
    }
    function e(a) {
        for (var b = [], c = 0, d = a.data.length; d > c; c++) {
            a.data[c].strs = (a.data[c].className + a.data[c].pinyin).toUpperCase();
            for (var e = "", f = 0; f < a.data[c].property.length; f++) {
                var g = "0000" + parseInt(a.data[c].property.substr(f, 1), 16).toString(2);
                g = g.substr(g.length - 4, 4),
                e += g
            }
            a.data[c].propertyStr = e,
            0 == a.data[c].className.indexOf("其他") || 0 == a.data[c].className.indexOf("其它") ? b.push(a.data[c]) : n.list[a.data[c].classid] = a.data[c]
        }
        for (var c = 0, d = b.length; d > c; c++)
            n.list[b[c].classid] = b[c]
    }
    function f(a, b) {
        var c = n.template;
        if (1 == a.propertyStr.substr(31, 1))
            return "";
        var d = !1;
        return ("," + n.selectPath + ",").indexOf("," + a.classid + ",") > 0 ? d = !0 : n.leaf && n.leaf.classid == a.classid && (d = !0),
        c = c.replace(/{#isHightLight#}/, b ? "hight_light" : ""),
        c = c.replace(/{#isSelect#}/, d ? "selected" : ""),
        c = c.replace(/{#classId#}/g, a.classid),
        c = c.replace(/{#isLeaf#}/, "0" == a.isLeaf ? "has_leaf" : ""),
        c = c.replace(/{#leaf#}/, a.isLeaf),
        c = c.replace(/{#className#}/, a.className),
        c = c.replace(/{#path#}/g, a.classpath)
    }
    function g(a) {
        a && (n.selectPath = a.split(","));
        for (var b = 0; 5 > b; b++)
            if (n.selectPath[b] != n.currState[b])
                if ($("a[tag='orderList'][lid='" + b.toString() + "']").attr("state", "0").removeClass().addClass("btn_sort").addClass("current").attr("title", "点击按首字母z-a排序"),
                $(":input[tag='filter'][lid='" + b.toString() + "']").val("").blur(),
                n.selectPath[b]) {
                    var a = n.selectPath[b]
                      , c = [];
                    for (var d in n.list)
                        n.list[d].parentId == a && c.push(n.getItemHtml(n.list[d]));
                    if (c.length >= 1)
                        $("#classList" + b).html(c.join("")),
                        $("#sortShowC" + b).removeClass("blank"),
                        n.currState[b] = n.selectPath[b],
                        n.selectClassItem(n.currState[b]);
                    else {
                        if (!n.list[a.toString()] || "1" != n.list[a.toString()].isLeaf) {
                            if (n.selectPath[b + 1]) {
                                for (var e = [], d = 0; b + d < n.selectPath.length; d++)
                                    e.push(n.selectPath[b + d]);
                                n.loadObj.show();
                                var f = window.basePath + "/proPublish/doFindCategoryInfoForPid.json?callback=getClassCallback&fullPath=0&classId=" + e[e.length - 1];
                                $loadScript(f)
                            } else {
                                n.loadObj.show();
                                var f = window.basePath + "/proPublish/doFindCategoryInfoForPid.json?callback=getClassCallback&fullPath=0&classId=" + n.selectPath[b];
                                $loadScript(f)
                            }
                            return window.getClassCallback = function(a) {
                                return n.loadObj.hide(),
                                a.data.length < 1 ? (alert("无法获取到数据，请刷新重试！"),
                                void 0) : (n.setClassCache(a),
                                n.initClassList(),
                                void 0)
                            }
                            ,
                            void 0
                        }
                        n.selectClassItem(a),
                        $("#classList" + b).html(""),
                        $("#sortShowC" + b).addClass("blank")
                    }
                } else
                    $("#classList" + b).html(""),
                    $("#sortShowC" + b).addClass("blank"),
                    n.currState[b] = "";
            else
                n.selectPath[b + 1] && ($("#classList" + b).find(".selected").removeClass("selected"),
                $("#classItem_" + n.selectPath[b + 1]).addClass("selected"))
    }
    function h() {
        n.leaf && n.selectClassItem(n.leaf.classid)
    }
    function i(a) {
        n.currState = ["0", "", "", "", ""],
        n.initClassList(a)
    }
    function j(a) {
        var b = window.basePath + "/proPublish/doFindCategoryInfoForPid.json?callback=getSearchLeaf&classId=" + a + "&fullPath=1";
        $loadScript(b),
        window.getSearchLeaf = function(b) {
            b.data.length < 1 || 0 != b.errCode || (n.setClassCache(b),
            n.leaf = b.data[0],
            n.selectClassItem(a))
        }
    }
    function k(a) {
        if (n.selectFullPath(),
        n.list[a])
            n.initClassList("0," + n.list[a].classpath);
        else {
            n.searchId = a;
            var b = "0" == a ? "0" : "1"
              , c = window.basePath + "/proPublish/doFindCategoryInfoForPid.json?callback=getFullClassCallback&classId=" + a + "&fullPath=" + b;
            $loadScript(c),
            window.getFullClassCallback = function(a) {
                n.setClassCache(a),
                "0" == n.searchId ? n.initClassList("0") : n.initClassList("0," + n.list[n.searchId].classpath)
            }
        }
    }
    var l = {
        objAreaId: "selectArea",
        loadDomId: "dataLoading",
        template: '<li class="{#isHightLight#} {#isSelect#}" path="0,{#path#}" leaf="{#leaf#}" cid="{#classId#}" id="classItem_{#classId#}"><span class="{#isLeaf#}">{#className#}</span></li>',
        initClassId: "0",
        onSelect: function() {
            return !0
        },
        selectPath: ["", "", "", "", ""],
        currState: ["", "", "", "", ""],
        list: {},
        leaf: ""
    };
    for (var m in a)
        l[m] = a[m];
    window._PP_classPath_data = l;
    var n = window._PP_classPath_data;
    return n.areaObj = $("#" + l.objAreaId),
    n.loadObj = $("#" + l.loadDomId),
    n.selectClassItem = d,
    n.initClassList = g,
    n.getItemHtml = f,
    n.orderClassList = c,
    n.setClassCache = e,
    n.reSelect = h,
    n.selectFullPath = i,
    n.selectLeafPath = k,
    n.searchLeafClass = j,
    b(),
    n.selectLeafPath(n.initClassId ? n.initClassId : "0"),
    n
}
function $addEvent(a, b, c) {
    function d(a, b, c, d) {
        a.__hids = a.__hids || [];
        var e = "h" + window.__Hcounter++;
        a.__hids.push(e),
        window.__allHandlers[e] = {
            type: b,
            handler: c,
            wrapper: d
        }
    }
    function e(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    }
    if (a && b && c)
        if (a instanceof Array)
            for (var f = 0, g = a.length; g > f; f++)
                $addEvent(a[f], b, c);
        else if (b instanceof Array)
            for (var f = 0, g = b.length; g > f; f++)
                $addEvent(a, b[f], c);
        else if (window.__allHandlers = window.__allHandlers || {},
        window.__Hcounter = window.__Hcounter || 1,
        window.addEventListener) {
            var h = e(c, a);
            d(a, b, c, h),
            a.addEventListener(b, h, !1)
        } else if (window.attachEvent) {
            var h = e(c, a);
            d(a, b, c, h),
            a.attachEvent("on" + b, h)
        } else
            a["on" + b] = c
}
function $addUniq(a, b) {
    if (!a)
        return a = [b];
    for (var c = a.length; c--; )
        if (a[c] === b)
            return a;
    return a.push(b),
    a
}
function $addZero(a, b) {
    for (var c = 0, d = b - (a + "").length; d > c; c++)
        a = "0" + a;
    return a + ""
}
function $arrayRemove(a, b, c) {
    for (var d = 0, e = a.length, f = 0; e > f; f++)
        (c ? c(a[f]) : a[f] === b) && (a.splice(f--, 1),
        d++);
    return d
}
function $attr(a, b, c) {
    function d(a, b) {
        for (b(a),
        a = a.firstChild; a; )
            d(a, b),
            a = a.nextSibling
    }
    var e = []
      , c = c || document.body;
    return d(c, function(c) {
        var d = 1 === c.nodeType && ("class" === a ? c.className : c.getAttribute && c.getAttribute(a));
        "string" != typeof d || d !== b && "string" == typeof b || e.push(c)
    }),
    e
}
function $delClass(a, b) {
    $setClass(a, b, "remove")
}
function $display(a, b) {
    if (a) {
        var b = b || "";
        if ("string" == typeof a)
            for (var c = a.split(","), d = 0, e = c.length; e > d; d++) {
                var f = $id(c[d]);
                f && (f.style.display = b)
            }
        else if (a.nodeType)
            a.style.display = b;
        else if (a.length)
            for (var d = 0, e = a.length; e > d; d++)
                $display(a[d], b);
        else
            a.style.display = b
    }
}
function $each(a, b) {
    var c = a.length;
    if ("number" == typeof c)
        for (var d = 0; c > d; d++)
            try {
                b(a[d], d)
            } catch (e) {
                if ($break(e))
                    break;
                throw e
            }
    else
        for (var f in a)
            try {
                b(a[f], f)
            } catch (e) {
                if ($break(e))
                    break;
                throw e
            }
}
function $fireEvent(a, b, c) {
    var a = $id(a)
      , b = b || "click"
      , c = c || "MouseEvents";
    a == document && document.createEvent && !a.dispatchEvent && (a = document.documentElement);
    var d;
    document.createEvent ? (d = document.createEvent(c),
    d.initEvent(b, !0, !0),
    a.dispatchEvent(d)) : (d = document.createEventObject(),
    d.eventType = "on" + b,
    a.fireEvent(d.eventType, event))
}
function $formatDate(a, b) {
    var c = ["日", "一", "二", "三", "四", "五", "六"]
      , d = b.replace(/yyyy|YYYY/, a.getFullYear()).replace(/yy|YY/, $addZero(a.getFullYear() % 100, 2)).replace(/mm|MM/, $addZero(a.getMonth() + 1, 2)).replace(/m|M/g, a.getMonth() + 1).replace(/dd|DD/, $addZero(a.getDate(), 2)).replace(/d|D/g, a.getDate()).replace(/hh|HH/, $addZero(a.getHours(), 2)).replace(/h|H/g, a.getHours()).replace(/ii|II/, $addZero(a.getMinutes(), 2)).replace(/i|I/g, a.getMinutes()).replace(/ss|SS/, $addZero(a.getSeconds(), 2)).replace(/s|S/g, a.getSeconds()).replace(/w/g, a.getDay()).replace(/W/g, c[a.getDay()]);
    return d
}
function $formatStr(a, b, c) {
    return a ? ("undefined" == typeof c && (c = !0),
    a = a.replace(/{#([^#]+)#}/g, function(a, d) {
        return "undefined" != typeof b[d] ? b[d] : c ? "" : a
    })) : ""
}
function $getKeyCode(a) {
    var a = a || window.event;
    return a.keyCode || a.which
}
function $getTarget(a, b, c) {
    var a = window.event || a
      , d = a.srcElement || a.target;
    if (b && c && d.nodeName.toLowerCase() != c)
        for (; d = d.parentNode; ) {
            if (d == b || d == document.body || d == document)
                return null ;
            if (d.nodeName.toLowerCase() == c)
                break
        }
    return d
}
function $getUin() {
    var a = $getCookie("uin") || $getCookie("uin_cookie") || $getCookie("pt2gguin") || $getCookie("o_cookie") || $getCookie("luin") || $getCookie("buy_uin");
    return a ? parseInt(a.replace("o", ""), 10) : ""
}
function $getX(a) {
    for (var b = a.offsetLeft || 0; a = a.offsetParent; )
        b += a.offsetLeft;
    return b
}
function $getY(a) {
    for (var b = a.offsetTop || 0; a = a.offsetParent; )
        b += a.offsetTop;
    return b
}
function $getYP(a) {
    for (var b = $getY(a), a = a.parentNode; 0 === b && document.body != a; )
        b = $getY(a),
        a = a.parentNode;
    return b
}
function $hasClass(a, b) {
    if (!a || !b)
        return null ;
    for (var c = ("object" == typeof a ? a.className : a).split(" "), d = 0, e = c.length; e > d; d++)
        if (b == c[d])
            return b;
    return null
}
function $loadCss(a, b) {
    if (a) {
        var c;
        return (!window._loadCss || window._loadCss.indexOf(a) < 0) && (c = document.createElement("link"),
        c.setAttribute("type", "text/css"),
        c.setAttribute("rel", "stylesheet"),
        c.setAttribute("href", a),
        c.setAttribute("id", "loadCss" + Math.random()),
        document.getElementsByTagName("head")[0].appendChild(c),
        window._loadCss ? window._loadCss += "|" + a : window._loadCss = "|" + a),
        c && "function" == typeof b && (c.onload = b),
        !0
    }
}
function $makeUrl(a) {
    var b = [];
    for (var c in a)
        b.push(c + "=" + a[c]);
    return b.join("&")
}
function $page(a) {
    function b(a) {
        for (var c = [], d = 0; d < a.length; d++)
            a[d].length > 0 ? c = c.concat(b(a[d])) : c.push(a[d]);
        return c
    }
    var c = {
        keyId: Math.random(),
        pageCount: 0,
        currentPage: 0,
        itemCount: 0,
        more: !1,
        domList: [],
        type: "full",
        action: "func",
        url: "http://www.paipai.com/?pid={#pageId#}",
        func: function() {
            return !0
        },
        onInit: function() {
            return !0
        }
    };
    for (var d in a)
        c[d] = a[d];
    var e = ["", '{#goTo#}<span class="mod-button mod-button_small mod-pagenav__item" pageTag="go" pageId="{#pageId#}">{#pageId#}</span>{#goTo/#} {#current#}<span class="mod-button mod-button_small mod-pagenav__item mod-pagenav__item_current">{#pageId#}</span>{#current/#}{#hide#}<span class="mod-button mod-button_small mod-pagenav__item">...</span>{#hide/#}{#next#}<span class="mod-button mod-button_small mod-pagenav__item" pageTag="go" pageId="{#pageId#}">></span>{#next/#}{#_next#}<span class="mod-button mod-button_small mod-pagenav__item mod-button_disable">></span>{#_next/#}{#previou#}<span pageTag="go" pageId="{#pageId#}" class="mod-button mod-button_small mod-pagenav__item"><</span>{#previou/#}{#_previou#}<span class="mod-button mod-button_small mod-pagenav__item mod-button_disable"><</span>{#_previou/#}{#first#}{#first/#}{#_first#}{#_first/#}{#last#}{#last/#}{#_last#}{#_last/#}{#more#}<span class="mod-button mod-button_small mod-pagenav__item">...</span>{#more/#}{#_more#}{#_more/#}']
      , f = [e[0], e[1], '<div class="mod-pagenav ui-m-large">{#previousPage#}{#pageList#}{#morePage#}{#nextPage#}<span class="mod-pagenav__white"></span><span class="ui-mr-small ui-ml-small">到第</span><input type="text" class="mod-input mod-input_small mod-pagenav__num-input" name="inputItem" pageTag="input" value="{#currentPageId#}"><span class="ui-mr-small ui-ml-small">页</span><button class="mod-button mod-pagenav__jump" pageTag="jumper">跳转</button>']
      , g = f[0] + f[1] + f[2]
      , h = parseInt(c.pageCount)
      , i = parseInt(c.currentPage)
      , j = parseInt(c.itemCount);
    i = i > h ? h : i;
    var k = {
        next: "",
        _next: "",
        previou: "",
        _previou: "",
        first: "",
        _first: "",
        last: "",
        _last: "",
        more: "",
        _more: "",
        goTo: "",
        current: "",
        hide: ""
    };
    for (var d in k) {
        var l = new RegExp("{#" + d + "#}(.*){#" + d + "/#}","ig").exec(g);
        k[d] = l ? RegExp.$1 : ""
    }
    if (k.nextPageHtml = h > i ? k.next.replace(/{#pageId#}/g, i + 1) : k._next,
    k.previousPageHtml = i > 1 ? k.previou.replace(/{#pageId#}/g, i - 1) : k._previou,
    k.firstPageHtml = i > 1 ? k.first.replace(/{#pageId#}/g, 1) : k._first,
    k.lastPageHtml = h > i ? k.last.replace(/{#pageId#}/g, h) : k._last,
    k.morePageHtml = c.more ? k.more.replace(/{#pageId#}/g, h + 1) : k._more,
    k.pagelistHtml = "",
    k.shortPageListHtml = "",
    k.noLastTmplHtml = "",
    k.miniPageListHtml = "<span>" + i + "/" + h + "</span>",
    10 >= h)
        for (var d = 1; h >= d; d++)
            k.pagelistHtml += d == i ? k.current.replace(/{#pageId#}/g, d) : k.goTo.replace(/{#pageId#}/g, d);
    else {
        var m = i - 3
          , n = i + 3;
        for (m = 3 >= m ? 1 : m,
        n = n > h - 3 ? h : n,
        6 >= i && (n = 8),
        k.pagelistHtml += i > 6 ? k.goTo.replace(/{#pageId#}/g, 1) + k.hide : "",
        d = m; n >= d; d++)
            k.pagelistHtml += d == i ? k.current.replace(/{#pageId#}/g, d) : k.goTo.replace(/{#pageId#}/g, d);
        k.pagelistHtml += h - 6 >= i ? k.hide + k.goTo.replace(/{#pageId#}/g, h) : ""
    }
    if (8 >= h)
        for (var d = 1; h >= d; d++)
            k.shortPageListHtml += d == i ? k.current.replace(/{#pageId#}/g, d) : k.goTo.replace(/{#pageId#}/g, d);
    else {
        var m = i - 2
          , n = i + 2;
        for (m = 2 >= m ? 1 : m,
        n = n > h - 2 ? h : n,
        4 >= i && (n = 6),
        k.shortPageListHtml += i > 4 ? k.goTo.replace(/{#pageId#}/g, 1) + k.hide : "",
        d = m; n >= d; d++)
            k.shortPageListHtml += d == i ? k.current.replace(/{#pageId#}/g, d) : k.goTo.replace(/{#pageId#}/g, d);
        k.shortPageListHtml += h - 4 >= i ? k.hide + k.goTo.replace(/{#pageId#}/g, h) : ""
    }
    if (6 >= h)
        for (var d = 1; h >= d; d++)
            k.noLastTmplHtml += d == i ? k.current.replace(/{#pageId#}/g, d) : k.goTo.replace(/{#pageId#}/g, d);
    else {
        var m = i - 2
          , n = i + 1;
        for (m = 3 >= m ? 1 : m,
        n = n > h - 1 ? h : n,
        k.noLastTmplHtml += i > 5 ? k.goTo.replace(/{#pageId#}/g, 1) + k.goTo.replace(/{#pageId#}/g, 2) + k.hide : "",
        d = m; n >= d; d++)
            k.noLastTmplHtml += d == i ? k.current.replace(/{#pageId#}/g, d) : k.goTo.replace(/{#pageId#}/g, d);
        k.noLastTmplHtml += h - 2 >= i ? k.hide : ""
    }
    if (c.more) {
        k.pagelistHtml = "";
        for (var d = 1; h >= d; d++)
            k.pagelistHtml += d == i ? k.current.replace(/{#pageId#}/g, d) : k.goTo.replace(/{#pageId#}/g, d);
        k.shortPageListHtml = k.pagelistHtml
    }
    g = f[2].replace(/{#currentPageId#}/g, i).replace(/{#pageCountNum#}/g, h).replace(/{#itemCountNum#}/g, j).replace(/{#firstPage#}/g, k.firstPageHtml).replace(/{#previousPage#}/g, k.previousPageHtml).replace(/{#nextPage#}/g, k.nextPageHtml).replace(/{#lastPage#}/g, k.lastPageHtml).replace(/{#pageList#}/g, k.pagelistHtml).replace(/{#shortPageList#}/g, k.shortPageListHtml).replace(/{#morePage#}/g, k.morePageHtml).replace(/{#miniPageList#}/g, k.miniPageListHtml).replace(/{#noLastTmpl#}/g, k.noLastTmplHtml).replace(/{#maxlength#}/g, h.toString().length);
    var o = []
      , p = []
      , q = []
      , r = [];
    o = o.concat(b(c.domList)),
    o.length;
    for (var d = 0; d < o.length; d++)
        try {
            o[d].innerHTML = g.replace(/{#debugtag#}/g, d);
            for (var s = o[d].getElementsByTagName("input"), t = 0; t < s.length; t++)
                "input" == s[t].getAttribute("pageTag") && p.push(s[t]);
            for (var s = o[d].getElementsByTagName("button"), t = 0; t < s.length; t++)
                "jumper" == s[t].getAttribute("pageTag") && q.push(s[t]);
            for (var s = o[d].getElementsByTagName("span"), t = 0; t < s.length; t++)
                "go" == s[t].getAttribute("pageTag") && r.push(s[t])
        } catch (u) {}
    for (var d = 0; d < p.length; d++)
        p[d].onblur = function() {
            this.value = this.value.replace(/[^0-9]/g, ""),
            (this.value > h || this.value < 1) && (this.value = "");
            for (var a = 0; a < p.length; a++)
                p[a].value = this.value
        }
        ,
        p[d].onfocus = function() {
            this.select()
        }
        ,
        p[d].onkeydown = function(a) {
            var a = window.event || a;
            return 13 != a.keyCode ? !0 : (this.onblur(),
            q[0].onclick(),
            !1)
        }
        ;
    for (var d = 0; d < q.length; d++)
        q[d].onclick = function() {
            var a = (this.parentElement || this.parentNode).getElementsByTagName("input")[0]
              , b = parseInt(a.value, 10);
            return a.onblur(),
            1 > b || !b ? (a.focus(),
            void 0) : (v(b, c),
            void 0)
        }
        ;
    for (var d = 0; d < r.length; d++)
        "url" == c.action ? r[d].href = c.url.replace("{#pageId#}", r[d].getAttribute("pageId")) : r[d].onclick = function() {
            v(this.getAttribute("pageId"), c)
        }
        ;
    var v = function(a, b) {
        return "url" == b.action && (location.href = b.url.replace("{#pageId#}", a)),
        "func" == b.action ? b.func(a, b) : !1
    };
    c.onInit()
}
function $preventDefault(a) {
    return a && a.preventDefault ? a.preventDefault() : window.event.returnValue = !1,
    !1
}
function $setClass(a, b, c) {
    if (a) {
        var d = function(a, b, c) {
            if (a) {
                var d = a.className
                  , e = d ? d.split(" ") : [];
                if ("add" == c)
                    $hasClass(d, b) || (e.push(b),
                    a.className = e.join(" "));
                else if ("remove" == c) {
                    for (var f = [], g = 0, h = e.length; h > g; g++)
                        b != e[g] && " " != e[g] && f.push(e[g]);
                    a.className = f.join(" ")
                }
            }
        };
        if ("string" == typeof a)
            for (var e = a.split(","), f = 0, g = e.length; g > f; f++)
                e[f] && d($id(e[f]), b, c);
        else if (a instanceof Array)
            for (var f = 0, g = a.length; g > f; f++)
                a[f] && d(a[f], b, c);
        else
            d(a, b, c)
    }
}
function $showTip(a) {
    var b = {
        title: "",
        content: "",
        height: 200,
        width: 50,
        left: "0",
        top: "0",
        zindex: 20,
        autoHide: !0,
        type: "0",
        style: "classic"
    };
    for (var c in a)
        b[c] = a[c];
    window._tipsHandler ? "" : window._tipsHandler = {},
    window._tipsHandler.option = b,
    window._tipsHandler.timer && window.clearInterval(window._tipsHandler.timer);
    var d = {
        classic: "hover",
        simple: "hov"
    }[b.style] || "hover"
      , e = {
        dom: d + "_tips",
        tzb0: d + "_tips_ztb",
        tzb1: d + "_tips_zt",
        cont: d + "_tips_cont"
    };
    if (!window._tipsHandler.dom) {
        var f = document.createElement("div");
        f.style.display = "",
        f.style.opacity = 1,
        f.style.position = "absolute",
        f.style.left = 0,
        f.style.top = 0,
        f.style.zIndex = b.zindex,
        f.id = "hoverTips",
        f.innerHTML = '<span id="hover_tips_ztb"></span><div class="' + e.inner + '" id="hover_tips_cont"><strong id="hoverTips_title"></strong><div id="hoverTips_content" style="display:block;overflow:hidden;"></div></div>',
        document.body.appendChild(f),
        window._tipsHandler.dom = document.getElementById("hoverTips"),
        window._tipsHandler.ztb = document.getElementById("hover_tips_ztb"),
        window._tipsHandler.cont = document.getElementById("hover_tips_cont"),
        window._tipsHandler.content = document.getElementById("hoverTips_content"),
        window._tipsHandler.title = document.getElementById("hoverTips_title"),
        window._tipsHandler.option.autoHide && (window._tipsHandler.dom.onmouseover = function() {
            window._tipsHandler.option.show()
        }
        ,
        window._tipsHandler.dom.onmouseout = function() {
            window._tipsHandler.option.close()
        }
        )
    }
    var g = window._tipsHandler;
    return g.title.innerHTML = b.title,
    g.content.innerHTML = b.content,
    0 == b.height ? "" : g.content.style.height = b.height + "px",
    0 == b.width ? "" : g.content.style.width = b.width + "px",
    g.dom.style.display = "",
    g.dom.style.opacity = 1,
    g.dom.style.left = g.option.left + "px",
    g.dom.style.top = g.option.top + "px",
    g.dom.className = e.dom,
    g.ztb.className = "0" == b.type ? e.tzb0 : e.tzb1,
    g.cont.className = e.cont,
    g.ztb.style.left = "25px",
    [parseInt(b.left), parseInt(b.top)],
    leftOut = parseInt(b.left) + g.dom.scrollWidth - $getPageScrollWidth() - $getWindowWidth(),
    leftOut > 0 && (g.dom.style.left = parseInt(b.left) - leftOut + "px",
    g.ztb.style.left = 25 + leftOut + "px"),
    b.close = function() {
        window._tipsHandler.timer && window.clearInterval(window._tipsHandler.timer),
        window._tipsHandler.timer = setInterval(function() {
            window._tipsHandler.dom.style.opacity > 0 ? (window._tipsHandler.dom.style.opacity -= .1) < .1 && (window._tipsHandler.dom.style.opacity = 0) : (window.clearInterval(window._tipsHandler.timer),
            window._tipsHandler.dom.style.opacity = 0,
            window._tipsHandler.dom.style.display = "none")
        }, 30)
    }
    ,
    b.show = function() {
        window._tipsHandler.timer && window.clearInterval(window._tipsHandler.timer),
        window._tipsHandler.dom.style.opacity = 1,
        window._tipsHandler.dom.style.display = ""
    }
    ,
    b.dom = window._tipsHandler.dom,
    b
}
function $strLenGB(a) {
    return a.replace(/[\u00FF-\uFFFF]/g, "  ").length
}
function $strSubGB(a, b, c, d) {
    var e = $strLenGB(a);
    if (e > c - b) {
        var d = d || ""
          , f = a.replace(/[\u00FF-\uFFFF]/g, "@-").substr(b, c)
          , g = f.match(/@-/g) ? f.match(/@-/g).length : 0;
        return a.substring(0, c - g) + d
    }
    return a
}
function $strTrim(a, b) {
    var c = b || "\\s"
      , d = new RegExp("(^" + c + "*)|(" + c + "*$)","g");
    return a.replace(d, "")
}
function $urlEncode(a) {
    return a && a.length ? escape(a).replace(/\+/g, "%2B").replace(/\"/g, "%22").replace(/\'/g, "%27").replace(/\//g, "%2F") : ""
}
function $xhrMaker() {
    var a;
    try {
        a = new XMLHttpRequest
    } catch (b) {
        try {
            a = new ActiveXObject("Msxml2.XMLHTTP")
        } catch (b) {
            try {
                a = new ActiveXObject("Microsoft.XMLHTTP")
            } catch (b) {
                a = null
            }
        }
    }
    return a
}
function $xss(a, b) {
    if (!a)
        return 0 === a ? 0 : "";
    switch (b) {
    case "none":
        return a + "";
    case "html":
        return a.replace(/[&'"<>\/\\\-\x00-\x09\x0b-\x0c\x1f\x80-\xff]/g, function(a) {
            return "&#" + a.charCodeAt(0) + ";"
        }).replace(/ /g, "&nbsp;").replace(/\r\n/g, "<br />").replace(/\n/g, "<br />").replace(/\r/g, "<br />");
    case "htmlEp":
        return a.replace(/[&'"<>\/\\\-\x00-\x1f\x80-\xff]/g, function(a) {
            return "&#" + a.charCodeAt(0) + ";"
        });
    case "url":
        return escape(a).replace(/\+/g, "%2B");
    case "miniUrl":
        return a.replace(/%/g, "%25");
    case "script":
        return a.replace(/[\\"']/g, function(a) {
            return "\\" + a
        }).replace(/%/g, "\\x25").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\x01/g, "\\x01");
    case "reg":
        return a.replace(/[\\\^\$\*\+\?\{\}\.\(\)\[\]]/g, function(a) {
            return "\\" + a
        });
    default:
        return escape(a).replace(/[&'"<>\/\\\-\x00-\x09\x0b-\x0c\x1f\x80-\xff]/g, function(a) {
            return "&#" + a.charCodeAt(0) + ";"
        }).replace(/ /g, "&nbsp;").replace(/\r\n/g, "<br />").replace(/\n/g, "<br />").replace(/\r/g, "<br />")
    }
}
function $addSelect(a, b, c) {
    var d = new Option(b,c);
    return a.options[a.options.length] = d,
    d
}
function $delEvent(a, b, c) {
    function d(a, b, c) {
        var d = a.__hids;
        if (!d || !window.__allHandlers)
            return null ;
        for (var e = d.length - 1; e >= 0; e--) {
            var f = d[e]
              , g = window.__allHandlers[f];
            if (g && g.type == b && g.handler == c) {
                var h = g.wrapper;
                return window.__allHandlers[f] = null ,
                delete window.__allHandlers[f],
                d.splice(e, 1),
                a.__hids = d,
                h
            }
        }
        return null
    }
    if (a && b && c)
        if (a instanceof Array)
            for (var e = 0, f = a.length; f > e; e++)
                $delEvent(a[e], b, c);
        else if (b instanceof Array)
            for (var e = 0, f = b.length; f > e; e++)
                $delEvent(a, b[e], c);
        else
            window.removeEventListener ? a.removeEventListener(b, d(a, b, c) || c, !1) : window.detachEvent && a.detachEvent("on" + b, d(a, b, c) || c)
}
function $fillAddress(a) {
    function b() {
        c(),
        g(),
        d(),
        e(),
        f()
    }
    function c() {
        if (h.initValue)
            for (var a in j) {
                if (a.toString() === h.initValue.toString())
                    return h.provId = h.initValue,
                    void 0;
                if ("object" == typeof j[a][2]) {
                    var b = a;
                    for (var c in j[a][2]) {
                        if (c.toString() === h.initValue.toString())
                            return h.provId = b,
                            h.cityId = c,
                            void 0;
                        var d = j[a][2][c][2];
                        if ("object" == typeof d) {
                            var e = c;
                            for (var f in d)
                                if (f.toString() === h.initValue.toString())
                                    return h.provId = b,
                                    h.cityId = e,
                                    h.areaId = f,
                                    void 0
                        }
                    }
                }
            }
    }
    function d() {
        var a = h.provinceHander;
        if (a) {
            if (a.options.length > 0)
                return;
            $addSelect(a, "", "");
            for (var b in j)
                $addSelect(a, j[b][0], b);
            h.provId && (a.value = h.provId)
        }
    }
    function e() {
        var a = h.cityHander;
        if (a) {
            if (!h.provId)
                return;
            var b = j[h.provId][2];
            a.options.length = 0,
            $addSelect(a, "", "");
            for (var c in b)
                $addSelect(a, b[c][0], c);
            h.cityId && (a.value = h.cityId)
        }
    }
    function f() {
        var a = h.areaHander;
        if (a && h.area) {
            var b;
            if (!h.cityId)
                return a[0].options.length = 0,
                void 0;
            b = j[h.provId][2][h.cityId][2],
            a.options.length = 0,
            $addSelect(a, "", "");
            for (var c in b)
                $addSelect(a, b[c][0], c);
            h.areaId && a.val(h.areaId)
        }
    }
    function g() {
        function a() {
            vprovince = this.getAttribute("vprovince"),
            vcity = this.getAttribute("vcity"),
            varea = this.getAttribute("varea");
            var a = this.getAttribute("stype")
              , c = this.value
              , d = c;
            h.onSelect(this, a),
            "province" == a && "" == c && (h.onSelectBlankProv(this),
            $id(vcity) ? $id(vcity).options.length = 0 : "",
            varea && $id(varea) ? $id(varea).options.length = 0 : ""),
            "city" == a && "" == c && (h.onSelectBlankCity(this),
            d = $id(vprovince).value),
            h.provId = "",
            h.cityId = "",
            h.areaId = "",
            h.initValue = d,
            b()
        }
        h.cityHander && (h.provinceHander.onchange = "",
        h.provinceHander.onchange = a),
        h.areaHander && (h.cityHander.onchange = "",
        h.cityHander.onchange = a)
    }
    var h = {
        regionUrl: basePath + "/resources/js/propublish/regiondata.js",
        province: "",
        city: "",
        area: "",
        provId: "",
        cityId: "",
        areaId: "",
        initValue: "",
        onSelect: function() {
            return !0
        },
        onSelectBlankProv: function() {
            return !0
        },
        onSelectBlankCity: function() {
            return !0
        }
    };
    for (var i in a)
        h[i] = a[i];
    h.provinceHander = "" == h.province ? null : $id(h.province),
    h.cityHander = "" == h.city ? null : $id(h.city),
    h.areaHander = "" == h.area ? null : $id(h.area),
    h.provinceHander && (h.provinceHander.setAttribute("stype", "province"),
    h.provinceHander.setAttribute("vprovince", h.province),
    h.provinceHander.setAttribute("vcity", h.city),
    h.provinceHander.setAttribute("varea", h.area)),
    h.cityHander && (h.cityHander.setAttribute("stype", "city"),
    h.cityHander.setAttribute("vprovince", h.province),
    h.cityHander.setAttribute("vcity", h.city),
    h.cityHander.setAttribute("varea", h.area)),
    h.areaHander && (h.cityHander.setAttribute("stype", "area"),
    h.cityHander.setAttribute("vprovince", h.province),
    h.cityHander.setAttribute("vcity", h.city),
    h.cityHander.setAttribute("varea", h.area)),
    h.initaddress = b,
    $loadScript(h.regionUrl);
    var j = $getRegionMap();
    return b(),
    h
}
function $isDocReady() {
    if (navigator.userAgent.match(/MSIE/)) {
        try {
            return document.documentElement.doScroll("left"),
            !0
        } catch (a) {}
        return !1
    }
    return document.body ? !0 : !1
}
function $isLogin() {
    return $getCookie("skey") && $getCookie("uin") ? !0 : !1
}
function $loginFrame(a) {
    var b = {};
    return a.title && (b.title = a.title),
    a.domId && (b.containerId = a.domId),
    (a["float"] === !1 || a["float"] === !0) && (b.floatDialog = a["float"]),
    (a.model === !1 || a.model === !0) && (b.modalDialog = a.model),
    (a.drag === !1 || a.drag === !0) && (b.dragable = a.drag),
    (a.close === !1 || a.close === !0) && (b.showClose = a.close),
    (a.quick === !1 || a.quick === !0) && (b.quickLogin = a.quick),
    (a.check === !1 || a.check === !0) && (b.checkLogin = a.check),
    (a.checkReady === !1 || a.checkReady === !0) && (b.checkReady = a.checkReady),
    (a.hideXieyi === !1 || a.hideXieyi === !0) && (b.showProtocol = !a.hideXieyi),
    a.noChangeQQ && (b.noChangeQQ = a.noChangeQQ),
    a.defaultId && (b.defaultQQ = a.defaultId),
    a.type && (b.type = a.type),
    a.action && (b.action = a.action),
    a.x && (b.x = a.x),
    a.y && (b.y = a.y),
    a.onLogin && (b.onLogin = a.onLogin),
    a.onReset && (b.onReset = a.onReset),
    a.onClose && (b.onClose = a.onClose),
    a.onResize && (b.onResize = a.onResize),
    a.onSuccess && (b.onSuccess = a.onSuccess),
    a.onFailure && (b.onFailure = a.onFailure),
    $login(b)
}
function $parseUrl(a) {
    var b = document.createElement("a");
    return b.href = a,
    {
        source: a,
        protocol: b.protocol.replace(":", ""),
        host: b.hostname,
        port: b.port,
        query: b.search,
        params: function() {
            for (var a, c = {}, d = b.search.replace(/^\?/, "").split("&"), e = d.length, f = 0; e > f; f++)
                d[f] && (a = d[f].split("="),
                c[a[0]] = a[1]);
            return c
        }(),
        file: (b.pathname.match(/([^\/?#]+)$/i) || [, ""])[1],
        hash: b.hash.replace("#", ""),
        path: b.pathname.replace(/^([^\/])/, "/$1"),
        relative: (b.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ""])[1],
        segments: b.pathname.replace(/^\//, "").split("/")
    }
}
function $simpleValidator() {
    return Validator = {
        Require: /.+/,
        Email: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
        Phone: /^((\(\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,11}(\-\d{1,6})?$/,
        Mobile: /^(852\d{8})|(((\(\d{2,3}\))|(\d{3}\-))?((13\d{9})|(14\d{9})|(15\d{9})|(18\d{9})))$/,
        Url: /^http:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/,
        IdCard: "this.IsIdCard(value)",
        Currency: /^\d+(\.\d+)?$/,
        Number: /^\d+$/,
        Zip: /^[0-9]\d{5}$/,
        QQ: /^[1-9]\d{4,9}$/,
        Integer: /^[-\+]?\d+$/,
        Double: /^[-\+]?\d+(\.\d+)?$/,
        English: /^[A-Za-z]+$/,
        Chinese: /^[\u0391-\uFFE5]+$/,
        Username: /^[a-z]\w{3,}$/i,
        UnSafe: /^(([A-Z]*|[a-z]*|\d*|[-_\~!@#\$%\^&\*\.\(\)\[\]\{\}<>\?\\\/\'\"]*)|.{0,5})$|\s/,
        IsSafe: function(a) {
            return !this.UnSafe.test(a)
        },
        SafeString: "this.IsSafe(value)",
        Filter: "this.DoFilter(value, getAttribute('accept'))",
        Limit: "this.limit(value.length,getAttribute('min'), getAttribute('max'))",
        LimitB: "this.limit(this.LenB(value), getAttribute('min'), getAttribute('max'))",
        LimitC: "this.limit(this.LenC(value), getAttribute('min'), getAttribute('max'))",
        Date: "this.IsDate(value, getAttribute('min'), getAttribute('format'))",
        Repeat: "value == document.getElementsByName(getAttribute('to'))[0].value",
        Range: "parseFloat(getAttribute('min')) <= parseFloat(value) && parseFloat(value) <= parseFloat(getAttribute('max'))",
        Compare: "this.compare(value,getAttribute('operator'),getAttribute('to'))",
        Custom: "this.Exec(value, getAttribute('regexp'))",
        Group: "this.MustChecked(getAttribute('name'), getAttribute('min'), getAttribute('max'))",
        ErrorItem: [document.forms[0]],
        ErrorMessage: ["温馨提示：由于以下可能原因，您需要调整输入信息。				\n"],
        Validate: function() {
            var theForm, mode;
            switch (arguments.length) {
            case 0:
                theForm = document.forms[0],
                mode = 1;
                break;
            case 1:
                theForm = "object" == typeof arguments[0] ? arguments[0] : document.forms[arguments[0]],
                mode = 1;
                break;
            case 2:
            default:
                theForm = "object" == typeof arguments[0] ? arguments[0] : document.forms[arguments[0]],
                mode = arguments[1]
            }
            var obj = theForm || event.srcElement
              , count = obj.elements.length;
            this.ErrorMessage.length = 1,
            this.ErrorItem.length = 1,
            this.ErrorItem[0] = obj;
            for (var checkwithObject = null , i = 0; count > i; i++)
                with (obj.elements[i]) {
                    var _dataType = getAttribute("dataType");
                    if ("object" == typeof _dataType || "undefined" == typeof this[_dataType])
                        continue;
                    if (this.ClearState(obj.elements[i]),
                    null != getAttribute("checkwith")) {
                        var _theObj = getAttribute("checkwith"), _unionObjs = document.getElementsByName(_theObj), iIndex;
                        if (_unionObjs.length > 0) {
                            for (iIndex = 0; iIndex < _unionObjs.length && ("" != value || "" == _unionObjs[iIndex].value); iIndex++)
                                ;
                            if (iIndex < _unionObjs.length)
                                continue
                        }
                    }
                    if ("false" == getAttribute("require") && "" == value)
                        continue;
                    switch (_dataType) {
                    case "IdCard":
                    case "Date":
                    case "Repeat":
                    case "Range":
                    case "Compare":
                    case "Custom":
                    case "Group":
                    case "Limit":
                    case "LimitB":
                    case "LimitC":
                    case "SafeString":
                    case "Filter":
                        eval(this[_dataType]) || this.AddError(i, getAttribute("msg"));
                        break;
                    default:
                        this[_dataType].test(value) || this.AddError(i, getAttribute("msg"))
                    }
                }
            if (this.ErrorMessage.length > 1) {
                mode = mode || 1;
                var errCount = this.ErrorItem.length;
                switch (mode) {
                case 2:
                    for (var i = 1; errCount > i; i++)
                        this.ErrorItem[i].style.color = "red",
                        this.ErrorItem[i].style.borderColor = "red";
                case 1:
                    alert(this.ErrorMessage.join("\n"));
                    try {
                        this.ErrorItem[1].focus()
                    } catch (bb) {
                        break
                    }
                    break;
                case 3:
                    for (var i = 1; errCount > i; i++)
                        try {
                            this.ErrorItem[i].style.borderColor = "red";
                            var span = document.createElement("SPAN");
                            span.id = "__ErrorMessagePanel",
                            span.style.color = "red",
                            this.ErrorItem[i].parentNode.appendChild(span),
                            span.innerHTML = this.ErrorMessage[i].replace(/\d+:/, "*")
                        } catch (e) {
                            alert(e.description)
                        }
                    this.ErrorItem[1].focus();
                    break;
                default:
                    alert(this.ErrorMessage.join("\n"))
                }
                return !1
            }
            return !0
        },
        limit: function(a, b, c) {
            return b = b || 0,
            c = c || Number.MAX_VALUE,
            a >= b && c >= a
        },
        LenB: function(a) {
            return a.replace(/[^\x00-\xff]/g, "**").length
        },
        LenC: function(a) {
            var b = /^[A-Za-z0-9]+$/;
            return b.test(a) ? a.replace(/[^\x00-\xff]/g, "**").length : 0
        },
        ClearState: function(elem) {
            with (elem) {
                style.color = "",
                style.borderColor = "";
                var lastNode = parentNode.childNodes[parentNode.childNodes.length - 1];
                "__ErrorMessagePanel" == lastNode.id && parentNode.removeChild(lastNode)
            }
        },
        AddError: function(a, b) {
            this.ErrorItem[this.ErrorItem.length] = this.ErrorItem[0].elements[a],
            this.ErrorMessage[this.ErrorMessage.length] = this.ErrorMessage.length + ":" + b
        },
        Exec: function(a, b) {
            return new RegExp(b,"g").test(a)
        },
        compare: function(a, b, c) {
            switch (b) {
            case "NotEqual":
                return a != c;
            case "GreaterThan":
                return a > c;
            case "GreaterThanEqual":
                return a >= c;
            case "LessThan":
                return c > a;
            case "LessThanEqual":
                return c >= a;
            default:
                return a == c
            }
        },
        MustChecked: function(a, b, c) {
            var d = document.getElementsByName(a)
              , e = 0;
            b = b || 1,
            c = c || d.length;
            for (var f = d.length - 1; f >= 0; f--)
                d[f].checked && e++;
            return e >= b && c >= e
        },
        DoFilter: function(a, b) {
            return exp_str1 = b.split(",").join("|"),
            exp_str2 = exp_str1.replace(/\s+/g, ""),
            new RegExp("^.+.(?=EXT)(EXT)$".replace(/EXT/g, exp_str2),"gi").test(a)
        },
        IsIdCard: function(a) {
            var b, c, d = "10x98765432", e = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2], f = ["", "", "", "", "", "", "", "", "", "", "", "北京", "天津", "河北", "山西", "内蒙古", "", "", "", "", "", "辽宁", "吉林", "黑龙江", "", "", "", "", "", "", "", "上海", "江苏", "浙江", "安微", "福建", "江西", "山东", "", "", "", "河南", "湖北", "湖南", "广东", "广西", "海南", "", "", "", "重庆", "四川", "贵州", "云南", "西藏", "", "", "", "", "", "", "陕西", "甘肃", "青海", "宁夏", "新疆", "", "", "", "", "", "台湾", "", "", "", "", "", "", "", "", "", "香港", "澳门", "", "", "", "", "", "", "", "", "国外"], g = a.match(/^(\d{2})\d{4}(((\d{2})(\d{2})(\d{2})(\d{3}))|((\d{4})(\d{2})(\d{2})(\d{3}[x\d])))$/i);
            if (null == g)
                return !1;
            if (g[1] >= f.length || "" == f[g[1]])
                return !1;
            if (12 == g[2].length ? (c = a.substr(0, 17),
            b = [g[9], g[10], g[11]].join("-")) : (c = a.substr(0, 6) + "19" + a.substr(6),
            b = ["19" + g[4], g[5], g[6]].join("-")),
            !this.IsDate(b, "ymd"))
                return !1;
            for (var h = 0, i = 0; 16 >= i; i++)
                h += c.charAt(i) * e[i];
            return c += d.charAt(h % 11),
            15 == a.length || 18 == a.length && a.toLowerCase() == c
        },
        IsDate: function(a, b) {
            function c(a) {
                return 0 | (30 > a ? "20" : "19") + a
            }
            b = b || "ymd";
            var d, e, f, g;
            switch (b) {
            case "ymd":
                if (d = a.match(new RegExp("^((\\d{4})|(\\d{2}))([-./])(\\d{1,2})\\4(\\d{1,2})$")),
                null == d)
                    return !1;
                g = d[6],
                f = 1 * d[5],
                e = 4 == d[2].length ? d[2] : c(parseInt(d[3], 10));
                break;
            case "dmy":
                if (d = a.match(new RegExp("^(\\d{1,2})([-./])(\\d{1,2})\\2((\\d{4})|(\\d{2}))$")),
                null == d)
                    return !1;
                g = d[1],
                f = 1 * d[3],
                e = 4 == d[5].length ? d[5] : c(parseInt(d[6], 10))
            }
            if (!parseInt(f))
                return !1;
            f = 0 == f ? 12 : f;
            var h = new Date(e,f - 1,g);
            return "object" == typeof h && e == h.getFullYear() && f == h.getMonth() + 1 && g == h.getDate()
        }
    }
}
function $stopBubble(a) {
    var b = a || window.event;
    window.event ? b.cancelBubble = !0 : b.stopPropagation()
}
function $strTrimLeft(a, b) {
    return b = b || "\\s",
    a.replace(new RegExp("(^" + b + "*)","g"), "")
}
//文件上传flash
function $SWFUpload(option) {
    if (window.SWFUpload)
        return new window.SWFUpload(option);
    var SWFUpload;
    return void 0 == SWFUpload && (SWFUpload = function(a) {
        this.initSWFUpload(a)
    }
    ),
    SWFUpload.prototype.initSWFUpload = function(a) {
        try {
            this.customSettings = {},
            this.settings = a,
            this.eventQueue = [],
            this.movieName = "SWFUpload_" + SWFUpload.movieCount++,
            this.movieElement = null ,
            SWFUpload.instances[this.movieName] = this,
            this.initSettings(),
            this.loadFlash(),
            this.displayDebugInfo()
        } catch (b) {
            throw delete SWFUpload.instances[this.movieName],
            b
        }
    }
    ,
    SWFUpload.copyRight = ["SWFUpload: http://www.swfupload.org, http://swfupload.googlecode.com", "SWFUpload is (c) 2006-2007 Lars Huring, Olov Nilz? and Mammon Media and is released under the MIT License:", "http://www.opensource.org/licenses/mit-license.php", "SWFUpload is (c) 2006-2007 Lars Huring, Olov Nilz? and Mammon Media and is released under the MIT License:", "http://www.opensource.org/licenses/mit-license.php", "SWFUpload 2 is (c) 2007-2008 Jake Roberts and is released under the MIT License:", "http://www.opensource.org/licenses/mit-license.php"],
    SWFUpload.instances = {},
    SWFUpload.movieCount = 0,
    SWFUpload.version = "2.2.0 2009-03-25",
    SWFUpload.QUEUE_ERROR = {
        QUEUE_LIMIT_EXCEEDED: -100,
        FILE_EXCEEDS_SIZE_LIMIT: -110,
        ZERO_BYTE_FILE: -120,
        INVALID_FILETYPE: -130
    },
    SWFUpload.UPLOAD_ERROR = {
        HTTP_ERROR: -200,
        MISSING_UPLOAD_URL: -210,
        IO_ERROR: -220,
        SECURITY_ERROR: -230,
        UPLOAD_LIMIT_EXCEEDED: -240,
        UPLOAD_FAILED: -250,
        SPECIFIED_FILE_ID_NOT_FOUND: -260,
        FILE_VALIDATION_FAILED: -270,
        FILE_CANCELLED: -280,
        UPLOAD_STOPPED: -290
    },
    SWFUpload.FILE_STATUS = {
        QUEUED: -1,
        IN_PROGRESS: -2,
        ERROR: -3,
        COMPLETE: -4,
        CANCELLED: -5
    },
    SWFUpload.BUTTON_ACTION = {
        SELECT_FILE: -100,
        SELECT_FILES: -110,
        START_UPLOAD: -120
    },
    SWFUpload.CURSOR = {
        ARROW: -1,
        HAND: -2
    },
    SWFUpload.WINDOW_MODE = {
        WINDOW: "window",
        TRANSPARENT: "transparent",
        OPAQUE: "opaque"
    },
    SWFUpload.completeURL = function(a) {
        if ("string" != typeof a || a.match(/^https?:\/\//i) || a.match(/^\//))
            return a;
        window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "");
        var b = window.location.pathname.lastIndexOf("/");
        return path = 0 >= b ? "/" : window.location.pathname.substr(0, b) + "/",
        path + a
    }
    ,
    SWFUpload.prototype.initSettings = function() {
        this.ensureDefault = function(a, b) {
            this.settings[a] = void 0 == this.settings[a] ? b : this.settings[a]
        }
        ,
        this.ensureDefault("upload_url", ""),
        this.ensureDefault("preserve_relative_urls", !1),
        this.ensureDefault("file_post_name", "Filedata"),
        this.ensureDefault("post_params", {}),
        this.ensureDefault("use_query_string", !1),
        this.ensureDefault("requeue_on_error", !1),
        this.ensureDefault("http_success", []),
        this.ensureDefault("assume_success_timeout", 0),
        this.ensureDefault("file_types", "*.*"),
        this.ensureDefault("file_types_description", "All Files"),
        this.ensureDefault("file_size_limit", 0),
        this.ensureDefault("file_upload_limit", 0),
        this.ensureDefault("file_queue_limit", 0),
        this.ensureDefault("flash_url", "swfupload.swf"),
        this.ensureDefault("prevent_swf_caching", !0),
        this.ensureDefault("button_image_url", ""),
        this.ensureDefault("button_width", 1),
        this.ensureDefault("button_height", 1),
        this.ensureDefault("button_text", ""),
        this.ensureDefault("button_text_style", "color: #000000; font-size: 16pt;"),
        this.ensureDefault("button_text_top_padding", 0),
        this.ensureDefault("button_text_left_padding", 0),
        this.ensureDefault("button_action", SWFUpload.BUTTON_ACTION.SELECT_FILES),
        this.ensureDefault("button_disabled", !1),
        this.ensureDefault("button_placeholder_id", ""),
        this.ensureDefault("button_placeholder", null ),
        this.ensureDefault("button_cursor", SWFUpload.CURSOR.ARROW),
        this.ensureDefault("button_window_mode", SWFUpload.WINDOW_MODE.WINDOW),
        this.ensureDefault("debug", !1),
        this.settings.debug_enabled = this.settings.debug,
        this.settings.return_upload_start_handler = this.returnUploadStart,
        this.ensureDefault("swfupload_loaded_handler", null ),
        this.ensureDefault("file_dialog_start_handler", null ),
        this.ensureDefault("file_queued_handler", null ),
        this.ensureDefault("file_queue_error_handler", null ),
        this.ensureDefault("file_dialog_complete_handler", null ),
        this.ensureDefault("upload_start_handler", null ),
        this.ensureDefault("upload_progress_handler", null ),
        this.ensureDefault("upload_error_handler", null ),
        this.ensureDefault("upload_success_handler", null ),
        this.ensureDefault("upload_complete_handler", null ),
        this.ensureDefault("debug_handler", this.debugMessage),
        this.ensureDefault("custom_settings", {}),
        this.customSettings = this.settings.custom_settings,
        this.settings.prevent_swf_caching && (this.settings.flash_url = this.settings.flash_url + (this.settings.flash_url.indexOf("?") < 0 ? "?" : "&") + "preventswfcaching=" + (new Date).getTime()),
        this.settings.preserve_relative_urls || (this.settings.upload_url = SWFUpload.completeURL(this.settings.upload_url),
        this.settings.button_image_url = SWFUpload.completeURL(this.settings.button_image_url)),
        delete this.ensureDefault
    }
    ,
    SWFUpload.prototype.loadFlash = function() {
        var a, b;
        if (null !== document.getElementById(this.movieName))
            throw "ID " + this.movieName + " is already in use. The Flash Object could not be added";
        if (a = document.getElementById(this.settings.button_placeholder_id) || this.settings.button_placeholder,
        void 0 == a)
            throw "Could not find the placeholder element: " + this.settings.button_placeholder_id;
        b = document.createElement("div"),
        b.innerHTML = this.getFlashHTML(),
        a.parentNode.replaceChild(b.firstChild, a),
        void 0 == window[this.movieName] && (window[this.movieName] = this.getMovieElement())
    }
    ,
    SWFUpload.prototype.getFlashHTML = function() {
        return ['<object id="', this.movieName, '" type="application/x-shockwave-flash" data="', this.settings.flash_url, '" width="', this.settings.button_width, '" height="', this.settings.button_height, '" class="swfupload">', '<param name="wmode" value="', this.settings.button_window_mode, '" />', '<param name="movie" value="', this.settings.flash_url, '" />', '<param name="quality" value="high" />', '<param name="menu" value="false" />', '<param name="allowScriptAccess" value="always" />', '<param name="flashvars" value="' + this.getFlashVars() + '" />', "</object>"].join("")
    }
    ,
    SWFUpload.prototype.getFlashVars = function() {
        var a = this.buildParamString()
          , b = this.settings.http_success.join(",");
        return ["movieName=", encodeURIComponent(this.movieName), "&amp;uploadURL=", encodeURIComponent(this.settings.upload_url), "&amp;useQueryString=", encodeURIComponent(this.settings.use_query_string), "&amp;requeueOnError=", encodeURIComponent(this.settings.requeue_on_error), "&amp;httpSuccess=", encodeURIComponent(b), "&amp;assumeSuccessTimeout=", encodeURIComponent(this.settings.assume_success_timeout), "&amp;params=", encodeURIComponent(a), "&amp;filePostName=", encodeURIComponent(this.settings.file_post_name), "&amp;fileTypes=", encodeURIComponent(this.settings.file_types), "&amp;fileTypesDescription=", encodeURIComponent(this.settings.file_types_description), "&amp;fileSizeLimit=", encodeURIComponent(this.settings.file_size_limit), "&amp;fileUploadLimit=", encodeURIComponent(this.settings.file_upload_limit), "&amp;fileQueueLimit=", encodeURIComponent(this.settings.file_queue_limit), "&amp;debugEnabled=", encodeURIComponent(this.settings.debug_enabled), "&amp;buttonImageURL=", encodeURIComponent(this.settings.button_image_url), "&amp;buttonWidth=", encodeURIComponent(this.settings.button_width), "&amp;buttonHeight=", encodeURIComponent(this.settings.button_height), "&amp;buttonText=", encodeURIComponent(this.settings.button_text), "&amp;buttonTextTopPadding=", encodeURIComponent(this.settings.button_text_top_padding), "&amp;buttonTextLeftPadding=", encodeURIComponent(this.settings.button_text_left_padding), "&amp;buttonTextStyle=", encodeURIComponent(this.settings.button_text_style), "&amp;buttonAction=", encodeURIComponent(this.settings.button_action), "&amp;buttonDisabled=", encodeURIComponent(this.settings.button_disabled), "&amp;buttonCursor=", encodeURIComponent(this.settings.button_cursor)].join("")
    }
    ,
    SWFUpload.prototype.getMovieElement = function() {
        if (void 0 == this.movieElement && (this.movieElement = document.getElementById(this.movieName)),
        null === this.movieElement)
            throw "Could not find Flash element";
        return this.movieElement
    }
    ,
    SWFUpload.prototype.buildParamString = function() {
        var a = this.settings.post_params
          , b = [];
        if ("object" == typeof a)
            for (var c in a)
                a.hasOwnProperty(c) && b.push(encodeURIComponent(c.toString()) + "=" + encodeURIComponent(a[c].toString()));
        return b.join("&amp;")
    }
    ,
    SWFUpload.prototype.destroy = function() {
        try {
            this.cancelUpload(null , !1);
            var a = null ;
            if (a = this.getMovieElement(),
            a && "unknown" == typeof a.CallFunction) {
                for (var b in a)
                    try {
                        "function" == typeof a[b] && (a[b] = null )
                    } catch (c) {}
                try {
                    a.parentNode.removeChild(a)
                } catch (d) {}
            }
            return window[this.movieName] = null ,
            SWFUpload.instances[this.movieName] = null ,
            delete SWFUpload.instances[this.movieName],
            this.movieElement = null ,
            this.settings = null ,
            this.customSettings = null ,
            this.eventQueue = null ,
            this.movieName = null ,
            !0
        } catch (e) {
            return !1
        }
    }
    ,
    SWFUpload.prototype.displayDebugInfo = function() {
        this.debug(["---SWFUpload Instance Info---\n", "Version: ", SWFUpload.version, "\n", "Movie Name: ", this.movieName, "\n", "Settings:\n", "	", "upload_url:               ", this.settings.upload_url, "\n", "	", "flash_url:                ", this.settings.flash_url, "\n", "	", "use_query_string:         ", this.settings.use_query_string.toString(), "\n", "	", "requeue_on_error:         ", this.settings.requeue_on_error.toString(), "\n", "	", "http_success:             ", this.settings.http_success.join(", "), "\n", "	", "assume_success_timeout:   ", this.settings.assume_success_timeout, "\n", "	", "file_post_name:           ", this.settings.file_post_name, "\n", "	", "post_params:              ", this.settings.post_params.toString(), "\n", "	", "file_types:               ", this.settings.file_types, "\n", "	", "file_types_description:   ", this.settings.file_types_description, "\n", "	", "file_size_limit:          ", this.settings.file_size_limit, "\n", "	", "file_upload_limit:        ", this.settings.file_upload_limit, "\n", "	", "file_queue_limit:         ", this.settings.file_queue_limit, "\n", "	", "debug:                    ", this.settings.debug.toString(), "\n", "	", "prevent_swf_caching:      ", this.settings.prevent_swf_caching.toString(), "\n", "	", "button_placeholder_id:    ", this.settings.button_placeholder_id.toString(), "\n", "	", "button_placeholder:       ", this.settings.button_placeholder ? "Set" : "Not Set", "\n", "	", "button_image_url:         ", this.settings.button_image_url.toString(), "\n", "	", "button_width:             ", this.settings.button_width.toString(), "\n", "	", "button_height:            ", this.settings.button_height.toString(), "\n", "	", "button_text:              ", this.settings.button_text.toString(), "\n", "	", "button_text_style:        ", this.settings.button_text_style.toString(), "\n", "	", "button_text_top_padding:  ", this.settings.button_text_top_padding.toString(), "\n", "	", "button_text_left_padding: ", this.settings.button_text_left_padding.toString(), "\n", "	", "button_action:            ", this.settings.button_action.toString(), "\n", "	", "button_disabled:          ", this.settings.button_disabled.toString(), "\n", "	", "custom_settings:          ", this.settings.custom_settings.toString(), "\n", "Event Handlers:\n", "	", "swfupload_loaded_handler assigned:  ", ("function" == typeof this.settings.swfupload_loaded_handler).toString(), "\n", "	", "file_dialog_start_handler assigned: ", ("function" == typeof this.settings.file_dialog_start_handler).toString(), "\n", "	", "file_queued_handler assigned:       ", ("function" == typeof this.settings.file_queued_handler).toString(), "\n", "	", "file_queue_error_handler assigned:  ", ("function" == typeof this.settings.file_queue_error_handler).toString(), "\n", "	", "upload_start_handler assigned:      ", ("function" == typeof this.settings.upload_start_handler).toString(), "\n", "	", "upload_progress_handler assigned:   ", ("function" == typeof this.settings.upload_progress_handler).toString(), "\n", "	", "upload_error_handler assigned:      ", ("function" == typeof this.settings.upload_error_handler).toString(), "\n", "	", "upload_success_handler assigned:    ", ("function" == typeof this.settings.upload_success_handler).toString(), "\n", "	", "upload_complete_handler assigned:   ", ("function" == typeof this.settings.upload_complete_handler).toString(), "\n", "	", "debug_handler assigned:             ", ("function" == typeof this.settings.debug_handler).toString(), "\n"].join(""))
    }
    ,
    SWFUpload.prototype.addSetting = function(a, b, c) {
        return this.settings[a] = void 0 == b ? c : b
    }
    ,
    SWFUpload.prototype.getSetting = function(a) {
        return void 0 != this.settings[a] ? this.settings[a] : ""
    }
    ,
    SWFUpload.prototype.callFlash = function(functionName, argumentArray) {
        argumentArray = argumentArray || [];
        var movieElement = this.getMovieElement(), returnValue, returnString;
        try {
            returnString = movieElement.CallFunction('<invoke name="' + functionName + '" returntype="javascript">' + __flash__argumentsToXML(argumentArray, 0) + "</invoke>"),
            returnValue = eval(returnString)
        } catch (ex) {
            throw "Call to " + functionName + " failed"
        }
        return void 0 != returnValue && "object" == typeof returnValue.post && (returnValue = this.unescapeFilePostParams(returnValue)),
        returnValue
    }
    ,
    SWFUpload.prototype.selectFile = function() {
        this.callFlash("SelectFile")
    }
    ,
    SWFUpload.prototype.selectFiles = function() {
        this.callFlash("SelectFiles")
    }
    ,
    SWFUpload.prototype.startUpload = function(a) {
        this.callFlash("StartUpload", [a])
    }
    ,
    SWFUpload.prototype.cancelUpload = function(a, b) {
        b !== !1 && (b = !0),
        this.callFlash("CancelUpload", [a, b])
    }
    ,
    SWFUpload.prototype.stopUpload = function() {
        this.callFlash("StopUpload")
    }
    ,
    SWFUpload.prototype.getStats = function() {
        return this.callFlash("GetStats")
    }
    ,
    SWFUpload.prototype.setStats = function(a) {
        this.callFlash("SetStats", [a])
    }
    ,
    SWFUpload.prototype.getFile = function(a) {
        return "number" == typeof a ? this.callFlash("GetFileByIndex", [a]) : this.callFlash("GetFile", [a])
    }
    ,
    SWFUpload.prototype.addFileParam = function(a, b, c) {
        return this.callFlash("AddFileParam", [a, b, c])
    }
    ,
    SWFUpload.prototype.removeFileParam = function(a, b) {
        this.callFlash("RemoveFileParam", [a, b])
    }
    ,
    SWFUpload.prototype.setUploadURL = function(a) {
        this.settings.upload_url = a.toString(),
        this.callFlash("SetUploadURL", [a])
    }
    ,
    SWFUpload.prototype.setPostParams = function(a) {
        this.settings.post_params = a,
        this.callFlash("SetPostParams", [a])
    }
    ,
    SWFUpload.prototype.addPostParam = function(a, b) {
        this.settings.post_params[a] = b,
        this.callFlash("SetPostParams", [this.settings.post_params])
    }
    ,
    SWFUpload.prototype.removePostParam = function(a) {
        delete this.settings.post_params[a],
        this.callFlash("SetPostParams", [this.settings.post_params])
    }
    ,
    SWFUpload.prototype.setFileTypes = function(a, b) {
        this.settings.file_types = a,
        this.settings.file_types_description = b,
        this.callFlash("SetFileTypes", [a, b])
    }
    ,
    SWFUpload.prototype.setFileSizeLimit = function(a) {
        this.settings.file_size_limit = a,
        this.callFlash("SetFileSizeLimit", [a])
    }
    ,
    SWFUpload.prototype.setFileUploadLimit = function(a) {
        this.settings.file_upload_limit = a,
        this.callFlash("SetFileUploadLimit", [a])
    }
    ,
    SWFUpload.prototype.setFileQueueLimit = function(a) {
        this.settings.file_queue_limit = a,
        this.callFlash("SetFileQueueLimit", [a])
    }
    ,
    SWFUpload.prototype.setFilePostName = function(a) {
        this.settings.file_post_name = a,
        this.callFlash("SetFilePostName", [a])
    }
    ,
    SWFUpload.prototype.setUseQueryString = function(a) {
        this.settings.use_query_string = a,
        this.callFlash("SetUseQueryString", [a])
    }
    ,
    SWFUpload.prototype.setRequeueOnError = function(a) {
        this.settings.requeue_on_error = a,
        this.callFlash("SetRequeueOnError", [a])
    }
    ,
    SWFUpload.prototype.setHTTPSuccess = function(a) {
        "string" == typeof a && (a = a.replace(" ", "").split(",")),
        this.settings.http_success = a,
        this.callFlash("SetHTTPSuccess", [a])
    }
    ,
    SWFUpload.prototype.setAssumeSuccessTimeout = function(a) {
        this.settings.assume_success_timeout = a,
        this.callFlash("SetAssumeSuccessTimeout", [a])
    }
    ,
    SWFUpload.prototype.setDebugEnabled = function(a) {
        this.settings.debug_enabled = a,
        this.callFlash("SetDebugEnabled", [a])
    }
    ,
    SWFUpload.prototype.setButtonImageURL = function(a) {
        void 0 == a && (a = ""),
        this.settings.button_image_url = a,
        this.callFlash("SetButtonImageURL", [a])
    }
    ,
    SWFUpload.prototype.setButtonDimensions = function(a, b) {
        this.settings.button_width = a,
        this.settings.button_height = b;
        var c = this.getMovieElement();
        void 0 != c && (c.style.width = a + "px",
        c.style.height = b + "px"),
        this.callFlash("SetButtonDimensions", [a, b])
    }
    ,
    SWFUpload.prototype.setButtonText = function(a) {
        this.settings.button_text = a,
        this.callFlash("SetButtonText", [a])
    }
    ,
    SWFUpload.prototype.setButtonTextPadding = function(a, b) {
        this.settings.button_text_top_padding = b,
        this.settings.button_text_left_padding = a,
        this.callFlash("SetButtonTextPadding", [a, b])
    }
    ,
    SWFUpload.prototype.setButtonTextStyle = function(a) {
        this.settings.button_text_style = a,
        this.callFlash("SetButtonTextStyle", [a])
    }
    ,
    SWFUpload.prototype.setButtonDisabled = function(a) {
        this.settings.button_disabled = a,
        this.callFlash("SetButtonDisabled", [a])
    }
    ,
    SWFUpload.prototype.setButtonAction = function(a) {
        this.settings.button_action = a,
        this.callFlash("SetButtonAction", [a])
    }
    ,
    SWFUpload.prototype.setButtonCursor = function(a) {
        this.settings.button_cursor = a,
        this.callFlash("SetButtonCursor", [a])
    }
    ,
    SWFUpload.prototype.queueEvent = function(a, b) {
        void 0 == b ? b = [] : b instanceof Array || (b = [b]);
        var c = this;
        if ("function" == typeof this.settings[a])
            this.eventQueue.push(function() {
                this.settings[a].apply(this, b)
            }),
            setTimeout(function() {
                c.executeNextEvent()
            }, 0);
        else if (null !== this.settings[a])
            throw "Event handler " + a + " is unknown or is not a function"
    }
    ,
    SWFUpload.prototype.executeNextEvent = function() {
        var a = this.eventQueue ? this.eventQueue.shift() : null ;
        "function" == typeof a && a.apply(this)
    }
    ,
    SWFUpload.prototype.unescapeFilePostParams = function(a) {
        var b, c = /[$]([0-9a-f]{4})/i, d = {};
        if (void 0 != a) {
            for (var e in a.post)
                if (a.post.hasOwnProperty(e)) {
                    b = e;
                    for (var f; null !== (f = c.exec(b)); )
                        b = b.replace(f[0], String.fromCharCode(parseInt("0x" + f[1], 16)));
                    d[b] = a.post[e]
                }
            a.post = d
        }
        return a
    }
    ,
    SWFUpload.prototype.testExternalInterface = function() {
        try {
            return this.callFlash("TestExternalInterface")
        } catch (a) {
            return !1
        }
    }
    ,
    SWFUpload.prototype.flashReady = function() {
        var a = this.getMovieElement();
        return a ? (this.cleanUp(a),
        this.queueEvent("swfupload_loaded_handler"),
        void 0) : (this.debug("Flash called back ready but the flash movie can't be found."),
        void 0)
    }
    ,
    SWFUpload.prototype.cleanUp = function(a) {
        try {
            if (this.movieElement && "unknown" == typeof a.CallFunction) {
                this.debug("Removing Flash functions hooks (this should only run in IE and should prevent memory leaks)");
                for (var b in a)
                    try {
                        "function" == typeof a[b] && (a[b] = null )
                    } catch (c) {}
            }
        } catch (d) {}
        window.__flash__removeCallback = function(a, b) {
            try {
                a && (a[b] = null )
            } catch (c) {}
        }
    }
    ,
    SWFUpload.prototype.fileDialogStart = function() {
        this.queueEvent("file_dialog_start_handler")
    }
    ,
    SWFUpload.prototype.fileQueued = function(a) {
        a = this.unescapeFilePostParams(a),
        this.queueEvent("file_queued_handler", a)
    }
    ,
    SWFUpload.prototype.fileQueueError = function(a, b, c) {
        a = this.unescapeFilePostParams(a),
        this.queueEvent("file_queue_error_handler", [a, b, c])
    }
    ,
    SWFUpload.prototype.fileDialogComplete = function(a, b, c) {
        this.queueEvent("file_dialog_complete_handler", [a, b, c])
    }
    ,
    SWFUpload.prototype.uploadStart = function(a) {
        a = this.unescapeFilePostParams(a),
        this.queueEvent("return_upload_start_handler", a)
    }
    ,
    SWFUpload.prototype.returnUploadStart = function(a) {
        var b;
        if ("function" == typeof this.settings.upload_start_handler)
            a = this.unescapeFilePostParams(a),
            b = this.settings.upload_start_handler.call(this, a);
        else if (void 0 != this.settings.upload_start_handler)
            throw "upload_start_handler must be a function";
        void 0 === b && (b = !0),
        b = !!b,
        this.callFlash("ReturnUploadStart", [b])
    }
    ,
    SWFUpload.prototype.uploadProgress = function(a, b, c) {
        a = this.unescapeFilePostParams(a),
        this.queueEvent("upload_progress_handler", [a, b, c])
    }
    ,
    SWFUpload.prototype.uploadError = function(a, b, c) {
        a = this.unescapeFilePostParams(a),
        this.queueEvent("upload_error_handler", [a, b, c])
    }
    ,
    SWFUpload.prototype.uploadSuccess = function(a, b, c) {
        a = this.unescapeFilePostParams(a),
        this.queueEvent("upload_success_handler", [a, b, c])
    }
    ,
    SWFUpload.prototype.uploadComplete = function(a) {
        a = this.unescapeFilePostParams(a),
        this.queueEvent("upload_complete_handler", a)
    }
    ,
    SWFUpload.prototype.debug = function(a) {
        this.queueEvent("debug_handler", a)
    }
    ,
    SWFUpload.prototype.debugMessage = function(a) {
        if (this.settings.debug) {
            var b, c = [];
            if ("object" == typeof a && "string" == typeof a.name && "string" == typeof a.message) {
                for (var d in a)
                    a.hasOwnProperty(d) && c.push(d + ": " + a[d]);
                b = c.join("\n") || "",
                c = b.split("\n"),
                b = "EXCEPTION: " + c.join("\nEXCEPTION: "),
                SWFUpload.Console.writeLine(b)
            } else
                SWFUpload.Console.writeLine(a)
        }
    }
    ,
    SWFUpload.Console = {},
    SWFUpload.Console.writeLine = function(a) {
        var b, c;
        try {
            b = document.getElementById("SWFUpload_Console"),
            b || (c = document.createElement("form"),
            document.getElementsByTagName("body")[0].appendChild(c),
            b = document.createElement("textarea"),
            b.id = "SWFUpload_Console",
            b.style.fontFamily = "monospace",
            b.setAttribute("wrap", "off"),
            b.wrap = "off",
            b.style.overflow = "auto",
            b.style.width = "700px",
            b.style.height = "350px",
            b.style.margin = "5px",
            c.appendChild(b)),
            b.value += a + "\n",
            b.scrollTop = b.scrollHeight - b.clientHeight
        } catch (d) {
            alert("Exception: " + d.name + " Message: " + d.message)
        }
    }
    ,
    window.SWFUpload = SWFUpload,
    new window.SWFUpload(option)
}
function $regionGetPath(a) {
    var b = $getRegionMap()
      , c = ["", "", "", "", "", "", !1];
    if (!(parseInt(a) >= 0))
        return c;
    for (var d in b) {
        if (d.toString() == a.toString())
            return c = [d, b[d][0], "", "", "", "", !0];
        c[0] = d,
        c[1] = b[d][0];
        for (var e in b[d][2]) {
            if (e.toString() == a.toString())
                return c = [c[0], c[1], e, b[d][2][e][0], "", "", !0];
            c[2] = e,
            c[3] = b[d][2][e][0];
            for (var f in b[d][2][e][2])
                if (f.toString() == a.toString())
                    return c = [c[0], c[1], c[2], c[3], f, b[d][2][e][2][f][0], !0];
            c[2] = "",
            c[3] = ""
        }
        c[0] = "",
        c[1] = ""
    }
    return c
}
function $arrayUniq(a) {
    for (var b = [], c = 0, d = a.length; d > c; c++)
        ("," + b + ",").indexOf("," + a[c] + ",") < 0 ? b.push(a[c]) : "";
    return b
}
function $stockManageNew(a) {
    var b = '<div class="attr_des" id="divStockColorTipArea"><img class="upload_tips_icon" src="' + basePath + '/resources/images/propublish/b.png">    <span style="color:#FF5500">请选择正确色系，色系将影响商品在搜索结果中的表现。</span>    具体颜色选项如不能满足需要，可在勾选后进行修改。</div><div class="attr_form" id="divSaleAttrSelectorArea"></div><div class="attr-add" style="margin-right:20px;" id="divAttrPreviewArea"></div><div style="display:none;margin-top:10px;margin-right:20px;" class="upload_tips" id="divStockMiddleTipArea"></div><div class="item-list" id="divStockTableArea"></div>'
      , c = {
        dom: null ,
        tmpl: {
            areaHTML: b
        },
        metaId: 0,
        saleKeyReg: /[?#][^:|,]*/g,
        tranName: "stockTransfer",
        saleAttrs: null ,
        saleAttrStr: "",
        stockList: null ,
        stockImgStr: "",
        middleTip: "",
        isAttrMode: !1,
        onChange: function() {}
    };
    if ($extend(c, a),
    !c.dom)
        return alert("不可用的dom节点，无法初始化"),
        !1;
    c.stockList || (c.stockList = []),
    window[c.tranName] && window[c.tranName].close();
    var d = {
        saleValsMap: {},
        stockValsMap: {},
        saleAttrs: [],
        stocks: [],
        stocksMap: {},
        sortAttrAndTransOldData: function(a) {
            var b = this;
            b.saleAttrs.sort(function(a, b) {
                return "49" == a.id ? -1 : "49" == b.id ? 1 : "42914" == a.id ? 1 : "42914" == b.id ? -1 : 0
            }),
            !c.isAttrMode && b.saleAttrs.length && b.stocks.length && $isEmptyObj(b.saleValsMap) && !$isEmptyObj(b.stockValsMap) ? window[c.tranName] = $skuidTran({
                oldAttr: b.stockValsMap,
                saleAttr: b.saleAttrs,
                callback: function() {
                    for (var d = [], e = {}, f = [], g = 0; g < this.saleAttr.length; g++) {
                        var h = this.saleAttr[g]
                          , i = this.attr[h.id];
                        if (i && i.length) {
                            var j = this.relation[h.id]
                              , k = this.oldAttr[j];
                            if (!(k && k.length >= i.length))
                                return alert("转换数据出错了[新老数据不一致]！请尝试重新转换"),
                                !1;
                            d.push({
                                key: h.id,
                                val: i
                            }),
                            f.push({
                                key: j,
                                val: k
                            }),
                            e[h.id] = i
                        }
                    }
                    for (var l = [[]], m = [[]], g = 0; g < d.length; g++) {
                        var n = d[g]
                          , o = f[g];
                        if (n.val && n.val.length) {
                            var p = l.concat()
                              , q = m.concat();
                            l = [],
                            m = [];
                            for (var r = 0; r < p.length; r++)
                                for (var s = 0; s < n.val.length; s++)
                                    l.push(p[r].concat(n.key + ":" + n.val[s])),
                                    m.push(q[r].concat(o.key + ":" + o.val[s]))
                        }
                    }
                    if (l[0] && l[0].length) {
                        for (var t = [], u = {}, g = 0; g < l.length; g++) {
                            for (var v = l[g].join("|"), w = {}, s = 0; s < b.stocks.length; s++) {
                                for (var x = b.stocks[s], y = !0, z = 0; z < m[g].length; z++) {
                                    var A = m[g][z];
                                    if ((x.attr + "|").indexOf(A + "|") < 0) {
                                        y = !1;
                                        break
                                    }
                                }
                                y && ($isEmptyObj(w) ? $extend(w, x) : (w.num = 1 * w.num + 1 * x.num,
                                w.price = Math.max(w.price, x.price)))
                            }
                            $isEmptyObj(w) && (w.stockId = "",
                            w.price = "",
                            w.num = "",
                            w.desc = "",
                            w.skuId = "");
                            var B = v.match(/#[^|]*/);
                            B && (v = v.replace(B[0], ""),
                            w.specAttr = B[0].replace(/[^\d]/g, "")),
                            w.saleAttr = v,
                            u[v.replace(c.saleKeyReg, "")] = w,
                            t.push(w)
                        }
                        return b.stocks = t,
                        b.stocksMap = u,
                        b.saleValsMap = e,
                        a.call && setTimeout(function() {
                            a.call(b)
                        }, 0),
                        !0
                    }
                    return alert("转换数据出错了[数据为空]！请尝试重新转换"),
                    !1
                }
            }) : a.call && setTimeout(function() {
                a.call(b)
            }, 0)
        },
        init: function(a) {
            var b = this;
            if (this.saleValsMap = {},
            this.stockValsMap = {},
            this.saleAttrs = [],
            this.stocks = [],
            this.stocksMap = {},
            0 != c.stockList.length)
                for (var d = 0; d < c.stockList.length; d++) {
                    var e = c.stockList[d];
                    if (e.saleAttr)
                        for (var f = e.saleAttr.split("|"), g = 0; g < f.length; g++) {
                            var h = f[g].split(":");
                            h[1] && (this.saleValsMap[h[0]] || (this.saleValsMap[h[0]] = []),
                            varIn = "49" == h[0] ? h[1] + (e.specAttr ? "#" + e.specAttr : "") : h[1],
                            $addUniq(this.saleValsMap[h[0]], varIn))
                        }
                    if (e.attr)
                        for (var f = e.attr.split("|"), g = 0; g < f.length; g++) {
                            var h = f[g].split(":");
                            h[1] && (this.stockValsMap[h[0]] || (this.stockValsMap[h[0]] = []),
                            $addUniq(this.stockValsMap[h[0]], h[1]))
                        }
                    this.stocks.push(e),
                    this.stocksMap[e.saleAttr.replace(c.saleKeyReg, "") || e.skuId] = e
                }
            else if (c.saleAttrStr && /^[\da-f|:,]+$/.test(c.saleAttrStr))
                for (var i = c.saleAttrStr.replace(/[\da-f]+/g, function(a) {
                    return parseInt(a, 16) + ""
                }), j = i.split("|"), d = 0; d < j.length; d++) {
                    var k = j[d].split(":");
                    2 == k.length && (this.saleValsMap[k[0]] = k[1].split(","))
                }
            c.saleAttrs ? (b.saleAttrs = c.saleAttrs,
            b.sortAttrAndTransOldData(a)) : c.metaId ? (window.classAttrCallBack = function(c) {
                if (!b.saleAttrs.length) {
                    if ("0" == c.errcode && c.attrList && c.attrList.length)
                        for (var d = 0; d < c.attrList.length; d++) {
                            var e = c.attrList[d];
                            (65536 & e.property || "42914" == e.id) && (e.prop = 16384 & e.property && 16 & e.property && !(32 & e.property) ? "mark" : 16384 & e.property ? "edit" : "read",
                            b.saleAttrs.push(e))
                        }
                    b.sortAttrAndTransOldData(a)
                }
            }
            ,
            $loadScript("http://my.paipai.com/cgi-bin/commoditypublishPP/genjsdata?classid=1&mc=" + c.metaId + "&tagid=" + (new Date).getTime())) : a.call && a.call(b)
        }
    };
    return d.init(function() {
        c.dom.innerHTML = c.tmpl.areaHTML;
        var a = $id("divStockColorTipArea")
          , b = $id("divSaleAttrSelectorArea")
          , e = $id("divAttrPreviewArea")
          , f = $id("divStockTableArea")
          , g = $id("divStockMiddleTipArea")
          , h = this;
        if (c.isAttrMode)
            b && this.saleAttrs && this.saleAttrs.length ? (c.saleSelector = $saleAttrsSelector({
                dom: b,
                attrs: this.saleAttrs,
                vals: this.saleValsMap,
                isEditMode: !1,
                onChange: function() {
                    c.onChange && c.onChange()
                }
            }),
            c.saleSelector.onChange(),
            a && $display(a, "none"),
            e && $display(e, "none"),
            f && $display(f, "none"),
            g && $display(g, "none")) : (c.dom.innerHTML = "",
            c.onChange && c.onChange());
        else {
            if (c.middleTip ? (g.innerHTML = c.middleTip,
            $display(g)) : (g.innerHTML = "",
            $display(g, "none")),
            a) {
                $display(a, "none");
                for (var i = 0; i < this.saleAttrs.length; i++) {
                    var j = this.saleAttrs[i];
                    if ("49" == j.id) {
                        $display(a);
                        break
                    }
                }
            }
            if (b && this.saleAttrs && this.saleAttrs.length)
                c.saleSelector = $saleAttrsSelector({
                    dom: b,
                    attrs: this.saleAttrs,
                    vals: this.saleValsMap,
                    onChange: function() {
//                    	event = event ? event : window.event; 
//             			var obj = event.srcElement ? event.srcElement : event.target; 
//             			var arr=$(obj).parent().parent().siblings().children().children("[type='checkbox']");
//             			if($(obj).is(':checked')){
//             				for(var i=0;i<arr.length;i++){
//             					var o1=$(arr[i])
//             					if(o1.is(':checked')){
//             						o1.attr("checked", false);
//             					}
//             				}
//             			}
                    	//删除sku
                    	removeSku=[];
                    	
                        for (var a = h.stocks.concat(), b = {}, d = 0; d < a.length; d++) {
                            var g = a[d]
                              , i = g.saleAttr.replace(c.saleKeyReg, "");
                            b[i] = g
                        }
                        var j = [];
                        c.stockTable && (j = c.stockTable.getValue());
                        for (var d = 0; d < j.length; d++) {
                            var g = j[d]
                              , i = g.saleAttr.replace(c.saleKeyReg, "");
                            b[i] ? $extend(b[i], g) : (a.push(g),
                            b[i] = g)
                        }
                        for (var k = this.getValue(), l = this.getTextValue(), m = [""], n = [""], d = 0; d < k.length; d++) {
                            var o = k[d]
                              , p = l[d];
                            if (o.val && o.val.length) {
                                var q = m.concat()
                                  , r = n.concat();
                                m = [],
                                n = [];
                                for (var s = 0; s < q.length; s++)
                                    for (var t = 0; t < o.val.length; t++)
                                        m.push(q[s] + (q[s] ? "|" : "") + o.key + ":" + o.val[t]),
                                        n.push(r[s] + (r[s] ? "|" : "") + p.key + ":" + p.val[t])
                            }
                        }
                        m[0] || (m = []),
                        m.length > 200 && alert("温馨提示:\n\n当前生成的库存(" + m.length + ")条，超过200条将无法正常保存，请取消部分库存！");
                        for (var u = [], d = 0; d < m.length; d++) {
                            var v = m[d]
                              , w = n[d]
                              , i = v.replace(c.saleKeyReg, "")
                              , x = {};
                            b[i] ? $extend(x, b[i]) : (x.stockId = "",
                            x.price = "",
                            x.num = "",
                            x.desc = "",
                            x.skuId = "",
                            x.externalNo = "");
                            var y = v.match(/#[^|]*/);
                            y && (v = v.replace(y[0], ""),
                            x.specAttr = y[0].replace(/[^\d]/g, "")),
                            x.saleAttr = v,
                            x.attr = w,
                            u.push(x)
                        }
//                        window.newsku=u;
//                        window.sku=l;
                        c.stockTable ? c.stockTable.setValue(u) : f && (c.stockTable = $stockTableNew({
                            dom: f,
                            stockList: u,
                            onChange: function() {
                                c.onChange && c.onChange()
                            }
                        }),
                        c.stockTable.onChange()),
                        c.stockPreview ? c.stockPreview.setValue(l) : e && (c.stockPreview = $stockPreview({
                            dom: e,
                            vals: l,
                            stockImgStr: c.stockImgStr
                        }))
                        
                    }
                }),
                c.saleSelector.onChange();
            else if (this.stocks && this.stocks.length) {
                if (e) {
                    var k = [];
                    for (var i in d.stockValsMap)
                        k.push({
                            key: i,
                            val: d.stockValsMap[i]
                        });
                    c.stockPreview = $stockPreview({
                        dom: e,
                        vals: k
                    })
                }
                f && (c.stockTable = $stockTableNew({
                    dom: f,
                    stockList: this.stocks,
                    onChange: function() {
                        c.onChange && c.onChange()
                    }
                }),
                c.stockTable.onChange())
            } else
                c.dom.innerHTML = '<div class="attr_des"><img class="upload_tips_icon" src="' + basePath + '/resources/images/propublish/b.png"><span style="color:#FF5500">无销售属性，无法启用多库存模式！</span></div>',
                c.onChange && c.onChange()
        }
    }),
    c.getStockList = function() {
        return this.stockTable ? this.stockTable.getValue() : null
    }
    ,
    c.getMaxPrice = function() {
        return this.stockTable && this.stockTable.getMaxPrice ? this.stockTable.getMaxPrice() : 0
    }
    ,
    c.getMinPrice = function() {
        return this.stockTable && this.stockTable.getMinPrice ? this.stockTable.getMinPrice() : 0
    }
    ,
    c.getTotalNum = function() {
        return this.stockTable && this.stockTable.getTotalNum ? this.stockTable.getTotalNum() : 0
    }
    ,
    c.check = function() {
        return this.isAttrMode ? this.saleSelector && !this.saleSelector.check() ? {
            err: !0,
            errMsg: "带*号的销售属性项必须选择！"
        } : {
            err: !1,
            errMsg: ""
        } : this.saleSelector && !this.saleSelector.check() ? {
            err: !0,
            errMsg: "带*号的销售属性项必须选择！"
        } : this.stockTable ? this.stockTable.check() : {
            err: 2,
            errMsg: "无销售属性，无法启用库存！"
        }
    }
    ,
    c.getStockPicStr = function() {
        return this.stockPreview ? this.stockPreview.getValue() : ""
    }
    ,
    c.getSaleAttrStr = function() {
        return this.saleSelector ? this.saleSelector.getValueStr().replace(this.saleKeyReg, "").replace(/\d+/g, function(a) {
            return parseInt(a, 10).toString(16)
        }) : ""
    }
    ,
    c
}
function $getPrev(a) {
    do
        a = a.previousSibling;
    while (a && 1 != a.nodeType);return a
}
function $saleAttrsSelector(a) {
    var b = '<ul class="attr_list attr_list_compact"></ul>'
      , c = '<%	for(var i=0;i<attrs.length;i++){var attr=attrs[i];%><%	if(attr.id=="42914"){%><li control="42914" style="display:none">    <div class="attr_tit"></div>    <div class="attr_cnt"><button onclick="$display($getNext(this.parentNode.parentNode));$displayHide(this.parentNode.parentNode);return false;" type="button">自定义库存</button></div></li><%	}%><li>    <div class="attr_tit">	<%	if(attr.isRequired){%>		<em class="asterisk">*</em>	<%	}%>	<%	if(attr.canRename){%>		<input type="text" class="input_new_attr" attrid="<%=attr.id%>" value="<%=(attr.customName||attr.name)%>">	<%	}else{%>		<%=attr.name%>	<%	}%>	</div>    <div class="attr_cnt" attrid="<%=attr.id%>"></div></li><%	}%>'
      , d = /[^\u4e00-\u9fa5\w\*\(\) （）_＿——\.\/\\\-%\@\+]/g
      , e = {
        dom: null ,
        tmpl: {
            areaHTML: b,
            listHTML: c
        },
        attrs: [],
        vals: {},
        isEditMode: !0,
        customMaxLength: 20,
        customInVaildNameReg: d,
        onChange: function() {}
    };
    if ($extend(e, a),
    !e.dom)
        return alert("不可用的dom节点，无法初始化"),
        !1;
    if (!e.attrs.length)
        return alert("无销售属性,无法初始化"),
        !1;
    var f = {
        vals: {},
        attrs: [],
        attrsMap: {},
        inVaildNameMap: {},
        nameCustomAttr: function(a, b) {
            var c = this.attrsMap[a];
            if (c) {
                var b = b.replace(e.customInVaildNameReg || "", "").substr(0, e.customMaxLength);
                if (!b)
                    return !1;
                if (c.name != b && c.customName != b) {
                    if (this.inVaildNameMap[b])
                        return !1;
                    c.customName && delete this.inVaildNameMap[c.customName],
                    c.customName = b,
                    this.inVaildNameMap[b] = 1
                } else
                    c.name == b && (c.customName && delete this.inVaildNameMap[c.customName],
                    delete c.customName);
                return b
            }
        },
        //初始化库存属性
        init: function() {
            this.vals = {},
            this.attrs = [],
            this.attrsMap = {},
            this.inVaildNameMap = {};
            for (var a = 0; a < e.attrs.length; a++) {
                var b = e.attrs[a]
                  , c = {
                    id: b.id,
                    //id
                    name: b.name,
                    //属性名字
                    children: b.opList,
                    //属性子列表
                    isRequired: !!(131072 & b.property),
                    //是都必填
                    canModify: !!(16384 & b.property),
                    //是否可改写
                    canRemark: !(!(16384 & b.property && 16 & b.property) || 32 & b.property),
                    //
                    canRename: !!(8192 & b.property)//是否可以重命名
                };
                //42914对应数据库自定义项的id,49对应颜色id(不可改，如果要改，请同时修改数据库)
                (e.isEditMode || "42914" != c.id || c.isRequired) && (c.canRemark && (c.canModify = !1),
                "42914" == c.id ? (c.canModify = !0,
                c.canRemark = !1,
                c.canRename = !0) : "49" == c.id && (c.canModify = !0,
                c.canRemark = !1,
                c.canRename = !1),
                this.attrs.push(c),
                this.attrsMap[c.id] = c,
                this.inVaildNameMap[c.name] = 1)
            }
            for (var a in e.vals) {
                var d = (a + "").match(/^(\d+)(\?[^#]+)?$/);
                if (d && 3 == d.length) {
                    var b = this.attrsMap[d[1]];
                    if (b) {
                        if (d[2]) {
                            var f = d[2].replace(e.customInVaildNameReg || "", "").substr(0, e.customMaxLength);
                            f == b.name || this.inVaildNameMap[f] || (b.customName = f,
                            this.inVaildNameMap[f] = 1)
                        }
                        this.vals[b.id] = e.vals[a]
                    }
                }
            }
        }
    };
    f.init();
    var g = document.createElement("div");
    g.innerHTML = e.tmpl.areaHTML;
    var h = $getLast(g);
    return e.dom.innerHTML = "",
    e.dom.appendChild(h),
    h.flush = function() {
        this.innerHTML = $txTpl(e.tmpl.listHTML, {
            attrs: f.attrs
        });
        for (var a = this, b = $attr("attrid", !0, this), c = 0; c < b.length; c++) {
            var d = b[c]
              , g = d.getAttribute("attrid")
              , h = f.attrsMap[g];
            if (h)
                if ("INPUT" == d.tagName)
                    d.onfocus = function() {
                        var a = f.attrsMap[this.getAttribute("attrid")];
                        a.name == this.value && (this.value = "")
                    }
                    ,
                    d.onblur = function() {
                        var a = f.attrsMap[this.getAttribute("attrid")]
                          , b = f.nameCustomAttr(a.id, $strTrim(this.value) || a.name);
                        b === !1 && alert("不能使用已有属性名，且属性名不能重复！"),
                        this.value = b || a.customName || a.name,
                        e.change()
                    }
                    ;
                    //颜色展示
                else if ("DIV" == d.tagName && (h.selector = "49" == h.id ? colorMultiSelector_sas({
                    dom: d,
                    vals: f.vals["49"],
                    canModify: e.isEditMode,
                    canDefine: e.isEditMode,
                    onChange: function() {
                        e.change()
                    }
                }) : attrMultiSelector_sas({
                    dom: d,
                    vals: f.vals[h.id],
                    canModify: h.canModify & e.isEditMode,
                    canRemark: h.canRemark & e.isEditMode,
                    children: h.children,
                    onChange: function() {
                        e.change()
                    }
                }),
                "42914" == h.id && (!f.vals[h.id] || 0 == f.vals[h.id].length))) {
                    //自定义项展示
                    var i = $attr("control", "42914", a)[0];
                    i && ($display(i),
                    $displayHide($getNext(i)))
                }
        }
    }
    ,
    h.flush(),
    e.check = function() {
        for (var a = 0; a < f.attrs.length; a++) {
            var b = f.attrs[a];
            if (b.isRequired) {
                var c = b.selector.getValue();
                if (!c || 0 == c.length)
                    return !1
            }
        }
        return !0
    }
    ,
    e.getValue = function() {
        for (var a = [], b = 0; b < f.attrs.length; b++) {
            var c = f.attrs[b]
              , d = {};
            d.key = c.id,
            c.canRename && c.customName && c.customName != c.name && (d.key += "?" + c.customName),
            d.val = c.selector.getValue() || [],
            a.push(d)
        }
        return a
    }
    ,
    e.getValueStr = function() {
        for (var a = this.getValue(), b = [], c = 0; c < a.length; c++)
            a[c].val && a[c].val.length > 0 && b.push(a[c].key + ":" + a[c].val.join(","));
        return b.join("|")
    }
    ,
    e.getMapValue = function() {
        var a = {};
        for (var b in f.attrsMap) {
            var c = f.attrsMap[b]
              , d = b;
            c.canRename && c.customName && c.customName != c.name && (d += "?" + c.customName),
            a[d] = c.selector.getValue() || []
        }
        return a
    }
    ,
    e.getTextValue = function() {
        for (var a = [], b = 0; b < f.attrs.length; b++) {
            var c = f.attrs[b]
              , d = {};
            d.key = c.canRename && c.customName && c.customName != c.name ? c.customName : c.name,
            d.val = c.selector.getTextValue() || [],
            a.push(d)
        }
        return a
    }
    ,
    e.getTextValueStr = function() {
        for (var a = this.getTextValue(), b = [], c = 0; c < a.length; c++)
            a[c].val && a[c].val.length > 0 && b.push(a[c].key + ":" + a[c].val.join(","));
        return b.join("|")
    }
    ,
    e.getMapTextValue = function() {
        var a = {};
        for (var b in f.attrsMap) {
            var c = f.attrsMap[b]
              , d = "";
            d = c.canRename && c.customName && c.customName != c.name ? c.customName : c.name,
            a[d] = c.selector.getTextValue() || []
        }
        return a
    }
    ,
    e.setValue = function(a) {
        e.vals = a,
        f.init(),
        h.flush()
    }
    ,
    e.textValStr = e.getTextValueStr(),
    e.change = function() {
        var a = this.getTextValueStr();
        a != this.textValStr && (this.textValStr = a,
        this.onChange && this.onChange())
    }
    ,
    e
}
function colorMultiSelector_sas(a) {
    var b = [{
        id: "6",
        name: "黑色系",
        index: 0
    }, {
        id: "5",
        name: "白色系",
        index: 1
    }, {
        id: "11",
        name: "灰色系",
        index: 2
    }, {
        id: "14",
        name: "棕色系",
        index: 3
    }, {
        id: "2",
        name: "红色系",
        index: 4
    }, {
        id: "12",
        name: "橙色系",
        index: 5
    }, {
        id: "10",
        name: "黄色系",
        index: 6
    }, {
        id: "13",
        name: "紫色系",
        index: 7
    }, {
        id: "9",
        name: "蓝色系",
        index: 8
    }, {
        id: "1",
        name: "绿色系",
        index: 9
    }, {
        id: "3",
        name: "其他",
        index: 10
    }]
      , c = [{
        id: "13",
        name: "黑色",
        csys: "6",
        rgb: "#000"
    }, {
        id: "1",
        name: "白色",
        csys: "5",
        rgb: "#FFF"
    }, {
        id: "44",
        name: "象牙白色",
        csys: "5",
        rgb: "#FFFFF0"
    }, {
        id: "332",
        name: "米白色",
        csys: "5",
        rgb: "#F5F5F0"
    }, {
        id: "15",
        name: "灰色",
        csys: "11",
        rgb: "#808080"
    }, {
        id: "24",
        name: "深灰色",
        csys: "11",
        rgb: "#555555"
    }, {
        id: "21",
        name: "浅灰色",
        csys: "11",
        rgb: "#C0C0C0"
    }, {
        id: "471",
        name: "冷灰色",
        csys: "11",
        rgb: "#808A87"
    }, {
        id: "14",
        name: "银色",
        csys: "11",
        rgb: "#E6E6D7"
    }, {
        id: "39",
        name: "棕褐色",
        csys: "14",
        rgb: "#5E2612"
    }, {
        id: "20",
        name: "巧克力色",
        csys: "14",
        rgb: "#A05C2D"
    }, {
        id: "49",
        name: "咖啡色",
        csys: "14",
        rgb: "#6A4B23"
    }, {
        id: "40",
        name: "深卡其布色",
        csys: "14",
        rgb: "#BDB76B"
    }, {
        id: "17",
        name: "驼色",
        csys: "14",
        rgb: "#B58453"
    }, {
        id: "5",
        name: "红色",
        csys: "2",
        rgb: "#FF0000"
    }, {
        id: "38",
        name: "粉红色",
        csys: "2",
        rgb: "#FFC0CB"
    }, {
        id: "52",
        name: "酒红色",
        csys: "2",
        rgb: "#821E32"
    }, {
        id: "144",
        name: "玫红色",
        csys: "2",
        rgb: "#FF215E"
    }, {
        id: "601",
        name: "肉粉色",
        csys: "2",
        rgb: "#FA8072"
    }, {
        id: "7",
        name: "橙色",
        csys: "12",
        rgb: "#FF8000"
    }, {
        id: "94",
        name: "橙红色",
        csys: "12",
        rgb: "#FF4500"
    }, {
        id: "108",
        name: "橙黄色",
        csys: "12",
        rgb: "#ED9121"
    }, {
        id: "715",
        name: "土黄色",
        csys: "12",
        rgb: "#D6A936"
    }, {
        id: "132",
        name: "香槟色",
        csys: "12",
        rgb: "#E2CE55"
    }, {
        id: "8",
        name: "黄色",
        csys: "10",
        rgb: "#FFFF00"
    }, {
        id: "671",
        name: "中黄色",
        csys: "10",
        rgb: "#FFD800"
    }, {
        id: "23",
        name: "淡黄色",
        csys: "10",
        rgb: "#FDFC82"
    }, {
        id: "34",
        name: "杏色",
        csys: "10",
        rgb: "#E6FC8F"
    }, {
        id: "9",
        name: "金色",
        csys: "10",
        rgb: "#F2C056"
    }, {
        id: "6",
        name: "紫色",
        csys: "13",
        rgb: "#800080"
    }, {
        id: "25",
        name: "深紫色",
        csys: "13",
        rgb: "#4B0082"
    }, {
        id: "107",
        name: "浅紫色",
        csys: "13",
        rgb: "#B280F7"
    }, {
        id: "27",
        name: "紫罗兰色",
        csys: "13",
        rgb: "#C71585"
    }, {
        id: "202",
        name: "紫红色",
        csys: "13",
        rgb: "#FF00FF"
    }, {
        id: "12",
        name: "蓝色",
        csys: "9",
        rgb: "#1E90FF"
    }, {
        id: "26",
        name: "深蓝色",
        csys: "9",
        rgb: "#00008B"
    }, {
        id: "68",
        name: "宝蓝色",
        csys: "9",
        rgb: "#0000FF"
    }, {
        id: "19",
        name: "天蓝色",
        csys: "9",
        rgb: "#00BFFF"
    }, {
        id: "57",
        name: "浅蓝色",
        csys: "9",
        rgb: "#A8CEFA"
    }, {
        id: "11",
        name: "绿色",
        csys: "1",
        rgb: "#228B22"
    }, {
        id: "48",
        name: "墨绿色",
        csys: "1",
        rgb: "#004630"
    }, {
        id: "18",
        name: "军绿色",
        csys: "1",
        rgb: "#556B2F"
    }, {
        id: "22",
        name: "浅绿色",
        csys: "1",
        rgb: "#90EE90"
    }, {
        id: "31",
        name: "抹茶绿色",
        csys: "1",
        rgb: "#C7FF2F"
    }, {
        id: "28",
        name: "花色",
        csys: "3",
        className: "p_fancy"
    }, {
        id: "29",
        name: "透明",
        csys: "3",
        className: "p_transparent"
    }, {
        id: "33",
        name: "荧光",
        csys: "3"
    }, {
        id: "753",
        name: "自定义颜色1",
        csys: null
    }, {
        id: "754",
        name: "自定义颜色2",
        csys: null
    }, {
        id: "755",
        name: "自定义颜色3",
        csys: null
    }, {
        id: "756",
        name: "自定义颜色4",
        csys: null
    }, {
        id: "757",
        name: "自定义颜色5",
        csys: null
    }, {
        id: "758",
        name: "自定义颜色6",
        csys: null
    }, {
        id: "759",
        name: "自定义颜色7",
        csys: null
    }, {
        id: "760",
        name: "自定义颜色8",
        csys: null
    }, {
        id: "761",
        name: "自定义颜色9",
        csys: null
    }, {
        id: "762",
        name: "自定义颜色10",
        csys: null
    }, {
        id: "763",
        name: "自定义颜色11",
        csys: null
    }, {
        id: "764",
        name: "自定义颜色12",
        csys: null
    }, {
        id: "765",
        name: "自定义颜色13",
        csys: null
    }, {
        id: "766",
        name: "自定义颜色14",
        csys: null
    }, {
        id: "767",
        name: "自定义颜色15",
        csys: null
    }, {
        id: "768",
        name: "自定义颜色16",
        csys: null
    }, {
        id: "769",
        name: "自定义颜色17",
        csys: null
    }, {
        id: "770",
        name: "自定义颜色18",
        csys: null
    }, {
        id: "771",
        name: "自定义颜色19",
        csys: null
    }, {
        id: "772",
        name: "自定义颜色20",
        csys: null
    }, {
        id: "773",
        name: "自定义颜色21",
        csys: null
    }, {
        id: "774",
        name: "自定义颜色22",
        csys: null
    }, {
        id: "775",
        name: "自定义颜色23",
        csys: null
    }, {
        id: "776",
        name: "自定义颜色24",
        csys: null
    }]
      , d = '<table class="tb_colors">    <colgroup><col style="width:20%;"><col style="width:20%;"><col style="width:20%;"><col style="width:20%;"><col style=""></colgroup>    <tbody>    <tr>        <td><div class="color_sys black_sys" csys="6"></div></td>        <td><div class="color_sys white_sys" csys="5"></div></td>        <td><div class="color_sys gray_sys"  csys="11"></div></td>        <td><div class="color_sys brown_sys" csys="14"></div></td>        <td><div class="color_sys red_sys"   csys="2"></div></td>    </tr>    <tr>        <td><div class="color_sys orange_sys" csys="12"></div></td>        <td><div class="color_sys yellow_sys" csys="10"></div></td>        <td><div class="color_sys purple_sys" csys="13"></div></td>        <td><div class="color_sys blue_sys"   csys="9"></div></td>        <td><div class="color_sys green_sys"  csys="1"></div></td>    </tr>	<tr>        <td colspan="5"><div class="else_sys" csys="3"><div class="name">其它：</div>{#sys3#}</div></td>	</tr>    </tbody></table>'
      , e = '<div class="name"><%=name%></div><ul class="clear" style="overflow:hidden;"><%  for(var i=0,l=colors.length;i<l;i++){ var color=colors[i];%>	<li>		<label style="margin:0">			<input type="checkbox" value="<%=color.id%>" act="chk" />			<%if(color.rgb||color.className){%>			<span class="preview <%=color.className||""%>" style="background-color:<%=color.rgb||""%>;"></span>			<%}%>			<span><%=color.name%></span>		</label>		<input type="text" class="input_memo" style="display:none" maxlength="20" value="<%=(color.customName||color.name)%>" colorid="<%=color.id%>"/>	</li><%	}%></ul><%if(canDefine){%><a class="add_more" href="#add" act="add">添加颜色</a><%}%>'
      , f = /[^\u4e00-\u9fa5\w\*\(\) （）\.\/\\\-%\@\+]/g
      , g = {
        dom: null ,
        max: 50,
        vals: [],
        tmpl: {
            tableHTML: d,
            listHTML: e
        },
        onChange: function() {},
        customColors: null ,
        customMaxLength: 20,
        customInVaildNameReg: f,
        canModify: !0,
        canDefine: !0,
        retColorSys: !0,
        colorSysId: "39929"
    };
    if ($extend(g, a),
    !g.dom)
        return alert("不可用的dom节点"),
        !1;
    var h = {
        valMap: {},
        valCount: 0,
        colorShow: [],
        colorHide: [],
        colorDetail: [],
        colorSysMap: {},
        inVaildNameMap: {},
        colorDetailMap: {},
        defaultColorMap: {},
        reset: function() {
            this.valMap = {},
            this.valCount = 0,
            this.colorShow = [],
            this.colorHide = [],
            this.colorDetail = [],
            this.colorSysMap = {},
            this.inVaildNameMap = {},
            this.colorDetailMap = {},
            this.defaultColorMap = {}
        },
        init: function() {
            this.reset();
            for (var a = 0; a < b.length; a++) {
                var d = b[a];
                this.colorSysMap[d.id] = d
            }
            for (var a = 0; a < c.length; a++) {
                var e = c[a];
                this.defaultColorMap[e.id] = e;
                var f = {};
                $extend(f, e),
                this.colorDetail.push(f),
                this.colorDetailMap[f.id] = f,
                this.inVaildNameMap[f.name] = 1
            }
            for (var a = 0; a < g.vals.length; a++) {
                var h = (g.vals[a] + "").match(/^(\d+)(\?[^#]+)?(#\d+)?$/);
                if (h && 4 == h.length) {
                    var f = this.colorDetailMap[h[1]];
                    if (f && this.valCount < g.max) {
                        if (h[2]) {
                            var i = h[2].replace(g.customInVaildNameReg || "", "").substr(0, g.customMaxLength);
                            g.canModify && i != f.name && !this.inVaildNameMap[i] && (f.customName = i,
                            this.inVaildNameMap[i] = 1)
                        }
                        if (!g.canDefine && !f.csys)
                            continue;
                        if (!f.csys)
                            if (h[3]) {
                                var j = h[3].substr(1);
                                f.csys = this.colorSysMap[j] ? j : "3"
                            } else
                                f.csys = "3";
                        f.csys && !this.valMap[f.id] && (this.valMap[f.id] = 1,
                        this.valCount++)
                    }
                }
            }
            for (var a = 0; a < this.colorDetail.length; a++) {
                var f = this.colorDetail[a];
                f.csys ? this.colorShow.push(f) : this.colorHide.push(f)
            }
        },
        getValMap: function() {
            return this.valMap
        },
        checkVal: function(a) {
            return this.valMap[a]
        },
        insertVal: function(a) {
            return this.valMap[a] ? !0 : this.valCount < g.max ? (this.valMap[a] = 1,
            this.valCount++,
            !0) : !1
        },
        outVal: function(a) {
            this.valMap[a] && (delete this.valMap[a],
            this.valCount--);
            var b = this.getColorById(a);
            b && (delete b.customName,
            this.genInVaildNameMap())
        },
        genInVaildNameMap: function() {
            this.inVaildNameMap = {};
            for (var a in this.colorDetailMap) {
                var b = this.colorDetailMap[a];
                this.inVaildNameMap[b.name] = 1,
                this.inVaildNameMap[b.customName || ""] = 1
            }
        },
        getColorSysById: function(a) {
            var b = {};
            return $extend(b, this.colorSysMap[a]),
            b.canDefine = g.canDefine,
            b
        },
        getDefaultColorById: function(a) {
            var b = {};
            return $extend(b, this.defaultColorMap[a]),
            b
        },
        getColorById: function(a) {
            return this.colorDetailMap[a]
        },
        getColorsByCsys: function(a) {
            for (var b = [], c = 0; c < this.colorShow.length; c++)
                this.colorShow[c].csys == a && b.push(this.colorShow[c]);
            return b
        },
        getCustomColorByCsys: function(a) {
            if (this.colorHide.length) {
                var b = this.colorHide.shift();
                return b.csys = a,
                delete b.customName,
                this.colorShow.push(b),
                b
            }
            return !1
        },
        freeCustomColor: function(a) {
            var b = this.defaultColorMap[a];
            if (b && !b.csys) {
                for (var c = 0; c < this.colorShow.length; c++)
                    if (this.colorShow[c].id == a) {
                        var d = this.colorShow.splice(c, 1)[0];
                        return delete d.customName,
                        this.colorHide.push(d),
                        this.colorHide.sort(function(a, b) {
                            return a.id - b.id
                        }),
                        this.genInVaildNameMap(),
                        !0
                    }
                return !1
            }
            return !1
        },
        nameCustomColor: function(a, b) {
            var c = this.colorDetailMap[a];
            if (c) {
                var b = b.replace(g.customInVaildNameReg || "", "").substr(0, g.customMaxLength);
                if (!b)
                    return !1;
                if (c.name != b && c.customName != b) {
                    if (this.inVaildNameMap[b])
                        return !1;
                    c.customName = b,
                    this.genInVaildNameMap()
                } else
                    c.name == b && (delete c.customName,
                    this.genInVaildNameMap());
                return b
            }
        }
    };
    h.init();
    var i = document.createElement("div");
    i.innerHTML = g.tmpl.tableHTML;
    var j = i.getElementsByTagName("table")[0];
    j.flushByCsys = function(a) {
        var b = $attr("csys", a + "", this)[0];
        if (b) {
            var c = h.getColorSysById(a);
            c.colors = h.getColorsByCsys(a),
            b.innerHTML = $txTpl(g.tmpl.listHTML, c);
            for (var d = b.getElementsByTagName("input"), e = 0; e < d.length; e++)
                if ("text" == d[e].type)
                    d[e].onfocus = function() {
                        var a = this.getAttribute("colorid")
                          , b = h.getColorById(a);
                        b.name == this.value && (this.value = "")
                    }
                    ,
                    d[e].onblur = function() {
                        var a = this.getAttribute("colorid")
                          , b = h.getColorById(a)
                          , c = h.nameCustomColor(a, $strTrim(this.value) || b.name);
                        c === !1 && alert("不能使用系统默认颜色名，且颜色名称不能重复！"),
                        this.value = c || b.customName || b.name,
                        g.change()
                    }
                    ;
                else if ("checkbox" == d[e].type) {
                    var f = d[e].value;
                    h.checkVal(f) && !function(a) {
                        setTimeout(function() {
                            a.click ? a.click() : $fireEvent(a, "click")
                        }, 0)
                    }(d[e])
                }
        }
    }
    ,
    j.onclick = function(a) {
        var b = $getTarget(a)
          , c = b.getAttribute("act")
          , d = this;
        if (c)
            switch (c) {
            case "add":
                var e = b.parentNode.getAttribute("csys")
                  , f = h.getCustomColorByCsys(e);
                f ? h.insertVal(f.id) ? (g.change(),
                this.flushByCsys(e),
                setTimeout(function() {
                    var a = $attr("colorid", f.id, d)[0];
                    a && a.focus()
                }, 0)) : (h.freeCustomColor(f.id),
                alert("最多只能选择" + g.max + "种颜色！")) : alert("自定义颜色个数已达上限！");
                break;
            case "chk":
                var i = b.value
                  , f = h.getDefaultColorById(i)
                  , e = h.getColorById(i).csys;
                if (f) {
                    if (b.checked)
                        if (h.insertVal(f.id)) {
                            if (g.canModify) {
                                var j = $getLast(b.parentNode)
                                  , k = $getNext(b.parentNode);
                                "" == k.value && (k.value = f.name),
                                $display(j, "none"),
                                $display(k)
                            }
                        } else
                            b.checked = !1,
                            alert("最多只能选择" + g.max + "种颜色！");
                    else if (h.outVal(f.id),
                    f.csys) {
                        var j = $getLast(b.parentNode)
                          , k = $getNext(b.parentNode);
                        k.value = "",
                        $display(j),
                        $display(k, "none")
                    } else
                        h.freeCustomColor(f.id),
                        this.flushByCsys(e);
                    g.change()
                }
            }
    }
    ,
    g.dom.innerHTML = "",
    g.dom.appendChild(j);
    for (var k = 0; k < b.length; k++)
        j.flushByCsys(b[k].id);
    return g.getValue = function() {
        for (var a = [], b = 0; b < h.colorShow.length; b++) {
            var c = h.colorShow[b];
            if (h.checkVal(c.id)) {
                var d = h.getColorSysById(c.csys);
                a[d.index] || (a[d.index] = []);
                var e = c.id + "";
                c.customName && c.customName != c.name && (e += "?" + c.customName),
                e += "#" + c.csys || "3",
                a[d.index].push(e)
            }
        }
        for (var f = [], b = 0; b < a.length; b++)
            a[b] && (f = f.concat(a[b]));
        return f
    }
    ,
    g.getTextValue = function() {
        for (var a = [], b = 0; b < h.colorShow.length; b++) {
            var c = h.colorShow[b];
            if (h.checkVal(c.id)) {
                var d = h.getColorSysById(c.csys);
                a[d.index] || (a[d.index] = []),
                a[d.index].push(c.customName || c.name)
            }
        }
        for (var e = [], b = 0; b < a.length; b++)
            a[b] && (e = e.concat(a[b]));
        return e
    }
    ,
    g.setValue = function(a) {
        g.vals = a,
        h.init();
        for (var c = 0; c < b.length; c++)
            j.flushByCsys(b[c].id)
    }
    ,
    g.valsStr = g.getValue().join("|"),
    g.change = function() {
        var a = this.getValue().join("|");
        a != this.valsStr && (this.valsStr = a,
        this.onChange && this.onChange())
    }
    ,
    g
}
function attrMultiSelector_sas(a) {
    var b = "<div class='cts1'></div>"
      , c = '<%	for(var i=0;i<children.length;i++){ var val=children[i];%>	<span class="label">		<label style="margin:0">			<input type="checkbox" value="<%=val.id%>"/>			<span><%=val.name%></span>		</label>		<%	if(canModify){%>		<span style="display:none" ><input class="input_new_attr" childid="<%=val.id%>" type="text" value="<%=val.customName||val.name%>" maxlength="20"></span>		<%	}else if(canRemark){%>		<span style="display:none">			<span style="background-color:white;border:solid 1px #ddd;color:gray;display:inline-block;display:-moz-inline-stack;">				<%=val.name%>(<input style="border:0 none;color:black;width:<%=(val.customName?"30":"10")%>px" class="input_new_attr" childid="<%=val.id%>" type="text" value="<%=val.customName||""%>" emptywidth="10" fullwidth="30" maxlength="20" />)			</span>		</span>		<%	}%>	</span><%	}%>'
      , d = /[^\u4e00-\u9fa5\w\*\(\) （）_＿——\.\/\\\-%\@\+]/g
      , e = {
        dom: null ,
        max: 50,
        vals: [],
        tmpl: {
            areaHTML: b,
            listHTML: c
        },
        children: [],
        onChange: function() {},
        customMaxLength: 20,
        customInVaildNameReg: d,
        canModify: !1,
        canRemark: !1
    };
    if ($extend(e, a),
    !e.dom)
        return alert("不可用的dom节点，无法初始化"),
        !1;
    if (!e.children.length)
        return alert("无选项的属性,无法初始化"),
        !1;
    e.canRemark && (e.canModify = !1);
    var f = {
        valMap: {},
        valCount: 0,
        inVaildNameMap: {},
        children: [],
        childrenMap: {},
        init: function() {
            this.valMap = {},
            this.valCount = 0,
            this.inVaildNameMap = {},
            this.children = [],
            this.childrenMap = {};
            for (var a = 0; a < e.children.length; a++) {
                var b = e.children[a]
                  , c = {
                    id: b[0],
                    name: b[1]
                };
                this.children.push(c),
                this.childrenMap[c.id] = c,
                this.inVaildNameMap[c.name] = 1
            }
            for (var a = 0; a < e.vals.length; a++) {
                var d = (e.vals[a] + "").match(/^(\d+)(\?[^#]+)?(#\d+)?$/);
                if (d && 4 == d.length) {
                    var b = this.childrenMap[d[1]];
                    if (b && this.valCount < e.max) {
                        if (d[2] && (e.canRemark || e.canModify)) {
                            var f = d[2].replace(e.customInVaildNameReg || "", "").substr(0, e.customMaxLength);
                            e.canRemark ? b.customName = f.replace(/.*\(([^)]*)\)+/, "$1").replace(/\(|\)/g, "") : f == b.name || this.inVaildNameMap[f] || (b.customName = f,
                            this.inVaildNameMap[f] = 1)
                        }
                        this.valMap[b.id] || (this.valMap[b.id] = 1,
                        this.valCount++)
                    }
                }
            }
        },
        getValMap: function() {
            return this.valMap
        },
        checkVal: function(a) {
            return this.valMap[a]
        },
        insertVal: function(a) {
            return this.valMap[a] ? !0 : this.valCount < e.max ? (this.valMap[a] = 1,
            this.valCount++,
            !0) : !1
        },
        outVal: function(a) {
            this.valMap[a] && (delete this.valMap[a],
            this.valCount--);
            var b = this.getChildById(a);
            b && (delete b.customName,
            this.genInVaildNameMap())
        },
        getChildById: function(a) {
            return this.childrenMap[a]
        },
        genInVaildNameMap: function() {
            this.inVaildNameMap = {};
            for (var a in this.childrenMap) {
                var b = this.childrenMap[a];
                if (this.inVaildNameMap[b.name] = 1,
                e.canRemark) {
                    var c = b.name + "(" + b.customName + ")";
                    this.inVaildNameMap[c] = 1
                } else
                    this.inVaildNameMap[b.customName] = 1
            }
        },
        nameCustomChild: function(a, b) {
            var c = this.childrenMap[a];
            if (c) {
                var b = b.replace(e.customInVaildNameReg || "", "").substr(0, e.customMaxLength);
                if (e.canRemark)
                    return b ? (b = b.replace(/.*\(([^)]*)\)+/, "$1").replace(/\(|\)/g, ""),
                    c.customName = b) : delete c.customName,
                    b;
                if (!b)
                    return !1;
                if (c.name != b && c.customName != b) {
                    if (this.inVaildNameMap[b])
                        return !1;
                    c.customName = b,
                    this.genInVaildNameMap()
                } else
                    c.name == b && (delete c.customName,
                    this.genInVaildNameMap());
                return b
            }
            return !1
        }
    };
    f.init();
    var g = document.createElement("div");
    g.innerHTML = e.tmpl.areaHTML;
    var h = $getLast(g);
    return e.dom.innerHTML = "",
    e.dom.appendChild(h),
    h.onclick = function(a) {
        var b = $getTarget(a);
        if ("checkbox" == b.type) {
            var c = b.value
              , d = f.getChildById(c);
            if (d) {
                if (b.checked)
                    if (f.insertVal(d.id)) {
                        if (e.canModify || e.canRemark) {
                            var g = $getLast(b.parentNode)
                              , h = $getNext(b.parentNode)
                              , i = h.getElementsByTagName("input")[0];
                            g && h && i && (e.canModify && "" == i.value && (i.value = d.name),
                            $display(g, "none"),
                            $display(h))
                        }
                    } else
                        b.checked = !1,
                        alert("最多只能选择" + e.max + "项！");
                else if (f.outVal(d.id),
                e.canModify || e.canRemark) {
                    var g = $getLast(b.parentNode)
                      , h = $getNext(b.parentNode)
                      , i = h.getElementsByTagName("input")[0];
                    g && h && i && (i.value = "",
                    e.canRemark && (i.getAttribute("emptywidth") && (i.style.width = i.getAttribute("emptywidth") + "px"),
                    i.title = ""),
                    $display(g),
                    $display(h, "none"))
                }
                e.change()
            }
        }
    }
    ,
    h.flush = function() {
        this.innerHTML = $txTpl(e.tmpl.listHTML, {
            children: f.children,
            canModify: e.canModify,
            canRemark: e.canRemark
        });
        for (var a = this.getElementsByTagName("input"), b = 0, c = a.length; c > b; b++) {
            var d = a[b];
            "checkbox" == d.type ? f.checkVal(d.value) && !function(a) {
                setTimeout(function() {
                    a.click ? a.click() : $fireEvent(a, "click")
                }, 0)
            }(d) : "text" == d.type && (e.canRemark ? (d.onfocus = function() {
                this.getAttribute("fullwidth") && (this.style.width = this.getAttribute("fullwidth") + "px")
            }
            ,
            d.onblur = function() {
                var a = this.getAttribute("childid")
                  , b = f.getChildById(a)
                  , c = f.nameCustomChild(a, $strTrim(this.value));
                c === !1 && alert("不能使用已有属性值，且属性值不能重复！"),
                this.value = c || "",
                this.value ? this.title = b.name + "(" + this.value + ")" : (this.getAttribute("emptywidth") && (this.style.width = this.getAttribute("emptywidth") + "px"),
                this.title = ""),
                e.change()
            }
            ) : e.canModify && (d.onfocus = function() {
                var a = this.getAttribute("childid")
                  , b = f.getChildById(a);
                b.name == this.value && (this.value = "")
            }
            ,
            d.onblur = function() {
                var a = this.getAttribute("childid")
                  , b = f.getChildById(a)
                  , c = f.nameCustomChild(a, $strTrim(this.value) || b.name);
                c === !1 && alert("不能使用已有属性值，且属性值不能重复！"),
                this.value = c || b.customName || b.name,
                e.change()
            }
            ))
        }
    }
    ,
    h.flush(),
    e.getValue = function() {
        for (var a = f.getValMap(), b = f.children, c = [], d = 0; d < b.length; d++) {
            var e = b[d];
            if (a[e.id]) {
                var g = e.id + "";
                (this.canModify || this.canRemark) && e.customName && (this.canRemark || e.customName != e.name) && (g += "?" + e.customName),
                c.push(g)
            }
        }
        return c
    }
    ,
    e.getTextValue = function() {
        for (var a = f.getValMap(), b = f.children, c = [], d = 0; d < b.length; d++) {
            var e = b[d];
            a[e.id] && (e.id + "",
            this.canModify ? c.push(e.customName || e.name) : this.canRemark && e.customName ? c.push(e.name + "(" + e.customName + ")") : c.push(e.name))
        }
        return c
    }
    ,
    e.setValue = function(a) {
        e.vals = a,
        f.init(),
        h.flush()
    }
    ,
    e.valsStr = e.getValue().join("|"),
    e.change = function() {
        var a = this.getValue().join("|");
        a != this.valsStr && (this.valsStr = a,
        this.onChange && this.onChange())
    }
    ,
    e
}
function $skuidTran(a) {
    var b = {
        tpl: {
            stepFirst: '<div id="box_attr_filter_first" class="box_attr_filter"><p>亲爱的微客多卖家：</p><ul><li>您好，为了促进交易，我们对商品库存系统进行了升级</li><li>点击“下一步”完成迁移操作后，即可使用新库存系统。</li><li>若关闭本页面，可在下次编辑商品时再进行迁移。</li><p style="color:red">（使用第三方库存同步软件可能导致升级失败，建议暂时停用，并与软件提供方联系升级软件。）</p></ul><h2>属性筛选</h2><p>请选择您想保留的属性项（最多{#maxAttr#}个）：</p><table id="attr_filter" class="tb_attr_filter"><colgroup><col><col><col style="width:300px;"><col></colgroup>{#attr#}</table><div class="al_right"><button id="step1_next">下一步</button></div></div>',
            stepFirstTr: '<tr><td><input type="checkbox" name="attr_cbox" tag="attr" key="{#key#}"/></td><td class="al_right">{#key#}：</td><td>{#value#}</td><td id="attr_type_{#key#}" style="display:none">属性类型：<select name="sel_attr_type" id="sel_attr_type_{#key#}" key="{#key#}"><option value="">请选择属性</option>{#newAttr#}</select><span class="msg1-icon-right" style="margin-left:5px;display:none"></span><span class="msg1-icon-warn" style="margin-left:5px;display:none"></span></td></tr>',
            attr: '<span class="tag">{#value#}</span>',
            option: '<option value="{#value#}">{#key#}</option>',
            stepMiddle: '<div id="box_attr_filter_{#oldAttrName#}" class="box_attr_filter"><h2>属性编辑-{#newAttrName#}</h2><table class="tb_attr_filter tb_box_border"><tr><td><p><strong>原有数据</strong></p>{#oldAttrName#}：{#oldAttrValue#}</td><td><p><strong>帮助说明</strong></p>{#transRule#}</td></tr><tr><td colspan="2"><p><strong>新数据</strong></p><div class="row" style="max-height: 360px;overflow-y: auto;"><div class="row_title">{#newAttrName#}：</div><div class="row_con"><ul class="filter_line">{#attrLi#}</ul></div></div></td></tr></table><div class="al_right"><button id="step_{#oldAttrName#}_prev" class="left">返回上一步</button><button id="step_{#oldAttrName#}_next">下一步</button></div></div>',
            stepMiddleLi: '<li><span class="tag">{#exAttr#}</span><select key="{#exAttr#}"><option value="">请选择{#saleAttr#}</option>{#attrList#}</select><span class="msg1-icon-right" style="margin-left:5px;display:none"></span><span class="msg1-icon-warn" style="margin-left:5px;display:none"></span></li>',
            transRuleColor: "<ul><li>新系统中，颜色属性是唯一支持上传图片的属性。</li><li>新系统使用色系进行颜色聚类管理，请准确选择色系，这将影响到商品在搜索结果中的展现。</li></ul>",
            transRuleNotColor: "<ul><li>新系统中，除颜色属性外，其余属性不再支持上传图片。</li><li>请在下拉列表中选择与旧属性名匹配的项目。</li></ul>",
            stepLast: '<div id="box_attr_filter_last" class="box_attr_filter"><h2>核对信息</h2><table class="tb_attr_filter tb_box_border"><tr><td><p><strong>原有数据</strong></p>{#oldRowList#}</td><td><p><strong>新数据</strong></p>{#newRowList#}</td></tr></table><div class="al_right"><button id="step_last_prev" class="left">返回上一步</button><button id="step_last_ok">确定</button></div></div>',
            rowDisplay: '<div class="row"><div class="row_title">{#name#}：</div><div class="row_con">{#list#}</div></div>'
        },
        colorInfo: {
            colorSeries: [[111, "绿色系", "lsx", 0], [2, "红色系", "hsx", 0], [3, "其他色系", "qtzs", 0], [5, "白色系", "bsx", 0], [6, "黑色系", "hsx", 0], [9, "蓝色系", "lsx", 0], [10, "黄色系", "hsx", 0], [11, "灰色系", "hsx", 0], [12, "橙色系", "csx", 0], [13, "紫色系", "zsx", 0], [14, "棕色系", "zsx", 0]],
            detail: [{
                id: "13",
                name: "黑色",
                csys: "6",
                desc: "#000"
            }, {
                id: "1",
                name: "白色",
                csys: "5",
                desc: "#fff"
            }, {
                id: "44",
                name: "象牙白色",
                csys: "5",
                desc: "#FFFFF0"
            }, {
                id: "332",
                name: "米白色",
                csys: "5",
                desc: "#F5F5F0"
            }, {
                id: "15",
                name: "灰色",
                csys: "11",
                desc: "#808080"
            }, {
                id: "24",
                name: "深灰色",
                csys: "11",
                desc: "#555555"
            }, {
                id: "21",
                name: "浅灰色",
                csys: "11",
                desc: "#C0C0C0"
            }, {
                id: "471",
                name: "冷灰色",
                csys: "11",
                desc: "#808A87"
            }, {
                id: "14",
                name: "银色",
                csys: "11",
                desc: "#E6E6D7"
            }, {
                id: "39",
                name: "棕褐色",
                csys: "14",
                desc: "#5E2612"
            }, {
                id: "20",
                name: "巧克力色",
                csys: "14",
                desc: "#A05C2D"
            }, {
                id: "49",
                name: "咖啡色",
                csys: "14",
                desc: "#6A4B23"
            }, {
                id: "40",
                name: "深卡其布色",
                csys: "14",
                desc: "#BDB76B"
            }, {
                id: "17",
                name: "驼色",
                csys: "14",
                desc: "#B58453"
            }, {
                id: "5",
                name: "红色",
                csys: "2",
                desc: "#FF0000"
            }, {
                id: "38",
                name: "粉红色",
                csys: "2",
                desc: "#FFC0CB"
            }, {
                id: "52",
                name: "酒红色",
                csys: "2",
                desc: "#821E32"
            }, {
                id: "144",
                name: "玫红色",
                csys: "2",
                desc: "#FF215E"
            }, {
                id: "601",
                name: "肉粉色",
                csys: "2",
                desc: "#FA8072"
            }, {
                id: "7",
                name: "橙色",
                csys: "12",
                desc: "#FF8000"
            }, {
                id: "94",
                name: "橙红色",
                csys: "12",
                desc: "#FF4500"
            }, {
                id: "108",
                name: "橙黄色",
                csys: "12",
                desc: "#ED9121"
            }, {
                id: "715",
                name: "土黄色",
                csys: "12",
                desc: "#D6A936"
            }, {
                id: "132",
                name: "香槟色",
                csys: "12",
                desc: "#E2CE55"
            }, {
                id: "8",
                name: "黄色",
                csys: "10",
                desc: "#FFFF00"
            }, {
                id: "671",
                name: "中黄色",
                csys: "10",
                desc: "#FFD800"
            }, {
                id: "23",
                name: "淡黄色",
                csys: "10",
                desc: "#FDFC82"
            }, {
                id: "34",
                name: "杏色",
                csys: "10",
                desc: "#E6FC8F"
            }, {
                id: "9",
                name: "金色",
                csys: "10",
                desc: "#F2C056"
            }, {
                id: "6",
                name: "紫色",
                csys: "13",
                desc: "#800080"
            }, {
                id: "25",
                name: "深紫色",
                csys: "13",
                desc: "#4B0082"
            }, {
                id: "107",
                name: "浅紫色",
                csys: "13",
                desc: "#B280F7"
            }, {
                id: "27",
                name: "紫罗兰色",
                csys: "13",
                desc: "#C71585"
            }, {
                id: "202",
                name: "紫红色",
                csys: "13",
                desc: "#FF00FF"
            }, {
                id: "12",
                name: "蓝色",
                csys: "9",
                desc: "#1E90FF"
            }, {
                id: "26",
                name: "深蓝色",
                csys: "9",
                desc: "#00008B"
            }, {
                id: "68",
                name: "宝蓝色",
                csys: "9",
                desc: "#0000FF"
            }, {
                id: "19",
                name: "天蓝色",
                csys: "9",
                desc: "#00BFFF"
            }, {
                id: "57",
                name: "浅蓝色",
                csys: "9",
                desc: "#A8CEFA"
            }, {
                id: "11",
                name: "绿色",
                csys: "1",
                desc: "#228B22"
            }, {
                id: "48",
                name: "墨绿色",
                csys: "1",
                desc: "#004630"
            }, {
                id: "18",
                name: "军绿色",
                csys: "1",
                desc: "#556B2F"
            }, {
                id: "22",
                name: "浅绿色",
                csys: "1",
                desc: "#90EE90"
            }, {
                id: "31",
                name: "抹茶绿色",
                csys: "1",
                desc: "#C7FF2F"
            }, {
                id: "28",
                name: "花色",
                csys: "3",
                desc: "p_fancy"
            }, {
                id: "29",
                name: "透明",
                csys: "3",
                desc: "p_transparent"
            }, {
                id: "33",
                name: "荧光",
                csys: "3",
                desc: null
            }],
            customDetail: [{
                id: "753",
                name: "",
                csys: null
            }, {
                id: "754",
                name: "",
                csys: null
            }, {
                id: "755",
                name: "",
                csys: null
            }, {
                id: "756",
                name: "",
                csys: null
            }, {
                id: "757",
                name: "",
                csys: null
            }, {
                id: "758",
                name: "",
                csys: null
            }, {
                id: "759",
                name: "",
                csys: null
            }, {
                id: "760",
                name: "",
                csys: null
            }, {
                id: "761",
                name: "",
                csys: null
            }, {
                id: "762",
                name: "",
                csys: null
            }, {
                id: "763",
                name: "",
                csys: null
            }, {
                id: "764",
                name: "",
                csys: null
            }, {
                id: "765",
                name: "",
                csys: null
            }, {
                id: "766",
                name: "",
                csys: null
            }, {
                id: "767",
                name: "",
                csys: null
            }, {
                id: "768",
                name: "",
                csys: null
            }, {
                id: "769",
                name: "",
                csys: null
            }, {
                id: "770",
                name: "",
                csys: null
            }, {
                id: "771",
                name: "",
                csys: null
            }, {
                id: "772",
                name: "",
                csys: null
            }, {
                id: "773",
                name: "",
                csys: null
            }, {
                id: "774",
                name: "",
                csys: null
            }, {
                id: "775",
                name: "",
                csys: null
            }, {
                id: "776",
                name: "",
                csys: null
            }],
            usedCustom: -1
        },
        map: function() {
            for (var b = {}, c = {}, d = {}, e = a.saleAttr, f = 0, g = e.length; g > f; f++)
                b[e[f].name] = e[f].id,
                c[e[f].id] = e[f].name,
                d[e[f].id] = f;
            return {
                attrIdMap: b,
                idAttrMap: c,
                idIndexMap: d
            }
        }(),
        each: function(a, b) {
            for (var c = 0, d = a.length; d > c; c++)
                b.call(a[c], c, a[c])
        },
        check: function() {
            var c = 0
              , d = !0
              , e = a.oldAttr
              , f = b.map.attrIdMap;
            for (var g in e)
                c++,
                !f[g] && (d = !1);
            return c > a.saleAttr.length || !d ? !1 : !0
        },
        isIE67: function() {
            return $isBrowser("ie6") || $isBrowser("ie7")
        }(),
        disable4IE6: function(a) {
            function c(a) {
                for (var b, c = 0; b = a.options[c]; c++)
                    b.style.color = b.disabled ? "#808080" : "#000000"
            }
            b.isIE67 && $(a).find("select").each(function() {
                c(this)
            })
        },
        gotoNext: function() {
            var a = b.curPage
              , c = b.relation
              , d = c.length;
            if (0 == a)
                $id("box_attr_filter_first").style.display = "none";
            else {
                var e = $id("box_attr_filter_" + c[a - 1].key);
                e && (e.style.display = "none")
            }
            b.goAction = "next",
            b.curPage++,
            a == d ? b.showStepLast() : b.showStepMiddle(c, a)
        },
        gotoPrev: function() {
            var a = b.curPage
              , c = b.relation
              , d = c.length;
            if (a == d + 1)
                $id("box_attr_filter_last").style.display = "none";
            else {
                var e = $id("box_attr_filter_" + c[a - 1].key);
                e && (e.style.display = "none")
            }
            b.goAction = "prev",
            b.curPage--,
            1 == a ? b.showStepFirst() : b.showStepMiddle(b.relation, a - 2)
        },
        close: function() {
            b.float && b.float.close()
        },
        getAttrList: function(a) {
            for (var c = [], d = b.tpl, e = 0, f = a.length; f > e; e++)
                c.push(d.attr.replace(/{#value#}/, a[e]));
            return c.join("\n")
        },
        getAttrRow: function(a, b) {
            return this.tpl.rowDisplay.replace(/{#name#}/, a).replace(/{#list#}/, this.getAttrList(b))
        },
        getColor: function(a) {
            for (var c = b.colorInfo.detail, d = 0, e = c.length; e > d; d++) {
                var f = c[d];
                if (a == f.name)
                    return f
            }
            return b.colorInfo.customDetail[++b.colorInfo.usedCustom]
        },
        getMatchColor: function(a) {
            for (var c = b.colorInfo.colorSeries, d = 0, e = c.length; e > d; d++) {
                var f = c[d];
                if (-1 != a.indexOf(f[1].substring(0, 1)))
                    return f[0]
            }
        },
        getMatchAttr: function(a, b) {
            for (var c = 0, d = b.length; d > c; c++) {
                var e = b[c];
                if (-1 != a.indexOf(e[1]))
                    return e[0]
            }
        },
        showStepFirst: function() {
            var c = $id("box_attr_filter_first");
            if (c)
                return c.style.display = "",
                void 0;
            var d = this.tpl
              , e = function() {
                var a = []
                  , c = b.map.attrIdMap;
                for (var e in c)
                    a.push(d.option.replace(/{#value#}/, c[e]).replace(/{#key#}/, e));
                return a.join("")
            }()
              , f = []
              , g = a.oldAttr
              , h = a.saleAttr.length;
            for (var i in g)
                f.push(d.stepFirstTr.replace(/{#key#}/g, i).replace(/{#value#}/, b.getAttrList(g[i])));
            var j = d.stepFirst.replace(/{#attr#}/, f.join("").replace(/{#newAttr#}/g, e)).replace(/{#maxAttr#}/g, h);
            if (b.float = $float({
                title: "商品库存系统升级",
                width: 750,
                html: j,
                showClose: !1,
                top: 80,
                left: 50
            }),
            b.float.boxIframeHandle && (b.float.boxIframeHandle.style.display = "none"),
            $id("attr_filter").onclick = function(a) {
                var c = $getTarget(a);
                if ("attr" === c.getAttribute("tag")) {
                    var d = c.getAttribute("key");
                    if ($id("attr_type_" + d).style.display = c.checked ? "" : "none",
                    !c.checked) {
                        var e = $id("sel_attr_type_" + d);
                        e.value = "",
                        e.onchange()
                    }
                    var f = 0
                      , g = document.getElementsByName("attr_cbox")
                      , i = [];
                    b.each(g, function() {
                        this.checked ? f++ : i.push(this)
                    }),
                    b.each(i, function() {
                        this.disabled = f >= h ? !0 : !1,
                        this.title = f >= h ? "最多勾选" + h + "个属性" : ""
                    })
                }
            }
            ,
            $id("step1_next").onclick = function() {
                var a = 0
                  , c = document.getElementsByName("attr_cbox")
                  , d = [];
                if (b.each(c, function() {
                    this.checked && d.push(this) && a++
                }),
                a > h)
                    return alert("最多勾选" + h + "个属性"),
                    !1;
                if (0 == a)
                    return alert("请选择一个属性"),
                    !1;
                var e = !0
                  , f = [];
                if (b.each(d, function() {
                    var a = this.getAttribute("key")
                      , b = $id("sel_attr_type_" + a);
                    "" == b.value ? ($(b).next().next("span.msg1-icon-warn").css("display", ""),
                    e = !1) : f.push({
                        key: a,
                        value: b.value
                    })
                }),
                !e)
                    return !1;
                if (b.relation) {
                    var g = !0;
                    b.relation.length !== f.length ? g = !1 : $.each(b.relation, function(a, b) {
                        var c = f[a];
                        return b.key != c.key || b.value != c.value ? (g = !1,
                        !1) : void 0
                    }),
                    !g && $("#box_attr_filter_first").siblings("div.box_attr_filter").remove()
                }
                b.curPage = 0,
                b.colorInfo.usedCustom = -1,
                b.relation = f,
                b.transInfo = [],
                b.gotoNext()
            }
            ,
            b.each(document.getElementsByName("sel_attr_type"), function() {
                this.onchange = function() {
                    var a = this.value
                      , c = this.getAttribute("last");
                    if (b.isIE67 && this.options[this.selectedIndex].disabled)
                        return this.value = c || "",
                        !1;
                    $("[name=sel_attr_type]").not(this).each(function() {
                        a && $(this).find("option[value=" + a + "]").attr("disabled", !0),
                        c && $(this).find("option[value=" + c + "]").attr("disabled", !1)
                    }),
                    this.setAttribute("last", a);
                    var d = $(this).next("span.msg1-icon-right");
                    "" === a ? d.hide() : d.show(),
                    d.next("span.msg1-icon-warn").hide(),
                    b.disable4IE6("#attr_filter")
                }
            }),
            b.check()) {
                $("[name=attr_cbox]").attr("checked", !0);
                var k = b.map.attrIdMap;
                $("[name=sel_attr_type]").each(function() {
                    this.value = k[this.getAttribute("key")]
                }),
                $("#box_attr_filter_first > ul").nextAll(":not(.al_right)").hide()
            }
        },
        showStepMiddle: function(c, d) {
            var e = c[d].key
              , f = c[d].value
              , g = a.oldAttr[e]
              , h = a.saleAttr[b.map.idIndexMap[f]]
              , i = h.prop
              , j = $id("box_attr_filter_" + e);
            if (49 != f) {
                var k = h.opList.length;
                g.length > k && (g = g.slice(0, k))
            }
            if (49 != f && "edit" == i) {
                if (!b.transInfo[d]) {
                    var l = h.opList
                      , m = []
                      , n = {}
                      , o = function(a) {
                        for (var b = l.length, c = 0; b > c; c++)
                            if (l[c][1] == a && !n[c])
                                return n[c] = !0,
                                l[c];
                        for (var c = 0; b > c; c++)
                            if (!n[c])
                                return n[c] = !0,
                                l[c]
                    };
                    b.each(g, function(a, b) {
                        var c = o(b)
                          , d = [c[0], b].join("?");
                        m.push({
                            ori: b,
                            tran: {
                                name: c[1],
                                code: d
                            }
                        })
                    }),
                    b.transInfo[d] = [e, f, h.name, m, i]
                }
                return "next" == b.goAction ? b.gotoNext() : b.gotoPrev(),
                void 0
            }
            if (j)
                return j.style.display = "",
                void 0;
            var p = this.tpl
              , q = function() {
                var a = []
                  , c = h.opList;
                return 49 == f && (c = b.colorInfo.colorSeries),
                b.each(c, function(b, c) {
                    a.push(p.option.replace(/{#value#}/, c[0]).replace(/{#key#}/, c[1]))
                }),
                a.join("")
            }()
              , r = [];
            b.each(g, function(a, b) {
                r.push(p.stepMiddleLi.replace(/{#exAttr#}/g, b).replace(/{#attrList#}/, q))
            }),
            $("#box_attr_filter_first").after(b.tpl.stepMiddle.replace(/{#oldAttrName#}/g, e).replace(/{#oldAttrValue#}/, b.getAttrList(a.oldAttr[e])).replace(/{#transRule#}/, 49 == f ? b.tpl.transRuleColor : b.tpl.transRuleNotColor).replace(/{#newAttrName#}/g, b.map.idAttrMap[f]).replace(/{#attrLi#}/g, r.join("")).replace(/{#saleAttr#}/g, 49 == f ? "色系" : h.name)),
            $id("step_" + e + "_next").onclick = function() {
                var a = []
                  , c = !0;
                return $($id("box_attr_filter_" + e)).find("select").each(function() {
                    if ("" === this.value)
                        c = !1,
                        $(this).next().next("span.msg1-icon-warn").css("display", "");
                    else {
                        var b, d = this.getAttribute("key"), e = this.options[this.selectedIndex].innerHTML;
                        b = 49 == f ? [this.getAttribute("code"), this.value].join("#") : this.value + ("mark" == i && d != e ? "?" + d : ""),
                        a.push({
                            ori: d,
                            tran: {
                                name: e,
                                code: b
                            }
                        })
                    }
                }),
                c ? (b.transInfo[d] = [e, f, h.name, a, i],
                b.gotoNext(),
                void 0) : !1
            }
            ,
            $id("step_" + e + "_prev").onclick = function() {
                b.gotoPrev()
            }
            ;
            var s = $($id("box_attr_filter_" + e)).find("select");
            if (s.change(function() {
                var a = this.getAttribute("last");
                if (b.isIE67 && this.options[this.selectedIndex].disabled)
                    return this.value = a || "",
                    !1;
                var c = $(this).next("span.msg1-icon-right");
                "" === this.value ? c.hide() : c.show(),
                c.next("span.msg1-icon-warn").hide()
            }),
            49 != f && s.change(function() {
                var a = this.value
                  , c = this.getAttribute("last");
                s.not(this).each(function() {
                    a && $(this).find("option[value=" + a + "]").attr("disabled", !0),
                    c && $(this).find("option[value=" + c + "]").attr("disabled", !1)
                }),
                this.setAttribute("last", a),
                b.disable4IE6("#box_attr_filter_" + e)
            }),
            49 == f)
                b.each(g, function(a, c) {
                    var d = b.getColor(c)
                      , e = [d.id, c].join("?")
                      , f = s.filter("[key=" + c + "]");
                    f.attr("code", e);
                    var g;
                    d.csys ? (g = d.csys,
                    f.attr("disabled", !0)) : g = b.getMatchColor(c),
                    g && f.val(g).change()
                });
            else {
                var t = h.opList
                  , u = {};
                b.each(g, function(a, c) {
                    var d = b.getMatchAttr(c, t);
                    d && !u[d] && s.filter("[key=" + c + "]").val(d).change() && (u[d] = !0)
                })
            }
        },
        showStepLast: function() {
            var c = $id("box_attr_filter_last");
            c && $(c).remove();
            var d = []
              , e = a.oldAttr;
            for (var f in e)
                d.push(b.getAttrRow(f, e[f]));
            var g = [];
            b.each(b.transInfo, function(a, c) {
                var d = c[3]
                  , e = [];
                49 == c[1] ? b.each(d, function(a, b) {
                    e.push(b.ori)
                }) : b.each(d, function(a, b) {
                    e.push("edit" == c[4] ? b.ori : b.tran.name + ("mark" == c[4] ? "(" + b.ori + ")" : ""))
                }),
                g.push(b.getAttrRow(c[2], e))
            }),
            $("#box_attr_filter_first").after(b.tpl.stepLast.replace(/{#oldRowList#}/, d.join("")).replace(/{#newRowList#}/, g.join(""))),
            $id("step_last_prev").onclick = function() {
                b.gotoPrev()
            }
            ,
            $id("step_last_ok").onclick = function() {
                var c = {}
                  , d = {};
                b.each(b.transInfo, function(a, e) {
                    var f = [];
                    c[e[1]] = e[0],
                    b.each(e[3], function() {
                        f.push(this.tran.code)
                    }),
                    d[e[1]] = f
                }),
                a.relation = c,
                a.attr = d,
                a.close = b.close,
                a.callback(a) && b.close()
            }
        }
    };
    return b.showStepFirst(),
    {
        close: b.close
    }
}
function $stockPreview(option) {
    var _AreaHTML = "<div style='position:relative'></div>"
      , _ListHTML = '<p><strong>属性预览</strong></p><dl><%	for(var i=0;i<vals.length;i++){var val=vals[i];%><dt><%=val.key%>：</dt><dd><%	for(var k=0;k<val.val.length;k++){var attr=val.val[k];%>	<%	if(isLogin && picAttrMap[val.key]){%>		<%	if(!attrPicMap[attr]){%>		<div class="stk_pic">			<span title="<%=attr%>"><%=attr%></span>			<p><button type="button" class="attr_upload">上传</button></p>		</div>		<%	}else{%>		<div class="stk_pic">			<span title="<%=attr%>"><img src="<%=attrPicMap[attr]%>" alt="<%=attr%>" width="30" height="30" /></span>			<p><button type="button" class="attr_delete">删除</button></p>		</div>		<%	}%>	<%	}else{%>		<div class="stk_pic"><span><%=attr%></span></div>	<%	}%><%	}%></dd><%	}%></dl><span id="<%=flashPlaceHolderId%>"></span>'
      , opt = {
        dom: null ,
        vals: [],
        tmpl: {
            areaHTML: _AreaHTML,
            listHTML: _ListHTML
        },
        flashPlaceHolderId: "stockAttrPicUploader",
        stockImgStr: ""
    };
    if ($extend(opt, option),
    !opt.dom)
        return alert("不可用的dom节点，无法初始化"),
        !1;
    var Data = {
        vals: [],
        valsMap: {},
        attrPicMap: {},
        picAttrMap: {
            "颜色": 1
        },
        flashPlaceHolderId: "",
        isLogin: !1,
        init: function() {
            this.flashPlaceHolderId = opt.flashPlaceHolderId,
            this.initVals(),
            this.initAttrPic(),
            ($getCookie("p_uin") && $getCookie("p_skey") || $getUin() && $getCookie("skey")) && (this.isLogin = !0)
        },
        initVals: function() {
            this.vals = [],
            this.valsMap = {};
            for (var a = 0; a < opt.vals.length; a++) {
                var b = opt.vals[a];
                b.val.length && (this.vals.push(b),
                this.valsMap[b.key] = b.val)
            }
        },
        initAttrPic: function() {
            this.attrPicMap = {};
            var a = /(.+:.+\|.+;?)+/g;
            if (a.test(opt.stockImgStr)) {
                var b = opt.stockImgStr.split(";");
                if (b.length)
                    for (var c = 0, d = b.length; d > c; c++) {
                        var e = b[c].split(/[|\u7D74]/)
                          , f = e[0].split(":")[1];
                        this.attrPicMap[f] = e[1]
                    }
            }
        }
    };
    Data.init();
    var tempDom = document.createElement("div");
    tempDom.innerHTML = opt.tmpl.areaHTML;
    var areaDom = $getFirst(tempDom);
    opt.dom.innerHTML = "",
    opt.dom.appendChild(areaDom),
    areaDom.onclick = function(a) {
        var b = $getTarget(a);
        if ("删除" == b.innerHTML) {
            var c = $getPrev(b.parentNode)
              , d = $getLast(c);
            d && delete Data.attrPicMap[d.alt],
            c.innerHTML = d.alt,
            b.className = "attr_upload",
            b.innerHTML = "上传",
            b.disabled = !1,
            $fireEvent(b, "mouseover")
        }
    }
    ,
    areaDom.onmouseover = function(a) {
        var b = $getTarget(a)
          , c = this;
        if ("BUTTON" == b.tagName && "上传" == b.innerHTML && !b.disabled) {
            if (this.flashDom) {
                this.flashDom.style.top = $getYP(b.parentNode) - $getYP(this) + "px",
                this.flashDom.style.left = b.parentNode.getBoundingClientRect().left - this.getBoundingClientRect().left + "px",
                $display(this.flashDom);
                try {
                    window.SWFUpload.instances[this.flashDom.id].setButtonDisabled(!1)
                } catch (a) {}
            }
            c.currentDom = b
        }
    }
    ;
    var retCodeForUpload = {
        d: null ,
        init: function() {
            try {
                this.d = $returnCode({
                    url: "http://my.paipai.com/cgi-bin/item_mgn/tempimg",
                    frequence: 1
                })
            } catch (a) {}
        },
        report: function(a, b) {
            this.d && this.d.report(a, b)
        }
    }
      , targetImgs = []
      , _FlashInitParam = {
        upload_url: window.basePath + "/upload/tempImgUpload.do",
        file_post_name: "strTempFile",
        post_params: {
            dwUin: (($getCookie("p_uin") || $getUin() || "") + "").replace("o0", ""),
            strSkey: encodeURIComponent($getCookie("p_skey") || $getCookie("skey") || "")
        },
        file_size_limit: "2048KB",
        file_types: "*.jpg;*.gif",
        file_types_description: "Web Image Files",
        file_upload_limit: 0,
        file_queue_limit: 5,
        file_queue_error_handler: function(a, b, c) {
            switch (b) {
            case window.SWFUpload.QUEUE_ERROR.ZERO_BYTE_FILE:
                alert("文件" + a.name + "为无效的图片文件");
                break;
            case window.SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT:
                alert("图片文件" + a.name + "大小为" + ~~(a.size / 1024) + "kb,超过了2048kb的大小限制");
                break;
            case window.SWFUpload.QUEUE_ERROR.INVALID_FILETYPE:
                alert("图片文件" + a.name + "类型无效");
                break;
            case window.SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED:
                alert("上传的文件过多，最多可以同时上传5张图片");
                break;
            default:
                alert("文件检测时发生错误,错误代码:'" + b + "',错误信息:'" + c + "'")
            }
        },
        file_dialog_complete_handler: function(a, b) {
            if (1 == b) {
                var c = areaDom.currentDom
                  , d = $getPrev(c.parentNode);
                d.innerHTML = "<img src='http://o2o.gtimg.com/offline/victor/images/common/loading2.gif' alt='" + d.innerHTML + "' width='30' height='30' />",
                targetImgs.push(d.lastChild),
                c.className = "attr_upload_disable",
                c.disabled = !0,
                retCodeForUpload.init(),
                this.setButtonDisabled(!0),
                this.startUpload()
            } else
                for (; this.getStats().files_queued > 0; )
                    this.cancelUpload(null , !1)
        },
        upload_progress_handler: function(a, b) {
            {
                Math.ceil(100 * (b / a.size))
            }
        },
        upload_error_handler: function(a, b) {
            retCodeForUpload.report(!1, b),
            b === window.SWFUpload.UPLOAD_ERROR.UPLOAD_LIMIT_EXCEEDED ? alert("图片文件超过了2048kb的大小限制") : alert("上传图片发生错误");
            var c = targetImgs.shift()
              , d = c.parentNode
              , e = $getLast($getNext(d));
            d.innerHTML = c.alt,
            e.className = "attr_upload",
            e.disabled = !1,
            areaDom.currentDom == e && (this.setButtonDisabled(!1),
            this.getMovieElement().style.display = "none")
        },
        upload_success_handler: function(file, serverData) {
            var _this = this
              , d = eval("(" + serverData + ")");
            retCodeForUpload.report(0 == d.RetCode ? !0 : !1, d.RetCode);
            var img = targetImgs.shift();
            if (0 == d.RetCode)
                setTimeout(function() {
                    img.onload = function() {
                        var a = $getLast($getNext(this.parentNode));
                        this.onload = null ,
                        a.className = "attr_delete",
                        a.disabled = !1,
                        a.innerHTML = "删除",
                        Data.attrPicMap[this.alt] = this.src,
                        areaDom.currentDom == a && (_this.setButtonDisabled(!1),
                        _this.getMovieElement().style.display = "none")
                    }
                    ,
                    img.src = d.RetUrl
                }, 1e3);
            else {
                var container = img.parentNode
                  , btnDom = $getLast($getNext(container));
                container.innerHTML = img.alt,
                btnDom.disabled = !1,
                btnDom.className = "attr_upload",
                areaDom.currentDom == btnDom && (this.setButtonDisabled(!1),
                this.getMovieElement().style.display = "none"),
                1 == d.RetCode ? alert("未登录,请重新登录") : 2 == d.RetCode ? alert("图片太大或者不合法") : alert("上传失败")
            }
        },
        upload_complete_handler: function() {
            if (this.getStats() && this.getStats().files_queued > 0)
                if (targetImgs.length > 0)
                    retCodeForUpload.init(),
                    this.startUpload();
                else
                    for (; this.getStats().files_queued > 0; )
                        this.cancelUpload(null , !1)
        },
        button_image_url: "http://o2o.gtimg.com/offline/victor/images/upload/attr_upload_btn_xp.png",
        button_width: 40,
        button_height: 22,
        button_text_top_padding: 1,
        button_text_left_padding: 5,
        button_cursor: -2,
        button_text: "上传",
        flash_url: window.basePath + "/resources/js/propublish/swfupload.swf"
    };
    return areaDom.flush = function() {
        return Data.vals.length ? ($display(opt.dom),
        this.innerHTML = $txTpl(opt.tmpl.listHTML, Data),
        Data.isLogin ? (_FlashInitParam.button_placeholder_id = Data.flashPlaceHolderId,
        $SWFUpload(_FlashInitParam),
        this.flashDom = this.getElementsByTagName("object")[0],
        this.flashDom && $display(this.flashDom, "none")) : $display(Data.flashPlaceHolderId, "none"),
        void 0) : (this.innerHTML = "",
        $display(opt.dom, "none"),
        void 0)
    }
    ,
    areaDom.flush(),
    opt.getValue = function() {
        for (var a = [], b = 0; b < Data.vals.length; b++) {
            var c = Data.vals[b];
            if (Data.picAttrMap[c.key])
                for (var d = 0; d < c.val.length; d++) {
                    var e = c.val[d];
                    a.push(c.key + ":" + e + "|" + (Data.attrPicMap[e] || ""))
                }
        }
        return a.join(";")
    }
    ,
    opt.setValue = function(a) {
        this.vals = a,
        Data.initVals(),
        areaDom.flush()
    }
    ,
    opt
}
function $stockTableNew(a) {
    var b = {
        stockId: /[^\u4e00-\u9fa5-\/\.\(\)a-zA-Z0-9（）_＿——]/g,
        desc: /[^\u4e00-\u9fa5-\/\.\w]/g,
        price: /[^\d\.]/g,
        num: /[^\d]/g
    }
      , c = "<div></div>"
      , d = '<%	if(stocks.length){ %>	<%	if(window.clipboardData){ %>	<p class="stock_tips">小提示：复制excel表格里的内容，粘贴到下面的列表中试试？ <a href="#copyExcel" action="copyExcel">复制下图表为Excel表格格式</a></p>	<%	}%>	<table class="stock_tb">		<colgroup>		<%	for(var i=0;i<saleAttrs.length;i++){ %>			<col>		<%	}%>			<col width="160">			<col width="90">			<col width="90">			<col width="95"><col width="95"><col width="95">		</colgroup>		<thead>			<tr>			<%	for(var i=0;i<saleAttrs.length;i++){ var attr = saleAttrs[i];%>				<th title="<%=attr%>"><%=$strSubGB(attr,0,24)%></th>			<%	}%>				<th><label><input type="checkbox" dtype="stockId" action="allAsFirst">商品统一码</label></th>				<th><label><input type="checkbox" dtype="price" action="allAsFirst" style="display:none">价格(元)</label></th>				<th><label><input type="checkbox" dtype="num" 	action="allAsFirst" style="display:none">数量(件)</label></th>				<th>备注</th><th>外部产品编号</th><th>操作</th>			</tr>		</thead>		<tbody>		<%	for(var i=0;i<stocks.length;i++){ var stock=stocks[i];%>			<tr class="<%=(((stock.num+"") && (stock.num*1)<=0)?"out_stock":"")%>">				<%	for(var k=0;k<saleAttrs.length;k++){ var attr = saleAttrs[k];%>				<td class="col0"><%=(stock[attr]||"无")%></td>				<%	}%>				<td class="col1" nowrap="">					<input maxlength="50" class="inp-01" type="text" stype="stockId" value="<%=stock.stockId%>" id="stock<%=i%>" saleattr="<%=stock.saleAttr%>" />				</td>				<td class="col2" nowrap="">					<input maxlength="20" class="inp-02" type="text" stype="price" value="<%=stock.price%>" saleattr="<%=stock.saleAttr%>" />					<a class="batch_icon" title="复制该[价格]到…" href="#batchDeal" action="batchDeal" ></a>				</td>				<td class="col3" nowrap="">					<input maxlength="20" class="inp-02" type="text" stype="num" value="<%=stock.num%>" saleattr="<%=stock.saleAttr%>" />					<a class="batch_icon" title="复制该[数量]到…" href="#batchDeal" action="batchDeal"></a>				</td>				<td class="col4" nowrap="">					<input maxlength="20" class="inp-02" type="text" stype="desc" value="<%=stock.desc%>" saleattr="<%=stock.saleAttr%>" />				</td><td class="col5" nowrap="">	<input maxlength="200" class="inp-02" stype="externalNo" value="<%=stock.externalNo%>" saleattr="<%=stock.saleAttr%>" />				</td><td td class="col6" nowrap="" saleattr="<%=stock.saleAttr%>"><a href="javascript:void(0)" onclick="preview(event)">预览<a/><br/><a href="javascript:void(0)" class="sku-remove" saleattr="<%=stock.saleAttr%>" onclick="delrow(event)">删除<a/></td>			</tr>		<%	}%>		</tbody>	</table><%	}%>'
      , e = '<div tag="batchDeal" style="position:relative;z-index:100;display:inline">	<ul class="optlist"><% if(saleAttrs.length>1){	for(var i=0;i<saleAttrs.length;i++){var attr=saleAttrs[i];%>		<li><a href="#deal" action="deal" attr="<%=attr%>" attrval="<%=stock[attr]%>"><%=$strSubGB(attr,0,6)%>相同项目</a></li><%	}}%>		<li><a href="#deal" action="deal" attr="">所有项目</a></li>	</ul></div>'
      , f = {
        dom: null ,
        tmpl: {
            areaHTML: c,
            tableHTML: d,
            batchFloatHTML: e
        },
        textInvaildRegMap: b,
        textMaxLength: 50,
        stockList: []
    };
    if ($extend(f, a),
    !f.dom)
        return alert("不可用的dom节点，无法初始化"),
        !1;
    f.stockList || (f.stockList = []);
    var g = {
        stocks: [],
        stocksMap: {},
        saleAttrs: [],
        dataAttrs: ["stockId", "price", "num", "desc", "externalNo"],
        minPrice: 0,
        maxPrice: 0,
        totalNum: 0,
        init: function() {
            this.stocks = [],
            this.stocksMap = {},
            this.saleAttrs = [],
            this.dataAttrs = ["stockId", "price", "num", "desc", "externalNo"];
            for (var a = 0; a < f.stockList.length; a++) {
                var b = {};
                $extend(b, f.stockList[a]);
                for (var c in f.textInvaildRegMap)
                    b[c] && (b[c] = (b[c] + "").replace(f.textInvaildRegMap[c], "").substr(0, f.textMaxLength));
                isNaN(b.num) && (b.num = ""),
                isNaN(b.price) && (b.price = ""),
                b.num = b.num ? b.num + "" : "",
                b.price = b.price ? b.price + "" : "",
                b.stockId = b.stockId ? b.stockId + "" : "",
                b.desc = b.desc ? b.desc + "" : "",
                b.externalNo = b.externalNo ? b.externalNo + "" : "",
                b.saleAttr || (b.saleAttr = b.attr);
                for (var d = b.attr.split("|"), e = 0; e < d.length; e++) {
                    var g = d[e].split(":");
                    2 == g.length && (-1 == $inArray(g[0], this.saleAttrs) && this.saleAttrs.push(g[0]),
                    b[g[0]] = g[1])
                }
                this.stocks.push(b),
                this.stocksMap[b.saleAttr] = b
            }
            this.statistic()
        },
        modifyStockInfo: function(a, b, c) {
            var d = this.stocksMap[a];
            return d && void 0 !== d[b] ? (c = (c + "").replace(f.textInvaildRegMap[b], "").substr(0, f.textMaxLength),
            "num" == b ? isNaN(c) || !c ? c = "" : (c = parseInt(c, 10),
            c > 1e6 && (c = 1e6)) : "price" == b && (isNaN(c) || !c ? c = "" : parseFloat(c, 10) >= 5e6 ? c = 5e6 : (c = parseInt(c, 10) == parseFloat(c, 10) ? parseInt(c, 10) : parseFloat(c, 10).toFixed(2),
            parseFloat(c, 10) < .01 && (c = ""))),
            d[b] = c + "",
            this.statistic(),
            d[b]) : !1
        },
        statistic: function() {
            this.minPrice = 0,
            this.maxPrice = 0,
            this.totalNum = 0;
            for (var a = 0; a < this.stocks.length; a++) {
                var b = this.stocks[a];
                this.minPrice = Math.min(this.minPrice || 5e6, b.price),
                this.maxPrice = Math.max(this.maxPrice, b.price),
                this.totalNum += 1 * b.num
            }
        }
    };
    g.init();
    var h = document.createElement("div");
    h.innerHTML = f.tmpl.areaHTML;
    var i = $getLast(h);
    return f.dom.innerHTML = "",
    f.dom.appendChild(i),
    f.getMaxPrice = function() {
        return g.maxPrice
    }
    ,
    f.getMinPrice = function() {
        return g.minPrice
    }
    ,
    f.getTotalNum = function() {
        return g.totalNum
    }
    ,
    i.flush = function() {
        i.innerHTML = $txTpl(f.tmpl.tableHTML, g);
        for (var a = this.getElementsByTagName("input"), b = 0, c = a.length; c > b; b++) {
        	var d = a[b];
        	"text" == d.type && (d.onfocus = function() {}
        	,
        	d.checkAndChange = function() {
        		var a = this.getAttribute("saleattr")
        		, b = this.getAttribute("stype")
        		, c = $strTrim(this.value);
        		c = g.modifyStockInfo(a, b, c),
        		this.value = c || "",
        		"num" == b && (this.parentNode.parentNode.className = this.value && 0 == 1 * this.value ? "out_stock" : ""),
        		f.onChange && f.onChange()
        	}
        	,
        	d.onblur = function() {
        		this.checkAndChange()
        	}
        	)
        }
//        for (var a = this.getElementsByClassName("sku-remove"), b = 0, c = a.length; c > b; b++) {
//            var d = a[b];
//            "sku-remove"==d.className && (
//            d.removeFun = function() {
//            	var f = $id("divStockTableArea");
//            	var e = $id("divAttrPreviewArea");
//                var a = this.getAttribute("saleattr");
////                event = event ? event : window.event; 
////    			var obj = event.srcElement ? event.srcElement : event.target; 
//    			
////	            for (var int = 0; int < window.newsku.length; int++) {
////	     				var line=window.newsku[int];
////	     				if(line.saleAttr==a){
////							window.newsku.splice(int, 1);
////							break;
////						}else{
////							continue;
////						}
////				}
////	            g.stocks=window.newsku;
////	            console.info(g.stocksMap);
////	            delete g.stocksMap.a;
////	            console.info(g.stocksMap);
////		     	g.stockTable ? g.stockTable.setValue(window.newsku) : f && (g.stockTable = $stockTableNew({
////		              dom: f,
////		              stockList: window.newsku,
////		              onChange: function() {
////		                  c.onChange && c.onChange()
////		              }
////		          }),
////		          g.stockTable.onChange()),
////		          g.stockPreview ? g.stockPreview.setValue(window.sku) : e && (g.stockPreview = $stockPreview({
////		              dom: e,
////		              vals: window.sku,
////		              stockImgStr: c.stockImgStr
////		          }))
//            }
//            ,
//            d.onclick = function() {
//                this.removeFun()
//            }
//            )
//        }
        f.onChange && f.onChange()
    }
    ,
    i.onclick = function(a) {
        var b = $getTarget(a)
          , c = b.getAttribute("action")
          , d = this;
        if (c)
            switch (c) {
            case "copyExcel":
                if (window.clipboardData) {
                    for (var b = [], e = 0; e < g.stocks.length; e++) {
                        var h = g.stocks[e];
                        b.push([h.stockId, h.price, h.num, h.desc].join("	"))
                    }
                    b = b.join("\r\n"),
                    window.clipboardData.setData("text", b),
                    alert("温馨提示:\n\n数据已复制，请直接粘贴在Excel表格中。")
                }
                break;
            case "allAsFirst":
                var i = b.getAttribute("dtype")
                  , j = $attr("stype", i, this)
                  , k = b.checked;
                if (!k)
                    return;
                for (var l = g.stocks[0][i], e = 0, m = j.length; m > e; e++) {
                    var n = j[e];
                    "INPUT" == n.tagName && "text" == n.type && (n.value = k ? l : "",
                    n.checkAndChange())
                }
                break;
            case "batchDeal":
                var o = $getPrev(b);
                if (!o.value)
                    return o.focus(),
                    void 0;
                var h = g.stocksMap[o.getAttribute("saleattr")];
                if (!h)
                    return;
                var p = $attr("tag", "batchDeal", b.parentNode)[0];
                if (p)
                    return p.parentNode.removeChild(p),
                    delete b.parentNode.onmouseout,
                    delete b.parentNode.onmouseover,
                    void 0;
                var q = document.createElement("div");
                q.innerHTML = $txTpl(f.tmpl.batchFloatHTML, {
                    saleAttrs: g.saleAttrs,
                    stock: h
                });
                var r = $getLast(q);
                r.onclick = function(a) {
                    var b = $getTarget(a)
                      , c = b.getAttribute("action");
                    if ("deal" == c) {
                        for (var e = o.value, f = o.getAttribute("stype"), h = b.getAttribute("attr"), i = b.getAttribute("attrval"), j = $attr("stype", f, d), k = 0, l = j.length; l > k; k++) {
                            var m = j[k];
                            if ("INPUT" == m.tagName && "text" == m.type) {
                                if (h && i) {
                                    var n = m.getAttribute("saleattr")
                                      , p = g.stocksMap[n];
                                    if (p[h] != i)
                                        continue
                                }
                                m.value = e,
                                m.checkAndChange()
                            }
                        }
                        r.parentNode.removeChild(r)
                    }
                }
                ,
                b.parentNode.appendChild(r),
                b.parentNode.onmouseout = function() {
                    var a = this;
                    this.closeTimer = setTimeout(function() {
                        var b = $attr("tag", "batchDeal", a)[0];
                        b && b.parentNode.removeChild(b),
                        delete a.onmouseout,
                        delete a.onmouseover
                    }, 200)
                }
                ,
                b.parentNode.onmouseover = function() {
                    clearTimeout(this.closeTimer)
                }
            }
    }
    ,
    window.clipboardData && (i.onpaste = function(a) {
        var b = $getTarget(a);
        if (b && "INPUT" == b.tagName && "text" == b.type) {
            var c = window.clipboardData.getData("text");
            if (c && c.length && /(.*\n.*){2,}/.test(c)) {
                c = c.replace(/^\n|\n$/, "").split("\r\n");
                var d = 0
                  , e = b.parentNode.parentNode
                  , f = 0;
                for (function() {
                    for (var a = e.getElementsByTagName("input"), c = 0, d = a.length; d > c; c++)
                        if (a[c] == b) {
                            f = c;
                            break
                        }
                }(); e && c[d]; ) {
                    for (var g = e.getElementsByTagName("input"), h = c[d].split("	"), i = 0, j = g.length - f; j > i && h[i]; i++)
                        g[i + f].value = h[i],
                        g[i + f].checkAndChange();
                    e = e.nextSibling,
                    d++
                }
                return !1
            }
            return !0
        }
    }
    ),
    i.flush(),
    f.check = function() {
    	//删除sku
    	var arr=g.stocks;
    	for(var int=0;int<removeSku.length;int++){
    		for(var int1=0;int1<arr.length;int1++){
    			if(removeSku[int]==arr[int1].saleAttr){
    				arr.splice(int1, 1);
    				break;
    			}
        	}
    	};
        if (document.activeElement && document.activeElement.checkAndChange && document.activeElement.checkAndChange(),
        0 == g.stocks.length)
            return {
                err: !0,
                errMsg: "请设置库存后再提交！"
            };
        if (g.stocks.length > 200)
            return {
                err: !0,
                errMsg: "库存不能超过200条，请删除部分后再提交！"
            };
        for (var a = 0; a < g.stocks.length; a++) {
            var b = g.stocks[a];
            if (!b.price || 1 * b.price <= 0 || 1 * b.price > 5e6)
                return {
                    err: !0,
                    errMsg: "库存价格[0.01-500W]设置不正确，请修改后再提交！"
                };
            if ("" == b.num + "")
                return {
                    err: !0,
                    errMsg: "请设置库存数量！"
                };
            if (1 * b.num < 0 || 1 * b.num > 1e6)
                return {
                    err: !0,
                    errMsg: "库存数量[0-100W]设置不正确，请修改后再提交！"
                }
            //2016-10-24 litangjing 增加产品编号校验
            if (!checkProductNo(b.externalNo))
                return {
                    err: !0,
                    errMsg: "外部产品编号:[" + b.externalNo + "]对应产品不存在，请修改后再提交！"
                }
        }
        return {
            err: !1,
            errMsg: ""
        }
    }
    ,
    f.getValue = function() {
        for (var a = [], b = 0; b < g.stocks.length; b++) {
            var c = g.stocks[b];
            a.push({
                saleAttr: c.saleAttr + "",
                stockId: c.stockId + "",
                price: c.price + "",
                num: c.num + "",
                desc: c.desc + "",
                externalNo: c.externalNo + "",
                attr: c.attr + "",
                specAttr: c.specAttr + "",
                skuId: c.skuId || "0"
            })
        }
        return a
    }
    ,
    f.setValue = function(a) {
        this.stockList = a,
        g.init(),
        i.flush()
    }
    ,
    f
}
function $extend() {
    var a, b = arguments[0] || {}, c = 1, d = arguments.length;
    for ("object" != typeof b && "function" != typeof b && (b = {}); d > c; c++)
        if (null != (a = arguments[c]))
            for (var e in a) {
                var f = a[e];
                b !== f && void 0 !== f && (b[e] = f)
            }
    return b
}
function $getLast(a) {
    return a = a.lastChild,
    a && 1 != a.nodeType ? $getPrev(a) : a
}
function $getNext(a) {
    do
        a = a.nextSibling;
    while (a && 1 != a.nodeType);return a
}
function $displayHide(a) {
    $display(a, "none")
}
function $getFirst(a) {
    return a = a.firstChild,
    a && 1 != a.nodeType ? $getNext(a) : a
}
function $inArray(a, b) {
    if (b.indexOf)
        return b.indexOf(a);
    for (var c = b.length; c--; )
        if (b[c] === a)
            return 1 * c;
    return -1
}
function $isEmptyObj(a) {
    if (!a || "object" != typeof a)
        return !0;
    for (var b in a)
        return !1;
    return !0
}
var $ajax = function(a, b) {
    var c, d = 0, e = a.ActiveXObject ? function() {
        for (var a in c)
            c[a](0, 1)
    }
    : !1;
    return function(f) {
        var g = {
            url: "",
            method: "GET",
            data: null ,
            type: "text",
            async: !0,
            cache: !1,
            timeout: 0,
            isFilter: !0,
            autoToken: !0,
            username: "",
            password: "",
            beforeSend: $empty(),
            onSuccess: $empty(),
            onError: $empty(),
            onComplete: $empty()
        };
        for (var h in f)
            g[h] = f[h];
        var i, j, k, l, m;
        try {
            l = location.href
        } catch (n) {
            l = document.createElement("a"),
            l.href = "",
            l = l.href
        }
        if (m = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/.exec(l.toLowerCase()) || [],
        g.isLocal = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(m[1]),
        g.method = "string" != typeof g.method || "POST" != g.method.toUpperCase() ? "GET" : "POST",
        g.data = $makeUrl(g.data),
        "POST" == g.method && null == g.data)
            return !1;
        if ("GET" == g.method && g.data && (g.url += (g.url.indexOf("?") < 0 ? "?" : "&") + g.data),
        g.xhr = $xhrMaker(),
        null === g.xhr)
            return !1;
        g.autoToken && (g.url = $addToken(g.url, "ajax"));
        try {
            g.username ? g.xhr.open(g.method, g.url, g.async, g.username, g.password) : g.xhr.open(g.method, g.url, g.async)
        } catch (n) {
            return g.onError(-2, n),
            !1
        }
        "POST" == g.method && g.xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
        g.cache || (g.xhr.setRequestHeader("If-Modified-Since", "Thu, 1 Jan 1970 00:00:00 GMT"),
        g.xhr.setRequestHeader("Cache-Control", "no-cache")),
        g.beforeSend(g.xhr),
        g.async && g.timeout > 0 && (g.xhr.timeout === b ? j = setTimeout(function() {
            g.xhr && i && i(0, 1),
            g.onError(0, null , "timeout")
        }, g.timeout) : (g.xhr.timeout = g.timeout,
        g.xhr.ontimeout = function() {
            g.xhr && i && i(0, 1),
            g.onError(0, null , "timeout")
        }
        )),
        g.xhr.send("POST" == g.method ? g.data : null ),
        i = function(a, d) {
            if (j && clearTimeout(j),
            i && (d || 4 === g.xhr.readyState)) {
                if (i = b,
                k && (g.xhr.onreadystatechange = $empty(),
                e))
                    try {
                        delete c[k]
                    } catch (a) {}
                if (d)
                    4 !== g.xhr.readyState && g.xhr.abort();
                else {
                    var f, h, l;
                    l = {
                        headers: g.xhr.getAllResponseHeaders()
                    },
                    f = g.xhr.status;
                    try {
                        h = g.xhr.statusText
                    } catch (a) {
                        h = ""
                    }
                    try {
                        l.text = g.xhr.responseText
                    } catch (a) {
                        l.text = ""
                    }
                    if (!f && g.isLocal ? f = l.text ? 200 : 404 : 1223 === f && (f = 204),
                    f >= 200 && 300 > f)
                        switch (g.isFilter && (l.text = l.text.replace(/<!--.*?-->/g, "")),
                        g.type) {
                        case "text":
                            g.onSuccess(l.text);
                            break;
                        case "json":
                            var m;
                            try {
                                m = new Function("return (" + l.text + ")")()
                            } catch (a) {
                                g.onError(f, a, l.text)
                            }
                            m && g.onSuccess(m);
                            break;
                        case "xml":
                            g.onSuccess(g.xhr.responseXML)
                        }
                    else
                        0 === f && g.timeout > 0 ? g.onError(f, null , "timeout") : g.onError(f, null , h);
                    g.onComplete(f, h, l)
                }
                delete g.xhr
            }
        }
        ,
        g.async ? 4 === g.xhr.readyState ? setTimeout(i, 0) : (k = ++d,
        e && (c || (c = {},
        a.attachEvent ? a.attachEvent("onunload", e) : a.onunload = e),
        c[k] = i),
        g.xhr.onreadystatechange = i) : i()
    }
}(window, void 0);
$break = window.$break || function(a) {
    return a === window.$break
}
,
function() {
    var a = {
        1: {
            html: "{#start#}<p>抱歉！您尚未开通财付通！请您<a title='点此注册财付通'  href='https://www.tenpay.com/zft/register_1.shtml'  target='_blank'>点此注册财付通</a></p>{#end#}",
            certState: 1,
            closeAble: !1
        },
        2: {
            html: "{#start#}<p>抱歉！您尚未注册成为财付通的数字证书用户！请您<a title='点此注册财付通数字证书'  href='https://www.tenpay.com/cgi-bin/v1.0/crt_install.cgi ' target='_blank'>点此注册财付通数字证书</a></p>{#end#}",
            certState: 2,
            closeAble: !1
        },
        3: {
            html: "{#start#}<p>抱歉！您的财付通的数字证书已被冻结！请您<a title='点此向财付通申诉' href='https://www.tenpay.com/zft/cs/cs.shtml?tid=1' target='_blank'>点此向财付通申诉</a></p>{#end#}",
            certState: 3,
            closeAble: !1
        },
        4: {
            html: "{#start#}<p>抱歉！您的财付通数字证书验证失败！请您重试或<a  title='点此注销数字证书后重新安装' href='https://www.tenpay.com/v2.0/main/cancelAccount1.shtml ' target='_blank'>点此注销数字证书后重新安装</a></p>{#end#}",
            certState: 0,
            closeAble: !1
        },
        8: {
            html: "{#start#}<p>验证出错！请<a id='linkClose' href='#nolink' title='点此关闭提示框'>点此关闭提示框</a>继续您的操作！</p>{#end#}",
            certState: 0,
            closeAble: !0
        },
        9: {
            html: "{#start#}<p>系统错误！请尝试<a onclick='location.reload()' href='#nolink' title='刷新' style='color:#014ccc;text-decoration:underline'>刷新</a>页面！</p>{#end#}",
            certState: 9,
            closeAble: !1
        },
        certNotFound: {
            html: "{#start#}<p>抱歉！本机未安装财付通数字证书！请您<a href='https://www.tenpay.com/cgi-bin/v1.0/crt_install.cgi' title='点此安装财付通数字证书' target='_blank'>点此安装财付通数字证书</a></p>{#end#}",
            certState: 0,
            closeAble: !1
        },
        controlNotFound: {
            html: "{#start#}<p>抱歉！您未安装安全控件！请您<a href='https://www.tenpay.com/download/qqedit.exe' target='_blank'>点此安装安全控件</a></p>{#end#}",
            certState: 0,
            closeAble: !1
        },
        end: "</b><br/><p>数字证书是使用账户资金的身份凭证，可保障资金不被盗用。 <a href='http://help.tenpay.com/cgi-bin/helpcenter/help_center.cgi?id=9&type=2 ' target='_blank'>了解更多</a><br/> 为了保证资金与物品安全，拍拍虚拟自动发货卖家必须安装数字证书<br/> Windows Vista 操作系统无法申请安装数字证书的解决办法。<a href='http://help.tenpay.com/cgi-bin/helpcenter/help_center.cgi?id=66559&type=0 ' target='_blank'>点此了解</a></p> <br/><p><a id='linkGoBack' href='#goback'>返回上一步</a></p></div></div>",
        start: '<div class="box_hint_normal"><span class="icon msg2-icon-info"></span><div class="hint_content"><b>'
    };
    $checkCert = function(b) {
        var c = {
            certState: 0,
            tenpayId: "",
            certList: ""
        };
        for (var d in b)
            c[d] = b[d];
        if (c = $qqcert(c),
        a[c.certState] || (c.status ? c.cn || (c.certState = "certNotFound") : c.certState = "controlNotFound"),
        a[c.certState]) {
            var e = a[c.certState]
              , f = $float({
                title: "拍拍网提醒您",
                html: $formatStr(e.html, a),
                width: 460,
                fix: !0,
                style: "stand",
                cover: !0,
                onInit: function() {
                    return c.certState = e.certState,
                    !0
                },
                onClose: function() {
                    return e.closeAble ? !0 : (window.history.length > 1 ? window.history.back() : location.href = "http://my.paipai.com/cgi-bin/myppindex/seller",
                    !1)
                }
            });
            $id("linkClose") && ($id("linkClose").onclick = function() {
                return f && f.close(),
                !1
            }
            ),
            $id("linkGoBack") && (window.history.length <= 1 ? ($id("linkGoBack").href = "http://my.paipai.com/cgi-bin/myppindex/seller",
            $id("linkGoBack").title = "当前无法后退") : $id("linkGoBack").onclick = function() {
                return window.history.back(),
                !1
            }
            )
        }
        return c
    }
}(),
function() {
    var a = {};
    $formatJson = function(b, c) {
        var d = /\W/.test(b) ? new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + b.replace(/[\r\t\n]/g, " ").split("{{").join("	").replace(/((^|}})[^\t]*)'/g, "$1\r").replace(/\t=(.*?)}}/g, "',$1,'").split("	").join("');").split("}}").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : a[b] = a[b] || $formatJson($id(b).innerHTML);
        return c ? d(c) : d
    }
}(),
function() {
    function a(a, b) {
        if (a instanceof Array)
            for (var c = a.length; c--; )
                b(a[c]);
        else
            a && b(a)
    }
    if ("object" != typeof window.$msg) {
        var b = function() {
            this.listener,
            this.topics = {}
        };
        b.prototype = {
            addListener: function(b, c) {
                var d = this.topics;
                c && a(b, function(a) {
                    d[b] = $addUniq(d[a], c)
                })
            },
            removeListener: function(b, c) {
                var d = this.topics;
                c && a(b, function(a) {
                    d[a] && $arrayRemove(d[a], c)
                })
            },
            send: function(b, c) {
                var d = this.topics
                  , e = [];
                if (a(b, function(a) {
                    var b = d[a];
                    b && $each(b.slice(), function(b) {
                        try {
                            b(a, c)
                        } catch (d) {
                            e.push(d)
                        }
                    })
                }),
                e && e.length > 0)
                    try {
                        window.setTimeout(function() {
                            throw e
                        }, 0)
                    } catch (f) {}
            }
        },
        window.$msg = new b
    }
}(),
function() {
    var a = "<div id='certObjContainer' style='overflow:hidden;width:0px;height:0px'></div>"
      , b = null ;
    $qqcert = function(c) {
        function e() {
            if (document.body) {
                var c = document.createElement("div");
                c.id = "certObjContainer",
                c.style.cssText = "overflow:hidden;width:0px;height:0px",
                document.body.appendChild(c)
            } else
                document.write(a);
            var e = new d.QQCertCtrl;
            e.create({
                div_id: "certObjContainer"
            }),
            b = e.ctrl
        }
        var f = {
            tenpayId: "",
            certList: ""
        };
        for (var g in c)
            f[g] = c[g];
        return b || e(),
        f.status = !!(b && ~~b.Version >= 1011),
        f.cn = function() {
            if (!f.status || !f.tenpayId || !f.certList)
                return "";
            var a = f.certList.split("-");
            f.tenpayId;
            for (var c = 0, d = a.length; d > c; c++) {
                var e = isNaN(a[c]) ? 0 : parseInt(a[c], 10);
                if (e) {
                    var g = !1;
                    try {
                        g = b.IsCertExist(e + "")
                    } catch (h) {}
                    if (g) {
                        var i = "";
                        try {
                            i = b.CertSign(e + "", b.Base64Encode("0123456789abcdef"))
                        } catch (h) {}
                        if ("" != i)
                            return e
                    }
                }
            }
            return ""
        }(),
        f.sign = function(a) {
            var c = "";
            if (this.status && this.cn)
                try {
                    c = b.CertSign(this.cn + "", b.Base64Encode(a))
                } catch (d) {}
            return c
        }
        ,
        f
    }
    ;
    var c = []
      , d = {};
    d.MinCodeBaseVersion = "1.2.0.6",
    d.OSControlVersion = {
        "windows nt": {
            Min: "1206",
            Max: "2005"
        },
        "mac os x": {
            Min: "2001",
            Max: "2002"
        },
        iphone: {
            Min: "1206",
            Max: "1206"
        },
        ipad: {
            Min: "1206",
            Max: "1206"
        },
        android: {
            Min: "1206",
            Max: "1206"
        }
    },
    d.GetBrowseEnv = function() {
        var a, b, c, d, e, f = navigator.userAgent.toLowerCase(), g = navigator.platform.toLowerCase(), h = "win32" == g || "windows" == g, i = "mac68k" == g || "macppc" == g || "macintosh" == g || "macintel" == g, j = "iphone" == g, k = "ipad" == g, l = String(g).indexOf("linux arm") > -1, m = String(g).indexOf("linux") > -1 && !l;
        a = h ? "windows nt" : i ? "mac os x" : m ? "linux" : j ? "iphone" : k ? "ipad" : l ? "android" : "unknown";
        var n = null ;
        b = (n = f.match(/(windows nt) ([\d.]+[\d]+)/)) || (n = f.match(/(mac os x) ([\d_.]+\d+)/)) || (n = f.match(/(iphone) os ([\d_]+\d+)/)) || (n = f.match(/(ipad); u; cpu os ([\d_]+\d+)/)) || (n = f.match(/(android) ([\d.]+[\d]+)/)) ? n[2] : "unknown",
        c = "x86",
        (n = f.match(/wow64;/)) ? c = "wow64" : (n = f.match(/win64; x64;/)) && (c = "x64"),
        (n = f.match(/(msie) ([\d.]+)/)) || (n = f.match(/(qqbrowser)\/([\d.]+)/)) || (n = f.match(/ (maxthon)\/([\d.]+)/)) || (n = f.match(/ (se) ([\d.]+)/)) || (n = f.match(/(firefox)\/([\d.]+)/)) || (n = f.match(/(chrome)\/([\d.]+)/)) || (n = f.match(/(opera).([\d.]+)/)) ? (d = n[1],
        e = n[2],
        "qqbrowser" == d && null == a && (a = "windows nt",
        b = "6.1")) : (n = f.match(/version\/([\d.]+).*(safari)/)) ? (d = n[2],
        e = n[1]) : (d = "unknown",
        e = 0);
        var o;
        return o = {
            OSName: a,
            OSVersion: b,
            ProcessType: c,
            BrowseName: d,
            BrowseVersion: e
        }
    }
    ,
    d.IsBrowseNeedLoadComplete = function() {
        var a = d.GetBrowseEnv();
        return "iphone" != a.OSName && "ipad" != a.OSName || "undefined" != typeof g_tenpaycertIOSobject ? !1 : !0
    }
    ,
    d.IsIOSBrowse = function() {
        var a = d.GetBrowseEnv();
        return "iphone" == a.OSName || "ipad" == a.OSName ? !0 : !1
    }
    ,
    d.runQQCertFunction = function(a) {
        if (d.IsIOSBrowse()) {
            if ("undefined" != typeof parent.TENPAYCTL.runQQCertFunction && this.runQQCertFunction != parent.TENPAYCTL.runQQCertFunction)
                return parent.TENPAYCTL.runQQCertFunction(a),
                void 0;
            if (c.push(a),
            "undefined" != typeof g_tenpaycertIOSobject) {
                var b = "https://BAEA0695-03A4-43BB-8495-C7025E1A8F42-RunTask";
                location.href = b
            }
        } else
            a()
    }
    ,
    d.CheckEnv = function(a) {
        for (var b = [{
            OSName: "windows nt",
            ProcessType: "x86",
            BrowseName: "msie",
            BMinVersion: "6.0"
        }, {
            OSName: "windows nt",
            ProcessType: "wow64",
            BrowseName: "msie",
            BMinVersion: "6.0"
        }, {
            OSName: "windows nt",
            BrowseName: "maxthon"
        }, {
            OSName: "windows nt",
            BrowseName: "se"
        }, {
            OSName: "windows nt",
            BrowseName: "qqbrowser"
        }, {
            OSName: "windows nt",
            BrowseName: "firefox",
            BMinVersion: "3.0"
        }, {
            OSName: "windows nt",
            BrowseName: "chrome",
            BMinVersion: "4.0"
        }, {
            OSName: "windows nt",
            BrowseName: "safari",
            BMinVersion: "5.0"
        }, {
            OSName: "mac os x",
            BrowseName: "safari"
        }, {
            OSName: "mac os x",
            BrowseName: "chrome"
        }, {
            OSName: "mac os x",
            BrowseName: "firefox"
        }, {
            OSName: "mac os x",
            BrowseName: "qqbrowser"
        }, {
            OSName: "iphone"
        }, {
            OSName: "ipad"
        }, {
            OSName: "android"
        }], c = 0; c < b.length; c++)
            if (!(b[c].OSName && b[c].OSName != a.OSName || b[c].OSVersion && b[c].OSVersion != a.OSVersion || b[c].ProcessType && b[c].ProcessType != a.ProcessType || b[c].BrowseName && b[c].BrowseName != a.BrowseName))
                return b[c].BMinVersion && parseFloat(b[c].BMinVersion) > parseFloat(a.BrowseVersion) ? 10102 : b[c].BMaxVersion && parseFloat(b[c].BMaxVersion) <= parseFloat(a.BrowseVersion) ? 10103 : 0;
        return 10101
    }
    ,
    d.CheckIsSupport = function() {
        var a = d.GetBrowseEnv()
          , b = d.CheckEnv(a);
        return b
    }
    ,
    d.AlertError = function(a) {
        switch (a) {
        case 1:
            try {
                console.log("未创建控件对象，请页面检查逻辑")
            } catch (b) {}
            break;
        case 2:
            try {
                console.log("没有找到该ID的控件对象")
            } catch (b) {}
            break;
        default:
            try {
                console.log("Error")
            } catch (b) {}
        }
        return null
    }
    ,
    d.TenpayctrlJSON = {},
    d.getTenpayctrlById = function(a) {
        return d.TenpayctrlJSON[a] ? d.TenpayctrlJSON[a] : null
    }
    ,
    d.judgeTenpayctrlById = function(a) {
        return d.TenpayctrlJSON[a] ? !0 : !1
    }
    ,
    d.AndroidQQCertCtrl = function() {
        this.ctrl = window.QQCertificate,
        this.Version = window.QQCertificate.getVersion(),
        this.HostName = window.QQCertificate.getHostName(),
        this.Base64Encode = function(a) {
            return this.ctrl.Base64Encode(a)
        }
        ,
        this.Base64Decode = function(a) {
            return this.ctrl.Base64Decode(a)
        }
        ,
        this.SetChallenge = function(a, b) {
            return this.ctrl.SetChallenge(a, b)
        }
        ,
        this.SetSubject = function(a) {
            return this.ctrl.SetSubject(a)
        }
        ,
        this.GetCSR = function() {
            return this.ctrl.GetCSR()
        }
        ,
        this.ImportCert = function(a) {
            return this.ctrl.ImportCert(a)
        }
        ,
        this.CertSign = function(a, b) {
            return this.ctrl.CertSign(a, b)
        }
        ,
        this.FindCert = function(a, b) {
            return this.ctrl.FindCert(a, b)
        }
        ,
        this.IsCertExist = function(a) {
            return this.ctrl.IsCertExist(a)
        }
        ,
        this.DelCert = function(a) {
            return this.ctrl.DelCert(a)
        }
    }
    ,
    d.QQCertCtrl = function() {
        this.ctrl,
        this.OSName,
        this.Version = {
            valueOf: function() {
                return this.toString()
            },
            toString: function() {
                var a = document.getElementById("js_tenpay_cert");
                return a ? a.Version : null
            }
        },
        this.HostName = {
            valueOf: function() {
                return this.toString()
            },
            toString: function() {
                var a = document.getElementById("js_tenpay_cert");
                return a ? a.HostName : null
            }
        }
    }
    ,
    d.QQCertCtrl.prototype.create = function(a) {
        var b, c, e, f;
        if (c = d.CheckIsSupport())
            return c;
        if (document.getElementById("js_tenpay_cert"))
            return this.ctrl = document.getElementById("js_tenpay_cert"),
            this.Version = this.ctrl.Version,
            c = 30102;
        d.TenpayctrlJSON.js_tenpay_cert = this;
        var g = d.GetBrowseEnv();
        if (this.OSName = g.OSName,
        "Microsoft Internet Explorer" == navigator.appName) {
            if (!a.codebase || 0 != a.codebase) {
                var h = "";
                h = g.OSVersion < 6 ? "tenpaycert_xp.cab" : "x64" == g.ProcessType ? "tenpaycert64.cab" : "tenpaycert.cab",
                e = ' codebase="https://www.tenpay.com/download/' + h + "#Version=" + d.MinCodeBaseVersion + '" '
            }
            b = '<object id="js_tenpay_cert" classid="clsid:BAEA0695-03A4-43BB-8495-C7025E1A8F42"' + e + ' width="0" height="0"></object>'
        } else if ("Netscape" == navigator.appName || "Opera" == navigator.appName)
            if ("iphone" == g.OSName || "ipad" == g.OSName) {
                if ("undefined" != typeof parent.g_tenpaycertIOSobject && (g_tenpaycertIOSobject = parent.g_tenpaycertIOSobject),
                "undefined" == typeof g_tenpaycertIOSobject)
                    return 20107;
                b = '<object id="js_tenpay_cert" width="0" height="0"></object>'
            } else
                b = '<object id="js_tenpay_cert" type="application/qqcert" width="0" height="0"></object>';
        else {
            if ("android" != g.OSName)
                return c = 30103;
            b = "undefined" == typeof window.QQCertificate ? "非财付通浏览器" : '<object id="js_tenpay_cert" width="0" height="0"></object>'
        }
        if (a.div_id)
            document.getElementById(a.div_id).innerHTML = b;
        else if ("iphone" == g.OSName || "ipad" == g.OSName) {
            var i = document.createElement("div");
            i.innerHTML = b,
            i.id = "parentCert",
            i.className = "newDiv",
            document.body.appendChild(i)
        } else
            document.write(b);
        if ("iphone" == g.OSName || "ipad" == g.OSName)
            this.ctrl = g_tenpaycertIOSobject,
            this.Version = this.ctrl.Version,
            this.HostName = this.ctrl.HostName;
        else if ("android" == g.OSName) {
            this.ctrl = new d.AndroidQQCertCtrl,
            this.Version = this.ctrl.Version,
            this.HostName = this.ctrl.HostName;
            var j = document.getElementById("js_tenpay_cert");
            if (j)
                for (var k in this.ctrl)
                    this.ctrl.hasOwnProperty(k) && (j[k] = this.ctrl[k])
        } else {
            if (f = document.getElementById("js_tenpay_cert").Version,
            !f)
                return c = 30104,
                this.ctrl = null ,
                c;
            f < d.OSControlVersion[g.OSName].Min ? c = 30105 : f < d.OSControlVersion[g.OSName].Max && (c = 30107),
            a.version && f < a.version && (c = 30106),
            this.ctrl = document.getElementById("js_tenpay_cert"),
            this.Version = f,
            this.HostName = this.ctrl.HostName
        }
        return c
    }
}(),
//加载类目属性相关
function() {
    var a = function(a) {
        //根据属性的property 使用为运算，定义该属性是不是必填。。
        return isNaN(a) ? null : (a = parseInt(a, 10),
        {
            isSingleVal: !!(256 & a),
            //单选按钮
            isMultiVal: !!(512 & a),
            //复选按钮
            isTxtVal: !!(8 & a),
            //文本款
            isStock: !!(65536 & a),
            //库存属性
            isRequired: !!(131072 & a),
            //是否必填
            isKey: !!(524288 & a),
            //
            isHide: !!(2097152 & a),
            //
            isB2cHide: !!(4194304 & a),
            isPpHide: !!(4096 & a)
        })
    }
      , b = function(a) {
        var b = {}
          , c = {
            preDel: 31
        }
          , d = function(b) {
            var c = Math.floor(b / 32);
            if (a.length < 8 * c + 8)
                return !1;
            var d = a.substr(8 * c, 8)
              , e = parseInt(d, 16);
            return 0 != (2147483648 >>> b % 32 & e)
        };
        for (var e in c)
            b[e] = d(c[e]);
        return b
    }
      , c = function(a, b) {
        return ("," + a + ",").indexOf("," + b + ",") > -1
    }
      , d = function(a) {
        if (a && a.length) {
            for (var b = [], c = 0, d = a.length; d > c; c++)
                isNaN(a[c]) || b.push(parseInt(a[c], 10).toString(16));
            return b.join(",")
        }
        return ""
    }
      , e = function(a, b) {
        if (!a)
            return "";
        var c = [];
        if (b)
            for (var d = a.split(","), e = 0, f = d.length; f > e; e++)
                c.push(parseInt(d[e], 16));
        else {
            for (var g = [], h = (new Array(65 - a.length).join("0") + a).split(""), e = 0, f = h.length; f > e; e++)
                g[g.length] = ["0000", "0001", "0010", "0011", "0100", "0101", "0110", "0111", "1000", "1001", "1010", "1011", "1100", "1101", "1110", "1111"][parseInt(h[e], 16)];
            for (var i = g.join(""), e = 0, f = i.length; f > e; e++)
                "1" == i.substr(e, 1) && c.push(256 - e);
            c.reverse()
        }
        return c.join(",")
    }
      , f = "version=1,";
    $classAttrNew = function(g) {
        var h = {
            area: "",
            var1: "",
            var2: "",
            classId: "",
            hasStock: !1,
            isAdd: !0,
            itemHtml: "",
            isSaleAttrShow: !0,
            onInited: function() {
                return !0
            },
            onChange: function() {
                return !0
            },
            onSPUChange: function() {
                return !0
            },
            onSaleChange: function() {},
            onLoaded: function() {
                return !0
            },
            changeStock: function() {
                return !0
            },
            resetStock: function() {
                return !0
            },
            showFunc: function() {
                return !0
            }
        };
        for (var i in g)
            h[i] = g[i];
        var j = !1
          , k = {
            init: function(a) {
                this.cache.classID = a
            },
            cache: {
                activedUrl: [],
                loadingUrl: {},
                classID: "",
                attrUrl: window.basePath + "/proPublish/doFindAttributeListInfoById.xhtml?callback=classAttrCallBack&classId={#isfull#}&mc={#classid#}&attrId={#attrval#}&tagid=",
                spuUrl: "http://api.paipai.com/spu/findSpuByKeyAttr2.xhtml?needParseAttr=1&classId={#classid#}&keyAttrs={#keyattrs#}"
            },
            getData: function(a, b, c) {
                var d = {};
                d.isfull = a ? "1" : "0",
                d.classid = this.cache.classID,
                d.attrval = b && b.replace(/\^+/g, "").replace("version=1,", "");
                var e = $formatStr(this.cache.attrUrl, d)
                  , f = 0;
                for (var g in this.cache.loadingUrl)
                    if (e == this.cache.loadingUrl[g]) {
                        f = 1;
                        break
                    }
                if (("," + this.cache.activedUrl.join(",") + ",").indexOf("," + e + ",") > -1)
                    f && c ? c() : alert("类目属性请求出错，请刷新页面重试，如果多次出现这种情况请联系客服处理。");
                else {
                    this.cache.activedUrl.push(e);
                    var h = (new Date).getTime();
                    this.cache.loadingUrl[h] = e,
                    $loadScript(e + h)
                }
            },
            getSPUData: function(a) {
                var b = {};
                b.classid = this.cache.classID,
                b.keyattrs = a;
                var c = $formatStr(this.cache.spuUrl, b);
                $loadScript(c)
            }
        }
          , l = {
            cache: {
                lastSaleAttr: 0,
                val: {},
                items: {},
                itemsAr: [],
                itemsInShow: [],
                itemsInKey: [],
                keyStatus: {
                    str: "",
                    allVal: !1,
                    keyAttrs: ""
                },
                valDom: null ,
                txtDom: null
            },
            init: function(a, b) {
                this.newVersion = a.value.indexOf(f) > -1,
                this.cache.valDom = a,
                this.cache.txtDom = b,
                this.initVal()
            },
            initVal: function() {
                this.initValByType(this.cache.valDom.value, "val"),
                this.initValByType(this.cache.txtDom.value, "txt")
            },
            initValByType: function(a, b) {
                if (a && (a = a.replace(/\^+/g, "").replace(f, "")),
                a)
                    for (var c = a.split("|"), d = null , e = 0, g = c.length; g > e; e++)
                        if (d = c[e].split(":"),
                        3 == d.length && d.shift(),
                        2 == d.length && d[0]) {
                            var h = parseInt(d[0], 16) + "";
                            this.cache.val[h] || (this.cache.val[h] = {}),
                            this.cache.val[h][b] = d[1]
                        }
            },
            //表单里面的PClassAttr的值经过此处转义
            getVal: function() {
                for (var a = [], b = {}, c = [], e = 0, g = this.cache.itemsInShow.length; g > e; e++) {
                    var h = this.cache.itemsInShow[e];
                    if (h.defaultVar) {
                        var i = parseInt(h.id, 10).toString(16)
                          , //将属性id先强制转换为数字,在转成16进制
                        j = h.defaultVar.split(",");
                        b[i] = b[i] ? b[i].concat(j) : j
                    }
                    h.defaultTxt && (c[c.length] = parseInt(h.id, 10).toString(16) + ":" + h.defaultTxt)
                }
                for (e in b)
                    a.push(e + ":" + d($arrayUniq(b[e])));
                //将属性下拉框选中的值的id先强制转换为数字,在转成16进制
                this.cache.valDom.value = f + a.join("|"),
                this.cache.txtDom.value = c.join("|")
            },
            hasStock: function() {
                for (var a = 0, b = this.cache.itemsInShow.length; b > a; a++) {
                    var c = this.cache.itemsInShow[a];
                    if (c.prop.isStock)
                        return !0
                }
                return !1
            },
            //设置页面展示数据 b:后端获取的数据
            setData: function(b) {
                if (b && b.length)
                    for (var c = 0, d = b.length; d > c; c++)
                        if (b[c].prop = a(b[c].property),
                        !b[c].prop.isPpHide) {
                            var f = this.cache.val[b[c].id];
                            if (f) {
                                if (f.val)
                                    if (b[c].prop.isMultiVal)
                                        b[c].defaultVar = e(f.val, this.newVersion);
                                    else if (f.val.indexOf(",")) {
                                        var g = e(f.val, this.newVersion);
                                        g = "," + g + ",";
                                        for (var h = 0; h < b[c].opList.length; h++)
                                            if (g.indexOf("," + b[c].opList[h][0] + ",") > -1) {
                                                b[c].defaultVar = b[c].opList[h][0] + "";
                                                break
                                            }
                                    } else
                                        b[c].defaultVar = parseInt(f.val, 16) + "";
                                f.txt && (b[c].defaultTxt = f.txt)
                            }
                            b[c].prop.isTxtVal && (b[c].defaultVar = "1"),
                            b[c].prop.isHide && (b[c].prop.isTxtVal ? b[c].defaultTxt = "-" : b[c].defaultVar = "1"),
                            b[c].keyid = b[c].id + "_" + b[c].parentAttrId,
                            this.cache.items[b[c].keyid] || this.cache.itemsAr.push(b[c]),
                            this.cache.items[b[c].keyid] = b[c]
                        }
            },
            //数据显示相关
            show: function() {
                var a = {
                    0: [1]
                }
                  , b = this.cache.itemsInShow = [{
                    id: "0",
                    parentId: "0",
                    parentAttrId: "0",
                    defaultVar: "0",
                    keyid: "0",
                    opList: [[0, "其他", 1]]
                }];
                this.cache.itemsInKey.length = 0;
                for (var d = {}, e = this.cache.itemsAr, f = 0; f < b.length; f++) {
                    var g = b[f]
                      , i = b.length
                      , j = !1
                      , n = [];
                    if (g.defaultVar)
                        for (var o = 0, p = g.opList.length; p > o; o++)
                            c(g.defaultVar, g.opList[o][0]) && 1 == (g.opList[o][3] || g.opList[o][2]) && (j = !0,
                            n.push(1 * g.opList[o][0]));
                    if (j) {
                        for (var q = 0, r = e.length; r > q; q++)
                            if (e[q].parentId == g.id && c(g.defaultVar, e[q].parentAttrId) && ($arrayRemove(n, 1 * e[q].parentAttrId),
                            e[q].parentKeyid = g.keyid,
                            a[e[q].id] = a[g.id].concat([]),
                            a[e[q].id].push(q),
                            b[b.length] = e[q],
                            e[q].prop.isKey))
                                for (var s = e[q]; s && "0" != s.id && !d[s.keyid]; )
                                    d[s.keyid] = 1,
                                    this.cache.itemsInKey.push(s),
                                    s = this.cache.items[s.parentKeyid];
                        if (b.length == i || n.length && 0 != n[0]) {
                            var t = parseInt(g.id, 10).toString(16) + ":" + parseInt(n[0], 10).toString(16);
                            return "0:0" == t ? !1 : (k.getData(!1, t, function() {
                                setTimeout(function() {
                                    l.show()
                                }, 100)
                            }),
                            !1)
                        }
                    }
                }
                if (b.shift(),
                !h.isSaleAttrShow) {
                    for (var u = [], v = [], w = [], f = 0; f < b.length; f++) {
                        var g = b[f]
                          , x = this.cache.items[g.keyid];
                        x.prop.isStock ? (u.push(x),
                        v.push(x.id)) : w.push(g)
                    }
                    v.sort();
                    var y = v.join(",");
                    (0 === this.cache.lastSaleAttr || y != this.cache.lastSaleAttr) && (h.onSaleChange(u),
                    this.cache.lastSaleAttr = y),
                    this.cache.itemsInShow = b = w
                }
                b.sort(function(b, c) {
                    for (var d = a[b.id], e = a[c.id], f = 0, g = Math.max(d.length, e.length); g > f; f++)
                        if (~~d[f] != ~~e[f])
                            return ~~d[f] - ~~e[f];
                    return 0
                }),
                m.show(b)
            },
            genKeyStr: function() {
                for (var a = [], b = [], c = !0, d = this.cache.itemsInKey, e = null , f = 0, g = d.length; g > f; f++) {
                    var e = d[f];
                    b.push(e.id + ":" + e.defaultVar + ":" + (e.prop.isTxtVal ? "1" : "0")),
                    a.push(e.id + ":" + e.defaultVar),
                    e.defaultVar || (c = !1)
                }
                var h = a.join("|")
                  , i = b.join("|");
                return {
                    str: h,
                    allVal: h ? c : !1,
                    keyAttrs: i
                }
            },
            checkSPU: function() {
                var a = this.genKeyStr()
                  , b = this.cache.keyStatus;
                a.str != b.str && (this.removeDisabled(),
                a.allVal ? k.getSPUData(a.keyAttrs) : !a.allVal && b.allVal && h.onSPUChange(null ),
                this.cache.keyStatus = a)
            },
            removeDisabled: function() {
                for (var a = 0, b = this.cache.itemsInShow.length; b > a; a++)
                    this.cache.itemsInShow[a].disabled = !1
            },
            activeAll: function() {
                for (var a = 0, b = this.cache.itemsInShow.length; b > a; a++)
                    this.cache.itemsInShow[a].actived = !0
            }
        }
          , m = {
            cache: {
                area: null ,
                template: {
                    itemHtml: '<div class="attr_tit"><em class="asterisk">{#must#}</em>{#name#}:</div><div class="attr_cnt"> 					  		<span class="cts1"><input type="hidden" id ="v_{#attrId#}" value="{#defaultVar#}" atag="{#showType#}" stock="{#haveStock#}" text="{#defalutSelectTxt#}" {#disabled#} options="{#options#}" onchange="classAttrNew_onchange(this)" /></span> 					    	<span class="cts2" style="display:{#showElse#}"><input type="text" id="x_{#attrId#}" value="{#defaultTxt#}" size="20" onchange="classAttrNew_onchange(this)"/></span> 							<a class="cts3 msg0-icon-help" href="javascript:;" id="a_{#attrId#}" style="display:{#showAbout#}" onmouseover="classAttrNew_showAbout(this)">?</a> 					  	  </div> 					 	  <div class="attr_tips" style="display:none"> 					  		<span class="cts4" id="e_{#attrId#}" style="display:none"></span> 							<p id="t_{#attrId#}" style="display:none">{#desc#}</p> 					  	  </div>'
                }
            },
            init: function(a, b) {
                this.cache.area = $id(a),
                b && (this.cache.template.itemHtml = b)
            },
            //设置个类目属性的特性 是否选，是否必选。。。。。。
            show: function(a) {
                for (var b = {}, c = 0, d = a.length; d > c; c++) {
                    var e = "l_" + a[c].keyid;
                    if ($id(e)) {
                        var f = $id("v_" + a[c].keyid);
                        f && (f.value = a[c].defaultVar,
                        a[c].defaultRange && f.setAttribute("range", a[c].defaultRange),
                        f.readonly = a[c].disabled ? !0 : !1)
                    } else {
                        var g = document.createElement("li");
                        g.id = e,
                        g.style.display = a[c].prop.isHide ? "none" : "";
                        var i = {};
                        if (i.attrId = a[c].keyid,
                        i.must = a[c].prop.isRequired ? "*" : "",
                        i.name = a[c].name,
                        a[c].parentAttrId > 0)
                            for (var j = l.cache.items[a[c].parentKeyid], k = 0, m = j.opList.length; m > k; k++) {
                                var n = j.opList[k];
                                if (n[0] == a[c].parentAttrId) {
                                    -1 == i.name.indexOf(n[1]) && (i.name += "(" + n[1] + ")");
                                    break
                                }
                            }
                        i.defaultVar = a[c].defaultVar,
                        i.defaultTxt = a[c].defaultTxt,
                        i.desc = a[c].desc,
                        i.haveStock = a[c].prop.isStock ? "1" : "0",
                        i.showAbout = a[c].desc ? "" : "none",
                        i.defalutSelectTxt = "",
                        i.showType = a[c].prop.isSingleVal ? "select" : a[c].prop.isMultiVal ? "checkbox" : "txt",
                        i.showElse = a[c].prop.isTxtVal || a[c].defaultTxt ? "" : "none",
                        i.disabled = a[c].disabled ? "readonly='readonly'" : "",
                        i.options = a[c].opList.join("|"),
                        g.innerHTML = $xss($formatStr(this.cache.template.itemHtml, i), "none");
                        var o = null ;
                        a[c - 1] && (o = $id("l_" + a[c - 1].keyid).nextSibling),
                        this.cache.area.insertBefore(g, o)
                    }
                    b[e] = 1
                }
                for (var p = this.cache.area.childNodes, q = [], c = 0, d = p.length; d > c; c++)
                    b[p[c].id] || q.push(p[c]);
                for (var c = 0, d = q.length; d > c; c++)
                    this.cache.area.removeChild(q[c]);
                this.deepShow(),
                h.onLoaded && (h.hasStock = l.hasStock(),
                h.onLoaded(h),
                h.onLoaded = !1)
            },
            deepShow: function() {
                h.showFunc(this.cache.area)
            },
            showError: function(a) {
                for (var b = [], c = 0, d = a.length; d > c; c++) {
                    var e = b.length
                      , f = $id("e_" + a[c].keyid)
                      , g = $id("x_" + a[c].keyid)
                      , h = $id("v_" + a[c].keyid) && $id("v_" + a[c].keyid).getAttribute("text") + "" || "";
                    a[c].actived ? (a[c].prop.isRequired && !a[c].defaultVar && (b[b.length] = "请选择“" + a[c].name + "”"),
                    a[c].prop.isTxtVal || (h.indexOf("其他") > -1 ? g && (g.parentNode.style.display = "") : g && (g.parentNode.style.display = "none")),
                    h.indexOf("其他") > -1 && !a[c].defaultTxt && (a[c].prop.isTxtVal ? a[c].prop.isRequired && (b[b.length] = "请填写“" + a[c].name + "”") : b[b.length] = "请填写“" + a[c].name + "”的自定义属性值"),
                    b.length > e ? f && (f.innerHTML = $xss(b[b.length - 1], "none"),
                    f.style.display = "",
                    f.parentNode.style.display = "") : f && (f.innerHTML = $xss("", "none"),
                    f.style.display = "none",
                    f.parentNode.style.display = "none")) : f && (f.innerHTML = $xss("", "none"),
                    f.style.display = "none",
                    f.parentNode.style.display = "none")
                }
                return b.length ? b : !0
            }
        }
          , n = !0
          , o = function(a, c) {
            if (delete k.cache.loadingUrl[c],
            a.property) {
                var d = b(a.property);
                if (d.preDel)
                    return alert("您当前的操作类目由于进行拆分或合并操作，已被新类目所代替，请选择准确类目重新发布商品！"),
                    $id(h.area).innerHTML = "您当前的操作类目由于进行拆分或合并操作，已被新类目所代替，请选择准确类目重新发布商品！",
                    !1
            }
            "0" == a.errcode && a.attrList ? a.attrList.length ? ($("#attr-area").show(),
            l.setData(a.attrList),
            l.show()) : n ? $id(h.area).innerHTML = "" : alert("数据有误，请刷新页面重试") : alert("数据有误，请刷新页面重试"),
            n = !1
        }
          , p = function() {
            h.onSPUChange(null )
        }
          , q = function(a) {
            if (h.onSPUChange(a),
            "0" == a.errorCode && a.attrList && a.attrList.length > 0) {
                for (var b = a.attrList, c = {}, d = 0, e = b.length; e > d; d++)
                    "2089" != b[d].attrID && (c[b[d].attrID] || (c[b[d].attrID] = {
                        val: [],
                        txt: []
                    }),
                    c[b[d].attrID].val.push(b[d].attrOptionID),
                    c[b[d].attrID].txt.push(b[d].attrOptionValue));
                for (var f = l.cache.itemsInShow, g = l.cache.itemsInKey, d = 0, e = f.length; e > d; d++)
                    if (c[f[d].id]) {
                        if (j || h.isAdd || !f[d].prop.isMultiVal)
                            f[d].defaultRange = c[f[d].id].val.join(","),
                            f[d].defaultVar = c[f[d].id].val.join(",");
                        else if (f[d].defaultRange = c[f[d].id].val.join(","),
                        f[d].defaultVar) {
                            for (var i = [], k = f[d].defaultVar.split(","), n = 0, o = k.length; o > n; n++)
                                k[n] && ("," + f[d].defaultRange + ",").indexOf("," + k[n] + ",") > -1 && i.push(k[n]);
                            f[d].defaultVar = i.length ? i.join(",") : f[d].defaultRange
                        } else
                            f[d].defaultVar = f[d].defaultRange;
                        f[d].disabled = !0
                    } else
                        f[d].prop.isB2cHide || f[d].prop.isHide || (f[d].disabled = !0);
                for (var d = 0, e = g.length; e > d; d++)
                    g[d].disabled = !1;
                if (l.activeAll(),
                m.show(l.cache.itemsInShow),
                m.showError(l.cache.itemsInShow),
                j || h.isAdd) {
                    h.resetStock();
                    for (var d = 0, e = f.length; e > d; d++)
                        if (f[d].prop.isStock && f[d].prop.isMultiVal) {
                            var p = $id("v_" + f[d].keyid);
                            if (p.getAttribute("text") + "") {
                                var q = (p.getAttribute("text") + "").split("||");
                                h.changeStock(f[d].name, q, 0)
                            }
                        }
                }
                j = !0
            }
        }
          , r = function(a) {
            var b = a.id.match(/^(v|x)_(\d+_\d+)$/);
            if (b && l.cache.items[b[2]]) {
                var c = l.cache.items[b[2]];
                if (c.actived = !0,
                "v" == b[1]) {
                    if (c.defaultVar = a.value,
                    (a.getAttribute("text") + "").indexOf("其他") > -1)
                        $id("x_" + c.keyid) && ($id("x_" + c.keyid).parentNode.style.display = "");
                    else {
                        var d = $id("x_" + c.keyid);
                        d && (d.value = "",
                        c.defaultTxt = "",
                        d.parentNode.style.display = "none")
                    }
                    if (c.prop.isStock && c.prop.isMultiVal) {
                        var e = $id(a.getAttribute("targetid") + "");
                        e && (e.getAttribute("text") + "").indexOf("其他") < 0 && h.changeStock(c.name, e.getAttribute("text") + "" || a.getAttribute("text") && (a.getAttribute("text") + "").split("||"), e.checked ? 1 : -1)
                    }
                    h.onChange(a, c),
                    l.show()
                } else {
                    var f = a.value;
                    f.replace(/[-:\|\^"\\\/<>]/g, "") != f && (f = f.replace(/\:/g, "：").replace(/\|/g, "｜").replace(/\^/g, " ").replace(/\"/g, "“").replace(/\\/g, " ").replace(/\//g, " ").replace(/\'/g, "‘").replace(/</g, "＜").replace(/>/g, "＞").replace(/-/g, "~"),
                    a.value = $strTrim(f)),
                    c.defaultTxt = a.value
                }
                m.showError(l.cache.itemsInShow)
            }
        }
          , s = function(a) {
            var b = $id(a.id.replace("a_", "t_"));
            if (b && b.innerHTML) {
                var c = $showTip({
                    title: "",
                    content: $xss(b.innerHTML, "none"),
                    left: $getX(a) - 25,
                    top: $getY(a) + 20,
                    width: 350,
                    height: 0,
                    type: "1"
                })
                  , d = function() {
                    c && c.close(),
                    $delEvent(a, "mouseout", d)
                };
                $addEvent(a, "mouseout", d)
            }
        }
          , t = function() {
            l.activeAll();
            var a = m.showError(l.cache.itemsInShow);
            return 1 == a ? (l.getVal(),
            !0) : a
        };
        return k.init(h.classId),
        l.init($id(h.var1), $id(h.var2)),
        m.init($id(h.area), h.itemHtml),
        k.getData(!0, $id(h.var1).value),
        window.classAttrCallBack = o,
        window.findSpuByKeyAttr2Success = q,
        window.classAttrNew_onchange = r,
        window.classAttrNew_showAbout = s,
        window.findSpuByKeyAttr2Fail = p,
        h.onInited(),
        h.check = t,
        h
    }
}(),
//function() {
//    if ("undefined" == typeof $login) {
//        var a = 1;
//        $login = function(b) {
//            var c = arguments.callee,
//            d = {
//                option: {
//                    title: "腾讯拍拍网-请您登录后继续刚才的操作",
//                    containerId: "",
//                    floatDialog: !0,
//                    modalDialog: !0,
//                    dragable: !0,
//                    showClose: !0,
//                    quickLogin: !0,
//                    checkLogin: !0,
//                    checkReady: !0,
//                    showProtocol: !1,
//                    noChangeQQ: !1,
//                    defaultQQ: "",
//                    type: "self",
//                    action: "",
//                    x: 0,
//                    y: 0,
//                    domain: "",
//                    skin: "${basePath}/resources/css/propublish/module_box.css",
//                    appid: "",
//                    onLogin: $empty(),
//                    onReset: $empty(),
//                    onClose: $empty(),
//                    onResize: $empty(),
//                    onSuccess: $empty(),
//                    onFailure: $empty()
//                },
//                init: function(b) {
//                    var d = this.option;
//                    for (var e in b) d[e] = b[e];
//                    if (!d.checkReady || $isDocReady()) {
//                        var f = location.hostname,
//                        g = f.split(".");
//                        if (g.length > 1) {
//                            g = g[g.length - 2] + "." + g[g.length - 1];
//                            try {
//                                document.domain = d.domain || g
//                            } catch(h) {}
//                        }
//                        return d.show = this.show,
//                        d.close = this.close,
//                        d.resize = this.resize,
//                        d.doAction = this.doAction,
//                        d.counter = a++,
//                        -1 != f.indexOf("paipai.com") && ($setCookie("returnurl", "", -1, "/", "paipai.com"), $setCookie("referurl", "", -1, "/", "paipai.com")),
//                        d.checkLogin && $isLogin() ? (d.doAction(), void 0) : (this.registerLoginEvent(), this.load(d.skin), d.show(d), c.instance = d, d)
//                    }
//                },
//                registerLoginEvent: function() {
//                    ptlogin2_onLogin = function() {
//                        return $login.instance.onLogin() ? !0: !1
//                    },
//                    ptlogin2_onReset = function() {
//                        return $login.instance.onReset() ? !0: !1
//                    },
//                    ptlogin2_onClose = function() {
//                        return - 1 != location.hostname.indexOf("qq.com") && ptlogin2_onSuccess(),
//                        $login.instance.onClose() ? !0: !1
//                    },
//                    ptlogin2_onResize = function(a, b) {
//                        var c = $login.instance;
//                        return a = parseInt(a),
//                        b = parseInt(b),
//                        c.onResize(a, b) ? (c.resize($id("login_frame_" + c.counter), a, b), c.floatDialog ? (b = b + 75 - (c.showProtocol ? 0: 39), c.floatHandle ? c.floatHandle.resize(a + 28, b) : "", c.resize($id("loginunit"), a + 28, b)) : (b = b + 60 - (c.showProtocol ? 0: 39), c.resize($id(c.containerId), a, b), c.resize($id("loginunit2"), a, b)), !0) : !1
//                    },
//                    ptlogin2_onSuccess = function() {
//                        var a = $login.instance;
//                        if (!a.onSuccess()) return ! 1;
//                        a.close();
//                        var b = location.hostname,
//                        c = -1 != b.indexOf("qq.com"),
//                        d = !1,
//                        e = "";
//                        e = c ? "http://ptlogin2.qq.com/ho_cross_domain?tourl=" + encodeURIComponent("http://member.paipai.com/cgi-bin/ptlogin?returnurl=http://auction.paipai.com/null.shtml&loginfrom=20") : "http://ptlogin2.paipai.com/ho_cross_domain?tourl=" + encodeURIComponent("http://user.buy.qq.com/cgi-bin/ping/visitkey");
//                        var f = function() {
//                            d || (d = !0, a.doAction()),
//                            g && (clearTimeout(g), g = null)
//                        },
//                        g = setTimeout(function() {
//                            f()
//                        },
//                        2e3),
//                        h = new Image;
//                        return h.onabort = h.onerror = function() {
//                            f()
//                        },
//                        h.src = e,
//                        !0
//                    },
//                    ptlogin2_onFailure = function(a) {
//                        var b = $login.instance;
//                        return b.onFailure(a) ? (a && alert("登录失败！可能的错误原因：" + a), $login(b), !0) : !1
//                    },
//                    ptlogin2_frame_onLoad = function() {
//                        var a = $login.instance;
//                        if (a.noChangeQQ) {
//                            var b = $id("login_frame_" + a.counter);
//                            if (b) {
//                                var c = b.contentWindow && b.contentWindow.document.getElementById("u");
//                                c && (c.disabled = !0)
//                            }
//                        }
//                    }
//                },
//                doAction: function() {
//                    switch (this.type) {
//                    case "func":
//                        this.action();
//                        break;
//                    case "top":
//                        top.location.href = this.action;
//                        break;
//                    case "parent":
//                        parent.location.href = this.action;
//                        break;
//                    case "self":
//                        location.href = this.action;
//                        break;
//                    case "blank":
//                        window.open(this.action)
//                    }
//                },
//                show: function(a) {
//                    var b = location.hostname,
//                    c = -1 != b.indexOf("qq.com");
//                    this.appid || (this.appid = b.indexOf("buy.qq.com") > -1 ? b.indexOf("seller.buy.qq.com") > -1 ? 703010802: 677010801: c ? 8000210: 17000101);
//                    var d = {
//                        style: 0,
//                        target: "self",
//                        no_verifyimg: 1,
//                        hide_title_bar: 1,
//                        f_url: "loginerroralert",
//                        bgcolor: this.floatDialog ? "f2faff": "eef5ff",
//                        link_target: "blank",
//                        uin: this.defaultQQ,
//                        appid: this.appid,
//                        t: Math.random()
//                    };
//                    if (this.quickLogin || (d.enable_qlogin = 0), c) {
//                        var e = "http://ui.ptlogin2.qq.com/cgi-bin/login?";
//                        d.s_url = b.indexOf("buy.qq.com") > -1 ? "http://buy.qq.com%2Fredirect.html": /(chong\.qq\.com)/.test(b) ? "http%3A%2F%2Fchong.qq.com%2Fmember%2Flogin_s.shtml": "http://imgcache.qq.com%2Fqqshop%2Fac%2Fportal%2Fredirect.html"
//                    } else {
//                        var e = "http://ui.ptlogin2.paipai.com/cgi-bin/login?";
//                        d.s_url = "http://member.paipai.com/cgi-bin/ptlogin%3Floginfrom%3D18"
//                    }
//                    e += $makeUrl(d);
//                    var f = 398,
//                    g = 254 - (this.showProtocol ? 0: 39),
//                    h = g - 75 - (this.showProtocol ? 0: 39),
//                    i = '<div class="{class}" id="{class}" style="position:relative;height:' + g + "px;width:" + f + 'px"><h3 id="login_title_{id}" style="padding:0;margin:0"><span id="login_close_btn_{id}"{display}>关闭</span><strong>登录</strong><em>{title}</em></h3><iframe src="' + e + '" id="login_frame_{id}" name="login_frame_{id}" scrolling="no" frameborder="0" onload="ptlogin2_frame_onLoad()" style="height:' + h + "px;width:" + f + 'px"></iframe><div id="login_protocol_{id}" style="text-align:center"><input name="" id="login_protocol_chk_{id}" type="checkbox" value="" checked="checked" /><label for="login_protocol_chk_{id}"> 已阅读并同意<a class="blule" href="http://help.paipai.com/user_agreement.shtml" target="_blank">《拍拍网用户服务协议》</a></label></div><div id="login_protocol_mask_{id}" onclick="alert(\'请先同意《拍拍网用户服务协议》\')" style="position:absolute;left:3px;top:28px;filter:alpha(opacity=1);opacity:0.01;background-color:#000;display:none;"></div></div>';
//                    i = i.replace(/{id}/g, a.counter).replace(/{class}/g, this.floatDialog ? "loginunit": "loginunit2").replace(/{display}/g, this.showClose ? "": 'style="display:none;"').replace(/{title}/g, this.title),
//                    this.floatDialog ? (this.floatHandle = $float({
//                        width: f,
//                        height: g,
//                        cover: this.modalDialog,
//                        style: "none",
//                        title: this.title,
//                        titleId: "login_title_" + a.counter,
//                        html: '<div id="login_content_' + a.counter + '">' + i + "</div>",
//                        left: this.x,
//                        top: this.y,
//                        dragble: this.dragable,
//                        fix: !this.dragable,
//                        showClose: this.showClose,
//                        closeId: this.showClose ? "login_close_btn_" + a.counter: ""
//                    }), this.containerId = "login_content_" + a.counter) : $id(this.containerId).innerHTML = i,
//                    this.showProtocol ? $id("login_protocol_" + a.counter).style.display = "": ($id("login_protocol_" + a.counter).style.display = "none", $id("login_protocol_chk_" + a.counter).onclick = function() {
//                        var b = $id("login_protocol_mask_" + a.counter),
//                        c = $id("login_frame_" + a.counter);
//                        this.checked ? b.style.display = "none": (b.style.display = "", b.style.height = c.style.height, b.style.width = c.style.width)
//                    })
//                },
//                close: function() {
//                    this.floatHandle.close()
//                },
//                load: function(a) {
//                    if (a instanceof Array) for (var b = 0, c = a.length; c > b; b++) a[b] && /^(http|https):\/\//gi.test(a[b]) && $loadCss(a[b]);
//                    else a && $loadCss(a)
//                },
//                resize: function(a, b, c) {
//                    c && (a.style.height = c + "px"),
//                    b && (a.style.width = b + "px")
//                }
//            };
//            return d.init(b)
//        }
//    }
//} (window),
function() {
    var a = null
      , b = function(a, b, c) {
        window.addEventListener ? a.addEventListener(b, c, !1) : window.attachEvent ? a.attachEvent("on" + b, c) : a["on" + b] = c
    }
      , c = function(a) {
        if (!a)
            return 0;
        var b = a.replace(/[\u00FF-\uFFFF]/g, "").length;
        return .56 * b + (a.length - b)
    }
      , d = function(b) {
        return a ? new a(b) : (a = function(a) {
            this.initSelecter(a)
        }
        ,
        a.prototype.initSelecter = function(a) {
            a.id || (a.id = f.autoID.gen()),
            this.id = a.id,
            this.dom = a,
            this.disabled = !1,
            this.type = a.getAttribute("atag") + "" || "txt",
            this.optionStr = a.getAttribute("options") + "",
            this.selectedValue = a.value,
            this.selectedText = [],
            this.optionAr = [],
            this.maxLength = 0;
            var b = []
              , d = !1;
            if (this.optionStr)
                for (var e = this.optionStr.split("|"), g = 0, h = e.length; h > g; g++) {
                    var i = e[g].split(",");
                    if (i.length >= 3) {
                        var j = c(i[1]);
                        j > this.maxLength && (this.maxLength = j),
                        d = !1,
                        ("," + this.selectedValue + ",").indexOf("," + i[0] + ",") > -1 && (this.selectedText.push(i[1]),
                        d = !0),
                        b[b.length] = "<label for='" + ("opList_" + this.id + "_" + i[0]) + "'><input type='checkbox' id='" + ("opList_" + this.id + "_" + i[0]) + "' text='" + i[1] + "' value='" + i[0] + "' " + (d ? "checked='checked'" : "") + "/>" + i[1] + "</label>",
                        this.optionAr.push({
                            value: i[0],
                            name: i[1],
                            shortname: i[2] || ""
                        })
                    }
                }
            if (this.maxLength = this.optionAr.length > 15 ? Math.ceil(Math.max(this.maxLength, 11 / .9)) : Math.ceil(Math.max(this.maxLength, 3 / .9)),
            this.selectedText = this.selectedText.join("||"),
            this.dom.setAttribute("text", this.selectedText),
            "select" == this.type) {
                if (this.selectedText = this.selectedText || "未选择",
                this.optionAr.unshift({
                    value: "",
                    name: "未选择",
                    shortname: ""
                }),
                this.showid = "slt_" + this.id,
                this.tbid = "tbOption_" + this.id,
                this.shid = "txtSearch_" + this.id,
                $id(this.showid))
                    this.showDom = $id(this.showid);
                else {
                    var k = document.createElement("input");
                    k.id = this.showid,
                    k.type = "text",
                    k.className = "pseudo_selecter",
                    this.dom.parentNode.insertBefore(k, this.dom.nextSibling),
                    this.showDom = k
                }
                this.showDom.readOnly = !0,
                this.showDom.value = this.selectedText,
                this.showDom.style.width = this.maxLength + 2 + "em",
                this.showDom.setAttribute("autocomplete", "off")
            } else if ("checkbox" == this.type) {
                if (b.length > 2 && b.push("<label for='opList_" + this.id + "_all'><input type='checkbox' id='opList_" + this.id + "_all' text='' value='' /><b>全选</b></label>"),
                this.showid = "opList_" + this.id,
                $id(this.showid))
                    this.opDom = $id(this.showid);
                else {
                    var l = document.createElement("span");
                    l.id = this.showid,
                    this.dom.parentNode.insertBefore(l, this.dom.nextSibling),
                    this.opDom = l
                }
                this.opDom.innerHTML = $xss(b.join(""), "none")
            }
        }
        ,
        a.prototype.update = function(a) {
            if (this.dom = a,
            this.selectedValue != a.value)
                if ("select" == this.type) {
                    for (var b = "", c = 0, d = this.optionAr.length; d > c; c++)
                        if (this.optionAr[c].value == a.value) {
                            b = this.optionAr[c].name;
                            break
                        }
                    this.dom.setAttribute("text", b),
                    b = b || "未选择",
                    this.selectedText = b,
                    this.showDom.value = b
                } else if ("checkbox" == this.type) {
                    for (var b = [], e = this.opDom.getElementsByTagName("input"), c = 0, d = e.length; d > c; c++)
                        "checkbox" == e[c].type && (("," + a.value + ",").indexOf("," + e[c].value + ",") > -1 && e[c].value ? (e[c].checked = !0,
                        b.push(e[c].getAttribute("text") || "")) : e[c].checked = !1);
                    this.selectedText = b.join("||"),
                    this.dom.setAttribute("text", this.selectedText)
                }
            if (this.disabled != a.readonly || this.disabled && a.getAttribute("range"))
                if ("select" == this.type)
                    this.showDom.disabled = a.readonly;
                else if ("checkbox" == this.type)
                    for (var e = this.opDom.getElementsByTagName("input"), c = 0, d = e.length; d > c; c++)
                        if ("checkbox" == e[c].type)
                            if (e[c].checked)
                                e[c].disabled = !1;
                            else if (a.readonly) {
                                var f = a.getAttribute("range") || "";
                                e[c].disabled = e[c].value && ("," + f + ",").indexOf("," + e[c].value + ",") > -1 ? !1 : !0
                            } else
                                e[c].disabled = a.readonly;
            this.disabled = a.readonly,
            this.selectedValue = a.value
        }
        ,
        a.prototype.query = function(a) {
            a = (a || "zgnwfppdaxb").toLowerCase();
            for (var b = [], c = [], d = 0, e = this.optionAr.length; e > d; d++) {
                var f = this.optionAr[d]
                  , g = f.name.toLowerCase().indexOf(a) + 1 || f.shortname.toLowerCase().indexOf(a) + 1;
                g ? b.push({
                    item: f,
                    order: g
                }) : c.push({
                    item: f,
                    order: 0
                })
            }
            return b.sort(function(a, b) {
                return a.order - b.order
            }),
            b.concat(c)
        }
        ,
        a.prototype.lightChange = function(a, b) {
            this.showDom && (this.selectedText = a,
            this.selectedValue = b,
            this.showDom.value = a)
        }
        ,
        a.prototype.change = function(a, b) {
            this.showDom && (null == a && (a = this.selectedText),
            null == b && (b = this.selectedValue),
            this.dom.value != b && (this.selectedValue = b,
            this.dom.value = b,
            this.selectedText = a,
            this.showDom.value = a,
            this.dom.setAttribute("text", a),
            $fireEvent(this.dom, "change")))
        }
        ,
        a.prototype.checked = function(a) {
            if (this.opDom) {
                for (var b = [], c = [], d = this.opDom.getElementsByTagName("input"), e = 0, f = d.length; f > e; e++)
                    "checkbox" == d[e].type && d[e].checked && d[e].value && (b.push(d[e].value),
                    c.push(d[e].getAttribute("text") + "" || ""));
                b = b.join(","),
                c = c.join("||"),
                this.dom.value != b && (this.selectedValue = b,
                this.selectedText = c,
                this.dom.value = b,
                this.dom.setAttribute("text", c),
                this.dom.setAttribute("targetid", a.id),
                $fireEvent(this.dom, "change"))
            }
        }
        ,
        a.prototype.checkAll = function(a) {
            if (this.opDom) {
                for (var b = [], c = [], d = this.opDom.getElementsByTagName("input"), e = 0, f = d.length; f > e; e++)
                    "checkbox" == d[e].type && (d[e].getAttribute("text").indexOf("其他") < 0 && (d[e].checked = a.checked),
                    d[e].checked && d[e].value && (b.push(d[e].value),
                    c.push(d[e].getAttribute("text") + "" || "")));
                b = b.join(","),
                c = c.join("||"),
                this.dom.value != b && (this.selectedValue = b,
                this.selectedText = c,
                this.dom.value = b,
                this.dom.setAttribute("text", c),
                this.dom.setAttribute("targetid", a.id),
                $fireEvent(this.dom, "change"))
            }
        }
        ,
        new a(b))
    }
      , e = function(a, b) {
        if (a && b && b.length) {
            for (var c = [], d = "<li><span class='value'>{#value#}</span><span class='{#nameClass#}'>{#name#}</span></li>", e = 0, f = b.length; f > e; e++) {
                var g = b[e].item;
                c[c.length] = d.replace(/{#value#}/g, g.value).replace(/{#name#}/g, g.name).replace(/{#nameClass#}/g, b[e].order ? "result" : "name")
            }
            a.innerHTML = $xss(c.join(""), "none")
        }
    }
      , f = {
        autoID: {
            prefix: "pseudoSelecter_",
            count: 0,
            gen: function() {
                return this.prefix + ++this.count
            }
        },
        items: {}
    }
      , g = null ;
    $pseudoSelecter = function(a, c) {
        var h = []
          , i = [];
        "input" == a.tagName.toLowerCase() ? i.push(a) : i = a.getElementsByTagName("input");
        for (var j = 0, k = i.length; k > j; j++)
            "hidden" == i[j].type && i[j].getAttribute("atag") + "" && h.push(i[j]);
        for (var j = 0, k = h.length; k > j; j++) {
            var l = h[j];
            if (!c && l.id && f.items[l.id] && $id(f.items[l.id].showid))
                f.items[l.id].update(l);
            else {
                var m = d(l);
                f.items[m.id] = m
            }
        }
        g || (g = function(a) {
            var c = null
              , d = $getTarget(a);
            if ("input" == d.tagName.toLowerCase() && !d.disabled && ("text" == d.type || "checkbox" == d.type)) {
                var g = f.items[d.id.replace(/^slt_/, "")];
                if (g) {
                    if ($id(g.tbid))
                        return;
                    var h = 0
                      , i = 0;
                    $isBrowser("ie") ? (h = $getX(g.showDom),
                    i = $getYP(g.showDom) + 20) : (h = $getX(g.showDom),
                    i = $getYP(g.showDom) + 20);
                    var j = $float({
                        html: "<div class='brand_select_search'><div style='display:" + (g.optionAr.length > 15 ? "" : "none") + ";' class='ipt_search'><input type='text' style='width:" + (g.maxLength - 2) + "em;color:#999;' id='" + g.shid + "' value='输入名称或拼音首字母' title='输入名称或拼音首字母' maxLength='" + (g.maxLength - 2) + "' /></div><div class='brand_list' style='width:" + (g.maxLength + 2) + "em;overflow-y:" + (g.optionAr.length > 15 ? "scroll" : "hidden") + ";overflow-x:hidden;background-color:#fff'><ul id ='" + g.tbid + "' class='pseudoOption'" + (g.optionAr.length > 15 ? "" : "style='margin-top:0px'") + "></ul></div></div>",
                        left: h,
                        top: i,
                        width: 0,
                        style: "none",
                        cover: !1,
                        onInit: function() {
                            e($id(g.tbid), g.query("")),
                            $id(g.shid).onfocus = function() {
                                this.value == this.title && (this.value = "",
                                this.style.color = "#000")
                            }
                            ;
                            var a = ""
                              , d = null ;
                            return $id(g.shid).onkeyup = function(b) {
                                $stopBubble(b);
                                var f = ~~$getKeyCode(b)
                                  , h = $getTarget(b);
                                return 13 == f || 38 == f || 40 == f ? (g.showDom.focus(),
                                l(b),
                                !1) : (a != this.value && (clearTimeout(d),
                                d = setTimeout(function() {
                                    $id(g.tbid) && (e($id(g.tbid), g.query(h.value)),
                                    $id(g.tbid).parentNode.scrollTop = "0px",
                                    c = null )
                                }, 500)),
                                void 0)
                            }
                            ,
                            b($id(g.tbid), "mouseover", function(a) {
                                var b = $getTarget(a, $id(g.tbid), "li");
                                b && "li" == b.tagName.toLowerCase() && b != c && (c && (c.className = ""),
                                b.className = "selected",
                                c = b)
                            }),
                            b($id(g.tbid), "dblclick", function(a) {
                                var b = $getTarget(a, $id(g.tbid), "li");
                                b && "li" == b.tagName.toLowerCase() && (b != c && (c && (c.className = ""),
                                b.className = "selected",
                                c = b),
                                g.lightChange(b.lastChild.innerHTML, b.firstChild.innerHTML))
                            }),
                            !0
                        },
                        onClose: function() {
                            return !0
                        }
                    })
                      , k = function(a) {
                        var b = $getTarget(a);
                        if (b.id != g.showDom.id && b.id != g.shid && "button" != b.tagName.toLowerCase()) {
                            var c = $getTarget(a, $id(g.tbid), "span");
                            c && "span" == c.tagName.toLowerCase() ? g.change(c.innerHTML, c.previousSibling.innerHTML) : g.change(),
                            j.close(),
                            $delEvent(document.body, "click", k)
                        }
                    }
                      , l = function(a) {
                        $stopBubble(a);
                        var b = ~~$getKeyCode(a);
                        if ($id(g.tbid) && (38 == b || 40 == b || 13 == b)) {
                            var d = c
                              , e = $id(g.tbid).childNodes;
                            switch (b) {
                            case 38:
                                d ? d.previousSibling ? $fireEvent(d.previousSibling, "dblclick") : $fireEvent(e[e.length - 1], "dblclick") : $fireEvent(e[e.length - 1], "dblclick");
                                break;
                            case 40:
                                d ? d.nextSibling ? $fireEvent(d.nextSibling, "dblclick") : $fireEvent(e[0], "dblclick") : $fireEvent(e[0], "dblclick");
                                break;
                            case 13:
                                d && (g.change(d.lastChild.innerHTML, d.firstChild.innerHTML),
                                j.close(),
                                $delEvent(document.body, "click", k))
                            }
                        }
                        return !1
                    };
                    b(document.body, "click", k),
                    g.showDom.onkeyup = function(a) {
                        return l(a),
                        !1
                    }
                    ,
                    g.showDom.focus()
                } else
                    g = f.items[d.id.replace(/^opList_|_\d+$|_all$/g, "")],
                    g && (d.id.indexOf("_all") < 0 ? g.checked(d) : g.checkAll(d))
            }
        }
        ,
        b(a, "click", g))
    }
}();
var imgReady = function() {
    var a = []
      , b = null
      , c = function() {
        for (var b = 0; b < a.length; b++)
            a[b].end ? a.splice(b--, 1) : a[b]();
        !a.length && d()
    }
      , d = function() {
        clearInterval(b),
        b = null
    };
    return function(d, e, f, g) {
        var h, i, j, k, l, m = new Image;
        return m.src = d,
        m.complete ? (e(m.width, m.height),
        f && f(m.width, m.height),
        void 0) : (i = m.width,
        j = m.height,
        h = function() {
            k = m.width,
            l = m.height,
            (k !== i || l !== j || k * l > 1024) && (e(k, l),
            h.end = !0)
        }
        ,
        h(),
        m.onerror = function() {
            g && g(),
            h.end = !0,
            m = m.onload = m.onerror = null
        }
        ,
        m.onload = function() {
            f && f(m.width, m.height),
            !h.end && h(),
            m = m.onload = m.onerror = null
        }
        ,
        h.end || (a.push(h),
        null === b && (b = setInterval(c, 40))),
        void 0)
    }
}()
  , $txTpl = function() {
    var a = {};
    return function(b, c, d, e, f) {
        function g(a) {
            var b = navigator.userAgent.toLowerCase()
              , c = document.getElementsByTagName("head")[0]
              , d = document.createElement("script");
            return b.indexOf("gecko") > -1 && -1 == b.indexOf("khtml") ? (window.eval.call(window, s),
            void 0) : (d.innerHTML = a,
            c.appendChild(d),
            c.removeChild(d),
            void 0)
        }
        var h, i = c, j = [], f = void 0 != f ? f : !0;
        if (f && a[b]) {
            for (var k = 0, l = a[b].propList, m = l.length; m > k; k++)
                j.push(i[l[k]]);
            h = a[b].parsefn
        } else {
            var n = []
              , o = function(a, b, c) {
                if (!b)
                    var b = "<%";
                if (!c)
                    var c = "%>";
                var d = -1 == a.indexOf(b) ? document.getElementById(a).innerHTML : a;
                return d.replace(/\\/g, "\\\\").replace(/[\r\t\n]/g, " ").split(b).join("	").replace(new RegExp("((^|" + c + ")[^	]*)'","g"), "$1\r").replace(new RegExp("	=(.*?)" + c,"g"), "';\n s+=$1;\n s+='").split("	").join("';\n").split(c).join("\n s+='").split("\r").join("\\'")
            }(b, d, e);
            for (var p in i)
                n.push(p),
                j.push(i[p]);
            h = new Function(n," var s='';\n s+='" + o + "';\n return s"),
            f && (a[b] = {
                parsefn: h,
                propList: n
            })
        }
        try {
            return h.apply(null , j)
        } catch (q) {
            var r = "txTpl" + (new Date).getTime()
              , s = "var " + r + "=" + h.toString();
            g(s),
            window[r].apply(null , j)
        }
    }
}();
!function() {
    var a = /[^\u4e00-\u9fa5\w-\/\.]/g
      , b = /(\d+#)?([^|:]+):([^|:]+)/g
      , c = {
        items: {
            headtr: "<tr>{#stockTH#}<th>商品统一码</th>			    <th><label><input type='checkbox' />价格</label></th>			    <th><label><input type='checkbox' />数量</label></th>			    <th>备注</th></tr>",
            cols: "{#stockCOL#}<col width='160'></col>			  <col width='85'></col>			  <col width='85'></col>			  <col width='160'></col>",
            bodytr: "<tr id='{#id#}' style='{#style#}'>{#stockTD#}				<td class='col1'><input type='text' dtype='string' value='{#value#}' width='140' maxlength='20' onblur='$stockTable.delegateEvent(this)' /></td>				<td class='col2'><input type='text' dtype='price' value='{#value#}' width='50' maxlength='10' onblur='$stockTable.delegateEvent(this)' /></td>				<td class='col3'><input type='text' dtype='number' value='{#value#}' width='50' maxlength='6' onblur='$stockTable.delegateEvent(this)' /></td>				<td class='col4'><input type='text' dtype='string' value='{#value#}' width='140' maxlength='20' onblur='$stockTable.delegateEvent(this)' /></td></tr>"
        },
        template: {
            table: "<table id='{#id#}'>{#colgroup#}{#thead#}{#tbody#}</table>",
            colgroup: "<colgroup>{#cols#}</colgroup>",
            thead: "<thead>{#headtr#}</thead>",
            tboby: "<tbody>{#bodytr#}</tbody>",
            col: "<col></col>",
            th: "<th>{#text#}</th>",
            td: "<td>{#value#}</td>"
        }
    };
    $stockTable = function(d) {
        function e() {
            var a = j.stockStr;
            if (!a)
                return "";
            var d = a.split(";");
            if (!(d.length > 0))
                return "";
            l = d[0].split("~")[0].replace(b, "$2").split("|");
            for (var e = 0, f = d.length; f > e; e++) {
                var g = d[e].split("~")
                  , h = {
                    id: g[0],
                    values: g[0].replace(b, "$3").split("|").concat(g[1].split(","))
                };
                m[m.length] = h
            }
            if (l.length && m.length && l.length + 4 == m[0].values.length) {
                for (var i = {}, k = c.items, n = c.template, o = {
                    stockTH: [],
                    stockCOL: [],
                    stockTD: []
                }, e = 0, f = l.length; f > e; e++)
                    o.stockTH.push(n.th.replace(/{#text#}/, l[e])),
                    o.stockCOL.push(n.col),
                    o.stockTD.push(n.td);
                for (var e in o)
                    o[e] = o[e].join("");
                i.headtr = k.headtr.replace(/{#stockTH#}/, o.stockTH),
                i.cols = k.cols.replace(/{#stockCOL#}/, o.stockCOL),
                i.bodytr = k.bodytr.replace(/{#stockTD#}/, o.stockTD),
                o = {
                    id: j.tableId,
                    colgroup: $formatStr(n.colgroup, i),
                    thead: $formatStr(n.thead, i),
                    tbody: []
                };
                for (var p = l.length + 2, e = 0, f = m.length; f > e; e++) {
                    var q = m[e].values
                      , r = 0;
                    o.tbody[o.tbody.length] = i.bodytr.replace(/{#value#}/g, function() {
                        return q[r++]
                    }).replace(/{#id#}/, j.idPrefix + m[e].id).replace(/{#style#}/, "0" == q[p] ? "background-color:" + j.tipsColor.zero : "")
                }
                return o.tbody = o.tbody.join(""),
                $formatStr(n.table, o)
            }
            return ""
        }
        function f() {
            return $id(j.tableId)
        }
        function g() {
            var a = f();
            a && ($addEvent(a, "click", function(b) {
                var c = $getTarget(b);
                if (c && "input" == c.tagName.toLowerCase() && "checkbox" == c.type && c.checked)
                    if (confirm("您确定把所选列全部设置一行中的内容吗？"))
                        for (var d = c.parentNode.parentNode.cellIndex, e = a.rows[1].cells[d].firstChild.value, f = a.rows, g = 2, h = f.length; h > g; g++)
                            f[g].cells[d].firstChild.value = e;
                    else
                        c.checked = !1
            }),
            $addEvent(a, "dblclick", function(a) {
                var b = $getTarget(a);
                b && "input" == b.tagName.toLowerCase() && "text" == b.type && h(b)
            }),
            window.clipboardData && $addEvent(a, "paste", function(a) {
                var b = $getTarget(a);
                if (b && "input" == b.tagName.toLowerCase() && "text" == b.type) {
                    var c = window.clipboardData.getData("text");
                    if (c && c.length && /(.*\n.*){2,}/.test(c)) {
                        c = c.replace(/^\n|\n$/, "").split("\r\n");
                        var d = 0
                          , e = b.parentNode.parentNode
                          , f = 0;
                        for (function() {
                            for (var a = e.getElementsByTagName("input"), c = 0, d = a.length; d > c; c++)
                                if (a[c] == b) {
                                    f = c;
                                    break
                                }
                        }(); e && c[d]; ) {
                            for (var g = e.getElementsByTagName("input"), h = c[d].split("	"), i = 0, j = g.length - f; j > i && h[i]; i++)
                                g[i + f].value = h[i];
                            e = e.nextSibling,
                            d++
                        }
                        return !1
                    }
                    return !0
                }
            }))
        }
        function h(b) {
            var c = b.getAttribute("dtype")
              , d = $strTrim(b.value);
            switch (c) {
            case "string":
                d = d.replace(a, "");
                break;
            case "price":
                isNaN(d) || !d ? d = "" : parseFloat(d, 10) >= 1e6 ? d = 1e6 : (d = parseInt(d, 10) == parseFloat(d, 10) ? parseInt(d, 10) : parseFloat(d, 10).toFixed(2),
                0 == parseFloat(d, 10) && (d = ""));
                break;
            case "number":
                d = isNaN(d) || !d ? "" : parseInt(d, 10)
            }
            d += "",
            b.value != d && (b.value = d)
        }
        function i() {
            var a = f();
            if (a) {
                for (var b = [], c = [], d = 0, e = m.length; e > d; d++) {
                    for (var g = $id(j.idPrefix + m[d].id), i = g.getElementsByTagName("input"), k = [], l = 0, n = i.length; n > l; l++)
                        h(i[l]),
                        k.push(i[l].value);
                    "" == i[1].value || "" == i[2].value ? (g.style.backgroundColor = j.tipsColor.blank,
                    c.push(d + 1)) : g.style.backgroundColor = "0" == i[2].value ? j.tipsColor.zero : "",
                    b.push(m[d].id + "~" + k.join(","))
                }
                return {
                    errCode: c.length ? "1" : "0",
                    errRow: c,
                    stockStr: b.join(";")
                }
            }
            return {
                errCode: "0",
                errRow: [],
                stockStr: j.stockStr
            }
        }
        var j = {
            areaId: "",
            tableId: "myStockTable",
            stockStr: "",
            idPrefix: "stockTR",
            tipsColor: {
                zero: "red",
                blank: "yellow"
            }
        };
        for (var k in d)
            j[k] = d[k];
        var l = []
          , m = [];
        return $id(j.areaId) ? ($id(j.areaId).innerHTML = $xss(e(), "none"),
        i(),
        g()) : (j.getHTML = e,
        j.bindEvent = g),
        j.getTableDom = f,
        j.getStockStr = i,
        j
    }
    ,
    $stockTable.delegateEvent = function(a) {
        $fireEvent(a, "dblclick")
    }
}();
