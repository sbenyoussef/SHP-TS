export class StringUtility {
    public static EMPTY: string = "";
    public static NEWLINE: string = "\r\n";

    public static isNullOrEmpty(str: string): boolean {
        return !!str;
    }

    public static capitalize(str: string): string {
        return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
    }
}

