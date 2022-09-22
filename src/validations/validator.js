
const isValid = function (value) {
    if (typeof value === "undefined" || value === null) return false;
    if (typeof value === "string" && value.trim().length === 0) return false;
    if (typeof value === "object" && Object.keys(value).length === 0) return false;
    return true;
};



const emptyBody = function (value) {
    return Object.keys(value).length > 0;
};


const idMatch = function (value){
    let user = /^[0-9a-fA-F]{24}$/.test(value)
    return user
}

module.exports = {isValid, emptyBody, idMatch}