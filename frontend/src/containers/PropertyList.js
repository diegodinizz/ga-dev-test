import styled from 'styled-components'

import { PropertyItem } from '../components/PropertyItem'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
`

export const PropertyList = ({ propertyData }) => {
  function renderList (propertyData) {
    if (propertyData.id) {
      return <PropertyItem item={propertyData} />
    } else {
      return (
        <Container>
          {propertyData.map((item, index) => (
            <PropertyItem key={index} item={item} />
          ))}
        </Container>
      )
    }
  }

  return <Container>{renderList(propertyData)}</Container>
}
