import { Settings } from '../../../models/settings/settings';

export interface GetSettings {
    get(): Promise<Settings | null>
}