export class Exception {
private _paramName : string;

    /**
     *
     */
    constructor(paramName:string,message?:string) {

    }
    protected getName(): string {return "Exception";}
}