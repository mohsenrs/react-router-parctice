import React from 'react'
import { Route, useParams, Link } from 'react-router-dom'
import Comments from './../components/comments/Comments'
import HighlightedQuote from './../components/quotes/HighlightedQuote'

const Dummy_Data = [
  { id: 'q1', author: 'mohsen', text: 'lorem ipsum1' },
  { id: 'q2', author: 'mosi', text: 'lorem ipsum2' },
]

function QuoteDetails() {
  const params = useParams()
  const quote = Dummy_Data.find((quote) => quote.id === params.quoteId)
  if (!quote) {
    return <p>quote not found!</p>
  }
  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Link to={`/quotes/${params.quoteId}/comments`}>Comments</Link>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  )
}

export default QuoteDetails
