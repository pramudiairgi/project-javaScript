function pyramid(char, rowCount, isInverted) {
    let rows = []
    for (let i = 1; i <= rowCount; i++) {
        let rowContent = " ".repeat(rowCount - i) + char.repeat(2 * i - 1)
        rows.push(rowContent)
    }
    if (isInverted) {
        rows.reverse()
    }
    return "\n" + rows.join("\n") + "\n"
}

function showPyramid() {
    let jenis = document.getElementById("pyramidType").value
    let jumlah = Number(document.getElementById("rowCount").value)
    let posisi = document.getElementById("inverted").value === "true"

    const getInput = pyramid(jenis, jumlah, posisi)

    const result = getInput

    document.getElementById("displayResult").innerHTML = result

}