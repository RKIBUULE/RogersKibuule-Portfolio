// template_jdx9s0h
// service_v9zpq98
// 61SGe62m500PlS416
let isModalOpen = false
let ContrastToggle = false;
// const scaleFactor = 1 /20


// function moveBckground(event){
//     const shapes = document.querySelectorAll(".shape")
//     const x = event.clientX /20
//     const y = event.clientY /20
   
//     for(let i = 0; i < shapes.length; ++i){
//         shapes[i].style.transform =' translate(${x}px, ${y}px)'
//     }

function toggleContrast(){
    ContrastToggle = !ContrastToggle
    if(ContrastToggle){
    document.body.classList += "dark-theme"
    }
    else{
        document.body.classList.remove("dark-theme")
    }
}
function contact(event){
    event.preventDefault();
    const loading = document.querySelector(`.modal__overlay--loading`)
    const success = document.querySelector(`.modal__overlay--success`)
    emailjs
        .sendForm(
            `service_v9zpq98`,
           `template_jdx9s0h`,
           event.target,
           `61SGe62m500PlS416`
        ).then(() => {
            throw new Error('error')
            loading.classList.remove("modal__overlay--visible")
            success.classList += "modal__overlay--visible"
            
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible")
            alert(
                "The email service is  temporarily unavaible. Please me directly on kibuulerogers58@gmail.com"
            )
        })

}

function toggleModal(){
    if(isModalOpen){
        isModalOpen =  false
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true
    // toggle  Modal
    document.body.classList += "modal--open "
}
