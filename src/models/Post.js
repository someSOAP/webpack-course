class Post {
    constructor(title, img){
        this.title = title;
        this.img = img;
        this.date = new Date();
    }

    toString(){
        return JSON.stringify(this, null, 2);
    }

    get uppercaseTitle() {
        return this.title.toUpperCase();
    }
}

export default Post;