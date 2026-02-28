import './App.css'

const Card = ({ title }) => {
  return (
    <div className='card'>
      <h1>Cards</h1>
      <h2>{title}</h2>
    </div>
  )
}



const App = () => {
  return (
    <div className='card-container'>
      <h1>Making sure!</h1>

      <Card title="Star Wars" rating={5} isFavorited={true}/>
      <Card title="Avatar" />
      <Card title="The Lion King" />
    </div>
  );
}

export default App
