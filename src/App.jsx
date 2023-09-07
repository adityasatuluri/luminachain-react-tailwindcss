import React from 'react'
import styles from './style';
import {  Navbar,Billing,CardDeal,Business,Clients,CTA,Stats,Footer,Testimonials,Hero} from './components';

const App = () =>  (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={'${styles.paddingX} ${styles.flexCenter}'}>
        <div className={'${styles.boxWdith}'}>
          <Navbar/>
        </div>
      </div>

        <div className={'bg-primary ${styles.flexStart}'}>
          <div className={'${styles.boxWdith}'}>
            <Hero/>
          </div>
        </div>

        <div className={'bg-primary ${styles.paddingX} ${styles.flexStart}'}>
          <div className={'${styles.boxWdith}'}>
            <Stats/>
            <Business/>
            <Billing/>
            <CardDeal/>
            <Testimonials/>
            <Clients/>
            <CTA/>
            <Footer/>
          </div>
        </div>
    </div>
  );


export default App