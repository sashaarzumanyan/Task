import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'
import styled from 'styled-components'
import Header from './Header'


const MainDiv= styled.div({
    position: 'absolute',
    left: '259px',
    top: '194px',
    height: '100vh'
})

const Main = () => {
    const {courses, rating} = useSelector(state => state)
    const newArr = courses.filter(e => e.rank === rating)

  return (
    <>
    <Header componentName={'Courses'} />

    <MainDiv>
        {newArr.map((e,i)=>
        <Card key={i} img={e.img} lesson={e.lesson} time={e.time} lessonCount={e.lessonCount}/>
        )}
    </MainDiv>
</>
  )
}

export default Main