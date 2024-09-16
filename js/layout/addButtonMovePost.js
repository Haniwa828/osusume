const addButtonPost = () => {
    const body = document.getElementById("body");

    addElm("button", body, ["block"], (t) => {
        t.textContent = "投稿"
        t.onclick = (() => movePage("./html/editPost.html"));
    });
}