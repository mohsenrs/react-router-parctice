import { Redirect, Route, Switch } from 'react-router-dom'
import Layout from './components/layout/Layout'
import AllQuotes from './pages/AllQuotes'
import NewQuote from './pages/NewQuote'
import NotFound from './pages/NotFound'
import QuoteDetails from './pages/QuoteDetails'
import Comments from './components/comments/Comments';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/quotes' />
        </Route>
        <Route path='/quotes' exact>
          <AllQuotes />
        </Route>
        <Route path='/quotes/:quoteId' exact>
          <QuoteDetails />
        </Route>
        <Route path='/quotes/:quoteId/comments'>
          <Comments />
        </Route>
        <Route path='/new-quotes'>
          <NewQuote />
        </Route>
        <Route to='*'>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  )
}

export default App
