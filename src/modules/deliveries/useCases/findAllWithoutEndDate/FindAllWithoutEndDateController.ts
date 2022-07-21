import { Request, Response } from 'express';
import { FindAllWithoutEndDateUseCase } from './FindAllWithoutEndDateUseCase';

export class FindAllWithoutEndDateController {
	async handle(req: Request, res: Response) {
		const findAllWithoutEndDateUseCase = new FindAllWithoutEndDateUseCase();
		const deliveries = await findAllWithoutEndDateUseCase.execute();

		return res.json(deliveries);
	}
}
