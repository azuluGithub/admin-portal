import PropTypes from 'prop-types';

export const PopupType = PropTypes.shape({
    item: PropTypes.object,
    type: PropTypes.string,
    message: PropTypes.string,
});