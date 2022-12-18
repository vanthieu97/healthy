import { FC, useState } from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import logo from 'assets/images/logo.png'
import iconMemo from 'assets/icons/icon_memo.svg'
import iconChallenge from 'assets/icons/icon_challenge.svg'
import iconInfo from 'assets/icons/icon_info.svg'
import iconMenu from 'assets/icons/icon_menu.svg'
import iconCount from 'assets/icons/info_count.svg'
import closeIcon from 'assets/icons/icon_close.svg'

interface HeaderMenuProps {
  showMenu: boolean
}

const Wrapper = styled.header({
  height: 64,
  width: '100%',
  backgroundColor: '#414141',
  padding: '8px 0',
  boxSizing: 'border-box',
})
const Content = styled.div({
  width: '100%',
  maxWidth: 960,
  padding: '0 16px',
  margin: 'auto',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})
const Logo = styled.img({
  height: 48,
})
const Nav = styled.nav({
  display: 'flex',
  columnGap: 16,
})
const Menu = styled.ul({
  display: 'flex',
  color: '#fff',
})
const MenuItem = styled.li({
  display: 'flex',
  columnGap: 8,
  alignItems: 'center',
  cursor: 'pointer',
  position: 'relative',
  height: '100%',
  '&:not(:last-child)': {
    width: 160,
  },
  a: {
    display: 'flex',
    columnGap: 8,
    alignItems: 'center',
  },
})
const IconWrap = styled.div({
  position: 'relative',
})
const Icon = styled.img({
  width: 32,
  height: 32,
})
const IconCount = styled.img({
  width: 16,
  height: 16,
  position: 'absolute',
  right: 0,
  top: 0,
  transform: 'translateX(50%)',
})
const HeaderMenu = styled.ul<HeaderMenuProps>((props) => ({
  position: 'absolute',
  top: '100%',
  right: 0,
  width: 280,
  backgroundColor: '#777777',
  zIndex: 999,
  transformOrigin: 'top',
  transform: `scaleY(${props.showMenu ? 1 : 0})`,
  transition: 'transform 0.3s',
}))
const HeaderMenuItem = styled.li({
  padding: '22px 32px',
  color: '#fff',
  fontSize: 18,
  lineHeight: '26px',
  position: 'relative',
  transition: 'background 0.2s',
  '&:hover': {
    backgroundColor: '#414141',
  },
  '&:after': {
    content: '""',
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    borderTop: 'solid 1px #fff',
    mixBlendMode: 'normal',
    opacity: 0.15,
  },
})
const CloseIcon = styled.img({
  position: 'absolute',
  width: 32,
  height: 32,
  bottom: '100%',
  right: 0,
  backgroundColor: '#414141',
})

const Header: FC = () => {
  const [showMenu, setShowMenu] = useState(false)

  const onClickShowMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <Wrapper>
      <Content>
        <Link to=''>
          <Logo src={logo} alt='logo' />
        </Link>
        <Nav>
          <Menu>
            <MenuItem>
              <Link to='my-record'>
                <Icon src={iconMemo} alt='icon-memo' />
                <span>自分の記録</span>
              </Link>
            </MenuItem>
            <MenuItem>
              <Icon src={iconChallenge} alt='icon-challenge' />
              <span>チャレンジ</span>
            </MenuItem>
            <MenuItem>
              <IconWrap>
                <Icon src={iconInfo} alt='icon-info' />
                <IconCount src={iconCount} alt='icon-count' />
              </IconWrap>
              <span>お知らせ</span>
            </MenuItem>
            <MenuItem>
              <Icon src={iconMenu} alt='icon-menu' onClick={onClickShowMenu} />
              <HeaderMenu showMenu={showMenu}>
                <HeaderMenuItem>自分の記録</HeaderMenuItem>
                <HeaderMenuItem>体重グラフ</HeaderMenuItem>
                <HeaderMenuItem>目標</HeaderMenuItem>
                <HeaderMenuItem>選択中のコース</HeaderMenuItem>
                <HeaderMenuItem>
                  <Link to='column'>コラム一覧</Link>
                </HeaderMenuItem>
                <HeaderMenuItem>設定</HeaderMenuItem>
                <CloseIcon
                  src={closeIcon}
                  alt='close-icon'
                  onClick={onClickShowMenu}
                />
              </HeaderMenu>
            </MenuItem>
          </Menu>
        </Nav>
      </Content>
    </Wrapper>
  )
}

export default Header
