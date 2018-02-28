import {ArgumentException} from "./argumentException";
export class ArgumentNullException extends ArgumentException {
    constructor(paramName : string, message?: string) {
        super(paramName, message);

    }
    protected getName(): string {return "Argument null exception";}
}