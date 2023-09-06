
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>


_________________________  __   _________________________   _____  ______   _______________________________ 
___  ____/__    |_  ___/ \/ /   ___  __/__  ____/_  ____/   __  / / /__  | / /__  __ \__    |___  _/__  __ \
__  __/  __  /| |____ \__  /    __  /  __  __/  _  /        _  / / /__   |/ /__  /_/ /_  /| |__  / __  / / /
_  /___  _  ___ |___/ /_  /     _  /   _  /___  / /___      / /_/ / _  /|  / _  _, _/_  ___ |_/ /  _  /_/ / 
/_____/  /_/  |_/____/ /_/      /_/    /_____/  \____/      \____/  /_/ |_/  /_/ |_| /_/  |_/___/  /_____/  
                                                                                                            

</pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
