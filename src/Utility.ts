export default function shallowCopy(source : any, target : any) : any {
    if(target) {
        for (let k in source) {

            target[k] = source[k];
        }
    }
    return target;
}
