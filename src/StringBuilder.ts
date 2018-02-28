import { StringUtility } from "./Utility/StringUtility";

export class StringBuilder {
    private _str: any[];
    /**
     *
     */
    constructor(capacity?: number) {
        if (capacity) {
            if (capacity < 0) {
                throw new RangeError("Invalid capacity length");
            }
            this._str = new Array(capacity);
        } else {
            this._str = [];
        }
    }

    /**
     *
     * @param value
     */
    public append(value: any): StringBuilder {
        this._str.push(value);
        return this;
    }

    /**
     *
     * @param values
     */
    public appendSeveral(...values: any[]): StringBuilder {
        values.forEach(x => this.append(x));
        return this;
    }

    public appendNewLine(line: string): StringBuilder {
        this.appendSeveral(line, StringUtility.NEWLINE);
        return this;
    }

    /**     */
    public isEmpty(): boolean {
        return this._str.length === 0;
    }

    /** */
    public clear(): StringBuilder {
        while (this._str.length) {
            this._str.pop();
        }
        return this;
    }

    /**
     *
     * @param delimiter
     */
    public join(delimiter: string): string {
        return this._str.join(delimiter);
    }

    /** */
    public toString(): string {
        return this._str.join(StringUtility.EMPTY);
    }
}