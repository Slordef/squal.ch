import { ApiConfig } from './api-config';

export interface ApiServer {
    setConfig(config: ApiConfig): void;

    start(): void;
}