class SequelizeAdapter {
  constructor (Model) {
    this.Model = Model
  }

  create (model) {
    return this.Model.create(model)
  }

  findOne (query) {
    return this.Model.findOne(query)
  }

  async listPaginated (page = 1, limit = 10) {
    const result = await this.Model.findAndCountAll({
      offset: (page - 1) * limit,
      limit
    })

    console.log(result)

    return {
      pages: Math.ceil(result.count / limit),
      [`${this.Model.name}s`]: result.rows
    }
  }

  update (model, properties) {
    return model.update(properties)
  }

  async delete (query) {
    return this.Model.destroy(query)
  }
}

module.exports = SequelizeAdapter
