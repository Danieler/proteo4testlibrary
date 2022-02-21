import { DateUtil } from "./DateUtil";
describe('DateUtil', () => {
    const dateUtil = new DateUtil(new Date(2010, 7, 5));
    test('padTo2Digits method should add two digits to a single number string', () => {
        const singleNumber = '7';
        const padNumber = dateUtil.padTo2Digits(singleNumber);
        expect(padNumber).toBe('07');
    });
    test('getFormatDate method should return the initial Date in the following format dd/MM/yyyy.', () => {
        const formatedDate = dateUtil.getFormatDate();
        expect(formatedDate).toBe('05/08/2010');
    });
});
