import { useState } from 'react'
import '../styles/General.css'

function General() {
    const [personalInfo, setPersonalInfo] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        address: "",
        schoolName: "",
        studyTitle: "",
        studyLocation: "",
        studyDate: "",
        companyName: "",
        positionTitle: "",
        mainResponsibilities: "",
        companyLocation: "",
        date: "",
    });

    const [showGeneral, setShowGeneral] = useState(false);
    const [showEducational, setShowEducational] = useState(false);
    const [showPractical, setShowPractical] = useState(false);

    function handleChange(e, key) {
        setPersonalInfo({ ...personalInfo, [key]: e.target.value });
    }
  
    return (
      <div className='page'>
        <div className='Edit'>
            <div className="card">
                <h1>General Information</h1>
                {
                    showGeneral ? (
                        <>
                            <Input
                                label='Name' 
                                onChange={e => handleChange(e, 'fullName')}
                                value={personalInfo.fullName}
                            />
                            <Input
                                label='Email' 
                                onChange={e => handleChange(e, 'email')}
                                value={personalInfo.email}
                            />
                            <Input
                                label='Phone' 
                                onChange={e => handleChange(e, 'phoneNumber')}
                                value={personalInfo.phoneNumber}
                            />
                            <Input
                                label='Address' 
                                onChange={e => handleChange(e, 'address')}
                                value={personalInfo.address}
                            /> 
                            <button onClick={() => setShowGeneral(false)}>Save</button>
                        </>
                    ) : <button onClick={() => setShowGeneral(true)}>Edit</button>
                }
                
            </div>
            <div className="card">
                <h1>Educational Experience</h1>
                {
                    showEducational ? (
                        <>
                            <Input
                            label='School Name' 
                            onChange={e => handleChange(e, 'schoolName')}
                            value={personalInfo.schoolName}
                            />
                            <Input
                                label='Title of Study' 
                                onChange={e => handleChange(e, 'studyTitle')}
                                value={personalInfo.studyTitle}
                            />
                            <Input
                                label='Location' 
                                onChange={e => handleChange(e, 'studyLocation')}
                                value={personalInfo.studyLocation}
                            />
                            <Input
                                label='Date of Study' 
                                onChange={e => handleChange(e, 'studyDate')}
                                value={personalInfo.studyDate}
                            />
                            <button onClick={() => setShowEducational(false)}>Save</button>
                        </>
                    ) : <button onClick={() => setShowEducational(true)}>Edit</button>
                }
            </div>
            <div className="card">
                <h1>Practical Experience</h1>
                {
                    showPractical ? (
                        <>
                        <Input
                        label='Company' 
                        onChange={e => handleChange(e, 'companyName')}
                        value={personalInfo.companyName}
                        />
                        <Input
                            label='Position Title' 
                            onChange={e => handleChange(e, 'positionTitle')}
                            value={personalInfo.positionTitle}
                        />
                        <Input
                            label='Responsibilities' 
                            onChange={e => handleChange(e, 'mainResponsibilities')}
                            value={personalInfo.mainResponsibilities}
                        />
                        <Input
                            label='Location' 
                            onChange={e => handleChange(e, 'companyLocation')}
                            value={personalInfo.companyLocation}
                        />
                        <Input
                            label='Date' 
                            onChange={e => handleChange(e, 'date')}
                            value={personalInfo.date}
                        /> 
                        <button onClick={() => setShowPractical(false)}>Save</button>
                        </>
                    ) : <button onClick={() => setShowPractical(true)}>Edit</button>
                }
            </div>
        </div>
        <div className="preview">  
            <div className='generalInfoPreview'>
                <h1>{personalInfo.fullName}</h1>
                <h2><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>email</title><path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" /></svg>
                {personalInfo.email}</h2>
                <h2><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>phone</title><path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" /></svg>
                {personalInfo.phoneNumber}</h2>
                <h2><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>map-marker</title><path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" /></svg>
                {personalInfo.address}</h2>
            </div>
            <div className="educationPreview">
                <h2>Education</h2>
                <div className="info">
                    <div className="left">
                        <p>{personalInfo.studyDate}</p>
                        <p>{personalInfo.studyLocation}</p>
                    </div>
                    <div className="right">
                        <p>{personalInfo.schoolName}</p>
                        <p>{personalInfo.studyTitle}</p>
                    </div>
                </div>
            </div>
            <div className="professionalExperiencePreview">
                <h2>Professional Experience</h2>
                <div className="info">
                    <div className="left">
                        <p>{personalInfo.date}</p>
                        <p>{personalInfo.companyLocation}</p>
                    </div>
                    <div className="right">
                        <p>{personalInfo.companyName}</p>
                        <p>{personalInfo.positionTitle}</p>
                        <p>{personalInfo.mainResponsibilities}</p>
                    </div>
                </div>
            </div>
            <div className="professionalExperiencePreview">
            </div>
        </div>
        
      </div>
    )
  }
  
  function Input({ label, onChange, value}) {
    return (
        <label>
            {label}
            {' '}
            <input
                onChange={onChange}
                value={value}
            />
        </label>
    );
  }

  export default General