x = localStorage.getItem("randomNum")

let count = 0


// alert(x)

function rnd_found(){
    if (document.getElementById("answer").value == x){
        document.getElementById("rn_chislo").textContent = "Правильно"
        document.getElementById("count").textContent = count
    }
    else{
        count++
        document.getElementById("count").textContent = count

        if(document.getElementById("answer").value < x){
          document.getElementById("rn_chislo").textContent = "Больше"

        }
        else{
            document.getElementById("rn_chislo").textContent = "Меньше"
        }
        
    }


    
}
