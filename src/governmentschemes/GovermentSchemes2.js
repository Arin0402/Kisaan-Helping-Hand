import React from 'react'
import './govermentscheme2.css';
import image1 from './image1.jpeg'
import image2 from './image2.jpeg'

const GovermentSchemes2 = () => {
  return (
    <div className="main">
        <div className="heading">
            <h2> PM KISAN YOJNA </h2>
        </div>
        <div className="description">
            <h2>ABOUT YOJNA</h2>
            <div className="subdesc">

                <p>The Modi government has taken a big step and announced to provide Kisan Credit Card (KCC) to all the beneficiaries of the PM KisanYojana.7 crore farmers of India have got KCC and enjoying its benefits. The good thing is that farmers can avail of a very cheap loan of about 4% on KCC. But if they repay the loan on time, then only they have to pay 4% interest</p>
                <img src={image2} alt="" />
            </div>
        </div>

        <div className="howtoavail">
            <h2> HOW TO AVAIL 4% INTEREST RATE </h2>
            <p>The rate of interest on Kisan Credit Card is 9 percent. But for the convenience of the farmers, a 2% subsidy is given by the government. After this, the rate of interest on the loan on KCC turns into 7 percent. Now if farmers return the loan within 1 year, they get a further rebate of an extra 3%. In such a case, the rate of interest on the loan will remain only 4 percent</p>
        </div>

        <div className="benefitslist">
            <h2>BENEFITS OF TAKING A LOAN THROUGH PM KISANYOJNA</h2>
            <ul>
                <li>No collateral (security) is required on a loan up to Rs 1.60 lakh</li>
                <li>Simple interest of 7% p.a will be charged for one year or till the date of payment</li>
                <li>Interest rebate of 2% p.a for loan amount up to Rs. 3 Lacs</li>
                <li>3% extra interest rebate on timely payment</li>
                <li>If not paid within the due dates interest is applied at card rate</li>
                <li>On the loan under KCC, insurance will be provided for the crop and area.</li>
                <li>All KCC borrowers get SBI Kisan Credit Card, which is a free ATM-cum-debit card.</li>
            </ul>


        </div>

        <div className="eligibility">
            <h2>BENEFITS OF TAKING A LOAN THROUGH PM KISANYOJNA</h2>
            <ul>
                <li>All farmers/individuals and joint cultivators</li>
                <li>Tenant farmers, sharecroppers,and oral lessees.</li>
                <li>Self-HelpGroups (SHGs)or Joint liability groups including tenant farmers.</li>
                
            </ul>
        </div>

        <div className="documents">
            <h2>DOCUMENTS REQUIRED</h2>
            <ul>
                <li>Application form</li>
                <li>Identity proof: Voter ID card, PAN card, Passport, Aadhaar card or Driving License, etc</li>
                <li>Address proof: Voter ID card, Passport, Aadhaar card, Driving license, etc</li>
                
            </ul>
        </div>

        <div className="check">
            <h2>HOW TO CHECK SBI KISAN CREDIT CARD ACCOUNT BALANCE</h2>
            <p>You can login into your SBI account to check the details of the loan. You may also contact SBI Bank customer care to know KCC account balance.
            <br />
            1800112211
            <br />
            18004253800
            <br />
            In case you are unable to connect with the customer care cell via the toll free numbers you can try the tolled number 080-26599990.
</p>
        </div>
    </div>
  )
}

export default GovermentSchemes2