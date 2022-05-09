window.onload = function() {  
  createContent();
  restore();
  isCapsAndLang();
  pressKeyHandler();
  pressMouseHandler(); 
  // pressedKeyClickMouse();
  // dePressedKeyClickMouse();
  mouseHandlerClick();
  };

const createContent = function () {
let boby = document.querySelector('body');
let wrapper = document.createElement('div');
wrapper.className = 'wrapper';
boby.prepend(wrapper);

let title = document.createElement('h1');
title.className = 'title';
title.textContent = "Виртуальная клавиатура";
wrapper.append(title);

let inputKeyboard = document.createElement('textarea');
inputKeyboard.className = 'input-keyboard';
inputKeyboard.id = 'textarea';
wrapper.append(inputKeyboard)

let keyboard = document.createElement('div');
keyboard.className = 'keyboard';
keyboard.id = 'keyboard'
wrapper.append(keyboard);

let language = document.createElement('p');
language.className = 'language';
language.textContent = 'Переключения языка комбинацией Shift + Alt'
wrapper.append(language);

}


const keyDownRu = [
  ['ё', '1', "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", 'Backspace', ],
  ['Tab', "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", '\\', 'Del', ],
  ['CapsLock', "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", 'Enter',],
  ["Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "▲", "Shift", ],
  ["Ctrl", "En", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl"],
];
const keyUpRu = [
  ['Ё', '!', "@", "#", "$", "%", ":", "?", "*", "(", ")", "_", "+", 'Backspace', ],
  ['Tab', "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", '/', 'Del', ],
  ['CapsLock', "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", 'Enter',],
  ["Shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ",", "▲", "Shift", ],
  ["Ctrl", "En", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl"],
];
const keyCapsRu = [
  ['Ё', '1', "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", 'Backspace', ],
  ['Tab', "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", '\\', 'Del', ],
  ['CapsLock', "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", 'Enter',],
  ["Shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ".", "▲", "Shift", ],
  ["Ctrl", "En", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl"],
];
const keyShiftCapsRu = [
  ['ё', '!', "@", "#", "$", "%", ":", "?", "*", "(", ")", "_", "+", 'Backspace', ],
  ['Tab', "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", '/', 'Del', ],
  ['CapsLock', "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", 'Enter',],
  ["Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ",", "▲", "Shift", ],
  ["Ctrl", "En", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl"],
];
 const keyDownEn = [
    ['`', '1', "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", 'Backspace', ],
    ['Tab', "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", '\\', 'Del', ],
    ['CapsLock', "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", 'Enter',],
    ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", '▲', "Shift", ],
    ["Ctrl", "Ru", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl"],
  ];
  const keyUpEn = [
    ['~', '!', "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", 'Backspace', ],
    ['Tab', "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", '|', 'Del', ],
    ['CapsLock', "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", "\"", 'Enter',],
    ["Shift", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", '▲', "Shift", ],
    ["Ctrl", "Ru", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl"],
  ];
  const keyCapsEn = [
    ['`', '1', "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", 'Backspace', ],
    ['Tab', "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", '\\', 'Del', ],
    ['CapsLock', "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", 'Enter',],
    ["Shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", '▲', "Shift", ],
    ["Ctrl", "Ru", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl"],
  ];
  const keyShiftCapsEn = [
    ['~', '!', "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", 'Backspace', ],
    ['Tab', "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "{", "}", '|', 'Del', ],
    ['CapsLock', "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", 'Enter',],
    ["Shift", "z", "x", "c", "v", "b", "n", "m", "<", ">", "?", "▲", "Shift", ],
    ["Ctrl", "Ru", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl"],
  ];

  const keyInd = [
    ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace",],
    ["Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash", "Delete",],
    ["CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter",],
    ["ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ArrowUp", "ShiftRight",],
    ["ControlLeft", "en", "AltLeft", "Space", "AltRight", "ArrowLeft", "ArrowDown", "ArrowRight", "ControlRight"],
  ];

  let lang = "en";
  let checkCaps = false;
  const saveState = () => {
    localStorage.setItem("keyboard-lang", lang);
  };
  const restore = () => {
    lang = localStorage.getItem("keyboard-lang")
      ? localStorage.getItem("keyboard-lang")
      : "en";
  };

  const createKey = (array) => {
    for (let i = 0; i < array.length; i++) {
      let row = document.createElement("div");
      row.className = "row";
      keyboard.append(row);
  
      for (let j = 0; j < array[i].length; j++) {
        let key = document.createElement("div");
        key.className = `key ${keyInd[i][j]}`;
        key.textContent = array[i][j];
        key.setAttribute('id', keyInd[i][j]);
        row.append(key);
      }
    }
  }
  
  const keyboardCaps = () => {
    checkCaps = document.getElementById("CapsLock").classList.contains("press") ? true : false;
    return checkCaps; 
  }
  
  const checkShift = () => {
    let shiftActive = document.getElementById("ShiftLeft").classList.contains("press");
    let rShiftActive = document.getElementById("ShiftRight").classList.contains("press");
    if (shiftActive || rShiftActive) {
      return true;
    }
    return false;
  };  
  
  // Cмена раскладки по клику мышкой
  const toggleCasesClick = (event) => {
  
    // шифт+альт
    if (event.target.id === "en") {
      changeLanguage();
      saveState();
      
    //  капс+шифт
    } else if (checkShift() && keyboardCaps()) {
      if (checkCaps && lang == "ru") {
        deleteKeys();
        createKey(keyShiftCapsRu);
        document.getElementById("CapsLock").classList.toggle("press");
        if (event.code === "ShiftLeft") {
        } else if (event.code === "ShiftRight") {
          document.getElementById("ShiftRight").classList.toggle("press");
        }
      }
    } // капс
     else if (event.target.id === "CapsLock" && !checkShift()) {
      keyboardCaps();
      if (!checkCaps && lang == "ru") {
        deleteKeys();
        createKey(keyDownRu);
      } else if (checkCaps && lang == "ru") {
        deleteKeys();
        createKey(keyCapsRu);
        document.getElementById("CapsLock").classList.toggle("press");
      } else if (checkCaps && lang == "en") {
        deleteKeys();
        createKey(keyCapsEn);
        document.getElementById("CapsLock").classList.toggle("press");
      } else if (!checkCaps && lang == "en") {
        deleteKeys();
        createKey(keyDownEn);
      }
      // шифт
    } else if (event.target.id === "ShiftLeft" || event.target.id === "ShiftRight") {
      if (checkShift() && lang == "ru") {
        deleteKeys();
        createKey(keyUpRu);
        if (event.target.id === "ShiftLeft") {
          document.getElementById("ShiftLeft").classList.toggle("press");
        } else if (event.target.id === "ShiftRight") {
          document.getElementById("ShiftRight").classList.toggle("press");
        }
      } else if (!checkShift() && lang == "ru") {
        deleteKeys();
        createKey(keyDownRu);
      } else if (checkShift() && lang == "en") {
        deleteKeys();
        createKey(keyUpEn);
        if (event.target.id === "ShiftLeft") {
          document.getElementById("ShiftLeft").classList.toggle("press");
        } else if (event.target.id === "ShiftRight") {
          document.getElementById("ShiftRight").classList.toggle("press");
        }
      } else if (!checkShift() && lang == "en") {
        deleteKeys();
        createKey(keyDownEn);
      }
    }
  }
  
  // смена по key
  const toggleCasesPress = (event) => {
    
    // шифт+альт
    if (checkShift() &&
      (event.code === "AltLeft" || event.code === "AltRight")
    ) {
      changeLanguage();

      // капс+шифт
    } else if (checkShift() && keyboardCaps()) {
      if (checkCaps && lang == "ru") {
        deleteKeys();
        createKey(keyShiftCapsRu);
        document.getElementById("CapsLock").classList.toggle("press");
        if (event.code === "ShiftLeft") {
          document.getElementById("ShiftLeft").classList.toggle("press");
        } else if (event.code === "ShiftRight") {
          document.getElementById("ShiftRight").classList.toggle("press");
        }
      }
  
      // капс
    } 
      else if (event.code === "CapsLock" && !checkShift()) {
      keyboardCaps();  
      if (!checkCaps && lang == "ru") {
        deleteKeys();
        createKey(keyDownRu);
      } else if (checkCaps && lang == "ru") {
        deleteKeys();
        createKey(keyCapsRu);
        document.getElementById("CapsLock").classList.toggle("press");
      } else if (checkCaps && lang == "en") {
        deleteKeys();
        createKey(keyCapsEn);
        document.getElementById("CapsLock").classList.toggle("press");
      } else if (!checkCaps && lang == "en") {
        deleteKeys();
        createKey(keyDownEn);
      }
  
      // шифт
    } 
    else if ((event.code === "ShiftLeft" || event.code === "ShiftRight")) {
      if (checkShift() && lang == "ru") {
        deleteKeys();
        createKey(keyUpRu);
        if (event.code === "ShiftLeft") {
          document.getElementById("ShiftLeft").classList.toggle("press");
        } else if (event.code === "ShiftRight") {
          document.getElementById("ShiftRight").classList.toggle("press");
        }
      } else if (!checkShift() && lang == "ru") {
        deleteKeys();
        createKey(keyDownRu);
      } else if (checkShift() && lang == "en") {
        deleteKeys();
        createKey(keyUpEn);
        if (event.code === "ShiftLeft") {
          document.getElementById("ShiftLeft").classList.toggle("press");
        } else if (event.code === "ShiftRight") {
          document.getElementById("ShiftRight").classList.toggle("press");
        }
      } else if (!checkShift() && lang == "en") {
        deleteKeys();
        createKey(keyDownEn);
      }
    }
  }
  // смена языка
  const changeLanguage = () => {
    if (lang === "en") {
      lang = "ru";
      saveState();
      changeKeyboard(lang);
    } else if (lang === "ru") {
      lang = "en";
      saveState();
      changeKeyboard(lang);
    }
  };
  
  // раскладка
  const changeKeyboard = (lang) => {
    deleteKeys();  
    isCapsAndLang(lang); 
  };
  
  const deleteKeys = () => {
    while (keyboard.hasChildNodes()) {
      keyboard.removeChild(keyboard.firstChild);
    }
  };

  const isCapsAndLang = () => {  
    if (checkCaps && lang == "ru") {
      createKey(keyCapsRu);
    } 
    else if (!checkCaps && lang == "ru") {
      createKey(keyDownRu);
    } 
    else if (checkCaps && lang == "en") {
      createKey(keyCapsEn);
    } 
    else if (!checkCaps && lang == "en") {
      createKey(keyDownEn);
    }
  }

  // подсветка по нажатию на кнопку

  const pressedKey = (event) => {  
    document.querySelectorAll(".key").forEach((key) => {
      if (event.code == key.id) {
        key.classList.add("active");
        }
    });
        
    if (event.code == "CapsLock") {
      document.getElementById("CapsLock").classList.toggle("press");
    }
    if (event.code == "ShiftLeft") {
      document.getElementById("ShiftLeft").classList.toggle("press");
        //  document.querySelector('ShiftLeft').classList.add('active');
    }
    if (event.code == "ShiftRight") {
      document.getElementById("ShiftRight").classList.toggle("press");
    } 
  }
  
// снятие подсветки по нажатию на кнопку
  const dePressedKey = (event) => {
    document.querySelectorAll(".key").forEach((key) => {
       if (event.code == key.id) {
        key.classList.remove("active");
      }
    });    
  };
  
  // обработчик кнопок
  const pressKeyHandler = () => {
    document.addEventListener("keydown", (event) => {
      pressedKey(event);
      toggleCasesPress(event);
      textarea.focus();
    });

    document.addEventListener("keyup", (event) => {
      dePressedKey(event);
    });
  };
  

  // подсветка по нажатию мышкой

  const pressedKeyClickMouse = (event) => {

      let targetItems = event.target;
      if (targetItems.closest('.key')){
        targetItems.closest('.key').classList.add('active');
    }  
      if (event.target.id == "CapsLock") {
      document.getElementById("CapsLock").classList.toggle("press");
    }
      if (event.target.id == "ShiftLeft") {
      document.getElementById("ShiftLeft").classList.toggle("press");
    }
       if (event.target.id == "ShiftRight") {
      document.getElementById("ShiftRight").classList.toggle("press");
    }    
  };

  const dePressedKeyClickMouse = (event) => {

      let targetItems = event.target;
      if (targetItems.closest('.key')){
        targetItems.closest('.key').classList.remove('active');
      }  

  };
  
    // нажатие мышкой
  const pressMouseHandler = () => {
    let keyboardDiv = document.querySelector(".keyboard"); 
    keyboardDiv.addEventListener("mousedown", (event) => {
      pressedKeyClickMouse(event);
    });
  
    keyboardDiv.addEventListener("mouseup", (event) => {
      dePressedKeyClickMouse(event);
    });
  };

  // клик мышкой
  const mouseHandlerClick = () => {
    document.getElementById("keyboard").addEventListener("click", (event) => {
      toggleCasesClick(event);
      pressInput(event);
    });
  }    
  

  // обработка enter, del, Backspace, =, -, +  с мыши 

  const pressInput = (event) => {
    textarea.focus();

    if (event.target.id !== "keyboard" && !event.target.classList.contains("row")) {
    switch (event.target.id) {
      case "Space":
        textarea.value += " ";
        break;
      case "Enter":
        textarea.value += "\n";
        break;
      case "Tab":
        textarea.value += "    ";
        break;
      case "Backspace":
          if (textarea.value.length === 0) {
            return;
          }
          textarea.setRangeText(
            "",
            textarea.selectionStart,
            textarea.selectionEnd,
            "end"
          );
          if (textarea.selectionStart === textarea.selectionEnd) {
            textarea.setRangeText(
              "",
            textarea.selectionStart - 1,
            textarea.selectionEnd,
            "end"
            );
        };
      case "Delete":
          if (textarea.selectionStart === textarea.selectionEnd) {
            textarea.setRangeText(
              "",
              textarea.selectionStart,
              textarea.selectionEnd + 1,
              "end"
            );
          } else if (textarea.selectionStart !== textarea.selectionEnd) {
            textarea.setRangeText(
              "",
              textarea.selectionStart,
              textarea.selectionEnd,
              "end"
            );
        };
      case "CapsLock":
      case "ShiftLeft":
      case "ShiftRight":
      case "AltLeft":
      case "AltRight":
      case "ControlLeft":
      case "ControlRight":
      case "en":
        textarea.value += "";
        break;
      default:
        textarea.value += event.target.innerText;
        break;
    }     
    }  
  };