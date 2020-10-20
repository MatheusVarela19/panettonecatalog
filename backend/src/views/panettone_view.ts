import panettone from '../models/Panettone'
import Panettone from '../models/Panettone';
import imagesView from './images_view';

export default {
  render(panettone: Panettone) {
    return {
      id: panettone.id,
      name: panettone.name,
      brand: panettone.brand,
      weight: panettone.weight,
      price: panettone.price,
      about: panettone.about,
      images: imagesView.renderMany(panettone.images),
    };
  },

  renderMany(panettones: Panettone[]) {
    return panettones.map(panettone => this.render(panettone));
  },
}