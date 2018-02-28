export default class SPQueryRunner {
    private _ctx: SP.ClientContext;

    /**
     *
     */
    constructor(context?: SP.ClientContext) {
        this._ctx = !context ? SP.ClientContext.get_current() : context;
    }
}