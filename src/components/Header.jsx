import PropTypes from 'prop-types';
import Button from './Button';
const Header = ({ title = 'Task Tracker', onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        onClick={onAdd}
        color={showAdd ? 'red' : 'green'}
        text={showAdd ? 'X' : 'Add'}
      />
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
