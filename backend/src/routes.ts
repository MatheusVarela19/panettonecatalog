import { Router } from 'express';
import PanettonesController from './controllers/PanettonesController';
import multer from 'multer';
import uploadConfig from './config/upload'

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/panettones', PanettonesController.index);
routes.get('/panettones/:id', PanettonesController.show);
routes.post('/panettones', upload.array('images'), PanettonesController.create);

export default routes;