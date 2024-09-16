const addAreaForm = () => {
    const body = document.getElementById("body");

    addForm(body, ["form"], "名称：", "text", "required");
    addForm(body, ["form"], "分類：", "text", "required");
    addForm(body, ["form"], "URL：", "text", "required");
    addForm(body, ["form"], "住所：", "text", "required");
    addForm(body, ["form"], "電話：", "text", "required");
    addForm(body, ["form"], "コメント：", "text", "required");

    addElm("span", body, ["button_container"], (t) => {
        addElm("button", t, ["button", "post"], (tt) => {
            tt.textContent = location.search != "" ? "更新" : "送信";
            tt.onclick = (() => getForm());
        });
        addElm("button", t, ["button", "cancel"], (tt) => {
            tt.textContent = "取消";
            tt.onclick = (() => getForm());
        });
    });
}