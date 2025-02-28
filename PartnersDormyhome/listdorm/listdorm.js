document.addEventListener('DOMContentLoaded', function () {
    const plusListButton = document.querySelector('.pluslist');
    const roomListContainer = document.getElementById('room-list-container');

    function displayRoomTypes() {
        let roomTypes = JSON.parse(localStorage.getItem('roomTypes')) || [];
        roomTypes.forEach(roomType => {
            addRoomTypeToDOM(roomType);
        });
    }

    function addRoomTypeToDOM(roomType) {
        const roomItemContainer = document.createElement('div');
        roomItemContainer.style.display = 'flex';
        roomItemContainer.style.alignItems = 'center';
        roomItemContainer.style.marginTop = '10px';

        const newRoomLink = document.createElement('a');
        newRoomLink.href = '../ex-list/ex-list.html';
        newRoomLink.style.textDecoration = 'none';

        const newRoomButton = document.createElement('button');
        newRoomButton.className = 'list-bnt';
        newRoomButton.innerHTML = `${roomType}<i class='bx bx-caret-right'></i>`;
        newRoomButton.style.marginRight = '10px';
        newRoomButton.style.width = '265px';

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="bx bx-trash"></i>';
        deleteButton.style.backgroundColor = '#ff4d4d';
        deleteButton.style.color = '#ffffff';
        deleteButton.style.borderRadius = '5px';
        deleteButton.style.border = 'none';
        deleteButton.style.fontSize = '20px';
        deleteButton.style.padding = '8px 20px';
        deleteButton.style.cursor = 'pointer';


        deleteButton.addEventListener('click', function (e) {
            e.preventDefault();
            deleteRoomType(roomType);
        });

        roomItemContainer.appendChild(newRoomLink);
        newRoomLink.appendChild(newRoomButton);
        roomItemContainer.appendChild(deleteButton);

        roomListContainer.appendChild(roomItemContainer);
    }

    function deleteRoomType(roomType) {
        let roomTypes = JSON.parse(localStorage.getItem('roomTypes')) || [];
        roomTypes = roomTypes.filter(type => type !== roomType);
        localStorage.setItem('roomTypes', JSON.stringify(roomTypes));

        roomListContainer.innerHTML = ''; 
        displayRoomTypes();
    }

    displayRoomTypes();

    plusListButton.addEventListener('click', function () {
        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.placeholder = 'กรอกประเภทห้องพักใหม่';
        inputField.style.marginRight = '10px';
        inputField.style.paddingLeft = '10px';

        const submitButton = document.createElement('button');
        submitButton.innerHTML = '<i class="bx bx-check"></i>ยืนยัน';
        submitButton.style.backgroundColor = '#20B2AA';
        submitButton.style.color = '#ffffff';
        submitButton.style.borderRadius = '5px';
        submitButton.style.padding = '8px 20px';
        submitButton.style.border = 'none';
        submitButton.style.fontSize = '18px';
        submitButton.style.cursor = 'pointer';

        const inputContainer = document.createElement('div');
        inputContainer.style.marginTop = '10px';
        inputContainer.appendChild(inputField);
        inputContainer.appendChild(submitButton);

        roomListContainer.appendChild(inputContainer);

        submitButton.addEventListener('click', function () {
            const newRoomType = inputField.value.trim();
            if (newRoomType) {
                let roomTypes = JSON.parse(localStorage.getItem('roomTypes')) || [];
                roomTypes.push(newRoomType);
                localStorage.setItem('roomTypes', JSON.stringify(roomTypes));

                addRoomTypeToDOM(newRoomType);

                roomListContainer.removeChild(inputContainer);
            } else {
                alert('กรุณากรอกประเภทห้องพัก');
            }
        });
    });
});