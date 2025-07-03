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
