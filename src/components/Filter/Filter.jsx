import PropTypes from 'prop-types';

export const Filter = ({ filter, handleFilter }) => {
  return (
    <label>
      <input type="text" value={filter} onChange={handleFilter} />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};
