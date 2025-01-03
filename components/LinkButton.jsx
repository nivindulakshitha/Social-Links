import { Button } from "@mui/material"
import PropTypes from 'prop-types';

const LinkButton = ({ href }) => {
  return (
	  <Button variant="contained" href="https://www.google.com" target="_blank">
		  { href }
	  </Button>
  )
}
LinkButton.propTypes = {
  href: PropTypes.string.isRequired,
};

export default LinkButton