/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function HeaderLoggedIn(props) {
    function handleLogOut(){
        props.setLoggedIn(false)
        localStorage.removeItem("complexappToken")
        localStorage.removeItem("complexappUsername")
        localStorage.removeItem("complexappAvatar")
    }
    return (
        <div className="flex-row my-3 my-md-0">
            <a href="#" className="text-white mr-2 header-search-icon">
                <i className="fas fa-search"></i>
            </a>
            <span className="mr-2 header-chat-icon text-white">
                <i className="fas fa-comment"></i>
                <span className="chat-count-badge text-white"> </span>
            </span>
            <a href="#" className="mr-2">
                <img className="small-header-avatar" src="https://scontent.fktm8-1.fna.fbcdn.net/v/t1.6435-1/66457496_1721329398010590_2435789418007625728_n.jpg?stp=dst-jpg_p200x200&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=kOPFjRRGOhEAX_O0slJ&_nc_ht=scontent.fktm8-1.fna&oh=00_AfAc70g58PZCnqdJN6VyF1hFTBYVoznTcRo-PIEiqyGCLw&oe=64CF7F0D" alt='babuTheDon'/>
            </a>
            <a className="btn btn-sm btn-success mr-2" href="/create-post">
                Create Post
            </a>
            <button onClick={handleLogOut} className="btn btn-sm btn-secondary">
                Sign Out
            </button>
        </div>
    )
}

export default HeaderLoggedIn
