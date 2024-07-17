const addBlockSite = (spot) => {
    const body = document.getElementById("body");

    addElm("Div", body, ["block"], (t) => {
        t.id = spot.id;
        t.addEventListener("click", openBlock);
        
        addAreaInfo(t, spot);
        addAreaDetail(t, spot);
    });
}
