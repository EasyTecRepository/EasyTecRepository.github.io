
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>


  ___   _   _____   __  _____ ___ ___   _   _ _  _ ___    _   ___ ___  
 | __| /_\ / __\ \ / / |_   _| __/ __| | | | | \| | _ \  /_\ |_ _|   \ 
 | _| / _ \\__ \\ V /    | | | _| (__  | |_| | .` |   / / _ \ | || |) |
 |___/_/ \_\___/ |_|     |_| |___\___|  \___/|_|\_|_|_\/_/ \_\___|___/ 
                                                                       
</pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
