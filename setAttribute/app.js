const para = document.getElementById('para')
para.setAttribute("class", "my-class")

console.log(`${para.outerHTML}`);


const divEl = document.querySelector(".my-class")
divEl.setAttribute("id", "example")

console.log(`${divEl.outerHTML}`);
