var mode = 0;
function btn() {

    var item = document.getElementById("item").value;
    var qty = document.getElementById("qty").value;
    var rate = document.getElementById("rate").value;
    var discount = document.getElementById("dis").value;
    var netAmt = document.getElementById("netAmt").value;
    var netAmt = (qty * rate) - (qty * rate * discount / 100);
    document.getElementById("netAmt").innerHTML = "net Amt " + netAmt;
}
function update(index) {
    mode = index;
    var row = document.getElementsByClassName("mid-col")[0].rows[index];
    document.getElementById("bttn").innerHTML = "Update";

    var form = document.forms[0];
    var item = form.item;
    var qty = form.qty;
    var rate = form.rate;
    var discount = form.discount;

    var row = document.getElementsByClassName("mid-col")[0].rows[index];
    item.value = row.cells[1].innerHTML;
    qty.value = row.cells[2].innerHTML;
    rate.value = row.cells[3].innerHTML;
    discount.value = row.cells[4].innerHTML;


}

function btn1() {
    var tbl = document.getElementsByClassName("mid-col")[0];
    var r;
    var row;
    if (mode > 0) {
        row = tbl.rows[mode];
        r = mode;
        mode = 0;
        document.getElementById("bttn").innerHTML = "Add";

    }
    else {
        r = tbl.rows.length;
        row = tbl.insertRow(r);
    }

    var form = document.forms[0];
    var item = form.item.value;
    var qty = form.qty.value;
    var rate = form.rate.value;
    var discount = form.dis.value;
    var netAmount = (qty * rate) - (qty * rate * discount / 100);

    var data = "<td onclick='update(" + r + ")'>" + r + "</td>"
        + "<td onclick='update(" + r + ")'>" + item + "</td>"
        + "<td onclick='update(" + r + ")'>" + qty + "</td>"
        + "<td onclick='update(" + r + ")'>" + rate + "</td>"
        + "<td onclick='update(" + r + ")'>" + discount + "</td>"
        + "<td onclick='update(" + r + ")'>" + netAmount + "</td>"



    row.innerHTML = data;

    var amount = 0;
    var discount1 = 0;
    var netamount1 = 0;
    for (i = 1; i < tbl.rows.length; i++) {
        var amountP = tbl.rows[i].cells[2].innerHTML * tbl.rows[i].cells[3].innerHTML;
        var discountP = (amountP / 100) * tbl.rows[i].cells[4].innerHTML;

        var netAmtP = (amountP - discountP);
        amount += amountP;
        discount1 += discountP;
        netamount1 += netAmtP;
    }
    document.getElementById("amount").innerHTML = amount;
    document.getElementById("discount1").innerHTML = discount1;
    document.getElementById("netamount1").innerHTML = netamount1;

}