import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'

export default function App() {
  
  const cardElements = data.map(details => {
    return (
      <Card
        key={details.id}
        {...details}
      />
    )
})
return (
<div>
  <Navbar />
  <Hero />
  <section className='cards-list'>
    {cardElements}
  </section>
</div>
)
}