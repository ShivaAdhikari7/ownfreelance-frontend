export const downloadFile = (downloadURL, fileName) => {
  fetch(downloadURL).then(response => {
    response.blob().then(blob => {
      let url = window.URL.createObjectURL(blob);
      let a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      a.click();
    });
  });
};
