import { ObjectU } from "./object-util";

export const EMPTY = '';
export namespace StringU {

    /**
     * Check 2 values are sames
     * 
     * @param s1 firt value to check
     * @param s2 second value to check
     * @returns true if same
     */
    export function isEquals(s1: string, s2: string): boolean {
        return s1.trim() === s2.trim();
    }

    /**
     * Check value is blank
     * 
     * @param s string to check
     * @returns true if is blank
     */
    export function isBlank(s: string): boolean {
        return isEquals(s, EMPTY);
    }

    /**
     * Check value is not blank
     * 
     * @param s string to check
     * @returns true if is not blank
     */
    export function isNotBlank(s: string): boolean {
        return !isBlank(s);
    }
}

/**
 * Util Class To Join String values
 */
export class StringJoiner {
    private delimiter = EMPTY;
    private prefix = EMPTY;
    private suffix = EMPTY;
    private content: string | undefined;

    constructor(delimiter?: string, prefix?: string, suffix?: string) {
        this.delimiter = delimiter ?? this.delimiter;
        this.prefix = prefix ?? this.prefix;
        this.suffix = suffix ?? this.suffix;
    }

    addValue(value: string): void {
        this.content = this.content ? `${this.content}${this.delimiter}${value}` : `${value}`;
    }

    addValues(...values: string[]): void {
        const valuesJoin = values.join(this.delimiter);
        this.content = this.content ? `${this.content}${this.delimiter}${valuesJoin}` : `${valuesJoin}`;
    }

    hasContent(): boolean {
        return this.content !== undefined;
    }

    toString(): string {
        return `${this.prefix}${this.content}${this.suffix}`;
    }
}
