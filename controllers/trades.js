
const TradesModel = require('../models/trades');

class TradesController {
    async createTrade(req, res) {
        try {
           const { body } = req;
           const response = await TradesModel.create(body);
           res.status(201).json(response);
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async getAllTrades(req, res) {
        try {
           const data = await TradesModel.findAll({});
           res.status(200).json(data);
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async getTradeById(req, res) {
        const { id } = req.params;
        const data = await TradesModel.findOne({ wher: {id} });

        if (!data) {
            res.status(404).send("ID not found");
        } else {
            
            res.status(200).json(data);
        }
    }

    async putTradeById(req, res) {
        res.status(405).send();
    }

    async patchTradeById(req, res) {
        res.status(405).send();
    }

    async deleteTradeById(req, res) {
        res.status(405).send();
    }
}


module.exports = new TradesController();
