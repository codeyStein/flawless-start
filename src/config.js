export default [
{
	widgets: {
		timeDate: {
			visibility: "show" // show | hidden
		},
		searchBar: {
			searchProvider: "duckduckgo", // google | duckduckgo | bing
			visibility: "show" // show | hidden
		},
		quickActions: {
			visibility: "show" // show | hidden
		}
	},
}
]

/*
* ---KEY--- 

*	Search Providers:
		duckduckgo (default)
		google
		bing
		[eg: `searchProvider: "google"` will use google as a search provider]

*	Widgets:
		visibility: either "show" or "hidden" will determine the visibility of the widget (e.g: `visibility: hidden` will hide the widget)
		
	
	
*/

// [ {
