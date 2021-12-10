function addCard ({firstName, email, avatar, lastName}) {
    let card = `
        <div class="col-3 m-2">
            <div class="box w-100 h-100 p-3 d-flex">
                <div class="rounded" style="width: 150px">
                    <img src="${avatar}" alt="" class="rounded">
                </div>
                <div class="d-flex flex-column pl-3 justify-content-center">
                    <div>${firstName}</div>
                    <div>${lastName}</div>
                    <div>${email}</div>
                </div>
            </div>
        </div>
    `;

    $('#card').append(card);
}