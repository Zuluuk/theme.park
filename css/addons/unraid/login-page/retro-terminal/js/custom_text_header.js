
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>
                888         
                888         
                888         
88888888888  888888888  888 
   d88P 888  888888888  888 
  d88P  888  888888888  888 
 d88P   Y88b 888888Y88b 888 
88888888 "Y88888888 "Y88888 
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
