# Style-TestUtility
This is a browser bookmarklet to test style consistencies of UI Elements.

#What:
Check DOM elements on a page for given style property and identifies common valuesand lists them as a map.

#How:
1. Add the compressed version of the file as bookmark.
2. On the page you want to test, open the developer toolbar console tab
3. Click on the bookmark you have added.
4. A prompt will appear asking for the [element type] and [style] that has to verified
5. Results will be available on the console of the developer toolbar, in the following format

## Result
Total distinct style used : 
List of style: [style value, style value, ....]
style value : HTML Element having style value

Notes: This tool is built on Chrome and works best in chrome. 

##Element Types: 
1. textbox - Text Boxes
2. button - Buttons
3. select - Drop downs
4. link - Anchor elements
5. all - Entire page elements


