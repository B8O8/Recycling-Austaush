
const Post = require("../models/postModel");
const User = require("../models/userModel");

exports.createPost = async (req,res) => {
    try {
        const postOwner = await User.findById(req.body.postOwner);

        if(!postOwner){
            return res.status(400).json({message: "A post, must belong to a user"});
        }
        const newPost = await Post.create({
            postOwner: req.body.postOwner,
            content: req.body.content,
            phonenumber: req.body.phonenumber,
            location: req.body.location,
            img: req.body.img,
        });

        return res.status(201).json({message: "Post created succefully", data: newPost});
    } catch (error) {
        console.log(error);
    }
};


exports.getPosts = async (req,res) => {
    try {
        const posts = await Post.find();
        res.status(200).json({data: posts});

    } catch (error) {
        res.status(404).json({ message: error.message })
        
    };
    

}

