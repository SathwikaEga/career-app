import React from 'react';
function GovtJobs() {
    return ( <div>
        <p className='display-6'>GOVERNMENT JOBS</p>
        <ol className="compo">
        <li><p className='head'>Defence Examinations:</p>
           <ol>
            <li><b>Indian Army </b>- Posts of Soldiers in Technical Cadre
                <ul>
                    <li>Indian Army Soldier Clerk's Examination</li>
                    <li>Indian Army Soldier General Duty Examination (NER)</li>
                    <li>Indian Army Soldier Technical Examination (MER)</li>
                    <li>Indian Army Soldier Nursing Assistant Examination (MER)</li>
                </ul>
            </li>
            <li><b>Indian Air Force</b> - Non-Technical Cadre
                <ul>
                    <li>IAF Airman Non-Technical Trade's Examination</li>
                </ul>
            </li>
            <li><b>Indian Navy</b> - Naval Branch of the Armed Forces of India
            <ul>
                    <li>Indian Navy Dock Yard Apprentices Examination</li>
                    <li>Indian Navy Sailors Matric Entry Recruitment Examination</li>
                    <li>Indian Navy Artificer Apprentices Examination</li>
                </ul>
            </li>
           </ol>
        </li>
        <li><p className='head'>Central Reserve Police Force (CRPF):</p>
        <ul>
            <li>Constable (Technical and Tradesman) in CRPF</li>
        </ul>
        </li>
        <li><p className='head'>Boarder Security Force (BSF):</p>
        <ul>
            <li>BSF Constable Recruitment</li>
        </ul></li>
        <li><p className='head'>Staff Selection Commission (SSC):</p>
        <ul>
            <li>SSC Multitasking (Non-Technical) Staff Recruitment</li>
        </ul></li>
        
        </ol>
        

    </div> );
}

export default GovtJobs;