const wrap = document.querySelector('.columns-wrap');

wrap.addEventListener('click', (e) => {
    const btn = e.target;
    if (!btn.matches('button')) 
        return;
    
    const column = btn.closest('.column');
    const list = column.querySelector('.list');
    const title = column
        .querySelector('h1')
        .textContent
        .toLowerCase();
    const showMoreBtn = column.querySelector('.show-more-btn');
    const hideBtn = column.querySelector('.hide-btn');

    let url = '';

    if (title === 'people') {
        url = 'https://swapi.dev/api/people/';
    } else if (title === 'planet' || title === 'planets') {
        url = 'https://swapi.dev/api/planets/';
    } else if (title === 'vehicles') {
        url = 'https://swapi.dev/api/vehicles/';
    }

    if (btn.classList.contains('show-more-btn') && btn.dataset.next) {
        url = btn.dataset.next;
    }

    fetch(url)
        .then(res => res.json())
        .then(result => {
            result
                .results
                .forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item.name;
                    list.appendChild(li);
                });

            if (result.next) {
                showMoreBtn.style.display = 'block';
                showMoreBtn.dataset.next = result.next;
            }
            if (!result.next) {
                showMoreBtn.style.display = 'none';
                showMoreBtn.dataset.next = '';

                hideBtn.style.display = 'block';
                hideBtn.addEventListener('click', () => {
                    list.style.display = 'none';
                    hideBtn.style.display = 'none';
                })
                showMoreBtn.addEventListener('click', () => {
                  list.style.display = 'block';
                })
            }
        })
        .catch(error => console.log('Error:', error));
});