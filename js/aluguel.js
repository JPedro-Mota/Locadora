let currentPage = 1;
const totalPages = 3; 

const books = [
    { name: 'Livro 1', locatario: 'João Silva', data: '12/12/2024' },
    { name: 'Livro 2', locatario: 'Maria Analice', data: '01/01/2023'},
    { name: 'Livro 3', locatario: 'João Pedro ', data: '15/05/2022' },
    { name: 'Livro 4', locatario: 'Antonio Renan', data: '10/10/2021' },
    { name: 'Livro 5', locatario: 'Ryan Victor' ,data: '20/09/2020' },
    { name: 'Livro 6',  locatario: 'Iann Carlos', data: '30/08/2019' },
    { name: 'Livro 7', locatario: 'Ana Maria', data: '15/07/2018' },
    { name: 'Livro 8',  locatario: 'Thiago Victor', data: '25/06/2017' },
    { name: 'Livro 9', locatario: 'Vinicius Silva', data: '05/05/2016' },
    { name: 'Livro E', locatario: 'João Silva', data: '12/12/2024' },
    { name: 'Livro D', locatario: 'Douglas Silva', data: '12/12/2024' },
    { name: 'Livro J', locatario: 'Rogrigo Silva', data: '12/12/2024' },
];

function changePage(page) {
    if (page < 1 || page > totalPages) {
        return;
    }

    currentPage = page;

    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = ''; 

    const startIndex = (currentPage - 1) * 4; // Change 3 to 4 for accurate pagination
    const endIndex = startIndex + 4; // Display 4 books per page
    const currentBooks = books.slice(startIndex, endIndex);

    currentBooks.forEach(book => {
        const row = `<tr>
            <td>${book.name}</td>
            <td>${book.locatario}</td>
            <td>${book.data}</td>
            <td id="actions">
                <button class="actions-bt exibir">
                     <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -1000 960 960" width="24px" fill="#666666">
                        <path d="M480-326q72.5 0 123.25-50.75T654-500q0-72.5-50.75-123.25T480-674q-72.5 0-123.25 50.75T306-500q0 72.5 50.75 123.25T480-326Zm.29-89Q445-415 420-439.71q-25-24.7-25-60Q395-535 419.71-560q24.7-25 60-25Q515-585 540-560.29q25 24.7 25 60Q565-465 540.29-440q-24.7 25-60 25Zm-.22 238q-136.57 0-250.32-72.5T51-443q-8-13.5-11.25-28.01-3.25-14.52-3.25-29 0-14.49 3.25-28.99Q43-543.5 51-557q65-121 178.68-193.5Q343.35-823 479.93-823q136.57 0 250.32 72.5T909-557q8 13.5 11.25 28.01 3.25 14.52 3.25 29 0 14.49-3.25 28.99Q917-456.5 909-443q-65 121-178.68 193.5Q616.65-177 480.07-177ZM480-500Zm.09 217q110.41 0 202.66-59T824-500q-49-99-141.34-158-92.33-59-202.75-59-110.41 0-202.66 59T136-500q49 99 141.34 158 92.33 59 202.75 59Z"/>
                    </svg>
                </button>
                <button class="actions-bt editar">
                    <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -0.9 24 24" width="20px" fill="#399C44">
                        <path d="M0 0h24v24H0V0z" fill="none"/>
                        <path d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                    </svg>
                </button>
                <button class="actions-bt excluir">
                   <svg width="22" height="20" viewBox="0 1 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_224_135730)">
                            <path d="M14.7779 6.88326H12.5964C12.2597 5.39598 10.8196 4.32797 9.14821 4.32605H7.74079C6.06941 4.32797 4.6293 5.39598 4.29264 6.88326H2.11117C1.72252 6.88326 1.40747 7.16948 1.40747 7.52255C1.40747 7.87563 1.72252 8.16188 2.11117 8.16188H2.81486V16.4728C2.8172 18.2373 4.39114 19.6673 6.3334 19.6694H10.5556C12.4979 19.6673 14.0718 18.2373 14.0742 16.4728V8.16188H14.7779C15.1665 8.16188 15.4816 7.87566 15.4816 7.52258C15.4816 7.16951 15.1665 6.88326 14.7779 6.88326ZM7.74082 15.1942C7.74082 15.5473 7.42577 15.8335 7.03713 15.8335C6.64845 15.8335 6.3334 15.5473 6.3334 15.1942V11.3584C6.3334 11.0053 6.64845 10.7191 7.03709 10.7191C7.42574 10.7191 7.74079 11.0053 7.74079 11.3584V15.1942H7.74082ZM10.5556 15.1942C10.5556 15.5473 10.2406 15.8335 9.85194 15.8335C9.46329 15.8335 9.14824 15.5473 9.14824 15.1942V11.3584C9.14824 11.0053 9.46329 10.7191 9.85194 10.7191C10.2406 10.7191 10.5556 11.0053 10.5556 11.3584V15.1942ZM5.75004 6.88326C6.04935 6.11756 6.84643 5.60563 7.74082 5.60464H9.14824C10.0426 5.60563 10.8397 6.11756 11.139 6.88326H5.75004Z" fill="#912F13"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_224_135730">
                                <rect width="16.8889" height="15.3433" fill="white" transform="translate(0 4.32605)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </button>
            </td>
        </tr>`;
        tableBody.insertAdjacentHTML('beforeend', row);
    });

    const buttons = document.querySelectorAll('.paginacao-item');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    buttons.forEach(button => {
        if (parseInt(button.textContent.trim()) === page) {
            button.classList.add('active');
        }
    });

    reassignModalEventListeners();
}

document.querySelectorAll('.paginacao-item').forEach(button => {
    button.addEventListener('click', function() {
        const isLeftArrow = button.querySelector('.fa-chevron-left');
        const isRightArrow = button.querySelector('.fa-chevron-right');

        if (isLeftArrow) {
            changePage(currentPage - 1);
        } else if (isRightArrow) {
            changePage(currentPage + 1);
        } else {
            changePage(parseInt(button.textContent.trim()));
        }
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    changePage(currentPage);
});

function reassignModalEventListeners() {
    const openModalButtons = document.querySelectorAll(".exibir");
    const editButtons = document.querySelectorAll(".editar");
    const deleteButtons = document.querySelectorAll(".excluir");

    openModalButtons.forEach((el) => {
        el.addEventListener("click", toggleModalView);
    });
    editButtons.forEach((el) => {
        el.addEventListener("click", toggleModalEdit);
    });
    deleteButtons.forEach((el) => {
        el.addEventListener("click", toggleModalDelet);
    });
}

// Dummy modal toggle functions for demonstration purposes
function toggleModalView() {
    console.log('View button clicked');
}

function toggleModalEdit() {
    console.log('Edit button clicked');
}

function toggleModalDelet() {
    console.log('Delete button clicked');
}
