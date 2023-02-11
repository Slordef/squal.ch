export interface AppServer {
    getApp(): any;

    setup(): void;

    start(): void;
}