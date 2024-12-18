(function() {
	var Realmac = Realmac || {};

	Realmac.meta = {
		
		// Set the browser title
		//
		// @var String text
		setTitle: function(text) {
			return document.title = text;
		},
		
		// Set the content attribute of a meta tag
		//
		// @var String name
		// @var String content
		setTagContent: function(tag, content){
			// If the tag being set is title
			// return the result of setTitle
			if ( tag === 'title' )
			{
				return this.setTitle(content);
			}
			
			// Otherwise try and find the meta tag
			var tag = this.getTag(tag);
			
			// If we have a tag, set the content
			if ( tag !== false )
			{
				return tag.setAttribute('content', content);
			}
			
			return false;
		},
		
		// Find a meta tag
		//
		// @var String name
		getTag: function(name) {
			var meta = document.querySelectorAll('meta');
			
			for ( var i=0; i<meta.length; i++ )
			{
				if (meta[i].name == name){
					return meta[i];
				}
			}
			
			var tag = document.createElement('meta');
			tag.name = name;
			document.getElementsByTagName('head')[0].appendChild(tag);
			
			return tag;
		}
	};
 
	// Object containing all website meta info
	var websiteMeta = {"archive-december-2024.html":"Archives for December 2024","genos-participate-bioleap-accelerator-puerto-rico.html":"SAN JUAN, PUERTO RICO – GENOS, one of Ozcorp Scientific's recently debuted portfolio companies, has been selected to join the inaugural cohort of the ","GENOS-selected-parallel18-pre18-strengthen-market-entry-expand-operations.html":"SAN JUAN, PUERTO RICO – GENOS, a bioinformatics contract research organization (CRO), has been selected for the prestigious pre18 program by Parallel1","category-new-category.html":"A list of posts in category &ldquo;New Category&rdquo;","archive-april-2024.html":"Archives for April 2024","ozcorp-unveils-genos-bioinformatics-from-stealth.html":"SAN JUAN, PUERTO RICO – Ozcorp Scientific, a biotech venture studio, proudly announces the official emergence of GENOS, marking its decisive step out ","category-press.html":"A list of posts in category &ldquo;Press&rdquo;"};
 
	// pageId must match the key in websiteMeta object
	var url = window.location.pathname;
	var pageId = url.substring(url.lastIndexOf('/')+1);
	if (!pageId || pageId.length == 0){
		pageId = 'index.html';
	}
	pageMeta = websiteMeta[pageId];
 
	// If we have meta for this page
	if (pageMeta){
		Realmac.meta.setTagContent('description', pageMeta);
	}
 
 })();