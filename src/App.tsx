// import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Screen } from './components/Screen/Screen';

/**
 *
 * @returns App component
 * displays the navbar and screen
 *
 * App Structure:
 *
 * -- Navbar
 *  --- SideNav
 * -- Screen
 *  --- HeroText
 *  --- ChatViewHolder
 *   ---- ChatBubble
 *
 */
function App() {
  return (
    <div>
      <Navbar />
      <Screen />
    </div>
  );
}

export default App;
