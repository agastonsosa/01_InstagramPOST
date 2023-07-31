//*Script Liked/Bookmark TEST*// 
//*LIKE/LIKED Script//
let likeCount = 100000; // Initialize the like count variable    
function toggleLike() {
      const likeButton = document.querySelector(".btn-like");
      const heartIcon = likeButton.querySelector("i");

      likeButton.classList.toggle("liked");
      heartIcon.classList.toggle("fa-regular");
      heartIcon.classList.toggle("fa-solid");
    }

  //*BOOKMARK/BOOKMARKED Script//
  function toggleBookmark() {
    const bookmarkButton = document.querySelector(".btn-bookmark");
    const bookmarkIcon = bookmarkButton.querySelector("i");
  
    bookmarkButton.classList.toggle("bookmarked");
    bookmarkIcon.classList.toggle("fa-regular");
    bookmarkIcon.classList.toggle("fa-solid");
  }