function Q1C() {
    document.getElementsByClassName("background")[0].style.background = "green"
            let div = document.createElement("div")
            div.className += "box"
            document.body.append(div)
            div.style.background = "green"
            setTimeout(() => {
                document.getElementsByClassName("background")[0].style.background = ""
                let element = document.getElementsByClassName("box")[0]
                element.parentElement.removeChild(element)
            }, 1000);
}
function Wrong() {
    document.getElementsByClassName("background")[0].style.background = "red"
            let div = document.createElement("div")
            div.className += "box"
            div.style.background = "red"
            document.body.append(div)
                setTimeout(() => {
                    document.getElementsByClassName("background")[0].style.background = ""
                    let element = document.getElementsByClassName("box")[0]
                    element.parentElement.removeChild(element)
                }, 1000);

}

window.onload= function(){
    document.getElementsByClassName("btn")[0].onclick = function(){
            var inputVal = document.getElementsByClassName("textbox")[0].value;
            if(inputVal == "2"){
                Q1C()
            }
            else{
                Wrong()
            }
        }
    }