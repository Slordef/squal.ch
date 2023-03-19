import { HttpRoute } from '../../protocols/http-route';

export interface ApiConfig {
    port: string;
    routes: HttpRoute[];
}