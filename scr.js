// If absolute URL from the remote server is provided, configure the CORS
// header on that server.
var url = "balueva.pdf";

// Loaded via <script> tag, create shortcut to access PDF.js exports.
var pdfjsLib = window['pdfjs-dist/build/pdf'];

// The workerSrc property shall be specified.
pdfjsLib.GlobalWorkerOptions.workerSrc = "worker.js";

// Asynchronous download of PDF
var loadingTask = pdfjsLib.getDocument(url);
loadingTask.promise.then(function (pdf) {
    console.log('PDF loaded');

    // Fetch the first page
    var pageNumber = 1;
    pdf.getPage(pageNumber).then(function (page) {
        console.log('Page loaded');

        var scale = 1.5;
        var viewport = page.getViewport({ scale: scale });

        // Prepare canvas using PDF page dimensions
        var canvas = document.getElementById('the-canvas');
        var context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;


        



        // Render PDF page into canvas context
        var renderContext = {
            canvasContext: context,
            viewport: viewport
        };
        var renderTask = page.render(renderContext);
        renderTask.promise.then(function () {
            console.log('Page rendered');

            //Нарисуем залитый прямоугольник
            context.fillStyle ='red';
            context.fillRect(300, 200, 150, 75);
            //context.fillRect(x, y, width, height) - назначение параметров           
            //context.clearRect(0,0,400,200); - метод очищает canvas
            
            context.strokeStyle = "green";
            context.lineWidth = "5";
            context.rect(50, 400, 750, 75);
            context.stroke();
            //context.fill(); заливает прямоугольник


        });
    });



    


}, function (reason) {
    // PDF loading error
    console.error(reason);
});






