import React from 'react';
import styled from 'styled-components/macro';

import { WEIGHTS } from '../../constants';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <Title>Running</Title>
          <Select
            label="Sort"
            value={sortId}
            onChange={(ev) => setSortId(ev.target.value)}
          >
            <option value="newest">Newest Releases</option>
            <option value="price">Price</option>
          </Select>
        </Header>
        <Spacer size={34} />
        {/* <ShoeGrid /> */}
      </MainColumn>

      <LeftColumn>
        <Breadcrumbs>
          <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale/shoes">
            Shoes
          </Breadcrumbs.Crumb>
        </Breadcrumbs>
        <Spacer size={42} />
        <ShoeSidebar />
      </LeftColumn>


    </Wrapper>
  );
};

// Switched MainColumn and LeftColumn, leftcolumn renders first. --> WRONG - usability issues, you want to go to maincolumn first.. because you're on Running page, you want to navigate to the shoes first..
// LeftColumn position: sticky and top:0; margin-right

const Wrapper = styled.div`

  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;
  
  // display: flex;
  // padding-top: 14px;
  // overflow: auto;
  // height: 100vh;
  // flex-direction: row-reverse;
  // align-items: baseline; // baseline is smart enough to know what we want to do. even though they're 2 different elements, it will pick up.
  `;

const LeftColumn = styled.div`

  flex-basis: 248px;
  
  // margin-right: 32px;
  // position: sticky;
  // top:0;
  // min-width: 248px;
  `;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  // display: flex;
  // position: sticky;
  // top: 0;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};

  margin-right: auto;
`;

export default ShoeIndex;
