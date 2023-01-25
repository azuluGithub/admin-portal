import { PureComponent } from 'react';

import NewsProfileComponent from './NewsProfile.component';

class NewsProfile extends PureComponent {
    containerProps() {
        const { 
            news, 
            currentColor 
        } = this.props;

        return {
            news,
            currentColor,
        }
    }

    containerFunctions() {}

    renderNewsProfile() {
        return (
            <NewsProfileComponent
                { ...this.containerProps() }
            />
        );
    }

    render() {
        return this.renderNewsProfile();
    }
}

export default NewsProfile;
