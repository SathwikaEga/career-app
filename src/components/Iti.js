import React from 'react';
function Iti() {
    return ( <div>
        <p className='display-6'>Industrial Training Institute</p>
        <p className='compo'> It is a two year courses of Engineering and Non-Engineering Field. 
            It is called as Trade Industry where you can learn 
            basic skills in technical field. AITT (ALl India Trade Test)</p>
        <p className='compo'><b>List of courses that can be taken in ITI</b></p>
        <ul className='compo'>
            <li>Computer</li>
            <li>Civil(Draughtman)</li>
            <li>Mechanical
                <ul>
                    <li>Radio and TV</li>
                    <li>Motor Vehicle</li>
                    <li>Diesel</li>
                    <li>Marine</li>
                </ul>
            </li>
            <li>Electrician</li>
            <li>Plumber</li>
            <li>Surveyor</li>
            <li>Electrical Machine Tools</li>
            <li>Welder</li>
            <li>Firemen</li>
            <li>Cookery</li>
            <li>Paint technology</li>

        </ul>
    </div> );
}

export default Iti;