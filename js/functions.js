
const image_array = [
    'noppa1.png',
    'noppa2.png',
    'noppa3.png',
    'noppa4.png',
    'noppa5.png',
    'noppa6.png',
]

function get_random_image() {
    const random_index = Math.floor(Math.random() * image_array.length)
    const selected_image = image_array[random_index]

    document.getElementById('dice-image').src = `./img/${selected_image}`
}

document.getElementById("dice").addEventListener('click', () => {
    get_random_image()
})