import React from 'react';
import PropTypes from 'prop-types';
import EntriesSlot from './EntriesSlot';
import OtherSlot from './OtherSlot';
import NewSlot from './NewSlot';

const Slot = ({ slot, date, ...rest }) => {
  if (!slot) {
    return null;
  } /*else if (collection.type === 'talk') {
    return <EntriesSlot collection={collection} date={date} {...rest} />;
  }
  return <OtherSlot collection={collection} date={date} {...rest} />;*/

  return <NewSlot slot={slot} {...rest} />;
};

Slot.propTypes = {
  slot: PropTypes.object,
  onFavoriteRemove: PropTypes.func,
};

export default Slot;
