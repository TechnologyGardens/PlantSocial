class IndexController {
    static getInfo(req, resp) {
        resp.send({
            code:200,
            type:"Success",
            message:`PlantSocial API version 1.0`,
            organisms: {href:"organisms"},
            users: {href:"users"},
            documentation:{href:"http://localhost:3000/api-docs"}
        });
    }
};

module.exports = IndexController;