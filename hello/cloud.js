var cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    cloud_name: 'djx4fvpwq',//process.env.CLOUD_NAME, 
    api_key: '644941413397474',//process.env.API_KEY, 
    api_secret: 'DSsfrlUpLywll4GBdeoK590kWck'//process.env.API_SCRE
});

module.exports=cloudinary