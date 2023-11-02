document.addEventListener("DOMContentLoaded", function () {
  const curtainMenu = document.getElementById("curtain-menu");
  const menuButton = document.getElementById("menu-button");
  const closeMenuButton = document.getElementById("close-menu");

  menuButton.addEventListener("click", function () {
    const currentLeft = parseInt(getComputedStyle(curtainMenu).left);
    if (currentLeft === -220) {
      // Menu is closed, open it
      curtainMenu.style.left = "0";
    } else {
      // Menu is open, close it
      curtainMenu.style.left = "-220px";
    }
  });

  // Close the menu when clicking the close button
  closeMenuButton.addEventListener("click", function () {
    curtainMenu.style.left = "-220px";
  });
  // construction photo and text js
  sounds / knocking.mp3
});
function changeText(photoNumber) {
  var textElement = document.getElementById("text");
  var audioElement = document.getElementById("photoSound");

  switch (photoNumber) {
    case 1:
      textElement.innerHTML = "The vehicle shown in the photo is a hydro excavator, a powerful machine utilizing high-pressure water and vacuum technology for excavation. With extensive experience, I've operated this equipment for utility excavation, including power, telecom, storm drains, water, and sewer lines. Competence and licensing are prerequisites for operating this machinery, as it carries risks, especially around damaged utilities. Maintaining personal safety and hygiene is crucial given the potential exposure to contaminants. Long hours and irregular schedules are common in this line of work. This career has provided me valuable insights into my city's infrastructure and the intricate web of utilities that serve its residents.";
      audioElement.src = "sounds/snore.mp3"
      audioElement.play()
      break;
    case 2:
      textElement.innerHTML = "I bring experience in directional drilling projects. This specialized technique is crucial for utilities, and infrastructure. As someone with experience in this field, I've successfully been a part pf projects across diverse sectors, ensuring precision, efficiency, and safety. Proficient in advanced drilling tools and techniques, my work has consistently yielded positive outcomes, meeting project deadlines and adhering to environmental standards. Collaboration with cross-functional teams is at the core of my approach, ensuring that your projects are executed with excellence and precision.";
      audioElement.src = "sounds/knocking.mp3"
      audioElement.play()
      break;
    case 3:
      textElement.innerHTML = "I am experienced with Sandblasting; I am dedicated to ensuring precision and quality in surface preparation. With proficiency in various sandblasting techniques, I have successfully completed projects in diverse fields, including industrial settings, automotive restoration, and architectural surface cleaning. Safety is my utmost priority, and I operate sandblasting equipment with the highest standards of safety in mind. ";
      audioElement.src = "sounds/fbi.mp3"
      audioElement.play()
      break;
    /*Programming text */
    case 4:
      textElement.innerHTML = " As a dedicated student, I have honed my Python programming skills through rigorous coursework and hands-on experience. I have successfully completed numerous projects that have allowed me to apply my knowledge to real-world scenarios. These projects encompass a wide range of applications, from data analysis and web development to automation and machine learning. Through these experiences, I have developed a strong understanding of Python's versatility and its ability to solve complex problems efficiently. I am continually expanding my skill set and staying current with industry best practices, making me well-prepared to contribute effectively to any team or project that requires Python expertise.";
      audioElement.src = "sounds/rumble.mp3"
      audioElement.play()
      break;

    case 5:
      textElement.innerHTML = "As a dedicated student, I have cultivated a strong proficiency in PowerShell, leveraging its capabilities in various projects and coursework. I have successfully completed several projects that showcase my ability to automate tasks, manage system configurations, and streamline administrative processes using PowerShell. These projects have given me hands-on experience in script development, system administration, and security enhancements. My commitment to staying up to date with the latest PowerShell features and best practices ensures that I can effectively contribute to tasks related to Windows systems management, automation, and scripting. I am eager to apply my PowerShell expertise to solve complex problems and enhance operational efficiency in professional settings. ";
      audioElement.src = "sounds/huh.mp3"
      audioElement.play()
      break;
    case 6:
      textElement.innerHTML = "As a dedicated student, I have cultivated a strong proficiency in HTML, the backbone of web development. I have successfully completed numerous projects that demonstrate my ability to structure web content effectively, creating well-organized and semantic web pages. My knowledge of HTML allows me to build the foundation for any web project, ensuring that the content is structured in a clear and accessible manner.l";
      audioElement.src = "sounds/pluh.mp3"
      audioElement.play()
      break;
    case 7:
      textElement.innerHTML = " In addition to HTML, I have honed my skills in CSS, which has enabled me to style and design websites with precision. Through various projects, I have showcased my ability to create responsive and visually appealing web interfaces. My expertise in CSS allows me to bring creativity and aesthetics to web design, ensuring that websites not only function well but also provide an engaging and aesthetically pleasing user experience.";
      audioElement.src = "sounds/snore.mp3"
      audioElement.play()
      break;
    case 8:
      textElement.innerHTML = " Complementing my HTML and CSS skills, I have a solid understanding of JavaScript, a powerful language for adding interactivity and dynamism to web applications. I have successfully used JavaScript in various projects to enhance user interactivity and create dynamic web applications. My proficiency in JavaScript allows me to add functionality to websites, making them more engaging and user-friendly. My commitment to staying up-to-date with the latest web development technologies ensures that I can contribute effectively to the creation of modern and interactive web solutions. ";
      audioElement.src = "sounds/galaxy.mp3"
      audioElement.play()
      break;
    default:
      textElement.innerHTML = "Click on a photo to change the text.";
      break;
  }
}






