window.addEventListener('load', function() {
    document.getElementById('burger-menu').checked = false;
});
let prevScrollpos = window.scrollY;
        window.onscroll = function () {
            let currentScrollPos = window.scrollY;
            if(window.innerWidth > 990){
                if (prevScrollpos > currentScrollPos) {
                    document.getElementById("navbar").style.position = "fixed";
                    document.getElementById("navbar").style.top = "0";
                } else {
                    document.getElementById("navbar").style.top = "-110px";
                }
                if(currentScrollPos > 100){
                    document.getElementById("navbar").style.backgroundColor = "rgba(37, 43, 73, .8)";
                }
                else{
                    document.getElementById("navbar").style.backgroundColor = "rgba(37, 43, 73, 0)";
                }
                prevScrollpos = currentScrollPos;
            }
            else{
                if(currentScrollPos > 100){
                    document.getElementById("navbar").style.position = "fixed";
                    document.getElementById("navbar").style.backgroundColor = "rgba(37, 43, 73, .8)";
                }
                else{
                    document.getElementById("navbar").style.backgroundColor = "rgba(37, 43, 73, 0)";
                }
            }
        }

const menuItems = document.querySelectorAll('.nav-content__item');
const menuIcon = document.getElementById("burger-menu");
        
if(menuIcon.checked = true){
    menuItems.forEach((menuItem) => {
        menuItem.addEventListener('click', () => {
            menuIcon.checked = false;
        });
    });
}
        