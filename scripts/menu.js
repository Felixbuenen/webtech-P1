// when window loaded, call setupInfo
window.addEventListener("load", setupInfo, false);

function setupInfo() {
    // create menu that allows to change page elements
    createSelectionMenu();
    
    let elementSelectionMenu = document.getElementById("elementSelectionMenu");
    elementSelectionMenu.addEventListener('change', function(){ selectionMenuChange(); });
}

function createSelectionMenu() {
    let elementSelectionMenu = document.getElementById("elementSelectionMenu");
    
    // search document for <body> and add to menu
    if(document.getElementsByTagName("body").length > 0) {
        let addBody = document.createElement("option");
        addBody.text = "body";
        elementSelectionMenu.add(addBody);
    }
    
    // search document for <header> and add to menu
    if(document.getElementsByTagName("header").length > 0) {
        let addHeader = document.createElement("option");
        addHeader.text = "header";
        elementSelectionMenu.add(addHeader);
    }
    
    // search document for <footer> and add to menu
    if(document.getElementsByTagName("footer").length > 0) {
        let addFooter = document.createElement("option");
        addFooter.text = "footer";
        elementSelectionMenu.add(addFooter);
    }
        
    // search document for <aside> and add to menu
    if(document.getElementsByTagName("aside").length > 0) {
        let addAside = document.createElement("option");
        addAside.text = "aside";
        elementSelectionMenu.add(addAside);
    }
    
    // search document for <article> and add to menu
    if(document.getElementsByTagName("article").length > 0) {
        let addArticle = document.createElement("option");
        addArticle.text = "article";
        elementSelectionMenu.add(addArticle);
    }
    
    // search document for <section> and add to menu
    if(document.getElementsByTagName("section").length > 0) {
        let addSection = document.createElement("option");
        addSection.text = "section";
        elementSelectionMenu.add(addSection);
    }
}

function selectionMenuChange() {
    let elementSelectionMenu = document.getElementById("elementSelectionMenu");
    document.getElementById("selected-element").innerHTML = "The selected element is " + elementSelectionMenu.value + ".";
    
    
    let modal = document.getElementById("myModal");
    modal.style.display = "block";
    
    let span = document.getElementsByClassName("close-modal")[0];
    span.onclick = function() {
        modal.style.display = "none";
    }
}

function menuApplyNewSettings() {
    // target tag
    let target = document.getElementById("elementSelectionMenu").value;
    
    // values of input by user in the form (numerical values only)
    let newFontValue = document.getElementById("change-font-size").value;
    let newColorValue = document.getElementById("change-color").value;
    document.getElementById("selected-element").innerHTML = target + "   " + newFontValue + "   " + newColorValue;
    
    /* THE CODE BELOW DOES NOT WORK!!
    
    // apply changes in CSS
    if(target !== undefined && newFontValue !== undefined) {
        document.getElementsByTagName(target).style.font-size = newFontValue;
        document.getElementById("selected-element").innerHTML = "Changed font of " + target + " to " + newFontValue;
    }
    */
    
}