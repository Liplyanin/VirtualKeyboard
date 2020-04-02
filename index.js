const buttons = {
    Backquote: { "keyEn": "`", "keyRu": "ё", "keyShiftEn": "~", "keyShiftRu": "Ё" },
    Digit1: { "keyEn": "1", "keyRu": "1", "keyShiftEn": "!", "keyShiftRu": "!" },
    Digit2: { "keyEn": "2", "keyRu": "2", "keyShiftEn": "@", "keyShiftRu": "\"" },
    Digit3: { "keyEn": "3", "keyRu": "3", "keyShiftEn": "#", "keyShiftRu": "№" },
    Digit4: { "keyEn": "4", "keyRu": "4", "keyShiftEn": "$", "keyShiftRu": ";" },
    Digit5: { "keyEn": "5", "keyRu": "5", "keyShiftEn": "%", "keyShiftRu": "%" },
    Digit6: { "keyEn": "6", "keyRu": "6", "keyShiftEn": "^", "keyShiftRu": ":" },
    Digit7: { "keyEn": "7", "keyRu": "7", "keyShiftEn": "&", "keyShiftRu": "?" },
    Digit8: { "keyEn": "8", "keyRu": "8", "keyShiftEn": "*", "keyShiftRu": "*" },
    Digit9: { "keyEn": "9", "keyRu": "9", "keyShiftEn": "(", "keyShiftRu": "(" },
    Digit0: { "keyEn": "0", "keyRu": "0", "keyShiftEn": ")", "keyShiftRu": ")" },
    Minus: { "keyEn": "-", "keyRu": "-", "keyShiftEn": "_", "keyShiftRu": "_" },
    Equal: { "keyEn": "=", "keyRu": "=", "keyShiftEn": "+", "keyShiftRu": "+" },
    Backspace: { "keyEn": "Backspace", "keyRu": "Backspace", "keyShiftEn": "Backspace", "keyShiftRu": "Backspace" },

    Tab: { "keyEn": "Tab", "keyRu": "Tab", "keyShiftEn": "Tab", "keyShiftRu": "Tab" },
    KeyQ: { "keyEn": "q", "keyRu": "й", "keyShiftEn": "Q", "keyShiftRu": "Й" },
    KeyW: { "keyEn": "w", "keyRu": "ц", "keyShiftEn": "W", "keyShiftRu": "Ц" },
    KeyE: { "keyEn": "e", "keyRu": "у", "keyShiftEn": "E", "keyShiftRu": "У" },
    KeyR: { "keyEn": "r", "keyRu": "к", "keyShiftEn": "R", "keyShiftRu": "К" },
    KeyT: { "keyEn": "t", "keyRu": "е", "keyShiftEn": "T", "keyShiftRu": "Е" },
    KeyY: { "keyEn": "y", "keyRu": "н", "keyShiftEn": "Y", "keyShiftRu": "Н" },
    KeyU: { "keyEn": "u", "keyRu": "г", "keyShiftEn": "U", "keyShiftRu": "Г" },
    KeyI: { "keyEn": "i", "keyRu": "ш", "keyShiftEn": "I", "keyShiftRu": "Ш" },
    KeyO: { "keyEn": "o", "keyRu": "щ", "keyShiftEn": "O", "keyShiftRu": "Щ" },
    KeyP: { "keyEn": "p", "keyRu": "з", "keyShiftEn": "P", "keyShiftRu": "З" },
    BracketLeft: { "keyEn": "[", "keyRu": "х", "keyShiftEn": "{", "keyShiftRu": "Х" },
    BracketRight: { "keyEn": "]", "keyRu": "ъ", "keyShiftEn": "}", "keyShiftRu": "Ъ" },
    Backslash: { "keyEn": "/", "keyRu": "&#92", "keyShiftEn": "|", "keyShiftRu": "/" },
    Delete: { "keyEn": "DEL", "keyRu": "DEL", "keyShiftEn": "DEL", "keyShiftRu": "DEL" },

    CapsLock: { "keyEn": "CapsLock", "keyRu": "CapsLock", "keyShiftEn": "CapsLock", "keyShiftRu": "CapsLock" },
    KeyA: { "keyEn": "a", "keyRu": "ф", "keyShiftEn": "A", "keyShiftRu": "Ф" },
    KeyS: { "keyEn": "s", "keyRu": "ы", "keyShiftEn": "S", "keyShiftRu": "Ы" },
    KeyD: { "keyEn": "d", "keyRu": "в", "keyShiftEn": "D", "keyShiftRu": "В" },
    KeyF: { "keyEn": "f", "keyRu": "а", "keyShiftEn": "F", "keyShiftRu": "А" },
    KeyG: { "keyEn": "g", "keyRu": "п", "keyShiftEn": "G", "keyShiftRu": "П" },
    KeyH: { "keyEn": "h", "keyRu": "р", "keyShiftEn": "H", "keyShiftRu": "Р" },
    KeyJ: { "keyEn": "j", "keyRu": "о", "keyShiftEn": "J", "keyShiftRu": "О" },
    KeyK: { "keyEn": "k", "keyRu": "л", "keyShiftEn": "K", "keyShiftRu": "Л" },
    KeyL: { "keyEn": "l", "keyRu": "д", "keyShiftEn": "L", "keyShiftRu": "Д" },
    Semicolon: { "keyEn": ";", "keyRu": "ж", "keyShiftEn": ":", "keyShiftRu": "Ж" },
    Quote: { "keyEn": "'", "keyRu": "э", "keyShiftEn": "\"", "keyShiftRu": "Э" },
    Enter: { "keyEn": "Enter", "keyRu": "Enter", "keyShiftEn": "Enter", "keyShiftRu": "Enter" },

    ShiftLeft: { "keyEn": "Shift", "keyRu": "Shift", "keyShiftEn": "Shift", "keyShiftRu": "Shift" },
    KeyZ: { "keyEn": "z", "keyRu": "я", "keyShiftEn": "Z", "keyShiftRu": "Я" },
    KeyX: { "keyEn": "x", "keyRu": "ч", "keyShiftEn": "X", "keyShiftRu": "Ч" },
    KeyC: { "keyEn": "c", "keyRu": "с", "keyShiftEn": "C", "keyShiftRu": "С" },
    KeyV: { "keyEn": "v", "keyRu": "м", "keyShiftEn": "V", "keyShiftRu": "М" },
    KeyB: { "keyEn": "b", "keyRu": "и", "keyShiftEn": "B", "keyShiftRu": "И" },
    KeyN: { "keyEn": "n", "keyRu": "т", "keyShiftEn": "N", "keyShiftRu": "Т" },
    KeyM: { "keyEn": "m", "keyRu": "ь", "keyShiftEn": "M", "keyShiftRu": "Ь" },
    Comma: { "keyEn": ",", "keyRu": "б", "keyShiftEn": "<", "keyShiftRu": "Б" },
    Period: { "keyEn": ".", "keyRu": "ю", "keyShiftEn": ">", "keyShiftRu": "Ю" },
    Slash: { "keyEn": "/", "keyRu": ".", "keyShiftEn": "?", "keyShiftRu": "," },
    ArrowUp: { "keyEn": "&#9650", "keyRu": "&#9650", "keyShiftEn": "&#9650", "keyShiftRu": "&#9650" },
    ShiftRight: { "keyEn": "Shift", "keyRu": "Shift", "keyShiftEn": "Shift", "keyShiftRu": "Shift" },

    ControlLeft: { "keyEn": "Ctrl", "keyRu": "Ctrl", "keyShiftEn": "Ctrl", "keyShiftRu": "Ctrl" },
    MetaLeft: { "keyEn": "Win", "keyRu": "Win", "keyShiftEn": "Win", "keyShiftRu": "Win" },
    AltLeft: { "keyEn": "Alt", "keyRu": "Alt", "keyShiftEn": "Alt", "keyShiftRu": "Alt" },
    Space: { "keyEn": " ", "keyRu": " ", "keyShiftEn": " ", "keyShiftRu": " " },
    AltRight: { "keyEn": "Alt", "keyRu": "Alt", "keyShiftEn": "Alt", "keyShiftRu": "Alt" },
    ControlRight: { "keyEn": "Ctrl", "keyRu": "Ctrl", "keyShiftEn": "Ctrl", "keyShiftRu": "Ctrl" },
    ArrowLeft: { "keyEn": "&#9668", "keyRu": "&#9668", "keyShiftEn": "&#9668", "keyShiftRu": "&#9668" },
    ArrowDown: { "keyEn": "&#9660", "keyRu": "&#9660", "keyShiftEn": "&#9660", "keyShiftRu": "&#9660" },
    ArrowRight: { "keyEn": "&#9658", "keyRu": "&#9658", "keyShiftEn": "&#9658", "keyShiftRu": "&#9658" },
};

document.querySelector('body').insertAdjacentHTML('afterbegin', '<textarea name="" id="textarea" cols="30" rows="10" autofocus></textarea><div class="keyBoard"><div class="KeyboardRows" id="KeyboardRows"><div class="row1 row"></div><div class="row2 row"></div>   <div class="row3 row"></div>       <div class="row4 row"></div>   <div class="row5 row"></div> </div></div>');
document.querySelector('body').insertAdjacentHTML('beforeend',`<div class="rules">Cмена язака: ALT + SHIFT</div>`);
let textarea = document.querySelector('textarea');
let language = '';


const getKeyboard = (keyValue) => {
    document.querySelectorAll('.row').forEach(el => el.innerHTML = '');
    let countButtons = 1;
    for (let key in buttons) {
        let div = document.createElement('div');
        let el;
        div.className = "buttons";
        div.id = key;
        div.innerHTML = buttons[key][keyValue];
        if(countButtons < 15) {
            el = document.querySelector('.row1');
        } else if(14 < countButtons && countButtons < 30){
            el = document.querySelector('.row2');
        } else if(29 < countButtons && countButtons < 43){
            el = document.querySelector('.row3');
        } else if(42 < countButtons && countButtons < 56){
            el = document.querySelector('.row4');
        } else if(55<countButtons){
            el = document.querySelector('.row5');
        }
        el.append(div);
        countButtons++;
    }
    language = keyValue;
    sessionStorage.setItem("language", language);

}

const getElement = (event) => {
    let clickedElement = event.target;
    let active = document.querySelector('.active');

    if (clickedElement.className == "buttons active"&&clickedElement.innerHTML !== 'Shift'){
        clickedElement.classList.remove('active');       
    }else if (clickedElement.className == "buttons"||clickedElement.className == "buttons active") {

        if (clickedElement.innerHTML === 'Backspace') {
            let str = textarea.value;
            let newStr = str.substring(0, str.length - 1);
            textarea.value = newStr;
        } else if ( clickedElement.innerHTML === 'CapsLock' ||
            clickedElement.innerHTML === 'Ctrl' || clickedElement.innerHTML === 'Win'|| clickedElement.innerHTML === 'Alt' ) {
                if(clickedElement.innerHTML !== 'Alt') document.querySelectorAll('.buttons').forEach(el=>el.classList.remove('active'))
                clickedElement.classList.add('active');
        } else if (clickedElement.innerHTML === 'Shift') {
            if(active==undefined||active.innerHTML === 'Shift') {
                
                if (language=='keyEn') {
                    getKeyboard('keyShiftEn');
                    document.getElementById(clickedElement.id).classList.add('active');
                }
                else if(language=='keyShiftEn') {
                    getKeyboard('keyEn');
                    document.getElementById(clickedElement.id).classList.remove('active');
                }
                else if(language=='keyRu') {
                    getKeyboard('keyShiftRu');
                    document.getElementById(clickedElement.id).classList.add('active');
                }
                else if(language=='keyShiftRu') {
                    getKeyboard('keyRu');
                    document.getElementById(clickedElement.id).classList.remove('active');
                }
            }
            else if(active.innerHTML=='Alt'){
                if(language=='keyRu')getKeyboard('keyEn');
                else if(language=='keyEn')getKeyboard('keyRu');
            }else{
                document.querySelectorAll('.buttons').forEach(el=>el.classList.remove('active'));
            }
            
        } else if(clickedElement.innerHTML === 'Enter'){
            textarea.value+= '\n';
        }else if(clickedElement.innerHTML === 'Tab'){
            textarea.value+= '   ';
        }else if (clickedElement.innerHTML === 'DEL'){
            let str = textarea.value;
            let pos = textarea.selectionStart;
            let oldStr = str.slice(0,pos);
            let newStr = str.slice(pos + 1);
            textarea.value = oldStr+newStr;
            textarea.focus()
            textarea.selectionStart = pos;
        }else {
            textarea.value += clickedElement.innerHTML
            document.querySelectorAll('.buttons').forEach(el=>el.classList.remove('active'))
        }
        textarea.focus()
    }
}
document.querySelector('.KeyboardRows').addEventListener('click', getElement);

document.addEventListener('keydown',(event)=>{
   let button = document.getElementById(event.code);
   let active = document.querySelector('.active');
   if(button){
       if(active){
            if(active.innerHTML==='Alt'&&button.innerHTML==='Shift'){
                if(language=='keyRu')getKeyboard('keyEn');
                else if(language=='keyEn')getKeyboard('keyRu');
            }
        }
        button.classList.add('active');
        document.addEventListener('keyup',(event)=>{
            button.classList.remove('active')
            event.preventDefault()            
        })
        if(button.id=='Tab'){
            event.preventDefault()
            textarea.value += '   ';
        }
        textarea.focus();
    }
   
})
window.onload = ()=>{
    if(!sessionStorage.getItem("language"))getKeyboard('keyEn');
    else getKeyboard(sessionStorage.getItem("language"));
}








