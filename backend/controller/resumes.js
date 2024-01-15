const service = require("../service/resume");

const get = async (req, res, next) => {
    try {
        const results = await service.getAllResumes();
        res.status(200).json({
            status: 'success',
            code: 200,
            data: {
                resumes: results,
            }
        })
    } catch(e) {
        console.log(e)
        next(e)
    }
}

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
    get,
};
