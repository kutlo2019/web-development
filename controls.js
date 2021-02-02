const slider = document.querySelector('.slider');

const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const indicatorParents = document.querySelector('.controls ul');
var sectionIndex = 0;

function setIndex() {
	document.querySelector('.controls .selected').classList.remove('selected');
	slider.style.transform = 'translate(' + (sectionIndex) * -33 + '%)';
}

document.querySelectorAll('.controls li').forEach(function(indicator, ind) {
	indicator.addEventListener('click', function() {
		sectionIndex = ind;
		setIndex();
		indicator.classList.add('selected');

	});
});

leftArrow.addEventListener('click', function() {
	sectionIndex = (sectionIndex > 0) ? sectionIndex - 1: 0;
	document.querySelector('.controls .selected').classList.remove('selected');
	indicatorParents.children[sectionIndex].classList.add('selected');
	slider.style.transform = 'translate(' + (sectionIndex) * -33 + '%)';
});

rightArrow.addEventListener('click', function() {
	sectionIndex = (sectionIndex < 3) ? sectionIndex + 1: 3;
	document.querySelector('.controls .selected').classList.remove('selected');
	indicatorParents.children[sectionIndex].classList.add('selected');
	slider.style.transform = 'translate(' + (sectionIndex) * -33 + '%)';
});
