import React from "react"
import './ChooseUs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSuitcase, faMoneyBill, faMoneyCheckAlt, faPhone } from "@fortawesome/free-solid-svg-icons"

export default function ChooseUs() {


    return (
        <div className="choose-us-section">
            <div className="title">
                <h2 className="main-title">Lý do chọn DogZ Travel ?</h2>
            </div>
            <div className="list-reason">
                <div className="reason-item radius-10">
                    <div className="icon-reason-item diamond radius-5">
                        <FontAwesomeIcon icon={faSuitcase} className="icon-reason"/>
                    </div>
                    <h5>Các chuyến du lịch</h5>
                    <p>Đa dạng, linh hoạt, được nghiên cứu kĩ càng để đưa vào hoạt động</p>
                </div>

                <div className="reason-item radius-10">
                    <div className="icon-reason-item diamond radius-5">
                        <FontAwesomeIcon icon={faMoneyBill} className="icon-reason"/>
                    </div>
                    <h5>Giá cả</h5>
                    <p>Giá cả phải chăng, luôn đảm bảo các chuyến du lịch có mức giá tốt nhất</p>
                </div>

                <div className="reason-item radius-10">
                    <div className="icon-reason-item diamond radius-5">
                        <FontAwesomeIcon icon={faMoneyCheckAlt} className="icon-reason"/>
                    </div>
                    <h5>Thanh toán</h5>
                    <p>Nhanh, dễ dàng, đảm bảo an toàn về thông tin khách hàng</p>
                </div>

                <div className="reason-item radius-10">
                    <div className="icon-reason-item diamond radius-5">
                        <FontAwesomeIcon icon={faPhone} className="icon-reason"/>
                    </div>
                    <h5>Hỗ trợ</h5>
                    <p>Đội ngũ nhân viên chuyên môn cao luôn sẵn sàng hỗ trợ 24/7</p>
                </div>
            </div>
        </div>
    )
}