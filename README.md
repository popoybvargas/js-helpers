# @teamzv/js-helpers

Collection of handy utilities using javascript functions.

### Basic Usage

```
import _ from "@teamzv/js-helpers";
```

### Utilities

**basicAuth(username, password)**

```
_.basicAuth("awesomeuser", "awesomepassword");
// "Basic YXdlc29tZXVzZXI6YXdlc29tZXBhc3N3b3Jk"
```

**camelCase(text)**

```
_.camelCase("Pack_my_Box_with_five_Dozen_liquor_Jugs");
// "packMyBoxWithFiveDozenLiquorJugs"
_.camelCase("Pack my Box with five Dozen liquor Jugs", " ");
// "packMyBoxWithFiveDozenLiquorJugs"
```

**decodeBase64(base64encodedStr)**

```
_.decodeBase64("cGFjayBteSBib3ggd2l0aCBmaXZlIGRvemVuIGxpcXVvciBqdWdz");
// "pack my box with five dozen liquor jugs"
```

**encodeToBase64(str)**

```
_.encodeToBase64("pack my box with five dozen liquor jugs");
// "cGFjayBteSBib3ggd2l0aCBmaXZlIGRvemVuIGxpcXVvciBqdWdz"
```

**getTimestamp()**

```
_.getTimestamp();
// "202210191311"	=> full year + month + date + hours + minutes
```

**isLeapYear(year)**

```
_.isLeapYear(2012);
// true
```

**localizedWorldDatetime(timeZone)**  
_timeZone defaults to "America/Chicago"_

```
_.localizedWorldDatetime();
// "5/25/2022, 8:35:54 AM"
_.localizedWorldDatetime("Asia/Manila");
// "5/25/2022, 9:35:54 PM"
```

**midnightDatetimeNow(timeZone)**  
_timeZone defaults to "America/Chicago"_

```
_.midnightDatetimeNow();
// "2022-05-25T013:00:00.000Z"
_.midnightDatetimeNow("Asia/Manila");
// "2022-05-25T00:00:00.000Z"
```

**pad(num)**

```
_.pad(8);
// "08"
_.pad(8, 10);
// "0000000008"
_.pad(8, 5, "*");
// "****8"
_.pad(828, 10, "*");
// "*******828"
```
