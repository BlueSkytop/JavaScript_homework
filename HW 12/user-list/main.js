const foo = async () => {
    const  res = await fetch('http://jsonplaceholder.typicode.com/users/');
    const users = await  res.json();
    const wrapper = document.getElementById('wrap');

    for (const user of users) {
        const div = document.createElement('div');
        const button = document.createElement('button');
        div.innerText = `#${user.id} ${user.name}`;
        button.innerText = 'more';
        div.appendChild(button);
        wrapper.appendChild(div);

        button.onclick = () => {
            location.href = `../user-info/index.html?userId=${user.id}`;
        }
    }
}
void foo();