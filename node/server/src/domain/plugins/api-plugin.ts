import { ApiServer } from '../contracts/api/api-server';

export interface ApiPlugin {
    apiServer: ApiServer;
}