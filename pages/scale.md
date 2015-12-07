# The Decoded Scale [Use it!](#use-it)

To maintain rhythm in our layouts and to keep all material consistent, we generally apply the Decoded Scale to our elements.

When choosing font sizes, line height and spacing, stick to a size on the scale if possible, only deviate if necessary.

The scale is a collection of ratios that work well together and is represented in our basic [templates](/pages/templates) as well as the [decoded.css](/pages/how-to/basic-css).

The scale adapts to different media, for screen applications we might choose a base size of 16px, while for A4 print products we might choose 11pt. Other base sizes can be used as appropriate, for example presentations will need a bigger base size to be legible from a distance.

Size | Ratio (rem) | Screen Default | Print Default | Use for
-----|-------------|----------------|---------------|--------
S    |0.83		     |13px            |9pt           | Footer copy, annotations
M    |1	           |16px		        |11pt           | Body copy
L    |1.14	    	 |18px        	  |13pt           | H5-H6 subheadings
XL   |1.34	       |21px           	|15pt           | H3-H4 subheading
XXL  |2.3	         |37px 	          |25pt           | H2 subheadings
XXXL |3.7          |59px            |41pt           | H1 page headers
XXXXL|6.7          |107px           |74pt           | Extra large headers


## Calculate Scales

You can calculate your own scale based on a different body copy size using the calculator below:

Size | Ratio (rem) |Your Sizes| Use for
-----|-------------|----------|--------
S    |0.83		     |<input class="ratio-calculator" type="number" data-ratio=".83" id="ratio-calculator-S" readonly>| Footer copy, annotations
M    |1	           |<input class="ratio-calculator" type="number" data-ratio="1" id="ratio-calculator-M" placeholder="enter your base size">| Body copy
L    |1.14	    	 |<input class="ratio-calculator" type="number" data-ratio="1.14" id="ratio-calculator-L" readonly>| H5-H6 subheadings
XL   |1.34	       |<input class="ratio-calculator" type="number" data-ratio="1.34" id="ratio-calculator-XL" readonly>| H3-H4 subheading
XXL  |2.3	         |<input class="ratio-calculator" type="number" data-ratio="2.3" id="ratio-calculator-XXL" readonly>| H2 subheadings
XXXL |3.7		       |<input class="ratio-calculator" type="number" data-ratio="3.7" id="ratio-calculator-XXXL" readonly>| H1 page headers
XXXXL|6.7		       |<input class="ratio-calculator" type="number" data-ratio="6.7" id="ratio-calculator-XXXXL" readonly>| Extra large headers

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/zepto/1.1.6/zepto.min.js"></script>
<script>
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

$(function(){
  $("#ratio-calculator-M").on("keyup",function(e){
    var base = e.target.value;
    if(isNumber(base)){
      $(".ratio-calculator").each(function(){
        $(this).val(Math.round(base*$(this).data("ratio"),0));
      });
    }
  });
});
</script>




## Use It

### GDocs

Our basic templates have paragraph styles set up that use the scale. Easy as that.

### Adobe

Use our [Decoded Library](http://adobe.ly/1Lst3EU) to get all the paragraph styles for InDesign.
They use the default print scale.

### Code

For basic apps and web sites, link to the [decoded.css](/pages/how-to/basic-css), then use helper classes as described in the documentation.
All basic styles will use the scale where possible.

For more complex apps, include the [Decoded Style Framework](/pages/how-to/style-framework) in your app.
Variables for the css framework are called `--scale-S` to `--scale-XXXXL`
