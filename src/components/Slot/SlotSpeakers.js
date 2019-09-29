import React from 'react';
import Speaker, { SpeakerModal } from '../Speaker';

const SlotSpeakers = ({ slot }) => {
  console.log(slot);

  return (
    <SpeakerModal buttonText={slot.userIds}>
      <Speaker slot={slot} />
    </SpeakerModal>
  );
};

export default SlotSpeakers;
