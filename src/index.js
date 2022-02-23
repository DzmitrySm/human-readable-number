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
        return `sixty ${dictionary[number - 60 - 1]}`
    }if (number === 70) {
        return 'seventy'
    }if (number > 70 && number < 80) {
        return `seventy ${dictionary[number - 70 - 1]}`
    }if (number === 80) {
        return 'eighty'
    } if (number > 80 && number < 90) {
        return `eighty ${dictionary[number - 80 - 1]}`
    }if (number === 90) {
        return 'ninety'
    }if (number > 90 && number < 100) {
        return `ninety ${dictionary[number - 90 - 1]}`
    }if (number === 100) {
        return 'one hundred'
    }if (number > 100 && number < 120) {
        return `one hundred ${dictionary[number - 100 - 1]}`
    }if (number === 120) {
        return 'one hundred twenty'
}   if (number > 120 && number < 130) {
    return `one hundred twenty ${dictionary[number - 120 - 1]}`
}   if (number === 130) {
    return 'one hundred thirty'
}if (number > 130 && number < 140) {
    return `one hundred thirty ${dictionary[number - 130 - 1]}`
}if (number === 140) {
    return 'one hundred fourty'
}if (number > 140 && number < 150) {
    return `one hundred fourty ${dictionary[number - 140 - 1]}`
}if (number === 150) {
    return 'one hundred fifty'
}if (number > 150 && number < 160) {
    return `one hundred fifty ${dictionary[number - 150 - 1]}`
}if (number === 160) {
    return 'one hundred sixty'
}if (number > 160 && number < 170) {
    return `one hundred sixty ${dictionary[number - 160 - 1]}`
}if (number === 170) {
    return 'one hundred seventy'
}if (number > 170 && number < 180) {
    return `one hundred seventy ${dictionary[number - 170 - 1]}`
}if (number === 180) {
    return 'one hundred eighty'
}if (number > 180 && number < 190) {
    return `one hundred eighty ${dictionary[number - 180 - 1]}`
}if (number === 190) {
    return 'one hundred ninety'
}if (number > 190 && number < 200) {
    return `one hundred ninety ${dictionary[number - 190 - 1]}`
}if (number === 200) {
    'two hundred'
}if (number > 20 && number < 30) {
    return `twenty ${dictionary[number - 20 - 1]}`
}if (number > 20 && number < 30) {
    return `twenty ${dictionary[number - 20 - 1]}`
}if (number > 20 && number < 30) {
    return `twenty ${dictionary[number - 20 - 1]}`
}if (number > 20 && number < 30) {
    return `twenty ${dictionary[number - 20 - 1]}`
}
}