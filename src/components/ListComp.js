import React from 'react'
import Header from './Header'
import styled from 'styled-components'

const StyledDiv= styled.div({
    position: 'absolute',
    left: '259px',
    top: '194px',
    height: '100vh',
    fontSize: '24px'
})


const ListComp = () => {
  return (
    <>
        <Header componentName={"List"}/>
        <StyledDiv> List is empty</StyledDiv>
    </>
  )
}

export default ListComp