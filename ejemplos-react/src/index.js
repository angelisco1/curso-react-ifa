import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from './components/12-router-y-redux/store/config-store'
import App from './components/App'
import './styles.css'

ReactDOM.createRoot(document.getElementById('app'))
  .render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  )