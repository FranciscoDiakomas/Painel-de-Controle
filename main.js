window.onload = function () {
    
    const sidebarBTNS = document.querySelectorAll(".links")
    function selectLink() {
        sidebarBTNS.forEach((btn)=>{
            btn.classList.remove("active")
        })
        this.classList.add("active")
    }
    sidebarBTNS.forEach((iten)=>{
    iten.addEventListener("click",selectLink)
    })

    
}