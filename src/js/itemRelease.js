function onSubmit() {
    for (var a = 0; l = PP.c2cPub.checkList.length, l > a; a++) 
    if (!PP.c2cPub.checkList[a]()) {
        switch (a) {
        case 8:
        	//运费方式暂时全是卖家包邮,页面代码已经注释，此处不需要
            document.getElementById("yunFeiMoney").focus(),
            window.parent.document.body.scrollTop = document.getElementById("yunFeiMoney").offsetTop
        }
        return ! 1
    }
    var b = $("#form1")[0];
    return validCheck(b) ? (postForm(), !1) : !1
}
//时间提示
function postForm() {
    function a() {
        var a = new Date,
        b = setInterval(function() {
            $id("upload_elapse_time") ? $id("upload_elapse_time").innerHTML = $xss(((new Date - a) / 1e3).toFixed(2), "none") : b && clearTimeout(b)
        },
        100)
    }
    var b = $("#form1")[0];
    $float({
        title: "发布商品",
        html: '<div style="text-align:center">请稍候，正在上传您的商品...<br/>商品图片处理大概需要2-5分钟。</div><div style="text-align:center">已使用时间<span id="upload_elapse_time">0</span>秒</div>',
        width: "300",
        height: "100",
        top: top.document.body.scrollTop + 100,
        left: (window.innerWidth || document.body.clientWidth) / 2 - 130,
        fix: !1,
        style: "",
        cover: !0
    }),
    a(),
    b.submit()
}
function validCheck(a) {
    var b = $simpleValidator();
    return b.Validate(a, 2) ? !0: !1
}
function flashChecker() {
    var a = 0,
    b = 0;
    if (document.all) try {
        var c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.9");
        c && (a = 1, VSwf = c.GetVariable("$version"), b = parseInt(VSwf.split(" ")[1].split(",")[0]))
    } catch(d) {
        a = 0
    } else if (navigator.plugins && navigator.plugins.length > 0) try {
        var c = navigator.plugins["Shockwave Flash"];
        if (c) {
            a = 1;
            for (var e = c.description.split(" "), f = 0; f < e.length; ++f) isNaN(parseInt(e[f])) || (b = parseInt(e[f]))
        }
    } catch(d) {
        a = 0
    }
    return {
        f: a,
        v: b
    }
}
function getPostStr(a) {
    for (var b = a.elements, c = {},
    d = 0, e = b.length; e > d; d++) b[d].name && ("radio" != b[d].type && "checkbox" != b[d].type || b[d].checked) && (c[b[d].name] = encodeURIComponent(b[d].value));
    return c
}
$namespace("PP.c2cPub"),
PP.c2cPub.g = {
    formatPrice: function(a, b, c) {
        if (b = parseFloat(b, 10), c = parseFloat(c, 10), a = $strTrim(a), "" === a) return "";
        var d = parseFloat(a, 10);
        return isNaN(d) ? "": b > d ? b.toFixed(2) : d > c ? c.toFixed(2) : d.toFixed(2)
    },
    formatCount: function(a, b, c) {
        if (b = parseInt(b, 10), c = parseInt(c, 10), a = $strTrim(a), "" === a) return "";
        var d = parseInt(a, 10);
        return isNaN(d) ? "": b > d ? b: d > c ? c: parseInt(d, 10)
    },
    isStockAble: function() {
        return $id("stockSwitch") && $id("stockSwitch").checked
    },
    formatAndGetLen: function(a) {
        if (!a) return 0;
        if (!a.value) return 0;
        a.value != $strTrimLeft(a.value) && (a.value = $strTrimLeft(a.value));
        var b = /[\'\\\"&><]/g;
        b.test(a.value) && (a.value = a.value.replace(/\\/g, "＼").replace(/\'/g, "’").replace(/\"/g, "＂").replace(/\&/g, "＆").replace(/\</g, "＜").replace(/\>/g, "＞"));
        var c = a.value.replace(/[^\x00-\xff]/g, "**").length;
        return c
    },
    alert: function(a) {
        var b = "温馨提示：\n";
        a && (a.join ? alert(b + a.join("\n")) : alert(b + a))
    },
    sellCodeReg: /[^\w\u4e00-\u9fa5-\/\.\*\&]/g
},
PP.c2cPub.checkList = [],
//页面初始化
PP.c2cPub.init = function() {
    this.priceTip.init(),
    this.commAttr.init(),
    this.title.init(),
    this.promote.init(),
    this.initForOtherFuncs(),
    this.stock.init(),
    this.picture.init(),
    this.price.init(),
    this.totalitem.init(),
    this.opnum.init(),
    this.sellcode.init(),
    this.postage.init(),
    this.editor.init(),
    this.address.init(),
    this.initUI(),
    this.ShopCategory.init(),
    this.pms.init()
},
PP.c2cPub.priceTip = {
    g: {
        tipHTML: "<img src='../../images/propublish/b.png' class='upload_tips_icon'/>提醒：本商品是促销活动商品，此处的价格为原价，不用于活动期间的展示和销售。修改原价可能影响商品的活动价格，请勿修改。<p>　　　如需修改商品的促销活动价，请前往活动管理页面。　<a href='http://help.paipai.com/content/help_1545.shtml?ptag=1001.1.8' target='_blank'>点击查看操作说明&gt;&gt;</a></p>"
    },
    init: function() {
        $id("hasActivityPrice") && "1" == $id("hasActivityPrice").value ? $id("dwPrice_bin_tip") && ($id("dwPrice_bin_tip").innerHTML = $xss(this.g.tipHTML, "none")) : this.g.tipHTML = ""
    }
},
PP.c2cPub.pms = {
    done: !1,
    init: function(a) {
        try {
            if (this.done || $id("classAttrDiv") && !a) return;
            var b = $parseUrl(window.location.href);
            if (b.params.dst_pos) {
                var c = {
                    stock: "stockArea",
                    detail: "sDesc",
                    title: "sTitle",
                    price: "dwPrice_bin"
                };
                if (c[b.params.dst_pos] && $id(c[b.params.dst_pos])) {
                    var d = $id(c[b.params.dst_pos]);
                    top.window.scrollTo(0, $getYP(d)),
                    d.select && d.select(),
                    this.done = !0
                }
            }
        } catch(e) {}
    }
},
//商品属性部分
PP.c2cPub.commAttr = {
    init: function() {
        this.g.inited || (this.g.inited = !0, $id("classAttrDiv") ? (this.initLogic(), PP.c2cPub.checkList.push(this.check)) : ($id("PClassAttr").value = "", $id("CustomAttr").value = ""))
    },
    g: {
        attr: null,
        inited: !1
    },
    initLogic: function() {
        var a = PP.c2cPub.commAttr;
        $(function() {
            a.g.attr = $classAttrNew({
                area: "classAttrDiv",
                var1: "PClassAttr",
                var2: "CustomAttr",
                spuID: "productid",
                isAdd: "" == $("#iUpdateType").val(),
                isSaleAttrShow: !1,
                classId: $("#dwLeafClassId").val(),
                showFunc: function(a) {
                    $pseudoSelecter(a)
                },
                onLoaded: function() {
                    PP.c2cPub.pms.init(!0)
                },
                onSaleChange: function(a) {
                    PP.c2cPub.stock.g.saleAttrs = a || [],
                    PP.c2cPub.stock.init()
                },
                onChange: function(a, b) {
                    1 == $("#classfullname:contains('手机')").length && "商品成色" == b.name && b.defaultVar && ("1" == b.defaultVar ? ($("input[name='cNewType'][value='1']").attr("checked", !0), 1 == dwMobileClass && 1 == bIsChengbaoL2Seller && 0 == bIsMobileSeller && $("input[type='checkbox'][name='cXiaobaoGenuine']").attr("checked", !0), $("input[name='cRepairType'][value='1']").attr("checked", !0), $("input[name='cRepairType'][type='radio']").attr("disabled", !0), 0 == $("input[name='cRepairType'][type='hidden']").length && $("input[name='cRepairType'][value='2']").after("<input type='hidden' name='cRepairType' value='1'/>")) : ($("input[name='cNewType'][value='2']").attr("checked", !0), 1 == dwMobileClass && 1 == bIsChengbaoL2Seller && 0 == bIsMobileSeller && $("input[type='checkbox'][name='cXiaobaoGenuine']").removeAttr("checked"), $("input[name='cRepairType'][type='radio']").attr("disabled", !1), 1 == $("input[name='cRepairType'][type='hidden']").length && $("input[name='cRepairType'][type='hidden']").remove()))
                }
            })
        })
    },
    check: function() {
        var a = PP.c2cPub.commAttr,
        b = a.g.attr.check();
        return 1 == b ? !0: (window.scrollTo(0, $getYP($id("classAttrTip"))), PP.c2cPub.g.alert(b), !1)
    }
},
// 限制买家购买数量
PP.c2cPub.opnum = {
    init: function() {
        $id("dwOpNum") && (this.initLogic(), PP.c2cPub.checkList.push(this.check))
    },
    g: {
        formatCount: PP.c2cPub.g.formatCount
    },
    initLogic: function() {
        var a = PP.c2cPub.opnum;
        $("#dwOpNum").blur(function() {
            var b = this.value;
            this.value = a.g.formatCount(b, 0, 1e9),
            "" == this.value && (this.value = "0")
        })
    },
    check: function() {
        var a = PP.c2cPub.opnum,
        b = $id("dwOpNum").value;
        return $id("dwOpNum").value = a.g.formatCount(b, 0, 1e9),
        "" == $id("dwOpNum").value && ($id("dwOpNum").value = "0"),
        !0
    }
},
//商家编码
PP.c2cPub.sellcode = {
    init: function() {
        $id("sDefStockId") && (this.initLogic(), PP.c2cPub.checkList.push(this.check))
    },
    g: {
        codeCheck: function() {
            if (PP.c2cPub.g.sellCodeReg.test(this.value) && (this.value = this.value.replace(PP.c2cPub.g.sellCodeReg, "")), $strLenGB(this.value) > PP.c2cPub.sellcode.g.maxLength) {
                var a = $strSubGB(this.value, 0, PP.c2cPub.sellcode.g.maxLength);
                this.value = $strLenGB(a) > PP.c2cPub.sellcode.g.maxLength ? a.substr(0, a.length - 1) : a
            }
        },
        maxLength: 20
    },
    initLogic: function() {
        var a = PP.c2cPub.sellcode;
        $("#sDefStockId").keyup(a.g.codeCheck).blur(a.g.codeCheck)
    },
    check: function() {
        $id("sDefStockId").value = $id("sDefStockId").value.replace(PP.c2cPub.g.sellCodeReg, "");
        var a = $id("sDefStockId").value;
        return $strLenGB(a) > PP.c2cPub.sellcode.g.maxLength ? (window.scrollTo(0, $getYP($id("sDefStockId"))), PP.c2cPub.g.alert("请正确填写商家编码"), !1) : !0
    }
},
//商品总数检验
PP.c2cPub.totalitem = {
    init: function() {
        $id("dwPrice_bin") && (this.initLogic(), this.initEdit(), PP.c2cPub.checkList.push(this.check))
    },
    g: {
        formatCount: PP.c2cPub.g.formatCount,
        isStockAble: PP.c2cPub.g.isStockAble
    },
    initLogic: function() {},
    initEdit: function() {
        var a = PP.c2cPub.totalitem;
        if (a.g.isStockAble()) {
            $("#dwNum").attr("readonly", "readonly").addClass("readonly");
            var b = 1,
            c = PP.c2cPub.stock;
            isNaN(parseInt(c.g.numStock, 10)) || (b = parseInt(c.g.numStock, 10)),
            $("#dwNum").val(b),
            $id("stockNumInfo").style.display = "",
            $id("dwNum_error").style.display = "none",
            $("#dwNum").blur($empty())
        } else $("#dwNum").removeAttr("readonly").removeClass("readonly"),
        $id("stockNumInfo").style.display = "",
        $("#dwNum").blur(a.selfCheck)
    },
    selfCheck: function() {
        var a = PP.c2cPub.totalitem,
        b = "";
        if (!a.g.isStockAble()) {
            var c = $("#dwNum").val();
            return $("#dwNum").val(a.g.formatCount(c, 0, 1e9)),
            ("" == $("#dwNum").val() || 0 == parseFloat($("#dwNum").val(), 10)) && (b = "请正确输入商品总数，[商品总数] 必须是1~1000000000之间的整数。"),
            b ? $("#dwNum_error").html(b)[0].style.display = "": $id("dwNum_error").style.display = "none",
            b
        }
    },
    check: function() {
        var a = PP.c2cPub.totalitem,
        b = a.selfCheck();
        return b ? (window.scrollTo(0, $getYP($id("dwNum"))), PP.c2cPub.g.alert("请正确填写商品总数"), !1) : !0
    }
},
//价格部分
PP.c2cPub.price = {
    init: function() {
        $id("dwPrice_bin") && (this.initLogic(), this.initEdit(), PP.c2cPub.checkList.push(this.check))
    },
    g: {
        formatPrice: PP.c2cPub.g.formatPrice,
        isStockAble: PP.c2cPub.g.isStockAble
    },
    initLogic: function() {
        var a = PP.c2cPub.price;
        $("#dwPrice_bin").blur(function() {
            a.selfCheck()
        })
    },
    initEdit: function() {
        var a = PP.c2cPub.price;
        if (a.g.isStockAble()) {
            $("#commPriceShowAreaInfo,#commPriceEditArea,#dwPrice_bin_error,#dwPrice_bin_tip").each(function() {
                this.style.display = "none"
            });
            var b = "0.00",
            c = "0.01",
            d = PP.c2cPub.stock;
            b = d.g.minPrice == d.g.maxPrice ? d.g.minPrice.toFixed(2) : d.g.minPrice.toFixed(2) + "-" + d.g.maxPrice.toFixed(2),
            c = d.g.minPrice.toFixed(2),
            $("#commPriceShowArea").html(b + "元")[0].style.display = "",
            $("#dwPrice_bin").val(c)
        } else $("#commPriceShowAreaInfo,#commPriceEditArea").each(function() {
            this.style.display = ""
        }),
        $id("commPriceShowArea").style.display = "none",
        $("#dwPrice_bin_tip").html().length && $("#dwPrice_bin_tip").show()
    },
    selfCheck: function() {//鼠标离开一口价文本框时触发,检查金额是否正确
        var a = PP.c2cPub.price,
        b = "";
        if (!a.g.isStockAble()) {
            var c = $("#dwPrice_bin").val();
            return $("#dwPrice_bin").val(a.g.formatPrice(c, 0, 5e6)),
            ("" == $("#dwPrice_bin").val() || 0 == parseFloat($("#dwPrice_bin").val(), 10)) && (b = "请正确输入价格，[一口价] 价格必须是0.01～5000000之间的数字。"),
            b ? $("#dwPrice_bin_error").html(b)[0].style.display = "": $id("dwPrice_bin_error").style.display = "none",
            b
        }
    },
    check: function() {
        var a = PP.c2cPub.price,
        b = a.selfCheck();
        return b ? (window.scrollTo(0, $getYP($id("dwPrice_bin"))), PP.c2cPub.g.alert("请正确填写一口价"), !1) : !0
    }
},
//商品名称检查
PP.c2cPub.title = {
    init: function() {
        this.initLogic(),
        this.initEdit(),
        PP.c2cPub.checkList.push(this.check)
    },
    g: {
        title: $("#sTitle"),
        errorTip: $("#sTitle_error"),
        minLength: 3,
        maxLength: 60,
        errorMinText: "商品名称最少{#MinLength#}个字符，您还<font style='font-weight:bold; color:#FF0000'>必须</font>输入<font style='font-weight:bold; color:#FF0000'>{#NeedNum#}</font>个字符",
        errorMaxText: "商品名称最多{#MaxLength#}个字符，您还<font style='font-weight:bold; color:#FF0000'>需要</font>删除<font style='font-weight:bold; color:#FF0000'>{#OverNum#}</font>个字符",
        confirmText: "您输入的商品名称含有 \\ ' \" 等字符，系统已经对这些字符进行转换，\n转换后的商品名称太长，点击确定后将会自动校正(从尾部删除多余部分)。",
        formatAndGetLen: PP.c2cPub.g.formatAndGetLen,
        controlLength: function() {
            if (this && this.value && $strLenGB(this.value) > PP.c2cPub.title.g.maxLength) {
                var a = $strSubGB(this.value, 0, PP.c2cPub.title.g.maxLength);
                this.value = $strLenGB(a) > PP.c2cPub.title.g.maxLength ? a.substr(0, a.length - 1) : a
            }
        }
    },
    initLogic: function() {
        var a = PP.c2cPub.title;
        $("#sTitle").blur(function() {
            a.selfCheck()
        }).keyup(a.g.controlLength)
    },
    initEdit: function() {},
    selfCheck: function() {
        var a = PP.c2cPub.title,
        b = a.g.formatAndGetLen(a.g.title[0]),
        c = "";
        return b < a.g.minLength ? c = a.g.errorMinText.replace(/{#MinLength#}/g, a.g.minLength).replace(/{#NeedNum#}/g, a.g.minLength - b) : b > a.g.maxLength && (confirm(a.g.confirmText) ? (a.g.title.val($strSubGB(a.g.title.val(), 0, a.g.maxLength - 1)), c = "") : c = a.g.errorMaxText.replace(/{#MaxLength#}/g, a.g.maxLength).replace(/{#OverNum#}/g, b - a.g.maxLength)),
        c ? (a.g.errorTip.html(c), a.g.errorTip.fadeIn("fast")) : a.g.errorTip.fadeOut("fast"),
        c
    },
    check: function() {
        var a = PP.c2cPub.title.selfCheck();
        return a ? (window.scrollTo(0, $getYP($id("sTitle"))), PP.c2cPub.g.alert("请正确填写商品名称"), !1) : !0
    }
},
//促销信息
PP.c2cPub.promote = {
    init: function() {
        $id("sPromote") && (this.initLogic(), PP.c2cPub.checkList.push(this.check))
    },
    g: {
        maxLength: 60,
        formatAndGetLen: PP.c2cPub.g.formatAndGetLen,
        controlLength: function() {
            this && this.value && $strLenGB(this.value) > PP.c2cPub.promote.g.maxLength && (this.value = $strSubGB(this.value, 0, PP.c2cPub.promote.g.maxLength - 1))
        }
    },
    initLogic: function() {
        var a = PP.c2cPub.promote;
        $("#sPromote").blur(a.g.controlLength).keyup(a.g.controlLength)
    },
    check: function() {
        var a = PP.c2cPub.promote,
        b = a.g.formatAndGetLen($id("sPromote"));
        return b > a.g.maxLength ? (window.scrollTo(0, $getYP($id("sPromote"))), PP.c2cPub.g.alert("请正确填写商品促销信息，最多可输入30个汉字。"), !1) : !0
    }
},
//库存配置
PP.c2cPub.stock = {
    init: function() {
        $id("haveStock") && "1" == $id("haveStock").value && !$id("dwPrice_auc") && ($("#stockShowFrame_1").show(), this.initLogic(), this.initEdit(), PP.c2cPub.checkList.push(this.check))
    },
    g: {
        saleAttrs: [],
        stock: null,
        stockList: null,
        minPrice: 0,
        maxPrice: 0,
        numStock: 0,
        saleAttrDom: $id("SClassAttr"),
        stockSwitcher: $id("stockSwitch"),
        stockArea: $id("divStockArea"),
        stockSwitchStateDom: $id("stockSwitchState"),
        stockJsonDom: $id("stockJsonStr"),
        stockAttrImgDom: $id("stockAttrImgstr")
    },
    initLogic: function() {
        function a(a) {
            $display(b.stockArea);
            var c = $id("PClassAttr").value.replace("version=1,", "").replace("^", "");
            a ? b.stock = $stockManageNew({
                dom: b.stockArea,
                saleAttrs: b.saleAttrs,
                stockList: b.stockList,
                middleTip: PP.c2cPub.priceTip.g.tipHTML,
                stockImgStr: b.stockAttrImgDom.value,
                saleAttrStr: c,
                onChange: function() {
                    this.getMinPrice && (b.minPrice = this.getMinPrice(), b.maxPrice = this.getMaxPrice(), b.numStock = this.getTotalNum(), PP.c2cPub.price.initEdit(), PP.c2cPub.totalitem.initEdit())
                }
            }) : (b.stock && (c = b.stock.getSaleAttrStr() || c, b.stockList = b.stock.getStockList()), b.stock = $stockManageNew({
                dom: b.stockArea,
                saleAttrs: b.saleAttrs,
                stockList: null,
                isAttrMode: !0,
                saleAttrStr: c
            }), b.minPrice = 0, b.maxPrice = 0, b.numStock = 0, PP.c2cPub.price.initEdit(), PP.c2cPub.totalitem.initEdit())
        }
        var b = this.g;
        if (window.vecStockList) {
            b.stockList = [];
            for (var c = 0; c < vecStockList.stockJsonStr.length; c++) {
                var d = {};
                $extend(d, vecStockList.stockJsonStr[c]),
                d.price = .01 * d.price + "",
                d.num = 1 * d.num + "",
                b.stockList.push(d)
            }
        }
        b.stockSwitcher.onclick = function() {
            b.stockSwitchStateDom && (b.stockSwitchStateDom.value = this.checked ? "1": "0"),
            a(this.checked)
        },
        b.stockSwitchStateDom && (b.stockSwitcher.checked = "1" == b.stockSwitchStateDom.value, b.stockArea.innerHTML = $xss('<p align="center"><img src="'+basePath+'/resources/images/common/loading2.gif" /><br />数据加载中……</p>', "none"), a("1" == b.stockSwitchStateDom.value))
    },
    initEdit: function() {},
    check: function() {
        var that = PP.c2cPub.stock.g;
        if (that.stock) {
        	//删除sku
        	var arr=that.stock.getStockList();
        	for(var int=0;int<removeSku.length;int++){
        		for(var int1=0;int1<arr.length;int1++){
        			if(removeSku[int]==arr[int1].saleAttr){
        				arr.splice(int1, 1);
        				break;
        			}
            	}
        	}
            var ret = that.stock.check();
            if (ret.err) return window.scrollTo(0, $getYP(that.stockSwitcher)),
            PP.c2cPub.g.alert(ret.errMsg),
            !1;
            if (that.stockSwitcher.checked) {
                for (var stockList = that.stock.getStockList(), i = 0; i < stockList.length; i++) stockList[i].price = parseInt(100 * stockList[i].price, 10) + "";
                that.stockSwitchStateDom.value = "1",
                eval("that.stockJsonDom.value='" + JSON.stringify(stockList) + "';"),
                that.stockAttrImgDom.value = that.stock.getStockPicStr()
            } else that.stockSwitchStateDom.value = "0";
            return that.saleAttrDom.value = that.stock.getSaleAttrStr(),
            !0
        }
        return ! 0
    }
},
PP.c2cPub.editor = {
    init: function() {
        this.initEditer(),
        PP.c2cPub.checkList.push(this.check)
    },
    g: {
        preHtml: "",
        editor: null,
        isIgnoreOver: !1
    },
    initEditer: function() {
        var a = PP.c2cPub.editor;
        KindEditor.ready(function(b) {
            a.g.editor = b.create("#sImage", {
                resizeMode: 0,
                useContextmenu: !0,
                items: ["source", "|", "image"],
                pasteType: 0,
                onpaste: function() {
                    a.g.editor.designMode && alert("如需要粘贴html代码，请先切换到html模式")
                },
                afterBlur: function() {
                    a.g.editor && a.g.editor.designMode && a.checkImage()
                }
            }),
            a.g.editor.clickToolbar("source", 
            function() {
                a.g.editor.designMode && a.checkImage()
            })
        })
    },
    checkImage: function(a) {
        var b = PP.c2cPub.editor;
        if (b.g.editor && (a = a || b.g.editor.html(), a && b.g.preHtml != a)) {
            b.g.preHtml = a,
            a = $("<div>" + a + "</div>"),
            a.css({
                position: "absolute",
                visibility: "hidden",
                top: 0,
                left: "-1000px"
            }),
            $("body").append(a),
            b.g.editor.html(""),
            a.find("a").remove();
            var c = a.find("img"),
            d = !0,
            e = 0;
            $.each(c, 
            function(a, f) {
                var g = f.getAttribute("data-ks-lazyload") || f.src; - 1 == g.indexOf("taobao") && imgReady(g, 
                function() {},
                function(a, f) {
                    e++,
                    (320 > a || 300 > f) && (d = !1),
                    e == c.length && (d ? $("#sImage_error").hide() : $("#sImage_error").html("商品大图含有不符合规则的图片").show()),
                    b.g.editor.exec("insertimage", g, "", a.toString(), f.toString(), 0, "center")
                })
            }),
            a.remove()
        }
    },
    getImgUrl: function() {
        var a,
        b = PP.c2cPub.editor,
        c = b.g.editor.text();
        a = c.match(/(http:\/\/.*?(?=\"))/g),
        a && a.length > 30 && (alert("您上传的商品图超过30张，已自动截断"), a = a.slice(0, 30)),
        $("#imageList").val(a ? a.join("|") : "")
    },
    check: function() {
        var a = PP.c2cPub.editor,
        b = $("#sDesc");
        return a.g.editor.designMode ? "" == $strTrim(b.val()) || b.val().length < 10 ? (window.scrollTo(0, $getYP($id("sDesc"))), PP.c2cPub.g.alert("商品描述不能少于10个字符。"), !1) : 0 == a.g.isIgnoreOver && $strLenGB(b.val()) > 5e4 ? (PP.c2cPub.g.alert("您的商品详情描述内容已超出50000字节限制，请修改后提交"), window.scrollTo(0, $getYP($id("sDesc"))), !1) : (a.getImgUrl(), !0) : (window.scrollTo(0, $getYP($id("sDesc"))), a.g.editor.clickToolbar("source"), PP.c2cPub.g.alert("已将代码转为可视模式，请检查确认显示效果，然后再点击“提交”。"), !1)
    }
},
PP.c2cPub.address = {
    init: function() {
        $id("adrsProv") && (this.initLogic(), PP.c2cPub.checkList.push(this.check))
    },
    initLogic: function() {
        var a = PP.c2cPub.address,
        b = $strTrim($("#sCommodityCity").val()) || $strTrim($("#sSellerCity").val());
        $("#adrsProv").length && $("#adrsCity").length && $fillAddress({
            province: "adrsProv",
            city: "adrsCity",
            provId: "0",
            initValue: b
        }),
        $("#adrsProv,#adrsCity").change(function() {
            "" == this.value ? a.showError(!0) : a.showError(!1)
        })
    },
    showError: function(a) {
        a ? $("#addressError").html("请选择商品所在地").show() : $("#addressError").hide()
    },
    check: function() {
        var a = PP.c2cPub.address;
        return $id("adrsCity").value ? !0: (PP.c2cPub.g.alert("请选择商品所在地"), window.scrollTo(0, $getYP($id("adrsProv"))), a.showError(!0), !1)
    }
},
PP.c2cPub.postage = {
    init: function() {
        $id("cTransportType2") && (this.initTemplate(), this.initLogic(), this.initEdit(), PP.c2cPub.checkList.push(this.check))
    },
    g: {
        tipText: "请选择至少一种运送方式填写，输入费用必须是0.01~10000之间的数字。<br/>其它若不填写，则默认不支持该运送方式。",
        errorText: "请选择至少一种运送方式填写，输入费用必须是0.01~10000之间的数字。",
        retCodeForPostage: {
            d: null,
            init: function() {},
            report: function(a, b) {
                try {
                    this.d && this.d.report(a, b)
                } catch(c) {}
            }
        },
        feeTextBox: $("#yunFeiMoney"),
        formatPrice: PP.c2cPub.g.formatPrice,
        setMainPriceDis: function(a) {
            this.feeTextBox.attr("disabled", a)
        },
        setMailPrice: function(a) {
            this.feeTextBox.attr("readonly", a),
            "readonly" == a && this.feeTextBox.val("")
        },
        setFeeTemplate: function(a) {
            $("#YunFeiMoban1,#YunFeiMoban2").attr("disabled", a)
        },
        /*getFeeFromCookie: function() {
            var a = $getCookie("dwTransportFee"),
            b = ["", "", ""];
            a && 3 == a.split("|").length && (b = a.split("|")),
            "" == $id("normalPrice").value  && ($id("normalPrice").value = b[0])
        },*/
        setFeeIntoCookie: function() {
            $setCookie("dwTransportFee", [$id("yunFeiMoney").value].join("|"), 10080)
        }
    },
    initTemplate: function() {
        var a = PP.c2cPub.postage;
        window.SFTemplateCallBack = function(b) {
            if ("0" == b.errCode) if (0 == b.sflist.length) $("#noSFTemplate").show(),
            $("#haveSFTemplate").hide(),
            $("#YunFeiMoban1").attr("checked", !1).attr("disabled", "disabled"),
            $("#YunFeiMoban2").attr("checked", "checked");
            else {
                $("#noSFTemplate").hide(),
                $("#YunFeiMoban1").attr("disabled", !1),
                $("#oldSFTemplateId").val() >= 10 ? ($("#YunFeiMoban1").attr("checked", "checked"), $("#YunFeiMoban2").attr("checked", !1), $id("transporttemplateid").disabled = !1, a.g.setMailPrice("readonly")) : ($("#YunFeiMoban1").attr("checked", !1), $("#YunFeiMoban2").attr("checked", "checked"), $id("transporttemplateid").disabled = !0, a.g.setMailPrice(!1));
                var c = b.sflist;
                if ($id("transporttemplateid")) {
                    $id("transporttemplateid").options.length = 0;
                    for (var d = 0, e = c.length; e > d; d++) $addSelect($id("transporttemplateid"), c[d].split("^")[0], c[d].split("^")[1]);
                    "" != $("#oldSFTemplateId").val() && $("#transporttemplateid").val($("#oldSFTemplateId").val()),
                    $("#haveSFTemplate").show()
                }
            }
        },
        $loadScript(window.basePath + "/item/sfList.xhtml?sfType=0&sellerUin=" + $("#dwSellerUin").val() + "&callback=SFTemplateCallBack&t=" + (new Date).getTime()),
        $("#refreshSFTtemplate").click(function() {
            $("#oldSFTemplateId").val(0),
            $loadScript(window.basePath + "/item/sfList.xhtml?sfType=0&sellerUin=" + $("#dwSellerUin").val() + "&callback=SFTemplateCallBack&t=" + (new Date).getTime())
        }),
        $("#refreshSFT").click(function() {
            $("#oldSFTemplateId").val(0),
            $loadScript(window.basePath + "/item/sfList.xhtml?sfType=0&sellerUin=" + $("#dwSellerUin").val() + "&callback=SFTemplateCallBack&t=" + (new Date).getTime())
        })
    },
    initLogic: function() {
        var a = PP.c2cPub.postage;
        $("#cTransportType1").click(function() {
            $("#TransportTypeBuyerDiv").hide("fast")
        }),
        $("#cTransportType2").click(function() {
            $("#TransportTypeBuyerDiv").show("fast")
        }),
        $("#YunFeiMoban1").click(function() {
        	$("#yunFeiMoney").val("");
        	$("#yunFeiMoney").attr("readonly", "readonly").addClass("readonly");
            a.g.setMailPrice("readonly"),
            a.g.setMainPriceDis(!0),
            $id("transporttemplateid").disabled = "",
            $("#YunFeiMoban_error").fadeOut("fast")
        }),
        $("#YunFeiMoban2").click(function() {
        	$("#yunFeiMoney").removeClass("readonly");
            a.g.setMainPriceDis(!1),
            $id("transporttemplateid").disabled || (a.g.setMailPrice(!1), a.g.getFeeFromCookie(), $id("transporttemplateid").disabled = "disabled")
        }),
        a.g.feeTextBox.blur(function() {
            a.selfCheck()
        }).click(function() {
            $("#YunFeiMoban2").click()
        })
    },
    initEdit: function() {
        "1" == $("#cTransportType1").attr("radiovar") ? $("#cTransportType1").click() : $("#cTransportType2").click(),
        "1" == $("#YunFeiMoban1").attr("radiovar") ? $("#YunFeiMoban1").click() : $("#YunFeiMoban2").click()
    },
    selfCheck: function() {
        var a = PP.c2cPub.postage,
        b = $("#YunFeiMoban_error");
        if ($id("cTransportType1").checked || $id("YunFeiMoban1").checked || !b) return "";
        var c = !0,
        d = !1;
        return a.g.feeTextBox.each(function() {
            this.value = a.g.formatPrice(this.value, 0, 1e4),
            this.value && (c = !1, 0 == parseFloat(this.value, 10) && (d = !0))
        }),
        c || d ? (b.html(a.g.tipText), b.fadeIn("fast"), a.g.errorText) : (b.fadeOut("fast"), a.g.setFeeIntoCookie(), "")
    },
    check: function() {
        var a = PP.c2cPub.postage.selfCheck();
        return a ? (window.scrollTo(0, $getYP($id("cTransportType2"))), PP.c2cPub.g.alert(a), !1) : ($("input[name='cSendType']").attr("value", 0), !0)
    }
},
PP.c2cPub.picture = {
    init: function() {
        this.initLogic(),
        this.initLocalSection(),
        PP.c2cPub.checkList.push(this.check)
    },
    g: {
        url: "",
        path: {
            id: [""],
            name: ["我的拍拍相册"]
        },
        data: [],
        index: 1,
        size: 12,
        uploadDom: null,
        spuPic: [],
        spuPage: {
            index: 1,
            size: 12,
            getSection: function() {
                var a = (this.index - 1) * this.size,
                b = this.index * this.size;
                return {
                    start: a,
                    end: b
                }
            }
        },
        maxPicSize: 1013760,
        allowPicType: "1|2",
        retCodeForAlbum: {
            d: null,
            init: function() {},
            report: function(a, b) {
                try {
                    this.d && this.d.report(a, b)
                } catch(c) {}
            }
        },
        dirHTML: "<li class='folder'><a href='javascript:;' ondblclick='PP.c2cPub.picture.goDir(\"{#id#}\",\"{#name#}\")' class='pic_size'><img src='http://o2o.gtimg.com/offline/victor/images/upload/item_upload_pic_folder.png' /></a><p class='pic_title'><a href='javascript:;' onclick='PP.c2cPub.picture.goDir(\"{#id#}\",\"{#name#}\")'>{#name#}</a></p></li>",
        fileHTML: '<li><a href=\'javascript:;\' onclick=\'PP.c2cPub.picture.selectPic("{#url#}","{#realurl#}","{#size#}","{#type#}")\' class=\'pic_size\'><img src=\'{#url#}\' /></a><p class=\'pic_title\'><a href=\'javascript:;\' onclick=\'PP.c2cPub.picture.selectPic("{#url#}","{#realurl#}","{#size#}","{#type#}")\'>{#name#}</a></p></li>',
        errorHTML: "<li class='pic_loading_fail'><h4>相册中没有图片或者图片加载失败</h4><p><a href='javascript:;' onclick='PP.c2cPub.picture.initWebSection()'>重新加载</a>　<a href='javascript:;' onclick='PP.c2cPub.picture.jumpDir(0)'>返回所有相册</a></p></li>",
        imgHTML: "<li><a class='pic_size' href='javascript:;' onclick='PP.c2cPub.picture.selectPic(\"{#url#}\",\"{#realurl#}\",\"{#size#}\",\"{#type#}\")'><img src='{#url#}'></a></li>",
        spuNoneHTML: "<li class='pic_loading_fail'><p>当前型号的商品未提供产品库图片　<a href='http://support.qq.com/write.shtml?fid=495' target='_blank'>反馈意见&gt;&gt;</a></p></li>",
        imgNoPic: baseUrl+"/resources/images/propublish/item_upload_pic_nopic.png",
        imgPreview: "http://o2o.gtimg.com/offline/victor/images/upload/item_upload_pic_preview.png",
        imgPseudo: "http://o2o.gtimg.com/offline/victor/images/upload/item_upload_pic_pseudo.png",
        imgLoading: baseUrl+"/resources/images/common/loading2.gif",
        imgUploadBtn: baseUrl+"/resources/images/propublish/item_upload_flash_btn_xp.png",
        subStrGB: function(a, b) {
            return $strLenGB(a) > b ? $strSubGB(a, 0, b - 2) + "…": a
        },
        makeUploader: function(option) {
            var self = PP.c2cPub.picture,
            targetImgs = [],
            retCodeForUpload = {
                d: null,
                init: function() {},
                report: function(a, b) {
                    this.d && this.d.report(a, b)
                }
            },
            opt = {
                upload_url: window.basePath + "/upload/itemImgUpload.json",
                file_post_name: "strTempFile",
                post_params: {
                    dwUin: $getUin(),
                    strSkey: $getCookie("skey")
                },
                file_size_limit: "2048KB",//限制图片上传大小
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
                        alert("图片文件" + a.name + "大小为" + ~~ (a.size / 1024) + "kb,超过了990kb的大小限制");
                        break;
                    case window.SWFUpload.QUEUE_ERROR.INVALID_FILETYPE:
                        alert("图片文件" + a.name + "类型无效");
                        break;
                    case window.SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED:
                        alert("上传的文件过多，最多可以上传5张图片");
                        break;
                    default:
                        alert("文件检测时发生错误,错误代码:'" + b + "',错误信息:'" + c + "'")
                    }
                },
                //上传前检查
                file_dialog_complete_handler: function(a, b) {
                    if (b > 0) {
                        for (var c = self.g.currentDom.parentNode, d = c.previousSibling.id.replace("fileview", ""), e = d; 5 >= e && b > 0; e++) if ($id("fileview" + e)) {
                            var f = $id("fileview" + e).getElementsByTagName("img");
                            if (f.length) {
                                var g = f[0]; (e == d || g.src == PP.c2cPub.picture.g.imgNoPic) && (g.src = PP.c2cPub.picture.g.imgLoading, g.className = "loading", g.parentNode.nextSibling.className = "btn_upload_disable", targetImgs.push(g), b--)
                            }
                        }
                        retCodeForUpload.init(),
                        this.setButtonDisabled(!0),
                        this.startUpload()
                    }
                },
                upload_progress_handler: function(a, b) {
                    {
                        Math.ceil(100 * (b / a.size))
                    }
                },
                upload_error_handler: function(a, b) {
                    retCodeForUpload.report(!1, b),
                    b === window.SWFUpload.UPLOAD_ERROR.UPLOAD_LIMIT_EXCEEDED ? alert("图片文件超过了2048kb的大小限制") : alert("上传图片发生错误");
                    var c = targetImgs.shift();
                    c.src = c.getAttribute("defaultsrc"),
                    c.className = "preview_img",
                    c.parentNode.nextSibling.className = "btn_upload",
                    self.g.currentDom.parentNode == c.parentNode.nextSibling && this.setButtonDisabled(!1)
                },
                upload_success_handler: function(file, serverData) {
                    var _this = this,
                    d = eval("(" + serverData + ")");
                    retCodeForUpload.report(0 == d.RetCode ? !0: !1, d.RetCode);
                    var img = targetImgs.shift();
                    0 == d.RetCode ? setTimeout(function() {
                        img.src = d.RetUrl,
                        //返回图片的路径
                        img.setAttribute("realurl", d.RetUrl),
                        //图片对应数据库的ID
                        img.setAttribute("imagId", d.imagId),
                        img.onload = function() {
                            this.className = "preview_img",
                            this.onload = null,
                            this.parentNode.nextSibling.className = "btn_upload",
                            self.g.currentDom.parentNode == this.parentNode.nextSibling && _this.setButtonDisabled(!1)
                        }
                    },
                    1e3) : (img.src = img.getAttribute("defaultsrc"), img.className = "preview_img", img.parentNode.nextSibling.className = "btn_upload", self.g.currentDom.parentNode == img.parentNode.nextSibling && this.setButtonDisabled(!1), 1 == d.RetCode ? alert("图片太大或者不合法") : 2 == d.RetCode ? alert("未登录,请重新登录") : alert("上传失败"))
                },
                upload_complete_handler: function() {
                    if (this.getStats().files_queued > 0) if (targetImgs.length > 0) retCodeForUpload.init(),
                    this.startUpload();
                    else for (; this.getStats().files_queued > 0;) this.cancelUpload(null, !1)
                },
                button_image_url: PP.c2cPub.picture.g.imgUploadBtn,
                button_width: 76,
                button_height: 22,
                button_text_top_padding: 2,
                button_text_left_padding: 10,
                button_placeholder_id: option.placeholder,
                button_cursor: -2,
                button_text: "上传图片",
                flash_url: window.basePath + "/resources/js/propublish/swfupload.swf"
            };
            $SWFUpload(opt)
        }
    },
    initLogic: function() {
        var a = PP.c2cPub.picture;
        $("#sectionHandle li").click(function() {
            var b = !0;
            if ($("#fileViewList .preview_pic img").each(function() {
                return this.src == a.g.imgLoading ? (b = !1, !1) : void 0
            }), !b) return alert("请等待图片上传完成后，再进行切换"),
            !1;
            this.className = "current";
            for (var c = $id("sectionHandle").firstChild; c;) c != this && (c.className = ""),
            c = c && c.nextSibling;
            var d = $(this).attr("section");
            "localSection" == d ? ($id("localSection").style.display = "", $id("webSection").style.display = "none", $id("spuSection").style.display = "none", $("#fileViewList li>p,#fileViewList + object").show()) : "webSection" == d ? ($id("localSection").style.display = "none", $id("webSection").style.display = "", $id("spuSection").style.display = "none", $("#fileViewList li>p,#fileViewList + object").hide()) : ($id("localSection").style.display = "none", $id("webSection").style.display = "none", $id("spuSection").style.display = "", $("#fileViewList li>p,#fileViewList + object").hide())
        }).css("cursor", "pointer"),
        $("#fileControl").mouseover(function() {
            return this.style.display = "",
            !1
        }).mouseout(function() {
            return ! 1
        }),
        $("#fileViewList div").mouseover(function() {
            var b = this,
            c = parseInt(b.id.replace("fileview", ""), 10),//当前图片的index
            d = this.getElementsByTagName("img")[0];//当前的img标签对象
            d.src != a.g.imgNoPic && d.src != a.g.imgLoading && (this.appendChild($id("fileControl")), 
            $id("fileControl").style.display = "", 
            $("#imgBtnClose").unbind("click").click(function() {
                d.src != a.g.imgNoPic && d.src != a.g.imgLoading && (d.src = a.g.imgNoPic, d.setAttribute("imagId",-1),$id("fileControl").style.display = "none")
            }), $("#imgBtnMLeft").unbind("click").click(function() {
                if (d.src != a.g.imgNoPic && d.src != a.g.imgLoading && c > 1 && 5 >= c) {
                    for (var b = null, e = c - 1; e >= 1; e--) {
                        var f = $id("fileview" + e).getElementsByTagName("img")[0];//前一个img标签对象
                        if (f.src != a.g.imgLoading) {
                            b = f;//前一个img对象
                            break
                        }
                    }
                    if (null != b) {
                        d.src = [b.src, b.src = d.src][0];//当前的位置的图，换成前一个位置的图
                        var g = d.getAttribute("realurl") || "";
                        var imagId = d.getAttribute("imagId");
                        var previousImageId=b.getAttribute("imagId");
                        //移除原来位置的ID
                        d.setAttribute("imagId",previousImageId);
                        d.setAttribute("realurl", b.getAttribute("realurl") || ""),
                        //设置新位置的ID
                        b.setAttribute("imagId", imagId),
                        b.setAttribute("realurl", g),
                        d.src == a.g.imgNoPic && ($id("fileControl").style.display = "none")
                    }
                }
            }), $("#imgBtnMRight").unbind("click").click(function() {
                if (d.src != a.g.imgNoPic && d.src != a.g.imgLoading && c >= 1 && 5 > c) {
                    for (var b = null, e = c + 1; 5 >= e; e++) {
                        var f = $id("fileview" + e).getElementsByTagName("img")[0];
                        if (f.src != a.g.imgLoading) {
                            b = f;
                            break
                        }
                    }
                    if (null != b) {
                        d.src = [b.src, b.src = d.src][0];
                        var g = d.getAttribute("realurl") || "";
                        var imagId = d.getAttribute("imagId");
                        var nextImageId = b.getAttribute("imagId");
                        //移除原来位置的ID
                        d.setAttribute("imagId",nextImageId);
                        d.setAttribute("realurl", b.getAttribute("realurl") || ""),
                        //设置新位置的ID
                        b.setAttribute("imagId", imagId),
                        b.setAttribute("realurl", g),
                        d.src == a.g.imgNoPic && ($id("fileControl").style.display = "none")
                    }
                }
            }))
        }).mouseout(function() {
            $id("fileControl").style.display = "none"
        }),
        $addEvent($id("fileViewList"), "mouseover", 
        function(b) {
            var c = $getTarget(b),
            d = a.g.uploadDom,
            e = a.g.currentDom,
            f = $id("fileViewList");
            c && "button" == c.tagName.toLowerCase() && "btn_upload" == c.parentNode.className && (d.style.left = $getX(c) - $getX(f) + "px", d.style.top = $getYP(c) - $getYP(f) + "px", d.style.display = "", e && window.SWFUpload.instances[d.id].setButtonDisabled(!1), a.g.currentDom = e = c)
        })
    },
    initLocalSection: function() {
        if (flashChecker().f) {
            var a = PP.c2cPub.picture;
            a.g.makeUploader({
                placeholder: "uploadbutton"
            }),
            a.g.uploadDom = $id("fileViewList").getElementsByTagName("object")[0],
            a.g.uploadDom.style.display = "none"
        } else $id("divFlashNoTips").style.display = "",
        $("#sectionHandle li")[0].className = "",
        $("#sectionHandle li")[1].className = "current",
        $id("localSection").style.display = "none",
        $id("webSection").style.display = "",
        $("#fileViewList li button,#fileViewList li>p").css("display", "none")
    },
    initWebSection: function() {
        var a = PP.c2cPub.picture;
        a.initWebPath(),
        $("#webPicListBack").click($empty()),
        $id("webPicList").innerHTML = $xss("", "none"),
        $id("webPicPager").innerHTML = $xss("", "none"),
        a.g.retCodeForAlbum.init(),
        $.ajax({
            url: a.g.url,
            method: "get",
            data: {
                path: a.g.path.id.join("/") || "/",
                listtype: 0,
                tmp: Math.random()
            },
            dataType: "xml",
            success: function(b) {
                var c = b.getElementsByTagName("result")[0];
                if (c) {
                    var d = c.getElementsByTagName("message")[0],
                    e = c.getElementsByTagName("data")[0],
                    f = d.getElementsByTagName("value")[0].firstChild.nodeValue;
                    if (a.g.retCodeForAlbum.report("0" === f ? !0: !1, f), "0" === f) {
                        var g = e.firstChild;
                        a.g.data.length = 0;
                        do {
                            if (g && 1 === g.nodeType) {
                                var h = {};
                                h.name = g.getElementsByTagName("name")[0].firstChild.nodeValue,
                                h.modifytime = parseInt(g.getElementsByTagName("modifytime")[0].firstChild.nodeValue, 10),
                                h.id = g.getElementsByTagName("id")[0].firstChild.nodeValue,
                                h.type = "dir" === g.nodeName ? 0: 1,
                                1 === h.type && (pic = g.getElementsByTagName("pic"), h.picinfo = {
                                    type: pic[0].getElementsByTagName("type")[0].firstChild.nodeValue,
                                    size: pic[0].getElementsByTagName("size")[0].firstChild.nodeValue,
                                    height: pic[0].getElementsByTagName("height")[0].firstChild.nodeValue,
                                    width: pic[0].getElementsByTagName("width")[0].firstChild.nodeValue,
                                    url: pic[1].getElementsByTagName("url")[0].firstChild.nodeValue,
                                    realurl: pic[0].getElementsByTagName("url")[0].firstChild.nodeValue
                                }),
                                a.g.data.push(h)
                            }
                            g = g && g.nextSibling
                        }
                        while (g);
                        a.g.index = 1,
                        a.g.data.sort(function(a, b) {
                            return a.type == b.type ? b.modifytime - a.modifytime: a.type - b.type
                        }),
                        a.initSectionData()
                    } else a.initSectionData()
                }
                1 === a.g.path.id.length ? $("#webPicListBack").click($empty())[0].className = "upward_disable": $("#webPicListBack").click(PP.c2cPub.picture.back)[0].className = "upward_enable"
            }
        })
    },
    initSpuSection: function() {
        var a = this.g.spuPic;
        if (a) {
            if (a.length) {
                var b = [],
                c = this.g.spuPage.getSection();
                var d = c.start;
                for (a.length; d < c.end && d < a.length; d++) b.push(this.g.imgHTML.replace(/{#url#}/g, a[d].productPicURL3).replace(/{#realurl#}/g, a[d].productPicURL).replace(/{#size#}/g, "500000").replace(/{#type#}/g, "1"));
                $id("spuPicList").innerHTML = $xss(b.join(""), "none");
                var e = this;
                $page({
                    pageCount: Math.ceil(a.length / this.g.spuPage.size),
                    currentPage: this.g.spuPage.index,
                    domList: [$("#spuPicPager")],
                    action: "func",
                    func: function(a) {
                        e.g.spuPage.index = parseInt(a, 10),
                        e.initSpuSection()
                    }
                })
            } else $id("spuPicList").innerHTML = $xss(this.g.spuNoneHTML, "none"),
            $id("spuPicPager").innerHTML = $xss("");
            $id("sectionHandle").lastChild.style.display = "",
            $fireEvent($id("sectionHandle").lastChild)
        }
    },
    hideSpuSection: function() {
        "" == $id("spuSection").style.display && $fireEvent($id("sectionHandle").firstChild),
        $id("sectionHandle").lastChild.style.display = "none"
    },
    initSectionData: function() {
        var a = PP.c2cPub.picture,
        b = a.g.data;
        if (b.length) {
            for (var c = (a.g.index - 1) * a.g.size, d = a.g.index * a.g.size, e = [], f = c; d > f && f < b.length; f++) 0 == b[f].type ? e.push(a.g.dirHTML.replace(/{#id#}/g, b[f].id).replace(/{#name#}/g, a.g.subStrGB(b[f].name, 13))) : e.push(a.g.fileHTML.replace(/{#name#}/g, a.g.subStrGB(b[f].name, 13)).replace(/{#url#}/g, b[f].picinfo.url).replace(/{#realurl#}/g, b[f].picinfo.realurl).replace(/{#size#}/g, b[f].picinfo.size).replace(/{#type#}/g, b[f].picinfo.type));
            $id("webPicList").innerHTML = $xss(e.join(""), "none"),
            $page({
                pageCount: Math.ceil(b.length / a.g.size),
                currentPage: a.g.index,
                domList: [$("#webPicPager")],
                action: "func",
                func: function(b) {
                    a.g.index = parseInt(b, 10),
                    a.initSectionData()
                }
            })
        } else $id("webPicList").innerHTML = $xss(a.g.errorHTML, "none")
    },
    initWebPath: function() {
        for (var a = [], b = PP.c2cPub.picture, c = b.g.path.name, d = 0; l = c.length, l > d; d++) a.push("<a href='javascript:;' onclick='PP.c2cPub.picture.jumpDir(" + d + ")'>" + c[d] + "</a>");
        $id("albumPath").innerHTML = $xss(a.join("&gt;"), "none")
    },
    jumpDir: function(a) {
        var b = PP.c2cPub.picture;
        b.g.path.id = b.g.path.id.slice(0, a + 1),
        b.g.path.name = b.g.path.name.slice(0, a + 1)
    },
    goDir: function(a, b) {
        var c = PP.c2cPub.picture;
        c.g.path.id.push(a),
        c.g.path.name.push(b)
    },
    back: function() {
        var a = PP.c2cPub.picture;
        a.g.path.id.length > 1 && (a.g.path.id.pop(), a.g.path.name.pop())
    },
    selectPic: function(a, b, c, d) {
        var e = PP.c2cPub.picture;
        if (parseInt(c, 10) > e.g.maxPicSize) return PP.c2cPub.g.alert("该图片大于990kb，请选择小于990kb的图片"),
        !1;
        if (e.g.allowPicType.indexOf(d) < 0) return PP.c2cPub.g.alert("目前商品主图只支持jpg,gif格式的图片，请重新选择"),
        !1;
        var f = !1;
        $("#fileViewList div[id^='fileview']").each(function() {
            var c = this.getElementsByTagName("img")[0];
            if (c.src == e.g.imgNoPic) {
                f = !0;
                var d = !1;
                return $("#fileViewList div").each(function() {
                    return this.getElementsByTagName("img")[0].src == a ? (d = !0, !1) : void 0
                }),
                d ? PP.c2cPub.g.alert("该图片已经上传过，请选择其他图片") : (c.src = a, c.setAttribute("realurl", b)),
                !1
            }
        }),
        f || PP.c2cPub.g.alert("最多上传5张图片")
    },
    //提交前检查图片，设置图片路径和图片id
    check: function() {
        var a = PP.c2cPub.picture,
        b = parseInt($("#dwNeedPicNum").val(), 10) || 1,
        c = !0,
        d = !1;
        return $("#fileViewList div[id^='fileview']").each(function(e) {
            var f = this.getElementsByTagName("img")[0],
            g = [];
            g[3]=f.getAttribute("imagId");
            return b > e && f.src == a.g.imgNoPic ? (c = !1, !1) : f.src == a.g.imgLoading ? (c = !1, d = !0, !1) : (f.getAttribute("defaultsrc") == a.g.imgNoPic && f.src == a.g.imgNoPic ? (g[0] = 0, g[1] = 0, g[2] = "") : f.getAttribute("defaultsrc") == a.g.imgNoPic && f.src != a.g.imgNoPic ? (g[0] = 0, g[1] = 1, g[2] = f.getAttribute("realurl") || "") : f.getAttribute("defaultsrc") != a.g.imgNoPic && f.src == a.g.imgNoPic ? (g[0] = 1, g[1] = 0, g[2] = "") : f.getAttribute("defaultsrc") != a.g.imgNoPic && f.src == f.getAttribute("defaultsrc") ? (g[0] = 1, g[1] = 1, g[2] = f.getAttribute("realurl") || "") : f.getAttribute("defaultsrc") != a.g.imgNoPic && f.src != f.getAttribute("defaultsrc") && (g[0] = 1, g[1] = 2, g[2] = f.getAttribute("realurl") || ""), $id("uploadPicInfo" + (e + 1)).value = g.join("|"), void 0)
        }),
        c ? !0: (window.scrollTo(0, $getYP($id("sectionHandle"))), d ? PP.c2cPub.g.alert("图片正在上传，请上传完毕后再试") : 1 == b ? PP.c2cPub.g.alert("第一张商品图片不能为空") : PP.c2cPub.g.alert("该类目至少上传" + b + "张图片"), !1)
    }
},
PP.c2cPub.detailTemplate = {
    init: function() {
        if ($id("divDetailTemplateArea")) {
            var a = this;
            this.initDetail(),
            $id("linkFlushDetailTemplate") && ($id("linkFlushDetailTemplate").onclick = function() {
                a.initDetail()
            }),
            PP.c2cPub.checkList.push(this.check)
        }
    },
    initDetail: function() {
        var a = this,
        b = ~~ ($id("detailTemplateid") && $id("detailTemplateid").value) || 0;
        this.retCodeFordetailTemplate.init(),
        $ajax({
            url: "http://my.paipai.com/cgi-bin/modularmanage/pagetemplateshow?page=2&pageid=" + b,
            method: "get",
            type: "json",
            onSuccess: function(b) {
                if (a.retCodeFordetailTemplate.report(!0, b.errCode), "0" == b.errCode) {
                    var c = b.data.Template,
                    d = $id("detailTemplateSlt");
                    if (c && c.length > 0 && d) {
                        c.pop();
                        var e = "0";
                        d.options.length = 0;
                        for (var f = 0, g = c.length; g > f; f++) $addSelect(d, c[f].Title, c[f].Pageid),
                        "1" == c[f].Choosed && (e = c[f].Pageid);
                        d.value = e,
                        $id("divDetailTemplateArea").style.display = ""
                    }
                }
            },
            onError: function() {
                a.retCodeFordetailTemplate.report(!1, -1)
            }
        })
    },
    check: function() {
        return $id("detailTemplateid") && $id("detailTemplateSlt") && ($id("detailTemplateid").value = $id("detailTemplateSlt").value),
        !0
    },
    retCodeFordetailTemplate: {
        d: null,
        init: function() {},
        report: function(a, b) {
            try {
                this.d && this.d.report(a, b)
            } catch(c) {}
        }
    }
},
PP.c2cPub.ShopCategory = {
    g: {
        selectMax: 10,
        categoryMax: 201,
        mapHtoB: {
            0: "0000",
            1: "0001",
            2: "0010",
            3: "0011",
            4: "0100",
            5: "0101",
            6: "0110",
            7: "0111",
            8: "1000",
            9: "1001",
            a: "1010",
            b: "1011",
            c: "1100",
            d: "1101",
            e: "1110",
            f: "1111"
        },
        mapBtoH: {
            "0000": "0",
            "0001": "1",
            "0010": "2",
            "0011": "3",
            "0100": "4",
            "0101": "5",
            "0110": "6",
            "0111": "7",
            1000: "8",
            1001: "9",
            1010: "a",
            1011: "b",
            1100: "c",
            1101: "d",
            1110: "e",
            1111: "f"
        },
        mapHtoL: {
            1: 1,
            2: 2,
            4: 3,
            8: 4
        },
        mapLtoH: {
            0: 8,
            1: 1,
            2: 2,
            3: 4
        },
        regId: /([1248])(0*)/,
        regHex: /[0-9a-f]+?/i,
        regBin: /[0-1]+?/i,
        blankVal: "0010000000",
        getOffsetById: function(a) {
            var b = PP.c2cPub.ShopCategory,
            c = b.g.regId.exec(a);
            return c && 3 == c.length ? b.g.mapHtoL[c[1]] + 4 * c[2].length: 0
        },
        getIdByOffset: function(a) {
            var b = PP.c2cPub.ShopCategory;
            return a > 0 && a <= b.g.categoryMax ? b.g.mapLtoH[a % 4 + ""] + new Array(Math.ceil(a / 4 - 1) + 1).join("0") : 0
        },
        convHtoB: function(a) {
            var b = PP.c2cPub.ShopCategory;
            if (b.g.regHex.test(a)) {
                var c = a.replace(/[0-9a-f]/gi, 
                function(a) {
                    return b.g.mapHtoB[a]
                });
                return c.replace(/^0+/, "")
            }
            return ""
        },
        convBtoH: function(a) {
            var b = PP.c2cPub.ShopCategory;
            if (b.g.regBin.test(a)) {
                var a = new Array(5 - a.length % 4).join("0") + a,
                c = a.replace(/[0-1]{4}/gi, 
                function(a) {
                    return b.g.mapBtoH[a]
                });
                return c.replace(/^0+/, "")
            }
            return ""
        }
    },
    init: function() {
        this.initLogic(),
        this.initEdit(),
        PP.c2cPub.checkList.push(this.check)
    },
    initLogic: function() {
        var a = PP.c2cPub.ShopCategory;
        $("input[level='1'][havechild='1']").attr("disabled", "disabled"),
        $("input[type='checkbox'][cp='shopcategorycheckbox']").click(function() {
            return $("input[type='checkbox'][cp='shopcategorycheckbox']:checked").length > a.g.selectMax ? (PP.c2cPub.g.alert("单个商品最多同时支持" + a.g.selectMax + "个分类。"), $(this).removeAttr("checked"), void 0) : void 0
        })
    },
    initEdit: function() {
        var a = PP.c2cPub.ShopCategory;
        if ($id("sShopCategory")) {
            var b = $id("sShopCategory").value;
            if ("" == b || "0" == b || "29" == b) return;
            for (var c = b.split(","), d = 0, e = 0, f = c.length; f > d && e < a.g.selectMax; d++) {
                var g = $id(c[d]);
                g && (g.checked = !0, e++)
            }
        } else {
            var b = $id("sShopClassid").value;
            if ("" == b || b == a.g.blankVal) return;
            for (var c = a.g.convHtoB(b).split(""), d = 0, e = 0, f = c.length; f > d && e < a.g.selectMax; d++) 1 == c[d] && $id(a.g.getIdByOffset(f - d)) && !$id(a.g.getIdByOffset(f - d)).disabled && ($id(a.g.getIdByOffset(f - d)).checked = !0, e++)
        }
    },
    check: function() {
        var a = PP.c2cPub.ShopCategory;
        if ($("input[type='checkbox'][cp='shopcategorycheckbox']:checked").length > a.g.selectMax) return PP.c2cPub.g.alert("单个商品最多同时支持" + a.g.selectMax + "个分类。"),
        !1;
        if ($("input[type='checkbox'][cp='shopcategorycheckbox']:checked").length <= 0) return $id("sShopClassid") && ($id("sShopClassid").value = a.g.blankVal),
        $id("sShopCategory") && ($id("sShopCategory").value = "29"),
        !0;
        if ($id("sShopCategory")) {
            var b = [];
            return $("input[type='checkbox'][cp='shopcategorycheckbox']:checked").each(function() {
                b.push(this.id)
            }),
            $id("sShopCategory").value = b.join(","),
            !0
        }
        for (var c = [], d = 0; d < a.g.categoryMax; d++) c[d] = 0;
        return $("input[type='checkbox'][cp='shopcategorycheckbox']:checked").each(function() {
            c[a.g.categoryMax - a.g.getOffsetById(this.id)] = 1
        }),
        $id("sShopClassid").value = a.g.convBtoH(c.join("")),
        !0
    }
},
PP.c2cPub.initSendType = function() {
    if (1 == $("input[name='dwSendType']").length) {
        var a = $("input[name='dwSendType']").val();
        16 == a && ($("#cSendTypeCheckBox").attr("checked", !0), $("input[name='cSendType']").attr("value", 16))
    }
    1 == $("#cSendTypeCheckBox").length && $("#cSendTypeCheckBox").click(function() {
        var a = $("#cSendTypeCheckBox").attr("checked");
        1 == a ? $("input[name='cSendType']").attr("value", 16) : $("input[name='cSendType']").attr("value", 0)
    })
},
PP.c2cPub.initForOtherFuncs = function() {
    $(document).ready(function() {
        $("#form1").submit(onSubmit)
    })
},
PP.c2cPub.initUI = function() {
    function a() {
        c(),
        d(),
        e(),
        f()
    }
    function b(a, b, c) {
        var d = parseInt(a.value);
        d = b > d ? b: d,
        d = d > c ? c: d,
        isNaN(d) && (d = ""),
        a.value != d && (a.value = d)
    }
    function c() {
        $("select[defaultvar]").each(function() {
            var a = $(this);
            a.attr("selectDefaultDone") || (a.val(a.attr("defaultvar")), a.attr("selectDefaultDone", "1"))
        })
    }
    function d() {
        $("[defaultvarforradio][radiovar][defaultvarforradio!=''][radiovar!='']").each(function() {
            var a = $(this);
            a.attr("radioDefauleSetDone") || ($("input[type='radio'][name='" + a.attr("defaultvarforradio") + "']").val([a.attr("radiovar")]), a.attr("radioDefauleSetDone", "1"))
        })
    }
    function e() {
        $("[defaultvarforcheckbox][checkboxvar][defaultvarforcheckbox!=''][checkboxvar!='']").each(function() {
            var a = $(this);
            a.attr("checkboxDefaultSetDone") || ($("input[type='checkbox'][name='" + a.attr("defaultvarforcheckbox") + "']").val(a.attr("checkboxvar").split(",")), a.attr("checkboxDefaultSetDone", "1"))
        })
    }
    function f() {
        $("input[dtype='rangnum'][dmin!=''][dmax!='']").each(function() {
            var a = $(this),
            c = a.attr("dmin"),
            d = a.attr("dmax");
            a.keyup(function() {
                b(this, c, d)
            }).blur(function() {
                b(this, c, d)
            }),
            b(this, c, d)
        })
    }
    $(a)
};
