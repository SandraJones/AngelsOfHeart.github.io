$(function(){
	let imagesArr = [
		{
			url: 'slides/1.jpg',
			caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
		},
		{
			url: 'slides/2.jpg',
			caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
		},
		{
			url: 'slides/3.jpg',
			caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
		},
		{
			url: 'slides/4.jpg',
			caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
		}
	];

	imagesArr.forEach ((image, index) => {

		let lineItem = `<li data-target="#myCarousel" data-slide-to="${index}"></li>`;

		$('#indicators').append(lineItem);

		let imageContent = `
			<div class="item-active">
				<img src="${image.url}" alt="${image.caption}">
			</div>
			<div class="carousel-caption"><p>${image.caption}</p></div>
		`;

		$('#carousel-images').append(imageContent);


	});

});


