import { PureComponent } from 'react';
import { connect } from 'react-redux';

import ButtonComponent from './Button.component';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

class Button extends PureComponent {

    containerProps() {
        const {
            icon,
            color,
            bgColor,
            text,
            borderRadius,
            size,
            width,
        } = this.props;

        return {
            icon,
            color,
            bgColor,
            text,
            borderRadius, 
            size,
            width,
        };
    }

    renderComponent() {
        return (
            <ButtonComponent
                { ...this.containerProps() }
            />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Button);