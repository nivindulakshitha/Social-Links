import { Box } from "@mui/material"
import LinkButton from "./LinkButton"
import { links } from "../constants"

const Card = () => {
	return (
		<Box className="card-background profile-card">
			<img src="\assets\images\avatar-jessica.jpeg" alt="profile" className="profile-image" />
			<h2 className="profile-name">Jessica Randall</h2>
			<p className="location">London, United Kingdom</p>
			<p className="profile-bio">Front-end developer & avid reader</p>
			<div className="social-media">
				{
					Object.keys(links).map((key, index) => {
						return <LinkButton key={index} name={key} href={links[key]} />
					})
				}
			</div>
		</Box>
	)
}

export default Card