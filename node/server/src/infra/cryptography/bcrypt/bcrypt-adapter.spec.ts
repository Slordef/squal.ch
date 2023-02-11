import { expect } from '@jest/globals';
import { BcryptAdapter } from './bcrypt-adapter';

jest.mock('bcrypt', () => ({
	async hash(): Promise<string> {
		return new Promise(resolve => resolve('any_hash'));
	},
	async compare(): Promise<boolean> {
		return new Promise(resolve => resolve(true));
	}
}));

describe('BcryptAdapter', () => {
	it('should call bcrypt with correct values', async () => {
		const sut = new BcryptAdapter(12);
		const hashSpy = jest.spyOn(sut, 'hash');
		await sut.hash('any_value');
		expect(hashSpy).toHaveBeenCalledWith('any_value');
	});
	it('should return a hash on success', async () => {
		const sut = new BcryptAdapter(12);
		const hash = await sut.hash('any_value');
		expect(hash).toBe('any_hash');
	});
	it('should throw if bcrypt throws', async () => {
		const sut = new BcryptAdapter(12);
		jest.spyOn(sut, 'hash').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())));
		const promise = sut.hash('any_value');
		await expect(promise).rejects.toThrow();
	});
	it('should call bcrypt compare with correct values', async () => {
		const sut = new BcryptAdapter(12);
		const compareSpy = jest.spyOn(sut, 'compare');
		await sut.compare('any_value', 'any_hash');
		expect(compareSpy).toHaveBeenCalledWith('any_value', 'any_hash');
	});
	it('should return true when compare succeeds', async () => {
		const sut = new BcryptAdapter(12);
		const isValid = await sut.compare('any_value', 'any_hash');
		expect(isValid).toBe(true);
	});
	it('should return false when compare fails', async () => {
		const sut = new BcryptAdapter(12);
		jest.spyOn(sut, 'compare').mockReturnValueOnce(new Promise(resolve => resolve(false)));
		const isValid = await sut.compare('any_value', 'any_hash');
		expect(isValid).toBe(false);
	});
});