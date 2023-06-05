import { Link } from "react-router-dom"
import React from 'react'

export default function Menu() {
  return (
//     <div>
//     <Link to="/home">Home</Link>|
//     <Link to="/about">About</Link>|
//     <Link to="/contact">Contact</Link>
//   </div>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link to="/" class="navbar-brand">React Portal</Link>
       
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/about">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Users">Users</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/contact">Contact</Link>
        </li>
       
      </ul>
     
    </div>
  </div>
</nav>


  )
}