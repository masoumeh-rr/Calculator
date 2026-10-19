let btn = document.querySelectorAll("button");
let result = document.getElementById("answer");
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", () => {
        let btnValue = btn[i].dataset.value || btn[i].textContent;
        if (btnValue === "=") {
            showResault();
        }
        else if (btnValue == "." && result.value == "") {
            result.value = "0.";
        }
        
        else if (btnValue === "backspace") {
            result.value=result.value.slice(0,-1)
        }

        else if (btnValue == "C") {
            clear();
        }
        else if (result.value == "" && btnValue == "0") {
        }
        else {
            appendResault(btnValue);
        }

    })
}
function showResault() {
    try {
        const resaulted = new Function("return " + result.value)();
        if (isNaN(resaulted) || !isFinite(resaulted)) {
            result.value = "Err";
        } else {
            result.value = resaulted;
        }
    } catch (error) {
        result.value = "Err";
    }

}

function clear() {
    result.value = "";
}

function appendResault(a) {
    if (result.value === "Err") {
        clear();
    }
    result.value += a;
}
