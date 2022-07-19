import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { prisma } from '../../../../database/prismaClient';

interface IDeliveryman {
	username: string;
	password: string;
}

export class AuthenticateDeliverymanUseCase {
	async execute({ username, password }: IDeliveryman) {
		const deliveryman = await prisma.deliveryman.findFirst({
			where: {
				username,
			},
		});

		if (!deliveryman) {
			throw new Error('username or password is incorrect');
		}

		const passwordMatch = await compare(password, deliveryman.password);

		if (!passwordMatch) {
			throw new Error('username or password is incorrect');
		}

		const token = sign({ username }, `${process.env.JWT_TOKEN}`, {
			subject: deliveryman.id,
			expiresIn: '1d',
		});

		return token;
	}
}
