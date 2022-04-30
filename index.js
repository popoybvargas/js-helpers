'use strict';

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