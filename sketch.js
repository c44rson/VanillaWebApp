const principalInputBox = document.querySelector("#principal");
const rateInputBox = document.querySelector("#rate");
const timesInputBox = document.querySelector("#compounded");
const yearsInputBox = document.querySelector("#years");
const answerSpan = document.querySelector("#result");

const report = () => {
	const p = principalInputBox.value;
	const r = rateInputBox.value;
	var nv = document.getElementById("compounded");
	const n = nv.value;
	const t = yearsInputBox.value;
	const answer = p * (1 + r / 100 / n) ** (n * t);
	if (isNaN(answer)) {
		answerSpan.textContent = "?";
	} else {
		answerSpan.textContent = Math.round(100 * answer) / 100;
	}
};

principalInputBox.addEventListener("input", report);
rateInputBox.addEventListener("input", report);
timesInputBox.addEventListener("input", report);
yearsInputBox.addEventListener("input", report);
