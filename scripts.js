document.addEventListener("DOMContentLoaded", function (event) {

    let body = document.getElementsByTagName('body')[0];

    let div = document.createElement('div');
    div.classList.add('container')
    let btn = document.createElement('button');

    let btnText = document.createTextNode("Add Square");


    document.body.appendChild(btn);
    body.appendChild(div);
    btn.appendChild(btnText);


    btn.addEventListener('click', createDiv)

    let boxNum = 0;

    function createDiv() {
        let sqr = document.createElement('div');
        sqr.classList.add('sqr');
        div.appendChild(sqr);
        sqr.style.margin = "4px";
        boxNum++;
        sqr.id = boxNum;
        let span = document.createElement("span");
        span.classList.add('span')
        span.innerHTML = sqr.id;
        sqr.appendChild(span)
        //sqr.addEventListener("mouseover", function () {

        // });

        // sqr.addEventListener("mouseout", function () {
        //    sqr.innerHTML = " "
        //});

        sqr.addEventListener("click", function () {
            let colorList = ["red", "blue", "green", "darkolivegreen", "purple", "darkslateblue", "grey", "dimgrey", "darkblue", "darkred"]
            const randomNum = Math.floor(Math.random() * colorList.length);
            sqr.style.backgroundColor = colorList[randomNum];
        })
        sqr.addEventListener('dblclick', function () {
            if (sqr.id % 2 === 0) {
                if (sqr.nextElementSibling) {
                    sqr.nextElementSibling.remove();
                } else {
                    alert('no square');
                }
            }
            if (sqr.id % 2 === 1) {
                if (sqr.previousElementSibling) {
                    sqr.previousElementSibling.remove();
                } else {
                    alert('no square');
                }
            }
        })
    }


})