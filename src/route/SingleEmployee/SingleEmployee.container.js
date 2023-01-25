import { PureComponent } from 'react';
import { connect } from 'react-redux';

import SingleEmployeeComponent from './SingleEmployee.component';

const mapStateToProps = (state, ownProps) => {
    //ownProps.match.params.id
    return {

    }
};

const mapDispatchToProps = (dispatch) => ({});

class SingleEmployee extends PureComponent {

    containerProps() {}

    renderComponent() {
        //from fetch
        const employee = {
            _id: 'ifekikife',
            firstname: 'star',
            lastname: 'arnold',
            othernames: '',
            dateOfBirth: '01 January 1981',
            age: 42,
            gender: 'male',
            email: 'stararnold@star.com',
            phoneNumber: '+27 12 345 6789',
            nationality: 'Ghanian',
            address: {
                streetAddress: '211 hyena avenue',
                town: 'sophia town',
                province: 'limpopo',
                country: 'south africa',
                postalCode: '1974',
            },
            worksAs: 'Security guard',
            workDuration: '5 years',
            imgUrl: '/assets/portal/images/user2.png',
            campus: 'johannesburg',
            temporaryOrPermanent: 'Permanent',
            identityDocument: '/link to id OR passport',
        };

        return (
            <SingleEmployeeComponent
                { ...this.containerProps() }
                employee={employee}
            />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleEmployee);