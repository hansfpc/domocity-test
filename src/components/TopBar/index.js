import React from 'react'
import styled from 'styled-components'

const Logo = styled.img`
  height: 30px;
`

const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`

const TopBar = () => (
  <Wrapper>
    <Logo
      src="https://www.enelx.com/etc/designs/enel-x/main/images/enelx_logo_white.svg"
      alt="enelx-logo"
    />
  </Wrapper>
)

export default TopBar
