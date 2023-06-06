$.get('https://reqres.in/api/users/2', (data) => console.log(data));

$.post('https://reqres.in/api/users', {
 name: 'Nezza',
 job: 'Front end software developer'
}, (data) => console.log(data));
