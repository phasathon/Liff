window.onload = function (e) {
    liff.init(function (data) {
        window.alert(JSON.stringify(data));
        initializeApp(data);
    });
};

function initializeApp(data) {
    document.getElementById('line_user_id').textContent = data.context.userId;
}
