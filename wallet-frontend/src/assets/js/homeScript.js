/*
SECTIONS ELEMENTS
*/
var p = document.getElementById("prof")
var t = document.getElementById("trans")
var d = document.getElementById("dep")
var c = document.getElementById("crypto")
var s = document.getElementById("settings")
var a = document.getElementById("activity")
var changePassword = document.getElementById("passwordChange")
var editProfile = document.getElementById("editProfile")
var tranferConfirm = document.getElementById("transConfirm")
/*
NAVBAR ICONS
*/
var psvg = document.getElementById("svgProfile")
var tsvg = document.getElementById("svgTrans")
var rsvg = document.getElementById("svgReceive")
var csvg = document.getElementById("cryptoSvg")
var asvg = document.getElementById("activitySVG")
var ssvg = document.getElementById("settingsSvg")


                      /*------------NAVBAR SECTION ITEMS -----------------*/
/*
PROFILE ANIMATION
*/

function profile() {
  setTimeout(() => {
    p.style.display = "block";
  }, 25);
  setTimeout(() => {
    p.style.opacity = "100%";
    p.style.scale = "100%";
  }, 150);
  tranferConfirm.style.opacity = "0%";
  tranferConfirm.style.scale = "75%";
  editProfile.style.opacity = "0%";
  editProfile.style.scale = "75%";
  changePassword.style.opacity = "0%";
  changePassword.style.scale = "75%";
  a.style.opacity = "0%";
  a.style.scale = "75%";
  t.style.opacity = "0%";
  t.style.scale = "75%";
  d.style.opacity = "0%";
  d.style.scale = "75%";
  c.style.opacity = "0%";
  c.style.scale = "75%";
  s.style.opacity = "0%";
  s.style.scale = "75%";
  tsvg.style.color = "rgb(122, 122, 122)";
  asvg.style.color = "rgb(122, 122, 122)";
  rsvg.style.color = "rgb(122, 122, 122)";
  csvg.style.color = "rgb(122, 122, 122)";
  ssvg.style.color = "rgb(122, 122, 122)";
  setTimeout(() => {
    editProfile.style.display="none";
    changePassword.style.display="none";
    a.style.display = "none";
    t.style.display = "none";
    d.style.display = "none";
    c.style.display = "none";
    s.style.display = "none";
  }, 75);
}



/*
TRANSFER ANIMATION
*/
function transfer() {
  setTimeout(() => {
    t.style.display = "block";
  }, 25);
  setTimeout(() => {
    t.style.opacity = "100%";
    t.style.scale = "100%";
  }, 150);
  tranferConfirm.style.opacity = "0%";
  tranferConfirm.style.scale = "75%";
  editProfile.style.opacity = "0%";
  editProfile.style.scale = "75%";
  changePassword.style.opacity = "0%";
  changePassword.style.scale = "75%";
  a.style.opacity = "0%";
  a.style.scale = "75%";
  p.style.opacity = "0%";
  p.style.scale = "75%";
  c.style.opacity = "0%";
  c.style.scale = "75%";
  d.style.opacity = "0%";
  d.style.scale = "75%";
  s.style.opacity = "0%";
  s.style.scale = "75%";
  tsvg.style.color = "#05c068";
  asvg.style.color = "rgb(122, 122, 122)";
  rsvg.style.color = "rgb(122, 122, 122)";
  csvg.style.color = "rgb(122, 122, 122)";
  ssvg.style.color = "rgb(122, 122, 122)";
  setTimeout(() => {
    editProfile.style.display="none";
    a.style.display = "none";
    p.style.display = "none";
    d.style.display = "none";
    c.style.display = "none";
    s.style.display = "none";
    tranferConfirm.style.display = "none";
    changePassword.style.display="none";
  }, 75);
}
/*
DEPOSIT ANIMATION
*/
function deposit() {
  setTimeout(() => {
    d.style.display = "inherit";
  }, 100);
  setTimeout(() => {
    d.style.opacity = "100%";
    d.style.scale = "100%";
  }, 150);
  tranferConfirm.style.opacity = "0%";
  tranferConfirm.style.scale = "75%";
  editProfile.style.opacity = "0%";
  editProfile.style.scale = "75%";
  changePassword.style.opacity = "0%";
  changePassword.style.scale = "75%";
  a.style.opacity = "0%";
  a.style.scale = "75%";
  p.style.opacity = "0%";
  p.style.scale = "75%";
  t.style.opacity = "0%";
  t.style.scale = "75%";
  c.style.opacity = "0%";
  c.style.scale = "75%";
  s.style.opacity = "0%";
  s.style.scale = "75%";
  rsvg.style.color = "#05c068";
  asvg.style.color = "rgb(122, 122, 122)";
  tsvg.style.color = "rgb(122, 122, 122)";
  csvg.style.color = "rgb(122, 122, 122)";
  ssvg.style.color = "rgb(122, 122, 122)";
  setTimeout(() => {
    a.style.display = "none";
    p.style.display = "none";
    s.style.display = "none";
    c.style.display = "none";
    t.style.display = "none";
    tranferConfirm.style.display = "none";
    changePassword.style.display="none";
  }, 75);
  
}/*
ACTIVITY ANIMATION
*/
function activity() {
  setTimeout(() => {
    a.style.display = "block";
  }, 100);
  setTimeout(() => {
    a.style.opacity = "100%";
    a.style.scale = "100%";
  }, 200);
  tranferConfirm.style.opacity = "0%";
  tranferConfirm.style.scale = "75%";
  editProfile.style.opacity = "0%";
  editProfile.style.scale = "75%";
  changePassword.style.opacity = "0%";
  changePassword.style.scale = "75%";
  c.style.opacity = "0%";
  c.style.scale = "75%";
  d.style.opacity = "0%";
  d.style.scale = "75%";
  p.style.opacity = "0%";
  p.style.scale = "75%";
  t.style.opacity = "0%";
  t.style.scale = "75%";
  s.style.opacity = "0%";
  s.style.scale = "75%";
  asvg.style.color = "#05c068";
  csvg.style.color = "rgb(122, 122, 122)";
  tsvg.style.color = "rgb(122, 122, 122)";
  rsvg.style.color = "rgb(122, 122, 122)";
  ssvg.style.color = "rgb(122, 122, 122)";
  setTimeout(() => {
    editProfile.style.display="none";
    c.style.display = "none";
    p.style.display = "none";
    s.style.display = "none";
    d.style.display = "none";
    t.style.display = "none";
    tranferConfirm.style.display = "none";
    changePassword.style.display="none";
  }, 300);

}
/*
CRYPTO ANIMATION
*/
function crypto() {
  setTimeout(() => {
    c.style.display = "block";
  }, 100);
  setTimeout(() => {
    c.style.opacity = "100%";
    c.style.scale = "100%";
  }, 200);
  tranferConfirm.style.opacity = "0%";
  tranferConfirm.style.scale = "75%";
  editProfile.style.opacity = "0%";
  editProfile.style.scale = "75%";
  changePassword.style.opacity = "0%";
  changePassword.style.scale = "75%";
  a.style.opacity = "0%";
  a.style.scale = "75%";
  d.style.opacity = "0%";
  d.style.scale = "75%";
  p.style.opacity = "0%";
  p.style.scale = "75%";
  t.style.opacity = "0%";
  t.style.scale = "75%";
  s.style.opacity = "0%";
  s.style.scale = "75%";
  csvg.style.color = "#05c068";
  asvg.style.color = "rgb(122, 122, 122)";
  tsvg.style.color = "rgb(122, 122, 122)";
  rsvg.style.color = "rgb(122, 122, 122)";
  ssvg.style.color = "rgb(122, 122, 122)";
  setTimeout(() => {
    editProfile.style.display="none";
    a.style.display = "none";
    p.style.display = "none";
    s.style.display = "none";
    d.style.display = "none";
    t.style.display = "none";
    changePassword.style.display="none";
    tranferConfirm.style.display = "none";
  }, 300);

}
/*
SETTINGS ANIMATION
*/
function settings() {
  setTimeout(() => {
    s.style.display = "block";
  }, 100);
  setTimeout(() => {
    s.style.opacity = "100%";
    s.style.scale = "100%";
  }, 200);
  tranferConfirm.style.opacity = "0%";
  tranferConfirm.style.scale = "75%";
  editProfile.style.opacity = "0%";
  editProfile.style.scale = "75%";
  changePassword.style.opacity = "0%";
  changePassword.style.scale = "75%";
  a.style.opacity = "0%";
  a.style.scale = "75%";
  c.style.opacity = "0%";
  c.style.scale = "75%";
  d.style.opacity = "0%";
  d.style.scale = "75%";
  p.style.opacity = "0%";
  p.style.scale = "75%";
  t.style.opacity = "0%";
  t.style.scale = "75%";
  setTimeout(() => {
    editProfile.style.display="none";
    a.style.display = "none";
    p.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    t.style.display = "none";
    tranferConfirm.style.display = "none";
    changePassword.style.display="none";
  }, 300);
  ssvg.style.color = "#05c068";
  asvg.style.color = "rgb(122, 122, 122)";
  csvg.style.color = "rgb(122, 122, 122)";
  tsvg.style.color = "rgb(122, 122, 122)";
  rsvg.style.color = "rgb(122, 122, 122)";
}
          /*------------OUT_SIDE NAVBAR POP-UP ITEMS -----------------*/


/*
TRANSFER CONFIRM ANIMATION
*/

function transferSecondStage() {
  setTimeout(() => {
    tranferConfirm.style.display = "block";
  }, 25);
  setTimeout(() => {
    tranferConfirm.style.opacity = "100%";
    tranferConfirm.style.scale = "100%";
  }, 150);
  t.style.opacity = "0%";
  t.style.scale = "75%";
  setTimeout(() => {
    editProfile.style.display = "none";
    changePassword.style.display="none";
    p.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    t.style.display = "none";
    s.style.display = "none";
  }, 300);
}

/*
EDIT PROFILE ANIMATION
*/

function editProfileSection() {
  setTimeout(() => {
    editProfile.style.display="block";
  }, 50);
  setTimeout(() => {
    editProfile.style.opacity = "100%";
    editProfile.style.scale = "100%";
  }, 150);
  changePassword.style.opacity = "0%";
  changePassword.style.scale = "75%";
  a.style.opacity = "0%";
  a.style.scale = "75%";
  p.style.opacity = "0%";
  p.style.scale = "75%";
  t.style.opacity = "0%";
  t.style.scale = "75%";
  d.style.opacity = "0%";
  d.style.scale = "75%";
  c.style.opacity = "0%";
  c.style.scale = "75%";
  s.style.opacity = "0%";
  s.style.scale = "75%";
  setTimeout(() => {
    changePassword.style.display="none";
    a.style.display = "none";
    p.style.display = "none";
    t.style.display = "none";
    d.style.display = "none";
    c.style.display = "none";
    s.style.display = "none";
  }, 75);
}

  function changePasswordSection(){
    setTimeout(() => {
      changePassword.style.display="block";
    }, 50);
    setTimeout(() => {
      changePassword.style.opacity = "100%";
      changePassword.style.scale = "100%";
    }, 150);
    a.style.opacity = "0%";
    a.style.scale = "75%";
    p.style.opacity = "0%";
    p.style.scale = "75%";
    t.style.opacity = "0%";
    t.style.scale = "75%";
    d.style.opacity = "0%";
    d.style.scale = "75%";
    c.style.opacity = "0%";
    c.style.scale = "75%";
    s.style.opacity = "0%";
    s.style.scale = "75%";
    setTimeout(() => {
      a.style.display = "none";
      p.style.display = "none";
      t.style.display = "none";
      d.style.display = "none";
      c.style.display = "none";
      s.style.display = "none";
    }, 75);
  }
