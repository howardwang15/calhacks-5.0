import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

export default class CustomButton extends React.Component {
    render() {
        const { onClick, color } = this.props;
        return (
            <Button color={color} onClick={onClick} />
        );
    }
}

CustomButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    color: PropTypes.string.isRequired,
};
