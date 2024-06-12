const router = require('express').Router();
const {Intro, About , Project , Contact , Experience, Blog} = require('../models/portfolioModel')
const {User} = require('../models/userModel')

router.get('/get-portfolio-data',async(req,res)=>{
    try{
        const intros = await Intro.find();
        const abouts =await About.find();
        const projects =await Project.find();
        const contacts =await Contact.find();
        const experiences =await Experience.find();
        const blogs =await Blog.find();

        res.status(200).send({
            intros : intros[0],
            about  : abouts[0],
            projects : projects,
            contact : contacts[0],
            experiences : experiences,
            blogs : blogs , 
        }); 
    }catch(error){
        res.status(500).send(error)
    }
})

router.post("/update-intro", async (req,res)=>{
    try{
        const intro = await Intro.findOneAndUpdate(
            {_id:req.body._id},
            req.body,
            { new : true }
        );
        res.status(200).send({
            data: intro,
            success : true,
            message : "Intro Updated Successfully"
        });
    }catch(error){
        res.status.send(error);
    }
})

router.post("/update-about", async (req,res)=>{
    try{
        const about = await About.findOneAndUpdate(
            {_id:req.body._id},
            req.body,
            { new : true }
        );
        res.status(200).send({
            data: about,
            success : true,
            message : "About Updated Successfully"
        });
    }catch(error){
        res.status.send(error);
    }
})
router.post("/update-contact", async (req,res)=>{
    try{
        const contact = await Contact.findOneAndUpdate(
            {_id:req.body._id},
            req.body,
            { new : true }
        );
        res.status(200).send({
            data: contact,
            success : true,
            message : "Contact Updated Successfully"
        });
    }catch(error){
        res.status.send(error);
    }
})

router.post("/add-experience", async (req,res)=>{
    
    try{
        const experience = new Experience(req.body);
        await experience.save();
        res.status(200).send({
            data : experience,
            success: true,
            message : "Experience added successfully",
        });
    }
    catch(error){
        res.status(500).send(error);
    }
})

router.post("/update-experience", async (req,res)=>{
    try{
        const experience = await Experience.findOneAndUpdate(
            {_id:req.body._id},
            req.body,
            { new : true }
        );
        res.status(200).send({
            data: experience ,
            success : true,
            message : "Experience Updated Successfully"
        });
    }catch(error){
        res.status.send(error);
    }
})
router.post("/delete-experience", async (req,res)=>{
    try{
        const experience = await Experience.findOneAndDelete(
            {_id:req.body._id},
            req.body,
            { new : true }
        );
        res.status(200).send({
            data: experience ,
            success : true,
            message : "Experience Deleted Successfully"
        });
    }catch(error){
        res.status.send(error);
    }
})

router.post("/add-project", async (req,res)=>{
    
    try{
        const project = new Project(req.body);
        await project.save();
        res.status(200).send({
            data : project,
            success: true,
            message : "Project added successfully",
        });
    }
    catch(error){
        res.status(500).send(error);
    }
})

router.post("/update-project", async (req,res)=>{
    try{
        const project = await Project.findOneAndUpdate(
            {_id:req.body._id},
            req.body,
            { new : true }
        );
        res.status(200).send({
            data: project ,
            success : true,
            message : "Project Updated Successfully"
        });
    }catch(error){
        res.status.send(error);
    }
})

router.post("/delete-project", async (req,res)=>{
    try{
        const project = await Project.findOneAndDelete(
            {_id:req.body._id},
            req.body,
            { new : true }
        );
        res.status(200).send({
            data: project ,
            success : true,
            message : "Project Deleted Successfully"
        });
    }catch(error){
        res.status.send(error);
    }
})
router.post("/add-blog", async (req,res)=>{
    
    try{
        const blog = new Blog(req.body);
        await blog.save();
        res.status(200).send({
            data : blog,
            success: true,
            message : "Blog added successfully",
        });
    }
    catch(error){
        res.status(500).send(error);
    }
})

router.post("/update-blog", async (req,res)=>{
    try{
        const blog = await Blog.findOneAndUpdate(
            {_id:req.body._id},
            req.body,
            { new : true }
        );
        res.status(200).send({
            data: blog ,
            success : true,
            message : "Blog Updated Successfully"
        });
    }catch(error){
        res.status.send(error);
    }
})

router.post("/delete-blog", async (req,res)=>{
    try{
        const blog = await Blog.findOneAndDelete(
            {_id:req.body._id},
            req.body,
            { new : true }
        );
        res.status(200).send({
            data: blog ,
            success : true,
            message : "Blog Deleted Successfully"
        });
    }catch(error){
        res.status.send(error);
    }
})

//admin login


router.post("/admin-login",async(req,res)=>{
    try{
        const user = await User.findOne({username: req.body.username , password : req.body.password});
        user.password = "";
        if(user){
            res.status(200).send({
                data : user,
                success : true,
                message : "Login successfully"
            });
        }else{
            res.status(200).send({
                data : user,
                success: false,
                message : "Invalid Username or Password"
            })
        }
    }catch(error){
        res.status(500).send(error)
    }
})

module.exports = router;