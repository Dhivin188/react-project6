import React, {Component} from 'react';
import Amazon from './Images/a.png'
import MOBILE from './Images/mobile.jpg'
import MOB from './Images/Vyp4t2Vm.jpg'
import MOBI from './Images/mob.jpg'
import './file.css'
 class New extends Component {
  render(){
  return(
  <div>
   <h1 style={{ color: 'blue',textAlign:"center" }}> BIG DAY SALE FOR MOBILES </h1>
   <p style={{textAlign:"center"}}>Mobileile made communication easier, as just by pressing some keys on mobile, we can contact our friends, family members or colleagues, and others at any time. Mobile also gives us a facility to contact our fellow person with voice calls, video calls, text messages, recorded calls, and many more.</p>
   <img className="img" style={{ marginLeft: "1px" }} src={MOBILE} alt="abd" width={300} height={300} />
<img className="img" style={{ marginLeft: "18%" }} src={MOB} alt="abd" width={300} height={300} />
<img className="img" style={{ marginLeft: "18%" }} src={MOBI} alt="abd" width={300} height={300} />
</div>
  );
  }
}
export default New;
