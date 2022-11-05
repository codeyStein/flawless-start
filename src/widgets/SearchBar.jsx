import conf from '../../config.json'

export default function SearchBar() {

const searchBar = conf.widgets["Search Bar"]
const searchProvider = searchBar["Search Provider"]

	return (
        <form className='widget--search' action={`${
        searchProvider==="google" ? "https://google.com/search" : 
        searchProvider==="bing" ? "https://www.bing.com/search?form=MOZLBR&pc=MOZI&q" :
        "https://duckduckgo.com/"
        }`}>
        <input name='q' placeholder='Search For Something Amazing...'/>
        </form>
	)
}

