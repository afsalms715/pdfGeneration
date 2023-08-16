

function generatePdf() {
    const {jsPDF}=window.jspdf;
    var content = document.getElementById('pdf-image');

    // Create a new jsPDF instance
    var pdf = new jsPDF('landscape');

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

function toimage(){
    
    var node = document.getElementById('contents');
    var pdgimage = document.getElementById('pdf-image');

/*htmlToImage.toPng(node)
  .then(function (dataUrl) {
    var img = new Image();
    img.src = dataUrl;
    pdgimage.innerHTML=`<img src='${dataUrl}' height='290px' width:'210px'/>`
  })
  .catch(function (error) {
    console.error('oops, something went wrong!', error);
  });*/
  htmlToImage.toCanvas(node)
  .then(function(canvas){
    pdgimage.appendChild(canvas)
  })
}

fetch('https://dummyjson.com/products/1')
.then(res => res.json())
.then(console.log);
var products=[]
function addProduct(){   
    var productId=document.getElementById("productId")
    if(productId.value){
        productId.border='' 
        var apiurl=`https://dummyjson.com/products/${productId.value}`
        fetch(apiurl)
        .then(res => res.json())
        .then((resp)=>{
            products.push({'id':resp.id,'desc':resp.title,'price':resp.price})
            tableload()
        });
    }else{
        productId.border='1px solid red' 
    }
}

function tableload(){
    if(products.length<=6){
        var tablebody=document.getElementById("table-body")
        var tabledata=''
        products.map((resp)=>{
            tabledata+=`<tr>
                            <td>${resp.id}</td>
                            <td>${resp.desc}</td>
                            <td>${resp.price}</td>
                        </tr>`
        })
        tablebody.innerHTML=tabledata
    }else{
        alert("only 6 items at a print")
    }
}
