'use strict';

exports.basicAuth = (username, password) => 'Basic ' + Buffer.from(`${username}:${password}`, 'binary').toString('base64');

exports.camelCase = (string, separator = '_') =>
{
	if (string)
	{
		const stringArray = string.split(separator);
		let camelCased = stringArray[0];

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

exports.decodeBase64 = base64 => (Buffer.from(base64, 'base64')).toString('utf-8');

exports.encodeToBase64 = str => (Buffer.from(str, 'utf-8')).toString('base64');

exports.pad = (num, charLength = 2, charPadding = '0') => num.toString().padStart(charLength, charPadding);