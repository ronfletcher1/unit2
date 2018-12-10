console.dir(document);

var ron = document.getElementById("ronsDiv");

console.dir(ron);

ron.innerHTML = "I just changed this text";

ron.style.backgroundColor = "orange";

var newImage = document.createElement("img");
newImage.src = "https://placehold.it/300x300";
document.getElementById("ronsDiv").appendChild(newImage);



var simplifiedDocument = {
    children: [
        {
            tag: ",html",
            children: [
                {
                    tag: "<head>"
                },
                {
                    tag: "<body>",
                    children: [
                        {
                            tag: "<div id='ronsDiv'>"
                        }
                    ]
                }
            ]
        }
    ]
}

simplifiedDocument.children[0].children[1]