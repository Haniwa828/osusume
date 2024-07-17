const addAreaForm = () => {
    const body = document.getElementById("body");

    addForm(body, ["form"], "名称：", "text", "required");
    addForm(body, ["form"], "分類：", "text", "required");
    addForm(body, ["form"], "URL：", "text", "required");
    addForm(body, ["form"], "住所：", "text", "required");
    addForm(body, ["form"], "電話：", "text", "required");
    addForm(body, ["form"], "コメント：", "text", "required");

    addElm("button", body, ["post"], (t) => {
        t.textContent = "送信";
        t.onclick = (() => getForm());
    });
}