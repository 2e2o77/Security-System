document.querySelectorAll('.product-item').forEach(item => {
    item.addEventListener('mouseenter',() => {
        item.querySelector('img').style.transform = 'translateX(0%)';
        const text = item.querySelector('.text');
        text.style.left = '10px';
        text.style.opacity = '1';
        text.style.backgroundColor = 'rgb(221, 218, 218)';
        text.style.border = '2px solid rgb(221, 218, 218)';
        text.style.borderRadius = '10px';
    })
    item.addEventListener('mouseleave',() => {
        item.querySelector('img').style.transform = 'translateX(500%) ';
        item.querySelector('img').style.transition = 'all 0.4s'
        const text = item.querySelector('.text');
        text.style.left = '200px';
        text.style.opacity = '0';
    })
})

const div = document.querySelector('.product-item');
const text = div.querySelector('.text');
div.addEventListener('mouseenter',() => {
    text.style.transform = 'translateX(-10%)'
    div.addEventListener('mouseenter', ()=> {
        text.style.transform = 'translateX(0)';
    })
});

function validation(){
    let fullName = document.getElementById('fullName').value;
    let email = document.getElementById('email').value;
    let supject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;

    if (fullName===""||email===""||supject===""||message===""){
        alert("Please Fall The Field")
        return false
    }
    if (email.indexOf("@")===-1||email.indexOf(".")===-1){
        alert("Please Write Your Email Correct")
        return false
    }
    return true
}

document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slides');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach(slide => slide.style.display = 'none');
        slides[index].style.display = 'block';
    }

    showSlide(currentIndex);

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    }

    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');

    if (nextButton) nextButton.addEventListener('click', nextSlide);
    if (prevButton) prevButton.addEventListener('click', prevSlide);

    // setInterval(nextSlide, 3000);
});


