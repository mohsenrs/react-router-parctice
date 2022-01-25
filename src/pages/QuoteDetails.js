import React from 'react'
import { Route, useParams, Link } from 'react-router-dom'
import Comments from './../components/comments/Comments'

function QuoteDetails() {
  const params = useParams()

  return (
    <>
      <h1>quote details</h1>
      <p>{params.quoteId}</p>
      <Link to={`/quotes/${params.quoteId}/comments`}>Comments</Link>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  )
}

export default QuoteDetails
