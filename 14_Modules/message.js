export function message() {
    console.log("I am the best");
    return `JavaScript modules allow you to break up your code into separate files.<br>
This makes it easier to maintain a code-base.<br>
Modules are imported from external files with the import statement.<br>
Modules also rely on type="module" in the <script> tag.`
}

export const name = "Jesse";        //  individual export

const designation = "Dev";
const age = 40;

export {designation, age};    //  All at once export

