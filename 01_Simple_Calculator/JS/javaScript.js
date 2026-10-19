let oparators = document.querySelectorAll("button");
let answer = document.getElementById("answer");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");

for (let i = 0; i < oparators.length; i++) {
    oparators[i].addEventListener("click", () => {
        let buttonValue = oparators[i].textContent;
        if (buttonValue === "C") {
            restart();
            return;
        } else if (num1.value == "" || num2.value == "") {
            alert("لطفا جاهای خالی اعداد را پر کنید!")
            return;
        }
        showResult(buttonValue);
    })
}

function restart() {
    num1.value = "";
    num2.value = "";
    answer.value = "";
}

function showResult(a) {
    try {
        let result = new Function("return " + num1.value + a + num2.value)();
        if (isNaN(result)) {
            answer.value = "Err";
        }
        else {
            answer.value = result;
        }
    } catch (error) {
        answer.value = "Err";

    }
}