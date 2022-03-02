const API = ['https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem',]  
            //  'https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica', 
            //  'https://striveschool-api.herokuapp.com/api/deezer/search?q=behemoth']

let firstRow = document.querySelector('.eminem')
let Eminem = 'https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem'


let secondRow = document.querySelector('.metallica')
let Metallica = 'https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica'

let thirdRow = document.querySelector('.behemoth')
let Behemoth = 'https://striveschool-api.herokuapp.com/api/deezer/search?q=behemoth'


const show = (where, name)=> {

        fetch(name)
        .then(res => {
            return res.json()
        })
    
        .then(result => {
            for(let j=0; j<=result.data.length; j++) {



                console.log(result.data[j])
                let code = `
                <div class="col-2">
                    <div class="music-card">
                        <img src="${result.data[j].album.cover_medium}" alt="" srcset="">
                        <h4 class="music-title text-center">${result.data[j].album.title}</h4>
                        <button class="btn btn-success w-100">Listen</button>
                    </div>
                </div>
                `

            where.innerHTML += code
            }
        })
    
        .catch(err => {
            console.log(err)
        })
    }

const remove = (wheres) => {
    wheres.innerHTML = '';
}


document.querySelector('.btn-eminem').addEventListener('click', ()=> show(firstRow, Eminem))
document.querySelector('.btn-metallica').addEventListener('click', ()=> show(secondRow, Metallica))
document.querySelector('.btn-behemoth').addEventListener('click', ()=> show(thirdRow, Behemoth))


