import React, { PureComponent } from 'react';

import SearchButton from '../search-button';

import './search-filter.scss';

const blockName = 'search-filter';

export default class SearchFilter extends PureComponent {
    state = {
      activeFilter: this.props.activeFilter,
    };

    changeActiveFilter = e => {
      const { value } = e.target;
      const { getActiveFilter } = this.props;

      this.setState({ activeFilter: value });
      getActiveFilter(this.state.activeFilter);
    }

    renderFilters = filters => {
      const { activeFilter } = this.state;

      return filters.map(filter => (
        <SearchButton
          onClick={this.changeActiveFilter}
          value={filter}
          active={filter === activeFilter}
        />
      ));
    };

    render() {
      const { title, filters } = this.props;

      return (
        <div className={blockName}>
          <span className={`${blockName}__title`}>
            {title}
          </span>
          <div className={`${blockName}__filters`}>
            {filters && this.renderFilters(filters)}
          </div>
        </div>
      );
    }
}
