const keyboard = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace",
"tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\",
"capsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "enter",
"shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "up", "delete", "switch",
"ctrl", "alt", "space", "left", "down", "right", "win",];

const keyboardCaps = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "backspace",
"tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "|",
"capsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", '"', "enter",
"shift", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", "up", "delete", "switch",
"ctrl", "alt", "space", "left", "down", "right", "win",];

const keyboardRu = ["ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace",
"tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\",
"caps_Lock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "enter",
"shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "up", "delete", "switch",
"ctrl", "alt", "space", "left", "down", "right", "win",];

const keyboardRuCaps = ["Ё", "!", '"', "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", "backspace",
"tab", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "/",
"caps_Lock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "enter",
"shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ",", "up", "delete", "switch",
"ctrl", "alt", "space", "left", "down", "right", "win",];

let container = document.createElement("div");
let wrap = document.createElement("div");
let wrapCaps = document.createElement("div");
let wrapRu = document.createElement("div");
let wrapRuCaps = document.createElement("div");
let keyboardKeys = document.createElement("div");
let keyboardKeysCaps = document.createElement("div");
let keyboardKeysRu = document.createElement("div");
let keyboardKeysRuCaps = document.createElement("div");
let text = document.createElement("textarea");
let script = document.getElementsByTagName('script')[0]
let anatations = document.createElement("div")

container.classList.add("container");
wrap.classList.add("keyboard_wrapp");
wrap.classList.add("keyboard_wrappEn");
wrapCaps.classList.add("keyboard_wrapp");
wrapCaps.classList.add("keyboard_wrappEnCaps");
wrapCaps.classList.add("hidden");
wrapRu.classList.add("keyboard_wrapp");
wrapRu.classList.add("keyboard_wrappRu");
wrapRu.classList.add("hidden");
wrapRuCaps.classList.add("keyboard_wrapp");
wrapRuCaps.classList.add("keyboard_wrappRuCaps");
wrapRuCaps.classList.add("hidden");


// wrapRu.id = "Ru";
// wrap.id = "En";

keyboardKeys.classList.add("keyboard_keys");
keyboardKeys.id = "keyboard";
keyboardKeysCaps.classList.add("keyboard_keys");
keyboardKeysCaps.classList.add("keyboard_keysCaps");
keyboardKeysCaps.id = "keyboardCaps";
keyboardKeysRu.classList.add("keyboard_keys");
keyboardKeysRu.classList.add("keyboard_keysRu");
keyboardKeysRu.id = "keyboardRu";
keyboardKeysRuCaps.classList.add("keyboard_keys");
keyboardKeysRuCaps.classList.add("keyboard_keysRuCaps");
keyboardKeysRuCaps.id = "keyboardRuCaps";
anatations.classList.add("anatations");


anatations.innerHTML = "Добрый день. Для переключения языка используйте клавишу switch (нижний правый угол). Для работы подсветки так же нужно переключить язык и на вашей системе, что-бы он совпадал с языком на виртуальной клавиатуре. Ввод можно производить и с реальной и с виртуальной клавиатуры. Языки En и Ru"


text.classList.add("text");
text.id = "text";


document.body.insertBefore(container, script);
container.appendChild(wrap);
container.appendChild(wrapRu);
container.appendChild(wrapCaps);
container.appendChild(wrapRuCaps);
wrap.appendChild(keyboardKeys);
wrapCaps.appendChild(keyboardKeysCaps);
wrapRu.appendChild(keyboardKeysRu);
wrapRuCaps.appendChild(keyboardKeysRuCaps);
container.appendChild(text);
container.appendChild(anatations);







function init() {
    let out = "";
    for (let i = 0; i < keyboard.length; i++) {
          out += `<button class="keys ${keyboard[i]}_key" dataRu="`+keyboardRu[i]+`" onmousedown="alerted(this.id)" onmouseup="noAlerted(this.id)">`+keyboard[i]+'</button>';
    }
    document.querySelector('#keyboard').innerHTML = out
}
init();

function initRu() {
    let out = "";
    for (let i = 0; i < keyboard.length; i++) {
          out += `<button class="keys ${keyboard[i]}_key" dataRu="`+keyboardRu[i]+`" onmousedown="alerted(this.id)" onmouseup="noAlerted(this.id)">`+keyboardRu[i]+'</button>';
    }
    document.querySelector('#keyboardRu').innerHTML = out
}
initRu();

function initCaps() {
    let out = "";
    for (let i = 0; i < keyboard.length; i++) {
          out += `<button class="keys ${keyboard[i]}_key" dataRu="`+keyboardRu[i]+`" onmousedown="alerted(this.id)" onmouseup="noAlerted(this.id)">`+keyboardCaps[i]+'</button>';
    }
    document.querySelector('#keyboardCaps').innerHTML = out
}
initCaps();

function initRuCaps() {
    let out = "";
    for (let i = 0; i < keyboard.length; i++) {
          out += `<button class="keys ${keyboard[i]}_key" dataRu="`+keyboardRu[i]+`" onmousedown="alerted(this.id)" onmouseup="noAlerted(this.id)">`+keyboardRuCaps[i]+'</button>';
    }
    document.querySelector('#keyboardRuCaps').innerHTML = out
}
initRuCaps();


let keys = document.querySelectorAll('.keys');
let tabKey = document.querySelector('.tab_key');
let backspaceKey = document.querySelector('.backspace_key');
let enterKey = document.querySelector('.enter_key');
let shiftKey = document.querySelector('.shift_key');
let deleteKey = document.querySelector('.delete_key');
let switchKey = document.querySelector('.switch_key');
let controlKey = document.querySelector('.ctrl_key');
let altKey = document.querySelector('.alt_key');
let winKey = document.querySelector('.win_key');
let spaceKey = document.querySelector('.space_key');
let leftKey = document.querySelector('.left_key');
let rightKey = document.querySelector('.right_key');
let upKey = document.querySelector('.up_key');
let downKey = document.querySelector('.down_key');

el = document.getElementById("main");

let border = document.getElementsByClassName("border_active");

let capsKey = document.querySelector('.capsLock_key');

let Rumba = document.querySelector('.keyboard_wrappRu')
let Enmba = document.querySelector('.keyboard_wrappEn')
let EnmbaCaps = document.querySelector('.keyboard_wrappEnCaps')
let RumbaCaps = document.querySelector('.keyboard_wrappRuCaps')

// let RuKey = document.getElementById("Ru");
// let EnKey = document.getElementById("En");


for(let i = 0; i < keys.length; i++) {
    keys[i].setAttribute('id', keys[i].innerText);
    keys[i].setAttribute('UpCaseName', keys[i].innerText.toUpperCase());
    keys[i].setAttribute('LowCaseName', keys[i].innerText.toLowerCase());
}




 
function alerted(thisid) {
    document.getElementById(thisid).classList.add("active");
    if(document.getElementById(thisid).id == 'capsLock'){
        if(EnmbaCaps.classList.contains('hidden')){
                Enmba.classList.add('hidden')
                Rumba.classList.add('hidden')
                RumbaCaps.classList.add('hidden')
                EnmbaCaps.classList.remove('hidden')
                }
        else if(Enmba.classList.contains('hidden')){
                EnmbaCaps.classList.add('hidden')
                RumbaCaps.classList.add('hidden')
                Rumba.classList.add('hidden')
                Enmba.classList.remove('hidden')
                }
    }
    if(document.getElementById(thisid).id == 'caps_Lock'){
         if(RumbaCaps.classList.contains('hidden')){
            Enmba.classList.add('hidden')
            Rumba.classList.add('hidden')
            EnmbaCaps.classList.add('hidden')
            RumbaCaps.classList.remove('hidden')
            }
        else if(Rumba.classList.contains('hidden')){
            EnmbaCaps.classList.add('hidden')
            RumbaCaps.classList.add('hidden')
            Enmba.classList.add('hidden')
            Rumba.classList.remove('hidden')
            }
    }
    if(document.getElementById(thisid).id == 'switch'){
        if(Rumba.classList.contains('hidden')){
        Enmba.classList.add('hidden')
        EnmbaCaps.classList.add('hidden')
        RumbaCaps.classList.add('hidden')
        Rumba.classList.remove('hidden')
        }
        else if(Enmba.classList.contains('hidden')){
            Rumba.classList.add('hidden')
            EnmbaCaps.classList.add('hidden')
            RumbaCaps.classList.add('hidden')
            Enmba.classList.remove('hidden')
            }
    }
    if(document.getElementById(thisid).id == 'tab'){
        text.value += "     "   
    }
    if(document.getElementById(thisid).id == 'backspace'){
        text.value = text.value.substring(0, text.value.length - 1);
    }
    if(document.getElementById(thisid).id == 'delete'){
        text.value = text.value.substring(0, text.value.length - 1);
    }
    if(document.getElementById(thisid).id == 'enter'){
        text.value += "\n"
    }
    if(document.getElementById(thisid).id == 'space'){
        text.value += " "
    }
    if(document.getElementById(thisid).id == 'capsLock'){
        text.value += ""
    }
    if(document.getElementById(thisid).id == 'shift'){
        text.value += ""
    }
    if(document.getElementById(thisid).id == 'ctrl'){
        text.value += ""
    }
    if(document.getElementById(thisid).id == 'alt'){
        text.value += ""
    }
    if(document.getElementById(thisid).id == 'left'){
        text.value += "←"
    }
    if(document.getElementById(thisid).id == 'right'){
        text.value += "→"
    }
    if(document.getElementById(thisid).id == 'up'){
        text.value += "↑"
    }
    if(document.getElementById(thisid).id == 'down'){
        text.value += "↓"
    }
    if(document.getElementById(thisid).id.length <= 1){
        text.value += document.getElementById(thisid).id;
    }
    
    
  }
   
  function noAlerted(thisid) {
      document.getElementById(thisid).classList.remove("active");
  }
  
//   function cclick(thisid) {
//     document.getElementById(thisid).classList.remove("active");
//     text.value += document.getElementById(thisid);
//   }


  
window.addEventListener('keydown', function(e) {
    for(let i = 0; i < keys.length; i++) {
        if(e.key == keys[i].getAttribute('id') || e.key == keys[i].getAttribute('UpCaseName')|| e.key == keys[i].getAttribute('LowCaseName')) {
            keys[i].classList.add('active')
        }
        if(e.code == 'Tab') {
            tabKey.classList.add('active')
        }
        if(e.code == 'Backspace') {
            backspaceKey.classList.add('active')
        }
        if(e.code == 'Enter') {
            enterKey.classList.add('active')
        }
        if(e.code == 'ShiftLeft') {
            shiftKey.classList.add('active')
        }
        if(e.code == 'Delete') {
            deleteKey.classList.add('active')
        }
        if(e.code == 'ControlRight') {
            switchKey.classList.add('active');
        }
        if(e.code == 'ControlLeft') {
            controlKey.classList.add('active')
        }
        if(e.code == 'MetaLeft') {
            winKey.classList.add('active');
        }
        if(e.code == 'AltLeft') {
            altKey.classList.add('active')
        }
        if(e.code == 'Space') {
            spaceKey.classList.add('active')
        }
        if(e.code == 'ArrowLeft') {
            leftKey.classList.add('active')
        }
        if(e.code == 'ArrowRight') {
            rightKey.classList.add('active')
        }
        if(e.code == 'ArrowUp') {
            upKey.classList.add('active')
        }
        if(e.code == 'ArrowDown') {
            downKey.classList.add('active')
        }
        if(e.code == 'CapsLock') {
            capsKey.classList.add('active');
        }
    }
})



window.addEventListener('keyup', function(e) {
    for(let i = 0; i < keys.length; i++) {
        if(e.key == keys[i].getAttribute('id' ) || e.key == keys[i].getAttribute('UpCaseName')|| e.key == keys[i].getAttribute('LowCaseName')) {
            keys[i].classList.remove('active')
            // keys[i].classList.add('remove')
        }
        if(e.code == 'Tab') {
            tabKey.classList.remove('active')
        }
        if(e.code == 'Backspace') {
            backspaceKey.classList.remove('active')
        }
        if(e.code == 'Enter') {
            enterKey.classList.remove('active')
        }
        if(e.code == 'ShiftLeft') {
            shiftKey.classList.remove('active')
        }
        if(e.code == 'Delete') {
            deleteKey.classList.remove('active')
        }
        if(e.code == 'ControlRight') {
            switchKey.classList.remove('active');
        }
        if(e.code == 'ControlLeft') {
            controlKey.classList.remove('active')
        }
        if(e.code == 'MetaLeft') {
            winKey.classList.remove('active');
        }
        if(e.code == 'AltLeft') {
            altKey.classList.remove('active')
        }
        if(e.code == 'Space') {
            spaceKey.classList.remove('active')
        }
        if(e.code == 'ArrowLeft') {
            leftKey.classList.remove('active')
        }
        if(e.code == 'ArrowRight') {
            rightKey.classList.remove('active')
        }
        if(e.code == 'ArrowUp') {
            upKey.classList.remove('active')
        }
        if(e.code == 'ArrowDown') {
            downKey.classList.remove('active')
        }
        if(e.code == 'CapsLock') {
            capsKey.classList.remove('active')
            
        }
        

        setTimeout(()=> {
            keys[i].classList.remove('remove')
        },200)
    }
})
