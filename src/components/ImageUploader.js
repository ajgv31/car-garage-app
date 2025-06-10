import React from 'react';

const ImageUploader = ({ onImageChange, currentImage }) => {
  return (
    <div className="mb-3">
      <label htmlFor="imageUpload" className="form-label">
        {currentImage ? 'Change Image' : 'Upload Image'}
      </label>
      <input
        type="file"
        className="form-control"
        id="imageUpload"
        accept="image/*"
        onChange={onImageChange}
      />
      {currentImage && (
        <div className="mt-2">
          <img 
            src={currentImage} 
            alt="Preview" 
            style={{ maxWidth: '100px', maxHeight: '100px' }} 
          />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;