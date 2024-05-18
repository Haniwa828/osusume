const addHeader = (title) => {
    // 全部のhtmlにheaderは入れること
    const header = document.getElementById("header");

    // addImg(header, ["headerImg"], "/images/icon.png");
    addSpan(header, ["header_text"], (t) => {
        t.textContent = "DB";
    });
}