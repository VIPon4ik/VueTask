const service = require("../service/resume");

const create = async (req, res, next) => {
    const {
        name,
        surname,
        email,
        phone,
        summury,
        education,
        experience,
        skills,
    } = req.body;
    try {
        const result = await service.createResume({
            name,
            surname,
            email,
            phone,
            summury,
            education,
            experience,
            skills,
        });
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
