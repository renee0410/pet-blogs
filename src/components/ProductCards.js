import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

export function ProductCards({ productCardsData, type }) {

  return (
    <ResponsiveMasonry columnsCountBreakPoints={{480: 2, 768: 3, 1024: 4}}>
      <Masonry gutter="20px">
        { 
          productCardsData.map((item, index) => {
            return (
              <div className="" key={index}>
                <div className="productCard">
                  <div className="imgBoxFit">
                    <img src={item.imgUrl} alt="" />
                  </div>
                  <div className="cardBody">
                    <p className="cardTitle">{item.title}</p>
                    <div className="cardInfo">
                      <span className="aboutLabelOne">{ type === 'products' ? 'Product' : 'Gene' }: {item.labelOne}
                      </span>
                      {/* labelTwo 有值的時候才顯示 */}
                      {
                        item.labelTwo && 
                        <span>•</span>
                      }
                      {
                        item.labelTwo && 
                        <span className="aboutLabelTwo">{ type === 'products' ? 'Size' : 'Age' }: {item.labelTwo} { type === 'products' ? '' : 'month' }</span>
                      }
                    </div>
                    <span className="cardPrice">{item.price.toLocaleString()} VND</span>
                  </div>
                </div>
              </div>
            )
          })
        }
      </Masonry>
      
    </ResponsiveMasonry>
  )
}