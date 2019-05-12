import IconButton from '@material-ui/core/IconButton';
import React, { memo } from 'react';
import { SliderProps } from './types';
import { SliderContainer, DateTitle } from './styled';
import ArrowLeftRounded  from '@material-ui/icons/ArrowLeftRounded';
import ArrowRightRounded  from '@material-ui/icons/ArrowRightRounded';

const Slider: React.FC<SliderProps> = ({ date }) => {
  const month = date && date.getMonth();

  return(
    <SliderContainer>
      <IconButton>
        <ArrowLeftRounded />
      </IconButton>

      <DateTitle>
        {date ? `1 половина ${month}` : '1 половина'}
      </DateTitle>

      <IconButton>
        <ArrowRightRounded />
      </IconButton>
    </SliderContainer>
  );
};

export default memo(Slider);
