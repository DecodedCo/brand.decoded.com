# The Decoded Scale [Use it!](#use-it)

To maintain rhythm in our layouts and to keep all material consistent, we generally apply the Decoded Scale to our elements.

When choosing font sizes, line height and spacing, stick to a size on the scale if possible, only deviate if necessary.

The scale is a collection of ratios that work well together and is represented in our basic [templates](/pages/templates) as well as the [decoded.css](/pages/how-to/basic-css).

The scale adapts to different media and is based on the size of our main body copy. For screen applications we might choose a base size of 16px, while for A4 print products we might choose 11pt. Other base sizes can be used as appropriate, for example presentations will need a bigger base size to be legible from a distance.

Size      | Ratio (rem) | Screen Default | Print Default | Use for
----------|-------------|----------------|---------------|--------
S         |0.83         |13px            |9pt            | Footer copy, annotations
M - base  |1            |16px            |11pt           | Body copy
L         |1.14         |18px            |13pt           | H5-H6 subheadings
XL        |1.34         |21px            |15pt           | H3-H4 subheading, lead
XXL       |2.3          |37px            |25pt           | H2 subheadings
XXXL      |3.7          |59px            |41pt           | H1 page headers
XXXXL     |6.7          |107px           |74pt           | Extra large headers


## Calculate Scales

You can calculate your own scale based on a different body copy size using the calculator below:

Size     | Ratio (rem) |Your Sizes| Use for
---------|-------------|----------|--------
S        |0.83         |<input class="ratio-calculator" type="number" data-ratio=".83" id="ratio-calculator-S" readonly>| Footer copy, annotations
M - base |1            |<input class="ratio-calculator" type="number" data-ratio="1" id="ratio-calculator-M" placeholder="enter your base size">| Body copy
L        |1.14         |<input class="ratio-calculator" type="number" data-ratio="1.14" id="ratio-calculator-L" readonly>| H5-H6 subheadings
XL       |1.34         |<input class="ratio-calculator" type="number" data-ratio="1.34" id="ratio-calculator-XL" readonly>| H3-H4 subheading, lead
XXL      |2.3          |<input class="ratio-calculator" type="number" data-ratio="2.3" id="ratio-calculator-XXL" readonly>| H2 subheadings
XXXL     |3.7          |<input class="ratio-calculator" type="number" data-ratio="3.7" id="ratio-calculator-XXXL" readonly>| H1 page headers
XXXXL    |6.7          |<input class="ratio-calculator" type="number" data-ratio="6.7" id="ratio-calculator-XXXXL" readonly>| Extra large headers

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


## Applications of the Scale

### Leading / Line height

We use the XL Ratio (1.34) to define line height for most copy.
So if our paragraph (main body text) is set at 11pt, we'll use 11*1.34 = 15pt as the line height.

- **GDocs** calls this line-spacing. Select the text you want to change, then find the line-spacing button in the menu bar, select custom and enter 1.34

![Line Height Menu in GDocs](//brand-assets.decoded.com/BrandGuidelines/gdocs-lineheight.png)

- **Adobe** calls this Leading. We'll have to calculate the line height and enter it in the leading box or use predefined paragraph styles in the [Decoded Library](http://adobe.ly/1Lst3EU).

![Setting the Line Height in InDesign](//brand-assets.decoded.com/BrandGuidelines/adobe-indesign-lineheight.png)

- In **CSS** we can just set `line-height: 1.34;`


### Spacing

Applying the scale for space around and between objects helps to keep the rhythm and guides the eye.

As a rule of thumb, use bigger spacing around objects and smaller spacing within.

<div class="example noPadding">
  <img src="//brand-assets.decoded.com/BrandGuidelines/scale-spacing.png" class="noMargin">
</div>

### Grid

In most applications we split the area in thirds, using the wider two-thirds column for the main content and the smaller one-third column for contextual information.

Depending on the application the contextual column can be left or right of the main content column.

The gutter between the columns should of of a large size according to the Decoded Scale.


<div class="example noPadding">
  <img src="//brand-assets.decoded.com/BrandGuidelines/scale-grid.svg" class="full-width">
</div>

<div class="example noPadding">
  <img src="//brand-assets.decoded.com/BrandGuidelines/scale-grid-reverse.svg" class="full-width">
</div>

If thirds are not feasible for a given application, a grid of sixths can be used. Try to keep it to thirds whenever possible and only switch to sixths when there is a good reason to. Other grids or random percentages (i.e. 30%, 70%) are discouraged.


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
