module.exports = function toReadable (number) {
    let dictionary = ['one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenty']
    if (number < 20) {
        return dictionary[number - 1]
    }if (number === 20) {
        return 'twenty'
    }if (number > 20 && number < 30) {
        return `twenty ${dictionary[number - 20 - 1]}`
    }if (number === 30) {
        return 'thirty'
    }if (number > 30 && number < 40) {
        return `thirty ${dictionary[number - 30 - 1]}`
    }if (number === 40) {
        return 'fourty'
    }if (number > 40 && number < 50) {
        return `fourty ${dictionary[number - 40 - 1]}`
    }if (number === 50) {
        return 'fifty'
    }if (number > 50 && number < 60) {
        return `fifty ${dictionary[number - 50 - 1]}`
    }if (number === 60) {
        return 'sixty'
    }if (number > 60 && number < 70) {
        return `sixty ${dictionary[number - 70 - 1]}`
    }if (number === 70) {
        return 'seventy'
    }if (number > 70 && number < 80) {
        return `seventy ${dictionary[number - 80 - 1]}`
    }if (number === 80) {
        return 'eighty'
    } if (number > 80 && number < 90) {
        return `eighty ${dictionary[number - 90 - 1]}`
    }if (number === 90) {
        return 'ninety'
    }if (number > 90 && number < 10) {
        return `ninety ${dictionary[number - 90 - 1]}`
    }if (number === 100) {
        return 'one hundred'
    }
}