import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import Button from './components/Button.js'
// const Circle= styled.div`
// width: 5rem;
// height: 5rem;
// background: ${props=>props.color||'black'};
// border-radius:50%;

// ${
//   props=>
//   props.huge &&
//   css`
//   width: 10rem; 
//   height: 10rem ;
//   `
// }
// `;

const palette={
  blue: '#228be6',
  gray: '#496057',
  pink: '#f06595'
}


const AppBlock=styled.div`

width: 512px;
margin: 0 auto;
margin-top: 4rem;
border: 1px solid black;
padding: 1rem;

`


function App() {
  return (
    <ThemeProvider theme={{palette}}>
    <AppBlock>
       <Button color='pink'>Button</Button>
       <Button color='blue'>Button</Button>
       <Button color='gray'>Button</Button>
    </AppBlock>
    </ThemeProvider>
    
  );
}

export default App;
