import React from "react"
import './Banner.css'
import '../SearchComponents/SearchFormComponent/SearchForm'
import SearchForm from "../SearchComponents/SearchFormComponent/SearchForm"

export default function Banner() {
    return (
        <div className="banner">
            <div className="container">
                <div className="main-content">
                    <h3>WELCOME TO</h3>
                    <h1>DOGZ TOUR & TRAVELS</h1>
                </div>
                <div className="search-section">
                    <h4 className="radius-top-10">Bạn muốn đi đâu</h4>
                    <SearchForm />
                </div>
            </div> 
        </div>
    )
}