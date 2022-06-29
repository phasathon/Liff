window.onload = function (e) {
    liff.init(function (data) {
        initializeApp(data);
    });
};

function initializeApp(data) {
    window.alert("line_user_id: " + data.context.userId);
    document.getElementById('line_user_id').value = data.context.userId;
}
