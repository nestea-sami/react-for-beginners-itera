import './App.css';
import data from './biography.json';
import { Footer } from './Footer';


const user = { userName: 'Anastasiia' }
const App = () => (
  <div className="App">
    <h1>Hello world {user.userName}</h1>
    <div className="User">
      <h2>About me:</h2>
      <p>{data.name}</p>
      <p>{data['b-day']}</p>
      <h3>Contacts:</h3>
      <ul>
        <li><a href="mailto:an.samiliuk@gmail.com">{data.contacts.email}</a></li>
        <li><a href="https://www.instagram.com/nestea_sami/">instagram: {data.contacts.instagram}</a></li>
        <li><a href="https://github.com/nestea-sami">{data.contacts.github}</a></li>
      </ul> 
    </div>
    
    <Footer copyright='C'/>
  </div>
)

export default App;
