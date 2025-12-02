// import { useState } from 'react'
import './App.css'
import { AlertBox } from './components/AlertBox/AlertBox'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <AlertBox 
        type="info"
        message='Qapla!  That is Klingon for "success!"'
        onClose ={() => {
          alert("You just viewed the alert box, bruh")
        }}
        children={<p>p tag Bonus child</p>}
      />
    </>
  )
}

export default App

