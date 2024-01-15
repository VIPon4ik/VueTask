const service = require("../service/resume");

const create = async (req, res, next) => {
    const { resume } = req.body;
    try {
        const result = await service.createResume(resume);
        res.status(201).json({
            status: "success",
            code: 201,
            data: { resume: result },
        });
    } catch (e) {
        console.log(e);
        next(e);
    }
};

module.exports = {
    create,
};
