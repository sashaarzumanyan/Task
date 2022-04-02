import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { setRating } from '../redux/action';

const HeaderDiv = styled.div({
    display: "flex",
    justifyContent: 'flex-end',
});
const List = styled.ul({
    position: 'absolute',
    display: 'flex',
    left: '1221px',
    top: '90px',
    margin: '0',

})
const ListItem = styled.li`
    padding-left: 48px;
    height: 29px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #CBB1A2;
    list-style: none;
    cursor: pointer;
    
    :hover & {
        color: #6749A5;
      }
`;
const Text = styled.p({
    position: 'absolute',
    width: '191px',
    height: '59px',
    left: '259px',
    top: '64px',
    margin: '0',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '48px',
    lineHeight: '59px',
})
const category = ['Popular','Favorite', 'New']

const Header = ({componentName}) => {
    
    const dispatch = useDispatch()
    const handleClick = (value) =>{
        dispatch(setRating(value))
    }
  return (
    <HeaderDiv>
        <Text>{componentName}</Text>
        <List>
            {category.map((elem,i)=>
                <ListItem onClick={()=>handleClick(elem)} key={i}>{elem}</ListItem>
            )}
        </List>
    </HeaderDiv>
  )
}

export default Header