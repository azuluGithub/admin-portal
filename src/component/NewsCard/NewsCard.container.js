import { PureComponent } from 'react';

import NewsCardComponent from './NewsCard.component';

class NewsCard extends PureComponent {

    containerProps() {
        const { news, currentColor } = this.props;

        return {
            news,
            currentColor,
        }
    }

    containerFunctions() {}

    renderNewsCard() {
        return (
            <NewsCardComponent
                { ...this.containerProps() }
            />
        );
    }

    render() {
        return this.renderNewsCard();
    }
}

export default NewsCard;