import { PureComponent } from 'react';

import SearchComponent from './Search.component';

class Search extends PureComponent {

    containerProps() {
        const { setSearch } = this.props;

        return { setSearch };
    }

    renderComponent() {
        return (
            <SearchComponent
                { ...this.containerProps() }
            />
        );
    }

    render() {
        return this.renderComponent();
    }
}

export default Search;