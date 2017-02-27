/**
 * Created by Samuel on 2/14/2017.
 */
import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

import LoadingDots from './LoadingDots';


const Header = ({loading}) => {
  return (
    <nav>

      <IndexLink to="/" activeClassName="active">Home </IndexLink>
      {" | "}
      <Link to="/about" activeClassName="active">ABout</Link>
      {" | "}
      <Link to="/courses" activeClassName="active">Courses</Link>
      {loading && <LoadingDots interval={100} dots={20}/>}
    </nav>

  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
