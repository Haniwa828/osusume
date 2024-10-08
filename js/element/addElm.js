// div追加
const addElm = (tag, parentArea, className = [], callBack = null) => { // 引数に=をつけることでデフォルトの値設定
    const newElm = document.createElement(tag);

    for(let i = 0; i < className.length; i++){
        newElm.classList.add(className[i]);
    }
    if(callBack && typeof(callBack) === "function") callBack(newElm);
    
    parentArea.appendChild(newElm);
    return newElm;
}
