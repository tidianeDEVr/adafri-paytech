module.exports = {
    generateReference: function generateReference(){
        var n = Math.floor(Math.random() * 11);
        var k = Math.floor(Math.random() * 1000000);
        var m = String.fromCharCode(n) + k;
        return `ada-char-${m}`;
    },
    checkIsAllParamsExist: function checkIsAllParamsExist(body){
        if(!body.reference) return false;
        if(!body.item_price) return false;
        if(!body.currency) return false;
        return true;
    }
}