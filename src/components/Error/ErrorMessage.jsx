import PropTypes from "prop-types";

export function Error({ message }) {
      return message !== "" ? (
            <>
       <p>{message}</p>
       </>
      ) : null;
}
Error.propTypes = {
   message: PropTypes.string.isRequired
};