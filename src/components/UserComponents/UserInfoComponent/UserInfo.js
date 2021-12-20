import React, {memo} from 'react'
import './UserInfo.css'
import { useTranslation } from 'react-i18next'
function UserInfo({user}) {
    const group = {
        'admin': 'Quản trị viên',
        'staff': 'Nhân viên',
        'manager': 'Quản lý'
    }
    const {t} = useTranslation()
    return (
        <div className="user-info-section">
            <div className="user-info-label">
                <h4>{t("profilePage.5")}</h4>
                <h4>username</h4>
                <h4>Email</h4>
                <h4>{t("profilePage.6")}</h4>
                <h4>{t("profilePage.7")}</h4>
                {(user.groups && user.groups.length > 0) &&<h4>Chức vụ</h4>}
            </div>
            
            <div className="user-info-detail">
                <h4>{`${user.first_name} ${user.last_name}`}</h4>
                <h4>{user.username}</h4>
                <h4>{user.email}</h4>
                <h4>{(user.address && user.address !== 'null') ? user.address : t("profilePage.8")}</h4>
                <h4>{(user.phone_number && user.phone_number !== 'null') ? user.phone_number : t("profilePage.8")}</h4>
                {(user.groups && user.groups.length > 0) &&<h4>{group[user.groups[0].name]}</h4>}
            </div>
        </div>
    )
}

export default memo(UserInfo)