import './App.css'
import { Header } from './components/Header'
import { Modal } from './components/Modal'
import { useState } from 'react'
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <>
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
    </>
  )
}

export default App
