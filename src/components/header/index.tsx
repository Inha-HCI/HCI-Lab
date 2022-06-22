import React from "react"
import { Link } from "gatsby"
import { MdMenu } from "react-icons/md"
import * as HeaderStyle from "./header.module.css"
import LogoImg from "../../images/logo.png"

interface HeaderProps {
  activeSideBar: () => void
}

const Header = ({ activeSideBar }: HeaderProps) => {
  return (
    <header className={HeaderStyle.headerWrapper}>
      <div className={HeaderStyle.innerWrapper}>
        <Link to="/">
          <img src={LogoImg} className={HeaderStyle.logo} />
        </Link>
        <div className={HeaderStyle.menus}>
          <Link to="members">Members</Link>
          <Link to="research">Research</Link>
          <Link to="papers">Paper</Link>
          <Link to="news">News</Link>
        </div>
        <div className={HeaderStyle.sidebarButton}>
          <MdMenu size={"2rem"} onClick={() => activeSideBar()} />
        </div>
      </div>
    </header>
  )
}

export default Header
