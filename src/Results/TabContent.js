import React from 'react';
import PropTypes from 'prop-types';

import Card from 'react-bootstrap/Card';

import ResultsTable from './ResultsTable';

const propTypes = {
  title: PropTypes.string.isRequired,
  timeStamps: PropTypes.arrayOf(PropTypes.instanceOf(Date)).isRequired,
  pageMetrics: PropTypes.shape({
    name: PropTypes.string.isRequired,
    p50: PropTypes.arrayOf(
      PropTypes.shape({
        x: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
        y: PropTypes.arrayOf(PropTypes.number),
        mode: PropTypes.string,
        name: PropTypes.string,
        line: PropTypes.shape({
          width: PropTypes.number,
        }),
      })
    ),
    p95: PropTypes.arrayOf(
      PropTypes.shape({
        x: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
        y: PropTypes.arrayOf(PropTypes.number),
        mode: PropTypes.string,
        name: PropTypes.string,
        line: PropTypes.shape({
          width: PropTypes.number,
        }),
      })
    ),
    table: PropTypes.arrayOf(
      PropTypes.shape({
        n: PropTypes.string,
        v: PropTypes.arrayOf(PropTypes.number),
      })
    ),
  }).isRequired,
};

// const defaultProps = {
//   pc: 'Hello World',
//   env: 'Default env',
//   startTime: '2019-04-30 10:30',
//   endTime: '2019-04-30 12:30',
// };

class TabContent extends React.Component {
  static methodsAreOk() {
    return true;
  }

  componentDidMount() {
    performance.mark('TabContent_componentDidMount');
    console.log('TabContent::props', this.props);
  }

  render() {
    const { title, timeStamps, pageMetrics } = this.props;
    // console.log('Results::match', match);
    const ts = timeStamps[0].toISOString();
    return (
      <Card>
        <Card.Body>
          <Card.Title>
            <h2>{title}</h2>
          </Card.Title>
          {title} {ts}
          <ResultsTable tableMetrics={pageMetrics.table} />
        </Card.Body>
      </Card>
    );
  }
}

TabContent.propTypes = propTypes;
// TabContent.defaultProps = defaultProps;

export default TabContent;
