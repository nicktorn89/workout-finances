import IconButton from '@material-ui/core/IconButton';
import React, { memo } from 'react';
import { SliderProps } from './types';
import { SliderContainer, DateTitle } from './styled';
import ArrowLeftRounded  from '@material-ui/icons/ArrowLeftRounded';
import ArrowRightRounded  from '@material-ui/icons/ArrowRightRounded';

const Slider: React.FC<SliderProps> = ({}) => {
  return(
    <SliderContainer>
      <IconButton>
        <ArrowLeftRounded />
      </IconButton>

      <DateTitle>
        1 половина марта
      </DateTitle>

      <IconButton>
        <ArrowRightRounded />
      </IconButton>
    </SliderContainer>
  );
};

export default memo(Slider);
