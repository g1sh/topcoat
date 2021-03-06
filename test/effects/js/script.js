window.addEventListener('load', function() {
	new FastClick(document.body);
}, false);

var toggle = document.querySelector('#show');
var menu = document.querySelector('.sidemenu');
var container = document.querySelector('.container');
var body = document.querySelector('body');

menu.style.zIndex = -100;

toggle.addEventListener('click', function(e){
	if(Modernizr.csstransforms3d) {
		container.classList.toggle('translateright');
	} else {
		container.setAttribute('class', 'translateright');
		if(container.classList.contains('stayright')) {
			container.classList.remove('stayright');
			container.classList.remove('translateright');
			container.classList.add('restore');
			setTimeout(function(){
				container.classList.toggle('restore');
			}, 250);
		} else {
			container.classList.add('translateright');
			setTimeout(function(){
				container.classList.toggle('stayright');
			}, 250);
		}
	}
	if(!container.classList.contains('translateright')) {
		setTimeout(function(){
			menu.style.zIndex = -10;
		}, 250);
	} else {
		menu.style.zIndex = 0;
	}
});