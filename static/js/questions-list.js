document.addEventListener('DOMContentLoaded', function() {
  initializeQuestions();
  showTab(currentTab);
});

function initializeQuestions() {
  initializeRIASEC();
  initializeKecerdasan();
  initializeGayaBelajar();
}

// Initialize RIASEC questions
function initializeRIASEC() {
  var riasecQuestions = [
    { statement: "Saya suka memperbaiki alat-alat listrik" },
    { statement: "Saya mampu membuat gambar dengan skala" },
    { statement: "Saya mampu menggunakan peralatan mesin" },
    { statement: "Saya mampu melakukan perbaikan kecil pada alat listrik" },
    { statement: "Saya mampu melakukan perbaikan kecil pada pipa air,kran,dan lain-lain" },
    { statement: "Saya tertarik menjadi mekanik" },
    { statement: "Saya tertarik menjadi ahli mesin" },
    { statement: "Saya tertarik menjadi penanggung jawab kemanan" },
    { statement: "Saya tertarik menjadi operator alat - alat berat" },
    { statement: "Saya tertarik menjadi spesialis perikanan/margasatwa" },

    { statement: "Saya suka membaca buku / majalah ilmiah" }, 
    { statement: "Saya suka bekerja di laboratorium" },
    { statement: "Saya suka mengerjakan proyek ilmiah" },
    { statement: "Saya mampu melakukan percobaan atau penelitian ilmiah" },
    { statement: "Saya mampu mengerti mengapa satelit tidak jatuh ke bumi" },
    { statement: "Saya tertarik menjadi ahli biologi/hayati" },
    { statement: "Saya tertaik menjadi ahli astronomi/perbintangan" },
    { statement: "Saya tertarik menjadi ahli kimia" },
    { statement: "Saya tertarik menjadi ahli geologi" },
    { statement: "Saya tertarik menjadi pekerja riset ilmiah" },

    { statement: "Saya suka membuat sketsa, menggambar, atau melukis" },
    { statement: "Saya suka menjadi pemain dalam teater atau drama" },
    { statement: "Saya suka memainkan alat musik" },
    { statement: "Saya suka membaca atau menulis puisi" },
    { statement: "Saya suka menulis novel/cerita" },
    { statement: "Saya mampu memainkan alat musik" },
    { statement: "Saya mampu membuat sketsa orang sehingga dapat dikenali" },
    { statement: "Saya tertarik menjadi penulis" },
    { statement: "Saya tertarik menjadi pemain musik" },
    { statement: "Saya tertarik menjadi aktor" },

    { statement: "Saya suka bertemu dengan pengamat sosial/pendidikan" },
    { statement: "Saya suka bekerja sebagai relawan" },
    { statement: "Saya suka menjaga/mengurus anak-anak" },
    { statement: "Saya mudah berbicara dengan semua orang" },
    { statement: "Saya mampu memimpin diksusi kelompok" },
    { statement: "Saya mampu mengajari anak-anak dengan mudah" },
    { statement: "Saya mampu menghibur dan menemani orang yang lebih tua dari saya" },
    { statement: "Saya mampu berpartisipasi dalam pencarian dana/amal" },
    { statement: "Saya tertarik menjadi konselor masalah pribadi" },
    { statement: "Saya tertarik menjadi pekerja sosial" },

    { statement: "Saya suka memengaruhi orang lain" },
    { statement: "Saya suka menjual suatu produk" },
    { statement: "Saya suka mempelajari strategi untuk keberhasilan bisnis" },
    { statement: "Saya suka menjadi pemimpin kelompok" },
    { statement: "Saya mampu menjadi seorang pembicara yang baik" },
    { statement: "Saya mampu mengelola usaha kecil" },
    { statement: "Saya mampu membuat kelompok berjalan dengan baik" },
    { statement: "Saya mampu mengatur pekerjaan orang lain" },
    { statement: "Saya tertarik menjadi pembawa acara/MC" },
    { statement: "Saya tertarik menjadi eksekutif periklanan" },

    { statement: "Saya suka melakukan pekerjaan surat menyurat / perkantoran" },
    { statement: "Saya suka melakukan operasi matematika dalam bisnis" },
    { statement: "Saya suka menyusun sistem pengarsipan" },
    { statement: "Saya suka membuat daftar inventaris dari persediaan/produk" },
    { statement: "Saya mampu mengetik dengan cepat" },
    { statement: "Saya mampu melakukan pekerjaan administrasi kantor" },
    { statement: "Saya mampu mencatat dengan cermat pembayaran/penjualan" },
    { statement: "Saya tertarik menjadi ahli pembukuan" },
    { statement: "Saya tertarik menjadi manajer penjualan" },
    { statement: "Saya tertarik menjadi analis keuangan" }
];

  var riasecContainer = document.getElementById("riasec-container");

  riasecQuestions.forEach(function(question, index) {
    var questionDiv = document.createElement("div");
    questionDiv.classList.add("row", "question");
    questionDiv.innerHTML = `
      <label class="statement">${question.statement}</label>
      <div class="options">
          <ul class="likert">
          <li>
              <input type="radio" name="riasec${index}" value="1">
              <label>Sangat Tidak Setuju</label>
          </li>
          <li>
              <input type="radio" name="riasec${index}" value="2">
              <label>Tidak Setuju</label>
          </li>
          <li>
              <input type="radio" name="riasec${index}" value="3">
              <label>Agak Setuju</label>
          </li>
          <li>
              <input type="radio" name="riasec${index}" value="4">
              <label>Setuju</label>
          </li>
          <li>
              <input type="radio" name="riasec${index}" value="5">
              <label>Sangat Setuju</label>
          </li>
          </ul>
      </div>`;
    riasecContainer.appendChild(questionDiv);
  });
}

// Initialize Tipe Kecerdasan questions
function initializeKecerdasan() {
  var kecerdasanQuestions = [
    { statement: "Saya suka bercerita, termasuk cerita dongen dan cerita yang lucu" },
    { statement: "Saya memiliki ingatan yang baik untuk hal-hal yang sepele" },
    { statement: "Saya menyukai permainan kata-kata (seperti scrabble dan puzzle)" },
    { statement: "Saya membaca buku hanya sebagai hobi." },
    { statement: "Saya seorang pembicara yang baik (hampir setiap waktu)" },
    { statement: "Dalam berargumentasi saya cenderung menggunakan kata-kata sindiran" },
    { statement: "Saya senang membicarakan dan menulis ide-ide saya." },
    { statement: "Jika saya harus mengingat sesuatu saya menciptakan irama-irama atau kata-kata yang membantu saya untuk mengingatnya" },
    { statement: "Jika sesuatu rusak dan tidak berfungsi, saya akan membaca buku panduannya terlebih dahulu." },
    { statement: "Dalam kerja kelompok (untuk menyiapkan sebuah presentasi), saya lebih memilih untuk menulis dan melakukan riset pustaka" },

    { statement: "Saya sangat menikmati pelajaran matematika" },
    { statement: "Saya menyukai permainan yang menggunakan logika, seperti teka-teki angka." },
    { statement: "Dapat memecahkan soal-soal hitungan adalah hal yang menyenangkan bagi saya." },
    { statement: "Jika saya harus mengingat sesuatu, saya cenderung menempatkan setiap kejadian dalam urutan yang logis." },
    { statement: "Saya senang mencari tahu bagaimana cara kerja setiap benda." },
    { statement: "Saya menyukai komputer dan berbagai permainan angka-angka" },
    { statement: "Saya suka bermain catur, checkers, atau monopoli" },
    { statement: "Dalam berargumentasi, saya mencoba mencari solusi yang adil dan logis." },
    { statement: "Jika sesuatu rusak dan tidak berfungsi, saya melihat bagian-bagiannya dan mencari tahu bagaimana cara kerjanya." },
    { statement: "Dalam kerja kelompok, saya lebih memilih membuat diagram dan grafik." },

    { statement: "Saya lebih memilih peta daripada petunjuk tertulis dalam mencari sebuah alamat" },
    { statement: "Saya sering melamun" },
    { statement: "Saya menikmati hobi saya dalam bidang fotografi" },
    { statement: "Saya senang menggambar dan menciptakan sesuatu" },
    { statement: "Jika saya harus mengingat sesuatu, saya menggambar diagram untuk membantu saya mengingatnya." },
    { statement: "Saya senang membuat coretan-coretan di kertas kapanpun saya bisa." },
    { statement: "Ketika membaca majalah, saya lebih suka melihat gambar-gambarnya daripada membaca teksnya." },
    { statement: "Dalam berargumentasi, saya mencoba menjaga jarak, tetap berdiam diri, atau memvisualisasikan beberapa solusi." },
    { statement: "Jika sesuatu rusak dan tidak berfungsi, saya cenderung mempelajari diagram mengenai cara kerjanya." },
    { statement: "Dalam kerja kelompok, saya lebih memiih menggambar hal-hal yang penting." },

    { statement: "Sejak suka berolahraga, senam menjadi olahraga favorit saya" },
    { statement: "Saya menyukai kegiatan-kegiatan seperti pertukangan, menjahit dan membuat bentuk-bentuk" },
    { statement: "Ketika melihat benda-benda, saya senang menyentuhnya." },
    { statement: "Saya tidak dapat duduk diam dalam waktu yang lama." },
    { statement: "Saya menggunakan banyak gerakan tubuh ketika berbicara" },
    { statement: "Jika saya harus mengigat sesuatu, saya menuliskannya berkali-kali sampai saya memahaminya." },
    { statement: "Saya cenderung mengetuk-ngetuk jari saya atau memainkan pena/pensil selama jam pelajaran/" },
    { statement: "Dalam berargumentasi, saya cenderung menyerang atau menghindarinya" },
    { statement: "Jika sesuatu rusak dan tidak berfungsi, saya cenderung memisahkan setiap bagian lalu menggabungkannya kembali." },
    { statement: "Dalam kerja kelompok, saya lebih memilih memindahkan barang atau membuat suatu betuk." },

    { statement: "Saya senang mendengarkan musik dan radio" },
    { statement: "Saya cenderung bersenandung ketika sedang bekerja" },
    { statement: "Saya suka bernyanyi" },
    { statement: "Saya bisa memainkan salah satu alat musik dengan baik " },
    { statement: "Saya suka mendengarkan musik sambil belajar atau sambil membaca buku" },
    { statement: "Jika saya harus mengingat sesuatu, saya mencoba untuk membuat irama tentang hal tersebut" },
    { statement: "Dalam berargumentasi, saya cenderung berteriak atau memukul (meja/benda) atau bergerak dalam suatu irama" },
    { statement: "Saya bisa menghafal nada-nada dari banyak lagu" },
    { statement: "Jika sesuatu rusak dan tidak berfungsi, saya cenderung mengetuk-ngetuk jari saya membentuk suatu irama sambil mencari jalan keluar" },
    { statement: "Dalam kerja kelompok, saya lebih suka menggunakan kata-kata baru pada nada atau musik yang sudah dikenal." },

    { statement: "Saya mampu bergaul baik dengan orang lain" },
    { statement: "Saya senang berkumpul dan berorganisasi." },
    { statement: "Saya mempunyai beberapa teman dekat" },
    { statement: "Saya suka membantu mengajar murid-murid lain" },
    { statement: "Saya senang bekerja sama dalam kelompok." },
    { statement: "Teman-teman sering meminta saran dari saya karena saya terlihat sebagai pemimpin alamiah" },
    { statement: "Jika saya harus mengingat sesuatu, saya meminta seseorang untuk menguji saya apakah saya sudah memahaminya" },
    { statement: "Dalam berargumentasi, saya cenderung meminta bantuan teman atau pihak-pihak yang memiliki otoritas (ahli) dalam bidang tersebut" },
    { statement: "Jika sesuatu rusak dan tidak berfungsi, saya mencari seseorang yang dapat menolong saya." },
    { statement: "Dalam kerja kelompok, saya lebih memilih mengatur tugas dalam kelompok" },

    { statement: "Saya suka bekerja sendirian tanpa ada gangguan orang lain" },
    { statement: "Saya suka menulis buku harian" },
    { statement: "Saya menyukai diri saya (hampir setiap waktu)" },
    { statement: "Saya tidak suka keramaian" },
    { statement: "Saya tahu kelebihan dan kekurangan diri saya" },
    { statement: "Saya memiliki tekad yang kuat, mandiri, dan berpendirian kuat (tidak mudah ikut-ikutan orang lain)." },
    { statement: "Jika saya harus mengingat sesuatu, saya cenderung menutup mata saya dan mendalami (merasakan) situasu yang sedang terjadi" },
    { statement: "Dalam berargumentasi, saya biasanya menghindar (keluar ruangan) hingga saya dapat menenangkan diri." },
    { statement: "Jika sesuatu rusak dan tidak berfungsi, saya mempertimbangkan apakah benda tersebut layak untuk diperbaiki." },
    { statement: "Dalam kerja kelompok, saya senang mengkontribusikan sesuatu yang unik berdasarakan apa yang saya miliki dan rasakan." },

    { statement: "Saya sangat memperhatikan sekeliling dan apa yang sedang terjadi di sekitar saya" },
    { statement: "Saya senang berjalan-jalan di hutan (atau taman) dan melihat-lihat pohon serta bunga" },
    { statement: "Saya senang berkebun" },
    { statement: "Saya suka mengoleksi barang-barang seperti batu-batuan, kartu olahraga, perangko, dan sebagainya." },
    { statement: "Ketika dewasa, saya ingin pergi dari kota yang ramai ke tempat yang masih alamiah untuk menikmati alam." },
    { statement: "Jika saya harus mengingat sesuatu, saya cenderung mengkategorikannya dalam kelompok-kelompok" },
    { statement: "Saya senang mempelajari nama-nama makhluk hidup di lingkungan tempat saya berada, seperti bunga dan pohon" },
    { statement: "Dalam berargumentasi, saya cenderung membandingkan lawan saya dengan seseorang atau sesuatu yang pernah saya baca atau dengar lalu bereaksi." },
    { statement: "Jika sesuatu rusak dan tidak berfungsi, saya memperhatikan sekeliling saya untuk melihat apa yang bisa saya temukan untuk memperbaikinya." },
    { statement: "Dalam kerja kelompok, saya lebih memilih mengatur dan mengelompokkan informasi dalam kategori-kategori sehingga mudah dimengerti." },
];

  var kecerdasanContainer = document.getElementById("tipe-kecerdasan-container");

  kecerdasanQuestions.forEach(function(question, index) {
    var questionDiv = document.createElement("div");
    questionDiv.classList.add("row", "question");
    questionDiv.innerHTML = `
      <label class="statement">${question.statement}</label>
      <div class="options">
        <ul class="likert">
          <li>
            <input type="radio" name="tipe-kecerdasan${index}" value="1">
            <label>Sangat Tidak Setuju</label>
          </li>
          <li>
            <input type="radio" name="tipe-kecerdasan${index}" value="2">
            <label>Tidak Setuju</label>
          </li>
          <li>
            <input type="radio" name="tipe-kecerdasan${index}" value="3">
            <label>Agak Setuju</label>
          </li>
          <li>
            <input type="radio" name="tipe-kecerdasan${index}" value="4">
            <label>Setuju</label>
          </li>
          <li>
            <input type="radio" name="tipe-kecerdasan${index}" value="5">
            <label>Sangat Setuju</label>
          </li>
        </ul>
      </div>`;
    kecerdasanContainer.appendChild(questionDiv);
  });
}

// Initialize Gaya Belajar questions
function initializeGayaBelajar() {
  var gayaBelajarQuestions = [
    {
      statement: "Ketika merangkai suatu barang, kamu lebih suka:<br>\
                  1. Mengikuti ilustrasi cara merangkainya.<br>\
                  2. Mendengarkan orang membacakan instruksinya untukmu.<br>\
                  3. Langsung mengerjakannya tanpa mengikuti instruksi."
    },
  
    {
      statement: "Jika akan menghadapi ulangan, kamu mudah hafal jika:<br>\
                  1. Membolak-balik buku membaca materi ulangan.<br>\
                  2. Menghafal materi ulangan sambil mengucapkannya keras-keras.<br>\
                  3. Berjalan bolak-balik sambil menghafal."
    },
  
    {
      statement: "Saat membaca suatu buku, yang sering kamu lakukan adalah:<br>\
                  1. Membacanya dengan tenang, cepat dan tekun.<br>\
                  2. Membaca sambil menggerakkan bibir dan mengucapkannya.<br>\
                  3. Menelusuri tiap-tiap kata dengan jari telunjukmu."
    },
    
    {
      statement: "Saat berbicara, kamu:<br>\
                  1. Berbicara dengan cepat.<br>\
                  2. Berbicara dengan kecepatan sedang.<br>\
                  3. Berbicara dengan kecepatan lambat."
    },
  
    {
      statement: "Di waktu luang, kamu biasanya:<br>\
                  1. Menonton televisi, membaca, mengisi TTS.<br>\
                  2. Mendengarkan radio, mengobrol.<br>\
                  3. Berjalan-jalan, olahraga, hiking."
    },
  
    {
      statement: "Kalau kamu marah, biasanya paling terlihat dari:<br>\
                  1. Ekspresi wajah.<br>\
                  2. Intonasi suara.<br>\
                  3. Gerak Tubuh."
    },
  
    {
      statement: "Biasanya pada saat kamu tidak ada kegiatan:<br>\
                  1. Melamun, menatap ke angkasa.<br>\
                  2. Berbicara dengan diri sendiri.<br>\
                  3. Gelisah tak bisa duduk tenang."
    },
  
    {
      statement: "Pilih kegiatan yang kamu merasa nyaman melakukannya:<br>\
                  1. Menulis, Menggambar, Mendesain.<br>\
                  2. Berdebat, Bercerita, Bermain musik.<br>\
                  3. Menari, Berolahraga, Membuat kerajinan tangan."
    },
  
    {
      statement: "Kata-kata khas saat kamu berbicara:<br>\
                  1. \"Lihat baik-baik...\"<br>\
                  2. \"Dengarkan baik-baik...\"<br>\
                  3. \"Rasakan baik-baik...\"."
    },
  
    {
      statement: "Mana yang paling sering terjadi saat di sekolah:<br>\
                  1. Kamu memperhatikan wajah guru saat beliau berbicara/menerangkan.<br>\
                  2. Kamu mendengarkan saja waktu guru menerangkan.<br>\
                  3. Saat guru menerangkan, tangan kamu tidak bisa diam, memain-mainkan pulpen."
    },
  
  ];

  var gayaContainer = document.getElementById("gaya-belajar-container");

  gayaBelajarQuestions.forEach(function(question, index) {
    var questionDiv = document.createElement("div");
    questionDiv.classList.add("row", "question");
    questionDiv.innerHTML = `
      <p>
        <label class="statement">${question.statement}</label>
      </p>
      <div class="options">
          <ul class="no-bullet gaya-belajar-options text-center">
          <li>
              <input type="radio" name="gaya${index}" value="1">
              <label>1</label>
          </li>
          <li>
              <input type="radio" name="gaya${index}" value="2">
              <label>2</label>
          </li>
          <li>
              <input type="radio" name="gaya${index}" value="3">
              <label>3</label>
          </li>
          </ul>
      </div>`;
    gayaContainer.appendChild(questionDiv);
  });
}

// Function to submit RIASEC test
function submitRIASEC() {
  var responses = [];
  var radioInputs = document.querySelectorAll('#riasec-container input[type=radio]:checked');
  radioInputs.forEach(function(input) {
      responses.push({
          statement: input.parentNode.parentNode.previousSibling.textContent.trim(),
          value: input.value
      });
  });

  fetch('/submit-test', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ testName: 'riasec', responses: responses })
  })
  .then(response => response.json())
  .then(data => {
      console.log(data);
  })
  .catch(error => {
      console.error('Error:', error);
  });
}

// Function to submit Tipe Kecerdasan test
function submitKecerdasan() {
  var responses = [];
  var radioInputs = document.querySelectorAll('#tipe-kecerdasan-container input[type=radio]:checked');
  radioInputs.forEach(function(input) {
      responses.push({
          statement: input.parentNode.parentNode.previousSibling.textContent.trim(),
          value: input.value
      });
  });

  fetch('/submit-test', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ testName: 'kecerdasan', responses: responses })
  })
  .then(response => response.json())
  .then(data => {
      console.log(data);
  })
  .catch(error => {
      console.error('Error:', error);
  });
}

// Function to submit Gaya Belajar test
function submitGayaBelajar() {
  var responses = [];
  var radioInputs = document.querySelectorAll('#gaya-belajar-container input[type=radio]:checked');
  radioInputs.forEach(function(input) {
      responses.push({
          statement: input.parentNode.parentNode.firstChild.textContent.trim(),
          value: input.value
      });
  });

  fetch('/submit-test', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ testName: 'gaya-belajar', responses: responses })
  })
  .then(response => response.json())
  .then(data => {
      console.log(data);
  })
  .catch(error => {
      console.error('Error:', error);
  });
}
