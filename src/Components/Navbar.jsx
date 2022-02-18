import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import logo from '../Images/Logo.jpeg'
import { mobile } from '../responsive'

//color #174c5a is the background of the logo
const Container = styled.div`
    height: 60px; 
    background-color: #174c5a;
    color: white;
    ${mobile({ height: "50px" })}
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({ padding: "10px 0px" })}
`

const Left = styled.div` 
    flex: 1; 
    display: flex;
    align-items: center;
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
`

const SearchContainer = styled.div`
    border: 0.5px solid #e7e5e1;
    border-radius: 10px;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
    border: none;
    background-color: transparent;
    ${mobile({ width: "50px" })}
`

const Center = styled.div` 
    flex: 1; 
    text-align: center;
`

const Logo = styled.img`
    height: 40px;
    ${mobile({ height: "20px" })}
`

const Right = styled.div` 
    flex: 1; 
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`


const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <Search style={{fontSize:16, color: '#e7e5e1'}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo src={logo} />
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined color="action" />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar