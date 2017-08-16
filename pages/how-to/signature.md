# Email Signature Generator [Use it!](#use-it)
Emails are our primary form of communication with clients. This tool will allow everyone to have a consistent email signature which looks beautiful in every email tool our clients may be using. It is inline with the new business class designs.

## Use it

#### 1. Replace the details below with your own, then hit &ldquo;copy to clipboard&rdquo;


<div class="col-md-12" id="wrapper">

  <!-- Border top in a table to be friendly for mail clients -->
  <table border="0" width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td style="
        background:none;
        border-bottom: 1px solid #F2F1EF;
        height:1px;
        width:100%;
        margin:0px 0px 0px 0px;">&nbsp;</td>
    </tr>
  </table>

  <!-- Your Name -->
  <h3
  class="editor"
  contenteditable="true"
  style="
    margin-top:60px;
    font-weight:600 !important;
    font-size:14px;
    color:#333;
    margin-bottom:0;
    font-family:Sans-Serif;">Bill Murray</h3>

  <!-- Your job role -->
  <p
    class="editor"
    contenteditable="true"
    style="font-size:14px;
      font-weight:200 !important;
      margin-top:5px;
      margin-bottom:30px;
      font-family:Helvetica Neue, Helvetica, sans-serif;">Actor, Comedian</p>

  <img style="margin-left:0; margin-bottom:50px; padding:0;" src="https://thimbleprojects.org/philsn/304496/footer.gif">

  <!-- Work phone number & Personal number-->
  <p style="margin:0 0 8px 0;">
    <a
      id="worknum"
      contenteditable="true"
      class="worknum"
      style="
        box-shadow:0 0 0 0 !important;
        font-size:14px;
        font-weight:200 !important;
        color:#333;
        font-family:Helvetica Neue, Helvetica, sans-serif;
        text-decoration:none;
        border-bottom:1px solid #BAB8B0;
        padding-bottom:1px;"
      href="tel:+442035830972">+44 20 3583 0972</a>

    <span style="color:#BAB8B0;" contenteditable="true">&nbsp;&nbsp;|&nbsp;&nbsp;</span>

    <a
      class="directnum"
      id="directnum"
      contenteditable="true"
      class="number"
      style="
        box-shadow:0 0 0 0 !important;
        font-size:14px;
        font-weight:200 !important;
        color:#333;
        font-family:Helvetica Neue, Helvetica, sans-serif;
        text-decoration:none;
        border-bottom:1px solid #BAB8B0;
        padding-bottom:1px;"
      href="tel:+441234567891">+44 YOUR NUMBER</a>
  </p>

<!-- Your work email and personal twitter -->
<p style="margin:0 0 8px 0;">

  <a
    id="email"
    contenteditable="true"
    class="email editor"
    style="
      box-shadow:0 0 0 0!important;
      font-size:14px;
      font-weight:200 !important;
      color:#333;
      font-family:Helvetica Neue, Helvetica, sans-serif;
      text-decoration:none;
      border-bottom:1px solid #BAB8B0;
      padding-bottom:1px;
      text-transformation:lowercase;"
    href="mailto:bill@decoded.com">bill@decoded.com</a>

  <span style="color:#BAB8B0;" contenteditable="true">&nbsp;&nbsp;|&nbsp;&nbsp;</span>

  <a
    id="twitter"
    contenteditable="true"
    class="twitter"
    style="
      box-shadow:0 0 0 0 !important;
      font-size:14px;
      font-weight:200 !important;
      color:#333;
      font-family:Helvetica Neue, Helvetica, sans-serif;
      text-decoration:none;
      text-transformation:lowercase;
      border-bottom:1px solid #BAB8B0;
      padding-bottom:1px;"
    href="https://twitter.com/decodedco">@billmurray</a>
</p>

<!-- Decoded website & Twitter-->
<p style="margin:0 0 8px 0;">

  <a
    class="website"
    id="website"
    style="
      box-shadow:0 0 0 0 !important;
      font-size:14px;
      font-weight:200 !important;
      color:#333;
      font-family:Helvetica Neue, Helvetica, sans-serif;
      text-decoration:none;
      border-bottom:1px solid #BAB8B0;
      padding-bottom:1px;
      text-transformation:lowercase;"
    href="http://www.decoded.com/">decoded.com</a>

  <span style="color:#BAB8B0;">&nbsp;&nbsp;|&nbsp;&nbsp;</span>

  <a
    href="https://www.twitter.com/decodedco"
    style="
      box-shadow:0 0 0 0 !important;
      font-size:14px;
      font-weight:200 !important;
      color:#333;
      font-family:Helvetica Neue, Helvetica, sans-serif;
      text-decoration:none;
      border-bottom:1px solid #BAB8B0;
      padding-bottom:1px;
      text-transformation:lowercase;">@decodedco</a>

  </p>
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

<!-- Update tel: according to personal number -->
<script type="text/javascript">
$( ".directnum" ).blur(function() {
  var tel1 = "tel:";
  var num1 =  $('#directnum').text();
  num1 = num1.replace(" ", "");
  $('#directnum').attr("href", tel1 + num1);
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

<!-- Update twitter url according to updated twitter handle -->
<script type="text/javascript">
  $( ".twitter" ).blur(function() {
    var twit = "http://twitter.com/";
    var hand =  $('#twitter').text();
    hand = hand.replace("@", "");
    $('#twitter').attr("href", twit + hand);
  });
</script>

<!-- Update website url according to updated website location -->
<script type="text/javascript">
  $( ".website" ).blur(function() {
    var htt = "https://www.";
    var web =  $('#website').text();
    $('#website').attr("href", htt + web);
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
