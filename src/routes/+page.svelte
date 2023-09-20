<script>
	import "../app.css";
    import Background from "../background.svelte";
    var projects = [
        {
            "title": "Deep Learning Heart Disease Prediction",
            "description": "This project employs various deep learning models for binary classification to predict the presence or absence of heart disease.",
            "image": "heart.jpg",
            "link": "https://github.com/brentvblake/Heart-disease-prediction"
        },
        {
            "title": "Fake News Detection (NLP)",
            "description": "This project focuses on developing a fake news detection model using natural language processing (NLP).",
            "image": "fake-news.jpg",
            "link": "https://github.com/brentvblake/Fake-News-Detection-NLP"
        },
        {
            "title": "Laundry Kiosk Application",
            "description": "This work is a showcase of a laundry kiosk application I'm developing in flutter, it will provide easy access to laundry services via cashless payment systems.",
            "image": "kiosk.png",
            "link": ""
        },
        {
            "title": "Automated Card Scanner/Printer",
            "description": "This project is a showcase of an automated card scanner/printer I developed for a client. It runs on a desktop pc and connects to a RFID card scanner and a thermal card printer.",
            "image": "card.png",
            "link": ""
        },
        {
            "title": "Personal Protection Equipment (PPE) Vending App",
            "description": "A showcase of a PPE vending app I created, providing easy access to personal protective equipment.",
            "image": "vending.png",
            "link": "https://github.com/brentvblake/PPE_Vending_App"
        },
        {
            "title": "Evolution of Music Taste",
            "description": "Analysing Popular Music Trends Over Time",
            "image": "songs.png",
            "link": "https://github.com/brentvblake/Popular-Music-Evolution-analysed"
        },
        {
            "title": "WhatsApp Chat Data Visualizer",
            "description": "Transforms exported WhatsApp chat data into insightful visualizations",
            "image": "whatsapp.png",
            "link": "https://github.com/brentvblake/WhatsApp-Chat-Analysis-and-Data-Visuals"
        },
        {
            "title": "Fantasy F1 Data Visualised",
            "description": "This project is a visualization of Fantasy Points for the F1 2022 season from a fantasy league I was part of on kicktipp.com.",
            "image": "f1data.png",
            "link": "https://github.com/brentvblake/f1_2022_fantasy_data_visualized"
        },
        {
            "title": "This Website",
            "description": "A personal website to showcase my projects and skills",
            "image": "site.png",
            "link": "https://github.com/brentvblake/my-portfolio-web"
        },
    ];
</script>

<body>
    <Background />
    <script>
        // Function to detect screen size and toggle a CSS class
        function toggleHoverEffect() {
            const isMobile = window.innerWidth <= 768; // You can adjust this breakpoint
            const projectElements = document.querySelectorAll('.project-element');
            
            projectElements.forEach((element) => {
                if (isMobile) {
                    element.classList.remove('hoverable');
                } else {
                    element.classList.add('hoverable');
                }
            });
        }
        
        // Initial call to set the class based on screen size
        toggleHoverEffect();
        
        // Listen for window resize events to update the class
        window.addEventListener('resize', toggleHoverEffect);
    </script>
<main class="flex flex-col items-center md:flex-row">
    
	<section class="w-full md:w-2/5 p-20 text-secondary overflow-y-auto md:fixed top-0">
		<div class = "flex justify-center">
            <div class="mt-10 md:mt-0 p-5 md:p-5 bg-tertiary rounded-lg inline-block glass-container">
                <h2 class="text-2xl font-semibold capitalize text-center pb-5">Brent Blake</h2>
                <div class="flex justify-center pb-5">
                    <img src="brent.JPG" alt="Brent" class="w-40 h-40 rounded-full ring-2 ring-secondary ring-opacity-25"style="object-fit: cover;">
                </div>
                <p class="text-lg">Cape Town, South Africa 🇿🇦</p>
                <a href="https://github.com/brentvblake" class="text-lg" target="_blank">github.com/brentvblake</a>
                <a href="mailto:brent99blake@gmail.com" class="text-lg">brent99blake@gmail.com</a>
                <a href="https://www.linkedin.com/in/brentvblake" class="text-lg" target="_blank">linkedin.com/in/brentvblake</a>

                <!-- Add more personal information as needed -->
            </div>
        </div>
        <div class="flex justify-center mt-20 md:mt-75"> <!-- Center the content horizontally -->
            <div class="flex items-center space-x-4">
              <img src="dino.png" alt="Brent" class="w-10 h-10 rounded-full ring-4 ring-secondary">
              <div class="flex space-x-4">
                <div class="flex items-center space-x-2 text-tertiary bg-secondary p-4 rounded-lg glass-container">
                  <a href="https://github.com/brentvblake" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2">
                    <img src="github.svg" alt="GitHub logo" class="w-6 h-6 text-tertiary fill=currentColor">
                    <span class="hidden md:block">GitHub</span> <!-- Hide on small screens -->
                  </a>
                </div>
                <div class="flex items-center space-x-2 text-tertiary bg-secondary p-4 rounded-lg glass-container">
                  <a href="https://linkedin.com/in/brentvblake" target="_blank" rel="noopener noreferrer" class="flex items-center space-x-2">
                    <img src="linkedin.svg" alt="LinkedIn logo" class="w-6 h-6 text-tertiary fill=currentColor">
                    <span class="hidden md:block">LinkedIn</span> <!-- Hide on small screens -->
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          
          
          
        
        
	</section>
	
	
	<section class="w-full md:w-3/5 md:ml-[40%] mt-10 md:mt-0 overflow-y-auto">
        <div class="container px-6 py-10 mx-auto">
            <div class="flex justify-items-center">
                <h1 class="text-4xl font-semibold text-center text-secondary bg-tertiary p-2 rounded-lg inline-block mx-auto glass-container">Projects</h1>
            </div>
            <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-1 xl:grid-cols-1">
                {#each projects as project}
                <div class="overflow-hidden bg-center bg-cover rounded-lg cursor-pointer h-96 group project-element hoverable"
                    style={"background-image:url("+project.image +")"}>
                    <a href={project.link} target="_blank">
                        <div class="flex flex-col justify-center w-full h-full px-8 py-4 bg-black/60 transition-opacity duration-700 opacity-0 backdrop-blur-sm group-hover:opacity-100">
                            <div class="bg-dark/50 p-2 rounded-lg">
                                <h2 class="mt-2 text-xl font-semibold text-secondary capitalize">{project.title}</h2>
                                <p class="mt-2 text-lg tracking-wider text-white uppercase ">{project.description}</p>
                            </div>
                        </div>
                    </a>
                </div>
                {/each}
            </div>
        </div>
    </section>
</main>
</body>


