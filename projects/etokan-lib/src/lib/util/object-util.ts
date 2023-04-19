import { Predicate } from "@angular/core";

type Exist<T> = (value: T | undefined) => value is NonNullable<T>;

/**
 * Space to Object Util
 */
export namespace ObjectU {

    /**
     * Check If value is not null or not undefined
     * 
     * @param value to check
     * @returns true if exist
     */
    export function exist<T>(value: T | undefined): value is T {
        return value !== undefined && value !== null;
    }

    //@ts-ignore
    export function allExist(...values: unknown[]): values is NonNullable<unknown[]> {
        return values.every(exist);
    }

    /**
     * Return primary if exist other else
     * very useful to retrieve the value of a boolean for example
     * 
     * the "??" operator can be useful for other types
     * 
     * @param primary 
     * @param other 
     * @returns 
     */
    export function orElse<T>(primary: T | undefined, other: T): T {
        return exist(primary) ? primary : other;
    }

    /**
     * return opposite of boolean value if exist
     * 
     * @param value 
     * @returns 
     */
    export function oppositeIfExist(value: boolean | undefined): boolean | undefined {
        return exist(value) ? !value : value;
    }

    /**
     * get field value on object
     * 
     * @param object 
     * @param fieldName 
     * @returns 
     */
    export function getValueOn<T extends Object>(object: T, fieldName: string): any {
        //@ts-ignore
        return object[fieldName];
    }

}

