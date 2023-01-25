import { PureComponent } from 'react';
import { connect } from 'react-redux';

import SectionContainerComponent from './SectionContainer.component';

const mapStateToProps = (state) => ({
    currentColor: state.themeColorReducer.currentColor,
});

const mapDispatchToProps = (dispatch) => ({});

class SectionContainer extends PureComponent {

    containerProps() {
        const { 
            children, 
            title,
            type,
            link,
            currentColor,
        } = this.props;

        return {
            children,
            title,
            type,
            link,
            currentColor,
        }
    }

    renderComponent() {
        return (
            <SectionContainerComponent
                { ...this.containerProps() }
            />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionContainer);