//https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API
//https://www.w3docs.com/learn-javascript/drag-and-drop-with-javascript.html
//https://www.w3schools.com/html/html5_draganddrop.asp
//https://youtu.be/iAu9_NAWcto?si=g7WidYCb83gEovrI
//https://seyoonagain.tistory.com/19?category=1198174
//https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/drag_event
//https://skillupwards.com/html/html-draganddrop
//https://material.angular.io/cdk/drag-drop/api  <- Cloud Development Kit(CDK)

document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.atoz li');
    let draggedItem = null;

    items.forEach(item => {
        // drag start
        item.querySelector('button').setAttribute("draggable", true);
        item.addEventListener('dragstart', function () {
            draggedItem = item;
            setTimeout(() => {
                item.style.opacity = '0.5';
            }, 0);
        });

        // drag end
        item.addEventListener('dragend', function () {
            setTimeout(() => {
                item.style.opacity = '1';
                draggedItem = null;
            }, 0);
        });

        // drag over
        item.addEventListener('dragover', function (e) {
            e.preventDefault();
        });

        // drop
        item.addEventListener('drop', function (e) {
            e.preventDefault();
            if (draggedItem !== this) {
                const allItems = Array.from(this.parentNode.children);
                const currentIndex = allItems.indexOf(this);
                const draggedIndex = allItems.indexOf(draggedItem);

                if (draggedIndex < currentIndex) {
                    this.parentNode.insertBefore(draggedItem, this.nextSibling);
                } else {
                    this.parentNode.insertBefore(draggedItem, this);
                }
            }
        });
    });
});





// https://likedev.tistory.com/entry/Javascript-%EB%9E%9C%EB%8D%A4-%EC%83%89%EC%83%81-%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0
//https://bigtop.tistory.com/58
//https://blog.naver.com/PostView.naver?blogId=wnsrhkqja&logNo=221402960956
//https://velog.io/@kokyusik91/%ED%81%B4%EB%A6%AD-%ED%96%88%EC%9D%84%EB%95%8C-%EB%9E%9C%EB%8D%A4%EC%9C%BC%EB%A1%9C-%ED%99%94%EB%A9%B4-%EC%83%89%EC%83%81-%EB%B0%94%EB%80%8C%EB%8A%94-%EC%9E%A5%EB%82%9C%EA%B0%90
function getRandomColor() {
    const r = Math.floor(Math.random() * 156) + 130; 
    const g = Math.floor(Math.random() * 156) + 60; 
    const b = Math.floor(Math.random() * 156) + 120; 
    return `rgb(${r}, ${g}, ${b})`;
}




function setRandomColors() {
    const buttons = document.querySelectorAll('.atoz button');
    const popups = document.querySelectorAll('.popup');

    buttons.forEach((button, index) => {
        const randomColor = getRandomColor();
        button.style.backgroundColor = randomColor;

        if (popups[index]) {
            popups[index].style.backgroundColor = randomColor;
        }
    });
}


window.onload = setRandomColors;
window.onload = function() {
    setRandomColors();
}

function scrollToPopup(popupIndex) {
    const popup = document.getElementById('popup' + popupIndex);
    const rect = popup.getBoundingClientRect();
    const popupX = window.pageXOffset + rect.left;
    const popupY = window.pageYOffset + rect.top;

    window.scrollTo({
        left: popupX - (window.innerWidth / 2 - rect.width / 2),
        top: popupY - (window.innerHeight / 2 - rect.height / 2),
        behavior: 'smooth'
    });
}

function fadeInOut() {
    const paragraphs = document.querySelectorAll('#popup20 p');
    let delay = 0;

    paragraphs.forEach((paragraph, index) => {
        setTimeout(() => {
            paragraph.classList.remove('popup-hidden');
            paragraph.style.animation = 'fadeIn 2s forwards';
        }, delay);
        delay += 1000; //1second
    });


    delay += 2000; //2second
    paragraphs.forEach((paragraph, index) => {
        setTimeout(() => {
            paragraph.style.animation = 'fadeOut 2s forwards';
        }, delay);
        delay += 1000; //1second
    });

    setTimeout(fadeInOut, delay); //loop
}
fadeInOut();

// zoom in
document.addEventListener("DOMContentLoaded", function() {
    const balloon = document.getElementById("balloon");

    // zoom in when hover
    balloon.addEventListener("mouseenter", function() {
        balloon.style.transform = "translate(-50%, -50%) scale(8)"; // x2
    });

    // zoom out
    balloon.addEventListener("mouseleave", function() {
        balloon.style.transform = "translate(-50%, -50%) scale(1)"; // -x2
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById('videoPlayer');
    const progressBar = document.getElementById('progressBar');
    const endImage = document.getElementById('endImage');

    video.addEventListener('click', function () {
        if (progressBar.value > 0) {
            progressBar.value -= 20;
        }

        if (progressBar.value === 0) {
            video.style.display = 'none'; 
            endImage.style.display = 'block'; 
        }
    });
});

document.addEventListener('keypress', function(event) {
    // 'k' press
    if (event.key === 'k' || event.key === 'K' || event.key === 'ㅏ') {
        const doorImage = document.getElementById('doorImage');
        doorImage.src = 'img/door2.png';
        doorImage.style.width = '300px';
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const cakeImage = document.querySelector('#cake'); 
  
    cakeImage.addEventListener('click', function() {
      alert('🎉🎉생일 축하합니다🎉🎉');
  
      const cakeContainer = document.querySelector('.cake-container');
      cakeContainer.classList.add('blur-removed');
    });
  });
  
