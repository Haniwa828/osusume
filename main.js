// ロード直後に関数設置
(()=>{  
    // 諸々の設置
    window.addEventListener("DOMContentLoaded", () => {
        // クラス作成
        const test = new Spot();

        // 共通レイアウト
        addAreaHeader("Header");
        addButtonPost();
        // commonHamburger();
        // commonAnnounce();

        // 機能
        addBlockSite(test);
        // mainSearch();

    });
})();