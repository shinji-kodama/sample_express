let size = 12, color = 0

document.getElementById('test').addEventListener('click', () => {
    const el = document.querySelector('#txt')
    
    el.innerHTML = 'Hello! Express!!'
    size += 2
    color += 10
    el.style.fontSize = size + 'px'
    el.style.color = `hsl(${color}, 100%, 50%)`
})

document.getElementById('get').addEventListener('click', async () => {
    const name = document.getElementById('get_name').value
    const url ='http://localhost:3000/api/aaa567?name=' + name

    const data = await (await fetch(url)).json()

    document.getElementById('got').innerHTML = `${data.name}（id:${data.id}）というデータがAJAXで返ってきたよ！`
    console.log(data)
})