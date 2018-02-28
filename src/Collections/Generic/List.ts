import { IList, IGroupedBy, IEqualityComparer } from "./Collection.types";

export class List<T> implements IList<T> {
    [key: number]: T;
    protected _items: T[];
    constructor(itemsSource?: Array<T>) {
        if ((itemsSource) instanceof (Array)) {
            this._items = [...itemsSource];
        } else {
            this._items = [];
        }
    }

    public add(item: T): this {
        if (item) {
            this
                ._items
                .push(item);
        }

        return this;
    }

    public count(): number { return this._items.length; }

    public clear(): this {
        while (this._items.length) {
            this
                ._items
                .pop();
        }
        return this;
    }

    public contains(item: T, compareFn: (a: T) => boolean): boolean {
        if (compareFn) {
            return this.indexOf(item, compareFn) > -1;
        }

        return this
            ._items
            .indexOf(item) > -1;
    }

    public copyTo(array: T[], startIndex: number): void {
        if (!array) {
            return;
        }

        if (!startIndex) {
            array = [
                ...array,
                ...this._items
            ];
            return;
        }

        if (startIndex > -1 && startIndex < this._items.length) {
            let newArray: T[] = this
                ._items
                .slice(startIndex);

            array = [
                ...array,
                ...newArray
            ];
        }
    }

    public remove(item: T): this { throw new Error("Method not implemented."); }

    public addRange(...items: T[]): this {
        this._items = [
            ...this._items,
            ...items
        ];

        return this;
    }

    public indexOf(item: T, compareFn?: IEqualityComparer<T>): number {
        if (compareFn) {
            let arrayLength: number = this._items.length;
            for (let i: number = 0; i < arrayLength; i++) {
                if (compareFn(item, this._items[i])) {
                    return i;
                }
            }
            return -1;
        }
        throw new Error("Method not implemented.");
    }

    public insert(index: number, item: T): this {
        if (index && index > 0 && index < this._items.length) {
            this
                ._items
                .splice(index, 0, item);
        }

        return this;
    }

    public removeAt(index: number): this {
        if (index && index > 0 && index < this._items.length) {
            this
                ._items
                .splice(index, 1);
        }

        return this;
    }

    public groupBy(key: string): IGroupedBy<T> {
        return this
            ._items
            .reduce((grouped, item) => {
                if ((item as Object).hasOwnProperty(key)) {
                    let value: any = item[key];
                    grouped[value] = grouped[value] || [];
                    grouped[value].push(item);
                    return grouped;
                }
            }, {});
    }
}
