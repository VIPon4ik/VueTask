const Resume = require('./schemas/resume');

const getAllResumes = () => {
  return Resume.find()
}

const createResume = (resume) => {
  return Resume.create(resume);
}

module.exports = {
  createResume,
  getAllResumes
}