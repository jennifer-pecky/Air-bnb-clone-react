import './App.css'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Card from './component/Card'
import data from './data'


function App() {

  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>

    </div>
  )
}

export default App
