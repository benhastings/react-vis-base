import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import TabContent from './TabContent';

const propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    params: PropTypes.shape({
      pc: PropTypes.string.isRequired,
      env: PropTypes.string.isRequired,
      startTime: PropTypes.string.isRequired,
      endTime: PropTypes.string,
    }),
  }).isRequired,
};

// const defaultProps = {
//   endTime: new Date(Date.now()).toISOString(),
// };

class Results extends React.Component {
  static methodsAreOk() {
    return true;
  }

  constructor(props) {
    super(props);
    this.state = {
      timeStamps: [],
      ready: false,
      chartData: [],
      pages: [],
    };
  }

  componentDidMount() {
    performance.mark('Results_componentDidMount');
    const {
      match: {
        params: { pc, env, startTime, endTime },
      },
    } = this.props;
    const endDT = Number.isInteger(endTime) ? endTime : new Date(endTime).getTime();
    const startDT = Number.isInteger(startTime) ? startTime : new Date(startTime).getTime();
    const localID = `${pc}_${env}_${startDT}`;
    const resultsURL = ``;

    // Fetch results data -------------------------
    axios.get(resultsURL).then(res => {
      performance.mark('resultsReturned');
      const results = res.data[0];
      const resTimeStamps = results.timeStamps.map(t => new Date(t * 1000));
      this.setState({ timeStamps: resTimeStamps });
      this.populateOutputData(results.metrics);
      performance.mark('resultsProcessed');
      this.setState({ ready: true });
    });
  }

  // ==================================================
  //  Data Processing Function
  populateOutputData(data) {
    const { timeStamps, chartData, pages } = this.state;
    // console.log('Results.js::populateOutputData::data', data);
    data.forEach(d => {
      const localChartData = {
        name: d.name,
        p50: [],
        p95: [],
        table: d.metrics.table,
      };
      d.metrics.chart.forEach(m => {
        localChartData.p50.push({
          x: timeStamps,
          y: m.v.map(va => va[0]),
          mode: 'lines',
          line: { width: 1.1 },
          name: m.n,
        });
        localChartData.p95.push({
          x: timeStamps,
          y: m.v.map(va => va[1]),
          mode: 'lines',
          line: { width: 1.1 },
          name: m.n,
        });
      });
      chartData.push(localChartData);
      pages.push(d.name);
    });
    this.setState({ ready: true });
    performance.mark('populateOutputData_complete');
  }

  render() {
    // const {
    //   match: {
    //     params: { pc, env, startTime, endTime },
    //   },
    // } = this.props;

    const { timeStamps, ready, chartData } = this.state;

    if (!ready) {
      return <h2>Loading...</h2>;
    }
    return (
      <Tabs mountOnEnter unmountOnExit={false}>
        {chartData.map(m => (
          <Tab eventKey={m.name} title={m.name} key={m.name}>
            <TabContent title={m.name} pageMetrics={m} timeStamps={timeStamps} />
          </Tab>
        ))}
      </Tabs>
    );
  }
}

Results.propTypes = propTypes;
// Results.defaultProps = defaultProps;

export default Results;
