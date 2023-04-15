
var numberList = [];
var usedNumbers = [];

function generateRandomNumber() {
    var input = document.getElementById("number-list").value.trim();
    numberList = input.split("\n");
    if (numberList.length === 0) {
        alert("Please enter a list of numbers");
        return;
    }

    var randomNumber = null;
    // if (numberList.length == 0) {
    //     alert("Vui lòng nhập lại danh sách!");
    //     return;
    // }
    do {
        var index = Math.floor(Math.random() * numberList.length);
        randomNumber = numberList[index];
    } while (usedNumbers.includes(randomNumber));

    usedNumbers.push(randomNumber);
    numberList.splice(index, 1);

    // Tạo hiệu ứng nhảy số
    var i = 0;
    var interval = setInterval(function () {
        var result = Math.floor(Math.random() * (999 - 100 + 1) + 100);
        document.getElementById("result").innerHTML = "Số may mắn:" + "<div>" + result + "</div>";
        i++;
        if (i == 50) { // Thay đổi số lần nhảy ở đây
            clearInterval(interval);
            document.getElementById("result").innerHTML = "Số may mắn:" + "<div>" + randomNumber + "</div>";
        }
    }, 50); // Thay đổi thời gian nhảy (millisecond) ở đây
    // Play the sound effect
    var soundEffect = document.getElementById("sound-effect");
    soundEffect.currentTime = 0;
    soundEffect.play();

    // Delay for 3 seconds and then play the congratulations sound
    setTimeout(function () {
        var congratulations = document.getElementById("congratulations");
        congratulations.currentTime = 0;
        congratulations.play();
    }, 2500);
}
/* Auto-play the video when it is loaded */
var video = document.getElementById("video-background");
video.addEventListener("loadeddata", function () {
    video.play();
});