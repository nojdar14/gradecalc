document.getElementById("btn").addEventListener("click", cbtn);

function cbtn() {
  //Input
  var client1 = Number(document.getElementById("CS").value);
  var StructrePro0 = Number(document.getElementById("SP").value);
  var StructrePro1 = Number(document.getElementById("SP2").value);
  var Client2 = Number(document.getElementById("CS2").value);
  var ProjectA = Number(document.getElementById("PA").value);
  //Process
  let FinalAnswer =
    (client1 + StructrePro0 + StructrePro1 + Client2 + ProjectA) / 5;
  //Output
  document.getElementById("Ans").innerHTML = FinalAnswer;
}
