
// Создание экземпляра QRCode         
var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: "i.yakoff@yandex.ru", //здесь текст или URL-адрес, который надо закодировать в QR-код
    width: 256,
    height: 256,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
});
// Отображение QR-кода
function showQRCode() {
    qrcode.makeCode(document.getElementById("qr-text").value);
}