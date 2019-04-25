import React from 'react';
import { MainState } from './types';
import { MainHeader, HeaderTitle, MainContainer } from './styled';

import Table from 'src/components/Table';
import Slider from 'src/components/Slider';

class Main extends React.Component<{}, MainState> {
  public readonly state = {
  };

  public render = () => {
    return(
      <MainContainer>
        <MainHeader>
          <HeaderTitle 
            component='h2' 
            variant='h2'
          >
            Workout Finances
          </HeaderTitle>
        </MainHeader>

        <Slider />

        <Table />
      </MainContainer>
    );
  }
}

export default Main;
