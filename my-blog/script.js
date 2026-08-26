let likes = parseInt(localStorage.getItem('likes')) || 0; 
let hasLiked = localStorage.getItem('hasLiked') === 'true';

const likeBtn = document.querySelector('.like-btn');
const likeCount = document.getElementById('like-count');

likeCount.textContent = likes;

if (hasLiked) {
  likeBtn.textContent = '💚 Уже лайкнуто';
  likeBtn.disabled = true; 
  likeBtn.style.cursor = 'not-allowed'; 
  likeBtn.style.background = '#555';
}

function toggleLike() {
  if (!hasLiked) {

    likes++;
    hasLiked = true;

    localStorage.setItem('likes', likes);
    localStorage.setItem('hasLiked', 'true');

    likeCount.textContent = likes;
    likeBtn.textContent = '💚 Уже лайкнуто';
    likeBtn.disabled = true;
    likeBtn.style.cursor = 'not-allowed';
    likeBtn.style.background = '#555';
   
  }
}
let secretCode = "";
const targetPhrase = "при";

document.addEventListener('keydown', function(event) {
  secretCode += event.key.toLowerCase();

  if (secretCode.includes(targetPhrase)) {
    
    alert("Поздравляю! Ты нашёл(а) пасхалку!");
    
    document.body.style.background = "#8fffcd";
    
    const headerElement = document.querySelector('header');
    if (headerElement) {
      headerElement.style.background = "#8fffcd";
    }
    
    setTimeout(function() {
      document.body.style.background = "#444444";
      if (headerElement) {
        headerElement.style.background = "black";
      }
    }, 1000);
    
    secretCode = "";
  }

  if (secretCode.length > targetPhrase.length) {
    secretCode = secretCode.slice(-targetPhrase.length);
  }
});