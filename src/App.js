import "./App.css";
import {
  Carousel,
  Position,
  ArrowLeft,
  ArrowRight,
} from "./components/Carousel";

  import {Card} from "./components/Card";
function App() {
  const elements = [
    "https://images3.alphacoders.com/990/990915.jpg",
    "https://i.pinimg.com/originals/b9/75/7e/b9757e8f32831d4272985153d13e7f9e.png",
    "https://fondosmil.com/fondo/53577.jpg",
    "https://images2.alphacoders.com/766/thumb-1920-766963.png",
    "https://www.wallpapertip.com/wmimgs/28-280824_jojo-bizarre-adventure-stardust-crusaders.png",
    "https://coolwallpapers.me/picsup/5585728-jojo-wallpapers.jpg",
    "https://images4.alphacoders.com/106/thumb-1920-1064307.png",
    "https://images.alphacoders.com/981/thumb-1920-981968.jpg",
    "https://cutewallpaper.org/21/jojo-hd-wallpaper/1920x1080-JoJo-Wallpapers-StardustCrusaders.png",
  ];
  return (
    <>
      <Carousel 
      elements={elements}
      initialPosition={0} 
      width={500} 
      height={250} 
      />
      <ArrowLeft className="arrow-left"/>
      <ArrowRight className="arrow-right"/>
      <Position initialPosition='v'/>
    <div className="container">
  {/* <Card>
      <img className='card-image' src={elements[1]} alt=""/>
      <div className='card-content'>
        <h4 className='card-title'>Card title</h4>
        <p className='card-text'>This is a card with multiple lines.</p>
        <a href='#!' className='card-link'>This is a card with a link.</a>
      </div>
  </Card>
  <Card>
    <img className='card-image' src={elements[2]} alt=""/>
    <div className='card-content'>
      <h4 className='card-title'>Card title</h4>
      <p className='card-text'>This is a card with multiple lines.</p>
      <a href='#!' className='card-link'>This is a card with a link.</a>
    </div>
  </Card>
  <Card>
    <img className='card-image' src={elements[3]} alt=""/>
    <div className='card-content'>
      <h4 className='card-title'>Card title</h4>
      <p className='card-text'>This is a card with multiple lines.</p>
      <a href='#!' className='card-link'>This is a card with a link.</a>
    </div>
  </Card>
  <Card>
    <img className='card-image' src={elements[4]} alt=""/>
    <div className='card-content'>
      <h4 className='card-title'>Card title</h4>
      <p className='card-text'>This is a card with multiple lines.</p>
      <a href='#!' className='card-link'>This is a card with a link.</a>
    </div>
  </Card>
  <Card>
    <img className='card-image' src={elements[5]} alt=""/>
    <div className='card-content'>
      <h4 className='card-title'>Card title</h4>
      <p className='card-text'>This is a card with multiple lines.</p>
      <a href='#!' className='card-link'>This is a card with a link.</a>
    </div>
  </Card> */}

  </div>
    </>
  );
}

export default App;
