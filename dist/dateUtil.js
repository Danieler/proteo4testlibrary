export class DateUtil {
    constructor(date) {
        this.date = date;
    }
    padTo2Digits(num) {
        return num.toString().padStart(2, '0');
    }
    getFormatDate() {
        return [
            this.padTo2Digits(this.date.getDate()),
            //get month returns from 0 to 11
            this.padTo2Digits(this.date.getMonth() + 1),
            this.date.getFullYear(),
        ].join('/');
    }
}
