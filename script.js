const number = document.getElementById("number");
const btn = document.getElementById("btn");
const ans = document.getElementById("ans");
const c1 = document.getElementById("c1")
btn.addEventListener('mouseenter',function () {
    btn.classList.replace('btn-primary','btn-success')
})
btn.addEventListener('mouseleave',function () {
    btn.classList.replace('btn-success','btn-primary')
    
})

btn.addEventListener('click',function () {
    ans.innerHTML = ""
    if (number.value == "") {
        alert("Plese Enter A Value")
    }
    else{
        for (let i = 1; i < 11; i++) {
            let table = number.value + " * "+ i + " = "+ i*number.value
            const new_div = document.createElement('div');
            ans.appendChild(new_div)
            new_div.classList.add('fs-3','fw-bold')
            new_div.innerHTML = table
        }
        c1.style.backgroundColor = " rgb(133, 206, 255)"
    }
    
});