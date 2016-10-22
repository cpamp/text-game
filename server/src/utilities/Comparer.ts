export class Comparitor {
    static isNull = (value: any) => {
        return value === null;
    }

    static isNullOrVoid = (value: any) => {
        return value == null;
    }

    static isNullOrEmpty = (value: string) => {
        return Comparitor.isNull(value) || value === '';
    }
}