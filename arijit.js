const music = new Audio('audio/vande.mp3');

// create Array 
//All Array object change
const songs = [
    {
        id:'1',
        songName:` Naina Ashq na ho<br>
        <div class="subtitle">arijit singh</div>`,
        poster: "Img/arijit/1.jpg"
    },
    {
        id:'2',
        songName:` Khairiyat <br>
        <div class="subtitle">arijit singh</div>`,
        poster: "Img/arijit/2.jpg"
    },
    // all object type 
    {
        id:"3",
        songName: `Desh mere <br><div class="subtitle"> arijit singh</div>`,
        poster: "Img/arijit/3.jpg",
    },
    {
        id:"4",
        songName: `Dhoka <br><div class="subtitle">arijit singh</div>`,
        poster: "Img/arijit/4.jpg",
    },
    {
        id:"5",
        songName: `Tera Yaar Hoon main <br><div class="subtitle">arijit singhl</div>`,
        poster: "Img/arijit/5.jpg",
    },
    {
        id:"6",
        songName: `Chunar <br><div class="subtitle">arijit singh</div>`,
        poster: "Img/arijit/6.jpg",
    },
    {
        id:"7",
        songName: `Gati Se Mistake <br><div class="subtitle">arijit singh</div>`,
        poster: "img/arijit/7.jpg",
    },
    {
        id:"8",
        songName: `Humari Adhuri Kahani <br><div class="subtitle">arijit singh</div>`,
        poster: "Img/arijit/8.jpg",
    },
    {
        id:"9",
        songName: `Neki ki Raah <br><div class="subtitle">arijit singh</div>`,
        poster: "Img/arijit/9.jpg",
    },
    {
        id:"10",
        songName: `Humdard <br><div class="subtitle">arijit singh</div>`,
        poster: "Img/arijit/10.jpg",
    },
    {
        id:"11",
        songName: `Mere Yaraaa <br><div class="subtitle">arijit singh</div>`,
        poster: "Img/arijit/11.jpg",
    },
    {
        id:"12",
        songName: `Nashe si chad gayi <br><div class="subtitle">arijit singh</div>`,
        poster: "Img/arijit/12.jpg",
    },
    {
        id:"13",
        songName: `Ae watan <br><div class="subtitle">arijit singh</div>`,
        poster: "Img/arijit/13.jpg",
    },
    {
        id:"14",
        songName: `Agar tum saath ho <br><div class="subtitle">arijit singh</div>`,
        poster: "Img/arijit/14.jpg",
    },
    {
        id:"15",
        songName: `Pachtaoge <br><div class="subtitle">arijit singh</div>`,
        poster: "Img/arijit/15.jpg",
    },
      
]

Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});

//search data start
let search_result = document.getElementsByClassName('search_result')[0];

     songs.forEach(element =>{
        const { id, songName, poster } = element;
         let card = document.createElement('a');
         card.classList.add('card');
          card.href = '#' + id;
          card.innerHTML = `
           <img src= "${poster}" alt="">
              <div class="content">
                 ${songName}
                  </div>
`;
  
   search_result.appendChild(card);

});

let  input = document.getElementsByTagName('input')[0];
 input.addEventListener('keyup',() => {
  let input_value = input.value.toUpperCase();
   let items = search_result.getElementsByTagName('a');
   for(let i = 0; i< items.length; i++) {
        let as = items[i].getElementsByClassName('content')[0];
         let text_value = as.textContent || as.innerText;


      if(text_value.toUpperCase().indexOf(input_value) > -1){
            items[i].style.display = "flex";
                
         } else{
                items[i].style.display = "none";
       }

     if(input.value == 0) {
           search_result.style.display = "none";
       } else{
          search_result.style.display = "";
       } 
   }
});



//search data end

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }
} )


const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
            element.classList.add('bi-play-circle-fill');
            element.classList.remove('bi-pause-circle-fill');
    })
}
const makeAllBackgrounds = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
            element.style.background = "rgb(105, 105, 170, 0)";
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');

let download_music = document.getElementById('download_music');

let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src = `audio/arijit/${index}.mp3`;
        
        download_music.href = `audio/arijit/${index}.mp3`;       

        poster_master_play.src =`img/arijit/${index}.jpg`;
        music.play();
        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        })

        song_title.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
            download_music.setAttribute('download', songName);
        })
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        music.addEventListener('ended',()=>{
            masterPlay.classList.add('bi-play-fill');
            masterPlay.classList.remove('bi-pause-fill');
            wave.classList.remove('active2');
        })
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    })
})


 

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur/60);
    let sec = Math.floor(music_dur%60);
    if (sec<10) {
        sec = `0${sec}`;
    }
    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);
    if (sec1<10) {
        sec1 = `0${sec1}`;
    }
    currentStart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime/music.duration)*100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration/100;
})

const next_music = () =>{
//music.addEventListener('ended', ()=>{
    masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill');
    wave.classList.remove('active2');
       if(index == songs.length){
          index == 0;
}
     index ++;
     music.src = `audio/arijit/${index}.mp3`;
        download_music.href = `audio/arijit/${index}.mp3`;       
        poster_master_play.src =`img/arijit/${index}.jpg`;
        music.play();
        
        let song_title = songs.filter((ele) => ele.id == index);

         song_title.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
            download_music.setAttribute('download', songName);
        })
       makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
        document.getElementsByClassName('playListplay')[index-1].classList.remove('bi-play-circle-fill');
         document.getElementsByClassName('playListplay')[index-1].classList.add('bi-pause-circle-fill');
}

const repeat_music = () =>{
//music.addEventListener('ended', ()=>{
      if(index == songs.length){
      index=0;
   }
     index;
        music.src = `audio/arijit/${index}.mp3`;
        download_music.href = `audio/arijit/${index}.mp3`;       
        poster_master_play.src =`img/arijit/${index}.jpg`;
        music.play();
        
        let song_title = songs.filter((ele) => ele.id == index);

         song_title.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
            download_music.setAttribute('download', songName);
   })
    makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
     masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill');
    wave.classList.remove('active2');
     
}


const random_music = () =>{
//music.addEventListener('ended', ()=>{
    masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill');
    wave.classList.remove('active2');
       if(index == songs.length){
          index == 0;
}
      index = Math.floor((Math.random()* songs.length)+1);
      music.src = `audio/arijit/${index}.mp3`;
        download_music.href = `audio/arijit/${index}.mp3`;       
        poster_master_play.src =`img/arijit/${index}.jpg`;
        music.play();
        
        let song_title = songs.filter((ele) => ele.id == index);

         song_title.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
            download_music.setAttribute('download', songName);
   })
   makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
       
}


let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click', ()=>{

  let a = shuffle.innerHTML;
   
   switch(a){
       case "next":
              shuffle.classList.add('bi-arrow-repeat');
              shuffle.classList.remove('bi-music-note-beamed');
              shuffle.classList.remove('bi-shuffle');
               shuffle.innerHTML = "repeat";
       break;

        case "repeat":
              shuffle.classList.remove('bi-arrow-repeat');
              shuffle.classList.remove('bi-music-note-beamed');
              shuffle.classList.add('bi-shuffle');
               shuffle.innerHTML = "random";
       break;

         case "random":
              shuffle.classList.remove('bi-arrow-repeat');
              shuffle.classList.add('bi-music-note-beamed');
              shuffle.classList.remove('bi-shuffle');
               shuffle.innerHTML = "next";
       break;

  }
});


music.addEventListener('ended', ()=>{
  let b = shuffle.innerHTML;
   
  switch(b){
    case "repeat":
       repeat_music();
        break; 
      
        case "next":
         next_music();
        break; 
          
       case "random":
       random_music();
        break; 
 
}
})

music.addEventListener('ended', ()=>{
      //index ++;

     if(index == songs.length){
      index=1;
   }else{
      index++;
}
    music.src = `audio/arijit/${index}.mp3`;
        
        download_music.href = `audio/arijit/${index}.mp3`;       

        poster_master_play.src =`img/arijit/${index}.jpg`;
        music.play();
        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        })

        song_title.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
            download_music.setAttribute('download', songName);
        })
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        music.addEventListener('ended',()=>{
            masterPlay.classList.add('bi-play-fill');
            masterPlay.classList.remove('bi-pause-fill');
            wave.classList.remove('active2');
        })
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
         makeAllPlays();
        document.getElementsByClassName('playListplay')[index-1].classList.remove('bi-play-circle-fill');
        document.getElementsByClassName('playListplay')[index-1].classList.add('bi-pause-circle-fill');
         wave.classList.add('active1');
    })
   

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change', ()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
})



let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/arijit/${index}.mp3`;
    poster_master_play.src =`img/arijit/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})
next.addEventListener('click', ()=>{
    index -= 0;
    index += 1;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
        }
    music.src = `audio/arijit/${index}.mp3`;
    poster_master_play.src =`img/arijit/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})


let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');
let pop_song = document.getElementsByClassName('pop_song')[0];

left_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
})
right_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
})


let left_scrolls = document.getElementById('left_scrolls');
let right_scrolls = document.getElementById('right_scrolls');
let item = document.getElementsByClassName('item')[0];

left_scrolls.addEventListener('click', ()=>{
    item.scrollLeft -= 330;
})
right_scrolls.addEventListener('click', ()=>{
    item.scrollLeft += 330;
})