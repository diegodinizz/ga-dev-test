import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  align-items: center;
  border-radius: 0.25rem;
  background-color: #fff;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%);
  overflow: hidden;
  max-width: 56rem;

  @media screen and (max-width: 375px) {
    height: 45px;
  }
`

const SeachField = styled.input`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  transition: all 0.2s;
  outline: none;
  appearance: none;
  font-size: 18px;
  padding-left: 1rem;
  padding-right: 16px;
  height: 60px;
  border: none;
  background-color: #fff;
  padding-top: 2px;
  line-height: 50px;
  color: #14191f;
  overflow: visible;

  ::placeholder {
    color: gainsboro;
  }

  @media screen and (max-width: 375px) {
    font-size: 15px;
  }
`

const SearchButton = styled.button`
  font-family: 'Rubik';
  width: auto;
  background-color: #2ea450;
  border-radius: 0.25rem;
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  height: 50px;
  padding: 0 1.5rem;
  text-align: center;
  white-space: nowrap;
  border: none;
  outline: none;

  @media screen and (max-width: 375px) {
    height: 35px;
  }
`

export const SearchBox = ({ name, value, placeholder, handleChange }) => (
  <Container>
    <SeachField
      type='text'
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      required
    />
    <SearchButton type='submit'>Search</SearchButton>
  </Container>
)
