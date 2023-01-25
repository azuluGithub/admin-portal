import { PureComponent } from 'react';
import { connect } from 'react-redux';

import NewsComponent from './News.component';
import { news } from './News.config';

const mapStateToProps = (state) => ({
    currentColor: state.themeColorReducer.currentColor,
});

const mapDispatchToProps = (dispatch) => ({});

class News extends PureComponent {

    containerProps() {
        const { currentColor } = this.props;

        return {
            news,
            currentColor,
        }
    }

    renderComponent() {
        return (
            <NewsComponent
                { ...this.containerProps() }
            />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(News);