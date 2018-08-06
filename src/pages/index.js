import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people!</h1>
    <p>This is the Interesting Things wiki.</p>
    <p>You have reached the main page sucessfully.</p>
    <Link to="/hub-thing/">Go to wiki hub</Link>
  </div>
)

export default IndexPage
