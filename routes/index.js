const express = require('express')
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index',
        {
            title: 'Jamalludin Portfolio Website',
            name: 'Jamalludin',
            home_title: 'Hallo, Saya Jamalludin',
            job_title: 'Backend Programmer',
            introduce: 'Mempunyai Pengalaman bekerja 3 tahun sebagai Backend Programmer',
            about_description: 'Backend Programmer Menggunakan Node.Js, JavaScript, Goolang'
        });
});

module.exports = router