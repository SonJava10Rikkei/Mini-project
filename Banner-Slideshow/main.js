let arrayImages = ['/Banner-Slideshow/image/banner1.jfif', '/Banner-Slideshow/image/banner2.jfif', '/Banner-Slideshow/image/banner3.jfif', '/Banner-Slideshow/image/banner4.jfif']
let count = 0;
let showBanner = function() {
    let image = document.getElementById('image');
    image.src = arrayImages[`${count}`];
    count++;
    if (count == 4) {
        count = 0;
    }
}
setInterval(showBanner, 1000);