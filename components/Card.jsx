import { Box } from "@mui/material"
import LinkButton from "./LinkButton"

const Card = () => {
	return (
		<Box className="card-background profile-card">
			<img src="\assets\images\avatar-jessica.jpeg" alt="profile" className="profile-image" />
			<h2 className="profile-name">Jessica Randall</h2>
			<p className="location">London, United Kingdom</p>
			<p className="profile-bio">Front-end developer & avid reader</p>
			<div className="social-media">
				<LinkButton href="https://github.com/jessicarandall"/>
				<LinkButton href="https://twitter.com/jessicarandall"/>
			</div>
		</Box>
	)
}

export default Card