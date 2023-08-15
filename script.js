function generatePdf() {
    const {jsPDF}=window.jspdf;
    var content = document.getElementById('pdf-content');

    // Create a new jsPDF instance
    var pdf = new jsPDF();

    const pageHeight = pdf.internal.pageSize.height;
        const contentHeight = content.clientHeight;
        const scale = pageHeight / contentHeight;

    // Add content to the PDF
    //pdf.fromHTML(content, 10, 10, { 'width': 180 });
    //pdf.text="hello"
    pdf.html(content, {
        callback: function(pdf) {
            // Save the PDF
            pdf.save('sample-document.pdf');
        },           
        x: 0,
        y: 0,
        width: 10, //target width in the PDF document
        height:1 //window width in CSS pixels
    });
}

    // Get the content from the HTML element
    //margin: [10, 10, 10, 10],

    // Save the PDF
    //pdf.save('generated-pdf.pdf');
