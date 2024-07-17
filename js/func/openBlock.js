const openBlock = (event) => {
    // 親要素を取得する方法
    // alert(event.currentTarget.id);

    const block = event.currentTarget;
    const info = block.getElementsByClassName("info")[0];
    const detail = block.getElementsByClassName("detail")[0];

    info.classList.toggle("pushed");
    detail.classList.toggle("pushed");
    console.log(event.currentTarget.getElementsByClassName("detail")[0]);
}

// function clickBlock(id) {
//     alert("このボタンのIDは" + id + "です。");
//   }