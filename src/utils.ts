export const basicAuth = (username: string, password: string): string =>
  "Basic " +
  Buffer.from(`${username}:${password}`, "binary").toString("base64");

export const camelCase = (string: string, separator = "_"): string => {
  if (string) {
    const stringArray = string.split(separator);
    let camelCased = stringArray[0]!.toLowerCase();

    if (stringArray.length > 1) {
      for (let i = 1; i < stringArray.length; i++) {
        camelCased +=
          stringArray[i]!.substring(0, 1).toUpperCase() +
          stringArray[i]!.substring(1);
      }
    }

    return camelCased;
  }

  return "nothing to camelCase";
};

export const decodeBase64 = (base64encodedStr: string): string =>
  Buffer.from(base64encodedStr, "base64").toString("utf-8");

export const encodeToBase64 = (str: string): string =>
  Buffer.from(str, "utf-8").toString("base64");

export const getTimestamp = () => {
  const now = new Date();
  let timestamp = `${now.getFullYear()}`;

  const month = now.getMonth() + 1;
  timestamp += month < 10 ? `0${month}` : month.toString();

  const date = now.getDate();
  timestamp += date < 10 ? `0${date}` : date;

  const hours = now.getHours();
  timestamp += hours < 10 ? `0${hours}` : hours;

  const minutes = now.getMinutes();
  timestamp += minutes < 10 ? `0${minutes}` : minutes;

  const seconds = now.getSeconds();
  timestamp += seconds < 10 ? `0${seconds}` : seconds;

  return timestamp;
};

export const isLeapYear = (year: number): boolean =>
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

/**
 *
 * @param {string} timeZone 'America/Chicago'
 * @returns {string} '5/24/2022, 8:16:13 AM'
 */
export const localizedWorldDatetime = (timeZone = "America/Chicago"): string =>
  new Date().toLocaleString("en-US", { timeZone });

/** DEFAULTS TO CST */
export const midnightDatetimeNow = (timeZone = "America/Chicago"): string => {
  const timeZoneDatetime = new Date(localizedWorldDatetime(timeZone));
  const timeZoneOffset = Math.abs(
    timeZoneDatetime.getHours() - new Date().getHours(),
  );
  const year = timeZoneDatetime.getFullYear();
  const month = pad(timeZoneDatetime.getMonth() + 1);
  const day = pad(timeZoneDatetime.getDate());
  const midnightDatetimeNow = `${year}-${month}-${day}T0${timeZoneOffset}:00:00.000Z`;

  return midnightDatetimeNow;
};

export const pad = (num: number, charLength = 2, charPadding = "0"): string =>
  num.toString().padStart(charLength, charPadding);
