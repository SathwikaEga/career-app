import React from 'react';
function Degree() {
    return ( <div>
        <p className='display-6'>DEGREE</p>
        <ol className='compo'>
            <li>Degreee- 3 years
                <ul>
                    <li>Bachelor of Arts(B.A)</li>
                    <li>Bachelor of Science(B.Sc)</li>
                    <li>Bachelor of Commerce(B.Bom)</li>
                    <li>Bachelor of Law-Legum Baccalaureus(LLB)</li>
                </ul>
            </li>
            <li>Dual Degree - 4 years
                <ul>
                    <li>BA + BEd</li>
                    <li>BSc + BEd</li>
                    <li>BA + LLB</li>
                    <li>BCom + LLB</li>
                </ul>
            </li>
            <li>Professional Courses
                <ul>
                    <li>Institute of Cost and Works Accountants(ICWA)</li>
                    <li>Company Secretaries (CS)</li>
                    <li>Chartered accountant (CA)</li>
                </ul>
            </li>

        </ol>
    </div> );
}

export default Degree;