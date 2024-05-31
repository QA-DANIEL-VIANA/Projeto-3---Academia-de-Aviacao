
$(document).ready(function () {
    // Aplicar máscara ao telefone
    $("#telefone").mask("(00) 00000-0000")
    $("#contact-form").validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: false
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: "Por favor, digite seu nome",
            email: {
                required: "Por favor, digite seu e-mail",
                email: "Por favor, digite um e-mail válido"
            },
            telefone: "Por favor, digite seu telefone",
            mensagem: "Por favor, digite sua mensagem"
        }
    });
});
