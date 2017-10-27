import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

export default class MovieList extends Component {
  state = {
    selected: [1],
  };

  isSelected = (index) => {
    return this.state.selected.indexOf(index) !== -1;
  };

  handleRowSelection = (selectedRows) => {
    this.setState({
      selected: selectedRows,
    });
  };

  render() {
    const { movieList } = this.props;
    return (
      <Table onRowSelection={this.handleRowSelection}>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Description</TableHeaderColumn>
            <TableHeaderColumn>Cast</TableHeaderColumn>
            <TableHeaderColumn>Duration</TableHeaderColumn>
            <TableHeaderColumn>URL</TableHeaderColumn>
            <TableHeaderColumn>IMDB Rating</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {movieList.map((movie) => {
              return (
                <TableRow key={movie.id}selected={this.isSelected(0)}>
                  <TableRowColumn>{movie.id}</TableRowColumn>
                  <TableRowColumn>{movie.name}</TableRowColumn>
                  <TableRowColumn>{movie.description}</TableRowColumn>
                  <TableRowColumn>{movie.cast}</TableRowColumn>
                  <TableRowColumn>{movie.duration}</TableRowColumn>
                  <TableRowColumn>{movie.url}</TableRowColumn>
                  <TableRowColumn>{`${movie.imdbrating}/10`}</TableRowColumn>
                </TableRow>
              )
            })
          }
        </TableBody>
      </Table>
    );
  }
}
