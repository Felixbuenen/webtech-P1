// when window loaded, call setupInfo
window.addEventListener("load", setupInfo, false);

function setupInfo() {
    // create menu that allows to change page elements
    createSelectionMenu();
    
    let elementSelectionMenu = document.getElementById("elementSelectionMenu");
    elementSelectionMenu.addEventListener("change", selectionMenuChange, false);
}

function createSelectionMenu() {
    let elementSelectionMenu = document.getElementById("elementSelectionMenu");
    
    // search document for <p> and add to menu
    if(document.getElementsByTagName("p").length > 0) {
        let addBody = document.createElement("option");
        addBody.text = "p";
        elementSelectionMenu.add(addBody);
    }
    
    // search document for <a> and add to menu
    if(document.getElementsByTagName("a").length > 0) {
        let addHeader = document.createElement("option");
        addHeader.text = "a";
        elementSelectionMenu.add(addHeader);
    }
    
    // search document for <h1> and add to menu
    if(document.getElementsByTagName("h1").length > 0) {
        let addFooter = document.createElement("option");
        addFooter.text = "h1";
        elementSelectionMenu.add(addFooter);
    }
        
    // search document for <h2> and add to menu
    if(document.getElementsByTagName("h2").length > 0) {
        let addAside = document.createElement("option");
        addAside.text = "h2";
        elementSelectionMenu.add(addAside);
    }
    
    // search document for <h3> and add to menu
    if(document.getElementsByTagName("h3").length > 0) {
        let addArticle = document.createElement("option");
        addArticle.text = "h3";
        elementSelectionMenu.add(addArticle);
    }

    // search document for <td> and add to menu
    if(document.getElementsByTagName("td").length > 0) {
        let addArticle = document.createElement("option");
        addArticle.text = "td";
        elementSelectionMenu.add(addArticle);
    }
}

function selectionMenuChange() {
    
    let modal = document.getElementById("menuModal");
    modal.style.display = "block";

    // add 'apply' event handler
    let applyButton = document.getElementById("apply-button");
    applyButton.addEventListener("click", menuApplyNewSettings, false);

    let span = document.getElementsByClassName("close-modal")[0];
    span.onclick = function() {
        modal.style.display = "none";
    }
}

function menuApplyNewSettings() {
    // target tag
    let target = document.getElementById("elementSelectionMenu").value; // this is the tag that is selected in the previous menu
    
    // values of input by user in the form (numerical values only)
    let newFontValue = document.getElementById("change-font-size").value; // this is the input value of the font  option in the previous menu
    let newColorValue = document.getElementById("change-color").value;    // this is the input value of the color option in the previous menu

    if(newFontValue == "") {
        alert("You need to specify a font value!");
        return;
    }

    // loop through elements, apply style change
    let targetElements = document.getElementsByTagName(target);
    for(let i = 0; i < targetElements.length; i++) {
        targetElements[i].style.setProperty("font-size", newFontValue + "px", "important");
        targetElements[i].style.setProperty("color", newColorValue, "important");
    }
        
    // close modal
    let modal = document.getElementById("menuModal");
    modal.style.display = "none";
}