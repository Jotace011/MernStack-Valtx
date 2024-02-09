import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <div class="container">
              <Link className="navbar-brand" to="/">
                  NotesApp
              </Link>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                  <li class="nav-item">
                    <Link className='nav-link' to="/"> Notes </Link>
                  </li>
                  <li class="nav-item">
                    <Link className='nav-link' to="/create"> Create Note </Link>
                  </li>
                  <li class="nav-item">
                    <Link className='nav-link' to="/user"> Create User </Link>
                  </li>
                </ul>
              </div>
            </div>
      </nav>
    )
  }
}
