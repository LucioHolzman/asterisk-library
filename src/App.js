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
    "https://images2.alphacoders.com/786/786780.jpg",
    "https://images7.alphacoders.com/303/thumb-1920-303050.png",
    "https://a-static.besthdwallpaper.com/irradia-el-brillo-a-traves-de-blue-nebulosa-del-espacio-papel-pintado-1920x1080-26662_48.jpg",
    "https://www.10wallpaper.com/wallpaper/1920x1200/1303/planets_stars_nebula_universe-space_HD_Widescreen_Wallpapers_1920x1200.jpg",
    "https://c.wallhere.com/photos/d1/6d/galaxy_space_space_art_planet_digital_art-252304.jpg!d",
    "https://i.pinimg.com/originals/23/2a/05/232a057f04bcefe23d6845f53a1b42a6.jpg",
    "https://c.wallhere.com/photos/57/ab/1600x1067_px_space_Space_Art_stars-654760.jpg!d",
    "https://www.wallpapertip.com/wmimgs/9-93179_background-high-resolution-galaxy.jpg",
    "https://c.wallhere.com/photos/4d/12/fantasy_art-193196.jpg!d",
  ];
  return (
    <>
      <Carousel 
      elements={elements}
      width={500} 
      height={250} 
      />
      <ArrowLeft className="arrow-left"/>
      <ArrowRight className="arrow-right"/>
      <Position initialPosition='v'/>
    {/* <div className="container">
  <Card>
      <img className='card-image' src={elements[1]} alt=""/>
      <div className='card-content'>
        <h4 className='card-title'>Card title</h4>
        <p className='card-text'>This is a card with multiple lines.</p>
        <a href='#!' className='card-link'>This is a card with a link.</a>
      </div>
  </Card>

  </div> */}
    </>
  );
}

export default App;
