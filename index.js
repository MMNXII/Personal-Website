var webDevHead = document.getElementById("web-dev-header");
    webDevHead.addEventListener("click", expandWebDev);
var webDevDiv = document.getElementById("web-dev-section");
    webDevDiv.style.height = "0em";
var webDevContent = document.getElementById("web-dev-content");
    webDevContent.style.visibility = "hidden";
    webDevContent.style.opacity = "0";


    function expandWebDev() {
        if (webDevDiv.style.height == "0em") {
            
            webDevHead.style.fontSize = "1.8rem";
            webDevHead.style.color = "orange";
            webDevHead.style.marginBottom = "0em";
            webDevDiv.style.height = "63em";                    
            webDevDiv.style.transitionProperty = "height";
            webDevDiv.style.transitionDuration = ".25s";
            webDevDiv.style.marginBottom = "1em";
            webDevContent.style.opacity = "1";
            webDevContent.style.transitionProperty = "opacity";
            webDevContent.style.transitionDuration = "2s";
            webDevContent.style.visibility = "visible";


        } else {

            webDevHead.style.fontSize = null;
            webDevHead.style.color = null;
            webDevHead.style.marginBottom = null;                    
            webDevDiv.style.height = "0em";
            webDevDiv.style.transitionProperty = "height";
            webDevDiv.style.transitionDuration = ".25s";
            webDevDiv.style.marginBottom = "0em";
            webDevContent.style.visibility = "hidden";
            webDevContent.style.opacity = "0";
        }
    }

var graphicDesHead = document.getElementById("graphic-des-header");
    graphicDesHead.addEventListener("click", expandGraphicDes);
var graphicDesDiv = document.getElementById("graphic-des-section");
    graphicDesDiv.style.height = "0em";
var graphicDesContent = document.getElementById("graphic-des-content");
    graphicDesContent.style.visibility = "hidden";
    graphicDesContent.style.opacity = "0";

    function expandGraphicDes() {
        if (graphicDesDiv.style.height == "0em") {
            
            graphicDesHead.style.fontSize = "1.8rem";
            graphicDesHead.style.color = "orange";
            graphicDesHead.style.marginBottom = "0em";
            graphicDesDiv.style.height = "68em";
            graphicDesDiv.style.transitionProperty = "height";
            graphicDesDiv.style.transitionDuration = ".25s";
            graphicDesDiv.style.marginBottom = "1em";
            graphicDesContent.style.opacity = "1";
            graphicDesContent.style.transitionProperty = "opacity";
            graphicDesContent.style.transitionDuration = "2s";
            graphicDesContent.style.visibility = "visible";


        } else {

            graphicDesHead.style.fontSize = null;
            graphicDesHead.style.color = null;
            graphicDesHead.style.marginBottom = null;
            graphicDesDiv.style.height = "0em";
            graphicDesDiv.style.transitionProperty = "height";
            graphicDesDiv.style.transitionDuration = ".25s";
            graphicDesDiv.style.marginBottom = "0em";
            graphicDesContent.style.visibility = "hidden";
            graphicDesContent.style.opacity = "0";
            
        }
    }

var resumeHead = document.getElementById("resume-header");
    resumeHead.addEventListener("click", expandResume);
var resumeDiv = document.getElementById("resume-section");
    resumeDiv.style.height = "0em";
var resumeContent = document.getElementById("resume-content");
    resumeContent.style.visibility = "hidden";
    resumeContent.style.opacity = "0";

    function expandResume() {
        if (resumeDiv.style.height == "0em") {

            resumeHead.style.fontSize = "1.8rem";
            resumeHead.style.color = "orange";
            resumeHead.style.marginBottom = "0em";                      
            resumeDiv.style.height = "75em";
            resumeDiv.style.transitionProperty = "height";
            resumeDiv.style.transitionDuration = ".25s";
            resumeDiv.style.marginBottom = "1em";
            resumeContent.style.visibility = "visible";
            resumeContent.style.opacity = "1";
            resumeContent.style.transitionProperty = "opacity";
            resumeContent.style.transitionDuration = "2s";

        } else {
            
            resumeHead.style.fontSize = null;
            resumeHead.style.color = null;
            resumeHead.style.marginBottom = null;                      
            resumeDiv.style.height = "0em";
            resumeDiv.style.transitionProperty = "height";
            resumeDiv.style.transitionDuration = ".25s";
            resumeDiv.style.marginBottom = "0em";
            resumeContent.style.visibility = "hidden";
            resumeContent.style.opacity = "0";
        }
    }

    let a;
    let reportIndex = 1;
    showSlides(reportIndex);

        function reportSlides(n) {
            showSlides(reportIndex += n);
        }

            function showSlides(n) {
                let images = document.getElementsByClassName("report-image-container");
                    if (n > images.length) {
                        reportIndex = 1;

                    } if (n < 1) {
                        reportIndex = images.length;

                    } for (a = 0; a < images.length; a++) {
                        images[a].style.display = "none";
                    }

                    images[reportIndex-1].style.display = "block";
            }

    let b;
    let willmoreIndex = 1;
    willmoreShowSlides(willmoreIndex);

        function willmoreSlides(n) {
            willmoreShowSlides(willmoreIndex += n);
        }

            function willmoreShowSlides(n) {
                let images = document.getElementsByClassName("willmore-image-container");
                    if (n > images.length) {
                        willmoreIndex = 1;

                    } if (n < 1) {
                        willmoreIndex = images.length;

                    } for (b = 0; b < images.length; b++) {
                        images[b].style.display = "none";
                    }

                    images[willmoreIndex-1].style.display = "block";
            }


