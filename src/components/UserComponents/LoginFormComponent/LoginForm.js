import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import userApi from '../../../APIController/UserAPI'
import './LoginForm.css'
import {useDispatch } from 'react-redux'
import {setUser} from '../../../redux/reducers/UserSlice'
import NotificationPopup from '../NotificationPopupComponent/NotificationPopup'
import Cookies from "universal-cookie"
import { useHistory } from 'react-router'


function LoginForm() {
    const { register, handleSubmit} = useForm()
    const [errorInfo,setErrorInfo] = useState(false)
    const [success, setSuccess] = useState(false)
    const dispatch = useDispatch()
    const cookies = new Cookies()
    const history = useHistory()

    const btnStyle = {
        margin: '0px'
    }

    const errorStyle = {
        display: "block"
    }

    const onSubmit = async (data) => {
        try {
            const res = await userApi.login(data.username,data.password)
            cookies.set('access_token',res.access_token, { path: '/' })
            cookies.set('user',res.current_user, { path: '/' })
            dispatch(setUser(cookies.get('user')))
            setSuccess(true)
            setTimeout(() => localStorage.getItem('url') ? history.push(localStorage.getItem('url')): history.push('/'),2000)
        } 
        catch {
            setErrorInfo(true)
        }
        
    }

    return (
        <div className="login-form-container radius-10">
            <h4 className="login-form-header radius-top-10">Đăng Nhập</h4>
            <form onSubmit={handleSubmit(onSubmit)} className="login-form-content" action="/">
                <input  
                    {...register('username', {required: true})} 
                    className="login-form-input" 
                    placeholder="Tên đăng nhập"
                    required
                />
                <input 
                    type="password" {...register("password", { required: true })} 
                    className="login-form-input" 
                    placeholder="Mật khẩu"
                    required
                />
                <div className="incorrect" style={errorInfo ? errorStyle : null}>Sai tên đăng nhập hoặc mật khẩu</div>
                <input type="submit" id="submit-btn" value="Đăng nhập" style={errorInfo ? btnStyle : null}/>
                
                <div className="register-context">
                    <span>Bạn chưa có tài khoản ? </span><a href="/register">Đăng ký</a>
                </div>
            </form>
            {success && <NotificationPopup action={{type:'Đăng nhập', direct:'trước đó'}}/>}
        </div>
    )
}

export default LoginForm