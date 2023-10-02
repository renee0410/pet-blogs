import { Button } from "../components/Button";
import { ProductCards } from "../components/ProductCards";
import { BlockCards } from "../components/BlockCards";
// json
import WhatsNewData from '../assets/cardData/whatsNew.json';
import OurProductsData from '../assets/cardData/ourProducts.json'; 
import petKnowledgeData from '../assets/cardData/petKnowledge.json';
// icon
import Play from '../assets/img/icon/Vector.png';
import ArrowRight from '../assets/img/icon/Chevron_Right_MD.svg';
import Paw from '../assets/img/icon/fontisto_paw.svg';
//background
import Human from '../assets/img/background/good-humored-woman-holds-dog-laughing-pink-background-emotional-sort-haired-girl-grey-hoodie-poses-with-corgi-isolated 1.svg';
import Rectangle1 from '../assets/img/background/rectangle/Rectangle 1.svg';
import Rectangle2 from '../assets/img/background/rectangle/Rectangle 2.svg';
import Rectangle3 from '../assets/img/background/rectangle/Rectangle 3.svg';
import Rectangle5 from '../assets/img/background/rectangle/Rectangle 5.svg';
import Rectangle6 from '../assets/img/background/rectangle/Rectangle 6.svg';
import Rectangle7 from '../assets/img/background/rectangle/Rectangle 7.svg';
import Rectangle8 from '../assets/img/background/rectangle/Rectangle 8.svg';
import Rectangle9 from '../assets/img/background/rectangle/Rectangle 9.svg';
import Banner01 from '../assets/img/background/Banner.svg';
import Banner02 from '../assets/img/background/Banner02.svg';
import Banner01Mobile from '../assets/img/background/Banner01Mobile.svg';
// brands
import Brand1 from '../assets/img/brand/brand1.svg';
import Brand2 from '../assets/img/brand/brand2.svg';
import Brand3 from '../assets/img/brand/brand3.svg';
import Brand4 from '../assets/img/brand/brand4.svg';
import Brand5 from '../assets/img/brand/brand5.svg';
import Brand6 from '../assets/img/brand/brand6.svg';
import Brand7 from '../assets/img/brand/brand7.svg';

export function HomePage() {
  return (
    <>
      <div className="homePage">
        <div className="container">
        
        </div>
          {/* hero */}
          <div className="hero">
            {/* 背景 */}
            <div className="backgroundImg">
              <img src={Human} className="imgStyle" alt="" />
            </div>
            {/* rectangle背景 */}
            <div className="img1">
              <img src={Rectangle1} className="imgStyle" alt="" />
            </div>
            <div className="img2">
              <img src={Rectangle2} className="imgStyle" alt="" />
            </div>
            <div className="img3">
              <img src={Rectangle3} alt="" />
            </div>
            <div className="img5">
              <img src={Rectangle5} alt="" />
            </div>
            <div className="img6">
              <img src={Rectangle6} alt="" />
            </div>
            <div className="img7">
              <img src={Rectangle7} alt="" />
            </div>
            <div className="img8">
              <img src={Rectangle8} alt="" />
            </div>
            <div className="img9">
              <img src={Rectangle9} alt="" />
            </div>
            <div className="container">
              <h1>One more friend</h1>
              <h3>Thousands more fun!</h3>
              <p>Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+<br/>different pets that can meet your needs!</p>
              {/* btn區塊 */}
              <div className="btnArea">
                <Button
                  style='btnSecondary'
                  text='View intro'
                  icon={Play}
                ></Button>
                <Button
                  style='btnPrimary'
                  text='Explore now'
                ></Button>
              </div>
            </div>
          </div>
          <div className="container">
            {/* whats new */}
            <div className="whatsNew">
              <div className="titleArea"> 
                {/* 標題 */}
                <div className="title">
                  <p>Whats new?</p>
                  <h5>Take a look at some of our pets</h5>
                </div>
                {/* btn */}
                <div className="btnArea">
                  <Button
                    style='btnSecondary'
                    text='View more'
                    icon={ArrowRight}
                  ></Button>
                </div>
              </div>
              {/* product cards */}
              <div className="productCardsArea">
                <div className="row">
                  <ProductCards
                    productCardsData = {WhatsNewData}
                    type = 'pets'
                  ></ProductCards>
                </div>
              </div>
            </div>
            {/* banner */}
            <div className="bannerArea01">
              <div className="banner">
                <img src={Banner01} className="banner01" alt="" />
                <img src={Banner01Mobile} className="banner01Mobile" alt="" />
              </div>
              <div className=" banner01 row r-block">
                <div className="col-lg-5 col-md-12 mr">
                  <div className="textArea">
                    <h2>One more friend</h2>
                    <h4>Thousands more fun!</h4>
                    <span>Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</span>
                  </div>
                  <div className="btnArea">
                    <Button
                      text='View Intro'
                      style='btnSecondary'
                      icon={Play}
                    ></Button>
                    <Button
                      style='btnPrimary'
                      text='Explore now'
                    ></Button>
                  </div>
                </div>
              </div>
            </div>
            {/* our products */}
            <div className="ourProducts">
              <div className="titleArea">
                <div className="title">
                    <p>Hard to choose right products for your pets?</p>
                    <h5>Our Products</h5>
                  </div>
                  {/* btn */}
                  <div className="btnArea">
                    <Button
                      style='btnSecondary'
                      text='View more'
                      icon={ArrowRight}
                    ></Button>
                  </div>
              </div>
              <div className="productCardsArea">
                <div className="row">
                  <ProductCards
                    productCardsData={OurProductsData}
                    type = 'products'
                  ></ProductCards>
                </div>
              </div>
            </div>
            {/* brands */}
            <div className="brandsArea">
              <div className="titleArea">
                <div className="title">
                    <p>Proud to be part of</p>
                    <h5>Pet Sellers</h5>
                  </div>
                  {/* btn */}
                  <div className="btnArea">
                    <Button
                      style='btnSecondary'
                      text='View all our sellers'
                      icon={ArrowRight}
                    ></Button>
                  </div>
              </div>
              <div className="brandsImg">
                <img src={Brand1} alt="" />
                <img src={Brand2} alt="" />
                <img src={Brand3} alt="" />
                <img src={Brand4} alt="" />
                <img src={Brand5} alt="" />
                <img src={Brand6} alt="" />
                <img src={Brand7} alt="" />
              </div>
            </div>
            {/* banner */}
            <div className="bannerArea02">
              <div className="banner">
                <img src={Banner02} alt="" />
              </div>
              <div className=" banner02 row l-block">
                <div className="col-lg-5 col-md-12 mr">
                  <div className="textArea">
                    <h2>Adoption</h2>
                    <h4>We need help. so do they.</h4>
                    <span>Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</span>
                  </div>
                  <div className="btnArea">
                    <Button
                      text='View Intro'
                      style='btnSecondary'
                      icon={Play}
                    ></Button>
                    <Button
                      style='btnPrimary'
                      text='Explore now'
                    ></Button>
                  </div>
                </div>
              </div>
            </div>
            {/* pet knowledge */}
            <div className="petKnowledge">
              <div className="titleArea"> 
                {/* 標題 */}
                <div className="title">
                  <p>You already know ?</p>
                  <h5>Useful pet knowledge</h5>
                </div>
                {/* btn */}
                <div className="btnArea">
                  <Button
                    style='btnSecondary'
                    text='View more'
                    icon={ArrowRight}
                  ></Button>
                </div>
              </div>
              <div className="blockCardsArea">
                <div className="row">
                  <BlockCards
                    blockCardsData={petKnowledgeData}
                  ></BlockCards>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}