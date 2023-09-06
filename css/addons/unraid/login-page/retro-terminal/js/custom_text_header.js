
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>                     __                             ___       __  
   _______   ______  __  _______________  __  ___  _____  ___   _______ 
  / __/ _ | / __/\ \/ / /_  __/ __/ ___/ / / / / |/ / _ \/ _ | /  _/ _ \
 / _// __ |_\ \   \  /   / / / _// /__  / /_/ /    / , _/ __ |_/ // // /
/___/_/ |_/___/   /_/   /_/ /___/\___/  \____/_/|_/_/|_/_/ |_/___/____/ 
                                                                        
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
