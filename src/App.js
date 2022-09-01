import './App.css';
import AppRouter from './components/AppRouter'
import NavBarComponent from './components/NavBar';
import ParticlesComponent from './components/Particles';

function App() {
  return (
    <div className="outermost-div"> 

      <NavBarComponent/> {/* over-particles class already toggled inside the NavBarComponent, so it will display over the particle background */}
      <AppRouter/>
      <ParticlesComponent/>

    </div>
  );
}

export default App;
