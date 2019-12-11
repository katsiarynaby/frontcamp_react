import React, { Component } from 'React';
import SearchField from '../../atoms/search-field';
import SearchButton from '../../atoms/search-button';
import SearchFilter from '../../atoms/search-filter';
import Logo from '../../atoms/logo';

import { HEADER, SEARCH, SEARCH_BY_TITLE, SERACH_BY_FILTERS, SORT_BY_TITLE, SORT_BY_FILTERS} from './constants';

import './search-panel.scss';

const blockName = 'search-panel';

export default class SearchPanel extends Component {
    state = {
      searchField: '',
      searchBy: SERACH_BY_FILTERS[0],
      sortBy: SORT_BY_FILTERS[0],
    };

    getSearchFild = value => {
      this.setState({
        searchField: value,
      });
    };

    getSearchParams = () => {
      const { getSearchParams } = this.props;
      getSearchParams(this.state);
    };

    getSearchBy = filter => {
      this.setState({
        searchBy: filter,
      });
    };

    getSortBy = filter => {
      this.setState({
        sortBy: filter,
      });
    };

    render() {
      const { searchBy, sortBy } = this.state;

      return (
        <div className={blockName}>
          <Logo
          className={`${blockName}__logo`} />
          <h2 className={`${blockName}__title`}>
            {HEADER}
          </h2>
          <div className={`${blockName}__search`}>
            <SearchField
              getValue={this.getSearchFild}
            />
            <SearchButton
              active
              value={SEARCH}
              onClick={this.getSearchParams}
            />
          </div>
          <div className={`${blockName}__first-filter`}>
            <SearchFilter
              title={SEARCH_BY_TITLE}
              filters={SERACH_BY_FILTERS}
              getActiveFilter={this.getSearchBy}
              activeFilter={searchBy}
            />
          </div>
          <div className={`${blockName}__second-filter`}>
            <SearchFilter
              title={SORT_BY_TITLE}
              filters={SORT_BY_FILTERS}
              getActiveFilter={this.getSortBy}
              activeFilter={sortBy}
            />
          </div>
        </div>
      );
    }
}
