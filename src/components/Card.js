import React from 'react'
import styled from 'styled-components'
import {PlayBtnFill} from '@styled-icons/bootstrap/PlayBtnFill'

const LessonCard = styled.div`
    width: 1345px;
    height: 544px;
    border-radius: 24px;
    background: url(${props => props.img});
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 60px;
`;
const CardName = styled.p`
    padding-left: 42px;
    padding-top: 42px;
    height: 29px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    cursor: pointer;

    color: #FFFFFF;
`;
const CardTitle = styled.p`
    position: relative;
    bottom: 70px;
    left: 42px;
    height: 29px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;

color: #FFFFFF;
`;
const CardTime =styled.p`
    position: relative;
    left: 1155px;
    bottom: 42px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;

    color: #FFFFFF;
`;
const PlayIcon =styled(PlayBtnFill)`
    margin-left: 42px;
    margin-top: 240px;
    width: 84px;
    height: 75px;
    color: rgba(255, 255, 255, 0.4);
    border-radius: 16px;
    cursor: pointer;
`;
const Card = ({img, lesson,time,lessonCount}) => {
  return (
    <LessonCard img={img}>
        <div>
        <CardName>{lesson}</CardName>
        <CardTime>{time} min</CardTime>
        </div>
        <CardTitle>{lessonCount} lessons</CardTitle>
        <PlayIcon />
    </LessonCard>
  )
}

export default Card