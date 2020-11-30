// Привет. Вам нужно создать объект, который описывает цилиндр. У него должны быть свойства - радиус и высота, И еще у него должно быть 2 метода, получение объема и площади поверхности.

var cylinder = {
    radius: 5,
    height: 20,
    volume: function() {
        var volume = 2 * Math.PI * (this.radius ** 2) * this.height;
        return volume;
    },
    square: function() {
        var square = 2 * Math.PI * this.radius * (this.height + this.radius);
        return square;
    }
}

console.log(cylinder.volume());
console.log(cylinder.square());

console.log(cylinder);


// Кроме этого, реализуйте функцию getResult. Функция принимает 1 и 2 параметров - числа, а 3 параметр - математический знак и возвращает результат. Например - getResult(5,6,'+') - 11, а getResult(5,6,'*') - 30.

function getResult (firstNumber, secondNumber, symbol) {
    var result = '';
    switch (symbol) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            result = firstNumber / secondNumber;
            break;
        case '%':
            result = firstNumber % secondNumber;
            break;
        case '**':
            result = firstNumber % secondNumber;
            break;
        default:
            result = undefined;  
    }
    return result;
}

console.log(getResult(5, 6, '*'));


// Написать функцию isCharPresent. Она принимает 2 аргумента - строку и символ и узнает содержится ли символ в строке, возращает true / false

function isCharPresent (string, symbol) {
    var arr = string.split('');
    var result;

    for (i = 0; i <= arr.length; i++) {
        if (arr[i] === symbol) {
            result = true;
            break;
        } else {
            result = false;
        }
    }

    return result;
}

console.log(isCharPresent('Ivan : Petr - 2 : 10', '0'));

// Написать функцию charIndexOf. Принимает такие же аргументы, как первая функция, но возвращает индекс или -1, если символа нет.

function charIndexOf (string, symbol) {
    var arr = string.split('');
    var result;

    for (i = 0; i <= arr.length; i++) {
        if (arr[i] === symbol) {
            result = i;
            break;
        } else {
            result = -1;
        }
    }

    return result;
}

console.log(charIndexOf('Ivan : Petr - 2 : 10', 'o'));
