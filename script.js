#!/usr/bin/env node

var fs = require("fs")



const args = (process.argv).slice(2)


var page_title = "Site"

function mark(ez) {

    const lines = ez.split("\n")
    var html = []

    lines.forEach(line => {
        
        const words = line.split(" ")
        var line_html


        switch (words[0]) {
            

            case ".":
                line_html = `<h1>${words.slice(1).join(" ")}</h1>`
                break

            case "..":
                line_html = `<h2>${words.slice(1).join(" ")}</h2>`
                break
            
            case "...":
                line_html = `<h3>${words.slice(1).join(" ")}</h3>`
                break


            case "<>":
                line_html = `<img src=${words[1]}></img>`
                break
            

            case ">":
                line_html = `<code><xmp>${words.slice(1).join(" ")}</xmp></code>`
                break
            
            
            case "_":
                line_html = `<br>`
                break


            case "<":
                line_html = `<a href=${words[1]} target="_blank">${words.slice(2).join(" ")}</a>`
                break

            
            case "-_-":
                line_html = `<ul>`
                break
            
            
            case "_-_":
                line_html = `</ul>`
                break

            
            case "-->":
                line_html = `<li>${words.slice(1).join(" ")}</li>`
                break
            
            
            case "<t>":
                page_title = words.slice(1).join(" ")
                line_html = ``
                break

            
            case "":
                line_html = ``
                break
            
            
            default:

                words.forEach((word, index) => {

                    const word_start = word[0]
                    const word_end = word[word.length - 1]


                    if ((word_start === "*")&&(word_end === "*")) {
                        words[index] = `<b>${word.slice(1, word.length-1)}</b>`}

                    if ((word_start === "_")&&(word_end === "_")) {
                        words[index] = `<i>${word.slice(1, word.length-1)}</i>`}

                    if ((word_start === "`")&&(word_end === "`")) {
                        words[index] = `<code><xmp>${word.slice(1, word.length-1)}</xmp></code>`}
                        
                    if ((word_start === "~")&&(word_end === "~")) {
                        words[index] = `<s>${word.slice(1, word.length-1)}</s>`}
                    
                    if ((word_start === "^")&&(word_end === "^")) {
                        words[index] = `<sup>${word.slice(1, word.length-1)}</sup>`}               
                })

                line_html = `<p>${words.join(" ")}</p>`;
                break
        }

        html.push(line_html)
    });

    return html.join("\n")
}



if (args.length > 0) {
    if (fs.existsSync(args[0])) {
        var in_file = args[0] 
    } else {console.log(`File "${args[0]}" doesn't exist. Exiting`); process.exit(1)}
} else {console.log("Please provide valid arguments, See manual for info. Exiting."); process.exit(1)}

if (args.length > 1) {
    var out_file = args[1]
} else {console.log("No out file specified, taking non existent \"out.html\" as out file."); var out_file = "out.html"}

if (args.length > 2) {
    var css_file = args[2]
} else {console.log("No css file specified, taking non existent \"style.css\" as css file."); var css_file = "style.css"}


const parsed = mark(fs.readFileSync(in_file).toString())

var html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>`+page_title+`</title>
    <link rel="stylesheet" href="`+css_file+`">
</head>
<body>`
+ parsed
+`</body>
</html>
`

fs.writeFileSync(out_file, html, function (err) {
    if (err) return console.log("Error writing to out file, Error: "+err)
})

console.log("Job Completed.")