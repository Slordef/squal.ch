import { Application } from '../application/application';

export interface Factory {
    make(app: Application): any;
}