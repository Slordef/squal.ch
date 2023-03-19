import { AddAccount } from '../contracts/database/account/add-account';
import { DelAccount } from '../contracts/database/account/del-account';
import { GetAccount } from '../contracts/database/account/get-account';
import { GetAccountByEmail } from '../contracts/database/account/get-account-by-email';
import { GetAccountByToken } from '../contracts/database/account/get-account-by-token';
import { UpdateAccount } from '../contracts/database/account/update-account';
import { AddAuth } from '../contracts/database/auth/add-auth';
import { GetAllCategories } from '../contracts/database/category/get-all-categories';
import { GetCategoriesFromCategory } from '../contracts/database/category/get-categories-from-category';
import { AddConnectionAttempt } from '../contracts/database/connection-attempt/add-connection-attempt';
import { DelConnectionAttempts } from '../contracts/database/connection-attempt/del-connection-attempts';
import { GetConnectionAttempts } from '../contracts/database/connection-attempt/get-connection-attempts';
import { AddImage } from '../contracts/database/images/add-image';
import { GetAllImages } from '../contracts/database/images/get-all-images';
import { GetImage } from '../contracts/database/images/get-image';
import { GetImagesFromCategory } from '../contracts/database/images/get-images-from-category';
import { GetSettings } from '../contracts/database/settings/get-settings';
import { Database } from '../database/database';

export interface DatabasePlugin {
    database: Database;
    models: {
        account: {
            addAccount: AddAccount;
            delAccount: DelAccount;
            getAccount: GetAccount;
            getAccountByEmail: GetAccountByEmail;
            getAccountByToken: GetAccountByToken;
            updateAccount: UpdateAccount;
        };
        auth: {
            addAuth: AddAuth;
        };
        category: {
            getAllCategories: GetAllCategories;
            getCategoriesFromCategory: GetCategoriesFromCategory;
        };
        connectionAttempt: {
            addConnectionAttempt: AddConnectionAttempt;
            delConnectionAttempts: DelConnectionAttempts;
            getConnectionAttempts: GetConnectionAttempts;
        };
        images: {
            addImage: AddImage;
            getAllImages: GetAllImages;
            getImage: GetImage;
            getImagesFromCategory: GetImagesFromCategory;
        };
        settings: {
            getSettings: GetSettings;
        };
    };
}