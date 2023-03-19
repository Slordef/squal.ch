import { Application } from '../domain/application/application';
import { ExpressPlugin } from '../infra/api/express/express-plugin';
import { MakeAdmin } from '../main/factories/make-admin';

const app = new Application(
	ExpressPlugin
);

app.start().then(() => {
	const adminFactory = new MakeAdmin();
	adminFactory.make(app);
});
