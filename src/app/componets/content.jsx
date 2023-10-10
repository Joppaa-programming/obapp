
import Modal from './modal'

export default function Contents({ children }) {

  return (
    <div className='mt-2 mb-20 flex justify-center' id='content'>
      {children}
      <Modal/>
      {/* <Modal onClose isVisible={true}/> */}
    </div>
  ) 
}
