import React from 'react'
import './PaymentConfirm.css'
import CurrencyFormat from 'react-currency-format'
import Cookies from 'universal-cookie'
import toursApi from '../../../APIController/ToursAPI'

function PaymentConfirm(props) {
    const cookies = new Cookies()
    const access_token = cookies.get('user').access_token

    const handleClickCancel = () => {
        props.callBack(false)
    }

    const handleClickConfirm = async () => {
        await toursApi.orderTour(props.data,access_token)
        props.callBack(false)
    }

    return (
        <div className="noti-overlay">
            <div className="noti-content radius-10 payment-content">
                <h1>Xác nhận phiếu đặt Tour</h1>
                <div>Số người lớn: {props.adult}</div>
                <div>Số trẻ em: {props.children !== "" ? props.children : 0}</div>
                <div>Tổng số tiền</div>
                <div className="order-form-price-total"> <CurrencyFormat 
                                value={props.total} 
                                displayType={'text'} 
                                thousandSeparator={true}
                        />đ</div>
                <div className="confirm-section">
                    <button className="radius-10" onClick={handleClickConfirm}>Xác nhận thanh toán</button>
                    <button className="radius-10 cancel" onClick={handleClickCancel}>Hủy</button>
                </div>
            </div>
        </div>
    )
}

export default PaymentConfirm