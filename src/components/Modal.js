import { createPortal } from 'react-dom'
import styled from 'styled-components'
import { useEffect } from 'react'

const modal = document.getElementById('modal-root')
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
`
export function Modal({ children, onClose }) {
  useEffect(() => {
    window.addEventListener('keydown', handleCloseByEscape)
    return () => {
      window.removeEventListener('keydown', handleCloseByEscape)
    }
  })
  const handleCloseByEscape = (e) => {
    console.log(e.code)
    if (e.code === 'Escape') {
      onClose()
    }
  }
  return createPortal(
    <ModalOverlay className="overlay">{children}</ModalOverlay>,
    modal,
  )
}
