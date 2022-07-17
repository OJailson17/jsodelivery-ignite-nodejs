import { Router } from 'express';
import { AuthenticateClientController } from './modules/account/useCases/authenticateClient/AuthenticateClientController';
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';

const routes = Router();

const authenticateClientController = new AuthenticateClientController();
const createClientController = new CreateClientController();

routes.post('/auth/', authenticateClientController.handle);
routes.post('/clients/', createClientController.handle);

export { routes };
