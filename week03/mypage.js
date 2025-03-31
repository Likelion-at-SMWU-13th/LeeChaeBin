alert("회원정보를 확인해주세요!")

document.querySelector("#insta").parentElement.onclick = function (click) {
    click.preventDefault(); 
    if (confirm("SNS로 이동하시겠습니까?")) {
        window.location.href = click.currentTarget.href;
    }
};

