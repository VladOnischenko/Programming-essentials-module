// Our Services
const tabs = document.querySelector('.cards-and-services');
const btns = tabs.querySelectorAll('.services__tabs-title');
const items = tabs.querySelectorAll('.tab-service');

const tabsContent = document.querySelector('.services__tabs-content');
const active = tabsContent.querySelectorAll('.active');

items.forEach(el =>{
	el.style.display = 'none';
})
active.forEach(el =>{
	el.style.display = 'block';
})

function change(arr, i){
	arr.forEach(item =>{
		item.forEach(i =>{
			i.classList.remove('active');
		})
			item[i].classList.add('active');
	})
	items.forEach(el =>{
		if(el.classList.contains('active')){
			el.style.display = 'block';
		}else {
			el.style.display = 'none';
		}
	})
}
for(let i=0; i < btns.length; i++){
	btns[i].addEventListener('click', () =>{
		change([btns,items],i)
	})
}
// Our Services

//About
const comments = document.querySelectorAll('.slider-item');
const sliderImg = document.querySelectorAll('.slider-people__img');
const sliderComments = document.querySelector('.about__slider-comments');
const sliderPeople = document.querySelector('.slider-people');

const previousBtn = document.querySelector('.previous-slide');
const nextBtn = document.querySelector('.next-slide');
let current = 0;

function slider(){
	for (let i = 0; i < sliderImg.length; i++) {
		sliderImg[i].classList.remove('active');
	}
	sliderImg[current].classList.add('active');

	for(let j = 0; j < comments.length; j++){
		comments[j].classList.remove('active');
	}
	comments[current].classList.add('active');
}
slider();
previousBtn.addEventListener('click',()=>{
	if(current - 1 === - 1){
		current = sliderImg.length - 1;
	}else{
		current--;
	}
	slider();
})
nextBtn.addEventListener('click', ()=>{
	if(current + 1 === sliderImg.length){
		current = 0;
	}else{
		current++;
	}
	slider();
})
for(let i = 0; i < sliderImg.length; i++){
	sliderImg[i].addEventListener('click', (event)=>{
		sliderImg.forEach(el =>{
			el.classList.remove('active');
			event.currentTarget.classList.add('active');
		})
		comments.forEach(el =>{
			el.classList.remove('active');
		})
		comments[i].classList.add('active');
		current = Array.from(sliderImg).indexOf(event.currentTarget);
	})
}
//About

//Our Amazing Work
const button = document.querySelector('.works__button');
const imgs = document.querySelectorAll('.works__imgs-item');
const tabsWorks = document.querySelectorAll('.works__tabs-title');
const loadBtn = document.querySelector('.loading');
const worksTabs = document.querySelector('.works__tabs');

worksTabs.addEventListener('click', event =>{
	if(event.target.tagName !== 'LI') return false;

	let filterClass = event.target.dataset['name'];

	imgs.forEach(element =>{
		element.style.display = 'flex'
		if(!element.classList.contains(filterClass) && filterClass !== 'all'){
			element.style.display = 'none'
		}
	})
	tabsWorks.forEach(item => {
		item.classList.remove('active');
		event.target.classList.add('active');
	})
	if(filterClass === 'all'){
		for(let i = 0; i < imgs.length; i++){
			let num = 11;
			if(i <= num){
				imgs[i].style.display = 'flex';
				console.log(true);
			}else {
				imgs[i].style.display = 'none';
				console.log(false);
			}
		}
	}
})

//load more
button.addEventListener('click', ()=>{
	button.style.display = 'none';
	loadBtn.style.display = 'flex';
	setTimeout(()=>{
		loadBtn.style.display = 'none';
		imgs.forEach(el =>{
			el.style.display = 'flex';
		})
	},2000)
})
//load more
//Our Amazing Work