import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import userApi from '../../../APIController/UserAPI'
import './RegisterForm.css'
import {useHistory} from 'react-router-dom'
import NotificationPopup from '../NotificationPopupComponent/NotificationPopup'


function RegisterForm() {
    const { register, handleSubmit, reset} = useForm()
    const [errorInfo,setErrorInfo] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [success, setSuccess] = useState(false)
    const history = useHistory()

    const btnStyle = {
        margin: '0px'
    }

    const errorStyle = {
        display: "block"
    }

    const onSubmit = async (data) => {
        if(data.password !== data.confirmPassword) {
            setErrorInfo(true)
            setErrorMessage('Xác nhận mật khẩu không đúng')
        } else {
            try{
                let formData = new FormData()
                Object.keys(data).forEach((key) => {
                    if(key !== 'confirmPassword') formData.append(key, `${data[key]}`)
                })
                const res = await userApi.register(formData)
                if(res) setSuccess(true)
                reset({
                    last_name: '',
                    first_name:'',
                    username: '',
                    email:'',
                    password: '',
                    confirmPassword: '',
                })
                setTimeout(() => history.push('/login'),3000)
                
            } catch (e) {
                if(e.response.data.username) setErrorMessage('Tên đăng nhập đã tồn tại')
                if(e.response.data.email) setErrorMessage('Email đã có người đăng ký')
                setErrorInfo(true)
            }       
        } 
    }

    return (
        <div className="register-form-container radius-10">
            <h4 className="register-form-header radius-top-10">Đăng Ký</h4>
            <form onSubmit={handleSubmit(onSubmit)} className="register-form-content">
                <div className="name-input">
                    <input  
                        {...register('first_name', {required: true})} 
                        className="login-form-input" 
                        placeholder="Họ"
                        required
                    />
                    <input  
                        {...register('last_name', {required: true})} 
                        className="login-form-input width-30" 
                        placeholder="Tên"
                        required
                    />
                </div>
                <input  
                        {...register('username', {required: true})} 
                        className="register-form-input" 
                        placeholder="Tên đăng nhập"
                        required
                    />
                <input  
                    {...register('email', {required: true})} 
                    className="register-form-input" 
                    placeholder="Email"
                    required
                    type="email"
                />
                <input 
                    type="password" {...register("password", { required: true })} 
                    className="register-form-input" 
                    placeholder="Mật khẩu"
                    required
                />
                <input 
                    type="password" {...register("confirmPassword", { required: true })} 
                    className="register-form-input" 
                    placeholder="Xác nhận mật khẩu"
                    required
                />
                <div className="incorrect" style={errorInfo ? errorStyle : null}>{errorMessage}</div>
                <input type="submit" id="submit-btn" value="Đăng ký" style={errorInfo ? btnStyle : null}/>
                
                <div className="login-context">
                    <span>Bạn đã có tài khoản ? </span><a href="/login">Đăng nhập</a>
                </div>
            </form>
            {success && <NotificationPopup action={{type: 'Đăng ký', direct: 'đăng nhập'}}/>}
        </div>
    )
}

export default RegisterForm