import React from 'react'
import './govermentscheme3.css';
import image1 from '../src/image1.jpeg'
// import image2 from '../src/image2.jpeg'

const GovermentSchemes2 = () => {
  return (
    <div className="main">
        <div className="heading">
            <h2>  DEENDAYAL UPADHYAY SAHAKARITA KISAN KALYAN YOJNA </h2>
        </div>
        <div className="description">
            <h2>ABOUT YOJNA</h2>
            <div className="subdesc">

                <p>Uttarakhand State Government launched a new scheme named Deendayal Upadhyay Sahakarita Kisan Kalyan Yojana on 6 February 2022. It is a free farm loan scheme. On the other hand, this scheme provides a loan facility is up to rupees  5 lakh at a 0% interest rate.Farmers of the state will get low-interest rates loans. On the other hand,Uttarakhand state farmers will get a 1 lakh loan at 2% interest. This Scheme will encourage farmers to earn more money and to do mixed farming also. In the hill areas, farmers will get Benefits from this Scheme directly.</p>
                <img src={image1} alt="" />
            </div>
        </div>

      
        <div className="benefitslist">
            <h2>
                SAHKARITA KISAN KALYAN YOJNA OBJECTIVE
            </h2>
            <ul>
                <li>Under this category, the farmers will get up to 1 lakh Rupees at a 2% interest rate.</li>
                <li>Now, farmers will not need to depend on the money lenders attitude</li>
                <li>Farmers can return this loan amount to the governments within three years.</li>
                <li>The Scheme will help to promote mixed farming for the farmers</li>
                <li>On the other hand, the main aim of the Kisan Kalyan Yojana is to enhance the farmers income by 2022.</li>
                <li>The central government will double the income of hill farmers..</li>
                <li>●	Farmers can be free from the burden of debt..</li>
            </ul>


        </div>

        <div className="eligibility">
            <h2>
                AS A FARMER, YOU WILL HAVE TO FOLLOW THE FOLLOWING ELIGIBILITY CRITERIA GIVEN BELOW -
            </h2>
            <ul>
                <li>Farmers of the state must be a permanent native</li>
                <li>It is an agriculture-related scheme..</li>
                <li>Any member of the family must not be a government employee.</li>
                <li>Farmer Welfare scheme.</li>
            </ul>
        </div>

        <div className="documents">
            <h2>DOCUMENTS REQUIRED</h2>
            <ul>
                <li>Aadhar card</li>
                <li>Ration Card</li>
                <li>Domicile certificate</li>
                <li>Income certificate</li>
                <li>Bank account details</li>
                <li>Recent passport size photograph.</li>


                
            </ul>
        </div>

        <div className="check">
            <h2>How to apply Deen Dayal Sahkarita Kisan Kalyan Yojana 2022 ?</h2>
           <ul>
               <li>The department of agriculture and revenue department of Uttarakhand state has implemented this Scheme.</li>
               <li>The farmers can apply directly via the official website of the agriculture department of Uttarakhand.</li>
               <li>As an applicant, you will get all relevant information about Deendayal Upadhyay Kisan Kalyan yojana from this article.</li>
               <li>If you have any doubt regarding the Scheme you can tell us in the comment section below.</li>
               <li>We hope that you will subscribe to our website to get the latest info about the Scheme</li>
           </ul>
        </div>
    </div>
  )
}

export default GovermentSchemes2