function fetchData() {
    // Simulating fetching data from a server (replace this with actual API call)
    const data = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' }
    ];

    const dataContainer = document.getElementById('data-container');
    dataContainer.innerHTML = ''; // Clear previous data

    data.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.textContent = `ID: ${item.id}, Name: ${item.name}`;
        dataContainer.appendChild(itemElement);
    });
}
