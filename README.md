# DateLibrary

This is a utility for format a given javascript date object to a date string in the following 
format "dd/MM/yyyy".

# Usage

in consumer.js
```bash
import { DateUtil } from 'dateLibrary'
const dateUtil = new DateUtil(new Date());
console.log(dateUtil.getFormatDate())
```

## Scripts

Build the library
```bash
npm run build
```
Execute test
```bash
npm run test
```
Publish library
```bash
npm run publish-lib
```
