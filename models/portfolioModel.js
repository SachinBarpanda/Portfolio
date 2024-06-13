const mongoose = require('mongoose')

const introSchema = new mongoose.Schema({
    welcomeText: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    caption: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
})

const aboutSchema = new mongoose.Schema({
    imageURL: {
        type: String,
        required: true
    },
    descriptionTop: {
        type: String,
        required: true
    },
    descriptionBottom: {
        type: String,
        required: true
    },
    skills: {
        type: Array,
        required: true
    }
})

const experienceSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        period: {
            type: String,
            required: true
        },
        company: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }
)
const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    demo: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    technologies: {
        type: Array,
        required: true
    },
}) 

const blogsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    intro: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    read: {
        type: String,
        required: true
    },
})

const contactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        mobile: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
    }
)

module.exports = {
    Intro : mongoose.model("intros",introSchema),
    About : mongoose.model("abouts",aboutSchema),
    Experience : mongoose.model("experiences",experienceSchema),
    Project : mongoose.model("projects",projectSchema),
    Blog: mongoose.model("blogs",blogsSchema),
    Contact : mongoose.model("contacts",contactSchema),
}
