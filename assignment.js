//https://github.com/AsadullahBadhan/problem-solving

function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        return 'distance can not be negative.';
    }

    let meter = kilometer * 1000;
    return meter;
}

function budgetCalculator(watch, mobile, laptop) {
    if (watch < 0 || mobile < 0 || laptop < 0) {
        return 'Things can not be negative.';
    }

    let total = 0;
    watch = watch * 50;
    mobile = mobile * 100;
    laptop = laptop * 500;

    total = watch + mobile + laptop;
    return total;
}

function hotelCost(days) {
    let bill = 0;

    if (days < 0) {
        return 'days can not be negative.';
    } else if (days <= 10) {
        bill = days * 100;
    } else if (days <= 20) {
        let first10 = 10 * 100;
        let restDays = days - 10;
        bill = restDays * 80 + first10;
    } else {
        let first10 = 10 * 100;
        let second10 = 10 * 80;
        let restDays = days - 20;
        bill = restDays * 50 + first10 + second10;
    }
    return bill;
}

function megaFriend(names) {
    let biggestName = '';
    for (let i = 0; i < names.length; i++) {
        let name = names[i];
        if (name.length > biggestName.length) {
            biggestName = name;
        }
    }
    return biggestName;
}