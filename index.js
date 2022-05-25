'use strict';

exports.basicAuth = (username, password) => 'Basic ' + Buffer.from(`${username}:${password}`, 'binary').toString('base64');

exports.camelCase = (string, separator = '_') =>
{
	if (string)
	{
		const stringArray = string.split(separator);
		let camelCased = (stringArray[0]).toLowerCase();

		if (stringArray.length > 1)
		{
			for (let i = 1; i < stringArray.length; i++)
			{
				camelCased += (stringArray[i].substring(0, 1)).toUpperCase() + stringArray[i].substring(1);
			}
		}

		return camelCased;
	}

	return 'nothing to camelCase';
};

exports.decodeBase64 = base64encodedStr => (Buffer.from(base64encodedStr, 'base64')).toString('utf-8');

exports.encodeToBase64 = str => (Buffer.from(str, 'utf-8')).toString('base64');

/**
 * 
 * @param {string} timeZone 'America/Chicago'
 * @returns {string} '5/24/2022, 8:16:13 AM'
 */
exports.localizedWorldDatetime = (timeZone = 'America/Chicago') => (new Date()).toLocaleString('en-US', { timeZone });

/** DEFAULTS TO CST */
exports.midnightDatetimeNow = (timeZone = 'America/Chicago') =>
{
	const timeZoneDatetime = new Date(this.localizedWorldDatetime(timeZone));
	const timeZoneOffset = Math.abs(timeZoneDatetime.getHours() - new Date().getHours());
	const year = timeZoneDatetime.getFullYear();
	const month = this.pad(timeZoneDatetime.getMonth() + 1);
	const day = this.pad(timeZoneDatetime.getDate());
	const midnightDatetimeNow = `${year}-${month}-${day}T0${timeZoneOffset}:00:00.000Z`;
	
	return midnightDatetimeNow;
};

exports.pad = (num, charLength = 2, charPadding = '0') => num.toString().padStart(charLength, charPadding);