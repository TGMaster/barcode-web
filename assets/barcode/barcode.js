//Add event listener
document.getElementById("generate").addEventListener("click", generateBarcode);
var pxTomm = function (px) {
    return Math.floor((px * 25.4) / 300); //mm = ( pixels * 25.4 ) / DPI
};
function generateBarcode() {
    var productname = document.getElementById('productname').value;
    var productid = document.getElementById('productid').value;
    JsBarcode("#barcode", productname);
    //Get svg markup as string
    var canvas = document.getElementById("barcode");
    var imgData = canvas.toDataURL('image/png');
    // Generate PDF
    var doc = new jsPDF();
    doc.myText("ID " + productname, { align: "center" }, 0, 50);
    doc.addImage(imgData, 'PNG', 95 - pxTomm(canvas.width), 60);
    doc.myText("PRODUCT " + productid, { align: "center" }, 0, 110);
    doc.save(productname + '.pdf');
}