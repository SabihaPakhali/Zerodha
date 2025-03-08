import React from "react"; 

function Brokerage() {
    return ( 
        <div className="container">
          <div className="row p-5 mt-5 text-center border-top">
          <div className="col-8 p-4">
            <a href="" style={{textDecoration:"none"}}><h3 className="fs-5">Brokerage calculator</h3></a> 
            <ul
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}
            className="text-muted"
          >
            <li>
              Call & Trade and RMS auto-squareoff:Additional charges of ₹50 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
           </div>
  
          <div className="col-4 p-4">
         <a href="" style={{textDecoration:"none"}}><h3 className="fs-5">List of charges</h3></a> 
         <ul
  style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}
  className="text-muted"
>
  <li>Account opening charges: ₹200 (Equity) / ₹300 (Commodity)</li>
  <li>Annual maintenance charge (AMC) for Demat account: ₹300 per year</li>
  <li>Equity delivery brokerage: ₹0 (free)</li>
  <li>Intraday, F&O, Currency & Commodity brokerage: ₹20 or 0.03% per executed order (whichever is lower)</li>
  <li>DP charges: ₹13.5 per scrip per day on selling</li>
 
  </ul>

          </div>         
          </div>
        </div>
     );
}

export default Brokerage;