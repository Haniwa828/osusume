const addAreaHeader = (title) => {
    // 全部のhtmlにheaderは入れること
    const header = document.getElementById("header");

    // addImg(header, ["headerImg"], "/images/icon.png");
    addElm("Span", header, ["header_text"], (t) => {
        t.textContent = title;
    });
}