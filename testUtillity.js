(function() {
    console.clear();
    var elemToTest = prompt("Enter the element to test and it's property - (Comma Seperated as given below)", "textbox,border");
    if (elemToTest != null) {

        var elemType = elemToTest.split(',')[0];
        var propertyType = elemToTest.split(',')[1];
        var listOfElements = [];
        switch (elemType) {
            case 'textbox':
                var elems = document.body.getElementsByTagName("input");
                // Filter text boxes
                for (var k = 0; k < elems.length; k++) {
                    if(elems[k].type == "text"){
                        listOfElements.push(elems[k])
                    }
                }
                break;

            case 'button':
                var elems = document.body.getElementsByTagName("input");
                // Filter input buttons
                for (var k = 0; k < elems.length; k++) {
                    if(elems[k].type == "button" || elems[k].type == "submit"){
                        listOfElements.push(elems[k])
                    }
                }
                var buttonElems= document.body.getElementsByTagName("button");
                // Filter input buttons
                for (var k = 0; k < buttonElems.length; k++) {
                    
                        listOfElements.push(buttonElems[k])
                }
                break;

            case "all":
                listOfElements = document.body.getElementsByTagName("*");
                break;

            case "select":
                listOfElements = document.body.getElementsByTagName("select");
                break;

            case "link":
                listOfElements = document.body.getElementsByTagName("a");
                break;

            default:
                listOfElements = document.body.getElementsByTagName(elemType);
                break;
        }


        var uniqueStyleList = {};
        var totalUniqueStyle = 0;
        var listOfUniqueStyles = [];

        getFontsList(listOfElements, uniqueStyleList, elemType);
        displayInConsole();

    }

    function displayInConsole() {

        if (!console) {
            alert("Please open Developer Toolbar before using this tool!");
        }
        if(listOfUniqueStyles["ALLFIORI"]){
                console.log("All "+elemType+" match FIORI style");
                return;
        }

        if (listOfUniqueStyles.length > 0) {
            console.log("Total distinct " + propertyType + " used : " + totalUniqueStyle);
            console.log("List of " + propertyType + "  : " + "[" + listOfUniqueStyles.join(" ] [ ") + "]");
            console.log(uniqueStyleList);
        } else {
            console.log("Either the element entered is not found or the element/property is invalid.");
        }

    }

    function getFontsList(elems, uniqueStyleList, elemType) {
        
        for (var k = 0; k < elems.length; k++) {

            if (elems[k]) {
                var f= document.defaultView.getComputedStyle(elems[k], null).getPropertyValue(propertyType);                                            
                    if(elems[k].type !== "hidden"){

                        if (uniqueStyleList[f]) {
                            var tempArr = uniqueStyleList[f];
                            tempArr.push(elems[k]);
                            uniqueStyleList[f] = tempArr;
                        } else {
                            uniqueStyleList[f] = [elems[k]];
                            listOfUniqueStyles.push(f);
                            totalUniqueStyle++;
                        }
                    }                             
            }

        }
    }

})();
