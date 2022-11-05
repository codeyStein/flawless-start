import conf from "../../config.json"

export default function TimeDate() {

const d = new Date();
//Date
const months = ["Jan.", "Feb.", "Mart.", "April.", "May.", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."]
const days = ["Sun.", "Mon.", "Thu.", "Wed.", "Tue.", "Fri.", "Sat"];

const day = days[d.getDay()]
const dayNum = d.getDate()
const month = months[d.getMonth()]
const date = `${day} ${month} ${dayNum}`

// Time
const hour = d.getHours();
const min = d.getMinutes();
const time = `${hour<10 ? "0"+hour : hour}:${min<10 ? "0"+min : min}`

const timeDate = conf.widgets["Time and Date"]
	return (
      <div className='widgets__section-one'>
        <h2 className='widget--time'>{time}</h2>
        <h2 className='widget--date'>{date}</h2>
      </div>
	)
}
