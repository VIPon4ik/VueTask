const Resume = require('./schemas/resume');

const createResume = (resume) => {
  return Resume.create(resume);
}

module.exports = {
  createResume
}