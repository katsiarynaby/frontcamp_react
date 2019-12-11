import React, { PureComponent } from 'React';

import './search-field.scss';
const blockName = 'search-field';

export default class SearchField extends PureComponent {

    static defaultProps = {
        placeholder: 'SEARCH',
        value: '',
    };

    state = {
        value: this.props.value
    }

    onChange = (e) => {
        const { getValue } = this.props;
        const { value } = e.target;

        this.setState({ value: value });
        getValue(this.state.value);
    }


    render() {
        return (
            <input
                type={'search'}
                className={blockName}
                onChange={this.onChange}
                placeholder={this.props.placeholder}
            />
        )
    }
}