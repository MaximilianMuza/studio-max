var menu = document.getElementById('menu');
var menuWhite = document.getElementById('menu--white');

if(menu) {menu.onclick = function() {openSideBar()};};
if(menuWhite) {menuWhite.onclick = function() {openSideBar()};};

document.getElementById('x').onclick = function() {closeSideBar()};

var SideBar = document.getElementsByClassName('navigation__dropdown')[0];
function openSideBar() {
	SideBar.style.display = 'flex';
}
function closeSideBar() {
	SideBar.style.display = 'none';
}
function toggleModul(value) {
	var myModul = value;
	var data = document.getElementById(myModul);
	if (data.style.display === "none") {
        data.style.display = "block";
    } else {
        data.style.display = "none";
    }
}
