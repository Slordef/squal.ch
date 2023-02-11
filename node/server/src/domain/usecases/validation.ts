export interface Validation {
    check(input: any): Error | null;
}