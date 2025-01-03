import PropTypes from 'prop-types';

const LinkButton = ({ name, href }) => {
	return (
		<a href={href} target="_blank">
			<div className="link-button">
				{name}
			</div>
		</a>
	)
}
LinkButton.propTypes = {
	name: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired,
};

export default LinkButton