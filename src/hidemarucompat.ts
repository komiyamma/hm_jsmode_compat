
/*
 * This codes is licensed under CC0 1.0 Universal
 *
 * hidemarucompat v1.0.0
 */

declare var module: { filename: string, directory: string, exports: any };
declare var hidemaruCompat: any;

(function () {
    var guid = "{BA97AD4E-1AF7-457A-AFE5-E270E0212A70}";

    var op_dllobj: hidemaru.ILoadDllResult = null;

    function output(msg: string): boolean {

        if (!op_dllobj) {
            op_dllobj = hidemaru.loadDll(hidemaruGlobal.hidemarudir() + "\\HmOutputPane.dll");
        }

        if (op_dllobj) {
            var msg_replaced = msg.replace(/\r\n/g, "\n").replace(/\n/g, "\r\n");
            return op_dllobj.dllFunc.Output(hidemaruGlobal.hidemaruhandle(0), msg_replaced);
        }

        return false;
    }

    var gvm = function (s) { return hidemaru.getVar(s); };
    var evm = function (s) { return hidemaru.evalMacro(s); };

    var hidemacJsGlobalStatements = "var s=m+' ';for(var i=0;i<arguments.length;i++){if(i>0)s+=',';var a=arguments[i];if(typeof(a)=='string'){s+='R\"\xFF('+a+')\xFF\"';}else{s+=a;}}evm(s+';###=result;');var r=gvm('###');";
    var hidemacJsGlobalFomulaNumber = "var s='###='+m;"
        + "if(arguments.length>=1){s+='(';for(var i=0;i<arguments.length;i++){if(i>0)s+=',';var a=arguments[i];if(typeof(a)=='string'){s+='R\"\xFF('+a+')\xFF\"';}else{s+=a;}}s+=')';}"    //パラメータあり=関数
        + "evm(s+';');var r=gvm('###');";    //パラメータなし=キーワード
    var hidemacJsGlobalFomulaString = "var s='$$$='+m;"
        + "if(arguments.length>=1){s+='(';for(var i=0;i<arguments.length;i++){if(i>0)s+=',';var a=arguments[i];if(typeof(a)=='string'){s+='R\"\xFF('+a+')\xFF\"';}else{s+=a;}}s+=')';}"    //パラメータあり=関数
        + "evm(s+';');var r=gvm('$$$');";    //パラメータなし=キーワード

    var st = hidemacJsGlobalStatements;
    var fn = hidemacJsGlobalFomulaNumber;
    var fs = hidemacJsGlobalFomulaString;

    var hc: any = {};
    {
        hc.loaddll = function () { var m = "loaddll"; eval(fn); return r; }
        hc.freedll = function () { var m = "freedll "; eval(st); return r; }
        hc.dllfunc = function () { var m = "dllfunc"; eval(fn); return r; }
        hc.dllfuncw = function () { var m = "dllfuncw"; eval(fn); return r; }
        hc.dllfuncstr = function () { var m = "dllfuncstr"; eval(fs); return r; }
        hc.dllfuncstrw = function () { var m = "dllfuncstrw"; eval(fs); return r; }
        hc.loaddllfile = function () { var m = "loaddllfile"; eval(fs); return r; }
        hc.setdlldetachfunc = function () { var m = "setdlldetachfunc"; eval(st); return r; }
        hc.dllfuncexist = function () { var m = "dllfuncexist"; eval(fn); return r; }
        hc.keepdll = function () { var m = "keepdll"; eval(st); return r; }

        hc.createobject = function () { var m = "createobject"; eval(fn); return r; }
        hc.releaseobject = function () { var m = "releaseobject"; eval(st); return r; }
        hc.member = {
            rnum: function () { var m = "member"; eval(fn); return r; },
            rstr: function () { var m = "member"; eval(fs); return r; }
        };
        hc.setcomdetachmethod = function () { var m = "setcomdetachmethod"; eval(st); return r; }
        hc.keepobject = function () { var m = "keepobject"; eval(st); return r; }
    }

    if (typeof (module) != 'undefined' && module.exports) {
        module.exports = hc;
    } else {
        if (typeof (hidemaruCompat) != 'undefined') {
            if (hidemaruCompat.guid == null || hidemaruCompat.guid != guid) {
                output("本モジュールとは異なるhidemaruCompatが、すでに定義されています。\r\n上書きします。\r\n");
            }

            // 一致していたら上書きはしない
            if (hidemaruCompat.guid == guid) {
                return;
            }
        }

        hidemaruCompat = hc;
    }

})();


