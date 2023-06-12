<br />

<h1 align="center">Flawless Start</h1>
<h3 align="center"><i>your</i> hackable start page</h3>

<br>

<p align="center">
  <img width="400" src="https://raw.githubusercontent.com/codeyStein/flawless-start/master/screenshots/light.png"  />
  <img width="400" src="https://raw.githubusercontent.com/codeyStein/flawless-start/master/screenshots/dark.png"  />
</p>
<br />


## About
Flawless Start is a unique start page, it allows for easy customization using it's `config.json`. Apart from that, flawless start can also make you just a tiny bit more productive thanks to it's shortcuts (which are explained here). This is a solo project but feel free to contribute if you'd like!


## Installation
To install simply clone this repository into any directory and cd inside:
```
$ git clone https://github.com/codeyStein/flawless-start.git
$ cd flawless-start
$ npm install
```
This should install the required dependencies.
To run localy simply run: `npm run dev` This should start a localhost server.
But it is recomended to deploy this somewhere or build it so you don't have to run this every time.

## Configuration
To access the configuration file, go to the root of your repository (`./flawless-start`). Then open `config.json`, this is your configuration file.

*NOTE: for further acknowledgment, please refer to the [default config file.
](https://github.com/codeyStein/flawless-start/blob/master/config.json)*
### Themes
Themes change the colors of your start page.

syntax: `"theme": <theme>` options:

- `dark` • sets theme to dark mode. *(default)*
- `light` • sets theme to light mode
- ~~`custom` • sets theme to use custom colors.~~ (COMING SOON)
Examples: `"theme": light` will set your theme to light *(ouch my eyes!)*

### Widgets
Widgets are all the components you can see on the page

syntax: `"widgets": {  Object Of Widgets  }` You'll be placing all your widgets inside of the `widgets` object

#### Widget / Time and Date
The Time and Date widget displays the current date and time of your location.

syntax: `"Time and Date": {}` options:

- `visibility`: • Set the visibility of this widget. options:
    - `hidden` • sets visibility to hidden,
    - `show` • sets visibility to show *(default)*
Examples: `"visibility": 'hidden'` will hide this widget

#### Search Bar
Search bar widget is the input that allows you to search using your preferred search provider.

syntax: `"Search Bar": {}` options:

- `visibility`: • Set the visibility of this widget. options:
    - `hidden` • sets visibility to hidden,
    - `show` • sets visibility to show *(default)*
Examples: `"visibility": 'hidden'` will hide this widget

* `Search Provider`: • defines the search provider
	*  `duckduckgo` • sets search provider to duckduckgo *(default)*
	* `google` • sets search provider to google 
	 * `bing` • sets search provider to bing *(wait, you use bing?)*
Example: `"Search Provider": "google"` sets search provider to google (if you don't value your privacy, google is a perfect option!)


