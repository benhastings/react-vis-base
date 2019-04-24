import React from 'react';
import PropTypes from 'prop-types';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

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
//   pc: 'Hello World',
//   env: 'Default env',
//   startTime: '2019-04-30 10:30',
//   endTime: '2019-04-30 12:30',
// };

class Results extends React.Component {
  static methodsAreOk() {
    return true;
  }

  componentDidMount() {
    performance.mark('Results_componentDidMount');
  }

  render() {
    const {
      match: {
        params: { pc, env, startTime, endTime },
      },
    } = this.props;
    // console.log('Results::match', match);
    return (
      <div>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="Home">
            Tab 1 - {pc} {env} {startTime} {endTime} \n\n
          </Tab>
          <Tab eventKey="profile" title="Profile">
            Tab 2 - {pc} {env} {startTime} {endTime}
          </Tab>
        </Tabs>
      </div>
    );
  }
}

Results.propTypes = propTypes;
// Results.defaultProps = defaultProps;

export default Results;
