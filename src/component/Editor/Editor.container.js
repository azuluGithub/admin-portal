import { PureComponent } from 'react';
import { connect } from 'react-redux';

import EditorComponent from './Editor.component';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

class Editor extends PureComponent {

    containerProps() {}

    renderComponent() {
        return (
            <EditorComponent
                { ...this.containerProps() }
            />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);