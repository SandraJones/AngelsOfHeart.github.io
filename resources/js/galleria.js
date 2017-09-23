$(document).ready(function () {
	Galleria.loadTheme('galleria/themes/classic/galleria.classic.js');
	Galleria.run('#galleria', {
	 facebook: 'album:1139248719508050',
	 width: 745,
	 height: 550,
	 lightbox: true,
	 facebookOptions: {
	   max: 30, // optional override for limit of 40 photos on an album
	   facebook_access_token: '116513992429492|YpbXaNm6mBpHLijfixB-pfi2i9g'
	 }
	});
});

