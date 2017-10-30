import React from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

const styles = {
  paginationContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: '.5em',
    fontSize: '.75em'
  },
  paginationSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paginationText: {
    margin: '0 1.25em'
  },
  paginationSelect: {
    width: 75,
    fontSize: '1em'
  },
  navigationLeft: {
    marginRight: '.5em',
    cursor: 'pointer'
  },
  navigationLeftFirstPage: {
    marginRight: '.5em',
    color: 'rgba(0,0,0,0.26)'
  },
  navigationRight: {
    margin: '0 .5em',
    cursor: 'pointer'
  },
  navigationRightLastPage: {
    margin: '0 .5em',
    color: 'rgba(0,0,0,0.26)'
  }
};

class Pagination extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  selectRowsPerPage = () => {
    const updatedState =  Object.assign({}, this.props.gridPageConfig);
    updatedState.numberOfRows = parseInt(event.target.innerText);
    if( updatedState.numberOfRows * this.props.page > this.props.total ) {
      let updatedPage = Math.ceil(this.props.total / updatedState.numberOfRows);
      updatedState.page = updatedPage;
      this.props.updateRows(updatedState);
    } else {
      console.log('----updatedState--', updatedState);
      this.props.updateRows(updatedState);
    }
  }

  selectPageNumber = (event) => {
    const updatedState =  Object.assign({}, this.props.gridPageConfig);
    updatedState.page = parseInt(event.target.innerText);
    this.props.updateRows(updatedState);
  }

  numberOfPages = () => {
    const { page, total, numberOfRows, rowsPerPage} = this.props.gridPageConfig;
    let numArray = [];
    for(let i = 0; i < Math.ceil(total/numberOfRows); i++){
      numArray.push(i+1);
    }

    return numArray.map((pageValue, index) => {
      return (
        <MenuItem key={index} value={pageValue} primaryText={pageValue}/>
      );
    });
  }

  incrementPage = () => {
    let updatedState = Object.assign({}, this.props.gridPageConfig);
    updatedState.page++;
    this.props.updateRows(updatedState);
  }

  decrementPage = () => {
    let updatedState = Object.assign({}, this.props.gridPageConfig);
    updatedState.page--;
    this.props.updateRows(updatedState);
  }

  renderRowsPerPage = () => {
    const { rowsPerPage } = this.props.gridPageConfig;
    return rowsPerPage.map((rowValue, index) => {
      return (
        <MenuItem key={index} value={rowValue} primaryText={rowValue}/>
      );
    });
  }

  renderRowRange = () => {
    const { page, total, numberOfRows, rowsPerPage} = this.props.gridPageConfig;
    return (
      <span>
        {numberOfRows * page - numberOfRows + 1} - {numberOfRows * page < total ? numberOfRows * page : total}
      </span>
    );
  }

  render() {
    const { page, total, numberOfRows, rowsPerPage} = this.props.gridPageConfig;
    console.log('---gridPageConfig--', this.props.gridPageConfig);
    return (
      <div style={styles.paginationContainer}>
        <div style={styles.paginationSection}>
          <div style={styles.paginationText}>
          Page:
          </div>
          <SelectField
            style={styles.paginationSelect}
            value={page}
            onChange={(event) => this.selectPageNumber(event)}>
            {total === 1 ? null : this.numberOfPages()}
          </SelectField>
        </div>
        <div style={styles.paginationSection}>
          <div style={styles.paginationText}>
            Rows Per Page:
          </div>
          <SelectField
            style={styles.paginationSelect}
            value={numberOfRows}
            onChange={this.selectRowsPerPage}>
            {this.renderRowsPerPage()}
          </SelectField>
        </div>

        <div style={styles.paginationSection}>
          <div style={styles.paginationText}>
            {this.renderRowRange()}  of {total}
          </div>
        </div>
        <div style={styles.paginationSection}>
          <IconButton
            iconStyle={page <= 1 ?  styles.navigationLeftFirstPage : styles.navigationLeft}
            name={"navigationLeft"}
            disabled={page <= 1}
            onClick={this.decrementPage}>
            <ChevronLeft />
          </IconButton>
          <IconButton
            iconStyle={page >= total / numberOfRows ? styles.navigationRightLastPage: styles.navigationRight}
            name={"navigationRight"}
            disabled={page >= total / numberOfRows}
            onClick={this.incrementPage}>
            <ChevronRight />
          </IconButton>
        </div>
      </div>
    );
  }
}

Pagination.defaultProps = {
  gridPageConfig: {
    total: 0,
    page: 1,
    rowsPerPage: [10, 20, 30],
    numberOfRows: 10
  }
};

Pagination.propTypes = {
  gridPageConfig: PropTypes.object,
  updateRows: PropTypes.func
};

export default Pagination;
