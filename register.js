window.onload = function (e) {
    liff.init(function (data) {
        initializeApp(data);
    });
};

function initializeApp(data) {
    $('input[name="line_user_id"]').val(profile.userId);
}
