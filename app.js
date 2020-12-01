console.log("working")


const modalTriggers = document.querySelectorAll('.fa')
const modalCloseTrigger = document.querySelector('.popup-modal__close')
const bodyBlackout = document.querySelector('.body-blackout')
const popupModal = document.querySelector(".popup-modal")

modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        const { link } = trigger.dataset

        popupModal.classList.add('is--visible')
        bodyBlackout.classList.add('is-blacked-out')

        const modalLink = document.querySelector(".modal-link")
        modalLink.href = link
    })
    popupModal.querySelector('.popup-modal__close').addEventListener('click', handleModalClose)
    
    bodyBlackout.addEventListener('click', handleModalClose)
})

function handleModalClose() {
    popupModal.classList.remove('is--visible')
    bodyBlackout.classList.remove('is-blacked-out')
}



// const links = document.querySelectorAll("a")

// links.forEach(link => {
//     link.addEventListener("click", handleExternalLink)
// })

// function handleExternalLink(event) {
//     const externalLink = event.target.href
//     if (!externalLink.includes("localhost")) {
//         event.preventDefault()
//         if (window.confirm("You are about to leave this site. Are you sure?")) {
//             window.location.href = externalLink
//         }
//     }
// }