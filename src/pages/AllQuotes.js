import React from 'react'
import QuoteList from './../components/quotes/QuoteList'

const Dummy_Data = [
  { id: 'q1', author: 'mohsen', text: 'lorem ipsum1' },
  { id: 'q2', author: 'mosi', text: 'lorem ipsum2' },
]

function AllQuotes() {
  return <QuoteList quotes={Dummy_Data} />
}

export default AllQuotes
