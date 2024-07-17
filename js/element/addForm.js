// div追加
const addForm = (parentArea, className = ["form"], label, inputType, required = "") => { // 引数に=をつけることでデフォルトの値設定
    addElm("Div", parentArea, className, (t) => {
        addElm("label", t, ["labal"], (tt) => {
            tt.textContent = label;
            addElm("input", tt, ["input"], (ttt) => {
                ttt.type = inputType;
                ttt.required = required;
            });
        });
    });
}
