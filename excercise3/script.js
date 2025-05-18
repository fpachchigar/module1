function changeColumn1() {
   document.getElementById('column1').style.backgroundColor = 'skyblue' ;
   let heading1 = document.getElementById("heading1");
   let input1Text = document.getElementById("input1").value;
heading1.innerText = input1Text;

}
function changeColumn2() {
    document.getElementById("column2").style.backgroundColor = "yellow";
    let heading2 = document.getElementById("heading2");
    let input2Text = document.getElementById("input2").value;
    heading2.innerText = input2Text;
}