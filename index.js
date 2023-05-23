const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        isLiked: false
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        isLiked: false
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        isLiked: false
    }
]

let postMain=document.getElementById("posty");

function getFeedHtml(){


    
    let feedHtml = ``;
    posts.forEach(function(p){
        let heartIconClass = ""
        if(p.isLiked===true){
            heartIconClass = "heart-icon-red"
        }
        feedHtml += `<section id='platform'> <div id='banner1'>
        <img id='user-avatar' src="${p.avatar}" />
        <div id='info'>
            <h2 id='user-name'>${p.username}</h2>
            <p id='location'>${p.location}</p>
        </div>
        </div>
        <img id='post' src="${p.post}" data-dbltap="${p.username}">
        
                <section id = "icons">
                
                    <div id="heart"><img src="images/icon-heart.png" id="heart-icon" class = "${heartIconClass}"  data-like="${p.username}"></div>
                    <img src="images/icon-comment.png" id="comment-icon">
                    <img src="images/icon-dm.png" id="dm-icon">
                </section>
                <div id="likes">${p.likes} likes</div>
                <section id="username-comment">
                    <div id="username">${p.username}</div>
                    <div id="user-comment">${p.comment}</div>
                </section>
                </section>`

    })
    return feedHtml
}

function render(){
    postMain.innerHTML = getFeedHtml()
}

render()



document.addEventListener('click', function(e){
    if(e.target.dataset.like){
         
         let likedPost=posts.filter(function(post){
            return post.username === e.target.dataset.like
         })[0]
         
         if(likedPost.isLiked===false){
            likedPost.likes ++;
            likedPost.isLiked = !likedPost.isLiked;
            
            
            //document.e.target.dataset.like.style.backgroundColor='red';
            //e.target.classList.toggle("heart-icon-red");
            render()
         }
         else{
            likedPost.likes =likedPost.likes -1;
            likedPost.isLiked = !likedPost.isLiked;
            render()
         }
         
         
         
    }
})

document.addEventListener('dblclick', function(e){
    if(e.target.dataset.dbltap){
        let likedPost=posts.filter(function(post){
            return post.username === e.target.dataset.dbltap
         })[0]
         
         if(likedPost.isLiked===false){
            likedPost.likes ++;
            likedPost.isLiked = !likedPost.isLiked;
            
            
            //document.e.target.dataset.like.style.backgroundColor='red';
            //e.target.classList.toggle("heart-icon-red");
            render()
         }
        
    }
})


/*function likeBtn{
    postMain.array.forEach(element => {
        
    });
}*/


//POST LIKE ____________________________________________________________
//"heart-icon"





/*function convertToRed(){
    document.getElementById("heart-icon").classList.toggle("heart-icon-red");
    
}*/




//HTML ____________________________________________________________

/* <section id="banner1">
            <div id="user-avatar"></div>
            <div id="info">
                <h2 class="user-name"></h2>
                <p class="location"></p>
            </div>
        </section>
        
        <section id="post"></section>

        <section id = "icons">
            <img src="images/icon-heart.png" id="heart-icon">
            <img src="images/icon-comment.png" id="comment-icon">
            <img src="images/icon-dm.png" id="dm-icon">
        </section>
        <div id="likes"></div>
        <section id="username-comment">
            <div id="username"></div>
            <div id="user-comment"></div>
        </section>  */


     
      
       



