const mongoose = require('mongoose');
const schema =  mongoose.Schema({
    titel:'String',
    content:'String'
},{
    timestamps:true
});

const Post = mongoose.model('Post',schema);
module.exports=Post;




