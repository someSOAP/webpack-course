class Post {
    constructor(title){
        this.title = title;
        this.date = new Date();
    }

    toString(){
        return JSON.stringify(this);
    }

    get uppercaseTitle() {
        return this.title.toUpperCase();
    }
}

export default Post;