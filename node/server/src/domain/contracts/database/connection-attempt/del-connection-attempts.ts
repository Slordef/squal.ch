export interface DelConnectionAttempts {
    del(ip: string): Promise<void>;
}