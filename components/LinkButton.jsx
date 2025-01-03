import PropTypes from 'prop-types';

const LinkButton = ({ name, href }) => {
	return (
		<div className="link-button" href={href} target="_blank">
			{name}
		</div>
	)
}
LinkButton.propTypes = {
	name: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired,
};

export default LinkButton