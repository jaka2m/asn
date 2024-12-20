// Fungsi untuk menghasilkan UUID v4 varian 2
function generateUUIDv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// Fungsi untuk mengambil parameter dari URL
function getURLParameter(url, name) {
    const urlParams = new URLSearchParams(url);
    return urlParams.get(name);
}

async function handleRequest(request) {
    const url = new URL(request.url);

    // Ambil parameter 'sub1', 'sub2', 'count', dan 'wildcard' dari URL
    const countryParam1 = getURLParameter(url.search, 'sub1');
    const countryParam2 = getURLParameter(url.search, 'sub2');
    const count = getURLParameter(url.search, 'count') || 10; // Defaultkan menjadi 10 jika tidak ada count
    const wildcard = getURLParameter(url.search, 'wildcard'); // Ambil wildcard dari URL, jika ada
    const type = url.pathname.split('/')[1]; // Ambil tipe dari path (vless, trojan, ss)

    try {
        // Mengambil data proxy
        const response = await fetch('https://raw.githubusercontent.com/bitzblack/ip/refs/heads/main/ip.txt');
        if (!response.ok) throw new Error('Failed to load proxy list.');
        const text = await response.text();
        const proxies = text.split('\n').filter(proxy => proxy.trim() !== '');

        // Filter proxies berdasarkan negara
        const filteredProxies = proxies.filter(proxy => {
            const [, , country] = proxy.split(',');
            const upperCountry = country.toUpperCase();
            return (countryParam1 && upperCountry === countryParam1.toUpperCase()) ||
                   (countryParam2 && upperCountry === countryParam2.toUpperCase());
        });

        // Ambil sesuai dengan count
        const proxiesToShow = filteredProxies.slice(0, count);

        const proxyUrls = [];

        for (const proxy of proxiesToShow) {
            const [ip, port, country, provider] = proxy.split(',');
            const uuid = generateUUIDv4(); // Menghasilkan UUID v4 varian 2

            let urlString = '';

            // Tentukan URL sesuai dengan tipe dan sub1/sub2
            if (countryParam1) {
                // sub1
                if (type === 'vless') {
                    if (wildcard) {
                        urlString = `vless://${uuid}@${wildcard}:443?encryption=none&type=ws&host=${wildcard}.silet.gpj.us.kg&path=%2F${ip}-${port}&security=tls&sni=${wildcard}.silet.gpj.us.kg#${country}+${provider}`;
                    } else {
                        urlString = `vless://${uuid}@silet.gpj.us.kg:443?encryption=none&type=ws&host=silet.gpj.us.kg&path=%2F${ip}-${port}&security=tls&sni=silet.gpj.us.kg#${country}+${provider}`;
                    }
                } else if (type === 'trojan') {
                    if (wildcard) {
                        urlString = `trojan://${uuid}@${wildcard}:443?encryption=none&type=ws&host=${wildcard}.silet.gpj.us.kg&path=%2F${ip}-${port}&security=tls&sni=${wildcard}.silet.gpj.us.kg#${country}+${provider}`;
                    } else {
                        urlString = `trojan://${uuid}@silet.gpj.us.kg:443?encryption=none&type=ws&host=silet.gpj.us.kg&path=%2F${ip}-${port}&security=tls&sni=silet.gpj.us.kg#${country}+${provider}`;
                    }
                } else if (type === 'ss') {
                    const ssBase64 = btoa('onEto5d2d2a2c5Z3b2E9sbLAAe6bYmD3v8l8fGVbt34='); // Base64 encode SS password (change with your actual password)
                    if (wildcard) {
                        urlString = `ss://bm9uZTo1ZDJlYmQyYS05Y2I5LTRkMWItYWY1NS04NjE3ZDNlODFmMzk%3D@${wildcard}:443?encryption=none&type=ws&host=${wildcard}.silet.gpj.us.kg&path=%2F${ip}-${port}&security=tls&sni=${wildcard}.silet.gpj.us.kg#${country}+${provider}`;
                    } else {
                        urlString = `ss://bm9uZTo1ZDJlYmQyYS05Y2I5LTRkMWItYWY1NS04NjE3ZDNlODFmMzk%3D@silet.gpj.us.kg:443?encryption=none&type=ws&host=silet.gpj.us.kg&path=%2F${ip}-${port}&security=tls&sni=silet.gpj.us.kg#${country}+${provider}`;
                    }
                }
            } else if (countryParam2) {
                // sub2
                if (type === 'vless') {
                    if (wildcard) {
                        urlString = `vless://FREE-V2RAY-BMKG-XYZ@${wildcard}:443?encryption=none&type=ws&host=${wildcard}.silet.gpj.us.kg&path=%2Fvl%3D${ip}%3A${port}&security=tls&sni=${wildcard}.silet.gpj.us.kg#${country}+${provider}`;
                    } else {
                        urlString = `vless://FREE-V2RAY-BMKG-XYZ@silet.gpj.us.kg:443?encryption=none&type=ws&host=silet.gpj.us.kg&path=%2Fvl%3D${ip}%3A${port}&security=tls&sni=silet.gpj.us.kg#${country}+${provider}`;
                    }
                } else if (type === 'trojan') {
                    if (wildcard) {
                        urlString = `trojan://FREE-V2RAY-BMKG-XYZ@${wildcard}:443?encryption=none&type=ws&host=${wildcard}.silet.gpj.us.kg&path=%2Ftr%3D${ip}%3A${port}&security=tls&sni=${wildcard}.silet.gpj.us.kg#${country}+${provider}`;
                    } else {
                        urlString = `trojan://FREE-V2RAY-BMKG-XYZ@silet.gpj.us.kg:443?encryption=none&type=ws&host=silet.gpj.us.kg&path=%2Ftr%3D${ip}%3A${port}&security=tls&sni=silet.gpj.us.kg#${country}+${provider}`;
                    }
                }
            }

            proxyUrls.push(urlString); // Tambahkan URL ke array
        }

        return new Response(proxyUrls.join('\n'), {
            headers: { 'Content-Type': 'text/plain' }
        });
    } catch (error) {
        return new Response('Error loading proxy list', {
            status: 500,
            headers: { 'Content-Type': 'text/plain' }
        });
    }
}

addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
});





