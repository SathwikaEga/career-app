import React from 'react';
function Medical() {
    return ( <div>
      <p className='display-6'>MEDICAL</p>
      <div className='container head'>
        <div className=''>Elgibility     : Bi.P.C</div>
        
          </div>
      <ol className="compo">
        <li className="pb-3"><p className="head">Medicine - 5 years</p>
        <div >Entrance Tests : EAMCET, NEET</div>
        <ul>
          <li>Bachelor of Medicine and Bachelor of Surgery(MBBS)</li>
          <li>Bachelor of Unani Medicine and Surgery(BUMS)</li>
          <li>Bachelor of Homeopathic Medicine and Surgery (BHMS)</li>
          <li>Bachelor of Ayurvedic Medicine and Surgery(BAMS)</li>
          <li>Bachelor of Naturopathy and Yogic Science(BNYS)</li>
          <li>Bachelor of Dental Surgery (BDS)</li>
          <li>Bachelor of Science in Agriculture(Ag.BSc)</li>
          <li>Bachelor of Veterinary Science(BVSc)</li>
          <li>Bachelor of Physiotherapy(BPT)</li>
        </ul>
        </li>
        <li className="pb-3"><p className="head">Allied Health Sciences-2/3 years</p>
          <ul>
            <li>Bachelor of Pharmacy(B.Pharm)</li>
            <li>Bachelor of Science in Nursing</li>
            <li>Bachelor of Occupational Therapy</li>
            <li>Bachelor of Science in Anesthesia Tec</li>
            <li>Bachelor of Science in Cardiac Tec </li>
            <li>Bachelor of Science in Medical Lab Tec</li>
            <li>Bachelor of Science in Radio Therapy Tec</li>
            <li>Bachelor of Science in Clinical Optometry</li>
            <li>Bachelor of Science in Nuclear Medicine</li>
            <li>Bachelor of Science in Operation Theatre</li>
            <li>Bachelor of Science in Physician Assistant</li>
            <li>Bachelor of Science in Respiratory Care</li>
          </ul>
        </li>
        <li><p className="head">Paramedical</p>
          <ul>
            <li>Dialysis Technician</li>
            <li>ECG Technician</li>
            <li>X-Ray Technician</li>
            <li>Operation Theatre Technician</li>
          </ul>
        </li>
      </ol>

    </div> );
}

export default Medical;