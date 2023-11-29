
import html2canvas from 'html2canvas';

export function generateJPEG() {
    // Get the element to capture
    var elementToCapture = document.getElementById('contentToCapture');
  
    // Use html2canvas to capture the content and convert it to an image
    html2canvas(elementToCapture).then(function(canvas) {
      // Convert the canvas to a data URL representing a JPEG image
      var dataURL = canvas.toDataURL('image/jpeg');
  
      // Create a temporary link element to download the JPEG
      var downloadLink = document.createElement('a');
      downloadLink.href = dataURL;
      downloadLink.download = 'capturedImage.jpg';
  
      // Trigger a click on the link to start the download
      downloadLink.click();
    });
  }