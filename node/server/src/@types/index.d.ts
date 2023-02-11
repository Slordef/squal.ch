declare global {
    namespace Express {
        interface Request {
            account: {
                id: string;
                email: string;
                password: string;
                name: string;
            } | null;
        }
    }
}

export {};