
export function ProductCards({ productCardsData, type }) {

  return (
    <>
      { productCardsData.data.map((item, index) => {
        return (
          <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
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
      })}
    </>
  )
}