//Membuat 3 data array lagu favorit (judul, penyanyi, likes, plays)
  var lagu = [
    ['Mangu', 'Fourtwnty', 5000, 8000, 'mangu.png'],
    ['Bunga hati', 'Salma Salsabil', 6200, 7500, 'salma.png'],
    ['Lesung Pipi', 'Raim LaOde', 2500, 3500, 'raim.png'],
    ['Gajah', 'Tulus', 3500, 6000, 'tulus.png'],
    ['Sorai', 'Nadin Amizah', 8500, 9000, 'nadin.png'],
    ['Supernatural', 'Ariana Grande', 8200, 11400, 'ariana.png'],
    ['Film Favorit', 'Sheila On 7', 3500, 8000, 'sheila.png'],
    ['Penyangkalan', 'For Revenge', 8000, 10000,'penyangkalan.png' ],
    ['Angin Kencang', 'Noh Salleh', 7600, 10400, 'salleh.png'],
    ['Jakarta Hari Ini', 'For Revenge, Stereo Wall', 12000, 15500, 'jkt.png'],
    ['Right Now', 'One Direction', 12400, 15600, 'one.png'],
    ['Cincin', 'Hindia', 3500, 8000, 'hindia.png'],
    ['Kidult', 'Seventeen', 82000, 100700,'seventeen.png' ],
    ['Senyumlah', 'Admesh Kamaleng', 6600, 14000, 'admesh.png'],
    ['Love Wins All', 'IU', 15800, 22500, 'iu.png'],
  ];

  var konten = document.getElementById('container');

  var html = '';
  for(let i = 0; i < lagu.length; i++) {
    const [judul, penyanyi, suka, putar, gambar] = lagu[i];
    html += `
      <div class="lagu">
        <img src="img/${gambar}" alt="Cover ${judul}" />
        <h2>${judul}</h2>
        <small>Oleh ${penyanyi}</small>
        <div class=bawah>
          <div class="suka">
          <i class="fa-solid fa-heart"></i><span>${suka}</span>
          </div>
          <div class="putar">
          <i class="fa-solid fa-circle-play"></i><span>${putar}</span>
          </div>
        </div>
      </div>
    `;
  }

  konten.innerHTML = html;