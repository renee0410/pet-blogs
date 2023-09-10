import { Button } from "../components/Button";

// icon
import Play from '../assets/img/icon/Vector.png';

export function HomePage() {
  return (
    <>
      <div className="homePage">
        {/* hero */}
        <div className="hero">
          <div className="container">
            <h1>One more friend</h1>
            <h2>Thousands more fun!</h2>
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
      </div>
      
    </>
  )
}