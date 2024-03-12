
import React, { useState } from 'react';
import '../../App.css'; 
import EvalutionAndDesign from './EvalutionAndDesign'
import CustomSoftware from './CustomSoftware'
import WebDevelopment from './WebDevelopment'
import MobileDevelopment from './MobileDevelopment'
import Maintanance from './Maintanance'

function TabSlider() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="tab-slider">
      <div className="horizontal-tabs">
        <div className={`tab ${activeTab === 1 ? 'active' : ''}`} onClick={() => handleTabClick(1)}>Evaluation & Design</div>
        <div className={`tab ${activeTab === 2 ? 'active' : ''}`} onClick={() => handleTabClick(2)}>Custom Software</div>
        <div className={`tab ${activeTab === 3 ? 'active' : ''}`} onClick={() => handleTabClick(3)}>Web Development</div>
        <div className={`tab ${activeTab === 4 ? 'active' : ''}`} onClick={() => handleTabClick(4)}>Mobile Development</div>
        <div className={`tab ${activeTab === 5 ? 'active' : ''}`} onClick={() => handleTabClick(5)}>Maintenance & Support</div>
      </div>
      <hr className="hr-line1 mt-5"/>
      <div className="tab-content sec-even">
        {activeTab === 1 && <EvalutionAndDesign />}
        {activeTab === 2 && <CustomSoftware />}
        {activeTab === 3 && <WebDevelopment />}
        {activeTab === 4 && <MobileDevelopment />}
        {activeTab === 5 && <Maintanance />}
      </div>
      <hr className="hr-line1"/>
    </div>
  );
}

export default TabSlider;
