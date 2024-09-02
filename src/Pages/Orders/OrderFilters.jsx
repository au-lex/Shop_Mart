

import React,{useState} from 'react'

const OrderFilters = () => {
  const orderfilters = ["pending","sucesss", "failed"];
  const [activeOrder, SetactiveOrder] = useState(0);
  const handleorder = (tab) => {
    SetactiveOrder(tab)
  }
  return (
    <>
    
    
    <section className="tabs">

      <section className="filter">
        {orderfilters.map((ord,idx) => (
          <>
          <div key={idx} onClick={() => handleorder(idx)}>
            <h1 className={`${activeOrder === idx ? "text-red-500" : ""}`}>{ord}</h1>

          </div>
       


          </>
        ))}

{activeOrder == 0 && <div>
            hello
            </div>}{activeOrder == 1 && <div>
            hello2
            </div>}{activeOrder == 2 && <div>
            hello3
            </div>}
      </section>
      
      
      </section></>
  )
}

export default OrderFilters