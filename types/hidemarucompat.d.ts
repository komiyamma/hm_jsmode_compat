/**
 * @file 秀丸のjsmode用のTypeScript定義ファイル
 * @author Akitsugu Komiyama
 * @license Custom License
 *          (https://github.com/komiyamma/hm_jsmode_ts_difinition/blob/main/LICENSE)
 * @version v1.0.2
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
