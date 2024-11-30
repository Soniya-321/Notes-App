// Style your elements here
import styled from 'styled-components'

export const LiItem = styled.li`
  border: 1px solid #334155;
  border-radius: 8px;
  height: 150px;
  width: 60vw;
  list-style-type: none;
  padding: 10px;
  margin: 10px 0px;
  @media screen and (min-width: 768px) {
    margin-top: 10px;
    margin-right: 10px;
    width: 200px;
  }
`
export const LiHeading = styled.h1`
  color: #1e293b;
  font-size: 17px;
`

export const LiPara = styled.p`
  color: #334155;
  font-size: 15px;
`
