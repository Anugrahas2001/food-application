import React from 'react'

const Profile = () => {
  return (
    <div className='profile-container'>
        <div className='profile-container-first'>
        <img className='food-image' src='https://img.freepik.com/free-photo/view-ready-eat-delicious-meal-go_23-2151431768.jpg'/>
        <div className='profile-container-first-second'>
        <img className='profile-image' src="https://png.pngtree.com/png-clipart/20221101/ourmid/pngtree-passport-photo-cartoon-design-png-image_6405812.png" alt="" />
        <div className='nameAndLocation'>
        {/* <h4>Anugraha S</h4>
        <h4><i class="fa-solid fa-location-dot"></i>Kerala</h4> */}
        </div>
        </div>
        </div>

        <div className='profile-container-details'>
            <div className='profile-container-details-first'>
                
                <div className='activity'>
                <h2>Activity</h2>
                <ul className='unorderlist'>
                    <li className='list'>Reviews</li>
                    <li className='list'>Photos</li>
                    <li className='list'>Followers</li>
                    <li className='list'>Recently Viewed</li>
                    <li className='list'>Blog Posts</li>
                </ul>
                </div>

                <div className='activity'>
                <h2>Activity</h2>
                <ul className='unorderlist'>
                    <li className='list'>Reviews</li>
                    <li className='list'>Photos</li>
                    <li className='list'>Followers</li>
                    <li className='list'>Recently Viewed</li>
                    <li className='list'>Blog Posts</li>
                </ul>
                </div>
                {/* <div className='unorderlist'>
                    <button className='list'>Reviews</button>
                    <button className='list'>Photos</button>
                    <button className='list'>Followers</button>
                    <button className='list'>Recently Viewed</button>
                </div> */}
            </div>
            <div className='profile-container-details-second'>
                <h2>Reviews</h2>
            </div>
        </div>
    </div>
  )
}

export default Profile