const numberRegExp = /^(\d+|\d+[,.]|[,.]\d+|\d+[,.]\d+)$/
/**
 * Space to number Util
 */
export namespace NumberU {

    /**
     * Check String is number format
     * 
     * @param value 
     * @returns 
     */
    export function isNumber(value: string): boolean {
        return numberRegExp.test(value);
    }

    /**
     * string to number
     * 
     * @param value 
     * @returns 
     */
    export function toNumber(value: string): number {
        return Number(value.replace(',', '.'));
    }

}