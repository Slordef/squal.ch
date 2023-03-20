import { Application } from '../../../domain/application/application';
import { AppPlugin } from '../../../domain/plugins/app-plugin';
import { MakeAdmin } from '../make-admin';

export function makeApplication(...plugins: { new(): AppPlugin }[]) {
	const app = new Application(...plugins);

	app.start().then(() => {
		const adminFactory = new MakeAdmin();
		adminFactory.make(app);
	});
}