class Post {
    constructor(title){
        this.title = title;
        this.date = new Date();
    }

    toString(){
        return JSON.stringify(this);
    }
}

export default Post;