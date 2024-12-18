import {Layout } from 'antd';
import './App.css'
import { Button } from './Button';
import Title from './Title';
import CloseBtn from './CloseBtn';
import { CharacterScreen } from './CharacterScreen';
import Clock from './Clock';



function App() {
  const layoutStyles = {
    background: "transparent",
    maxWidth: "375px",
    height: "667px",
    padding: "20px",
    border:"1px solid #000", 
    borderRadius:"16px"
  };

  return (
    <>
      <Layout style={layoutStyles}>
        <CloseBtn />
        <Title />
        <Button />
        <Clock />
        <CharacterScreen />
      </Layout>
    </>
  );
}

export default App
