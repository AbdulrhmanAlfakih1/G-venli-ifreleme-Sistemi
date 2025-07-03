// SHA512 özet fonksiyonları
async function metinOzetiOlustur() {
    const metin = document.getElementById('sha-metin').value;
    const sonucDiv = document.getElementById('sha-metin-sonuc');
    
    if (!metin) {
        uyariGoster('Lütfen özetini oluşturmak istediğiniz metni girin', 'hata');
        sonucDiv.innerHTML = '<span class="hata-mesaji">Metin girilmedi</span>';
        return;
    }
    
    try {
        sonucDiv.innerHTML = '<div class="yukleniyor">Özet oluşturuluyor...</div>';
        
        const encoder = new TextEncoder();
        const veri = encoder.encode(metin);
        const ozetBuffer = await crypto.subtle.digest('SHA-512', veri);
        const ozetDizisi = Array.from(new Uint8Array(ozetBuffer));
        const ozetHex = ozetDizisi.map(b => b.toString(16).padStart(2, '0')).join('');
        
        sonucDiv.innerHTML = `
            <div class="basari-sonuc">${ozetHex}</div>
            <button onclick="sonucuKopyala('sha-metin-sonuc')" class="kopya-buton">Sonucu Kopyala</button>
        `;
    } catch (hata) {
        sonucDiv.innerHTML = `<span class="hata-mesaji">Özet oluşturma hatası: ${hata.message}</span>`;
    }
}

async function dosyaOzetiOlustur() {
    const dosyaGirdisi = document.getElementById('sha-dosya');
    const dosya = dosyaGirdisi.files[0];
    const sonucDiv = document.getElementById('sha-dosya-sonuc');
    
    if (!dosya) {
        uyariGoster('Lütfen bir dosya seçin', 'hata');
        sonucDiv.innerHTML = '<span class="hata-mesaji">Dosya seçilmedi</span>';
        return;
    }
    
    try {
        sonucDiv.innerHTML = '<div class="yukleniyor">Dosya özeti oluşturuluyor...</div>';
        
        const okuyucu = new FileReader();
        okuyucu.onload = async function(e) {
            const arrayBuffer = e.target.result;
            const ozetBuffer = await crypto.subtle.digest('SHA-512', arrayBuffer);
            const ozetDizisi = Array.from(new Uint8Array(ozetBuffer));
            const ozetHex = ozetDizisi.map(b => b.toString(16).padStart(2, '0')).join('');
            
            sonucDiv.innerHTML = `
                <div class="basari-sonuc">${ozetHex}</div>
                <button onclick="sonucuKopyala('sha-dosya-sonuc')" class="kopya-buton">Sonucu Kopyala</button>
            `;
        };
        okuyucu.readAsArrayBuffer(dosya);
    } catch (hata) {
        sonucDiv.innerHTML = `<span class="hata-mesaji">Dosya özeti oluşturma hatası: ${hata.message}</span>`;
    }
}