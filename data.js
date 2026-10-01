const dersGOData = {

  3: {
    sinif: "3. Sınıf",

    dersler: [

      {
        id: "turkce",
        ad: "Türkçe",
        ikon: "📖",
        uniteler: []
      },

      {
        id: "matematik",
        ad: "Matematik",
        ikon: "➗",
        uniteler: []
      },

      {
        id: "fen",
        ad: "Fen Bilimleri",
        ikon: "🔬",
        uniteler: []
      },

      {
        id: "hayat",
        ad: "Hayat Bilgisi",
        ikon: "🌍",
        uniteler: []
      },

      {
        id: "ingilizce",
        ad: "İngilizce",
        ikon: "🌐",
        uniteler: []
      }

    ]
  },


  6: {

    sinif: "6. Sınıf",

    dersler: [

      {
        id: "turkce",
        ad: "Türkçe",
        ikon: "📖",
        uniteler: []
      },


      /* =========================
         MATEMATİK
      ========================== */

      {
        id: "matematik",
        ad: "Matematik",
        ikon: "➗",

        uniteler: [

          {
            id: "tema1",
            ad: "1. Tema: Sayılar ve Nicelikler (1)",

            konular: [
              "Bir Doğal Sayının Katları ve İki Doğal Sayının Ortak Katları",
              "Kalansız Bölünebilme",
              "Fermat Asalları",
              "Çarpanlar ve Asal Çarpanlar"
            ]
          },

          {
            id: "tema2",
            ad: "2. Tema: İstatistiksel Araştırma Süreci",

            konular: [
              "İstatistik Öğreniyoruz",
              "Kütüphanedeki Kitap Sayısı",
              "Kök-Yaprak Gösterimi"
            ]
          },

          {
            id: "tema3",
            ad: "3. Tema: Sayılar ve Nicelikler (2)",

            konular: [
              "Bir Çokluğun Belli Bir Yüzdesini Hesaplama",
              "Bir Evin Kullanım Alanlarına Göre Tasarımı",
              "Eski Mısır'da Kesirler"
            ]
          },

          {
            id: "tema4",
            ad: "4. Tema: Veriden Olasılığa",

            konular: [
              "Torbadan Kart Çekme Deneyi",
              "Deneysel Olasılık"
            ]
          },

          {
            id: "tema5",
            ad: "5. Tema: Geometrik Şekiller",

            konular: [
              "Eş Açıları Öğreniyoruz",
              "Dörtgenler Dünyası",
              "Birer Kenar Uzunlukları Aynı Olan Farklı Dikdörtgenler",
              "Mozaiklerin Geometrisi",
              "Kenarların Orta Noktalarını Birleştirerek Dörtgenler Oluşturuyorum"
            ]
          },

          {
            id: "tema6",
            ad: "6. Tema: İşlemlerle Cebirsel Düşünme ve Değişimler",

            konular: [
              "Örüntü Kuralının Cebirsel İfadesi",
              "Hârizmî ve Cebir"
            ]
          },

          {
            id: "tema7",
            ad: "7. Tema: Geometrik Nicelikler",

            konular: [
              "Renkli Çemberler",
              "Çemberi Keşfediyorum",
              "Şekilleri Bölerek Alanı Hesapla",
              "Alan Karşılaştırma"
            ]
          }

        ]
      },


      {
        id: "fen",
        ad: "Fen Bilimleri",
        ikon: "🔬",
        uniteler: []
      },


      /* =========================
         SOSYAL BİLGİLER
      ========================== */

      {
        id: "sosyal",
        ad: "Sosyal Bilgiler",
        ikon: "🌍",

        uniteler: [

          /* 1. ÖĞRENME ALANI */

          {
            id: "sosyal1",

            ad: "1. Öğrenme Alanı: Birlikte Yaşamak",

            konular: [

              "Zaman İçinde Değişen Gruplar ve Roller",

              "Kültürel Bağlarımızın ve Millî Değerlerimizin Toplumsal Birlikteliğe Etkisi",

              "Toplumsal Sorunlar ve Çözüm Önerileri"

            ]
          },


          /* 2. ÖĞRENME ALANI */

          {
            id: "sosyal2",

            ad: "2. Öğrenme Alanı: Evimiz Dünya",

            konular: [

              "Ülkemizin, Kıtaların ve Okyanusların Konum Özellikleri",

              "Doğal ve Beşerî Çevre Özellikleri Arasındaki İlişki",

              "Ülkemizin Türk Dünyasıyla Kültürel İş Birlikleri"

            ]
          },


          /* 3. ÖĞRENME ALANI */

          {
            id: "sosyal3",

            ad: "3. Öğrenme Alanı: Ortak Mirasımız",

            konular: [

              "Türkistan’da Kurulan İlk Türk Devletlerinin Medeniyetimize Katkıları",

              "VII-XIII. Yüzyıllar Arasında İslam Medeniyetinin İnsanlığın Ortak Mirasına Katkıları",

              "İslamiyet’in Kabulüyle Türklerin Sosyal ve Kültürel Hayatlarında Meydana Gelen Değişimler",

              "XI-XIII. Yüzyıllar Arasında Meydana Gelen Askerî Mücadelelerin Anadolu’nun Türkleşmesi ve İslamlaşmasına Katkıları"

            ]
          },


          /* 4. ÖĞRENME ALANI */

          {
            id: "sosyal4",

            ad: "4. Öğrenme Alanı: Yaşayan Demokrasimiz",

            konular: [

              "Yönetimin Karar Alma Sürecini Etkileyen Unsurlar",

              "Temel Hak ve Sorumlulukların Toplumsal Düzenin Sürdürülmesindeki Önemi",

              "Dijitalleşme ve Teknolojik Gelişmelerin Vatandaşlık Hak ve Sorumluluklarına Etkileri"

            ]
          },


          /* 5. ÖĞRENME ALANI */

          {
            id: "sosyal5",

            ad: "5. Öğrenme Alanı: Hayatımızdaki Ekonomi",

            konular: [

              "Ülkemizin Kaynakları ve Ekonomik Faaliyetler",

              "Ekonomik Faaliyetler ve Meslekler",

              "Tasarlanan Bir Ürünün Yatırım ve Pazarlama Süreci"

            ]
          },


          /* 6. ÖĞRENME ALANI */

          {
            id: "sosyal6",

            ad: "6. Öğrenme Alanı: Teknoloji ve Sosyal Bilimler",

            konular: [

              "Ulaşım ve İletişim Teknolojilerinin Kültürel Etkileşimdeki Rolü",

              "Telif ve Patent Süreci"

            ]
          }

        ]
      },


      {
        id: "ingilizce",
        ad: "İngilizce",
        ikon: "🌐",
        uniteler: []
      },


      {
        id: "din",
        ad: "Din Kültürü ve Ahlak Bilgisi",
        ikon: "📚",
        uniteler: []
      }

    ]
  }

};
