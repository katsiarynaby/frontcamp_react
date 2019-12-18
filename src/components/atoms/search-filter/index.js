import React, { PureComponent } from 'react';

import SearchButton from '../search-button';

import './search-filter.scss';

const blockName = 'search-filter';

export default class SearchFilter extends PureComponent {
  state = {
    activeFilter: this.props.activeFilter,
  };

  changeActiveFilter(filter) {
    const { getActiveFilter } = this.props;

    this.setState({ activeFilter: filter.key },
      () => getActiveFilter(this.state.activeFilter));
  }

  renderFilters = filters => {
    const { activeFilter } = this.state;

    return filters.map(filter => (
      <SearchButton
        key={filter.key}
        onClick={() => this.changeActiveFilter(filter)}
        value={filter.name}
        active={filter.key === activeFilter}
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
