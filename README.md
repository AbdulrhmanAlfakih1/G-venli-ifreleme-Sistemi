# Güvenli Şifreleme Uygulaması

## Proje Tanımı
Bu proje, kriptografi alanında temel bilgileri öğrenmek amacıyla geliştirdiğim bir web uygulamasıdır. Uygulama iki temel özellik sunmaktadır:

1. ECC (Eliptik Eğri Kriptografisi) ile metin şifreleme/şifre çözme
2. SHA512 algoritması ile veri özetleme

---

## Proje Özellikleri

### 1. ECC Şifreleme Modülü
Bu modülde kullanıcılar:
- Kendi belirledikleri bir anahtar ile metin şifreleyebilir
- Aynı anahtar kullanarak şifrelenmiş metni çözebilir
- Şifreleme işlemleri için gelişmiş matematiksel fonksiyonlar kullanılır

Örnek kullanım:
```javascript
function sifrele() {
  // Kullanıcıdan alınan metin ve anahtar
  const metin = document.getElementById('metin').value;
  const anahtar = document.getElementById('anahtar').value;
  
  // Şifreleme işlemleri
  // ...
}
```

---

### 2. SHA512 Özet Modülü
Bu modül sayesinde:
- Metinlerin ve dosyaların dijital parmak izi oluşturulabilir
- Her veri için benzersiz 128 karakterlik çıktı üretilir
- Veri bütünlüğünü kontrol etmek mümkündür

---

## Teknolojiler
Uygulamanın geliştirilmesinde aşağıdaki teknolojiler kullanılmıştır:

- **HTML5**: Arayüz yapısı için
- **CSS3**: Tasarım ve stil için
- **JavaScript**: İşlevsellik için
- **Web Crypto API**: Şifreleme işlemleri için

---

## Kurulum ve Kullanım
Projeyi çalıştırmak için:

1. Tüm dosyaları bilgisayarınıza indirin
2. `index.html` dosyasını herhangi bir tarayıcıyla açın
3. Kullanmak istediğiniz modülü seçin

---

## Ekran Görüntüleri
![image](https://github.com/user-attachments/assets/88bad27e-ee27-40f5-abb5-161499f6e4cc)

![image](https://github.com/user-attachments/assets/065dfe19-9ac4-4f71-b15b-85160c9e7702)


![image](https://github.com/user-attachments/assets/c955b342-9162-4dc0-bffa-57c21b60f3d1)


![image](https://github.com/user-attachments/assets/8e4d1609-9b0b-482c-931e-8a22aafa20c0)

---

## Öğrendiklerim
Bu projeyi geliştirirken:
- Kriptografi algoritmalarının temel çalışma prensiplerini
- Web tabanlı şifreleme uygulamalarının nasıl geliştirildiğini
- Güvenli veri işleme tekniklerini
- Kullanıcı dostu arayüz tasarımını öğrendim

---

## Katkıda Bulunma
Proje açık kaynaklıdır. Katkılarınızı bekliyoruz:
1. Repoyu forklayın
2. Değişikliklerinizi yapın
3. Pull request gönderin

---

link Page
(https://abdulrhmanalfakih1.github.io/G-venli-ifreleme-Sistemi/)
```
