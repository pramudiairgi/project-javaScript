function getAverage(scores){
    for (let score of scores){
        let total = scores.reduce((total, score) => total + score, 0)
        return total / scores.length
    }
}

function getGrade(score){
    if (score === 100){
        return "A+"
    } else if (score >= 90){
        return "A"
    } else if (score >= 80){
        return "B"
    } else if (score >= 70){
        return "C"
    } else if (score >= 60){
        return "D"
    } else {
        return "F"
    }
}

function hasPassingGrade(score){
    const grade = getGrade(score)
    return grade !== "F"
}

function studentMsg(totalscore, studentScore){
    let average = getAverage(totalscore)
    let grade = getGrade(studentScore)
    let passed = hasPassingGrade(studentScore)

    let status = passed ? "You passed the course." : "You failed the course."

    return `Class average: ${average}. Your grade: ${grade}. ${status}`
}

const dataNilai = [90,100,45,70,89,75,77]

const nilaiIrgi = 98
console.log(studentMsg(dataNilai, nilaiIrgi))