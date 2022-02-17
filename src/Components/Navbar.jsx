import React from 'react'
import styled from 'styled-components'

//color #174c5a is the background of the logo
const Container = styled.div`
    height: 60px;
    background-color: #174c5a; 
`

const Wrapper = styled.div`
    padding: 10px 20px;
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>Navbar</Wrapper>
    </Container>
  )
}

export default Navbar