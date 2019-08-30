import User from '../models/User';
import File from '../models/Files';

class ProvidersController {
  async index(req, res) {
    const providers = await User.findAll({
      where: { provider: true },
      attributes: ['id', 'email', 'avatar_id'],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['name', 'path', 'url'],
        },
      ],
    });
    return res.json(providers);
  }
}
export default new ProvidersController();
