
    function myFunction() {
    //alert("Calculating");
    var birdsCost = document.getElementById("birds").value;
    console.log(birdsCost);
    console.log(typeof(birdsCost));
    var feedCost = document.getElementById("feed").value;
    console.log(feedCost);
    var sum = Number(birdsCost) + Number(feedCost);
    console.log(sum);

    document.getElementById("totalcost").innerText = sum;
    }

