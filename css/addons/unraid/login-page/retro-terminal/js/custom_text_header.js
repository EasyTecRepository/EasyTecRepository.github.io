
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>

    _________   _______  __   __________________   __  ___   ______  ___    ________ 
   / ____/   | / ___/\ \/ /  /_  __/ ____/ ____/  / / / / | / / __ \/   |  /  _/ __ \
  / __/ / /| | \__ \  \  /    / / / __/ / /      / / / /  |/ / /_/ / /| |  / // / / /
 / /___/ ___ |___/ /  / /    / / / /___/ /___   / /_/ / /|  / _, _/ ___ |_/ // /_/ / 
/_____/_/  |_/____/  /_/    /_/ /_____/\____/   \____/_/ |_/_/ |_/_/  |_/___/_____/                                                            
</pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
