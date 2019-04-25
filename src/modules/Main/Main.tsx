import React from 'react';
import { MainState } from './types';
import { MainHeader, HeaderTitle } from './styled';

import Table from 'src/components/Table';

class Main extends React.Component<{}, MainState> {
  public readonly state = {
  };

  public render = () => {
    return(
      <div>
        <MainHeader>
          <HeaderTitle 
            component='h2' 
            variant='h2'
          >
            Workout Finances
          </HeaderTitle>
        </MainHeader>

        <Table />
      </div>
    );
  }
}

export default Main;
