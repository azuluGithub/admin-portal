import { PureComponent } from 'react';

import UserCardComponent from './UserCard.component';

class UserCard extends PureComponent {

    containerProps() {
        const { 
            user,
            currentColor,
        } = this.props;

        return {
            user,
            currentColor,
        }
    }

    containerFunctions() {}

    renderUserCard() {
        return (
            <UserCardComponent
                { ...this.containerProps() }
            />
        );
    }

    render() {
        return this.renderUserCard();
    }
}

export default UserCard;