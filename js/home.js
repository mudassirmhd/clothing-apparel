const productContainers = [...document.querySelectorAll(".product-container")];
const nxtButton = [...document.querySelectorAll(".nxt-button")];
const preButton = [...document.querySelectorAll(".pre-button")];

productContainers.forEach((item, i) => {
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth = containerDimenstions.width;

    nxtButton[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })
    preButton[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})