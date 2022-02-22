import './App.css'
import { Header } from './components/Header'
import { Modal } from './components/Modal'
import { useState } from 'react'
import AppContext, { appContext } from './context/AppContext'
import FunctionContext, { functionContext } from './context/FunctionContext'
import StyledContext, { styledContext } from './context/StyledContext'
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <AppContext.Provider value={appContext}>
      <FunctionContext.Provider value={functionContext}>
        <StyledContext.Provider value={styledContext}>
          {isModalOpen && (
            <Modal onClose={() => setIsModalOpen(false)}>
              <p>modal</p>
              <p>zuzuzu</p>
            </Modal>
          )}
          <div className="container">
            <Header />
            <main>
              <button type="button" onClick={() => setIsModalOpen(true)}>
                show modal
              </button>
            </main>
            <footer></footer>
          </div>
        </StyledContext.Provider>
      </FunctionContext.Provider>
    </AppContext.Provider>
  )
}

export default App
