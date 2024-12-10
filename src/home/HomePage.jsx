import React from 'react'
import { BannerPage } from './BannerPage'
import { HomeCategory } from './HomeCategory'
import { CategoryShowCase } from './CategoryShowCase'
import { RegisterPage } from './RegisterPage'
import { Location } from './Location'
import { AboutUs } from './AboutUs'
import { AppSection } from './AppSection'
import { Sponser } from './Sponser'
// import { PrivateRoutesList } from '../Routes/PrivateRoutes'
export const HomePage = () => {

  // const {
  //   HOME
  //   } =PrivateRoutesList
  return (
    <div>
     <BannerPage />
     <HomeCategory />
     <CategoryShowCase />
     <RegisterPage />
  <Location />
  <AboutUs />
  <AppSection />
  {/* <Sponser /> */}
  
    </div>
  )
}
