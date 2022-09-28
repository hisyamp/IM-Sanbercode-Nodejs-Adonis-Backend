const { Venue } = require("../models");
const path = require("path");

class VenueController {
  static async store(req, res) {
    try {
      let name = req.body.name;
      let address = req.body.address;
      let phone = req.body.phone;

      const newdata = await Venue.create({
        name: name,
        address: address,
        phone: phone,
      });

      res.status(200).json({
        status: "success",
        message: "Data berhasil ditambahkan",
      });
    } catch (error) {
      res.status(400).json({
        status: "error",
        message: "Data gagal ditambahkan",
      });
    }
  }

  static async findAll(req, res) {
    try {
      const data = await Venue.findAll();
      res.status(200).json({
        status: "success",
        data: data,
      });
    } catch (error) {}
  }

  static async getById(req, res) {
    try {
      const data = await Venue.findAll({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json({
        status: "success",
        data: data,
      });
    } catch (error) {}
  }

  static async update(req, res) {
    try {
      let name = req.body.name;
      let address = req.body.address;
      let phone = req.body.phone;
      const update = await Venue.update(
        {
          name: name,
          address: address,
          phone: phone,
        },
        { where: req.params.id }
      );

      res.status(200).json({
        status: "success",
        message: "Data berhasil diupdate",
      });
    } catch (error) {}
  }

  static async delete(req, res) {
    try {
      const destroy = await Venue.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json({
        status: "success",
        message: "Data berhasil dihapus",
      });
    } catch (error) {}
  }
}

module.exports = VenueController;
