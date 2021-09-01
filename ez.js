const md_element = document.getElementById("md")
const md_text = md_element.innerHTML
const body_element = document.getElementsByTagName("body")[0]
const title_element = document.getElementsByTagName("title")[0]
const html_element = document.createElement("div")


function mark(md) {
    const lines = md.split("\n")
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
            
            
            case "->>":
                title_element.innerHTML = words.slice(1).join(" ")
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
html_element.innerHTML = mark(md_text)


body_element.appendChild(html_element)