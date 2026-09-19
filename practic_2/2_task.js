function clance(){
    document.getElementById("first").value = null 
    document.getElementById("second").value = null 
}

let first
let second

let rnd

function save(){


    f = document.getElementById("first").value 
    s = document.getElementById("second").value 

    if (f > s){
        x = f
        f = s
        s = x
    }

    first = Math.ceil(f)
    second = Math.floor(s)
    rnd = Math.round(Math.random() * (second - first) + first)
    localStorage.setItem("randomNum", rnd)
    window.location.href = "page222.html"


    

    
}
