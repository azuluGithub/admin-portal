import { PureComponent } from 'react';
import { connect } from 'react-redux';

import StudentCreateComponent from './StudentCreate.component';

const mapStateToProps = (state) => ({
    currentColor: state.themeColorReducer.currentColor,
});

const mapDispatchToProps = (dispatch) => ({})

class StudentCreate extends PureComponent {

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
        const { currentColor } = this.props;
        const { categories } = this.state;

        return {
            categories,
            currentColor,
        }
    }

    renderComponent() {
        return (
            <StudentCreateComponent
                { ...this.containerProps() }
            />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (StudentCreate);