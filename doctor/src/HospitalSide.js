import React from 'react'
import useCollapse from 'react-collapsed';
import './HospitalSide.css'

const HospitalSide = () => {

    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

    return (
        <>
            {/*<div className='hospitalSide'>
                <h1>Hospital data</h1>

    </div>*/}
            <div className="collapsible">
                <div className="header" {...getToggleProps()}>
                    {isExpanded ? 'Collapse Hospital data' : 'Expand Hospital data'}
                </div>
                <div {...getCollapseProps()}>
                    <div className="content">
                        <div className='hospitalSide'>
                            <h1>Hospital data</h1>
                            <div className='record'>
                                <span><h3>1</h3><h3>Patient Name</h3></span>
                                <h3>Patient Age</h3>
                                <h3>Patient Gender</h3>
                                <p>Patient symptoms</p>
                                <button className='checkPatient'>Check Patient</button>
                            </div>
                            <div className='record'>
                                <span><h3>2</h3><h3>Patient Name</h3></span>
                                <h3>Patient Age</h3>
                                <h3>Patient Gender</h3>
                                <p>Patient symptoms</p>
                                <button className='checkPatient'>Check Patient</button>
                            </div>
                            <div className='record'>
                                <span><h3>2</h3><h3>Patient Name</h3></span>
                                <h3>Patient Age</h3>
                                <h3>Patient Gender</h3>
                                <p>Patient symptoms</p>
                                <button className='checkPatient'>Check Patient</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HospitalSide