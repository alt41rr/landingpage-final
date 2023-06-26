$(document).ready(function () {
    $("a").on("click", function (event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $("html, body").animate(
            {
                scrollTop: $(hash).offset().top,
            },
            800,
            function () {
            window.location.hash = hash;
            }
        );
        }
    });
});
function total() {
    var Tuna;
    var Cakalang;
    var sum;
    Tuna = parseInt(document.getElementById("qty1").value);
    Cakalang = parseInt(document.getElementById("qty2").value);
    sum = Tuna * 15.0 + Cakalang * 13.0;
    document.getElementById("total_cost").innerHTML = "Rp " + sum + ".000";
}
function submit() {
    alert("PESANAN ANDA AKAN SEGERA DI KIRIM, TERIMA KASIH!");
}