import { Router } from 'express';
import { AuthenticateClientController } from './modules/account/useCases/authenticateClient/AuthenticateClientController';
import { AuthenticateDeliverymanController } from './modules/account/useCases/authenticateDeliveryman/AuthenticateDeliverymanController';
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';
import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController';

const routes = Router();

const authenticateClientController = new AuthenticateClientController();
const authenticateDeliverymanCOntroller =
	new AuthenticateDeliverymanController();
const createClientController = new CreateClientController();
const createDeliverymanController = new CreateDeliverymanController();

routes.post('/client/auth', authenticateClientController.handle);
routes.post('/deliveryman/auth', authenticateDeliverymanCOntroller.handle);
routes.post('/clients', createClientController.handle);
routes.post('/deliveryman', createDeliverymanController.handle);

export { routes };
