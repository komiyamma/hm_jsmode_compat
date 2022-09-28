/**
 * @file 秀丸のjsmode用のTypeScript定義ファイル
 * @author Akitsugu Komiyama
 * @license This typescript definition file is licensed under CC0 1.0 Universal
 * @version v1.0.3
 */

 declare namespace hidemaruCompat {

    /**
     * loaddll関数は、秀丸用のdllfunc対応のDLLをロードします。    
     * 
     * @param dllpath
     * DLLのファイル名を指定します。    
     * 
     * @example
     * var dll = loaddll("HmOutputPane.dll");
     * 
     * @returns
     * 成功時は、DLLのID(識別値)を表す0以外の値が返ります。    
     * 失敗時は、0が返ります。    
     */
    function loaddll(dllpath: string): number

    /**
     * freedll文は、loaddllしたDLLを解放します。
     *
     * @param dll_id 
     * DLLのID(識別値)を表す数値
     * 
     * @returns
     * 返り値は意味を持ちません。
     */
    function freedll(dll_id: number): number

    /**
     * dllfunc関数は、DLL内の関数を呼び出し、「数値」を受け取ります。    
     * 関数のパラメータの文字列部分は非Unicodeです。    
     * 
     * この関数は古い時代に制作されたdll用で、    
     * 新規dllをこの形式で呼び出す形にすることはオススメ出来ません。    
     * dllfuncではなく、 dllfuncw に合わせた制作へと移行してください。
     * 
     * @param dll_id 
     * DLLのID(識別値)を表す数値
     * 
     * @param func_name
     * 指定された呼び出し関数名をDLLから探し、その関数を呼び出します。    
     * 
     * @param optional_params 
     * 関数に渡す引数。    
     * 文字列もしくは数値を引数として指定できます。    
     * 
     * @example
     * var dll = loaddll("C:\\folder\\test.dll");
     * var ret = dllfunc(dll, "Func_for_dllfunc",1,"a");
     * message(ret);
     * 
     * @returns
     * DLLの返す値がそのままdllfunc関数の返り値となります。    
     * 数値型
     */
    function dllfunc(dll_id: number, func_name: string, ...optional_params: (number|string)[]): number

    /**
     * dllfuncstr関数は、DLL内の関数を呼び出し、「文字列」を受け取ります。    
     * 受け取る文字列も、関数のパラメータの文字列部分も、非Unicodeです。    
     * 
     * この関数は古い時代に制作されたdll用で、    
     * 新規dllをこの形式で呼び出す形にすることはオススメ出来ません。    
     * dllfuncstrではなく、 dllfuncstrw に合わせた制作へと移行してください。
     * 
     * @param dll_id 
     * DLLのID(識別値)を表す数値
     * 
     * @param func_name
     * 指定された呼び出し関数名をDLLから探し、その関数を呼び出します。    
     * 
     * @param optional_params 
     * 関数に渡す引数。    
     * 文字列もしくは数値を引数として指定できます。    
     * 
     * @example
     * var dll = loaddll("C:\\folder\\test.dll");
     * var ret = dllfuncstr(dll, "Func_for_dllfunc",1,"a");
     * message(ret);
     * 
     * @returns
     * DLLの返す値がそのままdllfunc関数の返り値となります。    
     * 文字列型
     */
    function dllfuncstr(dll_id: number, func_name: string, ...optional_params: (number|string)[]): string

    /**
     * dllfuncw関数は、DLL内の関数を呼び出し、「数値」を受け取ります。    
     * 関数のパラメータの文字列部分はUnicodeです。    
     * Unicodeかどうかの違いは、DLL側にあります。    
     * マクロ上では文字列がUnicodeかどうかの違いはありません。    
     * 
     * @param dll_id 
     * DLLのID(識別値)を表す数値
     * 
     * @param func_name
     * 指定された呼び出し関数名をDLLから探し、その関数を呼び出します。    
     * 
     * @param optional_params 
     * 関数に渡す引数。    
     * 文字列もしくは数値を引数として指定できます。    
     * 
     * @example
     * var dll = loaddll("C:\\folder\\test.dll");
     * var ret = dllfuncw(dll, "Func_for_dllfunc",1,"a");
     * message(ret);
     * 
     * @returns
     * DLLの返す値がそのままdllfuncw関数の返り値となります。    
     * 数値型
     */
    function dllfuncw(dll_id: number, func_name: string, ...optional_params: (number|string)[]): number

    /**
     * dllfuncstrw関数は、DLL内の関数を呼び出し、「文字列」を受け取ります。    
     * 受け取る文字列も、関数のパラメータの文字列部分も、Unicodeです。
     * Unicodeかどうかの違いは、DLL側にあります。    
     * マクロ上では文字列がUnicodeかどうかの違いはありません。    
     * 
     * この関数は古い時代に制作されたdll用で、    
     * 新規dllをこの形式で呼び出す形にすることはオススメ出来ません。    
     * dllfuncstrではなく、 dllfuncstrw に合わせた制作へと移行してください。
     * 
     * @param dll_id 
     * DLLのID(識別値)を表す数値
     * 
     * @param func_name
     * 指定された呼び出し関数名をDLLから探し、その関数を呼び出します。    
     * 
     * @param optional_params 
     * 関数に渡す引数。    
     * 文字列もしくは数値を引数として指定できます。    
     * 
     * @example
     * var dll = loaddll("C:\\folder\\test.dll");
     * var ret = dllfuncstr(dll, "Func_for_dllfunc",1,"a");
     * message(ret);
     * 
     * @returns
     * DLLの返す値がそのままdllfunc関数の返り値となります。    
     * 文字列型
     */
    function dllfuncstrw(dll_id: number, func_name: string, ...optional_params: (number|string)[]): string

    /**
     * DLLが解放されるタイミングで呼び出される関数を設定します。    
     * マクロが終了した後でも、秀丸エディタの終了時などにDLLが解放されるタイミングがあれば呼び出されます。    
     * 
     * @param dll_id 
     * DLLのID(識別値)を表す数値
     * 
     * @param func_name 
     * 指定された呼び出し関数名をDLLから探し、その関数を呼び出します。    
     * 
     * @example
     * setdlldetachfunc(dll_id, "MyDllDetachFunc");
     * 
     * @comment
     * この文を実行せず、DLL側に"DllDetachFunc_After_Hm866"という関数がエクスポートされていれば、    
     * setdlldetachfunc(dll_id, "DllDetachFunc_After_Hm866");    
     * をしているのと同じになります。
     * 
     * @returns
     * 返り値は意味を持ちません。
     */
    function setdlldetachfunc(dll_id: number, func_name: string): number

    /**
     * DLL内に指定した関数名が存在するかどうかを確認します。    
     * 
     * @param dll_id 
     * DLLのID(識別値)を表す数値
     * 
     * @param func_name 
     * 関数名を指定します。
     * 
     * @example
     * var is_exists = dllfuncexist(dll_id, "MyFunc");
     * 
     * @returns
     * 関数が存在する場合は0以外、存在しない場合は0が返ります。
     */
    function dllfuncexist(dll_id: number, func_name: string): number

    /**
     * keepdll文は、マクロが終了した後にDLLを解放するかどうかを指定します。    
     * 
     * @param dll_id 
     * DLLのID(識別値)を表す数値
     * 
     * @param keep_mode 
     * マクロが終了した後にDLLを解放するかどうかを指定します。    
     * - 0の場合、マクロ終了後に自動解放します。    
     * - 1の場合、マクロ終了後に自動解放しません。    
     * - keepdll文を呼ばないときは、1の状態と同じです。(自動解放しない)
     * 
     * @example
     * keepdll(dll_id, 1);
     * 
     * @returns
     * 返り値は意味を持ちません。
     */
    function keepdll(dll_id: number, keep_mode: number): number

    /**
     * createobject関数は、COMオブジェクトを作成します。    
     * @param progid 
     * 登録されたCOMオブジェクトのProgIdを指定します。
     * 
     * @example
     * var com = hidemaruCompat.createobject("Scripting.FileSystemObject");
     * 
     * @comment
     * 参照：
     * @see getresultex(11)
     * 
     * @returns
     * 読み込みに成功した場合、0以外を返します。    
     * 失敗した場合、0を返します。    
     * 失敗した場合、getresultex(11)でエラーコードを取得できます。
     */
    function createobject(progid: string): number;

    /**
     * s
     * 
     * createobject関数は、COMオブジェクトを作成します。
     * 
     * @param dllpath 
     * DLLのファイル名をフルパスで指定します。
     * 
     * @param typeid 
     * - dllがネイティブのCOMの場合、typeidにCLSIDを記述することで、    
     * 登録なしでCOMオブジェクトを作成することができます。    
     * 対応できるインターフェイスはIDispatch（またはデュアルインターフェース）である必要があります。    
     * - dllがnet framework 4.xで作成したクラスライブラリをCOMとして使用可能にしているとき、    
     * ProgIDを記述することで、現在のユーザーに対して登録し、COMオブジェクトとして作成することができます。    
     * (COMの登録は自動的に「HmRegasm.exe」という秀丸エディタに付属の実行ファイルで行われます、この実行ファイルは.net framework 4.5以上必要です。)    
     * - dllが「.NET 7, .NET 6, .NET 5, .NET Core 3.1」でCOMとして公開可能でIDispatchに対応したDLLを作成している場合、    
     * コンパイル時に末尾に.comhost.dllというファイル名のDLLも同時に生成されますので、どちらのdllを対象にcreateobjectします。    
     * 例えばSample.dllというDLL本体があった場合、Sample.comhost.dllというDLLがセットでできます。    
     * .comhost.dllというファイル名が付いたDLLは、C++等のネイティブコードと同じ互換性のある形式で扱うことが可能です。
     * 
     * @example
     * // ネイティブの場合
     * var obj = null;
     * if(platform() & 0x00080000){
     *     obj = hidemaruCompat.createobject("C:\\Program Files\\Hidemaru\\hmpv64.dll","{609E0957-143D-45CB-986E-5365B7A3ED26}");
     * } else {
     *     obj = hidemaruCompat.createobject("C:\\Program Files\\Hidemaru\hmpv.dll","{609E0957-143D-45CB-986E-5365B7A3ED26}");
     * }
     * member(obj, "ShowDialog", hidemaruhandle(0));
     * 
     * @example
     * // .NET 4.xの場合
     * var obj = hidemaruCompat.createobject("C:\\Folder\\ClassLibrary1.dll","ClassLibrary1.Test1");
     * 
     * @example
     * // .NET 7, .NET 6, .NET 5, .NET Core 3.1の場合
     * var obj = hidemaruCompat.createobject("C:\\Folder\\Sample.comhost.dll","{xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx}");
     * 
     * @comment
     * 参照：    
     * @see getresultex(11)
     * 
     * @returns
     * 読み込みに成功した場合、0以外を返します。    
     * 失敗した場合、0を返します。    
     * 失敗した場合、getresultex(11)でエラーコードを取得できます。
     */
    function createobject(dllpath: string, typeid: string): number;

    /**
     * releaseobject文は、COMオブジェクトを解放します。    
     * パラメータで取得したオブジェクトを指定します。    
     * 
     * @param com_id 
     * createobject や comが返ってくるメソッドの返り値。
     * 
     * @returns
     * 返り値は意味を持ちません。
     */
    function releaseobject(com_id: number): number;

    /**
     * keepobject文は、マクロが終了した後も解放しないようにするかを指示します。    
     * パラメータで取得したオブジェクトを指定します。    
     * 
     * @param com_id 
     * createobject や comが返ってくるメソッドの返り値。
     * 
     * @param mode
     * モードを指定します。    
     * - 0の場合、マクロ終了後に自動解放します。    
     * - 1の場合、マクロ終了後に自動解放しません。objは再利用できません。    
     * - 2の場合、マクロ終了後に自動解放しません。objは再利用でき、後から再びマクロでreleaseobjectできます。    
     * keepobject文を呼ばないときは、mode=0の状態と同じです。(自動解放する)    
     * modeを省略した場合、mode=1と同じです。
     * 
     * @returns
     * 返り値は意味を持ちません。
     */
    function keepobject(com_id: number, mode?: number): number;

    /**
     * setcomdetachmethod文は、オブジェクトが解放されるときに呼び出されるメソッドを指定します。
     * 
     * createobjectで作成されたオブジェクトは、マクロ終了時やreleaseobjectで解放されます。    
     * 解放される直前に、setcomdetachmethod文で指定したメソッドを自動的に呼び出します。    
     * 
     * @param com_id 
     * createobject や comが返ってくるメソッドの返り値。
     * 
     * @param method_name
     * オブジェクトが解放されるときに呼び出されるメソッドを指定する。    
     * 対象のメソッドは、終了の理由により、以下のような数値を伴って呼ばれる。    
     * - 1　releaseobjectで解放
     * - 3　プロセス終了時
     * - 4　マクロ終了時(keepobject(obj,0);のとき)
     * 
     * @example
     * var obj = hidemaruCompat.createobject("xxx.xxx");
     * hidemaruCompat.setcomdetachmethod(obj, "TestMethod");
     * 
     * // マクロが終わると、
     * // 自動的にTestMethod(4)が呼ばれる
     * 
     * @returns
     * 返り値は意味を持ちません。
     */
    function setcomdetachmethod(com_id: number, method_name: string): number;

    namespace member {
        /**
         * 対象のCOMオブジェクトのプロパティもしくはメソッドを呼び出す    
         * 
         * @param com_id
         * createobject や comが返ってくるメソッドの返り値。
         * 
         * @param member_name 
         * プロパティ名やメソッド名
         * 
         * @param optional_params 
         * メソッドへの引数を指定することが出来ます。
         * 
         * @comment
         * 参照：    
         * @see getresultex(10)、getresultex(11)
         * 
         * @returns
         * 該当のメソッドの返り値。
         */
        function rnum(com_id: number, member_name: string, ...optional_params: (number|string)[]): number;

        /**
         * 対象のCOMオブジェクトのプロパティもしくはメソッドを呼び出す    
         * 
         * @param com_id 
         * createobject や comが返ってくるメソッドの返り値。
         * 
         * @param member_name 
         * プロパティ名やメソッド名
         * 
         * @param optional_params 
         * メソッドへの引数を指定することが出来ます。
         * 
         * @comment
         * 参照：    
         * @see getresultex(10)、getresultex(11)
         * 
         * @returns
         * 該当のメソッドの返り値。
         */
         function rstr(com_id: number, member_name: string, ...optional_params: (number|string)[]): string;
    }
}
