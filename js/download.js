document.getElementById('downloadButton1').addEventListener('click', function () {
    const pdfUrl = 'pdf/Nikole_Grau_Elizondo_Curriculum.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.target = '_blank';
    link.download = 'Nikole_Grau_Elizondo_Curriculum.pdf';
    link.click();
});

document.getElementById('downloadButton2').addEventListener('click', function () {
    const pdfUrl = 'pdf/Nikole_Grau_Elizondo_Curriculum.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.target = '_blank';
    link.download = 'Nikole_Grau_Elizondo_Curriculum.pdf';
    link.click();
});
