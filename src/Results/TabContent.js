import React from 'react';
import PropTypes from 'prop-types';

import Card from 'react-bootstrap/Card';

const propTypes = {
  name: PropTypes.string.isRequired,
  //   match: PropTypes.shape({
  //     url: PropTypes.string.isRequired,
  //     path: PropTypes.string.isRequired,
  //     params: PropTypes.shape({
  //       pc: PropTypes.string.isRequired,
  //       env: PropTypes.string.isRequired,
  //       startTime: PropTypes.string.isRequired,
  //       endTime: PropTypes.string,
  //     }),
  //   }).isRequired,
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
  }

  render() {
    const { name } = this.props;
    // console.log('Results::match', match);
    return (
      <Card>
        <Card.Title>
          <h2>{name}</h2>
        </Card.Title>
        <Card.Body>{name}</Card.Body>
      </Card>
    );
  }
}

TabContent.propTypes = propTypes;
// TabContent.defaultProps = defaultProps;

export default TabContent;
