import { Badge } from '@material-ui/core'
import { ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import logo from '../Images/Logo-footer.png'
import { mobile } from '../responsive'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
    height: 60px; 
    background-color: #e7e5e1;
    color: white;
    ${mobile({ height: "50px" })}
`

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

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
    const quantity = useSelector(state => state.cart.quantity);
    return (
        <Container>
            <Wrapper>
                <Left>
                    {/* <Language style={{color: 'gray'}}>EN</Language>
                    <SearchContainer>
                        <Input />
                        <Search style={{ fontSize: 16, color: 'gray' }} />
                    </SearchContainer> */}
                    <a href="http://localhost/SupplyChainDAPP_FULL/"><TopButton>TRACK PRODUCT</TopButton></a>
                </Left>
                <Center>
                    <Link to="/"><Logo src={logo} /></Link>
                </Center>
                <Right>
                    <Link to="/register"><MenuItem>REGISTER</MenuItem></Link>
                    <Link to="/login"><MenuItem>SIGN IN</MenuItem></Link>
                    <Link to="/cart">
                        <MenuItem>
                            <Badge badgeContent={quantity} color="primary">
                                <ShoppingCartOutlined color="action"/>
                            </Badge>
                        </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar