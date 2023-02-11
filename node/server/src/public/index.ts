import { makeDatabase } from '../main/factories/database/make-database';
import { makeServer } from '../main/factories/server/make-server';
import { makeAdmin } from '../main/factories/make-admin';

const database = makeDatabase();
const server = makeServer();
database.connect().then(() => {
	server.start();
	makeAdmin();
});