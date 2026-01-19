
const infoScore = {
    "Hole-in-one!": { warna: "gold", motivasi: "Legenda hidup" },
    "Eagle": { warna: "green", motivasi: "Luar biasa!" },
    "Birdie": { warna: "blue", motivasi: "Pemain oke!" },
    "Par": { warna: "yellow", motivasi: "Tidak buruk" },
    "Bogey": { warna: "orange", motivasi: "Semangat lagi!" },
    "Double Bogey": { warna: "pink", motivasi: "Jangan menyerah" },
    "Go Home!": { warna: "red", motivasi: "Coba lagi dekkk!!!" }
}
// mengambil keys pada infoScore
const score = Object.keys(infoScore)
// membuat function yang mengambil dua argumen numerik yaitu par dan stroke
function golfScore(par, strokes) {
    if (strokes == 1) {
        return score[0]
    } else if (strokes <= par - 2) {
        return score[1]
    } else if (strokes == par - 1) {
        return score[2]
    } else if (strokes == par) {
        return score[3]
    } else if (strokes == par + 1) {
        return score[4]
    } else if (strokes == par + 2) {
        return score[5]
    } else {
        return score[6]
    }
}
const result = golfScore(1, 2)

function hitungSkor() {
    // ambil nilai input
    let nama = document.getElementById("inputName").value || "Pemain Misterius"
    let p = document.getElementById("inputPar").value
    let s = document.getElementById("inputStrokes").value


    // ubah teks menjadi angka
    let par = parseInt(p)
    let strokes = parseInt(s)

    // masukan kedalam fungsi golfScore
    const dataScore = golfScore(par, strokes)

    let result = infoScore[dataScore].motivasi

    // tampilkan ke layar
    document.getElementById("displayResult").innerHTML = `Hallo ${nama}! Skor kamu ${dataScore}. ${result}`

    const card = document.getElementById("main-card")
    card.style.backgroundColor = infoScore[dataScore].warna
}