import './App.css';
import styled from 'styled-components'

function App() {
  return (
    <AppLayout className="App"></AppLayout>
  );
}

const AppLayout = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: black;
height: 100vh;
overflow: hidden;
`;


export default App;
