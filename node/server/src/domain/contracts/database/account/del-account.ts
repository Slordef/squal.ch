export interface DelAccount {
    del: (id: string) => Promise<boolean>
}