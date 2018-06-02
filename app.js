function identifyById() {
    console.log(document.getElementById('para1'));
}

function identifyByClass() {
    console.log(document.getElementsByClassName("class1"));
}

function byTag() {
    console.log(document.getElementsByTagName("p"));
}

function changeBackground(color) {
    document.getElementById('block1').style.background=color;
}

function increaseFont() {
    document.getElementById('block2').style.fontSize="xx-large";
}

function changeFontColor(color) {
    document.getElementById('block3').style.color=color;
}

function revertColor(color) {
    document.getElementById('block3').style.color=color;
}

function hide() {
    document.getElementById('block4').style.visibility="hidden";
}

function changeBackColor() {
    document.getElementsByClassName("box1")[0].style.background='green';
    document.getElementsByClassName("box1")[1].style.background='green';
    document.getElementsByClassName("box1")[2].style.background='green';
}
function changeBackColor(){
    document.getElementsByClassName("box2")[0].style.background='blue';
    document.getElementsByClassName("box2")[1].style.background='blue';
    document.getElementsByClassName("box2")[2].style.background='blue';
}

function numbersOnly(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
         if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;

         return true;
}

function addAdjacent() {
    document.getElementById('para2').innerHTML = "I got generated on the fly...";
}

function removePara() {
    var para=document.getElementById('para4');
   para.style.visibility="hidden";
}

function animatePara() {
    var ele=document.getElementById("box5");
    var pos=0;
    var id=setInterval(frame,5);
    function frame(){
        if(pos==350){
            clearInterval(id);
        }
        else{
            pos++;
            ele.style.right=pos + 'px';
            ele.style.left=pos + 'px';
        }
    }
}
function upper()
{
    var x=document.getElementById('inputBox1');
    x.value=x.value.toUpperCase();
}
function upper1()
{
    var x=document.getElementById('inputBox2');
    x.value=x.value.toUpperCase();
}
function camel()
{
    var x=document.getElementById('inputBox3');
    x.value=x.value.charAt(0).toUpperCase() + x.value.slice(1);
}
function func()
{
    var x=document.getElementById('get');
    x.style.background="green";
}
function myFunction() {
    var x = document.getElementById("browsers").selectedIndex;
    console.log(document.getElementsByTagName("option")[x].value);
}