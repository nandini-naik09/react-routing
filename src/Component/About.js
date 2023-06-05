import React from 'react'
import { Link } from 'react-router-dom'


export default function About() {
  return (
    <div>
      <h1>About</h1>
      <p>This is about page</p>

  <strong>Select a Product</strong>
<ul>
  <li>
    <Link to="/About/SocialMedia,  Facebook, instagram"> Social Media </Link>

  </li>
</ul>
    </div>
  )
}