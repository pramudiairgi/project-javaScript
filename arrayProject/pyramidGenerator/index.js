function pyramid(char, rowCount, isInverted){
    let rows = []
    for (let i = 1 ; i <= rowCount; i++){
        let rowContent = " ".repeat(rowCount - i) + char.repeat(2 * i -1)
        rows.push(rowContent)
    }
    if (isInverted){
        rows.reverse()
    }
    return "\n" + rows.join("\n") + "\n"
}

console.log(pyramid("o", 5, false))