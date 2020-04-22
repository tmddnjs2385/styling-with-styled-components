import React, {useState, useEffect}  from 'react';
import styled,{keyframes, css} from 'styled-components';
import Button from './Button.js';


const fadeIn = keyframes`

from{
    opacity: 0;
}

to{
    opacity: 1;
}
`;

const fadeOut = keyframes`

from{
    opacity: 1;
}

to{
    opacity: 0;
}
`;


const slideUp = keyframes`
from{
  transform: translateY(200px);
}
to{
  transform: translateY(0px);
}
`;

const slideDown = keyframes`
from{
  transform: translateY(0px);
}
to{
  transform: translateY(200px);
}
`;

const DarkBackground= styled.div `

 position: fixed;
 left: 0;
 top:  0;
 width: 100%;
 height: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 background: rgba(0,0,0,0.8);


animation-duration:0.25s;   
/* 얼마나 유지할지 */
animation-timing-function: ease-out;
/* 점점 느려지게 */
animation-name: ${fadeIn};

animation-fill-mode: forwards;
/* 애니메이션 끝나고 어떻게 할지 결정, forwards는 유지한다는 뜻이다*/


 h3{
     margin: 0;
     font-size: 1.5rem;
 }

 p{
     font-size: 1.125rem;
 }

${props=>props.disappear&&css`animation-name:${fadeOut};`}

`;

const ButtonGroup=styled.div`

margin-top: 3rem;
display: flex;
justify-content: flex-end;

`


const DialogBlock = styled.div`
 width: 320px;
 padding: 1.5rem;
background: white;
border-radius: 20px;


animation-duration: 0.25s;   
/* 얼마나 유지할지 */
animation-timing-function: ease-out;
/* 점점 느려지게 */
animation-name: ${slideUp};

animation-fill-mode: forwards;
${props=>props.disappear&&css`animation-name:${slideDown};`}
`;

const ShortMarginButton=styled(Button)`
   &+&{
       margin-left: 0.5rem;
   }

`;//상속받아서 덮어쓸수 있다.


const Dialog=({title, visible, children, confirmText, cancelText, onConfirm, onCancel,...rest})=>{


    const [animate, setAnimate]=useState(false);
    const [localVisible, setLocalVisible]=useState(visible);
    
    useEffect(()=>{


        if(localVisible && !visible){
            setAnimate(true);
            setTimeout(()=>setAnimate(false),250) //0.25초 뒤에 애니메이트 값을 false로 설정해주겠다. 

            
        }

        setLocalVisible(visible);
    },[localVisible, visible]);

    if(!localVisible&&!animate){
        return null;
    } 



   

    return (
        <DarkBackground disappear={!visible}>
            <DialogBlock disappear={!visible}>

                <h3>{title}</h3>
                <p>{children}</p>

                <ButtonGroup>

                    <Button color="gray" size='large' onClick={onCancel}>Cancel </Button>
                    <Button color="pink" size='large'  onClick={onConfirm}> OK </Button>

                </ButtonGroup>

            </DialogBlock>
        </DarkBackground>
    )
}

Dialog.defaultProps={

cancelText:  '취소',
confirmText: '확인'

}

export default Dialog;