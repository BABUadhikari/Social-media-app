import React from "react"
import Page from "./Page"

function ViewSinglePost() {
  return (
    <Page title="Fake Hardcoded Title">
      <div className="d-flex justify-content-between">
        <h2>Example Post Title</h2>
        <span className="pt-2">
          <a href="#" className="text-primary mr-2" title="Edit">
            <i className="fas fa-edit"></i>
          </a>
          <a className="delete-post-button text-danger" title="Delete">
            <i className="fas fa-trash"></i>
          </a>
        </span>
      </div>

      <p className="text-muted small mb-4">
        <a href="#">
          <img className="avatar-tinyr" src="https://scontent.fktm8-1.fna.fbcdn.net/v/t1.6435-1/66457496_1721329398010590_2435789418007625728_n.jpg?stp=dst-jpg_p200x200&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=kOPFjRRGOhEAX_O0slJ&_nc_ht=scontent.fktm8-1.fna&oh=00_AfAc70g58PZCnqdJN6VyF1hFTBYVoznTcRo-PIEiqyGCLw&oe=64CF7F0D" alt='babuTheDon'/>

        </a>
        Posted by <a href="#"> brad </a> on 2/10/2020
      </p>

      <div className="body-content">
        <p>
          Lorem ipsum dolor sit <strong>example</strong> post adipisicing elit. Iure ea at esse, tempore qui possimus soluta impedit natus voluptate, sapiente saepe modi est pariatur. Aut voluptatibus aspernatur fugiat asperiores at.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quod asperiores corrupti omnis qui, placeat neque modi, dignissimos, ab exercitationem eligendi culpa explicabo nulla tempora rem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ea at esse, tempore qui possimus soluta impedit natus voluptate, sapiente saepe modi est pariatur. Aut voluptatibus aspernatur fugiat asperiores at.</p>
      </div>
    </Page>
  )
}

export default ViewSinglePost
