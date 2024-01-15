const { Schema, model } = require("mongoose");

const resume = new Schema(
    {
        name: {
            type: String,
            minLength: 2,
            required: true,
        },
        surname: {
            type: String,
            minLength: 2,
            required: true,
        },
        email: {
            type: String,
            minLength: 10,
            required: true,
            unique: true,
        },
        phone: {
            type: String,
            minLength: 8,
        },
        summury: {
            minLength: 2,
            required: true,
        },
        education: {
            type: String,
        },
        experience: {
            type: String,
        },
        skills: {
            type: Array,
        },
    },
    { versionKey: false, timestamps: true }
);

const Resume = model("resume", resume);

module.exports = Resume;
