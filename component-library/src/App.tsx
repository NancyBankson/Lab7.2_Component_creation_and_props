// import { useState } from 'react'
import './App.css'
import { AlertBox } from './components/AlertBox/AlertBox'
import { ProductDisplay } from './components/ProductDisplay/ProductDisplay'
import { UserProfileCard } from './components/UserProfileCard/UserProfileCard'

function App() {
  // const [count, setCount] = useState(0)

  const product1 = {
    id: "1",
    name: "banana slicer",
    price: 2.99,
    description: "This item slices bananas",
    imageUrl: "./slicer.png",
    inStock: true
  }

  const user = {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Software Engineer',
    avatarUrl: 'https://example.com/avatar.jpg'
  };

  return (
    <>
      <AlertBox
        type="info"
        message='Qapla!  That is Klingon for "success!"'
        onClose={() => {
          alert("You just viewed the alert box, bruh")
        }}
        children={<p>p tag Bonus child</p>}
      />
      <ProductDisplay
        product={product1}
        showDescription={true}
        showStockStatus={true}
        onAddToCart={(productId) => alert(`Added product ${productId} to cart`)}
      >
      </ProductDisplay>
      <UserProfileCard
        user={user}
        showEmail={true}
        showRole={true}
        onEdit={(userId) => alert(`Editing user ${userId}`)}
      >
      </UserProfileCard>
    </>
  )
}

export default App

