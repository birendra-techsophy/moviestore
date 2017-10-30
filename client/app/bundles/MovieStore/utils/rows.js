const rows = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

class RowApi {
  static getRows(tableState, record) {
    return new Promise((resolve, reject) => {

      setTimeout(() => {
        const updatedState = Object.assign({}, tableState);
        let searchRange = record.slice(updatedState.numberOfRows * updatedState.page - updatedState.numberOfRows, updatedState.numberOfRows * updatedState.page);
        updatedState.record = searchRange;
        updatedState.total = record.length;
        updatedState.numberOfRows = updatedState.numberOfRows;
        resolve(updatedState);
      }, 1000 );

    });
  }
}

export default RowApi;
