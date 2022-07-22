import React from 'react'
import { Box} from '@chakra-ui/react'
import Subpart from './Subpart'


const RightSidebar = () => {
  return (
    <div style={{width:"100%" ,height:"100%" }}>
            <Box style={{marginLeft:"20px",marginBottom:"20px" , fontWeight:"bold"}}>Popular Topics</Box>
           <Subpart title1={"Refund Timelines, Policies & processes"} title2={"Expedia may take up to 24 hours to process your refund. Once that has happened, your bank or payment service (such as PayPal) will take care of the rest. Just know that it may take them up to 7 days to post the credit to your account, and up to 2 billing cycles to show the credit on your statement"}/>
           <Subpart title1={"Use an Expedia Coupon"} title2={"At Expedia, we offer all sorts of coupons through our Travel Deals emails and our Expedia Coupons Codes page. You’ll either enter the code at checkout or save the offer to your Expedia account. Once you’re done booking, your coupon will show on the Coupons page under Redeemed and expired coupons."}/>
           <Subpart title1={"Book a Flight using an  airline credit"} title2={"Keep in mind, you can’t access the Coupons and Credits page without an account. If you don’t already have one, you’ll need to create an account using the same email address used to book your original flight."}/>
           <Subpart title1={"What is Expedia Rewards"} title2={"You earn points when you book travel on eligible hotels, packages, cars, activities, and flights. And the more points you earn, the more you can use on future bookings and the higher your membership status."}/>
           <Subpart title1={"View and Claim missing Expedia Rewards Points"} title2={"Points can only be redeemed for a package coupon online and the coupons can only be applied to bookings made online. Customer service agents cannot apply your package coupon to any bookings made over the phone or via email."}/>
           <Subpart title1={"Earn Expedia Rewards tier status"} title2={"Your status is valid from the day it is earned, for the following full calendar year, and expires on February 28 of the year after. For example, status earned in 2021 is valid from the day you earn it until February 28, 2023."}/>
           <Subpart title1={"VIP Access Properties and Elite benefits"} title2={"You can take advantage of VIP Access properties, a global network of properties known for superior service and great reviews from our members. Even better, you'll earn triple points when you book a VIP Access property."}/>
           <Subpart title1={"Travel to , form or through Russia"} title2={"Check your airport to find out if there is specific travel advice for travelers. During times of travel disruption, allow plenty of time to get to the airport."}/>
           <Subpart title1={"Flight insurance"} title2={"This plan adds benefits to the existing Flight Cancellation Plan, such as medical expense and coverage for accidental death, for any loss, theft, or damage to your baggage and personal belongings. Be aware that there may be limitations and exclusions."}/>





    </div>
  )
}

export default RightSidebar
