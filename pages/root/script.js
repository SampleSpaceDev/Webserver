const developerNames = ["Sam", "SampleSpace"];
let currentDeveloperNameIndex = 0;

const developerNameSpan = document.getElementById("name");

const typewriter = new Typewriter(developerNameSpan, { loop: true });

typewriter.typeString("Hey! I'm <strong>Sam</strong>.")
    .pauseFor(2000)
    .deleteChars(4)
    .typeString("SampleSpace.")
