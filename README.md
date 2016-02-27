# Backie

## Overview

Simple and easy to use "back to top" jQuery plugin!

## Demo

Demo <a href="http://joro.me/demos/backie/" target="_blank">here</a>.

## Installation

1. Download the <a href="http://code.jquery.com/jquery-latest.min.js" target="_blank">latest jQuery</a> version.
2. Add the following code between the **head** tag or before the closing **body** tag. Replace "path-to" with the actual path to the file.

        <script src="path-to/jquery-latest.min.js"></script>

3. Download Backie and place **backie.js** in a preferred folder in your project.
4. Right after you load jQuery add the following code. Replace "path-to" with actual path to the file.

        <script src="path-to/backie.js"></script>

5. Next, add this piece of code.

        <script>
          $(document).ready( function() {
            $.backie();
          });
        </script>
        
6. You're all set! Your final code should look like:

        <script type="text/javascript" src="path-to/jquery-latest.min.js"></script>
        <script type="text/javascript" src="path-to/backie.js"></script>
        <script>
            $(document).ready( function() {
                $.backie();
            });
        </script>
        
## Configuration

Basically, the plugin is designed to work without any additional configuration, but in case you wanted to change something, here are a couple of default options and values.

        <script>
            $(document).ready( function() {
                $.backie({
                    backgroundColor: '#000', // Changes the background color.
                    width: '40px',           // Changes the width of the button. 
                    height: '40px',          // Changes the height of the button.
                    radius: '50%',           // Controls the border-radius value. The smaller the percentage, the more square will be the button.
                    opacity: '0.2',          // Changes the opacity of the button.
                    opacityOnHover: '0.4',   // Changes the opacity level on hover.
                    enableAfter: '300',      // Change this if you want to activate the plugin after a fixed number of pixles. By default the button becomes visible after 300 pixels from the top.
                    enableAfterEl: null      // Change this if you want to activate the plugin after a certain element. Enter the ID of the desired element, for example '#gallery'. Important: The enableAfter value is overwritten by enableAfterEl.
                });
            });
        </script>
        
Here is an example how your final code should look like with some customizations.

        <script type="text/javascript" src="path-to/jquery-latest.min.js"></script>
        <script type="text/javascript" src="path-to/backie.js"></script>
        <script>
            $(document).ready( function() {
                $.backie({
                    width: '30px',
                    height: '30px'
                });
            });
        </script>
        
## Changelog

**v1.0 (05 Oct, 2014)**
- Initial release.
