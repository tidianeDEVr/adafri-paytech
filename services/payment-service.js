module.exports = {
    generateReference: function generateReference(){
        var n = Math.floor(Math.random() * 11);
        var k = Math.floor(Math.random() * 1000000);
        var m = String.fromCharCode(n) + k;
        return `ada-char-${m}`;
    },
}