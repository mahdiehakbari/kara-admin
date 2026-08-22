'use client'

const Dashboard = () => {
  const userType = localStorage.getItem('userType');
  const userInfoString = localStorage.getItem('userInfo');
  const userInfo = userInfoString ? JSON.parse(userInfoString) : null;

  return (
    <div>

      {(userType === 'Introducer' || userType === 'Admin') && (
        <div className='w-full h-screen flex items-center justify-center'>
          <img
            src={'/assets/icons/dentalSociety/Kara-Logo.png'
              // userType == 'Introducer' &&
              // userInfo?.introducer?.introducerLogoImageFilePath !== ''
              //   ? `https://files.dentalit.ir/Images/IntroducerLogoImages/${userInfo?.introducer?.introducerLogoImageFilePath}`
              //   : '/assets/icons/dentalSociety/Kara-Logo.png'
            }
            alt='dental-society-logo'
            width={400}
            height={400}
            style={{ borderRadius: '8px' }}
          />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
