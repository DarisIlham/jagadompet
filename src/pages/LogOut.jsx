import React from 'react';
import { LuPen } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import profile from '../images/pp.png'
import { useState } from 'react';

const LogoutPage = () => {
  const navigate = useNavigate();

  const handleSign = (e) => {
    e.preventDefault(); 
    navigate('/sign'); 
  };

  const [showPopup, setShowPopup] = useState(false);

  const handleLogoutClick = () => {
    setShowPopup(true);
  };

  const handleCancel = () => {
    setShowPopup(false);
  };

  const handleConfirmLogout = (e) => {
    // Aksi logout beneran taruh di sini
    e.preventDefault(); 
    navigate('/'); 
  };
  


  return (
    <div className="relative w-full h-screen">

    <div className="absolute z-10 w-full flex min-h-screen justify-center ">
      <div>
        <p className="text-[18px] mt-[44px] justify-center grid place-items-center w-[375px] h-[64px] text-center font-semibold">Profile</p>
        <div>
            <img className='w-[200px] h-[200px] mx-[88px] mt-[24px]' alt='bg' src={profile} />
        </div>
        
        <p className='font-medium text-[14px] text-[#91919F] mt-[34px] ml-[16px]'>Username</p>
        <div className='flex items-center'>
            <p className='mt-[7px] leading-[100%] font-semibold text-[24px] text-[#161719] ml-[16px]'>John Doe</p>
            <span className="ml-[193px] border border-[#F1F1FA] w-[40px] h-[40px] rounded-[8px] flex items-center justify-center">
                <LuPen className="text-[24px] text-black" />
            </span>
        </div>
        <div className='w-full flex  justify-center mt-[287px]'>
            
            <button
              type="submit"
              onClick={handleLogoutClick}
              className="text-[18px] leading-[100%] bg-[#FA2F34] hover:bg-red-200 hover:text-[#FA2F34] text-white w-[343px] h-[56px] py-[8px] px-[16px] gap-[10px] rounded-[16px] font-semibold"
            > 
              Logout
            </button>
          </div>
          {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/20 z-50">
        <div className="bg-white rounded-[21.7px] w-[340px] h-[174.21px] text-center">
          <div className='m-[13px]'>
              <div className='flex flex-col h-[80px]'>
                  <div className="text-[21.7px] font-semibold mb-2 mt-[13px]">Logout?</div>
                  <p className="text-[14.47px] text-[#91919F] font-medium mb-6 ">Are you sure do you wanna logout?</p>  
              </div>
              <div className="flex justify-between mt-[12px]">
                  <button
                      onClick={handleCancel}
                      className="bg-red-100 text-red-500 font-semibold rounded-[15px] w-[148px] h-[50px]"
                  >
                      Cancel
                  </button>

                  <button
                      onClick={handleConfirmLogout}
                      className="bg-red-500 text-white font-semibold rounded-[15px] w-[148px] h-[50px]"
                  >
                      Logout
                  </button>
              </div> 
          </div>
        </div>
      </div>
      )}
      </div>
    </div>
  </div>
);
};

export default LogoutPage;
