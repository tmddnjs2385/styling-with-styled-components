import React from 'react'
import styled,{css} from 'styled-components'
import {darken, lighten} from 'polished'

const StyledButton=styled.button`
/*  common style*/
display: inline-flex;
outline: none;
border: none;
border-radius: 4px;
color: white;
font-weight: bold;
cursor: pointer;
padding-left: 1rem;
padding-right: 1rem;

/* size */

${props=>

    props.size==='large' && css`
    height: 3rem;
    font-size: 1.25rem;
    `
}

${props=>

props.size==='medium' && css`
height: 2rem;
font-size: 1rem;
`
}

${props=>

props.size==='small' && css`
height: 1rem;
font-size: 0.87rem;
`
}

 ${ props=>{
        const color=props.theme.palette[props.color];
        return css`
        background: ${color};

        &:hover{
            background: ${lighten(0.1, color)};
        }

        &:active{
            background: ${darken(0.1, color)};
        }
        `;
    }
    
};

&+&{
    margin-left: 1rem;
}

`;


const Button=({children, color, size, ...rest})=>{



    return(
  
       <StyledButton color={color} size={size} {...rest}>{children}</StyledButton>

    )
}

Button.defaultProps={
    color: 'blue',
    height: '10rem'

};


export default Button;