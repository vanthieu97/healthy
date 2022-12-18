import styled from '@emotion/styled'
import { FC } from 'react'
import scroll from 'assets/icons/icon_scroll.svg'
import scrollActive from 'assets/icons/icon_scroll_active.svg'

const Wrapper = styled.footer({
  width: '100%',
  backgroundColor: '#414141',
  padding: '56px 16px',
  boxSizing: 'border-box',
  position: 'relative',
})
const Nav = styled.ul({
  maxWidth: 960,
  margin: 'auto',
  display: 'flex',
  columnGap: 16,
})
const NavItem = styled.li({
  fontSize: 11,
  fontWeight: '16px',
  color: '#fff',
  cursor: 'pointer',
})
const ScrollToTop = styled.div({
  position: 'absolute',
  right: 76,
  bottom: 'calc(100% + 16px)',
  width: 48,
  height: 48,
  cursor: 'pointer',
  background: `url(${scroll}) center center no-repeat`,
  transition: 'background 0.3s',
  '&:hover': {
    background: `url(${scrollActive}) center center no-repeat`,
  },
})

const Footer: FC = () => {
  const onScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Wrapper>
      <Nav>
        <NavItem>会員登録</NavItem>
        <NavItem>運営会社</NavItem>
        <NavItem>利用規約</NavItem>
        <NavItem>個人情報の取扱について</NavItem>
        <NavItem>特定商取引法に基づく表記</NavItem>
        <NavItem>お問い合わせ</NavItem>
      </Nav>
      <ScrollToTop onClick={onScrollToTop} />
    </Wrapper>
  )
}

export default Footer
