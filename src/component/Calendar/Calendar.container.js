import { PureComponent } from 'react';
import { connect } from 'react-redux';

import CalendarComponent from './Calendar.component';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

class Calendar extends PureComponent {

    containerProps() {}

    renderComponent() {
        return (
            <CalendarComponent
                { ...this.containerProps() }
            />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);