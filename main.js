// main.js - Ana JavaScript dosyası

// Sayfa yüklendiğinde çalışacak fonksiyonlar
document.addEventListener('DOMContentLoaded', function() {
    console.log('Sayfa başarıyla yüklendi');
    
    // Geçerli yılı güncelle
    document.getElementById('guncel-yil').textContent = new Date().getFullYear();
    
    // Gezinme bağlantılarına hover efekti ekle
    const navLinkler = document.querySelectorAll('nav ul li a');
    navLinkler.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
});

// Uyarı mesajı gösterme fonksiyonu
function uyariGoster(mesaj, tur = 'bilgi') {
    const uyariDiv = document.createElement('div');
    uyariDiv.className = `uyari uyari-${tur}`;
    uyariDiv.textContent = mesaj;
    
    uyariDiv.style.position = 'fixed';
    uyariDiv.style.top = '20px';
    uyariDiv.style.right = '20px';
    uyariDiv.style.padding = '15px';
    uyariDiv.style.borderRadius = '5px';
    uyariDiv.style.zIndex = '1000';
    
    switch(tur) {
        case 'basari':
            uyariDiv.style.backgroundColor = '#d4edda';
            uyariDiv.style.color = '#155724';
            uyariDiv.style.border = '1px solid #c3e6cb';
            break;
        case 'hata':
            uyariDiv.style.backgroundColor = '#f8d7da';
            uyariDiv.style.color = '#721c24';
            uyariDiv.style.border = '1px solid #f5c6cb';
            break;
        default:
            uyariDiv.style.backgroundColor = '#d1ecf1';
            uyariDiv.style.color = '#0c5460';
            uyariDiv.style.border = '1px solid #bee5eb';
    }
    
    document.body.appendChild(uyariDiv);
    
    setTimeout(() => {
        uyariDiv.style.opacity = '0';
        uyariDiv.style.transition = 'opacity 1s ease';
        setTimeout(() => {
            uyariDiv.remove();
        }, 1000);
    }, 3000);
}

// Tarayıcı uyumluluk kontrolü
function tarayiciUyumlulukKontrol() {
    if (!window.crypto || !window.crypto.subtle) {
        uyariGoster('Tarayıcınız bazı gerekli özellikleri desteklemiyor. Lütfen Chrome veya Firefox\'un en son sürümünü kullanın', 'hata');
        return false;
    }
    return true;
}

// Sayfa yüklendiğinde tarayıcı uyumluluk kontrolü yap
tarayiciUyumlulukKontrol();

// Karanlık mod fonksiyonu
function karanlikModToggle() {
    const body = document.body;
    body.classList.toggle('karanlik-mod');
    
    // Tercihi localStorage'a kaydet
    if (body.classList.contains('karanlik-mod')) {
        localStorage.setItem('karanlikMod', 'aktif');
        uyariGoster('Karanlık mod aktif', 'basari');
    } else {
        localStorage.setItem('karanlikMod', 'pasif');
        uyariGoster('Karanlık mod pasif', 'basari');
    }
}

// Daha önce karanlık mod seçilmişse uygula
if (localStorage.getItem('karanlikMod') === 'aktif') {
    document.body.classList.add('karanlik-mod');
}

// Karanlık mod butonu ekle
function karanlikModButonuEkle() {
    const karanlikModButon = document.createElement('button');
    karanlikModButon.id = 'karanlik-mod-toggle';
    karanlikModButon.innerHTML = '🌓';
    karanlikModButon.style.position = 'fixed';
    karanlikModButon.style.bottom = '20px';
    karanlikModButon.style.left = '20px';
    karanlikModButon.style.zIndex = '1000';
    karanlikModButon.style.padding = '10px 15px';
    karanlikModButon.style.borderRadius = '5px';
    karanlikModButon.style.border = 'none';
    karanlikModButon.style.cursor = 'pointer';
    karanlikModButon.style.backgroundColor = '#1abc9c';
    karanlikModButon.style.color = 'white';
    karanlikModButon.style.fontSize = '16px';
    
    karanlikModButon.addEventListener('click', karanlikModToggle);
    
    document.body.appendChild(karanlikModButon);
}

// Karanlık mod butonunu sayfaya ekle
karanlikModButonuEkle();