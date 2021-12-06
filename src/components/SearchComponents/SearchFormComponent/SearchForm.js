import React, { useRef, useState, useEffect } from "react"
import './SearchForm.css'
import DatePicker from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css"

export default function SearchForm() {
    const [startDate, setStartDate] = useState()
    const [fill,setFill] = useState(false)
    const destination = useRef()
    const searchForm = useRef()
    const searchBtn = useRef()

    const handleSubmit = (e) => {
        const start = document.getElementById('start')
        console.log(start)
        if(destination.current.value === '' && start.value === '') {
            e.preventDefault()
            setFill(true)
            searchBtn.current.style.marginTop = "14px"
        }
    }

    useEffect(() => {
        searchForm.current.addEventListener('submit', handleSubmit)
    }, [])

    return (
        <form className="search-form" action="/search/" ref={searchForm} autoComplete="off">
            <label>Tôi muốn đi</label>
            <div className="input-group">
                <input className="input-form radius-10" type="text" name="destination" placeholder="Nhập nơi bạn muốn đi..." ref={destination} />
            </div>
            <label>Ngày khởi hành</label>
            <div className="input-group">
                <DatePicker 
                selected= {startDate}
                onChange={(date) => setStartDate(date)}
                className="input-form radius-10"
                placeholderText="Chọn ngày khởi hành..."
                dateFormat="dd/MM/yyyy"
                id="start"
                name="start"
                />
            </div>
            {fill && <div className='alert-fill'>Vui lòng nhập điểm đến hoặc chọn ngày khởi hành</div>}
            <div className="submit" ref={searchBtn}>
                <input type="submit" value="Tìm kiếm" id="submit-btn" className="radius-10" />
            </div>
        </form>
    )
}