(function() {
    console.clear();
    var elemToTest = prompt("Enter the element to test and it's property - (Comma Seperated as given below)", "textbox,border");
    if (elemToTest != null) {
        var inputField = false;

        var elemType = elemToTest.split(',')[0];
        var propertyType = elemToTest.split(',')[1];

        switch (elemType) {
            case 'textbox':
                var elems = document.body.getElementsByTagName("input");
                inputField = true;
                break;

            case 'button':
                var elems = document.body.getElementsByTagName("button");
                break;

            case "all":
                var elems = document.body.getElementsByTagName("*");
                break;

            case "select":
                var elems = document.body.getElementsByTagName("select");
                break;

            default:
                var elems = document.body.getElementsByTagName(elemType);
                break;
        }


        var uniqueStyleList = {};
        var totalUniqueStyle = 0;
        var listOfUniqueStyles = [];

        getFontsList(elems, uniqueStyleList);
        displayInConsole();

    }

    function displayInConsole() {

        if (!console) {
            alert("Please open Developer Toolbar before using this tool!");
        }


        if (listOfUniqueStyles.length > 0) {
            console.log("Total distinct " + propertyType + " used : " + totalUniqueStyle);
            console.log("List of " + propertyType + "  : " + "[" + listOfUniqueStyles.join(" ] [ ") + "]");
            console.log(uniqueStyleList);
        } else {
            console.log("Either the element entered is not found or the element/property is invalid.");
        }

    }

    function getFontsList(elems, uniqueStyleList) {
        for (var k = 0; k < elems.length; k++) {

            if (elems[k]) {
                var f;
                if (!inputField) {
                    f = document.defaultView.getComputedStyle(elems[k], null).getPropertyValue(propertyType);
                } else {
                    if (elems[k].type == 'text' || elems[k].type == 'button' || elems[k].type == 'submit') {
                        f = document.defaultView.getComputedStyle(elems[k], null).getPropertyValue(propertyType);
                    }
                }


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

})();
