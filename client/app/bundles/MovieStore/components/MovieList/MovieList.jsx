import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import { red700 } from 'material-ui/styles/colors';

import './MovieList.scss';

const MovieList = ({movieList, deleteMovie}) => {
  return (
    <Table onCellClick={(rowNumber, colNumber) => deleteMovie(rowNumber, colNumber)}>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow>
          <TableHeaderColumn>ID</TableHeaderColumn>
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>Description</TableHeaderColumn>
          <TableHeaderColumn>Cast</TableHeaderColumn>
          <TableHeaderColumn>Duration</TableHeaderColumn>
          <TableHeaderColumn>URL</TableHeaderColumn>
          <TableHeaderColumn>IMDB Rating</TableHeaderColumn>
          <TableHeaderColumn />
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {movieList.map((movie) => {
            return (
              <TableRow key={movie.id}>
                <TableRowColumn>{movie.id}</TableRowColumn>
                <TableRowColumn>{movie.name}</TableRowColumn>
                <TableRowColumn>{movie.description}</TableRowColumn>
                <TableRowColumn>{movie.cast}</TableRowColumn>
                <TableRowColumn>{movie.duration}</TableRowColumn>
                <TableRowColumn>{movie.url}</TableRowColumn>
                <TableRowColumn>{`${movie.imdbrating}/10`}</TableRowColumn>
                <TableRowColumn>{<ActionDelete color={red700} />}</TableRowColumn>
              </TableRow>
            )
          })
        }
      </TableBody>
    </Table>
  );
}

export default MovieList;
