// mengambil element by id 
const dessertList = document.getElementById("desserts")
// membuat element item baru
const listItem = document.createElement("li")

// menambahkan konten teks ke elemen item daftar baru
listItem.textContent = "Cookies"
dessertList.appendChild(listItem)

// menghapus node dari DOM, menggunakan removeChild() method

const lastItem = document.querySelector("#desserts li:last-of-type")
dessertList.removeChild(lastItem)


