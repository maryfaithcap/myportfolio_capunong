let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };

    });
    let header=document.querySelector('header');

    header.classList.toggle('sticky',window.screenY>100);
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({
    //reset:true,
    distance:'80px',
    duration:500, 
    delay:200
});

ScrollReveal().reveal('.home-content,.heading',{origin:'top'});
ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact form',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1,.about-img',{origin:'left'});
ScrollReveal().reveal('.home-content p,.about-content',{origin:'right'});

const typed = new Typed('.multiple-text',{
    strings:['Full Name: Mary Faith A. Capunong','Age: 14','Birthday: September 18, 2009','Thanks for dropping by!'],
    typeSpeed:2,
    backSpeed:2,
    backDelay:10000,
    loop:true
});

let changeBackgroundLink = document.querySelector('a[href="#info"]');

changeBackgroundLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default behavior of anchor tag

    // Get the target section's ID from the href attribute
    let targetId = this.getAttribute('href');

    // Remove the '#' from the target ID
    let sectionId = targetId.substring(1);

    // Get the target section by ID
    let targetSection = document.getElementById(sectionId);

    // Add a CSS class to trigger the transition
    targetSection.classList.add('changing-background');

    // Wait for the transition to complete before changing the background
    setTimeout(() => {
        // Change the background of the target section
        targetSection.style.background = 'url("your-new-background-image.jpg")'; // Change the background image URL accordingly
        targetSection.style.backgroundSize = 'cover';
        targetSection.style.backgroundPosition = 'center';

        // Optionally, you can remove the background of other sections if needed

        // Remove the CSS class after the transition is complete
        targetSection.classList.remove('changing-background');
    }, 500); // Adjust the delay (in milliseconds) to match the CSS transition duration
});

document.addEventListener('DOMContentLoaded', function() {
    const backgrounds = [
        'url("myproject/image/thunder3.jfif")',
        'url("myproject/image/storm1.jfif")',
        'url("myproject/image/nino1.jfif")',
        'url("myproject/image/TYPHOON1.jfif")',
        'url("myproject/image/typhoon2.jfif")',
        'url("myproject/image/typhoon3.jfif")',
        'url("myproject/image/thunder1.jfif")',
        'url("myproject/image/thunder2.jfif")',
        'url("myproject/image/nina3.jfif")',
        'url("myproject/image/storm2.jfif")',
        'url("myproject/image/nino2.jfif")',
        'url("myproject/image/storm3.jfif")',
        'url("myproject/image/nino3.jfif")',
        'url("myproject/image/flood1.jfif")',
        'url("myproject/image/nina2.jfif")',
        'url("myproject/image/flood3.jfif")',
        'url("myproject/image/nina1.jfif")',
        'url("myproject/image/flood2.jfif")'
        // Add more image paths as needed
    ];

    let currentIndex = 0;
    const backgroundElement = document.createElement('div');
    backgroundElement.classList.add('home-background');
    document.getElementById('home').appendChild(backgroundElement);

    function changeBackground() {
        currentIndex = (currentIndex + 1) % backgrounds.length;
        backgroundElement.style.backgroundImage = backgrounds[currentIndex];
        setTimeout(() => {
            backgroundElement.style.opacity = '0.2';
        }, 100);
        setTimeout(() => {
            backgroundElement.style.opacity = '0';
        }, 5000); // Change background every 5 seconds (5000 milliseconds)
        setTimeout(changeBackground, 5500); // Wait for transition and then change background
    }

    changeBackground();
});

// Add click event listener to all elements with class 'btn'
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior

        // Get the target section ID from the href attribute
        let targetId = this.getAttribute('href');

        // Get the content for the target section based on its ID
        let newContent = '';
        switch (targetId) {
            case '#typhoon':
                newContent = "Hurricanes occur in the Atlantic Ocean and the eastern north Pacific Ocean. Typhoons occur in the western Pacific Ocean, and Tropical cyclones occur in the south Pacific Ocean and Indian Ocean.";
                break;
            case '#thunder':
                 newContent = "It can last for 30 minutes to several hours and it requires moisture and rapidly rising warm air to form. Convection is the key mechanism in thunderstorm formation. Thunderstorms form when there is a balance of rising air called updrafts and sinking air called downdrafts. As condensation progresses, the clouds increase in size and spread upward into an anvil-like shape, forming cumulonimbus clouds.";
                 break;
             case '#flood':
                    newContent = "It may be caused by: temporary rise in or overflowing of streams, rivers, or confined bodies of water heavy and prolonged rainfall, tsunamis, and storm surges failure of manmade structures such as dams and clogging of drainage systems in cases wherein there is rapid inundation, it is considered a flash flood";
                    break;
                case '#storm':
                     newContent = "Storm surge is produced by water being pushed toward the shore by the force of the winds moving cyclonically around the storm. The impact on surge of the low pressure associated with intense storms is minimal in comparison to the water being forced toward the shore by the wind.";
                     break;
                     case '#nino':
                        newContent = "El Niño was originally observed in Southern America as unusually warm seawater. El Niño in the Philippines usually starts between December and February. A primary concern during El Niño season is water supply.";
                        break;
                    case '#nina':
                         newContent = "La Niña is caused by the upward movement of cold water by unusually strong trade winds and ocean currents in a process called upwelling.";
                         break;
                

        }

        // Update the content of the target section
        let targetSection = document.querySelector(targetId);
        targetSection.querySelector('p').innerText = newContent;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for portfolio links
    document.querySelectorAll('.portfolio-layer a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Add click event listener to the anchor tag
    document.getElementById('updateEquipment').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default behavior of the anchor tag

        // Fade in each equipment item
        let equipmentItems = document.querySelectorAll('.equipment-item');
        equipmentItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
            }, index * 200); // Delay each item's fade-in effect
        });
    });
});

function scrollToPDFPage(pageNumber) {
    const pdfViewer = document.getElementById('pdfViewer');
    const iframeDoc = pdfViewer.contentDocument || pdfViewer.contentWindow.document;
    
    // Scroll to the desired page
    iframeDoc.getElementById('pageNumberInput').value = pageNumber;
    iframeDoc.getElementById('pageNumberInput').dispatchEvent(new Event('change'));
}

function scrollToPDFPage(pageNumber) {
    // Get the iframe element containing the PDF viewer
    const pdfViewer = document.getElementById('pdfViewer');
    
    // Scroll to the position of the iframe element
    pdfViewer.scrollIntoView({ behavior: 'smooth' });
    
    // Get the URL of the PDF file
    const pdfUrl = pdfViewer.src;
    
    // Extract the file ID from the URL
    const fileId = pdfUrl.match(/\/d\/([^/]+)/)[1];
    
    // Construct the URL to navigate to the specified page
    const pageUrl = `https://drive.google.com/file/d/${fileId}/preview#page=${pageNumber}`;
    
    // Update the source of the iframe to navigate to the specified page
    pdfViewer.src = pageUrl;
}
document.addEventListener('DOMContentLoaded', function() {
    // Add click event listener to all elements with class 'btn'
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior

            // Get the position of the PDF viewer element
            const pdfViewer = document.getElementById('pdfViewer');
            const pdfViewerPosition = pdfViewer.getBoundingClientRect().top + window.scrollY;

            // Scroll the page to the position of the PDF viewer
            window.scrollTo({
                top: pdfViewerPosition,
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Add click event listener to the "INFORMATION" button
    document.querySelector('a[href="#info"]').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior

        // Get the position of the target section
        const targetSection = document.getElementById('info');
        const targetSectionPosition = targetSection.getBoundingClientRect().top + window.scrollY;

        // Scroll the page to the position of the target section
        window.scrollTo({
            top: targetSectionPosition,
            behavior: 'smooth'
        });
    });

    // Add click event listener to all elements with class 'btn'
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior

            // Get the position of the PDF viewer element
            const pdfViewer = document.getElementById('pdfViewer');
            const pdfViewerPosition = pdfViewer.getBoundingClientRect().top + window.scrollY;

            // Scroll the page to the position of the PDF viewer
            window.scrollTo({
                top: pdfViewerPosition,
                behavior: 'smooth'
            });
        });
    });
});

