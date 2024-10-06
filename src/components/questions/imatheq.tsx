export const imatheqJs = `<script>
/*
isShiftDown
&&  child.bold && */
var $package, $extend, $buuuuu, $setOptions;
(function() {
var f = this;
$package = function(b) {
    b = b.split(".");
    var d = f, g;
    for (g = 0; g < b.length; g++)
        d[b[g]] || (d[b[g]] = {}),
        d = d[b[g]];
    return d
}
;
$extend = function(b, d) {
    if (b instanceof Function)
        var g = new b;
    else
        g = function() {}
        ,
        g.prototype = b,
        g = new g;
    var k = function() {
        this.initialize instanceof Function && this.initialize.apply(this, arguments)
    };
    if (b instanceof Function)
        for (x in b)
            k[x] = b[x];
    for (x in d)
        d[x]instanceof Function && !("parent"in d[x]) && (d[x].parent = b instanceof Function ? b.prototype : b),
        g[x] = d[x];
    k.prototype = g;
    return k
}
;
$setOptions = function(b, d) {
    b = $package(b);
    for (var g in d)
        b[g] = d[g];
    return b
}
;
$buuuuu = function() {
    for (var b = document.getElementsByTagName("script"), d = RegExp("(.*)com/imatheq/scripts/imatheqfunctions.js"), g = 0; g < b.length; g++) {
        var k = b[g].src.match(d);
        if (null !== k)
            return b = RegExp("192.168.86.250"),
            d = new RegExp(document.location.hostname),
            k[1].match(RegExp("www.imatheq.com")) || k[1].match(b) || k[1].match(d) ? k[1] : "invalid path"
    }
}
;
var a = document.createElement("link");
a.setAttribute("rel", "stylesheet");
a.setAttribute("type", "text/css");
a.setAttribute("href", $buuuuu() + "com/imatheq/css/imatheqmain2.css");
document.getElementsByTagName("head")[0].appendChild(a)
}
)();
$package("com.efmase.js.utilities");
(function() {
com.efmase.js.utilities.XML = {
    newDocument: function(f, a) {
        f ||= "";
        a ||= "";
        if (document.implementation && document.implementation.createDocument)
            return document.implementation.createDocument(a, f, null);
        var b = new ActiveXObject("MSXML2.DOMDocument");
        if (f) {
            var d = ""
              , g = f
              , k = f.indexOf(":");
            -1 != k && (d = f.substring(0, k),
            g = f.substring(k + 1));
            a ? d ||= "a0" : d = "";
            b.loadXML("<" + (d ? d + ":" : "") + g + (a ? " xmlns:" + d + '="' + a + '"' : "") + "/>")
        }
        return b
    },
    parse: function(f) {
        if ("undefined" != typeof DOMParser)
            return (new DOMParser).parseFromString(f, "application/xml");
        if ("undefined" != typeof ActiveXObject) {
            var a = this.newDocument();
            a.loadXML(f);
            return a
        }
        f = "data:text/xml;charset=utf-8," + encodeURIComponent(f);
        a = new XMLHttpRequest;
        a.open("GET", f, !1);
        a.send(null);
        return a.responseXML
    },
    serialize: function(f) {
        if ("undefined" != typeof XMLSerializer)
            return (new XMLSerializer).serializeToString(f);
        if (f.xml)
            return f.xml;
        throw "XML.serialize is not supported or can't serialize " + f;
    }
}
}
)();
(function() {
com.efmase.js.utilities.XMLHttp = {
    call: function(f) {
        var a = new XMLHttpRequest;
        a.onreadystatechange = function() {
            if (4 == a.readyState)
                if (200 == a.status)
                    try {
                        var g = JSON.parse(this.responseText);
                        f.success(g)
                    } catch (k) {
                        f.error(this, a.status, k)
                    }
                else
                    f.error(this, a.status, "")
        }
        ;
        var b = this.encodeFormData(f.data)
          , d = f.url;
        -1 == d.indexOf(".aspx") && (d += (-1 == d.indexOf("?") ? "?" : "&") + b);
        a.open(f.type, d);
        a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        a.responseType = "text";
        a.send(b)
    },
    encodeFormData: function(f) {
        var a = [], b = /%20/g, d;
        for (d in f) {
            var g = f[d].toString();
            g = encodeURIComponent(d).replace(b, "+") + "=" + encodeURIComponent(g).replace(b, "+");
            a.push(g)
        }
        return a.join("&")
    }
}
}
)();
(function() {
com.efmase.js.utilities.toolset = {
    addEventListener: function(f, a, b) {
        f.attachEvent ? f.attachEvent("on" + a, b) : f.addEventListener(a, b, !1)
    },
    getViewPort: function() {
        if ("undefined" != typeof window.innerWidth) {
            var f = window.innerWidth;
            var a = window.innerHeight
        } else
            "undefined" != typeof document.documentElement && "undefined" != typeof document.documentElement.clientWidth && 0 != document.documentElement.clientWidth ? (f = document.documentElement.clientWidth,
            a = document.documentElement.clientHeight) : (f = document.getElementsByTagName("body")[0].clientWidth,
            a = document.getElementsByTagName("body")[0].clientHeight);
        return {
            width: f,
            height: a
        }
    },
    isMobile: function() {
        return -1 < navigator.userAgent.toLowerCase().indexOf("android") || -1 < navigator.userAgent.toLowerCase().indexOf("ipad") || -1 < navigator.userAgent.toLowerCase().indexOf("iphone") || -1 < navigator.userAgent.toLowerCase().indexOf("windows phone") || -1 < navigator.userAgent.toLowerCase().indexOf("iemobile") || -1 < navigator.userAgent.toLowerCase().indexOf("wpdesktop")
    },
    isIE: function() {
        return document.documentMode || /Edge/.test(navigator.userAgent)
    },
    isFirefox: function() {
        return -1 < navigator.userAgent.toLowerCase().indexOf("firefox")
    },
    isIOS: function() {
        return -1 < navigator.userAgent.toLowerCase().indexOf("ipad") || -1 < navigator.userAgent.toLowerCase().indexOf("iphone")
    },
    isSmallWin: function() {
        return 570 > parseInt(window.innerWidth) || 400 > parseInt(window.innerHeight)
    },
    loadFont: function(f, a) {
        var b = document.createElement("canvas");
        b.width = 400;
        b.height = 600;
        var d = b.getContext("2d");
        d.save();
        d.font = "8px " + f;
        d.clearRect(0, 0, 400, 600);
        d.fillText(a, 40, 300);
        d.restore();
        document.body.appendChild(b);
        document.body.removeChild(b)
    },
    swap: function(f, a) {
        var b = org.imatheq.formulaeditor.parsing.expression.RevList;
        _swap = function(d, g) {
            for (var k in d) {
                var e = null;
                "bold-script" == g && (e = org.imatheq.formulaeditor.parsing.expression.ScriptList[k]);
                "bold-fraktur" == g && (e = org.imatheq.formulaeditor.parsing.expression.FrakturList[k]);
                b[d[k]] = {
                    key: k,
                    type: g,
                    non_bold: e
                }
            }
        }
        ;
        _swap(org.imatheq.formulaeditor.parsing.expression.DoubleStruckList, "double-struck");
        _swap(org.imatheq.formulaeditor.parsing.expression.ScriptList, "script");
        _swap(org.imatheq.formulaeditor.parsing.expression.ScriptBoldList, "bold-script");
        _swap(org.imatheq.formulaeditor.parsing.expression.FrakturList, "fraktur");
        _swap(org.imatheq.formulaeditor.parsing.expression.FrakturBoldList, "bold-fraktur")
    },
    setObjsAttrb: function(f, a, b, d) {
        f = document.getElementsByName(f);
        for (var g = 0; g < f.length; g++)
            "class" == a ? null === d || void 0 === d || "add" == d ? f[g].classList.add(b) : f[g].classList.remove(b) : null === d || void 0 === d || "add" == d ? f[g].style[a] = b : f[g].style.removeProperty(a)
    },
    getInputAttrbs: function(f, a, b) {
        if (null === b || void 0 === b)
            b = [];
        b = b.concat("id xref class style href mathbackground".split(" "));
        null !== a && void 0 !== a && "token" == a && (b = b.concat(["mathsize", "dir"]));
        in_attrbs = "";
        for (a = 0; a < b.length; a++)
            null !== f.getAttribute(b[a]) && (in_attrbs += " " + b[a] + '="' + f.getAttribute(b[a]) + '"');
        return in_attrbs
    },
    getEncodedStr: function(f) {
        var a = f.value
          , b = ""
          , d = function(k) {
            return 128 < k.charCodeAt() ? "&#x" + k.charCodeAt().toString(16) + ";" : " " == k ? "&#xA0;" : k.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;")
        }
          , g = org.imatheq.formulaeditor.parsing.expression.RevList[a];
        if (void 0 === g)
            b = d(a);
        else {
            if (f.doubleStruck || f.script || f.fraktur)
                return g.key;
            f.bold && ("script" == g.type ? a = org.imatheq.formulaeditor.parsing.expression.ScriptBoldList[g.key] : "fraktur" == g.type && (a = org.imatheq.formulaeditor.parsing.expression.FrakturBoldList[g.key]));
            b = d(a);
            if (2 == a.length)
                if ("double-struck" == g.type)
                    b = "&#x1D5" + d(a[1]).toUpperCase().slice(5);
                else if ("script" == g.type || "bold-script" == g.type)
                    b = d(a[1]).toUpperCase().slice(5),
                    b = ("9C" > b ? "&#x1D5" : "&#x1D4") + b;
                else if ("fraktur" == g.type || "bold-fraktur" == g.type)
                    b = "&#x1D5" + d(a[1]).toUpperCase().slice(5)
        }
        return b
    },
    caretSize: 7,
    caretExt: 3
}
}
)();
$package("org.imatheq.debug");
(function() {
org.imatheq.debug.Debug = $extend(Object, {
    debug: !0,
    debugBuffer: "",
    debugDiv: null,
    debugLevel: 5,
    frameInitTimeStep: 10,
    idstr: "imatheq Exercise System - PostDebug",
    initialize: function() {
        this.debugChildInit.idstr = this.idstr
    },
    addDebug: function(f, a) {
        if (void 0 === a || null === a)
            a = 0;
        if (this.debug && a <= this.debugLevel)
            try {
                this.debugDiv.innerHTML += f + "<br>"
            } catch (b) {
                this.debugBuffer += f + "<br>"
            }
    },
    addMessageListeners: function(f) {
        this.messageListener.debug = this;
        f.addMessageListener(this.idstr, "debug", this.messageListener)
    },
    createDebug: function() {
        if (this.debug) {
            var f = document.createElement("div");
            f.id = "debugWindow";
            f.style.position = "absolute";
            f.style.right = "5px";
            f.style.top = "5px";
            f.style.borderStyle = "solid";
            f.style.borderColor = "#000000";
            f.style.borderWidth = "1px";
            f.style.backgroundColor = "#EEEEEE";
            f.style.padding = "5px";
            f.style.fontSize = "12px";
            f.innerHTML = "<b>Debug-window</b><br />" + this.debugBuffer;
            this.debugDiv = f;
            try {
                this.addDebug("- add debug window"),
                document.body.insertBefore(f, document.body.firstChild)
            } catch (b) {
                this.addDebug("- delayed adding debug window (not ready)");
                var a = this;
                setTimeout(function() {
                    a.createDebug()
                }, this.frameInitTimestep)
            }
        }
    },
    debugChildInit: function() {
        for (var f = {
            idstr: this.debugChildInit.idstr,
            mode: "debugInit"
        }, a = document.getElementsByTagName("iframe"), b = 0; b < a.length; b++)
            a[b].contentWindow.postMessage(f, "*")
    },
    messageListener: function(f) {
        "object" === typeof f.data && (f = f.data,
        f.idstr == this.messageListener.debug.idstr && "debug" == f.mode && void 0 !== f.text && null !== f.text && this.messageListener.debug.addDebug("[child] " + f.text))
    },
    startDebug: function() {}
})
}
)();
$package("org.imatheq.formulaeditor");
(function() {
var f = com.efmase.js.utilities.toolset;
org.imatheq.formulaeditor.Cursor = $extend(Object, {
    editor: null,
    position: null,
    visible: !1,
    autoScroll: !1,
    blinkonTimer: null,
    blinkOffTimer: null,
    longBlinkon: !1,
    dimensions: null,
    initialize: function(a, b) {
        this.editor = a;
        this.position = b
    },
    blinkon: function() {
        if (this.editor.hasFocus()) {
            this.draw({});
            this.longBlinkon && (this.longBlinkon = !1);
            var a = this;
            this.blinkoffTimer = window.setTimeout(function() {
                a.blinkoff()
            }, 600)
        }
    },
    blinkoff: function() {
        if (this.editor.hasFocus()) {
            this.editor.canvas.clearBg();
            this.editor.canvas.drawCaret(this.dimensions);
            var a = this;
            this.blinkonTimer = window.setTimeout(function() {
                a.blinkon()
            }, 600)
        }
    },
    showCursor: function() {
        this.longBlinkon = !0;
        null !== this.blinkonTimer && (clearTimeout(this.blinkonTimer),
        this.blinkonTimer = null);
        null !== this.blinkoffTimer && (clearTimeout(this.blinkoffTimer),
        this.blinkoffTimer = null);
        this.blinkon();
        this.visible = !0
    },
    hideCursor: function() {
        this.dimensions = null;
        null !== this.blinkonTimer && (clearTimeout(this.blinkonTimer),
        this.blinkonTimer = null);
        null !== this.blinkoffTimer && (clearTimeout(this.blinkoffTimer),
        this.blinkoffTimer = null);
        this.visible && this.editor.canvas.clearBg();
        this.visible = !1
    },
    onkeydown: function(a) {
        if (!a.altKey && !a.ctrlKey)
            switch (a.keyCode) {
            case 35:
                return this.moveLast(a.shiftKey),
                !1;
            case 36:
                return this.moveFirst(a.shiftKey),
                !1;
            case 37:
                return this.moveLeft(a.shiftKey),
                !1;
            case 38:
                return this.moveUp(a.shiftKey),
                !1;
            case 39:
                return this.moveRight(a.shiftKey),
                !1;
            case 40:
                return this.moveDown(a.shiftKey),
                !1
            }
        return this.position.row.onkeydown(a, this.editor)
    },
    setPosition: function(a, b) {
        var d = this.editor.selection
          , g = org.imatheq.formulaeditor.presentation
          , k = (new org.imatheq.formulaeditor.Options).getOption("defAutoItalic");
        if (d.hasSelection)
            d.parent instanceof g.PArray ? (g = {
                bold: !1,
                forcedItalic: !1,
                autoItalic: k,
                mathcolor: "#000000",
                mtext: !1
            },
            this.editor.setButtonStatus(g)) : d.parent instanceof g.Lines && d.parent.getGrandChild(d.endIndex - 1, !0);
        else {
            if (null !== b && void 0 !== b && b && a.row === this.position.row && a.index === this.position.index)
                return;
            b = 0 < a.index ? a.row.children[a.index - 1] : a.row.children[a.index];
            null !== b && void 0 !== b && b instanceof g.Symbol ? (g = {
                bold: b.bold,
                forcedItalic: b.forcedItalic,
                autoItalic: b.autoItalic,
                mathcolor: b.mathcolor,
                mtext: b.mtext
            },
            this.editor.setButtonStatus(g)) : null !== b && void 0 !== b && (g = {
                bold: null !== b.bold ? b.bold : !1,
                forcedItalic: null !== b.forcedItalic ? b.forcedItalic : !1,
                autoItalic: null !== b.autoItalic ? b.autoItalic : k,
                mathcolor: null !== b.mathcolor ? b.mathcolor : "#000000",
                mtext: !1
            },
            this.editor.setButtonStatus(g))
        }
        this.position = {
            row: a.row,
            index: a.index
        };
        this.updateEditTabButtons();
        this.autoScroll = !0
    },
    updateEditTabButtons: function() {
        var a = org.imatheq.formulaeditor.presentation
          , b = this.editor.selection
          , d = {
            bracketed: null,
            parray: null,
            lines: null
        }
          , g = null
          , k = this.position.row
          , e = this.position.index;
        b.hasSelection && (k = b.parent,
        e = b.startIndex);
        k = k.getAncestors(e);
        for (e = 1; e < k.length; e++)
            null === d.bracketed && k[e]instanceof a.Bracketed && (d.bracketed = k[e]),
            null === d.parray && k[e]instanceof a.PArray && (d.parray = {
                row: k[e],
                index: k[e - 1].index,
                startIndex: k[e - 1].index,
                endIndex: k[e - 1].index,
                selection: "no"
            },
            g = k[e - 1].index);
        b.hasSelection && (k = b.parent.children[b.startIndex],
        e = b.endIndex - b.startIndex,
        1 == e && k instanceof a.Bracketed ? (d.bracketed = k,
        1 == k.children.length && (k.children[0]instanceof a.PArray ? (d.parray = {
            row: k.children[0],
            index: g,
            startIndex: 0,
            endIndex: k.children[0].length - 1,
            selection: "bracket"
        },
        d.lines = null) : k.children[0]instanceof a.Row && 1 == k.children[0].children.length && k.children[0].children[0]instanceof a.PArray && (d.parray = {
            row: k.children[0].children[0],
            index: g,
            startIndex: 0,
            endIndex: k.children[0].children[0].children.length - 1,
            selection: "full"
        },
        d.lines = null))) : 1 == e && k instanceof a.PArray ? (d.parray = {
            row: k,
            index: g,
            startIndex: 0,
            endIndex: k.children.length - 1,
            selection: "full"
        },
        d.lines = null) : b.parent instanceof a.PArray && (d.parray = {
            row: b.parent,
            index: g,
            startIndex: b.startIndex,
            endIndex: b.endIndex - 1,
            selection: "partial"
        }));
        this.position.etb = d;
        var h = document.getElementById("EDITTAB_LINES_ALIGN");
        a = document.getElementById("EDITTAB_BRACKETS");
        b = document.getElementById("EDITTAB_EDIT_ROW_COL");
        g = document.getElementById("EDITTAB_ROW_COL_ALIGN");
        k = document.getElementById("EDITTAB_DRAW_LINES");
        e = document.getElementById("EDITTAB_EQUAL_HEIGHT_WIDTH");
        var l = document.getElementById("EDITTAB_ROW_COL_SPACING")
          , m = document.getElementById("EDITTAB_DUMMY_GROUP");
        h.style.display = null !== d.lines ? "block" : "none";
        h = null !== d.lines ? !1 : !0;
        null !== d.bracketed ? (a.style.display = "block",
        h = !1,
        a.style.borderLeft = h ? "0" : "1px solid #BDBDBD",
        document.getElementById("efmase_bracket_palette_btn").innerHTML = d.bracketed.leftBracket.value.replace("<", "&lt;").replace(">", "&gt;") + "&nbsp;" + d.bracketed.rightBracket.value.replace("<", "&lt;").replace(">", "&gt;")) : (a.style.display = "none",
        a.style.borderLeft = "0");
        null !== d.parray ? (b.style.display = "block",
        b.style.borderLeft = h ? "0" : "1px solid #BDBDBD",
        h = !1,
        g.style.display = "block",
        g.style.borderLeft = h ? "0" : "1px solid #BDBDBD",
        k.style.display = "block",
        k.style.borderLeft = h ? "0" : "1px solid #BDBDBD",
        l.style.display = "block",
        l.style.borderLeft = h ? "0" : "1px solid #BDBDBD",
        e.style.display = "block",
        e.style.borderLeft = h ? "0" : "1px solid #BDBDBD") : (b.style.display = "none",
        b.style.borderLeft = "0",
        g.style.display = "none",
        g.style.borderLeft = "0",
        k.style.display = "none",
        k.style.borderLeft = "0",
        l.style.display = "none",
        l.style.borderLeft = "0",
        e.style.display = "none",
        e.style.borderLeft = "0");
        m.style.borderLeft = "0";
        null !== d.bracketed && d.bracketed.updateEditTabButtons(this.editor);
        null !== d.parray && d.parray.row.updateEditTabButtons(this.editor)
    },
    onkeypress: function(a) {
        return this.position.row.onkeypress(a, this.editor)
    },
    onmousedown: function(a, b, d) {
        var g = this.editor.selection
          , k = this.editor.presentation.getCursorPosition(this.editor.getPresentationContext(), b, d);
        if (k)
            if (a.shiftKey) {
                a = g.getSelection(g.startPosition, k);
                if (null != a) {
                    g.setSelection(a);
                    this.setPosition(k);
                    return
                }
                g.clear();
                this.setPosition(k)
            } else {
                if (g.hasSelection) {
                    if (0 != a.button && g.hasSelectionOnPos(k))
                        return !1;
                    g.clear();
                    this.showCursor()
                }
                0 < k.index && (a = k.row.children[k.index - 1],
                null !== a && void 0 !== a && a instanceof org.imatheq.formulaeditor.presentation.NewlineSymbol && k.index--);
                (a = this.editor.testplayermode) ? "take_test" == a && k.row.isAnswer && (this.position.row.setHighlight(!1),
                this.position = k) : (this.setPosition(k, !0),
                g.startPosition = k,
                g = {},
                this.draw(g))
            }
        else
            this.editor.presentation.onmousedown(a, this.editor, b, d);
        if (null === this.position || void 0 === this.position)
            this.position = this.editor.presentation.getFollowingCursorPosition(this.editor.getPresentationContext());
        g = {};
        this.draw(g)
    },
    onmouseup: function(a, b, d) {
        if (a = this.editor.presentation.getCursorPosition(this.editor.getPresentationContext(), b, d))
            this.position = a;
        if (null === this.position || void 0 === this.position)
            this.position = this.editor.presentation.getFollowingCursorPosition(this.editor.getPresentationContext())
    },
    moveCursor: function(a, b) {
        var d = this.editor.selection;
        null !== a ? b ? (b = d.getSelection(d.startPosition, a),
        null !== b && d.setSelection(b),
        this.setPosition(a)) : (this.editor.testplayermode ? a.row.isAnswer && (this.position = a,
        d.startPosition = a) : (this.setPosition(a),
        d.startPosition = a),
        this.showCursor()) : d.hasSelection && d.clear()
    },
    isCellMove: function() {
        var a = this.editor.selection;
        return a.hasSelection && this.position.row !== a.parent && !(a.parent instanceof org.imatheq.formulaeditor.presentation.Lines)
    },
    moveRight: function(a) {
        var b = this.position.row
          , d = this.position.index
          , g = !a
          , k = this.editor.getPresentationContext()
          , e = this.editor.selection
          , h = org.imatheq.formulaeditor.presentation;
        if (b.children[d]instanceof h.BlockSymbol || b.children[d]instanceof h.NewlineSymbol)
            d++,
            this.position.index++;
        if (!a && e.hasSelection)
            e.clear(),
            this.showCursor();
        else {
            a && d < b.children.length && e.hasSelection && b.children[d].isAncestorOf(e.startPosition.row) && (g = !0);
            if (!g && this.isCellMove())
                for (b = b.parent.getFollowingCursorPosition(k, b.index, g),
                d = e.getSelection(e.startPosition, b); null !== d && e.equals(d); ) {
                    if (b.index == b.row.children.length && null !== b.row.parent)
                        b = b.row.parent.getFollowingCursorPosition(k, b.row.index, g);
                    else if (b.index < b.row.children.length)
                        b = {
                            row: b.row,
                            index: b.index + 1
                        };
                    else
                        break;
                    d = e.getSelection(e.startPosition, b)
                }
            else {
                if (e.hasSelection && 0 < d && b.children[d - 1]instanceof h.NewlineSymbol) {
                    b = b.parent.children[b.index + 1];
                    if (null === b)
                        throw Error("Error in moveRight(): no next line after newline.");
                    d = 0;
                    this.position = {
                        row: b,
                        index: d
                    }
                }
                b = b.getFollowingCursorPosition(k, d, g);
                if (a && e.hasSelection)
                    for (d = e.getSelection(e.startPosition, b); null !== d && null !== b.row.parent && e.equals(d); )
                        b = b.row.parent.getFollowingCursorPosition(k, b.row.index, g),
                        d = e.getSelection(e.startPosition, b)
            }
            this.moveCursor(b, a)
        }
    },
    moveLeft: function(a) {
        var b = this.position.row
          , d = this.position.index
          , g = this.editor.selection
          , k = !a;
        if (0 < d && !this.editor.selection.hasSelection && b.children[d - 1]instanceof org.imatheq.formulaeditor.presentation.BlockSymbol || b.children[d - 1]instanceof org.imatheq.formulaeditor.presentation.NewlineSymbol)
            d--,
            this.position.index--;
        a && 0 < d && this.editor.selection.hasSelection && b.children[d - 1].isAncestorOf(this.editor.selection.startPosition.row) && (k = !0);
        if (!a && g.hasSelection)
            g.clear(),
            this.showCursor();
        else {
            if (!k && this.isCellMove())
                for (b = b.parent.getPrecedingCursorPosition(this.editor.getPresentationContext(), b.index, k),
                d = g.getSelection(g.startPosition, b); null !== d && null !== b.row.parent && g.equals(d); )
                    b = b.row.parent.getPrecedingCursorPosition(this.editor.getPresentationContext(), b.row.index, k),
                    d = g.getSelection(g.startPosition, b);
            else {
                b = b.getPrecedingCursorPosition(this.editor.getPresentationContext(), d, k);
                if (null === b)
                    return;
                if (a && g.hasSelection)
                    for (d = g.getSelection(g.startPosition, b); null !== d && null !== b.row.parent && g.equals(d); )
                        b = b.row.parent.getPrecedingCursorPosition(this.editor.getPresentationContext(), b.row.index, k),
                        d = g.getSelection(g.startPosition, b)
            }
            this.moveCursor(b, a)
        }
    },
    moveDown: function(a) {
        var b = this.position.row
          , d = this.position.index
          , g = this.editor.selection;
        b = a && this.isCellMove() ? b.parent.getLowerCursorPosition(this.editor.getPresentationContext(), b.index, this.getX(), !a) : b.getLowerCursorPosition(this.editor.getPresentationContext(), d, this.getX(), !a);
        !a && null !== b && 0 < b.index && b.row.children[b.index - 1]instanceof org.imatheq.formulaeditor.presentation.NewlineSymbol && b.index--;
        if (!a && g.hasSelection)
            g.clear(),
            this.showCursor();
        else {
            if (g.hasSelection && a && null !== b) {
                d = b.row;
                var k = b.index;
                k < d.children.length && d.children[k].isAncestorOf(g.startPosition.row) ? b = d.children[k].getLowerCursorPosition(this.editor.getPresentationContext(), null, this.getX(), !0) : 0 < k && d.children[k - 1].isAncestorOf(g.startPosition.row) && (b = d.children[k - 1].getLowerCursorPosition(this.editor.getPresentationContext(), null, this.getX(), !0))
            }
            null !== b && this.moveCursor(b, a)
        }
    },
    moveUp: function(a) {
        var b = this.position.row
          , d = this.position.index
          , g = !a
          , k = this.editor.selection;
        !a && k.hasSelection ? (k.clear(),
        this.showCursor()) : (b = !g && this.isCellMove() ? b.parent.getHigherCursorPosition(this.editor.getPresentationContext(), b.index, this.getX(), !a) : b.getHigherCursorPosition(this.editor.getPresentationContext(), d, this.getX(), !a),
        !a && null !== b && 0 < b.index && b.row.children[b.index - 1]instanceof org.imatheq.formulaeditor.presentation.NewlineSymbol && b.index--,
        k.hasSelection && a && null !== b && (d = b.row,
        g = b.index,
        g < d.children.length && d.children[g].isAncestorOf(k.startPosition.row) ? b = d.children[g].getHigherCursorPosition(this.editor.getPresentationContext(), null, this.getX(), !0) : 0 < g && d.children[g - 1].isAncestorOf(k.startPosition.row) && (b = d.children[g - 1].getHigherCursorPosition(this.editor.getPresentationContext(), null, this.getX(), !0))),
        null !== b && this.moveCursor(b, a))
    },
    moveFirst: function(a) {
        var b = this.position.row
          , d = this.position.index;
        b = a && this.isCellMove() ? b.parent.getFirstCursorPosition(this.editor.getPresentationContext(), b.index) : b.getFirstCursorPosition(this.editor.getPresentationContext(), d);
        this.moveCursor(b, a)
    },
    moveLast: function(a) {
        var b = this.position.row
          , d = this.position.index;
        b = a && this.isCellMove() ? b.parent.getLastCursorPosition(this.editor.getPresentationContext(), b.index) : b.getLastCursorPosition(this.editor.getPresentationContext(), d);
        this.moveCursor(b, a)
    },
    getX: function() {
        var a = this.position.row
          , b = this.position.index
          , d = a.children[b - 1] ? a.children[b - 1].dimensions : null;
        b = a.children[b] ? a.children[b].dimensions : null;
        null === d && null === b && (b = a.dimensions);
        null === d && null !== b && (d = {
            left: a.dimensions.left,
            top: b.top,
            width: 0,
            height: b.height
        });
        null === b && null !== d && (b = {
            left: d.left + d.width,
            top: d.top,
            width: 0,
            height: d.height
        });
        return Math.round(d.left + d.width + (b.left - (d.left + d.width)) / 2)
    },
    getDimensions: function(a, b) {
        var d = org.imatheq.formulaeditor.presentation;
        if (null === b || void 0 === b)
            b = this.position;
        var g = 0;
        a && a.fontSizeModifier && (g += a.fontSizeModifier);
        g = 8 < this.editor.canvas.getFontSizeIdx(g) ? 2 : 1;
        var k = b.row
          , e = b.index
          , h = 0 == e ? null : k.children[e - 1] ? k.children[e - 1].dimensions : null
          , l = null;
        !k.children[e] || k.children[e]instanceof d.NewlineSymbol || (l = k.children[e].dimensions);
        null === h && null === l && (e == k.children.length && 1 < e ? (h = k.dimensions,
        l = {
            left: h.left + h.width,
            top: h.top,
            width: 0,
            height: h.height
        }) : l = k.dimensions);
        null === h && null !== l && (h = {
            left: k.dimensions.left,
            top: l.top,
            width: 0,
            height: l.height
        });
        null === l && null !== h && (l = {
            left: h.left + h.width,
            top: h.top,
            width: 0,
            height: h.height
        });
        b = Math.round(h.left + h.width + (l.left - (h.left + h.width)) / 2);
        var m = Math.round(Math.min(h.top, l.top) - 3)
          , n = Math.round(Math.max(h.top + h.height, l.top + l.height) + 3);
        k.children[e]instanceof d.BlockSymbol ? (b = Math.round(l.left + l.width / 2 - g / 2),
        m = l.top - 3,
        n = l.top + l.height + 3) : !k.children[e] && k.children[e - 1]instanceof d.BlockSymbol && (b = Math.round(h.left + h.width / 2 - g / 2));
        g = 0;
        a && a.fontSizeModifier && (g += a.fontSizeModifier);
        a = Math.round(this.editor.canvas.getPXFontSize(g) / 2);
        a += 6;
        n - m < a && (a -= n - m,
        m -= a / 2,
        n += a / 2);
        return {
            x: b,
            top: m,
            bottom: n
        }
    },
    draw: function(a) {
        var b = org.imatheq.formulaeditor.presentation;
        this.editor.canvas.clearBg();
        0 < this.position.index && this.position.row.children[this.position.index - 1]instanceof b.NewlineSymbol && this.position.index--;
        b = 0;
        a && a.fontSizeModifier && (b += a.fontSizeModifier);
        b = 8 < this.editor.canvas.getFontSizeIdx(b) ? 2 : 1;
        this.position.row.children[this.position.index - 1]instanceof org.imatheq.formulaeditor.presentation.BlockSymbol && this.position.index--;
        this.dimensions = a = this.getDimensions(a);
        var d = this.editor.canvas.getBgContext();
        d.save();
        d.lineWidth = b;
        d.beginPath();
        d.moveTo(a.x, a.top);
        d.lineTo(a.x, a.bottom);
        d.stroke();
        d.closePath();
        d.restore();
        this.autoScroll && this.editor.setScroll(a);
        f.isMobile() && this.editor.canvas.drawCaret(a)
    },
    isOnCaret: function(a, b) {
        if (null === this.dimensions)
            return !1;
        var d = f.caretSize
          , g = this.dimensions.x
          , k = this.dimensions.bottom;
        return a > g - d - 2 && a < g + d + 2 && b > k + 2 - 2 && b < k + 2 + 3 * d + 2
    }
})
}
)();
(function() {
org.imatheq.formulaeditor.Actions = $extend(Object, {
    editor: null,
    actions: [],
    redoIndex: 0,
    initialize: function(f) {
        this.editor = f
    },
    clear: function() {
        actions = [];
        redoIndex = 0
    },
    addAction: function(f, a, b, d, g, k, e, h, l, m, n) {
        this.actions = this.actions.slice(0, this.redoIndex);
        this.actions.push({
            action: f,
            position: a,
            beforePosition: b,
            afterPosition: d,
            replaced: g,
            replaceWith: k,
            distanceToEnd: e,
            beforeSelection: h,
            afterSelection: l,
            beforeButtonStatus: m,
            afterButtonStatus: n
        });
        this.redoIndex++;
        this.editor.setButtonStatus()
    },
    undo: function() {
        if (0 != this.redoIndex) {
            var f = org.imatheq.formulaeditor.presentation
              , a = this.actions[this.redoIndex - 1]
              , b = a.position.row
              , d = a.position.index;
            this.editor.hasFocus() || this.editor.focus();
            switch (a.action) {
            case "fontname":
            case "fontsize":
                a.replaceWith = "fontname" == a.action ? this.editor.getFontFamilyNameIdx() : this.editor.canvas.getFontSizeIdx();
                curIdx = this.editor.palette.changeFont(a.action, a.replaced);
                break;
            case "changeParrayStyle":
                a.replaceWith = b.info;
                b.info = a.replaced;
                break;
            case "updateBracket":
                var g = a.replaced;
                a.replaced = [b.leftBracket.value, b.rightBracket.value, b.leftBracket.onscreen, b.rightBracket.onscreen];
                b.leftBracket.value = g[0];
                b.rightBracket.value = g[1];
                b.leftBracket.onscreen = g[2];
                b.rightBracket.onscreen = g[3];
                break;
            case "onsymmetric":
            case "offsymmetric":
                g = a.replaced;
                a.replaceWith = b.symmetric;
                b.symmetric = g;
                break;
            case "insertabove":
            case "insertbelow":
                g = a.replaced;
                a.replaceWith = {
                    entries: b.deleteRows(g.startRow, g.numRows),
                    info: b.info,
                    startRow: g.startRow,
                    numRows: g.numRows
                };
                b.info = g.info;
                b.info.populateData(b.numrows, b.numcols);
                break;
            case "insertleft":
            case "insertright":
                g = a.replaced;
                a.replaceWith = {
                    entries: b.deleteColumns(g.startCol, g.numCols),
                    info: b.info,
                    startCol: g.startCol,
                    numCols: g.numCols
                };
                b.info = g.info;
                b.info.populateData(b.numrows, b.numcols);
                break;
            case "deleterows":
                g = a.replaced;
                a.replaceWith = {
                    info: b.info,
                    startRow: g.startRow,
                    numRows: g.numRows
                };
                b.insertRows(g.entries, g.startRow, g.numRows);
                b.info = g.info;
                b.info.populateData(b.numrows, b.numcols);
                break;
            case "deletecolumns":
                g = a.replaced;
                a.replaceWith = {
                    info: b.info,
                    startCol: g.startCol,
                    numCols: g.numCols
                };
                b.insertColumns(g.entries, g.startCol, g.numCols);
                b.info = g.info;
                b.info.populateData(b.numrows, b.numcols);
                break;
            case "setPArrayAttrbs":
                a.replaceWith = b.info;
                b.info = a.replaced;
                b.info.populateData(b.numrows, b.numcols);
                break;
            default:
                if (g = b.children.length - a.distanceToEnd,
                b instanceof f.Row)
                    g > d && (a.replaceWith = b.remove(d, g)),
                    null !== a.replaced && (b.children.splice.apply(b.children, [d, 0].concat(a.replaced.children)),
                    b.updateChildren(),
                    a.replaced = null);
                else if (b instanceof f.PArray)
                    if (g > d)
                        a.replaceWith = b.deleteValues(d, g - 1),
                        null !== a.replaced && (b.updateValues(a.replaced, d, g - 1),
                        a.replaced = null);
                    else
                        throw new error("Undo: PArray's endIndex <= startIndex.");
                else
                    b instanceof f.Lines && (g = b.getNumGrandChildren() - a.distanceToEnd,
                    g > d && (a.replaceWith = b.remove(d, g)),
                    null !== a.replaced && (g = a.replaced,
                    g instanceof f.Row && (g = new f.Lines(g)),
                    b.insert(d, g),
                    b.flatten(),
                    b.updateChildren(),
                    a.replaced = null))
            }
            null !== a.beforeSelection && void 0 !== a.beforeSelection ? this.editor.selection.setSelection(a.beforeSelection) : this.editor.selection.clear();
            f = this.editor.getPosition(a.beforePosition);
            this.editor.cursor.setPosition(f);
            this.redoIndex--;
            a.beforeButtonStatus && (a.afterButtonStatus = this.editor.getButtonStatus());
            this.editor.setButtonStatus(a.beforeButtonStatus);
            this.editor.cursor.updateEditTabButtons();
            this.editor.redraw(this.editor.selection.hasSelection)
        }
    },
    redo: function() {
        if (this.redoIndex != this.actions.length) {
            var f = this.actions[this.redoIndex]
              , a = f.position.row
              , b = f.position.index
              , d = a.children.length - f.distanceToEnd;
            this.editor.hasFocus() || this.editor.focus();
            switch (f.action) {
            case "fontname":
            case "fontsize":
                f.replaced = "fontname" == f.action ? this.editor.getFontFamilyNameIdx() : this.editor.canvas.getFontSizeIdx();
                curIdx = this.editor.palette.changeFont(f.action, f.replaceWith);
                break;
            case "changeParrayStyle":
                f.replaced = a.info;
                a.info = f.replaceWith;
                break;
            case "updateBracket":
                b = f.replaced;
                f.replaced = [a.leftBracket.value, a.rightBracket.value, a.leftBracket.onscreen, a.rightBracket.onscreen];
                a.leftBracket.value = b[0];
                a.rightBracket.value = b[1];
                a.leftBracket.onscreen = b[2];
                a.rightBracket.onscreen = b[3];
                break;
            case "onsymmetric":
            case "offsymmetric":
                b = f.replaceWith;
                f.replaced = a.symmetric;
                a.symmetric = b;
                break;
            case "insertabove":
            case "insertbelow":
                b = f.replaceWith;
                f.replaced = {
                    info: a.info,
                    startRow: b.startRow,
                    numRows: b.numRows
                };
                a.insertRows(b.entries, b.startRow, b.numRows);
                a.info = b.info;
                a.info.populateData(a.numrows, a.numcols);
                break;
            case "insertleft":
            case "insertright":
                b = f.replaceWith;
                f.replaced = {
                    info: a.info,
                    startCol: b.startCol,
                    numCols: b.numCols
                };
                a.insertColumns(b.entries, b.startCol, b.numCols);
                a.info = b.info;
                a.info.populateData(a.numrows, a.numcols);
                break;
            case "deleterows":
                b = f.replaceWith;
                f.replaced = {
                    entries: a.deleteRows(b.startRow, b.numRows),
                    info: a.info,
                    startRow: b.startRow,
                    numRows: b.numRows
                };
                a.info = b.info;
                a.info.populateData(a.numrows, a.numcols);
                break;
            case "deletecolumns":
                b = f.replaceWith;
                f.replaced = {
                    entries: a.deleteColumns(b.startCol, b.numCols),
                    info: a.info,
                    startCol: b.startCol,
                    numCols: b.numCols
                };
                a.info = b.info;
                a.info.populateData(a.numrows, a.numcols);
                break;
            case "setPArrayAttrbs":
                f.replaced = a.info;
                a.info = f.replaceWith;
                a.info.populateData(a.numrows, a.numcols);
                break;
            default:
                if (a instanceof org.imatheq.formulaeditor.presentation.Row)
                    "insert" != f.action && (f.replaced = a.remove(b, d)),
                    null !== f.replaceWith && a.insert(b, f.replaceWith),
                    a.flatten();
                else if (a instanceof org.imatheq.formulaeditor.presentation.PArray)
                    if (d > b)
                        f.replaced = a.deleteValues(b, d - 1),
                        null !== f.replaceWith && (a.updateValues(f.replaceWith, b, d - 1),
                        f.replaceWith = null);
                    else
                        throw Error("Undo: PArray's endIndex <= startIndex.");
                else
                    a instanceof org.imatheq.formulaeditor.presentation.Lines && (d = a.getNumGrandChildren() - f.distanceToEnd,
                    d > b && (f.replaced = a.remove(b, d)),
                    null !== f.replaceWith && (a.insert(b, f.replaceWith),
                    f.replaceWith = null))
            }
            this.redoIndex++;
            null !== f.afterSelection && void 0 !== f.afterSelection ? this.editor.selection.setSelection(f.afterSelection) : this.editor.selection.clear();
            a = this.editor.getPosition(f.afterPosition);
            this.editor.cursor.setPosition(a);
            this.editor.setButtonStatus(f.afterButtonStatus);
            this.editor.cursor.updateEditTabButtons();
            this.editor.redraw(this.editor.selection.hasSelection)
        }
    }
})
}
)();
(function() {
var f = com.efmase.js.utilities.toolset;
org.imatheq.formulaeditor.Selection = $extend(Object, {
    editor: null,
    hasSelection: !1,
    parent: null,
    startIndex: 0,
    endIndex: 0,
    startPosition: null,
    endPosition: null,
    dimensions: null,
    initialize: function(a) {
        this.editor = a
    },
    clear: function() {
        var a = this.hasSelection;
        this.hasSelection = !1;
        this.startPosition = null;
        this.editor.canvas.clearBg();
        a && (document.selection ? document.selection.empty() : window.getSelection && !f.isMobile() && (this.editor.textbox.innerHTML = "",
        this.editor.textbox.value = ""));
        this.editor.isMobile ? this.editor.setKeyboardStatus() : (this.editor.textbox.innerHTML = "$",
        this.editor.textbox.value = "$")
    },
    selectAll: function() {
        var a = org.imatheq.formulaeditor.presentation
          , b = this.editor.presentation.children[0];
        if (!(1 == b.children.length && 1 == b.children[0].children.length && b.children[0].children[0]instanceof a.BlockSymbol)) {
            var d = b.children[b.children.length - 1]
              , g = {
                row: d,
                index: d.children.length
            };
            if (0 == d.index && 1 == g.index && d.children[0]instanceof a.BlockSymbol)
                return !1;
            a = this.getSelection({
                row: b.children[0],
                index: 0
            }, g);
            this.setSelection(a)
        }
    },
    setSelection: function(a) {
        this.startPosition = {
            row: a.startPosition.row,
            index: a.startPosition.index
        };
        this.endPosition = {
            row: a.endPosition.row,
            index: a.endPosition.index
        };
        this.hasSelection = !0;
        this.parent = a.parent;
        this.startIndex = a.startIndex;
        this.endIndex = a.endIndex;
        this.startIndexChain = a.startIndexChain;
        this.endIndexChain = a.endIndexChain;
        this.rightMove = a.rightMove;
        this.draw(a.dimensions);
        if (!this.editor.isMobile)
            if (this.editor.textbox.innerHTML = "$",
            this.editor.textbox.value = "$",
            f.isIE() || f.isFirefox()) {
                var b = this;
                setTimeout(function() {
                    b.editor.textboxSel = !0;
                    b.editor.textbox.select()
                }, 20)
            } else
                this.editor.textbox.select();
        this.editor.isMobile && this.editor.setKeyboardStatus()
    },
    updateSelection: function(a) {
        if (null === this.startPosition)
            throw Error("Selection.updateSelection: startPosition is null.");
        this.hasSelection = !0;
        this.parent = a.parent;
        this.startIndex = a.startIndex;
        this.endIndex = a.endIndex;
        this.startIndexChain = a.startIndexChain;
        this.endIndexChain = a.endIndexChain;
        this.rightMove = a.rightMove
    },
    hasSelectionOnPos: function(a) {
        var b = a.row.getIndexChain(a.index);
        return 0 >= a.row.compareIndexChain(b, this.startIndexChain) * a.row.compareIndexChain(b, this.endIndexChain)
    },
    getSelectionObject: function() {
        return this.hasSelection ? 1 == this.endIndexx - this.startIndex ? this.parent.children[this.startIndex] : null : null
    },
    getSelectionCopy: function() {
        return {
            hasSelection: this.hasSelection,
            parent: this.parent,
            startPosition: {
                row: this.startPosition.row,
                index: this.startPosition.index
            },
            endPosition: {
                row: this.endPosition.row,
                index: this.endPosition.index
            },
            startIndex: this.startIndex,
            endIndex: this.endIndex,
            startIndexChain: this.startIndexChain,
            endIndexChain: this.endIndexChain,
            rightMove: this.rightMove,
            dimensions: null
        }
    },
    draw: function(a) {
        this.editor.canvas.clearBg();
        if (null !== a) {
            a instanceof Array ? this.dimensions = a : (this.dimensions = [],
            this.dimensions.push(a));
            this.editor.cursor.hideCursor();
            var b;
            for (a = 0; a < this.dimensions.length; a++) {
                var d = {
                    width: this.dimensions[a].width,
                    height: this.dimensions[a].height + 1,
                    left: this.dimensions[a].left,
                    top: this.dimensions[a].top
                };
                if (f.isMobile())
                    if (0 == a)
                        var g = b = d.top + d.height;
                    else
                        d.top + d.height < b && (b = d.top + d.height),
                        d.top + d.height > g && (g = d.top + d.height);
                this.editor.canvas.drawBox(d, "#66C", 1, "rgba(160,160,255,0.5)", !0)
            }
            f.isMobile() && (this.drawCaret("start"),
            this.drawCaret("end"))
        }
    },
    drawCaret: function(a) {
        a = this.editor.getPosition("start" == a ? this.startIndexChain : this.endIndexChain);
        a = this.editor.cursor.getDimensions({}, a);
        this.editor.canvas.drawCaret(a)
    },
    isOnCaret: function(a, b, d) {
        var g = this.editor.cursor.getDimensions({}, "start" == a ? this.startPosition : this.endPosition);
        a = f.caretSize;
        var k = g.x;
        g = g.bottom;
        return b > k - a - 2 && b < k + a + 2 && d > g + 2 - 2 && d < g + 2 + 3 * a + 2
    },
    redraw: function() {
        var a = org.imatheq.formulaeditor.presentation;
        this.editor.canvas.clearBg();
        a = this.parent instanceof a.PArray ? this.parent.getSelectedArea(this.startIndex, this.endIndex - 1) : this.parent instanceof a.Lines ? this.parent.getSelectedArea(this.startIndexChain, this.endIndexChain) : this.parent.getSelectedArea(this.startIndex, this.endIndex);
        this.draw(a)
    },
    equals: function(a) {
        return this.parent === a.parent && this.startIndex == a.startIndex && this.endIndex == a.endIndex ? !0 : !1
    },
    getSelection: function(a, b) {
        var d = org.imatheq.formulaeditor.presentation;
        if (null === a || void 0 === a)
            a = this.editor.cursor.position;
        if (a.row === b.row && a.index === b.index)
            return null;
        var g = a.row.getAncestors(a.index)
          , k = b.row.getAncestors(b.index);
        i = g.length;
        for (j = k.length; 0 < i && 0 < j && g[i - 1] === k[j - 1]; )
            i--,
            j--;
        if (g[i]instanceof d.PArray && 0 != i && 0 != j) {
            if (2 > i && 2 > j)
                throw Error("Selection.getSelection: common Lines ancestor index < 2.");
            var e = Math.min(g[i - 1].index, k[j - 1].index)
              , h = Math.max(g[i - 1].index, k[j - 1].index)
              , l = e == g[i - 1].index
              , m = g[i - 1].getIndexChain(g[i - 2].index)
              , n = k[j - 1].getIndexChain(k[j - 2].index);
            return g[i].getSelection(a, b, e, h, m, n, l)
        }
        if (g[i]instanceof d.Lines) {
            if (2 > i || 2 > j)
                throw Error("Selection.getSelection: common Lines ancestor index < 2.");
            l = g[i - 1].index < k[j - 1].index;
            m = g[i - 1].getIndexChain(g[i - 2].index);
            n = k[j - 1].getIndexChain(k[j - 2].index);
            if (l) {
                e = g[i - 1].index;
                var p = g[i - 2].index;
                h = k[j - 1].index;
                var q = 2 == j ? k[j - 2].index : k[j - 2].index + 1
            } else
                e = k[j - 1].index,
                p = k[j - 2].index,
                h = g[i - 1].index,
                q = 2 == i ? g[i - 2].index : g[i - 2].index + 1,
                2 == j && 0 < p && k[j - 1].children[p - 1]instanceof d.NewlineSymbol && (e++,
                p = 0,
                this.editor.cursor.position.row = k[j].children[e],
                this.editor.cursor.position.index = 0);
            return g[i].getSelection(a, b, e, h, p, q, m, n, l)
        }
        g[i]instanceof d.Row || (i++,
        j++);
        if (!g[i]instanceof d.Row)
            return null;
        p = 0;
        0 < i && (p = g[i - 1].index);
        q = 0;
        0 < j && (q = k[j - 1].index);
        if (q > p && 1 != j)
            q++;
        else if (p > q && 1 != i)
            p++;
        else if (p == q && (1 != i || 1 != j))
            q++;
        else if (p == q && 0 == j)
            return this.editor.cursor.position = {
                row: b.row.children[b.index],
                index: 0
            },
            null;
        e = Math.min(p, q);
        h = Math.max(p, q);
        m = g[i].getIndexChain(p);
        n = k[j].getIndexChain(q);
        l = e == p;
        0 < e && p == e && 1 == i && g[i].children[e - 1]instanceof d.BlockSymbol && e--;
        p == h && 1 == i && g[i].children[h]instanceof d.BlockSymbol && h++;
        if (1 == h - e && g[i].children[e]instanceof d.BlockSymbol)
            return null;
        d = g[i].getSelectedArea(e, h);
        return {
            parent: g[i],
            startPosition: {
                row: a.row,
                index: a.index
            },
            endPosition: {
                row: b.row,
                index: b.index
            },
            startIndex: e,
            endIndex: h,
            startIndexChain: m,
            endIndexChain: n,
            rightMove: l,
            dimensions: d
        }
    },
    removeEndNewline: function() {
        var a = org.imatheq.formulaeditor.presentation;
        if (!(this.parent instanceof a.PArray)) {
            var b = this.editor.getPosition(this.endIndexChain);
            0 < b.index && b.row.children[b.index - 1]instanceof a.NewlineSymbol && (b.index--,
            this.endIndexChain = b.row.getIndexChain(b.index),
            this.endIndex--)
        }
    },
    remove: function(a) {
        if (!this.hasSelection)
            return null;
        var b = org.imatheq.formulaeditor.presentation;
        a = this.getSelectionCopy();
        var d = this.editor.getButtonStatus();
        if (this.parent instanceof b.Row && 0 < this.endIndex && this.parent.children[this.endIndex - 1]instanceof b.NewlineSymbol) {
            var g = this.parent.parent;
            this.startIndex = g.getGrandChildIndex(this.parent.index, this.startIndex);
            this.endIndex = g.getGrandChildIndex(this.parent.index, this.endIndex);
            this.parent = g
        }
        if (this.parent instanceof b.Row) {
            g = this.parent;
            var k = g.children.length - this.endIndex
              , e = this.editor.cursor.position
              , h = e.row.getIndexChain(e.index);
            e = this.endIndex;
            this.parent.updateKeyword(this.editor, this.startIndex, "all", a, a);
            this.parent.updateKeyword(this.editor, e, "all", a, a);
            var l = g.remove(this.startIndex, this.endIndex);
            g.isEmpty() && (e = l.children[this.endIndex - 1],
            b = new b.BlockSymbol(null,e.bold,e.mathcolor,null,e.forcedItalic,e.autoItalic),
            g.insert(0, b));
            b = this.parent.getIndexChain(this.startIndex);
            e = {
                row: this.parent,
                index: this.startIndex
            };
            this.clear();
            this.editor.cursor.setPosition(e);
            this.editor.actions.addAction("delete", e, h, b, l, null, k, a, null, d, null);
            this.editor.redraw();
            return !1
        }
        if (this.hasSelection && this.parent instanceof b.PArray)
            return g = this.parent,
            e = {
                row: this.editor.cursor.position.row,
                index: this.editor.cursor.position.index
            },
            h = e.row.getIndexChain(e.index),
            b = e.row.getIndexChain(e.index),
            e.row = this.parent,
            e.index = this.startIndex,
            k = g.children.length - this.endIndex,
            l = g.deleteValues(this.startIndex, this.endIndex - 1),
            this.clear(),
            this.editor.actions.addAction("delete", e, h, b, l, null, k, a, a, d, null),
            this.editor.redraw(!0),
            !1;
        if (this.parent instanceof b.Lines) {
            g = this.parent;
            e = this.editor.cursor.position;
            h = this.editor.getPosition(this.startIndexChain);
            k = this.editor.getPosition(this.endIndexChain);
            h.row.updateKeyword(this.editor, h.index, "all", a, a);
            k.row.updateKeyword(this.editor, k.index, "all", a, a);
            var m = null;
            if (!this.rightMove && 0 < k.index && k.row.children[k.index - 1]instanceof b.NewlineSymbol) {
                k = this.parent.children[k.row.index + 1];
                if (null === k || void 0 === k)
                    throw Error("Error in Selection.remove(), no line after newline");
                m = {
                    row: k,
                    index: 0
                }
            }
            null !== m && (e = m);
            h = e.row.getIndexChain(e.index);
            k = g.getNumGrandChildren() - this.endIndex;
            l = g.remove(this.startIndex, this.endIndex);
            g.isEmpty() && g.insert();
            e = g.getGrandChild(this.startIndex);
            0 < e.index && e.parent.children[e.index - 1]instanceof b.NewlineSymbol && e.index--;
            b = this.rightMove ? this.startIndexChain : this.endIndexChain;
            e = this.editor.getPosition(b);
            null !== m && (b = e.row.getIndexChain(e.index),
            e = {
                row: e.row,
                index: e.index
            });
            this.editor.cursor.setPosition(e);
            e = {
                row: g,
                index: this.startIndex
            };
            this.clear();
            this.editor.actions.addAction("delete", e, h, b, l, null, k, a, null, d, null);
            this.editor.redraw();
            return !1
        }
    },
    copy: function() {
        if (!this.hasSelection)
            return null;
        this.parent instanceof org.imatheq.formulaeditor.presentation.Row && this.parent.remove(Math.min(this.startIndex, this.endIndex), Math.max(this.startIndex, this.endIndex)).copy()
    },
    setSelSymbFontAttrbs: function(a) {
        if (!this.hasSelection)
            return null;
        var b = org.imatheq.formulaeditor.presentation
          , d = this.getSelectionCopy();
        this.editor.getButtonStatus();
        if (this.parent instanceof b.Row) {
            var g = this.endIndex;
            this.parent.updateKeyword(this.editor, this.startIndex, "right", d, d);
            this.parent.updateKeyword(this.editor, g, "left", d, d);
            var k = this.parent;
            b = k.remove(this.startIndex, this.endIndex);
            g = b.copy();
            g.setSymbFontAttrbs(a);
            for (a = 0; a < g.children.length; a++)
                moveright = k.insert(this.startIndex + a, g.children[a], 0 === a);
            g = {
                row: k,
                index: this.startIndex
            };
            var e = k.children.length - this.endIndex
              , h = g.row.getIndexChain(g.index)
              , l = h;
            a = this.editor.getButtonStatus();
            this.editor.actions.addAction("setSymbFontAttrbs", g, h, l, b, null, e, d, d, a, null);
            this.editor.redraw(!0);
            return !1
        }
        if (this.hasSelection && this.parent instanceof b.PArray)
            return k = this.parent,
            g = {
                row: this.editor.cursor.position.row,
                index: this.editor.cursor.position.index
            },
            h = g.row.getIndexChain(g.index),
            l = g.row.getIndexChain(g.index),
            g.row = this.parent,
            g.index = this.startIndex,
            e = k.children.length - this.endIndex,
            b = k.setSymbFontAttrbs(a, this.startIndex, this.endIndex - 1),
            a = this.editor.getButtonStatus(),
            this.editor.actions.addAction("setSymbFontAttrbs", g, h, l, b, null, e, d, d, a, null),
            this.editor.redraw(!0),
            !1;
        if (this.parent instanceof b.Lines) {
            k = this.parent;
            g = this.editor.cursor.position;
            e = this.editor.getPosition(this.endIndexChain);
            h = null;
            if (!this.rightMove && 0 < e.index && e.row.children[e.index - 1]instanceof b.NewlineSymbol) {
                b = this.parent.children[e.row.index + 1];
                if (null === b || void 0 === b)
                    throw Error("Error in Selection.remove(), no line after newline");
                h = {
                    row: b,
                    index: 0
                }
            }
            null !== h && (g = h);
            h = g.row.getIndexChain(g.index);
            e = k.getNumGrandChildren() - this.endIndex;
            b = k.setSymbFontAttrbs(a, this.startIndex, this.endIndex);
            g = {
                row: k,
                index: this.startIndex
            };
            a = this.editor.getButtonStatus();
            this.editor.actions.addAction("setSymbFontAttrbs", g, h, h, b, null, e, d, d, a, null);
            this.editor.redraw(!0);
            return !1
        }
    },
    getMathML: function() {
        if (!this.hasSelection)
            return null;
        var a = org.imatheq.formulaeditor.presentation
          , b = this.parent
          , d = "";
        try {
            return b instanceof a.Row ? d = '<math xmlns="http://www.w3.org/1998/Math/MathML"' + (this.editor.in_attrbs ? this.editor.in_attrbs : "") + ">" + b.getMathML(!1, this.startIndex, this.endIndex) + "</math>" : b instanceof a.PArray ? d = b.getSelectionMathML(this.editor.getExpressionParsingContext(), this.startIndex, this.endIndex - 1) : b instanceof a.Lines && (d = b.getSelectionMathML(this.editor.getExpressionParsingContext(), this.startIndex, this.endIndex - 1)),
            d
        } catch (g) {
            throw Error('<math xmlns="http://www.w3.org/1998/Math/MathML"><mtext>' + g.toString() + "</mtext></math>");
        }
    }
})
}
)();
(function() {
org.imatheq.formulaeditor.EventHandler = $extend(Object, {
    mouseIsDown: !1,
    initialize: function() {
        var f = this;
        if (this.onkeydown instanceof Function) {
            var a = window.onkeydown;
            document.onkeydown = function(n) {
                n || (n = window.event);
                return f.onkeydown(n) && a && a(n)
            }
        }
        this.onkeyup instanceof Function && (a = window.onkeyup,
        document.onkeyup = function(n) {
            n || (n = window.event);
            return f.onkeyup(n) && a && a(n)
        }
        );
        if (this.onkeypress instanceof Function) {
            var b = window.onkeypress;
            document.onkeypress = function(n) {
                n || (n = window.event);
                "charCode"in n || (n.charCode = n.keyCode);
                return f.onkeypress(n) && b && b(n)
            }
        }
        this.oncontextmenu instanceof Function && (b = window.oncontextmenu,
        document.oncontextmenu = function(n) {
            n || (n = window.event);
            return f.oncontextmenu(n) && b && b(n)
        }
        );
        this.onselectstart instanceof Function && (a = window.onselectstart,
        document.onselectstart = function(n) {
            n || (n = window.event);
            var p = n.target || n.srcElement;
            return "efmase_focus_textarea" == p.className || "EFMASE_Container" == p.className ? f.onselectstart(n) && a && a(n) : a && a(n)
        }
        );
        if (this.onmousedown instanceof Function) {
            var d = window.onclick
              , g = window.ontouchstart;
            document.onmousedown = function(n) {
                n || (n = window.event);
                return 1 == n.which || 0 == n.button ? (f.mouseIsDown = !0,
                f.onmousedown(n) && d && d(n)) : !0
            }
            ;
            document.addEventListener("touchstart", function(n) {
                n || (n = window.event);
                var p = f.rewriteTouchEvent(n);
                p = f.onmousedown(p) && g && g(n);
                var q = org.imatheq.formulaeditor.FormulaEditor.getEditor();
                (q.onCursorBar || q.onStartBar || q.onEndBar) && n.preventDefault();
                return p
            }, {
                passive: !1
            })
        }
        if (this.onmousemove instanceof Function) {
            var k = window.onmousemove
              , e = window.ontouchmove;
            document.onmousemove = function(n) {
                if (!f.mouseIsDown)
                    return !0;
                n || (n = window.event);
                return 0 == n.which ? f.mouseIsDown = !1 : f.onmousemove(n) && k && k(n)
            }
            ;
            document.addEventListener("touchmove", function(n) {
                n || (n = window.event);
                var p = f.onmousemove(f.rewriteTouchEvent(n)) && e && e(n)
                  , q = org.imatheq.formulaeditor.FormulaEditor.getEditor();
                (q.onCursorBar || q.onStartBar || q.onEndBar) && n.preventDefault();
                return p
            }, {
                passive: !1
            })
        }
        if (com.efmase.js.utilities.toolset.isIE() && this.onpaste instanceof Function) {
            var h = window.onpaste;
            document.onpaste = function(n) {
                n || (n = window.event);
                return f.onpaste(n) && h && h(n)
            }
        }
        if (this.onmouseup instanceof Function) {
            h = window.onclick;
            var l = window.ontouchend;
            document.onmouseup = function(n) {
                f.mouseIsDown = !1;
                n || (n = window.event);
                return f.onmouseup(n) && h && h(n)
            }
            ;
            document.addEventListener("touchend", function(n) {
                n || (n = window.event);
                var p = org.imatheq.formulaeditor.FormulaEditor.getEditor()
                  , q = p.onCursorBar
                  , t = p.onStartBar;
                p = p.onEndBar;
                var r = f.onmouseup(f.rewriteTouchEvent(n)) && l && l(n);
                (q || t || p) && n.preventDefault();
                return r
            }, {
                passive: !1
            })
        }
        if (this.onresize instanceof Function) {
            var m = window.onresize;
            window.onresize = function(n) {
                n || (n = window.event);
                return f.onresize(n) && m && m(n)
            }
        }
    },
    rewriteTouchEvent: function(f) {
        var a = f.changedTouches[0];
        switch (f.type) {
        case "touchstart":
            var b = "mousedown";
            break;
        case "touchmove":
            b = "mousemove";
            break;
        case "touchend":
            b = "mouseup";
            break;
        default:
            return
        }
        var d = document.createEvent("MouseEvent");
        d.initMouseEvent(b, !0, !0, window, 1, a.screenX, a.screenY, a.clientX, a.clientY, !1, !1, !1, !1, 0, f.target || f.srcElement);
        d.imatheqadjust = !0;
        return d
    }
})
}
)();
(function() {
org.imatheq.formulaeditor.Services = {
    url: "/phrasebook/",
    perform: function(f, a, b, d) {
        var g = this.xmlValueOf;
        com.efmase.js.utilities.XMLHttp.post(this.url, {
            output: "xml",
            service: f,
            action: a,
            data: b
        }, function(k) {
            k = com.efmase.js.utilities.XML.parse(k);
            var e = k.documentElement.getElementsByTagName("status");
            0 === e.length ? alert("Error: no status element found in service response") : "ok" != g(e.item(0)) ? (k = k.documentElement.getElementsByTagName("error"),
            k = g(k.item(0)),
            alert("ERROR (while using service " + f + "/" + a + "): " + k)) : (k = k.documentElement.getElementsByTagName("data"),
            d(g(k.item(0))))
        })
    },
    openmath2gap: function(f, a) {
        return this.perform("gap", "translate_openmath_native", f, a)
    },
    xmlValueOf: function(f) {
        var a, b = [];
        switch (f.nodeType) {
        case 1:
            for (a = 0; a < f.childNodes.length; a++)
                b.push(this.xmlValueOf(f.childNodes[a]));
            return b.join("");
        case 2:
        case 3:
        case 4:
            return f.nodeValue;
        case 9:
            return this.xmlValueOf(f.Element)
        }
        return ""
    }
}
}
)();
$package("org.imatheq.formulaeditor.parsing.openmath");
(function() {
org.imatheq.formulaeditor.parsing.openmath.KeywordList = {}
}
)();
$package("org.imatheq.formulaeditor.presentation");
(function() {
org.imatheq.formulaeditor.presentation.SymbolAliases = {
    "\u2062": null,
    "\u2064": null
}
}
)();
(function() {
org.imatheq.formulaeditor.presentation.SymbolOnscreens = {
    "-": "\u2212",
    "\u20db": "\u2026",
    "\u203e": "\u2212",
    "\u02dc": "~",
    "\u0302": "^",
    "\u030c": "\u02c7",
    "\u2217": "*",
    "\u2016": "\u2225",
    "\u22c5": "\u00b7",
    "\u204e": "*",
    "\u03a5": "\u03d2",
    "\u02ca": "\u00b4",
    "\u23dc": "\u2322",
    "\u23dd": "\u2323",
    "(1": "\u00a1",
    ")1": "\u00a2",
    "[1": "\u00a3",
    "]1": "\u00a4",
    "\u230a1": "\u00a5",
    "\u230b1": "\u00a6",
    "\u23081": "\u00a7",
    "\u23091": "\u00a8",
    "{1": "\u00a9",
    "}1": "\u00aa",
    "<1": "\u00ad",
    ">1": "\u00ae",
    "|m": "6",
    "\u2225m": "w",
    "/1": "\u00b1",
    "\\1": "\u00b2",
    "(2": "\u00b3",
    ")2": "\u00b4",
    "(3": "\u00b5",
    ")3": "\u00b6",
    "[3": "\u2219",
    "]3": "\u00b8",
    "\u230a3": "\u00b9",
    "\u230b3": "\u00ba",
    "\u23083": "\u00bb",
    "\u23093": "\u00bc",
    "{3": "\u00bd",
    "}3": "\u00be",
    "<3": "\u00bf",
    ">3": "\u00c0",
    "/3": "\u00c1",
    "\\3": "\u00c2",
    "(4": "\u00c3",
    ")4": "!",
    "[4": '"',
    "]4": "#",
    "\u230a4": "$",
    "\u230b4": "%",
    "\u23084": "&",
    "\u23094": "'",
    "{4": "(",
    "}4": ")",
    "<4": "*",
    ">4": "+",
    "/4": ",",
    "\\4": "-",
    "/2": ".",
    "\\2": "/",
    "(u": "0",
    ")u": "1",
    "[u": "2",
    "]u": "3",
    "[l": "4",
    "]l": "5",
    "[m": "6",
    "]m": "7",
    "{u": "8",
    "}u": "9",
    "{l": ":",
    "}l": ";",
    "{m": "<",
    "}m": "=",
    "{c": ">",
    "}c": ">",
    "(l": "@",
    ")l": "A",
    "(m": "B",
    ")m": "C",
    "<2": "D",
    ">2": "E",
    "\u222e": "I",
    "\u2211": "X",
    "\u220f": "Y",
    "\u222b": "Z",
    "\u22c3": "[",
    "\u22c2": "\\",
    "\u22c0": "^",
    "\u22c1": "_",
    "\u2210": "a",
    "\u222c": "\u2018",
    "\u222d": "\u2019",
    "\u222f": "\u201c",
    "\u2230": "\u201d",
    "[2": "h",
    "]2": "i",
    "\u230a2": "j",
    "\u230b2": "k",
    "\u23082": "l",
    "\u23092": "m",
    "{2": "n",
    "}2": "o",
    "\u23221": "\u00a1",
    "\u23222": "\u00b3",
    "\u23224": "\u00c3",
    "\u2322l": "@",
    "\u2322r": "0",
    "~1": "e",
    "\u2194bl": "\u00c7",
    "\u2194l": "\u00cd",
    "\u23de1": "\u00a9",
    "\u23de4": "(",
    "\u23del": ":",
    "\u21bcm": "\u011a",
    "\u21bcl": "\u010e",
    "\u2190m": "\u011a",
    "\u2190l": "\u0118",
    "\u23231": "\u00a2",
    "\u23232": "\u00b4",
    "\u23234": "!",
    "\u2323l": "A",
    "\u2323r": "1",
    "~2": "f",
    "\u2194br": "\u0106",
    "\u2194r": "\u00ce",
    "\u23df1": "\u00aa",
    "\u23df4": ")",
    "\u23dfl": ";",
    "\u21c0m": "\u011a",
    "\u21c0r": "\u0110",
    "\u2192m": "\u011a",
    "\u2192r": "\u00cb",
    "\u23223": "\u00b5",
    "\u2322m": "B",
    "~3": "g",
    "\u2194bm": "?",
    "\u2194m": "\u011a",
    "^1": "b",
    "\u23de3": "\u00bd",
    "\u23der": "8",
    "\u2212m": "\u2014",
    "\u00afm": "\u2014",
    "\u02d81": "\u0139",
    "\u23233": "\u00b6",
    "\u2323m": "C",
    "\u21d0bl": "\u00c4",
    "\u02c71": "\u201c",
    "\u23df3": "\u00be",
    "\u23dfr": "9",
    "\u033fm": "\u0150",
    _m: "\u2122",
    "\u02d82": "\u013a",
    "^2": "c",
    "\u2192br": "\u0106",
    "\u21d0bm": "w",
    "^3": "d",
    "\u23dem": "<",
    "\u02d83": "\u0143",
    "\u02c72": "\u201d",
    "\u2192bm": "?",
    "\u21d2br": "~",
    "\u02c73": "\u2022",
    "\u23dfm": "=",
    "\u21d4br": "\u010c",
    "\u2190bl": "y",
    "\u21d2bm": "w",
    "\u23dec": "\u2018",
    "\u21d4bl": "\u00c9",
    "\u23de2": "n",
    "\u2190bm": "?",
    "\u23dfc": "\u2019",
    "\u21d4bm": "w",
    "\u23df2": "o",
    "\u03bf": "o"
}
}
)();
(function() {
org.imatheq.formulaeditor.presentation.Node = $extend(Object, {
    editor: null,
    parent: null,
    index: null,
    children: [],
    dimensions: null,
    highlight: !1,
    slowDelete: !1,
    onBaseline: !0,
    firstRow: null,
    defCursorPos: null,
    forcedItalic: null,
    autoItalic: null,
    bold: null,
    mathcolor: null,
    in_mathvariant: null,
    in_mathcolor: null,
    in_attrbs: null,
    initialize: function() {
        this.children = Array.prototype.slice.call(arguments);
        this.updateChildren()
    },
    isEmbellished: function() {
        return 0 < this.children.length && this.children[0].isEmbellished()
    },
    getFontSizeData: function(f, a, b) {
        for (var d = 0; d < this.children.length; d++)
            this.children[d].getFontSizeData(f, a, b)
    },
    getSymbol: function() {
        for (var f = this; !(f instanceof org.imatheq.formulaeditor.presentation.Symbol) && 0 < f.children.length && f.children[0].isEmbellished(); )
            f = f.getSymbol();
        return f instanceof org.imatheq.formulaeditor.presentation.Symbol ? f : null
    },
    getSymbFontAttrbs: function() {
        return {
            bold: this.bold,
            forcedItalic: this.forcedItalic,
            autoItalic: this.autoItalic,
            mathcolor: this.mathcolor
        }
    },
    setSymbFontAttrbs: function(f) {
        if (0 < this.children.length && 0 < Object.keys(f).length && f.constructor === Object)
            for (var a = 0; a < this.children.length; a++)
                this.children[a].setSymbFontAttrbs(f);
        for (var b in f)
            switch (a = f[b],
            b) {
            case "bold":
                this.bold = a;
                break;
            case "forcedItalic":
                (this.forcedItalic = a) && void 0 !== f.autoItalic && f.autoItalic && sllert("Error in Node.setSymbFontAttrbs: forceItalic and autoItalic values are conflict");
                break;
            case "autoItalic":
                this.autoItalic = a;
                break;
            case "mathcolor":
                this.mathcolor = a;
                break;
            case "mtext":
                this.setMtext && this.setMtext(a)
            }
    },
    isAncestorOf: function(f) {
        if (null === f.parent || void 0 === f.parent)
            return !1;
        if (f === this)
            return !0;
        for (f = f.parent; null !== f && void 0 != f; ) {
            if (f === this)
                return !0;
            f = f.parent
        }
        return !1
    },
    getAncestorOf: function(f) {
        for (; null !== f.parent && f.parent !== this; )
            f = f.parent;
        return f.parent === this ? f : null
    },
    getAncestors: function(f) {
        var a = [];
        for (f = f == this.children.length ? {
            parent: this,
            index: f
        } : this.children[f]; null !== f && void 0 !== f; )
            a.push(f),
            f = f.parent;
        return a
    },
    getIndexChain: function(f) {
        indexChain = [];
        indexChain.push(f);
        for (f = this; null !== f && void 0 !== f && null !== f.index && void 0 !== f.index; )
            indexChain.push(f.index),
            f = f.parent;
        return indexChain
    },
    compareIndexChain: function(f, a) {
        for (var b = f.length, d = a.length, g = Math.min(b, d), k = 0; k < g && f[b - 1 - k] == a[d - 1 - k]; )
            k++;
        return k == g ? b - d : f[b - 1 - k] - a[d - 1 - k]
    },
    clone: function() {
        var f = function() {};
        f.prototype = Object.getPrototypeOf(this);
        f = new f;
        f.initialize.apply(f, arguments);
        f.bold = this.bold;
        f.forcedItalic = this.forcedItalic;
        f.autoItalic = this.autoItalic;
        f.mathcolor = this.mathcolor;
        for (x in this)
            !Object.prototype.hasOwnProperty.call(this, x) || this[x]instanceof Function || this[x]instanceof Object || (f[x] = this[x]);
        return f
    },
    copy: function() {
        return this.clone.apply(this, this.copyArray(this.children))
    },
    copyArray: function(f) {
        for (var a = [], b = 0; b < f.length; b++)
            f[b]instanceof Array ? a.push(this.copyArray(f[b])) : a.push(f[b].copy());
        return a
    },
    canDelete: function(f) {
        return !this.slowDelete
    },
    draw: function(f, a, b, d, g) {
        throw Error("abstract method called");
    },
    getMathML: function(f) {
        throw Error("abstract method called");
    },
    onchange: function(f) {
        if (null !== this.parent)
            this.parent.onchange(this)
    },
    onkeypress: function(f, a) {},
    onmousedown: function(f, a, b, d) {
        return !0
    },
    flatten: function() {
        for (var f = 0; f < this.children.length; f++)
            this.children[f] ? this.children[f].flatten ? this.children[f].flatten() : alert("no flatten in : " + f + ".") : alert("no child at :" + f)
    },
    updateChildren: function(f) {
        if (null === f || void 0 === f)
            f = 0;
        for (; f < this.children.length; f++)
            this.children[f] ? (this.children[f].parent = this,
            this.children[f].index = f) : alert("empty child : " + f + ".")
    },
    getCursorPosition: function(f, a, b) {
        return null !== this.parent ? a < this.dimensions.left + this.dimensions.width / 2 ? this.parent.getPrecedingCursorPosition(f, this.index + 1, !1) : this.parent.getFollowingCursorPosition(f, this.index, !1) : null
    },
    getFirstCursorPosition: function(f, a, b) {
        return null !== this.parent ? this.parent.getFirstCursorPosition(f, null, b) : null
    },
    getLastCursorPosition: function(f, a, b) {
        return null !== this.parent ? this.parent.getLastCursorPosition(f, null, b) : null
    },
    getFollowingCursorPosition: function(f, a, b) {
        return null
    },
    getPrecedingCursorPosition: function(f, a) {
        return null
    },
    getLowerCursorPosition: function(f, a, b, d) {
        var g = org.imatheq.formulaeditor.presentation;
        return null !== this.parent ? (null === a || void 0 === a) && this.parent instanceof g.Row ? this.index == this.parent.children.length - 1 && Math.abs(this.dimensions.left - b) > Math.abs(this.dimensions.left + this.dimensions.width - b) ? {
            row: this.parent,
            index: this.index + 1
        } : {
            row: this.parent,
            index: this.index
        } : this.parent.getLowerCursorPosition(f, this.index, b, d) : null
    },
    getHigherCursorPosition: function(f, a, b, d) {
        var g = org.imatheq.formulaeditor.presentation;
        return null !== this.parent ? (null === a || void 0 === a) && this.parent instanceof g.Row ? this.index == this.parent.children.length - 1 && Math.abs(this.dimensions.left - b) > Math.abs(this.dimensions.left + this.dimensions.width - b) ? {
            row: this.parent,
            index: this.index + 1
        } : {
            row: this.parent,
            index: this.index
        } : this.parent.getHigherCursorPosition(f, this.index, b, d) : null
    },
    toString: function() {
        if (this.value)
            return this.value;
        if (this.children) {
            for (var f = "[ ", a = 0; a < this.children.length; a++)
                f += this.children[a],
                a < this.children.length - 1 && (f += ", ");
            return f + " ]"
        }
    },
    maxDimensions: function(f, a, b) {
        var d = {
            top: a,
            left: f,
            width: 0,
            height: 0
        };
        for (f = 0; f < b.length; f++) {
            a = Math.min(d.top, b[f].top);
            var g = Math.max(d.top + d.height, b[f].top + b[f].height);
            var k = Math.min(d.left, b[f].left);
            d = Math.max(d.left + d.width, b[f].left + b[f].width);
            d = {
                top: a,
                left: k,
                width: d - k,
                height: g - a
            }
        }
        return d
    },
    setHighlight: function(f) {
        if (!0 === f || !1 === f)
            this.highlight = f;
        if (!1 === f && 0 < this.children.length)
            for (f = 0; f < this.children.length; f++)
                this.children[f].setHighlight(!1)
    }
})
}
)();
(function() {
org.imatheq.formulaeditor.presentation.Symbol = $extend(org.imatheq.formulaeditor.presentation.Node, {
    value: null,
    onscreen: null,
    keyword: null,
    lspace: null,
    rspace: null,
    mtext: !1,
    mo: !1,
    mn: !1,
    doubleStruck: !1,
    script: !1,
    fraktur: !1,
    initialize: function() {
        if (0 < arguments.length) {
            arguments[0]instanceof Array ? (this.value = arguments[0][0],
            1 < arguments[0].length && (this.onscreen = arguments[0][1])) : this.value = arguments[0];
            var f = org.imatheq.formulaeditor.presentation.SymbolAliases;
            void 0 !== f[this.value] && null !== f[this.value] && (this.value = f[this.value]);
            f = org.imatheq.formulaeditor.presentation.SymbolOnscreens;
            null === this.onscreen && void 0 !== f[this.value] && null !== f[this.value] && (this.onscreen = f[this.value])
        }
        13 < arguments.length && null !== arguments[13] && void 0 !== arguments[13] && (this.fraktur = arguments[13]);
        12 < arguments.length && null !== arguments[12] && void 0 !== arguments[12] && (this.script = arguments[12]);
        11 < arguments.length && null !== arguments[11] && void 0 !== arguments[11] && (this.doubleStruck = arguments[11]);
        10 < arguments.length && null !== arguments[10] && void 0 !== arguments[10] && (this.mn = arguments[10]);
        9 < arguments.length && null !== arguments[9] && void 0 !== arguments[9] && (this.mo = arguments[9]);
        8 < arguments.length && null !== arguments[8] && void 0 !== arguments[8] && (this.rspace = arguments[8]);
        7 < arguments.length && null !== arguments[7] && void 0 !== arguments[7] && (this.lspace = arguments[7]);
        6 < arguments.length && null !== arguments[6] && void 0 !== arguments[6] && (this.keyword = arguments[6]);
        this.bold = 1 < arguments.length ? null !== arguments[1] && void 0 !== arguments[1] ? arguments[1] : !1 : !1;
        this.mathcolor = 2 < arguments.length ? null !== arguments[2] && void 0 !== arguments[2] ? arguments[2] : "#000000" : "#000000";
        3 < arguments.length && null !== arguments[3] && void 0 !== arguments[3] && (this.mtext = arguments[3]);
        4 < arguments.length && null !== arguments[4] && void 0 !== arguments[4] && (this.forcedItalic = arguments[4]);
        5 < arguments.length && null !== arguments[5] && void 0 !== arguments[5] && (this.autoItalic = arguments[5],
        "auto" == this.autoItalic && (f = org.imatheq.formulaeditor.FormulaEditor.getEditor(),
        null == f ? alert("Error symbol.initialize: failed to get editor") : (this.autoItalic = f.isAutoItalic(),
        this.autoItalic || (this.forcedItalic = !0))),
        this.autoItalic && (this.forcedItalic = !1));
        if (0 < arguments.length) {
            f = org.imatheq.formulaeditor.FormulaEditor.getEditor();
            if (null === this.autoItalic || void 0 === this.autoItalic)
                this.autoItalic = null !== f && void 0 !== f ? f.isAutoItalic() : (new org.imatheq.formulaeditor.Options).getOption("defAutoItalic");
            if (null === this.forcedItalic || void 0 === this.forcedItalic)
                this.forcedItalic = null !== f && void 0 !== f ? f.isForcedItalic() : !1;
            if (null === this.bold || void 0 === this.bold)
                this.bold = null !== f && void 0 !== f ? f.isBold() : !1
        }
    },
    isSymbolAutoItalic: function() {
        var f = !0
          , a = org.imatheq.formulaeditor.presentation.SymbolOnscreens
          , b = this.value;
        if (this.mo || this.mn || this.mtext)
            return !1;
        null === this.onscreen && void 0 !== a[b] && null !== a[b] && (b = a[b]);
        if (null !== this.keyword || "0" <= b && "9" >= b || void 0 !== org.imatheq.formulaeditor.parsing.expression.MOList[b] || -1 != org.imatheq.formulaeditor.parsing.expression.NonItalicMiList.indexOf(b) || void 0 !== org.imatheq.formulaeditor.parsing.expression.RevList[b])
            f = !1;
        return f
    },
    getStyleString: function() {
        var f = "";
        this.doubleStruck ? f = "double-struck" : this.script ? f = (this.bold ? "bold-" : "") + "script" : this.fraktur ? f = (this.bold ? "bold-" : "") + "fraktur" : this.isSymbolAutoItalic() ? this.bold ? f = this.forcedItalic ? "bold-italic" : this.autoItalic ? "bold-italic" : "bold" : this.forcedItalic || this.autoItalic || (f = "normal") : f = this.forcedItalic ? this.bold ? "bold-italic" : "italic" : this.bold ? "bold" : "";
        "" != f && (f = ' mathvariant="' + f + '"');
        return f += null === this.mathcolor || "" == this.mathcolor || "null" == this.mathcolor || "#000000" == this.mathcolor ? "" : ' mathcolor="' + this.mathcolor + '"'
    },
    getItalicValue: function() {
        return this.autoItalic ? this.isSymbolAutoItalic(this.value) : this.forcedItalic
    },
    hasSameStyle: function(f, a) {
        var b = !0;
        if (this.mtext != f.mtext || this.mo != f.mo || this.mn != f.mn || this.doubleStruck != f.doubleStruck || this.script != f.script || this.fraktur != f.fraktur)
            return !1;
        null !== this.bold && null !== f.bold || alert("Error in hasSameStyle: bold is null");
        this.bold != f.bold && (b = !1);
        null !== this.mathcolor && null !== f.mathcolor || alert("Error in hasSameStyle: mathcolor is null");
        this.mathcolor != f.mathcolor && (b = !1);
        var d = org.imatheq.formulaeditor.parsing.expression.RevList[this.value]
          , g = org.imatheq.formulaeditor.parsing.expression.RevList[f.value];
        if (void 0 === d && void 0 !== g || void 0 !== d && void 0 === g || void 0 !== d && void 0 !== g && d.type != g.type)
            b = !1;
        if (null === this.keyword && null !== f.keyword || null !== this.keyword && null === f.keyword || null !== this.keyword && null !== f.keyword && this.keyword != f.keyword)
            b = !1;
        if (null === this.forcedItalic || null === this.autoItalic || null === f.forcedItalic || null === f.autoItalic)
            alert("Error in hasSameStyle: some italic para is null.");
        else {
            if (this.forcedItalic != f.forcedItalic)
                return !1;
            a && this.autoItalic != f.autoItalic && (b = !1)
        }
        return b
    },
    isEmbellished: function() {
        return void 0 !== org.imatheq.formulaeditor.parsing.expression.MOList[this.value]
    },
    setMtext: function(f) {
        this.mtext = f
    },
    copy: function() {
        return this.clone(null !== this.onscreen ? [this.value, this.onscreen] : this.value, this.bold, this.mathcolor, this.mtext, this.forcedItalic, this.autoItalic, this.keyword, this.lspace, this.rspace, this.mo, this.mn, this.doubleStruck, this.script, this.fraktur)
    },
    getFontSizeData: function(f, a, b, d) {
        var g = !1;
        if (null !== d && void 0 !== d && d || -1 !== org.imatheq.formulaeditor.parsing.expression.LargeopList.indexOf(k))
            g = !0;
        var k = this.value;
        g || null === this.onscreen || -1 != org.imatheq.formulaeditor.parsing.expression.LargeopList.indexOf(k) || (k = this.onscreen);
        d = 0;
        void 0 !== a.fontSizeModifier && null !== a.fontSizeModifier && (d = a.fontSizeModifier);
        a = this.getItalicValue();
        g && (a = !1);
        var e = null !== this.bold && void 0 !== this.bold ? this.bold : !1;
        g && (e = !1);
        g = f.canvas.getFontInfo(k, d, a, e);
        if (g.hasDimensions && (f = g.fontSizeGroup,
        g = g.bmpSize,
        k = org.imatheq.formulaeditor.MathCanvas.fontsByPosition,
        null === k[f] || void 0 === k[f] || null === k[f][g] || void 0 === k[f][g])) {
            if (null === b[f] || void 0 === b[f])
                b[f] = {};
            if (null === b[f][g] || void 0 === b[f][g])
                b[f][g] = ""
        }
    },
    draw: function(f, a, b, d, g, k) {
        var e = org.imatheq.formulaeditor.presentation
          , h = this.value;
        null !== this.onscreen && -1 == org.imatheq.formulaeditor.parsing.expression.LargeopList.indexOf(h) && (h = this.onscreen);
        var l = k;
        if (void 0 === k || null === k)
            l = {
                lspace: 0,
                rspace: 0
            };
        k = 0;
        void 0 !== a.fontSizeModifier && null !== a.fontSizeModifier && (k = a.fontSizeModifier);
        var m = this.getItalicValue();
        this.parent instanceof e.Row && 0 < this.index && this.parent.children[this.index - 1]instanceof e.Symbol && f.getFontSizeIdx(a.fontSizeModifier);
        f = f.drawSymbol(h, Math.round(b + 0 + l.lspace), Math.round(d), g, m, this.bold, this.mathcolor, k);
        return this.dimensions = {
            left: b + 0,
            top: f.top,
            width: f.width + l.lspace + l.rspace,
            height: f.height
        }
    }
})
}
)();
(function() {
org.imatheq.formulaeditor.presentation.Subsup = $extend(org.imatheq.formulaeditor.presentation.Node, {
    slowDelete: !0,
    onBaseline: !1,
    margin: 1,
    mtype: "msubsup",
    msubtype: "",
    uid: "",
    initialize: function() {
        this.children = [];
        if (0 < arguments.length) {
            this.mtype = arguments[0];
            var f = arguments[1];
            null !== f && void 0 !== f && this.children.push(f);
            f = arguments[2];
            null !== f && void 0 !== f && this.children.push(f);
            this.msubtype = 3 < arguments.length ? arguments[3] : "";
            this.uid = 4 < arguments.length ? arguments[4] : ""
        }
        this.updateChildren()
    },
    getFontSizeData: function(f, a, b) {
        var d = null
          , g = null;
        "msubsup" == this.mtype ? (g = this.children[0],
        d = this.children[1]) : "msub" == this.mtype ? d = this.children[0] : g = this.children[0];
        var k = {
            fontSizeModifier: 0
        }, e;
        for (e in a)
            k[e] = a[e];
        --k.fontSizeModifier;
        null !== g && g.getFontSizeData(f, k, b);
        null !== d && d.getFontSizeData(f, k, b)
    },
    draw: function(f, a, b, d, g, k) {
        var e = null
          , h = null;
        "msubsup" == this.mtype ? (h = this.children[0],
        e = this.children[1]) : "msub" == this.mtype ? e = this.children[0] : h = this.children[0];
        var l, m = org.imatheq.formulaeditor.presentation, n = {
            fontSizeModifier: 0
        };
        for (p in a)
            n[p] = a[p];
        --n.fontSizeModifier;
        var p = {
            lspace: 0,
            rspace: 0
        };
        var q = -1;
        if (this.parent instanceof m.Row)
            if ("mprescripts" == this.msubtype) {
                q = this.index + 1;
                m = this.uid;
                for (q < this.parent.children.length && (l = this.parent.children[q].draw(f, a, b, d, !0, p)); q < this.parent.children.length && "mprescripts" == this.parent.children[q].msubtype && this.parent.children[q].uid == m; )
                    q++;
                q >= this.parent.children.length && (q = -1)
            } else if ("mmultiscripts" == this.msubtype)
                for (q = this.index - 1,
                m = this.uid,
                0 <= q && (l = this.parent.children[q].dimensions); 0 <= q && "mprescripts" == this.parent.children[q].msubtype && this.parent.children[q] == m; )
                    q--;
            else {
                for (q = this.index - 1; 0 <= q && this.parent.children[q]instanceof m.Space; )
                    q--;
                0 <= q && (l = this.parent.children[q].dimensions)
            }
        0 <= q ? (a = q > this.index ? this.parent.children[q].draw(f, a, b, d, !0, p) : this.parent.children[q].dimensions,
        l = {
            left: l.left,
            top: a.top,
            width: l.width,
            height: a.height
        }) : (l = f.getXDimentions(n, b, d),
        l.left = b - l.width);
        a = null !== e && void 0 !== e ? e.draw(f, n, 0, 0, !0) : {
            left: 0,
            top: 0,
            width: 0,
            height: 0
        };
        m = null !== h && void 0 !== h ? h.draw(f, n, 0, 0, !0) : {
            left: 0,
            top: 0,
            width: 0,
            height: 0
        };
        var t;
        q = f.getXDimentions(n, b, d);
        var r = Math.round((l.height + q.height) / 2) - 2 * this.margin;
        p = d = r - Math.round(q.height / 2);
        a.height < r && (d = a.height - Math.round(q.height / 2));
        m.height < r && (p = m.height - Math.round(q.height / 2));
        q = 0;
        r = null;
        var u = l.left + l.width
          , z = t = u;
        "mprescripts" == this.msubtype && (u = Math.max(a.width, m.width),
        t = u - a.width,
        u -= m.width,
        t = b + t,
        z = b + u,
        u = Math.min(t, z));
        if (null !== e && void 0 !== e) {
            r = l.top + l.height + a.height - d;
            var B = r - a.height;
            q = a.width;
            B = Math.min(B, l.top)
        }
        null !== h && void 0 !== h && (B = l.top - m.height + p,
        null === r && (r = B + m.height),
        q = Math.max(q, m.width),
        r = Math.max(r, l.top + l.height));
        this.dimensions = {
            left: u,
            top: Math.min(B, l.top),
            width: q + k.rspace,
            height: r - B
        };
        if (!1 === g || null === g || void 0 === g)
            null !== e && void 0 !== e && e.draw(f, n, t, l.top + l.height - a.top - d, g),
            null !== h && void 0 !== h && h.draw(f, n, z, l.top - (m.height + m.top) + p, g);
        return this.dimensions
    },
    getCursorPosition: function(f, a, b) {
        if (a > this.dimensions.left && a < this.dimensions.left + this.dimensions.width - 1) {
            if (2 == this.children.length) {
                var d = this.children[0].dimensions;
                return b < (d.top + d.height + this.children[1].dimensions.top) / 2 ? this.children[0].getCursorPosition(f, a, b) : this.children[1].getCursorPosition(f, a, b)
            }
            return this.children[0].getCursorPosition(f, a, b)
        }
        return a <= this.dimensions.left ? null === this.parent || void 0 === this.parent ? null : this.parent.getPrecedingCursorPosition(f, this.index + 1, !1) : this.parent.getFollowingCursorPosition(f, this.index, !1)
    },
    getFollowingCursorPosition: function(f, a, b) {
        return null === a || void 0 === a ? this.children[0].getFollowingCursorPosition(f, null, b) : 0 == a && !0 === f.continuingNavigation && 2 == this.children.length ? this.children[1].getFollowingCursorPosition(f, null, b) : null !== this.parent ? b ? {
            row: this.parent,
            index: this.index + 1
        } : this.parent.getFollowingCursorPosition(f, this.index, b) : null
    },
    getPrecedingCursorPosition: function(f, a, b) {
        if (!0 === f.continuingNavigation && 2 == this.children.length) {
            if (null === a || void 0 === a)
                return this.children[1].getPrecedingCursorPosition(f, null, b);
            if (1 == a)
                return this.children[0].getPrecedingCursorPosition(f, null, b)
        }
        return null === a || void 0 === a ? this.children[0].getPrecedingCursorPosition(f, null, b) : null !== this.parent ? b ? {
            row: this.parent,
            index: this.index
        } : this.parent.getPrecedingCursorPosition(f, this.index, b) : null
    },
    getLowerCursorPosition: function(f, a, b, d) {
        return null === a || void 0 === a ? this.children[0].getLowerCursorPosition(f, null, b, d) : 0 === a && 2 == this.children.length ? this.children[1].getLowerCursorPosition(f, null, b, d) : null !== this.parent ? this.parent.getLowerCursorPosition(f, this.index, b, d) : null
    },
    getHigherCursorPosition: function(f, a, b, d) {
        return null === a || void 0 === a ? this.children[1].getHigherCursorPosition(f, null, b, d) : 1 == a ? this.children[0].getHigherCursorPosition(f, null, b, d) : null !== this.parent ? this.parent.getHigherCursorPosition(f, this.index, b, d) : null
    },
    copy: function() {
        var f = null
          , a = null;
        "msubsup" == this.mtype ? (a = this.children[0].copy(),
        f = this.children[1].copy()) : "msub" == this.mtype ? f = this.children[0].copy() : a = this.children[0].copy();
        return this.clone(this.mtype, f, a)
    },
    getMathML: function(f) {
        var a = "";
        "msubsup" == this.mtype ? a = this.children[1].getMathML(!0) + this.children[0].getMathML(!0) : "msub" == this.mtype ? (a = this.children[0].getMathML(!0),
        f && (a += "<none/>")) : (f && (a += "<none/>"),
        a += this.children[0].getMathML(!0));
        return a
    },
    getAltText: function(f) {
        var a = org.imatheq.formulaeditor.FormulaEditor.getEditor().altstrs
          , b = "mprescripts" == this.msubtype ? "pre" : "";
        if ("msubsup" == this.mtype) {
            var d = this.children[1].getAltText(!0)
              , g = this.children[1] && 1 < this.children[1].children.length ? 1 : 0;
            d = a[b + "subscript"][g].replace("$0$", d.trim());
            var k = this.children[0].getAltText(!0);
            g = this.children[0] && 1 < this.children[0].children.length ? 1 : 0;
            k = a[b + "superscript"][g].replace("$0$", k.trim())
        } else
            "msup" == this.mtype ? (k = this.children[0].getAltText(!0),
            g = this.children[0] && 1 < this.children[0].children.length ? 1 : 0,
            k = "mprescripts" == this.msubtype ? a[b + "superscript"][g].replace("$0$", k.trim()) : a.power[g].replace("$0$", k.trim()),
            d = "",
            f && (d = a[b + "subscript"][0].replace("$0$", a.blank.trim()))) : (k = "",
            f && (k = a[b + "superscript"][0].replace("$0$", a.blank.trim())),
            d = this.children[0].getAltText(!0),
            g = this.children[0] && 1 < this.children[0].children.length ? 1 : 0,
            d = "mprescripts" == this.msubtype ? a[b + "subscript"][g].replace("$0$", d.trim()) : a.subscript[g].replace("$0$", d.trim()));
        return d + k
    }
})
}
)();
(function() {
org.imatheq.formulaeditor.presentation.LargeOpSubsup = $extend(org.imatheq.formulaeditor.presentation.Node, {
    slowDelete: !0,
    onBaseline: !1,
    margin: 1,
    mtype: "msubsup",
    base: null,
    sub: null,
    sup: null,
    initialize: function() {
        this.children = [];
        0 < arguments.length && (this.mtype = arguments[0],
        this.base = arguments[1],
        this.sup = arguments[2],
        null !== this.sup && void 0 !== this.sup && this.children.push(this.sup),
        this.sub = arguments[3],
        null !== this.sub && void 0 !== this.sub && this.children.push(this.sub));
        this.updateChildren()
    },
    getFontSizeData: function(f, a, b) {
        var d = {
            fontSizeModifier: 0
        }, g;
        for (g in a)
            d[g] = a[g];
        --d.fontSizeModifier;
        null !== this.sup && this.sup.getFontSizeData(f, d, b);
        null !== this.sub && this.sub.getFontSizeData(f, d, b);
        this.base.getFontSizeData(f, a, b)
    },
    setSymbFontAttrbs: function(f) {
        this.base.setSymbFontAttrbs(f);
        this.setSymbFontAttrbs.parent.setSymbFontAttrbs.call(this, f)
    },
    draw: function(f, a, b, d, g) {
        var k = {
            fontSizeModifier: 0
        };
        for (e in a)
            k[e] = a[e];
        --k.fontSizeModifier;
        this.base.draw(f, a, 0, 0, !0);
        var e = null !== this.sub && void 0 !== this.sub ? this.sub.draw(f, k, 0, 0, !0) : {
            left: 0,
            top: 0,
            width: 0,
            height: 0
        };
        var h = null !== this.sup && void 0 !== this.sup ? this.sup.draw(f, k, 0, 0, !0) : {
            left: 0,
            top: 0,
            width: 0,
            height: 0
        };
        var l = 0;
        this.base.dimensions.bottomindent && (l = -this.base.dimensions.bottomindent);
        d = f.getXDimentions(k, b, d);
        var m = Math.round((this.base.dimensions.height + d.height) / 2) - 2 * this.margin
          , n = m - Math.round(d.height / 2)
          , p = n;
        e.height < m && (n = e.height - Math.round(d.height / 2));
        h.height < m && (p = h.height - Math.round(d.height / 2));
        d = d.top + Math.round(.4 * d.height - .5);
        m = -Math.round(this.base.dimensions.height / 2) - this.base.dimensions.top;
        this.dimensions = {
            left: b,
            top: d - (h.height - p) - Math.round(this.base.dimensions.height / 2),
            width: this.base.dimensions.width + this.margin + Math.max(e.width + l, h.width),
            height: this.base.dimensions.height + h.height + e.height - n - p
        };
        if (!1 === g || null === g || void 0 === g)
            this.base.draw(f, a, b, d + m, g),
            null !== this.sub && void 0 !== this.sub && this.sub.draw(f, k, this.base.dimensions.left + this.base.dimensions.width + l + this.margin, this.base.dimensions.top + this.base.dimensions.height - e.top - n, g),
            null !== this.sup && void 0 !== this.sup && this.sup.draw(f, k, this.base.dimensions.left + this.base.dimensions.width + this.margin, this.dimensions.top - h.top, g);
        return this.dimensions
    },
    getCursorPosition: function(f, a, b) {
        if (a > this.dimensions.left && a < this.dimensions.left + this.dimensions.width - 1) {
            if (2 == this.children.length) {
                var d = this.children[0].dimensions;
                return b < (d.top + d.height + this.children[1].dimensions.top) / 2 ? this.children[0].getCursorPosition(f, a, b) : this.children[1].getCursorPosition(f, a, b)
            }
            return this.children[0].getCursorPosition(f, a, b)
        }
        return a <= this.dimensions.left ? null === this.parent || void 0 === this.parent ? null : this.parent.getPrecedingCursorPosition(f, this.index + 1, !1) : this.parent.getFollowingCursorPosition(f, this.index, !1)
    },
    getFollowingCursorPosition: function(f, a, b) {
        return null === a || void 0 === a ? this.children[0].getFollowingCursorPosition(f, null, b) : null !== this.parent ? {
            row: this.parent,
            index: this.index + 1
        } : null
    },
    getPrecedingCursorPosition: function(f, a, b) {
        return null === a || void 0 === a ? this.children[0].getPrecedingCursorPosition(f, null, b) : null !== this.parent ? {
            row: this.parent,
            index: this.index
        } : null
    },
    getLowerCursorPosition: function(f, a, b, d) {
        return null === a || void 0 === a ? this.children[0].getLowerCursorPosition(f, null, b, d) : 0 === a && 2 == this.children.length ? this.children[1].getLowerCursorPosition(f, null, b, d) : null !== this.parent ? this.parent.getLowerCursorPosition(f, this.index, b, d) : null
    },
    getHigherCursorPosition: function(f, a, b, d) {
        return null === a || void 0 === a ? this.children[1].getHigherCursorPosition(f, null, b, d) : 1 == a ? this.children[0].getHigherCursorPosition(f, null, b, d) : null !== this.parent ? this.parent.getHigherCursorPosition(f, this.index, b, d) : null
    },
    getMathML: function() {
        var f = "<" + this.mtype + (this.in_attrbs ? this.in_attrbs : "") + (null === this.mathcolor || "" == this.mathcolor || "null" == this.mathcolor || "#000000" == this.mathcolor ? "" : ' mathcolor="' + this.mathcolor + '"') + "><mo>" + com.efmase.js.utilities.toolset.getEncodedStr(this.base) + "</mo>";
        if ("msub" == this.mtype || "msubsup" == this.mtype)
            f += this.sub.getMathML(!0);
        if ("msup" == this.mtype || "msubsup" == this.mtype)
            f += this.sup.getMathML(!0);
        return f += "</" + this.mtype + ">"
    },
    getAltText: function() {
        var f = org.imatheq.formulaeditor.FormulaEditor.getEditor()
          , a = f.getSymbolAltText(this.base.value);
        if ("msub" == this.mtype || "msubsup" == this.mtype) {
            var b = this.sub.children && 1 < this.sub.children.length ? 1 : 0;
            a += f.altstrs.subscript[b].replace("$0$", this.sub.getAltText().trim())
        }
        if ("msup" == this.mtype || "msubsup" == this.mtype)
            b = this.sup.children && 1 < this.sup.children.length ? 1 : 0,
            a += f.altstrs["msup" == this.mtype ? "power" : "superscript"][b].replace("$0$", this.sup.getAltText().trim());
        return a
    },
    copy: function() {
        return this.clone(this.mtype, this.base.copy(), this.sup.copy(), this.sub.copy())
    }
})
}
)();
(function() {
org.imatheq.formulaeditor.presentation.BlockSymbol = $extend(org.imatheq.formulaeditor.presentation.Symbol, {
    initialize: function() {
        this.value = "\u25a1";
        this.onscreen = "c";
        0 < arguments.length && null !== arguments[0] && void 0 != arguments[0] && (this.onscreen = arguments[0]);
        1 < arguments.length ? this.initialize.parent.initialize.call(this, this.value, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]) : this.initialize.parent.initialize.call(this, this.value)
    },
    copy: function() {
        return this.clone(this.onscreen)
    },
    draw: function(f, a, b, d, g) {
        var k = 0;
        void 0 !== a.fontSizeModifier && null !== a.fontSizeModifier && (k = a.fontSizeModifier);
        return this.dimensions = f.drawcBox(Math.round(b), Math.round(d), f.readonly ? !0 : g, this.onscreen, !0, !1, this.mathcolor, k)
    },
    isEmbellished: function() {
        return !1
    },
    getAltText: function() {
        return strs.blank
    }
})
}
)();
(function() {
org.imatheq.formulaeditor.presentation.NewlineSymbol = $extend(org.imatheq.formulaeditor.presentation.Symbol, {
    initialize: function() {
        this.value = "\n";
        this.onscreen = 1 == arguments.length ? arguments[0] : "a"
    },
    copy: function() {
        return this.clone(this.onscreen)
    },
    setMtext: function(f) {
        this.mtext = !1
    },
    draw: function(f, a, b, d, g) {
        return this.dimensions = (new org.imatheq.formulaeditor.presentation.Space("0.2em","0.5em","0.1em"," ")).draw(f, a, b, d, !0)
    }
})
}
)();
(function() {
org.imatheq.formulaeditor.presentation.Space = $extend(org.imatheq.formulaeditor.presentation.Symbol, {
    width: 0,
    height: 0,
    depth: 0,
    initialize: function() {
        var f = null;
        0 < arguments.length && (f = org.imatheq.formulaeditor.FormulaEditor.getEditor(),
        f = f.canvas,
        this.width = f.getEMSize(arguments[0]));
        1 < arguments.length && (this.height = f.getEMSize(arguments[1]));
        2 < arguments.length && (this.depth = f.getEMSize(arguments[2]));
        3 < arguments.length && (this.value = arguments[3]);
        4 < arguments.length && (this.mtext = arguments[4]);
        0 < arguments.length && this.initialize.parent.initialize.call(this, this.value)
    },
    copy: function() {
        return this.clone(this.width + "em", this.height + "em", this.depth + "em", this.value, this.mtext)
    },
    setMtext: function(f) {
        this.mtext = 0 <= this.width ? f : !1
    },
    getFontSizeData: function(f, a, b) {},
    draw: function(f, a, b, d, g) {
        g = 0;
        void 0 !== a.fontSizeModifier && null !== a.fontSizeModifier && (g = a.fontSizeModifier);
        a = Math.round(this.width * f.getFontUnitEm(g));
        var k = Math.round(this.height * f.getFontUnitEm(g))
          , e = Math.round(this.depth * f.getFontUnitEm(g));
        this.dimensions = f.drawFBox(Math.round(b), Math.round(d), !0, "x", !1, !1, "#000000", g);
        this.dimensions.top = this.dimensions.top + this.dimensions.height - k + e;
        this.dimensions.height = k - e;
        this.dimensions.width = 0 < a ? a : 0;
        this.dimensions.left = 0 < a ? this.dimensions.left : this.dimensions.left + a;
        return this.dimensions
    },
    getMathML: function() {
        if (this.mtext && 0 < this.width && .4 > this.width)
            return "&#x200A;";
        if (this.mtext && .4 <= this.width)
            return "&#x2007;";
        if (null !== this.value)
            return "<mo" + (this.in_attrbs ? this.in_attrbs : "") + ">" + com.efmase.js.utilities.toolset.getEncodedStr(this) + "</mo>";
        if (0 != this.width) {
            var f = '<mspace width="' + this.width + 'em"';
            0 != this.height && (f += ' height="' + this.height + 'em"');
            0 != this.depth && (f += ' depth="' + this.depth + 'em"');
            return f + (this.in_attrbs ? this.in_attrbs : "") + "/>"
        }
        return ""
    },
    getAltText: function() {
        return org.imatheq.formulaeditor.FormulaEditor.getEditor().getSymbolAltText("space")
    }
})
}
)();
(function() {
org.imatheq.formulaeditor.presentation.Alignmark = $extend(org.imatheq.formulaeditor.presentation.Space, {
    type: "maligngroup",
    groupalign: null,
    edge: null,
    initialize: function() {
        0 < arguments.length && (this.type = arguments[0],
        1 < arguments.length && ("maligngroup" == this.type ? this.groupalign = arguments[1] : this.edge = arguments[1]),
        this.initialize.parent.initialize.call(this, "0", "0", "0", " "))
    },
    getMathML: function() {
        var f = "<" + this.type;
        return f = "maligngroup" == this.type && this.groupalign ? f + (' groupalign="' + this.groupalign + '"/>') : "malignmark" == this.type && this.edge ? f + (' edge="' + this.edge + '"/>') : f + "/>"
    },
    getAltText: function() {
        return org.imatheq.formulaeditor.FormulaEditor.getEditor().getSymbolAltText(this.type)
    }
})
}
)();
(function() {
var f = com.efmase.js.utilities.toolset;
org.imatheq.formulaeditor.presentation.Row = $extend(org.imatheq.formulaeditor.presentation.Node, {
    isAnswer: !1,
    margin: 2,
    inputType: null,
    keywordIdx: 0,
    initialize: function() {
        var a = org.imatheq.formulaeditor.presentation.BlockSymbol, b;
        if (1 == arguments.length && "string" == typeof arguments[0]) {
            a = arguments[0];
            var d = [];
            for (b = 0; b < a.length; b++)
                d.push(this.newSymbol(a.charAt(b)));
            this.initialize.parent.initialize.apply(this, d)
        } else {
            d = Array.prototype.slice.call(arguments);
            0 === d.length && (d = [],
            d.push(null));
            for (b = 0; b < d.length; b++)
                if (null === d[b] || void 0 === d[b])
                    d[b] = new a;
            this.initialize.parent.initialize.apply(this, d)
        }
    },
    getBracketedAncestor: function(a) {
        a = this.getAncestors(position.index);
        for (var b = 0; b < a.length && !(a[b]instanceof presentation.Bracketed); )
            b++;
        b == a.length && console.log("updateBracket: error cannot find Bracketed parent.")
    },
    getFontSizeData: function(a, b, d) {
        var g = org.imatheq.formulaeditor.presentation;
        (new g.Symbol("x",!1,null,null,!0,!1)).getFontSizeData(a, b, d);
        (new g.Symbol("x",!1,null,null,!1,!1)).getFontSizeData(a, b, d);
        (new g.Symbol("x",!0,null,null,!0,!1)).getFontSizeData(a, b, d);
        (new g.Symbol("x",!0,null,null,!1,!1)).getFontSizeData(a, b, d);
        (new g.Symbol("c",!1,null,null,!0)).getFontSizeData(a, b, d);
        this.getFontSizeData.parent.getFontSizeData.call(this, a, b, d)
    },
    curindex: 0,
    getMathML: function(a, b, d) {
        var g = org.imatheq.formulaeditor.presentation;
        if (0 == this.children.length || 1 == this.children.length && this.children[0]instanceof g.BlockSymbol)
            return "<mrow" + (this.in_attrbs ? this.in_attrbs : "") + "/>";
        this.curindex = null === b || void 0 === b ? 0 : b;
        b = null === d || void 0 === d ? this.children.length : d;
        d = "";
        var k = 0
          , e = ""
          , h = 0;
        for (0 < b && this.children[b - 1]instanceof org.imatheq.formulaeditor.presentation.NewlineSymbol && b--; this.curindex < b; ) {
            var l = this.children[this.curindex];
            if (l instanceof g.Subsup && ("mprescripts" == l.msubtype || "mmultiscripts" == l.msubtype)) {
                var m = ""
                  , n = ""
                  , p = l.uid;
                var q = l.msubtype;
                var t = "<mmultiscripts" + (l.in_attrbs ? l.in_attrbs : "") + ">";
                if ("mprescripts" == q) {
                    for (; this.curindex < b && l instanceof g.Subsup && "mprescripts" == l.msubtype && l.uid == p; )
                        m += l.getMathML(!0),
                        l = this.children[++this.curindex];
                    for (q = this.curindex < b ? this.getSubMathML(b) : "<mrow/>"; this.curindex < b && l instanceof g.Subsup && l.uid == p; )
                        n += l.getMathML(!0),
                        l = this.children[++this.curindex];
                    t += q + n + "<mprescripts/>" + m
                } else {
                    for (; this.curindex < b && l instanceof g.Subsup && l.uid == p; )
                        n += l.getMathML(!0),
                        l = this.children[++this.curindex];
                    t += e + n;
                    e = "";
                    h = 0
                }
                t += "</mmultiscripts>"
            } else
                l instanceof g.Subsup ? (n = "",
                n += l.getMathML(!1),
                t = "<" + l.mtype + (l.in_attrbs ? l.in_attrbs : "") + ">" + (1 < h ? "<mrow>" : "") + e + (1 < h ? "</mrow>" : "") + n + "</" + l.mtype + ">",
                e = "",
                h = 0,
                this.curindex++) : t = this.getSubMathML(b);
            l instanceof g.Symbol && null !== l.value && (8289 == l.value.charCodeAt(0) || " " == l.value) || l instanceof g.Space ? (e += t,
            h++) : (d += e,
            e = t,
            h = 1);
            k++
        }
        d += e;
        1 < k && a && (d = "<mrow" + (this.in_attrbs ? this.in_attrbs : "") + ">" + d + "</mrow>");
        return d
    },
    getSubMathML: function(a) {
        var b = org.imatheq.formulaeditor.presentation
          , d = org.imatheq.formulaeditor.parsing.expression.RevList
          , g = "";
        child = this.children[this.curindex];
        if (child instanceof b.BlockSymbol)
            g = "<mrow/>",
            this.curindex++;
        else if (child instanceof b.Alignmark)
            g += child.getMathML(),
            this.curindex++;
        else if ("string" == typeof child.value) {
            child.getStyleString();
            var k = child.keyword
              , e = null !== child.mtext && void 0 !== child.mtext && child.mtext
              , h = child.value;
            b = child.in_attrbs ? child.in_attrbs : "";
            void 0 === k && (k = null);
            var l = k;
            null !== k && 0 < k.indexOf("_") && (l = k.slice(0, child.keyword.indexOf("_")));
            if (e) {
                g += "<mtext" + b + child.getStyleString() + ">" + f.getEncodedStr(child);
                for (this.curindex++; this.curindex < a && ("string" == typeof this.children[this.curindex].value || this.children[this.curindex]instanceof org.imatheq.formulaeditor.presentation.Space && 0 < this.children[this.curindex].width) && child.hasSameStyle(this.children[this.curindex], !1); )
                    g = this.children[this.curindex]instanceof org.imatheq.formulaeditor.presentation.Space ? g + this.children[this.curindex++].getMathML() : g + f.getEncodedStr(this.children[this.curindex++]);
                g += "</mtext>"
            } else if (child.mn && null !== k && 0 == k.indexOf(h)) {
                e = "";
                d = this.curindex;
                for (var m = 0; m < l.length; m++)
                    if (h = this.children[this.curindex].value,
                    this.curindex < a && "string" == typeof h && h == k.charAt(m) && this.children[this.curindex].mn && child.hasSameStyle(this.children[this.curindex], !1))
                        e = this.children[this.curindex]instanceof org.imatheq.formulaeditor.presentation.Space ? e + this.children[this.curindex++].getMathML() : e + f.getEncodedStr(this.children[this.curindex++]);
                    else {
                        for (iKeyword = d; null !== this.children[iKeyword].keyword && this.children[iKeyword].keyword == k; )
                            this.children[iKeyword].keyword = null,
                            this.children[iKeyword].mn = !1,
                            iKeyword++;
                        this.curindex = d;
                        break
                    }
                this.curindex != d && (g += "<mn" + b + child.getStyleString() + ">" + e + "</mn>")
            } else if (child.mo && null !== k && 0 == k.indexOf(h)) {
                e = "";
                d = this.curindex;
                for (m = 0; m < l.length; m++)
                    if (h = this.children[this.curindex].value,
                    this.curindex < a && "string" == typeof h && h == k.charAt(m) && this.children[this.curindex].mo && child.hasSameStyle(this.children[this.curindex], !1))
                        e = this.children[this.curindex]instanceof org.imatheq.formulaeditor.presentation.Space ? e + this.children[this.curindex++].getMathML() : e + f.getEncodedStr(this.children[this.curindex++]);
                    else {
                        for (iKeyword = d; null !== this.children[iKeyword].keyword && this.children[iKeyword].keyword == k; )
                            this.children[iKeyword].keyword = null,
                            this.children[iKeyword].mo = !1,
                            iKeyword++;
                        this.curindex = d;
                        break
                    }
                this.curindex != d && (g += "<mo" + b + child.getStyleString() + (null !== child.in_attrs && void 0 !== child.in_attrs ? child.in_attrs : "") + ">" + e + "</mo>")
            } else if ("0" <= h && "9" >= h) {
                g += "<mn" + b + child.getStyleString() + ">";
                b = h;
                for (d = this.curindex + 1; d < a && "string" == typeof this.children[d].value && ("0" <= this.children[d] && "9" >= this.children[d] || "." == this.children[d] || "," == this.children[d]) && child.hasSameStyle(this.children[d], !1); )
                    b += this.children[d++];
                a = b.length;
                arrDot = b.split(".");
                2 < arrDot.length && (a = arrDot[0].length + arrDot[1].length + 1);
                1 < arrDot.length && -1 != arrDot[1].indexOf(",") && (a = arrDot[0].length + arrDot[1].indexOf(",") + 1);
                arrComma = arrDot[0].split(",");
                len1 = arrComma[0].length;
                for (k = 1; k < arrComma.length; k++) {
                    if (3 != arrComma[k].length) {
                        a = len1;
                        break
                    }
                    len1 += 4
                }
                g += b.slice(0, a);
                this.curindex += a;
                g += "</mn>"
            } else if (void 0 !== org.imatheq.formulaeditor.parsing.expression.MOList[h])
                g += "<mo" + b + child.getStyleString() + ">" + f.getEncodedStr(child) + "</mo>",
                this.curindex++;
            else if (void 0 !== d[h]) {
                for (e = f.getEncodedStr(child); ++this.curindex < a && "string" == typeof this.children[this.curindex].value && child.hasSameStyle(this.children[this.curindex], !1); )
                    e += f.getEncodedStr(this.children[this.curindex]);
                a = child.bold && ["script", "fraktur"].includes(d[h].type) && d[h].non_bold ? "" : child.getStyleString();
                g += "<mi" + b + a + ">" + e + "</mi>"
            } else if (null === child.keyword || 0 != k.indexOf(h) || child.bold && !child.forcedItalic && child.autoItalic)
                if (null !== child.keyword || child.bold || child.forcedItalic || child.autoItalic || !/[a-zA-Z]/.test(h))
                    g += "<mi" + b + child.getStyleString() + ">" + f.getEncodedStr(child) + "</mi>",
                    this.curindex++;
                else {
                    g += "<mi" + child.getStyleString() + ">" + f.getEncodedStr(child);
                    for (this.curindex++; this.curindex < a && "string" == typeof this.children[this.curindex].value && /[a-zA-Z]/.test(this.children[this.curindex].value) && child.hasSameStyle(this.children[this.curindex], !0); )
                        g += f.getEncodedStr(this.children[this.curindex++]);
                    g += "</mi>"
                }
            else {
                e = "";
                d = this.curindex;
                for (m = 0; m < l.length; m++)
                    if (h = this.children[this.curindex].value,
                    this.curindex < a && "string" == typeof h && h == k.charAt(m) && child.hasSameStyle(this.children[this.curindex], !1))
                        e = this.children[this.curindex]instanceof org.imatheq.formulaeditor.presentation.Space ? e + this.children[this.curindex++].getMathML() : e + f.getEncodedStr(this.children[this.curindex++]);
                    else {
                        for (iKeyword = d; null !== this.children[iKeyword].keyword && this.children[iKeyword].keyword == k; )
                            this.children[iKeyword].keyword = null,
                            iKeyword++;
                        this.curindex = d;
                        break
                    }
                this.curindex != d && (g += "<mi" + b + child.getStyleString() + ">" + e + "</mi>")
            }
        } else
            g += child.getMathML(),
            this.curindex++;
        return g
    },
    curAltIndex: 0,
    firstNonSpace: null,
    getAltText: function(a, b, d) {
        a = org.imatheq.formulaeditor.presentation;
        var g = org.imatheq.formulaeditor.FormulaEditor.getEditor().altstrs;
        if (0 == this.children.length || 1 == this.children.length && this.children[0]instanceof a.BlockSymbol)
            return " blank";
        this.curAltIndex = null === b || void 0 === b ? 0 : b;
        b = null === d || void 0 === d ? this.children.length : d;
        d = "";
        var k = 0
          , e = "";
        for (0 < b && this.children[b - 1]instanceof org.imatheq.formulaeditor.presentation.NewlineSymbol && b--; this.curAltIndex < b; ) {
            var h = this.children[this.curAltIndex];
            if (h instanceof a.Subsup && ("mprescripts" == h.msubtype || "mmultiscripts" == h.msubtype)) {
                var l = "", m = "", n, p = n = 0, q = h.uid;
                if ("mprescripts" == h.msubtype) {
                    for (; this.curAltIndex < b && h instanceof a.Subsup && "mprescripts" == h.msubtype && h.uid == q; )
                        l += h.getAltText(!0),
                        h = this.children[++this.curAltIndex],
                        n++;
                    for (n = this.curAltIndex < b ? this.getSubAltText(b) : str.blank; this.curAltIndex < b && h instanceof a.Subsup && h.uid == q; )
                        m += h.getAltText(!0),
                        h = this.children[++this.curAltIndex],
                        p++;
                    h = n + l + g.mprescripts + m
                } else {
                    for (; this.curAltIndex < b && h instanceof a.Subsup && h.uid == q; )
                        m += h.getAltText(!0),
                        h = this.children[++this.curAltIndex],
                        p++;
                    h = e + m;
                    e = ""
                }
                h = g.mmultiscripts.replace("$0$", h)
            } else
                h instanceof a.Subsup ? (m = "",
                m += h.getAltText(!1),
                h = e + m,
                e = "",
                this.curAltIndex++) : h = this.getSubAltText(b);
            d += e;
            e = h;
            k++
        }
        return d + e
    },
    getSubAltText: function(a) {
        var b = org.imatheq.formulaeditor.presentation
          , d = org.imatheq.formulaeditor.FormulaEditor.getEditor()
          , g = d.altstrs
          , k = g.word_space
          , e = function(t) {
            var r = t.length;
            arrDot = t.split(".");
            2 < arrDot.length && (r = arrDot[0].length + arrDot[1].length + 1);
            1 < arrDot.length && -1 != arrDot[1].indexOf(",") && (r = arrDot[0].length + arrDot[1].indexOf(",") + 1);
            arrComma = arrDot[0].split(",");
            len1 = arrComma[0].length;
            for (t = 1; t < arrComma.length; t++) {
                if (3 != arrComma[t].length) {
                    r = len1;
                    break
                }
                len1 += 4
            }
            return r
        }
          , h = function(t) {
            var r = "";
            t.doubleStruck ? r = g["double-struck"] : t.script ? r = (t.bold ? g.bold : "") + g.script : t.fraktur ? r = (t.bold ? g.bold : "") + g.fraktur : t.isSymbolAutoItalic() ? t.bold ? r = t.forcedItalic ? g.bold + g.italic : t.autoItalic ? g.bold + g.italic : g.bold : t.forcedItalic || t.autoItalic || (r = g.normal) : r = t.forcedItalic ? t.bold ? g.bold + g.italic : g.italic : t.bold ? g.bold : "";
            return r
        }
          , l = "";
        child = this.children[this.curAltIndex];
        if (child instanceof b.BlockSymbol)
            l = g.blank,
            this.curAltIndex++;
        else if ("string" == typeof child.value) {
            h(child);
            var m = child.keyword
              , n = null !== child.mtext && void 0 !== child.mtext && child.mtext;
            b = child.value;
            var p = org.imatheq.formulaeditor.parsing.expression.RevList;
            void 0 === m && (m = null);
            var q = m;
            null !== m && 0 < m.indexOf("_") && (q = m.slice(0, child.keyword.indexOf("_")));
            if (n) {
                for (l += h(child) + k + this.children[this.curAltIndex++]; this.curAltIndex < a && ("string" == typeof this.children[this.curAltIndex].value || this.children[this.curAltIndex]instanceof org.imatheq.formulaeditor.presentation.Space && 0 < this.children[this.curAltIndex].width) && child.hasSameStyle(this.children[this.curAltIndex], !1); )
                    this.children[this.curAltIndex]instanceof org.imatheq.formulaeditor.presentation.Space ? (l += g.space,
                    this.curAltIndex++) : l += this.children[this.curAltIndex++].value;
                l = g.mtext.replace("$0$", l)
            } else if (child.mn && null !== m && 0 == m.indexOf(b)) {
                e = k;
                k = this.curAltIndex;
                for (d = 0; d < q.length; d++)
                    if (b = this.children[this.curAltIndex].value,
                    this.curAltIndex < a && "string" == typeof b && b == m.charAt(d) && this.children[this.curAltIndex].mn && child.hasSameStyle(this.children[this.curAltIndex], !1))
                        e = this.children[this.curAltIndex]instanceof org.imatheq.formulaeditor.presentation.Space ? e + g.space : e + b,
                        this.curAltIndex++;
                    else {
                        for (iKeyword = k; null !== this.children[iKeyword].keyword && this.children[iKeyword].keyword == m; )
                            this.children[iKeyword].keyword = null,
                            this.children[iKeyword].mn = !1,
                            iKeyword++;
                        m = null;
                        this.curAltIndex = k;
                        break
                    }
                this.curAltIndex != k && (l += h(child) + e)
            } else if (child.mo && null !== m && 0 == m.indexOf(b)) {
                e = k;
                k = this.curAltIndex;
                for (d = 0; d < q.length; d++)
                    if (b = this.children[this.curAltIndex].value,
                    this.curAltIndex < a && "string" == typeof b && b == m.charAt(d) && this.children[this.curAltIndex].mo && child.hasSameStyle(this.children[this.curAltIndex], !1))
                        e = this.children[this.curAltIndex]instanceof org.imatheq.formulaeditor.presentation.Space ? e + g.space : e + b,
                        this.curAltIndex++;
                    else {
                        for (iKeyword = k; null !== this.children[iKeyword].keyword && this.children[iKeyword].keyword == m; )
                            this.children[iKeyword].keyword = null,
                            this.children[iKeyword].mo = !1,
                            iKeyword++;
                        m = null;
                        this.curAltIndex = k;
                        break
                    }
                this.curAltIndex != k && (l += h(child) + e)
            } else if ("0" <= b && "9" >= b) {
                l += h(child);
                h = k + b;
                for (k = this.curAltIndex + 1; k < a && "string" == typeof this.children[k].value && ("0" <= this.children[k] && "9" >= this.children[k] || "." == this.children[k] || "," == this.children[k]) && child.hasSameStyle(this.children[k], !1); )
                    h += this.children[k++];
                a = e(h);
                l += h.slice(0, a);
                this.curAltIndex += a - 1
            } else if (void 0 !== org.imatheq.formulaeditor.parsing.expression.MOList[b])
                l += h(child),
                l = this.firstNonSpace == this.curAltIndex && "-" == b ? l + g.negative : l + d.getSymbolAltText(b),
                this.curAltIndex++;
            else if (void 0 !== p[b]) {
                for (e = p[b].key; ++this.curAltIndex < a && "string" == typeof this.children[this.curAltIndex].value && child.hasSameStyle(this.children[this.curAltIndex], !1); )
                    e += p[this.children[this.curAltIndex].value].key;
                1 == e.length && -1 != "CNPQRZ".indexOf(e) ? l += d.getSymbolAltText(b) : (l += h(child),
                a = p[b].type.replace("bold-", ""),
                b = -1 != p[b].type.indexOf("bold") ? " bold " : " ",
                -1 == h(child).indexOf(a) && (l += b + a),
                l += k + e)
            } else if (null === child.keyword || 0 != m.indexOf(b) || child.bold && !child.forcedItalic && child.autoItalic)
                if (null !== child.keyword || child.forcedItalic || child.autoItalic || !/[a-zA-Z]/.test(b))
                    l += h(child) + d.getSymbolAltText(this.children[this.curAltIndex++].value);
                else
                    for (l += h(child) + k + b,
                    this.curindex++; this.curAltIndex < a && "string" == typeof this.children[this.curAltIndex].value && /[a-zA-Z]/.test(this.children[this.curAltIndex].value) && child.hasSameStyle(this.children[this.curAltIndex], !0); )
                        l += this.children[this.curAltIndex++].value;
            else {
                e = k;
                k = this.curAltIndex;
                for (d = 0; d < q.length; d++)
                    if (b = this.children[this.curAltIndex].value,
                    this.curAltIndex < a && "string" == typeof b && b == m.charAt(d) && child.hasSameStyle(this.children[this.curAltIndex], !1))
                        e = this.children[this.curAltIndex]instanceof org.imatheq.formulaeditor.presentation.Space ? e + g.space : e + b,
                        this.curAltIndex++;
                    else {
                        for (iKeyword = k; null !== this.children[iKeyword].keyword && this.children[iKeyword].keyword == m; )
                            this.children[iKeyword].keyword = null,
                            iKeyword++;
                        m = null;
                        this.curAltIndex = k;
                        break
                    }
                this.curAltIndex != k && (l += h(child) + e)
            }
        } else
            l += child.getAltText(),
            this.curAltIndex++;
        return l
    },
    isSpaceLike: function(a) {
        var b = org.imatheq.formulaeditor.presentation;
        return a instanceof b.Space || a instanceof b.NewlineSymbol
    },
    isEmbellished: function() {
        if (0 == this.children.length)
            return !1;
        for (var a = 0; a < this.children.length && this.isSpaceLike(this.children[a]); )
            a++;
        if (a == this.children.length || !this.isSpaceLike(this.children[a]))
            return !1;
        for (var b = this.children.length - 1; b > a && this.isSpaceLike(this.children[a]); )
            b--;
        return a == b && this.isSpaceLike(this.children[a]) ? !0 : !1
    },
    getSymbol: function() {
        if (!this.isEmbellished())
            return null;
        for (var a = 0; a < this.children.length && this.isSpaceLike(this.children[a]); )
            a++;
        return this.children[a]
    },
    getMOSpaces: function(a, b, d) {
        var g = org.imatheq.formulaeditor.parsing.expression.MOList[b.value];
        if (null !== b.lspace || null !== b.rspace)
            return {
                lspace: null !== b.lspace ? a.getPXSize(b.lspace) : 0,
                rspace: null !== b.rspace ? a.getPXSize(b.rspace) : 0
            };
        if (void 0 !== g[d] && null !== g[d])
            a = {
                lspace: null !== b.lspace ? b.lspace : a.getPXSize(g[d].ls / 18 + "em"),
                rspace: null !== b.rspace ? b.rspace : a.getPXSize(g[d].rs / 18 + "em")
            };
        else {
            b = 0;
            for (var k, e = 0; 3 > e; e++)
                null !== g[e] && void 0 !== g[e] && (k = e,
                b++);
            a = 1 == b ? {
                lspace: a.getPXSize(g[k].ls / 18 + "em"),
                rspace: a.getPXSize(g[k].rs / 18 + "em")
            } : 2 == d && void 0 !== g[1] && null !== g[1] ? {
                lspace: a.getPXSize(g[1].ls / 18 + "em"),
                rspace: 0
            } : 0 == d && void 0 !== g[1] && null !== g[1] ? {
                lspace: 0,
                rspace: a.getPXSize(g[1].rs / 18 + "em")
            } : {
                lspace: 0 == d ? 0 : a.getPXSize("0.28em"),
                rspace: 2 == d ? 0 : a.getPXSize("0.28em")
            }
        }
        return a
    },
    draw: function(a, b, d, g, k) {
        var e = org.imatheq.formulaeditor.presentation;
        if (0 < this.children.length) {
            var h = d
              , l = g
              , m = d
              , n = g
              , p = null
              , q = 0
              , t = !1
              , r = !1
              , u = this.children[0].getMathvariant ? this.children[0].getMathvariant() : null
              , z = this.children[0].mathcolor
              , B = null
              , C = null
              , E = null
              , A = null;
            G = 8 < org.imatheq.formulaeditor.FormulaEditor.getEditor().canvas.getFontSizeIdx(G) ? 2 : 1;
            for (var w = 0; w < this.children.length; w++)
                this.isSpaceLike(this.children[w]) || (null === p && (p = w),
                q = w);
            for (w = 0; w < this.children.length; w++) {
                var v = this.children[w]
                  , y = null !== v.mtext && void 0 !== v.mtext && v.mtext
                  , D = {
                    lspace: null === v.lspace || void 0 === v.lspace ? 0 : a.getPXSize(v.lspace),
                    rspace: null === v.rspace || void 0 === v.rspace ? 0 : a.getPXSize(v.rspace)
                }
                  , F = v.getMathvariant ? v.getMathvariant() : null;
                z = null === B && y || null !== B && (u !== F || z !== v.mathcolor);
                u = !1;
                y && w == this.children.length - 1 ? u = !0 : y && (u = this.children[w + 1].getMathvariant ? this.children[w + 1].getMathvariant() : null,
                u = !this.children[w + 1].mtext || F !== u || v.mathcolor !== this.children[w + 1].mathcolor);
                if (y)
                    D = {
                        lspace: z ? G : 0,
                        rspace: u ? G : 0
                    };
                else if (p != q && w >= p && w <= q)
                    if (r)
                        r = !1,
                        D = {
                            lspace: 0,
                            rspace: nextRspace
                        };
                    else if (v.isEmbellished()) {
                        D = 0;
                        w > p && w < q ? D = 1 : w == q && (D = 2);
                        F = v.getSymbol();
                        if (null === F || void 0 === F)
                            throw Error("Error failed to find operator in embellished node");
                        D = this.getMOSpaces(a, F, D);
                        w < q && this.children[w + 1]instanceof e.Subsup && (t = !0,
                        nextRspace = D.rspace,
                        D.rspace = 0)
                    } else if (t)
                        D.rspace = nextRspace,
                        nextRspace = 0,
                        t = !1;
                    else if (v instanceof e.Subsup && "mprescripts" == v.msubtype && w < q && this.children[w + 1].isEmbellished()) {
                        D = 0;
                        w + 1 > p && w + 1 < q ? D = 1 : w + 1 == q && (D = 2);
                        F = this.children[w + 1].getSymbol();
                        if (null === F || void 0 === F)
                            throw Error("Error failed to find operator in embellished node");
                        D = this.getMOSpaces(a, F, D);
                        r = !0;
                        nextRspace = D.rspace;
                        D.rspace = 0
                    }
                D = v.draw(a, b, m, g, k, D);
                h = Math.min(h, D.left);
                l = Math.min(l, D.top);
                d = Math.max(d, D.left + D.width);
                m = D.left + D.width;
                n = Math.max(n, D.top + D.height);
                z ? (B = D.left,
                C = D.top,
                E = D.left + D.width,
                A = D.top + D.height) : y && (B = Math.min(B, D.left),
                C = Math.min(C, D.top),
                E = Math.max(E, D.left + D.width),
                A = Math.max(A, D.top + D.height));
                u && (mt_dimensions = {
                    left: B + G,
                    top: C,
                    width: E - B - G,
                    height: A - C + 2 * G
                },
                k || a.drawBox(mt_dimensions, "#99ebff"),
                A = E = C = B = null);
                u = this.children[w].getMathvariant ? this.children[w].getMathvariant() : null;
                z = v.mathcolor
            }
            this.dimensions = {
                left: h,
                top: l,
                width: d - h,
                height: n - l
            }
        } else {
            var G = 0;
            void 0 !== b.fontSizeModifier && null !== b.fontSizeModifier && (G = b.fontSizeModifier);
            this.dimensions = a.drawFBox(d, g, !0, null, !1, !1, z, G)
        }
        return this.dimensions
    },
    getSelectedArea: function(a, b) {
        for (var d = null, g = a; g < b; g++)
            if (g < this.children.length) {
                var k = this.children[g];
                d = g == a ? {
                    top: k.dimensions.top,
                    left: k.dimensions.left,
                    width: k.dimensions.width,
                    height: k.dimensions.height
                } : {
                    top: Math.min(d.top, k.dimensions.top),
                    left: Math.min(d.left, k.dimensions.left),
                    width: Math.max(d.left + d.width, k.dimensions.left + k.dimensions.width) - Math.min(d.left, k.dimensions.left),
                    height: Math.max(d.top + d.height, k.dimensions.top + k.dimensions.height) - Math.min(d.top, k.dimensions.top)
                }
            }
        1 == b - a && this.children[a]instanceof org.imatheq.formulaeditor.presentation.NewlineSymbol && (d = {
            top: this.dimensions.top,
            left: d.left,
            width: d.width,
            height: this.dimensions.height
        });
        return d
    },
    newSymbol: function(a, b, d, g, k, e) {
        var h = org.imatheq.formulaeditor.presentation;
        return " " == a || "\u00a0" == a ? new h.Space("0.4em","0","0",a) : new h.Symbol(a,b,d,g,k,e)
    },
    onkeydown: function(a, b) {
        return !0
    },
    backDelete: function(a) {
        var b = org.imatheq.formulaeditor.presentation
          , d = {
            row: a.cursor.position.row,
            index: a.cursor.position.index
        }
          , g = a.getButtonStatus();
        if (0 < d.index)
            if (this.children[d.index - 1].canDelete(a)) {
                var k = this.children.length - d.index
                  , e = this.remove(d.index - 1)
                  , h = this.getIndexChain(d.index)
                  , l = this.getIndexChain(d.index - 1);
                d.index--;
                if (this.isEmpty()) {
                    var m = e.children[0];
                    this.parent instanceof b.Lines && 0 != this.index || (b = new b.BlockSymbol(null,m.bold,m.mathcolor,null,m.forcedItalic,m.autoItalic),
                    this.insert(0, b))
                }
                a.cursor.setPosition(d);
                a.actions.addAction("delete", d, h, l, e, null, k, null, null, g);
                a.redraw()
            } else
                g = {
                    row: d.row,
                    index: d.index - 1
                },
                k = {
                    row: d.row,
                    index: d.index
                },
                e = d.row.getIndexChain(d.index - 1),
                h = d.row.getIndexChain(d.index),
                a.selection.setSelection({
                    parent: this,
                    startPosition: g,
                    endPosition: k,
                    startIndex: d.index - 1,
                    endIndex: d.index,
                    startIndexChain: e,
                    endIndexChain: h,
                    dimensions: this.children[d.index - 1].dimensions
                })
    },
    foreDelete: function(a) {
        var b = {
            row: a.cursor.position.row,
            index: a.cursor.position.index
        }
          , d = a.getButtonStatus();
        if (b.index < this.children.length)
            if (this.children[b.index].canDelete(a)) {
                var g = this.remove(b.index)
                  , k = this.getIndexChain(b.index)
                  , e = this.getIndexChain(b.index);
                this.isEmpty() && this.insert(0);
                a.cursor.setPosition(b);
                a.actions.addAction("delete", b, k, e, g, null, this.children.length - b.index, null, null, d);
                a.redraw()
            } else
                d = {
                    row: b.row,
                    index: b.index
                },
                g = {
                    row: b.row,
                    index: b.index + 1
                },
                k = b.row.getIndexChain(b.index),
                e = b.row.getIndexChain(b.index + 1),
                a.selection.setSelection({
                    parent: this,
                    startPosition: d,
                    endPosition: g,
                    startIndex: b.index,
                    endIndex: b.index + 1,
                    startIndexChain: k,
                    endIndexChain: e,
                    dimensions: this.children[b.index].dimensions
                })
    },
    onkeypress: function(a, b) {
        if (!a.altKey && !a.ctrlKey) {
            var d = String.fromCharCode(a.charCode);
            return 13 == a.charCode ? !1 : this.charInput(d, b)
        }
        return !0
    },
    charInput: function(a, b) {
        var d = org.imatheq.formulaeditor.presentation, g = null, k = b.getButtonStatus(), e = org.imatheq.formulaeditor.presentation.BlockSymbol, h = {
            row: b.cursor.position.row,
            index: b.cursor.position.index
        }, l = h.row.getIndexChain(h.index), m, n = b.selection, p = "insert";
        n.hasSelection ? (g = n.getSelectionCopy(),
        h.row = n.parent,
        e = n.startIndex,
        p = n.endIndex,
        0 < p && this.children[p - 1]instanceof d.NewlineSymbol && p--,
        this.updateKeyword(b, e),
        this.updateKeyword(b, p),
        d = this.children.length - p,
        p > e && (m = this.remove(e, p)),
        n.clear(),
        p = "update",
        h.index = e) : (this.updateKeyword(b, h.index),
        d = this.children.length - h.index,
        0 <= h.index - 1 && this.children[h.index - 1]instanceof e ? (h.index--,
        m = this.remove(h.index),
        p = "update") : this.children[h.index]instanceof e ? (m = this.remove(h.index),
        d--,
        p = "update") : m = null);
        null != m && (n = m.children[m.children.length - 1],
        k.bold = n.bold,
        k.mathcolor = n.mathcolor,
        k.forcedItalic = n.forcedItalic,
        k.autoItalic = n.autoItalic,
        k.mtext = n.mtext);
        a = this.insert(h.index, this.newSymbol(a, k.bold, k.mathcolor, k.mtext, k.forcedItalic, k.autoItalic));
        b.cursor.setPosition(h);
        a && b.cursor.moveRight(!1);
        a = b.cursor.position.row.getIndexChain(b.cursor.position.index);
        b.actions.addAction(p, h, l, a, m, null, d, g, null, k, k);
        this.convertKeyword(b);
        return !1
    },
    updateKeyword: function(a, b, d, g, k) {
        d = org.imatheq.formulaeditor.presentation;
        new org.imatheq.formulaeditor.Options;
        if (0 < b && b < this.children.length && "string" == typeof this.children[b].value && "string" == typeof this.children[b - 1].value && null !== this.children[b].keyword && this.children[b - 1].keyword == this.children[b].keyword) {
            for (var e = b, h = this.children[b].keyword; e < this.children.length && "string" == typeof this.children[e].value && this.children[e].keyword == h; )
                e++;
            var l = e;
            for (e = b - 1; 0 <= e && "string" == typeof this.children[e].value && this.children[e].keyword == h; )
                e--;
            e += 1;
            var m = [];
            h.slice(h.indexOf("_") + 1);
            for (h = e; h < l; h++)
                m.push(this.children[h].copy()),
                this.children[h].keyword = null,
                this.children[h].mo = !1,
                this.children[h].mn = !1;
            l = this.children.length - l;
            d = new d.Row;
            d.initialize.apply(d, m);
            e = {
                row: this,
                index: e
            };
            b = this.getIndexChain(b);
            m = a.getButtonStatus();
            a.actions.addAction("update", e, b, b, d, null, l, g, k, m, null);
            a.redraw(!0)
        }
    },
    convertKeyword: function(a) {
        var b = org.imatheq.formulaeditor.presentation
          , d = a.cursor.position.index
          , g = a.cursor.position.row;
        if (1 < d) {
            var k = d - 1
              , e = g.children[k]
              , h = ""
              , l = e;
            for (hasKeyword = !1; 0 <= k && 7 >= d - k && "string" == typeof e.value && l.hasSameStyle(e); ) {
                if (null !== e.keyword) {
                    var m = e.keyword.slice(0, e.keyword.indexOf("_"))
                      , n = m.length;
                    if (7 < d - k - 1 + n)
                        break;
                    else
                        hasKeyword = !0,
                        h = m + h,
                        k -= n
                } else
                    h = e.value + h,
                    k--;
                0 <= k && (e = g.children[k])
            }
            e = k + 1;
            for (k = 0; k < h.length - 1 && (str1 = h.slice(k, h.length),
            void 0 === org.imatheq.formulaeditor.parsing.expression.KeywordList[str1]); )
                k++;
            e += k;
            if (k < h.length - 1) {
                for (k = l = 0; k < this.children.length; k++)
                    null !== this.children[k].keyword && void 0 !== this.children[k].keyword && (m = parseInt(this.children[k].keyword.slice(this.children[k].keyword.indexOf("_") + 1)),
                    l = Math.max(l, m));
                k = this.children.length - d;
                b = new b.Row;
                m = [];
                for (n = e; n < d; n++)
                    m.push(g.children[n].copy()),
                    g.children[n].keyword = h + "_" + (l + 1);
                b.initialize.apply(b, m);
                h = {
                    row: g,
                    index: e
                };
                d = g.getIndexChain(d);
                g = a.getButtonStatus();
                a.actions.addAction("setSymbFontAttrbs", h, d, d, b, null, k, null, null, g, null)
            }
        }
        a.redraw(!0)
    },
    flatten: function() {
        var a = org.imatheq.formulaeditor.presentation.Row;
        this.flatten.parent.flatten.apply(this);
        for (var b = this.children, d = 0; d < b.length; d++) {
            var g = b[d];
            g instanceof a && b.splice.apply(b, [d, 1].concat(g.children))
        }
        this.updateChildren()
    },
    getCursorPosition: function(a, b, d) {
        for (var g = this.children.length, k = 0; k < g; k++) {
            var e = this.children[k].dimensions;
            if (b < e.left + e.width || k == g - 1)
                return this.children[k].getCursorPosition(a, b, d)
        }
        return {
            row: this,
            index: 0
        }
    },
    getFirstCursorPosition: function(a, b, d) {
        if (null === d || void 0 === d)
            d = !0;
        return null === b || void 0 === b || 0 < b ? this.getFollowingCursorPosition(a, null, d) : null !== this.parent ? this.parent.getFirstCursorPosition(a, null, d) : null
    },
    getLastCursorPosition: function(a, b, d) {
        return null === b || void 0 === b || b < this.children.length ? this.getPrecedingCursorPosition(a, null, d) : null !== this.parent ? this.parent.getLastCursorPosition(a, null, d) : null
    },
    getFollowingCursorPosition: function(a, b, d) {
        if (null === d || void 0 === d)
            d = !0;
        if (null === b || void 0 === b)
            return null === this.parent && null !== this.children[0] ? this.children[0].getFollowingCursorPosition(a, null, d) : {
                row: this,
                index: 0
            };
        if (b < this.children.length) {
            var g = null;
            d && (g = this.children[b].getFollowingCursorPosition(a, null, d));
            null === g && (g = {
                row: this,
                index: b + 1
            });
            return g
        }
        return null !== this.parent ? this.parent.getFollowingCursorPosition(a, this.index, d) : null
    },
    getPrecedingCursorPosition: function(a, b, d) {
        if (null === d || void 0 === d)
            d = !0;
        if (null === b || void 0 === b) {
            if (0 == this.children.length)
                throw Error("Error in Row.getPrecedingCursorPosition: children length is 0.");
            return this.children[this.children.length - 1]instanceof org.imatheq.formulaeditor.presentation.NewlineSymbol ? {
                row: this,
                index: this.children.length - 1
            } : {
                row: this,
                index: this.children.length
            }
        }
        if (0 < b) {
            var g = null;
            d && (g = this.children[b - 1].getPrecedingCursorPosition(a, null, d));
            null === g && (g = {
                row: this,
                index: b - 1
            });
            return g
        }
        return null !== this.parent ? this.parent.getPrecedingCursorPosition(a, this.index, d) : null
    },
    getLowerCursorPosition: function(a, b, d, g) {
        if (null === b || void 0 === b) {
            if (0 == this.children.length)
                return {
                    row: this,
                    index: 0
                };
            b = null;
            for (var k = 0, e = 0; e <= this.children.length; e++) {
                if (e < this.children.length)
                    var h = this.children[e].dimensions.left;
                else
                    0 < this.children.length ? (h = this.children[this.children.length - 1].dimensions,
                    h = h.left + h.width) : h = this.dimensions.left;
                h = Math.abs(h - d);
                if (null === b || h < b)
                    b = h,
                    k = e
            }
            if (g) {
                if (k < this.children.length && null !== this.children[k] && void 0 !== this.children[k])
                    return this.children[k].getLowerCursorPosition(a, null, d, g);
                if (0 < k && k == this.children.length && null !== this.children[k - 1] && void 0 !== this.children[k - 1])
                    return this.children[k - 1].getLowerCursorPosition(a, null, d, g)
            } else
                return {
                    row: this,
                    index: k
                }
        } else
            return this.parent.getLowerCursorPosition(a, this.index, d, g)
    },
    getHigherCursorPosition: function(a, b, d, g) {
        if (null === b || void 0 === b) {
            b = null;
            for (var k = 0, e = 0; e <= this.children.length; e++) {
                if (e < this.children.length)
                    var h = this.children[e].dimensions.left;
                else
                    0 < this.children.length ? (h = this.children[this.children.length - 1].dimensions,
                    h = h.left + h.width) : h = this.dimensions.left;
                h = Math.abs(h - d);
                if (null === b || h < b)
                    b = h,
                    k = e
            }
            if (g) {
                if (k < this.children.length && null !== this.children[k] && void 0 !== this.children[k])
                    return this.children[k].getHigherCursorPosition(a, null, d, g);
                if (0 < k && k == this.children.length && null !== this.children[k - 1] && void 0 !== this.children[k - 1])
                    return this.children[k - 1].getHigherCursorPosition(a, null, d, g)
            } else
                return {
                    row: this,
                    index: k
                }
        } else
            return this.parent.getHigherCursorPosition(a, this.index, d, g)
    },
    isEmpty: function() {
        return 0 === this.children.length
    },
    insert: function(a, b, d) {
        var g = org.imatheq.formulaeditor.presentation.BlockSymbol
          , k = a
          , e = !0;
        if (null === d || void 0 === d)
            d = !0;
        if (null === b || void 0 === b)
            b = new g;
        d && a <= this.children.length && this.children[a]instanceof g ? this.children.splice(a, 1, b) : d && 0 <= a - 1 && this.children[a - 1]instanceof g ? (this.children.splice(a - 1, 1, b),
        k = a - 1,
        e = !1) : this.children.splice(k, 0, b);
        this.updateChildren(k);
        return e
    },
    replace: function(a, b) {
        this.children.splice(a, 1, b);
        this.updateChildren(a)
    },
    remove: function(a, b, d) {
        var g = org.imatheq.formulaeditor.presentation
          , k = b;
        if (null === b || void 0 === b)
            k = a + 1;
        b = new g.Row;
        b.initialize.apply(b, this.children.splice(a, k - a));
        0 == this.children.length && null !== d && void 0 !== d && d && (d = b.children[b.children.length - 1],
        g = new g.BlockSymbol(null,d.bold,null,null,d.forcedItalic,d.autoItalic),
        this.children.splice(0, 0, g));
        this.updateChildren(a);
        return b
    }
})
}
)();
(function() {
var f = com.efmase.js.utilities.toolset;
org.imatheq.formulaeditor.presentation.Bracketed = $extend(org.imatheq.formulaeditor.presentation.Node, {
    leftBracket: null,
    rightBracket: null,
    separator: null,
    slowDelete: !0,
    symmetric: null,
    isMO: !1,
    margin: 2,
    initialize: function() {
        if (0 < arguments.length) {
            this.leftBracket = arguments[0];
            var a = arguments[1];
            this.rightBracket = arguments[2];
            this.children = [];
            this.children.push(a);
            3 < arguments.length && (this.mathcolor = arguments[3])
        } else
            this.children = [];
        a = new org.imatheq.formulaeditor.presentation.Row;
        for (var b = this.functionsFromRow.length - 1; 0 <= b; b--)
            this[this.functionsFromRow[b]] || (this[this.functionsFromRow[b]] = a[this.functionsFromRow[b]]);
        this.updateChildren()
    },
    draw: function(a, b, d, g, k) {
        var e = this.getSymmetric();
        var h = a.getXDimentions(b, 0, 0);
        baseline = h.top + Math.round(.4 * h.height);
        7 > a.getFontSizeIdx(b.fontSizeModifier) && (this.margin = 1);
        h = this.children[0];
        h.draw(a, b, 0, 0, !0);
        var l = Math.max(h.dimensions.top < baseline ? baseline - h.dimensions.top : 0, h.dimensions.top + h.dimensions.height > baseline ? h.dimensions.top + h.dimensions.height - baseline : 0)
          , m = e ? baseline - l : h.dimensions.top
          , n = e ? 2 * l : h.dimensions.height;
        e = e ? 2 * l + 2 * this.margin : h.dimensions.height + 2 * this.margin;
        this.leftBracket.minimumHeight = e;
        this.rightBracket.minimumHeight = e;
        "" != this.leftBracket.value && this.leftBracket.draw(a, b, 0, 0, !0);
        "" != this.rightBracket.value && this.rightBracket.draw(a, b, 0, 0, !0);
        "" == this.leftBracket.value && "" == this.rightBracket.value ? (this.leftBracket.dimensions = {
            top: m,
            left: h.dimensions.left,
            width: 0,
            height: n
        },
        this.rightBracket.dimensions = {
            top: m,
            left: h.dimensions.left + h.dimensions.width,
            width: 0,
            height: n
        }) : "" == this.leftBracket.value ? this.leftBracket.dimensions = {
            top: this.rightBracket.dimensions.top,
            left: h.dimensions.left,
            width: 0,
            height: this.rightBracket.dimensions.height
        } : "" == this.rightBracket.value && (this.rightBracket.dimensions = {
            top: this.leftBracket.dimensions.top,
            left: h.dimensions.left + h.dimensions.width,
            width: 0,
            height: this.leftBracket.dimensions.height
        });
        e = Math.max(this.leftBracket.dimensions.height, n, this.rightBracket.dimensions.height);
        l = this.leftBracket.value;
        var p = this.rightBracket.value;
        if ("\u27e8" == l || "\u2329" == l || "<" == l || "\u2308" == l || "\u230a" == l)
            this.leftBracket.minimumHeight = e,
            this.leftBracket.draw(a, b, 0, 0, !0);
        if ("\u27e9" == p || "\u2329" == p || ">" == p || "\u2309" == p || "\u230b" == p)
            this.rightBracket.minimumHeight = e,
            this.rightBracket.draw(a, b, 0, 0, !0);
        var q = p = l = 0;
        e > n && (l = (e - n) / 2);
        this.leftBracket.dimensions.height < e && (p = (e - this.leftBracket.dimensions.height) / 2);
        this.rightBracket.dimensions.height < e && (q = (e - this.rightBracket.dimensions.height) / 2);
        this.dimensions = {
            height: e,
            width: this.leftBracket.dimensions.width + h.dimensions.width + this.rightBracket.dimensions.width + 2 * this.margin + 2,
            left: d,
            top: g + m - l
        };
        if (!1 === k || null === k || void 0 === k)
            "" != this.leftBracket.value && this.leftBracket.draw(a, b, d + 1 - this.leftBracket.dimensions.left, this.dimensions.top + p - this.leftBracket.dimensions.top, k),
            h.draw(a, b, d + 1 + this.leftBracket.dimensions.width - h.dimensions.left + this.margin, g, k),
            "" != this.rightBracket.value && this.rightBracket.draw(a, b, d + 1 + this.leftBracket.dimensions.width + h.dimensions.width - this.rightBracket.dimensions.left + 2 * this.margin, this.dimensions.top + q - this.rightBracket.dimensions.top, k);
        return this.dimensions
    },
    getFontSizeData: function(a, b, d) {
        var g = org.imatheq.formulaeditor.presentation;
        if ("" != this.leftBracket.value) {
            var k = this.leftBracket.onscreen ? this.leftBracket.onscreen : this.leftBracket.value;
            org.imatheq.formulaeditor.MathCanvas.symbolPositions[k] && (new g.Symbol(k)).getFontSizeData(a, b, d, !0);
            org.imatheq.formulaeditor.MathCanvas.symbolPositions[k + "1"] ? (new g.Symbol(k + "1")).getFontSizeData(a, b, d, !0) : org.imatheq.formulaeditor.MathCanvas.symbolPositions[k + "m"] && (new g.Symbol(k + "m")).getFontSizeData(a, b, d, !0)
        }
        "" != this.rightBracket.value && (k = this.rightBracket.onscreen ? this.rightBracket.onscreen : this.rightBracket.value,
        org.imatheq.formulaeditor.MathCanvas.symbolPositions[k] && (new g.Symbol(k)).getFontSizeData(a, b, d, !0),
        org.imatheq.formulaeditor.MathCanvas.symbolPositions[k + "1"] ? (new g.Symbol(k + "1")).getFontSizeData(a, b, d, !0) : org.imatheq.formulaeditor.MathCanvas.symbolPositions[k + "m"] && (new g.Symbol(k + "m")).getFontSizeData(a, b, d, !0));
        this.getFontSizeData.parent.getFontSizeData.call(this, a, b, d)
    },
    setSymbFontAttrbs: function(a) {
        this.leftBracket.setSymbFontAttrbs(a);
        this.rightBracket.setSymbFontAttrbs(a);
        this.setSymbFontAttrbs.parent.setSymbFontAttrbs.call(this, a);
        this.isMO = !1
    },
    functionsFromRow: ["getFirstCursorPosition", "getLastCursorPosition", "getLowerCursorPosition", "getHigherCursorPosition"],
    getCursorPosition: function(a, b, d) {
        if ("" != this.leftBracket.value) {
            var g = this.leftBracket.dimensions;
            if (b < g.left + Math.floor(g.width / 2))
                return null !== this.parent ? {
                    row: this.parent,
                    index: this.index
                } : null
        }
        g = this.children[0].dimensions;
        return b < g.left + g.width ? this.children[0].getCursorPosition(a, b, d) : "" != this.rightBracket.value && (g = this.rightBracket.dimensions,
        b < g.left + Math.floor(g.width / 2)) ? {
            row: this.children[0],
            index: this.children[0].children.length
        } : null !== this.parent ? {
            row: this.parent,
            index: this.index + 1
        } : this.getPrecedingCursorPosition(a)
    },
    getFollowingCursorPosition: function(a, b, d) {
        if (null === d || void 0 === d)
            d = !0;
        return null === b || void 0 === b ? this.children[0].getFollowingCursorPosition(a, null, d) : null !== this.parent ? this.parent.getFollowingCursorPosition(a, this.index, !1) : null
    },
    getPrecedingCursorPosition: function(a, b, d) {
        if (null === d || void 0 === d)
            d = !0;
        if (null === b || void 0 === b)
            return this.children[0].getPrecedingCursorPosition(a, null, d);
        var g = null;
        1 == b && d && (g = this.children[0].getPrecedingCursorPosition(a, null, d));
        return null === g && null !== this.parent ? this.parent.getPrecedingCursorPosition(a, this.index + 1, !1) : g
    },
    copy: function() {
        return this.clone(this.leftBracket.copy(), this.children[0].copy(), this.rightBracket.copy())
    },
    getMathML: function() {
        if (this.isMO) {
            var a = "<mrow>" + this.leftBracket.getMathML();
            var b = this.rightBracket.getMathML() + "</mrow>"
        } else
            a = "<mfenced" + (this.in_attrbs ? this.in_attrbs : "") + ("(" == this.leftBracket.value ? this.in_open : ' open="' + f.getEncodedStr(this.leftBracket) + '"') + (")" == this.rightBracket.value ? this.in_close : ' close="' + f.getEncodedStr(this.rightBracket) + '"') + this.in_separators + (null === this.mathcolor || "" == this.mathcolor || "null" == this.mathcolor || "#000000" == this.mathcolor ? "" : ' mathcolor="' + this.mathcolor + '"') + ">",
            b = "</mfenced>",
            null != this.symmetric && (a = '<mstyle symmetric="' + this.symmetric + '">' + a,
            b += "</mstyle>");
        for (var d = 0; d < this.children.length; d++)
            a += this.children[d].getMathML(!0);
        return a + b
    },
    getAltText: function() {
        for (var a = org.imatheq.formulaeditor.FormulaEditor.getEditor(), b = "|" == this.leftBracket.value || "\u2225" == this.leftBracket.value || "" == this.leftBracket.value ? a.getSymbolAltText("open_" + this.leftBracket.value) : a.getSymbolAltText(this.leftBracket.value), d = 0; d < this.children.length; d++)
            b += this.children[d].getAltText();
        return b += "|" == this.rightBracket.value || "\u2225" == this.rightBracket.value || "" == this.rightBracket.value ? a.getSymbolAltText("close_" + this.rightBracket.value) : a.getSymbolAltText(this.rightBracket.value)
    },
    getSymmetric: function() {
        var a = (new org.imatheq.formulaeditor.Options).getOption("defSymmetric");
        return null === this.symmetric ? a : this.symmetric
    },
    setSymmetric: function(a) {
        this.symmetric = a
    },
    updateEditTabButtons: function(a) {
        a = document.getElementById("BRACKETS_SYMMETRIC_ON");
        var b = document.getElementById("BRACKETS_SYMMETRIC_OFF");
        this.getSymmetric() ? (a.classList.add("efmase_palettebutton_select"),
        b.classList.remove("efmase_palettebutton_select")) : (a.classList.remove("efmase_palettebutton_select"),
        b.classList.add("efmase_palettebutton_select"))
    }
})
}
)();
(function() {
org.imatheq.formulaeditor.presentation.Bracket = $extend(org.imatheq.formulaeditor.presentation.Symbol, {
    minimumHeight: 1,
    initialize: function() {
        0 < arguments.length && this.initialize.parent.initialize.apply(this, Array.prototype.slice.call(arguments))
    },
    copy: function() {
        return this.clone(this.value, this.minimumHeight, this.onscreen)
    },
    draw: function(f, a, b, d, g) {
        var k = this.value;
        null !== this.onscreen && (k = this.onscreen);
        return this.dimensions = "\u27e8" == k || "\u2329" == k || "<" == k || "\u27e9" == k || "\u232a" == k || ">" == k ? f.drawAngleBracket(a, k, Math.round(b), Math.round(d), this.minimumHeight, g, null, this.mathcolor) : "\u2308" == k || "\u230a" == k || "\u2309" == k || "\u230b" == k ? f.drawCeilingFloorBracket(a, k, Math.round(b), Math.round(d), this.minimumHeight, g, null, this.mathcolor) : f.drawBracket(a, k, Math.round(b), Math.round(d), this.minimumHeight, g, null, this.mathcolor)
    },
    getMathML: function() {
        var f = ""
          , a = this.in_attrbs ? this.in_attrbs : "";
        if ("" != this.value) {
            for (var b in this)
                Object.prototype.hasOwnProperty.call(this, b) && "mo_" == b.substring(0, 3) && (a += " " + b.substring(3) + '="' + this[b] + '"');
            f = "<mo" + a + this.getStyleString() + ">" + com.efmase.js.utilities.toolset.getEncodedStr(this) + "</mo>"
        }
        return f
    }
})
}
)();
(function() {
var f = com.efmase.js.utilities.toolset;
org.imatheq.formulaeditor.presentation.VerticalBracket = $extend(org.imatheq.formulaeditor.presentation.Symbol, {
    value: null,
    minimumWidth: 1,
    fullWidth: 1,
    accent: !0,
    initialize: function() {
        0 < arguments.length && this.initialize.parent.initialize.apply(this, Array.prototype.slice.call(arguments))
    },
    copy: function() {
        return this.clone(this.value, this.minimumWidth, this.onscreen, this.accent)
    },
    getFontSizeData: function(a, b, d) {
        var g = org.imatheq.formulaeditor.presentation;
        (new g.Symbol("(1")).getFontSizeData(a, b, d, !0);
        (new g.Symbol("~1")).getFontSizeData(a, b, d, !0)
    },
    draw: function(a, b, d, g, k) {
        var e = this.value;
        null !== this.onscreen && (e = this.onscreen);
        return this.dimensions = a.drawVerticalBracket(e, Math.round(d), Math.round(g), this.minimumWidth, this.fullWidth, k, this.mathcolor, b.fontSizeModifier, this.accent)
    },
    getMathML: function() {
        return "<mo" + (this.in_attrbs ? this.in_attrbs : "") + this.getStyleString() + ">" + f.getEncodedStr(this) + "</mo>"
    }
})
}
)();
$package("org.imatheq.formulaeditor.parsing.expression");
(function() {
org.imatheq.formulaeditor.parsing.expression.KeywordList = {}
}
)();
(function() {
org.imatheq.formulaeditor.parsing.expression.OperatorList = {}
}
)();
(function() {
org.imatheq.formulaeditor.parsing.expression.BracketList = "()[]{}||\u27e8\u27e9\u2308\u2309\u230a\u230b\u2225\u2225";
org.imatheq.formulaeditor.parsing.expression.VertBracketList = "_\u23de\u23df\u2322\u2323\u02d8^\u02c7\u2212\u00af\u033f~\u21c0\u21bc\u02d9\u00a8\u2026\`\u00b4\u2192\u2190\u2194\u21d2\u21d0\u21d4\u03a3\u220f\u2210\u22c3\u22c2\u22c1\u22c0\u222b\u222d\u222c\u222e\u222f\u2230";
org.imatheq.formulaeditor.parsing.expression.MidVertBracketList = "\u21c0\u21bc\u02d9\u00a8\u2026\u2192\u2190\u2194\u21d2\u21d0\u21d4";
org.imatheq.formulaeditor.parsing.expression.LargeopList = "\u2211\u220f\u2210\u22c3\u22c2\u22c1\u22c0\u222b\u222d\u222c\u222e\u222f\u2230";
org.imatheq.formulaeditor.parsing.expression.DoubleStruckList = {
    A: "\ud835\udd38",
    B: "\ud835\udd39",
    C: "\u2102",
    D: "\ud835\udd3b",
    E: "\ud835\udd3c",
    F: "\ud835\udd3d",
    G: "\ud835\udd3e",
    H: "\u210d",
    I: "\ud835\udd40",
    J: "\ud835\udd41",
    K: "\ud835\udd42",
    L: "\ud835\udd43",
    M: "\ud835\udd44",
    N: "\u2115",
    O: "\ud835\udd46",
    P: "\u2119",
    Q: "\u211a",
    R: "\u211d",
    S: "\ud835\udd4a",
    T: "\ud835\udd4b",
    U: "\ud835\udd4c",
    V: "\ud835\udd4d",
    W: "\ud835\udd4e",
    X: "\ud835\udd4f",
    Y: "\ud835\udd50",
    Z: "\u2124"
};
org.imatheq.formulaeditor.parsing.expression.ScriptList = {
    A: "\ud835\udc9c",
    B: "\u212c",
    C: "\ud835\udc9e",
    D: "\ud835\udc9f",
    E: "\u2130",
    F: "\u2131",
    G: "\ud835\udca2",
    H: "\u210b",
    I: "\u2110",
    J: "\ud835\udca5",
    K: "\ud835\udca6",
    L: "\u2112",
    M: "\u2133",
    N: "\ud835\udca9",
    O: "\ud835\udcaa",
    P: "\ud835\udcab",
    Q: "\ud835\udcac",
    R: "\u211b",
    S: "\ud835\udcae",
    T: "\ud835\udcaf",
    U: "\ud835\udcb0",
    V: "\ud835\udcb1",
    W: "\ud835\udcb2",
    X: "\ud835\udcb3",
    Y: "\ud835\udcb4",
    Z: "\ud835\udcb5",
    a: "\ud835\udcb6",
    b: "\ud835\udcb7",
    c: "\ud835\udcb8",
    d: "\ud835\udcb9",
    e: "\u212f",
    f: "\ud835\udcbb",
    g: "\u210a",
    h: "\ud835\udcbd",
    i: "\ud835\udcbe",
    j: "\ud835\udcbf",
    k: "\ud835\udcc0",
    l: "\ud835\udcc1",
    m: "\ud835\udcc2",
    n: "\ud835\udcc3",
    o: "\u2134",
    p: "\ud835\udcc5",
    q: "\ud835\udcc6",
    r: "\ud835\udcc7",
    s: "\ud835\udcc8",
    t: "\ud835\udcc9",
    u: "\ud835\udcca",
    v: "\ud835\udccb",
    w: "\ud835\udccc",
    x: "\ud835\udccd",
    y: "\ud835\udcce",
    z: "\ud835\udccf"
};
org.imatheq.formulaeditor.parsing.expression.ScriptBoldList = {
    A: "\ud835\udcd0",
    B: "\ud835\udcd1",
    C: "\ud835\udcd2",
    D: "\ud835\udcd3",
    E: "\ud835\udcd4",
    F: "\ud835\udcd5",
    G: "\ud835\udcd6",
    H: "\ud835\udcd7",
    I: "\ud835\udcd8",
    J: "\ud835\udcd9",
    K: "\ud835\udcda",
    L: "\ud835\udcdb",
    M: "\ud835\udcdc",
    N: "\ud835\udcdd",
    O: "\ud835\udcde",
    P: "\ud835\udcdf",
    Q: "\ud835\udce0",
    R: "\ud835\udce1",
    S: "\ud835\udce2",
    T: "\ud835\udce3",
    U: "\ud835\udce4",
    V: "\ud835\udce5",
    W: "\ud835\udce6",
    X: "\ud835\udce7",
    Y: "\ud835\udce8",
    Z: "\ud835\udce9",
    a: "\ud835\udcea",
    b: "\ud835\udceb",
    c: "\ud835\udcec",
    d: "\ud835\udced",
    e: "\ud835\udcee",
    f: "\ud835\udcef",
    g: "\ud835\udcf0",
    h: "\ud835\udcf1",
    i: "\ud835\udcf2",
    j: "\ud835\udcf3",
    k: "\ud835\udcf4",
    l: "\ud835\udcf5",
    m: "\ud835\udcf6",
    n: "\ud835\udcf7",
    o: "\ud835\udcf8",
    p: "\ud835\udcf9",
    q: "\ud835\udcfa",
    r: "\ud835\udcfb",
    s: "\ud835\udcfc",
    t: "\ud835\udcfd",
    u: "\ud835\udcfe",
    v: "\ud835\udcff",
    w: "\ud835\udd00",
    x: "\ud835\udd01",
    y: "\ud835\udd02",
    z: "\ud835\udd03"
};
org.imatheq.formulaeditor.parsing.expression.FrakturList = {
    A: "\ud835\udd04",
    B: "\ud835\udd05",
    C: "\u212d",
    D: "\ud835\udd07",
    E: "\ud835\udd08",
    F: "\ud835\udd09",
    G: "\ud835\udd0a",
    H: "\u210c",
    I: "\u2111",
    J: "\ud835\udd0d",
    K: "\ud835\udd0e",
    L: "\ud835\udd0f",
    M: "\ud835\udd10",
    N: "\ud835\udd11",
    O: "\ud835\udd12",
    P: "\ud835\udd13",
    Q: "\ud835\udd14",
    R: "\u211c",
    S: "\ud835\udd16",
    T: "\ud835\udd17",
    U: "\ud835\udd18",
    V: "\ud835\udd19",
    W: "\ud835\udd1a",
    X: "\ud835\udd1b",
    Y: "\ud835\udd1c",
    Z: "\u2128",
    a: "\ud835\udd1e",
    b: "\ud835\udd1f",
    c: "\ud835\udd20",
    d: "\ud835\udd21",
    e: "\ud835\udd22",
    f: "\ud835\udd23",
    g: "\ud835\udd24",
    h: "\ud835\udd25",
    i: "\ud835\udd26",
    j: "\ud835\udd27",
    k: "\ud835\udd28",
    l: "\ud835\udd29",
    m: "\ud835\udd2a",
    n: "\ud835\udd2b",
    o: "\ud835\udd2c",
    p: "\ud835\udd2d",
    q: "\ud835\udd2e",
    r: "\ud835\udd2f",
    s: "\ud835\udd30",
    t: "\ud835\udd31",
    u: "\ud835\udd32",
    v: "\ud835\udd33",
    w: "\ud835\udd34",
    x: "\ud835\udd35",
    y: "\ud835\udd36",
    z: "\ud835\udd37"
};
org.imatheq.formulaeditor.parsing.expression.FrakturBoldList = {
    A: "\ud835\udd6c",
    B: "\ud835\udd6d",
    C: "\ud835\udd6e",
    D: "\ud835\udd6f",
    E: "\ud835\udd70",
    F: "\ud835\udd71",
    G: "\ud835\udd72",
    H: "\ud835\udd73",
    I: "\ud835\udd74",
    J: "\ud835\udd75",
    K: "\ud835\udd76",
    L: "\ud835\udd77",
    M: "\ud835\udd78",
    N: "\ud835\udd79",
    O: "\ud835\udd7a",
    P: "\ud835\udd7b",
    Q: "\ud835\udd7c",
    R: "\ud835\udd7d",
    S: "\ud835\udd7e",
    T: "\ud835\udd7f",
    U: "\ud835\udd80",
    V: "\ud835\udd81",
    W: "\ud835\udd82",
    X: "\ud835\udd83",
    Y: "\ud835\udd84",
    Z: "\ud835\udd85",
    a: "\ud835\udd86",
    b: "\ud835\udd87",
    c: "\ud835\udd88",
    d: "\ud835\udd89",
    e: "\ud835\udd8a",
    f: "\ud835\udd8b",
    g: "\ud835\udd8c",
    h: "\ud835\udd8d",
    i: "\ud835\udd8e",
    j: "\ud835\udd8f",
    k: "\ud835\udd90",
    l: "\ud835\udd91",
    m: "\ud835\udd92",
    n: "\ud835\udd93",
    o: "\ud835\udd94",
    p: "\ud835\udd95",
    q: "\ud835\udd96",
    r: "\ud835\udd97",
    s: "\ud835\udd98",
    t: "\ud835\udd99",
    u: "\ud835\udd9a",
    v: "\ud835\udd9b",
    w: "\ud835\udd9c",
    x: "\ud835\udd9d",
    y: "\ud835\udd9e",
    z: "\ud835\udd9f"
};
org.imatheq.formulaeditor.parsing.expression.RevList = {};
com.efmase.js.utilities.toolset.swap()
}
)();
(function() {
org.imatheq.formulaeditor.parsing.expression.NonItalicMiList = "\u221e\u2102\u2145\u210d\u212a\u2115\u2119\u211a\u211d\u2124\u2135\u2205"
}
)();
$package("org.imatheq.parsing");
$package("org.imatheq.formulaeditor.options");
(function() {
org.imatheq.formulaeditor.Options = $extend(Object, {
    defaultOptions: {
        debug: !1,
        continuingNavigation: !0,
        decimalMark: ".",
        featureUndo: !0,
        modeArith1Divide: "restricted",
        optionVerboseStyle: "false",
        optionArith1UnaryMinusBrackets: "false",
        optionInterval1Brackets: {
            lo: "(",
            lc: "[",
            ro: ")",
            rc: "]"
        },
        optionResizeBrackets: !0,
        styleArith1Divide: "mfrac",
        styleArith1Times: "cross",
        styleTransc1Log: "function",
        symbolArith1Times: "\u00b7",
        defaultFontNameIdx: 0,
        defaultFontSizeIdx: 6,
        defaultFont4NewSymbol: "Times New Roman",
        defAutoItalic: !0,
        defSymmetric: !0,
        stretchMOBrackets: !0,
        hideFontTools: !1
    },
    getOption: function(f) {
        return void 0 !== org.imatheq.formulaeditor.options[f] ? org.imatheq.formulaeditor.options[f] : void 0 !== this.defaultOptions[f] ? this.defaultOptions[f] : null
    },
    getArith1DivideMode: function() {
        var f = this.getOption("modeArith1Divide");
        return "normal" == f || "restricted" == f || "inline" == f ? f : "restricted"
    },
    getArith1PowerOptionInversePrefix: function() {
        return "true" == this.getOption("optionArith1PowerInversePrefix") ? "true" : "false"
    },
    getArith1PowerOptionPrefix: function() {
        return "true" == this.getOption("optionArith1PowerPrefix") ? "true" : "false"
    },
    getArith1TimesStyle: function() {
        var f = this.getOption("styleArith1Times");
        return "dot" == f || "cross" == f || "star" == f ? f : this.defaultOptions.styleArith1Times
    },
    getArith1TimesSymbol: function() {
        var f = this.getOption("styleArith1Times");
        return "dot" == f ? "\u00b7" : "cross" == f ? "\u00d7" : "star" == f ? "*" : this.defaultOptions.symbolArith1Times
    },
    getArith1UnaryMinusOptionBrackets: function() {
        return "true" == this.getOption("optionArith1UnaryMinusBrackets") ? "true" : "false"
    },
    getDecimalMark: function() {
        var f = this.getOption("decimalMark");
        return "." === f || "," === f ? f : this.defaultOptions.decimalMark
    },
    getContinuingNavigation: function() {
        var f = this.getOption("continuingNavigation");
        return 1 == f || 0 == f ? f : this.defaultOptions.optionResizeBrackets
    },
    getInterval1BracketsOption: function() {
        var f = this.getOption("continuingNavigation");
        return "object" === typeof f && "string" === typeof f.lo && "string" === typeof f.lc && "string" === typeof f.ro && "string" === typeof f.rc ? f : this.defaultOptions.optionInterval1Brackets
    },
    getListSeparator: function() {
        var f = this.getDecimalMark();
        if ("." === f)
            return ",";
        if ("," === f)
            return ";";
        alert("Options: unable to get listseparator.");
        return null
    },
    getListSeparatorFixed: function() {
        var f = this.getOption("optionListSeparatorFixed")
          , a = this.getListSeparator();
        return null !== f ? f : a
    },
    getResizeBracketsOption: function() {
        var f = this.getOption("optionResizeBrackets");
        return 1 == f || 0 == f ? f : this.defaultOptions.optionResizeBrackets
    },
    getTransc1LogStyle: function() {
        var f = this.getOption("styleTransc1Log");
        return "prefix" == f || "postfix" == f || "function" == f ? f : this.defaultOptions.styleTransc1Log
    },
    getVerboseStyleOption: function() {
        var f = this.getOption("optionVerboseStyle");
        return "true" == f || "false" == f ? f : this.defaultOptions.optionVerboseStyle
    },
    getExpressionParsingContext: function() {
        return {
            decimalMark: this.getDecimalMark(),
            continuingNavigation: this.getContinuingNavigation(),
            listSeparator: this.getListSeparator(),
            optionArith1DivideMode: this.getArith1DivideMode(),
            optionArith1PowerInversePrefix: this.getArith1PowerOptionInversePrefix(),
            optionArith1PowerPrefix: this.getArith1PowerOptionPrefix(),
            optionArith1UnaryMinusBrackets: this.getArith1UnaryMinusOptionBrackets(),
            styleTransc1Log: this.getTransc1LogStyle(),
            symbolArith1Times: this.getArith1TimesSymbol()
        }
    },
    getPresentationContext: function() {
        return {
            decimalMark: this.getDecimalMark(),
            continuingNavigation: this.getContinuingNavigation(),
            listSeparator: this.getListSeparator(),
            listSeparatorFixed: this.getListSeparatorFixed(),
            modeArith1Divide: this.getArith1DivideMode(),
            optionArith1UnaryMinusBrackets: this.getArith1UnaryMinusOptionBrackets(),
            optionInterval1Brackets: this.getInterval1BracketsOption(),
            optionResizeBrackets: this.getResizeBracketsOption(),
            styleTransc1Log: this.getTransc1LogStyle(),
            symbolArith1Times: this.getArith1TimesSymbol()
        }
    }
})
}
)();
(function() {
var f = org.imatheq.parsing.Parser
  , a = []
  , b = null;
org.imatheq.formulaeditor.parsing.expression.ExpressionContextParser = $extend(Object, {
    getParser: function(d) {
        var g;
        if (null === d || void 0 === d)
            d = this.getContext();
        if (void 0 === d.parser) {
            var k = f;
            for (g = 0; g < a.length; g++)
                k = $extend(k, a[g](d));
            d.parser = k
        }
        return d.parser
    }
});
org.imatheq.formulaeditor.parsing.expression.ExpressionContextParser.addFunction = function(d) {
    a.push(d)
}
;
org.imatheq.formulaeditor.parsing.expression.ExpressionContextParser.clearCache = function() {
    b = null
}
;
org.imatheq.formulaeditor.parsing.expression.ExpressionContextParser.getContext = function() {
    null === b && (b = (new org.imatheq.formulaeditor.Options).getExpressionParsingContext());
    return b
}
}
)();
$package("org.imatheq.formulaeditor.parsing.xml");
(function() {
org.imatheq.formulaeditor.parsing.xml.XMLParser = $extend(Object, {
    name: "XMLParser",
    xmldoc: null,
    parse: function(f, a) {
        var b = [];
        for (a = 0; a < f.childNodes.length; a++) {
            var d = f.childNodes.item(a);
            var g = d.getAttribute("id");
            var k = this.handle(d);
            b[g] = {
                id: g,
                w: d.getAttribute("w"),
                h: d.getAttribute("h"),
                l: d.getAttribute("l"),
                t: d.getAttribute("t"),
                b: d.getAttribute("b"),
                entry: k
            }
        }
        return b
    },
    loadXml: function(f) {
        var a = f.match(/\s*<[^(>|\s)]*\s*/);
        if (null === a)
            throw Error("Invalid XML string: " + f);
        if (window.DOMParser) {
            parser = new DOMParser;
            try {
                var b = parser.parseFromString(f, "text/xml")
            } catch (d) {
                throw Error("XML parsing error.");
            }
        } else
            b = new ActiveXObject("Microsoft.XMLDOM"),
            b.async = !1,
            b.loadXML(f);
        if (b.parseError && 0 != b.parseError.errorCode)
            throw f = "XML Parsing Error: " + b.parseError.reason + " at line " + b.parseError.line + " at position " + b.parseError.linepos,
            Error(f);
        if (b.documentElement.localName != a[0].trim().slice(1) && "math/" != a[0].trim().slice(1))
            throw Error("Error parsing XML: wrong root node" + b.documentElement.localName + ", instead of " + a[0].slice(1) + " returned");
        return b
    },
    parseString: function(f, a, b) {
        var d = org.imatheq.formulaeditor.presentation;
        if ("string" != typeof f)
            throw Error("Error in parseString(): input not string");
        f = f.replace(/&nbsp;/g, "&#xa0;");
        this.xmldoc = f = this.loadXml(f);
        f = f.documentElement;
        if ("math" != f.localName.toLowerCase()) {
            var g = this.loadXml('<math xmlns="http://www.w3.org/1998/Math/MathML"/>');
            this.xmldoc = g;
            g.documentElement.appendChild(f);
            f = g.documentElement
        }
        if (null !== f)
            this.removeComments(f),
            this.removeWhitespace(f);
        else
            return null;
        if (1 == f.childNodes.length && "mrow" == f.childNodes.item(0).localName.toLowerCase()) {
            var k = f.childNodes.item(0);
            for (f.removeChild(k); 0 < k.childNodes.length; )
                g = k.childNodes.item(0),
                f.appendChild(g)
        }
        if (null !== b && void 0 !== b && b)
            for (b = f.childNodes.length - 1; 0 <= b; b--)
                g = f.childNodes.item(b),
                "mo" != g.localName.toLowerCase() && "mspace" != g.localName.toLowerCase() || null === g.getAttribute("linebreak") || "newline" != g.getAttribute("linebreak").toLowerCase() || f.removeChild(g);
        return 0 == f.childNodes.length ? new d.Row(new d.BlockSymbol) : this.handle(f, a)
    },
    handle: function(f, a) {
        if (null === f.localName)
            return null;
        var b = "handle" + f.localName.replace("-", "");
        if (b in this) {
            var d = f.parentNode
              , g = f.getAttribute("mathvariant")
              , k = f.getAttribute("mathcolor")
              , e = f.getAttribute("symmetric");
            "math" != f.localName.toLowerCase() && null !== d && void 0 !== d && (null === g && null !== d.getAttribute("mathvariant") && (g = d.getAttribute("mathvariant"),
            f.setAttribute("mathvariant", g)),
            null === k && null !== d.getAttribute("mathcolor") && (k = d.getAttribute("mathcolor"),
            f.setAttribute("mathcolor", k)),
            null === e && null !== d.getAttribute("symmetric") && (e = d.getAttribute("symmetric"),
            f.setAttribute("symmetric", e)));
            a = null !== a && void 0 !== a ? this[b](f, a) : this[b](f);
            "mi" != f.localName && "mn" != f.localName && "mo" != f.localName && "ms" != f.localName && "mtext" != f.localName && (null !== g && ("normal" == g.toLowerCase() ? (a.bold = !1,
            a.forcedItalic = !1,
            a.autoItalic = !1) : "bold" == g.toLowerCase() ? (a.bold = !0,
            a.forcedItalic = !1,
            a.autoItalic = !1) : "italic" == g.toLowerCase() ? (a.bold = !1,
            a.forcedItalic = !0,
            a.autoItalic = !1) : "bold-italic" == g.toLowerCase() && (a.bold = !0,
            a.forcedItalic = !0,
            a.autoItalic = !1)),
            null !== k && (a.mathcolor = k));
            return a
        }
        throw Error(this.name + " doesn't know how to handle this node: " + f + ". INFO: 1.");
    },
    removeComments: function(f) {
        for (var a = f.childNodes, b = a.length - 1; 0 <= b; b--) {
            var d = a.item(b);
            d && (8 == d.nodeType ? f.removeChild(d) : d.hasChildNodes() && this.removeComments(d))
        }
    },
    removeWhitespace: function(f) {
        for (var a = f.childNodes, b = a.length - 1; 0 <= b; b--) {
            var d = a.item(b);
            if (d && "mtext" != d.parentNode.localName.toLowerCase())
                if (3 == d.nodeType) {
                    var g = d.nodeValue.trim();
                    "" === g && "mo" == d.parentNode.localName.toLowerCase() && 1 == d.parentNode.childNodes.length ? -1 != d.nodeValue.indexOf("\u00a0") ? d.nodeValue = "\u00a0" : -1 != d.nodeValue.charAt(" ") && (d.nodeValue = " ") : "" === g && f.removeChild(d)
                } else
                    d.hasChildNodes() && this.removeWhitespace(d)
        }
    },
    getMOPP: function(f, a) {
        var b = org.imatheq.formulaeditor.parsing.expression.MOList[f]
          , d = org.imatheq.formulaeditor.presentation.SymbolOnscreens;
        f = null !== d[f] && void 0 !== d[f] ? org.imatheq.formulaeditor.parsing.expression.MOList[d[f]] : null;
        d = {
            fence: !1,
            stretchy: !1
        };
        void 0 !== b && void 0 !== b[a] && null !== b[a] ? (-1 != b[a].pp.indexOf("fence") && (d.fence = !0),
        -1 != b[a].pp.indexOf("stretchy") && (d.stretchy = !0)) : f && void 0 !== f[a] && null !== f[a] && (-1 != f[a].pp.indexOf("fence") && (d.fence = !0),
        -1 != f[a].pp.indexOf("stretchy") && (d.stretchy = !0));
        return d
    },
    isStretchy: function(f, a) {
        return null !== a.getAttribute("stretchy") && (a = "false" == a.getAttribute("stretchy").toLowerCase() ? !1 : "true" == a.getAttribute("stretchy").toLowerCase() ? !0 : null,
        null !== a) ? a : f.stretchy
    },
    areBracketsPaired: function(f, a) {
        var b = org.imatheq.formulaeditor.presentation.SymbolOnscreens
          , d = org.imatheq.formulaeditor.parsing.expression.BracketList
          , g = null === b[f] ? "A" : b[f];
        b = null === b[a] ? "A" : b[a];
        f = -1 != d.indexOf(f) ? d.indexOf(f) : -1 != d.indexOf(g) ? d.indexOf(g) : -1;
        a = -1 != d.lastIndexOf(a) ? d.lastIndexOf(a) : -1 != d.lastIndexOf(b) ? d.lastIndexOf(b) : -1;
        return f == a - 1 && 0 == f % 2 ? !0 : !1
    },
    copyMOAttributes: function(f, a, b) {
        if (null !== a)
            for (var d = 0; d < a.attributes.length; d++) {
                var g = a.attributes[d];
                f.setAttribute(b + "_" + g.name, g.value)
            }
    },
    MOsToMfenced: function(f, a, b, d, g, k, e, h) {
        var l = f.childNodes
          , m = this.xmldoc.createElement("mfenced");
        m.setAttribute("isMO", "true");
        null !== h && m.setAttribute("symmetric", h);
        var n = a + 1;
        d ? (h = l[a],
        m.setAttribute("open", h.firstChild.nodeValue.trim()),
        m.setAttribute("o_stretchy", k),
        this.copyMOAttributes(m, h, "open")) : (h = null,
        n--,
        m.setAttribute("open", ""),
        m.setAttribute("o_stretchy", "false"));
        g ? (k = l[b],
        m.setAttribute("close", k.firstChild.nodeValue.trim()),
        m.setAttribute("c_stretchy", e),
        this.copyMOAttributes(m, k, "close")) : (k = null,
        m.setAttribute("close", ""),
        m.setAttribute("c_stretchy", "false"));
        b = (g ? b : b + 1) - n;
        d = d ? h : k;
        for (g = 0; g < b; g++)
            m.appendChild(l[n]);
        f.insertBefore(m, d);
        null !== h && f.removeChild(h);
        null !== k && f.removeChild(k);
        return a
    },
    ConvertMOsToMfenced: function(f, a, b) {
        for (var d = f.childNodes; a < d.length; a++) {
            var g = d.item(a);
            if (g && "mo" == g.localName.toLowerCase() && 1 == g.childNodes.length && 3 == g.childNodes.item(0).nodeType) {
                var k = g.firstChild.nodeValue.trim()
                  , e = this.getMOPP(k, 0)
                  , h = this.getMOPP(k, 2);
                k = this.isStretchy(e, g);
                var l = this.isStretchy(h, g);
                g = g.getAttribute("symmetric");
                if (1 == b && e.fence && !h.fence && k || 2 == b && e.fence && h.fence) {
                    e = this.Convert1PairMOs(f, a, b);
                    if (2 == b && e >= d.length && 0 < a && k) {
                        this.MOsToMfenced(f, 0, a, !1, !0, null, k, g);
                        break
                    }
                    a = e
                } else
                    1 == b && 0 != a && !e.fence && h.fence && l && (this.MOsToMfenced(f, 0, a, !1, !0, null, l, g),
                    a = 0)
            } else
                g.firstElementChild && this.ConvertMOsToMfenced(g, 0, b)
        }
    },
    Convert1PairMOs: function(f, a, b) {
        var d = f.childNodes
          , g = d.item(a)
          , k = g.firstChild.nodeValue.trim()
          , e = this.getMOPP(k, 0)
          , h = this.getMOPP(k, 2)
          , l = this.isStretchy(e, g);
        this.isStretchy(h, g);
        g = g.getAttribute("symmetric");
        for (var m = a + 1; m < d.length; m++) {
            var n = d.item(m);
            if (n && "mo" == n.localName.toLowerCase() && 1 == n.childNodes.length && 3 == n.childNodes.item(0).nodeType) {
                var p = n.firstChild.nodeValue.trim()
                  , q = this.getMOPP(p, 2)
                  , t = this.getMOPP(p, 0)
                  , r = this.isStretchy(t, n)
                  , u = this.isStretchy(q, n);
                n.getAttribute("symmetric");
                if (1 == b && e.fence && !h.fence && !t.fence && q.fence || 2 == b && e.fence && h.fence && t.fence && q.fence && this.areBracketsPaired(k, p))
                    return d = m,
                    l && u && 1 < d - a ? (this.MOsToMfenced(f, a, d, !0, !0, l, u, g),
                    2 == b ? a - 1 : a) : m;
                if (1 == b && !q.fence && t.fence && r) {
                    u = this.Convert1PairMOs(f, m, b);
                    if (2 == b && u >= d.length && 1 < m - a)
                        return this.MOsToMfenced(f, a + 1, m, !1, !0, l, null, g),
                        a + 1;
                    m = u
                }
            } else
                n.firstElementChild && this.ConvertMOsToMfenced(n, 0, b)
        }
        return m >= d.length && l && 1 == b && e.fence && !h.fence && a < d.length - 1 ? this.MOsToMfenced(f, a, d.length - 1, !0, !1, l, null, g) : m
    }
})
}
)();
(function() {
org.imatheq.formulaeditor.parsing.openmath.VariableList = {}
}
)();
(function() {
org.imatheq.formulaeditor.presentation.Fraction = $extend(org.imatheq.formulaeditor.presentation.Node, {
    slowDelete: !0,
    lineWidth: null,
    draw: function(f, a, b, d, g) {
        d = f.getXDimentions(a, b, d);
        d = d.top + Math.round(.4 * d.height);
        b = Math.round(b);
        var k = this.children[0]
          , e = this.children[1]
          , h = null === this.lineWidth ? 1 : this.lineWidth
          , l = k.draw(f, a, 0, 0, !0)
          , m = e.draw(f, a, 0, 0, !0)
          , n = d - l.height - 4
          , p = Math.max(l.width, m.width) + 8 + 4 * h;
        this.dimensions = {
            left: b + Math.min(l.left, m.left),
            top: n,
            width: p,
            height: l.height + m.height + 8 + h
        };
        g || (k.draw(f, a, b + Math.round((p - l.width) / 2), n - l.top, g),
        0 != h && (k = f.getContext(),
        k.save(),
        k.strokeStyle = this.mathcolor,
        k.lineWidth = h,
        k.beginPath(),
        k.moveTo(b + 2 * h, d),
        k.lineTo(b + p - 2 * h, d),
        k.stroke(),
        k.closePath(),
        k.restore()),
        e.draw(f, a, b + Math.round((p - m.width) / 2), d + 4 - m.top + 1, g));
        return this.dimensions
    },
    getCursorPosition: function(f, a, b) {
        var d = this.children[0].dimensions
          , g = this.children[1].dimensions;
        return a > this.dimensions.left && a < this.dimensions.left + this.dimensions.width - 1 ? b < (d.top + d.height + g.top) / 2 ? this.children[0].getCursorPosition(f, a, b) : this.children[1].getCursorPosition(f, a, b) : a <= this.dimensions.left ? null === this.parent || void 0 === this.parent ? null : this.parent.getPrecedingCursorPosition(f, this.index + 1, !1) : this.parent.getFollowingCursorPosition(f, this.index, !1)
    },
    getFollowingCursorPosition: function(f, a, b) {
        return null === a || void 0 === a ? this.children[0].getFollowingCursorPosition(f, null, b) : 0 == a && !0 === f.continuingNavigation ? this.children[1].getFollowingCursorPosition(f, null, b) : null !== this.parent ? {
            row: this.parent,
            index: this.index + 1
        } : null
    },
    getPrecedingCursorPosition: function(f, a, b) {
        if (!0 === f.continuingNavigation) {
            if (null === a || void 0 === a)
                return this.children[1].getPrecedingCursorPosition(f, null, b);
            if (1 == a)
                return this.children[0].getPrecedingCursorPosition(f, null, b)
        }
        return null === a || void 0 === a ? this.children[0].getPrecedingCursorPosition(f, null, b) : null !== this.parent ? {
            row: this.parent,
            index: this.index
        } : null
    },
    getLowerCursorPosition: function(f, a, b, d) {
        return null === a || void 0 === a ? this.children[0].getLowerCursorPosition(f, null, b, d) : 0 === a ? this.children[1].getLowerCursorPosition(f, null, b, d) : null !== this.parent ? this.parent.getLowerCursorPosition(f, this.index, b, d) : null
    },
    getHigherCursorPosition: function(f, a, b, d) {
        return null === a || void 0 === a ? this.children[1].getHigherCursorPosition(f, null, b, d) : 1 == a ? this.children[0].getHigherCursorPosition(f, null, b, d) : null !== this.parent ? this.parent.getHigherCursorPosition(f, this.index, b, d) : null
    },
    getMathML: function() {
        return "<mfrac" + (this.in_attrbs ? this.in_attrbs : "") + (null === this.mathcolor || "" == this.mathcolor || "null" == this.mathcolor || "#000000" == this.mathcolor ? "" : ' mathcolor="' + this.mathcolor + '"') + (null === this.lineWidth ? "" : ' linethickness="' + this.lineWidth + '"') + ">" + this.children[0].getMathML(!0) + this.children[1].getMathML(!0) + "</mfrac>"
    },
    getAltText: function() {
        var f = org.imatheq.formulaeditor.FormulaEditor.getEditor()
          , a = f.altstrs.fraction[this.children[0].children && 1 < this.children[0].children.length || this.children[1].children && 1 < this.children[1].children.length ? 1 : 0].replace("$0$", this.children[0].getAltText().trim()).replace("$1$", this.children[1].getAltText().trim())
          , b = a.trim();
        null !== f.altstrs[b] && void 0 !== f.altstrs[b] && (a = f.altstrs[b]);
        return a
    }
})
}
)();
(function() {
org.imatheq.formulaeditor.presentation.VerticalBracketed = $extend(org.imatheq.formulaeditor.presentation.Node, {
    mtype: "mover",
    accent: "",
    accentunder: "",
    middle: null,
    upperBracket: null,
    lowerBracket: null,
    slowDelete: !0,
    margin: 2,
    initialize: function() {
        0 < arguments.length ? (this.mtype = arguments[0],
        this.upperBracket = arguments[1],
        this.middle = arguments[2],
        this.lowerBracket = arguments[3],
        4 < arguments.length && (this.mathcolor = arguments[4]),
        this.children = [],
        this.children.push(this.middle)) : this.children = [];
        for (var f = new org.imatheq.formulaeditor.presentation.Row, a = this.functionsFromRow.length - 1; 0 <= a; a--)
            this[this.functionsFromRow[a]] || (this[this.functionsFromRow[a]] = f[this.functionsFromRow[a]]);
        this.updateChildren()
    },
    getFontSizeData: function(f, a, b) {
        var d = org.imatheq.formulaeditor.presentation;
        if ("" != this.upperBracket.value) {
            var g = this.upperBracket.onscreen ? this.upperBracket.onscreen : this.upperBracket.value;
            org.imatheq.formulaeditor.MathCanvas.symbolPositions[g] && (new d.Symbol(g)).getFontSizeData(f, a, b, !0);
            org.imatheq.formulaeditor.MathCanvas.symbolPositions[g + "1"] ? (new d.Symbol(g + "1")).getFontSizeData(f, a, b, !0) : org.imatheq.formulaeditor.MathCanvas.symbolPositions[g + "m"] && (new d.Symbol(g + "m")).getFontSizeData(f, a, b, !0)
        }
        "" != this.lowerBracket.value && (g = this.lowerBracket.onscreen ? this.lowerBracket.onscreen : this.lowerBracket.value,
        org.imatheq.formulaeditor.MathCanvas.symbolPositions[g] && (new d.Symbol(g)).getFontSizeData(f, a, b, !0),
        org.imatheq.formulaeditor.MathCanvas.symbolPositions[g + "1"] ? (new d.Symbol(g + "1")).getFontSizeData(f, a, b, !0) : org.imatheq.formulaeditor.MathCanvas.symbolPositions[g + "m"] && (new d.Symbol(g + "m")).getFontSizeData(f, a, b, !0));
        this.getFontSizeData.parent.getFontSizeData.call(this, f, a, b)
    },
    draw: function(f, a, b, d, g) {
        6 > f.getFontSizeIdx(a.fontSizeModifier) && (this.margin = 1);
        this.middle.draw(f, a, 0, 0, !0);
        this.upperBracket.minimumWidth = this.middle.dimensions.width - Math.min(this.middle.children[0].dimensions.width, this.middle.children[this.middle.children.length - 1].dimensions.width);
        1 == this.middle.children.length && (this.upperBracket.minimumWidth = this.middle.dimensions.width);
        this.lowerBracket.minimumWidth = this.upperBracket.minimumWidth;
        this.upperBracket.fullWidth = this.middle.dimensions.width;
        this.lowerBracket.fullWidth = this.middle.dimensions.width;
        "" == this.upperBracket.value ? this.upperBracket.dimensions = {
            top: this.middle.dimensions.top,
            left: this.middle.dimensions.left,
            width: this.middle.dimensions.width,
            height: 0
        } : this.upperBracket.draw(f, a, 0, 0, !0);
        "" == this.lowerBracket.value ? this.lowerBracket.dimensions = {
            top: this.middle.dimensions.top + this.middle.dimensions.height,
            left: this.middle.dimensions.left,
            width: this.middle.dimensions.width,
            height: 0
        } : this.lowerBracket.draw(f, a, 0, 0, !0);
        width = Math.max(this.upperBracket.dimensions.width, this.middle.dimensions.width, this.lowerBracket.dimensions.width);
        var k = 0
          , e = 0
          , h = 0;
        width > this.middle.dimensions.width && (k = (width - this.middle.dimensions.width) / 2);
        this.upperBracket.dimensions.width < width && (e = (width - this.upperBracket.dimensions.width) / 2);
        this.lowerBracket.dimensions.width < width && (h = (width - this.lowerBracket.dimensions.width) / 2);
        this.dimensions = {
            width,
            height: this.upperBracket.dimensions.height + this.middle.dimensions.height + this.lowerBracket.dimensions.height + 2 * this.margin,
            left: b,
            top: d + this.middle.dimensions.top - this.upperBracket.dimensions.height - this.margin
        };
        this.upperBracket.fullWidth = this.middle.dimensions.width;
        "" != this.upperBracket.value && this.upperBracket.draw(f, a, b + e, this.dimensions.top - this.upperBracket.dimensions.top, g);
        this.middle.draw(f, a, b + k, d, g);
        this.lowerBracket.fullWidth = this.middle.dimensions.width;
        "" != this.lowerBracket.value && this.lowerBracket.draw(f, a, b + h, this.middle.dimensions.top + this.middle.dimensions.height - this.lowerBracket.dimensions.top + this.margin, g);
        return this.dimensions
    },
    setSymbFontAttrbs: function(f) {
        "" != this.upperBracket.value && this.upperBracket.setSymbFontAttrbs(f);
        "" != this.lowerBracket.value && this.lowerBracket.setSymbFontAttrbs(f);
        this.setSymbFontAttrbs.parent.setSymbFontAttrbs.call(this, f)
    },
    functionsFromRow: ["getFirstCursorPosition", "getLastCursorPosition", "getLowerCursorPosition", "getHigherCursorPosition"],
    getCursorPosition: function(f, a, b) {
        var d = this.middle.dimensions;
        return a >= d.left && a < d.left + d.width ? this.middle.getCursorPosition(f, a, b) : a < d.left ? null !== this.parent ? {
            row: this.parent,
            index: 0 == this.index ? 0 : this.index - 1
        } : this.getPrecedingCursorPosition(f) : null !== this.parent ? {
            row: this.parent,
            index: this.index + 1
        } : this.getPrecedingCursorPosition(f)
    },
    getFollowingCursorPosition: function(f, a, b) {
        if (null === b || void 0 === b)
            b = !0;
        if (null === a || void 0 === a)
            return this.middle.getFollowingCursorPosition(f, null, b);
        if (null !== this.parent)
            return this.parent.getFollowingCursorPosition(f, this.index, !1)
    },
    getPrecedingCursorPosition: function(f, a, b) {
        if (null === b || void 0 === b)
            b = !0;
        if (null === a || void 0 === a)
            return this.middle.getPrecedingCursorPosition(f, null, b);
        if (null !== this.parent)
            return this.parent.getPrecedingCursorPosition(f, this.index + 1, !1)
    },
    copy: function() {
        return this.clone(this.mtype, this.upperBracket.copy(), this.children[0].copy(), this.lowerBracket.copy())
    },
    getMathML: function() {
        var f = "<" + this.mtype + (this.in_attrbs ? this.in_attrbs : "");
        if ("mover" == this.mtype || "munderover" == this.mtype)
            f = "" != this.accent ? f + (" accent='" + this.accent + "'") : "" != this.upperBracket ? f + " accent='true'" : f + " accent='false'";
        if ("munder" == this.mtype || "munderover" == this.mtype)
            f = "" != this.accentunder ? f + (" accentunder='" + this.accentunder + "'") : "" != this.lowerBracket ? f + " accentunder='true'" : f + " accentunder='false'";
        f += null === this.mathcolor || "" == this.mathcolor || "null" == this.mathcolor || "#000000" == this.mathcolor ? "" : ' mathcolor="' + this.mathcolor + '"';
        f += ">" + this.middle.getMathML(!0);
        "" != this.lowerBracket.value && (f += this.lowerBracket.getMathML());
        "" != this.upperBracket.value && (f += this.upperBracket.getMathML());
        return f += "</" + this.mtype + ">"
    },
    getAltText: function() {
        var f = org.imatheq.formulaeditor.FormulaEditor.getEditor();
        if ("mover" == this.mtype)
            return f.altstrs.mover.replace("$0$", this.middle.getAltText().trim()).replace("$1$", f.getSymbolAltText(this.upperBracket.value).trim());
        if ("munder" == this.mtype)
            return f.altstrs.munder.replace("$0$", this.middle.getAltText().trim()).replace("$1$", f.getSymbolAltText(this.lowerBracket.value).trim());
        if ("munderover" == this.mtype)
            return f.altstrs.munderover.replace("$0$", this.middle.getAltText().trim()).replace("$1$", f.getSymbolAltText(this.lowerBracket.value).trim()).replace("$2$", f.getSymbolAltText(this.upperBracket.value).trim())
    }
})
}
)();
(function() {
org.imatheq.formulaeditor.presentation.MiddleBracketed = $extend(org.imatheq.formulaeditor.presentation.Node, {
    middleBracket: null,
    upper: null,
    lower: null,
    slowDelete: !0,
    margin: 2,
    mtype: "mover",
    accent: "",
    accentunder: "",
    initialize: function() {
        0 < arguments.length ? (this.mtype = arguments[0],
        this.middleBracket = arguments[1],
        this.children = arguments[2],
        3 < arguments.length && (this.mathcolor = arguments[3]),
        this.lower = this.upper = null,
        "mover" == this.mtype ? this.upper = this.children[0] : "munder" == this.mtype ? this.lower = this.children[0] : (this.upper = this.children[0],
        this.lower = this.children[1])) : this.children = [];
        this.updateChildren()
    },
    isEmbellished: function() {
        return void 0 !== org.imatheq.formulaeditor.parsing.expression.MOList[this.middleBracket]
    },
    getSymbol: function() {
        return this.middleBracket
    },
    getFontSizeData: function(f, a, b) {
        var d = org.imatheq.formulaeditor.presentation;
        if ("" != this.middleBracket.value) {
            var g = this.middleBracket.onscreen ? this.middleBracket.onscreen : this.middleBracket.value;
            org.imatheq.formulaeditor.MathCanvas.symbolPositions[g] && (new d.Symbol(g)).getFontSizeData(f, a, b, !0);
            org.imatheq.formulaeditor.MathCanvas.symbolPositions[g + "1"] ? (new d.Symbol(g + "1")).getFontSizeData(f, a, b, !0) : org.imatheq.formulaeditor.MathCanvas.symbolPositions[g + "m"] ? (new d.Symbol(g + "m")).getFontSizeData(f, a, b, !0) : org.imatheq.formulaeditor.MathCanvas.symbolPositions[g + "bm"] && (new d.Symbol(g + "bm")).getFontSizeData(f, a, b, !0)
        }
        d = {
            fontSizeModifier: 0
        };
        for (var k in a)
            d[k] = a[k];
        --d.fontSizeModifier;
        null !== this.upper && this.upper.getFontSizeData(f, d, b);
        null !== this.lower && this.lower.getFontSizeData(f, d, b);
        this.getFontSizeData.parent.getFontSizeData.call(this, f, a, b)
    },
    draw: function(f, a, b, d, g, k) {
        var e = k;
        if (void 0 === k || null === k)
            e = {
                lspace: 0,
                rspace: 0
            };
        6 > f.getFontSizeIdx(a.fontSizeModifier) && (this.margin = 1);
        k = {
            fontSizeModifier: 0
        };
        for (var h in a)
            k[h] = a[h];
        --k.fontSizeModifier;
        var l = 0
          , m = h = 0
          , n = 0;
        null !== this.upper && void 0 !== this.upper && (this.upper.draw(f, k, 0, 0, !0),
        l = this.upper.dimensions.width,
        h = this.upper.dimensions.height);
        null !== this.lower && void 0 !== this.lower && (this.lower.draw(f, k, 0, 0, !0),
        m = this.lower.dimensions.width,
        n = this.lower.dimensions.height);
        if (null === this.upper || void 0 === this.upper)
            l = this.lower.dimensions.width;
        if (null === this.lower || void 0 === this.lower)
            m = this.upper.dimensions.width;
        this.middleBracket.minimumWidth = Math.max(l, m);
        this.middleBracket.fullWidth = this.middleBracket.minimumWidth;
        this.middleBracket.draw(f, a, 0, 0, !0);
        if (this.middleBracket.dimensions.topcentre) {
            var p = Math.max(Math.round(l / 2), this.middleBracket.dimensions.width - this.middleBracket.dimensions.topcentre) - (this.middleBracket.dimensions.width - this.middleBracket.dimensions.topcentre)
              , q = Math.max(Math.round(m / 2), this.middleBracket.dimensions.width - this.middleBracket.dimensions.bottomcentre) - (this.middleBracket.dimensions.width - this.middleBracket.dimensions.bottomcentre);
            var t = Math.max(Math.max(Math.round(l / 2), this.middleBracket.dimensions.topcentre) - this.middleBracket.dimensions.topcentre, Math.max(Math.round(m / 2), this.middleBracket.dimensions.bottomcentre) - this.middleBracket.dimensions.bottomcentre);
            width = t + this.middleBracket.dimensions.width + Math.max(p, q);
            l = t + this.middleBracket.dimensions.topcentre - Math.round(l / 2);
            m = t + this.middleBracket.dimensions.bottomcentre - Math.round(m / 2)
        } else
            width = Math.max(l, this.middleBracket.dimensions.width, m),
            l = Math.max(0, Math.round((width - l) / 2)),
            m = Math.max(0, Math.round((width - m) / 2)),
            t = Math.max(0, Math.round((width - this.middleBracket.dimensions.width) / 2));
        d = f.getXDimentions(a, b, d);
        d = d.top + Math.round(.4 * d.height - .5);
        p = -Math.round(this.middleBracket.dimensions.height / 2) - this.middleBracket.dimensions.top;
        this.dimensions = {
            width: width + e.lspace + e.rspace,
            height: h + this.middleBracket.dimensions.height + n + 2 * this.margin,
            left: b,
            top: d - h - Math.round(this.middleBracket.dimensions.height / 2) - this.margin
        };
        g || (null !== this.upper && void 0 !== this.upper && this.upper.draw(f, k, b + l + e.lspace, this.dimensions.top - this.upper.dimensions.top, g),
        this.middleBracket.draw(f, a, b + t + e.lspace, d + p, g),
        null !== this.lower && void 0 !== this.lower && this.lower.draw(f, k, b + m + e.lspace, d + Math.round(this.middleBracket.dimensions.height / 2) + this.margin - this.lower.dimensions.top, g));
        return this.dimensions
    },
    setSymbFontAttrbs: function(f) {
        "" != this.middleBracket.value && this.middleBracket.setSymbFontAttrbs(f);
        this.setSymbFontAttrbs.parent.setSymbFontAttrbs.call(this, f)
    },
    getCursorPosition: function(f, a, b) {
        if (a > this.dimensions.left && a < this.dimensions.left + this.dimensions.width - 1) {
            if (2 == this.children.length) {
                var d = this.children[0].dimensions;
                return b < (d.top + d.height + this.children[1].dimensions.top) / 2 ? this.children[0].getCursorPosition(f, a, b) : this.children[1].getCursorPosition(f, a, b)
            }
            return this.children[0].getCursorPosition(f, a, b)
        }
        return a <= this.dimensions.left ? null === this.parent || void 0 === this.parent ? (console.log("error fraction no parent."),
        null) : this.parent.getPrecedingCursorPosition(f, this.index + 1, !1) : this.parent.getFollowingCursorPosition(f, this.index, !1)
    },
    getFollowingCursorPosition: function(f, a, b) {
        return null === a || void 0 === a ? this.children[0].getFollowingCursorPosition(f, null, b) : 0 == a && 1 < this.children.length && !0 === f.continuingNavigation ? this.children[1].getFollowingCursorPosition(f, null, b) : null !== this.parent ? {
            row: this.parent,
            index: this.index + 1
        } : null
    },
    getPrecedingCursorPosition: function(f, a, b) {
        if (!0 === f.continuingNavigation) {
            if (null === a || void 0 === a)
                return 1 == this.children.length ? this.children[0].getPrecedingCursorPosition(f, null, b) : this.children[1].getPrecedingCursorPosition(f, null, b);
            if (1 == a)
                return this.children[0].getPrecedingCursorPosition(f, null, b)
        }
        return null === a || void 0 === a ? this.children[0].getPrecedingCursorPosition(f, null, b) : null !== this.parent ? {
            row: this.parent,
            index: this.index
        } : null
    },
    getLowerCursorPosition: function(f, a, b, d) {
        return null === a || void 0 === a ? this.children[0].getLowerCursorPosition(f, null, b, d) : 0 === a && 2 == this.children.length ? this.children[1].getLowerCursorPosition(f, null, b, d) : null !== this.parent ? this.parent.getLowerCursorPosition(f, this.index, b, d) : null
    },
    getHigherCursorPosition: function(f, a, b, d) {
        return null !== a && void 0 !== a || 2 != this.children.length ? 1 == a ? this.children[0].getHigherCursorPosition(f, null, b, d) : null !== this.parent ? this.parent.getHigherCursorPosition(f, this.index, b) : null : this.children[1].getHigherCursorPosition(f, null, b, d)
    },
    copy: function() {
        return this.clone(this.mtype, this.middleBracket.copy(), this.copyArray(this.children))
    },
    getMathML: function() {
        var f = "<" + this.mtype + (this.in_attrbs ? this.in_attrbs : "");
        if ("mover" == this.mtype || "munderover" == this.mtype)
            f = "" != this.accent ? f + (" accent='" + this.accent + "'") : f + " accent='false'";
        if ("munder" == this.mtype || "munderover" == this.mtype)
            f = "" != this.accentunder ? f + (" accentunder='" + this.accentunder + "'") : f + " accentunder='false'";
        f += null === this.mathcolor || "" == this.mathcolor || "null" == this.mathcolor || "#000000" == this.mathcolor ? "" : ' mathcolor="' + this.mathcolor + '"';
        f += ">" + this.middleBracket.getMathML();
        f = "mover" == this.mtype || "munder" == this.mtype ? f + this.children[0].getMathML(!0) : f + this.children[1].getMathML(!0);
        "munderover" == this.mtype && (f += this.children[0].getMathML(!0));
        return f += "</" + this.mtype + ">"
    },
    getAltText: function() {
        var f = org.imatheq.formulaeditor.FormulaEditor.getEditor();
        if ("mover" == this.mtype)
            return f.altstrs.middle_bracket_over.replace("$0$", f.getSymbolAltText(this.middleBracket)).replace("$1$", this.children[0].getAltText().trim());
        if ("munder" == this.mtype)
            return f.altstrs.middle_bracket_under.replace("$0$", f.getSymbolAltText(this.middleBracket)).replace("$1$", this.children[0].getAltText().trim());
        if ("munderover" == this.mtype)
            return f.altstrs.middle_bracket_underover.replace("$0$", f.getSymbolAltText(this.middleBracket)).replace("$1$", this.children[1].getAltText().trim()).replace("$2$", this.children[0].getAltText().trim())
    }
})
}
)();
(function() {
org.imatheq.formulaeditor.presentation.Column = $extend(org.imatheq.formulaeditor.presentation.Node, {
    slowDelete: !0,
    margin: 2,
    align: "center",
    fontSizeModifierArray: null,
    baselineIndex: null,
    mtype: "",
    accent: "",
    accentunder: "",
    getFontSizeData: function(f, a, b) {
        for (var d = 0; d < this.children.length; d++) {
            if (null !== this.fontSizeModifierArray && void 0 !== this.fontSizeModifierArray[d] && null !== this.fontSizeModifierArray[d]) {
                var g = {
                    fontSizeModifier: 0
                };
                for (var k in a)
                    g[k] = a[k];
                g.fontSizeModifier += this.fontSizeModifierArray[d]
            } else
                g = a;
            this.children[d].getFontSizeData(f, g, b)
        }
    },
    draw: function(f, a, b, d, g) {
        for (var k = this.margin, e = [], h = 0, l = 0, m = [], n = 0; n < this.children.length; n++) {
            if (null !== this.fontSizeModifierArray && void 0 !== this.fontSizeModifierArray[n] && null !== this.fontSizeModifierArray[n]) {
                var p = {
                    fontSizeModifier: 0
                };
                for (var q in a)
                    p[q] = a[q];
                p.fontSizeModifier += this.fontSizeModifierArray[n]
            } else
                p = a;
            m.push(p);
            var t = this.children[n].draw(f, m[n], 0, 0, !0);
            h = Math.max(h, t.width);
            p = t.height;
            if (0 === n) {
                var r = 0;
                var u = r + t.top;
                l += p
            } else
                u = e[n - 1].top + e[n - 1].height + k,
                r = u - t.top,
                l += p + k;
            e[n] = {
                height: p,
                top: u,
                baseline: r
            }
        }
        k = null === this.baselineIndex ? e[Math.floor(this.children.length / 2)].baseline : e[this.baselineIndex].baseline;
        for (a = 0; a < this.children.length; a++)
            e[a].top -= k,
            e[a].baseline -= k;
        this.dimensions = {
            top: d + e[0].top,
            left: b,
            width: h,
            height: l
        };
        l = b + h / 2;
        for (a = 0; a < this.children.length; a++)
            k = b,
            "center" == this.align ? k = l - this.children[a].dimensions.width / 2 : "right" == this.align && (k = h - this.children[a].dimensions.width),
            this.children[a].draw(f, m[a], k, d + e[a].baseline, g);
        return this.dimensions
    },
    getMathML: function() {
        var f = "<" + this.mtype + (this.in_attrbs ? this.in_attrbs : "");
        if ("mover" == this.mtype || "munderover" == this.mtype)
            f = "" != this.accent ? f + (" accent='" + this.accent + "'") : f + " accent='false'";
        if ("munder" == this.mtype || "munderover" == this.mtype)
            f = "" != this.accentunder ? f + (" accentunder='" + this.accentunder + "'") : f + " accentunder='false'";
        f += null === this.mathcolor || "" == this.mathcolor || "null" == this.mathcolor || "#000000" == this.mathcolor ? "" : ' mathcolor="' + this.mathcolor + '"';
        f = "mover" == this.mtype || "munderover" == this.mtype ? f + (">" + this.children[1].getMathML(!0)) : f + (">" + this.children[0].getMathML(!0));
        "mover" == this.mtype ? f += this.children[0].getMathML(!0) : "munder" == this.mtype ? f += this.children[1].getMathML(!0) : "munderover" == this.mtype && (f += this.children[2].getMathML(!0));
        "munderover" == this.mtype && (f += this.children[0].getMathML(!0));
        return f += "</" + this.mtype + ">"
    },
    getAltText: function() {
        var f = org.imatheq.formulaeditor.FormulaEditor.getEditor();
        if ("mover" == this.mtype)
            return f.altstrs.mover.replace("$0$", this.children[1].getAltText().trim()).replace("$1$", this.children[0].getAltText().trim());
        if ("munder" == this.mtype)
            return f.altstrs.munder.replace("$0$", this.children[0].getAltText().trim()).replace("$1$", this.children[1].getAltText().trim());
        if ("munderover" == this.mtype)
            return f.altstrs.munderover.replace("$0$", this.children[1].getAltText().trim()).replace("$1$", this.children[2].getAltText().trim()).replace("$2$", this.children[0].getAltText().trim())
    },
    getCursorPosition: function(f, a, b) {
        if (a > this.dimensions.left && a < this.dimensions.left + this.dimensions.width - 1) {
            for (var d = 0; d < this.children.length - 1; d++)
                if (b < this.children[d + 1].dimensions.top)
                    return this.children[d].getCursorPosition(f, a, b);
            return this.children[this.children.length - 1].getCursorPosition(f, a, b)
        }
        return a <= this.dimensions.left ? null === this.parent || void 0 === this.parent ? null : this.parent.getPrecedingCursorPosition(f, this.index + 1, !1) : this.parent.getFollowingCursorPosition(f, this.index, !1)
    },
    getFollowingCursorPosition: function(f, a, b) {
        var d = null;
        if (!0 === f.continuingNavigation)
            null === a || void 0 === a ? d = this.children[0].getFollowingCursorPosition(f, null, b) : a + 1 < this.children.length && (d = this.children[a + 1].getFollowingCursorPosition(f, null, b));
        else if (null === a || void 0 === a)
            for (var g = a = Math.floor(this.children.length / 2); null === d && 0 <= g && g < this.children.length; )
                d = this.children[g].getFollowingCursorPosition(f, null, b),
                g = g >= a ? 2 * a - g - 1 : 2 * a - g;
        null === d && null !== this.parent && (d = this.parent.getFollowingCursorPosition(f, this.index, !1));
        return d
    },
    getPrecedingCursorPosition: function(f, a, b) {
        if (!0 === f.continuingNavigation)
            if (null === a || void 0 === a) {
                if (0 < this.children.length)
                    return this.children[this.children.length - 1].getPrecedingCursorPosition(f, null, b)
            } else if (0 < a)
                return this.children[a - 1].getPrecedingCursorPosition(f, null, b);
        if (null === a || void 0 === a) {
            a = null;
            for (var d = Math.floor(this.children.length / 2), g = d; null === a && 0 <= g && g < this.children.length; )
                a = this.children[g].getPrecedingCursorPosition(f, null, b),
                g = g >= d ? 2 * d - g - 1 : 2 * d - g;
            return a
        }
        return null !== this.parent ? {
            row: this.parent,
            index: this.index
        } : null
    },
    getLowerCursorPosition: function(f, a, b, d) {
        var g = this.children.length - 1;
        return null === a || void 0 === a ? this.children[0].getLowerCursorPosition(f, null, b, d) : a < g ? this.children[a + 1].getLowerCursorPosition(f, null, b, d) : this.getLowerCursorPosition.parent.getLowerCursorPosition.call(f, this, a, b, d)
    },
    getHigherCursorPosition: function(f, a, b, d) {
        var g = this.children.length - 1;
        return null === a || void 0 === a ? this.children[g].getHigherCursorPosition(f, null, b, d) : 0 < a ? this.children[a - 1].getHigherCursorPosition(f, null, b, d) : this.getHigherCursorPosition.parent.getHigherCursorPosition.call(f, this, a, b, d)
    }
})
}
)();
(function() {
org.imatheq.formulaeditor.presentation.Lines = $extend(org.imatheq.formulaeditor.presentation.Column, {
    fontSizeModifierArray: null,
    margin: 20,
    align: "left",
    baselineIndex: null,
    mtype: "",
    initialize: function() {
        var f = this.initialize.parent
          , a = [];
        return 0 == arguments.length ? f.initialize.apply(this, a) : f.initialize.apply(this, arguments)
    },
    getRowSpace: function() {
        return this.margin
    },
    getSelection: function(f, a, b, d, g, k, e, h, l) {
        for (var m = g, n = k, p = 0; p < b; p++)
            m += this.children[p].children.length,
            n += this.children[p].children.length;
        var q = [];
        for (p = b; p <= d; p++) {
            var t = 0
              , r = this.children[p];
            p == b && (t = g);
            if (p == d)
                var u = k;
            else
                n += this.children[p].children.length,
                u = this.children[p].children.length;
            for (var z, B, C, E, A = t; A < u; A++) {
                var w = r.children[A].dimensions;
                r.children[A]instanceof org.imatheq.formulaeditor.presentation.NewlineSymbol && (w = {
                    left: w.left,
                    top: r.dimensions.top,
                    width: w.width,
                    height: r.dimensions.height
                });
                A == t ? (z = w.left,
                B = w.top,
                C = w.left + w.width,
                E = w.top + w.height) : (z = Math.min(z, w.left),
                B = Math.min(B, w.top),
                C = Math.max(C, w.left + w.width),
                E = Math.max(E, w.top + w.height))
            }
            q.push({
                left: z,
                top: B,
                width: C - z,
                height: E - B
            })
        }
        return {
            parent: this,
            startPosition: {
                row: f.row,
                index: f.index
            },
            endPosition: {
                row: a.row,
                index: a.index
            },
            startIndex: m,
            endIndex: n,
            startIndexChain: e,
            endIndexChain: h,
            rightMove: l,
            dimensions: q
        }
    },
    getSelectedArea: function(f, a) {
        var b = f[f.length - 2]
          , d = a[a.length - 2]
          , g = f[f.length - 3]
          , k = a[a.length - 3];
        a = b <= d ? b : d;
        f = b > d ? b : d;
        var e = b < d ? g : b == d ? Math.min(g, k) : k;
        b = b > d ? g : b == d ? Math.max(g, k) : k;
        d = [];
        for (g = a; g <= f; g++) {
            k = 0;
            var h = this.children[g];
            g == a && (k = e);
            var l = g == f ? b : this.children[g].children.length;
            for (var m, n, p, q, t = k; t < l; t++) {
                var r = h.children[t].dimensions;
                h.children[t]instanceof org.imatheq.formulaeditor.presentation.NewlineSymbol && (r = {
                    left: r.left,
                    top: h.dimensions.top,
                    width: r.width,
                    height: h.dimensions.height
                });
                t == k ? (m = r.left,
                n = r.top,
                p = r.left + r.width,
                q = r.top + r.height) : (m = Math.min(m, r.left),
                n = Math.min(n, r.top),
                p = Math.max(p, r.left + r.width),
                q = Math.max(q, r.top + r.height))
            }
            d.push({
                left: m,
                top: n,
                width: p - m,
                height: q - n
            })
        }
        return d
    },
    getMathML: function() {
        for (var f = "", a = 0; a < this.children.length; a++) {
            var b = this.children[a].getMathML(!1);
            1 < this.children.length && a == this.children.length - 1 && "<mrow/>" === b && (b = "");
            f += b;
            a != this.children.length - 1 && (f += '<mspace linebreak="newline"/>')
        }
        return f
    },
    getAltText: function() {
        for (var f = "", a = 0; a < this.children.length; a++) {
            var b = this.children[a].getAltText().trim();
            f += b;
            a != this.children.length - 1 && (f += "\n")
        }
        return f
    },
    getSelectionMathML: function(f, a, b) {
        f = '<math xmlns="http://www.w3.org/1998/Math/MathML">';
        a = this.getGrandChild(a, !0);
        b = this.getGrandChild(b, !0);
        for (var d = a.parent.index; d <= b.parent.index; d++) {
            var g = this.children[d]
              , k = d == a.parent.index ? a.index : 0
              , e = d == b.parent.index ? b.index : g.children.length - 1;
            null === g.children[e] || void 0 === g.children[e] || g.children[e]instanceof org.imatheq.formulaeditor.presentation.NewlineSymbol || e++;
            e >= k && (f += g.getMathML(!1, k, e),
            g.children[e]instanceof org.imatheq.formulaeditor.presentation.NewlineSymbol && (f += '<mspace linebreak="newline"/>'))
        }
        return f + "</math>"
    },
    onkeypress: function(f, a) {
        var b = org.imatheq.formulaeditor.presentation;
        if (!f.altKey && !f.ctrlKey) {
            var d = String.fromCharCode(f.charCode);
            d = new b.Row(a.cursor.position.row.newSymbol(d));
            var g = new b.Lines(d);
            d = null;
            if (13 == f.charCode)
                return !1;
            var k = a.selection
              , e = this.getGrandChild(k.startIndex);
            f = e.parent;
            k.hasSelection && (d = k.getSelectionCopy());
            var h = a.cursor.position;
            e = h.index;
            0 < e && h.row.children[e - 1]instanceof b.NewlineSymbol && e--;
            b = h.row.getIndexChain(e);
            h = k.startIndex;
            var l = this.getNumGrandChildren() - k.endIndex
              , m = this.remove(h, k.endIndex);
            k.clear();
            this.insert(h, g);
            this.updateChildren();
            e = this.getGrandChild(k.startIndex + 1);
            g = e.parent.getIndexChain(e.index);
            h = {
                row: this,
                index: h
            };
            a.cursor.position.row = e.parent;
            a.cursor.position.index = e.index;
            a.actions.addAction("update", h, b, g, m, null, l, d);
            f.convertKeyword(a);
            return !1
        }
        return !0
    },
    onNewline: function(f) {
        var a = f.selection
          , b = org.imatheq.formulaeditor.presentation
          , d = f.cursor.position
          , g = d.row.getIndexChain(d.index)
          , k = {
            parent: d.row,
            index: d.index
        }
          , e = "insert"
          , h = null;
        var l = null;
        if (a.hasSelection) {
            e = "update";
            d = a.parent;
            if (d instanceof b.PArray)
                return;
            h = {
                parent: d,
                startIndex: a.startIndex,
                endIndex: a.endIndex,
                dimensions: a.dimensions
            };
            l = d.remove(a.startIndex, a.endIndex);
            k = {
                parent: d,
                index: a.startIndex
            }
        }
        d = this.getAncestorOf(k);
        var m = d.getAncestorOf(k).index;
        !a.hasSelection && 1 == d.children.length && d.children[0]instanceof b.BlockSymbol && (l = d.remove(0),
        m = 0);
        k.parent !== d && m++;
        m = this.getGrandChildIndex(d.index, m);
        a = this.getNumGrandChildren() - m;
        d = {
            row: this,
            index: m
        };
        var n = new b.Row(new b.NewlineSymbol);
        b = new b.Lines(n);
        this.insert(m, b);
        b = this.children[k.parent.index + 1];
        k = b.getIndexChain(0);
        f.cursor.setPosition({
            row: b,
            index: 0
        });
        f.actions.addAction(e, d, g, k, l, null, a, h);
        f.redraw();
        return !1
    },
    deleteNewline: function(f, a) {
        var b = this.children[a]
          , d = b.children.length - 1
          , g = {
            row: f.cursor.position.row,
            index: f.cursor.position.index
        }
          , k = g.row.getIndexChain(g.index)
          , e = b.getIndexChain(d);
        g = {
            row: this,
            index: this.getGrandChildIndex(a, d)
        };
        a = f.getButtonStatus();
        f.cursor.setPosition({
            row: b,
            index: b.children.length - 1
        });
        b = this.getNumGrandChildren() - g.index - 1;
        d = this.remove(g.index, g.index + 1);
        f.actions.addAction("delete", g, k, e, d, null, b, null, null, a);
        f.redraw();
        return !1
    },
    getGrandChildIndex: function(f, a) {
        for (var b = 0; b < f; b++)
            a += this.children[b].children.length;
        return a
    },
    getNumGrandChildren: function() {
        return this.getGrandChildIndex(this.children.length - 1, this.children[this.children.length - 1].children.length)
    },
    getGrandChild: function(f, a) {
        var b = 0;
        if (f == this.getNumGrandChildren())
            return 0 == f ? {
                parent: this.children[0],
                index: 0
            } : {
                parent: this.children[this.children.length - 1],
                index: this.children[this.children.length - 1].children.length
            };
        for (var d = 0; d < this.children.length; d++) {
            if (f >= b && f <= b + this.children[d].children.length)
                if (f == b + this.children[d].children.length) {
                    if (0 == f - b && 0 == this.children[d].children.length)
                        return {
                            parent: this.children[d],
                            index: 0
                        };
                    if (null === a || void 0 === a || !1 === a)
                        return {
                            parent: this.children[d],
                            index: this.children[d].children.length
                        }
                } else
                    return this.children[d].children[f - b];
            b += this.children[d].children.length
        }
    },
    setSymbFontAttrbs: function(f, a, b) {
        var d = org.imatheq.formulaeditor.presentation
          , g = this.getGrandChild(a, !0)
          , k = this.getGrandChild(b, !0);
        b = [];
        a = g.parent;
        var e = k.parent
          , h = g.index;
        g = k.index;
        if (a.index == e.index) {
            k = new d.Row;
            var l = [];
            for (b.push(k); h < g; h++)
                l.push(a.children[h].copy()),
                a.children[h].setSymbFontAttrbs(f);
            k.initialize.apply(k, l)
        } else {
            k = new d.Row;
            l = [];
            for (b.push(k); h < a.children.length; h++)
                l.push(a.children[h].copy()),
                a.children[h].setSymbFontAttrbs(f);
            k.initialize.apply(k, l);
            k = new d.Row;
            l = [];
            for (h = 0; h < g; h++)
                l.push(e.children[h].copy()),
                e.children[h].setSymbFontAttrbs(f);
            k.initialize.apply(k, l);
            for (h = a.index + 1; h < e.index; h++)
                b.push(this.children[h].copy()),
                this.children[h].setSymbFontAttrbs(f);
            b.push(k)
        }
        f = new d.Lines;
        f.initialize.apply(f, b);
        return f
    },
    remove: function(f, a) {
        var b = org.imatheq.formulaeditor.presentation
          , d = this.getGrandChild(f, !0)
          , g = this.getGrandChild(a, !0);
        a = [];
        f = d.parent;
        var k = g.parent;
        d = d.index;
        g = g.index;
        if (f.index == k.index) {
            var e = f.remove(d, g);
            f.updateChildren()
        } else {
            for (e = f.remove(d, f.children.length); k.children.length > g; )
                a = k.children.pop(),
                f.children.splice(d, 0, a);
            f.updateChildren();
            a = this.children.splice(f.index + 1, k.index - f.index)
        }
        a.splice(0, 0, e);
        this.updateChildren();
        b = new b.Lines;
        b.initialize.apply(b, a);
        return b
    },
    insert: function(f, a) {
        var b = org.imatheq.formulaeditor.presentation;
        if (0 == arguments.length) {
            var d = this.children[0];
            null === d ? (d = new b.Row,
            this.children.splice(0, 0, d)) : d.insert(0)
        } else {
            if (0 == a.children.length)
                return null;
            if (0 == this.children.length)
                for (; 0 < a.children.length; )
                    d = a.children.pop(),
                    this.children.splice(0, 0, d);
            else {
                var g = this.getGrandChild(f, !0);
                d = g.parent;
                g = g.index;
                var k = a.children[a.children.length - 1];
                (0 == k.children.length ? null : k.children[k.children.length - 1])instanceof b.NewlineSymbol && (k = new b.Row,
                k.children.splice(0, 1),
                a.children.push(k),
                a.updateChildren());
                for (var e = k.children.length; d.children.length > g; )
                    b = d.children.pop(),
                    k.children.splice(e, 0, b),
                    k.updateChildren();
                for (k = a.children[0]; 0 < k.children.length; )
                    b = k.children.pop(),
                    d.children.splice(g, 0, b),
                    d.updateChildren();
                for (; 1 < a.children.length; )
                    g = a.children.pop(),
                    this.children.splice(d.index + 1, 0, g)
            }
        }
        this.updateChildren()
    },
    isEmpty: function() {
        return 0 == this.children.length || 1 == this.children.length && this.children[0].isEmpty()
    },
    getCursorPosition: function(f, a, b) {
        for (var d = this.getRowSpace(), g = 0; g < this.children.length; g++) {
            var k = this.children[g];
            if (b > k.dimensions.top - d / 2 && (g == this.children.length - 1 || b < k.dimensions.top + k.dimensions.height + d / 2))
                return this.children[g].getCursorPosition(f, a, b)
        }
    },
    getFollowingCursorPosition: function(f, a, b) {
        var d = null;
        if (!0 === f.continuingNavigation)
            if (null === a || void 0 === a)
                d = this.children[0].getFollowingCursorPosition(f, null, b);
            else if (a + 1 < this.children.length)
                d = this.children[a + 1].getFollowingCursorPosition(f, null, b);
            else {
                if (a + 1 == this.children.length)
                    return null
            }
        else if (null === a || void 0 === a)
            for (var g = a = Math.floor(this.children.length / 2); null === d && 0 <= g && g < this.children.length; )
                d = this.children[g].getFollowingCursorPosition(f, null, b),
                g = g >= a ? 2 * a - g - 1 : 2 * a - g;
        null === d && null !== this.parent && (d = this.parent.getFollowingCursorPosition(f, this.index, !1));
        return d
    },
    getPrecedingCursorPosition: function(f, a, b) {
        if (!0 === f.continuingNavigation)
            if (null === a || void 0 === a) {
                if (0 < this.children.length)
                    return this.children[this.children.length - 1].getPrecedingCursorPosition(f, null, b)
            } else {
                if (0 < a)
                    return this.children[a - 1].getPrecedingCursorPosition(f, null, b);
                if (0 == a)
                    return null
            }
        if (null === a || void 0 === a) {
            a = null;
            for (var d = Math.floor(this.children.length / 2), g = d; null === a && 0 <= g && g < this.children.length; )
                a = this.children[g].getPrecedingCursorPosition(f, null, b),
                g = g >= d ? 2 * d - g - 1 : 2 * d - g;
            return a
        }
        return null
    },
    getLowerCursorPosition: function(f, a, b, d) {
        var g = this.children.length - 1;
        return null === a || void 0 === a ? this.children[0].getLowerCursorPosition(f, null, b, d) : a < g ? this.children[a + 1].getLowerCursorPosition(f, null, b, d) : null
    },
    getHigherCursorPosition: function(f, a, b, d) {
        var g = this.children.length - 1;
        return null === a || void 0 === a ? this.children[g].getHigherCursorPosition(f, null, b, d) : 0 < a ? this.children[a - 1].getHigherCursorPosition(f, null, b, d) : null
    }
})
}
)();
(function() {
org.imatheq.formulaeditor.presentation.Root = $extend(org.imatheq.formulaeditor.presentation.Node, {
    slowDelete: !0,
    lineWidth: 1,
    margin: 2,
    drawBase: !1,
    left: {
        dimensions: null
    },
    top: {
        dimensions: null
    },
    initialize: function() {
        0 < arguments.length ? (this.children = [],
        null !== arguments[1] && this.children.push(arguments[1]),
        null !== arguments[2] && (this.mathcolor = arguments[2]),
        this.children.push(arguments[0])) : this.children = [];
        for (var f = new org.imatheq.formulaeditor.presentation.Row, a = this.functionsFromRow.length - 1; 0 <= a; a--)
            this[this.functionsFromRow[a]] || (this[this.functionsFromRow[a]] = f[this.functionsFromRow[a]]);
        this.drawBase = this.drawBaseQ();
        this.updateChildren()
    },
    drawBaseQ: function() {
        return 2 == this.children.length
    },
    getFontSizeData: function(f, a, b) {
        var d = this.children[this.children.length - 1]
          , g = 1 == this.children.length ? null : this.children[0];
        if (null !== g) {
            var k = {
                fontSizeModifier: 0
            }, e;
            for (e in a)
                k[e] = a[e];
            k.fontSizeModifier -= 2;
            g.getFontSizeData(f, k, b)
        }
        d.getFontSizeData(f, a, b)
    },
    drawTopLeft: function(f, a, b, d, g, k, e, h, l, m, n) {
        n = {
            fontSizeModifier: 0
        };
        for (var p in m)
            n[p] = m[p];
        n.fontSizeModifier -= 2;
        var q = 0
          , t = 0;
        if (null !== k && void 0 !== k) {
            k.draw(f, n, 0, 0, !0);
            q = k.dimensions.width;
            t = k.dimensions.height;
            var r = k.dimensions.top
        }
        var u = Math.round(.38 * f.getPXFontSize(m.fontSizeModifier))
          , z = Math.max(g, 8)
          , B = Math.max(Math.round(u / 3), 1)
          , C = Math.round(.38 * z);
        m = h + 1;
        var E = Math.floor(6 * u / 4 - e)
          , A = Math.max(q, E) - E;
        e = a + A;
        p = b - (C - B);
        B = e + B;
        C = b - C;
        var w = e + u
          , v = e + 2 * u
          , y = b - z;
        if (null === k || void 0 === k)
            r = y;
        var D = v + d;
        z = b - z;
        var F = Math.floor(g / 2);
        g = g + Math.max(t, F) - F;
        q = a + E - Math.min(E, q);
        a = {
            height: g,
            width: A + 2 * u + d + 1,
            left: a,
            top: b - g
        };
        if (void 0 === l || null === l || !1 === l)
            null !== k && void 0 !== k && k.draw(f, n, q, b - g - r, l),
            this.left.dimensions = {
                left: e,
                top: y,
                width: a.width - d,
                height: a.height
            },
            this.top.dimensions = {
                left: v,
                top: y,
                width: a.width,
                height: h
            },
            f = f.getContext(),
            f.save(),
            f.strokeStyle = this.mathcolor,
            f.lineWidth = h,
            f.beginPath(),
            f.moveTo(e, p),
            f.lineTo(B, C),
            f.lineWidth = m,
            f.lineTo(w, b),
            f.lineWidth = h,
            f.lineTo(v, y),
            f.lineTo(D, z),
            f.stroke(),
            f.restore();
        return a
    },
    draw: function(f, a, b, d, g) {
        var k = org.imatheq.formulaeditor.presentation
          , e = f.getFontSizeIdx(a.fontSizeModifier);
        8 < e && (this.lineWidth = 2);
        6 > e && (this.margin = 1);
        e = this.children[this.children.length - 1];
        var h = 1 == this.children.length ? null : this.children[0];
        e.draw(f, a, 0, 0, !0);
        var l = e.dimensions.height + this.lineWidth + 2 * this.margin
          , m = e.dimensions.width + 2 * this.margin;
        1 <= e.children.length && !(e.children[e.children.length - 1]instanceof k.Root) && (m += this.margin);
        this.dimensions = this.drawTopLeft(f, b, d + (e.dimensions.top + e.dimensions.height) + this.margin, m, l, h, this.margin, this.lineWidth, g, a);
        g || e.draw(f, a, b + this.dimensions.width - m + this.margin, d, g);
        return this.dimensions
    },
    functionsFromRow: ["getFirstCursorPosition", "getLastCursorPosition", "getLowerCursorPosition", "getHigherCursorPosition"],
    getCursorPosition: function(f, a, b) {
        if (a > this.dimensions.left && a < this.dimensions.left + this.dimensions.width - 1) {
            var d = this.children[this.children.length - 1]
              , g = 1 == this.children.length ? null : this.children[0];
            if (this.drawBase) {
                var k = (g.dimensions.left + g.dimensions.width + d.dimensions.left) / 2;
                return a < k ? g.getCursorPosition(f, a, b) : d.getCursorPosition(f, a, b)
            }
            k = (this.dimensions.left + d.dimensions.left) / 2;
            return a < k ? {
                row: this.parent,
                index: this.index
            } : d.getCursorPosition(f, a, b)
        }
        return a <= this.dimensions.left ? null === this.parent || void 0 === this.parent ? null : this.parent.getPrecedingCursorPosition(f, this.index + 1, !1) : this.parent.getFollowingCursorPosition(f, this.index, !1)
    },
    getFollowingCursorPosition: function(f, a, b) {
        if (null === b || void 0 === b)
            b = !0;
        var d = this.children[this.children.length - 1]
          , g = 1 == this.children.length ? null : this.children[0];
        if (null === a || void 0 === a)
            return this.drawBase ? g.getFollowingCursorPosition(f, null, b) : d.getFollowingCursorPosition(f, null, b);
        d = null;
        if (0 === a)
            if (b)
                this.drawBase && (d = this.children[1].getFollowingCursorPosition(f, null, b));
            else if (this.drawBase)
                return {
                    row: this.children[1],
                    index: 0
                };
        return null === d && null !== this.parent ? this.parent.getFollowingCursorPosition(f, this.index, !1) : d
    },
    getPrecedingCursorPosition: function(f, a, b) {
        if (null === b || void 0 === b)
            b = !0;
        var d = this.children[this.children.length - 1];
        if (null === a || void 0 === a)
            return d.getPrecedingCursorPosition(f, null, b);
        d = null;
        if (1 == a)
            if (b)
                d = this.children[0].getLastCursorPosition(f, null, b);
            else
                return {
                    row: this.children[0],
                    index: this.children[0].children.length
                };
        return null === d && null !== this.parent ? {
            row: this.parent,
            index: this.index
        } : d
    },
    getLowerCursorPosition: function(f, a, b, d) {
        if (null === d || void 0 === d)
            d = !0;
        if (null === a || void 0 === a)
            return this.children[0].getLowerCursorPosition(f, null, b, d);
        var g = null;
        if (1 < this.children.length && 0 === a)
            if (d)
                g = this.children[this.children.length - 1].getLowerCursorPosition(f, null, b, d);
            else
                return {
                    row: this.moddle,
                    index: 0
                };
        return null === g && null !== this.parent ? this.parent.getLowerCursorPosition(f, this.index, b, !1) : g
    },
    getHigherCursorPosition: function(f, a, b, d) {
        if (null === d || void 0 === d)
            d = !0;
        if (null === a || void 0 === a)
            return this.children[this.children.length - 1].getHigherCursorPosition(f, null, b, d);
        var g = null;
        if (1 < this.children.length && 1 === a)
            if (d)
                g = this.children[0].getHigherCursorPosition(f, null, b, d);
            else
                return {
                    row: this.moddle,
                    index: 0
                };
        return null === g && null !== this.parent ? this.parent.getHigherCursorPosition(f, this.index, b, !1) : g
    },
    copy: function() {
        return 2 == this.children.length ? this.clone(this.children[1].copy(), this.children[0].copy()) : this.clone(this.children[0].copy(), null)
    },
    getMathML: function() {
        var f = this.children[this.children.length - 1]
          , a = 1 == this.children.length ? null : this.children[0];
        return null === a ? "<msqrt" + (this.in_attrbs ? this.in_attrbs : "") + (null === this.mathcolor || "" == this.mathcolor || "null" == this.mathcolor || "#000000" == this.mathcolor ? "" : ' mathcolor="' + this.mathcolor + '"') + ">" + f.getMathML(!0) + "</msqrt>" : "<mroot" + (this.in_attrbs ? this.in_attrbs : "") + (null === this.mathcolor || "" == this.mathcolor || "null" == this.mathcolor || "#000000" == this.mathcolor ? "" : ' mathcolor="' + this.mathcolor + '"') + ">" + f.getMathML(!0) + a.getMathML(!0) + "</mroot>"
    },
    getAltText: function() {
        var f = this.children[this.children.length - 1]
          , a = 1 == this.children.length ? null : this.children[0]
          , b = org.imatheq.formulaeditor.FormulaEditor.getEditor()
          , d = f.children && 1 < f.children.length ? 1 : 0;
        a && a.children && 1 == a.children.length && 2 == a.children[0].value && (a = null);
        return null === a ? b.altstrs["square root"][d].replace("$0$", f.getAltText().trim()) : b.altstrs.root[d].replace("$0$", f.getAltText().trim()).replace("$1$", a.getAltText().trim())
    }
})
}
)();
(function() {
org.imatheq.formulaeditor.presentation.PArray = $extend(org.imatheq.formulaeditor.presentation.Node, {
    slowDelete: !0,
    numrows: 0,
    numcols: 0,
    tblframe: null,
    tblFrame: null,
    editor: null,
    info: null,
    initialize: function() {
        0 < arguments.length && (this.entries = Array.prototype.slice.call(arguments),
        this.numrows = this.entries.length,
        this.numcols = this.entries[0].length);
        this.children = [];
        for (var f = 0; f < this.numrows; f++)
            for (var a = 0; a < this.numcols; a++)
                this.children.push(this.entries[f][a]);
        this.updateChildren();
        this.editor = org.imatheq.formulaeditor.FormulaEditor.getEditor();
        null == this.editor && alert("Error PArray.initialize: failed to get editor")
    },
    insertRows: function(f, a, b) {
        for (var d = a; d < a + b; d++)
            for (var g = 0; g < this.numcols; g++)
                this.children.splice(d * this.numcols + g, 0, f[d - a][g]);
        this.entries.splice.apply(this.entries, [a, 0].concat(f));
        this.numrows += b;
        this.updateChildren()
    },
    insertColumns: function(f, a, b) {
        for (var d = this.numrows - 1; 0 <= d; d--) {
            for (var g = 0; g < b; g++)
                this.children.splice(d * this.numcols + a + g, 0, f[d][g]);
            this.entries[d].splice.apply(this.entries[d], [a, 0].concat(f[d]))
        }
        this.numcols += b;
        this.updateChildren()
    },
    deleteRows: function(f, a) {
        var b = this.entries.splice(f, a);
        this.children.splice(f * this.numcols, a * this.numcols);
        this.updateChildren();
        this.numrows -= a;
        this.updateChildren();
        return b
    },
    deleteColumns: function(f, a) {
        for (var b = [], d = this.numrows - 1; 0 <= d; d--)
            b.splice(0, 0, this.entries[d].splice(f, a)),
            this.children.splice(d * this.numcols + f, a);
        this.numcols -= a;
        this.updateChildren();
        return b
    },
    actInsertRows: function(f, a) {
        var b = org.imatheq.formulaeditor.presentation
          , d = f.selection
          , g = null
          , k = null
          , e = f.cursor.position
          , h = e.etb.parray
          , l = null
          , m = null
          , n = Math.floor(h.startIndex / this.numcols)
          , p = Math.floor(h.endIndex / this.numcols) + 1 - n
          , q = this.info
          , t = "front"
          , r = n;
        "insertbelow" == a && (r += p,
        t = "behind");
        var u = {
            info: this.info.copy(this.numrows, this.numcols),
            startRow: r,
            numRows: p
        };
        var z = {
            row: this,
            index: h.startIndex
        }
          , B = e.row.getIndexChain(e.index)
          , C = e.row.children[e.index];
        d.hasSelection && (l = this.children[h.startIndex],
        m = this.children[h.endIndex],
        g = d.getSelectionCopy());
        h = e.row.children[e.index];
        if (null === h || void 0 === h)
            h = e.row.children[e.index - 1];
        h = h.getSymbFontAttrbs();
        for (var E = [], A = 0; A < p; A++) {
            for (var w = [], v = 0; v < this.numcols; v++) {
                var y = new b.Row(new b.BlockSymbol);
                y.setSymbFontAttrbs(h);
                w.splice(0, 0, y)
            }
            E.splice(0, 0, w)
        }
        this.insertRows(E, r, p);
        q.rowalign = q.insertArrayAtttrbs(q.rowalign, n, n + p - 1, t, "baseline");
        q.rows = q.insertArrayAtttrbs(q.rows, n, n + p - 1, t, "baseline");
        q.rowspacing = q.insertArrayAtttrbs(q.rowspacing, n, n + p - 1, t, "1.0ex");
        q.rowlines = q.insertArrayAtttrbs(q.rowlines, n, n + p - 1, t, "none");
        q.populateData(this.numrows, this.numcols);
        b = {
            row: null !== C && void 0 !== C ? C.parent : e.row,
            index: null !== C && void 0 !== C ? C.index : e.index
        };
        n = b.row.getIndexChain(b.index);
        d.hasSelection && (k = l.parent.getIndexChain(l.index),
        e = m.parent.getIndexChain(m.index),
        l = this.getSelection(d.startPosition, d.endPosition, l.index, m.index, k, e, d.rightMove),
        d.setSelection(l),
        n = d.endPosition.row.getIndexChain(d.endPosition.index),
        k = d.getSelectionCopy());
        e = {
            row: b.row,
            index: b.index
        };
        f.cursor.setPosition(e);
        l = f.getButtonStatus();
        f.actions.addAction(a, z, B, n, u, null, null, g, k, l, l);
        f.cursor.setPosition(b);
        f.redraw(d.hasSelection)
    },
    actInsertColumns: function(f, a) {
        var b = org.imatheq.formulaeditor.presentation
          , d = f.selection
          , g = null
          , k = null
          , e = f.cursor.position
          , h = e.etb.parray
          , l = null
          , m = null
          , n = h.startIndex % this.numcols
          , p = h.endIndex % this.numcols + 1 - n
          , q = this.info
          , t = "front"
          , r = n;
        "insertright" == a && (r += p,
        t = "behind");
        var u = {
            info: this.info.copy(this.numrows, this.numcols),
            startCol: r,
            numCols: p
        };
        var z = {
            row: this,
            index: h.startIndex
        }
          , B = e.row.getIndexChain(e.index)
          , C = e.row.children[e.index];
        d.hasSelection && (l = this.children[h.startIndex],
        m = this.children[h.endIndex],
        g = d.getSelectionCopy());
        h = e.row.children[e.index];
        if (null === h || void 0 === h)
            h = e.row.children[e.index - 1];
        h = h.getSymbFontAttrbs();
        for (var E = [], A = 0; A < this.numrows; A++) {
            for (var w = [], v = 0; v < p; v++) {
                var y = new b.Row(new b.BlockSymbol);
                y.setSymbFontAttrbs(h);
                w.splice(0, 0, y)
            }
            E.splice(A, 0, w)
        }
        this.insertColumns(E, r, p);
        q.colalign = q.insertArrayAtttrbs(q.colalign, n, n + p - 1, t, "center");
        for (A = 0; A < this.numrows; A++)
            q.rows[A].colalign = q.insertArrayAtttrbs(q.rows[A].colalign, n, n + p - 1, t, "center"),
            q.rows[A].cols = q.insertArrayAtttrbs(q.rows[A].cols, n, n + p - 1, t, "center");
        q.colspacing = q.insertArrayAtttrbs(q.colspacing, n, n + p - 1, t, "0.8em");
        q.collines = q.insertArrayAtttrbs(q.collines, n, n + p - 1, t, "none");
        q.populateData(this.numrows, this.numcols);
        b = {
            row: null !== C && void 0 !== C ? C.parent : e.row,
            index: null !== C && void 0 !== C ? C.index : e.index
        };
        e = b.row.getIndexChain(b.index);
        d.hasSelection && (k = l.parent.getIndexChain(l.index),
        e = m.parent.getIndexChain(m.index),
        l = this.getSelection(d.startPosition, d.endPosition, l.index, m.index, k, e, d.rightMove),
        d.setSelection(l),
        e = d.endPosition.row.getIndexChain(d.endPosition.index),
        k = d.getSelectionCopy());
        this.updateEditTabButtons(f);
        l = f.getButtonStatus();
        f.actions.addAction(a, z, B, e, u, null, null, g, k, l, l);
        f.cursor.setPosition(b);
        f.redraw(d.hasSelection)
    },
    actDeleteRows: function(f) {
        var a = f.cursor.position
          , b = a.etb.parray
          , d = Math.floor(b.startIndex / this.numcols)
          , g = Math.floor(b.endIndex / this.numcols) + 1
          , k = f.selection
          , e = null
          , h = "deleterows"
          , l = null
          , m = this.info;
        b = {
            row: this,
            index: b.startIndex
        };
        var n = a.row.getIndexChain(a.index);
        k.hasSelection && (e = k.getSelectionCopy());
        var p = f.getButtonStatus();
        if (g - d == this.numrows) {
            l = this.parent;
            b = {
                row: l,
                index: this.index
            };
            g = {
                row: l,
                index: this.index
            };
            var q = l.children.length - this.index - 1;
            a = l.remove(this.index, this.index + 1, !0);
            h = "delete"
        } else {
            var t = a.row.children[a.index];
            if (null === t || void 0 === t)
                t = a.row.children[a.index - 1];
            t = this.getAncestorOf(t);
            a = t.index;
            a = g < this.numrows ? g * this.numcols + a % this.numcols : (d - 1) * this.numcols + a % this.numcols;
            t = this.children[a];
            a = {
                entries: this.deleteRows(d, g - d),
                info: this.info.copy(this.numrows, this.numcols),
                startRow: d,
                numRows: g - d
            };
            m.rowalign = m.deleteArrayAtttrbs(m.rowalign, d, g - 1, this.numrows, !0, "baseline");
            m.rows = m.deleteArrayAtttrbs(m.rows, d, g - 1, this.numrows, !1);
            m.rowspacing = m.deleteArrayAtttrbs(m.rowspacing, g - 1, this.numrows, !0, "1.0ex");
            m.rowlines = m.deleteArrayAtttrbs(m.rowlines, d, g - 1, this.numrows, !0, "none");
            m.populateData(this.numrows, this.numcols);
            g = {
                row: t,
                index: 0
            }
        }
        d = g.row.getIndexChain(g.index);
        k.clear();
        f.cursor.setPosition(g);
        g = f.getButtonStatus();
        null === l && this.updateEditTabButtons(f);
        f.actions.addAction(h, b, n, d, a, null, q, e, null, p, g);
        f.redraw(k.hasSelection)
    },
    actDeleteColumns: function(f) {
        var a = f.cursor.position
          , b = a.etb.parray
          , d = b.startIndex % this.numcols
          , g = b.endIndex % this.numcols + 1
          , k = f.selection
          , e = null
          , h = "deletecolumns"
          , l = null
          , m = this.info;
        b = {
            row: this,
            index: b.startIndex
        };
        var n = a.row.getIndexChain(a.index);
        k.hasSelection && (e = k.getSelectionCopy());
        var p = f.getButtonStatus();
        if (g - d == this.numcols) {
            l = this.parent;
            b = {
                row: l,
                index: this.index
            };
            g = {
                row: l,
                index: this.index
            };
            var q = l.children.length - this.index - 1;
            a = l.remove(this.index, this.index + 1, !0);
            h = "delete"
        } else {
            var t = a.row.children[a.index];
            if (null === t || void 0 === t)
                t = a.row.children[a.index - 1];
            t = this.getAncestorOf(t);
            a = t.index;
            a = g < this.numcols ? Math.floor(a / this.numcols) * this.numcols + g : Math.floor(a / this.numcols) * this.numcols + d - 1;
            t = this.children[a];
            a = {
                entries: this.deleteColumns(d, g - d),
                info: this.info.copy(this.numrows, this.numcols),
                startCol: d,
                numCols: g - d
            };
            m.colalign = m.deleteArrayAtttrbs(m.colalign, d, g - 1, this.numcols, !0, "center");
            for (var r = 0; r < this.numrows; r++)
                m.rows[r].colalign = m.deleteArrayAtttrbs(m.rows[r].colalign, d, g - 1, this.numcols, !1),
                m.rows[r].cols = m.deleteArrayAtttrbs(m.rows[r].cols, d, g - 1, this.numcols, !1);
            m.colspacing = m.deleteArrayAtttrbs(m.colspacing, g - 1, this.numcols, !0, "0.8em");
            m.collines = m.deleteArrayAtttrbs(m.collines, d, g - 1, this.numcols, !0, "none");
            m.populateData(this.numrows, this.numcols);
            g = {
                row: t,
                index: 0
            }
        }
        d = g.row.getIndexChain(g.index);
        k.clear();
        f.cursor.setPosition(g);
        g = f.getButtonStatus();
        null === l && this.updateEditTabButtons(f);
        f.actions.addAction(h, b, n, d, a, null, q, e, null, p, g);
        f.redraw(k.hasSelection)
    },
    getSelection: function(f, a, b, d, g, k, e) {
        var h = null
          , l = this.entries
          , m = Math.floor(b / this.numcols);
        b %= this.numcols;
        var n = Math.floor(d / this.numcols);
        d %= this.numcols;
        f = {
            parent: this,
            startPosition: {
                row: f.row,
                index: f.index
            },
            endPosition: {
                row: a.row,
                index: a.index
            },
            startIndex: m * this.numcols + b,
            endIndex: n * this.numcols + d + 1,
            startIndexChain: g,
            endIndexChain: k,
            rightMove: e,
            dimensions: null
        };
        if (null === f.startIndex || null === f.endIndex)
            return null;
        for (a = Math.min(m, n); a <= Math.max(m, n); a++)
            for (g = Math.min(b, d); g <= Math.max(b, d); g++)
                k = l[a][g],
                null === h ? h = {
                    top: k.dimensions.top,
                    left: k.dimensions.left,
                    width: k.dimensions.width,
                    height: k.dimensions.height
                } : (h.top = Math.min(h.top, k.dimensions.top),
                h.left = Math.min(h.left, k.dimensions.left),
                h.width = Math.max(h.left + h.width, k.dimensions.left + k.dimensions.width) - Math.min(h.left, k.dimensions.left),
                h.height = Math.max(h.top + h.height, k.dimensions.top + k.dimensions.height) - Math.min(h.top, k.dimensions.top));
        f.dimensions = h;
        return f
    },
    getSelectedArea: function(f, a) {
        var b = null
          , d = this.entries
          , g = Math.floor(f / this.numcols)
          , k = f % this.numcols
          , e = Math.floor(a / this.numcols)
          , h = a % this.numcols;
        if (null === f || null === a)
            throw Error("PArray failed to find input children.");
        for (f = Math.min(g, e); f <= Math.max(g, e); f++)
            for (a = Math.min(k, h); a <= Math.max(k, h); a++) {
                var l = d[f][a];
                null === b ? b = {
                    top: l.dimensions.top,
                    left: l.dimensions.left,
                    width: l.dimensions.width,
                    height: l.dimensions.height
                } : (b.top = Math.min(b.top, l.dimensions.top),
                b.left = Math.min(b.left, l.dimensions.left),
                b.width = Math.max(b.left + b.width, l.dimensions.left + l.dimensions.width) - Math.min(b.left, l.dimensions.left),
                b.height = Math.max(b.top + b.height, l.dimensions.top + l.dimensions.height) - Math.min(b.top, l.dimensions.top))
            }
        return b
    },
    deleteValues: function(f, a) {
        var b = this.entries
          , d = Math.floor(f / this.numcols)
          , g = f % this.numcols
          , k = Math.floor(a / this.numcols)
          , e = a % this.numcols
          , h = [];
        if (null === f || null === a)
            throw Error("PArray failed to find input children.");
        f = 0;
        for (a = Math.min(d, k); a <= Math.max(d, k); a++)
            for (var l = Math.min(g, e); l <= Math.max(g, e); l++) {
                var m = b[a][l];
                h[f++] = m.remove(0, m.children.length, !0)
            }
        return h
    },
    updateValues: function(f, a, b) {
        var d = this.entries
          , g = Math.floor(a / this.numcols)
          , k = a % this.numcols
          , e = Math.floor(b / this.numcols)
          , h = b % this.numcols
          , l = Math.min(g, e);
        g = Math.max(g, e);
        e = Math.min(k, h);
        k = Math.max(k, h);
        if (null === a || null === b)
            throw Error("PArray failed to find input children.");
        a = 0;
        for (b = l; b <= g; b++)
            for (h = e; h <= k; h++) {
                var m = d[b][h];
                for (value = f instanceof Array ? f[a++] : f instanceof org.imatheq.formulaeditor.presentation.PArray ? f.entries[(b - l) % f.columns][(h - e) % f.rows].copy() : f.copy(); 0 < value.children.length; )
                    m.insert(0, value.children.pop())
            }
        return []
    },
    setSymbFontAttrbs: function(f, a, b) {
        var d = this.entries, g;
        if (null === a || void 0 === a) {
            var k = g = 0;
            var e = d.length - 1;
            var h = d[0].length - 1
        } else {
            e = Math.floor(a / this.numcols);
            k = Math.floor(b / this.numcols);
            g = Math.min(e, k);
            e = Math.max(e, k);
            h = a % this.numcols;
            var l = b % this.numcols;
            k = Math.min(h, l);
            h = Math.max(h, l)
        }
        l = [];
        if (null === a || null === b)
            throw Error("PArray failed to find input children.");
        for (a = 0; g <= e; g++)
            for (b = k; b <= h; b++) {
                var m = d[g][b];
                l[a++] = m.copy();
                m.setSymbFontAttrbs(f)
            }
        this.setSymbFontAttrbs.parent.setSymbFontAttrbs.call(this, f);
        return l
    },
    setStylingAttrbs: function(f, a, b) {
        var d = f.startIndex % this.numcols
          , g = f.endIndex % this.numcols
          , k = Math.floor(f.startIndex / this.numcols);
        f = Math.floor(f.endIndex / this.numcols);
        var e = 0 == d && g == this.numcols - 1
          , h = 0 == k && f == this.numrows - 1
          , l = this.info;
        switch (a) {
        case "rowalign":
            if (e)
                for (l.rowalign = l.populateArrayAtttrbs(l.rowalign, k, f, this.numrows, b, "baseline"),
                a = k; a <= f; a++) {
                    if (void 0 !== l.rows[a])
                        for (l.rows[a].rowalign = null,
                        k = 0; k < this.cols; k++)
                            l.clearColAttrb(a, k, "rowalign")
                }
            else
                for (a = k; a <= f; a++)
                    for (k = d; k <= g; k++)
                        l.setColAttrb(a, k, "rowalign", b);
            break;
        case "colalign":
            if (h) {
                l.colalign = l.populateArrayAtttrbs(l.colalign, d, g, this.numcols, b, "center");
                for (a = 0; a < this.numrows; a++)
                    l.rows[a] = l.populateArrayAtttrbs(l.rows[a], d, g, this.numcols, b, "center");
                for (k = d; k <= g; k++)
                    for (a = 0; a < this.numrows; a++)
                        void 0 !== l.rows[a] && (l.rows[a].colalign && void 0 !== l.rows[a].colalign[k] && delete l.rows[a].colalign[k],
                        l.clearColAttrb(a, k, "colalign"))
            } else
                for (a = k; a <= f; a++)
                    for (k = d; k <= g; k++)
                        l.setColAttrb(a, k, "colalign", b);
            break;
        case "addframe":
            l.frame = this.editor.getPArrayLine();
            break;
        case "removeframe":
            l.frame = "none";
            break;
        case "addrowline":
            l.rowlines = l.populateArrayAtttrbs(l.rowlines, k, f, this.numrows, this.editor.getPArrayLine(), "none");
            break;
        case "removerowline":
            l.rowlines = l.populateArrayAtttrbs(l.rowlines, k, f, this.numrows, "none", "none");
            break;
        case "addcolline":
            l.collines = l.populateArrayAtttrbs(l.collines, d, g, this.numcols, this.editor.getPArrayLine(), "none");
            break;
        case "removecolline":
            l.collines = l.populateArrayAtttrbs(l.collines, d, g, this.numcols, "none", "none");
            break;
        case "setsolidline":
            this.editor.setPArrayLine("solid");
            break;
        case "setdashedline":
            this.editor.setPArrayLine("dashed");
            break;
        case "toggleequalrows":
            l.equalrows = l.equalrows && "true" == l.equalrows ? null : "true";
            break;
        case "toggleequalcols":
            l.equalcols = l.equalcols && "true" == l.equalcols ? null : "true";
            break;
        case "rowspacing":
            l.rowspacing = l.populateArrayAtttrbs(l.rowspacing, k, f, this.numrows, b, "1.0ex");
            break;
        case "colspacing":
            l.colspacing = l.populateArrayAtttrbs(l.colspacing, d, g, this.numcols, b, "0.8em")
        }
    },
    updateEditTabButtons: function(f) {
        etb = f.cursor.position.etb.parray;
        f = etb.startIndex % this.numcols;
        var a = Math.floor(etb.startIndex / this.numcols);
        var b = this.info.infod.cells[a][f].rowalign;
        var d = this.info.infod.cells[a][f].colalign;
        f = etb.startIndex % this.numcols;
        a = Math.floor(etb.startIndex / this.numcols);
        var g = etb.endIndex % this.numcols
          , k = Math.floor(etb.endIndex / this.numcols)
          , e = document.querySelectorAll('[id^="PARRAY_ROW_ALIGN_"]')
          , h = "PARRAY_ROW_ALIGN_" + b.toUpperCase();
        for (b = 0; b < e.length; b++) {
            var l = e[b].id;
            l == h ? e[b].classList.add("efmase_palettebutton_select") : e[b].classList.remove("efmase_palettebutton_select")
        }
        e = document.querySelectorAll('[id^="PARRAY_COL_ALIGN_"]');
        h = "PARRAY_COL_ALIGN_" + d.toUpperCase();
        for (b = 0; b < e.length; b++)
            l = e[b].id,
            l == h ? e[b].classList.add("efmase_palettebutton_select") : e[b].classList.remove("efmase_palettebutton_select");
        d = document.querySelectorAll('[id^="PARRAY_INS_DEL_"]');
        for (b = 0; b < d.length; b++)
            e = (g - f + 1).toString(),
            -1 != d[b].id.indexOf("PARRAY_INS_DEL_ROW_") && (e = (k - a + 1).toString()),
            d[b].title = d[b].title.replace(RegExp("[0-9]+"), e),
            d[b].firstChild.alt = d[b].title.replace(RegExp("[0-9]+"), e),
            d[b].firstChild.title = d[b].title.replace(RegExp("[0-9]+"), e);
        f = document.getElementById("PARRAY_ROW_H_EQUAL");
        this.info.infod.equalrows ? f.classList.add("efmase_palettebutton_select") : f.classList.remove("efmase_palettebutton_select");
        f = document.getElementById("PARRAY_COL_W_EQUAL");
        this.info.infod.equalcols ? f.classList.add("efmase_palettebutton_select") : f.classList.remove("efmase_palettebutton_select")
    },
    getMathML: function() {
        var f = this.entries
          , a = this.info
          , b = "<mtable" + (a.in_attrbs ? a.in_attrbs : "");
        b += a.frame ? ' frame="' + a.frame + '"' : "";
        b += a.displaystyle ? ' displaystyle="' + a.displaystyle + '"' : "";
        b += a.side ? ' side="' + a.side + '"' : "";
        b += a.width ? ' width="' + a.width + '"' : "";
        b += a.groupalign ? ' groupalign="' + a.groupalign + '"' : "";
        b += a.alignmentscope ? ' alignmentscope="' + a.alignmentscope + '"' : "";
        b += a.colwidth ? ' columnwidth="' + a.colwidth + '"' : "";
        b += a.minlabelspacing ? ' minlabelspacing="' + a.minlabelspacing + '"' : "";
        b += a.equalrows ? ' equalrows="' + a.equalrows + '"' : "";
        b += a.equalcols ? ' equalcolumns="' + a.equalcols + '"' : "";
        if (a.align) {
            var d = a.align;
            a.alignrow && d + " " + a.alignrow.toString();
            b += ' align="' + d + '"'
        }
        a.vspacing && (b += ' framespacing="' + d + '"');
        d = function(h, l, m) {
            var n = "";
            if (null !== h && void 0 !== h && h[l]) {
                for (var p = h[l][0], q = 1; q < h[l].length; q++)
                    p += " " + h[l][q];
                n += " " + m + '="' + p + '"'
            }
            return n
        }
        ;
        b += d(a, "rowspacing", "rowspacing");
        b += d(a, "rowlines", "rowlines");
        b += d(a, "rowalign", "rowalign");
        b += d(a, "colspacing", "columnspacing");
        b += d(a, "collines", "columnlines");
        b += d(a, "colalign", "columnalign");
        b += ">";
        for (var g = 0; g < f.length; g++) {
            b += "<mtr" + (a.rows[g].in_attrbs ? a.rows[g].in_attrbs : "") + d(a.rows[g], "rowalign", "rowalign") + d(a.rows[g], "colalign", "columnalign") + (a.rows[g].groupalign ? ' groupalign="' + a.rows[g].groupalign + '"' : "") + ">";
            for (var k = 0; k < f[g].length; k++) {
                var e = "<mtd" + (a.rows[g].cols[k].in_attrbs ? a.rows[g].cols[k].in_attrbs : "");
                e += a.rows[g].cols[k].rowspan ? ' rowspan="' + a.rows[g].cols[k].rowspan + '"' : "";
                e += a.rows[g].cols[k].colspan ? ' columnspan="' + a.rows[g].cols[k].colspan + '"' : "";
                e += a.rows[g].cols[k].rowalign ? ' rowalign="' + a.rows[g].cols[k].rowalign + '"' : "";
                e += a.rows[g].cols[k].colalign ? ' columnalign="' + a.rows[g].cols[k].colalign + '"' : "";
                e += a.rows[g].cols[k].groupalign ? ' groupalign="' + a.rows[g].cols[k].groupalign + '"' : "";
                e += ">";
                e += f[g][k].getMathML() + "</mtd>";
                b += "<mtd><mrow/></mtd>" == e ? "<mtd/>" : e
            }
            b += "</mtr>"
        }
        return b + "</mtable>"
    },
    getAltText: function() {
        for (var f = org.imatheq.formulaeditor.FormulaEditor.getEditor(), a = this.entries, b = "", d = 0; d < a.length; d++) {
            for (var g = "", k = 0; k < a[d].length; k++)
                g += f.altstrs.cell[a[d][k].children && 1 < a[d][k].children.length ? 1 : 0].replace("$0$", a[d][k].getAltText().trim());
            g = f.altstrs.row.replace("$0$", g.trim());
            b += g
        }
        return b = f.altstrs.table.replace("$0$", b.trim())
    },
    getSelectionMathML: function(f, a, b) {
        f = this.entries;
        var d = Math.floor(a / this.numcols)
          , g = a % this.numcols
          , k = Math.floor(b / this.numcols)
          , e = b % this.numcols;
        b = Math.min(g, e);
        a = Math.max(d, k);
        g = Math.max(g, e);
        e = '<math xmlns="http://www.w3.org/1998/Math/MathML"><mtable>';
        for (d = Math.min(d, k); d <= a; d++) {
            e += "<mtr>";
            for (k = b; k <= g; k++)
                e += "<mtd>",
                e += f[d][k].getMathML(),
                e += "</mtd>";
            e += "</mtr>"
        }
        return e + "</mtable></math>"
    },
    getMaxHeight: function(f) {
        for (var a = 0, b = 0, d = 0; d < this.numcols; d++)
            a = Math.min(a, this.entries[f][d].dimensions.top),
            b = Math.max(b, this.entries[f][d].dimensions.top + this.entries[f][d].dimensions.height);
        return {
            height: b - a,
            top: a,
            bottom: b
        }
    },
    getMaxWidth: function(f) {
        for (var a = 0, b = 0; b < this.numrows; b++)
            a = Math.max(a, this.entries[b][f].dimensions.width);
        return a
    },
    draw: function(f, a, b, d, g) {
        var k = org.imatheq.formulaeditor.presentation;
        var e = a.fontSizeModifier;
        this.editor.canvas.getFontSizeIdx(e);
        var h = f.getLinewidth(a.fontModifier)
          , l = f.getMargin(a.fontModifier)
          , m = 0
          , n = this.info
          , p = this.info.infod;
        "none" != p.frame ? (p.vspacing = null === n.vspacing ? null : f.getPXSize(n.vspacing, e),
        p.vspacing = null === p.vspacing ? f.getPXSize("0.5ex", e) : p.vspacing,
        p.hspacing = null === n.hspacing ? null : f.getPXSize(n.hspacing, e),
        p.hspacing = null === p.hspacing ? f.getPXSize("0.4em", e) : p.hspacing) : (p.vspacing = l,
        p.hspacing = l);
        p.rowspacing = [];
        for (var q = 0; q < this.numrows; q++)
            p.rowspacing[q] = null === n.rowspacing || void 0 === n.rowspacing[q] ? null : f.getPXSize(n.rowspacing[q], e),
            null === p.rowspacing[q] && (p.rowspacing[q] = 0 == q ? f.getPXSize("1.0ex", e) : p.rowspacing[q - 1]);
        p.colspacing = [];
        for (q = 0; q < this.numcols; q++)
            p.colspacing[q] = null === n.colspacing || void 0 === n.colspacing[q] ? null : f.getPXSize(n.colspacing[q], e),
            null === p.colspacing[q] && (p.colspacing[q] = 0 == q ? f.getPXSize("0.8em", e) : p.colspacing[q - 1]);
        for (e = 0; e < this.numrows; e++)
            for (n = 0; n < this.numcols; n++)
                this.entries[e][n] && this.entries[e][n].draw ? this.entries[e][n].draw(f, a, 0, 0, !0) : alert("PArray could not draw row:" + e + ", col:" + n + ".");
        n = 0;
        arrRowInfo = [];
        for (e = 0; e < this.numrows; e++)
            arrRowInfo[e] = this.getMaxHeight(e),
            p.equalrows && (n = Math.max(n, arrRowInfo[e].height));
        p.maxRowHeight = n;
        for (e = 0; e < this.numrows; e++) {
            q = Math.max(n, arrRowInfo[e].height);
            if (0 === e) {
                var t = 0;
                var r = t + arrRowInfo[e].top - (q - arrRowInfo[e].height) / 2;
                var u = r + q / 2;
                m += q + p.vspacing + l
            } else
                r = p.rows[e - 1].top + p.rows[e - 1].height + p.rowspacing[e - 1],
                u = r + q / 2,
                t = r - arrRowInfo[e].top + (q - arrRowInfo[e].height) / 2,
                m += q + p.rowspacing[e - 1];
            p.rows[e].height = q;
            p.rows[e].top = r;
            p.rows[e].center = u;
            p.rows[e].baseline = t
        }
        m += p.vspacing + l;
        e = (new k.Symbol("x")).draw(f, a, b, d, !0);
        n = Math.round((m - 2 * p.vspacing - 2 * l) / 2) + p.rows[0].top + Math.round(.6 * e.height - .5);
        for (e = 0; e < this.numrows; e++)
            p.rows[e].top -= n,
            p.rows[e].center -= n,
            p.rows[e].baseline -= n;
        e = k = 0;
        arrColInfo = [];
        for (n = 0; n < this.numcols; n++)
            arrColInfo[n] = this.getMaxWidth(n),
            p.equalcols && (e = Math.max(e, arrColInfo[n]));
        for (n = 0; n < this.numcols; n++)
            q = Math.max(e, arrColInfo[n]),
            0 === n ? (colCenter = q / 2 + p.hspacing + l,
            k += q + p.hspacing + l) : (colCenter = p.cols[n - 1].center + p.cols[n - 1].width / 2 + p.colspacing[n - 1] + q / 2,
            k += q + p.colspacing[n - 1] + l),
            p.cols[n].left = colCenter - q / 2,
            p.cols[n].width = q,
            p.cols[n].center = colCenter;
        k += p.hspacing;
        p.framedim = {
            left: b + l,
            top: d + p.rows[0].top - p.vspacing,
            width: k - 2 * l,
            height: m - 2 * l
        };
        if (!g) {
            for (e = 0; e < this.numrows; e++) {
                for (n = 0; n < this.numcols; n++) {
                    q = this.entries[e][n];
                    r = q.dimensions.width;
                    t = q.dimensions.height;
                    var z = q.dimensions.top;
                    u = d + p.rows[e].baseline;
                    var B = p.rows[e].baseline + z;
                    switch (p.cells[e][n].rowalign) {
                    case "top":
                        var C = p.rows[e].top;
                        u -= B - C;
                        break;
                    case "bottom":
                        C = p.rows[e].top + p.rows[e].height - t;
                        u += C - B;
                        p.rows[e].top + p.rows[e].height - z - t;
                        break;
                    case "center":
                        C = p.rows[e].center - t / 2,
                        u += C - B
                    }
                    t = b + p.cols[n].center - r / 2;
                    z = p.cells[e][n].colalign;
                    "left" == z ? t = b + p.cols[n].left : "right" == z && (t = b + p.cols[n].left + p.cols[n].width - r);
                    q.draw(f, a, t, u, g);
                    e == this.numrows - 1 && "none" != p.collines[n] && (q = f.getContext(),
                    r = b + p.cols[n].left + p.cols[n].width + p.colspacing[n] / 2,
                    q.save(),
                    "dashed" == p.collines[n] && q.setLineDash([5, 3]),
                    q.strokeStyle = this.mathcolor,
                    q.lineWidth = h,
                    q.beginPath(),
                    q.moveTo(r, p.framedim.top),
                    q.lineTo(r, p.framedim.top + p.framedim.height - h),
                    q.stroke(),
                    q.closePath(),
                    q.restore())
                }
                "none" != p.rowlines[e] && (q = f.getContext(),
                n = d + p.rows[e].top + p.rows[e].height + p.rowspacing[e] / 2,
                q.save(),
                "dashed" == p.rowlines[e] && q.setLineDash([5, 3]),
                q.strokeStyle = this.mathcolor,
                q.lineWidth = h,
                q.beginPath(),
                q.moveTo(p.framedim.left, n),
                q.lineTo(p.framedim.left + p.framedim.width - h, n),
                q.stroke(),
                q.closePath(),
                q.restore())
            }
            "none" != p.frame && this.editor.canvas.drawBox(p.framedim, this.mathcolor, h, null, null, "dashed" == p.frame ? [5, 3] : null)
        }
        return this.dimensions = {
            top: d + p.rows[0].top - p.vspacing - l,
            left: b,
            width: k,
            height: m
        }
    },
    getCoordinatesFromPosition: function(f, a) {
        var b;
        for (b = 0; b < this.numrows - 1 && a > this.entries[b][0].dimensions.top - (this.info.infod.rows[b].height - this.entries[b][0].dimensions.height) / 2 + this.info.infod.rows[b].height; )
            b++;
        for (a = 0; a < this.numcols - 1 && f > this.dimensions.left + this.info.infod.cols[a].left + this.info.infod.cols[a].width; )
            a++;
        return {
            row: b,
            col: a
        }
    },
    getEntryFromPosition: function(f, a) {
        f = this.getCoordinatesFromPosition(f, a);
        return this.entries[f.row][f.col]
    },
    getCursorPosition: function(f, a, b) {
        return a > this.dimensions.left && a < this.dimensions.left + this.dimensions.width - 1 ? this.getEntryFromPosition(a, b).getCursorPosition(f, a, b) : a <= this.dimensions.left ? null === this.parent || void 0 === this.parent ? null : this.parent.getPrecedingCursorPosition(f, this.index + 1, !1) : this.parent.getFollowingCursorPosition(f, this.index, !1)
    },
    getFollowingCursorPosition: function(f, a, b) {
        var d = null, g;
        if (!0 === f.continuingNavigation)
            return null === a || void 0 === a ? d = this.children[0].getFollowingCursorPosition(f, null, b) : a + 1 < this.children.length && (d = this.children[a + 1].getFollowingCursorPosition(f, null, b)),
            null !== d && void 0 !== d || null === this.parent || (d = this.parent.getFollowingCursorPosition(f, this.index, !1)),
            d;
        if (null === a || void 0 === a) {
            for (g = middle = Math.floor(this.numrows / 2); null === d && 0 <= g && g < this.numrows; )
                d = this.entries[g][0].getFollowingCursorPosition(f, null, b),
                g = g >= middle ? 2 * middle - g - 1 : 2 * middle - g;
            return d
        }
        g = Math.floor(a / this.numcols);
        a %= this.numcols;
        a + 1 < this.numcols && (d = this.entries[g][a + 1].getFirstCursorPosition(f, null, b));
        null !== d && void 0 !== d || null === this.parent || (d = this.parent.getFollowingCursorPosition(f, this.index, !1));
        return d
    },
    getPrecedingCursorPosition: function(f, a, b) {
        var d = null, g;
        if (!0 === f.continuingNavigation)
            return null === a || void 0 === a ? 0 < this.children.length && (d = this.children[this.children.length - 1].getPrecedingCursorPosition(f, null, b)) : 0 < a && (d = this.children[a - 1].getPrecedingCursorPosition(f, null, b)),
            null !== d && void 0 !== d || null === this.parent || (d = this.parent.getPrecedingCursorPosition(f, this.index, !1)),
            d;
        if (null === a || void 0 === a) {
            var k = Math.floor(this.numrows / 2);
            for (g = k; null === d && 0 <= g && g < this.numrows; )
                a = this.entries[g].length - 1,
                d = this.entries[g][a].getPrecedingCursorPosition(f, null, b),
                g = g >= k ? 2 * k - g - 1 : 2 * k - g;
            return d
        }
        0 < a && (g = Math.floor(a / this.numcols),
        a %= this.numcols,
        0 < a && (d = this.entries[g][a - 1].getLastCursorPosition(f, null, b)));
        null !== d && void 0 !== d || null === this.parent || (d = this.parent.getPrecedingCursorPosition(f, this.index, !1));
        return d
    },
    getLowerCursorPosition: function(f, a, b, d) {
        if (null === a || void 0 === a)
            return this.entries[0][0].getLowerCursorPosition(f, null, b, d);
        var g = Math.floor(a / this.numcols);
        a %= this.numcols;
        var k;
        g + 1 < this.numrows && (k = this.entries[g + 1][a].getLowerCursorPosition(f, null, b, d));
        null !== k && void 0 !== k || null === this.parent || (k = this.parent.getLowerCursorPosition(f, this.index, b, d));
        return k
    },
    getHigherCursorPosition: function(f, a, b, d) {
        if (null === a || void 0 === a)
            return this.entries[0][this.numrows - 1].getHigherCursorPosition(f, null, b, d);
        if (a < this.children.length) {
            var g = Math.floor(a / this.numcols);
            a %= this.numcols;
            var k;
            0 < g && (k = this.entries[g - 1][a].getHigherCursorPosition(f, null, b, d));
            null !== k && void 0 !== k || null === this.parent || (k = this.parent.getHigherCursorPosition(f, this.index, b, d));
            return k
        }
        return null
    },
    copy: function() {
        parray = this.clone.apply(this, this.copyArray(this.entries));
        parray.info = this.info.copy(this.numrows, this.numcols);
        return parray
    }
})
}
)();
(function() {
var f = com.efmase.js.utilities.toolset;
org.imatheq.formulaeditor.presentation.PArray.Info = $extend(org.imatheq.formulaeditor.presentation.Node, {
    align: null,
    alignrow: null,
    spacing: null,
    frame: null,
    displaystyle: null,
    side: null,
    width: null,
    groupalign: null,
    alignmentscope: null,
    colwidth: null,
    minlabelspacing: null,
    rowspacing: null,
    rowlines: null,
    rowalign: null,
    equalrows: null,
    colspacing: null,
    collines: null,
    colalign: null,
    equalcols: null,
    rows: null,
    cols: null,
    infod: null,
    in_attrbs: null,
    initialize: function() {
        var a = org.imatheq.formulaeditor.presentation;
        if (1 == arguments.length && arguments[0]instanceof a.PArray)
            for (a = arguments[0],
            this.rows = [],
            row = 0; row < a.numrows; row++)
                for (this.rows[row] = {
                    rowalign: null,
                    colalign: null,
                    groupalign: null,
                    cols: []
                },
                col = 0; col < a.numcols; col++)
                    this.rows[row].cols[col] = {
                        rowspan: null,
                        colspan: null,
                        rowalign: null,
                        colalign: null,
                        groupalign: null
                    };
        else if (1 == arguments.length) {
            a = arguments[0];
            this.in_attrbs = f.getInputAttrbs(a);
            var b = RegExp("s*(true|false)s*")
              , d = a.getAttribute("align")
              , g = RegExp("s*(top|bottom|center|baseline|axis)(s+-?[0-9]+)?s*");
            d && g.test(d) && (d = d.split(/\s+/),
            this.align = d[0],
            this.alignrow = 1 < arrAlign.length ? parseInt(arrAlign[1]) : 0);
            (d = a.getAttribute("frame")) && RegExp("s*(none|solid|dashed)s*").test(d) && (this.frame = d);
            a.getAttribute("framespacing") && (d = fspacing.split(/\s+/),
            this.hspacing = arrFSpacing[0],
            this.vspacing = 0 < d.length ? arrFSpacing[1] : null);
            (d = a.getAttribute("displaystyle")) && b.test(d) && (this.displaystyle = d);
            d = a.getAttribute("side");
            g = RegExp("s*(left|right|leftoverlap|rightoverlap)s*");
            d && g.test(d) && (this.side = d);
            d = parseInt(a.getAttribute("width"));
            isNaN(d) || (this.width = d);
            this.groupAlign = a.getAttribute("groupalign");
            this.alignmentscope = a.getAttribute("alignmentscope");
            this.colwidth = a.getAttribute("columnwidth");
            this.width = a.getAttribute("width");
            this.minLabelSpacing = a.getAttribute("minlabelspacing");
            (d = a.getAttribute("rowspacing")) && "" != d.trim() && (this.rowspacing = d.trim().split(/\s+/));
            (d = a.getAttribute("columnspacing")) && "" != d.trim() && (this.colspacing = d.trim().split(/\s+/));
            d = RegExp("s*(none|solid|dashed)s*(s+(none|solid|dashed)s*)*");
            (g = a.getAttribute("rowlines")) && d.test(g) && (this.rowlines = g.trim().split(/\s+/));
            (g = a.getAttribute("columnlines")) && d.test(g) && (this.collines = g.trim().split(/\s+/));
            d = a.getAttribute("rowalign");
            g = RegExp("s*(top|bottom|center|baseline|axis)s*(s+(top|bottom|center|baseline|axis)s*)*");
            d && g.test(d) && (this.rowalign = d.trim().split(/\s+/));
            d = a.getAttribute("columnalign");
            g = RegExp("s*(left|center|right)s*(s+(left|center|right)s*)*");
            d && g.test(d) && (this.colalign = d.trim().split(/\s+/));
            (d = a.getAttribute("equalrows")) && b.test(d) && (this.equalrows = d.trim());
            (d = a.getAttribute("equalcolumns")) && b.test(d) && (this.equalcols = d.trim());
            b = a.childNodes.length;
            for (row = d = 0; row < b; row++)
                for (g = a.childNodes.item(row),
                this.setRowAttrbs(row, g),
                d = Math.max(d, g.childNodes.length),
                col = 0; col < g.childNodes.length; col++) {
                    var k = g.childNodes.item(col);
                    this.setColAttrbs(row, col, k)
                }
            this.populateData(b, d)
        } else
            1 < arguments.length && (this.rows = arguments[0],
            this.cols = arguments[1],
            this.rowspacing = arguments[2],
            this.colspacing = arguments[3],
            this.rowlines = arguments[4],
            this.collines = arguments[5],
            this.rowalign = arguments[6],
            this.colalign = arguments[7],
            this.populateData(b, d))
    },
    setRowAttrbs: function(a, b) {
        this.rows || (this.rows = []);
        void 0 === this.rows[a] && (this.rows[a] = {
            rowalign: null,
            colalign: null,
            groupalign: null,
            in_attrbs: null,
            cols: []
        });
        this.rows[a].in_attrbs = f.getInputAttrbs(b);
        var d = b.getAttribute("rowalign")
          , g = RegExp("s*(top|bottom|center|baseline|axis)s*");
        d && g.test(d) && (this.rows[a].rowalign = d.trim());
        d = b.getAttribute("columnalign");
        g = RegExp("s*(left|center|right)s*(s+(left|center|right)s*)*");
        d && g.test(d) && (this.rows[a].colalign = d.split(/\s+/));
        this.rows[a].groupAlign = b.getAttribute("groupalign")
    },
    setColAttrbs: function(a, b, d) {
        this.rows || (this.rows = []);
        void 0 === this.rows[a] && (this.rows[a] = {
            rowalign: null,
            colalign: null,
            groupalign: null,
            cols: []
        });
        var g = this.rows[a].cols;
        void 0 === g[b] && (g[b] = {
            rowspan: null,
            colspan: null,
            rowalign: null,
            colalign: null,
            groupalign: null,
            in_attrbs: null
        });
        if (d) {
            g[b].in_attrbs = f.getInputAttrbs(d);
            var k = parseInt(d.getAttribute("rowspan"));
            isNaN(k) || (g[b].rowspan = k);
            k = parseInt(d.getAttribute("colspan"));
            isNaN(k) || (g[b].colspan = k);
            k = d.getAttribute("rowalign");
            var e = RegExp("s*(top|bottom|center|baseline|axis)s*");
            k && e.test(k) && (g[b].rowalign = k.trim());
            k = d.getAttribute("columnalign");
            e = RegExp("s*(left|center|right)s*");
            k && e.test(k) && (g[b].colalign = k.trim());
            this.rows[a].groupAlign = d.getAttribute("groupalign")
        }
    },
    mergeArrayAtttrbs: function(a, b) {
        var d = a.length
          , g = a[d - 1];
        for (d -= 2; 0 <= d; d--)
            a[d] == g && a.splice(-1, 1);
        if (0 == a.length || 1 == a.length && a[0] == b)
            a = null;
        return a
    },
    populateArrayAtttrbs: function(a, b, d, g, k, e) {
        a ||= [];
        for (var h = a.length; h < b; h++)
            a[h] = 0 == a.length ? e : a[a.length - 1];
        d + 1 >= a.length && d + 1 < g && (a[d + 1] = 0 == a.length ? e : a[a.length - 1]);
        for (h = b; h <= d; h++)
            a[h] = k;
        a &&= this.mergeArrayAtttrbs(a, e);
        return a
    },
    insertArrayAtttrbs: function(a, b, d, g, k) {
        var e = "behind" == g ? d + 1 : b;
        if (!a)
            return null;
        g = "behind" == g ? a[d] : a[b];
        if (null === g || void 0 === g)
            return a;
        b = d - b + 1;
        if ("object" != typeof g) {
            for (d = 0; d < b; d++)
                a.splice(e, 0, g);
            a &&= this.mergeArrayAtttrbs(a, k)
        } else
            for (d = 0; d < b; d++)
                k = this.copyObject(g),
                a.splice(e, 0, k);
        return a
    },
    deleteArrayAtttrbs: function(a, b, d, g, k, e) {
        if (!a)
            return null;
        if (k && d < g - 1 && a[b] && void 0 !== a[b] && void 0 === a[d])
            for (g = d; g >= b; g--)
                if (void 0 !== a[g]) {
                    a[d + 1] = this.copyObject(a[g]);
                    break
                }
        a.splice(b, d - b + 1);
        k && (a = this.mergeArrayAtttrbs(a, e));
        return a
    },
    populateData: function(a, b) {
        this.infod || (this.infod = {});
        var d = this.infod;
        d.frame = "none";
        if ("solid" == this.frame || "dashed" == this.frame)
            d.frame = this.frame;
        d.equalrows = !1;
        "true" == this.equalrows && (d.equalrows = !0);
        d.equalcols = !1;
        "true" == this.equalcols && (d.equalcols = !0);
        var g = function(l, m, n, p) {
            return m && 0 != m.length ? m[l] ? m[l] : n[l - 1] : p
        };
        d.rowlines = [];
        d.rows = [];
        for (var k = [], e = 0; e < a; e++)
            d.rows[e] = {},
            d.rowlines[e] = e == a - 1 ? "none" : g(e, this.rowlines, d.rowlines, "none"),
            k[e] = g(e, this.rowalign, k, "baseline");
        d.collines = [];
        d.cols = [];
        var h = [];
        for (e = 0; e < b; e++)
            d.cols[e] = {},
            d.collines[e] = e == b - 1 ? "none" : g(e, this.collines, d.collines, "none"),
            h[e] = g(e, this.colalign, h, "center");
        d.cells = [];
        for (e = 0; e < a; e++)
            for (this.rows && void 0 !== this.rows[e] && null !== this.rows[e].rowalign && void 0 !== this.rows[e].rowalign && (k[e] = this.rows[e].rowalign),
            d.cells[e] = [],
            g = 0; g < b; g++)
                d.cells[e][g] = this.rows && void 0 !== this.rows[e] && null !== this.rows[e].colalign && void 0 !== this.rows[e].colalign[g] ? {
                    colalign: this.rows[e].colalign[g]
                } : {
                    colalign: h[g]
                };
        for (e = 0; e < a; e++)
            for (g = 0; g < b; g++)
                d.cells[e][g].rowalign = this.rows && void 0 !== this.rows[e] && this.rows[e].cols && this.rows[e].cols[g] && void 0 !== this.rows[e].cols[g] && null !== this.rows[e].cols[g].rowalign && void 0 !== this.rows[e].cols[g].rowalign ? this.rows[e].cols[g].rowalign : k[e],
                this.rows && void 0 !== this.rows[e] && this.rows[e].cols && this.rows[e].cols[g] && void 0 !== this.rows[e].cols[g] && null !== this.rows[e].cols[g].colalign && void 0 !== this.rows[e].cols[g].colalign && (d.cells[e][g].colalign = this.rows[e].cols[g].colalign)
    },
    setColAttrb: function(a, b, d, g) {
        void 0 === this.rows[a] && (this.rows[a] = {
            rowalign: null,
            colalign: null,
            groupalign: null,
            cols: []
        });
        a = this.rows[a].cols;
        void 0 === a[b] && (a[b] = {
            rowspan: null,
            colspan: null,
            rowalign: null,
            colalign: null,
            groupalign: null
        });
        switch (d) {
        case "rowalign":
            d = RegExp("s*(top|bottom|center|baseline|axis)s*");
            g && d.test(g) ? a[b].rowalign = g.trim() : a[b].rowalign = null;
            break;
        case "colalign":
            d = RegExp("s*(left|center|right)s*");
            g && d.test(g) ? a[b].colalign = g.trim() : a[b].colalign = null;
            break;
        case "rowspan":
            g = parseInt(g);
            isNaN(g) ? a[b].rowspan = null : a[b].rowspan = g;
            break;
        case "colspan":
            g = parseInt(g);
            isNaN(g) ? a[b].colspan = null : a[b].colspan = g;
            break;
        case "groupalign":
            a[b].groupalign = g
        }
    },
    clearColAttrb: function(a, b, d) {
        if (void 0 !== this.rows[a] && (a = this.rows[a].cols,
        void 0 !== a[b]))
            switch (d) {
            case "rowalign":
                a[b].rowalign = null;
                break;
            case "colalign":
                a[b].colalign = null;
                break;
            case "rowspan":
                a[b].rowspan = null;
                break;
            case "colspan":
                a[b].colspan = null;
                break;
            case "groupalign":
                a[b].groupalign = value
            }
    },
    copyObject: function(a) {
        "function" != typeof Object.assign && (Object.assign = function(g, k) {
            if (null == g)
                throw new TypeError("Cannot convert undefined or null to object");
            for (var e = Object(g), h = 1; h < arguments.length; h++) {
                var l = arguments[h];
                if (null != l)
                    for (var m in l)
                        Object.prototype.hasOwnProperty.call(l, m) && (e[m] = l[m])
            }
            return e
        }
        );
        if (null === a)
            return null;
        if ("object" != typeof a)
            return a;
        var b = null;
        if (Array.isArray(a)) {
            b = [];
            for (var d = 0; d < a.length; d++)
                b[d] = this.copyObject(a[d])
        } else
            for (d in b = Object.assign({}, a),
            a)
                Object.prototype.hasOwnProperty.call(a, d) && null !== a[d] && "object" == typeof a[d] && (b[d] = this.copyObject(a[d]));
        return b
    },
    copy: function(a, b) {
        var d = this.clone();
        for (prop in this)
            !Object.prototype.hasOwnProperty.call(this, prop) || this[prop]instanceof Function || "children" == prop || "infod" == prop || (d[prop] = this.copyObject(this[prop]));
        d.populateData(a, b);
        return d
    }
})
}
)();
(function() {
org.imatheq.formulaeditor.presentation.PseudoRow = $extend(org.imatheq.formulaeditor.presentation.Node, {
    draw: null,
    functionsFromRow: "getFirstCursorPosition getFollowingCursorPosition getPrecedingCursorPosition getLastCursorPosition getLowerCursorPosition getHigherCursorPosition draw isEmpty getMathML insert replace remove".split(" "),
    initialize: function() {
        this.children = Array.prototype.slice.call(arguments);
        for (var f = new org.imatheq.formulaeditor.presentation.Row, a = this.functionsFromRow.length - 1; 0 <= a; a--)
            this[this.functionsFromRow[a]] || (this[this.functionsFromRow[a]] = f[this.functionsFromRow[a]]);
        this.updateChildren()
    }
})
}
)();
(function() {
org.imatheq.formulaeditor.presentation.Enclose = $extend(org.imatheq.formulaeditor.presentation.Node, {
    notations: ["longdiv"],
    children: null,
    margin: {
        box: {
            l: 5,
            t: 5,
            r: 5,
            b: 5
        },
        circle: {
            l: 1,
            t: 1,
            r: 0,
            b: 0
        },
        horizontalstrike: {
            l: 3,
            t: 0,
            r: 3,
            b: 0
        },
        updiagonalstrike: {
            l: 1,
            t: 2,
            r: 1,
            b: 2
        },
        downdiagonalstrike: {
            l: 1,
            t: 2,
            r: 1,
            b: 2
        }
    },
    border_color: "#000000",
    lineWidth: 1,
    slowDelete: !0,
    initialize: function() {
        this.children = 0 == arguments.length ? [] : [arguments[0]];
        1 < arguments.length && (this.notations = arguments[1]);
        2 < arguments.length && (this.mathcolor = arguments[2]);
        this.updateChildren()
    },
    draw: function(f, a, b, d, g) {
        for (var k = org.imatheq.formulaeditor.presentation, e = b, h = d, l = b, m = d, n = null, p = 0; p < this.notations.length; p++) {
            var q = this.margin[this.notations[p]];
            1 == this.children[0].children.length && this.children[0].children[0]instanceof k.Enclose && (q = 1 == this.children[0].children[0].notations.length && "horizontalstrike" == this.children[0].children[0].notations[0] ? {
                l: 1,
                t: this.margin[this.notations[p]].t,
                r: 1,
                b: this.margin[this.notations[p]].b
            } : {
                l: 1,
                t: 1,
                r: 1,
                b: 1
            });
            switch (this.notations[p]) {
            case "box":
                n = this.drawBox(f, a, q, b, d, g);
                break;
            case "circle":
                n = this.drawCircle(f, a, q, b, d, g);
                break;
            case "horizontalstrike":
                n = this.drawHStrike(f, a, q, b, d, g);
                break;
            case "updiagonalstrike":
                n = this.drawSlash(f, a, q, b, d, g);
                break;
            case "downdiagonalstrike":
                n = this.drawBackslash(f, a, q, b, d, g)
            }
            e = Math.min(e, n.left);
            h = Math.min(h, n.top);
            l = Math.max(l, n.left + n.width);
            m = Math.max(m, n.top + n.height)
        }
        return {
            left: e,
            top: h,
            width: l - e,
            height: m - h
        }
    },
    drawBox: function(f, a, b, d, g, k) {
        var e = this.children[0].draw(f, a, 0, 0, !0);
        this.dimensions = {
            height: this.children[0].dimensions.height + b.t + b.b + this.lineWidth,
            width: this.children[0].dimensions.width + b.l + b.r + this.lineWidth,
            left: e.left + d,
            top: e.top + g - b.t
        };
        k || (f.drawBox(this.dimensions, this.mathcolor, this.lineWidth),
        this.children[0].draw(f, a, d + b.l, g, !1));
        return this.dimensions
    },
    drawSlash: function(f, a, b, d, g, k) {
        var e = this.children[0].draw(f, a, 0, 0, !0);
        this.dimensions = {
            height: this.children[0].dimensions.height + b.t + b.b,
            width: this.children[0].dimensions.width + b.l + b.r,
            left: e.left + d,
            top: e.top + g - b.t
        };
        k || (f.drawSlash(this.dimensions, this.mathcolor, this.lineWidth),
        this.children[0].draw(f, a, d + b.l, g, !1));
        return this.dimensions
    },
    drawBackslash: function(f, a, b, d, g, k) {
        var e = this.children[0].draw(f, a, 0, 0, !0);
        this.dimensions = {
            height: this.children[0].dimensions.height + b.t + b.b,
            width: this.children[0].dimensions.width + b.l + b.r,
            left: e.left + d,
            top: e.top + g - b.t
        };
        k || (f.drawBackslash(this.dimensions, this.mathcolor, this.lineWidth),
        this.children[0].draw(f, a, d + b.l, g, !1));
        return this.dimensions
    },
    drawHStrike: function(f, a, b, d, g, k) {
        var e = this.children[0].draw(f, a, 0, 0, !0);
        this.dimensions = {
            height: this.children[0].dimensions.height,
            width: this.children[0].dimensions.width + b.l + b.r,
            left: e.left + d,
            top: e.top + g
        };
        k || (this.children[0].draw(f, a, d + b.l, g, !1),
        f.drawHStrike(this.dimensions, this.mathcolor, this.lineWidth));
        return this.dimensions
    },
    drawCircle: function(f, a, b, d, g, k) {
        var e = this.children[0].draw(f, a, 0, 0, !0);
        e = {
            left: e.left,
            top: e.top - b.t,
            width: e.width + b.l + b.r,
            height: e.height + b.t + b.b
        };
        var h = Math.round(.414 * e.width / 2)
          , l = Math.round(.414 * e.height / 2);
        this.dimensions = {
            left: d + e.left,
            top: g + e.top - l,
            width: e.width + 2 * h + this.lineWidth,
            height: e.height + 2 * l + this.lineWidth
        };
        k || (e = this.children[0].draw(f, a, d + h + b.l, g, !1),
        e = {
            left: e.left - b.l,
            top: e.top - b.t,
            width: e.width + b.l + b.r,
            height: e.height + b.t + b.b
        },
        this.dimensions = f.drawCircle(e, this.mathcolor, this.lineWidth));
        return this.dimensions
    },
    getFirstCursorPosition: function(f, a, b) {
        return this.getFollowingCursorPosition(f, null, b)
    },
    getLastCursorPosition: function(f, a, b) {
        return this.getPrecedingCursorPosition(f, null, b)
    },
    getFollowingCursorPosition: function(f, a, b) {
        if (null === b || void 0 === b)
            b = !0;
        var d = this.children[0];
        if (null === a || void 0 === a)
            return d.getFollowingCursorPosition(f, null, b);
        if (null !== this.parent)
            return this.parent.getFollowingCursorPosition(f, this.index, !1)
    },
    getPrecedingCursorPosition: function(f, a, b) {
        if (null === b || void 0 === b)
            b = !0;
        var d = this.children[0];
        if (null === a || void 0 === a)
            return d.getPrecedingCursorPosition(f, null, b);
        d = null;
        if (1 == a)
            if (b)
                d = this.children[0].getLastCursorPosition(f, null, b);
            else
                return {
                    row: this.children[0],
                    index: this.children[0].children.length
                };
        return null === d && null !== this.parent ? {
            row: this.parent,
            index: this.index
        } : d
    },
    getCursorPosition: function(f, a, b) {
        return a > this.dimensions.left && a < this.dimensions.left + this.dimensions.width - 1 ? a < (this.dimensions.left + this.children[0].dimensions.left) / 2 ? {
            row: this.parent,
            index: this.index
        } : this.children[0].getCursorPosition(f, a, b) : a <= this.dimensions.left ? null === this.parent || void 0 === this.parent ? null : this.parent.getPrecedingCursorPosition(f, this.index + 1, !1) : this.parent.getFollowingCursorPosition(f, this.index, !1)
    },
    getLowerCursorPosition: function(f, a, b, d) {
        if (null === d || void 0 === d)
            d = !0;
        return null === a || void 0 === a ? this.children[0].getLowerCursorPosition(f, null, b, d) : null !== this.parent ? this.parent.getLowerCursorPosition(f, this.index, b, !1) : null
    },
    getHigherCursorPosition: function(f, a, b, d) {
        if (null === d || void 0 === d)
            d = !0;
        return null === a || void 0 === a ? this.children[0].getHigherCursorPosition(f, null, b, d) : null !== this.parent ? this.parent.getHigherCursorPosition(f, this.index, b, !1) : null
    },
    copy: function() {
        return this.clone(this.children[0].copy(), this.notations)
    },
    getMathML: function() {
        return '<menclose notation="' + this.notations.join(" ") + '"' + (this.in_attrbs ? this.in_attrbs : "") + (null === this.mathcolor || "" == this.mathcolor || "null" == this.mathcolor || "#000000" == this.mathcolor ? "" : ' mathcolor="' + this.mathcolor + '"') + ">" + this.children[0].getMathML() + "</menclose>"
    },
    getAltText: function() {
        for (var f = org.imatheq.formulaeditor.FormulaEditor.getEditor(), a = "", b = "strike", d = 0; d < this.notations.length; d++) {
            if ("box" == this.notations[d] || "circle" == this.notations[d])
                b = "enclose";
            a += f.getSymbolAltText(this.notations[d])
        }
        d = this.children[0].children && 1 < this.children[0].children.length ? 1 : 0;
        return f.altstrs[b][d].replace("$0$", a.trim()).replace("$1$", this.children[0].getAltText().trim())
    }
})
}
)();
$package("org.imatheq.formulaeditor.parsing.mathml");
(function() {
var f = com.efmase.js.utilities.toolset;
org.imatheq.formulaeditor.parsing.mathml.MathMLParser = $extend(org.imatheq.formulaeditor.parsing.xml.XMLParser, {
    name: "MathMLParser",
    handlemath: function(a, b) {
        (new org.imatheq.formulaeditor.Options).getOption("stretchMOBrackets") && this.ConvertMOsToMfenced(a, 0, 1);
        org.imatheq.formulaeditor.FormulaEditor.getEditor().in_attrbs = f.getInputAttrbs(a);
        return this.handlelines(a, b)
    },
    handleTextNode: function(a, b, d) {
        var g = org.imatheq.formulaeditor.presentation
          , k = f.getInputAttrbs(a, "token");
        if (null !== a.firstChild)
            var e = "" + a.firstChild.nodeValue;
        else
            return null;
        var h = e.charAt(0);
        b = [];
        var l = null === a.getAttribute("lspace") ? null : a.getAttribute("lspace")
          , m = null === a.getAttribute("rspace") ? null : a.getAttribute("rspace")
          , n = "mtext" == a.localName.toLowerCase();
        var p = a.getAttribute("mathvariant");
        var q = a.getAttribute("mathcolor")
          , t = !1
          , r = !1
          , u = !1
          , z = "mo" == a.localName.toLowerCase();
        h = void 0 !== org.imatheq.formulaeditor.parsing.expression.MOList[h];
        var B = "mn" == a.localName.toLowerCase()
          , C = "mi" == a.localName.toLowerCase()
          , E = !1
          , A = !1
          , w = !1;
        a.getAttribute("accent");
        var v = (C || z || B) && 1 < e.length;
        C = v ? "" : null;
        null === p && (p = "");
        switch (p) {
        case "":
            w = n || z || B || v || h ? null : "auto";
            break;
        case "bold":
            E = !0;
            break;
        case "italic":
            A = !0;
            break;
        case "bold-italic":
            E = !0;
            v ? A = !0 : w = "auto";
            break;
        case "double-struck":
            t = !0;
            C = null;
            v = !1;
            break;
        case "script":
            r = !0;
            w = "auto";
            C = null;
            v = !1;
            break;
        case "bold-script":
            E = r = !0;
            w = "auto";
            C = null;
            v = !1;
            break;
        case "fraktur":
            u = !0;
            C = null;
            v = !1;
            break;
        case "bold-fraktur":
            u = !0,
            C = null,
            v = !1,
            E = !0
        }
        arrCh = [];
        for (p = 0; p < e.length; p++) {
            h = e.charAt(p);
            var y = org.imatheq.formulaeditor.parsing.expression.RevList[e.slice(p, p + 2)];
            p + 1 < e.length && void 0 !== y && (h = e.slice(p, ++p + 1));
            if (void 0 === org.imatheq.formulaeditor.presentation.SymbolAliases[h]) {
                y = org.imatheq.formulaeditor.parsing.expression.RevList[h];
                if (void 0 !== y) {
                    !r && E && "script" == y.type && (r = !0);
                    !u && E && "fraktur" == y.type && (u = !0);
                    if ("bold-script" == y.type || "bold-fraktur" == y.type)
                        h = y.non_bold,
                        E = !0;
                    if ("bold-script" == y.type || "script" == y.type)
                        italic = !0
                }
                t && void 0 !== org.imatheq.formulaeditor.parsing.expression.DoubleStruckList[h] && (h = org.imatheq.formulaeditor.parsing.expression.DoubleStruckList[h]);
                r && void 0 !== org.imatheq.formulaeditor.parsing.expression.ScriptList[h] && (h = org.imatheq.formulaeditor.parsing.expression.ScriptList[h]);
                u && void 0 !== org.imatheq.formulaeditor.parsing.expression.FrakturList[h] && (h = org.imatheq.formulaeditor.parsing.expression.FrakturList[h]);
                " " == h ? arrCh.push([" ", null, null, null]) : arrCh.push([h, E, r, u]);
                void 0 !== org.imatheq.formulaeditor.parsing.expression.MOList[h] && (v = !1,
                C = null);
                v && (C += h)
            }
        }
        for (p = 0; p < arrCh.length; p++) {
            if (" " == arrCh[p][0])
                e = new g.Space("0.4em","0","0"," ",n);
            else
                for (e = "Bracket" == d ? new g.Bracket(arrCh[p][0],arrCh[p][1],q,n,A,w,C,l,m,z,B,t,arrCh[p][2],arrCh[p][3]) : "VerticalBracket" == d ? new g.VerticalBracket(arrCh[p][0],arrCh[p][1],q,n,A,w,C,l,m,z,B,t,arrCh[p][2],arrCh[p][3]) : new g.Symbol(arrCh[p][0],arrCh[p][1],q,n,A,w,C,l,m,z,B,t,arrCh[p][2],arrCh[p][3]),
                r = "form fence separator lspace rspace stretchy symmetric maxsize minsize largeop movablelimits accent".split(" "),
                u = 0; u < a.attributes.length; u++)
                    E = a.attributes[u],
                    -1 != r.indexOf(E.localName) && (k += " " + E.localName + '="' + E.value + '"');
            e.in_attrbs = k;
            b.push(e)
        }
        a = new g.Row;
        a.initialize.apply(a, b);
        return a
    },
    handleInferredMrow: function(a, b) {
        return 0 == a.childElementCount ? null : 1 != a.childElementCount ? this.handlemrow(a, b) : this.handle(a.firstElementChild)
    },
    handlemi: function(a, b) {
        return this.handleTextNode(a, b)
    },
    handlemn: function(a, b) {
        return this.handleTextNode(a, b)
    },
    handlemo: function(a, b) {
        return this.handleTextNode(a, b)
    },
    handlems: function(a, b) {
        var d = org.imatheq.formulaeditor.presentation;
        return new d.Row(new d.Symbol('"'),this.handleTextNode(a, b),new d.Symbol('"'))
    },
    handlemspace: function(a, b) {
        b = org.imatheq.formulaeditor.presentation;
        var d = "" == a.getAttribute("width") || null === a.getAttribute("width") ? "0" : a.getAttribute("width")
          , g = "" == a.getAttribute("height") || null === a.getAttribute("height") ? "0" : a.getAttribute("height")
          , k = "" == a.getAttribute("depth") || null === a.getAttribute("depth") ? "0" : a.getAttribute("depth");
        a = f.getInputAttrbs(a, "token");
        d = new b.Space(d,g,k);
        d.in_attrbs = a;
        return new b.Row(d)
    },
    handlemtext: function(a, b) {
        return this.handleTextNode(a, b)
    },
    handlelines: function(a, b) {
        var d = a.childNodes
          , g = []
          , k = []
          , e = org.imatheq.formulaeditor.presentation;
        1 == d.length && "mrow" == d.item(0).localName.toLowerCase() && (d = d.item(0).childNodes);
        for (var h = 0; h < d.length; h++)
            child = d.item(h),
            "mo" != child.localName && "mspace" != child.localName || "newline" != child.getAttribute("linebreak") ? (a = this.handle(d.item(h), b),
            null !== a && k.push(a)) : ("before" == child.getAttribute("linebreakstyle") && (a = this.handle(d.item(h), b),
            null !== a && k.push(child)),
            k.push(new e.NewlineSymbol),
            a = new e.Row,
            a.initialize.apply(a, k),
            a.flatten(),
            g.push(a),
            k = [],
            "after" == child.getAttribute("linebreakstyle") && (a = this.handle(d.item(h), b),
            null !== a && k.push(child)));
        a = new e.Row;
        0 != k.length ? a.initialize.apply(a, k) : a.remove(0, 1);
        a.flatten();
        g.push(a);
        if (0 == g.length)
            return null;
        if (1 == g.length)
            return 1 == g[0].children.length && g[0].children[0]instanceof e.PArray ? g[0].children[0] : g[0];
        b = new e.Lines;
        b.initialize.apply(b, g);
        return b
    },
    handlemstack: function(a, b) {
        var d = a.childNodes
          , g = []
          , k = []
          , e = org.imatheq.formulaeditor.presentation;
        1 == d.length && "mrow" == d.item(0).localName.toLowerCase() && (d = d.item(0).childNodes);
        for (var h = "0", l = d.length - 1; 0 <= l; l--)
            if ("msgroup" == t.localName) {
                var m = d.item(l);
                h++;
                for (var n = m.getAttribute("position"), p = m.getAttribute("shift"), q = m.length - 1; 0 <= q; q--) {
                    var t = m.childNodes.item(q);
                    t.setAttribute("group_id", h);
                    t.setAttribute("group_position", n);
                    t.setAttribute("group_shift", p);
                    m.removeChild(t);
                    a.appendChild(t)
                }
                a.removeChild(m)
            } else if ("mscarries" == t.localName) {
                m = d.item(l);
                n = m.getAttribute("position");
                p = m.getAttribute("location");
                q = m.getAttribute("crossout");
                for (var r = m.getAttribute("scriptsizemultiplier"), u = 0; u < m.childNods.length; u++)
                    t = m.childNodes.item(u),
                    t.setAttribute("msc_position", n),
                    t.setAttribute("msc_location", p),
                    t.setAttribute("msc_crossout", q),
                    t.setAttribute("msc_scriptsizemultiplier", r)
            }
        a = null;
        for (l = 0; l < d.length; l++)
            "mscarries" == t.localName ? null === a && (a = l) : (msrow = d.item(l),
            "mo" != t.localName && "mspace" != t.localName || "newline" != t.getAttribute("linebreak") ? (a = this.handle(d.item(l), b),
            null !== a && k.push(a)) : ("before" == t.getAttribute("linebreakstyle") && (a = this.handle(d.item(l), b),
            null !== a && k.push(t)),
            k.push(new e.NewlineSymbol),
            a = new e.Row,
            a.initialize.apply(a, k),
            a.flatten(),
            a.updateChildren(),
            g.push(a),
            k = [],
            "after" == t.getAttribute("linebreakstyle") && (a = this.handle(d.item(l), b),
            null !== a && k.push(t))),
            a = null);
        a = new e.Row;
        0 != k.length ? a.initialize.apply(a, k) : a.remove(0, 1);
        g.push(a);
        if (0 == g.length)
            return null;
        if (1 == g.length)
            return 1 == g[0].children.length && g[0].children[0]instanceof e.PArray ? g[0].children[0] : g[0];
        b = new e.Lines;
        b.initialize.apply(b, g);
        return b
    },
    handlemrow: function(a, b) {
        for (var d = a.childNodes, g = [], k = org.imatheq.formulaeditor.presentation, e = 0; e < d.length; e++) {
            var h = this.handle(d.item(e), b);
            null !== h && g.push(h)
        }
        0 == g.length && g.push(new k.BlockSymbol);
        b = new k.Row;
        b.initialize.apply(b, g);
        b.flatten();
        b.updateChildren();
        a.getAttribute("is_answer") && "true" == a.getAttribute("is_answer") && (b.isAnswer = !0);
        b.in_attrbs = f.getInputAttrbs(a);
        return b
    },
    handleannotationxml: function(a, b) {
        a.getAttribute("encoding");
        return this.handlemrow(a, b)
    },
    handlesemantics: function(a, b) {
        return this.handleInferredMrow(a, b)
    },
    handlemfrac: function(a, b) {
        for (var d = a.childNodes, g = [], k = org.imatheq.formulaeditor.presentation, e = 0; e < d.length; e++) {
            var h = this.handle(d.item(e), b);
            g.push(h)
        }
        b = "true" == a.getAttribute("bevelled") ? new k.BevelledFraction(g[0],g[1]) : new k.Fraction(g[0],g[1]);
        d = f.getInputAttrbs(a);
        b.in_attrbs = d;
        a = a.getAttribute("linethickness");
        isNaN(parseFloat(a)) || (b.lineWidth = parseFloat(a));
        return new k.Row(b)
    },
    handlemover: function(a, b) {
        return this.handlemunderovers(a, b)
    },
    handlemunder: function(a, b) {
        return this.handlemunderovers(a, b)
    },
    handlemunderover: function(a, b) {
        return this.handlemunderovers(a, b)
    },
    handlemunderovers: function(a, b) {
        var d = a.childNodes
          , g = org.imatheq.formulaeditor.presentation;
        a.getAttribute("accent");
        a.getAttribute("accentunder");
        var k = a.getAttribute("mathcolor")
          , e = a.localName
          , h = g.SymbolOnscreens;
        a = f.getInputAttrbs(a);
        var l = null;
        "mo" == d.item(0).localName ? l = d.item(0) : "mrow" == d.item(0).localName && 1 == d.item(0).childElementCount && "mo" == d.item(0).firstChild.localName && (l = d.item(0).firstChild);
        if (l && 0 == l.childElementCount && "string" == typeof l.firstChild.nodeValue && 1 == l.firstChild.nodeValue.length && (-1 !== org.imatheq.formulaeditor.parsing.expression.LargeopList.indexOf(l.firstChild.nodeValue) || -1 !== org.imatheq.formulaeditor.parsing.expression.MidVertBracketList.indexOf(l.firstChild.nodeValue) || void 0 !== h[l.firstChild.nodeValue] && (-1 !== org.imatheq.formulaeditor.parsing.expression.LargeopList.indexOf(h[l.firstChild.nodeValue]) || -1 !== org.imatheq.formulaeditor.parsing.expression.MidVertBracketList.indexOf(h[l.firstChild.nodeValue])))) {
            var m = h[l.firstChild.nodeValue];
            m = void 0 === m ? null : m;
            if (-1 !== org.imatheq.formulaeditor.parsing.expression.LargeopList.indexOf(l.firstChild.nodeValue) || -1 !== org.imatheq.formulaeditor.parsing.expression.MidVertBracketList.indexOf(l.firstChild.nodeValue))
                m = null;
            var n = this.handleTextNode(l, b, "VerticalBracket").children[0];
            n.onscreen = m;
            n.accent = !1;
            h = [];
            "munderover" != e && (2 <= d.length ? h.push(this.handle(d.item(1), b)) : h.push(new g.Row(new g.BlockSymbol)));
            "munderover" == e && (3 <= d.length ? h.push(this.handle(d.item(2), b)) : h.push(new g.Row(new g.BlockSymbol)),
            2 <= d.length ? h.push(this.handle(d.item(1), b)) : h.push(new g.Row(new g.BlockSymbol)));
            e = new g.MiddleBracketed(e,n,h,k);
            e.in_attrbs = a;
            return new g.Row(e)
        }
        var p = l = !1;
        if (2 <= d.length)
            if ("mo" == d.item(1).localName && 0 == d.item(1).childElementCount && "string" == typeof d.item(1).firstChild.nodeValue && 1 == d.item(1).firstChild.nodeValue.length && (-1 !== org.imatheq.formulaeditor.parsing.expression.VertBracketList.indexOf(d.item(1).firstChild.nodeValue) || void 0 !== h[d.item(1).firstChild.nodeValue] && -1 !== org.imatheq.formulaeditor.parsing.expression.VertBracketList.indexOf(h[d.item(1).firstChild.nodeValue]))) {
                m = h[d.item(1).firstChild.nodeValue];
                m = void 0 === m ? null : m;
                -1 !== org.imatheq.formulaeditor.parsing.expression.VertBracketList.indexOf(d.item(1).firstChild.nodeValue) && (m = null);
                l = !0;
                var q = this.handleTextNode(d.item(1), b, "VerticalBracket").children[0];
                q.onscreen = m
            } else
                "mrow" == d.item(1).localName && 1 == d.item(1).childElementCount && "mo" == d.item(1).firstChild.localName && 0 == d.item(1).firstChild.childElementCount && "string" == typeof d.item(1).firstChild.firstChild.nodeValue && 1 == d.item(1).firstChild.firstChild.nodeValue.length && (-1 !== org.imatheq.formulaeditor.parsing.expression.VertBracketList.indexOf(d.item(1).firstChild.firstChild.nodeValue) || void 0 !== h[d.item(1).firstChild.firstChild.nodeValue] && -1 !== org.imatheq.formulaeditor.parsing.expression.VertBracketList.indexOf(h[d.item(1).firstChild.firstChild.nodeValue])) ? (m = h[d.item(1).firstChild.firstChild.nodeValue],
                m = void 0 === m ? null : m,
                -1 !== org.imatheq.formulaeditor.parsing.expression.VertBracketList.indexOf(d.item(1).firstChild.firstChild.nodeValue) && (m = null),
                l = !0,
                q = this.handleTextNode(d.item(1).firstChild, b, "VerticalBracket").children[0],
                q.onscreen = m) : q = this.handle(d.item(1), b);
        else
            q = new g.Row(new g.BlockSymbol);
        3 <= d.length ? "mo" == d.item(2).localName && 0 == d.item(1).childElementCount && "string" == typeof d.item(1).firstChild.nodeValue && 1 == d.item(1).firstChild.nodeValue.length && (-1 !== org.imatheq.formulaeditor.parsing.expression.VertBracketList.indexOf(d.item(2).firstChild.nodeValue) || void 0 !== h[d.item(2).firstChild.nodeValue] && -1 !== org.imatheq.formulaeditor.parsing.expression.VertBracketList.indexOf(h[d.item(2).firstChild.nodeValue])) ? (m = h[d.item(2).firstChild.nodeValue],
        m = void 0 === m ? null : m,
        -1 !== org.imatheq.formulaeditor.parsing.expression.VertBracketList.indexOf(d.item(2).firstChild.nodeValue) && (m = null),
        p = !0,
        n = new g.VerticalBracket(d.item(2).firstChild.nodeValue,null,m,null,k)) : n = this.handle(d.item(2), b) : "munderover" == e && (n = new g.Row(new g.BlockSymbol));
        b = this.handle(d.item(0), b);
        if (l || p) {
            if ("munderover" == e)
                return l ? p || (b = new g.column(b),
                n = new g.VerticalBracket("")) : (b = new g.column(q,b),
                q = new g.VerticalBracket("")),
                e = new g.VerticalBracketed(e,n,b,q,k),
                e.in_attrbs = a,
                new g.Row(e);
            n = new g.VerticalBracket("");
            e = "mover" == e ? new g.VerticalBracketed(e,q,b,n,k) : new g.VerticalBracketed(e,n,b,q,k);
            e.in_attrbs = a;
            return new g.Row(e)
        }
        if ("mover" == e)
            return k = new g.Column(q,b),
            k.fontSizeModifierArray = [-1, 0],
            k.baselineIndex = 1,
            k.mtype = e,
            k.in_attrbs = a,
            new g.Row(k);
        if ("munder" == e)
            return k = new g.Column(b,q),
            k.fontSizeModifierArray = [0, -1],
            k.baselineIndex = 0,
            k.mtype = e,
            k.in_attrbs = a,
            new g.Row(k);
        k = new g.Column(n,b,q);
        k.fontSizeModifierArray = [-1, 0, -1];
        k.baselineIndex = 1;
        k.mtype = e;
        k.in_attrbs = a;
        return new g.Row(k)
    },
    handlemsqrt: function(a, b) {
        var d = org.imatheq.formulaeditor.presentation
          , g = a.getAttribute("mathcolor")
          , k = f.getInputAttrbs(a);
        a = this.handleInferredMrow(a, b);
        g = new d.Root(a,null,g);
        g.in_attrbs = k;
        return new d.Row(g)
    },
    handlemroot: function(a, b) {
        var d = a.childNodes
          , g = a.getAttribute("mathcolor");
        "" == g && (g = null);
        a = f.getInputAttrbs(a);
        var k = this.handle(d.item(0), b);
        d = this.handle(d.item(1), b);
        b = org.imatheq.formulaeditor.presentation;
        g = new b.Root(k,d,g);
        g.in_attrbs = a;
        return new b.Row(g)
    },
    handlemstyle: function(a, b) {
        return this.handlemrow(a, b)
    },
    handlemerror: function(a, b) {
        return this.handlemrow(a, b)
    },
    handlempadded: function(a, b) {
        return this.handlemrow(a, b)
    },
    handlemfenced: function(a, b) {
        var d = a.getAttribute("open")
          , g = a.getAttribute("close")
          , k = a.getAttribute("separators")
          , e = a.getAttribute("mathcolor")
          , h = a.childNodes
          , l = org.imatheq.formulaeditor.presentation
          , m = l.SymbolOnscreens
          , n = ""
          , p = ""
          , q = ""
          , t = f.getInputAttrbs(a)
          , r = [];
        "" == e && (e = null);
        null === d || void 0 === d ? d = "(" : "(" == d && (n = ' open="("');
        var u = m[d];
        u = void 0 === u ? null : u;
        d = new l.Bracket(d,null,e);
        d.onscreen = u;
        null === g || void 0 === g ? g = ")" : ")" == g && (p = ' close=")"');
        closeOnscreen = m[g];
        closeOnscreen = void 0 === closeOnscreen ? null : closeOnscreen;
        g = new l.Bracket(g,null,e);
        g.onscreen = closeOnscreen;
        for (m = 0; m < a.attributes.length; m++)
            u = a.attributes[m],
            e = u.localName.split("_"),
            1 < e.length && "open" == e[0] && (d["mo_" + e[1]] = u.value),
            1 < e.length && "close" == e[0] && (g["mo_" + e[1]] = u.value);
        null === k || void 0 === k ? k = "" : q = ' separators="' + k + '"';
        if ("" == k)
            m = null;
        else if (m = k.split("\\s+"),
        "" === m[0] && (m = m.slice(1)),
        0 < m.length && "" === m[m.length] && m.splice(m.length - 1),
        1 == m.length) {
            e = [];
            for (k = 0; k < m[0].length; k++)
                e.push(m[0].charAt(k));
            m = e
        }
        for (k = 0; k < h.length; k++) {
            if (0 < k && null !== m) {
                var z;
                0 < m.length && (z = k < m.length ? m[k] : m[0]);
                for (e = 0; e < z.length; e++)
                    r.push(new l.Symbol(z.charAt(e)))
            }
            e = this.handle(h.item(k), b);
            r.push(e)
        }
        1 == r.length && r[0]instanceof l.Row ? b = r[0] : (b = new l.Row,
        b.initialize.apply(b, r));
        r = new l.Bracketed(d,b,g);
        "true" == a.getAttribute("isMO") && (r.isMO = !0);
        null != a.getAttribute("symmetric") && (r.symmetric = "true" == a.getAttribute("symmetric").toLowerCase() ? !0 : "false" == a.getAttribute("symmetric").toLowerCase() ? !1 : null);
        r.in_attrbs = t;
        r.in_open = n;
        r.in_close = p;
        r.in_separators = q;
        return new l.Row(r)
    },
    handlemtable: function(a, b) {
        var d = org.imatheq.formulaeditor.presentation, g = [], k, e, h, l = new org.imatheq.formulaeditor.presentation.PArray.Info(a);
        for (k = 0; k < a.childNodes.length; k++) {
            var m = []
              , n = a.childNodes.item(k);
            for (e = 0; e < n.childNodes.length; e++) {
                var p = n.childNodes.item(e)
                  , q = [];
                for (h = 0; h < p.childNodes.length; h++) {
                    var t = p.childNodes.item(h);
                    q.push(this.handle(t, b))
                }
                h = new d.Row;
                h.initialize.apply(h, q);
                m.push(h)
            }
            g.push(m)
        }
        for (k = a = 0; k < g.length; k++)
            a < g[k].length && (a = g[k].length);
        for (k = 0; k < g.length; k++)
            if (g[k].length < a)
                for (m = g[k],
                e = m.length; e < a; e++)
                    m.push(new d.Row(new d.BlockSymbol)),
                    l.setColAttrbs(k, e);
        k = new org.imatheq.formulaeditor.presentation.PArray;
        k.initialize.apply(k, g);
        k.margin = 10;
        k.info = l;
        return new d.Row(k)
    },
    handlemaligngroup: function(a, b) {
        a = a.getAttribute("groupalign");
        return new org.imatheq.formulaeditor.presentation.Alignmark("maligngroup",a)
    },
    handlemalignmark: function(a, b) {
        a = a.getAttribute("edge");
        return new org.imatheq.formulaeditor.presentation.Alignmark("malignmark",a)
    },
    handlemenclose: function(a, b) {
        var d = org.imatheq.formulaeditor.presentation
          , g = f.getInputAttrbs(a)
          , k = a.getAttribute("notation").replace(/\s\s+/g, " ").split(" ")
          , e = a.getAttribute("mathcolor");
        e = "" == e ? null : e;
        a = this.handleInferredMrow(a, b);
        k = new d.Enclose(a,k,e);
        k.in_attrbs = g;
        return new d.Row(k)
    },
    handlemsub: function(a, b) {
        return this.handlemsubsup(a, b)
    },
    handlemsup: function(a, b) {
        return this.handlemsubsup(a, b)
    },
    handlemsubsup: function(a, b) {
        var d = a.childNodes
          , g = org.imatheq.formulaeditor.presentation
          , k = a.localName;
        a.getAttribute("mathcolor");
        var e = g.SymbolOnscreens
          , h = f.getInputAttrbs(a);
        if ("mo" == d.item(0).localName && 0 == d.item(0).childElementCount && "string" == typeof d.item(0).firstChild.nodeValue && 1 == d.item(0).firstChild.nodeValue.length && (-1 !== org.imatheq.formulaeditor.parsing.expression.LargeopList.indexOf(d.item(0).firstChild.nodeValue) || void 0 !== e[d.item(0).firstChild.nodeValue] && -1 !== org.imatheq.formulaeditor.parsing.expression.LargeopList.indexOf(e[d.item(0).firstChild.nodeValue]))) {
            var l = e[d.item(0).firstChild.nodeValue];
            l = void 0 === l ? null : l;
            -1 !== org.imatheq.formulaeditor.parsing.expression.LargeopList.indexOf(d.item(0).firstChild.nodeValue) && (l = null);
            e = this.handleTextNode(d.item(0), b, "VerticalBracket").children[0];
            e.onscreen = l;
            e.accent = !1;
            l = null;
            var m = 2 <= d.length ? this.handle(d.item(1), b) : new g.Row(new g.BlockSymbol);
            "msubsup" == k && (l = 3 <= d.length ? this.handle(d.item(2), b) : new g.Row(new g.BlockSymbol));
            a = new g.LargeOpSubsup(a.localName,e,l,m);
            a.in_attrbs = h;
            return new g.Row(a)
        }
        if ("mrow" == d.item(0).localName && 1 == d.item(0).childElementCount && "mo" == d.item(0).firstChild.localName && 0 == d.item(0).firstChild.childElementCount && "string" == typeof d.item(0).firstChild.firstChild.nodeValue && 1 == d.item(0).firstChild.firstChild.nodeValue.length && (-1 !== org.imatheq.formulaeditor.parsing.expression.LargeopList.indexOf(d.item(0).firstChild.firstChild.nodeValue) || void 0 !== e[d.item(0).firstChild.firstChild.nodeValue] && -1 !== org.imatheq.formulaeditor.parsing.expression.LargeopList.indexOf(e[d.item(0).firstChild.firstChild.nodeValue])))
            return l = e[d.item(0).firstChild.firstChild.nodeValue],
            l = void 0 === l ? null : l,
            -1 !== org.imatheq.formulaeditor.parsing.expression.LargeopList.indexOf(d.item(0).firstChild.firstChild.nodeValue) && (l = null),
            e = this.handleTextNode(d.item(0).firstChild, b, "VerticalBracket").children[0],
            e.onscreen = l,
            e.accent = !1,
            l = null,
            m = 2 <= d.length ? this.handle(d.item(1), b) : new g.Row(new g.BlockSymbol),
            "msubsup" == k && (l = 3 <= d.length ? this.handle(d.item(2), b) : new g.Row(new g.BlockSymbol)),
            a = new g.LargeOpSubsup(a.localName,e,l,m),
            a.in_attrbs = h,
            new g.Row(a);
        e = this.handle(d.item(0), b);
        m = 2 <= d.length ? this.handle(d.item(1), b) : new g.Row(new g.BlockSymbol);
        "msubsup" == k && (l = 3 <= d.length ? this.handle(d.item(2), b) : new g.Row(new g.BlockSymbol));
        a = new g.Subsup(k,l,m);
        a.in_attrbs = h;
        return new g.Row(e,a)
    },
    handlemmultiscripts: function(a, b) {
        var d = a.childNodes
          , g = []
          , k = []
          , e = org.imatheq.formulaeditor.presentation
          , h = this.handle(d.item(0), b)
          , l = "id" + (new Date).getTime() + Math.random().toString(16).slice(2);
        a = f.getInputAttrbs(a);
        for (var m = !1, n = 1; n < d.length; n++)
            if ("mprescripts" == d.item(n).localName)
                m = !0;
            else {
                var p = null;
                "none" != d.item(n).localName && (p = this.handle(d.item(n), b));
                var q = null;
                n + 1 < d.length && "none" != d.item(n + 1).localName && "mprescripts" != d.item(n + 1).localName && (q = this.handle(d.item(++n), b));
                if (null !== p || null !== q) {
                    var t = null === p ? "msup" : null === q ? "msub" : "msubsup";
                    m ? (p = new e.Subsup(t,q,p,"mprescripts",l),
                    p.in_attrbs = a,
                    k.push(p)) : (p = new e.Subsup(t,q,p,"mmultiscripts",l),
                    p.in_attrbs = a,
                    g.push(p))
                }
            }
        k.push(h);
        for (n = 0; n < g.length; n++)
            k.push(g[n]);
        b = new e.Row;
        b.initialize.apply(b, k);
        return b
    }
})
}
)();
(function() {
org.imatheq.formulaeditor.version = {
    showAboutPopup: function() {
        alert("imatheq Formulaeditor\nversion: " + this.toString() + "\nhttp://imatheq.org/formulaeditor/\ninfo@imatheq.org")
    },
    toString: function() {
        return this.versionInfo
    },
    versionInfo: "1.1.31f"
}
}
)();
(function() {
org.imatheq.formulaeditor.Palettes = {
    defaultPalette: null
}
}
)();
(function() {
var f = com.efmase.js.utilities.toolset;
org.imatheq.formulaeditor.MathCanvas = $extend(Object, {
    editor: null,
    canvas: null,
    fontName: "cmr",
    fontFamilyNameIdx: 0,
    exFontCache: [],
    fontSizes: [144, 173, 193, 207, 249, 298, 358, 430, 537, 716, 860, 1074, 1432, 1720],
    fontNames: "Math Font;Arial;Courier New;Tahoma;Times New Roman;Verdana".split(";"),
    fontSizeIdx: null,
    imageCache: null,
    loadingImages: 0,
    loadingCallbacks: [],
    readonly: !1,
    initialize: function(a, b) {
        this.editor = a;
        this.canvas = b;
        this.imageCache = {};
        if (org.imatheq.formulaeditor.options.fontSize) {
            for (a = 0; a < this.fontSizes.length - 1 && this.fontSizes[a] < org.imatheq.formulaeditor.options.fontSize; )
                a++;
            this.fontSizeIdx = a
        } else
            this.fontSizeIdx = (new org.imatheq.formulaeditor.Options).getOption("defaultFontSizeIdx")
    },
    drawBracketFont: function(a, b, d, g, k) {
        var e = document.createElement("span");
        e.style.position = "absolute";
        e.style.top = d;
        e.style.left = b;
        e.style.width = g;
        e.style.height = k;
        e.innerHTML = a
    },
    waitToLoadImage: function() {
        var a = this;
        checkImgLoading = function() {
            0 < a.loadingImages ? (document.getElementById("com_imatheq_loading_msg").style.display = "",
            window.setTimeout(checkImgLoading, 500)) : document.getElementById("com_imatheq_loading_msg").style.display = "none"
        }
        ;
        window.setTimeout(checkImgLoading, 500)
    },
    getLinewidth: function(a) {
        return 8 < this.getFontSizeIdx(a) ? 2 : 1
    },
    getMargin: function(a) {
        return 8 < this.getFontSizeIdx(a) ? 2 : 1
    },
    getPXSize: function(a, b) {
        if (null === a || void 0 === a)
            return null;
        a = a.trim();
        if ("0" == a)
            return 0;
        if ("%" == a.slice(a.length - 1)) {
            var d = parseFloat(a.slice(0, a.length - 1));
            var g = "%"
        } else
            d = parseFloat(a.slice(0, a.length - 2)),
            g = a.slice(a.length - 2).toLowerCase();
        switch (g) {
        case "px":
            return d;
        case "em":
            d *= this.getFontUnitEm(b);
            break;
        case "ex":
            d *= this.getFontUnitEx(b);
            break;
        case "in":
            d *= 96;
            break;
        case "cm":
            d = 96 * d / 2.54;
            break;
        case "mm":
            d = 96 * d / 25.4;
            break;
        case "pt":
            d = 96 * d / 72;
            break;
        case "pc":
            d = 96 * d / 6;
            break;
        case "%":
            d = d * this.getFontUnitEm(b) / 100;
            break;
        case "ce":
            switch (a) {
            case "veryverythinmathspace":
                d = this.getFontUnitEm(b) / 18;
                break;
            case "verythinmathspace":
                d = 2 * this.getFontUnitEm(b) / 18;
                break;
            case "thinmathspace":
                d = 3 * this.getFontUnitEm(b) / 18;
                break;
            case "mediummathspace":
                d = 4 * this.getFontUnitEm(b) / 18;
                break;
            case "thickmathspace":
                d = 5 * this.getFontUnitEm(b) / 18;
                break;
            case "verythickmathspace":
                d = 6 * this.getFontUnitEm(b) / 18;
                break;
            case "veryverythickmathspace":
                d = 7 * this.getFontUnitEm(b) / 18;
                break;
            case "negativeveryverythinmathspace":
                d = -this.getFontUnitEm(b) / 18;
                break;
            case "negativeverythinmathspace":
                d = 2 * -this.getFontUnitEm(b) / 18;
                break;
            case "negativethinmathspace":
                d = 3 * -this.getFontUnitEm(b) / 18;
                break;
            case "negativemediummathspace":
                d = 4 * -this.getFontUnitEm(b) / 18;
                break;
            case "negativethickmathspace":
                d = 5 * -this.getFontUnitEm(b) / 18;
                break;
            case "negativeverythickmathspace":
                d = 6 * -this.getFontUnitEm(b) / 18;
                break;
            case "negativeveryverythickmathspace":
                d = 7 * -this.getFontUnitEm(b) / 18;
                break;
            default:
                return null
            }
            break;
        default:
            return null
        }
        return Math.round(d)
    },
    getEMStringFromPx: function(a, b) {
        return a / this.getFontUnitEm(b)
    },
    getEMSize: function(a, b) {
        if ("0" == a.trim())
            return 0;
        if ("%" == a.trim().slice(a.trim().length - 1)) {
            var d = parseFloat(a.trim().slice(0, a.trim().length - 1));
            a = "%"
        } else {
            if (-1 != a.indexOf("mathspace")) {
                switch (a) {
                case "veryverythinmathspace":
                    d = 1 / 18;
                    break;
                case "verythinmathspace":
                    d = 2 / 18;
                    break;
                case "thinmathspace":
                    d = 3 / 18;
                    break;
                case "mediummathspace":
                    d = 4 / 18;
                    break;
                case "thickmathspace":
                    d = 5 / 18;
                    break;
                case "verythickmathspace":
                    d = 6 / 18;
                    break;
                case "veryverythickmathspace":
                    d = 7 / 18;
                    break;
                case "negativeveryverythinmathspace":
                    d = -1 / 18;
                    break;
                case "negativeverythinmathspace":
                    d = -2 / 18;
                    break;
                case "negativethinmathspace":
                    d = -3 / 18;
                    break;
                case "negativemediummathspace":
                    d = -4 / 18;
                    break;
                case "negativethickmathspace":
                    d = -5 / 18;
                    break;
                case "negativeverythickmathspace":
                    d = -6 / 18;
                    break;
                case "negativeveryverythickmathspace":
                    d = -7 / 18
                }
                return d
            }
            d = parseFloat(a.trim().slice(0, a.trim().length - 2));
            a = a.trim().slice(a.trim().length - 2).toLowerCase()
        }
        switch (a) {
        case "ex":
            d = d * this.getFontUnitEx(b) / this.getFontUnitEm(b);
            break;
        case "in":
            d = 96 * d / this.getFontUnitEm(b);
            break;
        case "cm":
            d = 96 * d / 2.54 / this.getFontUnitEm(b);
            break;
        case "mm":
            d = 96 * d / 25.4 / this.getFontUnitEm(b);
            break;
        case "pt":
            d = 96 * d / 72 / this.getFontUnitEm(b);
            break;
        case "pc":
            d = 96 * d / 6 / this.getFontUnitEm(b);
            break;
        case "%":
            d /= 100
        }
        return d
    },
    getPXFontSize: function(a, b) {
        return [10, 12, 13, 14, 17, 20, 24, 32, 40, 48, 64, 80, 96, 128][this.getFontSizeIdx(a, b)]
    },
    getFontSizeFromPX: function(a) {
        return [8, 9, 10, 11, 12, 15, 18, 24, 30, 36, 48, 60, 72, 96].indexOf(a)
    },
    isTTFFont: function(a, b) {
        b = this.getFontSizeIdx(b);
        a = org.imatheq.formulaeditor.MathCanvas.symbolPositions[a];
        return null === a || void 0 === a || "cmex10" != a.font && "cmey10" != a.font && "bnormal10" != a.font && "msbm10" != a.font && "imescr10" != a.font && "eufm10" != a.font ? 7 <= b : !0
    },
    getContext: function() {
        return this.canvas.getContext("2d")
    },
    getBgContext: function() {
        return this.bgCanvas.getContext("2d")
    },
    setFontSizeIdx: function(a) {
        this.fontSizeIdx = a
    },
    drawBracket: function(a, b, d, g, k, e, h, l) {
        h = 0;
        void 0 !== a.fontSizeModifier && null !== h && (h = a.fontSizeModifier);
        if (-1 == org.imatheq.formulaeditor.parsing.expression.BracketList.indexOf(b))
            return this.drawSymbol(b, d, g, e, !1, !1, l, h);
        a = null;
        for (var m = 4; 0 <= m; m--) {
            var n = b + m;
            0 == m && (n = b);
            var p = this.getSymbolDataByPosition(n, h);
            if (null !== p && void 0 !== p && p.height >= k) {
                a = n;
                var q = p
            }
        }
        if (null !== q && void 0 !== q)
            return this.drawSymbol(a, d, g, e, !1, !1, l, h);
        q = b + "u";
        var t = this.getSymbolDataByPosition(q, h);
        a = b + "l";
        var r = this.getSymbolDataByPosition(a, h);
        m = b + "c";
        n = this.getSymbolDataByPosition(m, h);
        b += "m";
        p = this.getSymbolDataByPosition(b, h);
        null === t && (t = {
            font: null,
            height: 0,
            width: p.width,
            x: p.x,
            xadjust: p.xadjust,
            y: p.y,
            yadjust: p.yadjust
        });
        null === r && (r = {
            font: null,
            height: 0,
            width: p.width,
            x: p.x,
            xadjust: p.xadjust,
            y: p.y,
            yadjust: p.yadjust
        });
        null === n && (n = {
            font: null,
            height: 0,
            width: p.width,
            x: p.x,
            xadjust: p.xadjust,
            y: p.y,
            yadjust: p.yadjust
        });
        p.adjusted || (p.adjusted = !0,
        1 < t.height && --t.height,
        2 < n.height && (n.height -= 2,
        n.x += 1),
        1 < r.height && (--r.height,
        r.x += 1));
        k = Math.max(k, t.height + p.height + r.height + 2 * n.height);
        g = g - k + r.yadjust;
        var u = Math.max(t.width, p.width, n.width, r.width);
        if (!e) {
            var z = Math.min(t.xadjust, r.xadjust, p.xadjust, n.xadjust)
              , B = d + t.xadjust - z
              , C = g + t.height - t.yadjust;
            t = t.height;
            var E = d + r.xadjust - z
              , A = g + k - r.yadjust;
            r = r.height;
            var w = 0
              , v = 0;
            0 < n.height && (w = (k - t - r - p.height) / 2,
            w = Math.round(w),
            v = k - t - r - p.height - w);
            var y = d - p.xadjust + z
              , D = g + t + w + p.height - p.yadjust
              , F = k - t - r - w - v
              , G = null
              , H = null;
            0 < n.height && (G = {
                x: d - n.xadjust + z,
                y: g + t + n.height - n.yadjust,
                width: n.width,
                height: w
            },
            H = {
                x: d - n.xadjust + z,
                y: g + t + w + p.height + n.height - n.yadjust,
                width: n.width,
                height: v
            });
            0 < t && this.drawSymbol(q, B, C, e, !1, !1, l, h);
            0 < F && this.drawSymbol(b, y, D, e, !1, !1, l, h, null, 0 == n.height ? F : null);
            0 < n.height && (0 < w && this.drawSymbol(m, G.x, G.y, e, !1, !1, l, h, null, G.height),
            0 < v && this.drawSymbol(m, H.x, H.y, e, !1, !1, l, h, null, H.height));
            0 < r && this.drawSymbol(a, E, A, e, !1, !1, l, h)
        }
        return {
            left: d,
            top: g,
            width: u,
            height: k
        }
    },
    drawAngleBracket: function(a, b, d, g, k, e, h, l, m) {
        a = this.getContext();
        h = 0;
        void 0 !== a.fontSizeModifier && null !== a.fontSizeModifier && (h = a.fontSizeModifier);
        if (void 0 === m || null === m)
            m = 1;
        h = Math.min(Math.round(k / 4), this.getFontUnitEm(h));
        var n = g + Math.round(k / 2)
          , p = "\u27e8" == b || "\u2329" == b || "<" == b ? d + m : d + h + m;
        b = "\u27e8" == b || "\u2329" == b || "<" == b ? d + h + m : d + m;
        e || (a.save(),
        void 0 !== l && (a.strokeStyle = l),
        a.lineWidth = m,
        a.beginPath(),
        a.moveTo(b, g),
        a.lineTo(p, n),
        a.lineTo(b, g + k),
        a.stroke(),
        a.closePath(),
        a.restore());
        return {
            left: d,
            top: g,
            width: h + 2 * m,
            height: k
        }
    },
    drawCeilingFloorBracket: function(a, b, d, g, k, e, h, l, m) {
        a = this.getContext();
        h = 0;
        void 0 !== a.fontSizeModifier && null !== a.fontSizeModifier && (h = a.fontSizeModifier);
        if (void 0 === m || null === m)
            m = 1;
        h = Math.round(Math.min(k / 6, this.getFontUnitEm(h) / 2));
        h = 2 > h ? 2 : h;
        var n = "\u2308" == b || "\u230a" == b ? d + m : d + h + m
          , p = "\u230a" == b || "\u230b" == b ? g : g + k
          , q = "\u230a" == b || "\u230b" == b ? g + k : g
          , t = "\u2309" == b || "\u230b" == b ? d + m : d + h + m;
        b = "\u2308" == b || "\u2309" == b ? g : g + k;
        e || (a.save(),
        void 0 !== l && (a.strokeStyle = l),
        a.lineWidth = m,
        a.beginPath(),
        a.moveTo(n, p),
        a.lineTo(n, q),
        a.lineTo(t, b),
        a.stroke(),
        a.closePath(),
        a.restore());
        return {
            left: d,
            top: g,
            width: h + 2 * m,
            height: k
        }
    },
    drawVerticalBracket: function(a, b, d, g, k, e, h, l, m, n) {
        for (var p, q = n = null, t = null, r = null, u = null, z = 65535, B = 5; 1 <= B; B--) {
            var C = this.getSymbolDataByPosition(a + B, l);
            if (null !== C && void 0 !== C && (null === q && (r = a + B,
            q = C),
            null === t && C.width <= .7 * k && (u = a + B,
            t = C),
            C.width >= g)) {
                var E = C.width > k ? C.width - k : k - C.width;
                E < z && (n = a + B,
                p = C,
                z = E)
            }
        }
        z = m ? "" : "b";
        m = a + z + "m";
        g = this.getSymbolDataByPosition(m, l);
        null !== p && void 0 !== p || null !== g && void 0 !== g || (null !== q && void 0 !== q ? (n = r,
        p = q) : (n = a,
        p = this.getSymbolDataByPosition(a, l)));
        -1 !== "\u02d8^\u02c7~".indexOf(a) && (null !== t ? (p = t,
        n = u) : void 0 !== org.imatheq.formulaeditor.MathCanvas.symbolPositions[a] && (n = a,
        p = this.getSymbolDataByPosition(a, l)));
        if (null !== p && void 0 !== p)
            return b = this.drawSymbol(n, b, d, e, !1, !1, h, l),
            p.topcentre ? {
                left: b.left,
                top: b.top,
                width: b.width,
                height: b.height,
                topcentre: p.topcentre,
                bottomcentre: p.bottomcentre,
                bottomindent: p.bottomindent
            } : {
                left: b.left,
                top: b.top,
                width: b.width,
                height: b.height
            };
        p = a + z + "l";
        var A = this.getSymbolDataByPosition(p, l);
        n = a + z + "r";
        var w = this.getSymbolDataByPosition(n, l);
        q = a + z + "c";
        t = this.getSymbolDataByPosition(q, l);
        u = r = 0;
        null === A && (A = {
            font: null,
            height: g.height,
            width: 0,
            x: g.x,
            xadjust: g.xadjust,
            y: g.y,
            yadjust: g.yadjust
        },
        this.isTTFFont(m, l) && (null !== t ? r = 1 : null !== g && (r = 1)));
        Array.prototype.slice.call(g);
        null === w && (w = {
            font: null,
            height: g.height,
            width: 0,
            x: g.x,
            xadjust: g.xadjust,
            y: g.y,
            yadjust: g.yadjust
        },
        this.isTTFFont(m, l) && (null !== t ? u = 1 : null !== g && (u = 1)));
        null === t && (t = {
            font: null,
            height: g.height,
            width: 0,
            x: g.x,
            xadjust: g.xadjust,
            y: g.y,
            yadjust: g.yadjust
        });
        g.adjusted || this.isTTFFont(m, l) || (g.adjusted = !0,
        1 < A.width && --A.width,
        2 < g.width && (g.width -= 2,
        g.x += 1),
        2 < t.width && (t.width -= 2,
        t.x += 1),
        1 < w.width && (--w.width,
        w.x += 1));
        z = Math.max(A.yadjust, g.yadjust, t.yadjust, w.yadjust);
        a = Math.max(A.height, g.height, t.height, w.height);
        z = d - a + z;
        k = Math.max(k, A.width + g.width + w.width + 2 * t.width);
        if (!e) {
            B = Math.min(A.yadjust, w.yadjust, g.yadjust, t.yadjust);
            C = b + r;
            E = d - A.yadjust + B;
            A = A.width;
            var v = b + k + r + u - w.width
              , y = d - w.yadjust + B;
            w = w.width;
            var D = 0
              , F = 0;
            0 < t.width && (D = (k - A - w - g.width) / 2,
            D = Math.round(D),
            F = k - A - w - g.width - D);
            var G = C + A + D
              , H = d - g.yadjust + B
              , K = k - A - w - D - F
              , I = null
              , J = null;
            0 < t.width && (I = {
                x: C + A,
                y: d - t.yadjust + B,
                width: D,
                height: t.height
            },
            J = {
                x: C + A + D + g.width,
                y: d - t.yadjust + B,
                width: F,
                height: t.height
            });
            0 < A && this.drawSymbol(p, C, E, e, !1, !1, h, l);
            0 < K && this.drawSymbol(m, G, H, e, !1, !1, h, l, 0 == t.width ? K : null);
            0 < t.width && (0 < D && this.drawSymbol(q, I.x, I.y, e, !1, !1, h, l, I.width),
            0 < F && this.drawSymbol(q, J.x, J.y, e, !1, !1, h, l, J.width));
            0 < w && this.drawSymbol(n, v, y, e, !1, !1, h, l)
        }
        return {
            left: b,
            top: z,
            width: k + r + u,
            height: a
        }
    },
    drawBox: function(a, b, d, g, k, e) {
        var h = d;
        if (void 0 === d || null === d)
            h = 1;
        d = void 0 != k && k ? this.getBgContext() : this.getContext();
        d.save();
        void 0 !== e && null !== e && d.setLineDash(e);
        void 0 !== g && null !== g && (d.fillStyle = g);
        void 0 !== b && (d.strokeStyle = b);
        g && d.fillRect(a.left, a.top, a.width, a.height);
        if (!g || g && b)
            d.lineWidth = h,
            d.strokeRect(a.left, a.top, a.width - 1, a.height - 1);
        d.restore()
    },
    drawCaret: function(a) {
        if (null !== a) {
            var b = this.editor.canvas.getBgContext();
            if (f.isMobile()) {
                b.save();
                b.lineWidth = 1;
                b.beginPath();
                var d = f.caretSize;
                b.strokeStyle = "#0F8394";
                b.fillStyle = "#18DAF6";
                b.moveTo(a.x, a.bottom + 2);
                b.lineTo(a.x - d, a.bottom + 2 + d);
                b.lineTo(a.x - d, a.bottom + 2 + 3 * d);
                b.lineTo(a.x + d, a.bottom + 2 + 3 * d);
                b.lineTo(a.x + d, a.bottom + 2 + d);
                b.lineTo(a.x, a.bottom + 2);
                b.fill();
                b.stroke();
                b.closePath();
                b.restore()
            }
        }
    },
    drawSlash: function(a, b, d) {
        var g = this.getContext();
        g.save();
        void 0 !== b && (g.strokeStyle = b);
        g.lineWidth = d;
        g.beginPath();
        g.moveTo(a.left, a.top + a.height);
        g.lineTo(a.left + a.width, a.top);
        g.stroke();
        g.closePath();
        g.restore()
    },
    drawBackslash: function(a, b, d) {
        var g = this.getContext();
        g.save();
        void 0 !== b && (g.strokeStyle = b);
        g.lineWidth = d;
        g.beginPath();
        g.moveTo(a.left, a.top);
        g.lineTo(a.left + a.width, a.top + a.height);
        g.stroke();
        g.closePath();
        g.restore()
    },
    drawHStrike: function(a, b, d) {
        var g = this.getContext();
        g.save();
        void 0 !== b && (g.strokeStyle = b);
        g.lineWidth = d;
        if (void 0 === d || null === d)
            g.lineWidth = 1;
        g.beginPath();
        g.moveTo(a.left, a.top + Math.round(a.height / 2));
        g.lineTo(a.left + a.width, a.top + Math.round(a.height / 2));
        g.stroke();
        g.closePath();
        g.restore()
    },
    drawCircle: function(a, b, d) {
        var g = this.getContext()
          , k = a.left + Math.round(a.width / 2)
          , e = a.top + Math.round(a.height / 2)
          , h = 1.414 * a.width;
        a = 1.414 * a.height;
        g.save();
        g.beginPath();
        var l = k - h / 2
          , m = k + h / 2
          , n = e - a / 2
          , p = e + a / 2
          , q = .551784 * h / 2
          , t = .551784 * a / 2;
        g.moveTo(k, n);
        g.bezierCurveTo(k + q, n, m, e - t, m, e);
        g.bezierCurveTo(m, e + t, k + q, p, k, p);
        g.bezierCurveTo(k - q, p, l, e + t, l, e);
        g.bezierCurveTo(l, e - t, k - q, n, k, n);
        g.strokeStyle = b;
        g.lineWidth = d;
        g.stroke();
        g.restore();
        return {
            left: k - Math.round(h / 2),
            top: e - Math.round(a / 2),
            width: h + d,
            height: a + d
        }
    },
    drawCircle1: function(a, b, d) {
        var g = this.getContext()
          , k = Math.round(a.width / 2 - d / 2)
          , e = Math.round(a.height / 2 - d / 2)
          , h = Math.round(a.width * Math.sqrt(2) / 2 - d / 2)
          , l = Math.round(a.height * Math.sqrt(2) / 4 - d / 4)
          , m = a.left + k
          , n = a.top + e
          , p = [];
        p.push({
            rc_x: m + a.width - h,
            rc_y: n - 2 * l,
            x: m + k,
            y: n - e
        });
        p.push({
            rc_x: m + h,
            rc_y: n - l + 1,
            x: m + h,
            y: n
        });
        p.push({
            rc_x: m + h,
            rc_y: n + l - 1,
            x: a.left + a.width,
            y: a.top + a.height
        });
        p.push({
            rc_x: m + a.width - h,
            rc_y: n + 2 * l,
            x: m,
            y: n + 2 * l
        });
        p.push({
            rc_x: m - a.width + h,
            rc_y: n + 2 * l,
            x: m - k,
            y: n + e
        });
        p.push({
            rc_x: m - h,
            rc_y: n + l - 1,
            x: m - h,
            y: n
        });
        p.push({
            rc_x: m - h,
            rc_y: n - l + 1,
            x: m - k,
            y: n - e
        });
        p.push({
            rc_x: m - a.width + h,
            rc_y: n - 2 * l,
            x: m,
            y: n - 2 * l
        });
        g.save();
        g.beginPath();
        g.moveTo(p[p.length - 1].x, p[p.length - 1].y);
        for (a = 0; a < p.length; a++)
            g.quadraticCurveTo(p[a].rc_x, p[a].rc_y, p[a].x, p[a].y);
        g.strokeStyle = b;
        g.lineWidth = d;
        g.stroke();
        g.restore();
        return {
            left: m - h,
            top: n - 2 * l,
            width: 2 * h + d,
            height: 2 * l + d
        }
    },
    drawBoxWithBaseline: function(a, b, d, g) {
        this.drawBox(a, g, 1, d);
        g = this.getContext();
        g.save();
        b && (void 0 !== d && (g.strokeStyle = d),
        g.beginPath(),
        g.moveTo(a.left, b),
        g.lineTo(a.left + a.width - 1, b),
        g.stroke(),
        g.closePath());
        g.restore()
    },
    drawFBox: function(a, b, d, g, k, e, h, l) {
        if (null === g || void 0 === g)
            g = "f";
        a = this.drawSymbol(g, a, b, !0, k, e, h, l);
        d || (d = this.getContext(),
        d.save(),
        d.fillStyle = "rgba(167,191,255, 0.5)",
        d.fillRect(a.left + 1, a.top + 1, a.width - 2, a.height - 2),
        d.lineWidth = "1",
        d.strokeStyle = "black",
        d.strokeRect(a.left, a.top, a.width, a.height),
        d.restore());
        return a
    },
    drawcBox: function(a, b, d, g, k, e, h, l) {
        if (null === g || void 0 === g)
            g = "c";
        dim0 = this.getXDimentions(m, a, b);
        baseline = dim0.top + Math.round(.4 * dim0.height);
        a = this.drawSymbol(g, a, b, !0, k, e, h, l);
        a.height = 2 * Math.round(a.width / 2);
        a.top = baseline - a.height / 2;
        if (!d) {
            var m = this.getContext();
            m.save();
            m.fillStyle = "rgba(167,191,255, 0.5)";
            m.fillRect(a.left + 1, a.top + 1, a.width - 2, a.height - 2);
            m.lineWidth = "1";
            m.strokeStyle = "black";
            m.strokeRect(a.left, a.top, a.width, a.height);
            m.restore()
        }
        return a
    },
    getObjectOffset: function(a) {
        var b = currtop = 0;
        if (a.offsetParent) {
            do
                b += a.offsetLeft,
                currtop += a.offsetTop;
            while (a = a.offsetParent)
        } else
            b += a.offsetLeft,
            currtop += a.offsetTop;
        return [b, currtop]
    },
    getExFontHeights: function(a, b, d, g) {
        var k = document.createElement("span");
        k.style.fontFamily = b;
        k.style.fontSize = d + "px";
        k.style.fontStyle = g;
        k.innerHTML = a;
        d = document.createElement("div");
        d.style.display = "inline-block";
        d.style.width = "1px";
        d.style.height = "0px";
        a = document.createElement("div");
        a.appendChild(k);
        a.appendChild(d);
        a.style.height = "0px";
        a.style.overflow = "hidden";
        document.body.appendChild(a);
        d.style.verticalAlign = "baseline";
        g = this.getObjectOffset(d);
        var e = this.getObjectOffset(k);
        b = g[1] - e[1];
        d.style.verticalAlign = "bottom";
        g = this.getObjectOffset(d);
        e = this.getObjectOffset(k);
        k = g[1] - e[1];
        d = k - b;
        document.body.removeChild(a);
        return [b, k, d]
    },
    getCachedExFontHeights: function(a, b) {
        var d = "normal";
        b.italic && b.bold ? d = "bold_italic" : b.bold ? d = "bold" : b.italic && (d = "italic");
        if (null === this.exFontCache[a] || void 0 === this.exFontCache[a])
            this.exFontCache[a] = [];
        if (null === this.exFontCache[a][b.ttfFontFamily] || void 0 === this.exFontCache[a][b.ttfFontFamily])
            this.exFontCache[a][b.ttfFontFamily] = [];
        if (null === this.exFontCache[a][b.ttfFontFamily][d] || void 0 === this.exFontCache[a][b.ttfFontFamily][d])
            this.exFontCache[a][b.ttfFontFamily][d] = [];
        if (null === this.exFontCache[a][b.ttfFontFamily][d][b.pxSize] || void 0 === this.exFontCache[a][b.ttfFontFamily][d][b.pxSize]) {
            typeface = d.replace("_", " ");
            var g = this.getExFontHeights(a, b.ttfFontFamily, b.pxSize, typeface);
            return this.exFontCache[a][b.ttfFontFamily][d][b.pxSize] = g
        }
        return this.exFontCache[a][b.ttfFontFamily][d][b.pxSize]
    },
    getXDimentions: function(a, b, d) {
        b = 0;
        a && a.fontSizeModifier && (b = a.fontSizeModifier);
        a = this.getSymbolDataByPosition("x", b, !1, this.editor.isBold());
        a.top = d + a.yadjust - a.height;
        return a
    },
    drawSymbol: function(a, b, d, g, k, e, h, l, m, n) {
        var p = org.imatheq.formulaeditor.MathCanvas;
        if (void 0 !== p.specialSymbols[a]) {
            m = {
                top: d,
                left: b,
                width: 0,
                height: 0
            };
            var q, t = p.specialSymbols[a];
            for (q = 0; q < t.length; q++)
                n = m,
                m = this.drawSymbol(t[q], b, d, g, k, e, h, l),
                m = {
                    top: Math.min(n.top, m.top),
                    height: Math.max(n.top + n.height, m.top + m.height) - Math.min(n.top, m.top),
                    left: Math.min(n.left, m.left),
                    width: Math.max(n.left + n.width, m.left + m.width) - Math.min(n.left, m.left)
                };
            return m
        }
        q = this.getFontInfo(a, l, k, e);
        if ("BMP" != q.glyphType) {
            var r = this.getSymbolDataByPosition(a, l, k, e);
            k = q.onscreen ? q.onscreen : a;
            if ("msbm7" == q.ttfFontFamily || "imescr7" == q.ttfFontFamily || "eufm7" == q.ttfFontFamily)
                k = org.imatheq.formulaeditor.parsing.expression.RevList[k].key;
            t = 0;
            -1 !== org.imatheq.formulaeditor.parsing.expression.LargeopList.indexOf(a) && (e = this.getXDimentions({
                fontSizeModifier: 0
            }, b, d),
            t = Math.round(e.top + Math.round(.4 * e.height) - r.height / 2) - (d - r.height + r.yadjust));
            e = {
                left: b,
                top: d - r.height + r.yadjust + t,
                width: r.width,
                height: r.height
            };
            if (!0 !== g) {
                g = this.getContext("2d");
                g.save();
                g.font = q.typeface;
                g.fillStyle = h;
                if (null !== m && void 0 !== m)
                    for (h = Math.round(m / r.width + .5),
                    q = 0; q < h; q++)
                        g.fillText(k, b + r.xadjust + (q < h - 1 ? q * r.width : m - r.width), d);
                else if (null !== n && void 0 !== n)
                    for (h = Math.round(n / r.height + .5),
                    q = 0; q < h; q++)
                        g.fillText(k, b + r.xadjust, d + (q < h - 1 ? q * r.height : n - r.height));
                else
                    g.fillText(k, b + r.xadjust, d + t);
                g.restore()
            }
            return e
        }
        r = this.getSymbolDataByPosition(a, l, k, e);
        var u = r.font;
        r.margin && (r = this.extendObject(r, {
            x: r.x - r.margin,
            width: r.width + 2 * r.margin
        }));
        var z = d - r.height + r.yadjust + t
          , B = null !== m && void 0 !== m ? m : r.width
          , C = null !== n && void 0 !== n ? n : r.height;
        if (!g) {
            var E = this.canvas
              , A = this.imageCache;
            d = function() {
                E.getContext("2d").drawImage(A[u.image], r.x, r.y, 2 * r.width, 2 * r.height, b, z, B, C)
            }
            ;
            if (null === A[u.image] || void 0 === A[u.image]) {
                var w = new Image;
                p = this;
                w.onload = function() {
                    if (A[u.image]instanceof Array) {
                        var v = A[u.image];
                        A[u.image] = w;
                        for (var y = 0; y < v.length; y++)
                            v[y]();
                        p.loadingImages--
                    }
                }
                ;
                A[u.image] = [];
                A[u.image].push(d);
                w.src = u.image;
                this.loadingImages++;
                this.waitToLoadImage()
            } else
                A[u.image]instanceof Array ? A[u.image].push(d) : d()
        }
        return {
            left: b,
            top: z,
            width: B,
            height: C
        }
    },
    extendObject: function(a, b) {
        var d = {}, g;
        for (g in a)
            d[g] = a[g];
        for (g in b)
            d[g] = b[g];
        return d
    },
    getFontInfo: function(a, b, d, g) {
        if (" " == a)
            return null;
        var k = org.imatheq.formulaeditor.MathCanvas.symbolPositions["m" + a];
        2 == a.length && "m" == a.charAt(0) && (k = org.imatheq.formulaeditor.MathCanvas.symbolPositions[a]);
        var e = 0 == this.fontFamilyNameIdx && d && null !== k && void 0 !== k
          , h = this.getFontSizeIdx(b);
        h = this.fontSizes[h];
        b = this.getPXFontSize(b);
        e || (k = org.imatheq.formulaeditor.MathCanvas.symbolPositions[a]);
        if (1 < a.length && (null === k || void 0 === k))
            return null;
        var l = org.imatheq.formulaeditor.presentation.SymbolOnscreens[a];
        void 0 === l && (l = null);
        l && null !== k && void 0 !== k && "cmex10" != k.font && "cmey10" != k.font && (k = org.imatheq.formulaeditor.MathCanvas.symbolPositions[l]);
        var m = null !== k && void 0 !== k && ("cmex10" == k.font || "cmey10" == k.font || 0 == this.fontFamilyNameIdx), n = null !== k && void 0 !== k && k.font && k.font.indexOf("10") == k.font.length - 2, p;
        n && (p = k.font.slice(0, k.font.length - 2));
        if ("cmex" == p || "cmey" == p)
            var q = p + "10";
        else
            e || "msbm" == p || "imescr" == p || "eufm" == p || "\u2202" == a ? q = p + (g ? "b" : "") + "10" : (q = p + (d ? "i" : "") + (g ? "b" : "") + "10",
            0 != this.fontFamilyNameIdx && (q = this.fontNames[this.fontFamilyNameIdx].replace(/ /g, "") + "_" + q));
        if (0 == this.fontFamilyNameIdx || "cmex" == p || "cmey" == p)
            if (m) {
                if (m = p + "7",
                "cmsy" == p || "cmsz" == p || "bnormal" == p)
                    m = "cmr7"
            } else
                m = (new org.imatheq.formulaeditor.Options).getOption("defaultFont4NewSymbol");
        else
            m = this.fontNames[this.fontFamilyNameIdx];
        var t = "TTF_WO_DIM";
        n && (t = "TTF_W_DIM");
        var r = !1;
        if (!n) {
            r = "normal";
            if (g && d)
                r = "bold_italic";
            else if (g || d)
                r = g ? "bold" : "italic";
            r = this.exFontCache[a] && this.exFontCache[a][m] && this.exFontCache[a][m][r] && this.exFontCache[a][m][r][b]
        }
        var u = (g ? "bold " : "") + b + "px " + m;
        d && !e && "msbm" != p && "imescr" != p && "eufm" != p && "\u2202" != a && (u = "italic " + u);
        return {
            ttfFontFamily: m,
            pxSize: b,
            typeface: u,
            bold: g,
            italic: d,
            glyphType: t,
            fontSizeGroup: q,
            isCmmi: e,
            hasDimensions: n,
            cached: r,
            bmpSize: h,
            row: k ? k.row : null,
            col: k ? k.col : null,
            onscreen: l
        }
    },
    getSymbolDataByPosition: function(a, b, d, g) {
        d = null !== d && void 0 !== d ? d : !1;
        g = null !== g && void 0 !== g ? g : !1;
        var k = this.getFontInfo(a, b, d, g)
          , e = org.imatheq.formulaeditor.MathCanvas.fontsByPosition;
        if (!k) {
            if (!(1 < a.length))
                throw Error("getFontInfo() returns null");
            return null
        }
        if (k.hasDimensions)
            a = e[k.fontSizeGroup][k.bmpSize][16 * k.row + k.col];
        else {
            if ("cmex10" == k.fontSizeGroup || "cmey10" == k.fontSizeGroup)
                return null;
            e = this.getContext("2d");
            var h = this.getCachedExFontHeights(a, k);
            e.font = (d ? "italic " : "") + (g ? "bold " : "") + this.getPXFontSize(b) + "px " + k.ttfFontFamily;
            a = {
                font: k.ttfFontFamily,
                x: 0,
                y: 0,
                xadjust: 0,
                yadjust: 2 * h[2],
                width: 2 * e.measureText(a).width,
                height: 2 * h[1]
            }
        }
        b = a.x;
        d = a.y;
        g = a.xadjust;
        k = a.yadjust;
        e = a.width;
        h = a.height;
        var l = a.topcentre ? a.topcentre : null
          , m = a.bottomcentre ? a.bottomcentre : null
          , n = a.bottomindent ? a.bottomindent : null;
        0 != g % 2 && (g--,
        e++,
        b--,
        l && l++,
        m && m++);
        0 != e % 2 && (e++,
        n && n++);
        0 != k % 2 && (k++,
        h++);
        0 != h % 2 && (h++,
        d--);
        l && 0 != l % 2 && l++;
        m && 0 != m % 2 && m++;
        n && 0 != n % 2 && n++;
        return {
            font: a.font,
            x: b,
            y: d,
            xadjust: g / 2,
            yadjust: k / 2,
            width: e / 2,
            height: h / 2,
            topcentre: a.topcentre ? l / 2 : null,
            bottomcentre: a.bottomcentre ? m / 2 : null,
            bottomindent: a.bottomindent ? n / 2 : null
        }
    },
    getFontSizeIdx: function(a, b) {
        b = null === b || void 0 === b ? this.fontSizeIdx : b;
        null !== a && void 0 !== a && (b += a);
        0 > b && (b = 0);
        b > this.fontSizes.length - 1 && (b = this.fontSizes.length - 1);
        return b
    },
    getFontUnit: function(a, b, d, g, k) {
        if ("em" == a)
            return a = this.getSymbolDataByPosition("M", b, g, k),
            a.width;
        a = this.getSymbolDataByPosition("x", b, g, k);
        return a.height
    },
    getFontUnitEm: function(a) {
        return this.getFontUnit("em", a)
    },
    getFontUnitEx: function(a) {
        return this.getFontUnit("ex", a)
    },
    clear: function() {
        var a = this.canvas
          , b = a.width
          , d = a.height;
        a.getContext("2d").clearRect(0, 0, b, d)
    },
    clearBg: function() {
        var a = this.bgCanvas
          , b = a.width
          , d = a.height;
        a.getContext("2d").clearRect(0, 0, b, d)
    },
    decreaseSize: function() {
        0 < this.fontSizeIdx && --this.fontSizeIdx
    },
    increaseSize: function() {
        this.fontSizeIdx < this.fontSizes.length - 1 && (this.fontSizeIdx += 1)
    }
});
org.imatheq.formulaeditor.MathCanvas.addFont = function(a, b) {
    a = "" + a;
    org.imatheq.formulaeditor.MathCanvas.fontsByPosition || (org.imatheq.formulaeditor.MathCanvas.fontsByPosition = {});
    var d = org.imatheq.formulaeditor.MathCanvas.fontsByPosition, g;
    for (g in b) {
        d[g] || (d[g] = {});
        var k = d[g]
          , e = b[g]
          , h = {
            image: $buuuuu() + "com/imatheq/fonts/" + g + "/" + a + ".png"
        };
        k[a] || (k[a] = []);
        k = k[a];
        for (var l = e.length, m = 0; 8 > m; m++)
            for (var n = 0; 16 > n; n++) {
                var p = 16 * m + n;
                if (p < l - 3) {
                    var q = 0
                      , t = e[p][0]
                      , r = e[p][1]
                      , u = e[p][2];
                    e[p][3] && (q = e[p][3]);
                    q = e[p][4] ? {
                        x: e[l - 3][n] - q,
                        y: e[l - 2][m] - r + u,
                        width: t,
                        height: r,
                        xadjust: -q,
                        yadjust: u,
                        font: h,
                        topcentre: e[p][4],
                        bottomcentre: e[p][5],
                        bottomindent: e[p][6]
                    } : {
                        x: e[l - 3][n] - q,
                        y: e[l - 2][m] - r + u,
                        width: t,
                        height: r,
                        xadjust: -q,
                        yadjust: u,
                        font: h
                    }
                }
                k.push(q)
            }
    }
}
;
org.imatheq.formulaeditor.MathCanvas.symbolsInFont = {
    msbm10: ["\ud835\udd38 \ud835\udd39 \u2102 \ud835\udd3b \ud835\udd3c \ud835\udd3d \ud835\udd3e \u210d \ud835\udd40 \ud835\udd41 \ud835\udd42 \ud835\udd43 \ud835\udd44 \u2115 \ud835\udd46 \u2119".split(" "), ["\u211a", "\u211d", "\ud835\udd4a", "\ud835\udd4b", "\ud835\udd4c", "\ud835\udd4d", "\ud835\udd4e", "\ud835\udd4f", "\ud835\udd50", "\u2124", null, null, null, null, null, null]],
    imescr10: ["\ud835\udc9c \u212c \ud835\udc9e \ud835\udc9f \u2130 \u2131 \ud835\udca2 \u210b \u2110 \ud835\udca5 \ud835\udca6 \u2112 \u2133 \ud835\udca9 \ud835\udcaa \ud835\udcab".split(" "), "\ud835\udcac \u211b \ud835\udcae \ud835\udcaf \ud835\udcb0 \ud835\udcb1 \ud835\udcb2 \ud835\udcb3 \ud835\udcb4 \ud835\udcb5 \ud835\udcb6 \ud835\udcb7 \ud835\udcb8 \ud835\udcb9 \u212f \ud835\udcbb".split(" "), "\u210a \ud835\udcbd \ud835\udcbe \ud835\udcbf \ud835\udcc0 \ud835\udcc1 \ud835\udcc2 \ud835\udcc3 \u2134 \ud835\udcc5 \ud835\udcc6 \ud835\udcc7 \ud835\udcc8 \ud835\udcc9 \ud835\udcca \ud835\udccb".split(" "), ["\ud835\udccc", "\ud835\udccd", "\ud835\udcce", "\ud835\udccf", null, null, null, null]],
    eufm10: ["\ud835\udd04 \ud835\udd05 \u212d \ud835\udd07 \ud835\udd08 \ud835\udd09 \ud835\udd0a \u210c \u2111 \ud835\udd0d \ud835\udd0e \ud835\udd0f \ud835\udd10 \ud835\udd11 \ud835\udd12 \ud835\udd13".split(" "), "\ud835\udd14 \u211c \ud835\udd16 \ud835\udd17 \ud835\udd18 \ud835\udd19 \ud835\udd1a \ud835\udd1b \ud835\udd1c \u2128 \ud835\udd1e \ud835\udd1f \ud835\udd20 \ud835\udd21 \ud835\udd22 \ud835\udd23".split(" "), "\ud835\udd24 \ud835\udd25 \ud835\udd26 \ud835\udd27 \ud835\udd28 \ud835\udd29 \ud835\udd2a \ud835\udd2b \ud835\udd2c \ud835\udd2d \ud835\udd2e \ud835\udd2f \ud835\udd30 \ud835\udd31 \ud835\udd32 \ud835\udd33".split(" "), ["\ud835\udd34", "\ud835\udd35", "\ud835\udd36", "\ud835\udd37", null, null, null, null]],
    bnormal10: ["\u03b1\u03b2\u03b3\u03b4\u03b5\u03f5\u03b6\u03b7\u03b8\u03d1\u03b9\u03ba\u03bb\u03bc\u03bd\u03be".split(""), ["\u03bf", "\u03c0", "\u03d6", "\u03c1", "\u03f1", "\u03c3", "\u03c2", "\u03c4", "\u03c5", "\u03c6", "\u03d5", "\u03c7", "\u03c8", "\u03c9", null, "\u2145"], [null, "\u212a", null, null, null, null, null, null, null, null, null, null, null, null, null, null]],
    cmr10: ["\u0393\u0394\u0398\u039e\u039b\u03a0\u03a3\u03d2\u03a6\u03a8\u03a9\ufb00\ufb01\ufb02\ufb03\ufb04".split(""), ["\u2030", "\u02d8", "\`", "\u00b4", "\u02c7", "\u2026", null, "\u00b0", "\u00b8", "\u00df", "\u00e6", "\u0153", "\u00f8", "\u00c6", "\u0152", "\u00d8"], [null, "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", null, ".", "/"], "0123456789:;<=>?".split(""), "@ABCDEFGHIJKLMNO".split(""), "PQRSTUVWXYZ[\\]^\u02d9".split(""), [null, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o"], ["p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", null, null, null, "~", "\u00a8"]],
    cmex10: ["(1 )1 [1 ]1 \u230a1 \u230b1 \u23081 \u23091 {1 }1 <1 >1 |m \u2225m /1 \\1".split(" "), "(2 )2 (3 )3 [3 ]3 \u230a3 \u230b3 \u23083 \u23093 {3 }3 <3 >3 /3 \\3".split(" "), "(4 )4 [4 ]4 \u230a4 \u230b4 \u23084 \u23094 {4 }4 <4 >4 /4 \\4 /2 \\2".split(" "), "(u )u [u ]u [l ]l [m ]m {u }u {l }l {m }m {c }c".split(" "), ["(l", ")l", "(m", ")m", "<2", ">2", null, null, null, "\u222e", null, null, null, null, null, null], [null, null, null, null, null, null, null, null, "\u2211", "\u220f", "\u222b", "\u22c3", "\u22c2", null, "\u22c0", "\u22c1"], [null, "\u2210", "\u222c", "\u222d", "\u222f", "\u2230", null, null, "[2", "]2", "\u230a2", "\u230b2", "\u23082", "\u23092", "{2", "}2"], ["v1", "v2", "v3", "v4", "vl", "vm", "vu", null, null, null, null, null, null, null, null, null]],
    cmey10: [["\u23221", "\u23222", "\u23224", "\u2322l", "\u2322r", "~1", "\u2194bl", "\u2194l", "\u23de1", null, "\u23de4", "\u23del", "\u21bcm", "\u21bcl", "\u2190m", "\u2190l"], ["\u23231", "\u23232", "\u23234", "\u2323l", "\u2323r", "~2", "\u2194br", "\u2194r", "\u23df1", null, "\u23df4", "\u23dfl", "\u21c0m", "\u21c0r", "\u2192m", "\u2192r"], [null, "\u23223", null, null, "\u2322m", "~3", "\u2194bm", "\u2194m", "^1", "\u23de3", null, "\u23der", "\u2212m", "\u00afm", "\u02d81", null], [null, "\u23233", null, null, "\u2323m", null, "\u21d0bl", null, "\u02c71", "\u23df3", null, "\u23dfr", "\u033fm", "_m", "\u02d82", null], [null, null, null, null, "^2", "\u2192br", "\u21d0bm", null, null, "^3", null, "\u23dem", null, null, "\u02d83", null], [null, null, null, null, "\u02c72", "\u2192bm", "\u21d2br", null, null, "\u02c73", null, "\u23dfm", "\u21d4br", null, null, null], [null, null, null, null, null, "\u2190bl", "\u21d2bm", null, null, null, null, "\u23dec", "\u21d4bl", null, "\u23de2", null], [null, null, null, null, null, "\u2190bm", null, null, null, null, null, "\u23dfc", "\u21d4bm", null, "\u23df2", null]],
    cmmi10: ["m\u0393 m\u0394 m\u0398 m\u039b m\u039e m\u03a0 m\u03a3 m\u03d2 m\u03a6 m\u03a8 m\u03a9 m\u03b1 m\u03b2 m\u03b3 m\u03b4 m\u03f5".split(" "), "m\u03b6 m\u03b7 m\u03b8 m\u03b9 m\u03ba m\u03bb m\u03bc m\u03bd m\u03be m\u03c0 m\u03c1 m\u03c3 m\u03c4 m\u03c5 m\u03d5 m\u03c7".split(" "), ["m\u03c8", "m\u03c9", "m\u03b5", "m\u03d1", "m\u03d6", "m\u03f1", "m\u03c2", "m\u03c6", null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], "\u2202 mA mB mC mD mE mF mG mH mI mJ mK mL mM mN mO".split(" "), ["mP", "mQ", "mR", "mS", "mT", "mU", "mV", "mW", "mX", "mY", "mZ", null, null, null, null, null], [null, "ma", "mb", "mc", "md", "me", "mf", "mg", "mh", "mi", "mj", "mk", "ml", "mm", "mn", "mo"], ["mp", "mq", "mr", "ms", "mt", "mu", "mv", "mw", "mx", "my", "mz", null, null, null, null, null]],
    cmsy10: ["\u2212\u00b7\u00d7\u204e\u00f7\u22c4\u00b1\u2213\u2295\u2296\u2297\u2298\u2299\u25cb\u2218\u2022".split(""), "\u224d\u2261\u2286\u2287\u2264\u2265\u227c\u227d\u223c\u2248\u2282\u2283\u226a\u226b\u227a\u227b".split(""), "\u2190\u2192\u2191\u2193\u2194\u2197\u2198\u2243\u21d0\u21d2\u21d1\u21d3\u21d4\u2196\u2199\u221d".split(""), ["\u2032", "\u221e", "\u2208", "\u220b", "\u25b3", "\u25bd", "\u2215", null, "\u2200", "\u2203", "\u00ac", "\u2205", null, null, "\u22a4", "\u22a5"], ["\u2135", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, "\u222a", "\u2229", "\u228e", "\u2227", "\u2228"], ["\u22a2", "\u22a3", "\u230a", "\u230b", "\u2308", "\u2309", "{", "}", "\u27e8", "\u27e9", "|", "\u2225", "\u2195", "\u21d5", null, "\u2240"], "\u221a\u2a3f\u2207\u0283\u2294\u2293\u2291\u2292\u00a7\u2020\u2021\u00b6\u2663\u2662\u2661\u2660".split("")],
    cmsz10: ["\u2201\u2204\u2220\u2221\u2222\u221f\u2234\u2235\u2260\u2262\u2245\u226e\u226f\u2270\u2271\u2209".split(""), ["\u2241", "\u2249", "\u2244", "\u2247", "\u220c", "\u2284", "\u2285", "\u2288", "\u2289", "\u00a1", "\u00bf", "\u22ef", "\u22ee", "\u22f0", "\u22f1", null], "\u22b2\u22b3\u228f\u2290\u2226\u21a9\u21aa\u21ab\u21ac\u21a2\u21a3\u21b0\u21b1\u21b2\u21b3\u21da".split(""), "\u21db\u21b6\u21b7\u21ba\u21bb\u22b8\u21ad\u21dc\u21dd\u219c\u219d\u219e\u21a0\u219a\u219b\u21ae".split(""), ["\u21cd", "\u21cf", "\u21ce", "\u21e0", "\u21e2", "\u21a4", "\u21a6", "\u296a", "\u296c", "\u21cb", "\u21cc", "\u21c6", "\u21c4", "\u21c7", "\u21c9", null], ["\u21bf", "\u21be", "\u21c3", "\u21c2", "\u296e", "\u296f", "\u21c8", "\u21ca", "\u21c5", "\u21f5", "\u2921", "\u2922", "\u2206", null, null, null], ["\u21bc", "\u21bd", "\u21c0", "\u21c1", null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]]
};
org.imatheq.formulaeditor.MathCanvas.specialSymbols = {
    "\u2146": ["d"]
};
org.imatheq.formulaeditor.MathCanvas.fillSymbolPositions = function() {
    org.imatheq.formulaeditor.MathCanvas.symbolPositions || (org.imatheq.formulaeditor.MathCanvas.symbolPositions = {});
    var a = org.imatheq.formulaeditor.MathCanvas.symbolPositions;
    var b = org.imatheq.formulaeditor.MathCanvas.symbolsInFont;
    for (var d in b)
        for (var g = b[d], k = 0; k < g.length; k++)
            for (var e = 0; e < g[k].length; e++) {
                var h = g[k][e];
                null !== h && void 0 !== h && (h in a ? alert('duplicate entry for "' + h + '"\n' + a[h].font + ": (" + a[h].row + ", " + a[h].col + ")\n" + d + ": (" + k + ", " + e + ")\n") : a[h] = {
                    font: d,
                    row: k,
                    col: e
                })
            }
}
;
org.imatheq.formulaeditor.MathCanvas.fillSymbolPositions()
}
)();
(function() {
org.imatheq.formulaeditor.MathCanvas.fontsByPosition = {}
}
)();
(function() {
var f = [], a, b = null, d = com.efmase.js.utilities.toolset;
org.imatheq.formulaeditor.FormulaEditor = $extend(Object, {
    system: "java",
    container: null,
    textarea: null,
    inMathml: null,
    canvas: null,
    keyboard: null,
    textbox: null,
    textboxHeight: 0,
    textboxSel: !1,
    presentation: null,
    selection: null,
    actions: null,
    cursor: null,
    palette: null,
    gifunc: {},
    showPalette: !0,
    testplayermode: !1,
    lst: "0",
    swNenuOn: !1,
    mouseIsDown: !1,
    onCursorBar: !1,
    onStartBar: !1,
    onEndBar: !1,
    isDragging: !1,
    pressTimer: null,
    initPosition: null,
    width: null,
    height: null,
    lang: null,
    isMobile: !1,
    pasteCache: null,
    pasteEvtSupport: !1,
    ctrlPressed: !1,
    cmdPressed: !1,
    initializing: !0,
    redrawing: !0,
    onComposition: !1,
    parrayLine: "PARRAY_LINE_SOLID",
    keyboardNavi: 0,
    keyboardNaviSW: 0,
    menuItems: null,
    curMenuItem: 0,
    paletteTabs: null,
    paletteBtns: null,
    curPaletteBtn: null,
    btnBarBtns: null,
    curBtnBarBtn: null,
    smallWinItems: null,
    symbolindex: null,
    altstrs: null,
    in_attrbs: "",
    kdata: null,
    focused: !1,
    clickState: 0,
    rp_count: 0,
    callbacks: [],
    hasFocus: function() {
        return this.isMobile ? this.focused : "efmase_focus_textarea" === document.activeElement.className
    },
    getAltText: function() {
        var e = this.lang
          , h = "";
        if ("zh-cn" == e)
            return h;
        try {
            h = this.presentation.getAltText(e).trim()
        } catch (l) {
            h = "Error retrieving accessible text"
        }
        return h
    },
    getSymbolAltText: function(e) {
        if (null !== this.altstrs[e] && void 0 !== this.altstrs[e])
            var h = this.altstrs[e];
        else
            null !== this.symbolindex[e] && void 0 !== this.symbolindex[e] ? (h = null !== this.pData.EN_TITLES && void 0 !== this.pData.EN_TITLES ? this.pData.EN_TITLES[this.symbolindex[e]] : this.pData.TITLES[this.symbolindex[e]],
            null !== h && void 0 != h ? (h = h.toLowerCase(),
            h = h.replace("sign", ""),
            h = h.replace("with over script", "").replace("with under script", "").replace("with Under and Over Script", "")) : h = e) : h = void 0 !== org.imatheq.formulaeditor.parsing.expression.RevList[e] ? org.imatheq.formulaeditor.parsing.expression.RevList[e].key : e;
        return " " + h.trim()
    },
    isBold: function() {
        var e = document.getElementById("efmase_menubar_item_bold");
        return this.checkClass(e.className, "efmase_palettebutton_down")
    },
    isForcedItalic: function() {
        var e = document.getElementById("efmase_menubar_item_italic");
        return this.checkClass(e.className, "efmase_palettebutton_down")
    },
    isAutoItalic: function() {
        var e = document.getElementById("efmase_menubar_item_autoitalic");
        return this.checkClass(e.className, "efmase_palettebutton_down")
    },
    isMtext: function() {
        var e = document.getElementById("efmase_menubar_item_mtext");
        return this.checkClass(e.className, "efmase_palettebutton_down")
    },
    getMathColor: function() {
        return document.getElementById("efmase_menubar_item_mathcolor").getAttribute("mathcolor")
    },
    getHeadlist: function() {
        ed = this;
        "ime_js_dat_headlist"in window && "undefined" !== typeof ime_js_dat_headlist ? ed.getData() : this.loadjs("en", "headlist.js", function() {
            ed.pdata.tstr2 = (new Date).getTime();
            ed.getSymbollist()
        })
    },
    getPArrayLine: function() {
        var e = document.getElementById("PARRAY_LINE_SOLID");
        return this.checkClass(e.className, "efmase_palettebutton_select") ? "solid" : "dashed"
    },
    setPArrayLine: function(e) {
        var h = document.getElementById("PARRAY_LINE_SOLID")
          , l = document.getElementById("PARRAY_LINE_DASHED");
        "solid" == e ? (h.classList.add("efmase_palettebutton_select"),
        l.classList.remove("efmase_palettebutton_select")) : (h.classList.remove("efmase_palettebutton_select"),
        l.classList.add("efmase_palettebutton_select"));
        this.parrayLine = "PARRAY_LINE_" + e.toUpperCase()
    },
    addPalette: function(e, h) {
        a ||= [];
        this.palette = new org.imatheq.formulaeditor.Palette;
        a.push(this.palette);
        this.palette.initialize(this.container, e, h)
    },
    setKeyboardStatus: function() {
        this.isMobile && (this.selection.hasSelection ? (d.setObjsAttrb("KEYBOARD_CUT", "class", "efmase_palettebtn_disabled", "remove"),
        d.setObjsAttrb("KEYBOARD_COPY", "class", "efmase_palettebtn_disabled", "remove")) : (d.setObjsAttrb("KEYBOARD_CUT", "class", "efmase_palettebtn_disabled"),
        d.setObjsAttrb("KEYBOARD_COPY", "class", "efmase_palettebtn_disabled")))
    },
    setButtonStatus: function(e) {
        if (null !== e && void 0 !== e)
            for (var h in e)
                switch (h) {
                case "bold":
                    e[h] ? d.setObjsAttrb("efmase_menubar_item_bold", "class", "efmase_palettebutton_down") : d.setObjsAttrb("efmase_menubar_item_bold", "class", "efmase_palettebutton_down", "remove");
                    break;
                case "forcedItalic":
                    e[h] ? d.setObjsAttrb("efmase_menubar_item_italic", "class", "efmase_palettebutton_down") : d.setObjsAttrb("efmase_menubar_item_italic", "class", "efmase_palettebutton_down", "remove");
                    break;
                case "autoItalic":
                    e[h] ? d.setObjsAttrb("efmase_menubar_item_autoitalic", "class", "efmase_palettebutton_down") : d.setObjsAttrb("efmase_menubar_item_autoitalic", "class", "efmase_palettebutton_down", "remove");
                    break;
                case "mathcolor":
                    var l = document.getElementById("efmase_menubar_item_mathcolor");
                    l.setAttribute("mathcolor", e[h]);
                    l.firstChild.style.borderBottom = "4px solid " + e[h];
                    break;
                case "mtext":
                    e[h] ? d.setObjsAttrb("efmase_menubar_item_mtext", "class", "efmase_palettebutton_down") : d.setObjsAttrb("efmase_menubar_item_mtext", "class", "efmase_palettebutton_down", "remove")
                }
        0 == this.actions.redoIndex ? d.setObjsAttrb("efmase_menubar_item_undo", "class", "efmase_palettebtn_disabled") : d.setObjsAttrb("efmase_menubar_item_undo", "class", "efmase_palettebtn_disabled", "remove");
        this.actions.redoIndex == this.actions.actions.length ? d.setObjsAttrb("efmase_menubar_item_redo", "class", "efmase_palettebtn_disabled") : d.setObjsAttrb("efmase_menubar_item_redo", "class", "efmase_palettebtn_disabled", "remove")
    },
    getButtonStatus: function() {
        return {
            bold: this.isBold(),
            forcedItalic: this.isForcedItalic(),
            autoItalic: this.isAutoItalic(),
            mathcolor: this.getMathColor(),
            mtext: this.isMtext(),
            parrayLine: this.getPArrayLine()
        }
    },
    getBracketedObject: function() {
        var e = org.imatheq.formulaeditor.presentation
          , h = null;
        this.selection.hasSelection && this.selection.getSelectionObject()instanceof e.Bracketed && (h = this.selection.getSelectionObject());
        if (null === h) {
            for (var l = this.cursor.position.row.getAncestors(this.cursor.position.index), m = 0; m < l.length && !(l[m]instanceof e.Bracketed); )
                m++;
            m == l.length ? console.log("updateBracket: error cannot find Bracketed parent.") : h = l[m]
        }
        return h
    },
    checkClass: function(e, h) {
        e = e.split(" ");
        var l;
        for (l = 0; l < e.length; l++)
            if (e[l] == h)
                return !0;
        return !1
    },
    sub: function(e) {
        for (var h = [], l = 0, m = 0; m < e.length; m++) {
            var n = e.charCodeAt(m);
            128 > n ? h[l++] = n : (2048 > n ? h[l++] = n >> 6 | 192 : (55296 == (n & 64512) && m + 1 < e.length && 56320 == (e.charCodeAt(m + 1) & 64512) ? (n = 65536 + ((n & 1023) << 10) + (e.charCodeAt(++m) & 1023),
            h[l++] = n >> 18 | 240,
            h[l++] = n >> 12 & 63 | 128) : h[l++] = n >> 12 | 224,
            h[l++] = n >> 6 & 63 | 128),
            h[l++] = n & 63 | 128)
        }
        return h
    },
    ubs: function(e) {
        for (var h = [], l = 0, m = 0; l < e.length; ) {
            var n = e[l++];
            if (128 > n)
                h[m++] = String.fromCharCode(n);
            else if (191 < n && 224 > n) {
                var p = e[l++];
                h[m++] = String.fromCharCode((n & 31) << 6 | p & 63)
            } else if (239 < n && 365 > n) {
                p = e[l++];
                var q = e[l++]
                  , t = e[l++];
                n = ((n & 7) << 18 | (p & 63) << 12 | (q & 63) << 6 | t & 63) - 65536;
                h[m++] = String.fromCharCode(55296 + (n >> 10));
                h[m++] = String.fromCharCode(56320 + (n & 1023))
            } else
                p = e[l++],
                q = e[l++],
                h[m++] = String.fromCharCode((n & 15) << 12 | (p & 63) << 6 | q & 63)
        }
        return h.join("")
    },
    togglePalette: function() {
        this.palette ? org.imatheq.formulaeditor.Palette.removePalette(this.palette) : this.addPalette()
    },
    initialize: function(e, h, l, m, n, p, q, t, r, u, z, B, C) {
        var E, A = null;
        this.lskey = l;
        if (null === m || void 0 === m)
            m = "en";
        this.lang = m.toLowerCase();
        this.initializing = !0;
        null !== n && void 0 !== n && (this.width = n);
        null !== p && void 0 !== p && (this.height = p);
        null !== u && void 0 !== u && $setOptions("org.imatheq.formulaeditor.options", {
            defAutoItalic: u
        });
        null !== z && void 0 !== z && $setOptions("org.imatheq.formulaeditor.options", {
            defSymmetric: z
        });
        null !== B && void 0 !== B && $setOptions("org.imatheq.formulaeditor.options", {
            stretchMOBrackets: B
        });
        null !== C && void 0 !== C && $setOptions("org.imatheq.formulaeditor.options", {
            hideFontTools: C
        });
        if (e) {
            var w = this;
            this.container = e;
            this.inMathml = "div" == e.localName ? e.innerHTML : e.value;
            e.innerHTML = "";
            l = org.imatheq.formulaeditor.Cursor;
            n = org.imatheq.formulaeditor.Selection;
            p = org.imatheq.formulaeditor.Actions;
            u = org.imatheq.formulaeditor.MathCanvas;
            this.isMobile = d.isMobile();
            for (z = 0; z < f.length; z++)
                if (f[z].container == e)
                    return f[z];
            if (h)
                this.container = e,
                this.canvas = new u(this,h),
                this.canvas.bgCanvas = A;
            else {
                this.isMobile ? (h = this.createHiDPICanvas(10, 10),
                A = this.createHiDPICanvas(10, 10)) : (h = document.createElement("canvas"),
                A = document.createElement("canvas"));
                this.isMobile || (this.textbox = document.createElement("textarea"),
                this.textbox.btnGrp = "textarea",
                this.textbox.autocapitalize = "off",
                this.textbox.autocomplete = "off",
                this.textbox.autocorrect = "off",
                this.textbox.spellcheck = !1,
                this.textbox.className = "efmase_focus_textarea",
                this.textbox.innerHTML = "$",
                this.textbox.value = "$");
                this.container = e;
                this.canvas = new u(this,h);
                this.canvas.bgCanvas = A;
                h.mozImageSmoothingEnabled = !1;
                h.webkitImageSmoothingEnabled = !1;
                h.msImageSmoothingEnabled = !1;
                h.imageSmoothingEnabled = !1;
                A.mozImageSmoothingEnabled = !1;
                A.webkitImageSmoothingEnabled = !1;
                A.msImageSmoothingEnabled = !1;
                A.imageSmoothingEnabled = !1;
                u = new org.imatheq.formulaeditor.Options;
                z = u.getOption("defaultFontNameIdx");
                z = null === q || void 0 === q || -1 == this.canvas.fontNames.indexOf(q) ? z : this.canvas.fontNames.indexOf(q);
                this.canvas.fontFamilyNameIdx = z;
                q = u.getOption("defaultFontSizeIdx");
                d.isMobile() ? (null === r || void 0 === r || isNaN(r) || -1 != this.canvas.getFontSizeFromPX(r) || alert("Mobile Fontsize (" + r + ") must be a value in [8, 9, 10, 11, 12, 15, 18, 24, 30, 36, 48, 60, 72, 96]."),
                q = null === r || void 0 === r || isNaN(r) || -1 == this.canvas.getFontSizeFromPX(r) ? q : this.canvas.getFontSizeFromPX(r)) : (null === t || void 0 === t || isNaN(t) || -1 != this.canvas.getFontSizeFromPX(t) || alert("Fontsize (" + t + ") must be a value in [8, 9, 10, 11, 12, 15, 18, 24, 30, 36, 48, 60, 72, 96]."),
                q = null === t || void 0 === t || isNaN(t) || -1 == this.canvas.getFontSizeFromPX(t) ? q : this.canvas.getFontSizeFromPX(t));
                this.canvas.setFontSizeIdx(q);
                if (!org.imatheq.formulaeditor.options.ignoreTextareaStyle)
                    for (E in e.style)
                        try {
                            h.style[E] = e.style[E]
                        } catch (v) {}
                h.className = "imatheqformula";
                null !== e.getAttribute("style") && void 0 !== e.getAttribute("style") && void 0 !== e.getAttribute("style").value ? h.setAttribute("style", e.getAttribute("style")) : org.imatheq.formulaeditor.options.inputStyle ? h.setAttribute("style", org.imatheq.formulaeditor.options.inputStyle) : (h.className = "fore_canvas",
                A.className = "bg_canvas");
                "div" == e.localName && this.checkClass(e.className, "imatheqvisibletextarea") ? (e.parentNode.insertBefore(h, e.nextSibling),
                t = document.createElement("div"),
                t.className = "EFMASE_Container",
                e.parentNode.replaceChild(t, h),
                t.appendChild(h),
                h.parentNode.insertBefore(A, h),
                this.isMobile || t.parentNode.insertBefore(this.textbox, t.nextSibling),
                w = this,
                w.isMobile || d.addEventListener(this.textbox, "input", function() {
                    return function(v) {
                        if (!w.isMobile && w.onComposition)
                            return !0;
                        if ("" == this.value || "$" == this.value)
                            return !1;
                        v = this.value;
                        this.value = "";
                        this.innerHTML = this.value = "$";
                        1 < v.length && "$" == v[0] && (v = v.slice(1));
                        if (w.hasFocus())
                            for (var y = 0; y < v.length; y++)
                                w.isMobile || "a" <= this.value && "z" >= this.value || "0" <= this.value && "9" >= this.value || (this.value = "",
                                result = w.cursor.position.row.charInput(v[y], w)),
                                w.isMobile && (result = w.cursor.position.row.charInput(v[y], w));
                        return !1
                    }
                }()),
                w.isMobile || d.addEventListener(this.textbox, "focus", function() {
                    return function(v) {
                        w.keyboardNavi = 4;
                        w.clearKBNavi();
                        w.setKBNavi(v)
                    }
                }()),
                w.isMobile || d.addEventListener(this.textbox, "copy", function() {
                    return function(v) {
                        w.onCutCopy(v, "copy")
                    }
                }()),
                w.isMobile || d.addEventListener(this.textbox, "compositionstart", function() {
                    return function(v) {
                        w.onComposition = !0
                    }
                }()),
                w.isMobile || d.addEventListener(this.textbox, "compositionend", function() {
                    return function(v) {
                        if ("" == this.value || "$" == this.value)
                            return !1;
                        v = this.value;
                        this.value = "";
                        1 < v.length && "$" == v[0] ? v = v.slice(1) : 1 < v.length && "$" == v[v.length - 1] && (v = v.slice(0, v.length - 1));
                        if (w.hasFocus())
                            for (var y = 0; y < v.length; y++)
                                w.isMobile || "a" <= this.value && "z" >= this.value || "0" <= this.value && "9" >= this.value || (this.value = "",
                                result = w.cursor.position.row.charInput(v[y], w)),
                                w.isMobile && (result = w.cursor.position.row.charInput(v[y], w));
                        return w.onComposition = !1
                    }
                }()),
                w.isMobile || d.addEventListener(this.textbox, "compositionupdate", function() {
                    return function(v) {}
                }()),
                w.isMobile || d.addEventListener(this.textbox, "cut", function() {
                    return function(v) {
                        w.onCutCopy(v, "cut")
                    }
                }()),
                w.isMobile || d.addEventListener(this.textbox, "paste", function() {
                    return function(v) {
                        w.onpaste(v);
                        v.preventDefault()
                    }
                }()),
                !w.isMobile && d.isFirefox() && d.addEventListener(this.textbox, "select", function() {
                    return function(v) {
                        w.onselectstart(v);
                        v.preventDefault()
                    }
                }()),
                this.resizeWindow(),
                this.resizeCanvas(this.getPresentationContext()),
                d.addEventListener(t, "scroll", function() {
                    return function(v) {
                        v = org.imatheq.formulaeditor.FormulaEditor.getFirstEditor();
                        v.cursor && (v.cursor.autoScroll = !1);
                        return !1
                    }
                }())) : e.parentNode.insertBefore(h, e)
            }
            pasteCache = document.createElement("div");
            pasteCache.setAttribute("id", "efmase_paste_cache");
            pasteCache.setAttribute("contenteditable", "");
            pasteCache.style.cssText = "opacity:0;position:fixed;top:0px;left:0px;width:10px;margin-left:-20px;";
            document.body.appendChild(pasteCache);
            this.pasteCache = pasteCache;
            h = new MutationObserver(function(v) {
                var y = "";
                v.forEach(function(D) {
                    if (!0 === w.pasteEvtSupport || 0 == w.ctrlPressed || "childList" != D.type)
                        return !0;
                    1 == D.addedNodes.length && (y += D.addedNodes[0].textContent)
                });
                "" != y && (y = w.pasteCache.innerText,
                w.focus(),
                w.doonpaste(y, !1),
                setTimeout(function() {
                    w.pasteCache.innerHTML = ""
                }, 20))
            }
            );
            A = document.getElementById("efmase_paste_cache");
            h.observe(A, {
                attributes: !0,
                childList: !0,
                characterData: !0
            });
            this.gifunc.gi0 = function() {
                return w.gi0()
            }
            ;
            h = document.createElement("div");
            h.setAttribute("id", "com_imatheq_loading_msg");
            h.innerHTML = "Loading, please wait...";
            document.body.appendChild(h);
            this.checkClass(e.className, "imatheqpalette") ? this.showPalette = this.showPalette && !0 : this.checkClass(e.className, "imatheqnopalette") ? this.showPalette = this.showPalette && !1 : this.showPalette = "all" == org.imatheq.formulaeditor.options.paletteShow ? this.showPalette && !0 : "none" == org.imatheq.formulaeditor.options.paletteShow ? this.showPalette && !1 : this.showPalette && !a;
            this.showPalette = this.showPalette && (this.checkClass(e.className, "imatheqpalette") || !this.checkClass(e.className, "imatheqnopalette") && !a);
            this.checkClass(e.className, "imatheqvisibletextarea") || (e.style.display = "none");
            this.checkClass(e.className, "testplayermode") && (this.testplayermode = !0);
            this.load();
            this.selection = new n(this);
            this.actions = new p(this);
            this.cursor = new l(this,this.presentation.getFollowingCursorPosition(this.getPresentationContext()));
            this.showPalette && this.addPalette(this, m);
            this.pdata = {
                tstr0: (new Date).getTime()
            };
            this.gifunc.gi25536 = function() {
                return w.gi25536()
            }
            ;
            this.getpdata();
            f.push(this)
        }
    },
    drawEditor: function(e) {
        this.palette.draw();
        this.palette.initPanels();
        this.redraw(!1)
    },
    PIXEL_RATIO: function() {
        var e = document.createElement("canvas").getContext("2d");
        return (window.devicePixelRatio || 1) / (e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1)
    }(),
    createHiDPICanvas: function(e, h, l) {
        l || (l = this.PIXEL_RATIO);
        var m = document.createElement("canvas");
        m.width = e * l;
        m.height = h * l;
        m.style.width = e + "px";
        m.style.height = h + "px";
        m.getContext("2d").setTransform(l, 0, 0, l, 0, 0);
        return m
    },
    setHiDPICanvasDims: function(e, h, l, m) {
        m || (m = this.PIXEL_RATIO);
        e.width = h * m;
        e.height = l * m;
        e.style.width = h + "px";
        e.style.height = l + "px";
        e.getContext("2d").setTransform(m, 0, 0, m, 0, 0)
    },
    getSymbollist: function() {
        ed = this;
        this.loadjs("en", "symbollist.js", function() {
            ed.pdata.tstr3 = (new Date).getTime();
            ed.getMenusymbol()
        })
    },
    load: function() {
        var e = org.imatheq.formulaeditor.presentation
          , h = org.imatheq.formulaeditor.parsing.mathml.MathMLParser
          , l = org.imatheq.formulaeditor.presentation.Editor
          , m = org.imatheq.formulaeditor.presentation.Row;
        try {
            var n = (new h).parseString(this.inMathml);
            if (org.imatheq.formulaeditor.options.useBar) {
                var p = this.palette ? !0 : !1;
                this.presentation = new l(n.getPresentation(this.getPresentationContext()),p)
            } else {
                var q = new m(n)
                  , t = new e.Lines(q);
                this.presentation = new e.Row(t);
                this.presentation.flatten()
            }
        } catch (r) {
            org.imatheq.formulaeditor.options.useBar ? (p = this.palette ? !0 : !1,
            this.presentation = new l(null,p)) : (t = new e.Lines(new e.Row(new e.BlockSymbol)),
            e = [],
            e.push(t),
            m = new m,
            m.initialize.apply(m, e),
            this.presentation = m)
        }
    },
    loadMathML: function(e) {
        org.imatheq.formulaeditor.FormulaEditor.addDebug("loading MathML");
        var h = org.imatheq.formulaeditor.presentation.Row;
        e = (new org.imatheq.formulaeditor.parsing.mathml.MathMLParser).parse(e, this.getPresentationContext());
        org.imatheq.formulaeditor.FormulaEditor.addDebug("parsed: " + e);
        this.presentation = new h(e);
        this.presentation.flatten()
    },
    insertLiteral: function(e, h) {
        e = document.createTextNode(e);
        h.appendChild(e);
        return e
    },
    save: function() {
        return {
            success: "".success,
            errorString: "".errorString
        }
    },
    redraw: function(e) {
        editor = this;
        this.redrawing = !0;
        this.cursor.hideCursor();
        var h = {};
        e = [];
        this.presentation.getFontSizeData(this, {}, h);
        for (var l in h)
            if (h.hasOwnProperty(l))
                for (var m in h[l])
                    e.push(l + "_" + m);
        0 !== Object.keys(h).length && JSON.stringify(h) !== JSON.stringify({}) ? (l = window.location.href.split("/"),
        m = $buuuuu(),
        h = m.substring(0, m.indexOf("/")) + "//www.imatheq.com/imatheq?token=12346",
        "java" == this.system && (h = m + "imatheq?token=12346"),
        "net" == this.system && (h = m + "com/imatheq/default.aspx?token=12346"),
        com.efmase.js.utilities.XMLHttp.call({
            url: h,
            type: "post",
            dataType: "json",
            data: {
                action: "fondataj",
                lang: this.lang,
                dm: l[2].replace(":", "_"),
                lsk: this.lskey,
                fsgroups: e.toString()
            },
            mimeType: "application/json",
            success: function(n) {
                n = JSON.parse(editor.fetchData(n.d));
                for (var p in n)
                    if (n.hasOwnProperty(p)) {
                        if ("error" == p) {
                            alert(n[p]);
                            return
                        }
                        var q = p.substring(p.lastIndexOf("_") + 1);
                        org.imatheq.formulaeditor.MathCanvas.addFont(q, n[p])
                    }
                editor.redraw_func()
            },
            error: function(n, p, q) {
                "" == n.responseText ? alert("error in server call, status: " + p + ", error: " + q) : alert("error: status: " + p + ", error: " + q)
            }
        })) : this.redraw_func()
    },
    redraw_func: function() {
        bb = function() {
            for (var h = document.getElementsByTagName("script"), l = RegExp("(.*)com/imatheq/scripts/imatheqfunctions.js"), m = 0; m < h.length; m++) {
                var n = h[m].src.match(l);
                if (null !== n)
                    return h = RegExp("192.168.86.250"),
                    l = new RegExp(document.location.hostname),
                    n[1].match(RegExp("www.imatheq.com")) || n[1].match(h) || n[1].match(l) ? !0 : !1
            }
        }
        ;
        if (bb()) {
            this.canvas.clear();
            var e = this.selection.hasSelection;
            this.draw(e);
            e && this.selection.redraw();
            this.hasFocus() && !e && this.cursor.showCursor();
            this.initializing = this.redrawing = !1
        }
    },
    setScroll: function(e) {
        var h = {}
          , l = this.canvas.canvas.parentNode
          , m = this.getScrollBarWidth();
        null !== e && void 0 !== e || this.cursor.getDimensions(h);
        h = Math.round((parseInt(l.style.width) - m) / 2);
        var n = Math.round((parseInt(l.style.height) - m) / 2);
        if (e.x - l.scrollLeft > parseInt(l.style.width) - m - 8 || 20 > e.x - l.scrollLeft)
            l.scrollLeft = e.x > h ? e.x - h : 0;
        if (e.bottom - l.scrollTop > parseInt(l.style.height) - m - 8 || 8 > e.top - l.scrollTop)
            l.scrollTop = e.top > n ? e.top - n : 0
    },
    registerCallback: function(e) {
        this.callbacks.push(e)
    },
    draw: function(e) {
        var h = {};
        if (org.imatheq.formulaeditor.options.useBar)
            var l = this.presentation.draw(this.canvas, h, 0, 0, !0);
        else
            l = this.presentation.draw(this.canvas, h, 0, 0, !0),
            l = {
                top: l.top - 8,
                left: l.left - 20,
                width: l.width + 28,
                height: l.height + 8
            };
        this.canvas.clear();
        null !== e && void 0 !== e && e || this.selection.clear();
        this.resizeCanvas(this.getPresentationContext(), l);
        this.presentation.draw(this.canvas, h, -l.left, -l.top);
        for (e = 0; e < this.callbacks.length; e++)
            this.callbacks[e]()
    },
    getMenusymbol: function() {
        ed = this;
        this.loadjs(this.lang.toLowerCase(), "menusymbol.js", function() {
            ed.pdata.tstr4 = (new Date).getTime();
            ed.getAltstrs()
        })
    },
    gi25536: function() {
        try {
            var e = this.canvas.canvas;
            e.toDataURL("image/png");
            var h = document.getElementById("com_imatheq_loading_msg");
            h.innerHTML = "Generating image, please wait...";
            h.style.display = "";
            this.canvas.readonly = !0;
            this.redraw();
            var l = document.createElement("canvas")
              , m = 2 * this.presentation.dimensions.width
              , n = 2 * this.presentation.dimensions.height;
            l.setAttribute("width", m / 2 + 20);
            l.setAttribute("height", n / 2 + 8);
            l.getContext("2d").drawImage(e, 40, 16, m + 4, n + 4, 2, 2, (m + 4) / 2, (n + 4) / 2);
            var p = l.toDataURL("image/png");
            this.canvas.readonly = !1;
            this.redraw();
            h.innerHTML = "Loading, please wait...";
            h.style.display = "none"
        } catch (q) {}
        return p
    },
    getPosition: function(e) {
        for (var h = this.presentation, l = e[0], m = e.length - 1; 0 < m; m--)
            h = h.children[e[m]];
        return {
            row: h,
            index: l
        }
    },
    onBackspace: function() {
        if (this.selection.hasSelection)
            this.selection.remove();
        else {
            var e = this.cursor.position;
            0 < e.index ? (e.row.updateKeyword(this, e.index),
            e.row.updateKeyword(this, e.index - 1),
            e.row.backDelete(this)) : null !== e.row.parent && void 0 !== e.row.parent && e.row.parent instanceof org.imatheq.formulaeditor.presentation.Lines && 0 < e.row.index && this.presentation.children[0].deleteNewline(this, e.row.index - 1)
        }
    },
    onkeydown: function(e) {
        17 != e.keyCode && !e.metaKey && !e.ctrlKey || this.ctrlPressed || (this.ctrlPressed = !0);
        if (null !== this.palette.activePanel)
            return this.palette.activePanel.onkeydown(e);
        if (9 == e.keyCode || 37 <= e.keyCode && 40 >= e.keyCode) {
            var h = document.activeElement
              , l = h ? h.className : "";
            if (!this.checkClass(l, "efmase_palettebutton") && !this.checkClass(l, "efmase_focus_textarea")) {
                this.keyboardNavi = -1;
                return
            }
            switch (h.btnGrp) {
            case "menu":
                this.keyboardNavi = 1;
                break;
            case "palette_tab":
                this.keyboardNavi = 2;
                break;
            case "palette":
                this.keyboardNavi = 3;
                break;
            case "textarea":
                this.keyboardNavi = 4;
                break;
            default:
                alert("Error in editor.onkeydown: Wrong button group.")
            }
        }
        if (9 == e.keyCode && 1 <= this.keyboardNavi && 4 >= this.keyboardNavi) {
            this.clearKBNavi();
            h = this.getCurPalGrpId();
            e.shiftKey ? (--this.keyboardNavi,
            3 == this.keyboardNavi && -1 == h && --this.keyboardNavi) : (this.keyboardNavi = ++this.keyboardNavi,
            3 == this.keyboardNavi && -1 == h && ++this.keyboardNavi);
            if (1 > this.keyboardNavi || 4 < this.keyboardNavi)
                return;
            this.palette.isSmallWin() && 2 == this.keyboardNavi && (e.shiftKey ? --this.keyboardNavi : ++this.keyboardNavi);
            this.hasFocus() && 4 != this.keyboardNavi && (this.blur(),
            this.cursor.hideCursor());
            this.setKBNavi(e);
            return !1
        }
        if (this.hasFocus()) {
            if (this.ctrlPressed && !e.altKey)
                switch (e.keyCode) {
                case 67:
                case 88:
                    return !0;
                case 86:
                    if (void 0 != document.activeElement && "text" == document.activeElement.type)
                        return !1;
                    1 == this.ctrlPressed && null != this.pasteCache && this.pasteCache.focus();
                    return !0;
                case 90:
                    return this.actions.undo(),
                    !1;
                case 89:
                    return this.actions.redo(),
                    !1;
                case 65:
                    return this.selection.selectAll(),
                    !1;
                case 107:
                    return this.changeFontsize(1),
                    !1;
                case 109:
                    return this.changeFontsize(-1),
                    !1
                }
            switch (e.keyCode) {
            case 116:
                return e = org.imatheq.formulaeditor.Cursor,
                h = this.save(),
                h.success ? (this.load(),
                this.cursor = new e(this,this.presentation.getFollowingCursorPosition(this.getPresentationContext())),
                this.focus(),
                this.redraw()) : alert("The formula could not be interpreted correctly. The error message was:\n" + h.errorString),
                !1;
            case 8:
                return this.onBackspace();
            case 46:
                return this.selection.hasSelection ? this.selection.remove() : (e = this.cursor.position,
                e.index < e.row.children.length && !(e.row.children[e.index]instanceof org.imatheq.formulaeditor.presentation.NewlineSymbol) ? (e.row.updateKeyword(this, e.index + 1),
                e.row.updateKeyword(this, e.index),
                e.row.foreDelete(this)) : null !== e.row.parent && void 0 !== e.row.parent && e.row.children[e.index]instanceof org.imatheq.formulaeditor.presentation.NewlineSymbol && e.row.index < e.row.parent.children.length - 1 && this.presentation.children[0].deleteNewline(this, e.row.index)),
                !1
            }
            return this.cursor.onkeydown(e)
        }
        if (37 <= e.keyCode && 40 >= e.keyCode && 1 <= this.keyboardNavi && 3 >= this.keyboardNavi)
            switch (e.keyCode) {
            case 37:
                return this.kbNaviMove("left"),
                !1;
            case 38:
                return this.kbNaviMove("up"),
                !1;
            case 39:
                return this.kbNaviMove("right"),
                !1;
            case 40:
                return this.kbNaviMove("down"),
                !1
            }
        if ((13 == e.charCode || 13 == e.keyCode) && 1 <= this.keyboardNavi && 3 >= this.keyboardNavi)
            this.onEnter(e)
    },
    kbNaviMove: function(e) {
        switch (this.keyboardNavi) {
        case 1:
            var h = this.curMenuItem
              , l = this.menuItems[h]
              , m = document.getElementById("efmase_menubar_item_" + l);
            do
                "left" == e ? h-- : "right" == e && h++,
                l = this.menuItems[h],
                l = document.getElementById("efmase_menubar_item_" + l);
            while (0 <= h && h <= this.menuItems.length && null !== l && this.checkClass(l.className, "efmase_palettebtn_disabled"));
            0 <= h && h < this.menuItems.length && null !== l && !this.checkClass(l.className, "efmase_palettebtn_disabled") && (this.curMenuItem = h,
            m.style.removeProperty("border"),
            l.style.border = "2px solid #000000");
            break;
        case 2:
            m = h = this.paletteTabs.indexOf(this.palette.curtab);
            "left" == e && 0 < m ? m-- : "right" == e && m < this.paletteTabs.length - 1 && m++;
            if (m == h)
                break;
            this.palette.handleTabBtnOverClick(this.paletteTabs[m]);
            break;
        case 3:
            if (null !== this.curPaletteBtn) {
                var n = this.pData.PALETTE[this.curPaletteBtn.tab].GROUPS
                  , p = n[this.curPaletteBtn.group].ROWS
                  , q = p[this.curPaletteBtn.row].ITEMS;
                h = this.curPaletteBtn.tab;
                m = this.curPaletteBtn.group;
                l = this.curPaletteBtn.row;
                var t = this.curPaletteBtn.col;
                if ("left" == e || "right" == e) {
                    if (t += "left" == e ? -1 : 1,
                    0 > t || t >= q.length) {
                        m += "left" == e ? -1 : 1;
                        if (0 > m && 0 == l)
                            break;
                        m >= n.length ? (m = 0,
                        l++) : 0 > m && (m = n.length - 1,
                        l--);
                        p = n[m].ROWS;
                        for (t = document.getElementById(n[m].id); 0 <= m && m < n.length && (l >= p.length || "none" == t.style.display); ) {
                            m += "left" == e ? -1 : 1;
                            if ("left" == e && 0 > m || "right" == e && m >= n.length)
                                return;
                            p = n[m].ROWS;
                            t = document.getElementById(n[m].id)
                        }
                        if (0 > m || m >= n.length)
                            break;
                        q = p[l].ITEMS;
                        t = "left" == e ? q.length - 1 : 0
                    }
                } else {
                    l += "up" == e ? -1 : 1;
                    if (0 > l || l >= p.length)
                        break;
                    q = p[l].ITEMS;
                    if (t >= q.length)
                        break
                }
                e = q[t];
                n = e.id;
                "PALETTE_TAB_EDIT_BUTTONS" == this.palette.curtab && (n = this.palette.symbols[e.id].name);
                this.clearKBNavi();
                d.setObjsAttrb(n, "border", "2px solid #000000");
                this.curPaletteBtn = {
                    tab: h,
                    group: m,
                    row: l,
                    col: t
                }
            }
            break;
        case 5:
            if ("left" == e || "right" == e)
                h = document.getElementsByClassName("imatheq_save_buttons"),
                0 == h.length && (h = document.getElementsByTagName("input")),
                curBtn = this.curBtnBarBtn,
                curBtn += "left" == e ? -1 : 1,
                0 <= curBtn && curBtn < h.length && (h[this.curBtnBarBtn].blur(),
                h[curBtn].focus(),
                this.curBtnBarBtn = curBtn)
        }
    },
    onEnter: function(e) {
        switch (this.keyboardNavi) {
        case 1:
            var h = this.palette.isSmallWin() ? "Menu" : this.menuItems[this.curMenuItem]
              , l = document.getElementById("efmase_menubar_item_" + h);
            this.palette.isSmallWin() ? l.style.background = "#E8EAEB" : l.style.removeProperty("border");
            this.clearKBNavi();
            this.keyboardNavi = 4;
            this.curMenuItem = 0;
            this.palette.efmase_menugrp_click(h, e);
            this.hasFocus() || this.focus();
            this.selection.hasSelection || this.cursor.showCursor();
            org.imatheq.formulaeditor.FormulaEditor.stopEventPropagation(e);
            e.preventDefault();
            break;
        case 3:
            return h = this.pData.PALETTE[this.curPaletteBtn.tab].GROUPS[this.curPaletteBtn.group].ROWS[this.curPaletteBtn.row].ITEMS[this.curPaletteBtn.col],
            this.clearKBNavi(),
            this.keyboardNavi = 4,
            this.palette.handlePaletteBtnOverClick(h.id, e.pageX, e.pageY),
            org.imatheq.formulaeditor.FormulaEditor.stopEventPropagation(e),
            e.preventDefault(),
            !1
        }
    },
    setKBNavi: function(e) {
        switch (this.keyboardNavi) {
        case 1:
            if (this.palette.isSmallWin()) {
                var h = document.getElementById("efmase_menubar_item_Menu");
                h.style.border = "2px solid #000000"
            } else
                for (e = 0; e < this.menuItems.length; e++) {
                    var l = document.getElementById("efmase_menubar_item_" + this.menuItems[e]);
                    if (!this.checkClass(l.className, "efmase_palettebtn_disabled")) {
                        l.style.border = "2px solid #000000";
                        this.curMenuItem = e;
                        break
                    }
                }
            document.getElementsByName("efmase_menubar_item_logo")[0].focus();
            break;
        case 2:
            document.getElementsByName(this.palette.curtab)[0].focus();
            break;
        case 3:
            e = this.paletteTabs.indexOf(this.palette.curtab);
            var m = this.pData.PALETTE[e].GROUPS;
            l = this.getCurPalGrpId();
            if (-1 != l) {
                h = m[l].ROWS[0].ITEMS[0];
                m = h.id;
                "PALETTE_TAB_EDIT_BUTTONS" == this.palette.curtab && (m = this.palette.symbols[h.id].name);
                h = document.getElementsByName(m);
                for (var n = 0; null === h[n].offsetParent; )
                    n++;
                h = h[n];
                h.focus();
                d.setObjsAttrb(m, "border", "2px solid #000000");
                this.curPaletteBtn = {
                    tab: e,
                    group: l,
                    row: 0,
                    col: 0
                }
            }
            break;
        case 4:
            this.hasFocus() || this.focus();
            this.selection.hasSelection || this.cursor.showCursor();
            break;
        case 5:
            l = document.getElementsByClassName("imatheq_save_buttons"),
            0 == l.length && (l = document.getElementsByTagName("input")),
            0 < l.length && l[0].focus(),
            this.curBtnBarBtn = 0,
            org.imatheq.formulaeditor.FormulaEditor.stopEventPropagation(e),
            e.stopPropagation(),
            e.preventDefault(e)
        }
    },
    clearKBNavi: function() {
        switch (this.keyboardNavi) {
        case 1:
            this.palette.isSmallWin() ? document.getElementById("efmase_menubar_item_Menu").style.removeProperty("border") : document.getElementById("efmase_menubar_item_" + this.menuItems[this.curMenuItem]).style.removeProperty("border");
            this.curMenuItem = 0;
            break;
        case 3:
            if (null === this.curPaletteBtn)
                break;
            var e = this.pData.PALETTE[this.curPaletteBtn.tab].GROUPS[this.curPaletteBtn.group].ROWS[this.curPaletteBtn.row].ITEMS[this.curPaletteBtn.col]
              , h = e.id;
            "PALETTE_TAB_EDIT_BUTTONS" == this.palette.curtab && (h = this.palette.symbols[e.id].name);
            d.setObjsAttrb(h, "border", null, "remove");
            this.curPaletteBtn = null;
            break;
        case 5:
            e = document.getElementsByClassName("imatheq_save_buttons"),
            0 == e.length && (e = document.getElementsByTagName("input")),
            0 < e.length && e[0].focus(),
            null !== e[this.curBtnBarBtn] && void 0 != e[this.curBtnBarBtn] && e[this.curBtnBarBtn].blur(),
            this.curBtnBarBtn = 0
        }
    },
    getCurPalGrpId: function() {
        var e = this.paletteTabs.indexOf(this.palette.curtab);
        e = this.pData.PALETTE[e].GROUPS;
        var h = 0;
        if ("PALETTE_TAB_EDIT_BUTTONS" == this.palette.curtab) {
            for (var l = 0; l < e.length; l++)
                if (gDiv = document.getElementById(e[l].id),
                "none" != gDiv.style.display) {
                    h = l;
                    break
                }
            l >= e.length && (h = -1,
            this.curPaletteBtn = null)
        }
        return h
    },
    isSmallWinMenu: function() {
        return document.getElementById("efmase_menubar_item_Close") && "" == document.getElementById("efmase_menubar_item_Close").style.display
    },
    onkeyup: function(e) {
        if (0 == e.ctrlKey && 1 == this.ctrlPressed)
            this.ctrlPressed = !1;
        else if (0 == e.metaKey && 1 == this.cmdPressed)
            this.ctrlPressed = this.cmdPressed = !1;
        else if (editor.isMobile && 229 == e.keyCode && "efmase_focus_textarea" === e.target.className && "" == e.target.value) {
            if (this.selection.hasSelection)
                this.selection.remove();
            else {
                var h = this.cursor.position;
                0 < h.index ? (h.row.updateKeyword(this, h.index),
                h.row.updateKeyword(this, h.index - 1),
                h.row.backDelete(this)) : null !== h.row.parent && void 0 !== h.row.parent && h.row.parent instanceof org.imatheq.formulaeditor.presentation.Lines && 0 < h.row.index && this.presentation.children[0].deleteNewline(this, h.row.index - 1)
            }
            e.target.value = "$";
            e.target.innerHTML = "$";
            return !1
        }
    },
    dec: function(e, h) {
        h = this.b6de(h);
        e = this.sub(e);
        for (var l = [], m = 0; m < h.length; m++)
            l[m] = h[m - 1] ^ h[m] ^ e[m % e.length];
        l.splice(0, l.indexOf(0) + 1);
        return this.ubs(l)
    },
    oncontextmenu: function(e) {
        if (this.selection.hasSelection) {
            if (d.isIE() || d.isFirefox())
                this.textboxSel = !0;
            if (this.isMobile)
                return !1;
            this.textbox.select()
        }
        return !0
    },
    onselectstart: function(e) {
        if (this.textboxSel)
            return this.textboxSel = !1,
            !0;
        this.selection.selectAll()
    },
    changeFontsize: function(e) {
        e = this.canvas.getFontSizeIdx(e);
        for (i = 0; i < a.length; i++)
            a[i].execPalCmd(a[i].symbols["109"], "", e),
            a[i].editor.redraw();
        return !1
    },
    setFontSizeIdx: function(e) {
        for (var h = 0; h < f.length; h++)
            f[h].canvas && (f[h].canvas.setFontSizeIdx(e),
            f[h].canvas.clearBg(),
            f[h].redraw(!0));
        return !0
    },
    setFontFamilyNameIdx: function(e) {
        for (var h = 0; h < f.length; h++)
            f[h].canvas && (f[h].canvas.fontFamilyNameIdx = e,
            f[h].redraw());
        return !0
    },
    initPress: function(e) {
        if (this.isMobile && (this.pressTimer = null,
        null === this.pressTimer)) {
            var h = this;
            this.pressTimer = setTimeout(function() {
                h.cancelClicks();
                var l = h.mouseeventinfo(e);
                h.cursor.onmousedown(e, l.x, l.y);
                h.onpress(e);
                h.cancelPress();
                h.onEndBar = !0
            }, 500)
        }
    },
    getpdata: function(e) {
        var h = this;
        if (!e || window.navigator.onLine) {
            h = this;
            var l = window.location.href.split("/")[2].replace(":", "_")
              , m = $buuuuu()
              , n = m.substring(0, m.indexOf("/")) + "//www.imatheq.com/imatheq?token=12346";
            if ("java" == this.system || "ijava" == this.system)
                n = m + "imatheq?token=12346";
            if ("net" == this.system || "inet" == this.system)
                n = m + "com/imatheq/default.aspx?token=12346";
            com.efmase.js.utilities.XMLHttp.call({
                url: n,
                type: "post",
                dataType: "json",
                data: {
                    action: "pdata",
                    lang: this.lang,
                    dm: l,
                    lsk: this.lskey,
                    tstr: this.pdata.tstr0.toString(),
                    rp: null === e || void 0 === e ? "false" : "true"
                },
                mimeType: "application/json",
                success: function(p) {
                    void 0 !== p.error ? alert(p.error) : (h.lst = p.lstype,
                    h.pdata.epc = p.epc,
                    h.pdata.tstr1 = (new Date).getTime(),
                    null !== e && void 0 !== e && e || h.getHeadlist(h.lang))
                },
                error: function(p, q, t) {
                    e || ("" == p.responseText ? alert("error in server call, status: " + q + ", error: " + t) : alert("error: status: " + q + ", error: " + t))
                }
            })
        }
    },
    cancelPress: function() {
        null !== this.pressTimer && (clearTimeout(this.pressTimer),
        this.pressTimer = null)
    },
    mouseMoved: function(e, h) {
        var l = this.initPosition;
        return 4 < Math.sqrt((l.x - e) * (l.x - e) + (l.y - h) * (l.y - h))
    },
    onkeypress: function(e) {
        if (null !== this.palette.activePanel)
            return this.palette.activePanel.onkeypress(e);
        if (this.hasFocus()) {
            var h = !0;
            if (e.ctrlKey)
                switch (e.charCode) {
                case 43:
                    this.changeFontsize(1);
                    h = !1;
                    $;
                    break;
                case 45:
                    this.changeFontsize(-1),
                    h = !1
                }
            else if (13 == e.charCode || 13 == e.keyCode)
                return this.presentation.children[0].onNewline(this);
            h &&= this.selection.hasSelection ? this.selection.parent.onkeypress(e, this) : this.cursor.position.row.onkeypress(e, this);
            return h
        }
    },
    loadjs: function(e, h, l) {
        e = $buuuuu() + "com/imatheq/scripts/langs/" + e + "/" + h;
        h = document.createElement("script");
        h.setAttribute("type", "text/javascript");
        h.async = !0;
        h.onload = function() {
            return l()
        }
        ;
        h.setAttribute("src", e);
        document.getElementsByTagName("head")[0].appendChild(h)
    },
    mouseeventinfo: function(e) {
        var h = document.body.scrollTop + e.clientY
          , l = e.target || e.srcElement || e.relatedTarget;
        if ("efmase_focus_textarea" == l.className || "fore_canvas" == l.className) {
            h = e.clientX;
            l = e.clientY;
            var m = window.pageXOffset
              , n = window.pageYOffset;
            if (null === m || void 0 === m)
                n = document.documentElement,
                n && n.scrollLeft || (n = document.body),
                m = n.scrollLeft,
                n = n.scrollTop;
            e.imatheqnoadjust || (h += m,
            l += n);
            n = this.canvas.canvas;
            var p = m = 0
              , q = n.offsetWidth
              , t = n.offsetHeight;
            parent = n.parentNode;
            if ("EFMASE_Container" == parent.className) {
                var r = getComputedStyle(parent, "");
                parseInt(r.paddingLeft);
                parseInt(r.paddingTop);
                parseInt(r.paddingRight);
                parseInt(r.paddingBottom)
            }
            r = void 0 !== n.currentStyle && null !== n.currentStyle ? n.currentStyle : getComputedStyle(n, null);
            var u = parseInt(r.borderLeftWidth);
            var z = parseInt(r.paddingLeft);
            isFinite(z) && isFinite(u) ? m = z > u ? m + z : m + u : isFinite(z) ? m += z : isFinite(u) && (m += u);
            u = parseInt(r.borderTopWidth);
            z = parseInt(r.paddingTop);
            for (isFinite(z) && isFinite(u) ? p = z > u ? p + z : p + u : isFinite(z) ? p += z : isFinite(u) && (p += u); n; )
                m += n.offsetLeft,
                p += n.offsetTop,
                n = n.offsetParent;
            for (n = this.canvas.canvas; n; )
                n.scrollLeft && "div" == n.localName.toLowerCase() && (m -= n.scrollLeft),
                n.scrollTop && "div" == n.localName.toLowerCase() && (p -= n.scrollTop),
                n = n.parentNode;
            return !this.isMobile && (n = this.canvas.canvas.parentNode,
            e.offsetX >= n.clientWidth || e.offsetY >= n.clientHeight) ? {
                pos: "out",
                x: 0,
                y: 0
            } : m <= h && h <= m + q && p <= l && l <= p + t ? {
                pos: "canvas",
                x: h - m,
                y: l - p
            } : {
                pos: "canvas",
                x: h < m ? 0 : q,
                y: l < p ? 0 : t
            }
        }
        if ("EFMASE_Container" == l.className)
            return {
                pos: "scroll",
                x: 0,
                y: 0
            };
        e = 0;
        for (l = this.canvas.canvas.parentNode; l; )
            e += l.offsetTop - l.scrollTop + l.clientTop,
            l = l.offsetParent;
        return h <= e ? {
            pos: "palette",
            x: 0,
            y: 0
        } : {
            pos: "out",
            x: 0,
            y: 0
        }
    },
    onpress: function(e) {
        e = this.mouseeventinfo(e);
        if ("canvas" == e.pos)
            this.selection.hasSelection && this.selection.clear(),
            e = this.cursor.position,
            e = this.selection.getSelection({
                row: e.row,
                index: 0
            }, {
                row: e.row,
                index: e.row.children.length
            }),
            null != e && this.selection.setSelection(e);
        else
            return "out" == e.pos && this.blur(),
            !0
    },
    isPanelEvent: function(e) {
        for (e = e.target || e.srcElement || e.relatedTarget; e && "efmase_panel_pad" != e.className && "body" !== e.localName.toLowerCase(); )
            e = e.parentNode;
        return null !== e && "efmase_panel_pad" == e.className
    },
    onmousedown: function(e) {
        var h = !0;
        if (null !== this.palette.activePanel && this.isPanelEvent(e))
            return !0;
        this.palette.clearPanels();
        if (this.isMobile && !e.imatheqadjust)
            return !0;
        var l = this.mouseeventinfo(e);
        if ("canvas" == l.pos) {
            this.clearKBNavi();
            this.keyboardNavi = 4;
            if (0 == e.button) {
                this.mouseIsDown = !0;
                this.initPosition = {
                    x: e.clientX,
                    y: e.clientY
                };
                if (this.isMobile) {
                    this.isDragging = this.onEndBar = this.onStartBar = this.onCursorBar = !1;
                    this.selection.hasSelection ? (this.onStartBar = this.selection.isOnCaret("start", l.x, l.y),
                    this.onEndBar = this.selection.isOnCaret("end", l.x, l.y)) : this.hasFocus() && (this.onCursorBar = this.cursor.isOnCaret(l.x, l.y));
                    if (this.onStartBar || this.onEndBar || this.onCursorBar)
                        return this.cancelClicks(),
                        !0;
                    this.initPress(e)
                }
                this.isMobile || (document.selection ? document.selection.empty() : window.getSelection && window.getSelection().removeAllRanges())
            }
            0 == this.clickState ? this.initClicks() : this.clickState++;
            this.isMobile || (this.hasFocus() || (this.focus(),
            this.selection.hasSelection || this.cursor.showCursor(),
            d.isIE() || window.focus()),
            !this.isMobile && d.isIE() && e.preventDefault(),
            h = this.cursor.onmousedown(e, l.x, l.y))
        } else
            "out" == l.pos && (this.clearKBNavi(),
            this.keyboardNavi = 0,
            this.blur());
        return h
    },
    onmousemove: function(e) {
        if (!this.mouseIsDown || null !== this.palette.activePanel && this.isPanelEvent(e) || this.isMobile && !e.imatheqadjust)
            return !0;
        var h = this.mouseeventinfo(e);
        if ("canvas" == h.pos) {
            !this.isDragging && this.mouseMoved(e.clientX, e.clientY) && (this.isDragging = !0,
            this.cancelClicks(),
            this.isMobile && null !== this.pressTimer && this.cancelPress());
            var l = h.x
              , m = h.y;
            h = null;
            if (this.isDragging) {
                if (this.isMobile)
                    if (this.onCursorBar || this.onStartBar || this.onEndBar) {
                        m -= 2 * d.caretSize;
                        if (this.onCursorBar)
                            return this.cursor.onmousedown(e, l, m),
                            e.stopPropagation(),
                            e.preventDefault(),
                            !1;
                        this.onStartBar ? (h = this.selection.endPosition,
                        this.onStartBar = !1,
                        this.onEndBar = !0) : this.onEndBar && (h = this.selection.startPosition)
                    } else
                        return !0;
                else
                    h = this.selection.startPosition;
                if (l = this.presentation.getCursorPosition(this.getPresentationContext(), l, m))
                    h = this.selection.getSelection(h, l),
                    null != h ? this.selection.setSelection(h) : this.selection.clear(),
                    this.cursor.setPosition(l);
                this.isMobile || e.preventDefault()
            }
        }
        return !0
    },
    onmouseup: function(e) {
        this.isDragging = this.mouseIsDown = !1;
        this.initPosition = null;
        if (this.isMobile && !e.imatheqadjust)
            return !0;
        var h = this.mouseeventinfo(e);
        0 < this.clickState && this.clickState++;
        this.isMobile && 2 == this.clickState && (this.hasFocus() || (this.focus(),
        this.selection.hasSelection || this.cursor.showCursor(),
        d.isIE() || window.focus()),
        ret = this.cursor.onmousedown(e, h.x, h.y));
        if (4 == this.clickState)
            this.onpress(e);
        6 == this.clickState && (this.selection.selectAll(),
        this.cancelClicks());
        return this.isMobile && (this.cancelPress(),
        this.onCursorBar || this.onStartBar || this.onEndBar) ? (e.stopPropagation(),
        e.preventDefault(),
        this.onEndBar = this.onStartBar = this.onCursorBar = !1) : !0
    },
    initClicks: function(e) {
        this.clickState = 1;
        this.cancelClicksTimer = null;
        if (null === this.cancelClicksTimer) {
            var h = this;
            this.cancelClicksTimer = setTimeout(function() {
                h.clickState = 0
            }, 500)
        }
    },
    cancelClicks: function() {
        this.clickState = 0;
        null !== this.cancelClicksTimer && (clearTimeout(this.cancelClicksTimer),
        this.cancelClicksTimer = null)
    },
    oncopy: function(e) {
        if (!this.selection.hasSelection)
            return !0;
        window.clipboardData ? window.clipboardData.setData("text/plain", this.selection.getMathML()) : e.clipboardData ? e.clipboardData.setData("text/plain", this.selection.getMathML()) : alert("Clipboard Data are not supported in this browser. Sorry.");
        e.preventDefault()
    },
    onCutCopy: function(e, h) {
        if (!this.selection.hasSelection)
            return !0;
        this.hasFocus() || this.focus();
        var l = this.selection.getMathML();
        "cut" == h && this.selection.remove();
        if (this.isMobile)
            try {
                "https:" != location.protocol ? alert("In order to use this function, you need to access iMathEQ Math Equation Editor with HTTPS.") : null === navigator || void 0 === navigator || null === navigator.clipboard || void 0 === navigator.clipboard ? alert("Your browser/device currently does not support this function.") : navigator.clipboard.writeText(l)
            } catch (m) {
                alert(m)
            }
        else {
            if (document.body.createTextRange) {
                h = document.createElement("div");
                h.style.opacity = 0;
                h.style.position = "absolute";
                h.style.pointerEvents = "none";
                h.style.zIndex = -1;
                document.body.appendChild(h);
                h.innerHTML = l.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
                l = document.createRange();
                l.setStartBefore(h.firstChild);
                l.setEndAfter(h.lastChild);
                window.getSelection().addRange(l);
                try {
                    document.execCommand("copy") || console.log("execCommand returned false !")
                } catch (m) {
                    console.log("execCommand failed ! exception " + m)
                }
                document.body.removeChild(h)
            } else if (window.clipboardData)
                window.clipboardData.setData("text/plain", l);
            else if (e.clipboardData)
                e.clipboardData.setData("text/plain", l);
            else {
                h = document.createElement("textarea");
                h.style.opacity = 0;
                h.style.position = "absolute";
                h.style.pointerEvents = "none";
                h.style.zIndex = -1;
                document.body.appendChild(h);
                h.value = l;
                h.select();
                try {
                    document.execCommand("copy") || console.log("execCommand returned false !")
                } catch (m) {
                    console.log("execCommand failed ! exception " + m)
                }
            }
            e.preventDefault();
            this.focus()
        }
    },
    b6de: function(e) {
        var h = 0
          , l = [];
        if (!e)
            return e;
        e += "";
        do {
            var m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(e.charAt(h++));
            var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(e.charAt(h++));
            var p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(e.charAt(h++));
            var q = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(e.charAt(h++));
            var t = m << 18 | n << 12 | p << 6 | q;
            m = t >> 16 & 255;
            n = t >> 8 & 255;
            t &= 255;
            l.push(m);
            64 !== p && (l.push(n),
            64 !== q && l.push(t))
        } while (h < e.length);
        return l
    },
    clearMathML: function() {
        if (this.redrawing || this.initializing) {
            var e = this;
            setTimeout(function() {
                e.clearMathML()
            }, 1E3)
        } else
            try {
                this.selection.selectAll(),
                this.selection.remove(),
                this.actions.clear()
            } catch (h) {
                throw Error("Error in clearMathML()");
            }
    },
    getpc: function() {
        var e = this.pdata;
        return this.dec(e.tstr0.toString(), e.epc)
    },
    doonpaste: function(e, h) {
        var l = org.imatheq.formulaeditor.presentation
          , m = this.selection
          , n = this.getButtonStatus()
          , p = null;
        m.hasSelection && (p = m.getSelectionCopy());
        this.cursor.hideCursor();
        var q = this.getExpressionParsingContext()
          , t = {
            row: this.cursor.position.row,
            index: this.cursor.position.index
        }
          , r = {
            row: this.cursor.position.row,
            index: this.cursor.position.index
        }
          , u = m.hasSelection && (m.parent instanceof l.PArray || !(m.parent instanceof l.Lines) && !(m.parent.parent instanceof l.Lines)) || !m.hasSelection && !(this.cursor.position.row.parent instanceof l.Lines);
        e = e.replace(RegExp("<mi>\u21b5</mi>", "g"), "");
        e = e.replace(RegExp("opens*=s*['|\"]<['|\"]", "g"), "open='&lt;'");
        e = e.replace(RegExp("closes*=s*['|\"]>['|\"]", "g"), "close='&gt;'");
        e = e.replace(RegExp('mathcolor="null"', "g"), "");
        q = this.getPresentationFromMathML(q, e, u, h);
        if (null === q && (q = new l.Row(e),
        null === q))
            return !1;
        if (m.hasSelection && m.parent instanceof l.PArray) {
            n = m.copy();
            e = this.cursor.position.row.getIndexChain(this.cursor.position.index);
            h = "update";
            p = m.parent;
            r.row = p;
            if (m.endIndex < m.startIndex)
                throw new error("onpaste: PArray selection.endIndex<selection.startIndex");
            u = p.deleteValues(m.startIndex, m.endIndex - 1);
            r.index = m.startIndex;
            var z = p.children.length - m.endIndex;
            p.updateValues(q, m.startIndex, m.endIndex - 1);
            t = p.children[m.endIndex - 1].getLastCursorPosition(this.getPresentationContext());
            m.clear();
            q = t.row.getIndexChain(t.index);
            this.actions.addAction(h, r, e, q, u, null, z, n)
        } else {
            e = this.cursor.position.row.getIndexChain(this.cursor.position.index);
            h = "insert";
            u = null;
            var B = this.cursor.position.row;
            z = this.cursor.position.row.children.length - this.cursor.position.index;
            m.hasSelection && (h = "update",
            r.row = m.parent,
            m.removeEndNewline(),
            m.parent instanceof l.Row ? (t = {
                row: m.parent,
                index: m.startIndex
            },
            z = m.parent.children.length - m.endIndex) : (t = m.parent.getGrandChild(m.startIndex),
            t = {
                row: t.parent,
                index: t.index
            },
            z = m.parent.getNumGrandChildren() - m.endIndex),
            u = m.parent.remove(m.startIndex, m.endIndex),
            r.index = m.startIndex,
            B = t.row);
            q instanceof l.PArray && (q = new l.Row(q));
            1 == B.children.length && B.children[0]instanceof l.BlockSymbol && (h = "update",
            u = B.remove(0, 1),
            z = 0,
            1 == t.index && (t.index = 0));
            if (q instanceof l.Row) {
                if (q.children)
                    for (var C = 0; C < q.children.length; C++)
                        (l = B.insert(t.index, q.children[C], 0 === C)) && t.index++;
                B.flatten();
                q = t.row.getIndexChain(t.index)
            } else
                r = B.parent.getGrandChildIndex(B.index, this.cursor.position.index),
                z = B.parent.getNumGrandChildren() - r,
                t = r + q.getNumGrandChildren(),
                B.parent.insert(r, q),
                t = B.parent.getGrandChild(t),
                q = t.parent.getIndexChain(t.index),
                t = {
                    row: t.parent,
                    index: t.index
                },
                r = {
                    row: B.parent,
                    index: r
                };
            m.clear();
            this.actions.addAction(h, r, e, q, u, null, z, p, null, n)
        }
        this.cursor.setPosition(t);
        this.redraw();
        return !1
    },
    onpaste: function(e) {
        var h = "";
        if (!this.hasFocus())
            return !0;
        this.pasteEvtSupport = !1;
        null !== this.pasteCache && (this.pasteCache.innerHTML = "");
        window.clipboardData ? h = window.clipboardData.getData("Text") : e.clipboardData && (h = e.clipboardData.getData("Text"));
        "" != h && (this.doonpaste(h, !1),
        e.preventDefault())
    },
    fetchData: function(e) {
        var h = this.getpc();
        return this.dec(h, e)
    },
    onresize: function(e) {
        if (!this.isMobile)
            if (this.redrawing || this.initializing) {
                var h = this;
                setTimeout(function() {
                    h.onresize(e)
                }, 200)
            } else
                try {
                    clearTimeout(this.resizeTimer),
                    h = this,
                    this.resizeTimer = setTimeout(function() {
                        h.resizeWindow();
                        h.redraw()
                    }, 250)
                } catch (l) {
                    throw Error("Error in onresize()");
                }
    },
    getScrollBarWidth: function() {
        var e = document.createElement("p");
        e.style.width = "100%";
        e.style.height = "200px";
        var h = document.createElement("div");
        h.style.position = "absolute";
        h.style.top = "0px";
        h.style.left = "0px";
        h.style.visibility = "hidden";
        h.style.width = "200px";
        h.style.height = "150px";
        h.style.overflow = "hidden";
        h.appendChild(e);
        document.body.appendChild(h);
        var l = e.offsetWidth;
        h.style.overflow = "scroll";
        e = e.offsetWidth;
        l == e && (e = h.clientWidth);
        document.body.removeChild(h);
        return l - e
    },
    resizeWindow: function() {
        var e = window.innerWidth;
        this.isMobile || null === this.width || (e = this.width);
        var h = window.innerHeight;
        this.isMobile || null === this.height || (h = this.height + 21);
        var l = document.getElementsByClassName("efmase_tab_bar");
        0 < l.length && (l[0].style.width = parseInt(e) - 18 + "px");
        l = document.querySelectorAll(".efmase_palette");
        for (var m = 0; m < l.length; m++)
            l[m].style.width = parseInt(e) - 18 + "px";
        e = parseInt(e) - 28;
        h = parseInt(h) - 290;
        l = this.canvas.canvas.parentNode;
        l.style.width = e + 22 + "px";
        l.style.height = h + 22 + "px";
        this.isMobile || (this.textbox.style.width = e + "px",
        this.textbox.style.height = h + "px",
        this.isMobile && (this.textbox.style.height = h + 22 + "px"),
        this.textbox.style.marginTop = -h - 28 + "px");
        null === this.palette || this.isMobile || this.palette.redrawMenuBar()
    },
    resizeCanvas: function(e, h) {
        e = this.canvas.canvas;
        var l = this.canvas.bgCanvas
          , m = window.innerWidth;
        this.isMobile || null === this.width || (m = this.width);
        var n = window.innerHeight;
        this.isMobile || null === this.height || (n = this.height + 21);
        yScrollbarWidth = xScrollbarWidth = this.getScrollBarWidth();
        var p = parseInt(m) - 6 - xScrollbarWidth - 12
          , q = parseInt(n) - 290 - xScrollbarWidth;
        m = p;
        n = q;
        var t = 0;
        t = 0;
        null !== h && void 0 !== h && h.width >= p && (t = Math.round(p / 2),
        m = Math.round(h.width / t + .5) * t);
        null !== h && void 0 !== h && h.height >= q && (t = Math.round(q / 2),
        n = Math.round(h.height / t + .5) * t,
        this.isMobile && (n = Math.round((h.height + 3 * d.caretSize) / t + .5) * t));
        null === h || void 0 === h || m == parseInt(e.style.width) && n == parseInt(e.style.height) || (e.setAttribute("width", 2 * m),
        e.setAttribute("height", 2 * n),
        l.setAttribute("width", 2 * m),
        l.setAttribute("height", 2 * n),
        e.style.width = m + "px",
        e.style.height = n + "px",
        e.style.marginTop = -n - 4 + "px",
        l.style.width = m + "px",
        l.style.height = n + "px",
        e.getContext("2d").scale(2, 2),
        l.getContext("2d").scale(2, 2));
        var r = this;
        r.isMobile || (this.resizeTimer = setTimeout(function() {
            r.textbox.style.width = p + 2 + "px";
            r.textbox.style.height = q + 22 + "px";
            r.isMobile && (r.textbox.style.height = q + "px")
        }, 250))
    },
    getAltstrs: function() {
        ed = this;
        this.loadjs("en", "alttext.js", function() {
            ed.pdata.tstr5 = (new Date).getTime();
            ed.getData()
        })
    },
    getPresentationFromMathML: function(e, h, l, m) {
        if ("" == h)
            return null;
        var n = org.imatheq.formulaeditor.presentation, p = org.imatheq.formulaeditor.parsing.mathml.MathMLParser, q = {}, t;
        for (t in e)
            q[t] = e[t];
        try {
            var r = (new p).parseString(h, q, l);
            return 1 == r.children.length && 1 == r.children[0].children.length && r.children[0].children[0]instanceof n.PArray && m ? r.children[0].children[0] : r
        } catch (u) {
            try {
                return newmathml = "<math><mi>" + h.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;") + "</mi></math>",
                r = (new p).parseString(newmathml, q, l),
                1 == r.children.length && 1 == r.children[0].children.length && r.children[0].children[0]instanceof n.PArray && m ? r.children[0].children[0] : r
            } catch (z) {
                return new n.Row(h.trim())
            }
        }
    },
    focus: function() {
        this.isMobile ? this.focused = !0 : this.textbox.focus();
        var e = this.cursor.position;
        1 == e.row.children.length && e.row.children[0]instanceof org.imatheq.formulaeditor.presentation.BlockSymbol && (e.index = 0)
    },
    blur: function() {
        this.hasFocus() && (org.imatheq.formulaeditor.FormulaEditor.lastFocused = this);
        this.cursor.hideCursor();
        this.isMobile ? this.focused = !1 : this.textbox.blur();
        this.cancelClicks()
    },
    getFontFamilyNameIdx: function() {
        return this.canvas.fontFamilyNameIdx
    },
    getMathML: function() {
        try {
            var e = '<math xmlns="http://www.w3.org/1998/Math/MathML"' + (this.in_attrbs ? this.in_attrbs : "") + ">" + this.presentation.getMathML() + "</math>"
        } catch (h) {
            e = '<math xmlns="http://www.w3.org/1998/Math/MathML"><mtext>' + h.toString() + "</mtext></math>"
        }
        return e
    },
    setMathML: function(e) {
        if (null !== e && void 0 !== e && "" != e)
            if (this.redrawing || this.initializing) {
                var h = this;
                setTimeout(function() {
                    h.setMathML(e)
                }, 1E3)
            } else
                try {
                    this.selection.selectAll(),
                    this.focus(),
                    this.doonpaste(e, !1),
                    this.actions.clear()
                } catch (l) {
                    throw Error("Error in setMathML()");
                }
    },
    getImage: function() {
        return this.gifunc["gi" + this.lst]()
    },
    indentXML: function(e) {
        var h = [], l, m, n = 0, p = function() {
            var t;
            0 < h.length && h.push("\n");
            for (t = n; 0 < t; t--)
                h.push("  ")
        };
        for (l = 0; 0 <= (m = e.indexOf("<", l)); ) {
            m > l && (!0 === q && p(),
            h.push(e.substr(l, m - l)),
            l = m);
            m++;
            c = e.charAt(m);
            switch (c) {
            case "/":
                --n;
                0 > n && (n = 0);
                !0 === q && p();
                m = e.indexOf(">", m);
                if (0 > m)
                    return h.join("") + e.substr(l);
                m += 1;
                var q = !0;
                break;
            case "!":
                m++;
                c = e.charAt(m);
                switch (c) {
                case "[":
                    q = !0;
                    m = e.indexOf("]]\x3e", m);
                    if (0 > m)
                        return h.join("") + e.substr(l);
                    m += 3;
                    p();
                    break;
                case "-":
                    q = !0;
                    m = e.indexOf("--\x3e", m);
                    if (0 > m)
                        return h.join("") + e.substr(l);
                    m += 3;
                    p();
                    break;
                default:
                    return h.join("") + e.substr(l)
                }
                break;
            default:
                m = e.indexOf(">", m);
                if (0 > m)
                    return h.join("") + e.substr(l);
                p();
                "/" != e.charAt(m - 1) ? (q = !1,
                n += 1) : q = !0;
                m += 1
            }
            h.push(e.substr(l, m - l));
            l = m
        }
        l < e.length && h.push(e.substr(l));
        return h.join("")
    },
    getData: function() {
        var e = this.fetchData(ime_js_dat_symbollist);
        try {
            this.palette.symbols = JSON.parse(e)
        } catch (l) {
            throw Error("Fail to parse: ime_js_dat_symbollist, " + l);
        }
        this.symbolindex = {};
        this.encloses = {};
        for (var h in this.palette.symbols)
            if (e = this.palette.symbols[h],
            "ch" == e.tp && (null === e.font || "imescr7" != e.font && "eufm7" != e.font && "msbm7" != e.font) && "d" != e.ch)
                this.symbolindex[e.ch] = h;
            else if ("enclose" == e.sub_tp)
                this.symbolindex[e.name] = h;
            else if (null !== e.middle_bracket && void 0 !== e.middle_bracket)
                this.symbolindex[e.middle_bracket] = h;
            else if ("vertical_bracket" == e.sub_tp || "bracket" == e.sub_tp)
                this.symbolindex[e.bracket] = h;
        this.drawEditor(this.lang)
    },
    gi0: function() {
        try {
            var e = this.canvas.canvas;
            e.toDataURL("image/png");
            var h = document.getElementById("com_imatheq_loading_msg");
            h.innerHTML = "Generating image, please wait...";
            h.style.display = "";
            this.canvas.readonly = !0;
            this.redraw();
            var l = document.createElement("canvas")
              , m = 2 * this.presentation.dimensions.width
              , n = 2 * this.presentation.dimensions.height;
            l.setAttribute("width", m / 2 + 20);
            l.setAttribute("height", n / 2 + 8);
            l.getContext("2d").drawImage(e, 40, 16, m + 4, n + 4, 2, 2, (m + 4) / 2, (n + 4) / 2);
            l.toDataURL("image/png");
            l.toDataURL("image/png");
            this.canvas.readonly = !1;
            this.redraw();
            var p = document.createElement("canvas")
              , q = p.getContext("2d");
            var t = p.width = l.width;
            var r = p.height = l.height;
            q.drawImage(l, 0, 0);
            p.toDataURL("image/png");
            lineW = 40 < t ? 20 : t / 2;
            e = lineW / 2;
            q.beginPath();
            q.globalAlpha = .5;
            q.lineWidth = lineW;
            for (q.strokeStyle = "#97F1EC"; e < t + r - lineW / 2; )
                e < r ? (q.moveTo(e, 0),
                q.lineTo(0, e)) : (e < t ? q.moveTo(e, 0) : q.moveTo(t, e - t),
                q.lineTo(e - r, r)),
                e += 2 * lineW;
            q.stroke();
            var u = p.toDataURL("image/png");
            h.innerHTML = "Loading, please wait...";
            h.style.display = "none"
        } catch (z) {}
        return u
    },
    getExpressionParsingContext: function() {
        return org.imatheq.formulaeditor.parsing.expression.ExpressionContextParser.getContext()
    },
    getPresentationContext: function() {
        Options = new org.imatheq.formulaeditor.Options;
        return Options.getPresentationContext()
    }
});
org.imatheq.formulaeditor.FormulaEditor.addDebug = function(e) {
    void 0 !== b && null !== b && b.addDebug(e);
    return b
}
;
org.imatheq.formulaeditor.FormulaEditor.cleanup = function() {
    this.cleanupEditors();
    this.cleanupCanvases();
    this.cleanupTextareas();
    this.cleanupGroup()
}
;
org.imatheq.formulaeditor.FormulaEditor.cleanupCanvases = function() {
    var e = document.getElementsByTagName("canvas");
    for (i = 0; i < e.length; i++) {
        var h = e[i];
        (classattribute = h.getAttribute("class")) || (classattribute = h.getAttribute("className"));
        classattribute && classattribute.match(/(^| )imatheqformula($| )/) && (this.getEditorByCanvas(h) || h.parentNode.removeChild(h))
    }
}
;
org.imatheq.formulaeditor.FormulaEditor.cleanupEditors = function() {
    for (var e = f.length; 0 < e; e--) {
        var h = f[e - 1].canvas.canvas
          , l = f[e - 1].textarea;
        h && l || (h && h.parentNode && h.parentNode.removeChild(h),
        l && l.parentNode && l.parentNode.removeChild(l),
        delete f[e - 1],
        f.splice(e - 1, 1))
    }
}
;
org.imatheq.formulaeditor.FormulaEditor.cleanupGroup = function() {
    var e, h = !0;
    for (e = 0; e < f.length; e++) {
        var l = f[e].canvas.canvas
          , m = f[e].textarea;
        l && l.parentNode && m && m.parentNode ? l.nextSibling && l.nextSibling == m || (m = m.cloneNode(!0),
        l.nextSibling ? l.parentNode.insertBefore(m, l.nextSibling) : l.parentNode.appendChild(m),
        f[e].textarea = m,
        textarea.parentNode.removeChild(textarea)) : h = !1
    }
    return h
}
;
org.imatheq.formulaeditor.FormulaEditor.cleanupTextareas = function() {
    var e = document.getElementsByTagName("textarea");
    for (i = 0; i < e.length; i++) {
        var h = e[i];
        (classattribute = h.getAttribute("class")) || (classattribute = h.getAttribute("className"));
        if (classattribute && classattribute.match(/(^| )imatheqformula($| )/)) {
            var l = this.getEditorByTextArea(h);
            l ? h.innerHTML = l.textarea.value : h.parentNode.removeChild(h)
        }
    }
}
;
org.imatheq.formulaeditor.FormulaEditor.deleteEditor = function(e) {
    if ("number" == typeof e) {
        var h = e;
        if (0 > h || h >= f.length)
            return !1
    } else if (e instanceof org.imatheq.formuleditor.FormulaEditor) {
        for (h = 0; h < f.length && f[h] != e; )
            h++;
        if (h == f.length)
            return !1
    } else
        return !1;
    e = f[h].canvas.canvas;
    var l = f[h].textarea;
    e && e.parentNode && e.parentNode.removeChild(e);
    l && l.parentNode && l.parentNode.removeChild(l);
    delete f[h];
    f.splice(h, 1);
    return !0
}
;
org.imatheq.formulaeditor.FormulaEditor.getEditorByCanvas = function(e) {
    var h;
    if (void 0 === e || null === e)
        return null;
    if ("string" == typeof e)
        for (h = 0; h < f.length; h++) {
            if (e == f[h].canvas.id)
                return f[h]
        }
    else if (e instanceof HTMLElement)
        for (h = 0; h < f.length; h++)
            if (f[h].canvas.canvas == e)
                return f[h];
    return null
}
;
org.imatheq.formulaeditor.FormulaEditor.getEditorByTextArea = function(e) {
    var h;
    if (void 0 === e || null === e)
        return null;
    if ("string" == typeof e)
        for (h = 0; h < f.length; h++) {
            if (e == f[h].textarea.id)
                return f[h]
        }
    else if (e instanceof HTMLElement)
        for (h = 0; h < f.length; h++)
            if (f[h].textarea == e)
                return f[h];
    return null
}
;
org.imatheq.formulaeditor.FormulaEditor.getFocusedEditor = function() {
    for (var e = 0; e < f.length; e++)
        if (f[e].hasFocus())
            return f[e];
    return null
}
;
org.imatheq.formulaeditor.FormulaEditor.getFirstEditor = function() {
    return f[0]
}
;
org.imatheq.formulaeditor.FormulaEditor.lastFocused = null;
org.imatheq.formulaeditor.FormulaEditor.getLastFocusedEditor = function() {
    var e = org.imatheq.formulaeditor.FormulaEditor.getFocusedEditor();
    return null !== e ? e : org.imatheq.formulaeditor.FormulaEditor.lastFocused
}
;
org.imatheq.formulaeditor.FormulaEditor.getEditor = function() {
    var e = org.imatheq.formulaeditor.FormulaEditor.getFocusedEditor();
    null === e && (e = org.imatheq.formulaeditor.FormulaEditor.getFirstEditor());
    return e
}
;
org.imatheq.formulaeditor.FormulaEditor.updateByTextAreas = function(e) {
    var h = document.getElementsByTagName("div"), l;
    if (e) {
        for (e = 0; e < f.length; ) {
            for (l = 0; l < h.length && f[e].textarea != h[l]; )
                l++;
            l == h.length ? this.deleteEditor(e) : e += 1
        }
        this.cleanupCanvases()
    }
    for (e = 0; e < h.length; e++) {
        var m = h[e];
        (l = m.getAttribute("class")) || (l = m.getAttribute("className"));
        l && l.match(/(^| )imatheqformula($| )/) && new org.imatheq.formulaeditor.FormulaEditor(m)
    }
}
;
org.imatheq.formulaeditor.FormulaEditor.addEventListener = function(e, h, l) {
    e.attachEvent ? e.attachEvent("on" + h, l) : e.addEventListener(h, l, !1)
}
;
org.imatheq.formulaeditor.FormulaEditor.stopEventPropagation = function(e) {
    e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
}
;
org.imatheq.formulaeditor.FormulaEditor.eventPreventDefault = function(e) {
    e.preventDefault ? e.preventDefault() : e.returnValue = !1
}
;
org.imatheq.formulaeditor.Palette = $extend(org.imatheq.formulaeditor.FormulaEditor, {
    container: null,
    menubar: null,
    palette: null,
    editor: null,
    curtab: "PALETTE_TAB_BASIC",
    symbols: null,
    smallwindow: null,
    matrixPanel: null,
    bracketPanel: null,
    colorPanel: null,
    sizePanel: null,
    fontsizePanel: null,
    fontnamePanel: null,
    description: null,
    curBtnId: null,
    activePanel: null,
    isSmallWin: function() {
        return null !== this.smallwindow && this.smallwindow
    },
    htmlelement: null,
    initialize: function(e, h, l) {
        if (!e)
            return null;
        this.container = e;
        this.editor = h;
        this.symbols = null;
        h.isMobile && (this.curtab = "PALETTE_TAB_KEYBOARD");
        org.imatheq.formulaeditor.options.paletteURL ? (e = org.imatheq.formulaeditor.options.paletteURL,
        org.imatheq.formulaeditor.Palette.description || (org.imatheq.formulaeditor.Palette.description = "loading",
        com.efmase.js.utilities.XMLHttp.getText(e, function(m) {
            org.imatheq.formulaeditor.Palette.description = m;
            for (m = 0; m < a.length; m++)
                a[m].loadPalette(org.imatheq.formulaeditor.Palette.description),
                a[m].draw()
        })),
        h.palette = this) : org.imatheq.formulaeditor.Palette.description = org.imatheq.formulaeditor.Palettes.defaultPalette
    },
    initPanels: function() {
        this.matrixPanel = new org.imatheq.formulaeditor.presentation.MatrixPanel(this);
        this.bracketPanel = new org.imatheq.formulaeditor.presentation.BracketPanel(this);
        this.sizePanel = new org.imatheq.formulaeditor.presentation.SizePanel(this,"0px 1px 2px 3px 4px 5px 6px 7px 8px 9px 10px 12px 15px 20px 25px 30px 35px 40px".split(" "));
        this.fontsizePanel = new org.imatheq.formulaeditor.presentation.SizePanel(this,[8, 9, 10, 11, 12, 15, 18, 24, 30, 36, 48, 60, 72, 96]);
        for (var e = this.editor.palette.symbols["108"].ITEMS, h = [], l = 0; l < e.length; l++)
            h.push(this.editor.pData.TITLES[e[l]]);
        this.fontnamePanel = new org.imatheq.formulaeditor.presentation.SizePanel(this,h,1);
        this.colorPanel = new org.imatheq.formulaeditor.presentation.ColorPanel(this)
    },
    loadPalette: function(e, h) {
        h = new org.imatheq.formulaeditor.parsing.xml.XMLParser;
        e = h.loadXml(e).documentElement;
        h.removeComments(e);
        h.removeWhitespace(e);
        this.menubar = e.childNodes.item(0);
        this.palette = e.childNodes.item(1)
    },
    efmase_menugrp_timeout: 500,
    efmase_menugrp_closetimer: 0,
    efmase_menugrp_ddmenugrp: 0,
    efmase_menugrp_cancelclosetime: function() {
        this.efmase_menugrp_closetimer && (window.clearTimeout(this.efmase_menugrp_closetimer),
        this.efmase_menugrp_closetimer = null)
    },
    efmase_menugrp_click: function(e, h) {
        var l = org.imatheq.formulaeditor.presentation;
        this.clearPanels();
        this.efmase_menugrp_cancelclosetime();
        this.efmase_menugrp_ddmenugrp && (this.efmase_menugrp_ddmenugrp.style.visibility = "hidden");
        var m = document.getElementById("efmase_menubar_item_" + e);
        if (null !== m && void 0 !== m) {
            e = this.editor;
            var n = m.getAttribute("name");
            switch (n) {
            case "efmase_menubar_item_logo":
                window.open("http://www.imatheq.com", "_blank").focus();
                break;
            case "efmase_menubar_item_undo":
                e.actions.undo();
                break;
            case "efmase_menubar_item_redo":
                e.actions.redo();
                break;
            case "efmase_menubar_item_bold":
                e.hasFocus() || e.focus();
                h = {
                    bold: !e.isBold()
                };
                e.selection.hasSelection ? e.selection.setSelSymbFontAttrbs(h) : (n = e.cursor.position.row.children[e.cursor.position.index],
                n instanceof l.BlockSymbol && n.setSymbFontAttrbs(h));
                e.setButtonStatus(h);
                break;
            case "efmase_menubar_item_italic":
                e.hasFocus() || e.focus();
                n = !e.isForcedItalic();
                h = {
                    forcedItalic: n
                };
                n && e.isAutoItalic() && (h.autoItalic = !1);
                e.selection.hasSelection ? e.selection.setSelSymbFontAttrbs(h) : (e.hasFocus() || e.focus(),
                n = e.cursor.position.row.children[e.cursor.position.index],
                n instanceof l.BlockSymbol && n.setSymbFontAttrbs(h));
                e.setButtonStatus(h);
                break;
            case "efmase_menubar_item_autoitalic":
                e.hasFocus() || e.focus();
                n = !e.isAutoItalic();
                h = {
                    autoItalic: n
                };
                n && e.isForcedItalic() && (h.forcedItalic = !1);
                e.selection.hasSelection ? e.selection.setSelSymbFontAttrbs(h) : (e.hasFocus() || e.focus(),
                n = e.cursor.position.row.children[e.cursor.position.index],
                n instanceof l.BlockSymbol && n.setSymbFontAttrbs(h));
                e.setButtonStatus(h);
                break;
            case "efmase_menubar_item_mathcolor":
                e.hasFocus() || e.focus();
                this.colorPanel.show(h.pageX, h.pageY);
                break;
            case "efmase_menubar_item_mtext":
                e.hasFocus() || e.focus();
                h = {
                    mtext: !e.isMtext()
                };
                e.selection.hasSelection ? e.selection.setSelSymbFontAttrbs(h) : (e.hasFocus() || e.focus(),
                n = e.cursor.position.row.children[e.cursor.position.index],
                n instanceof l.BlockSymbol && n.setSymbFontAttrbs(h));
                e.setButtonStatus(h);
                break;
            case "fontname":
            case "efmase_menubar_item_mobile_fontname":
            case "efmase_menubar_item_mobile_fontsize":
            case "fontsize":
                l = m.getAttribute("btn_id"),
                "fontname" == n || "efmase_menubar_item_mobile_fontname" == n ? (e = this.editor.getFontFamilyNameIdx(),
                this.fontnamePanel.show(l, h.pageX, h.pageY, e)) : (e = this.editor.canvas.getFontSizeIdx(),
                this.fontsizePanel.show(l, h.pageX, h.pageY, e))
            }
        }
    },
    efmase_menugrp_close: function() {
        this.efmase_menugrp_ddmenugrp && (this.efmase_menugrp_ddmenugrp.style.visibility = "hidden")
    },
    efmase_menugrp_closetime: function() {
        var e = this;
        this.efmase_menugrp_closetimer = window.setTimeout(function() {
            e.efmase_menugrp_close()
        }, this.efmase_menugrp_timeout)
    },
    efmase_submenuitem_select: function(e, h) {
        h = document.getElementById(h);
        var l = document.getElementById(e)
          , m = h.getAttribute("cld_id");
        m = document.getElementById(m);
        null != m && void 0 != m && (m.className = "");
        m = h.getAttribute("name");
        h.setAttribute("cld_id", e);
        if (this.isSmallWin())
            l.className = "efmase_mobile_font_n_size_focused";
        else {
            if ("fontsize" == m || "fontname" == m)
                h.innerHTML = l.innerHTML.slice(0, 11);
            this.efmase_menugrp_close()
        }
        h = org.imatheq.formulaeditor.FormulaEditor.getEditor();
        if ("Edit" == m)
            switch (document.getElementById(e).innerHTML) {
            case "Undo":
                h.actions.undo();
                break;
            case "Redo":
                h.actions.redo();
                break;
            case "Cut":
                h.selection.hasSelection && h.selection.remove();
                break;
            case "Copy":
                h.selection.hasSelection && h.selection.copy();
                break;
            case "Test":
                h.onTest()
            }
        else
            "fontsize" == m ? (e = parseInt(e.substring(e.lastIndexOf("_") + 1, e.length)),
            h.setFontSizeIdx(e)) : "fontname" == m && (fontnameIdx = parseInt(e.substring(e.lastIndexOf("_") + 1, e.length)),
            h.setFontFamilyNameIdx(fontnameIdx))
    },
    clearMenuTabBar: function() {
        var e = document.getElementById("efmase_menubar");
        null !== e && (e = e.parentNode,
        e.parentNode.removeChild(e));
        oSWMenuTabBar = document.getElementById("efmase_sw_menutab_div");
        null !== oSWMenuTabBar && oSWMenuTabBar.parentNode.removeChild(oSWMenuTabBar);
        this.smallwindow = null
    },
    drawMenuBar: function(e) {
        var h = e;
        if (null === e || void 0 === e)
            h = d.isSmallWin();
        this.smallwindow = h;
        var l = document.createElement("div");
        this.container.insertBefore(l, this.container.firstChild);
        e = document.createElement("ul");
        e.setAttribute("id", "efmase_menubar");
        e.className = h ? "efmase_menubar efmase_menubar_mobile" : "efmase_menubar";
        l.appendChild(e);
        l = this.editor.pData.MENUBAR;
        var m = this.editor.pData.TITLES
          , n = new org.imatheq.formulaeditor.Options
          , p = n.getOption("hideFontTools");
        this.editor.menuItems = [];
        for (var q = 0; q < l.length; q++) {
            var t = l[q].id
              , r = this.symbols[t];
            0 < q && this.editor.menuItems.push(r.name);
            if (h || "mobile_fontname" != r.name && "mobile_fontsize" != r.name)
                if (!h || "efmase_menugrp_drop" != r.class) {
                    var u = document.createElement("li");
                    u.className = r.class;
                    u.style.float = "left";
                    p && "logo" != r.name && "undo" != r.name && "redo" != r.name && (u.style.display = "none");
                    e.appendChild(u);
                    if ("efmase_menugrp_drop" != r.class) {
                        var z = document.createElement("button");
                        z.btnGrp = "menu";
                        z.title = m[t];
                        z.name = "efmase_menubar_item_" + r.name;
                        z.setAttribute("btn_id", t);
                        z.style.width = r.w + "px";
                        if ("logo" == r.name) {
                            var B = this.editor;
                            d.addEventListener(z, "focus", function() {
                                return function(v) {
                                    B.clearKBNavi();
                                    B.keyboardNavi = 1;
                                    B.setKBNavi(v)
                                }
                            }())
                        }
                        "undo" == r.name || "redo" == r.name ? z.className = "efmase_palettebutton efmase_palettebtn_disabled" : "autoitalic" == r.name ? n.getOption("defAutoItalic") ? z.className = "efmase_palettebutton efmase_palettebutton_down" : z.className = "efmase_palettebutton" : ("mathcolor" == r.name && z.setAttribute("mathcolor", "#000000"),
                        z.className = "efmase_palettebutton");
                        if (void 0 !== r.itp && "svg" == r.itp)
                            z.innerHTML = r.svg,
                            z.style.width = "auto";
                        else if (void 0 !== r.itp && "ft" == r.itp) {
                            t = document.createElement("span");
                            t.style.fontFamily = r.font;
                            t.innerHTML = r.ich;
                            if (h && "mobile_fontsize" == r.name) {
                                var C = this.symbols[r.related]
                                  , E = this.editor.canvas.getFontSizeIdx();
                                C = C.ITEMS[E];
                                t.innerHTML = m[C]
                            }
                            if ("autoitalic" == r.name || "italic" == r.name)
                                t.style.letterSpacing = "italic" == r.name ? "-1px" : "-2px",
                                t.style.width = "22px";
                            z.appendChild(t);
                            z.style.fontFamily = r.font;
                            z.style.width = "auto";
                            z.marginTop = "-1px"
                        }
                        z.setAttribute("id", "efmase_menubar_item_" + r.name);
                        z.setAttribute("name", "efmase_menubar_item_" + r.name);
                        u.appendChild(z)
                    } else if (!h) {
                        var A = r.name;
                        E = "fontname" == A ? this.editor.getFontFamilyNameIdx() : this.editor.canvas.getFontSizeIdx();
                        C = r.ITEMS[E];
                        z = document.createElement("a");
                        z.btnGrp = "menu";
                        z.title = m[t];
                        z.innerHTML = m[C];
                        z.setAttribute("name", A);
                        z.setAttribute("btn_id", t);
                        t = this.symbols[C];
                        z.setAttribute("style", "width:auto");
                        z.setAttribute("id", "efmase_menubar_item_" + r.name);
                        t = this.symbols[C];
                        void 0 !== t && z.setAttribute("cld_name", t.name);
                        z.setAttribute("cld_id", E);
                        u.appendChild(z)
                    }
                    var w = this;
                    d.addEventListener(z, "mousedown", function(v) {
                        return function(y) {
                            w.efmase_menugrp_click(v[0], y);
                            org.imatheq.formulaeditor.FormulaEditor.stopEventPropagation(y);
                            y.preventDefault();
                            return !1
                        }
                    }([r.name]));
                    d.addEventListener(z, "mouseout", function(v) {
                        w.efmase_menugrp_closetime();
                        return !1
                    })
                }
        }
        u = document.createElement("li");
        e.appendChild(u);
        t = document.createElement("span");
        u.appendChild(t);
        t.innerHTML = "&nbsp;"
    },
    redrawMenuBar: function() {
        var e = d.isSmallWin() || this.editor.isMobile;
        if (this.smallwindow !== e) {
            var h = null;
            null !== this.smallwindow && (h = this.editor.getButtonStatus());
            this.smallwindow = e;
            this.clearMenuTabBar();
            this.drawMenuBar(e);
            null !== h && this.editor.setButtonStatus(h)
        }
    },
    draw: function() {
        var e = this.editor.fetchData(ime_js_dat_headlist);
        this.editor.pData = JSON.parse("{" + e + "}");
        e = this.editor.fetchData(ime_js_dat_menusymbol);
        this.editor.pData.TITLES = JSON.parse(e);
        e = this.editor.fetchData(ime_js_dat_alttext);
        this.editor.altstrs = JSON.parse(e);
        e = this.editor.pData.PALETTE;
        this.editor.isMobile || e.shift();
        var h = this.editor.pData.TITLES;
        this.editor.paletteTabs = [];
        var l = document.createElement("div");
        l.className = "efmase_tab_bar";
        l.style.width = parseInt(window.innerWidth) - 2 + "px";
        this.container.appendChild(l);
        var m = document.createElement("table");
        l.appendChild(m);
        var n = document.createElement("tr");
        m.appendChild(n);
        m = document.createElement("td");
        n.appendChild(m);
        l = document.createElement("button");
        l.className = "efmase_button_head";
        m.appendChild(l);
        m = e.length;
        for (l = 0; l < m; l++) {
            var p = e[l].id
              , q = this.symbols[p];
            if (this.editor.isMobile || "Keyboard" != q.name) {
                var t = document.createElement("td");
                n.appendChild(t);
                var r = document.createElement("a");
                r = document.createElement("button");
                r.btnGrp = "palette_tab";
                r.title = h[p];
                r.name = "PALETTE_TAB_" + q.name.toUpperCase().replace(/ /, "_");
                this.editor.paletteTabs.push(r.name);
                r.className = "efmase_palettebutton";
                r.name == this.curtab && (r.className += " efmase_palettebutton_focus");
                r.style.width = q.w + "px";
                r.style.height = q.h + "px";
                var u = document.createElement("img");
                u.alt = h[p];
                u.style.width = "1500px";
                u.style.height = "220px";
                u.src = $buuuuu() + "com/imatheq/icons/icons_2x.png";
                u.title = h[p];
                u.style.marginLeft = q.l + "px";
                u.style.marginTop = q.t + "px";
                u.style.marginBottom = q.b + "px";
                r.appendChild(u);
                t.appendChild(r);
                l == this.curtab && (r.className += " efmase_palettebutton_focus");
                n.appendChild(t);
                q = [r.name];
                var z = this;
                d.addEventListener(r, "mouseover", function(F) {
                    return function(G) {
                        z.editor.clearKBNavi();
                        z.handleTabBtnOverClick(F[0])
                    }
                }(q));
                d.addEventListener(r, "mousedown", function(F) {
                    return function(G) {
                        z.editor.clearKBNavi();
                        z.handleTabBtnOverClick(F[0])
                    }
                }(q))
            }
        }
        n = document.createElement("div");
        n.className = "efmase_palettes";
        this.container.appendChild(n);
        e = this.editor.pData.PALETTE;
        m = e.length;
        h = this.editor.pData.TITLES;
        for (l = 0; l < m; l++)
            if (p = e[l].id,
            q = this.symbols[p],
            this.editor.isMobile || "Keyboard" != q.name)
                for (p = "PALETTE_TAB_" + q.name.replace(/ /, "_").toUpperCase() + "_BODY",
                r = document.createElement("div"),
                r.className = "efmase_palette",
                r.style.width = parseInt(window.innerWidth) - 2 + "px",
                r.id = p,
                r.style.display = p == this.curtab + "_BODY" ? "" : "none",
                n.appendChild(r),
                p = document.createElement("table"),
                r.appendChild(p),
                oTR = document.createElement("tr"),
                p.appendChild(oTR),
                p = e[l].GROUPS,
                t = 0; t < p.length; t++) {
                    gType = p[t].hasOwnProperty("type") ? p[t].type : "";
                    var B = p[t].ROWS;
                    r = p[t].id;
                    oTD = document.createElement("td");
                    oTR.appendChild(oTD);
                    u = document.createElement("div");
                    "Edit Buttons" == q.name && (u.id = r,
                    u.name = r,
                    u.style.display = "none",
                    oTD.style.borderLeft = "0");
                    u.className = "efmase_palette_grp_div";
                    "dummy" == gType && (u.style.display = "block");
                    oTD.appendChild(u);
                    oTable = document.createElement("table");
                    u.appendChild(oTable);
                    oTbody = document.createElement("tbody");
                    oTable.appendChild(oTbody);
                    for (var C = null, E = 0; E < B.length; E++) {
                        C = document.createElement("tr");
                        oTbody.appendChild(C);
                        for (var A = B[E].ITEMS, w = 0; w < A.length; w++) {
                            var v = A[w].id
                              , y = this.symbols[v];
                            u = document.createElement("td");
                            C.appendChild(u);
                            r = document.createElement("button");
                            r.btnGrp = "palette";
                            r.title = void 0 === h[v] ? "" : h[v];
                            "Edit Buttons" == q.name || y.name && "KEYBOARD_" == y.name.substring(0, 9) ? (r.id = y.name,
                            r.name = y.name) : r.name = v;
                            r.className = "KEYBOARD_CUT" == y.name || "KEYBOARD_COPY" == y.name ? "efmase_palettebutton efmase_palettebtn_disabled" : "efmase_palettebutton";
                            "dummy" == gType && (r.className = "efmase_palettebutton_dummy");
                            void 0 !== y.name && this.editor.parrayLine == y.name && (r.className += " efmase_palettebutton_select");
                            "menu_b" == y.tp && (r.id = "efmase_menubar_item_" + y.name,
                            r.name = "efmase_menubar_item_" + y.name,
                            "undo" == y.name || "redo" == y.name) && (r.className += " efmase_palettebtn_disabled");
                            r.style.width = y.w + "px";
                            r.style.height = y.h + "px";
                            r.style.padding = "1px 6px";
                            d.isIOS() && (r.style.padding = "1px 6px");
                            u.appendChild(r);
                            "988" == v && (aaa = 2);
                            if ("BRACKETS_UPDATE" == y.name)
                                u = document.createElement("div"),
                                oBracket = document.createElement("a"),
                                oBracket.style.fontSize = "22px",
                                u.appendChild(oBracket),
                                r.appendChild(u),
                                oSpan = document.createElement("span"),
                                oSpan.id = "efmase_bracket_palette_btn",
                                oSpan.name = y.name,
                                oBracket.appendChild(oSpan),
                                oSpan.innerHTML = "(&nbsp;)",
                                r.classList.add("efmase_menugrp_drop"),
                                r.style.width = "auto",
                                r.style.height = "auto",
                                r.style.padding = "1px",
                                u.style.width = "auto",
                                u.style.height = "auto",
                                u.style.border = "1px solid #000000",
                                u.style.padding = "2px 4px 3px 4px";
                            else if (void 0 !== y.itp && "ft" == y.itp)
                                3E3 < v && 3027 > v ? r.title = h["3000"].replace("$0$", y.ich.toLowerCase()) : 3027 < v && 3054 > v ? r.title = h["3027"].replace("$0$", y.ich.toLowerCase()) : 3054 < v && 3081 > v ? r.title = h["3054"].replace("$0$", y.ich.toLowerCase()) : 3081 < v && 3108 > v ? r.title = h["3081"].replace("$0$", y.ich.toLowerCase()) : 3108 < v && 3135 > v && (r.title = "" != r.title ? r.title + (" (" + h["3108"].replace("$0$", y.ich.toLowerCase()) + ")") : h["3108"].replace("$0$", y.ich.toLowerCase())),
                                oLink = document.createElement("a"),
                                oLink.style.fontSize = "22px",
                                r.appendChild(oLink),
                                oSpan = document.createElement("span"),
                                oLink.appendChild(oSpan),
                                oSpan.innerHTML = y.ich,
                                r.style.fontFamily = y.font,
                                r.style.width = "auto",
                                r.marginTop = "-1px";
                            else if (u = document.createElement("img"),
                            u.alt = h[v],
                            750 > parseInt(v) ? (u.style.width = "1500px",
                            u.style.height = "220px",
                            u.src = $buuuuu() + "com/imatheq/icons/icons_2x.png") : (u.style.width = "2000px",
                            u.style.height = "327px",
                            u.src = $buuuuu() + "com/imatheq/icons/icons2_2x.png"),
                            u.title = h[v],
                            u.style.marginLeft = y.l + "px",
                            u.style.marginTop = y.t + "px",
                            u.style.marginBottom = y.b + "px",
                            "PARRAY_ROW_SPACING" == y.name || "PARRAY_COL_SPACING" == y.name) {
                                r.style.width = y.w + 8 + "px";
                                r.style.height = y.h + 8 + "px";
                                r.style.padding = "1px";
                                var D = document.createElement("div");
                                D.style.width = y.w + "px";
                                D.style.height = y.h + "px";
                                D.style.border = "1px solid";
                                oSpan = document.createElement("div");
                                oSpan.appendChild(u);
                                D.appendChild(oSpan);
                                r.appendChild(D);
                                r.classList.add("efmase_menugrp_drop")
                            } else
                                r.appendChild(u);
                            u = [v];
                            z = this;
                            d.addEventListener(r, "mousedown", function(F) {
                                return function(G) {
                                    z.clearPanels();
                                    var H = z.handlePaletteBtnOverClick(F[0], G.pageX, G.pageY);
                                    org.imatheq.formulaeditor.FormulaEditor.stopEventPropagation(G);
                                    G.preventDefault();
                                    return H
                                }
                            }(u))
                        }
                    }
                }
        this.redrawMenuBar()
    },
    getPresentation: function(e, h) {
        var l = org.imatheq.formulaeditor.presentation
          , m = null;
        switch (e.tp) {
        case "ch":
            m = new l.Symbol(e.ch);
            break;
        case "sp":
            m = new l.Space(e.width + "em",e.height + "em",e.depth + "em");
            break;
        case "xml":
            l = org.imatheq.formulaeditor.parsing.mathml.MathMLParser;
            var n = {}, p;
            for (p in h)
                n[p] = h[p];
            try {
                var q = "<math xmlns='http://www.w3.org/1998/Math/MathML'>" + e.xml + "</math>"
                  , t = (new l).parseString(q, n, !0);
                if (null !== e.firstRowPos && void 0 !== e.firstRowPos) {
                    t.firstRow = t.children[e.firstRowPos[0]];
                    for (var r = 1; r < e.firstRowPos.length; r++)
                        t.firstRow = t.firstRow.children[e.firstRowPos[r]]
                }
                if (null !== e.defCursorPos && void 0 !== e.defCursorPos) {
                    var u = t.children[e.defCursorPos[0]];
                    for (r = 1; r < e.defCursorPos.length; r++)
                        u = u.children[e.defCursorPos[r]];
                    t.defCursorPos = {
                        row: u,
                        index: 0
                    }
                }
                m = t
            } catch (z) {
                throw Error("Compound symbol: " + this.mathml + "cannot be parsed.");
            }
            break;
        case "mx_d":
        case "mx":
            n = {};
            for (p in h)
                n[p] = h[p];
            n.inMatrix = !0;
            h = [];
            m = e.inputNumRows;
            if (null === m || void 0 === m)
                m = e.num_rows;
            n = e.inputNumCols;
            if (null === n || void 0 === n)
                n = e.num_cols;
            if ("IdentityWith0" == e.data_type)
                for (p = 0; p < m; p++) {
                    q = [];
                    for (t = 0; t < n; t++)
                        r = p == t ? new l.Row(new l.Symbol(e.one)) : new l.Row(new l.Symbol(e.zero)),
                        q.push(r);
                    h[p] = q
                }
            else
                for (p = 0; p < m; p++) {
                    q = [];
                    for (t = 0; t < n; t++)
                        r = new l.Row(new l.BlockSymbol),
                        q.push(r);
                    h[p] = q
                }
            m = new l.Bracket(e.left_bracket);
            n = new l.Bracket(e.right_bracket);
            pArray = new org.imatheq.formulaeditor.presentation.PArray;
            pArray.initialize.apply(pArray, h);
            h = new org.imatheq.formulaeditor.presentation.PArray.Info(pArray);
            void 0 != e.col_align && (h.colalign = [e.col_align]);
            h.populateData(pArray.numrows, pArray.numcols);
            pArray.info = h;
            "" == m.value && "" == n.value ? m = pArray : (h = new l.Row(pArray),
            m = new l.Bracketed(m,h,n),
            m.in_attrbs = "",
            m.in_open = "",
            m.in_close = "",
            m.in_separators = "");
            if (null !== e.firstRowPos && void 0 !== e.firstRowPos)
                for (m.firstRow = m.children[e.firstRowPos[0]],
                r = 1; r < e.firstRowPos.length; r++)
                    m.firstRow = m.firstRow.children[e.firstRowPos[r]];
            if (null !== e.defCursorPos && void 0 !== e.defCursorPos) {
                u = m.children[e.defCursorPos[0]];
                for (r = 1; r < e.defCursorPos.length; r++)
                    u = u.children[e.defCursorPos[r]];
                m.defCursorPos = {
                    row: u,
                    index: 0
                }
            }
        }
        return m
    },
    changeFont: function(e, h) {
        var l = "fontname" == e ? this.editor.getFontFamilyNameIdx() : this.editor.canvas.getFontSizeIdx();
        if (h != l) {
            var m = document.getElementById("efmase_menubar_item_" + e);
            "fontname" == e ? this.editor.setFontFamilyNameIdx(h) : this.editor.canvas.setFontSizeIdx(h);
            var n = "fontname" == e ? this.fontnamePanel : this.fontsizePanel;
            this.isSmallWin() ? "fontsize" == e && (document.getElementsByName("efmase_menubar_item_mobile_" + e)[0].firstChild.innerHTML = n.getValue(h)) : m.innerHTML = n.getValue(h)
        }
        return l
    },
    execPalCmd: function(e, h, l) {
        switch (e.cmd) {
        case "fontname":
        case "fontsize":
            curIdx = this.changeFont(e.cmd, l);
            if (l != curIdx) {
                var m = {
                    row: this.editor.cursor.position.row,
                    index: this.editor.cursor.position.index
                };
                l = m.row.getIndexChain(m.index);
                this.editor.actions.addAction(e.cmd, m, l, l, curIdx, null, 0)
            }
            break;
        case "addrowline":
        case "removerowline":
            m = this.editor.cursor.position;
            var n = m.etb.parray;
            if (Math.floor(n.startIndex / n.row.numcols) == n.row.numrows - 1)
                break;
        case "addcolline":
        case "removecolline":
            if (m = this.editor.cursor.position,
            n = m.etb.parray,
            n.startIndex % n.row.numcols == n.row.numcols - 1)
                break;
        case "rowalign":
        case "colalign":
        case "addframe":
        case "removeframe":
        case "setsolidline":
        case "setdashedline":
        case "toggleequalrows":
        case "toggleequalcols":
        case "rowspacing":
        case "colspacing":
            var p = null
              , q = null
              , t = null
              , r = this.editor;
            m = this.editor.cursor.position;
            n = m.etb.parray;
            var u = {
                row: n.row,
                index: n.index
            };
            l = m.row.getIndexChain(m.index);
            m = m.row.getIndexChain(m.index);
            p = {
                parent: n.row,
                position: u,
                beforePosition: l,
                afterPosition: m,
                startIndex: n.startIndex,
                endIndex: n.endIndex,
                hasSelection: !1
            };
            r.selection.hasSelection && (q = this.editor.selection.getSelectionCopy(),
            t = this.editor.selection.getSelectionCopy());
            var z = n.row.info.copy(n.row.numrows, n.row.numcols);
            h = "rowspacing" == e.cmd || "colspacing" == e.cmd ? h : e.dir;
            n.row.setStylingAttrbs(p, e.cmd, h);
            n.row.info.populateData(n.row.numrows, n.row.numcols);
            n.row.updateEditTabButtons(r);
            h = this.editor.getButtonStatus();
            this.editor.actions.addAction("setPArrayAttrbs", u, l, m, z, null, null, q, t, h, null);
            this.editor.redraw(r.selection.hasSelection);
            break;
        case "insertabove":
        case "insertbelow":
            m = this.editor.cursor.position;
            n = m.etb.parray;
            n.row.actInsertRows(this.editor, e.cmd);
            break;
        case "insertleft":
        case "insertright":
            m = this.editor.cursor.position;
            n = m.etb.parray;
            n.row.actInsertColumns(this.editor, e.cmd);
            break;
        case "deleterows":
            m = this.editor.cursor.position;
            n = m.etb.parray;
            n.row.actDeleteRows(this.editor);
            break;
        case "deletecolumns":
            m = this.editor.cursor.position;
            n = m.etb.parray;
            n.row.actDeleteColumns(this.editor);
            break;
        case "onsymmetric":
        case "offsymmetric":
            t = q = null;
            r = this.editor;
            m = r.cursor.position;
            h = m.etb.bracketed;
            if (h.getSymmetric() && "offsymmetric" == e.cmd || !h.getSymmetric() && "onsymmetric" == e.cmd)
                u = {
                    row: h,
                    index: m.index
                },
                l = m.row.getIndexChain(m.index),
                m = m.row.getIndexChain(m.index),
                z = h.symmetric,
                r.selection.hasSelection && (q = this.editor.selection.getSelectionCopy(),
                t = this.editor.selection.getSelectionCopy()),
                h.setSymmetric("offsymmetric" == e.cmd ? !1 : !0),
                h.updateEditTabButtons(r),
                h = this.editor.getButtonStatus(),
                this.editor.actions.addAction(e.cmd, u, l, m, z, null, null, q, t, h, null),
                this.isMO = !1,
                this.editor.redraw(r.selection.hasSelection);
            break;
        case "kb_backspace":
            this.editor.onBackspace();
            break;
        case "kb_enter":
            return this.editor.presentation.children[0].onNewline(this.editor);
        case "kb_space":
            this.editor.hasFocus() && (this.editor.selection.hasSelection ? this.editor.selection.parent : this.editor.cursor.position.row).charInput(" ", this.editor);
            break;
        case "kb_cut":
        case "kb_copy":
            this.editor.onCutCopy(null, e.cmd.substring(3));
            break;
        case "kb_paste":
            r = this.editor;
            try {
                "https:" != location.protocol ? alert("In order to use this function, you need to access iMathEQ Math Equation Editor with HTTPS.") : null === navigator || void 0 === navigator || null === navigator.clipboard || void 0 === navigator.clipboard ? alert("Your browser/device currently does not support this function.") : navigator.clipboard.readText().then(function(B) {
                    "" != B && r.hasFocus && r.doonpaste(B, !1)
                }, function(B) {
                    alert(B)
                })
            } catch (B) {
                alert(B)
            }
        }
    },
    updateBracket: function(e, h, l) {
        var m = e = null;
        var n = this.editor
          , p = {
            row: this.editor.cursor.position.row,
            index: this.editor.cursor.position.index
        }
          , q = p.row.getIndexChain(p.index)
          , t = p.row.getIndexChain(p.index)
          , r = this.editor.getBracketedObject();
        p.row = r;
        p.index = r.index;
        n.selection.hasSelection && (e = m = n.selection.getSelectionCopy());
        var u = [r.leftBracket.value, r.rightBracket.value, r.leftBracket.onscreen, r.rightBracket.onscreen];
        r.leftBracket.value = h.replace("&lt;", "<").replace("&gt;", ">");
        r.rightBracket.value = l.replace("&lt;", "<").replace("&gt;", ">");
        r.leftBracket.onscreen = null;
        r.rightBracket.onscreen = null;
        document.getElementById("efmase_bracket_palette_btn").innerHTML = h.replace("<", "&lt;").replace(">", "&gt;") + "&nbsp;" + l.replace("<", "&lt;").replace(">", "&gt;");
        h = this.editor.getButtonStatus();
        this.editor.actions.addAction("updateBracket", p, q, t, u, null, null, e, m, h, null);
        this.editor.redraw(n.selection.hasSelection);
        this.editor.clearKBNavi();
        this.editor.keyboardNavi = 4
    },
    handlePaletteBtnOverClick: function(e, h, l) {
        var m = this.editor;
        m.getButtonStatus();
        this.curBtnId = parseInt(e);
        var n = this.symbols[this.curBtnId]
          , p = null !== n.sub_tp && void 0 !== n.sub_tp ? n.sub_tp : "";
        return "mx" == n.tp && "panel" == p ? (this.matrixPanel.show(e, h, l),
        !1) : "bkt_panel" == p ? (this.bracketPanel.show(e, h, l),
        !1) : "PARRAY_ROW_SPACING" == n.name || "PARRAY_COL_SPACING" == n.name ? (this.sizePanel.show(e, h, l),
        !1) : "emx" == n.tp ? (n = this.symbols[this.curBtnId],
        this.execPalCmd(n),
        !1) : this.handlePaletteBtnClick(m, h, l)
    },
    handleTabBtnOverClick: function(e) {
        e != this.curtab && (d.setObjsAttrb(this.curtab, "class", "efmase_palettebutton_focus", "remove"),
        document.getElementById(e + "_BODY").style.display = "",
        document.getElementById(this.curtab + "_BODY").style.display = "none",
        this.curtab = e,
        d.setObjsAttrb(e, "class", "efmase_palettebutton_focus"))
    },
    handlePaletteBtnClick: function(e, h, l) {
        e = this.editor;
        var m = org.imatheq.formulaeditor.presentation
          , n = e.selection
          , p = e.getButtonStatus()
          , q = null
          , t = null;
        e.cursor.hideCursor();
        n.hasSelection && (q = n.getSelectionCopy());
        e.hasFocus() || e.focus();
        var r = {
            row: e.cursor.position.row,
            index: e.cursor.position.index
        }
          , u = {
            row: e.cursor.position.row,
            index: e.cursor.position.index
        }
          , z = r.row.getIndexChain(r.index)
          , B = this.symbols[this.curBtnId];
        if ("menu_b" == B.tp) {
            switch (B.name) {
            case "undo":
                e.actions.undo();
                break;
            case "redo":
                e.actions.redo()
            }
            return !1
        }
        900 <= this.curBtnId && 908 > this.curBtnId && (B.inputNumRows = h,
        B.inputNumCols = l,
        "906" == this.curBtnId || "907" == this.curBtnId) && (B.inputNumRows = Math.max(h, l),
        B.inputNumCols = B.inputNumRows);
        406 == this.curBtnId && (B.xml = "<mfenced open='" + h.replace("<", "&lt;").replace(">", "&gt;") + "' close='" + l.replace("<", "&lt;").replace(">", "&gt;") + "'><mrow/></mfenced>");
        h = "insert";
        var C = null
          , E = null
          , A = r.row
          , w = B.basePosition;
        l = r.row.children.length - r.index;
        if (n.hasSelection) {
            h = "update";
            n.parent instanceof m.PArray && 0 == n.startIndex && n.endIndex == n.parent.children.length && (n = e.selection.getSelectionCopy(),
            n.parent = e.selection.parent.parent,
            n.startIndex = e.selection.parent.index,
            n.endIndex = e.selection.parent.index + 1);
            A = n.parent;
            C = null;
            r.row = n.parent;
            var v = n.startIndex
              , y = n.endIndex;
            if (A instanceof m.Row)
                0 < y && A.children[y - 1]instanceof m.NewlineSymbol && y--,
                u = {
                    row: n.parent,
                    index: v
                },
                null === w || void 0 === w ? (l = A.children.length - y,
                C = A.remove(v, y),
                e.selection.clear(),
                r.index = v) : "i" == w ? (l = A.children.length - y,
                C = A.remove(v, y),
                E = C.copy(),
                r.index = v) : "r" == w ? (h = "insert",
                r.index = v,
                l = A.children.length - v) : "l" == w && (h = "insert",
                r.index = y,
                l = A.children.length - y);
            else if (A instanceof m.Lines)
                w = null,
                u = A,
                l = u.getNumGrandChildren() - y,
                C = u.remove(v, y),
                e.selection.clear(),
                u = e.getPosition(n.startIndexChain),
                r.index = v,
                A = u.row;
            else
                return !1
        } else
            e.cursor.position.row.children[e.cursor.position.index]instanceof m.BlockSymbol && (0 <= u.index - 1 && A.children[u.index - 1]instanceof m.BlockSymbol ? (u.index--,
            C = A.remove(u.index),
            h = "update") : A.children[u.index]instanceof m.BlockSymbol ? (C = A.remove(u.index),
            l--,
            h = "update") : C = null);
        var D = this.getPresentation(B, this.getPresentationContext());
        D.setSymbFontAttrbs(p);
        "ch" == B.tp && D instanceof m.Symbol && (B = org.imatheq.formulaeditor.parsing.expression.RevList[B.ch],
        void 0 !== B && ("script" == B.type ? D.script = !0 : "fraktur" == B.type ? D.fraktur = !0 : "double-struck" == B.type && (D.doubleStruck = !0)));
        B = D.firstRow;
        y = v = null;
        var F = D.defCursorPos;
        e.selection.hasSelection && null !== B && "i" == w && (B instanceof m.Row ? B.children.splice(0, B.children.length, E) : B.parent instanceof m.Row && (v = B.index,
        y = B.parent.children.length - v - 1,
        B.parent.children.splice(B.index, 1, E)));
        E = new m.Row(D);
        E.flatten();
        if (E.children)
            for (var G = 0; G < E.children.length; G++)
                (D = A.insert(u.index, E.children[G], 0 === G)) && u.index++;
        else
            (D = A.insert(u.index, E, !0)) && u.index++;
        A = null;
        e.selection.hasSelection ? ("i" == w && null !== B ? B instanceof m.Row ? A = {
            parent: B,
            startPosition: {
                row: B,
                index: 0
            },
            endPosition: {
                row: B,
                index: B.children.length
            },
            startIndex: 0,
            endIndex: B.children.length,
            startIndexChain: B.getIndexChain(0),
            endIndexChain: B.getIndexChain(B.children.length),
            rightMove: !1,
            dimensions: null
        } : (n = B.parent.children.length - y,
        A = {
            parent: B.parent,
            startPosition: {
                row: B.parent,
                index: v
            },
            endPosition: {
                row: B.parent,
                index: B.parent.children.length - y
            },
            startIndex: v,
            endIndex: B.parent.children.length - y,
            startIndexChain: B.parent.getIndexChain(v),
            endIndexChain: B.getIndexChain(n),
            rightMove: !1,
            dimensions: null
        }) : "r" == w && (n = u.index + n.endIndex - n.startIndex,
        A = {
            parent: u.row,
            startPosition: {
                row: u.row,
                index: u.index
            },
            endPosition: {
                row: u.row,
                index: n
            },
            startIndex: u.index,
            endIndex: n,
            startIndexChain: u.row.getIndexChain(u.index),
            endIndexChain: u.row.getIndexChain(n),
            rightMove: !1,
            dimensions: null
        }),
        null !== A && void 0 !== A && A ? (e.selection.setSelection(A),
        t = e.selection.getSelectionCopy()) : 900 <= this.curBtnId && 908 > this.curBtnId && e.selection.clear()) : e.selection.clear();
        F ? F.row instanceof m.Row ? e.cursor.setPosition(F) : null === A ? e.cursor.setPosition({
            row: F.row.parent,
            index: F.row.index
        }) : e.cursor.setPosition({
            row: A.parent,
            index: A.endIndex
        }) : e.cursor.setPosition(u);
        m = e.cursor.position.row.getIndexChain(e.cursor.position.index);
        e.actions.addAction(h, r, z, m, C, null, l, q, t, p, null);
        900 <= this.curBtnId && 908 > this.curBtnId && this.matrixPanel.hide();
        406 == this.curBtnId && this.bracketPanel.hide();
        (900 > this.curBtnId || 908 <= this.curBtnId) && e.redraw(null !== A);
        this.editor.clearKBNavi();
        this.editor.keyboardNavi = 4;
        return !1
    },
    clearPanels: function() {
        null !== this.activePanel && this.activePanel instanceof org.imatheq.formulaeditor.presentation.SizePanel && this.activePanel.hide()
    }
});
org.imatheq.formulaeditor.Palette.removePalette = function(e) {
    if (null !== e && void 0 !== e) {
        var h;
        for (h = 0; h < a.length; h++)
            a[h] == e && a.splice(h, 1);
        for (h = 0; h < f.length; h++)
            f[h].palette == e && (f[h].palette = null);
        e = null !== e.htmlelement && void 0 !== e.htmlelement ? e.htmlelement : e.canvas.canvas;
        e.parentNode.removeChild(e)
    }
}
;
var g = function() {
    d.loadFont("cmr7", "a");
    d.loadFont("cmmi7", "a");
    d.loadFont("cmex7", "\u00b3");
    d.loadFont("cmey7", "\u00c9");
    d.loadFont("msbm7", "A");
    d.loadFont("imescr7", "A");
    d.loadFont("eufm7", "A");
    !0 === (new org.imatheq.formulaeditor.Options).getOption("debug") && (b = new org.imatheq.debug.Debug,
    b.createDebug());
    for (var e = document.getElementsByTagName("textarea"), h = 0; h < e.length; h++) {
        var l = e[h]
          , m = l.getAttribute("class");
        m ||= l.getAttribute("className");
        m && m.match(/(^| )imatheqformula($| )/) && new org.imatheq.formulaeditor.FormulaEditor(l)
    }
    e = (new org.imatheq.formulaeditor.Options).getOption("onloadFocus");
    if ("string" == typeof e) {
        if (e = document.getElementById(e))
            if (e = org.imatheq.formulaeditor.FormulaEditor.getEditorByTextArea(e))
                e.hasFocus() || e.focus(),
                e.selection.hasSelection || e.cursor.showCursor()
    } else
        1 == e && (f[0].hasFocus() || f[0].focus(),
        f[0].selection.hasSelection || f[0].cursor.showCursor())
};
org.imatheq.formulaeditor.createEditor = function(e, h, l, m, n, p, q, t, r, u, z, B, C, E) {
    !0 === (new org.imatheq.formulaeditor.Options).getOption("debug") && (b = new org.imatheq.debug.Debug,
    b.createDebug());
    e = new org.imatheq.formulaeditor.FormulaEditor(e,null,h,l,m,n,p,q,t,r,u,z,B,C,E);
    new ($extend(org.imatheq.formulaeditor.EventHandler, {
        onpress: function(A) {
            for (var w = !0, v = 0; v < f.length; v++) {
                var y = f[v].onpress(A);
                null !== y && void 0 !== y && !1 === y && (w = !1)
            }
            return w
        },
        onkeydown: function(A) {
            for (var w = !0, v = 0; v < f.length; v++) {
                var y = f[v].onkeydown(A);
                null !== y && void 0 !== y && !1 === y && (w = !1)
            }
            return w
        },
        onkeyup: function(A) {
            for (var w = !0, v = 0; v < f.length; v++) {
                var y = f[v].onkeyup(A);
                null !== y && void 0 !== y && !1 === y && (w = !1)
            }
            return w
        },
        onkeypress: function(A) {
            for (var w = !0, v = 0; v < f.length; v++) {
                var y = f[v].onkeypress(A);
                null !== y && void 0 !== y && !1 === y && (w = !1)
            }
            return w
        },
        oncontextmenu: function(A) {
            for (var w = !0, v = 0; v < f.length; v++) {
                var y = f[v].oncontextmenu(A);
                null !== y && void 0 !== y && !1 === y && (w = !1)
            }
            return w
        },
        onselectstart: function(A) {
            for (var w = !0, v = 0; v < f.length; v++) {
                var y = f[v].onselectstart(A);
                null !== y && void 0 !== y && !1 === y && (w = !1)
            }
            return w
        },
        onmousedown: function(A) {
            var w = this.mouseIsDown = !0, v;
            viewport = d.getViewPort();
            for (v = 0; v < f.length; v++) {
                var y = f[v].onmousedown(A);
                null !== y && void 0 !== y && !1 === y && (w = !1)
            }
            return w
        },
        onmousemove: function(A) {
            var w = !0, v;
            for (v = 0; v < f.length; v++) {
                var y = f[v].onmousemove(A);
                null !== y && void 0 !== y && !1 === y && (w = !1)
            }
            return w
        },
        oncopy: function(A) {
            var w = !0, v;
            for (v = 0; v < f.length; v++) {
                var y = f[v].oncopy(A);
                null !== y && void 0 !== y && !1 === y && (w = !1)
            }
            return w
        },
        onpaste: function(A) {
            var w = !0, v;
            for (v = 0; v < f.length; v++) {
                var y = f[v].onpaste(A);
                null !== y && void 0 !== y && !1 === y && (w = !1)
            }
            return w
        },
        oncut: function(A) {
            var w = !0, v;
            for (v = 0; v < f.length; v++) {
                var y = f[v].oncut(A);
                null !== y && void 0 !== y && !1 === y && (w = !1)
            }
            return w
        },
        onmouseup: function(A) {
            var w = !0;
            this.mouseIsDown = !1;
            var v;
            for (v = 0; v < f.length; v++) {
                var y = f[v].onmouseup(A);
                null !== y && void 0 !== y && !1 === y && (w = !1)
            }
            return w
        },
        onresize: function(A) {
            var w = !0, v;
            for (v = 0; v < f.length; v++) {
                var y = f[v].onresize(A);
                null !== y && void 0 !== y && !1 === y && (w = !1)
            }
            return w
        }
    }));
    h = (new org.imatheq.formulaeditor.Options).getOption("onloadFocus");
    if ("string" == typeof h) {
        if (h = document.getElementById(h))
            if (h = org.imatheq.formulaeditor.FormulaEditor.getEditorByTextArea(h))
                h.hasFocus() || h.focus(),
                h.selection.hasSelection || h.cursor.showCursor()
    } else
        1 == h && (f[0].hasFocus() || f[0].focus(),
        f[0].selection.hasSelection || f[0].cursor.showCursor());
    return e
}
;
if (window.addEventListener)
    org.imatheq.formulaeditor.hasLoaded || document.readyState && "complete" == document.readyState ? g() : window.addEventListener("load", g, !1);
else {
    var k = function() {
        document.body ? document.body.attachEvent && ("complete" == document.readyState ? g() : document.body.attachEvent("onload", g)) : setTimeout(k, 50)
    };
    k()
}
}
)();
(function() {
org.imatheq.formulaeditor.presentation.MatrixPanel = $extend(Object, {
    palette: null,
    padWindow: null,
    oCancel: null,
    keyboardNavi: 1,
    rowNoInput: null,
    colNoInput: null,
    matrixBtnTbody: null,
    initialize: function(f) {
        this.palette = f
    },
    create: function(f) {
        var a = this
          , b = this.palette.editor
          , d = document.createElement("div");
        d.id = "efmase_matrix_pad";
        d.className = "efmase_panel_pad";
        d.style.display = "none";
        var g = document.createElement("div");
        d.appendChild(g);
        g.innerHTML = b.pData.TITLES["2203"];
        oClose = document.createElement("span");
        oClose.id = "matrix_panel_0";
        oClose.className = "efmase_panel_close";
        oClose.innerHTML = "x";
        g.appendChild(oClose);
        org.imatheq.formulaeditor.FormulaEditor.addEventListener(oClose, "mousedown", function(q) {
            a.hide();
            return !1
        });
        var k = document.createElement("div");
        d.appendChild(k);
        var e = document.createElement("table");
        e.id = "efmase_pad_table";
        k.appendChild(e);
        g = document.createElement("table");
        k.appendChild(g);
        var h = document.createElement("tbody");
        g.appendChild(h);
        var l = document.createElement("tr");
        g = document.createElement("td");
        g.className = "efmase_pad_label";
        g.innerHTML = b.pData.TITLES["2204"];
        l.appendChild(g);
        var m = document.createElement("td");
        l.appendChild(m);
        g = document.createElement("input");
        g.id = "matrix_panel_2";
        g.className = "efmase_pad_input";
        g.type = "number";
        g.title = "Rows";
        org.imatheq.formulaeditor.FormulaEditor.addEventListener(g, "focus", function(q) {
            a.keyboardNavi = 2;
            org.imatheq.formulaeditor.FormulaEditor.stopEventPropagation(q)
        });
        m.appendChild(g);
        var n = document.createElement("tr");
        m = document.createElement("td");
        m.className = "efmase_pad_label";
        m.innerHTML = b.pData.TITLES["2204"];
        n.appendChild(m);
        var p = document.createElement("td");
        p.style.verticalAlign = "right";
        n.appendChild(p);
        m = document.createElement("input");
        m.id = "matrix_panel_3";
        m.className = "efmase_pad_input";
        m.type = "number";
        m.title = "Rows";
        org.imatheq.formulaeditor.FormulaEditor.addEventListener(m, "focus", function(q) {
            a.keyboardNavi = 3;
            org.imatheq.formulaeditor.FormulaEditor.stopEventPropagation(q)
        });
        p.appendChild(m);
        h.appendChild(l);
        h.appendChild(n);
        h = document.createElement("div");
        h.style.zindex = "500";
        k.appendChild(h);
        k = document.createElement("input");
        k.id = "matrix_panel_4";
        k.type = "button";
        k.value = b.pData.TITLES["2200"];
        h.appendChild(k);
        k.onclick = function(q) {
            return a.onSubmit(q)
        }
        ;
        k = document.createElement("input");
        k.id = "matrix_panel_5";
        k.type = "button";
        k.value = b.pData.TITLES["2201"];
        h.appendChild(k);
        k.onclick = function(q) {
            a.hide();
            return !1
        }
        ;
        b = document.createElement("tbody");
        e.appendChild(b);
        for (e = 0; 6 > e; e++) {
            h = document.createElement("tr");
            for (l = 0; 6 > l; l++)
                n = document.createElement("td"),
                btnDiv = document.createElement("div"),
                btnDiv.className = "efmase_pad_btn",
                org.imatheq.formulaeditor.FormulaEditor.addEventListener(btnDiv, "mouseover", function(q, t) {
                    return function(r) {
                        return a.onDrag(t[0], q[0])
                    }
                }([l], [e])),
                org.imatheq.formulaeditor.FormulaEditor.addEventListener(btnDiv, "mousedown", function(q) {
                    return a.onSubmit(q)
                }),
                n.appendChild(btnDiv),
                h.appendChild(n);
            b.appendChild(h)
        }
        org.imatheq.formulaeditor.FormulaEditor.addEventListener(d, "mousedown", function(q) {
            org.imatheq.formulaeditor.FormulaEditor.stopEventPropagation(q)
        });
        f.appendChild(d);
        this.padWindow = d;
        this.rowNoInput = g;
        this.colNoInput = m;
        this.oCancel = k;
        this.matrixBtnTbody = b
    },
    show: function(f, a, b) {
        null === this.padWindow && this.create(this.palette.container, a, b);
        document.getElementById("efmase_pad_table").style.display = "";
        document.getElementById("efmase_matrix_pad").style.left = a + "px";
        document.getElementById("efmase_matrix_pad").style.top = b + "px";
        editor.blur();
        this.padWindow.btnId = f;
        this.padWindow.style.display = "block";
        this.padWindow.style.left = "0px";
        a + this.padWindow.offsetWidth > parseInt(window.innerWidth) && (a = parseInt(window.innerWidth) - this.padWindow.offsetWidth);
        this.padWindow.style.left = a + "px";
        this.padWindow.style.top = b + "px";
        editor.isMobile || (editor.textboxHeight = editor.textbox.style.height,
        editor.textbox.style.height = 0);
        this.palette.activePanel = this;
        this.keyboardNavi = 1;
        this.onDrag(1, 1)
    },
    hide: function() {
        this.rowNoInput.blur();
        this.colNoInput.blur();
        this.padWindow.btnId = "";
        this.padWindow.style.display = "none";
        var f = org.imatheq.formulaeditor.FormulaEditor.getFirstEditor();
        f.isMobile || (f.textbox.style.height = f.textboxHeight);
        f.hasFocus() || f.focus();
        f.redraw();
        f.keyboardNavi = 4;
        this.palette.activePanel === this && (this.palette.activePanel = null)
    },
    onDrag: function(f, a) {
        if ("906" == this.padWindow.btnId || "907" == this.padWindow.btnId)
            a = f = Math.max(f, a);
        for (var b = 0; b < this.matrixBtnTbody.childNodes.length; b++)
            for (var d = 0; d < this.matrixBtnTbody.childNodes[b].childNodes.length; d++)
                this.matrixBtnTbody.childNodes[b].childNodes[d].firstChild.style.backgroundColor = b <= f && d <= a ? "#778E9A" : "#fff";
        this.rowNoInput.value = f + 1;
        this.colNoInput.value = a + 1
    },
    onSubmit: function(f) {
        if ("906" == this.padWindow.btnId || "907" == this.padWindow.btnId)
            this.rowNoInput.value = Math.max(this.rowNoInput.value, this.colNoInput.value) + 1,
            this.colNoInput.value = this.rowNoInput.value;
        this.palette.handlePaletteBtnClick(this.palette.editor, this.rowNoInput.value, this.colNoInput.value);
        org.imatheq.formulaeditor.FormulaEditor.stopEventPropagation(f);
        f.preventDefault();
        return !1
    },
    onkeydown: function(f) {
        if (9 == f.keyCode)
            return this.clearKBNavi("matrix_panel_"),
            f.shiftKey ? --this.keyboardNavi : this.keyboardNavi = ++this.keyboardNavi,
            -1 == this.keyboardNavi && (this.keyboardNavi = 5),
            6 == this.keyboardNavi && (this.keyboardNavi = 0),
            this.setKBNavi("matrix_panel_", f),
            !1;
        if (13 == f.keyCode)
            return activeElm = document.activeElement,
            "input" == activeElm.localName.toLowerCase() && "cancel" == activeElm.value.toLowerCase() || "span" == activeElm.localName.toLowerCase() && "x" == activeElm.value.toLowerCase() ? (this.hide(),
            org.imatheq.formulaeditor.FormulaEditor.eventPreventDefault(f),
            f.preventDefault(),
            !1) : this.onSubmit(f);
        if (1 == this.keyboardNavi && "matrix_panel_2" != document.activeElement.id && "matrix_panel_3" != document.activeElement.id)
            switch (f.keyCode) {
            case 37:
                return this.kbNaviMove("left"),
                !1;
            case 38:
                return this.kbNaviMove("up"),
                !1;
            case 39:
                return this.kbNaviMove("right"),
                !1;
            case 40:
                return this.kbNaviMove("down"),
                !1
            }
    },
    kbNaviMove: function(f) {
        if (1 == this.keyboardNavi) {
            var a = this.rowNoInput.value - 1
              , b = this.colNoInput.value - 1;
            0 < b && "left" == f && b--;
            5 > b && "right" == f && b++;
            0 < a && "up" == f && a--;
            5 > a && "down" == f && a++;
            this.onDrag(a, b)
        }
        return !1
    },
    setKBNavi: function(f, a) {
        1 != this.keyboardNavi && (f = document.getElementById(f + this.keyboardNavi),
        f.focus(),
        0 == this.keyboardNavi && f.classList.add("efmase_panel_close_hover"));
        return !1
    },
    clearKBNavi: function(f) {
        1 != this.keyboardNavi && (f = document.getElementById(f + this.keyboardNavi),
        f.blur(),
        0 == this.keyboardNavi && f.classList.remove("efmase_panel_close_hover"));
        return !1
    }
})
}
)();
(function() {
org.imatheq.formulaeditor.presentation.BracketPanel = $extend(Object, {
    palette: null,
    padWindow: null,
    oCancel: null,
    keyboardNavi: 1,
    bracketBtnTbody: null,
    row: 0,
    col: 0,
    titleElm: null,
    initialize: function(f) {
        this.palette = f
    },
    create: function(f) {
        var a = this
          , b = this.palette.editor
          , d = document.createElement("div");
        d.id = "efmase_bracket_pad";
        brackets = org.imatheq.formulaeditor.parsing.expression.BracketList;
        d.className = "efmase_panel_pad";
        var g = document.createElement("div");
        d.appendChild(g);
        var k = document.createElement("span");
        g.appendChild(k);
        this.titleElm = k;
        oClose = document.createElement("span");
        g.appendChild(oClose);
        oClose.id = "bracket_panel_0";
        oClose.className = "efmase_panel_close";
        oClose.innerHTML = "x";
        org.imatheq.formulaeditor.FormulaEditor.addEventListener(oClose, "mousedown", function(n) {
            a.hide();
            org.imatheq.formulaeditor.FormulaEditor.stopEventPropagation(n);
            n.preventDefault();
            return !1
        });
        k = document.createElement("div");
        d.appendChild(k);
        g = document.createElement("table");
        g.id = "efmase_bracket_pad_table";
        k.appendChild(g);
        var e = document.createElement("div");
        e.style.zindex = "500";
        k.appendChild(e);
        k = document.createElement("input");
        k.type = "button";
        k.value = b.pData.TITLES["2200"];
        k.id = "bracket_panel_2";
        e.appendChild(k);
        k.onclick = function(n) {
            return a.onSubmit(n)
        }
        ;
        k = document.createElement("input");
        k.type = "button";
        k.value = b.pData.TITLES["2201"];
        k.id = "bracket_panel_3";
        e.appendChild(k);
        k.onclick = function(n) {
            a.hide();
            org.imatheq.formulaeditor.FormulaEditor.eventPreventDefault(event);
            event.preventDefault();
            return !1
        }
        ;
        b = document.createElement("tbody");
        g.appendChild(b);
        for (e = 0; e < brackets.length / 2 + 1; e++) {
            for (var h = document.createElement("tr"), l = 0; 2 > l; l++) {
                var m = document.createElement("td");
                btnDiv = document.createElement("div");
                btnDiv.className = "efmase_bracket_pad_btn";
                e < brackets.length / 2 ? (btnDiv.innerHTML = brackets[2 * e + l],
                btnDiv.id = "efmase_bracket_" + brackets[2 * e + l]) : (btnDiv.innerHTML = "&nbsp;",
                btnDiv.id = "efmase_bracket_");
                org.imatheq.formulaeditor.FormulaEditor.addEventListener(btnDiv, "mousedown", function(n, p) {
                    return function(q) {
                        return a.onSelect(p[0], n[0], q)
                    }
                }([l], [e]));
                m.appendChild(btnDiv);
                h.appendChild(m)
            }
            b.appendChild(h)
        }
        g.appendChild(b);
        org.imatheq.formulaeditor.FormulaEditor.addEventListener(d, "mousedown", function(n) {
            org.imatheq.formulaeditor.FormulaEditor.stopEventPropagation(n)
        });
        f.appendChild(d);
        this.padWindow = d;
        this.oCancel = k;
        this.bracketBtnTbody = b
    },
    show: function(f, a, b, d) {
        var g = "406" == f ? "create" : "edit";
        null !== this.padWindow && void 0 !== this.padWindow || this.create(this.palette.container);
        document.getElementById("efmase_bracket_pad_table").style.display = "";
        document.getElementById("efmase_bracket_pad").style.left = a + "px";
        document.getElementById("efmase_bracket_pad").style.top = b + "px";
        d = this.palette.editor;
        d.blur();
        this.padWindow.btnId = f;
        this.titleElm.innerHTML = d.pData.TITLES[f];
        f = ["(", ")"];
        "edit" == g && (f = d.getBracketedObject(),
        f = ["" == f.leftBracket.value ? "&nbsp;" : f.leftBracket.value, "" == f.rightBracket.value ? "&nbsp;" : f.rightBracket.value]);
        g = document.getElementById("efmase_bracket_pad_table").firstChild;
        for (var k = 0; k < g.childNodes.length; k++) {
            var e = g.childNodes[k].childNodes[0].firstChild;
            e.innerText != f[0] && e.innerHTML != f[0] ? e.classList.remove("efmase_bracket_panel_sel") : (this.row = k,
            this.col = 0,
            e.classList.add("efmase_bracket_panel_sel"));
            e = g.childNodes[k].childNodes[1].firstChild;
            e.innerText != f[1] && e.innerHTML != f[1] ? e.classList.remove("efmase_bracket_panel_sel") : e.classList.add("efmase_bracket_panel_sel")
        }
        this.padWindow.style.display = "block";
        this.padWindow.style.left = "0px";
        a + this.padWindow.offsetWidth > parseInt(window.innerWidth) && (a = parseInt(window.innerWidth) - this.padWindow.offsetWidth);
        this.padWindow.style.left = a + "px";
        this.padWindow.style.top = b + "px";
        d.isMobile || (d.textboxHeight = d.textbox.style.height,
        d.textbox.style.height = 0);
        this.palette.activePanel = this;
        this.keyboardNavi = 1
    },
    hide: function() {
        this.padWindow.btnId = "";
        this.padWindow.style.display = "none";
        var f = this.palette.editor;
        f.textbox.style.height = f.textboxHeight;
        f.hasFocus() || (f.focus(),
        f.selection.hasSelection || f.cursor.showCursor());
        f.keyboardNavi = 4;
        this.palette.activePanel === this && (this.palette.activePanel = null);
        this.bracketBtnTbody.childNodes[this.row].childNodes[this.col].firstChild.classList.remove("efmase_common_panel_hover")
    },
    onSubmit: function(f) {
        var a = this.palette.editor
          , b = document.getElementsByClassName("efmase_bracket_panel_sel");
        2 != b.length && alert("Please select left bracket and right bracket");
        b = null === b[0].parentNode.nextSibling ? [b[1].innerHTML, b[0].innerHTML] : [b[0].innerHTML, b[1].innerHTML];
        "&nbsp;" == b[0] && (b[0] = "");
        "&nbsp;" == b[1] && (b[1] = "");
        "406" == this.padWindow.btnId ? ("" != b[0] || "" != b[1]) && this.palette.handlePaletteBtnClick(a, b[0], b[1]) : this.palette.updateBracket(this.padWindow.btnId, b[0], b[1]);
        this.hide();
        org.imatheq.formulaeditor.FormulaEditor.eventPreventDefault(f);
        f.preventDefault();
        return !1
    },
    onSelect: function(f, a, b) {
        for (var d = 0; d < this.bracketBtnTbody.childNodes.length; d++) {
            var g = this.bracketBtnTbody.childNodes[d].childNodes[a].firstChild;
            d != f && g.classList.contains("efmase_bracket_panel_sel") ? (g.classList.remove("efmase_bracket_panel_sel"),
            g.classList.contains("efmase_common_panel_hover") && g.classList.remove("efmase_common_panel_hover")) : d != f || g.classList.contains("efmase_bracket_panel_sel") || (g.classList.add("efmase_bracket_panel_sel"),
            g.classList.contains("efmase_common_panel_hover") && g.classList.remove("efmase_common_panel_hover"))
        }
        org.imatheq.formulaeditor.FormulaEditor.eventPreventDefault(b);
        b.preventDefault();
        return !1
    },
    onkeydown: function(f) {
        if (9 == f.keyCode)
            return this.clearKBNavi("bracket_panel_"),
            f.shiftKey ? --this.keyboardNavi : this.keyboardNavi = ++this.keyboardNavi,
            -1 == this.keyboardNavi && (this.keyboardNavi = 3),
            4 == this.keyboardNavi && (this.keyboardNavi = 0),
            this.setKBNavi("bracket_panel_", f),
            !1;
        if (13 == f.keyCode)
            return activeElm = document.activeElement,
            "input" == activeElm.localName.toLowerCase() && "cancel" == activeElm.value.toLowerCase() || "span" == activeElm.localName.toLowerCase() && "x" == activeElm.value.toLowerCase() ? (this.hide(),
            org.imatheq.formulaeditor.FormulaEditor.eventPreventDefault(f),
            f.preventDefault(),
            !1) : this.onSubmit(f);
        if (1 == this.keyboardNavi)
            switch (f.keyCode) {
            case 37:
                return this.kbNaviMove("left"),
                !1;
            case 38:
                return this.kbNaviMove("up"),
                !1;
            case 39:
                return this.kbNaviMove("right"),
                !1;
            case 40:
                return this.kbNaviMove("down"),
                !1
            }
    },
    onkeypress: function(f) {
        if (1 == this.keyboardNavi && 32 == f.charCode)
            this.onSelect(this.row, this.col, f)
    },
    kbNaviMove: function(f) {
        if (1 == this.keyboardNavi) {
            var a = this.bracketBtnTbody.childNodes[this.row].childNodes[this.col].firstChild;
            a.classList.contains("efmase_bracket_panel_sel") || a.classList.remove("efmase_common_panel_hover");
            0 < this.col && "left" == f && this.col--;
            0 == this.col && "right" == f && this.col++;
            0 < this.row && "up" == f && this.row--;
            this.row < this.bracketBtnTbody.childNodes.length - 1 && "down" == f && this.row++;
            a = this.bracketBtnTbody.childNodes[this.row].childNodes[this.col].firstChild;
            a.classList.contains("efmase_bracket_panel_sel") || a.classList.add("efmase_common_panel_hover")
        }
        return !1
    },
    setKBNavi: function(f, a) {
        1 != this.keyboardNavi && (f = document.getElementById(f + this.keyboardNavi),
        f.focus(),
        0 == this.keyboardNavi && f.classList.add("efmase_panel_close_hover"));
        return !1
    },
    clearKBNavi: function(f) {
        1 != this.keyboardNavi && (f = document.getElementById(f + this.keyboardNavi),
        f.blur(),
        0 == this.keyboardNavi && f.classList.remove("efmase_panel_close_hover"));
        return !1
    }
})
}
)();
(function() {
org.imatheq.formulaeditor.presentation.SizePanel = $extend(Object, {
    palette: null,
    padWindow: null,
    bracketBtnTbody: null,
    sizes: null,
    numRows: null,
    numCols: 2,
    row: -1,
    col: -1,
    titleElm: null,
    initialize: function(f, a, b) {
        this.palette = f;
        this.sizes = a;
        null !== b && void 0 !== b && (this.numCols = b);
        this.numRows = this.sizes.length / this.numCols
    },
    getValue: function(f) {
        return this.sizes[f]
    },
    create: function(f) {
        var a = this
          , b = document.createElement("div");
        b.id = "efmase_size_pad";
        b.className = "efmase_panel_pad";
        var d = document.createElement("div");
        b.appendChild(d);
        this.titleElm = d;
        var g = document.createElement("div");
        b.appendChild(g);
        d = document.createElement("table");
        d.id = "efmase_size_pad_table";
        g.appendChild(d);
        g = document.createElement("tbody");
        d.appendChild(g);
        for (var k = 0; k < this.numRows; k++) {
            for (var e = document.createElement("tr"), h = 0; h < this.numCols; h++) {
                var l = this.sizes[k * this.numCols + h]
                  , m = document.createElement("td");
                btnDiv = document.createElement("div");
                btnDiv.className = "efmase_bracket_pad_btn";
                btnDiv.innerHTML = l;
                org.imatheq.formulaeditor.FormulaEditor.addEventListener(btnDiv, "mousedown", function(n, p) {
                    return function(q) {
                        return a.onSubmit(n[0], p[0], q)
                    }
                }([k], [h]));
                m.appendChild(btnDiv);
                e.appendChild(m)
            }
            g.appendChild(e)
        }
        d.appendChild(g);
        org.imatheq.formulaeditor.FormulaEditor.addEventListener(b, "mousedown", function(n) {
            org.imatheq.formulaeditor.FormulaEditor.stopEventPropagation(n)
        });
        f.appendChild(b);
        this.padWindow = this.sizePad = b;
        this.sizeBtnTbody = g
    },
    show: function(f, a, b, d) {
        this.col = this.row = -1;
        null !== this.padWindow && void 0 !== this.padWindow || this.create(this.palette.container);
        this.padWindow.style.display = "block";
        null !== d && void 0 !== d && (this.row = Math.floor(d / this.numCols),
        this.col = 1 == this.numCols ? 0 : d % this.numCols);
        document.getElementById("efmase_size_pad_table").style.display = "";
        document.getElementById("efmase_size_pad").style.left = a + "px";
        document.getElementById("efmase_size_pad").style.top = b + "px";
        d = this.palette.editor;
        d.blur();
        this.padWindow.btnId = f;
        this.titleElm.innerHTML = "&nbsp;&nbsp;" + d.pData.TITLES[f] + "&nbsp;&nbsp;";
        -1 !== this.row && (cell = this.sizeBtnTbody.childNodes[this.row].childNodes[this.col].firstChild,
        cell.classList.add("efmase_common_panel_hover"));
        this.padWindow.style.left = "0px";
        a + this.padWindow.offsetWidth > parseInt(window.innerWidth) && (a = parseInt(window.innerWidth) - this.padWindow.offsetWidth);
        this.padWindow.style.left = a + "px";
        this.padWindow.style.top = b + "px";
        d.isMobile || (d.textboxHeight = d.textbox.style.height,
        d.textbox.style.height = 0);
        this.palette.activePanel = this
    },
    hide: function() {
        this.padWindow.btnId = "";
        this.padWindow.style.display = "none";
        var f = this.palette.editor;
        f.isMobile || (f.textbox.style.height = f.textboxHeight);
        f.hasFocus() || (f.focus(),
        f.selection.hasSelection || f.cursor.showCursor());
        f.keyboardNavi = 4;
        f.redraw();
        this.palette.activePanel === this && (this.palette.activePanel = null);
        -1 !== this.row && (cell = this.sizeBtnTbody.childNodes[this.row].childNodes[this.col].firstChild,
        cell.classList.remove("efmase_common_panel_hover"))
    },
    onSubmit: function(f, a, b) {
        if (0 <= f && 0 <= a) {
            var d = this.sizeBtnTbody.childNodes[f].childNodes[a].firstChild;
            d.classList.remove("efmase_common_panel_hover");
            this.palette.execPalCmd(this.palette.symbols[this.padWindow.btnId], d.innerHTML, f * this.numCols + a)
        }
        this.hide();
        org.imatheq.formulaeditor.FormulaEditor.eventPreventDefault(b);
        b.preventDefault();
        return !1
    },
    onkeydown: function(f) {
        if (13 == f.keyCode)
            return this.onSubmit(this.row, this.col, f);
        switch (f.keyCode) {
        case 37:
            return this.kbNaviMove("left"),
            !1;
        case 38:
            return this.kbNaviMove("up"),
            !1;
        case 39:
            return this.kbNaviMove("right"),
            !1;
        case 40:
            return this.kbNaviMove("down"),
            !1
        }
    },
    onkeypress: function(f) {
        return !1
    },
    kbNaviMove: function(f) {
        if (-1 == this.row && -1 == this.col)
            this.col = this.row = 0;
        else {
            var a = this.sizeBtnTbody.childNodes[this.row].childNodes[this.col].firstChild;
            a.classList.contains("efmase_common_panel_hover") && a.classList.remove("efmase_common_panel_hover");
            0 < this.col && "left" == f && this.col--;
            this.col < this.numCols - 1 && "right" == f && this.col++;
            0 < this.row && "up" == f && this.row--;
            this.row < this.sizeBtnTbody.childNodes.length - 1 && "down" == f && this.row++
        }
        a = this.sizeBtnTbody.childNodes[this.row].childNodes[this.col].firstChild;
        a.classList.add("efmase_common_panel_hover");
        return !1
    }
})
}
)();
(function() {
color_palette = [[{
    t: "black",
    rgb: [0, 0, 0]
}, {
    t: "dark gray 4",
    rgb: [67, 67, 67]
}, {
    t: "dark gray 3",
    rgb: [102, 102, 102]
}, {
    t: "dark gray 2",
    rgb: [153, 153, 153]
}, {
    t: "dark gray 1",
    rgb: [183, 183, 183]
}, {
    t: "gray",
    rgb: [204, 204, 204]
}, {
    t: "light gray 1",
    rgb: [217, 217, 217]
}, {
    t: "light gray 2",
    rgb: [239, 239, 239]
}, {
    t: "light gray 3",
    rgb: [243, 243, 243]
}, {
    t: "white",
    rgb: [255, 255, 255]
}], [{
    t: "red berry",
    rgb: [152, 0, 0]
}, {
    t: "red",
    rgb: [255, 0, 0]
}, {
    t: "orange",
    rgb: [255, 153, 0]
}, {
    t: "yellow",
    rgb: [255, 255, 0]
}, {
    t: "green",
    rgb: [0, 255, 0]
}, {
    t: "cyan",
    rgb: [0, 255, 255]
}, {
    t: "cornflower blue",
    rgb: [74, 134, 232]
}, {
    t: "blue",
    rgb: [0, 0, 255]
}, {
    t: "purple",
    rgb: [153, 0, 255]
}, {
    t: "magenta",
    rgb: [255, 0, 255]
}], [{
    t: "light red berry 3",
    rgb: [230, 184, 175]
}, {
    t: "light red 3",
    rgb: [244, 204, 204]
}, {
    t: "light orange 3",
    rgb: [252, 229, 205]
}, {
    t: "light yellow 3",
    rgb: [255, 242, 204]
}, {
    t: "light green 3",
    rgb: [217, 234, 211]
}, {
    t: "light cyan 3",
    rgb: [208, 224, 227]
}, {
    t: "light cornflower blue 3",
    rgb: [201, 218, 248]
}, {
    t: "light blue 3",
    rgb: [207, 226, 243]
}, {
    t: "light purple 3",
    rgb: [217, 210, 233]
}, {
    t: "light magenta 3",
    rgb: [234, 209, 220]
}], [{
    t: "light red berry 2",
    rgb: [221, 126, 107]
}, {
    t: "light red 2",
    rgb: [234, 153, 153]
}, {
    t: "light orange 2",
    rgb: [249, 203, 156]
}, {
    t: "light yellow 2",
    rgb: [255, 229, 153]
}, {
    t: "light green 2",
    rgb: [182, 215, 168]
}, {
    t: "light cyan 2",
    rgb: [162, 196, 201]
}, {
    t: "light cornflower blue 2",
    rgb: [164, 194, 244]
}, {
    t: "light blue 2",
    rgb: [159, 197, 232]
}, {
    t: "light purple 2",
    rgb: [180, 167, 214]
}, {
    t: "light magenta 2",
    rgb: [213, 166, 189]
}], [{
    t: "light red berry 1",
    rgb: [204, 65, 37]
}, {
    t: "light red 1",
    rgb: [224, 102, 102]
}, {
    t: "light orange 1",
    rgb: [246, 178, 107]
}, {
    t: "light yellow 1",
    rgb: [255, 217, 102]
}, {
    t: "light green 1",
    rgb: [147, 196, 125]
}, {
    t: "light cyan 1",
    rgb: [118, 165, 175]
}, {
    t: "light cornflower blue 1",
    rgb: [109, 158, 235]
}, {
    t: "light blue 1",
    rgb: [111, 168, 220]
}, {
    t: "light purple 1",
    rgb: [142, 124, 195]
}, {
    t: "light magenta 1",
    rgb: [194, 123, 160]
}], [{
    t: "dark red berry 1",
    rgb: [166, 28, 0]
}, {
    t: "dark red 1",
    rgb: [204, 0, 0]
}, {
    t: "dark orange 1",
    rgb: [230, 145, 56]
}, {
    t: "dark yellow 1",
    rgb: [241, 194, 50]
}, {
    t: "dark green 1",
    rgb: [106, 168, 79]
}, {
    t: "dark cyan 1",
    rgb: [69, 129, 142]
}, {
    t: "dark cornflower blue 1",
    rgb: [60, 120, 216]
}, {
    t: "dark blue 1",
    rgb: [61, 133, 198]
}, {
    t: "dark purple 1",
    rgb: [103, 78, 167]
}, {
    t: "dark magenta 1",
    rgb: [166, 77, 121]
}], [{
    t: "dark red berry 2",
    rgb: [133, 32, 12]
}, {
    t: "dark red 2",
    rgb: [153, 0, 0]
}, {
    t: "dark orange 2",
    rgb: [180, 95, 6]
}, {
    t: "dark yellow 2",
    rgb: [191, 144, 0]
}, {
    t: "dark green 2",
    rgb: [56, 118, 29]
}, {
    t: "dark cyan 2",
    rgb: [19, 79, 92]
}, {
    t: "dark cornflower blue 2",
    rgb: [17, 85, 204]
}, {
    t: "dark blue 2",
    rgb: [11, 83, 148]
}, {
    t: "dark purple 2",
    rgb: [53, 28, 117]
}, {
    t: "dark magenta 2",
    rgb: [116, 27, 71]
}], [{
    t: "dark red berry 3",
    rgb: [91, 15, 0]
}, {
    t: "dark red 3",
    rgb: [102, 0, 0]
}, {
    t: "dark orange 3",
    rgb: [120, 63, 4]
}, {
    t: "dark yellow 3",
    rgb: [127, 96, 0]
}, {
    t: "dark green 3",
    rgb: [39, 78, 19]
}, {
    t: "dark cyan 3",
    rgb: [12, 52, 61]
}, {
    t: "dark cornflower blue 3",
    rgb: [28, 69, 135]
}, {
    t: "dark blue 3",
    rgb: [7, 55, 99]
}, {
    t: "dark purple 3",
    rgb: [32, 18, 77]
}, {
    t: "dark magenta 3",
    rgb: [76, 17, 48]
}]];
org.imatheq.formulaeditor.presentation.ColorPanel = $extend(Object, {
    palette: null,
    padWindow: null,
    oCancel: null,
    keyboardNavi: 1,
    colorCodeInput: null,
    colorBtnTbody: null,
    row: 0,
    col: 0,
    curRow: 0,
    curCol: 0,
    titleElm: null,
    initialize: function(f) {
        this.palette = f
    },
    create: function(f) {
        var a = this
          , b = this.palette.editor
          , d = document.createElement("div");
        d.id = "efmase_color_pad";
        d.className = "efmase_panel_pad";
        d.style.display = "none";
        var g = document.createElement("div");
        d.appendChild(g);
        var k = document.createElement("span");
        g.appendChild(k);
        this.titleElm = k;
        oClose = document.createElement("span");
        g.appendChild(oClose);
        oClose.id = "color_panel_0";
        oClose.className = "efmase_panel_close";
        oClose.innerHTML = "x";
        org.imatheq.formulaeditor.FormulaEditor.addEventListener(oClose, "mousedown", function(q) {
            a.hide();
            org.imatheq.formulaeditor.FormulaEditor.stopEventPropagation(q);
            q.preventDefault();
            return !1
        });
        var e = document.createElement("div");
        d.appendChild(e);
        g = document.createElement("table");
        g.id = "efmase_color_pad_table";
        e.appendChild(g);
        k = document.createElement("table");
        e.appendChild(k);
        var h = document.createElement("tbody");
        k.appendChild(h);
        var l = document.createElement("tr");
        k = document.createElement("td");
        k.className = "efmase_pad_label";
        k.innerHTML = b.pData.TITLES["2202"];
        l.appendChild(k);
        var m = document.createElement("td");
        l.appendChild(m);
        k = document.createElement("input");
        k.className = "efmase_pad_input";
        k.id = "color_panel_2";
        k.value = "#000000";
        k.row = 0;
        k.col = 0;
        k.style.width = "80px";
        k.type = "text";
        k.title = "Input color code, like #00000";
        org.imatheq.formulaeditor.FormulaEditor.addEventListener(k, "focus", function(q) {
            a.keyboardNavi = 2;
            org.imatheq.formulaeditor.FormulaEditor.stopEventPropagation(q)
        });
        m.appendChild(k);
        h.appendChild(l);
        h = document.createElement("div");
        h.style.zindex = "500";
        e.appendChild(h);
        e = document.createElement("input");
        e.type = "button";
        e.value = b.pData.TITLES["2200"];
        e.id = "color_panel_3";
        h.appendChild(e);
        e.onclick = function(q) {
            a.onSubmit(q);
            a.hide();
            org.imatheq.formulaeditor.FormulaEditor.stopEventPropagation(q);
            q.preventDefault();
            return !1
        }
        ;
        e = document.createElement("input");
        e.type = "button";
        e.value = b.pData.TITLES["2201"];
        e.id = "color_panel_4";
        h.appendChild(e);
        e.onclick = function(q) {
            a.hide();
            org.imatheq.formulaeditor.FormulaEditor.stopEventPropagation(q);
            q.preventDefault();
            return !1
        }
        ;
        b = document.createElement("tbody");
        g.appendChild(b);
        for (h = 0; 8 > h; h++) {
            3 > h && (l = document.createElement("tr"),
            b.appendChild(l),
            m = document.createElement("td"),
            m.height = "5px",
            l.appendChild(m));
            l = document.createElement("tr");
            for (var n = 0; 10 > n; n++) {
                m = document.createElement("td");
                btnDiv = document.createElement("div");
                btnDiv.className = "efmase_pad_btn";
                btnDiv.id = "efmase_color_" + h + "_" + n;
                var p = color_palette[h][n].rgb;
                btnDiv.style.backgroundColor = "rgb(" + p[0].toString() + "," + p[1].toString() + "," + p[2].toString() + ")";
                org.imatheq.formulaeditor.FormulaEditor.addEventListener(btnDiv, "mousedown", function(q, t) {
                    return function(r) {
                        var u = color_palette[t[0]][q[0]].rgb;
                        a.colorCodeInput.value = "#" + ("0" + u[0].toString(16)).slice(-2) + ("0" + u[1].toString(16)).slice(-2) + ("0" + u[2].toString(16)).slice(-2);
                        a.onSubmit(r);
                        a.hide();
                        org.imatheq.formulaeditor.FormulaEditor.stopEventPropagation(r);
                        r.preventDefault();
                        return !1
                    }
                }([n], [h]));
                m.appendChild(btnDiv);
                l.appendChild(m)
            }
            b.appendChild(l)
        }
        g.appendChild(b);
        f.appendChild(d);
        this.padWindow = d;
        this.colorCodeInput = k;
        this.oCancel = e;
        this.colorBtnTbody = b
    },
    show: function(f, a, b) {
        null !== this.padWindow && void 0 !== this.padWindow || this.create(this.palette.container);
        this.padWindow.style.display = "block";
        document.getElementById("efmase_color_pad_table").style.display = "";
        document.getElementById("efmase_color_pad").style.left = f + "px";
        document.getElementById("efmase_color_pad").style.top = a + "px";
        b = this.palette.editor;
        this.titleElm.innerHTML = "&nbsp;&nbsp;" + b.pData.TITLES["106"] + "&nbsp;&nbsp;";
        this.colorCodeInput.value = b.getMathColor();
        this.hlightColorBtn();
        this.padWindow.style.left = "0px";
        f + this.padWindow.offsetWidth > parseInt(window.innerWidth) && (f = parseInt(window.innerWidth) - this.padWindow.offsetWidth);
        this.padWindow.style.left = f + "px";
        this.padWindow.style.top = a + "px";
        b.blur();
        b.isMobile || (b.textboxHeight = b.textbox.style.height,
        b.textbox.style.height = 0);
        this.palette.activePanel = this;
        this.keyboardNavi = 1
    },
    hide: function() {
        this.colorCodeInput.blur();
        this.padWindow.style.display = "none";
        var f = this.palette.editor;
        f.isMobile || (f.textbox.style.height = f.textboxHeight);
        f.hasFocus() || f.focus();
        f.selection.hasSelection || f.cursor.showCursor();
        f.redraw();
        f.keyboardNavi = 4;
        this.palette.activePanel === this && (this.palette.activePanel = null)
    },
    onSubmit: function(f) {
        var a = this.colorCodeInput.value
          , b = org.imatheq.formulaeditor.presentation
          , d = {
            mathcolor: a
        }
          , g = this.palette.editor;
        if (g.selection.hasSelection)
            g.selection.setSelSymbFontAttrbs(d);
        else {
            var k = g.cursor.position.row.children[g.cursor.position.index];
            k instanceof b.BlockSymbol && k.setSymbFontAttrbs(d)
        }
        g.setButtonStatus({
            mathcolor: a
        });
        this.hide();
        org.imatheq.formulaeditor.FormulaEditor.eventPreventDefault(f);
        f.preventDefault();
        return !1
    },
    hlightColorBtn: function() {
        var f = parseInt(this.colorCodeInput.value.slice(1), 16)
          , a = f >> 16 & 255
          , b = f >> 8 & 255;
        f &= 255;
        var d = document.getElementById("efmase_color_" + this.row + "_" + this.col);
        null !== d && void 0 !== d && (d.parentNode.classList.remove("efmase_color_pad_table_sel"),
        this.col = this.row = 255);
        for (d = 0; 8 > d; d++)
            for (var g = 0; 10 > g; g++) {
                var k = color_palette[d][g].rgb;
                if (k[0] == a && k[1] == b && k[2] == f) {
                    document.getElementById("efmase_color_" + d + "_" + g).parentNode.classList.add("efmase_color_pad_table_sel");
                    this.row = d;
                    this.col = g;
                    this.curRow = d;
                    this.curCol = g;
                    break
                }
            }
    },
    setMathcolor: function() {
        null !== this.padWindow && void 0 !== this.padWindow || this.create(this.palette.container);
        this.colorCodeInput.value = colorCode;
        this.hlightColorBtn()
    },
    getMathcolor: function() {
        return null === this.padWindow || void 0 === this.padWindow ? "#000000" : this.colorCodeInput.value
    },
    onkeydown: function(f) {
        if (9 == f.keyCode)
            return this.clearKBNavi("color_panel_"),
            f.shiftKey ? --this.keyboardNavi : this.keyboardNavi = ++this.keyboardNavi,
            -1 == this.keyboardNavi && (this.keyboardNavi = 4),
            5 == this.keyboardNavi && (this.keyboardNavi = 0),
            this.setKBNavi("color_panel_", f),
            !1;
        if (13 == f.keyCode)
            return activeElm = document.activeElement,
            "input" == activeElm.localName.toLowerCase() && "cancel" == activeElm.value.toLowerCase() || "span" == activeElm.localName.toLowerCase() && "x" == activeElm.value.toLowerCase() ? (this.hide(),
            org.imatheq.formulaeditor.FormulaEditor.eventPreventDefault(f),
            f.preventDefault(),
            !1) : this.onSubmit(f);
        if (1 == this.keyboardNavi && "color_panel_2" != document.activeElement.id)
            switch (f.keyCode) {
            case 37:
                return this.kbNaviMove("left"),
                !1;
            case 38:
                return this.kbNaviMove("up"),
                !1;
            case 39:
                return this.kbNaviMove("right"),
                !1;
            case 40:
                return this.kbNaviMove("down"),
                !1
            }
    },
    onkeypress: function(f) {},
    kbNaviMove: function(f) {
        if (1 == this.keyboardNavi) {
            var a = color_palette.length
              , b = color_palette[0].length
              , d = 3 > this.row ? 2 * this.row + 1 : this.row + 3;
            d = this.colorBtnTbody.childNodes[d].childNodes[this.col];
            d.classList.remove("efmase_color_pad_table_sel");
            0 < this.col && "left" == f && this.col--;
            this.col < b - 1 && "right" == f && this.col++;
            0 < this.row && "up" == f && this.row--;
            this.row < a - 1 && "down" == f && this.row++;
            d = 3 > this.row ? 2 * this.row + 1 : this.row + 3;
            d = this.colorBtnTbody.childNodes[d].childNodes[this.col];
            d.classList.contains("efmase_color_pad_table_sel") || d.classList.add("efmase_color_pad_table_sel");
            f = color_palette[this.row][this.col].rgb;
            this.colorCodeInput.value = "#" + ("0" + f[0].toString(16)).slice(-2) + ("0" + f[1].toString(16)).slice(-2) + ("0" + f[2].toString(16)).slice(-2)
        }
        return !1
    },
    setKBNavi: function(f, a) {
        1 != this.keyboardNavi && (f = document.getElementById(f + this.keyboardNavi),
        f.focus(),
        0 == this.keyboardNavi && f.classList.add("efmase_panel_close_hover"));
        return !1
    },
    clearKBNavi: function(f) {
        1 != this.keyboardNavi && (f = document.getElementById(f + this.keyboardNavi),
        f.blur(),
        0 == this.keyboardNavi && f.classList.remove("efmase_panel_close_hover"));
        return !1
    }
})
}
)();
(function() {
org.imatheq.formulaeditor.presentation.BevelledFraction = $extend(org.imatheq.formulaeditor.presentation.Node, {
    slowDelete: !0,
    draw: function(f, a, b, d, g) {
        var k = 1
          , e = 2;
        d = this.parent instanceof org.imatheq.formulaeditor.presentation.Row && 0 < this.index ? this.parent.children[this.index - 1].dimensions : f.getXDimentions(a, b, d);
        d = d.top + d.height / 2;
        b = Math.round(b);
        d = Math.round(d);
        var h = 0;
        void 0 !== a.fontSizeModifier && null !== a.fontSizeModifier && (h = a.fontSizeModifier);
        var l = f.getFontSizeIdx(h);
        h = {
            fontSizeModifier: h
        };
        for (p in a)
            h[p] = a[p];
        8 < l && (k = 2);
        6 > l && (e = 1);
        this.children[1].draw(f, a, 0, 0, !0);
        var m = this.children[1].dimensions.height;
        this.children[0].draw(f, h, 0, 0, !0);
        var n = this.children[0].dimensions.height;
        slashDims = {
            left: b,
            top: d,
            width: Math.round(.4 * (m + n)),
            height: m + n
        };
        var p = slashDims.height;
        var q = p / 2;
        l = Math.min(0, slashDims.width - .4 * n - (this.children[0].dimensions.width + e));
        leftXAdjust = Math.max(0, slashDims.width - .4 * n - (this.children[0].dimensions.width + e));
        var t = Math.min(0, slashDims.width - .4 * m - (this.children[1].dimensions.width + e));
        middleXAdjust = .4 * m + e;
        +Math.max(0, .4 * n - this.children[1].dimensions.width - e);
        this.dimensions = {
            height: p,
            width: slashDims.width + -l - t,
            left: b,
            top: d - slashDims.height / 2
        };
        this.children[0].draw(f, h, b - this.children[0].dimensions.left + leftXAdjust, d + q - (p - this.children[0].dimensions.height) - (this.children[0].dimensions.top + this.children[0].dimensions.height), g);
        this.children[1].draw(f, a, b - l + middleXAdjust, d + q - (this.children[1].dimensions.top + this.children[1].dimensions.height), g);
        g || (f = f.getContext(),
        f.save(),
        f.strokeStyle = this.mathcolor,
        f.lineWidth = k,
        f.beginPath(),
        f.moveTo(b - l + slashDims.width, this.dimensions.top),
        f.lineTo(b - l, this.dimensions.top + p),
        f.stroke(),
        f.closePath(),
        f.restore());
        return this.dimensions
    },
    functionsFromRow: ["getFirstCursorPosition", "getLastCursorPosition"],
    getCursorPosition: function(f, a, b) {
        return a > this.dimensions.left && a < this.dimensions.left + this.dimensions.width - 1 ? (right_dim = this.children[1].dimensions,
        a < right_dim.left ? this.children[0].getCursorPosition(f, a, b) : this.children[1].getCursorPosition(f, a, b)) : a <= this.dimensions.left ? null === this.parent || void 0 === this.parent ? null : this.parent.getPrecedingCursorPosition(f, this.index + 1, !1) : this.parent.getFollowingCursorPosition(f, this.index, !1)
    },
    getFollowingCursorPosition: function(f, a, b) {
        if (null === b || void 0 === b)
            b = !0;
        if (null === a || void 0 === a)
            return this.children[0].getFollowingCursorPosition(f, null, b);
        var d = null;
        if (0 === a)
            if (b)
                d = this.children[1].getFollowingCursorPosition(f, null, b);
            else
                return {
                    row: this.children[1],
                    index: 0
                };
        return null === d && null !== this.parent ? this.parent.getFollowingCursorPosition(f, this.index, !1) : d
    },
    getPrecedingCursorPosition: function(f, a, b) {
        if (null === b || void 0 === b)
            b = !0;
        if (null === a || void 0 === a)
            return this.children[1].getPrecedingCursorPosition(f, null, b);
        var d = null;
        if (1 == a)
            if (b)
                d = this.children[0].getLastCursorPosition(f, null, b);
            else
                return {
                    row: this.children[0],
                    index: this.children[0].children.length
                };
        return null === d && null !== this.parent ? {
            row: this.parent,
            index: this.index
        } : d
    },
    getLowerCursorPosition: function(f, a, b, d) {
        if (null === d || void 0 === d)
            d = !0;
        if (null === a || void 0 === a)
            return this.children[0].getLowerCursorPosition(f, null, b, d);
        var g = null;
        if (0 === a)
            if (d)
                g = this.children[1].getLowerCursorPosition(f, null, b, d);
            else
                return {
                    row: this.moddle,
                    index: 0
                };
        return null === g && null !== this.parent ? this.parent.getLowerCursorPosition(f, this.index, b, !1) : g
    },
    getHigherCursorPosition: function(f, a, b, d) {
        if (null === d || void 0 === d)
            d = !0;
        if (null === a || void 0 === a)
            return this.children[1].getHigherCursorPosition(f, null, b, d);
        var g = null;
        if (1 === a)
            if (d)
                g = this.children[0].getHigherCursorPosition(f, null, b, d);
            else
                return {
                    row: this.moddle,
                    index: 0
                };
        return null === g && null !== this.parent ? this.parent.getHigherCursorPosition(f, this.index, b, !1) : g
    },
    initialize: function() {
        0 < arguments.length ? (this.children = [],
        this.children.push(arguments[0]),
        this.children.push(arguments[1])) : this.children = [];
        for (var f = new org.imatheq.formulaeditor.presentation.Row, a = this.functionsFromRow.length - 1; 0 <= a; a--)
            this[this.functionsFromRow[a]] || (this[this.functionsFromRow[a]] = f[this.functionsFromRow[a]]);
        this.updateChildren()
    },
    copy: function() {
        return 2 == this.children.length ? this.clone(this.children[0].copy(), this.children[1].copy()) : this.clone()
    },
    getMathML: function() {
        return '<mfrac bevelled="true"' + (this.in_attrbs ? this.in_attrbs : "") + (null === this.mathcolor || "" == this.mathcolor || "null" == this.mathcolor || "#000000" == this.mathcolor ? "" : ' mathcolor="' + this.mathcolor + '"') + ">" + this.children[0].getMathML(!0) + this.children[1].getMathML(!0) + "</mfrac>"
    },
    getAltText: function() {
        var f = org.imatheq.formulaeditor.FormulaEditor.getEditor()
          , a = f.altstrs.bevelled[this.children[0].children && 1 < this.children[0].children.length || this.children[1].children && 1 < this.children[1].children.length ? 1 : 0].replace("$0$", this.children[0].getAltText().trim()).replace("$1$", this.children[1].getAltText().trim())
          , b = a.trim();
        null !== f.altstrs[b] && void 0 !== f.altstrs[b] && (a = f.altstrs[b]);
        return a
    }
})
}
)();
(function() {}
)();
(function() {
org.imatheq.formulaeditor.parsing.expression.KeywordList = {
    arccos: {
        type: "f",
        fix: "i"
    },
    arccosh: {
        type: "f",
        fix: "i"
    },
    arccot: {
        type: "f",
        fix: "i"
    },
    arccoth: {
        type: "f",
        fix: "i"
    },
    arccsc: {
        type: "f",
        fix: "i"
    },
    arccsch: {
        type: "f",
        fix: "i"
    },
    arcsec: {
        type: "f",
        fix: "i"
    },
    arcsech: {
        type: "f",
        fix: "i"
    },
    arcsin: {
        type: "f",
        fix: "i"
    },
    arcsinh: {
        type: "f",
        fix: "i"
    },
    arctan: {
        type: "f",
        fix: "i"
    },
    arctanh: {
        type: "f",
        fix: "i"
    },
    cos: {
        type: "f",
        fix: "i"
    },
    cosh: {
        type: "f",
        fix: "i"
    },
    cot: {
        type: "f",
        fix: "i"
    },
    coth: {
        type: "f",
        fix: "i"
    },
    csc: {
        type: "f",
        fix: "i"
    },
    csch: {
        type: "f",
        fix: "i"
    },
    exp: {
        type: "f",
        fix: "i"
    },
    ln: {
        type: "f",
        fix: "i"
    },
    log: {
        type: "f",
        fix: "i"
    },
    sec: {
        type: "f",
        fix: "i"
    },
    sech: {
        type: "f",
        fix: "i"
    },
    sin: {
        type: "f",
        fix: "i"
    },
    sinh: {
        type: "f",
        fix: "i"
    },
    tan: {
        type: "f",
        fix: "i"
    },
    tanh: {
        type: "f",
        fix: "i"
    }
}
}
)();
(function() {
org.imatheq.formulaeditor.parsing.expression.MOList = {
    " ": {
        0: null,
        1: {
            gl: " ",
            nm: "space",
            pr: 880,
            ls: 0,
            rs: 0,
            pp: ""
        },
        2: null
    },
    "\u00a0": {
        0: {
            gl: " ",
            nm: "space",
            pr: 880,
            ls: 0,
            rs: 0,
            pp: ""
        },
        1: {
            gl: " ",
            nm: "space",
            pr: 880,
            ls: 0,
            rs: 0,
            pp: ""
        },
        2: {
            gl: " ",
            nm: "space",
            pr: 880,
            ls: 0,
            rs: 0,
            pp: ""
        }
    },
    "'": {
        0: null,
        1: null,
        2: {
            gl: "'",
            nm: "apostrophe",
            pr: 880,
            ls: 0,
            rs: 0,
            pp: "accent"
        }
    },
    "-": {
        0: {
            gl: "-",
            nm: "hyphen-minus",
            pr: 275,
            ls: 0,
            rs: 1,
            pp: ""
        },
        1: {
            gl: "-",
            nm: "hyphen-minus",
            pr: 275,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "--": {
        0: null,
        1: null,
        2: {
            gl: "--",
            nm: "multiple character operator: --",
            pr: 880,
            ls: 0,
            rs: 0,
            pp: ""
        }
    },
    "!": {
        0: null,
        1: null,
        2: {
            gl: "!",
            nm: "exclamation mark",
            pr: 810,
            ls: 1,
            rs: 0,
            pp: ""
        }
    },
    "!!": {
        0: null,
        1: null,
        2: {
            gl: "!!",
            nm: "multiple character operator: !!",
            pr: 810,
            ls: 1,
            rs: 0,
            pp: ""
        }
    },
    "!=": {
        0: null,
        1: {
            gl: "!=",
            nm: "multiple character operator: !=",
            pr: 260,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "%": {
        0: null,
        1: {
            gl: "%",
            nm: "percent sign",
            pr: 640,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u2030": {
        0: null,
        1: {
            gl: "\u2030",
            nm: "permille sign",
            pr: 640,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u2016": {
        0: {
            gl: "\u2016",
            nm: "double vertical line",
            pr: 20,
            ls: 0,
            rs: 0,
            pp: "fence, stretchy"
        },
        1: null,
        2: {
            gl: "\u2016",
            nm: "double vertical line",
            pr: 20,
            ls: 0,
            rs: 0,
            pp: "fence, stretchy"
        }
    },
    "\u2018": {
        0: {
            gl: "\u2018",
            nm: "left single quotation mark",
            pr: 10,
            ls: 0,
            rs: 0,
            pp: "fence"
        },
        1: null,
        2: null
    },
    "\u2019": {
        0: null,
        1: null,
        2: {
            gl: "\u2019",
            nm: "right single quotation mark",
            pr: 10,
            ls: 0,
            rs: 0,
            pp: "fence"
        }
    },
    "\u201a": {
        0: null,
        1: null,
        2: {
            gl: "\u201a",
            nm: "single low-9 quotation mark",
            pr: 880,
            ls: 0,
            rs: 0,
            pp: "accent"
        }
    },
    "\u201b": {
        0: null,
        1: null,
        2: {
            gl: "\u201b",
            nm: "single high-reversed-9 quotation mark",
            pr: 880,
            ls: 0,
            rs: 0,
            pp: "accent"
        }
    },
    "\u201c": {
        0: {
            gl: "\u201c",
            nm: "left double quotation mark",
            pr: 10,
            ls: 0,
            rs: 0,
            pp: "fence"
        },
        1: null,
        2: null
    },
    "\u201d": {
        0: null,
        1: null,
        2: {
            gl: "\u201d",
            nm: "right double quotation mark",
            pr: 10,
            ls: 0,
            rs: 0,
            pp: "fence"
        }
    },
    "\u201e": {
        0: null,
        1: null,
        2: {
            gl: "\u201e",
            nm: "double low-9 quotation mark",
            pr: 880,
            ls: 0,
            rs: 0,
            pp: "accent"
        }
    },
    "\u201f": {
        0: null,
        1: null,
        2: {
            gl: "\u201f",
            nm: "double high-reversed-9 quotation mark",
            pr: 880,
            ls: 0,
            rs: 0,
            pp: "accent"
        }
    },
    "\u2022": {
        0: null,
        1: {
            gl: "\u2022",
            nm: "bullet",
            pr: 390,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2026": {
        0: null,
        1: {
            gl: "\u2026",
            nm: "horizontal ellipsis",
            pr: 150,
            ls: 0,
            rs: 0,
            pp: ""
        },
        2: null
    },
    "\u2032": {
        0: null,
        1: null,
        2: {
            gl: "\u2032",
            nm: "prime",
            pr: 800,
            ls: 0,
            rs: 0,
            pp: ""
        }
    },
    "\u2033": {
        0: null,
        1: null,
        2: {
            gl: "\u2033",
            nm: "double prime",
            pr: 880,
            ls: 0,
            rs: 0,
            pp: "accent"
        }
    },
    "\u2034": {
        0: null,
        1: null,
        2: {
            gl: "\u2034",
            nm: "triple prime",
            pr: 880,
            ls: 0,
            rs: 0,
            pp: "accent"
        }
    },
    "\u2035": {
        0: null,
        1: null,
        2: {
            gl: "\u2035",
            nm: "reversed prime",
            pr: 880,
            ls: 0,
            rs: 0,
            pp: "accent"
        }
    },
    "\u2036": {
        0: null,
        1: null,
        2: {
            gl: "\u2036",
            nm: "reversed double prime",
            pr: 880,
            ls: 0,
            rs: 0,
            pp: "accent"
        }
    },
    "\u2037": {
        0: null,
        1: null,
        2: {
            gl: "\u2037",
            nm: "reversed triple prime",
            pr: 880,
            ls: 0,
            rs: 0,
            pp: "accent"
        }
    },
    "\u203e": {
        0: null,
        1: null,
        2: {
            gl: "\u203e",
            nm: "overline",
            pr: 880,
            ls: 0,
            rs: 0,
            pp: "stretchy, accent"
        }
    },
    "\u2043": {
        0: null,
        1: {
            gl: "\u2043",
            nm: "hyphen bullet",
            pr: 390,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2044": {
        0: null,
        1: {
            gl: "\u2044",
            nm: "fraction slash",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: "stretchy"
        },
        2: null
    },
    "\u2057": {
        0: null,
        1: null,
        2: {
            gl: "\u2057",
            nm: "quadruple prime",
            pr: 880,
            ls: 0,
            rs: 0,
            pp: "accent"
        }
    },
    "\u2061": {
        0: null,
        1: {
            gl: "&#x2061;",
            nm: "\u2061function application",
            pr: 850,
            ls: 0,
            rs: 0,
            pp: ""
        },
        2: null
    },
    "\u2062": {
        0: null,
        1: {
            gl: "&#x2062;",
            nm: "\u2062invisible times",
            pr: 390,
            ls: 0,
            rs: 0,
            pp: ""
        },
        2: null
    },
    "\u2063": {
        0: null,
        1: {
            gl: "&#x2063;",
            nm: "\u2063invisible separator",
            pr: 40,
            ls: 0,
            rs: 0,
            pp: "separator, linebreakstyle=after"
        },
        2: null
    },
    "\u2064": {
        0: null,
        1: {
            gl: "&#x2064;",
            nm: "\u2064invisible plus",
            pr: 880,
            ls: 0,
            rs: 0,
            pp: ""
        },
        2: null
    },
    "\u20db": {
        0: null,
        1: null,
        2: {
            gl: "\u20db",
            nm: "combining three dots above",
            pr: 880,
            ls: 0,
            rs: 0,
            pp: "accent"
        }
    },
    "\u20dc": {
        0: null,
        1: null,
        2: {
            gl: "\u20dc",
            nm: "combining four dots above",
            pr: 880,
            ls: 0,
            rs: 0,
            pp: "accent"
        }
    },
    "\u2145": {
        0: {
            gl: "\u2145",
            nm: "double-struck italic capital d",
            pr: 845,
            ls: 2,
            rs: 1,
            pp: ""
        },
        1: null,
        2: null
    },
    "\u2146": {
        0: {
            gl: "\u2146",
            nm: "double-struck italic small d",
            pr: 845,
            ls: 2,
            rs: 0,
            pp: ""
        },
        1: null,
        2: null
    },
    "\u2190": {
        0: null,
        1: {
            gl: "\u2190",
            nm: "leftwards arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u2191": {
        0: null,
        1: {
            gl: "\u2191",
            nm: "upwards arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u2192": {
        0: null,
        1: {
            gl: "\u2192",
            nm: "rightwards arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u2193": {
        0: null,
        1: {
            gl: "\u2193",
            nm: "downwards arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u2194": {
        0: null,
        1: {
            gl: "\u2194",
            nm: "left right arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u2195": {
        0: null,
        1: {
            gl: "\u2195",
            nm: "up down arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u2196": {
        0: null,
        1: {
            gl: "\u2196",
            nm: "north west arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u2197": {
        0: null,
        1: {
            gl: "\u2197",
            nm: "north east arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u2198": {
        0: null,
        1: {
            gl: "\u2198",
            nm: "south east arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u2199": {
        0: null,
        1: {
            gl: "\u2199",
            nm: "south west arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u219a": {
        0: null,
        1: {
            gl: "\u219a",
            nm: "leftwards arrow with stroke",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u219b": {
        0: null,
        1: {
            gl: "\u219b",
            nm: "rightwards arrow with stroke",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u219c": {
        0: null,
        1: {
            gl: "\u219c",
            nm: "leftwards wave arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u219d": {
        0: null,
        1: {
            gl: "\u219d",
            nm: "rightwards wave arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u219e": {
        0: null,
        1: {
            gl: "\u219e",
            nm: "leftwards two headed arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u219f": {
        0: null,
        1: {
            gl: "\u219f",
            nm: "upwards two headed arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u21a0": {
        0: null,
        1: {
            gl: "\u21a0",
            nm: "rightwards two headed arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u21a1": {
        0: null,
        1: {
            gl: "\u21a1",
            nm: "downwards two headed arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u21a2": {
        0: null,
        1: {
            gl: "\u21a2",
            nm: "leftwards arrow with tail",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u21a3": {
        0: null,
        1: {
            gl: "\u21a3",
            nm: "rightwards arrow with tail",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u21a4": {
        0: null,
        1: {
            gl: "\u21a4",
            nm: "leftwards arrow from bar",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u21a5": {
        0: null,
        1: {
            gl: "\u21a5",
            nm: "upwards arrow from bar",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u21a6": {
        0: null,
        1: {
            gl: "\u21a6",
            nm: "rightwards arrow from bar",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u21a7": {
        0: null,
        1: {
            gl: "\u21a7",
            nm: "downwards arrow from bar",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u21a8": {
        0: null,
        1: {
            gl: "\u21a8",
            nm: "up down arrow with base",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u21a9": {
        0: null,
        1: {
            gl: "\u21a9",
            nm: "leftwards arrow with hook",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u21aa": {
        0: null,
        1: {
            gl: "\u21aa",
            nm: "rightwards arrow with hook",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u21ab": {
        0: null,
        1: {
            gl: "\u21ab",
            nm: "leftwards arrow with loop",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u21ac": {
        0: null,
        1: {
            gl: "\u21ac",
            nm: "rightwards arrow with loop",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u21ad": {
        0: null,
        1: {
            gl: "\u21ad",
            nm: "left right wave arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u21ae": {
        0: null,
        1: {
            gl: "\u21ae",
            nm: "left right arrow with stroke",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u21af": {
        0: null,
        1: {
            gl: "\u21af",
            nm: "downwards zigzag arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u21b0": {
        0: null,
        1: {
            gl: "\u21b0",
            nm: "upwards arrow with tip leftwards",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u21b1": {
        0: null,
        1: {
            gl: "\u21b1",
            nm: "upwards arrow with tip rightwards",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u21b2": {
        0: null,
        1: {
            gl: "\u21b2",
            nm: "downwards arrow with tip leftwards",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u21b3": {
        0: null,
        1: {
            gl: "\u21b3",
            nm: "downwards arrow with tip rightwards",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u21b4": {
        0: null,
        1: {
            gl: "\u21b4",
            nm: "rightwards arrow with corner downwards",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u21b5": {
        0: null,
        1: {
            gl: "\u21b5",
            nm: "downwards arrow with corner leftwards",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u21b6": {
        0: null,
        1: {
            gl: "\u21b6",
            nm: "anticlockwise top semicircle arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u21b7": {
        0: null,
        1: {
            gl: "\u21b7",
            nm: "clockwise top semicircle arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u21b8": {
        0: null,
        1: {
            gl: "\u21b8",
            nm: "north west arrow to long bar",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u21b9": {
        0: null,
        1: {
            gl: "\u21b9",
            nm: "leftwards arrow to bar over rightwards arrow to bar",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u21ba": {
        0: null,
        1: {
            gl: "\u21ba",
            nm: "anticlockwise open circle arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u21bb": {
        0: null,
        1: {
            gl: "\u21bb",
            nm: "clockwise open circle arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u21bc": {
        0: null,
        1: {
            gl: "\u21bc",
            nm: "leftwards harpoon with barb upwards",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u21bd": {
        0: null,
        1: {
            gl: "\u21bd",
            nm: "leftwards harpoon with barb downwards",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u21be": {
        0: null,
        1: {
            gl: "\u21be",
            nm: "upwards harpoon with barb rightwards",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u21bf": {
        0: null,
        1: {
            gl: "\u21bf",
            nm: "upwards harpoon with barb leftwards",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u21c0": {
        0: null,
        1: {
            gl: "\u21c0",
            nm: "rightwards harpoon with barb upwards",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u21c1": {
        0: null,
        1: {
            gl: "\u21c1",
            nm: "rightwards harpoon with barb downwards",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u21c2": {
        0: null,
        1: {
            gl: "\u21c2",
            nm: "downwards harpoon with barb rightwards",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u21c3": {
        0: null,
        1: {
            gl: "\u21c3",
            nm: "downwards harpoon with barb leftwards",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u21c4": {
        0: null,
        1: {
            gl: "\u21c4",
            nm: "rightwards arrow over leftwards arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u21c5": {
        0: null,
        1: {
            gl: "\u21c5",
            nm: "upwards arrow leftwards of downwards arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u21c6": {
        0: null,
        1: {
            gl: "\u21c6",
            nm: "leftwards arrow over rightwards arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u21c7": {
        0: null,
        1: {
            gl: "\u21c7",
            nm: "leftwards paired arrows",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u21c8": {
        0: null,
        1: {
            gl: "\u21c8",
            nm: "upwards paired arrows",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u21c9": {
        0: null,
        1: {
            gl: "\u21c9",
            nm: "rightwards paired arrows",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u21ca": {
        0: null,
        1: {
            gl: "\u21ca",
            nm: "downwards paired arrows",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u21cb": {
        0: null,
        1: {
            gl: "\u21cb",
            nm: "leftwards harpoon over rightwards harpoon",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u21cc": {
        0: null,
        1: {
            gl: "\u21cc",
            nm: "rightwards harpoon over leftwards harpoon",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u21cd": {
        0: null,
        1: {
            gl: "\u21cd",
            nm: "leftwards double arrow with stroke",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u21ce": {
        0: null,
        1: {
            gl: "\u21ce",
            nm: "left right double arrow with stroke",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u21cf": {
        0: null,
        1: {
            gl: "\u21cf",
            nm: "rightwards double arrow with stroke",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u21d0": {
        0: null,
        1: {
            gl: "\u21d0",
            nm: "leftwards double arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u21d1": {
        0: null,
        1: {
            gl: "\u21d1",
            nm: "upwards double arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u21d2": {
        0: null,
        1: {
            gl: "\u21d2",
            nm: "rightwards double arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u21d3": {
        0: null,
        1: {
            gl: "\u21d3",
            nm: "downwards double arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u21d4": {
        0: null,
        1: {
            gl: "\u21d4",
            nm: "left right double arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u21d5": {
        0: null,
        1: {
            gl: "\u21d5",
            nm: "up down double arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u21d6": {
        0: null,
        1: {
            gl: "\u21d6",
            nm: "north west double arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u21d7": {
        0: null,
        1: {
            gl: "\u21d7",
            nm: "north east double arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u21d8": {
        0: null,
        1: {
            gl: "\u21d8",
            nm: "south east double arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u21d9": {
        0: null,
        1: {
            gl: "\u21d9",
            nm: "south west double arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u21da": {
        0: null,
        1: {
            gl: "\u21da",
            nm: "leftwards triple arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u21db": {
        0: null,
        1: {
            gl: "\u21db",
            nm: "rightwards triple arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u21dc": {
        0: null,
        1: {
            gl: "\u21dc",
            nm: "leftwards squiggle arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u21dd": {
        0: null,
        1: {
            gl: "\u21dd",
            nm: "rightwards squiggle arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u21de": {
        0: null,
        1: {
            gl: "\u21de",
            nm: "upwards arrow with double stroke",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u21df": {
        0: null,
        1: {
            gl: "\u21df",
            nm: "downwards arrow with double stroke",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u21e0": {
        0: null,
        1: {
            gl: "\u21e0",
            nm: "leftwards dashed arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u21e1": {
        0: null,
        1: {
            gl: "\u21e1",
            nm: "upwards dashed arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u21e2": {
        0: null,
        1: {
            gl: "\u21e2",
            nm: "rightwards dashed arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u21e3": {
        0: null,
        1: {
            gl: "\u21e3",
            nm: "downwards dashed arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u21e4": {
        0: null,
        1: {
            gl: "\u21e4",
            nm: "leftwards arrow to bar",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u21e5": {
        0: null,
        1: {
            gl: "\u21e5",
            nm: "rightwards arrow to bar",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u21e6": {
        0: null,
        1: {
            gl: "\u21e6",
            nm: "leftwards white arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u21e7": {
        0: null,
        1: {
            gl: "\u21e7",
            nm: "upwards white arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u21e8": {
        0: null,
        1: {
            gl: "\u21e8",
            nm: "rightwards white arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u21e9": {
        0: null,
        1: {
            gl: "\u21e9",
            nm: "downwards white arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u21ea": {
        0: null,
        1: {
            gl: "\u21ea",
            nm: "upwards white arrow from bar",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u21eb": {
        0: null,
        1: {
            gl: "\u21eb",
            nm: "upwards white arrow on pedestal",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u21ec": {
        0: null,
        1: {
            gl: "\u21ec",
            nm: "upwards white arrow on pedestal with horizontal bar",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u21ed": {
        0: null,
        1: {
            gl: "\u21ed",
            nm: "upwards white arrow on pedestal with vertical bar",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u21ee": {
        0: null,
        1: {
            gl: "\u21ee",
            nm: "upwards white double arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u21ef": {
        0: null,
        1: {
            gl: "\u21ef",
            nm: "upwards white double arrow on pedestal",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u21f0": {
        0: null,
        1: {
            gl: "\u21f0",
            nm: "rightwards white arrow from wall",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u21f1": {
        0: null,
        1: {
            gl: "\u21f1",
            nm: "north west arrow to corner",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u21f2": {
        0: null,
        1: {
            gl: "\u21f2",
            nm: "south east arrow to corner",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u21f3": {
        0: null,
        1: {
            gl: "\u21f3",
            nm: "up down white arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u21f4": {
        0: null,
        1: {
            gl: "\u21f4",
            nm: "right arrow with small circle",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u21f5": {
        0: null,
        1: {
            gl: "\u21f5",
            nm: "downwards arrow leftwards of upwards arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u21f6": {
        0: null,
        1: {
            gl: "\u21f6",
            nm: "three rightwards arrows",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u21f7": {
        0: null,
        1: {
            gl: "\u21f7",
            nm: "leftwards arrow with vertical stroke",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u21f8": {
        0: null,
        1: {
            gl: "\u21f8",
            nm: "rightwards arrow with vertical stroke",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u21f9": {
        0: null,
        1: {
            gl: "\u21f9",
            nm: "left right arrow with vertical stroke",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u21fa": {
        0: null,
        1: {
            gl: "\u21fa",
            nm: "leftwards arrow with double vertical stroke",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u21fb": {
        0: null,
        1: {
            gl: "\u21fb",
            nm: "rightwards arrow with double vertical stroke",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u21fc": {
        0: null,
        1: {
            gl: "\u21fc",
            nm: "left right arrow with double vertical stroke",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u21fd": {
        0: null,
        1: {
            gl: "\u21fd",
            nm: "leftwards open-headed arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u21fe": {
        0: null,
        1: {
            gl: "\u21fe",
            nm: "rightwards open-headed arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u21ff": {
        0: null,
        1: {
            gl: "\u21ff",
            nm: "left right open-headed arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u2200": {
        0: {
            gl: "\u2200",
            nm: "for all",
            pr: 230,
            ls: 2,
            rs: 1,
            pp: ""
        },
        1: null,
        2: null
    },
    "\u2201": {
        0: null,
        1: {
            gl: "\u2201",
            nm: "complement",
            pr: 240,
            ls: 1,
            rs: 2,
            pp: ""
        },
        2: null
    },
    "\u2202": {
        0: {
            gl: "\u2202",
            nm: "partial differential",
            pr: 740,
            ls: 2,
            rs: 1,
            pp: ""
        },
        1: null,
        2: null
    },
    "\u2203": {
        0: {
            gl: "\u2203",
            nm: "there exists",
            pr: 230,
            ls: 2,
            rs: 1,
            pp: ""
        },
        1: null,
        2: null
    },
    "\u2204": {
        0: {
            gl: "\u2204",
            nm: "there does not exist",
            pr: 230,
            ls: 2,
            rs: 1,
            pp: ""
        },
        1: null,
        2: null
    },
    "\u2206": {
        0: null,
        1: {
            gl: "\u2206",
            nm: "increment",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u2207": {
        0: {
            gl: "\u2207",
            nm: "nabla",
            pr: 740,
            ls: 2,
            rs: 1,
            pp: ""
        },
        1: null,
        2: null
    },
    "\u2208": {
        0: null,
        1: {
            gl: "\u2208",
            nm: "element of",
            pr: 240,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2209": {
        0: null,
        1: {
            gl: "\u2209",
            nm: "not an element of",
            pr: 240,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u220a": {
        0: null,
        1: {
            gl: "\u220a",
            nm: "small element of",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u220b": {
        0: null,
        1: {
            gl: "\u220b",
            nm: "contains as member",
            pr: 160,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u220c": {
        0: null,
        1: {
            gl: "\u220c",
            nm: "does not contain as member",
            pr: 240,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u220d": {
        0: null,
        1: {
            gl: "\u220d",
            nm: "small contains as member",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u220e": {
        0: null,
        1: {
            gl: "\u220e",
            nm: "end of proof",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u220f": {
        0: {
            gl: "\u220f",
            nm: "n-ary product",
            pr: 350,
            ls: 1,
            rs: 2,
            pp: "largeop, movablelimits, symmetric"
        },
        1: null,
        2: null
    },
    "\u2210": {
        0: {
            gl: "\u2210",
            nm: "n-ary coproduct",
            pr: 350,
            ls: 1,
            rs: 2,
            pp: "largeop, movablelimits, symmetric"
        },
        1: null,
        2: null
    },
    "\u2211": {
        0: {
            gl: "\u2211",
            nm: "n-ary summation",
            pr: 290,
            ls: 1,
            rs: 2,
            pp: "largeop, movablelimits, symmetric"
        },
        1: null,
        2: null
    },
    "\u2212": {
        0: {
            gl: "\u2212",
            nm: "minus sign",
            pr: 275,
            ls: 0,
            rs: 1,
            pp: ""
        },
        1: {
            gl: "\u2212",
            nm: "minus sign",
            pr: 275,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2213": {
        0: {
            gl: "\u2213",
            nm: "minus-or-plus sign",
            pr: 275,
            ls: 0,
            rs: 1,
            pp: ""
        },
        1: {
            gl: "\u2213",
            nm: "minus-or-plus sign",
            pr: 275,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2214": {
        0: null,
        1: {
            gl: "\u2214",
            nm: "dot plus",
            pr: 275,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2215": {
        0: null,
        1: {
            gl: "\u2215",
            nm: "division slash",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: "stretchy"
        },
        2: null
    },
    "\u2216": {
        0: null,
        1: {
            gl: "\u2216",
            nm: "set minus",
            pr: 650,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2217": {
        0: null,
        1: {
            gl: "\u2217",
            nm: "asterisk operator",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2218": {
        0: null,
        1: {
            gl: "\u2218",
            nm: "ring operator",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2219": {
        0: null,
        1: {
            gl: "\u2219",
            nm: "bullet operator",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u221a": {
        0: {
            gl: "\u221a",
            nm: "square root",
            pr: 845,
            ls: 1,
            rs: 1,
            pp: "stretchy"
        },
        1: null,
        2: null
    },
    "\u221b": {
        0: {
            gl: "\u221b",
            nm: "cube root",
            pr: 845,
            ls: 1,
            rs: 1,
            pp: ""
        },
        1: null,
        2: null
    },
    "\u221c": {
        0: {
            gl: "\u221c",
            nm: "fourth root",
            pr: 845,
            ls: 1,
            rs: 1,
            pp: ""
        },
        1: null,
        2: null
    },
    "\u221d": {
        0: null,
        1: {
            gl: "\u221d",
            nm: "proportional to",
            pr: 260,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u221f": {
        0: null,
        1: {
            gl: "\u221f",
            nm: "right angle",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2220": {
        0: {
            gl: "\u2220",
            nm: "angle",
            pr: 670,
            ls: 0,
            rs: 0,
            pp: ""
        },
        1: null,
        2: null
    },
    "\u2221": {
        0: {
            gl: "\u2221",
            nm: "measured angle",
            pr: 670,
            ls: 0,
            rs: 0,
            pp: ""
        },
        1: null,
        2: null
    },
    "\u2222": {
        0: {
            gl: "\u2222",
            nm: "spherical angle",
            pr: 670,
            ls: 0,
            rs: 0,
            pp: ""
        },
        1: null,
        2: null
    },
    "\u2223": {
        0: null,
        1: {
            gl: "\u2223",
            nm: "divides",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2224": {
        0: null,
        1: {
            gl: "\u2224",
            nm: "does not divide",
            pr: 260,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2225": {
        0: null,
        1: {
            gl: "\u2225",
            nm: "parallel to",
            pr: 260,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2226": {
        0: null,
        1: {
            gl: "\u2226",
            nm: "not parallel to",
            pr: 260,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2227": {
        0: null,
        1: {
            gl: "\u2227",
            nm: "logical and",
            pr: 200,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2228": {
        0: null,
        1: {
            gl: "\u2228",
            nm: "logical or",
            pr: 190,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2229": {
        0: null,
        1: {
            gl: "\u2229",
            nm: "intersection",
            pr: 350,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u222a": {
        0: null,
        1: {
            gl: "\u222a",
            nm: "union",
            pr: 350,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u222b": {
        0: {
            gl: "\u222b",
            nm: "integral",
            pr: 310,
            ls: 0,
            rs: 1,
            pp: "largeop, symmetric"
        },
        1: null,
        2: null
    },
    "\u222c": {
        0: {
            gl: "\u222c",
            nm: "double integral",
            pr: 300,
            ls: 0,
            rs: 1,
            pp: "largeop, symmetric"
        },
        1: null,
        2: null
    },
    "\u222d": {
        0: {
            gl: "\u222d",
            nm: "triple integral",
            pr: 300,
            ls: 0,
            rs: 1,
            pp: "largeop, symmetric"
        },
        1: null,
        2: null
    },
    "\u222e": {
        0: {
            gl: "\u222e",
            nm: "contour integral",
            pr: 310,
            ls: 0,
            rs: 1,
            pp: "largeop, symmetric"
        },
        1: null,
        2: null
    },
    "\u222f": {
        0: {
            gl: "\u222f",
            nm: "surface integral",
            pr: 310,
            ls: 0,
            rs: 1,
            pp: "largeop, symmetric"
        },
        1: null,
        2: null
    },
    "\u2230": {
        0: {
            gl: "\u2230",
            nm: "volume integral",
            pr: 310,
            ls: 0,
            rs: 1,
            pp: "largeop, symmetric"
        },
        1: null,
        2: null
    },
    "\u2231": {
        0: {
            gl: "\u2231",
            nm: "clockwise integral",
            pr: 310,
            ls: 0,
            rs: 1,
            pp: "largeop, symmetric"
        },
        1: null,
        2: null
    },
    "\u2232": {
        0: {
            gl: "\u2232",
            nm: "clockwise contour integral",
            pr: 310,
            ls: 0,
            rs: 1,
            pp: "largeop, symmetric"
        },
        1: null,
        2: null
    },
    "\u2233": {
        0: {
            gl: "\u2233",
            nm: "anticlockwise contour integral",
            pr: 310,
            ls: 0,
            rs: 1,
            pp: "largeop, symmetric"
        },
        1: null,
        2: null
    },
    "\u2234": {
        0: null,
        1: {
            gl: "\u2234",
            nm: "therefore",
            pr: 70,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2235": {
        0: null,
        1: {
            gl: "\u2235",
            nm: "because",
            pr: 70,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2236": {
        0: null,
        1: {
            gl: "\u2236",
            nm: "ratio",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2237": {
        0: null,
        1: {
            gl: "\u2237",
            nm: "proportion",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2238": {
        0: null,
        1: {
            gl: "\u2238",
            nm: "dot minus",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2239": {
        0: null,
        1: {
            gl: "\u2239",
            nm: "excess",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u223a": {
        0: null,
        1: {
            gl: "\u223a",
            nm: "geometric proportion",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u223b": {
        0: null,
        1: {
            gl: "\u223b",
            nm: "homothetic",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u223c": {
        0: null,
        1: {
            gl: "\u223c",
            nm: "tilde operator",
            pr: 250,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u223d": {
        0: null,
        1: {
            gl: "\u223d",
            nm: "reversed tilde",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u223d\u0331": {
        0: null,
        1: {
            gl: "\u223d\u0331",
            nm: "reversed tilde with underline",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u223e": {
        0: null,
        1: {
            gl: "\u223e",
            nm: "inverted lazy s",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u223f": {
        0: null,
        1: {
            gl: "\u223f",
            nm: "sine wave",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u2240": {
        0: null,
        1: {
            gl: "\u2240",
            nm: "wreath product",
            pr: 340,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2241": {
        0: null,
        1: {
            gl: "\u2241",
            nm: "not tilde",
            pr: 260,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2242": {
        0: null,
        1: {
            gl: "\u2242",
            nm: "minus tilde",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2242\u0338": {
        0: null,
        1: {
            gl: "\u2242\u0338",
            nm: "minus tilde with slash",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2243": {
        0: null,
        1: {
            gl: "\u2243",
            nm: "asymptotically equal to",
            pr: 260,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2244": {
        0: null,
        1: {
            gl: "\u2244",
            nm: "not asymptotically equal to",
            pr: 260,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2245": {
        0: null,
        1: {
            gl: "\u2245",
            nm: "approximately equal to",
            pr: 260,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2246": {
        0: null,
        1: {
            gl: "\u2246",
            nm: "approximately but not actually equal to",
            pr: 260,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2247": {
        0: null,
        1: {
            gl: "\u2247",
            nm: "neither approximately nor actually equal to",
            pr: 260,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2248": {
        0: null,
        1: {
            gl: "\u2248",
            nm: "almost equal to",
            pr: 247,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2249": {
        0: null,
        1: {
            gl: "\u2249",
            nm: "not almost equal to",
            pr: 250,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u224a": {
        0: null,
        1: {
            gl: "\u224a",
            nm: "almost equal or equal to",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u224b": {
        0: null,
        1: {
            gl: "\u224b",
            nm: "triple tilde",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u224c": {
        0: null,
        1: {
            gl: "\u224c",
            nm: "all equal to",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u224d": {
        0: null,
        1: {
            gl: "\u224d",
            nm: "equivalent to",
            pr: 260,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u224e": {
        0: null,
        1: {
            gl: "\u224e",
            nm: "geometrically equivalent to",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u224e\u0338": {
        0: null,
        1: {
            gl: "\u224e\u0338",
            nm: "geometrically equivalent to with slash",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u224f": {
        0: null,
        1: {
            gl: "\u224f",
            nm: "difference between",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u224f\u0338": {
        0: null,
        1: {
            gl: "\u224f\u0338",
            nm: "difference between with slash",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2250": {
        0: null,
        1: {
            gl: "\u2250",
            nm: "approaches the limit",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2251": {
        0: null,
        1: {
            gl: "\u2251",
            nm: "geometrically equal to",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2252": {
        0: null,
        1: {
            gl: "\u2252",
            nm: "approximately equal to or the image of",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2253": {
        0: null,
        1: {
            gl: "\u2253",
            nm: "image of or approximately equal to",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2254": {
        0: null,
        1: {
            gl: "\u2254",
            nm: "colon equals",
            pr: 260,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2255": {
        0: null,
        1: {
            gl: "\u2255",
            nm: "equals colon",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2256": {
        0: null,
        1: {
            gl: "\u2256",
            nm: "ring in equal to",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2257": {
        0: null,
        1: {
            gl: "\u2257",
            nm: "ring equal to",
            pr: 260,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2258": {
        0: null,
        1: {
            gl: "\u2258",
            nm: "corresponds to",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2259": {
        0: null,
        1: {
            gl: "\u2259",
            nm: "estimates",
            pr: 260,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u225a": {
        0: null,
        1: {
            gl: "\u225a",
            nm: "equiangular to",
            pr: 260,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u225b": {
        0: null,
        1: {
            gl: "\u225b",
            nm: "star equals",
            pr: 260,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u225c": {
        0: null,
        1: {
            gl: "\u225c",
            nm: "delta equal to",
            pr: 260,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u225d": {
        0: null,
        1: {
            gl: "\u225d",
            nm: "equal to by definition",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u225e": {
        0: null,
        1: {
            gl: "\u225e",
            nm: "measured by",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u225f": {
        0: null,
        1: {
            gl: "\u225f",
            nm: "questioned equal to",
            pr: 260,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2260": {
        0: null,
        1: {
            gl: "\u2260",
            nm: "not equal to",
            pr: 255,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2261": {
        0: null,
        1: {
            gl: "\u2261",
            nm: "identical to",
            pr: 260,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2262": {
        0: null,
        1: {
            gl: "\u2262",
            nm: "not identical to",
            pr: 252,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2263": {
        0: null,
        1: {
            gl: "\u2263",
            nm: "strictly equivalent to",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2264": {
        0: null,
        1: {
            gl: "\u2264",
            nm: "less-than or equal to",
            pr: 241,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2265": {
        0: null,
        1: {
            gl: "\u2265",
            nm: "greater-than or equal to",
            pr: 242,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2266": {
        0: null,
        1: {
            gl: "\u2266",
            nm: "less-than over equal to",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2266\u0338": {
        0: null,
        1: {
            gl: "\u2266\u0338",
            nm: "less-than over equal to with slash",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2267": {
        0: null,
        1: {
            gl: "\u2267",
            nm: "greater-than over equal to",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2268": {
        0: null,
        1: {
            gl: "\u2268",
            nm: "less-than but not equal to",
            pr: 260,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2269": {
        0: null,
        1: {
            gl: "\u2269",
            nm: "greater-than but not equal to",
            pr: 260,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u226a": {
        0: null,
        1: {
            gl: "\u226a",
            nm: "much less-than",
            pr: 260,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u226a\u0338": {
        0: null,
        1: {
            gl: "\u226a\u0338",
            nm: "much less than with slash",
            pr: 260,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u226b": {
        0: null,
        1: {
            gl: "\u226b",
            nm: "much greater-than",
            pr: 260,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u226b\u0338": {
        0: null,
        1: {
            gl: "\u226b\u0338",
            nm: "much greater than with slash",
            pr: 260,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u226c": {
        0: null,
        1: {
            gl: "\u226c",
            nm: "between",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u226d": {
        0: null,
        1: {
            gl: "\u226d",
            nm: "not equivalent to",
            pr: 260,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u226e": {
        0: null,
        1: {
            gl: "\u226e",
            nm: "not less-than",
            pr: 246,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u226f": {
        0: null,
        1: {
            gl: "\u226f",
            nm: "not greater-than",
            pr: 244,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2270": {
        0: null,
        1: {
            gl: "\u2270",
            nm: "neither less-than nor equal to",
            pr: 260,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2271": {
        0: null,
        1: {
            gl: "\u2271",
            nm: "neither greater-than nor equal to",
            pr: 260,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2272": {
        0: null,
        1: {
            gl: "\u2272",
            nm: "less-than or equivalent to",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2273": {
        0: null,
        1: {
            gl: "\u2273",
            nm: "greater-than or equivalent to",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2274": {
        0: null,
        1: {
            gl: "\u2274",
            nm: "neither less-than nor equivalent to",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2275": {
        0: null,
        1: {
            gl: "\u2275",
            nm: "neither greater-than nor equivalent to",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2276": {
        0: null,
        1: {
            gl: "\u2276",
            nm: "less-than or greater-than",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2277": {
        0: null,
        1: {
            gl: "\u2277",
            nm: "greater-than or less-than",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2278": {
        0: null,
        1: {
            gl: "\u2278",
            nm: "neither less-than nor greater-than",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2279": {
        0: null,
        1: {
            gl: "\u2279",
            nm: "neither greater-than nor less-than",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u227a": {
        0: null,
        1: {
            gl: "\u227a",
            nm: "precedes",
            pr: 260,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u227b": {
        0: null,
        1: {
            gl: "\u227b",
            nm: "succeeds",
            pr: 260,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u227c": {
        0: null,
        1: {
            gl: "\u227c",
            nm: "precedes or equal to",
            pr: 260,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u227d": {
        0: null,
        1: {
            gl: "\u227d",
            nm: "succeeds or equal to",
            pr: 260,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u227e": {
        0: null,
        1: {
            gl: "\u227e",
            nm: "precedes or equivalent to",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u227f": {
        0: null,
        1: {
            gl: "\u227f",
            nm: "succeeds or equivalent to",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u227f\u0338": {
        0: null,
        1: {
            gl: "\u227f\u0338",
            nm: "succeeds or equivalent to with slash",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2280": {
        0: null,
        1: {
            gl: "\u2280",
            nm: "does not precede",
            pr: 260,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2281": {
        0: null,
        1: {
            gl: "\u2281",
            nm: "does not succeed",
            pr: 260,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2282": {
        0: null,
        1: {
            gl: "\u2282",
            nm: "subset of",
            pr: 240,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2282\u20d2": {
        0: null,
        1: {
            gl: "\u2282\u20d2",
            nm: "subset of with vertical line",
            pr: 240,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2283": {
        0: null,
        1: {
            gl: "\u2283",
            nm: "superset of",
            pr: 240,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2283\u20d2": {
        0: null,
        1: {
            gl: "\u2283\u20d2",
            nm: "superset of with vertical line",
            pr: 240,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2284": {
        0: null,
        1: {
            gl: "\u2284",
            nm: "not a subset of",
            pr: 240,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2285": {
        0: null,
        1: {
            gl: "\u2285",
            nm: "not a superset of",
            pr: 240,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2286": {
        0: null,
        1: {
            gl: "\u2286",
            nm: "subset of or equal to",
            pr: 240,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2287": {
        0: null,
        1: {
            gl: "\u2287",
            nm: "superset of or equal to",
            pr: 240,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2288": {
        0: null,
        1: {
            gl: "\u2288",
            nm: "neither a subset of nor equal to",
            pr: 240,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2289": {
        0: null,
        1: {
            gl: "\u2289",
            nm: "neither a superset of nor equal to",
            pr: 240,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u228a": {
        0: null,
        1: {
            gl: "\u228a",
            nm: "subset of with not equal to",
            pr: 240,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u228b": {
        0: null,
        1: {
            gl: "\u228b",
            nm: "superset of with not equal to",
            pr: 240,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u228c": {
        0: null,
        1: {
            gl: "\u228c",
            nm: "multiset",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u228d": {
        0: null,
        1: {
            gl: "\u228d",
            nm: "multiset multiplication",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u228e": {
        0: null,
        1: {
            gl: "\u228e",
            nm: "multiset union",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u228f": {
        0: null,
        1: {
            gl: "\u228f",
            nm: "square image of",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u228f\u0338": {
        0: null,
        1: {
            gl: "\u228f\u0338",
            nm: "square image of with slash",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2290": {
        0: null,
        1: {
            gl: "\u2290",
            nm: "square original of",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2290\u0338": {
        0: null,
        1: {
            gl: "\u2290\u0338",
            nm: "square original of with slash",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2291": {
        0: null,
        1: {
            gl: "\u2291",
            nm: "square image of or equal to",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2292": {
        0: null,
        1: {
            gl: "\u2292",
            nm: "square original of or equal to",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2293": {
        0: null,
        1: {
            gl: "\u2293",
            nm: "square cap",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2294": {
        0: null,
        1: {
            gl: "\u2294",
            nm: "square cup",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2295": {
        0: null,
        1: {
            gl: "\u2295",
            nm: "circled plus",
            pr: 300,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2296": {
        0: null,
        1: {
            gl: "\u2296",
            nm: "circled minus",
            pr: 300,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2297": {
        0: null,
        1: {
            gl: "\u2297",
            nm: "circled times",
            pr: 410,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2298": {
        0: null,
        1: {
            gl: "\u2298",
            nm: "circled division slash",
            pr: 300,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2299": {
        0: null,
        1: {
            gl: "\u2299",
            nm: "circled dot operator",
            pr: 710,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u229a": {
        0: null,
        1: {
            gl: "\u229a",
            nm: "circled ring operator",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u229b": {
        0: null,
        1: {
            gl: "\u229b",
            nm: "circled asterisk operator",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u229c": {
        0: null,
        1: {
            gl: "\u229c",
            nm: "circled equals",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u229d": {
        0: null,
        1: {
            gl: "\u229d",
            nm: "circled dash",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u229e": {
        0: null,
        1: {
            gl: "\u229e",
            nm: "squared plus",
            pr: 275,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u229f": {
        0: null,
        1: {
            gl: "\u229f",
            nm: "squared minus",
            pr: 275,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u22a0": {
        0: null,
        1: {
            gl: "\u22a0",
            nm: "squared times",
            pr: 390,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u22a1": {
        0: null,
        1: {
            gl: "\u22a1",
            nm: "squared dot operator",
            pr: 390,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u22a2": {
        0: null,
        1: {
            gl: "\u22a2",
            nm: "right tack",
            pr: 170,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22a3": {
        0: null,
        1: {
            gl: "\u22a3",
            nm: "left tack",
            pr: 170,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22a4": {
        0: null,
        1: {
            gl: "\u22a4",
            nm: "down tack",
            pr: 170,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22a5": {
        0: null,
        1: {
            gl: "\u22a5",
            nm: "up tack",
            pr: 260,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22a6": {
        0: null,
        1: {
            gl: "\u22a6",
            nm: "assertion",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22a7": {
        0: null,
        1: {
            gl: "\u22a7",
            nm: "models",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22a8": {
        0: null,
        1: {
            gl: "\u22a8",
            nm: "",
            pr: 170,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22a9": {
        0: null,
        1: {
            gl: "\u22a9",
            nm: "forces",
            pr: 170,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22aa": {
        0: null,
        1: {
            gl: "\u22aa",
            nm: "triple vertical bar right turnstile",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22ab": {
        0: null,
        1: {
            gl: "\u22ab",
            nm: "double vertical bar double right turnstile",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22ac": {
        0: null,
        1: {
            gl: "\u22ac",
            nm: "does not prove",
            pr: 170,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22ad": {
        0: null,
        1: {
            gl: "\u22ad",
            nm: "not true",
            pr: 170,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22ae": {
        0: null,
        1: {
            gl: "\u22ae",
            nm: "does not force",
            pr: 170,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22af": {
        0: null,
        1: {
            gl: "\u22af",
            nm: "negated double vertical bar double right turnstile",
            pr: 170,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22b0": {
        0: null,
        1: {
            gl: "\u22b0",
            nm: "precedes under relation",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22b1": {
        0: null,
        1: {
            gl: "\u22b1",
            nm: "succeeds under relation",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22b2": {
        0: null,
        1: {
            gl: "\u22b2",
            nm: "normal subgroup of",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22b3": {
        0: null,
        1: {
            gl: "\u22b3",
            nm: "contains as normal subgroup",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22b4": {
        0: null,
        1: {
            gl: "\u22b4",
            nm: "normal subgroup of or equal to",
            pr: 260,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22b5": {
        0: null,
        1: {
            gl: "\u22b5",
            nm: "contains as normal subgroup or equal to",
            pr: 260,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22b6": {
        0: null,
        1: {
            gl: "\u22b6",
            nm: "original of",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22b7": {
        0: null,
        1: {
            gl: "\u22b7",
            nm: "image of",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22b8": {
        0: null,
        1: {
            gl: "\u22b8",
            nm: "multimap",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22b9": {
        0: null,
        1: {
            gl: "\u22b9",
            nm: "hermitian conjugate matrix",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22ba": {
        0: null,
        1: {
            gl: "\u22ba",
            nm: "intercalate",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u22bb": {
        0: null,
        1: {
            gl: "\u22bb",
            nm: "xor",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u22bc": {
        0: null,
        1: {
            gl: "\u22bc",
            nm: "nand",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u22bd": {
        0: null,
        1: {
            gl: "\u22bd",
            nm: "nor",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u22be": {
        0: null,
        1: {
            gl: "\u22be",
            nm: "right angle with arc",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u22bf": {
        0: null,
        1: {
            gl: "\u22bf",
            nm: "right triangle",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u22c0": {
        0: {
            gl: "\u22c0",
            nm: "n-ary logical and",
            pr: 330,
            ls: 1,
            rs: 2,
            pp: "largeop, movablelimits, symmetric"
        },
        1: null,
        2: null
    },
    "\u22c1": {
        0: {
            gl: "\u22c1",
            nm: "n-ary logical or",
            pr: 330,
            ls: 1,
            rs: 2,
            pp: "largeop, movablelimits, symmetric"
        },
        1: null,
        2: null
    },
    "\u22c2": {
        0: {
            gl: "\u22c2",
            nm: "n-ary intersection",
            pr: 330,
            ls: 1,
            rs: 2,
            pp: "largeop, movablelimits, symmetric"
        },
        1: null,
        2: null
    },
    "\u22c3": {
        0: {
            gl: "\u22c3",
            nm: "n-ary union",
            pr: 320,
            ls: 1,
            rs: 2,
            pp: "largeop, movablelimits, symmetric"
        },
        1: null,
        2: null
    },
    "\u22c4": {
        0: null,
        1: {
            gl: "\u22c4",
            nm: "diamond operator",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u22c5": {
        0: null,
        1: {
            gl: "\u22c5",
            nm: "dot operator",
            pr: 390,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u22c6": {
        0: null,
        1: {
            gl: "\u22c6",
            nm: "star operator",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u22c7": {
        0: null,
        1: {
            gl: "\u22c7",
            nm: "division times",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u22c8": {
        0: null,
        1: {
            gl: "\u22c8",
            nm: "bowtie",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22c9": {
        0: null,
        1: {
            gl: "\u22c9",
            nm: "left normal factor semidirect product",
            pr: 260,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u22ca": {
        0: null,
        1: {
            gl: "\u22ca",
            nm: "right normal factor semidirect product",
            pr: 260,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u22cb": {
        0: null,
        1: {
            gl: "\u22cb",
            nm: "left semidirect product",
            pr: 260,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u22cc": {
        0: null,
        1: {
            gl: "\u22cc",
            nm: "right semidirect product",
            pr: 260,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u22cd": {
        0: null,
        1: {
            gl: "\u22cd",
            nm: "reversed tilde equals",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22ce": {
        0: null,
        1: {
            gl: "\u22ce",
            nm: "curly logical or",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u22cf": {
        0: null,
        1: {
            gl: "\u22cf",
            nm: "curly logical and",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u22d0": {
        0: null,
        1: {
            gl: "\u22d0",
            nm: "double subset",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22d1": {
        0: null,
        1: {
            gl: "\u22d1",
            nm: "double superset",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22d2": {
        0: null,
        1: {
            gl: "\u22d2",
            nm: "double intersection",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u22d3": {
        0: null,
        1: {
            gl: "\u22d3",
            nm: "double union",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u22d4": {
        0: null,
        1: {
            gl: "\u22d4",
            nm: "pitchfork",
            pr: 260,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22d5": {
        0: null,
        1: {
            gl: "\u22d5",
            nm: "equal and parallel to",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22d6": {
        0: null,
        1: {
            gl: "\u22d6",
            nm: "less-than with dot",
            pr: 260,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22d7": {
        0: null,
        1: {
            gl: "\u22d7",
            nm: "greater-than with dot",
            pr: 260,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22d8": {
        0: null,
        1: {
            gl: "\u22d8",
            nm: "very much less-than",
            pr: 260,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22d9": {
        0: null,
        1: {
            gl: "\u22d9",
            nm: "very much greater-than",
            pr: 260,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22da": {
        0: null,
        1: {
            gl: "\u22da",
            nm: "less-than equal to or greater-than",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22db": {
        0: null,
        1: {
            gl: "\u22db",
            nm: "greater-than equal to or less-than",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22dc": {
        0: null,
        1: {
            gl: "\u22dc",
            nm: "equal to or less-than",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22dd": {
        0: null,
        1: {
            gl: "\u22dd",
            nm: "equal to or greater-than",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22de": {
        0: null,
        1: {
            gl: "\u22de",
            nm: "equal to or precedes",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22df": {
        0: null,
        1: {
            gl: "\u22df",
            nm: "equal to or succeeds",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22e0": {
        0: null,
        1: {
            gl: "\u22e0",
            nm: "does not precede or equal",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22e1": {
        0: null,
        1: {
            gl: "\u22e1",
            nm: "does not succeed or equal",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22e2": {
        0: null,
        1: {
            gl: "\u22e2",
            nm: "not square image of or equal to",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22e3": {
        0: null,
        1: {
            gl: "\u22e3",
            nm: "not square original of or equal to",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22e4": {
        0: null,
        1: {
            gl: "\u22e4",
            nm: "square image of or not equal to",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22e5": {
        0: null,
        1: {
            gl: "\u22e5",
            nm: "square original of or not equal to",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22e6": {
        0: null,
        1: {
            gl: "\u22e6",
            nm: "less-than but not equivalent to",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22e7": {
        0: null,
        1: {
            gl: "\u22e7",
            nm: "greater-than but not equivalent to",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22e8": {
        0: null,
        1: {
            gl: "\u22e8",
            nm: "precedes but not equivalent to",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22e9": {
        0: null,
        1: {
            gl: "\u22e9",
            nm: "succeeds but not equivalent to",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22ea": {
        0: null,
        1: {
            gl: "\u22ea",
            nm: "not normal subgroup of",
            pr: 260,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22eb": {
        0: null,
        1: {
            gl: "\u22eb",
            nm: "does not contain as normal subgroup",
            pr: 260,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22ec": {
        0: null,
        1: {
            gl: "\u22ec",
            nm: "not normal subgroup of or equal to",
            pr: 260,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22ed": {
        0: null,
        1: {
            gl: "\u22ed",
            nm: "does not contain as normal subgroup or equal",
            pr: 260,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22ee": {
        0: null,
        1: {
            gl: "\u22ee",
            nm: "vertical ellipsis",
            pr: 150,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22ef": {
        0: null,
        1: {
            gl: "\u22ef",
            nm: "midline horizontal ellipsis",
            pr: 150,
            ls: 0,
            rs: 0,
            pp: ""
        },
        2: null
    },
    "\u22f0": {
        0: null,
        1: {
            gl: "\u22f0",
            nm: "up right diagonal ellipsis",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22f1": {
        0: null,
        1: {
            gl: "\u22f1",
            nm: "down right diagonal ellipsis",
            pr: 150,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22f2": {
        0: null,
        1: {
            gl: "\u22f2",
            nm: "element of with long horizontal stroke",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22f3": {
        0: null,
        1: {
            gl: "\u22f3",
            nm: "element of with vertical bar at end of horizontal stroke",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22f4": {
        0: null,
        1: {
            gl: "\u22f4",
            nm: "small element of with vertical bar at end of horizontal stroke",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22f5": {
        0: null,
        1: {
            gl: "\u22f5",
            nm: "element of with dot above",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22f6": {
        0: null,
        1: {
            gl: "\u22f6",
            nm: "element of with overbar",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22f7": {
        0: null,
        1: {
            gl: "\u22f7",
            nm: "small element of with overbar",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22f8": {
        0: null,
        1: {
            gl: "\u22f8",
            nm: "element of with underbar",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22f9": {
        0: null,
        1: {
            gl: "\u22f9",
            nm: "element of with two horizontal strokes",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22fa": {
        0: null,
        1: {
            gl: "\u22fa",
            nm: "contains with long horizontal stroke",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22fb": {
        0: null,
        1: {
            gl: "\u22fb",
            nm: "contains with vertical bar at end of horizontal stroke",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22fc": {
        0: null,
        1: {
            gl: "\u22fc",
            nm: "small contains with vertical bar at end of horizontal stroke",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22fd": {
        0: null,
        1: {
            gl: "\u22fd",
            nm: "contains with overbar",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22fe": {
        0: null,
        1: {
            gl: "\u22fe",
            nm: "small contains with overbar",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u22ff": {
        0: null,
        1: {
            gl: "\u22ff",
            nm: "z notation bag membership",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2308": {
        0: {
            gl: "\u2308",
            nm: "left ceiling",
            pr: 20,
            ls: 0,
            rs: 0,
            pp: "fence, stretchy, symmetric"
        },
        1: null,
        2: null
    },
    "\u2309": {
        0: null,
        1: null,
        2: {
            gl: "\u2309",
            nm: "right ceiling",
            pr: 20,
            ls: 0,
            rs: 0,
            pp: "fence, stretchy, symmetric"
        }
    },
    "\u230a": {
        0: {
            gl: "\u230a",
            nm: "left floor",
            pr: 20,
            ls: 0,
            rs: 0,
            pp: "fence, stretchy, symmetric"
        },
        1: null,
        2: null
    },
    "\u230b": {
        0: null,
        1: null,
        2: {
            gl: "\u230b",
            nm: "right floor",
            pr: 20,
            ls: 0,
            rs: 0,
            pp: "fence, stretchy, symmetric"
        }
    },
    "\u2329": {
        0: {
            gl: "\u2329",
            nm: "left-pointing angle bracket",
            pr: 20,
            ls: 0,
            rs: 0,
            pp: "fence, stretchy, symmetric"
        },
        1: null,
        2: null
    },
    "\u232a": {
        0: null,
        1: null,
        2: {
            gl: "\u232a",
            nm: "right-pointing angle bracket",
            pr: 20,
            ls: 0,
            rs: 0,
            pp: "fence, stretchy, symmetric"
        }
    },
    "\u23b4": {
        0: null,
        1: null,
        2: {
            gl: "\u23b4",
            nm: "top square bracket",
            pr: 880,
            ls: 0,
            rs: 0,
            pp: "stretchy, accent"
        }
    },
    "\u23b5": {
        0: null,
        1: null,
        2: {
            gl: "\u23b5",
            nm: "bottom square bracket",
            pr: 880,
            ls: 0,
            rs: 0,
            pp: "stretchy, accent"
        }
    },
    "\u23dc": {
        0: null,
        1: null,
        2: {
            gl: "\u23dc",
            nm: "top parenthesis",
            pr: 880,
            ls: 0,
            rs: 0,
            pp: "stretchy, accent"
        }
    },
    "\u23dd": {
        0: null,
        1: null,
        2: {
            gl: "\u23dd",
            nm: "bottom parenthesis",
            pr: 880,
            ls: 0,
            rs: 0,
            pp: "stretchy, accent"
        }
    },
    "\u23de": {
        0: null,
        1: null,
        2: {
            gl: "\u23de",
            nm: "top curly bracket",
            pr: 880,
            ls: 0,
            rs: 0,
            pp: "stretchy, accent"
        }
    },
    "\u23df": {
        0: null,
        1: null,
        2: {
            gl: "\u23df",
            nm: "bottom curly bracket",
            pr: 880,
            ls: 0,
            rs: 0,
            pp: "stretchy, accent"
        }
    },
    "\u23e0": {
        0: null,
        1: null,
        2: {
            gl: "\u23e0",
            nm: "top tortoise shell bracket",
            pr: 880,
            ls: 0,
            rs: 0,
            pp: "stretchy, accent"
        }
    },
    "\u23e1": {
        0: null,
        1: null,
        2: {
            gl: "\u23e1",
            nm: "bottom tortoise shell bracket",
            pr: 880,
            ls: 0,
            rs: 0,
            pp: "stretchy, accent"
        }
    },
    "\u25a0": {
        0: null,
        1: {
            gl: "\u25a0",
            nm: "black square",
            pr: 260,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u25a1": {
        0: null,
        1: {
            gl: "\u25a1",
            nm: "white square",
            pr: 260,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u25aa": {
        0: null,
        1: {
            gl: "\u25aa",
            nm: "black small square",
            pr: 260,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u25ab": {
        0: null,
        1: {
            gl: "\u25ab",
            nm: "white small square",
            pr: 260,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u25ad": {
        0: null,
        1: {
            gl: "\u25ad",
            nm: "white rectangle",
            pr: 260,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u25ae": {
        0: null,
        1: {
            gl: "\u25ae",
            nm: "black vertical rectangle",
            pr: 260,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u25af": {
        0: null,
        1: {
            gl: "\u25af",
            nm: "white vertical rectangle",
            pr: 260,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u25b0": {
        0: null,
        1: {
            gl: "\u25b0",
            nm: "black parallelogram",
            pr: 260,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u25b1": {
        0: null,
        1: {
            gl: "\u25b1",
            nm: "white parallelogram",
            pr: 260,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u25b2": {
        0: null,
        1: {
            gl: "\u25b2",
            nm: "black up-pointing triangle",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u25b3": {
        0: null,
        1: {
            gl: "\u25b3",
            nm: "white up-pointing triangle",
            pr: 260,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u25b4": {
        0: null,
        1: {
            gl: "\u25b4",
            nm: "black up-pointing small triangle",
            pr: 260,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u25b5": {
        0: null,
        1: {
            gl: "\u25b5",
            nm: "white up-pointing small triangle",
            pr: 260,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u25b6": {
        0: null,
        1: {
            gl: "\u25b6",
            nm: "black right-pointing triangle",
            pr: 260,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u25b7": {
        0: null,
        1: {
            gl: "\u25b7",
            nm: "white right-pointing triangle",
            pr: 260,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u25b8": {
        0: null,
        1: {
            gl: "\u25b8",
            nm: "black right-pointing small triangle",
            pr: 260,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u25b9": {
        0: null,
        1: {
            gl: "\u25b9",
            nm: "white right-pointing small triangle",
            pr: 260,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u25bc": {
        0: null,
        1: {
            gl: "\u25bc",
            nm: "black down-pointing triangle",
            pr: 260,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u25bd": {
        0: null,
        1: {
            gl: "\u25bd",
            nm: "white down-pointing triangle",
            pr: 260,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u25be": {
        0: null,
        1: {
            gl: "\u25be",
            nm: "black down-pointing small triangle",
            pr: 260,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u25bf": {
        0: null,
        1: {
            gl: "\u25bf",
            nm: "white down-pointing small triangle",
            pr: 260,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u25c0": {
        0: null,
        1: {
            gl: "\u25c0",
            nm: "black left-pointing triangle",
            pr: 260,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u25c1": {
        0: null,
        1: {
            gl: "\u25c1",
            nm: "white left-pointing triangle",
            pr: 260,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u25c2": {
        0: null,
        1: {
            gl: "\u25c2",
            nm: "black left-pointing small triangle",
            pr: 260,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u25c3": {
        0: null,
        1: {
            gl: "\u25c3",
            nm: "white left-pointing small triangle",
            pr: 260,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u25c4": {
        0: null,
        1: {
            gl: "\u25c4",
            nm: "black left-pointing pointer",
            pr: 260,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u25c5": {
        0: null,
        1: {
            gl: "\u25c5",
            nm: "white left-pointing pointer",
            pr: 260,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u25c6": {
        0: null,
        1: {
            gl: "\u25c6",
            nm: "black diamond",
            pr: 260,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u25c7": {
        0: null,
        1: {
            gl: "\u25c7",
            nm: "white diamond",
            pr: 260,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u25c8": {
        0: null,
        1: {
            gl: "\u25c8",
            nm: "white diamond containing black small diamond",
            pr: 260,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u25c9": {
        0: null,
        1: {
            gl: "\u25c9",
            nm: "fisheye",
            pr: 260,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u25cc": {
        0: null,
        1: {
            gl: "\u25cc",
            nm: "dotted circle",
            pr: 260,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u25cd": {
        0: null,
        1: {
            gl: "\u25cd",
            nm: "circle with vertical fill",
            pr: 260,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u25ce": {
        0: null,
        1: {
            gl: "\u25ce",
            nm: "bullseye",
            pr: 260,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u25cf": {
        0: null,
        1: {
            gl: "\u25cf",
            nm: "black circle",
            pr: 260,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u25d6": {
        0: null,
        1: {
            gl: "\u25d6",
            nm: "left half black circle",
            pr: 260,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u25d7": {
        0: null,
        1: {
            gl: "\u25d7",
            nm: "right half black circle",
            pr: 260,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u25e6": {
        0: null,
        1: {
            gl: "\u25e6",
            nm: "white bullet",
            pr: 260,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u266d": {
        0: null,
        1: null,
        2: {
            gl: "\u266d",
            nm: "music flat sign",
            pr: 800,
            ls: 0,
            rs: 2,
            pp: ""
        }
    },
    "\u266e": {
        0: null,
        1: null,
        2: {
            gl: "\u266e",
            nm: "music natural sign",
            pr: 800,
            ls: 0,
            rs: 2,
            pp: ""
        }
    },
    "\u266f": {
        0: null,
        1: null,
        2: {
            gl: "\u266f",
            nm: "music sharp sign",
            pr: 800,
            ls: 0,
            r$s: 2,
            pp: ""
        }
    },
    "\u2758": {
        0: null,
        1: {
            gl: "\u2758",
            nm: "light vertical bar",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2772": {
        0: {
            gl: "\u2772",
            nm: "light left tortoise shell bracket ornament",
            pr: 20,
            ls: 0,
            rs: 0,
            pp: "fence, stretchy, symmetric"
        },
        1: null,
        2: null
    },
    "\u2773": {
        0: null,
        1: null,
        2: {
            gl: "\u2773",
            nm: "light right tortoise shell bracket ornament",
            pr: 20,
            ls: 0,
            rs: 0,
            pp: "fence, stretchy, symmetric"
        }
    },
    "\u27c2": {
        0: null,
        1: {
            gl: "\u27c2",
            nm: "perp",
            pr: 260,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u27e6": {
        0: {
            gl: "\u27e6",
            nm: "mathematical left white square bracket",
            pr: 20,
            ls: 0,
            rs: 0,
            pp: "fence, stretchy, symmetric"
        },
        1: null,
        2: null
    },
    "\u27e7": {
        0: null,
        1: null,
        2: {
            gl: "\u27e7",
            nm: "mathematical right white square bracket",
            pr: 20,
            ls: 0,
            rs: 0,
            pp: "fence, stretchy, symmetric"
        }
    },
    "\u27e8": {
        0: {
            gl: "\u27e8",
            nm: "mathematical left angle bracket",
            pr: 20,
            ls: 0,
            rs: 0,
            pp: "fence, stretchy, symmetric"
        },
        1: null,
        2: null
    },
    "\u27e9": {
        0: null,
        1: null,
        2: {
            gl: "\u27e9",
            nm: "mathematical right angle bracket",
            pr: 20,
            ls: 0,
            rs: 0,
            pp: "fence, stretchy, symmetric"
        }
    },
    "\u27ea": {
        0: {
            gl: "\u27ea",
            nm: "mathematical left double angle bracket",
            pr: 20,
            ls: 0,
            rs: 0,
            pp: "fence, stretchy, symmetric"
        },
        1: null,
        2: null
    },
    "\u27eb": {
        0: null,
        1: null,
        2: {
            gl: "\u27eb",
            nm: "mathematical right double angle bracket",
            pr: 20,
            ls: 0,
            rs: 0,
            pp: "fence, stretchy, symmetric"
        }
    },
    "\u27ec": {
        0: {
            gl: "\u27ec",
            nm: "mathematical left white tortoise shell bracket",
            pr: 20,
            ls: 0,
            rs: 0,
            pp: "fence, stretchy, symmetric"
        },
        1: null,
        2: null
    },
    "\u27ed": {
        0: null,
        1: null,
        2: {
            gl: "\u27ed",
            nm: "mathematical right white tortoise shell bracket",
            pr: 20,
            ls: 0,
            rs: 0,
            pp: "fence, stretchy, symmetric"
        }
    },
    "\u27ee": {
        0: {
            gl: "\u27ee",
            nm: "mathematical left flattened parenthesis",
            pr: 20,
            ls: 0,
            rs: 0,
            pp: "fence, stretchy, symmetric"
        },
        1: null,
        2: null
    },
    "\u27ef": {
        0: null,
        1: null,
        2: {
            gl: "\u27ef",
            nm: "mathematical right flattened parenthesis",
            pr: 20,
            ls: 0,
            rs: 0,
            pp: "fence, stretchy, symmetric"
        }
    },
    "\u27f0": {
        0: null,
        1: {
            gl: "\u27f0",
            nm: "upwards quadruple arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u27f1": {
        0: null,
        1: {
            gl: "\u27f1",
            nm: "downwards quadruple arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u27f5": {
        0: null,
        1: {
            gl: "\u27f5",
            nm: "long leftwards arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u27f6": {
        0: null,
        1: {
            gl: "\u27f6",
            nm: "long rightwards arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u27f7": {
        0: null,
        1: {
            gl: "\u27f7",
            nm: "long left right arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u27f8": {
        0: null,
        1: {
            gl: "\u27f8",
            nm: "long leftwards double arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u27f9": {
        0: null,
        1: {
            gl: "\u27f9",
            nm: "long rightwards double arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u27fa": {
        0: null,
        1: {
            gl: "\u27fa",
            nm: "long left right double arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u27fb": {
        0: null,
        1: {
            gl: "\u27fb",
            nm: "long leftwards arrow from bar",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u27fc": {
        0: null,
        1: {
            gl: "\u27fc",
            nm: "long rightwards arrow from bar",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u27fd": {
        0: null,
        1: {
            gl: "\u27fd",
            nm: "long leftwards double arrow from bar",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u27fe": {
        0: null,
        1: {
            gl: "\u27fe",
            nm: "long rightwards double arrow from bar",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u27ff": {
        0: null,
        1: {
            gl: "\u27ff",
            nm: "long rightwards squiggle arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u2900": {
        0: null,
        1: {
            gl: "\u2900",
            nm: "rightwards two-headed arrow with vertical stroke",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u2901": {
        0: null,
        1: {
            gl: "\u2901",
            nm: "rightwards two-headed arrow with double vertical stroke",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u2902": {
        0: null,
        1: {
            gl: "\u2902",
            nm: "leftwards double arrow with vertical stroke",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u2903": {
        0: null,
        1: {
            gl: "\u2903",
            nm: "rightwards double arrow with vertical stroke",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u2904": {
        0: null,
        1: {
            gl: "\u2904",
            nm: "left right double arrow with vertical stroke",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u2905": {
        0: null,
        1: {
            gl: "\u2905",
            nm: "rightwards two-headed arrow from bar",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u2906": {
        0: null,
        1: {
            gl: "\u2906",
            nm: "leftwards double arrow from bar",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u2907": {
        0: null,
        1: {
            gl: "\u2907",
            nm: "rightwards double arrow from bar",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u2908": {
        0: null,
        1: {
            gl: "\u2908",
            nm: "downwards arrow with horizontal stroke",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2909": {
        0: null,
        1: {
            gl: "\u2909",
            nm: "upwards arrow with horizontal stroke",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u290a": {
        0: null,
        1: {
            gl: "\u290a",
            nm: "upwards triple arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u290b": {
        0: null,
        1: {
            gl: "\u290b",
            nm: "downwards triple arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u290c": {
        0: null,
        1: {
            gl: "\u290c",
            nm: "leftwards double dash arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u290d": {
        0: null,
        1: {
            gl: "\u290d",
            nm: "rightwards double dash arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u290e": {
        0: null,
        1: {
            gl: "\u290e",
            nm: "leftwards triple dash arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u290f": {
        0: null,
        1: {
            gl: "\u290f",
            nm: "rightwards triple dash arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u2910": {
        0: null,
        1: {
            gl: "\u2910",
            nm: "rightwards two-headed triple dash arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u2911": {
        0: null,
        1: {
            gl: "\u2911",
            nm: "rightwards arrow with dotted stem",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u2912": {
        0: null,
        1: {
            gl: "\u2912",
            nm: "upwards arrow to bar",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u2913": {
        0: null,
        1: {
            gl: "\u2913",
            nm: "downwards arrow to bar",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u2914": {
        0: null,
        1: {
            gl: "\u2914",
            nm: "rightwards arrow with tail with vertical stroke",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u2915": {
        0: null,
        1: {
            gl: "\u2915",
            nm: "rightwards arrow with tail with double vertical stroke",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u2916": {
        0: null,
        1: {
            gl: "\u2916",
            nm: "rightwards two-headed arrow with tail",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u2917": {
        0: null,
        1: {
            gl: "\u2917",
            nm: "rightwards two-headed arrow with tail with vertical stroke",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u2918": {
        0: null,
        1: {
            gl: "\u2918",
            nm: "rightwards two-headed arrow with tail with double vertical stroke",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u2919": {
        0: null,
        1: {
            gl: "\u2919",
            nm: "leftwards arrow-tail",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u291a": {
        0: null,
        1: {
            gl: "\u291a",
            nm: "rightwards arrow-tail",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u291b": {
        0: null,
        1: {
            gl: "\u291b",
            nm: "leftwards double arrow-tail",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u291c": {
        0: null,
        1: {
            gl: "\u291c",
            nm: "rightwards double arrow-tail",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u291d": {
        0: null,
        1: {
            gl: "\u291d",
            nm: "leftwards arrow to black diamond",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u291e": {
        0: null,
        1: {
            gl: "\u291e",
            nm: "rightwards arrow to black diamond",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u291f": {
        0: null,
        1: {
            gl: "\u291f",
            nm: "leftwards arrow from bar to black diamond",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u2920": {
        0: null,
        1: {
            gl: "\u2920",
            nm: "rightwards arrow from bar to black diamond",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u2921": {
        0: null,
        1: {
            gl: "\u2921",
            nm: "north west and south east arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u2922": {
        0: null,
        1: {
            gl: "\u2922",
            nm: "north east and south west arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u2923": {
        0: null,
        1: {
            gl: "\u2923",
            nm: "north west arrow with hook",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2924": {
        0: null,
        1: {
            gl: "\u2924",
            nm: "north east arrow with hook",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2925": {
        0: null,
        1: {
            gl: "\u2925",
            nm: "south east arrow with hook",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2926": {
        0: null,
        1: {
            gl: "\u2926",
            nm: "south west arrow with hook",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2927": {
        0: null,
        1: {
            gl: "\u2927",
            nm: "north west arrow and north east arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2928": {
        0: null,
        1: {
            gl: "\u2928",
            nm: "north east arrow and south east arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2929": {
        0: null,
        1: {
            gl: "\u2929",
            nm: "south east arrow and south west arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u292a": {
        0: null,
        1: {
            gl: "\u292a",
            nm: "south west arrow and north west arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u292b": {
        0: null,
        1: {
            gl: "\u292b",
            nm: "rising diagonal crossing falling diagonal",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u292c": {
        0: null,
        1: {
            gl: "\u292c",
            nm: "falling diagonal crossing rising diagonal",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u292d": {
        0: null,
        1: {
            gl: "\u292d",
            nm: "south east arrow crossing north east arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u292e": {
        0: null,
        1: {
            gl: "\u292e",
            nm: "north east arrow crossing south east arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u292f": {
        0: null,
        1: {
            gl: "\u292f",
            nm: "falling diagonal crossing north east arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2930": {
        0: null,
        1: {
            gl: "\u2930",
            nm: "rising diagonal crossing south east arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2931": {
        0: null,
        1: {
            gl: "\u2931",
            nm: "north east arrow crossing north west arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2932": {
        0: null,
        1: {
            gl: "\u2932",
            nm: "north west arrow crossing north east arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2933": {
        0: null,
        1: {
            gl: "\u2933",
            nm: "wave arrow pointing directly right",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u2934": {
        0: null,
        1: {
            gl: "\u2934",
            nm: "arrow pointing rightwards then curving upwards",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2935": {
        0: null,
        1: {
            gl: "\u2935",
            nm: "arrow pointing rightwards then curving downwards",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2936": {
        0: null,
        1: {
            gl: "\u2936",
            nm: "arrow pointing downwards then curving leftwards",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2937": {
        0: null,
        1: {
            gl: "\u2937",
            nm: "arrow pointing downwards then curving rightwards",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2938": {
        0: null,
        1: {
            gl: "\u2938",
            nm: "right-side arc clockwise arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2939": {
        0: null,
        1: {
            gl: "\u2939",
            nm: "left-side arc anticlockwise arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u293a": {
        0: null,
        1: {
            gl: "\u293a",
            nm: "top arc anticlockwise arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u293b": {
        0: null,
        1: {
            gl: "\u293b",
            nm: "bottom arc anticlockwise arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u293c": {
        0: null,
        1: {
            gl: "\u293c",
            nm: "top arc clockwise arrow with minus",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u293d": {
        0: null,
        1: {
            gl: "\u293d",
            nm: "top arc anticlockwise arrow with plus",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u293e": {
        0: null,
        1: {
            gl: "\u293e",
            nm: "lower right semicircular clockwise arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u293f": {
        0: null,
        1: {
            gl: "\u293f",
            nm: "lower left semicircular anticlockwise arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2940": {
        0: null,
        1: {
            gl: "\u2940",
            nm: "anticlockwise closed circle arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2941": {
        0: null,
        1: {
            gl: "\u2941",
            nm: "clockwise closed circle arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2942": {
        0: null,
        1: {
            gl: "\u2942",
            nm: "rightwards arrow above short leftwards arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u2943": {
        0: null,
        1: {
            gl: "\u2943",
            nm: "leftwards arrow above short rightwards arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u2944": {
        0: null,
        1: {
            gl: "\u2944",
            nm: "short rightwards arrow above leftwards arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u2945": {
        0: null,
        1: {
            gl: "\u2945",
            nm: "rightwards arrow with plus below",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u2946": {
        0: null,
        1: {
            gl: "\u2946",
            nm: "leftwards arrow with plus below",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u2947": {
        0: null,
        1: {
            gl: "\u2947",
            nm: "rightwards arrow through x",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u2948": {
        0: null,
        1: {
            gl: "\u2948",
            nm: "left right arrow through small circle",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u2949": {
        0: null,
        1: {
            gl: "\u2949",
            nm: "upwards two-headed arrow from small circle",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u294a": {
        0: null,
        1: {
            gl: "\u294a",
            nm: "left barb up right barb down harpoon",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u294b": {
        0: null,
        1: {
            gl: "\u294b",
            nm: "left barb down right barb up harpoon",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u294c": {
        0: null,
        1: {
            gl: "\u294c",
            nm: "up barb right down barb left harpoon",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u294d": {
        0: null,
        1: {
            gl: "\u294d",
            nm: "up barb left down barb right harpoon",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u294e": {
        0: null,
        1: {
            gl: "\u294e",
            nm: "left barb up right barb up harpoon",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u294f": {
        0: null,
        1: {
            gl: "\u294f",
            nm: "up barb right down barb right harpoon",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u2950": {
        0: null,
        1: {
            gl: "\u2950",
            nm: "left barb down right barb down harpoon",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u2951": {
        0: null,
        1: {
            gl: "\u2951",
            nm: "up barb left down barb left harpoon",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u2952": {
        0: null,
        1: {
            gl: "\u2952",
            nm: "leftwards harpoon with barb up to bar",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u2953": {
        0: null,
        1: {
            gl: "\u2953",
            nm: "rightwards harpoon with barb up to bar",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u2954": {
        0: null,
        1: {
            gl: "\u2954",
            nm: "upwards harpoon with barb right to bar",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u2955": {
        0: null,
        1: {
            gl: "\u2955",
            nm: "downwards harpoon with barb right to bar",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u2956": {
        0: null,
        1: {
            gl: "\u2956",
            nm: "leftwards harpoon with barb down to bar",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u2957": {
        0: null,
        1: {
            gl: "\u2957",
            nm: "rightwards harpoon with barb down to bar",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u2958": {
        0: null,
        1: {
            gl: "\u2958",
            nm: "upwards harpoon with barb left to bar",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u2959": {
        0: null,
        1: {
            gl: "\u2959",
            nm: "downwards harpoon with barb left to bar",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u295a": {
        0: null,
        1: {
            gl: "\u295a",
            nm: "leftwards harpoon with barb up from bar",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u295b": {
        0: null,
        1: {
            gl: "\u295b",
            nm: "rightwards harpoon with barb up from bar",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u295c": {
        0: null,
        1: {
            gl: "\u295c",
            nm: "upwards harpoon with barb right from bar",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u295d": {
        0: null,
        1: {
            gl: "\u295d",
            nm: "downwards harpoon with barb right from bar",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u295e": {
        0: null,
        1: {
            gl: "\u295e",
            nm: "leftwards harpoon with barb down from bar",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u295f": {
        0: null,
        1: {
            gl: "\u295f",
            nm: "rightwards harpoon with barb down from bar",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy, accent"
        },
        2: null
    },
    "\u2960": {
        0: null,
        1: {
            gl: "\u2960",
            nm: "upwards harpoon with barb left from bar",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u2961": {
        0: null,
        1: {
            gl: "\u2961",
            nm: "downwards harpoon with barb left from bar",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u2962": {
        0: null,
        1: {
            gl: "\u2962",
            nm: "leftwards harpoon with barb up above leftwards harpoon with barb down",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u2963": {
        0: null,
        1: {
            gl: "\u2963",
            nm: "upwards harpoon with barb left beside upwards harpoon with barb right",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2964": {
        0: null,
        1: {
            gl: "\u2964",
            nm: "rightwards harpoon with barb up above rightwards harpoon with barb down",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u2965": {
        0: null,
        1: {
            gl: "\u2965",
            nm: "downwards harpoon with barb left beside downwards harpoon with barb right",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2966": {
        0: null,
        1: {
            gl: "\u2966",
            nm: "leftwards harpoon with barb up above rightwards harpoon with barb up",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u2967": {
        0: null,
        1: {
            gl: "\u2967",
            nm: "leftwards harpoon with barb down above rightwards harpoon with barb down",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u2968": {
        0: null,
        1: {
            gl: "\u2968",
            nm: "rightwards harpoon with barb up above leftwards harpoon with barb up",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u2969": {
        0: null,
        1: {
            gl: "\u2969",
            nm: "rightwards harpoon with barb down above leftwards harpoon with barb down",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u296a": {
        0: null,
        1: {
            gl: "\u296a",
            nm: "leftwards harpoon with barb up above long dash",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u296b": {
        0: null,
        1: {
            gl: "\u296b",
            nm: "leftwards harpoon with barb down below long dash",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u296c": {
        0: null,
        1: {
            gl: "\u296c",
            nm: "rightwards harpoon with barb up above long dash",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u296d": {
        0: null,
        1: {
            gl: "\u296d",
            nm: "rightwards harpoon with barb down below long dash",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u296e": {
        0: null,
        1: {
            gl: "\u296e",
            nm: "upwards harpoon with barb left beside downwards harpoon with barb right",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u296f": {
        0: null,
        1: {
            gl: "\u296f",
            nm: "downwards harpoon with barb left beside upwards harpoon with barb right",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u2970": {
        0: null,
        1: {
            gl: "\u2970",
            nm: "right double arrow with rounded head",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u2971": {
        0: null,
        1: {
            gl: "\u2971",
            nm: "equals sign above rightwards arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u2972": {
        0: null,
        1: {
            gl: "\u2972",
            nm: "tilde operator above rightwards arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u2973": {
        0: null,
        1: {
            gl: "\u2973",
            nm: "leftwards arrow above tilde operator",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u2974": {
        0: null,
        1: {
            gl: "\u2974",
            nm: "rightwards arrow above tilde operator",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u2975": {
        0: null,
        1: {
            gl: "\u2975",
            nm: "rightwards arrow above almost equal to",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u2976": {
        0: null,
        1: {
            gl: "\u2976",
            nm: "less-than above leftwards arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u2977": {
        0: null,
        1: {
            gl: "\u2977",
            nm: "leftwards arrow through less-than",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u2978": {
        0: null,
        1: {
            gl: "\u2978",
            nm: "greater-than above rightwards arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u2979": {
        0: null,
        1: {
            gl: "\u2979",
            nm: "subset above rightwards arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u297a": {
        0: null,
        1: {
            gl: "\u297a",
            nm: "leftwards arrow through subset",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u297b": {
        0: null,
        1: {
            gl: "\u297b",
            nm: "superset above leftwards arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u297c": {
        0: null,
        1: {
            gl: "\u297c",
            nm: "left fish tail",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u297d": {
        0: null,
        1: {
            gl: "\u297d",
            nm: "right fish tail",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "accent"
        },
        2: null
    },
    "\u297e": {
        0: null,
        1: {
            gl: "\u297e",
            nm: "up fish tail",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u297f": {
        0: null,
        1: {
            gl: "\u297f",
            nm: "down fish tail",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2980": {
        0: {
            gl: "\u2980",
            nm: "triple vertical bar delimiter",
            pr: 20,
            ls: 0,
            rs: 0,
            pp: "fence, stretchy"
        },
        1: null,
        2: {
            gl: "\u2980",
            nm: "triple vertical bar delimiter",
            pr: 20,
            ls: 0,
            rs: 0,
            pp: "fence, stretchy"
        }
    },
    "\u2981": {
        0: null,
        1: {
            gl: "\u2981",
            nm: "z notation spot",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u2982": {
        0: null,
        1: {
            gl: "\u2982",
            nm: "z notation type colon",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u2983": {
        0: {
            gl: "\u2983",
            nm: "left white curly bracket",
            pr: 20,
            ls: 0,
            rs: 0,
            pp: "fence, stretchy, symmetric"
        },
        1: null,
        2: null
    },
    "\u2984": {
        0: null,
        1: null,
        2: {
            gl: "\u2984",
            nm: "right white curly bracket",
            pr: 20,
            ls: 0,
            rs: 0,
            pp: "fence, stretchy, symmetric"
        }
    },
    "\u2985": {
        0: {
            gl: "\u2985",
            nm: "left white parenthesis",
            pr: 20,
            ls: 0,
            rs: 0,
            pp: "fence, stretchy, symmetric"
        },
        1: null,
        2: null
    },
    "\u2986": {
        0: null,
        1: null,
        2: {
            gl: "\u2986",
            nm: "right white parenthesis",
            pr: 20,
            ls: 0,
            rs: 0,
            pp: "fence, stretchy, symmetric"
        }
    },
    "\u2987": {
        0: {
            gl: "\u2987",
            nm: "z notation left image bracket",
            pr: 20,
            ls: 0,
            rs: 0,
            pp: "fence, stretchy, symmetric"
        },
        1: null,
        2: null
    },
    "\u2988": {
        0: null,
        1: null,
        2: {
            gl: "\u2988",
            nm: "z notation right image bracket",
            pr: 20,
            ls: 0,
            rs: 0,
            pp: "fence, stretchy, symmetric"
        }
    },
    "\u2989": {
        0: {
            gl: "\u2989",
            nm: "z notation left binding bracket",
            pr: 20,
            ls: 0,
            rs: 0,
            pp: "fence, stretchy, symmetric"
        },
        1: null,
        2: null
    },
    "\u298a": {
        0: null,
        1: null,
        2: {
            gl: "\u298a",
            nm: "z notation right binding bracket",
            pr: 20,
            ls: 0,
            rs: 0,
            pp: "fence, stretchy, symmetric"
        }
    },
    "\u298b": {
        0: {
            gl: "\u298b",
            nm: "left square bracket with underbar",
            pr: 20,
            ls: 0,
            rs: 0,
            pp: "fence, stretchy, symmetric"
        },
        1: null,
        2: null
    },
    "\u298c": {
        0: null,
        1: null,
        2: {
            gl: "\u298c",
            nm: "right square bracket with underbar",
            pr: 20,
            ls: 0,
            rs: 0,
            pp: "fence, stretchy, symmetric"
        }
    },
    "\u298d": {
        0: {
            gl: "\u298d",
            nm: "left square bracket with tick in top corner",
            pr: 20,
            ls: 0,
            rs: 0,
            pp: "fence, stretchy, symmetric"
        },
        1: null,
        2: null
    },
    "\u298e": {
        0: null,
        1: null,
        2: {
            gl: "\u298e",
            nm: "right square bracket with tick in bottom corner",
            pr: 20,
            ls: 0,
            rs: 0,
            pp: "fence, stretchy, symmetric"
        }
    },
    "\u298f": {
        0: {
            gl: "\u298f",
            nm: "left square bracket with tick in bottom corner",
            pr: 20,
            ls: 0,
            rs: 0,
            pp: "fence, stretchy, symmetric"
        },
        1: null,
        2: null
    },
    "\u2990": {
        0: null,
        1: null,
        2: {
            gl: "\u2990",
            nm: "right square bracket with tick in top corner",
            pr: 20,
            ls: 0,
            rs: 0,
            pp: "fence, stretchy, symmetric"
        }
    },
    "\u2991": {
        0: {
            gl: "\u2991",
            nm: "left angle bracket with dot",
            pr: 20,
            ls: 0,
            rs: 0,
            pp: "fence, stretchy, symmetric"
        },
        1: null,
        2: null
    },
    "\u2992": {
        0: null,
        1: null,
        2: {
            gl: "\u2992",
            nm: "right angle bracket with dot",
            pr: 20,
            ls: 0,
            rs: 0,
            pp: "fence, stretchy, symmetric"
        }
    },
    "\u2993": {
        0: {
            gl: "\u2993",
            nm: "left arc less-than bracket",
            pr: 20,
            ls: 0,
            rs: 0,
            pp: "fence, stretchy, symmetric"
        },
        1: null,
        2: null
    },
    "\u2994": {
        0: null,
        1: null,
        2: {
            gl: "\u2994",
            nm: "right arc greater-than bracket",
            pr: 20,
            ls: 0,
            rs: 0,
            pp: "fence, stretchy, symmetric"
        }
    },
    "\u2995": {
        0: {
            gl: "\u2995",
            nm: "double left arc greater-than bracket",
            pr: 20,
            ls: 0,
            rs: 0,
            pp: "fence, stretchy, symmetric"
        },
        1: null,
        2: null
    },
    "\u2996": {
        0: null,
        1: null,
        2: {
            gl: "\u2996",
            nm: "double right arc less-than bracket",
            pr: 20,
            ls: 0,
            rs: 0,
            pp: "fence, stretchy, symmetric"
        }
    },
    "\u2997": {
        0: {
            gl: "\u2997",
            nm: "left black tortoise shell bracket",
            pr: 20,
            ls: 0,
            rs: 0,
            pp: "fence, stretchy, symmetric"
        },
        1: null,
        2: null
    },
    "\u2998": {
        0: null,
        1: null,
        2: {
            gl: "\u2998",
            nm: "right black tortoise shell bracket",
            pr: 20,
            ls: 0,
            rs: 0,
            pp: "fence, stretchy, symmetric"
        }
    },
    "\u2999": {
        0: null,
        1: {
            gl: "\u2999",
            nm: "dotted fence",
            pr: 270,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u299a": {
        0: null,
        1: {
            gl: "\u299a",
            nm: "vertical zigzag line",
            pr: 270,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u299b": {
        0: null,
        1: {
            gl: "\u299b",
            nm: "measured angle opening left",
            pr: 270,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u299c": {
        0: null,
        1: {
            gl: "\u299c",
            nm: "right angle variant with square",
            pr: 270,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u299d": {
        0: null,
        1: {
            gl: "\u299d",
            nm: "measured right angle with dot",
            pr: 270,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u299e": {
        0: null,
        1: {
            gl: "\u299e",
            nm: "angle with s inside",
            pr: 270,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u299f": {
        0: null,
        1: {
            gl: "\u299f",
            nm: "acute angle",
            pr: 270,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u29a0": {
        0: null,
        1: {
            gl: "\u29a0",
            nm: "spherical angle opening left",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u29a1": {
        0: null,
        1: {
            gl: "\u29a1",
            nm: "spherical angle opening up",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u29a2": {
        0: null,
        1: {
            gl: "\u29a2",
            nm: "turned angle",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u29a3": {
        0: null,
        1: {
            gl: "\u29a3",
            nm: "reversed angle",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u29a4": {
        0: null,
        1: {
            gl: "\u29a4",
            nm: "angle with underbar",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u29a5": {
        0: null,
        1: {
            gl: "\u29a5",
            nm: "reversed angle with underbar",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u29a6": {
        0: null,
        1: {
            gl: "\u29a6",
            nm: "oblique angle opening up",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u29a7": {
        0: null,
        1: {
            gl: "\u29a7",
            nm: "oblique angle opening down",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u29a8": {
        0: null,
        1: {
            gl: "\u29a8",
            nm: "measured angle with open arm ending in arrow pointing up and right",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u29a9": {
        0: null,
        1: {
            gl: "\u29a9",
            nm: "measured angle with open arm ending in arrow pointing up and left",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u29aa": {
        0: null,
        1: {
            gl: "\u29aa",
            nm: "measured angle with open arm ending in arrow pointing down and right",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u29ab": {
        0: null,
        1: {
            gl: "\u29ab",
            nm: "measured angle with open arm ending in arrow pointing down and left",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u29ac": {
        0: null,
        1: {
            gl: "\u29ac",
            nm: "measured angle with open arm ending in arrow pointing right and up",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u29ad": {
        0: null,
        1: {
            gl: "\u29ad",
            nm: "measured angle with open arm ending in arrow pointing left and up",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u29ae": {
        0: null,
        1: {
            gl: "\u29ae",
            nm: "measured angle with open arm ending in arrow pointing right and down",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u29af": {
        0: null,
        1: {
            gl: "\u29af",
            nm: "measured angle with open arm ending in arrow pointing left and down",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u29b0": {
        0: null,
        1: {
            gl: "\u29b0",
            nm: "reversed empty set",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u29b1": {
        0: null,
        1: {
            gl: "\u29b1",
            nm: "empty set with overbar",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u29b2": {
        0: null,
        1: {
            gl: "\u29b2",
            nm: "empty set with small circle above",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u29b3": {
        0: null,
        1: {
            gl: "\u29b3",
            nm: "empty set with right arrow above",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u29b4": {
        0: null,
        1: {
            gl: "\u29b4",
            nm: "empty set with left arrow above",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u29b5": {
        0: null,
        1: {
            gl: "\u29b5",
            nm: "circle with horizontal bar",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u29b6": {
        0: null,
        1: {
            gl: "\u29b6",
            nm: "circled vertical bar",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u29b7": {
        0: null,
        1: {
            gl: "\u29b7",
            nm: "circled parallel",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u29b8": {
        0: null,
        1: {
            gl: "\u29b8",
            nm: "circled reverse solidus",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u29b9": {
        0: null,
        1: {
            gl: "\u29b9",
            nm: "circled perpendicular",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u29ba": {
        0: null,
        1: {
            gl: "\u29ba",
            nm: "circle divided by horizontal bar and top half divided by vertical bar",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u29bb": {
        0: null,
        1: {
            gl: "\u29bb",
            nm: "circle with superimposed x",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u29bc": {
        0: null,
        1: {
            gl: "\u29bc",
            nm: "circled anticlockwise-rotated division sign",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u29bd": {
        0: null,
        1: {
            gl: "\u29bd",
            nm: "up arrow through circle",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u29be": {
        0: null,
        1: {
            gl: "\u29be",
            nm: "circled white bullet",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u29bf": {
        0: null,
        1: {
            gl: "\u29bf",
            nm: "circled bullet",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u29c0": {
        0: null,
        1: {
            gl: "\u29c0",
            nm: "circled less-than",
            pr: 260,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u29c1": {
        0: null,
        1: {
            gl: "\u29c1",
            nm: "circled greater-than",
            pr: 260,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u29c2": {
        0: null,
        1: {
            gl: "\u29c2",
            nm: "circle with small circle to the right",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u29c3": {
        0: null,
        1: {
            gl: "\u29c3",
            nm: "circle with two horizontal strokes to the right",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u29c4": {
        0: null,
        1: {
            gl: "\u29c4",
            nm: "squared rising diagonal slash",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u29c5": {
        0: null,
        1: {
            gl: "\u29c5",
            nm: "squared falling diagonal slash",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u29c6": {
        0: null,
        1: {
            gl: "\u29c6",
            nm: "squared asterisk",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u29c7": {
        0: null,
        1: {
            gl: "\u29c7",
            nm: "squared small circle",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u29c8": {
        0: null,
        1: {
            gl: "\u29c8",
            nm: "squared square",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u29c9": {
        0: null,
        1: {
            gl: "\u29c9",
            nm: "two joined squares",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u29ca": {
        0: null,
        1: {
            gl: "\u29ca",
            nm: "triangle with dot above",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u29cb": {
        0: null,
        1: {
            gl: "\u29cb",
            nm: "triangle with underbar",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u29cc": {
        0: null,
        1: {
            gl: "\u29cc",
            nm: "s in triangle",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u29cd": {
        0: null,
        1: {
            gl: "\u29cd",
            nm: "triangle with serifs at bottom",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u29ce": {
        0: null,
        1: {
            gl: "\u29ce",
            nm: "right triangle above left triangle",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u29cf": {
        0: null,
        1: {
            gl: "\u29cf",
            nm: "left triangle beside vertical bar",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u29cf\u0338": {
        0: null,
        1: {
            gl: "\u29cf\u0338",
            nm: "left triangle beside vertical bar with slash",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u29d0": {
        0: null,
        1: {
            gl: "\u29d0",
            nm: "vertical bar beside right triangle",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u29d0\u0338": {
        0: null,
        1: {
            gl: "\u29d0\u0338",
            nm: "vertical bar beside right triangle with slash",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u29d1": {
        0: null,
        1: {
            gl: "\u29d1",
            nm: "bowtie with left half black",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u29d2": {
        0: null,
        1: {
            gl: "\u29d2",
            nm: "bowtie with right half black",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u29d3": {
        0: null,
        1: {
            gl: "\u29d3",
            nm: "black bowtie",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u29d4": {
        0: null,
        1: {
            gl: "\u29d4",
            nm: "times with left half black",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u29d5": {
        0: null,
        1: {
            gl: "\u29d5",
            nm: "times with right half black",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u29d6": {
        0: null,
        1: {
            gl: "\u29d6",
            nm: "white hourglass",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u29d7": {
        0: null,
        1: {
            gl: "\u29d7",
            nm: "black hourglass",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u29d8": {
        0: null,
        1: {
            gl: "\u29d8",
            nm: "left wiggly fence",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u29d9": {
        0: null,
        1: {
            gl: "\u29d9",
            nm: "right wiggly fence",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u29db": {
        0: null,
        1: {
            gl: "\u29db",
            nm: "right double wiggly fence",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u29dc": {
        0: null,
        1: {
            gl: "\u29dc",
            nm: "incomplete infinity",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u29dd": {
        0: null,
        1: {
            gl: "\u29dd",
            nm: "tie over infinity",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u29de": {
        0: null,
        1: {
            gl: "\u29de",
            nm: "infinity negated with vertical bar",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u29df": {
        0: null,
        1: {
            gl: "\u29df",
            nm: "double-ended multimap",
            pr: 270,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u29e0": {
        0: null,
        1: {
            gl: "\u29e0",
            nm: "square with contoured outline",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u29e1": {
        0: null,
        1: {
            gl: "\u29e1",
            nm: "increases as",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u29e2": {
        0: null,
        1: {
            gl: "\u29e2",
            nm: "shuffle product",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u29e3": {
        0: null,
        1: {
            gl: "\u29e3",
            nm: "equals sign and slanted parallel",
            pr: 260,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u29e4": {
        0: null,
        1: {
            gl: "\u29e4",
            nm: "equals sign and slanted parallel with tilde above",
            pr: 260,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u29e5": {
        0: null,
        1: {
            gl: "\u29e5",
            nm: "identical to and slanted parallel",
            pr: 260,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u29e6": {
        0: null,
        1: {
            gl: "\u29e6",
            nm: "gleich stark",
            pr: 260,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u29e7": {
        0: null,
        1: {
            gl: "\u29e7",
            nm: "thermodynamic",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u29e8": {
        0: null,
        1: {
            gl: "\u29e8",
            nm: "down-pointing triangle with left half black",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u29e9": {
        0: null,
        1: {
            gl: "\u29e9",
            nm: "down-pointing triangle with right half black",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u29ea": {
        0: null,
        1: {
            gl: "\u29ea",
            nm: "black diamond with down arrow",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u29eb": {
        0: null,
        1: {
            gl: "\u29eb",
            nm: "black lozenge",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u29ec": {
        0: null,
        1: {
            gl: "\u29ec",
            nm: "white circle with down arrow",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u29ed": {
        0: null,
        1: {
            gl: "\u29ed",
            nm: "black circle with down arrow",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u29ee": {
        0: null,
        1: {
            gl: "\u29ee",
            nm: "error-barred white square",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u29ef": {
        0: null,
        1: {
            gl: "\u29ef",
            nm: "error-barred black square",
            pr: 270,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u29f0": {
        0: null,
        1: {
            gl: "\u29f0",
            nm: "error-barred white diamond",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u29f1": {
        0: null,
        1: {
            gl: "\u29f1",
            nm: "error-barred black diamond",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u29f2": {
        0: null,
        1: {
            gl: "\u29f2",
            nm: "error-barred white circle",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u29f3": {
        0: null,
        1: {
            gl: "\u29f3",
            nm: "error-barred black circle",
            pr: 260,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u29f4": {
        0: null,
        1: {
            gl: "\u29f4",
            nm: "rule-delayed",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u29f5": {
        0: null,
        1: {
            gl: "\u29f5",
            nm: "reverse solidus operator",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u29f6": {
        0: null,
        1: {
            gl: "\u29f6",
            nm: "solidus with overbar",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u29f7": {
        0: null,
        1: {
            gl: "\u29f7",
            nm: "reverse solidus with horizontal stroke",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u29f8": {
        0: null,
        1: {
            gl: "\u29f8",
            nm: "big solidus",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u29f9": {
        0: null,
        1: {
            gl: "\u29f9",
            nm: "big reverse solidus",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u29fa": {
        0: null,
        1: {
            gl: "\u29fa",
            nm: "double plus",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u29fb": {
        0: null,
        1: {
            gl: "\u29fb",
            nm: "triple plus",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u29fc": {
        0: {
            gl: "\u29fc",
            nm: "left-pointing curved angle bracket",
            pr: 20,
            ls: 0,
            rs: 0,
            pp: "fence, stretchy, symmetric"
        },
        1: null,
        2: null
    },
    "\u29fd": {
        0: null,
        1: null,
        2: {
            gl: "\u29fd",
            nm: "right-pointing curved angle bracket",
            pr: 20,
            ls: 0,
            rs: 0,
            pp: "fence, stretchy, symmetric"
        }
    },
    "\u29fe": {
        0: null,
        1: {
            gl: "\u29fe",
            nm: "tiny",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u29ff": {
        0: null,
        1: {
            gl: "\u29ff",
            nm: "miny",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a00": {
        0: {
            gl: "\u2a00",
            nm: "n-ary circled dot operator",
            pr: 330,
            ls: 1,
            rs: 2,
            pp: "largeop, movablelimits, symmetric"
        },
        1: null,
        2: null
    },
    "\u2a01": {
        0: {
            gl: "\u2a01",
            nm: "n-ary circled plus operator",
            pr: 300,
            ls: 1,
            rs: 2,
            pp: "largeop, movablelimits, symmetric"
        },
        1: null,
        2: null
    },
    "\u2a02": {
        0: {
            gl: "\u2a02",
            nm: "n-ary circled times operator",
            pr: 330,
            ls: 1,
            rs: 2,
            pp: "largeop, movablelimits, symmetric"
        },
        1: null,
        2: null
    },
    "\u2a03": {
        0: {
            gl: "\u2a03",
            nm: "n-ary union operator with dot",
            pr: 320,
            ls: 1,
            rs: 2,
            pp: "largeop, movablelimits, symmetric"
        },
        1: null,
        2: null
    },
    "\u2a04": {
        0: {
            gl: "\u2a04",
            nm: "n-ary union operator with plus",
            pr: 320,
            ls: 1,
            rs: 2,
            pp: "largeop, movablelimits, symmetric"
        },
        1: null,
        2: null
    },
    "\u2a05": {
        0: {
            gl: "\u2a05",
            nm: "n-ary square intersection operator",
            pr: 330,
            ls: 1,
            rs: 2,
            pp: "largeop, movablelimits, symmetric"
        },
        1: null,
        2: null
    },
    "\u2a06": {
        0: {
            gl: "\u2a06",
            nm: "n-ary square union operator",
            pr: 330,
            ls: 1,
            rs: 2,
            pp: "largeop, movablelimits, symmetric"
        },
        1: null,
        2: null
    },
    "\u2a07": {
        0: {
            gl: "\u2a07",
            nm: "two logical and operator",
            pr: 330,
            ls: 1,
            rs: 2,
            pp: "largeop, movablelimits, symmetric"
        },
        1: null,
        2: null
    },
    "\u2a08": {
        0: {
            gl: "\u2a08",
            nm: "two logical or operator",
            pr: 330,
            ls: 1,
            rs: 2,
            pp: "largeop, movablelimits, symmetric"
        },
        1: null,
        2: null
    },
    "\u2a09": {
        0: {
            gl: "\u2a09",
            nm: "n-ary times operator",
            pr: 330,
            ls: 1,
            rs: 2,
            pp: "largeop, movablelimits, symmetric"
        },
        1: null,
        2: null
    },
    "\u2a0a": {
        0: {
            gl: "\u2a0a",
            nm: "modulo two sum",
            pr: 290,
            ls: 1,
            rs: 2,
            pp: "largeop, movablelimits, symmetric"
        },
        1: null,
        2: null
    },
    "\u2a0b": {
        0: {
            gl: "\u2a0b",
            nm: "summation with integral",
            pr: 290,
            ls: 1,
            rs: 2,
            pp: "largeop, symmetric"
        },
        1: null,
        2: null
    },
    "\u2a0c": {
        0: {
            gl: "\u2a0c",
            nm: "quadruple integral operator",
            pr: 310,
            ls: 0,
            rs: 1,
            pp: "largeop, symmetric"
        },
        1: null,
        2: null
    },
    "\u2a0d": {
        0: {
            gl: "\u2a0d",
            nm: "finite part integral",
            pr: 310,
            ls: 1,
            rs: 2,
            pp: "largeop, symmetric"
        },
        1: null,
        2: null
    },
    "\u2a0e": {
        0: {
            gl: "\u2a0e",
            nm: "integral with double stroke",
            pr: 310,
            ls: 1,
            rs: 2,
            pp: "largeop, symmetric"
        },
        1: null,
        2: null
    },
    "\u2a0f": {
        0: {
            gl: "\u2a0f",
            nm: "integral average with slash",
            pr: 310,
            ls: 1,
            rs: 2,
            pp: "largeop, symmetric"
        },
        1: null,
        2: null
    },
    "\u2a10": {
        0: {
            gl: "\u2a10",
            nm: "circulation function",
            pr: 310,
            ls: 1,
            rs: 2,
            pp: "largeop, movablelimits, symmetric"
        },
        1: null,
        2: null
    },
    "\u2a11": {
        0: {
            gl: "\u2a11",
            nm: "anticlockwise integration",
            pr: 310,
            ls: 1,
            rs: 2,
            pp: "largeop, movablelimits, symmetric"
        },
        1: null,
        2: null
    },
    "\u2a12": {
        0: {
            gl: "\u2a12",
            nm: "line integration with rectangular path around pole",
            pr: 310,
            ls: 1,
            rs: 2,
            pp: "largeop, movablelimits, symmetric"
        },
        1: null,
        2: null
    },
    "\u2a13": {
        0: {
            gl: "\u2a13",
            nm: "line integration with semicircular path around pole",
            pr: 310,
            ls: 1,
            rs: 2,
            pp: "largeop, movablelimits, symmetric"
        },
        1: null,
        2: null
    },
    "\u2a14": {
        0: {
            gl: "\u2a14",
            nm: "line integration not including the pole",
            pr: 310,
            ls: 1,
            rs: 2,
            pp: "largeop, movablelimits, symmetric"
        },
        1: null,
        2: null
    },
    "\u2a15": {
        0: {
            gl: "\u2a15",
            nm: "integral around a point operator",
            pr: 310,
            ls: 1,
            rs: 2,
            pp: "largeop, symmetric"
        },
        1: null,
        2: null
    },
    "\u2a16": {
        0: {
            gl: "\u2a16",
            nm: "quaternion integral operator",
            pr: 310,
            ls: 1,
            rs: 2,
            pp: "largeop, symmetric"
        },
        1: null,
        2: null
    },
    "\u2a17": {
        0: {
            gl: "\u2a17",
            nm: "integral with leftwards arrow with hook",
            pr: 310,
            ls: 1,
            rs: 2,
            pp: "largeop, symmetric"
        },
        1: null,
        2: null
    },
    "\u2a18": {
        0: {
            gl: "\u2a18",
            nm: "integral with times sign",
            pr: 310,
            ls: 1,
            rs: 2,
            pp: "largeop, symmetric"
        },
        1: null,
        2: null
    },
    "\u2a19": {
        0: {
            gl: "\u2a19",
            nm: "integral with intersection",
            pr: 310,
            ls: 1,
            rs: 2,
            pp: "largeop, symmetric"
        },
        1: null,
        2: null
    },
    "\u2a1a": {
        0: {
            gl: "\u2a1a",
            nm: "integral with union",
            pr: 310,
            ls: 1,
            rs: 2,
            pp: "largeop, symmetric"
        },
        1: null,
        2: null
    },
    "\u2a1b": {
        0: {
            gl: "\u2a1b",
            nm: "integral with overbar",
            pr: 310,
            ls: 1,
            rs: 2,
            pp: "largeop, symmetric"
        },
        1: null,
        2: null
    },
    "\u2a1c": {
        0: {
            gl: "\u2a1c",
            nm: "integral with underbar",
            pr: 310,
            ls: 1,
            rs: 2,
            pp: "largeop, symmetric"
        },
        1: null,
        2: null
    },
    "\u2a1d": {
        0: null,
        1: {
            gl: "\u2a1d",
            nm: "join",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u2a1e": {
        0: null,
        1: {
            gl: "\u2a1e",
            nm: "large left triangle operator",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u2a1f": {
        0: null,
        1: {
            gl: "\u2a1f",
            nm: "z notation schema composition",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u2a20": {
        0: null,
        1: {
            gl: "\u2a20",
            nm: "z notation schema piping",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u2a21": {
        0: null,
        1: {
            gl: "\u2a21",
            nm: "z notation schema projection",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u2a22": {
        0: null,
        1: {
            gl: "\u2a22",
            nm: "plus sign with small circle above",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a23": {
        0: null,
        1: {
            gl: "\u2a23",
            nm: "plus sign with circumflex accent above",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a24": {
        0: null,
        1: {
            gl: "\u2a24",
            nm: "plus sign with tilde above",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a25": {
        0: null,
        1: {
            gl: "\u2a25",
            nm: "plus sign with dot below",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a26": {
        0: null,
        1: {
            gl: "\u2a26",
            nm: "plus sign with tilde below",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a27": {
        0: null,
        1: {
            gl: "\u2a27",
            nm: "plus sign with subscript two",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a28": {
        0: null,
        1: {
            gl: "\u2a28",
            nm: "plus sign with black triangle",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a29": {
        0: null,
        1: {
            gl: "\u2a29",
            nm: "minus sign with comma above",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a2a": {
        0: null,
        1: {
            gl: "\u2a2a",
            nm: "minus sign with dot below",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a2b": {
        0: null,
        1: {
            gl: "\u2a2b",
            nm: "minus sign with falling dots",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a2c": {
        0: null,
        1: {
            gl: "\u2a2c",
            nm: "minus sign with rising dots",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a2d": {
        0: null,
        1: {
            gl: "\u2a2d",
            nm: "plus sign in left half circle",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a2e": {
        0: null,
        1: {
            gl: "\u2a2e",
            nm: "plus sign in right half circle",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a2f": {
        0: null,
        1: {
            gl: "\u2a2f",
            nm: "vector or cross product",
            pr: 390,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a30": {
        0: null,
        1: {
            gl: "\u2a30",
            nm: "multiplication sign with dot above",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a31": {
        0: null,
        1: {
            gl: "\u2a31",
            nm: "multiplication sign with underbar",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a32": {
        0: null,
        1: {
            gl: "\u2a32",
            nm: "semidirect product with bottom closed",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a33": {
        0: null,
        1: {
            gl: "\u2a33",
            nm: "smash product",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a34": {
        0: null,
        1: {
            gl: "\u2a34",
            nm: "multiplication sign in left half circle",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a35": {
        0: null,
        1: {
            gl: "\u2a35",
            nm: "multiplication sign in right half circle",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a36": {
        0: null,
        1: {
            gl: "\u2a36",
            nm: "circled multiplication sign with circumflex accent",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a37": {
        0: null,
        1: {
            gl: "\u2a37",
            nm: "multiplication sign in double circle",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a38": {
        0: null,
        1: {
            gl: "\u2a38",
            nm: "circled division sign",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a39": {
        0: null,
        1: {
            gl: "\u2a39",
            nm: "plus sign in triangle",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a3a": {
        0: null,
        1: {
            gl: "\u2a3a",
            nm: "minus sign in triangle",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a3b": {
        0: null,
        1: {
            gl: "\u2a3b",
            nm: "multiplication sign in triangle",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a3c": {
        0: null,
        1: {
            gl: "\u2a3c",
            nm: "interior product",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a3d": {
        0: null,
        1: {
            gl: "\u2a3d",
            nm: "righthand interior product",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a3e": {
        0: null,
        1: {
            gl: "\u2a3e",
            nm: "z notation relational composition",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a3f": {
        0: null,
        1: {
            gl: "\u2a3f",
            nm: "amalgamation or coproduct",
            pr: 390,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a40": {
        0: null,
        1: {
            gl: "\u2a40",
            nm: "intersection with dot",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a41": {
        0: null,
        1: {
            gl: "\u2a41",
            nm: "union with minus sign",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a42": {
        0: null,
        1: {
            gl: "\u2a42",
            nm: "union with overbar",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a43": {
        0: null,
        1: {
            gl: "\u2a43",
            nm: "intersection with overbar",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a44": {
        0: null,
        1: {
            gl: "\u2a44",
            nm: "intersection with logical and",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a45": {
        0: null,
        1: {
            gl: "\u2a45",
            nm: "union with logical or",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a46": {
        0: null,
        1: {
            gl: "\u2a46",
            nm: "union above intersection",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a47": {
        0: null,
        1: {
            gl: "\u2a47",
            nm: "intersection above union",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a48": {
        0: null,
        1: {
            gl: "\u2a48",
            nm: "union above bar above intersection",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a49": {
        0: null,
        1: {
            gl: "\u2a49",
            nm: "intersection above bar above union",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a4a": {
        0: null,
        1: {
            gl: "\u2a4a",
            nm: "union beside and joined with union",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a4b": {
        0: null,
        1: {
            gl: "\u2a4b",
            nm: "intersection beside and joined with intersection",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a4c": {
        0: null,
        1: {
            gl: "\u2a4c",
            nm: "closed union with serifs",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a4d": {
        0: null,
        1: {
            gl: "\u2a4d",
            nm: "closed intersection with serifs",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a4e": {
        0: null,
        1: {
            gl: "\u2a4e",
            nm: "double square intersection",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a4f": {
        0: null,
        1: {
            gl: "\u2a4f",
            nm: "double square union",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a50": {
        0: null,
        1: {
            gl: "\u2a50",
            nm: "closed union with serifs and smash product",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a51": {
        0: null,
        1: {
            gl: "\u2a51",
            nm: "logical and with dot above",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a52": {
        0: null,
        1: {
            gl: "\u2a52",
            nm: "logical or with dot above",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a53": {
        0: null,
        1: {
            gl: "\u2a53",
            nm: "double logical and",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a54": {
        0: null,
        1: {
            gl: "\u2a54",
            nm: "double logical or",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a55": {
        0: null,
        1: {
            gl: "\u2a55",
            nm: "two intersecting logical and",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a56": {
        0: null,
        1: {
            gl: "\u2a56",
            nm: "two intersecting logical or",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a57": {
        0: null,
        1: {
            gl: "\u2a57",
            nm: "sloping large or",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a58": {
        0: null,
        1: {
            gl: "\u2a58",
            nm: "sloping large and",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a59": {
        0: null,
        1: {
            gl: "\u2a59",
            nm: "logical or overlapping logical and",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2a5a": {
        0: null,
        1: {
            gl: "\u2a5a",
            nm: "logical and with middle stem",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a5b": {
        0: null,
        1: {
            gl: "\u2a5b",
            nm: "logical or with middle stem",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a5c": {
        0: null,
        1: {
            gl: "\u2a5c",
            nm: "logical and with horizontal dash",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a5d": {
        0: null,
        1: {
            gl: "\u2a5d",
            nm: "logical or with horizontal dash",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a5e": {
        0: null,
        1: {
            gl: "\u2a5e",
            nm: "logical and with double overbar",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a5f": {
        0: null,
        1: {
            gl: "\u2a5f",
            nm: "logical and with underbar",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a60": {
        0: null,
        1: {
            gl: "\u2a60",
            nm: "logical and with double underbar",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a61": {
        0: null,
        1: {
            gl: "\u2a61",
            nm: "small vee with underbar",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a62": {
        0: null,
        1: {
            gl: "\u2a62",
            nm: "logical or with double overbar",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a63": {
        0: null,
        1: {
            gl: "\u2a63",
            nm: "logical or with double underbar",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a64": {
        0: null,
        1: {
            gl: "\u2a64",
            nm: "z notation domain antirestriction",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a65": {
        0: null,
        1: {
            gl: "\u2a65",
            nm: "z notation range antirestriction",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a66": {
        0: null,
        1: {
            gl: "\u2a66",
            nm: "equals sign with dot below",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2a67": {
        0: null,
        1: {
            gl: "\u2a67",
            nm: "identical with dot above",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2a68": {
        0: null,
        1: {
            gl: "\u2a68",
            nm: "triple horizontal bar with double vertical stroke",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2a69": {
        0: null,
        1: {
            gl: "\u2a69",
            nm: "triple horizontal bar with triple vertical stroke",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2a6a": {
        0: null,
        1: {
            gl: "\u2a6a",
            nm: "tilde operator with dot above",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2a6b": {
        0: null,
        1: {
            gl: "\u2a6b",
            nm: "tilde operator with rising dots",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2a6c": {
        0: null,
        1: {
            gl: "\u2a6c",
            nm: "similar minus similar",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2a6d": {
        0: null,
        1: {
            gl: "\u2a6d",
            nm: "congruent with dot above",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2a6e": {
        0: null,
        1: {
            gl: "\u2a6e",
            nm: "equals with asterisk",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2a6f": {
        0: null,
        1: {
            gl: "\u2a6f",
            nm: "almost equal to with circumflex accent",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2a70": {
        0: null,
        1: {
            gl: "\u2a70",
            nm: "approximately equal or equal to",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2a71": {
        0: null,
        1: {
            gl: "\u2a71",
            nm: "equals sign above plus sign",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a72": {
        0: null,
        1: {
            gl: "\u2a72",
            nm: "plus sign above equals sign",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2a73": {
        0: null,
        1: {
            gl: "\u2a73",
            nm: "equals sign above tilde operator",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2a74": {
        0: null,
        1: {
            gl: "\u2a74",
            nm: "double colon equal",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2a75": {
        0: null,
        1: {
            gl: "\u2a75",
            nm: "two consecutive equals signs",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2a76": {
        0: null,
        1: {
            gl: "\u2a76",
            nm: "three consecutive equals signs",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2a77": {
        0: null,
        1: {
            gl: "\u2a77",
            nm: "equals sign with two dots above and two dots below",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2a78": {
        0: null,
        1: {
            gl: "\u2a78",
            nm: "equivalent with four dots above",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2a79": {
        0: null,
        1: {
            gl: "\u2a79",
            nm: "less-than with circle inside",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2a7a": {
        0: null,
        1: {
            gl: "\u2a7a",
            nm: "greater-than with circle inside",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2a7b": {
        0: null,
        1: {
            gl: "\u2a7b",
            nm: "less-than with question mark above",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2a7c": {
        0: null,
        1: {
            gl: "\u2a7c",
            nm: "greater-than with question mark above",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2a7d": {
        0: null,
        1: {
            gl: "\u2a7d",
            nm: "less-than or slanted equal to",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2a7d\u0338": {
        0: null,
        1: {
            gl: "\u2a7d\u0338",
            nm: "less-than or slanted equal to with slash",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2a7e": {
        0: null,
        1: {
            gl: "\u2a7e",
            nm: "greater-than or slanted equal to",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2a7e\u0338": {
        0: null,
        1: {
            gl: "\u2a7e\u0338",
            nm: "greater-than or slanted equal to with slash",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2a7f": {
        0: null,
        1: {
            gl: "\u2a7f",
            nm: "less-than or slanted equal to with dot inside",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2a80": {
        0: null,
        1: {
            gl: "\u2a80",
            nm: "greater-than or slanted equal to with dot inside",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2a81": {
        0: null,
        1: {
            gl: "\u2a81",
            nm: "less-than or slanted equal to with dot above",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2a82": {
        0: null,
        1: {
            gl: "\u2a82",
            nm: "greater-than or slanted equal to with dot above",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2a83": {
        0: null,
        1: {
            gl: "\u2a83",
            nm: "less-than or slanted equal to with dot above right",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2a84": {
        0: null,
        1: {
            gl: "\u2a84",
            nm: "greater-than or slanted equal to with dot above left",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2a85": {
        0: null,
        1: {
            gl: "\u2a85",
            nm: "less-than or approximate",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2a86": {
        0: null,
        1: {
            gl: "\u2a86",
            nm: "greater-than or approximate",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2a87": {
        0: null,
        1: {
            gl: "\u2a87",
            nm: "less-than and single-line not equal to",
            pr: 260,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2a88": {
        0: null,
        1: {
            gl: "\u2a88",
            nm: "greater-than and single-line not equal to",
            pr: 260,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2a89": {
        0: null,
        1: {
            gl: "\u2a89",
            nm: "less-than and not approximate",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2a8a": {
        0: null,
        1: {
            gl: "\u2a8a",
            nm: "greater-than and not approximate",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2a8b": {
        0: null,
        1: {
            gl: "\u2a8b",
            nm: "less-than above double-line equal above greater-than",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2a8c": {
        0: null,
        1: {
            gl: "\u2a8c",
            nm: "greater-than above double-line equal above less-than",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2a8d": {
        0: null,
        1: {
            gl: "\u2a8d",
            nm: "less-than above similar or equal",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2a8e": {
        0: null,
        1: {
            gl: "\u2a8e",
            nm: "greater-than above similar or equal",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2a8f": {
        0: null,
        1: {
            gl: "\u2a8f",
            nm: "less-than above similar above greater-than",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2a90": {
        0: null,
        1: {
            gl: "\u2a90",
            nm: "greater-than above similar above less-than",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2a91": {
        0: null,
        1: {
            gl: "\u2a91",
            nm: "less-than above greater-than above double-line equal",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2a92": {
        0: null,
        1: {
            gl: "\u2a92",
            nm: "greater-than above less-than above double-line equal",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2a93": {
        0: null,
        1: {
            gl: "\u2a93",
            nm: "less-than above slanted equal above greater-than above slanted equal",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2a94": {
        0: null,
        1: {
            gl: "\u2a94",
            nm: "greater-than above slanted equal above less-than above slanted equal",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2a95": {
        0: null,
        1: {
            gl: "\u2a95",
            nm: "slanted equal to or less-than",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2a96": {
        0: null,
        1: {
            gl: "\u2a96",
            nm: "slanted equal to or greater-than",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2a97": {
        0: null,
        1: {
            gl: "\u2a97",
            nm: "slanted equal to or less-than with dot inside",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2a98": {
        0: null,
        1: {
            gl: "\u2a98",
            nm: "slanted equal to or greater-than with dot inside",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2a99": {
        0: null,
        1: {
            gl: "\u2a99",
            nm: "double-line equal to or less-than",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2a9a": {
        0: null,
        1: {
            gl: "\u2a9a",
            nm: "double-line equal to or greater-than",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2a9b": {
        0: null,
        1: {
            gl: "\u2a9b",
            nm: "double-line slanted equal to or less-than",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2a9c": {
        0: null,
        1: {
            gl: "\u2a9c",
            nm: "double-line slanted equal to or greater-than",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2a9d": {
        0: null,
        1: {
            gl: "\u2a9d",
            nm: "similar or less-than",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2a9e": {
        0: null,
        1: {
            gl: "\u2a9e",
            nm: "similar or greater-than",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2a9f": {
        0: null,
        1: {
            gl: "\u2a9f",
            nm: "similar above less-than above equals sign",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2aa0": {
        0: null,
        1: {
            gl: "\u2aa0",
            nm: "similar above greater-than above equals sign",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2aa1": {
        0: null,
        1: {
            gl: "\u2aa1",
            nm: "double nested less-than",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2aa1\u0338": {
        0: null,
        1: {
            gl: "\u2aa1\u0338",
            nm: "double nested less-than with slash",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2aa2": {
        0: null,
        1: {
            gl: "\u2aa2",
            nm: "double nested greater-than",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2aa2\u0338": {
        0: null,
        1: {
            gl: "\u2aa2\u0338",
            nm: "double nested greater-than with slash",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2aa3": {
        0: null,
        1: {
            gl: "\u2aa3",
            nm: "double nested less-than with underbar",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2aa4": {
        0: null,
        1: {
            gl: "\u2aa4",
            nm: "greater-than overlapping less-than",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2aa5": {
        0: null,
        1: {
            gl: "\u2aa5",
            nm: "greater-than beside less-than",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2aa6": {
        0: null,
        1: {
            gl: "\u2aa6",
            nm: "less-than closed by curve",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2aa7": {
        0: null,
        1: {
            gl: "\u2aa7",
            nm: "greater-than closed by curve",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2aa8": {
        0: null,
        1: {
            gl: "\u2aa8",
            nm: "less-than closed by curve above slanted equal",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2aa9": {
        0: null,
        1: {
            gl: "\u2aa9",
            nm: "greater-than closed by curve above slanted equal",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2aaa": {
        0: null,
        1: {
            gl: "\u2aaa",
            nm: "smaller than",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2aab": {
        0: null,
        1: {
            gl: "\u2aab",
            nm: "larger than",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2aac": {
        0: null,
        1: {
            gl: "\u2aac",
            nm: "smaller than or equal to",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2aad": {
        0: null,
        1: {
            gl: "\u2aad",
            nm: "larger than or equal to",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2aae": {
        0: null,
        1: {
            gl: "\u2aae",
            nm: "equals sign with bumpy above",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2aaf": {
        0: null,
        1: {
            gl: "\u2aaf",
            nm: "precedes above single-line equals sign",
            pr: 260,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2aaf\u0338": {
        0: null,
        1: {
            gl: "\u2aaf\u0338",
            nm: "precedes above single-line equals sign with slash",
            pr: 260,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2ab0": {
        0: null,
        1: {
            gl: "\u2ab0",
            nm: "succeeds above single-line equals sign",
            pr: 260,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2ab0\u0338": {
        0: null,
        1: {
            gl: "\u2ab0\u0338",
            nm: "succeeds above single-line equals sign with slash",
            pr: 260,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2ab1": {
        0: null,
        1: {
            gl: "\u2ab1",
            nm: "precedes above single-line not equal to",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2ab2": {
        0: null,
        1: {
            gl: "\u2ab2",
            nm: "succeeds above single-line not equal to",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2ab3": {
        0: null,
        1: {
            gl: "\u2ab3",
            nm: "precedes above equals sign",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2ab4": {
        0: null,
        1: {
            gl: "\u2ab4",
            nm: "succeeds above equals sign",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2ab5": {
        0: null,
        1: {
            gl: "\u2ab5",
            nm: "precedes above not equal to",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2ab6": {
        0: null,
        1: {
            gl: "\u2ab6",
            nm: "succeeds above not equal to",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2ab7": {
        0: null,
        1: {
            gl: "\u2ab7",
            nm: "precedes above almost equal to",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2ab8": {
        0: null,
        1: {
            gl: "\u2ab8",
            nm: "succeeds above almost equal to",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2ab9": {
        0: null,
        1: {
            gl: "\u2ab9",
            nm: "precedes above not almost equal to",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2aba": {
        0: null,
        1: {
            gl: "\u2aba",
            nm: "succeeds above not almost equal to",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2abb": {
        0: null,
        1: {
            gl: "\u2abb",
            nm: "double precedes",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2abc": {
        0: null,
        1: {
            gl: "\u2abc",
            nm: "double succeeds",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2abd": {
        0: null,
        1: {
            gl: "\u2abd",
            nm: "subset with dot",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2abe": {
        0: null,
        1: {
            gl: "\u2abe",
            nm: "superset with dot",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2abf": {
        0: null,
        1: {
            gl: "\u2abf",
            nm: "subset with plus sign below",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2ac0": {
        0: null,
        1: {
            gl: "\u2ac0",
            nm: "superset with plus sign below",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2ac1": {
        0: null,
        1: {
            gl: "\u2ac1",
            nm: "subset with multiplication sign below",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2ac2": {
        0: null,
        1: {
            gl: "\u2ac2",
            nm: "superset with multiplication sign below",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2ac3": {
        0: null,
        1: {
            gl: "\u2ac3",
            nm: "subset of or equal to with dot above",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2ac4": {
        0: null,
        1: {
            gl: "\u2ac4",
            nm: "superset of or equal to with dot above",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2ac5": {
        0: null,
        1: {
            gl: "\u2ac5",
            nm: "subset of above equals sign",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2ac6": {
        0: null,
        1: {
            gl: "\u2ac6",
            nm: "superset of above equals sign",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2ac7": {
        0: null,
        1: {
            gl: "\u2ac7",
            nm: "subset of above tilde operator",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2ac8": {
        0: null,
        1: {
            gl: "\u2ac8",
            nm: "superset of above tilde operator",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2ac9": {
        0: null,
        1: {
            gl: "\u2ac9",
            nm: "subset of above almost equal to",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2aca": {
        0: null,
        1: {
            gl: "\u2aca",
            nm: "superset of above almost equal to",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2acb": {
        0: null,
        1: {
            gl: "\u2acb",
            nm: "subset of above not equal to",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2acc": {
        0: null,
        1: {
            gl: "\u2acc",
            nm: "superset of above not equal to",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2acd": {
        0: null,
        1: {
            gl: "\u2acd",
            nm: "square left open box operator",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2ace": {
        0: null,
        1: {
            gl: "\u2ace",
            nm: "square right open box operator",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2acf": {
        0: null,
        1: {
            gl: "\u2acf",
            nm: "closed subset",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2ad0": {
        0: null,
        1: {
            gl: "\u2ad0",
            nm: "closed superset",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2ad1": {
        0: null,
        1: {
            gl: "\u2ad1",
            nm: "closed subset or equal to",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2ad2": {
        0: null,
        1: {
            gl: "\u2ad2",
            nm: "closed superset or equal to",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2ad3": {
        0: null,
        1: {
            gl: "\u2ad3",
            nm: "subset above superset",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2ad4": {
        0: null,
        1: {
            gl: "\u2ad4",
            nm: "superset above subset",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2ad5": {
        0: null,
        1: {
            gl: "\u2ad5",
            nm: "subset above subset",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2ad6": {
        0: null,
        1: {
            gl: "\u2ad6",
            nm: "superset above superset",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2ad7": {
        0: null,
        1: {
            gl: "\u2ad7",
            nm: "superset beside subset",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2ad8": {
        0: null,
        1: {
            gl: "\u2ad8",
            nm: "superset beside and joined by dash with subset",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2ad9": {
        0: null,
        1: {
            gl: "\u2ad9",
            nm: "element of opening downwards",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2ada": {
        0: null,
        1: {
            gl: "\u2ada",
            nm: "pitchfork with tee top",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2adb": {
        0: null,
        1: {
            gl: "\u2adb",
            nm: "transversal intersection",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2add": {
        0: null,
        1: {
            gl: "\u2add",
            nm: "nonforking",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2add\u0338": {
        0: null,
        1: {
            gl: "\u2add\u0338",
            nm: "nonforking with slash",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2ade": {
        0: null,
        1: {
            gl: "\u2ade",
            nm: "short left tack",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2adf": {
        0: null,
        1: {
            gl: "\u2adf",
            nm: "short down tack",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2ae0": {
        0: null,
        1: {
            gl: "\u2ae0",
            nm: "short up tack",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2ae1": {
        0: null,
        1: {
            gl: "\u2ae1",
            nm: "perpendicular with s",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2ae2": {
        0: null,
        1: {
            gl: "\u2ae2",
            nm: "vertical bar triple right turnstile",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2ae3": {
        0: null,
        1: {
            gl: "\u2ae3",
            nm: "double vertical bar left turnstile",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2ae4": {
        0: null,
        1: {
            gl: "\u2ae4",
            nm: "vertical bar double left turnstile",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2ae5": {
        0: null,
        1: {
            gl: "\u2ae5",
            nm: "double vertical bar double left turnstile",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2ae6": {
        0: null,
        1: {
            gl: "\u2ae6",
            nm: "long dash from left member of double vertical",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2ae7": {
        0: null,
        1: {
            gl: "\u2ae7",
            nm: "short down tack with overbar",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2ae8": {
        0: null,
        1: {
            gl: "\u2ae8",
            nm: "short up tack with underbar",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2ae9": {
        0: null,
        1: {
            gl: "\u2ae9",
            nm: "short up tack above short down tack",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2aea": {
        0: null,
        1: {
            gl: "\u2aea",
            nm: "double down tack",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2aeb": {
        0: null,
        1: {
            gl: "\u2aeb",
            nm: "double up tack",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2aec": {
        0: null,
        1: {
            gl: "\u2aec",
            nm: "double stroke not sign",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2aed": {
        0: null,
        1: {
            gl: "\u2aed",
            nm: "reversed double stroke not sign",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2aee": {
        0: null,
        1: {
            gl: "\u2aee",
            nm: "does not divide with reversed negation slash",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2aef": {
        0: null,
        1: {
            gl: "\u2aef",
            nm: "vertical line with circle above",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2af0": {
        0: null,
        1: {
            gl: "\u2af0",
            nm: "vertical line with circle below",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2af1": {
        0: null,
        1: {
            gl: "\u2af1",
            nm: "down tack with circle below",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2af2": {
        0: null,
        1: {
            gl: "\u2af2",
            nm: "parallel with horizontal stroke",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2af3": {
        0: null,
        1: {
            gl: "\u2af3",
            nm: "parallel with tilde operator",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2af4": {
        0: null,
        1: {
            gl: "\u2af4",
            nm: "triple vertical bar binary relation",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2af5": {
        0: null,
        1: {
            gl: "\u2af5",
            nm: "triple vertical bar with horizontal stroke",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2af6": {
        0: null,
        1: {
            gl: "\u2af6",
            nm: "triple colon operator",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2af7": {
        0: null,
        1: {
            gl: "\u2af7",
            nm: "triple nested less-than",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2af8": {
        0: null,
        1: {
            gl: "\u2af8",
            nm: "triple nested greater-than",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2af9": {
        0: null,
        1: {
            gl: "\u2af9",
            nm: "double-line slanted less-than or equal to",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2afa": {
        0: null,
        1: {
            gl: "\u2afa",
            nm: "double-line slanted greater-than or equal to",
            pr: 265,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u2afb": {
        0: null,
        1: {
            gl: "\u2afb",
            nm: "triple solidus binary relation",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2afc": {
        0: {
            gl: "\u2afc",
            nm: "large triple vertical bar operator",
            pr: 330,
            ls: 1,
            rs: 2,
            pp: "largeop, movablelimits, symmetric"
        },
        1: null,
        2: null
    },
    "\u2afd": {
        0: null,
        1: {
            gl: "\u2afd",
            nm: "double solidus operator",
            pr: 265,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u2afe": {
        0: null,
        1: {
            gl: "\u2afe",
            nm: "white vertical bar",
            pr: 265,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "\u2aff": {
        0: {
            gl: "\u2aff",
            nm: "n-ary white vertical bar",
            pr: 330,
            ls: 1,
            rs: 2,
            pp: "largeop, movablelimits, symmetric"
        },
        1: null,
        2: null
    },
    "\u2b45": {
        0: null,
        1: {
            gl: "\u2b45",
            nm: "leftwards quadruple arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u2b46": {
        0: null,
        1: {
            gl: "\u2b46",
            nm: "rightwards quadruple arrow",
            pr: 270,
            ls: 5,
            rs: 5,
            pp: "stretchy"
        },
        2: null
    },
    "\u02c6": {
        0: null,
        1: null,
        2: {
            gl: "\u02c6",
            nm: "modifier letter circumflex accent",
            pr: 880,
            ls: 0,
            rs: 0,
            pp: "stretchy, accent"
        }
    },
    "\u02c7": {
        0: null,
        1: null,
        2: {
            gl: "\u02c7",
            nm: "caron",
            pr: 880,
            ls: 0,
            rs: 0,
            pp: "stretchy, accent"
        }
    },
    "\u02c9": {
        0: null,
        1: null,
        2: {
            gl: "\u02c9",
            nm: "modifier letter macron",
            pr: 880,
            ls: 0,
            rs: 0,
            pp: "stretchy, accent"
        }
    },
    "\u02ca": {
        0: null,
        1: null,
        2: {
            gl: "\u02ca",
            nm: "modifier letter acute accent",
            pr: 880,
            ls: 0,
            rs: 0,
            pp: "accent"
        }
    },
    "\u02cb": {
        0: null,
        1: null,
        2: {
            gl: "\u02cb",
            nm: "modifier letter grave accent",
            pr: 880,
            ls: 0,
            rs: 0,
            pp: "accent"
        }
    },
    "\u02cd": {
        0: null,
        1: null,
        2: {
            gl: "\u02cd",
            nm: "modifier letter low macron",
            pr: 880,
            ls: 0,
            rs: 0,
            pp: "stretchy, accent"
        }
    },
    "\u02d8": {
        0: null,
        1: null,
        2: {
            gl: "\u02d8",
            nm: "breve",
            pr: 880,
            ls: 0,
            rs: 0,
            pp: "accent"
        }
    },
    "\u02d9": {
        0: null,
        1: null,
        2: {
            gl: "\u02d9",
            nm: "dot above",
            pr: 880,
            ls: 0,
            rs: 0,
            pp: "accent"
        }
    },
    "\u02da": {
        0: null,
        1: null,
        2: {
            gl: "\u02da",
            nm: "ring above",
            pr: 880,
            ls: 0,
            rs: 0,
            pp: "accent"
        }
    },
    "\u02dc": {
        0: null,
        1: null,
        2: {
            gl: "&#x2DC;",
            nm: "\u02dcsmall tilde",
            pr: 880,
            ls: 0,
            rs: 0,
            pp: "stretchy, accent"
        }
    },
    "\u02dd": {
        0: null,
        1: null,
        2: {
            gl: "\u02dd",
            nm: "double acute accent",
            pr: 880,
            ls: 0,
            rs: 0,
            pp: "accent"
        }
    },
    "\u02f7": {
        0: null,
        1: null,
        2: {
            gl: "\u02f7",
            nm: "modifier letter low tilde",
            pr: 880,
            ls: 0,
            rs: 0,
            pp: "stretchy, accent"
        }
    },
    "\u0302": {
        0: null,
        1: null,
        2: {
            gl: "\u0302",
            nm: "combining circumflex accent",
            pr: 880,
            ls: 0,
            rs: 0,
            pp: "stretchy, accent"
        }
    },
    "\u0311": {
        0: null,
        1: null,
        2: {
            gl: "\u0311",
            nm: "combining inverted breve",
            pr: 880,
            ls: 0,
            rs: 0,
            pp: "accent"
        }
    },
    "\u03f6": {
        0: null,
        1: {
            gl: "\u03f6",
            nm: "greek reversed lunate epsilon symbol",
            pr: 110,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "\u00a8": {
        0: null,
        1: null,
        2: {
            gl: "\u00a8",
            nm: "diaeresis",
            pr: 880,
            ls: 0,
            rs: 0,
            pp: "accent"
        }
    },
    "\u00aa": {
        0: null,
        1: null,
        2: {
            gl: "\u00aa",
            nm: "feminine ordinal indicator",
            pr: 880,
            ls: 0,
            rs: 0,
            pp: "accent"
        }
    },
    "\u00ac": {
        0: {
            gl: "\u00ac",
            nm: "not sign",
            pr: 680,
            ls: 2,
            rs: 1,
            pp: ""
        },
        1: null,
        2: null
    },
    "\u00af": {
        0: null,
        1: null,
        2: {
            gl: "\u00af",
            nm: "macron",
            pr: 880,
            ls: 0,
            rs: 0,
            pp: "stretchy, accent"
        }
    },
    "\u00b0": {
        0: null,
        1: null,
        2: {
            gl: "\u00b0",
            nm: "degree sign",
            pr: 880,
            ls: 0,
            rs: 0,
            pp: ""
        }
    },
    "\u00b1": {
        0: {
            gl: "\u00b1",
            nm: "plus-minus sign",
            pr: 275,
            ls: 0,
            rs: 1,
            pp: ""
        },
        1: {
            gl: "\u00b1",
            nm: "plus-minus sign",
            pr: 275,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u00b2": {
        0: null,
        1: null,
        2: {
            gl: "\u00b2",
            nm: "superscript two",
            pr: 880,
            ls: 0,
            rs: 0,
            pp: "accent"
        }
    },
    "\u00b3": {
        0: null,
        1: null,
        2: {
            gl: "\u00b3",
            nm: "superscript three",
            pr: 880,
            ls: 0,
            rs: 0,
            pp: "accent"
        }
    },
    "\u00b4": {
        0: null,
        1: null,
        2: {
            gl: "\u00b4",
            nm: "acute accent",
            pr: 880,
            ls: 0,
            rs: 0,
            pp: "accent"
        }
    },
    "\u00b7": {
        0: null,
        1: {
            gl: "\u00b7",
            nm: "middle dot",
            pr: 400,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u00b8": {
        0: null,
        1: null,
        2: {
            gl: "\u00b8",
            nm: "cedilla",
            pr: 880,
            ls: 0,
            rs: 0,
            pp: "accent"
        }
    },
    "\u00b9": {
        0: null,
        1: null,
        2: {
            gl: "\u00b9",
            nm: "superscript one",
            pr: 880,
            ls: 0,
            rs: 0,
            pp: "accent"
        }
    },
    "\u00ba": {
        0: null,
        1: null,
        2: {
            gl: "\u00ba",
            nm: "masculine ordinal indicator",
            pr: 880,
            ls: 0,
            rs: 0,
            pp: "accent"
        }
    },
    "\u00d7": {
        0: null,
        1: {
            gl: "\u00d7",
            nm: "multiplication sign",
            pr: 390,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "\u00f7": {
        0: null,
        1: {
            gl: "\u00f7",
            nm: "division sign",
            pr: 660,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "&amp": {
        0: null,
        1: null,
        2: {
            gl: "&",
            nm: "ampersand",
            pr: 880,
            ls: 0,
            rs: 0,
            pp: ""
        }
    },
    "&amp&amp": {
        0: null,
        1: {
            gl: "&&",
            nm: "multiple character operator: &&",
            pr: 200,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "<": {
        0: null,
        1: {
            gl: "<",
            nm: "less-than sign",
            pr: 245,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "&lt=": {
        0: null,
        1: {
            gl: "<=",
            nm: "multiple character operator: <=",
            pr: 241,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "&lt>": {
        0: null,
        1: {
            gl: "<>",
            nm: "multiple character operator: <>",
            pr: 780,
            ls: 1,
            rs: 1,
            pp: ""
        },
        2: null
    },
    "(": {
        0: {
            gl: "(",
            nm: "left parenthesis",
            pr: 20,
            ls: 0,
            rs: 0,
            pp: "fence, stretchy, symmetric"
        },
        1: null,
        2: null
    },
    ")": {
        0: null,
        1: null,
        2: {
            gl: ")",
            nm: "right parenthesis",
            pr: 20,
            ls: 0,
            rs: 0,
            pp: "fence, stretchy, symmetric"
        }
    },
    "*": {
        0: null,
        1: {
            gl: "*",
            nm: "asterisk",
            pr: 390,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "**": {
        0: null,
        1: {
            gl: "**",
            nm: "multiple character operator: **",
            pr: 780,
            ls: 1,
            rs: 1,
            pp: ""
        },
        2: null
    },
    "*=": {
        0: null,
        1: {
            gl: "*=",
            nm: "multiple character operator: *=",
            pr: 260,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    ",": {
        0: null,
        1: {
            gl: ",",
            nm: "comma",
            pr: 40,
            ls: 0,
            rs: 3,
            pp: "separator, linebreakstyle=after"
        },
        2: null
    },
    ".": {
        0: null,
        1: {
            gl: ".",
            nm: "full stop",
            pr: 390,
            ls: 3,
            rs: 3,
            pp: ""
        },
        2: null
    },
    "..": {
        0: null,
        1: null,
        2: {
            gl: "..",
            nm: "multiple character operator: ..",
            pr: 100,
            ls: 0,
            rs: 0,
            pp: ""
        }
    },
    "...": {
        0: null,
        1: null,
        2: {
            gl: "...",
            nm: "multiple character operator: ...",
            pr: 100,
            ls: 0,
            rs: 0,
            pp: ""
        }
    },
    "/": {
        0: null,
        1: {
            gl: "/",
            nm: "solidus",
            pr: 660,
            ls: 1,
            rs: 1,
            pp: ""
        },
        2: null
    },
    "//": {
        0: null,
        1: {
            gl: "//",
            nm: "multiple character operator: //",
            pr: 820,
            ls: 1,
            rs: 1,
            pp: ""
        },
        2: null
    },
    "/=": {
        0: null,
        1: {
            gl: "/=",
            nm: "multiple character operator: /=",
            pr: 260,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    ":": {
        0: null,
        1: {
            gl: ":",
            nm: "colon",
            pr: 100,
            ls: 1,
            rs: 2,
            pp: ""
        },
        2: null
    },
    ":=": {
        0: null,
        1: {
            gl: ":=",
            nm: "multiple character operator: :=",
            pr: 260,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "": {
        0: null,
        1: {
            gl: ";",
            nm: "semicolon",
            pr: 30,
            ls: 0,
            rs: 3,
            pp: "separator, linebreakstyle=after"
        },
        2: null
    },
    "?": {
        0: null,
        1: {
            gl: "?",
            nm: "question mark",
            pr: 835,
            ls: 1,
            rs: 1,
            pp: ""
        },
        2: null
    },
    "@": {
        0: null,
        1: {
            gl: "@",
            nm: "commercial at",
            pr: 825,
            ls: 1,
            rs: 1,
            pp: ""
        },
        2: null
    },
    "[": {
        0: {
            gl: "[",
            nm: "left square bracket",
            pr: 20,
            ls: 0,
            rs: 0,
            pp: "fence, stretchy, symmetric"
        },
        1: null,
        2: null
    },
    "\\": {
        0: null,
        1: {
            gl: "\\",
            nm: "reverse solidus",
            pr: 650,
            ls: 0,
            rs: 0,
            pp: ""
        },
        2: null
    },
    "]": {
        0: null,
        1: null,
        2: {
            gl: "]",
            nm: "right square bracket",
            pr: 20,
            ls: 0,
            rs: 0,
            pp: "fence, stretchy, symmetric"
        }
    },
    "^": {
        0: null,
        1: {
            gl: "^",
            nm: "circumflex accent",
            pr: 780,
            ls: 1,
            rs: 1,
            pp: ""
        },
        2: {
            gl: "^",
            nm: "circumflex accent",
            pr: 880,
            ls: 0,
            rs: 0,
            pp: "stretchy, accent"
        }
    },
    _: {
        0: null,
        1: {
            gl: "_",
            nm: "low line",
            pr: 900,
            ls: 1,
            rs: 1,
            pp: ""
        },
        2: {
            gl: "_",
            nm: "low line",
            pr: 880,
            ls: 0,
            rs: 0,
            pp: "stretchy, accent"
        }
    },
    "\`": {
        0: null,
        1: null,
        2: {
            gl: "\`",
            nm: "grave accent",
            pr: 880,
            ls: 0,
            rs: 0,
            pp: "accent"
        }
    },
    "{": {
        0: {
            gl: "{",
            nm: "left curly bracket",
            pr: 20,
            ls: 0,
            rs: 0,
            pp: "fence, stretchy, symmetric"
        },
        1: null,
        2: null
    },
    "|": {
        0: {
            gl: "|",
            nm: "vertical line",
            pr: 20,
            ls: 0,
            rs: 0,
            pp: "fence, stretchy, symmetric"
        },
        1: {
            gl: "|",
            nm: "vertical line",
            pr: 270,
            ls: 2,
            rs: 2,
            pp: "fence, stretchy, symmetric"
        },
        2: {
            gl: "|",
            nm: "vertical line",
            pr: 20,
            ls: 0,
            rs: 0,
            pp: "fence, stretchy, symmetric"
        }
    },
    "||": {
        0: {
            gl: "||",
            nm: "multiple character operator: ||",
            pr: 20,
            ls: 0,
            rs: 0,
            pp: "fence, stretchy, symmetric"
        },
        1: {
            gl: "||",
            nm: "multiple character operator: ||",
            pr: 270,
            ls: 2,
            rs: 2,
            pp: "fence, stretchy, symmetric"
        },
        2: {
            gl: "||",
            nm: "multiple character operator: ||",
            pr: 20,
            ls: 0,
            rs: 0,
            pp: "fence, stretchy, symmetric"
        }
    },
    "|||": {
        0: {
            gl: "|||",
            nm: "multiple character operator: |||",
            pr: 20,
            ls: 0,
            rs: 0,
            pp: "fence, stretchy, symmetric"
        },
        1: {
            gl: "|||",
            nm: "multiple character operator: |||",
            pr: 270,
            ls: 2,
            rs: 2,
            pp: "fence, stretchy, symmetric"
        },
        2: {
            gl: "|||",
            nm: "multiple character operator: |||",
            pr: 20,
            ls: 0,
            rs: 0,
            pp: "fence, stretchy, symmetric"
        }
    },
    "}": {
        0: null,
        1: null,
        2: {
            gl: "}",
            nm: "right curly bracket",
            pr: 20,
            ls: 0,
            rs: 0,
            pp: "fence, stretchy, symmetric"
        }
    },
    "~": {
        0: null,
        1: null,
        2: {
            gl: "~",
            nm: "tilde",
            pr: 880,
            ls: 0,
            rs: 0,
            pp: "stretchy, accent"
        }
    },
    "+": {
        0: {
            gl: "+",
            nm: "plus sign",
            pr: 275,
            ls: 0,
            rs: 1,
            pp: ""
        },
        1: {
            gl: "+",
            nm: "plus sign",
            pr: 275,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "++": {
        0: null,
        1: null,
        2: {
            gl: "++",
            nm: "multiple character operator: ++",
            pr: 880,
            ls: 0,
            rs: 0,
            pp: ""
        }
    },
    "+=": {
        0: null,
        1: {
            gl: "+=",
            nm: "multiple character operator: +=",
            pr: 260,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "=": {
        0: null,
        1: {
            gl: "=",
            nm: "equals sign",
            pr: 260,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "-=": {
        0: null,
        1: {
            gl: "-=",
            nm: "multiple character operator: -=",
            pr: 260,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    "==": {
        0: null,
        1: {
            gl: "==",
            nm: "multiple character operator: ==",
            pr: 260,
            ls: 4,
            rs: 4,
            pp: ""
        },
        2: null
    },
    ">": {
        0: null,
        1: {
            gl: ">",
            nm: "greater-than sign",
            pr: 243,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    "->": {
        0: null,
        1: {
            gl: "->",
            nm: "multiple character operator: ->",
            pr: 90,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    ">=": {
        0: null,
        1: {
            gl: ">=",
            nm: "multiple character operator: >=",
            pr: 243,
            ls: 5,
            rs: 5,
            pp: ""
        },
        2: null
    },
    '"': {
        0: null,
        1: null,
        2: {
            gl: '"',
            nm: 'quotation mark: "',
            pr: 880,
            ls: 0,
            rs: 0,
            pp: "accent"
        }
    }
}
}
)();
org.imatheq.formulaeditor.hasLoaded = !1;
if (window.addEventListener) {
var setLoaded = function() {
    org.imatheq.formulaeditor.hasLoaded = !0
};
window.addEventListener("load", setLoaded, !1)
}
;
</script>`

export const imatheqCss = `<style>
body {
background-color: white;
}

.efmase_menubar {
width:100%;
list-style-type:none;
margin:0;
padding:0;
height:34px;
border-bottom:1px solid #9EB0C0;
}

.efmase_menubar_mobile {
height:28px;
}

.efmase_menubar>li {
margin:0;
padding:2px;
/*float:left;*/
/*height:30px;*/
border-right:1px solid #9EB0C0;
background: #E8EAEB;
}

.efmase_menubar_mobile>li {
padding:1px;
}

/*logo bigger font, no padding*/
.efmase_menubar>li:first-child {
padding: 1px 6px 1px 0;
}

/*logo bigger font, no padding*/
.efmase_menubar_mobile>li:first-child {
padding: 2px 5px 0px 0;
}

.efmase_menubar>li>button 
{
padding:4px 4px 0 4px;
font-size: 22px;
height: 30px;
}

.efmase_menubar_mobile>li>button 
{
padding:3px 0px 0 0px;
font-size: 20px;
height: 26px;
}

.efmase_menubar>li:first-child>button {
font-size: 26px;
height: 32px;
border: 0;
}

.efmase_menubar_mobile>li:first-child>button {
font-size: 20px;
padding-top: 0;
height: 26px; 
}

.efmase_menubar>li>#efmase_menubar_item_undo, .efmase_menubar>li>#efmase_menubar_item_redo, .efmase_menubar>li>#efmase_menubar_item_mathcolor
{
padding-top: 3px;
}

.efmase_menubar_mobile>li>#efmase_menubar_item_undo, .efmase_menubar_mobile>li>#efmase_menubar_item_redo, .efmase_menubar_mobile>li>#efmase_menubar_item_mathcolor, .efmase_menubar_mobile>li>#efmase_menubar_item_mobile_fontname
{
padding-top: 1px;
}

.efmase_menubar>li>#efmase_menubar_item_italic, .efmase_menubar>li>#efmase_menubar_item_autoitalic
{
padding: 4px 6px 0 2px;
}

.efmase_menubar_mobile>li>#efmase_menubar_item_italic, .efmase_menubar_mobile>li>#efmase_menubar_item_autoitalic
{
padding: 3px 3px 0 1px;
}

.efmase_menubar>li>button>svg 
{
width: 17px;
height: 18px;
}

.efmase_menubar>li>#efmase_menubar_item_mathcolor>svg 
{
width: 19px;
height: 19px;
border-bottom: 4px solid black;
margin-top: -4px;
}

.efmase_menubar_mobile>li>#efmase_menubar_item_mathcolor>svg 
{
width: 17px;
height: 18px;
}

.efmase_menubar_mobile>li>#efmase_menubar_item_mobile_fontname>svg
{
width: 18px;
height: 19px;
}

.efmase_menubar_mobile>li:nth-last-of-type(-n+2)
{
border-right:0;
}

.efmase_menubar>li>a, .efmase_menubar>li>span
{
position: relative;
/*float:left;*/
display:block;
overflow:hidden;
white-space:nowrap;
width:auto;
height:auto;
margin:0;
padding:4px 5px 5px 5px;
text-decoration:none;
text-align:left;
/*text-transform:capitalize;*/
line-height:auto;
font-style:bold;	/*normal*/
font-size:18px;
color:#000000;
/*text-shadow:0 1px 0 #222,0 1px 0 #222;*/
font-family:Cambria,'Palatino Linotype','Book Antiqua','URW Palladio L',serif;
}

.efmase_menubar_mobile>li>a, .efmase_menubar_mobile li span {
padding:0;
height:26px;
}

.efmase_menubar>li>a:hover, .efmase_menubar li .efmase_palettebutton:not(.efmase_palettebtn_disabled):hover {
background:#FFFFFF;
}
.efmase_menubar>li>a:active {
-moz-box-shadow:inset 0 0 4px #B9D6F2;
-webkit-box-shadow:inset 0 0 4px #B9D6F2;
box-shadow:inset 0 0 4px #B9D6F2;
}
.efmase_menubar>li:last-child, .efmase_menubar>li:last-child span {
float: none; 
display: block; 
overflow: hidden; 
border-right:0;
}

.efmase_menugrp_drop > div:first-child:after, .efmase_menugrp_drop > a:after {
content: "";
position: relative;
right: 2px;
top: 13px;
border-left: 5px solid transparent;
border-top: 5px solid #333;
border-right: 5px solid transparent;
z-index: 1;
margin-left: 6px;
}

#BRACKETS_UPDATE > div:after {
top: 8px;
}

#PARRAY_ROW_SPACING >div:after, #PARRAY_COL_SPACING >div:after {
top: -10px;
margin-left: 25px;
}

#BRACKETS_SYMMETRIC_ON {
margin-left: 10px;
}

.efmase_menubar div
{	position: fixed;
visibility: hidden;
margin: 0;
padding: 0;
background: #F4F4F4;	/*#EAEBD8;*/
border: 1px solid #5970B2;
z-index : 999;
}
.efmase_menubar div a
{	position: relative;
display: block;
margin: 0;
padding: 5px 10px;
width: auto;
white-space: nowrap;
text-align: left;
text-decoration: none;
/*background: #EAEBD8;*/
color: #000000;	/*#2875DE;*/
font: 16px arial;
}

.efmase_menubar div a:hover, .efmase_menubar div a.hovered
{	background: #49A3FF;
/*color: #FFF*/
}

body {
padding:0px;
margin:0px;
}


#efmase_header {
list-style-type: none;
margin: 0;
padding: 5px 0 0 0;
/*overflow: hidden;*/
white-space:nowrap;

display: block;
margin: 0 6px 0 6px;
flow: left;
overflow-x: auto;
overflow-y: hidden;
-webkit-overflow-scrolling: touch;
-ms-overflow-y: hidden;
}

#efmase_header li {
float: left;
display: inline-block;
}

#efmase_header li a:link, #efmase_header li a:visited {
display: block;
width: 50px;
font-weight: normal;
color: #000000;
background-color: #ffffff;
text-align: center;
padding: 4px;
text-decoration: none;
text-transform: uppercase;
}

#efmase_header li a:hover, #efmase_header li a:active {
/*background-color: #7A991A;*/
font-weight: bold;
}

.EFMASE_Container {
border: 1px solid #99F;
vertical-align: top;
/*cursor: text;*/
padding: 0px;
/*position: relevant;*/
margin: 5px 1px 5px 1px;
/*float: left;*/
overflow:auto;
-webkit-overflow-scrolling: touch;
}

*:not(input):not(textarea) {
-webkit-user-select: none; /* disable selection/Copy of UIWebView */
-webkit-touch-callout: none; /* disable the IOS popup when long-press on a link */
}       


.efmase_tab_bar
{
width:1000px;
display:block;
flow:left;
overflow-x:auto;
overflow-y:hidden;
-webkit-overflow-scrolling:touch;
-ms-overflow-y:hidden;	/*for IE8*/
white-space: nowrap;
padding: 5px 0 0 0;
}

.efmase_palette
{
width:1000px;
color:#000;
background:transparent;
display:block;
margin:0 6px 0 6px;
flow:left;
overflow-x:auto;
overflow-y:hidden;
-webkit-overflow-scrolling:touch;
-ms-overflow-y:hidden;	/*for IE8*/
white-space: nowrap;
}
.efmase_palette table{border-collapse:collapse;border-spacing:0;margin:0}

.efmase_palette .efmase_palettebutton,
#efmase_header li .efmase_palettebutton,
.efmase_menubar li .efmase_palettebutton,
.efmase_mobile_tabs .efmase_palettebutton,
.efmase_tab_bar table tr td .efmase_palettebutton
{											/* Button */
border: 2px solid transparent;
cursor: pointer;
background: transparent;
overflow: hidden;
direction: ltr;
outline-width:0;
}

.efmase_tab_bar table
{
border-spacing: 0;
}

.efmase_tab_bar table tr td
{
padding: 0 0 0 0;
}

.efmase_tab_bar button
{
padding: 1px 6px;
}

.efmase_palette .efmase_palettebutton_dummy
{											/* Button */
border: 2px solid transparent;
background: transparent;
overflow: hidden;
}

/*.efmase_menubar li  .efmase_palettebtn_disabled*/
.efmase_palettebtn_disabled
{
opacity: 0.4;
filter: alpha(opacity=40); /* msie */
}

#efmase_header li .efmase_button_head,
.efmase_tab_bar table tr td .efmase_button_head
{											/* Button */
width:10px;
background: transparent;
border: 0;
}
.efmase_palettes {
border-top: 1px solid #000000;	/*#778e9a;	#0a0c0d;*/
border-bottom: 1px solid #000000;	/*#778e9a;	#0a0c0d;*/
margin: -1px 0 0 0;
padding:0;
}

#efmase_header li .efmase_palettebutton_focus,
.efmase_mobile_tabs .efmase_palettebutton_focus,
.efmase_tab_bar table tr td .efmase_palettebutton_focus
{										/* Button hover */
border-top: 1px solid #000000;	/*#778e9a;*/
border-left: 1px solid #000000;	/*#778e9a;*/
border-right: 1px solid #000000;	/*#778e9a;*/
/*border-bottom: 1px solid #000000;*/
/*border-bottom: 1px solid #ffffff;*/
border-bottom: none;
outline: none;
/*-webkit-border-radius: 3px;*/
/*-moz-border-radius: 3px;*/
/*border-radius: 3px;*/
background: #ffffff;
outline-width:0;
}

.efmase_palette .efmase_palettebutton:hover
{										/* Button hover */
border: 2px solid #778e9a;
outline: none;
-webkit-border-radius: 3px;
-moz-border-radius: 3px;
border-radius: 3px;
}

.efmase_palette .efmase_palettebutton_select
{										/* Button hover */
border: 2px solid #f39c12;
outline: none;
-webkit-border-radius: 3px;
-moz-border-radius: 3px;
border-radius: 3px;
}

.efmase_menubar li  .efmase_palettebutton_down,
.efmase_mobile_tabs .efmase_palettebutton_focus
{										/* Button hover */
border: 2px solid #778e9a;
outline: none;
-webkit-border-radius: 3px;
-moz-border-radius: 3px;
border-radius: 3px;
background: #ffffff;
}

.efmase_mobile_tabs
{
display: -webkit-flex; /* Safari */
-webkit-flex-wrap: wrap;
}

.efmase_palette .efmase_palettebutton >img1,
.efmase_palette .efmase_palettebutton_dummy >img1
{											/* Button */
-moz-transform:scale(0.5);
-webkit-transform:scale(0.5);
transform:scale(0.5);
}

.efmase_palette>table>tr>td:nth-child(n+2)
{
border-left: 1px solid #BDBDBD;
}

.efmase_palette_grp_div {
margin: 2px 0 0px 0; 
/*float:left;*/
display:block;
}
/*.efmase_palette_grp_div:last-child {
border-right:0;
}*/

#efmase_matrix_pad {
position: absolute; 
z-index: 3;
top: 30px;
left: 30px; 
font-family: sans-serif;
min-width:0;
}
#efmase_matrix_pad > div {
color: #778e9a; 
border: 1px solid #b1b3b4; 
padding-top: 1px; 
background-color: #edf2f4;
}
.efmase_panel_close {	
float:right;
display:inline-block;
padding:0px 4px;
background:#ccc;
}

.efmase_panel_close:hover, .efmase_panel_close_hover {
float:right;
display:inline-block;
padding:0px 4px;
background:#ccc;
color:#fff;
cursor: pointer; 
}

#efmase_pad_table {
border-collapse: collapse; 
border-spacing: 111px; 
margin: 0; 
width: 100%;
}
#efmase_pad_table tbody tr td {
margin: 0px; 
padding: 1px;
}
.efmase_pad_btn {
width: 13px; 
height: 13px; 
border: 1px solid #b1b3b4; 
cursor: pointer; 
background-color: #fff;
}
.efmase_pad_label {
font-size: 12px; 
width: 63px;
}
.efmase_pad_input {
border: 1px solid #b1b3b4; 
padding: 0; 
margin: 0; 
width: 35px; 
text-align: right;
}

.fore_canvas {
border: 0px;
vertical-align: top;
cursor: text;
padding: 0px;
position: relative;	/*absolute;*/
/*margin-top: -973px;*/
z-index: 2; 
/*top: 0px;*/
/*left: 0px;*/
}

.bg_canvas {
position: relative;	/*absolute;*/
z-index: 1; 
/*top: 0px;*/
/*left: 0px;*/
}

canvas {
image-rendering: optimizeSpeed;             /* Older versions of FF*/
image-rendering: -moz-crisp-edges;          /* FF 6.0+*/
image-rendering: -webkit-optimize-contrast; /* Safari*/
image-rendering: -o-crisp-edges;            /* OS X & Windows Opera (12.02+)*/*/
image-rendering: pixelated;                 /* Awesome future-browsers*/
-ms-interpolation-mode: nearest-neighbor;   /* IE*/
}
.mathdoxvisibletextarea>div {
/*position: absolute;*/
z-index: -1;
min-width: 400px;
}

.efmase_focus_textarea
{  
border:none;
vertical-align: top;
padding: 0px;
position: relative;
margin-left: 3px;	/*margin-left+border*/
border: none;
overflow: auto;
outline: none;
color:white;	/*transparent;*/
background-color:transparent;
-webkit-box-shadow: none;
-moz-box-shadow: none;
box-shadow: none;
resize: none;
z-index: 3;
opacity: 0.00;
filter:alpha(opacity=00);
-moz-user-select: text;
  -webkit-user-select: text;
  -ms-user-select: text;
}

.efmase_focus_textarea:focus
{
text-indent: -9999em;
}

#com_imatheq_loading_msg
{
display: none;
position:absolute;
left:200px;
top:35px;
z-index:999;
background-color:yellow;
border-width: 1px;
border-style: solid;
border-color: #cccccc;
padding: 4px
}

#efmase_sw_menutab_div
{
background:white; 
width:100%;
z-index: 1000;
position:absolute; 
top:35px; 
bottom:0px; 
left:0px; 
overflow:auto;
}

.efmase_sw_menutab_title
{
height:20px;
flex: 0 1 auto;
background-color:black;
color:white;
}

.efmase_mobile_submenu_item_focused
{	background: #49A3FF;
/*color: #FFF*/
}

.efmase_mobile_font_size_tabs {
display: -webkit-flex; /* Safari */
-webkit-flex-wrap: wrap;
}

#efmase_submenu_item_7 div {
cursor: hand;
}

.efmase_mobile_font_size_tabs div {
width: 50px;
height: 30px;
text-align: center;
padding-top: 6px;
cursor: hand;
}
.efmase_mobile_font_n_size_focused {
background-color: #cccccc;
}

/* context menu */

.efmase_contextmenu {
display: none;
position: absolute;
z-index: 10;
padding: 12px 0;
width: 240px;
background-color: #fff;
border: solid 1px #dfdfdf;
box-shadow: 1px 1px 2px #cfcfcf;
}

.efmase_contextmenu>ul {
list-style: none;
margin: 0;
padding: 0;
}

.efmase_contextmenu>ul>li {
display: block;
margin-bottom: 4px;
}

.efmase_contextmenu>ul:last-child {
margin-bottom: 0;
}

.efmase_contextmenu>ul>li>a {
display: block;
padding: 4px 12px;
color: #0066aa;
text-decoration: none;
font-size: 18px;
}

.efmase_contextmenu>ul>li>a:hover {
color: #fff;
background-color: #0066aa;
}

@font-face {
font-family: 'cmmi7';
src: url('../fonts/cmmi10-2/cmmi10-2.eot'); /* IE9 Compat Modes */
src: url('../fonts/cmmi10-2/cmmi10-2.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
   url('../fonts/cmmi10-2/cmmi10-2.woff') format('woff'), /* Pretty Modern Browsers */
   url('../fonts/cmmi10-2/cmmi10-2.ttf')  format('truetype'), /* Safari, Android, iOS */
   url('../fonts/cmmi10-2/cmmi10-2.svg#svgFontName') format('svg'); /* Legacy iOS */
}

@font-face {
font-family: 'cmr7';
src: url('../fonts/cmr7-10/cmr7-10.eot'); /* IE9 Compat Modes */
src: url('../fonts/cmr7-10/cmr7-10.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
   url('../fonts/cmr7-10/cmr7-10.woff') format('woff'), /* Pretty Modern Browsers */
   url('../fonts/cmr7-10/cmr7-10.ttf')  format('truetype'), /* Safari, Android, iOS */
   url('../fonts/cmr7-10/cmr7-10.svg#svgFontName') format('svg'); /* Legacy iOS */
}

@font-face {
font-family: 'cmex7';
src: url('../fonts/cmex7-1/cmex7-1.eot'); /* IE9 Compat Modes */
src: url('../fonts/cmex7-1/cmex7-1.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
   url('../fonts/cmex7-1/cmex7-1.woff') format('woff'), /* Pretty Modern Browsers */
   url('../fonts/cmex7-1/cmex7-1.ttf')  format('truetype'), /* Safari, Android, iOS */
   url('../fonts/cmex7-1/cmex7-1.svg#svgFontName') format('svg'); /* Legacy iOS */
font-style: normal;
}

@font-face {
font-family: 'cmey7';
src: url('../fonts/cmey7-3/cmey7-3.eot'); /* IE9 Compat Modes */
src: url('../fonts/cmey7-3/cmey7-3.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
   url('../fonts/cmey7-3/cmey7-3.woff') format('woff'), /* Pretty Modern Browsers */
   url('../fonts/cmey7-3/cmey7-3.ttf')  format('truetype'), /* Safari, Android, iOS */
   url('../fonts/cmey7-3/cmey7-3.svg#svgFontName') format('svg'); /* Legacy iOS */
}

@font-face {
font-family: 'msbm7';
/*src: url('../fonts/msbm10-1/msbm10-1.eot');*/ /* IE9 Compat Modes */
src: /*url('../fonts/msbm10-1/msbm10-1.eot?#iefix') format('embedded-opentype'),*/ /* IE6-IE8 */
   url('../fonts/msbm10-1/msbm10-1.woff') format('woff'), /* Pretty Modern Browsers */
   url('../fonts/msbm10-1/msbm10-1.ttf')  format('truetype');/*,*/ /* Safari, Android, iOS */
   url('../fonts/msbm10-1/msbm10-1.svg#svgFontName') format('svg'); /* Legacy iOS */
}

@font-face {
font-family: 'imescr7';
src: url('../fonts/imescr7-1/imescr7-1.eot'); /* IE9 Compat Modes */
src: url('../fonts/imescr7-1/imescr7-1.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
   url('../fonts/imescr7-1/imescr7-1.woff') format('woff'), /* Pretty Modern Browsers */
   url('../fonts/imescr7-1/imescr7-1.ttf')  format('truetype'), /* Safari, Android, iOS */
   url('../fonts/imescr7-1/imescr7-1.svg#svgFontName') format('svg'); /* Legacy iOS */
}

@font-face {
font-family: 'eufm7';
src: url('../fonts/eufm10-1/eufm10-1.eot'); /* IE9 Compat Modes */
src: url('../fonts/eufm10-1/eufm10-1.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
   url('../fonts/eufm10-1/eufm10-1.woff') format('woff'), /* Pretty Modern Browsers */
   url('../fonts/eufm10-1/eufm10-1.ttf')  format('truetype'), /* Safari, Android, iOS */
   url('../fonts/eufm10-1/eufm10-1.svg#svgFontName') format('svg'); /* Legacy iOS */
}

#efmase_bracket_pad, #efmase_size_pad {
position: absolute; 
z-index: 3;
top: 30px;
left: 30px;
font-family: sans-serif;
min-width:0;
}
#efmase_bracket_pad > div, #efmase_size_pad > div {
color: #000; 
border: 1px solid #b1b3b4; 
padding-top: 1px; 
background-color: #edf2f4;
}

#efmase_bracket_pad_table, #efmase_size_pad_table {
border-collapse: collapse; 
border-spacing: 111px; 
margin: 0; 
width: 100%;
}
#efmase_bracket_pad_table tbody tr td:hover, #efmase_size_pad_table tbody tr td:hover, 
.efmase_common_panel_hover {
margin: 0px; 
padding: 1px;
background-color: #6600cc;	/*#D3E1E3;*/
color: #fff;
}
#efmase_bracket_pad_table tbody tr td, #efmase_size_pad_table tbody tr td {
width: auto; 
height: 22px; 
border: 1px solid #b1b3b4; 
cursor: pointer; 
background-color: #fff;
text-align: center;
vertical-align: middle;
line-height: 22px;
}
.efmase_bracket_pad_btn {
padding: 2px 5px;
}
.efmase_bracket_panel_sel {
background-color: #778E9A;
color: #fff;
}

#efmase_color_pad {
position: absolute; 
z-index: 1003;
top: 30px;
left: 30px;
font-family: sans-serif;
min-width:0;
}
#efmase_color_pad > div {
color: #000; 
border: 1px solid #b1b3b4; 
padding-top: 1px; 
background-color: #edf2f4;
}
/*#efmase_color_pad_close {
float:right;
display:inline-block;
padding:0px 4px;
background:#ccc;
}

#efmase_color_pad_close:hover {
float:right;
display:inline-block;
padding:0px 4px;
background:#ccc;
color:#fff;
cursor: pointer; 
}*/

#efmase_color_pad_table {
border-collapse: collapse; 
border-spacing: 111px; 
margin: 0; 
width: 100%;
}
#efmase_color_pad_table tbody tr td {
margin: 0px; 
padding: 1px;
}
/*#efmase_color_pad_table tbody tr td:hover {
border: 2px solid #1A5EE8;
}*/
.efmase_color_pad_table_sel {
border: 2px solid #E81A24;	/*#778E9A;*/ 
}
/*.efmase_color_pad_btn {
width: auto; 
height: 22px; 
border: 1px solid #b1b3b4; 
cursor: pointer; 
background-color: #fff;
text-align: center;
vertical-align: middle;
line-height: 22px;
}*/
.efmase_palettebtn_hidden {
display: none;
}

</style>`