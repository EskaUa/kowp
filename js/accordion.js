var acc = document.getElementsByClassName('faq__descr__block__btn');
var i;
console.log(acc)

for(i = 0; i < acc.length; i++){
	acc[i].addEventListener('click' , function(){
		this.classList.toggle('active');
		var panel = this.nextElementSibling;
		if(panel.style.maxHeight){
			panel.style.maxHeight = null;
		}else{
			panel.style.maxHeight = panel.scrollHeight + 'px';
		}
	})
}