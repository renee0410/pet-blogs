import { Button } from "../components/Button";
import { ProductCards } from "../components/ProductCards";
import { BlockCards } from "../components/BlockCards";
// data
import {
  petKnowledge,
  whatsNewData,
  ourProducts,
} from '../assets/cardData/index';
// icon
import {
  Play,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from '../assets/img/icon/index.js';
//background
import {
  Human,
  Rectangle1,
  Rectangle2,
  Rectangle3,
  Rectangle5,
  Rectangle6,
  Rectangle7,
  Rectangle8,
  Rectangle9,
  Banner01,
  Banner02,
  Banner01Mobile,
} from '../assets/img/background/index';
// brands
import {
  Brand1,
  Brand2,
  Brand3,
  Brand4,
  Brand5,
  Brand6,
  Brand7,
} from '../assets/img/brand/index';
//logo
import { FooterLogo } from '../assets/img/logo/index';

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
            <img src={Human} className="imgStyle" alt="" loading="lazy"/>
          </div>
          {/* rectangle背景 */}
          <div className="img1">
            <img src={Rectangle1} className="imgStyle" alt="" loading="lazy"/>
          </div>
          <div className="img2">
            <img src={Rectangle2} className="imgStyle" alt="" loading="lazy"/>
          </div>
          <div className="img3">
            <img src={Rectangle3} alt="" loading="lazy"/>
          </div>
          <div className="img5">
            <img src={Rectangle5} alt="" loading="lazy"/>
          </div>
          <div className="img6">
            <img src={Rectangle6} alt="" loading="lazy"/>
          </div>
          <div className="img7">
            <img src={Rectangle7} alt="" loading="lazy"/>
          </div>
          <div className="img8">
            <img src={Rectangle8} alt="" loading="lazy"/>
          </div>
          <div className="img9">
            <img src={Rectangle9} alt="" loading="lazy"/>
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
              <div className="">
                <ProductCards
                  productCardsData = {whatsNewData}
                  type = 'pets'
                ></ProductCards>
              </div>
            </div>
          </div>
          {/* banner */}
          <div className="bannerArea01">
            <div className="banner">
              <img src={Banner01} className="banner01" alt="" loading="lazy"/>
              <img src={Banner01Mobile} className="banner01Mobile" alt="" loading="lazy"/>
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
              <div className="">
                <ProductCards
                  productCardsData={ourProducts}
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
              <img src={Brand1} alt="" loading="lazy"/>
              <img src={Brand2} alt="" loading="lazy"/>
              <img src={Brand3} alt="" loading="lazy"/>
              <img src={Brand4} alt="" loading="lazy"/>
              <img src={Brand5} alt="" loading="lazy"/>
              <img src={Brand6} alt="" loading="lazy"/>
              <img src={Brand7} alt="" loading="lazy"/>
            </div>
          </div>
          {/* banner */}
          <div className="bannerArea02">
            <div className="banner">
              <img src={Banner02} alt="" loading="lazy"/>
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
                  blockCardsData={petKnowledge}
                ></BlockCards>
              </div>
            </div>
          </div>
        </div>
        {/* footer */}
        <div className="footer">
          <div className="container">
            <div className="subscribeBlock">
              <div className="row">
                <div className="col-lg-4 col-md-12">
                  <h5>Register now so you don't miss our programs</h5>
                </div>
                <div className="col-lg-8 col-md-12">
                  <div className="inputArea">
                    <div className="row">
                      <div className="col-lg-8 col-md-12">
                        <input type="email" placeholder="Enter your Email" className="inputStyle"/>
                      </div>
                      <div className="col-lg-4 col-md-12">
                        <button className="btnStyle">Subscribe</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footerContent">
              <div className="footerNav">
                <a href="#">Home</a>
                <a href="#">Category</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
              </div>
              <div className="footerIcon">
                <img src={Facebook} alt="" loading="lazy"/>
                <img src={Twitter} alt="" loading="lazy"/>
                <img src={Instagram} alt="" loading="lazy"/>
                <img src={Youtube} alt="" loading="lazy"/>
              </div>
            </div>
            <div className="footerCopyright">
              <div className="copyrightInfo">
                <span>© 2022 Monito. All rights reserved.</span>
              </div>
              <div className="footerLogo">
                <img src={FooterLogo} alt="" loading="lazy"/>
              </div>
              <div className="policyInfo">
                <span>Terms of Service</span>
                <span>Privacy Policy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}