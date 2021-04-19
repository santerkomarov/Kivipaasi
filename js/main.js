(function (root, $) {

	// You can use a JSON file to store your content or
	// if you want dynamic content you can use Underscore.js/Handlebars.js templates.
	// Just try to keep your HTML out of your JS files.


	// var contents = {
	// 	seat: [
	// 		'<h2>Bicycle seat</h2>',
	// 		'<p>Unlike a bicycle saddle, is designed to support the rider\'s buttocks and back, usually in a semi-reclined position.</p>'
	// 	].join(''),
	// 	handlebar: [
	// 		'<h2>Bicycle handlebar</h2>',
	// 		'<p class="img-center"><img src="img/bycicle_handlebar.jpeg" width="193" height="145"></p>',
	// 		'"<a href="http://commons.wikimedia.org/wiki/File:Legnano_condorino_type_bycicle_handlebar.JPG#mediaviewer/File:Legnano_condorino_type_bycicle_handlebar.JPG">Legnano condorino type bycicle handlebar</a>" ',
	// 		'by <a href="//commons.wikimedia.org/w/index.php?title=User:Marco_Gilardetti&amp;action=edit&amp;redlink=1" class="new" title="User:Marco Gilardetti (page does not exist)">Marco Gilardetti</a> - ',
	// 		'<span class="int-own-work">Own work</span>. Licensed under <a href="http://creativecommons.org/licenses/by-sa/3.0" title="Creative Commons Attribution-Share Alike 3.0">CC BY-SA 3.0</a> via <a href="//commons.wikimedia.org/wiki/">Wikimedia Commons</a>.'
	// 	].join(''),
	// 	tire: [
	// 		'<h2>Bicycle tire</h2>',
	// 		'<p>Modern bicycle tires can be classified by several different criteria: </p>',
	// 		'<ul>',
	// 		'<li><strong>how they attach to the rim:</strong> ',
	// 		'clincher or tubular,</li>',
	// 		'<li><strong>if and how they hold air:</strong> ',
	// 		'tubed, tubeless, or solid,</li>',
	// 		'<li><strong>what type of tread they have:</strong> ',
	// 		'slick or knobby.</li>',
	// 		'</ul>'
	// 	].join('')
	// };

	var contents = {
		capellan: [
			'<h2>Capellan aukio</h2>',
			'<h3>2018</h3>'
		].join(''),
		verkkosaari: [
			'<h2>Verkkosaari</h2>',
			'<h3>2017</h3>'
			
		].join(''),
		sompasaari: [
			'<h2>Sompasaari vaihe 1</h2>',
			'<h3>Isoisän silta maatuet. Talvisodan muistomerkin jalustakiveys. </h3>'
			
		].join(''),
		kasarmikatu: [
			'<h2>Kasarmikatu</h2>',
			'<h3>Kasarmikatu 21 ja Koivusaaren metroasema</h3>'
			
		].join(''),
		jatkasaari: [
			'<h2>Jatkasaari</h2>',
			'<h3>2019 </h3>'
			
		].join(''),
		mannerheim: [
			'<h2>Mannerheimintie, 30</h2>',
			'<h3>2015, kiveykset </h3>'
			
		].join(''),
		kalasatama: [
			'<h2>Kalasatama</h2>',
			'<h3>2015</h3>'
			
		].join(''),
		robertinkatu: [
			'<h2>Robertinkatu</h2>',
			'<h3>2016-2017, graniiti </h3>'
			
		].join(''),


	};

	// 
	$('#pictip-big').pictip({
		spots: [
			{top: '9%', left: '83%', content: contents.capellan, tooltipPosition:'bl'},
			{top: '4%', left: '82%', content: contents.verkkosaari, tooltipPosition:'bl'},
			{top: '30%', left: '75%', content: contents.sompasaari, tooltipPosition:'bl'},
			{top: '53%', left: '51%', content: contents.kasarmikatu, tooltipPosition:'br'},
			{top: '75%', left: '19%', content: contents.jatkasaari, tooltipPosition:'tr'},
			{top: '46%', left: '39%', content: contents.mannerheim, tooltipPosition:'bl'},
			{top: '21%', left: '78%', content: contents.kalasatama, tooltipPosition:'br'},
			{top: '60%', left: '44%', content: contents.robertinkatu, tooltipPosition:'bl'}
			// {top: '52%', left: '63%', content: contents.tire, tooltipPosition:'bl'}
		],



		// spots: [
		// 	{top: '20%', left: '48%', content: contents.seat, tooltipPosition:'br'},
		// 	{top: '12%', left: '47%', content: contents.handlebar, tooltipPosition:'bl'},
		// 	{top: '52%', left: '63%', content: contents.tire, tooltipPosition:'bl'}
		// ],

		// Functions onShowToolTip and onCloseToolTip are not executed if show and close functions are defined
		// Use CSS transitions if they are available
		show: function(tooltip){
			tooltip.addClass('is-open');
			console.log('Opening...', tooltip);
		},
		close: function(tooltip){
			tooltip.removeClass('is-open');
			console.log('Closing...', tooltip);
		}
	});

	// You can access the instance with
	var pictip = $('#pictip-big').data('pictip');

	$(root).on('resize', function () {
		pictip.closeToolTips();
	});

// === small ===








})(window, jQuery);