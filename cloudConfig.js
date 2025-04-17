const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
<<<<<<< HEAD
    api_secret: process.env.CLOUD_API_SECRET,
=======
    api_secret: process.env.CLOUD_API_SERECT
>>>>>>> extra/main
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
<<<<<<< HEAD
      folder: 'wanderlust_DEV',
      allowerdFormats: ["png","jpg","jpeg"],
    },
  });
=======
        folder: 'wanderlust_DEV', // the folder to upload files to development phase
        allowedFormats: ["png", "jpeg", "jpg"], // supports promises as well
    },
});

>>>>>>> extra/main

module.exports = {
    cloudinary,
    storage,
<<<<<<< HEAD
}
=======
};
>>>>>>> extra/main
