 

 
 


     function createAndInsertNewRetweet(tweetId,name,tweet){
        const tweetFeed = document.getElementById("tweetfeed");
        const tweetItem = createTweetNode(tweetId,name,tweet);
        tweetFeed.insertBefore(tweetItem,tweetFeed.firstChild);
    }

function createTweetNode(id,user,tweet){
    var wrapper= document.createElement('div');
    wrapper.innerHTML= `<div class="tweet card" style="width: 90%; height: 210px; padding: 15px;" id="${id}">
    <div class="create-tweet">
        <img src="./img/avatar.jpeg" alt="No user Image Found" class="avatar">
         <div style="margin-top: 10px; width: 100%; ">
                <hgroup style="display: flex;flex-direction:row;">
                    <h3 style="margin: 0;" id="name-${id}">${user}</h3>
                    <h3  style="margin: 0 0 0 5px; color: gray;">@${user}</h4>
                </hgroup>           
             <p id="tweet-${id}"> 
            ${tweet}
             </p>
            
         </div>
         
       </div>
       <div style="display: grid; grid-template-columns: repeat(4, 1fr); width: 100%; ">
        <div class="create-tweet-items" style="    grid-column: span 3;">
             
            <div class="btn create-tweet-item">
                  
                 
                <i class="fal fa-heart  fa-center"  id="like-${id}"  onclick="onLikeBtnPressed(this)"></i>
            </div>

             <div class="btn create-tweet-item" id="retweet-${id}" onclick="onRetweetBtnPressed(this)">
                <i class="fal fa-retweet-alt fa-center"></i>
             </div>
        </div> 
              
     </div>
       
</div>`;
    return wrapper.firstChild;
}


