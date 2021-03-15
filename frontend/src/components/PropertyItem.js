import { useState } from 'react'
import styled, { css } from 'styled-components'
import moment from 'moment'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  color: #41444b;
  width: 30%;
  min-width: 400px;
  height: auto;
  margin-top: 20px;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  :hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  @media screen and (max-width: 500px) {
    min-width: 350px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (max-width: 375px) {
    min-width: 300px;
  }
`

const Title = styled.p`
  font-weight: 500;
  font-size: 1.2em;
  margin: 0;
  text-align: center;
`

const Id = styled.span`
  font-size: 1em;
  font-weight: 300;
  font-style: italic;
  margin-top: 15px;
`

const Address = styled.span`
  font-size: 1em;
  margin-top: 15px;
  font-weight: 400;
`

const TransactionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding-top: 20px;
`

const Transactions = styled.p`
  margin-top: 20px;
  font-weight: 500;
  font-size: 1em;
  margin: 0;
`

const turnArrow = css`
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
  transition: transform 300ms ease-out;
`

const Arrow = styled.i`
  margin-right: 0.5rem;
  border: solid #41444b;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  transition: transform 300ms ease-out;
  &.turn {
    ${turnArrow}
  }
`

const showDetails = css`
  display: block;
`

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  display: none;

  &.active {
    ${showDetails}
  }
`

const List = styled.ul`
  list-style: none;
  padding: 0;
  font-weight: 300;
`

const Item = styled.li`
  margin-bottom: 5px;
`

export const PropertyItem = ({ item }) => {
  const { id, outcode, incode, paon, saon, street, lrTransactions } = item
  const [active, setActive] = useState(false)

  function convertDate (date) {
    const newDate = moment(date).format('Do MMM YYYY')
    return newDate
  }

  return (
    <Container>
      <Title>Property Details</Title>
      <Id>
        ID:
        {id}
      </Id>
      <Address>
        {paon} {street}, {saon ? `${saon},` : null} {outcode} {incode}
      </Address>
      <TransactionsContainer onClick={() => setActive(!active)}>
        <Transactions>Transactions</Transactions>
        <Arrow className={active ? 'turn' : ''}></Arrow>
      </TransactionsContainer>
      <DetailContainer className={active ? 'active' : ''}>
        {lrTransactions.map(({ id, date, price }) => {
          return (
            <List key={id}>
              <Item>Date: {convertDate(date)}</Item>
              <Item>Price: £ {price.toLocaleString()}</Item>
            </List>
          )
        })}
      </DetailContainer>
    </Container>
  )
}
