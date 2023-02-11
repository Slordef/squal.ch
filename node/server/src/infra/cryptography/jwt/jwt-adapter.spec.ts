import { expect } from '@jest/globals';
import { JwtAdapter } from './jwt-adapter';

jest.mock('jsonwebtoken', () => ({
	async sign(): Promise<string> {
		return new Promise(resolve => resolve('any_token'));
	},
	async verify(): Promise<boolean> {
		return new Promise(resolve => resolve(true));
	}
}));

describe('JwtAdapter', () => {
	it('should call jwt with correct values', async () => {
		const sut = new JwtAdapter('secret');
		const hashSpy = jest.spyOn(sut, 'encrypt');
		await sut.encrypt('any_value');
		expect(hashSpy).toHaveBeenCalledWith('any_value');
	});
	it('should return a token on success', async () => {
		const sut = new JwtAdapter('secret');
		const token = await sut.encrypt('any_value');
		expect(token).toBe('any_token');
	});
	it('should throw if jwt throws', async () => {
		const sut = new JwtAdapter('secret');
		jest.spyOn(sut, 'encrypt').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())));
		const promise = sut.encrypt('any_value');
		await expect(promise).rejects.toThrow();
	});
	it('should call jwt verify with correct values', async () => {
		const sut = new JwtAdapter('secret');
		const compareSpy = jest.spyOn(sut, 'decrypt');
		await sut.decrypt('any_token');
		expect(compareSpy).toHaveBeenCalledWith('any_token');
	});
	it('should return true when verify succeeds', async () => {
		const sut = new JwtAdapter('secret');
		const isValid = await sut.decrypt('any_token');
		expect(isValid).toBe(true);
	});
	it('should return false when verify fails', async () => {
		const sut = new JwtAdapter('secret');
		jest.spyOn(sut, 'decrypt').mockReturnValueOnce(new Promise(resolve => resolve(false)));
		const isValid = await sut.decrypt('any_token');
		expect(isValid).toBe(false);
	});
});