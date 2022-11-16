
let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
};

var typed = new Typed(".typing-text", {
    strings : [ "frontend web developer", "web designer", "Freelancer" ],
    typeSpeed : 100,
    backSpeed : 100,
    loop : true
});

VanillaTilt.init(document.querySelectorAll('.tilt'),{
    max:25
});


(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('G-TDZ8J7NOxHZzPUP');
    })();

    window.onload = function() {
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();
            // generate a five digit number for the contact_number variable
            this.contact_number.value = Math.random() * 100000 | 0;
            // these IDs from the previous steps
            emailjs.sendForm('contact_service', 'contact_form', this)
                .then(function() {
                    console.log('SUCCESS!');
                }, function(error) {
                    console.log('FAILED...', error);
                });
        });
    }

