import PropTypes from 'prop-types';
import Button from './Button';
import { useLocation } from 'react-router-dom';
const Header = ({ title = 'Task Tracker', onAdd, showAdd }) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === '/' && (
        <Button
          onClick={onAdd}
          color={showAdd ? 'red' : 'green'}
          text={showAdd ? 'X' : 'Add'}
        />
      )}
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
