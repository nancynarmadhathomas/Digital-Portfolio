// script.js

document.getElementById('download-btn').addEventListener('click', function() {
    var link = document.createElement('a');
    link.href="https://1drv.ms/i/s!AnT3uLNkdb5oggnL_mRu2S7HQkrP?e=hxlZst"//The url of the file to download
    link.download = 'resume.jpg'; // The name of the downloaded file
    link.click();
});