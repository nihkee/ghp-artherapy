import './App.css';
import aquariumFrogs from './pages/AquariumFrogsM.jpeg'
import beachFrogs from './pages/BeachFrogsM.jpeg'
import cafeFrogs from './pages/CafeFrogsM.jpeg'
import fishingFrogs from './pages/FishingFrogsM.jpeg'
import picnicFrogs from './pages/PicnicFrogsM.jpeg'

import aquariumFrogsPDF from './pages/AquariumFrogs.pdf'
import beachFrogsPDF from './pages/BeachFrogs.pdf'
import cafeFrogsPDF from './pages/CafeFrogs.pdf'
import fishingFrogsPDF from './pages/FishingFrogs.pdf'
import picnicFrogsPDF from './pages/PicnicFrogs.pdf'

import NikkiPic from './submissions/Nikki.jpeg'
import JetPic from './submissions/Jet.jpeg'
import HienPic from './submissions/Hien.jpeg'
import KristyPic from './submissions/Kristy.jpeg'
import JNKHPic from './submissions/JNKH.jpeg'

function App() {
  return (
      <div class = "page">
      <head>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="stylesheet" href="style.css"></link>
        <title>arTherapy</title>
      </head>
      <body>
      {/* nav bar starts*/}
      <header>
      <p class = "logo"><a href = "#hero" class = "heroLink">arTherapy</a></p>
          <nav class = "navBar">
              <ul class = "navLinks">
                  <li><a href = "#about">About</a></li>
                  <li><a href = "#pages">Pages</a></li>
                  <li><a href = "#gallery">Gallery</a></li>
                  <li><a href = "#donate">Donate</a></li>
              </ul>
          </nav>
      </header>
      {/*nav bar ends*/}
      {/*hero starts*/}
      <div id = "hero" class = "hero">
          <div class = "heroText">
            <h1 class = "title">arTherapy</h1>
          </div>
      </div>
      {/*hero ends*/}
      {/*about starts*/}
      <div id = "about" class = "about">
              <div class = "aboutText">
                  <h1>About</h1>
                  <p>Hey there! Welcome to <i>arTherapy</i>!
                    <br></br>
                    <br></br>
                    At its core, ,<i>arTherapy</i> is all about blending the joy of coloring with the power of creativity. 
                    It was created by a college student who has interests in both coding and coloring. This website was programmed to house a collection of coloring pages, each hand-drawn from scratch. 
                    The main goal of <i>arTherapy</i> is to bring smiles to children in need. 
                    We believe that the simple act of coloring can be a magical form of self-expression and therapy, and every child deserves access to this creative outlet. 
                    That's why <i>arTherapy</i> is dedicated to providing free, downloadable coloring pages for anyone to enjoy. 
                    <br></br>
                    <br></br>
                    While these pages are designed with children in mind, they're open for all - because art knows no age limits!
                    Through compassion and creativity, we hope to continue to create a bridge between technology and artistry.
                    Please, join us in this colorful adventure to paint a brighter future, one pixel at a time. 
                    <br></br>
                    <br></br>
                    With hues of hope,
                    <br></br>
                    <i>arTherapy</i>.
                  </p>

              </div>
          </div>
      {/*about ends*/}
      {/*pages stars*/}
      <div id = "pages" class = "pages">
        <div class = "pagesText">
          <h1>Coloring Pages</h1>
          <p>
            Below you will find our collection of coloring pages that are free to download and to use. 
            The dimensions of each coloring page were made to fit a half sheet of regular printer paper for ease of coloring.
            The other half of the paper can either be cut off or be used to write a short, imaginative story that goes along with the artwork.
            <br></br>
            For any questions, please contact us <a href = "mailto: artherapy3@gmail.com" class = "emailLink1">here</a>.

          </p>
        </div>
      <div class = "pageImagesContainer">

        <div class = "pageImg">
          <h2>"Fish Watching"</h2>
          <img src={aquariumFrogs} alt = "coloring page of frogs at an aquarium"></img>
        </div>
        <a href={aquariumFrogsPDF} download="FishWatchingColoringPage">
          <button><strong>Download Here!</strong></button>
        </a>

        <div class = "pageImg">
          <h2>"Beach Day"</h2>
          <img src={beachFrogs} alt = "coloring page of frogs at the beach"></img>
        </div>
        <a href={beachFrogsPDF} download="BeachDayColoringPage">
          <button><strong>Download Here!</strong></button>
        </a>

        <div class = "pageImg">
          <h2>"Cakes & Coffees"</h2>
          <img src={cafeFrogs} alt = "coloring page of frogs at a cafe"></img>
        </div>
        <a href={cafeFrogsPDF} download="Cakes&CoffeeColoringPage">
          <button><strong>Download Here!</strong></button>
        </a>

        <div class = "pageImg">
          <h2>"Fishing for Friends"</h2>
          <img src={fishingFrogs} alt = "coloring page of frogs fishing at a pond"></img>
        </div>
        <a href={fishingFrogsPDF} download="FishingForFriendsColoringPage">
          <button><strong>Download Here!</strong></button>
        </a>

        <div class = "pageImg">
          <h2>"Surprise Picnic"</h2>
          <img src={picnicFrogs} alt = "coloring page of frogs enjoying a picnic"></img>
        </div>
        <a href={picnicFrogsPDF} download="SurpisePicnicColoringPage">
          <button><strong>Download Here!</strong></button>
        </a>

      </div>
      </div>
      {/*pages ends*/}
      {/*showcase starts*/}
      <div id = "gallery" class = "gallery">
        <div class = "galleryText">
          <h1>Gallery</h1>
          <p>
            Our site features a gallery of pages colored by people of all ages and talents from different parts of the world. 
            We encourage all of our artists to submit a picture of their artwork below and be featured on our site!
          </p>
        </div>
        <a href = "https://forms.gle/4BKQJ1jwJE3nNcEh7" target="_blank">
          <button><strong>Submit Here!</strong></button>
        </a>

        <div class = "galleryImgContainer">
          {/*COLUMN ONE*/}
          <div class = "column">
          <div class = "galleryImg">
            <img src = {NikkiPic} alt = "nikki's submission of her coloring page"></img>
            <div class = "hovercap">
              <p>Nikki (19), MD</p>
            </div>
          </div>
          </div>

          {/*COLUMN TWO*/}
          <div class = "column">
          <div class = "galleryImg">
            <img src = {JNKHPic} alt = "Jet, Nikki, Hien, and Kristy's submission of their coloring pages"></img>
            <div class = "hovercap">
              <p>Jet (20), Nikki (19),<br></br> Kristy (11), Hien (22), MD</p>
            </div>
          </div>

          <div class = "galleryImg">
            <img src = {JetPic} alt = "Jet's submission of his coloring page"></img>
            <div class = "hovercap">
              <p>Jet (20), MD</p>
            </div>
          </div>
          </div>

          {/*COLUMN THREE*/}
          <div class = "column">
          <div class = "galleryImg">
            <img src = {HienPic} alt = "Hien's submission of her coloring page"></img>
            <div class = "hovercap">
              <p>Hien (22), MD</p>
            </div>
          </div>

          <div class = "galleryImg">
            <img src = {KristyPic} alt = "Kristy's submission of her coloring page"></img>
            <div class = "hovercap">
              <p>Kristy (11), MD</p>
            </div>
          </div>
          </div>

        </div>
      </div>
      {/*showcase ends*/}
      {/*donate starts*/}
        <div id = "donate" class = "donate">
        <div class = "donateText">
          <h1>Donations</h1>
          <p>At <i>arTherapy</i>, we believe in the incredible potential of art to bring comfort, joy, and healing to those who need it most. 
            Our mission extends beyond providing free coloring pages - it's also about making a tangible impact in the lives of children facing challenging circumstances. 
            <br></br>
            <br></br>
            We want to give the option for supporters to donate funds to <i>arTherapy</i>, which would go towards purchasing quality coloring supplies (crayons, colored pencils, markers) for children located in local foster homes or hospitals.
            As we receive donations, we'll post updates on our website by sharing stories, photos, and heartfelt messages from the children and organizations benefiting from the generosity of our donators.
            We extend our deepest gratitude for joining <i>arTherapy</i>'s journey.
            <br></br>
            <br></br>
            Warmly,
            <br></br>
            The <i>arTherapy</i> Team.
          </p>
        </div>
        <a href = "https://gofund.me/8ac91219" target="_blank">
          <button><strong>Donate Here!</strong></button>
        </a>
        </div>
      {/*donate ends*/}
      {/*footer starts*/}
      <div class = "footer">
        <p>Website & coloring pages created by Nikki Cayas.
          <br></br>
        Get in Contact with us <a href = "mailto: artherapy3@gmail.com" class = "emailLink2">Here</a>!</p>
      </div>
      {/*footer ends*/}
      </body>
    </div>
    
  );
}

export default App;
