var video1 = document.querySelector("#video1")
var video2 = document.querySelector("#video2")
var videoSira = 2
document.querySelectorAll(".otherCity").forEach(e => {
    e.onclick = () => {
        if (videoSira == 2) {
            video1.style.opacity = "1"
            video2.style.opacity = "0"
            video1.play()
            videoSira = 1
        } else {
            video1.style.opacity = "0"
            video2.style.opacity = "1"
            video2.play()
            videoSira = 2
        }
        toggleCity()

        document.querySelectorAll(".cityCard").forEach(e => e.classList.toggle('flipped'))
    }
})


const toggleCity = () => {
    document.querySelectorAll(".leftSide").forEach(e => e.classList.toggle("hide"));
}


document.querySelector(".icons i").onclick = () => {
    document.querySelector(".search").classList.toggle("searchGizle")
}
