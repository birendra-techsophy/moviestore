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
import ActionCreate from 'material-ui/svg-icons/content/create';
import { red700, blue500 } from 'material-ui/styles/colors';

import './MovieList.scss';

const MovieList = ({movieList, deleteMovie}) => {
  return (
    <Table
      fixedHeader={true}
      fixedFooter={true}
      height={'300px'}
      onCellClick={(rowNumber, colNumber) => deleteMovie(rowNumber, colNumber)}>
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
                <TableRowColumn>{<ActionCreate color={blue500} />}</TableRowColumn>
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
