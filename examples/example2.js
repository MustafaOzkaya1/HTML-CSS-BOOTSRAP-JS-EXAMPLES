// scripts.js
document.getElementById('menu-toggle').addEventListener('click', function() {
    var menu = document.getElementById('drawer-menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});