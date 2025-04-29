import React, { useState } from 'react';
import back from '../images/backw.png';
import downgray from '../images/greyarrow.png';
import calendar from '../images/calender.png';

const TransactionDetailPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  const handleDeleteClick = () => {
    setShowPopup(true);
  };

  const handleCancel = () => {
    setShowPopup(false);
  };

  const handleConfirmDelete = (e) => {
    e.preventDefault();
    navigate('/');
  };

  const handleAmountClick = () => {
    setIsEditing(true);
    setIsKeyboardOpen(true);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleAmountBlur = () => {
    setIsEditing(false);
    setIsKeyboardOpen(false);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const isButtonEnabled = amount && category && date;

  return (
    <div className="w-full min-h-screen bg-[#00C153] flex flex-col relative overflow-hidden">
      {/* Header */}
      <div className="w-full h-[64px] mt-[44px] flex items-center justify-center relative">
        <button className="absolute left-[20px]">
          <img src={back} alt="Back" className="w-[24px] h-[24px]" />
        </button>
        <p className="font-semibold text-[18px] text-white">Income</p>
      </div>

      {/* Amount Input */}
      <div className="flex flex-col mt-[40px] px-[26px]">
        <p className="font-semibold text-[18px] leading-[100%] text-white/80">
          How much?
        </p>
        <div className="mt-[12px] font-semibold text-[40px] text-white" onClick={handleAmountClick}>
          {isEditing ? (
            <input
              placeholder="Rp ..."
              type="number"
              value={amount}
              onChange={handleAmountChange}
              onBlur={handleAmountBlur}
              autoFocus
              className="bg-transparent border-none text-[40px] text-white outline-none w-[200px]"
            />
          ) : (
            `Rp ${amount}`
          )}
        </div>
      </div>

      {/* Content Bottom */}
      <div className={`absolute bottom-0 w-full bg-white rounded-t-[32px] flex flex-col items-center transition-all duration-300 ${isKeyboardOpen ? 'h-[544px]' : 'h-[544px]'}`}>
        
        {/* Form Fields */}
        <div className="w-full px-[16px] mt-[24px] flex flex-col gap-[16px]">
          <div className="flex w-full h-[74px] border text-[#91919F] border-[#F1F1FA] rounded-[16px] items-center px-[14px]">
            <select
              className="flex-grow font-[400] bg-transparent border-none outline-none"
              value={category}
              onChange={handleCategoryChange}
            >
              <option value="" disabled>
                Select Category
              </option>
              <option value="salary">Salary</option>
              <option value="business">Business</option>
              <option value="investment">Investment</option>
              {/* Add more categories as needed */}
            </select>
            <img src={downgray} alt="Category" className="w-[32px] h-[32px]" />
          </div>

          <div className="flex w-full h-[74px] border text-[#91919F] border-[#F1F1FA] rounded-[16px] items-center px-[14px]">
            <div className="flex-grow font-[400]">Description</div>
          </div>

          <div className="flex w-full h-[74px] border text-[#91919F] border-[#F1F1FA] rounded-[16px] items-center px-[14px]">
            <input
              type="date"
              className="flex-grow font-[400] bg-transparent border-none outline-none"
              value={date}
              onChange={handleDateChange}
            />
            <img src={calendar} alt="Date" className="w-[32px] h-[32px]" />
          </div>
        </div>

        {/* Button Add Income */}
        <div className={`w-full px-[16px] flex ${isKeyboardOpen ? 'mt-[-73px]' : 'mt-[160px]'}`}>
          <button
            className={`flex-1 h-[56px] rounded-[16px] text-white font-semibold text-[18px] ${
              isButtonEnabled ? 'bg-[#00C153]' : 'bg-[#AAAAAA]'
            }`}
            disabled={!isButtonEnabled}
          >
            Add Income
          </button>
        </div>
      </div>

      {/* Popup Confirmation */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/20 z-50">
          <div className="bg-white rounded-[21.7px] w-[340px] h-[174.21px] text-center p-[20px]">
            <h2 className="text-[21.7px] font-semibold mb-2">Delete This Transaction?</h2>
            <p className="text-[14.47px] text-[#91919F] font-medium mb-6">Are you sure you want to delete this?</p>
            <div className="flex justify-between">
              <button onClick={handleCancel} className="bg-red-100 text-red-500 font-semibold rounded-[15px] w-[148px] h-[50px]">
                Cancel
              </button>
              <button onClick={handleConfirmDelete} className="bg-red-500 text-white font-semibold rounded-[15px] w-[148px] h-[50px]">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionDetailPage;
