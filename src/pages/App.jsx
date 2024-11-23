import styled from 'styled-components'
//Components
import Target from '../components/organism/target'

const Main = styled.main`
  background-color: var(--blue1);
  width: 100vw;
  height: 100vh;
  text-aling: center;
  `

function App() {
  return (
    <Main>
      <Target/>
    </Main>
  )
}

export default App
