document.querySelectorAll('.product-item').forEach(item => {
    item.addEventListener('mouseenter',() => {
        item.querySelector('img').style.transform = 'translateX(0%)';
        const text = item.querySelector('.text');
        text.style.left = '10px';
        text.style.opacity = '1';
        text.style.backgroundColor = '#e1dddd';
        text.style.border = '2px solid #e1dddd';
        text.style.borderRadius = '10px';
    })
    item.addEventListener('mouseleave',() => {
        item.querySelector('img').style.transform = 'translateX(0%) ';
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
    let supject = document.getElementById('supject').value;
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
