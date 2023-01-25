import { PureComponent } from 'react';
import { connect } from 'react-redux';

import NewsCreateComponent from './NewsCreate.component';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

class NewsCreate extends PureComponent {

    containerProps() {}

    renderComponent() {
        return (
            <NewsCreateComponent
                { ...this.containerProps() }
            />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsCreate);