document.addEventListener("DOMContentLoaded", function () {

    var imgInArticle = document.querySelectorAll('#secWhiteArticle img');

    // ZAD. 2. WARSZTATY JS:
    // znikanie opisu obrazka w sekcji 'secWhiteArticle' - to samo zrobionne opcjonalnie w CSS!!! jako hover...

    imgInArticle.forEach(function (el) { // dla każdego img'a
        var imgTitle = el.nextElementSibling; //następne rodzeństwo img'a
        el.addEventListener("mouseover", function (event) { // po najechaniu na img'a
            imgTitle.classList.add("invisible"); // rodzeństwo dostaje klasę niewidzialności
        });

        el.addEventListener("mouseout", function (event) {// po odjechaniu
            imgTitle.classList.remove("invisible"); // staje się widzialne
        })
    });

// gdy naciskam na agree-box w którym jest input:

    var checkAgreeBox = document.querySelectorAll('.agreement div:first-child'); // mam dwa checkboxy tego typu na stronie
    // muszą działać uniwersalnie i niezależnie

    checkAgreeBox.forEach(function (el) {
        el.addEventListener("click", function (event) {
            var agreeInpt = el.querySelector('input');
            if ((agreeInpt.checked)) { //jeśli input zaznaczony
                this.classList.add('checkBoxBird'); //dodaj tło-obrazek

            } else {                                //w preciwnym razie:
                this.classList.remove('checkBoxBird'); // usuń obrazek
            }

        })
    });

// Zad. 1. MENU ...........
    var hiddenMenuUl = document.querySelector('#menu >ul');


    hiddenMenuUl.addEventListener('mouseout', function (event) {
        if (event.target !== event.currentTarget) {
            var ulKid = event.target.querySelector('ul');
            if (ulKid !== null) {
                ulKid.style.display = "none"; // po odjechaniu myską poza element eventowy, wyświetlane "podmenu" znika
            }
        }
        event.stopPropagation();
    });


    hiddenMenuUl.addEventListener('mouseover', function (event) {
        if (event.target !== event.currentTarget) {
            var ulKid = event.target.querySelector('ul'); // pod-menu
            if (ulKid !== null) { //sprawdzasz czy są (dzieci)
                ulKid.style.display = "block";
            }
        }
        event.stopPropagation();
    });

// Zad 3. SLIDER ................. "odbieranie niewidzialności"...

    var arrowPrev = document.querySelector('.arrow:first-child');
    var arrowNext = document.querySelector('.arrow:nth-child(4)');
    var imgSliding = document.querySelectorAll('.pictureCarousel img');

    var counter = 0;

    arrowNext.addEventListener('click', function (event) {
        console.log('pressedNext');
        imgSliding[counter].classList.add('invisible');
        if (counter === imgSliding.length - 1) {
            console.log('its LAST element');
            counter = 0;
        } else {
            counter++;
        }
        imgSliding[counter].classList.remove('invisible');
    });
    arrowPrev.addEventListener('click', function (event) {
        imgSliding[counter].classList.add('invisible');
        console.log('pressePREV');
        if (counter === 0) {
            counter = imgSliding.length - 1;
            console.log('its 0 element');
        } else {
            counter--;
        }
        imgSliding[counter].classList.remove('invisible');
    });
// Zad *[gwiazdka].
var arrow = document.querySelectorAll('.arrHolder');
//console.log(arrow);
//    arrow.forEach(function(el){

        //el.addEventListener('click', function(event){

            //el.nextElementSibling.click();
            //
        //})
    //})


// inputy
    var inptType = document.querySelector('.inputHolder select:nth-child(2)');
    var inptTypeOptions = inptType.querySelectorAll('option');
    var inptColor = document.querySelector('.inputHolder select:nth-child(4)');
    var inptColorOptions = inptColor.querySelectorAll('option');
    var inptMaterial = document.querySelector('.inputHolder select:nth-child(6)');
    var inptMaterialOptions = inptMaterial.querySelectorAll('option');
    var inptTransport = document.querySelector('.inputHolder .agreement input');
    //var inptTransportBird = document.querySelector('.inputHolder .agreement > div');

//outputy:
    var chosenType = document.querySelector('.summaryHolder thead tr td:first-child');
    var chosenTypePrice = document.querySelector('.summaryHolder thead tr td:nth-child(2)');

    var chosenColor = document.querySelector('.summaryHolder tbody tr:first-child td:first-child');
    var chosenColorPrice = document.querySelector('.summaryHolder tbody tr:first-child td:nth-child(2)');

    var chosenMaterial = document.querySelector('.summaryHolder tbody tr:nth-child(2) td:first-child');
    var chosenMaterialPrice = document.querySelector('.summaryHolder tbody tr:nth-child(2) td:nth-child(2)');

    var chosenTransport = document.querySelector('.summaryHolder tbody tr:nth-child(3) td:first-child');
    var chosenTransportPrice = document.querySelector('.summaryHolder tbody tr:nth-child(3) td:nth-child(2)');
    var summaryPrice = document.querySelector('.summaryHolder tfoot tr td:nth-child(2)');
// typ krzesła
    inptType.addEventListener('change', function(event){
        inptTypeOptions.forEach(function(el){
            if(el.selected) {
                var type = el.value;
                var price = el.dataset.price;
                chosenType.innerText = type;
                chosenTypePrice.innerText = price+" zł";
            }
        })
    });

// kolor krzesła
    inptColor.addEventListener('change', function(event){
        inptColorOptions.forEach(function(el){
            if(el.selected) {
                var type = el.value;
                var price = el.dataset.price;
                chosenColor.innerText = type;
                chosenColorPrice.innerText = price+" zł";
            }
        })
    });


// materiał krzesła
    inptMaterial.addEventListener('change', function(event){
        inptMaterialOptions.forEach(function(el){
            if(el.selected) {
                var type = el.value;
                var price = el.dataset.price;
                chosenMaterial.innerText = type;
                chosenMaterialPrice.innerText = price+" zł";
            }
        })
    });

// transport
    inptTransport.addEventListener('click', function(event){

            if(inptTransport.checked) {
                chosenTransport.innerText = "Transport";
                chosenTransportPrice.innerText = "200 zł";
            } else {
                chosenTransport.innerText = "";
                chosenTransportPrice.innerText = "";
            }
            });
// PODSUMUJ koszt dokonanych wyborów............
var inputs = document.querySelectorAll('.inputHolder input, .inputHolder select'); // wszsytkie inputy formularza
    inputs.forEach(function(el){ // dla których

        el.addEventListener('click', function(event){ // funkcję zliczania będzie wywoływał każdy klik na inputy/selecty
            var TypeCost = chosenTypePrice.innerText;
            var ColorCost = chosenColorPrice.innerText;
            var MaterCost = chosenMaterialPrice.innerText;
            var TranspCost =chosenTransportPrice.innerText;
var costArr = [];
            costArr.push(TypeCost); // wrzucam wartości outputów do tablicy
            costArr.push(ColorCost);
            costArr.push(MaterCost);
            costArr.push(TranspCost);
            var suma = 0;

            for (i=0; i<costArr.length; i++) { // dla każdego elem.
                if(costArr[i]===""){ // jeśli nie ma nic przypisuję 0
                    costArr[i]=0;
                } else {
                    costArr[i]=parseInt(costArr[i]); // zawartość zamieniam na liczbę
                }
                suma+=costArr[i]; // sumuję zawartosc tablicy
            }
            //console.log("tablica po "+costArr); // sprawdzam
            summaryPrice.innerText = suma+" zł"; // wrzucam wynik SUMA do outputa
        })
    })




});