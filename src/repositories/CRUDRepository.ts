export class CRUDRepository {
  model: any;

  constructor(model: any) {
    this.model = model;
  }

  async findAll() {
    return this.model.findAll();
  }

  async findById(id: number) {
    return this.model.findByPk(id)
  }

  async saveNew(object: object) {
    return this.model.create(object);
  }

  async destroy(object: object) {
    return this.model.destroy(object);
  }

  async update(object: any) {
    return object.save();
  }

}
