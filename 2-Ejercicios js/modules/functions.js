const alfabeto="a b c d e f g h i j k l m r n ñ o p q r s t u v w x y z"
const alfabetoArray= alfabeto.split(" ")
export function pangram( word){
    let pangrama= true;
    for(let i=0; i< alfabetoArray.length; i++){
        if (!(word.includes(alfabetoArray[i]))){
            pangrama=false;
            break;
        }
    }
    return pangrama;
}

export function romanize(n) {
    var
        values = [1, 5, 10, 50, 100, 500, 1000],
        letras = ['I', 'V', 'X', 'L', 'C', 'D', 'M'],
        res = [],
        num, letra, val, pos, insert

    for(var i = 6; num = values[i], letra = letras[i]; i--) {
        if(n >= num) {
            var r = Math.floor(n / num);
            n -= r * num;
            if(r < 4){
                while(r--){
                    res.push(letra);
                }
            } else {
                val = res.pop();
                pos = (val ? letras.indexOf(val) : i) + 1;
                insert = letra + (letras[pos] || 'M');
                res.push(insert);
            }
        } else {
            res.push('');
        }
    }

    return res.join('');
}

export function biciesto(n){
    if (((n % 4 == 0) && (n % 100 != 0 )) || (n % 400 == 0)){
        return true;
    }
    return false;
}
