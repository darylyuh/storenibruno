function calculation() {
  let itemPrice = 150;
  let itemQuantity = document.getElementById("ItemOneQuantity").value;
  let itemTotalPrice = itemPrice * itemQuantity;
  document.getElementById("itemOneTotal").innerHTML = itemTotalPrice;

  let itemTwoPrice = 95;
  let itemTwoQuantity = document.getElementById("ItemTwoQuantity").value;
  let itemTwoTotalPrice = itemTwoPrice * itemTwoQuantity;
  document.getElementById("itemTwoTotal").innerHTML = itemTwoTotalPrice;

  let itemThreePrice = 120;
  let itemThreeQuantity = document.getElementById("ItemThreeQuantity").value;
  let itemThreeTotalPrice = itemThreePrice * itemThreeQuantity;
  document.getElementById("itemThreeTotal").innerHTML = itemThreeTotalPrice;
  
  let totalAmount = itemTotalPrice + itemTwoTotalPrice + itemThreeTotalPrice;
  document.getElementById("amount").innerHTML = totalAmount;
  
  let totalDiscount = document.getElementById("discount").value;
  totalDiscount = totalDiscount / 100;
  
  let totalLess = totalAmount * totalDiscount;
  document.getElementById("less").innerHTML = totalLess;
  
  due = totalAmount - totalLess;
  document.getElementById("due").innerHTML = due;

  let totalCash = document.getElementById("cash").value;

  if (totalCash != 0){
    totalChange = totalCash - due;
    document.getElementById("change").innerHTML = totalChange;
  }
}