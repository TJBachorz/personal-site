const links = document.querySelectorAll("a")

links.forEach(link => {
    link.addEventListener("click", handleExternalLink)
})

function handleExternalLink(event) {
    const externalLink = event.target.href
    if (!externalLink.includes("localhost")) {
        event.preventDefault()
        if (window.confirm("You are about to leave this site. Are you sure?")) {
            window.location.href = externalLink
        }
    }
}