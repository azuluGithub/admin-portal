import { PureComponent } from 'react';
import { connect } from 'react-redux';

import { news } from './SingleNews.config';
import SingleNewsComponent from './SingleNews.component';

const mapStateToProps = (state) => ({
    currentColor: state.themeColorReducer.currentColor,
});

const mapDispatchToProps = (dispatch) => ({});

class SingleNews extends PureComponent {

    containerProps() {
        const { currentColor } = this.props;
        
        return {
            currentColor,
            news,
        }
    }

    renderComponent() {
        return (
            <SingleNewsComponent
                { ...this.containerProps() }
            />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleNews);