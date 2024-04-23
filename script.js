let a = '';
let b = '';
let sign = '';
let finish = false;
const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['+', '-', '/', '*'];

const out = document.querySelector('.display p')

function clearAll() {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = '0';
    dot = false;
}

document.querySelector('.clean').onclick = clearAll;

document.querySelector('.buttons').onclick = (e) => {
    if (e.target.classList.contains('.calc_btn')) return;
    if (e.target.classList.contains('.clean')) {
        clearAll();
    }

    out.textContent = '0'

    const key = e.target.textContent;
    if (digit.includes(key)) {
        if (a === ""  && key === '.' ){
                a += 0
        }
        if (b === '' && sign === '') {
            a += key
            out.textContent = a;
        } else if (a !== '' && b !== '' && finish) {
            b = key;
            finish = false;
            out.textContent = b;
        } else {
            b += key
            out.textContent = b;
        }
        return;
    }

    if (action.includes(key) && a !== '') {
        sign = key
        out.textContent = sign;
    }
    if (key === '=' && a !== '') {
        if (b === '') b = a
        switch (sign) {
            case '+':
                a = (+a) + (+b);
                break;
            case '-':
                a = a - b;
                break;
            case '/':
                if (b === '0') {
                    out.textContent = 'Incorrect';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = a / b;
                break
            case '*':
                a = a * b;
                break
        }
        finish = true;
        out.textContent = a
    }


}




