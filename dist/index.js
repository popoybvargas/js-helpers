"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pad = exports.midnightDatetimeNow = exports.localizedWorldDatetime = exports.isLeapYear = exports.encodeToBase64 = exports.decodeBase64 = exports.camelCase = exports.basicAuth = void 0;
const basicAuth = (username, password) => 'Basic ' + Buffer.from(`${username}:${password}`, 'binary').toString('base64');
exports.basicAuth = basicAuth;
const camelCase = (string, separator = '_') => {
    if (string) {
        const stringArray = string.split(separator);
        let camelCased = (stringArray[0]).toLowerCase();
        if (stringArray.length > 1) {
            for (let i = 1; i < stringArray.length; i++) {
                camelCased += (stringArray[i].substring(0, 1)).toUpperCase() + stringArray[i].substring(1);
            }
        }
        return camelCased;
    }
    return 'nothing to camelCase';
};
exports.camelCase = camelCase;
const decodeBase64 = (base64encodedStr) => (Buffer.from(base64encodedStr, 'base64')).toString('utf-8');
exports.decodeBase64 = decodeBase64;
const encodeToBase64 = (str) => (Buffer.from(str, 'utf-8')).toString('base64');
exports.encodeToBase64 = encodeToBase64;
const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
exports.isLeapYear = isLeapYear;
const localizedWorldDatetime = (timeZone = 'America/Chicago') => (new Date()).toLocaleString('en-US', { timeZone });
exports.localizedWorldDatetime = localizedWorldDatetime;
const midnightDatetimeNow = (timeZone = 'America/Chicago') => {
    const timeZoneDatetime = new Date((0, exports.localizedWorldDatetime)(timeZone));
    const timeZoneOffset = Math.abs(timeZoneDatetime.getHours() - new Date().getHours());
    const year = timeZoneDatetime.getFullYear();
    const month = (0, exports.pad)(timeZoneDatetime.getMonth() + 1);
    const day = (0, exports.pad)(timeZoneDatetime.getDate());
    const midnightDatetimeNow = `${year}-${month}-${day}T0${timeZoneOffset}:00:00.000Z`;
    return midnightDatetimeNow;
};
exports.midnightDatetimeNow = midnightDatetimeNow;
const pad = (num, charLength = 2, charPadding = '0') => num.toString().padStart(charLength, charPadding);
exports.pad = pad;
