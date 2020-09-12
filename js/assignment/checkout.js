var array = JSON.parse(sessionStorage.getItem("cart"));
buildtable(array);

function buildtable(data) {
  var table = document.getElementById("checkout");
  var price = 0;
  for (var i = 0; i < data.length; i++) {
    table.innerHTML += `<tr>
        <td> ${data[i].title}</td>
        <td>${data[i].price}</td>
        <td>${data[i].price * data[i].amount}</td>
        <td>  ${data[i].amount}</td>
    </tr>`;
    price += data[i].price * data[i].amount;
  }
  table.innerHTML += `<tr>
        <td>SubTotal</td>
        <td></td>
        <td>${price}</td>
        <td></td>
    </tr>
    <tr>
        <td>Shipping</td>
         <td>0</td>
        <td>0</td>
        <td></td>
        
    </tr>
    <tr>
        <th>Total</th>
         <td></td>
        <th>${price}</th>
        <th></t>
        
    </tr>
    

    `;
}

$(document).ready(function () {
  $("body").on("click", "button", function () {
    var idFilm = $(this).data("id");

    $("#" + idFilm).show();
  });

  $("#getPDF").click(function () {
    $("#head").hide();
    $("#foot").hide();
    var HTML_Width = $("#content").width();
    var HTML_Height = $("#content").height();
    var top_left_margin = 15;
    var PDF_Width = HTML_Width + top_left_margin * 2;
    var PDF_Height = PDF_Width * 1.5 + top_left_margin * 2;
    var canvas_image_width = HTML_Width;
    var canvas_image_height = HTML_Height + 1500;

    var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;

    html2canvas($("#content")[0]).then(function (canvas) {
      var imgData = canvas.toDataURL("image/jpeg", 1.0);
      var pdf = new jsPDF("p", "pt", [PDF_Width, PDF_Height]);
      pdf.addImage(
        imgData,
        "JPG",
        top_left_margin,
        top_left_margin,
        canvas_image_width,
        canvas_image_height
      );
      for (var i = 1; i <= totalPDFPages; i++) {
        pdf.addPage(PDF_Width, PDF_Height);
        pdf.addImage(
          imgData,
          "JPG",
          top_left_margin,
          -(PDF_Height * i) + top_left_margin * 4,
          canvas_image_width,
          canvas_image_height
        );
      }
      $("#head").show();
      $("#foot").show();
      pdf.save("Order.pdf");
      sessionStorage.setItem("cart", "");
      location.reload();
    });
  });
});
