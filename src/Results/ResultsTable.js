//  React Core Imports
import React from 'react';
import PropTypes from 'prop-types';

// Local Application Imports
import Table from 'react-bootstrap/Table';

// Input PropertyType Definition
const propTypes = {
  tableMetrics: PropTypes.arrayOf(
    PropTypes.shape({
      n: PropTypes.string,
      v: PropTypes.arrayOf(PropTypes.number),
    })
  ).isRequired,
};

// Default PropertyType Initialization
//  - only necessary if propTypes aren't required input
// const defaultProps = {
//   pc: 'Hello World',
//   env: 'Default env',
//   startTime: '2019-04-30 10:30',
//   endTime: '2019-04-30 12:30',
// };

//  Component Class Definition
class ResultsTable extends React.Component {
  static methodsAreOk() {
    return true;
  }

  // Component Initialization Functionality
  componentDidMount() {
    performance.mark('ResultsTable_componentDidMount');
  }

  //  Component Rendering definition
  render() {
    const { tableMetrics } = this.props;
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Metric</th>
            <th>Median(ms)</th>
            <th>p95(ms)</th>
            <th>p99(ms)</th>
          </tr>
        </thead>
        <tbody>
          {tableMetrics.map(t => {
            return (
              <tr key={t.n}>
                <td>{t.n}</td>
                <td>{t.v[0]}</td>
                <td>{t.v[1]}</td>
                <td>{t.v[2]}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}

// Adding propTypes & defaultProps to class before exporting below
ResultsTable.propTypes = propTypes;
// ResultsTable.defaultProps = defaultProps;

export default ResultsTable;
