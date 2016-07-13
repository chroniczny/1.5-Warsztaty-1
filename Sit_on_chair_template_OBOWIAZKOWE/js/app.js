
document.addEventListener("DOMContentLoaded", function() {

    var imgInArticle = document.querySelectorAll('#secWhiteArticle img');

    //znikanie opisu obrazka w sekcji 'secWhiteArticle' - to samo zrobionne opcjonalnie w CSS!!! jako hover...

    [...imgInArticle].forEach(function(el){ // dla każdego img'a
        var imgTitle = el.nextElementSibling; //następne rodzeństwo img'a
        el.addEventListener("mouseover", function(event) { // po najechaniu na img'a
            imgTitle.classList.add("invisible"); // rodzeństwo dostaje klasę niewidzialności
        })

        el.addEventListener("mouseout", function(event) {// po odjechaniu
            imgTitle.classList.remove("invisible"); // staje się widzialne
        })
    })

// gdy naciskam na agree-box w którym jest input:

    var checkAgreeBox = document.querySelector('#agreement div:first-child');

    var agreeInpt = document.querySelector('#agreement div:first-child input');


    checkAgreeBox.addEventListener("click", function(event) {
         if((this.classList = 'checkBoxBird') && (agreeInpt.checked)){ //jeśli obrazek jest widoczny i input zaznaczony
            this.classList.remove('checkBoxBird'); //usuń tło-obrazek
            agreeInpt.removeAttribute('checked'); //odznacz input
        } else {                                //w preciwnym razie:
            this.classList.add('checkBoxBird'); // pokaż obrazek tła boxa
            agreeInpt.setAttribute('checked', ""); // zaznacz input
        }

    })


});