export interface FileHandler {
    handle: (files: any) => Promise<string[]>;
}