
import styled from 'styled-components';
import Root from './Root'
import { RecoilRoot } from 'recoil';

function App() {

  return (
    <StyledApp>
      <RecoilRoot>
        <Root />
      </RecoilRoot>
    </StyledApp>
    
  )
}

const StyledApp = styled.div`
  height: 100vh;
  width: 100vw;
`
export default App
