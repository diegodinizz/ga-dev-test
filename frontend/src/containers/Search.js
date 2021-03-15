import { useState } from 'react'
import styled from 'styled-components'

import { SearchBox } from '../components/SearchBox'
import { PropertyList } from './PropertyList'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const Title = styled.h1`
  color: #fff;
  font-size: 48px;
  line-height: 1.2;
  font-weight: 500;
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 35px;
  }

  @media screen and (max-width: 768px) {
    font-size: 30px;
    text-align: center;
  }

  @media screen and (max-width: 414px) {
    font-size: 25px;
  }

  @media screen and (max-width: 375px) {
    font-size: 23px;
  }
`

const SearchContainer = styled.form`
  width: 30%;

  @media screen and (max-width: 1200px) {
    width: 40%;
  }

  @media screen and (max-width: 900px) {
    width: 50%;
  }

  @media screen and (max-width: 700px) {
    width: 60%;
  }

  @media screen and (max-width: 500px) {
    width: 70%;
  }

  @media screen and (max-width: 414px) {
    width: 85%;
  }
`

const SearchOptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: #fff;
  margin: 1rem 0;
  justify-content: center;
  align-items: center;

  p {
    margin: 0;
    font-size: 20px;
  }

  @media screen and (max-width: 375px) {
    p {
      font-size: 15px;
    }
  }
`

const SearchLabel = styled.label`
  font-size: 15px;
`

const SearchOption = styled.input`
  margin: 0 10px;
  width: 17px;
  height: 17px;
  cursor: pointer;
`

export const Search = () => {
  const [propertyData, setPropertyData] = useState([])
  const [search, setSearch] = useState('')
  const [option, setOption] = useState('')

  async function handleSubmit (event) {
    event.preventDefault()

    let url
    let outcode

    if (option === 'id') {
      url = `/lrProperty/id/${search}`
    } else if (option === 'postcode') {
      if (search.length > 5) {
        outcode = search.substring(0, 3)
      } else {
        outcode = search.substring(0, 2)
      }
      const incode = search.slice(-3)
      url = `/lrProperty/postcode/${outcode}/${incode}`
    } else if (option === 'street') {
      url = `/lrProperty/street/${search}`
    }

    const response = await fetch(url)
    const data = await response.json()

    if (data.success) {
      setPropertyData(data.lrProperty)
      setSearch('')
    } else {
      alert(data.msg)
      setSearch('')
    }
  }

  function handleChange (event) {
    setSearch(event.target.value)
  }

  return (
    <Container>
      <Title>Find the best property for you</Title>
      <SearchContainer onSubmit={handleSubmit}>
        <SearchOptionsContainer>
          <p>Search by:</p>
          <SearchLabel>
            <SearchOption
              type='radio'
              name='option'
              value='id'
              onChange={event => setOption(event.target.value)}
            />
            ID
          </SearchLabel>
          <SearchLabel>
            <SearchOption
              type='radio'
              name='option'
              value='postcode'
              onChange={event => setOption(event.target.value)}
            />
            Postcode
          </SearchLabel>
          <SearchLabel>
            <SearchOption
              type='radio'
              name='option'
              value='street'
              onChange={event => setOption(event.target.value)}
              required
            />
            Street
          </SearchLabel>
        </SearchOptionsContainer>
        <SearchBox
          name='search'
          value={search}
          placeholder='Search by ID, Postcode, Street'
          handleChange={handleChange}
        />
      </SearchContainer>
      <PropertyList propertyData={propertyData} />
    </Container>
  )
}
