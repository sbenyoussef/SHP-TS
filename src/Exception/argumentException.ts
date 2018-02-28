import { Exception } from "./exception";
export class ArgumentException extends Exception {
    /**
     *
     */
    constructor(paramName: string, message?: string) {
        super(paramName, message);

    }
    protected getName(): string { return "Argument exception"; }
}