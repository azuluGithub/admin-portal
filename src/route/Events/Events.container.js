import { PureComponent } from 'react';
import { connect } from 'react-redux';

import { events } from './Events.config';
import EventsComponent from './Events.component';

const mapStateToProps = (state) => ({
    currentColor: state.themeColorReducer.currentColor,
});

const mapDispatchToProps = (dispatch) => ({});

class Events extends PureComponent {
    containerProps() {
        const { currentColor } = this.props;

        return {
            currentColor,
            events,
        }
    }

    renderComponent() {
        return (
            <EventsComponent
                { ...this.containerProps() }
            />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Events);