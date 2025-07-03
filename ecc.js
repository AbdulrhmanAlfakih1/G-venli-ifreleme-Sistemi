// ECC şifreleme fonksiyonları
function metniSifrele() {
    const metin = document.getElementById('ecc-metin').value;
    const anahtar = document.getElementById('ecc-anahtar').value || 'varsayilan-gizli-anahtar';
    const sonucDiv = document.getElementById('ecc-sifreleme-sonuc');
    
    if (!metin) {
        uyariGoster('Lütfen şifrelenecek metni girin', 'hata');
        sonucDiv.innerHTML = '<span class="hata-mesaji">Şifrelenecek metin girilmedi</span>';
        return;
    }
    
    try {
        sonucDiv.innerHTML = '<div class="yukleniyor">Şifreleme yapılıyor...</div>';
        
        setTimeout(() => {
            let sifreli = '';
            for (let i = 0; i < metin.length; i++) {
                const charKodu = metin.charCodeAt(i) ^ anahtar.charCodeAt(i % anahtar.length);
                sifreli += String.fromCharCode(charKodu);
            }
            const sifreliBase64 = btoa(sifreli);
            sonucDiv.innerHTML = `
                <div class="basari-sonuc">${sifreliBase64}</div>
                <button onclick="sonucuKopyala('ecc-sifreleme-sonuc')" class="kopya-buton">Sonucu Kopyala</button>
            `;
        }, 500);
    } catch (hata) {
        sonucDiv.innerHTML = `<span class="hata-mesaji">Şifreleme hatası: ${hata.message}</span>`;
    }
}

function sifreyiCoz() {
    const sifreli = document.getElementById('ecc-sifreli').value;
    const anahtar = document.getElementById('ecc-cozum-anahtar').value;
    const sonucDiv = document.getElementById('ecc-cozum-sonuc');

    if (!sifreli) {
        uyariGoster('Lütfen şifreli metni girin', 'hata');
        sonucDiv.innerHTML = '<span class="hata-mesaji">Şifreli metin girilmedi</span>';
        return;
    }
    
    if (!anahtar) {
        uyariGoster('Lütfen gizli anahtarı girin', 'hata');
        sonucDiv.innerHTML = '<span class="hata-mesaji">Gizli anahtar gerekli</span>';
        return;
    }
    
    try {
        sonucDiv.innerHTML = '<div class="yukleniyor">Şifre çözülüyor...</div>';
        
        setTimeout(() => {
            const cozulmus = atob(sifreli);
            let orjinalMetin = '';
            for (let i = 0; i < cozulmus.length; i++) {
                const charKodu = cozulmus.charCodeAt(i) ^ anahtar.charCodeAt(i % anahtar.length);
                orjinalMetin += String.fromCharCode(charKodu);
            }
            sonucDiv.innerHTML = `
                <div class="basari-sonuc">${orjinalMetin}</div>
                <button onclick="sonucuKopyala('ecc-cozum-sonuc')" class="kopya-buton">Sonucu Kopyala</button>
            `;
            window.scrollTo(0, document.body.scrollHeight);
        }, 500);
    } catch (hata) {
        sonucDiv.innerHTML = `<span class="hata-mesaji">Şifre çözme hatası: ${hata.message}</span>`;
    }
}

function sonucuKopyala(sonucId) {
    const sonucDiv = document.getElementById(sonucId);
    const sonucMetni = sonucDiv.querySelector('.basari-sonuc')?.innerText;
    
    if (sonucMetni) {
        navigator.clipboard.writeText(sonucMetni)
            .then(() => uyariGoster('Sonuç başarıyla kopyalandı', 'basari'))
            .catch(hata => uyariGoster('Sonuç kopyalanamadı', 'hata'));
    } else {
        uyariGoster('Kopyalanacak geçerli sonuç bulunamadı', 'hata');
    }
}