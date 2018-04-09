$('#submit').on("click", function () {
    var type1 = $('#type1').val();
    var type2 = $('#type2').val();
    if (type1 === "" || type2 === "") {
        alert("ERROR: Please enter both fields");
    }
    else {
        calculateEntropy(type1, type2);
        calculateGini(type1, type2);

    }
});

//Calculate the entropy of a tree node
function calculateEntropy(t1, t2) {
    var entropy = 0;
    var type1 = parseFloat(t1);
    var type2 = parseFloat(t2);
    var total = type1 + type2;
    var p1 = type1/total;
    var p2 = type2/total;

    var log1 = Math.log(p1)/Math.log(2);
    var log2 = Math.log(p2)/Math.log(2);

    entropy = parseFloat(-1 * ((p1 * log1) + (p2 * log2))).toFixed(4);

    console.log("Entropy Details:");
    console.log({"Type1 ": type1,
        "Type2 ": type2,
        "Total": total,
        "log1 ": log1,
        "log2 ": log2,
        "entropy ": entropy});

    $('#entropyDiv').html("<br>Entropy Score: " + entropy);
}

//Calculate the purity of a tree node
function calculateGini(t1, t2) {
    var gini;
    var type1 = parseFloat(t1);
    var type2 = parseFloat(t2);
    var total = type1 + type2;
    var p1 = type1/total;
    var p2 = type2/total;

    gini = parseFloat(Math.pow(p1, 2) + Math.pow(p2, 2)).toFixed(4);

    console.log("Gini Details");
    console.log({"Type1 ": type1,
        "Type2 ": type2,
        "Total": total,
        "p1 ": p1,
        "p2 ": p2,
        "purity ": gini});

    $('#giniDiv').html("Gini Score: " + gini);

}