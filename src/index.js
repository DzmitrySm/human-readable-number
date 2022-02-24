module.exports = function toReadable (number) {
    let dictionary = ['one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenty']
    if (number === 0) {
        return 'zero'
    }if (number < 20) {
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
        return 'forty'
    }if (number > 40 && number < 50) {
        return `forty ${dictionary[number - 40 - 1]}`
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
    return 'one hundred forty'
}if (number > 140 && number < 150) {
    return `one hundred forty ${dictionary[number - 140 - 1]}`
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
    return 'two hundred'
}if (number > 200 && number < 220) {
    return `two hundred ${dictionary[number - 200 - 1]}`
}if (number === 220) {
    return 'two hundred twenty'
}if (number > 220 && number < 230) {
    return `two hundred twenty ${dictionary[number - 220 - 1]}`
}if (number === 230) {
    return 'two hundred thirty'
}if (number > 230 && number < 240) {
    return `two hundred thirty ${dictionary[number - 230 - 1]}`
}if (number === 240) {
    return 'two hundred forty'
}if (number > 240 && number < 250) {
    return `two hundred forty ${dictionary[number - 240 - 1]}`
}if (number === 250) {
    return 'two hundred fifty'
}if (number > 250 && number < 260) {
    return `two hundred fifty ${dictionary[number - 250 - 1]}`
}if (number === 260) {
    return 'two hundred sixty'
}if (number > 260 && number < 270) {
    return `two hundred sixty ${dictionary[number - 260 - 1]}`
}if (number === 270) {
    return 'two hundred seventy'
}if (number > 270 && number < 280) {
    return `two hundred seventy ${dictionary[number - 270 - 1]}`
}if (number === 280) {
    return 'two hundred eighty'
}if (number > 280 && number < 290) {
    return `two hundred eighty ${dictionary[number - 280 - 1]}`
}if (number === 290) {
    return 'two hundred ninety'
}if (number > 290 && number < 300) {
    return `two hundred ninety ${dictionary[number - 290 - 1]}`
}if (number === 300) {
    return 'three hundred'
}if (number > 300 && number < 320) {
    return `three hundred ${dictionary[number - 300 - 1]}`
}if (number === 320) {
    return 'three hundred twenty'
}if (number > 320 && number < 330) {
    return `three hundred twenty ${dictionary[number - 320 - 1]}`
}if (number === 330) {
    return 'three hundred thirty'
}if (number > 330 && number < 340) {
    return `three hundred thirty ${dictionary[number - 330 - 1]}`
}if (number === 340) {
    return 'three hundred forty'
}if (number > 340 && number < 350) {
    return `three hundred forty ${dictionary[number - 340 - 1]}`
}if (number === 350) {
    return 'three hundred fifty'
}if (number > 350 && number < 360) {
    return `three hundred fifty ${dictionary[number - 350 - 1]}`
}if (number === 360) {
    return 'three hundred sixty'
}if (number > 360 && number < 370) {
    return `three hundred sixty ${dictionary[number - 360 - 1]}`
}if (number === 370) {
    return 'three hundred seventy'
}if (number > 370 && number < 380) {
    return `three hundred seventy ${dictionary[number - 370 - 1]}`
}if (number === 380) {
    return 'three hundred eighty'
}if (number > 380 && number < 390) {
    return `three hundred eighty ${dictionary[number - 380 - 1]}`
}if (number === 390) {
    return 'three hundred ninety'
}if (number > 390 && number < 400) {
    return `three hundred ninety ${dictionary[number - 390 - 1]}`
}if (number === 400) {
    return 'four hundred'
}if (number > 400 && number < 420) {
    return `four hundred ${dictionary[number - 400 - 1]}`
}if (number === 420) {
    return 'four hundred twenty'
}if (number > 420 && number < 430) {
    return `four hundred twenty ${dictionary[number - 420 - 1]}`
}if (number === 430) {
     return 'four hundred thirty'
}if (number > 430 && number < 440) {
    return `four hundred thirty ${dictionary[number - 430 - 1]}`
}if (number === 440) {
    return 'four hundred forty'
}if (number > 440 && number < 450) {
    return `four hundred forty ${dictionary[number - 440 - 1]}`
}if (number === 450) {
    return 'four hundred fifty'
}if (number > 450 && number < 460) {
    return `four hundred fifty ${dictionary[number - 450 - 1]}`
}if (number === 460) {
    return 'four hundred sixty'
}if (number > 460 && number < 470) {
    return `four hundred sixty ${dictionary[number - 460 - 1]}`
}if (number === 470) {
    return 'four hundred seventy'
}if (number > 470 && number < 480) {
    return `four hundred seventy ${dictionary[number - 470 - 1]}`
}if (number === 480) {
   return 'four hundred eighty'
}if (number > 480 && number < 490) {
    return `four hundred eighty ${dictionary[number - 480 - 1]}`
}if (number === 490) {
    return 'four hundred ninety'
}if (number > 490 && number < 500) {
    return `four hundred ninety ${dictionary[number - 490 - 1]}`
}if (number === 500) {
    return 'five hundred'
}if (number > 500 && number < 520) {
    return `five hundred ${dictionary[number - 500 - 1]}`
}if (number === 520) {
    return 'five hundred twenty'
}if (number > 520 && number < 530) {
    return `five hundred twenty ${dictionary[number - 520 - 1]}`
}if (number === 530) {
    return 'five hundred thirty'
}if (number > 530 && number < 540) {
    return `five hundred thirty ${dictionary[number - 530 - 1]}`
}if (number === 540) {
    return 'five hundred forty'
}if (number > 540 && number < 550) {
    return `five hundred forty ${dictionary[number - 540 - 1]}`
}if (number === 550) {
    return 'five hundred fifty'
}if (number > 550 && number < 560) {
    return `five hundred fifty ${dictionary[number - 550 - 1]}`
}if (number === 560) {
    return 'five hundred sixty'
}if (number > 560 && number < 570) {
    return `five hundred sixty ${dictionary[number - 560 - 1]}`
}if (number === 570) {
   return 'five hundred seventy'
}if (number > 570 && number < 580) {
    return `five hundred seventy ${dictionary[number - 570 - 1]}`
}if (number === 580) {
    return 'five hundred eighty'
}if (number > 580 && number < 590) {
    return `five hundred eighty ${dictionary[number - 580 - 1]}`
}if (number === 590) {
    return 'five hundred ninety'
}if (number > 590 && number < 600) {
    return `five hundred ninety ${dictionary[number - 590 - 1]}`
}if (number === 600) {
    return 'six hundred'
}if (number > 600 && number < 620) {
    return `six hundred ${dictionary[number - 600 - 1]}`
}if (number === 620) {
    return 'six hundred twenty'
}if (number > 620 && number < 630) {
    return `six hundred twenty ${dictionary[number - 620 - 1]}`
}if (number === 630) {
    return 'six hundred thirty'
}if (number > 630 && number < 640) {
    return `six hundred thirty ${dictionary[number - 630 - 1]}`
}if (number === 640) {
     return 'six hundred forty'
}if (number > 640 && number < 650) {
    return `six hundred forty ${dictionary[number - 640 - 1]}`
}if (number === 650) {
     return 'six hundred fifty'
}if (number > 650 && number < 660) {
    return `six hundred fifty ${dictionary[number - 650 - 1]}`
}if (number === 660) {
    return 'six hundred sixty'
}if (number > 660 && number < 670) {
    return `six hundred sixty ${dictionary[number - 660 - 1]}`
}if (number === 670) {
    return 'six hundred seventy'
}if (number > 670 && number < 680) {
    return `six hundred seventy ${dictionary[number - 670 - 1]}`
}if (number === 680) {
    return 'six hundred eighty'
}if (number > 680 && number < 690) {
    return `six hundred eighty ${dictionary[number - 680 - 1]}`
}if (number === 690) {
    return 'six hundred ninety'
}if (number > 690 && number < 700) {
    return `six hundred ninety ${dictionary[number - 690 - 1]}`
}if (number === 700) {
    return 'seven hundred'
}if (number > 700 && number < 720) {
    return `seven hundred ${dictionary[number - 700 - 1]}`
}if (number === 720) {
    return 'seven hundred twenty'
}if (number > 720 && number < 730) {
    return `seven hundred twenty ${dictionary[number - 720 - 1]}`
}if (number === 730) {
   return 'seven hundred thirty'
}if (number > 730 && number < 740) {
    return `seven hundred thirty ${dictionary[number - 730 - 1]}`
}if (number === 740) {
    return 'seven hundred forty'
}if (number > 740 && number < 750) {
    return `seven hundred forty ${dictionary[number - 740 - 1]}`
}if (number === 750) {
    return 'seven hundred fifty'
}if (number > 750 && number < 760) {
    return `seven hundred fifty ${dictionary[number - 750 - 1]}`
}if (number === 760) {
    return 'seven hundred sixty'
}if (number > 760 && number < 770) {
    return `seven hundred sixty ${dictionary[number - 760 - 1]}`
}if (number === 770) {
    return 'seven hundred seventy'
}if (number > 770 && number < 780) {
    return `seven hundred seventy ${dictionary[number - 770 - 1]}`
}if (number === 780) {
    return 'seven hundred eighty'
}if (number > 780 && number < 790) {
    return `seven hundred eighty ${dictionary[number - 780 - 1]}`
}if (number === 790) {
    return 'seven hundred ninety'
}if (number > 790 && number < 800) {
    return `seven hundred ninety ${dictionary[number - 790 - 1]}`
}if (number === 800) {
    return 'eight hundred'
}if (number > 800 && number < 820) {
    return `eight hundred ${dictionary[number - 800 - 1]}`
}if (number === 820) {
    return 'eight hundred twenty'
}if (number > 820 && number < 830) {
    return `eight hundred twenty ${dictionary[number - 820 - 1]}`
}if (number === 830) {
    return 'eight hundred thirty'
}if (number > 830 && number < 840) {
    return `eight hundred thirty ${dictionary[number - 830 - 1]}`
}if (number === 840) {
    return  'eight hundred forty'
}if (number > 840 && number < 850) {
    return `eight hundred forty ${dictionary[number - 840 - 1]}`
}if (number === 850) {
    return  'eight hundred fifty'
}if (number > 850 && number < 860) {
    return `eight hundred fifty ${dictionary[number - 850 - 1]}`
}if (number === 860) {
    return  'eight hundred sixty'
}if (number > 860 && number < 870) {
    return `eight hundred sixty ${dictionary[number - 860 - 1]}`
}if (number === 870) {
    return  'eight hundred seventy'
}if (number > 870 && number < 880) {
    return `eight hundred seventy ${dictionary[number - 870 - 1]}`
}if (number === 880) {
    return  'eight hundred eighty'
}if (number > 880 && number < 890) {
    return `eight hundred eighty ${dictionary[number - 880 - 1]}`
}if (number === 890) {
    return  'eight hundred ninety'
}if (number > 890 && number < 900) {
    return `eight hundred ninety ${dictionary[number - 890 - 1]}`
}if (number === 900) {
    return  'nine hundred'
}if (number > 900 && number < 920) {
    return `nine hundred ${dictionary[number - 900 - 1]}`
}if (number === 920) {
    return  'nine hundred twenty'
}if (number > 920 && number < 930) {
    return `nine hundred twenty ${dictionary[number - 920 - 1]}`
}if (number === 930) {
    return  'nine hundred thirty'
}if (number > 930 && number < 940) {
    return `nine hundred thirty ${dictionary[number - 930 - 1]}`
}if (number === 940) {
    return  'nine hundred forty'
}if (number > 940 && number < 950) {
    return `nine hundred forty ${dictionary[number - 940 - 1]}`
}if (number === 950) {
    return  'nine hundred fifty'
}if (number > 950 && number < 960) {
    return `nine hundred fifty ${dictionary[number - 950 - 1]}`
}if (number === 960) {
    return  'nine hundred sixty'
}if (number > 960 && number < 970) {
    return `nine hundred sixty ${dictionary[number - 960 - 1]}`
}if (number === 970) {
    return  'nine hundred seventy'
}if (number > 970 && number < 980) {
    return `nine hundred seventy ${dictionary[number - 970 - 1]}`
}if (number === 980) {
    return  'nine hundred eighty'
}if (number > 980 && number < 990) {
    return `nine hundred eighty ${dictionary[number - 980 - 1]}`
}if (number === 990) {
    return  'nine hundred ninety'
}if (number > 990 && number < 1000) {
    return `nine hundred ninety ${dictionary[number - 990 - 1]}`
}
    
}