import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 1rem;
padding: 1rem;
background-color: #0000003b;
flex-direction: column;
input{
  padding: .3rem;
  border-radius: .4rem;
  margin: 0 .5rem;
}
button{
  border: none;
  border-radius: .5rem;
  padding: .5rem;
  cursor: pointer;
  background-color:#2660db;
  color:#fff;
  margin: .4rem;
  text-align: center;
  &.remover{
    background-color: #ff0000;
    :hover{
      background-color: #fd3030;
    }
  }
  &.edit{
    background-color: #31b653;
    :hover{
      background-color: #0ddb40;
    }
  }
  :hover{
    opacity: .9;
  }
}
svg{
  font-size: 1rem;
}
@media (max-width: 50rem) {
  flex-direction: column;
}
`
export const TodoList = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 31rem;
padding: 2rem;
margin: 1rem 0;
box-shadow: 0 0 1.5rem 0;
border-radius: 1rem;
@media (max-width: 50rem) {
  flex-direction: column;
  width: 15rem;
  form{
    display: flex;
    flex-direction: column;
  }
}
`
export const Lista = styled.ul`
width: 40rem;;
display:flex;
justify-content: space-between;
align-items: center;
border-bottom: 0.1rem solid #fff;

li{
  &.ativo{
    opacity: 0.5;
  text-decoration: line-through;
 
}
 }
@media (max-width: 50rem) {
  flex-direction: column;
}
`
