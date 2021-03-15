const panels = document.querySelectorAll('panel')

/*console.log(panels[1])*/

panels.forEach(panel)  ; {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
}

function removeActiveClasses() {
    panel.forEach(panel => {
        panel.classList.remove('active')
    })
}

/* activate h3 and let's add a transition here and let's say opacity*/


