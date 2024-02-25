import React, { useState, useRef } from 'react';
import './SellerDashboard.css'; 

const SellerDashboard = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [itemName, setItemName] = useState("");
  const [cost, setCost] = useState("");
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    
    setSelectedFile(event.target.files[0]);
    setUploadedFileName(event.target.files[0].name);

    const reader = new FileReader();
    reader.onload = (e) => {
      setImageUrl(e.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const handleUploadClick = () => {
    
    fileInputRef.current.click();
  };

  const handleUpload = () => {
   
    if (selectedFile && itemName && cost) {
     
      console.log("Uploading file:", selectedFile.name);
      console.log("Item Name:", itemName);
      console.log("Cost:", cost);
      alert(`File "${selectedFile.name}" uploaded successfully.`);
      
      setSelectedFile(null);
      setUploadedFileName("");
      setImageUrl("");
      setItemName("");
      setCost("");
    } else {
      alert("Please select a file, enter item name, and enter cost to upload.");
    }
  };

  return (
    <div className="seller-dashboard">
      <h2>Seller Dashboard</h2>
      <div className="upload-section">
        <input
          ref={fileInputRef}
          type="file"
          onChange={handleFileChange}
          style={{ display: 'none' }} 
        />
        <button onClick={handleUploadClick}>Upload</button>
        <div className="file-info">{uploadedFileName}</div>
        {imageUrl && <img src={imageUrl} alt="Uploaded" />}
        <input
          type="text"
          placeholder="Item Name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Cost"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
        />
        <button onClick={handleUpload}>Submit</button>
      </div>
    </div>
  );
}

export default SellerDashboard;
