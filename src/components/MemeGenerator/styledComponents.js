// Style your components here
import styled from 'styled-components'

export const PageContainer = styled.div`
  padding: 30px;
  font-family: 'Open Sans';
  @media screen and (min-width: 768px) {
    display: flex;
    height: 100vh;
    width: 100vw;
    align-items: center;
  }
`

export const Title = styled.h1`
  color: #35469c;
  text-align: center;
  margin: 0;
  @media screen and (min-width: 768px) {
    padding-left: 20px;
    text-align: start;
    width: 50vw;
    font-size: 250%;
  }
`
export const PicContainerForSD = styled.div`
  width: 100%;
  height: 80vh;
  background-image: url(${props => props.bgurl});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const TextInPicture = styled.p`
  color: #ffffff;
  font-size: ${props => props.fontsize}px;
`
export const Label = styled.label`
  color: #7e858e;
`

export const Input = styled.input`
  width: 100%;
  height: 38px;
  margin-top: 8px;
  margin-bottom: 20px;
  border: 2px solid #d7dfe9;
  border-radius: 5px;
  padding: 10px;
  outline: none;
  color: #5a7184;
`
export const PicContainerForLD = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    background-image: url(${props => props.bgurl});
    background-size: cover;
    width: 100%;
    margin: 20px;
    margin-top: 40px;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    align-self: center;
  }
`
export const Form = styled.form`
  margin-top: 30px;
  @media screen and (min-width: 768px) {
    margin-top: 10px;
    padding: 20px;
    width: 100%;
  }
`
export const EachInputFieldContainer = styled.input`
  border: 2px solid red;
`
export const GenerationButton = styled.button`
  background-color: #0b69ff;
  color: #ffffff;
  border: none;
  height: 50px;
  width: 180px;
  font-size: 25px;
  border-radius: 8px;
  cursor: pointer;
`
