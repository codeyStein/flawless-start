import Config from "../../config.json"
import * as FaIcons from "react-icons/fa"

const quickActions = Config.widgets["Quick Actions"]


export default function QuickAction(props) {
const Icon = FaIcons[quickActions[props.id].icon]
const href = quickActions[props.id]["link"]
	return (
		<div className="widget--quick_action--card">
			<a href={`${href}`}>
				<Icon size={128}/>
			</a>
		</div>
	)
}

