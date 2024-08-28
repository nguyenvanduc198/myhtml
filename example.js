const waiting2s = async (sec, callback) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Thank you for wait ${sec} second`);
            resolve();
        }, 2000);
    });
};

const run = async () => {
    await waiting2s(2);
    await waiting2s(2);
    setTimeout(() => {
        console.log(`Thank you for wait 4 second`);
    }, 2000);
};

$(document).ready(function () {
    // jQuery methods go here...
});

$("#button-search").click(() => {
    $(".search-box").slideDown(1000, () => {
        $(".menu").fadeOut();
    });
});
