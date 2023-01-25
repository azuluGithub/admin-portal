import { PureComponent } from 'react';
import { connect } from 'react-redux';

import StudentUpdateComponent from './StudentUpdate.component';

const mapStateToProps = (state) => ({
    currentColor: state.themeColorReducer.currentColor,
});

const mapDispatchToProps = (dispatch) => ({})

class StudentUpdate extends PureComponent {

    state = {
        categories: [],
    }

    setCategories() {
        this.setState({
            categories: [
                {
                    _id: 'fdifdfij',
                    name: 'sports',
                },
                {
                    _id: 'fdifdffdfij',
                    name: 'arts and culture',
                },
                {
                    _id: 'fdggggifdffdfij',
                    name: 'politics',
                },
                {
                    _id: 'fdfgfij',
                    name: 'drama',
                },
                {
                    _id: 'fdgytrdcvgf',
                    name: 'law and order',
                },
                {
                    _id: 'fiuhbnjhj',
                    name: 'finance',
                },
            ]
        });
    }

    componentDidMount() {
        this.setCategories();
    }

    containerProps() {
        const { student, currentColor } = this.props;
        const { categories } = this.state;

        return {
            student,
            categories,
            currentColor,
        }
    }

    renderComponent() {
        return (
            <StudentUpdateComponent
                { ...this.containerProps() }
            />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (StudentUpdate);