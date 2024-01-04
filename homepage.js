// Create a carousel instance
    var myCarousel = new bootstrap.Carousel(element);

    btn.addEventListener("click", function(){
        myCarousel.cycle();
    });
});

// Restaurants page 

//read more part:
document.addEventListener('DOMContentLoaded', function() {
    const readMoreLinks = document.querySelectorAll('.read-more-link');

    readMoreLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = link.dataset.target;
            const hiddenContent = document.getElementById(targetId);

            if (hiddenContent) {
                hiddenContent.classList.toggle('hidden-content');
            } else {
                console.error(`Hidden content not found for target ID: ${targetId}`);
            }
        });
    });
});

// Star rating


document.addEventListener('DOMContentLoaded', function () {
    const starRatingContainers = document.querySelectorAll('.star-rating');

    starRatingContainers.forEach(container => {
        const ratingValue = parseFloat(container.dataset.rating);
        const fullStars = Math.floor(ratingValue);
        const hasHalfStar = ratingValue % 1 !== 0;

        // Clear existing content in the container
        container.innerHTML = '  ';

        for (let i = 0; i < 5; i++) {
            const star = document.createElement('span');
            if (i < fullStars) {
                star.classList.add('star', 'full-star');
            } else if (hasHalfStar && i === fullStars) {
                star.classList.add('star', 'half-star');
            } else {
                star.classList.add('star');
            }
            container.appendChild(star);
        }

        // Display the rating value next to the stars
        const ratingText = document.createElement('span');
        ratingText.classList.add('rating-text');
        ratingText.textContent = ` (${ratingValue})`;
        container.appendChild(ratingText);
    });
});

// Address and phone buttons
document.addEventListener("DOMContentLoaded", function () {
    var infoButtons = document.querySelectorAll(".btn-address-phone");
    infoButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            var infoId = button.getAttribute("data-info-id");

            var info = document.getElementById(infoId);
            if (info.style.display === "none" || info.style.display === "") {
                info.style.display = "block";
            } else {
                info.style.display = "none";
            }
        });
    });
});

