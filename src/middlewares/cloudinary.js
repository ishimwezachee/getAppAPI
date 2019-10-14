import cloudinary from 'cloudinary';


cloudinary.config({ 
    cloud_name: 'droiyfppj', 
    api_key: '173558714554292', 
    api_secret: 'uudK6UAJCgGAjT7BmfOSIjc2h9o' 
  });
  const imageUpload = async (file) => {
    const is_image = await cloudinary.v2.uploader.upload(file.tempFilePath);
    if (!is_image) return false;
    return is_image.url;
};

export default imageUpload;