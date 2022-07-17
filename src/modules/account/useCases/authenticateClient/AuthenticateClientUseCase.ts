import { prisma } from '../../../../database/prismaClient';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

interface IAuthenticateClient {
	username: string;
	password: string;
}

export class AuthenticateClientUseCase {
	async execute({ username, password }: IAuthenticateClient) {
		const client = await prisma.clients.findFirst({
			where: {
				username,
			},
		});

		if (!client) {
			throw new Error('username or password is incorrect');
		}

		const passwordMatch = await compare(password, client.password);

		if (!passwordMatch) {
			throw new Error('username or password is incorrect');
		}

		const token = sign({ username }, `${process.env.JWT_TOKEN}`, {
			subject: client.id,
			expiresIn: '1d',
		});

		return token;
	}
}
