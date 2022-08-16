import React from 'react';
import { BranchLocation, CourierBanner, CourierSupport, EnjoyDeliveryCharge } from '../courier';
import { ContactUs, EnterpriseBanner, MerchantStory, SortBanner, Vehicles } from '../enterprise';
import { Footer } from '../footer';
import { Header } from '../header';
import { Banner, ClientFeedback, CoverageArea, DeliveryCalculator, Faq, LogisticsPartner, Service } from '../home';


export const Layout = ({ children }) => {
    return (
        <div>

            <Header />
            {/* home start  */}
            {/* <Banner />
            <Service />
            <LogisticsPartner />
            <CoverageArea />
            <DeliveryCalculator />
            <ClientFeedback />
            <Faq /> */}
            {/* home end  */}

            {/* <EnterpriseBanner />
            <LogisticsPartner />
            <Vehicles />
            <MerchantStory />
            <ContactUs />
            <SortBanner /> */}
            <CourierBanner />
            <CourierSupport />
            <BranchLocation />
            <EnjoyDeliveryCharge />

            {children}
            <Footer />
        </div>
    );
};
