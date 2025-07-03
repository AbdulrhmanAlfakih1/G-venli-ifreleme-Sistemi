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

![image](https://github.com/user-attachments/assets/215a3185-80a4-441f-857a-8576661f179d)

![image](https://github.com/user-attachments/assets/1af1bf39-39ee-4322-8640-1241c74c9845)


![image](https://github.com/user-attachments/assets/96462043-732c-47b9-b769-bfd43b60119d)

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

Hataları "Issues" kısmından bildirebilirsiniz.
```
