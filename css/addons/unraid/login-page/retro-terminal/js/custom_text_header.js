
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>


  _____    _    ______   __  _____ _____ ____   _   _ _   _ ____      _    ___ ____  
 | ____|  / \  / ___\ \ / / |_   _| ____/ ___| | | | | \ | |  _ \    / \  |_ _|  _ \ 
 |  _|   / _ \ \___ \\ V /    | | |  _|| |     | | | |  \| | |_) |  / _ \  | || | | |
 | |___ / ___ \ ___) || |     | | | |__| |___  | |_| | |\  |  _ <  / ___ \ | || |_| |
 |_____/_/   \_\____/ |_|     |_| |_____\____|  \___/|_| \_|_| \_\/_/   \_\___|____/ 


</pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
