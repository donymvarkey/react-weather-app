import React from 'react'

export default function NavBar(props) {
    function handleChange(e) {
        props.changeRegion(e.target.value);
    }
    function handleSubmit(e) {
        props.changeWeather(e)
    }
    return (
        <div>
            <nav className="navbar navbar-dark font-weight-bold justify-content-between">
                {/*  eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="navbar-brand">Weather App</a>
                <form className="form-inline" onSubmit={handleSubmit} >
                    <input 
                        className="form-control form-control-md mr-sm-2 region-input" 
                        type="search" placeholder="Search Location" 
                        onChange={handleChange} 
                    />
                </form>
            </nav>
        </div>
    )
}
