/* ════════════════════════════════════════
   script.js  –  Lacheee Website
   ════════════════════════════════════════ */

// ─────────────────────────────────────────────
// DATA ALAT LABORATORIUM KIMIA
// ─────────────────────────────────────────────
const ALAT = [

  // ══ ALAT GELAS ══
  {
    id: 1,
    nama: "Gelas Ukur",
    kat: "gelas",
    icon:"./foto/gelas-ukur.png",
    sketchfab: "https://sketchfab.com/models/9a824c1e1d5b4d789464bef36d26f3bc/embed",
    desc: "Tabung kaca berskala berbentuk silinder ramping yang digunakan untuk mengukur volume larutan. Tersedia berbagai ukuran mulai dari 10 mL hingga 2.000 mL. Meski tidak sepresisi labu ukur, gelas ukur adalah andalan laboratorium untuk pengukuran volume rutin yang cepat dan praktis.",
    fungsi: [
      "Mengukur volume cairan",
      "Menyiapkan larutan dalam jumlah tertentu"
    ]
  },
  {
    id: 2,
    nama: "Gelas Kimia (Beaker)",
    kat: "gelas",
    icon: "./foto/gelas-kimia.png",
    sketchfab: "https://sketchfab.com/models/c1560b532f1d4f9f808f4963d6c877c8/embed",
    desc: "Gelas silinder pendek berdinding tebal dengan bibir menuang (paruh) di bagian atas. Tersedia dari ukuran 50 mL hingga beberapa liter. Bentuknya yang lebar memudahkan pengadukan dan pemanasan, menjadikannya salah satu alat paling serbaguna di laboratorium kimia.",
    fungsi: [
      "Memanaskan larutan",
      "Mencampur bahan kimia",
      "Menampung cairan sementara"
    ]
  },
  {
    id: 3,
    nama: "Pipet",
    kat: "gelas",
    icon: "./foto/pipet.png",
    sketchfab: "https://sketchfab.com/models/b3b91e6c8316402a8db2f73164cfc6df/embed",
    desc: "Alat kaca berbentuk tabung tipis panjang yang dirancang khusus untuk memindahkan cairan dalam volume kecil dengan kendali penuh. Terdapat tiga jenisnya: pipet tetes (untuk meneteskan reagen), pipet volume (volume tepat satu titik), dan pipet ukur (berskala banyak untuk volume bervariasi).",
    fungsi: [
      "Memindahkan volume kecil larutan",
      "Titrasi (pipet volume)",
      "Meneteskan reagen (pipet tetes)"
    ]
  },
  {
    id: 4,
    nama: "Tabung Reaksi",
    kat: "gelas",
    icon: "./foto/tabung-reaksi.png",
    sketchfab: "https://sketchfab.com/models/5267ea89d50b4cb4a14b6520e639af1a/embed",
    desc: "Tabung kaca silinder kecil berujung membulat yang menjadi 'arena' percobaan kimia skala mini. Terbuat dari kaca borosilikat tahan panas sehingga aman dipanaskan langsung. Ukurannya yang kecil menghemat bahan kimia, dan bentuknya yang transparan memudahkan pengamatan perubahan warna, endapan, maupun gelembung gas.",
    fungsi: [
      "Melakukan reaksi kimia skala kecil",
      "Memanaskan bahan kimia dalam jumlah sedikit"
    ]
  },
  {
    id: 5,
    nama: "Labu Erlenmeyer",
    kat: "gelas",
    icon: "./foto/labu-erlenmeyer.png",
    sketchfab: "https://sketchfab.com/models/b38e5b30eeef43a99b17c724a5d5b12f/embed",
    desc: "Labu ikonik berbentuk kerucut terpancung dengan leher sempit, diciptakan oleh kimiawan Jerman Emil Erlenmeyer pada 1861. Bentuk dasarnya yang lebar menjaga stabilitas saat di meja, sementara leher sempitnya meminimalkan penguapan dan percikan saat diaduk. Pilihan utama untuk titrasi karena mudah digoyang tanpa tumpah.",
    fungsi: [
      "Titrasi",
      "Memanaskan larutan",
      "Menyimpan reagen sementara"
    ]
  },
  {
    id: 6,
    nama: "Kaca Arloji",
    kat: "gelas",
    icon: "./foto/kaca-arloji.png",
    youtube: "https://www.youtube.com/embed/a2Evz5NOMow?autoplay=1&mute=1&start=15&end=56",
    desc: "Kepingan kaca tipis cekung berbentuk bundar menyerupai kaca jam tangan, itulah asal usul namanya! Meski tampak sederhana, kaca arloji sangat multifungsi: bisa jadi alas timbang padatan di neraca, penutup gelas kimia saat memanaskan, hingga tempat penguapan larutan dalam jumlah kecil.",
    fungsi: [
      "Menimbang padatan di neraca",
      "Menutup gelas kimia saat memanaskan",
      "Tempat penguapan larutan encer"
    ]
  },
  {
    id: 7,
    nama: "Buret",
    kat: "gelas",
    icon: "./foto/buret.png",
    sketchfab: "https://sketchfab.com/models/af289afdde494d7d94a4b16cb0eae27b/embed",
    desc: "Tabung kaca berskala panjang (biasanya 50 mL) dengan keran presisi di ujung bawahnya. Buret adalah bintang utama dalam titrasi karena kerannya memungkinkan pengeluaran larutan titran setetes demi setetes dengan kontrol penuh, sehingga titik ekuivalen dapat ditentukan seakurat mungkin. Ketelitiannya bisa mencapai ±0,05 mL.",
    fungsi: [
      "Mengukur volume larutan titran secara akurat",
      "Titrasi asam-basa, redoks, dan kompleksometri"
    ]
  },
  {
    id: 8,
    nama: "Labu Ukur",
    kat: "gelas",
    icon: "./foto/labu-ukur.png",
    sketchfab: "https://sketchfab.com/models/e7349e27d83c4a01b9118ebfecf68b0c/embed",
    desc: "Labu beleher panjang dan ramping dengan satu tanda batas volume yang sangat tepat di bagian lehernya. Dibuat dari kaca borosilikat berkualitas tinggi dan dikalibrasi secara akurat di pabrik. Jika kamu perlu membuat larutan 0,1 M NaCl tepat 250 mL, inilah alat yang tidak bisa digantikan.",
    fungsi: [
      "Membuat larutan standar dengan volume tepat",
      "Pengenceran larutan pekat"
    ]
  },
  {
    id: 9,
    nama: "Corong Pisah",
    kat: "gelas",
    icon: "./foto/corong-pisah.png",
    youtube: "https://www.youtube.com/embed/r1MVwXL4bqg?autoplay=1&mute=1&start=12&end=147",
    desc: "Wadah kaca berbentuk buah pir dengan keran di bawahnya, dirancang untuk memisahkan dua cairan yang tidak saling bercampur (seperti air dan minyak). Teknik ini disebut ekstraksi cair-cair: setelah dikocok dan didiamkan, kedua fase terpisah, dan keran memungkinkan pemisahan yang bersih dan presisi.",
    fungsi: [
      "Ekstraksi pelarut (liquid-liquid)",
      "Memisahkan dua fase cairan yang tidak bercampur"
    ]
  },
  {
    id: 10,
    nama: "Batang Pengaduk",
    kat: "gelas",
    icon: "./foto/batang-pengaduk.png",
    youtube: "https://www.youtube.com/embed/-BAVF7Nvrmo?autoplay=1&mute=1&start=15&end=100",
    desc: "Batang kaca panjang berbentuk silinder ramping yang digunakan untuk mengaduk larutan atau campuran kimia secara manual. Terbuat dari kaca borosilikat yang tahan panas dan tidak reaktif terhadap sebagian besar bahan kimia. Ujungnya biasanya tumpul dan halus agar tidak merusak wadah kaca saat digunakan.",
    fungsi: [
      "Mengaduk larutan atau campuran kimia",
      "Membantu melarutkan padatan ke dalam pelarut",
      "Memindahkan cairan dengan cara menuang menggunakan bantuan batang"
    ]
  },
  {
    id: 11,
    nama: "Desikator",
    kat: "gelas",
    icon: "./foto/desikator.png",
    sketchfab: "https://sketchfab.com/models/817cd3321e6e436b842e7e152dfe689b/embed",
    desc: "Wadah kaca atau plastik tebal berbentuk silinder tertutup rapat yang di dalamnya terdapat bahan pengering (desikan) seperti silika gel atau kalsium klorida. Desikator menciptakan lingkungan bebas kelembapan di dalamnya, ideal untuk mendinginkan padatan panas setelah dari oven tanpa menyerap uap air dari udara.",
    fungsi: [
      "Mengeringkan dan mendinginkan bahan",
      "Menyimpan bahan sensitif kelembapan"
    ]
  },

  // ══ ALAT UKUR ══
  {
    id: 12,
    nama: "Neraca Analitik",
    kat: "ukur",
    icon: "./foto/neraca-analitik.png",
    youtube: "https://www.youtube.com/embed/ssBvgpDmRso?autoplay=1&mute=1&start=35&end=220",
    desc: "Timbangan presisi tinggi dalam lemari kaca pelindung yang mampu menimbang massa hingga empat angka desimal (0,0001 gram alias 0,1 miligram!). Lemari pelindungnya bukan sekadar aksesori, ia menghalangi angin mikro dan getaran yang bisa mengacaukan pembacaan. Neraca analitik adalah jantung dari pembuatan larutan standar.",
    fungsi: [
      "Menimbang bahan kimia dengan sangat akurat",
      "Membuat larutan standar"
    ]
  },
  {
    id: 13,
    nama: "Termometer",
    kat: "ukur",
    icon: "./foto/termometer.png",
    sketchfab: "https://sketchfab.com/models/ad8506a2c12144158e7ecb4eb037e376/embed",
    desc: "Alat pengukur suhu yang memanfaatkan pemuaian raksa atau alkohol dalam tabung kapiler untuk membaca temperatur. Di lab kimia, termometer hadir dalam rentang yang luas (dari −10 °C hingga 360 °C) dan kini banyak digantikan sensor digital yang lebih aman. Perubahan suhu sering menjadi tanda pertama reaksi kimia berlangsung.",
    fungsi: [
      "Mengukur suhu larutan dan campuran",
      "Memantau perubahan suhu selama reaksi"
    ]
  },
  {
    id: 14,
    nama: "pH Meter",
    kat: "ukur",
    icon: "./foto/pH-meter.png",
    sketchfab: "https://sketchfab.com/models/99d5d2372d4c45ce9a0b8604e4b8f38b/embed",
    desc: "Instrumen elektronik dengan elektroda gelas sensitif yang mendeteksi aktivitas ion H⁺ dalam larutan dan menampilkan nilai pH secara digital. Jauh lebih akurat dari kertas lakmus atau indikator warna, pH meter bisa membaca hingga dua angka desimal. Wajib dikalibrasi dengan larutan buffer standar sebelum digunakan.",
    fungsi: [
      "Mengukur pH larutan secara akurat",
      "Menentukan sifat asam atau basa suatu larutan"
    ]
  },
  {
    id: 15,
    nama: "Spektrofotometer",
    kat: "ukur",
    icon: "./foto/spektrofotometer.png",
    sketchfab: "https://sketchfab.com/models/4f280b451be843138255c3c9874f444d/embed",
    desc: "Instrumen analitik canggih yang memancarkan cahaya pada panjang gelombang tertentu ke dalam larutan, lalu mengukur seberapa banyak cahaya yang terserap. Berdasarkan Hukum Lambert-Beer, serapan berbanding lurus dengan konsentrasi, sehingga alat ini bisa menentukan konsentrasi larutan berwarna dengan sangat teliti tanpa reaksi kimia destruktif.",
    fungsi: [
      "Mengukur konsentrasi larutan berwarna",
      "Analisis kualitatif dan kuantitatif senyawa kimia"
    ]
  },
  {
    id: 16,
    nama: "Pipet Tetes",
    kat: "ukur",
    icon: "./foto/pipet-tetes.png",
    sketchfab: "https://sketchfab.com/models/48053cf00f5949458d211c3028a790e6/embed",
    desc: "Pipet mungil berujung karet yang menjadi sahabat setia di laboratorium untuk menangani cairan dalam jumlah sangat kecil (hitungannya per tetes)! Satu tetes setara dengan sekitar 0,05 mL. Meski tampak sederhana, pipet tetes sangat penting saat menambahkan indikator, reagen pengujian, atau menetralkan larutan setetes demi setetes.",
    fungsi: [
      "Memindahkan cairan tetes demi tetes",
      "Menambahkan reagen dalam jumlah sangat sedikit"
    ]
  },
  {
    id: 17,
    nama: "Pipet Volume",
    kat: "ukur",
    icon: "./foto/pipet-volume.png",
    youtube: "https://www.youtube.com/embed/Q_s-FH8BP_E?autoplay=1&mute=1&start=13&end=147",
    desc: "Pipet kaca berjentik dengan satu tanda batas kalibrasi (biasanya 5, 10, 25, atau 50 mL) yang menjamin pemindahan volume secara sangat tepat. Dikombinasikan dengan bulb (bola hisap) karet, pipet volume adalah alat wajib ketika kamu perlu mengambil volume larutan yang benar-benar presisi untuk titrasi atau pembuatan larutan standar.",
    fungsi: [
      "Memindahkan volume larutan yang akurat",
      "Persiapan larutan untuk titrasi"
    ]
  },
  {
    id: 18,
    nama: "Pipet Ukur",
    kat: "ukur",
    icon: "./foto/pipet-ukur.png",
    youtube: "https://www.youtube.com/embed/RSe6KZLpm6s?autoplay=1&mute=1&start=7&end=400",
    desc: "Pipet kaca berskala banyak yang menawarkan fleksibilitas lebih dibanding pipet volume (satu alat dapat mengukur berbagai volume sesuai kebutuhan). Skala graduasinya memungkinkan pengambilan volume berapa pun dalam rentangnya, misalnya 1,5 mL atau 7,3 mL, kemampuan yang tidak dimiliki pipet volume.",
    fungsi: [
      "Mengukur berbagai volume cairan",
      "Lebih fleksibel dibanding pipet volume"
    ]
  },

  // ══ ALAT PEMANAS ══
  {
    id: 19,
    nama: "Pembakar Bunsen",
    kat: "pemanas",
    icon: "./foto/bunsen.png",
    sketchfab: "https://sketchfab.com/models/45330536365b4471839fb45127fd0844/embed",
    desc: "Pembakar gas ikonik yang menghasilkan nyala api terbuka dan terkendali yang diciptakan oleh Robert Bunsen pada 1857 dan masih menjadi standar laboratorium hingga hari ini! Celah udara di bagian bawahnya bisa diatur untuk menghasilkan nyala biru (panas, ~1.500 °C) atau nyala kuning (lebih dingin, untuk sterilisasi).",
    fungsi: [
      "Memanaskan bahan kimia",
      "Sterilisasi alat menggunakan panas",
      "Pembakaran dan uji nyala"
    ]
  },
  {
    id: 20,
    nama: "Hotplate Stirrer",
    kat: "pemanas",
    icon: "./foto/hotplate-stirrer.png",
    youtube: "https://www.youtube.com/embed/T0WGYjCYNug?autoplay=1&mute=1&start=15&end=100",
    desc: "Alat modern yang menggabungkan dua fungsi dalam satu badan: pemanas elektrik bersuhu terkontrol dan pengaduk magnetik otomatis. Di dalamnya terdapat magnet berputar yang menggerakkan stir bar (batang magnet kecil) di dalam wadah. Hasil pemanasan dan pengadukan yang seragam menjadikannya pilihan utama untuk reaksi yang memerlukan suhu dan homogenitas stabil.",
    fungsi: [
      "Memanaskan larutan secara terkontrol",
      "Mengaduk larutan secara otomatis menggunakan magnet"
    ]
  },
  {
    id: 21,
    nama: "Mantel Pemanas",
    kat: "pemanas",
    icon: "./foto/mantel-pemanas.png",
    youtube: "https://www.youtube.com/embed/es_IuItipuM?autoplay=1&mute=1&start=30&end=105",
    desc: "Pemanas berbentuk mangkuk berlapis kawat nikrom yang mengitari labu dasar bulat secara merata dari segala sisi. Berbeda dengan nyala api terbuka Bunsen yang fokus di satu titik, mantel pemanas mendistribusikan panas secara seragam ke seluruh permukaan labu sehingga aman digunakan dengan pelarut mudah terbakar dan ideal untuk proses refluks maupun destilasi berjam-jam.",
    fungsi: [
      "Memanaskan labu dasar bulat secara merata",
      "Destilasi dan proses refluks"
    ]
  },

  // ══ ALAT PENUNJANG ══
  {
    id: 22,
    nama: "Penjepit Kayu",
    kat: "penunjang",
    icon: "./foto/penjepit-kayu.png",
    youtube: "https://www.youtube.com/embed/4BGQBdzU7pk?autoplay=1&mute=1&start=13&end=70",
    desc: "Penjepit sederhana namun krusial yang terbuat dari kayu (material yang tidak menghantarkan panas dengan baik), itulah kunci keunggulannya! Digunakan untuk memegang tabung reaksi yang sedang dipanaskan di atas nyala Bunsen tanpa membakar tangan. Ingat: selalu arahkan mulut tabung menjauhi diri dan orang lain saat memanaskan.",
    fungsi: [
      "Memegang tabung reaksi panas",
      "Mencegah luka bakar saat memanaskan"
    ]
  },
  {
    id: 23,
    nama: "Tang Krus",
    kat: "penunjang",
    icon: "./foto/tang-krus.png",
    youtube: "https://www.youtube.com/embed/LP009Kvl_cY?autoplay=1&mute=1&start=0&end=80",
    desc: "Tang logam berlengan panjang dengan rahang melengkung yang dirancang khusus untuk mencengkeram krus porselen atau cawan panas yang baru dikeluarkan dari tanur suhu tinggi (bisa lebih dari 1.000 °C!). Panjangnya melindungi tangan dari radiasi panas, sementara bentuk rahangnya mencegah krus tergelincir dan tumpah.",
    fungsi: [
      "Memegang krus atau cawan panas",
      "Memindahkan bahan dari tanur/oven"
    ]
  },
  {
    id: 24,
    nama: "Centrifuge",
    kat: "penunjang",
    icon: "./foto/centrifuge.png",
    sketchfab: "https://sketchfab.com/models/843d5b9c344c48ca8a44ba3d61d84979/embed",
    desc: "Alat pemusing bermotor yang berputar dengan kecepatan tinggi (hingga ribuan RPM) dan memanfaatkan gaya sentrifugal untuk memaksa partikel yang lebih berat bergerak ke bawah tabung lebih cepat dari yang mungkin terjadi secara gravitasi biasa. Dalam hitungan menit, endapan yang sulit terpisah bisa terkumpul rapi di dasar tabung.",
    fungsi: [
      "Memisahkan endapan dari larutan",
      "Memisahkan komponen berdasarkan perbedaan massa jenis"
    ]
  },
  {
    id: 25,
    nama: "Spatula",
    kat: "penunjang",
    icon: "./foto/spatula.png",
    youtube: "https://www.youtube.com/embed/hWYu5_ZdfcQ?autoplay=1&mute=1&start=15&end=55",
    desc: "Perkakas logam kecil pipih mirip sendok mini atau ujung pisau yang digunakan untuk mengambil, memindahkan, dan menimbang bahan padat. Ujungnya yang pipih memudahkan pengerokan bahan dari dalam botol sempit, sementara sisi lainnya sering berbentuk sendok kecil untuk mengambil jumlah lebih banyak. Terbuat dari stainless steel agar tidak bereaksi dengan bahan kimia.",
    fungsi: [
      "Mengambil padatan kimia dari wadah",
      "Memindahkan bahan ke neraca analitik"
    ]
  },
  {
    id: 26,
    nama: "Statif dan Klem",
    kat: "penunjang",
    icon: "./foto/statif-dan-klem.png",
    youtube: "https://www.youtube.com/embed/J0YOEXV3QYw?autoplay=1&mute=1&start=15&end=175",
    desc: "Duo penopang laboratorium yang tak terpisahkan: statif adalah tiang besi berat yang berdiri tegak di atas alas logam kokoh, sementara klem adalah penjepit yang menggigit batang statif dan bisa dikunci di posisi manapun. Bersama-sama, mereka menopang buret saat titrasi, menyangga labu destilasi, atau memegang kondenser di udara (menggantikan peran 'tangan ketiga' di lab).",
    fungsi: [
      "Menopang buret saat titrasi",
      "Menopang labu destilasi",
      "Menyangga berbagai alat selama percobaan berlangsung"
    ]
  },
  {
    id: 27,
    nama: "Rak Tabung Reaksi",
    kat: "penunjang",
    icon: "./foto/rak-tabung-reaksi.png",
    sketchfab: "https://sketchfab.com/models/ea40676ae43340a58b4f1cd44d5a1360/embed",
    desc: "Rangka kayu atau plastik berlubang-lubang yang menjadi 'parkiran' resmi tabung reaksi di laboratorium. Fungsinya simpel namun vital: menjaga tabung berdiri tegak agar isinya tidak tumpah, memudahkan identifikasi sampel yang berbaris rapi, dan memberi ruang tabung mendingin setelah dipanaskan tanpa risiko menggelinding dan pecah.",
    fungsi: [
      "Menyimpan tabung reaksi dengan aman",
      "Mendinginkan tabung setelah dipanaskan"
    ]
  },

  // ══ KESELAMATAN ══
  {
    id: 28,
    nama: "Simbol Keselamatan",
    kat: "keselamatan",
    icon: "./foto/simbol-keselamatan.png",
    desc: "Piktogram (label bergambar) berwarna merah-putih pada kemasan bahan kimia yang merupakan bagian dari sistem GHS (Globally Harmonized System) atau standar internasional untuk komunikasi bahaya. Setiap simbol mewakili jenis bahaya spesifik; mengenalinya bukan sekadar pengetahuan akademis, tapi bisa menyelamatkan nyawa di laboratorium.",
    fungsi: [
      "Memberi peringatan bahaya bahan kimia",
      "Panduan penanganan dan penyimpanan bahan berbahaya"
    ]
  },
  {
    id: 29,
    nama: "Jas Laboratorium",
    kat: "keselamatan",
    icon: "./foto/jas-laboratorium.png",
    sketchfab: "https://sketchfab.com/models/b91528de867e4acd8de5d9b20f7a429d/embed",
    desc: "Pakaian pelindung ikonik berwarna putih dengan lengan panjang yang menjadi 'seragam wajib' di laboratorium kimia. Dibuat dari bahan katun atau poliester yang mampu menahan percikan bahan kimia dan memberikan waktu reaksi untuk menghapus kontaminan sebelum merusak kulit. Warna putihnya juga memudahkan deteksi noda atau percikan bahan berbahaya.",
    fungsi: [
      "Melindungi pakaian dan kulit dari percikan bahan kimia",
      "Mencegah kontaminasi silang bahan kimia"
    ]
  },
  {
    id: 30,
    nama: "Kacamata Lab",
    kat: "keselamatan",
    icon: "./foto/kacamata.png",
    sketchfab: "https://sketchfab.com/models/ab88027edcd44b5b97048ec6acc1f45c/embed",
    desc: "Kacamata pelindung dari plastik keras (polisulfon atau polikarbonat) yang menutupi mata dan area sekitarnya secara menyeluruh. Berbeda dari kacamata biasa, kacamata lab dirancang agar percikan bahan kimia tidak bisa masuk dari sisi mana pun. Ingat: kerusakan mata akibat bahan kimia bisa permanen, satu detik percikan bisa mengubah segalanya.",
    fungsi: [
      "Melindungi mata dari percikan cairan kimia",
      "Wajib dipakai selama praktikum berlangsung"
    ]
  },
  {
    id: 31,
    nama: "Sarung Tangan",
    kat: "keselamatan",
    icon: "./foto/sarung-tangan.png",
    sketchfab: "https://sketchfab.com/models/4a469b88762440618d4e5b4b78f1953c/embed",
    desc: "Pelindung tangan dari lateks, nitril, atau neoprene yang membentuk penghalang antara kulit dan bahan kimia berbahaya. Nitril lebih direkomendasikan karena tahan terhadap lebih banyak jenis bahan kimia dan cocok bagi pengguna yang alergi lateks. Perlu diingat: tidak ada sarung tangan yang 100% tahan semua bahan kimia. Selalu cek kompatibilitas sebelum digunakan.",
    fungsi: [
      "Melindungi tangan dari bahan korosif dan berbahaya",
      "Mencegah kontaminasi bahan kimia ke kulit"
    ]
  },
  {
    id: 32,
    nama: "Mortar dan Alu",
    kat: "penunjang",
    icon: "./foto/mortar-dan-alu.png",
    sketchfab: "https://sketchfab.com/models/ea8a394d509340d6b3a4d67fa8236f17/embed",
    desc: "Pasangan klasik yang telah digunakan manusia sejak ribuan tahun lalu. Mortar adalah mangkuk tebal dari porselen, batu, atau baja, sementara alu adalah batang penumbuknya. Di laboratorium kimia modern, keduanya digunakan untuk menggerus padatan menjadi serbuk halus agar lebih mudah larut, bereaksi, atau dianalisis. Semakin halus partikelnya, semakin luas permukaannya, dan semakin cepat reaksi berlangsung.",
    fungsi: [
      "Menghaluskan dan menggerus padatan kimia",
      "Mencampur bahan padat hingga homogen",
      "Memperkecil ukuran partikel bahan kimia"
    ]
  },
  {
    id: 33,
    nama: "Kawat Kasa",
    kat: "penunjang",
    icon: "./foto/kawat-kasa.png",
    sketchfab: "https://sketchfab.com/models/ca61928ef3284c82b93c065f930e4183/embed",
    desc: "Lempengan anyaman kawat baja berdiameter kecil yang sering dilapis asbes atau keramik di bagian tengahnya. Diletakkan di atas kaki tiga (tripod), kawat kasa berfungsi sebagai landasan yang mendistribusikan panas nyala Bunsen secara merata ke dasar gelas kimia atau beaker (mencegah pemanasan tidak merata yang bisa memecahkan alat gelas).",
    fungsi: [
      "Menopang gelas kimia atau labu saat dipanaskan",
      "Mendistribusikan panas secara merata ke dasar alat gelas",
      "Digunakan bersama kaki tiga dan pembakar Bunsen"
    ]
  },
];

// ─────────────────────────────────────────────
// URL PERMAINAN EDUCANDY
// ─────────────────────────────────────────────
// Link 1: noughts & crosses, crosswords, match-up, memory, multiple choice
// Link 2: word search, spell it, anagrams
const GAME_URLS = {
  paket1: "https://www.educandy.com/site/resource_embedded.php?activity-code=14ac46",
  paket2: "https://www.educandy.com/site/resource_embedded.php?activity-code=1435e8"
};

const GAME_LABELS = {
  paket1: "🎮 Paket 1 – Noughts & Crosses · Crosswords · Match Up · Memory · Multiple Choice",
  paket2: "🕹️ Paket 2 – Word Search · Spell It · Anagrams"
};

// ─────────────────────────────────────────────
// HELPER: LABEL KATEGORI
// ─────────────────────────────────────────────
function catLabel(kat) {
  const map = {
    gelas:       "🧪 Alat Gelas",
    ukur:        "📏 Alat Ukur",
    pemanas:     "🔥 Alat Pemanas",
    penunjang:   "🗜️ Alat Penunjang",
    keselamatan: "🛡️ Keselamatan"
  };
  return map[kat] || kat;
}

// ─────────────────────────────────────────────
// RENDER KARTU ALAT
// ─────────────────────────────────────────────
function renderGrid(filter) {
  const grid = document.getElementById("alatGrid");
  const data = filter === "semua" ? ALAT : ALAT.filter(a => a.kat === filter);

  grid.innerHTML = data.map(a => `
    <div class="alat-card" onclick="openModal(${a.id})">
      <div class="alat-icon">
        <img src="${a.icon}" alt="${a.nama}" class="alat-icon-img">
      </div>
      <div class="alat-name">${a.nama}</div>
      <div class="alat-cat">${catLabel(a.kat)}</div>
    </div>
  `).join("");
}

// ─────────────────────────────────────────────
// FILTER KATEGORI
// ─────────────────────────────────────────────
function filterAlat(kat, btn) {
  document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  renderGrid(kat);
}

// ─────────────────────────────────────────────
// DATA SIMBOL KESELAMATAN GHS
// ─────────────────────────────────────────────
const SIMBOL_GHS = [
  {
    kode: "GHS01",
    nama: "Mudah Meledak",
    warna: "#ff6b35",
    img: "./foto/mudah-meledak.png",
    contoh: "Dinamit, aseton peroksida",
    desc: "Bahan yang dapat meledak secara spontan akibat reaksi kimia yang menghasilkan gas dan panas dalam jumlah besar secara sangat cepat.",
    bahaya: ["Ledakan dapat menyebabkan cedera serius atau kematian", "Gelombang tekanan merusak area sekitar", "Pecahan material berbahaya terlempar jauh"],
    penanganan: ["Jauhkan dari sumber panas, api, dan gesekan", "Simpan di tempat berventilasi baik dan sejuk", "Hindari benturan fisik pada wadah", "Gunakan jumlah seminimal mungkin"],
    apd: ["Perisai wajah (face shield)", "Sarung tangan tebal", "Jaket pelindung ledakan", "Sepatu safety"]
  },
  {
    kode: "GHS02",
    nama: "Mudah Terbakar",
    warna: "#ff4500",
    img: "./foto/mudah-terbakar.png",
    contoh: "Etanol, hidrogen, bensin",
    desc: "Bahan yang mudah terbakar pada suhu ruang atau suhu rendah, termasuk cairan, gas, dan padatan yang dapat terbakar dengan cepat.",
    bahaya: ["Dapat menyebabkan kebakaran besar", "Uap mudah terbakar menyebar di udara", "Kebakaran sulit dikendalikan jika sudah besar"],
    penanganan: ["Jauhkan dari sumber api, panas, dan percikan listrik", "Simpan dalam wadah tertutup rapat", "Hindari penumpukan uap di ruang tertutup", "Sediakan alat pemadam kebakaran di dekatnya"],
    apd: ["Sarung tangan tahan api", "Kacamata pelindung", "Jas laboratorium tidak mudah terbakar", "Sepatu safety"]
  },
  {
    kode: "GHS03",
    nama: "Pengoksidasi",
    warna: "#ffa500",
    img: "./foto/pengoksidasi.png",
    contoh: "Kalium permanganat, hidrogen peroksida",
    desc: "Bahan yang dapat melepaskan oksigen sehingga memperkuat atau memulai pembakaran bahan lain di sekitarnya.",
    bahaya: ["Mempercepat dan memperparah kebakaran", "Reaksi hebat jika kontak dengan bahan mudah terbakar", "Dapat menyebabkan ledakan jika bercampur dengan bahan organik"],
    penanganan: ["Pisahkan dari bahan mudah terbakar", "Simpan di tempat sejuk dan kering", "Hindari kontaminasi dengan bahan organik", "Gunakan wadah khusus oksidator"],
    apd: ["Kacamata pelindung", "Sarung tangan kimia", "Jas laboratorium", "Perisai wajah untuk jumlah besar"]
  },
  {
    kode: "GHS04",
    nama: "Gas Bertekanan",
    warna: "#00a8cc",
    img: "./foto/gas-bertekanan.png",
    contoh: "Gas LPG, nitrogen, oksigen bertekanan",
    desc: "Gas yang disimpan dalam tabung bertekanan tinggi, termasuk gas terkompresi, gas cair, dan gas terlarut yang berbahaya jika bocor atau tabung rusak.",
    bahaya: ["Tabung dapat meledak jika dipanaskan", "Kebocoran gas dapat menyebabkan sesak napas", "Gas dapat bertekanan sangat tinggi dan berbahaya"],
    penanganan: ["Simpan tabung dalam posisi tegak dan diikat kuat", "Jauhkan dari sumber panas", "Periksa katup dan regulator secara rutin", "Bawa dan pindahkan menggunakan troli khusus"],
    apd: ["Kacamata pelindung", "Sarung tangan", "Sepatu safety", "Detektor gas jika di ruang tertutup"]
  },
  {
    kode: "GHS05",
    nama: "Korosif",
    warna: "#8b4513",
    img: "./foto/korosif.png",
    contoh: "Asam sulfat, natrium hidroksida",
    desc: "Bahan yang dapat merusak atau menghancurkan jaringan hidup (kulit, mata, selaput lendir) dan material lainnya melalui reaksi kimia.",
    bahaya: ["Luka bakar kimia pada kulit dan mata", "Kerusakan permanen jika tidak segera ditangani", "Uap korosif berbahaya jika terhirup"],
    penanganan: ["Gunakan selalu APD lengkap", "Hindari percikan saat menuang", "Sediakan air bersih di dekat area kerja", "Netralkan tumpahan sebelum dibersihkan"],
    apd: ["Kacamata goggle tertutup", "Sarung tangan karet tebal", "Jas laboratorium tahan asam", "Sepatu safety tertutup penuh"]
  },
  {
    kode: "GHS06",
    nama: "Toksik/Beracun",
    warna: "#2d2d2d",
    img: "./foto/beracun.png",
    contoh: "Sianida, merkuri, pestisida",
    desc: "Bahan beracun yang dapat menyebabkan kematian atau cedera serius bahkan dalam jumlah kecil, melalui kontak kulit, pernapasan, atau tertelan.",
    bahaya: ["Menyebabkan keracunan fatal meski dalam dosis kecil", "Dapat diserap melalui kulit", "Sangat berbahaya jika terhirup atau tertelan"],
    penanganan: ["Tangani hanya di lemari asam (fume hood)", "Gunakan sistem tertutup saat memindahkan", "Simpan terkunci dan jauh dari jangkauan", "Catat setiap penggunaan dengan teliti"],
    apd: ["Respirator / masker gas", "Sarung tangan nitril ganda", "Kacamata goggle", "Jas laboratorium + apron"]
  },
  {
    kode: "GHS07",
    nama: "Berbahaya (Iritan)",
    warna: "#ff8c00",
    img: "./foto/iritan.png",
    contoh: "Aseton, amonia encer, detergen industri",
    desc: "Bahan yang dapat menyebabkan iritasi kulit, mata, atau saluran pernapasan. Tidak seletal GHS06 tetapi tetap berbahaya bila kontak berulang.",
    bahaya: ["Iritasi dan kemerahan pada kulit dan mata", "Batuk dan iritasi saluran napas jika terhirup", "Paparan berulang dapat menyebabkan sensitisasi"],
    penanganan: ["Hindari kontak langsung dengan kulit dan mata", "Gunakan di ruangan berventilasi baik", "Cuci tangan setelah bekerja", "Simpan wadah selalu tertutup"],
    apd: ["Kacamata pelindung", "Sarung tangan lateks/nitril", "Jas laboratorium", "Masker jika ventilasi kurang"]
  },
  {
    kode: "GHS08",
    nama: "Bahaya Kesehatan",
    warna: "#9b59b6",
    img: "./foto/bahaya-bagi-kesehatan.png",
    contoh: "Benzena, formaldehida, asbes",
    desc: "Bahan yang menyebabkan bahaya kesehatan serius jangka panjang seperti kanker, kerusakan organ, gangguan reproduksi, atau efek mutagenik.",
    bahaya: ["Berpotensi karsinogenik (pemicu kanker)", "Kerusakan organ dalam jangka panjang", "Gangguan sistem reproduksi dan genetik"],
    penanganan: ["Minimalisir paparan sebisa mungkin", "Gunakan sistem tertutup dan lemari asam", "Lakukan pemeriksaan kesehatan rutin", "Dokumentasi paparan secara ketat"],
    apd: ["Respirator khusus (half/full face)", "Sarung tangan nitril tebal", "Kacamata goggle", "Pakaian pelindung kimia"]
  },
  {
    kode: "GHS09",
    nama: "Berbahaya bagi Lingkungan",
    warna: "#27ae60",
    img: "./foto/berbahaya-bagi-lingkungan.png",
    contoh: "DDT, merkuri organik, PCB",
    desc: "Bahan yang sangat beracun bagi organisme air, tanah, dan ekosistem secara luas, serta dapat menimbulkan efek jangka panjang di lingkungan.",
    bahaya: ["Merusak ekosistem air dan tanah", "Efek bioakumulasi dalam rantai makanan", "Sulit terurai di lingkungan (persisten)"],
    penanganan: ["Jangan buang ke saluran air atau tanah", "Tampung limbah di wadah khusus bertanda", "Serahkan ke unit pengelolaan limbah B3", "Gunakan sesedikit mungkin"],
    apd: ["Sarung tangan kimia", "Kacamata pelindung", "Jas laboratorium", "Sepatu safety"]
  }
];

// ─────────────────────────────────────────────
// MODAL DETAIL GHS
// ─────────────────────────────────────────────
function openGHSModal(kode) {
  const s = SIMBOL_GHS.find(g => g.kode === kode);
  if (!s) return;

  document.getElementById("ghsModalKode").textContent   = s.kode;
  document.getElementById("ghsModalNama").textContent   = s.nama;
  document.getElementById("ghsModalDesc").textContent   = s.desc;
  document.getElementById("ghsModalContoh").textContent = s.contoh;

  const imgEl = document.getElementById("ghsModalImg");
  imgEl.innerHTML = s.img
    ? `<img src="${s.img}" alt="${s.nama}">`
    : s.svg;

  document.getElementById("ghsModalBahaya").innerHTML =
    s.bahaya.map(b => `<li>${b}</li>`).join("");
  document.getElementById("ghsModalPenanganan").innerHTML =
    s.penanganan.map(p => `<li>${p}</li>`).join("");
  document.getElementById("ghsModalAPD").innerHTML =
    s.apd.map(a => `<span class="apd-chip">${a}</span>`).join("");

  document.getElementById("ghsModalOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeGHSModal(event) {
  if (!event || event.target.id === "ghsModalOverlay") {
    document.getElementById("ghsModalOverlay").classList.remove("open");
    document.body.style.overflow = "";
  }
}

// ─────────────────────────────────────────────
// MODAL DETAIL ALAT
// ─────────────────────────────────────────────
function openModal(id) {
  const alat = ALAT.find(a => a.id === id);
  if (!alat) return;

  const iconEl = document.getElementById("mIcon");

  // Khusus Simbol Keselamatan: tampilkan grid piktogram GHS
  if (alat.id === 28) {
    iconEl.innerHTML = `
      <div class="ghs-grid">
        ${SIMBOL_GHS.map(s => `
          <div class="ghs-item" title="Klik untuk detail ${s.nama}" onclick="openGHSModal('${s.kode}')">
            <div class="ghs-svg">${s.img ? `<img src="${s.img}" alt="${s.nama}">` : s.svg}</div>
            <div class="ghs-kode">${s.kode}</div>
            <div class="ghs-nama">${s.nama}</div>
            <div class="ghs-contoh">${s.contoh}</div>
          </div>
        `).join("")}
      </div>
    `;
  } else if (alat.sketchfab) {
    iconEl.innerHTML = `
      <div class="sketchfab-wrap">
        <iframe
          src="${alat.sketchfab}?autostart=1&ui_infos=0&ui_controls=1&ui_watermark=0"
          frameborder="0"
          allowfullscreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
        ></iframe>
        <p class="sketchfab-credit">
          Model 3D via <a href="https://sketchfab.com" target="_blank" rel="nofollow">Sketchfab</a>
        </p>
      </div>
    `;
  } else if (alat.youtube) {
    iconEl.innerHTML = `
      <div class="youtube-wrap">
        <iframe
          src="${alat.youtube}"
          frameborder="0"
          allowfullscreen
          allow="autoplay; fullscreen"
          title="Video: ${alat.nama}"
        ></iframe>
        <p class="youtube-credit">
          Video via <a href="https://youtube.com" target="_blank" rel="nofollow">YouTube</a>
        </p>
      </div>
    `;
  } else {
    iconEl.innerHTML = `<img src="${alat.icon}" alt="${alat.nama}" class="modal-icon-img">`;
  }

  document.getElementById("mName").textContent = alat.nama;
  document.getElementById("mCat").textContent  = catLabel(alat.kat);
  document.getElementById("mDesc").textContent = alat.desc;
  document.getElementById("mFungsi").innerHTML = alat.fungsi
    .map(f => `<li>${f}</li>`)
    .join("");

  document.getElementById("modalOverlay").classList.add("open");
}

function closeModal(event) {
  // Tutup hanya jika klik pada overlay (bukan isi modal)
  if (event.target.id === "modalOverlay") {
    closeModalBtn();
  }
}

function closeModalBtn() {
  // Hentikan video YouTube/Sketchfab dengan mereset src iframe
  const iframe = document.querySelector("#mIcon iframe");
  if (iframe) {
    const src = iframe.src;
    iframe.src = "";
    iframe.src = src;
  }
  document.getElementById("modalOverlay").classList.remove("open");
}

// Tutup modal dengan tombol Escape
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeGHSModal();
    closeModalBtn();
  }
});

// ─────────────────────────────────────────────
// PILIH MODE PERMAINAN
// ─────────────────────────────────────────────
function selectGame(mode, card) {
  // Tandai kartu yang dipilih
  document.querySelectorAll(".game-mode-card").forEach(c => c.classList.remove("selected"));
  card.classList.add("selected");

  const url = GAME_URLS[mode];
  const wrap = document.getElementById("gameFrameWrap");

  wrap.innerHTML = `
    <div class="game-frame-header">
      <span class="game-frame-title">${GAME_LABELS[mode]}</span>
      <div style="display:flex;align-items:center;gap:12px;">
        <small style="color:rgba(255,255,255,.5)">Powered by Educandy</small>
        <button class="game-close-btn" onclick="closeGame()" title="Tutup permainan">✕ Tutup</button>
      </div>
    </div>
    <iframe
      src="${url}"
      style="width:100%;height:100%;min-height:800px;border:none;flex:1;"
      allowfullscreen
      title="${GAME_LABELS[mode]}"
    ></iframe>
  `;
}
 
function closeGame() {
  document.querySelectorAll(".game-mode-card").forEach(c => c.classList.remove("selected"));
  document.getElementById("gameFrameWrap").innerHTML = `
    <div class="game-placeholder" id="gamePlaceholder">
      <div class="big-icon">🎯</div>
      <p>Pilih mode permainan di atas untuk mulai bermain!</p>
    </div>
  `;
}

// ─────────────────────────────────────────────
// NAVIGASI ANTAR HALAMAN
// ─────────────────────────────────────────────
function showPage(pageId, btn) {
  // Sembunyikan semua halaman
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));

  // Nonaktifkan semua tombol nav
  document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active-nav"));

  // Tampilkan halaman yang dipilih
  document.getElementById(pageId).classList.add("active");

  // Tandai tombol nav aktif
  if (btn) btn.classList.add("active-nav");

  // Scroll ke atas
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function goHome() {
  const homeBtn = document.querySelectorAll(".nav-btn")[0];
  showPage("home", homeBtn);
}

// ─────────────────────────────────────────────
// INISIALISASI
// ─────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", function () {
  renderGrid("semua");
});

// ════════ IMAGE LIGHTBOX ════════
const imgLightbox      = document.getElementById('imgLightbox');
const imgLightboxImg   = document.getElementById('imgLightboxImg');
const imgLightboxClose = document.getElementById('imgLightboxClose');

function openLightbox(src) {
  imgLightboxImg.src = src;
  imgLightbox.classList.add('open');
}

function closeLightbox() {
  imgLightbox.classList.remove('open');
  imgLightboxImg.src = '';
}

// Tutup saat klik tombol ✕
imgLightboxClose.addEventListener('click', (e) => {
  e.stopPropagation();
  closeLightbox();
});

// Tutup saat klik area gelap di luar gambar
imgLightbox.addEventListener('click', (e) => {
  if (e.target === imgLightbox) closeLightbox();
});

// Klik gambar di dalam modal GHS → buka lightbox
document.addEventListener('click', (e) => {
  const ghsImg = e.target.closest('.ghs-modal-img');
  if (ghsImg) {
    const img = ghsImg.querySelector('img');
    if (img) openLightbox(img.src);
  }
});