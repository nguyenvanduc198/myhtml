$(document).ready(() => {
    $("#sidebar").fadeIn(1000);
    $(".main-page").fadeIn(1000);
});

const checkData = () => {};

const checkPhone = () => {
    const phoneInput = $("#phone").val();
    const regex = /^[0-9]*$/g;

    const isPhone = regex.test(phoneInput);

    if (!isPhone) {
        $("[id=phone-error]").html("This is not a phone number");
        $("[id=phone]").addClass("is-invalid");
        return;
    }
    $("[id=phone]").removeClass("is-invalid");
    $("[id=phone-error]").html("");
};

const checkEmail = () => {
    const emailInput = $("#email").val();
    const regex = /(^.+@.+\..+$)|(^$)/g;

    const isEmail = regex.test(emailInput);

    if (!isEmail) {
        $("[id=email-error]").html("This is not a email number");
        $("[id=email]").addClass("is-invalid");
        return;
    }
    $("[id=email]").removeClass("is-invalid");
    $("[id=email-error]").html("");
};

// Too similar ? we can refactor to more general version

const checkPhone2 = () =>
    check("#phone", /^[0-9]*$/g, "This is not a phone number");

const checkEmail2 = () =>
    check("#email", /(^.+@.+\..+$)|(^$)/g, "This is not an email");

const check = (selector, regex, errorMessage) => {
    const input = $(`${selector}`).val();

    const isCorrect = regex.test(input);

    if (!isCorrect) {
        $(`${selector}-error`).html(errorMessage);
        $(`${selector}`).addClass(`is-invalid`);
        return;
    }
    $(`${selector}`).removeClass(`is-invalid`);
    $(`${selector}-error`).html(``);
};
