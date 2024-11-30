// Style your elements here
import styled from 'styled-components'

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  font-family: Roboto;
`

export const Heading = styled.h1`
  color: #4c63b6;
  font-family: Bree Serif;
  font-size: 28px;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.1), 0 6px 8px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  padding: 20px;
  width: 60vw;
`
export const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: none;
  font-size: 15px;
  outline: none;
  margin: 5px 0px;
  color: #334155;
`

export const InputTextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: none;
  font-size: 15px;
  outline: none;
  margin: 5px 0px;
  color: #334155;
`
export const AddButton = styled.button`
  align-self: flex-end;
  padding: 8px 15px;
  background-color: #4c63b6;
  border: none;
  outline: none;
  cursor: pointer;
  color: #fff;
  border-radius: 8px;
`
export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
  width: 60vw;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 10px 0px;
  }
`
export const Empty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
`
export const Img = styled.img`
  height: 100px;
  width: 100px;
  margin: 10px 0px;
`
export const EmptyHeading = styled.h1`
  color: #475569;
  font-size: 20px;
  font-weight: bold;
`
export const EmptyPara = styled.p`
  color: #475569;
  font-size: 16px;
  margin-top: 5px;
`
