import React, { memo} from "react"
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faSignInAlt, faUserPlus, faSignOutAlt, faCog, faCaretDown, faUserCog, faChartBar } from "@fortawesome/free-solid-svg-icons"
import { useSelector, useDispatch } from 'react-redux'
import {logout} from '../../redux/reducers/UserSlice'
import { Link } from "react-router-dom"

function Header() {
    const currentUser = useSelector((state) => state.user)
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <div className="header">
            <div className="container">
                <div className="left-items">
                    <p><FontAwesomeIcon icon={faPhone}/> (+84)854157567</p>
                    <p><FontAwesomeIcon icon={faEnvelope}/> 1851050035duc@ou.edu.vn</p>
                </div>
                {
                    currentUser.user
                    ? <div className="right-items-header">
                         <img 
                            src={currentUser.user.avatar_url}
                            alt="user-avatar"
                        />
                        <span>Xin chào, {currentUser.user.last_name}</span>
                        <div className="setting-user">
                            <FontAwesomeIcon icon={faCog}/> <FontAwesomeIcon icon={faCaretDown}/>
                            <div className="dropdown-menu radius-10">
                                <div className="dropdown-menu-list">
                                    <div className="dropdown-item radius-top-10">
                                        <Link to="/user-detail" >
                                            <FontAwesomeIcon icon={faUserCog}/> Thông tin cá nhân
                                        </Link>
                                    </div>
                                    {
                                        currentUser.user.is_staff 
                                        && <div className="dropdown-item">
                                            <Link to="/statistical" ><FontAwesomeIcon icon={faChartBar}/> Thống kê</Link>
                                        </div>
                                    }
                                    <div className="dropdown-item radius-bot-10">
                                        <span onClick={handleLogout}><FontAwesomeIcon icon={faSignOutAlt}/> Đăng xuất</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    : <div className="right-items-header">
                        <Link to="/login"><FontAwesomeIcon icon={faSignInAlt}/> Đăng nhập</Link>
                        <Link to="/register"><FontAwesomeIcon icon={faUserPlus}/> Đăng ký</Link>
                    </div>
                }
                
            </div>
        </div>
    )
}

export default memo(Header)