
export function BlockCards({ blockCardsData }) {
  return (
    <>
      {
        blockCardsData.data.map((item,index) => {
          return (
            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
              <div className="blockCard">
                <div className="imgBoxFit">
                  <img src={item.imgUrl} alt="" />
                </div>
                <div className="cardBody">
                  <button>
                    <p>Pet knowledge</p>
                  </button>
                  <div className="cardTitle">
                    <p>{item.title}</p>
                  </div>
                  <div className="cardText">
                    <span>{item.text}</span>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </>
  )
}