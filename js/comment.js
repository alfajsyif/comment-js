// 1. add button event handler
document.getElementById('post-comment').addEventListener('click', function(){
//  2. get usert comment
    const commentText = document.getElementById('new-comment');
    // const userComment = commentText.value;
    // 3.c create paragraph
    const newcomment = document.createElement('p');
    newcomment.innerText = commentText.value;

    // 4. appen the comment
    const commentContainer = document.getElementById('comment-container');
    commentContainer.appendChild(newcomment);
   
    // 5. clean the comment box
    commentText.value = '';
})