// Variable pour stocker la somme totale des calories
    var totalKcal = 0;

function alimentation(l1, l2) {
    var index = l1.options.selectedIndex;
    if (l1.id == "select2") {
         if (index >= 0) {
        var valeur = l1.options[index].value;
        var text = l1.options[index].text;
        var option = new Option(text, valeur);
        l2.options[l2.options.length] = option;
        l1.options[index]= null;
        totalKcal=totalKcal- parseFloat(valeur);
        document.getElementById("kcal").innerHTML = "Quantité totale de calories: " + totalKcal + " kcal";
    }
    }else {
        var valeur = l1.options[index].value;
        var text = l1.options[index].text;
        var option = new Option(text, valeur);
        l2.options[l2.options.length] = option;
        totalKcal += parseFloat(valeur);
        document.getElementById("kcal").innerHTML = "Quantité totale de calories: " + totalKcal + " kcal";
    }
}
function resetForm() {
    const select1 = document.getElementById("select1");
    const select2 = document.getElementById("select2");

    const options = Array.from(select2.options);
    options.forEach((option) => {
        if (option.value) {
            select1.appendChild(option);
        }
    });

    totalKcal = 0;
    document.getElementById("kcal").innerHTML = "Quantité totale de calories: " + totalKcal + " kcal";

    select1.selectedIndex = 0;
    select2.selectedIndex = -1;
}
