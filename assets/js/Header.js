const scrollHeader = () => {
    const header = document.getElementById('header')
    // when the scroll is greater than 50 viewport , add the scroll header class
    this.scrollY >= 50 ? header.classList.add('bg-header')
                       : header.classList.remove('bg-header') 
}
window.addEventListener('scroll', scrollHeader)