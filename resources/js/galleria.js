$(document).ready(function () {
	Galleria.loadTheme('galleria/themes/classic/galleria.classic.js');
	Galleria.run('#galleria', {
	 facebook: 'album:1158521700914085',
	 width: 745,
	 height: 550,
	 lightbox: true,
	 facebookOptions: {
	   max: 30, // optional override for limit of 40 photos on an album
	   facebook_access_token: '1672444229432314|fiA4q4sbOERAptOwa6x7XNE-yVo'
	 }
	});
});

