export class PluginManager {

	private interfaces: { [key: string]: unknown } = {};

	getInterface<T>(intf: string): T {
		if (!(intf in this.interfaces)) {
			throw new Error(`Interface ${intf} not found`);
		}
		return this.interfaces[intf] as T;
	}

	registerInterface<T>(intf: string, impl: T) {
		this.interfaces[intf] = impl;
	}
}