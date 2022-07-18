import { Router } from 'express';
import { AuthenticateClientController } from './modules/account/useCases/authenticateClient/AuthenticateClientController';
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';
import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController';

const routes = Router();

const authenticateClientController = new AuthenticateClientController();
const createClientController = new CreateClientController();
const createDeliverymanController = new CreateDeliverymanController();

routes.post('/auth', authenticateClientController.handle);
routes.post('/clients', createClientController.handle);
routes.post('/deliveryman', createDeliverymanController.handle);

export { routes };