class Spot {
    // getとか作るならここで使う変数を定義しないといけない
    // constructorが無ければ規定値になるけど、
    // あるならconstructorが呼ばれた時点で全部undifindか引数に上書きされる
    id;
    name;
    category;
    url;
    address;
    number;
    comment;

    // ここで引数の規定値を書けばundifindではなくせる
    constructor(id = 0, 
        name = "testqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq", 
        category  = ["aaa", "bbb", "ccc"], 
        url = "https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Classes", 
        address = "東京都○○区△△", 
        number = "000-0000-0000",
        comment = ""
    ) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.url = url;
        this.address = address;
        this.number = number;
        this.comment = comment;
    }

    get id(){
        return this.id;
    }
    get name() {
        return this.name;
    }
    get category() {
        return this.category;
    }
    get url() {
        return this.url;
    }
    get address() {
        return this.address;
    }
    get number() {
        return this.number;
    }
    get comment() {
        return this.comment;
    }

    set name(name) {
        this.name = name;
    }
    set category(category) {
        this.category = category;
    }
    set url(url) {
        this.url = url;
    }
    set address(address) {
        this.address = address;
    }
    set number(number) {
        this.number = number;
    }
    set comment(comment) {
        this.comment = comment;
    }
}
