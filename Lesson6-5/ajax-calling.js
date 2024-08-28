const callAPI = () => {
    $.ajax({
        url: "https://dev.codestar.vn/",
        method: "GET", // GET or POST or PUT or DELETE
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        data: { a: "bc", d: "e,f" },
        success: data => {
            console.log(data);
        },
        error: (xhr, textStatus, errorThrown) => {
            console.log(textStatus);
        }
    });
};
