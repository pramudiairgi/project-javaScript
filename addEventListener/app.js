const input = document.getElementById('input')
input.addEventListener('input', () => {
    console.log(input.value)
})


const btn = document.getElementById('btn')

btn.addEventListener("click", () => alert(input.value))