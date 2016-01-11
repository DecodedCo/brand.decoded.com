# Email Signature Generator [Use it!](#use-it)
Emails are our primary form of communication with clients. This tool will allow everyone to have a consistent email signature which looks beautiful in every email tool our clients may be using.

## Use it

#### 1. Replace the details below with your own, then hit &ldquo;copy to clipboard&rdquo;

<div class="col-md-12" id="wrapper">

  <!-- Border top in a table to be friendly for mail clients -->
  <table border="0" width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td style="background:none; border-bottom: 1px solid #F2F1EF; height:1px; width:100%; margin:0px 0px 0px 0px;">&nbsp;</td>
    </tr>
  </table>

  <!-- Your Name -->
  <h3 class="editor" contenteditable="true" style="margin-top:60px; font-weight:600 !important; font-size:18px; color:#333; margin-bottom:0; font-family:Georgia, Times, Times New Roman, serif;">Bill Murray</h3>

  <!-- You're job role -->
  <p class="editor" contenteditable="true" style="font-size:14px; font-weight:200 !important; margin-top:5px; margin-bottom:30px; font-family:Helvetica Neue, Helvetica, sans-serif;">Actor, Comedian</p>

  <!-- Phone Number -->
  <p style="margin:0 0 8px 0;">
    <a id="number" contenteditable="true" class="editor number" style="box-shadow:0 0 0 0 !important;  font-size:14px; font-weight:200 !important; color:#333;font-family:Helvetica Neue, Helvetica, sans-serif; text-decoration:none; border-bottom:1px solid #333; padding-bottom:1px;" href="tel:442035830972">+44 20 3583 0972 </a>
  </p>

  <!-- Your work email -->
  <p style="margin:0 0 8px 0;">
    <a id="email" contenteditable="true" class="email editor" style="box-shadow:0 0 0 0!important; font-size:14px; font-weight:200 !important; color:#333;font-family:Helvetica Neue, Helvetica, sans-serif; text-decoration:none; border-bottom:1px solid #333; padding-bottom:1px; text-transformation:lowercase;" href="mailto:info@decoded.com">info@decoded.com</a>
  </p>

  <!-- Twitter -->
  <p style="margin:0 0 8px 0;">
    <a id="twitter" contenteditable="true" class="editor twitter" style="box-shadow:0 0 0 0 !important; font-size:14px; font-weight:200 !important; color:#333; font-family:Helvetica Neue, Helvetica, sans-serif; text-decoration:none; text-transformation:lowercase; border-bottom:1px solid #333; padding-bottom:1px;" href="https://twitter.com/decodedco">@decodedco</a>
  </p>

 <!-- Decoded website -->
  <p style="margin:0 0 8px 0;">
    <a class="editor website" id="website" contenteditable="true" style="box-shadow:0 0 0 0 !important; font-size:14px; font-weight:200 !important; color:#333; font-family:Helvetica Neue, Helvetica, sans-serif; text-decoration:none; border-bottom:1px solid #333; padding-bottom:1px; text-transformation:lowercase;" href="http://www.decoded.com/en-gb">decoded.com/en-gb</a>
  </p>
</div>

<!-- Trigger -->
<div class="button col-md-12">
  <button style="position:absolute;" title="Copied!" class="Btn primary margin-top-XL margin-bottom-XXXL" data-clipboard-target="#wrapper">Copy to Clipboard</button>
</div>


<!-- Call Jquery -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-alpha1/jquery.min.js"></script>

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>

<!-- Call Clipboard.js-->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/1.5.5/clipboard.min.js"></script>

<!-- Update tel: according to number -->
<script type="text/javascript">
$( ".number" ).blur(function() {
  var tel = "tel:";
  var num =  $('#number').text();
  num = num.replace("+", "");
  num = num.replace(" ", "");
  $('#number').attr("href", tel + num);
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
  var clipboard = new Clipboard('.Btn');
  clipboard.on('success', function(e) {
      $('.Btn').text('Copied!');
      window.setTimeout(function () {
          $('.Btn').text('Copy to clipboard');

      }, 3000);
      console.log(e);
  });
  clipboard.on('error', function(e) {
      console.log(e);
  });
</script>

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

