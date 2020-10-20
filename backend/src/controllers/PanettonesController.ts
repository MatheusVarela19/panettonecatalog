import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Panettone from '../models/Panettone';
import panettoneView from '../views/panettone_view';

export default {
  async index(request: Request, response: Response) {
    const panettonesRepository = getRepository(Panettone);

    const panettones = await panettonesRepository.find({
      relations: ['images']
    });
    
    return response.json(panettoneView.renderMany(panettones));
  },

  async show(request: Request, response: Response) {
    const { id } = request.params

    const panettonesRepository = getRepository(Panettone);

    const panettone = await panettonesRepository.findOneOrFail(id, {
      relations: ['images']
    });
    
    return response.json(panettoneView.render(panettone));
  },

  async create(request: Request, response: Response){
    const {
      name,
      brand,
      weight,
      price,
      about,
    } = request.body;
  
    const panettonesRepository = getRepository(Panettone);

    const requestImages = request.files as Express.Multer.File[];
    const images = requestImages.map(image => {
      return { path: image.filename }
    })

    const panettone = panettonesRepository.create({
      name,
      brand,
      weight,
      price,
      about,
      images,
    });
  
    await panettonesRepository.save(panettone);
  
    return response.status(201).json(panettone);
  }
}