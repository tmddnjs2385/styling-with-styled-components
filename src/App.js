import React,{useState} from 'react';
import styled, {ThemeProvider} from 'styled-components';
import Button from './components/Button.js';
import Dialog from './components/Dialog.js';

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


  const [dialog, setDialog]=useState(false);

  const onClick=()=>{
    setDialog(true);
  }

  const onConfirm=()=>{
    setDialog(false);
  }

  const onCancel=()=>{
    setDialog(false);
  }


  return (
    <ThemeProvider theme={{palette}}>
      <>
    <AppBlock>
       <Button color='pink' size='large'onClick={onClick}>Delete</Button>
       <Button color='blue' size='medium'>Button</Button>
       <Button color='gray' size='small'>Button</Button>
    </AppBlock>
    <Dialog title='delete' confirmText="확인" cancelText='취소' visible={dialog} onConfirm={onConfirm} onCancel={onCancel}>
        do u want to delete your Button?? Really?
        data will go away....
    </Dialog>
    </>
    </ThemeProvider>
    
  );
}

export default App;
