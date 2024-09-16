const addAreaDetail = (parent, spot) => {
    addElm("Div", parent, ["detail"], (t) => {
        addElm("hr", t, ["line"])
        addElm("Span", t, [], (tt) => {
            tt.textContent = "URL: ";
        });
        addElm("a", t, ["name"], (tt) => {
            tt.textContent = spot.url;
            tt.href = spot.url;
            tt.target = "_blank";
        });
        
        addElm("br", t)
        addElm("Span", t, [], (tt) => {
            tt.textContent = "住所: ";
        });
        addElm("Span", t, ["address"], (tt) => {
            tt.textContent = spot.address;
        });
        
        addElm("br", t)
        addElm("Span", t, [], (tt) => {
            tt.textContent = "電話: ";
        });
        addElm("Span", t, ["address"], (tt) => {
            tt.textContent = spot.number;
        });

        addElm("br", t)
        addElm("span", t, ["button_container"], (tt) => {
            addElm("button", tt, ["button"], (ttt) => {
                ttt.textContent = "編集";
                ttt.onclick = (() => movePage("./html/editPost.html?id=" + spot.id));
            });
        }); 
    });
}