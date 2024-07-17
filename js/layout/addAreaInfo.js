const addAreaInfo = (parent, spot) => {
    addElm("Div", parent, ["info", "arrow_right"], (t) => {
        addElm("b", t, ["name"], (tt) => {
            tt.textContent = spot.name;
        });
        addElm("Div", t, ["category"], (tt) => {
            tt.textContent = spot.category;
        });
    });
}