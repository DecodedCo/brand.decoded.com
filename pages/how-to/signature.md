# Email Signature Generator [Use it!](#use-it)
Emails are our primary form of communication with clients. This tool will allow everyone to have a consistent email signature which looks beautiful in every email tool our clients may be using. It is inline with the new business class designs.

## Use it

#### 1. Replace the details below with your own, then hit &ldquo;copy to clipboard&rdquo;


<div class="col-md-12" id="wrapper">

  <!-- name -->
  <p
    class="editor"
    contenteditable="true"
    style="font-size:14px;
      margin-top:0px;
      margin-bottom:0px;
      line-height:22px;
      font-weight:200 !important;
      font-family:sans-serif;"><strong style="color:#333;">Bill Murray</strong></p>

<!-- job -->
  <p contenteditable="true"
    style="font-size:14px;
      margin-top:0px;      
      margin-bottom:0px;
      line-height:22px;
      font-weight:200 !important;
      font-family:sans-serif;">Actor, Comedian</p>

<!-- email -->
  <a
    id="email"
    contenteditable="true"
    class="email editor"
    style="font-size:14px;
      box-shadow:none;       
      border:0px;
      text-decoration:underline;
      color:#333;   
      font-family:Helvetica Neue, Helvetica, sans-serif;
      text-transformation:lowercase;"
    href="mailto:bill@decoded.com">bill@decoded.com</a>
    &emsp;
    <!-- phone -->
    <a
      id="worknum"
      contenteditable="true"
      class="worknum"
      href="tel:+442035830972"
      style="font-size:14px;
        box-shadow:none;       
        border:0px;
        text-decoration:underline;
        color:#333;
        font-family:Helvetica Neue, Helvetica, sans-serif;">+44 20 3583 0972</a></p>

  <!-- gif -->
  <a href="https://decoded.com">
    <img style="
      margin-left:0;
      margin-top:60px;
      margin-bottom:30px;
      padding:0;" src="https://assets.decoded.com/emails/footer.gif" alt="Decoded Logo">
  </a>

  <!-- locations -->
  <p
    style="font-size:14px;
      font-variant: small-caps;
      letter-spacing:1.2px;
      color:#bab8b0;">LONDON&nbsp;&#8226;&nbsp;AMSTERDAM&nbsp;&#8226; NEW&nbsp;YORK&nbsp;&#8226;&nbsp;SYDNEY</p>
</div>

<!-- Trigger to copy signature-->
<div>
  <button
    title="Copied!"
    id="copy"
    class="margin-top-XL margin-bottom-XXXL"
    style="
      font-size:0.89em;
      padding:15px;
      text-transform:uppercase;
      background-color:#fef800;
      border:none;
      font-weight:600;"
    data-clipboard-target="#wrapper">Copy to Clipboard</button>
</div>

## 2. Paste the signature into your email client
It is recommended to test with an email to yourself to double check the URL's are working/ no spelling mistakes.

### Google Inbox
1. Open the side menu by pressing the *Hamburger* (&#9776;) icon.
2. Scroll to the bottom and click *Settings.*
3. Click *Signature.*
4. Make sure *it is turned on.*
5. Paste the signature into the input field and save.

### Gmail
1. Click the *Cog* (&#9881;) icon towards the top right of the page.
2. Click *Settings.*
3. *Scroll down to Signature*.
4. Paste the signature into the input field and save changes.

### Mail for Mac
1. Click *Mail* > *Preferences* in the toolbar.
2. A preferences pop-up will appear &ndash; Go to the *Signatures* tab.
3. Choose your *@decoded.com email.*
4. Press *Add (+).*
5. Paste your signature into the box on the right.
6. Close the pop-up box, it doesn't need to be saved.

<!-- Call Jquery -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-alpha1/jquery.min.js"></script>

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>

<!-- Call Clipboard.js-->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/1.5.5/clipboard.min.js"></script>

<!-- Update tel: according to work number -->
<script type="text/javascript">
$( ".worknum" ).blur(function() {
  var tel = "tel:";
  var num =  $('#worknum').text();
  num = num.replace(" ", "");
  $('#worknum').attr("href", tel + num);
});
</script>

<!-- Update mailto: href according to email -->
<script type="text/javascript">
  $( ".email" ).blur(function() {
    var mail = "mailto:";
    var name =  $('#email').text();
    $('#email').attr("href", mail + name);
  });
</script>


<!-- Start clipboard tool -->
<script>
  var clipboard = new Clipboard('#copy');
  clipboard.on('success', function(e) {
      $('#copy').text('Copied!');
      window.setTimeout(function () {
          $('#copy').text('Copy to clipboard');
      }, 3000);
      console.log(e);
  });
  clipboard.on('error', function(e) {
      console.log(e);
  });
</script>
