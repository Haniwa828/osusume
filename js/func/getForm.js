const getForm = () => {
    const inputs = document.getElementsByClassName("input");
    let values = [];

    for (let i = 0; i < inputs.length; i++) {
        values.push(inputs[i].value);
    }

    // spotクラスの数数えて、idの数渡す
    console.log(values);
};