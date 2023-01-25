import { PureComponent } from 'react';

import EventsCardComponent from './EventsCard.component';

class EventsCard extends PureComponent {

    containerProps() {
        const { event, currentColor, setEvent, setIsViewModalOpen } = this.props;

        return {
            event,
            setEvent,
            currentColor,
            setIsViewModalOpen,
        }
    }

    containerFunctions() {}

    renderEventsCard() {
        return (
            <EventsCardComponent
                { ...this.containerProps() }
            />
        );
    }

    render() {
        return this.renderEventsCard();
    }
}

export default EventsCard;