import { Router } from 'express';
import { ensureAuthenticateClient } from './middleware/ensureAuthenticateClient';
import { ensureAuthenticateDeliveryman } from './middleware/ensureAuthenticateDeliveryman';
import { AuthenticateClientController } from './modules/account/useCases/authenticateClient/AuthenticateClientController';
import { AuthenticateDeliverymanController } from './modules/account/useCases/authenticateDeliveryman/AuthenticateDeliverymanController';
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';
import { CreateDeliveryController } from './modules/deliveries/useCases/createDelivery/CreateDeliveryController';
import { FindAllWithoutEndDateController } from './modules/deliveries/useCases/findAllWithoutEndDate/FindAllWithoutEndDateController';
import { UpdateDeliverymanController } from './modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanController';
import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController';

const routes = Router();

const authenticateClientController = new AuthenticateClientController();
const authenticateDeliverymanCOntroller =
	new AuthenticateDeliverymanController();
const createClientController = new CreateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const createDeliveryController = new CreateDeliveryController();
const findAllWithoutEndDateController = new FindAllWithoutEndDateController();
const updateDeliverymanController = new UpdateDeliverymanController();

routes.post('/client/auth', authenticateClientController.handle);
routes.post('/deliveryman/auth', authenticateDeliverymanCOntroller.handle);
routes.post('/clients', createClientController.handle);
routes.post('/deliveryman', createDeliverymanController.handle);
routes.post(
	'/delivery',
	ensureAuthenticateClient,
	createDeliveryController.handle,
);
routes.get(
	'/delivery/available',
	ensureAuthenticateDeliveryman,
	findAllWithoutEndDateController.handle,
);
routes.put(
	'/delivery/updateDeliveryman/:id',
	ensureAuthenticateDeliveryman,
	updateDeliverymanController.handle,
);

export { routes };
