import styled from "styled-components"

const Container = styled.div`
    height: 20px;
    background-color: #ec8076;
    color: #14353a;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 600;
`

const Announcement = () => {
  return (
    <Container>
        Super Deal! Free Shipping on Orders Over Rs. 1000!
    </Container>
  )
}

export default Announcement

