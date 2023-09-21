import { Button } from "../components/Button";
import { useEffect } from "react";
// json
import WhatsNewData from '../assets/cardData/whatsNew.json';

// icon
import Play from '../assets/img/icon/Vector.png';
import ArrowRight from '../assets/img/icon/Chevron_Right_MD.svg';
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

export function HomePage() {
  return (
    <>
      <div className="homePage">
        {/* hero */}
        <div className="hero">
          {/* 背景 */}
          <div className="backgroundImg">
            <img src={Human} alt="" />
          </div>
          {/* rectangle背景 */}
          <div className="img1">
            <img src={Rectangle1} alt="" />
          </div>
          <div className="img2">
            <img src={Rectangle2} alt="" />
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
          <div className="container-lg">
            <h1>One more friend</h1>
            <h3>Thousands more fun!</h3>
            <p>Having a pet means you have more joy, a new friend, a happy<br/>person who will always be with you to have fun. We have 200+<br/>different pets that can meet your needs!</p>
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
        {/* whats new */}
        <div className="whatsNew">
          <div className="container-lg container-md">
            <div className="whatsNewTop"> 
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
                {
                  WhatsNewData.data.map((item) => {
                    console.log(item)
                    return (
                      <>
                        <div className="col-lg-3 col-md-4">
                          <div className="productCard">
                            <div className="imgBoxFit">
                              <img src={item.imgUrl} alt="" />
                            </div>
                            <div className="cardBody">
                              <p className="cardTitle">{item.title}</p>
                              <div className="cardInfo">
                                <span className="aboutGene">Gene: {item.gene}</span>
                                <span>•</span>
                                <span className="aboutAge">Age: {item.age} month</span>
                              </div>
                              <span className="cardPrice">{item.price.toLocaleString()} VND</span>
                            </div>
                          </div>
                        </div>
                      </>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
        {/* Banner */}
        <div className="bannerOne">
          <div className="container-lg">
            <div className="banner01">
              <img src={Banner01} alt="" />
            </div>
            <div className="row">
              <div className="col-lg-5">
                <div className="textArea">
                  <h2>One more friend</h2>
                  <h4>&nbsp;&nbsp;&nbsp;&nbsp;Thousands more fun!</h4>
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
        </div>
      </div>
    </>
  )
}