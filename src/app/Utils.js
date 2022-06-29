import { parse } from 'url';
export class Utils {
    static parseUrl(url) {
        if (!url) {
            throw new Error('Empty url!');
        }
        return parse(url, true);
    }
    static toUpperCase(args) {
        return args.toUpperCase();
    }
}
//# sourceMappingURL=Utils.js.map