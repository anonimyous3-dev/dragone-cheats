// ==========================================
// DRAGONE CHEATS - KOLAY ÖZELLEŞTİRME AYARLARI
// Buradaki bilgileri kendi projenize göre değiştirebilirsiniz.
// ==========================================
const SITE_CONFIG = {
    brandName: "Dragone Cheats",
    discordUrl: "https://discord.gg/dragonecheats", // Kendi Discord davet linkinizi buraya yazın
    paymentUrl: "https://shopier.com/",            // Shopier veya ödeme linkinizi buraya yazın
    exeDownloadUrl: "# DragoneLoader.exe indirme linkinizi buraya koyun", // Gerçek .exe dosyanızın linki (örn: GitHub Releases linki)

    // Müşterilerinize vereceğiniz lisans anahtarları (veya KeyAuth/Firebase bağlayabilirsiniz)
    validLicenseKeys: {
        "DRAGONE-TEST-2026": { plan: "Deneme Paketi (24 Saat)", hwid: "AUTO-LOCK" },
        "DRAGONE-WEEK-2026": { plan: "Haftalık Lisans (7 Gün)", hwid: "AUTO-LOCK" },
        "DRAGONE-MONTH-2026": { plan: "Aylık Lisans (30 Gün)", hwid: "AUTO-LOCK" },
        "DRAGONE-LIFE-2026": { plan: "Sınırsız (Lifetime) Lisans", hwid: "AUTO-LOCK" }
    },

    // 3 Fiyatlandırma Paketi (Haftalık / Aylık / Sınırsız)
    pricingPlans: [
        {
            id: "weekly",
            name: "Haftalık Lisans",
            price: "₺250",
            period: "/ 7 Gün",
            popular: false,
            description: "Yazılımı test etmek ve kısa süreli projeler için ideal başlangıç paketi.",
            features: [
                "Aimbot, Silent Aim & ESP Modülleri",
                "Client-Side Lua Executor & Dumper",
                "Dahili HWID Spoofer (Serial Changer)",
                "%100 Stream Proof & Anti-Screengrab",
                "7/24 Discord Müşteri Desteği"
            ]
        },
        {
            id: "monthly",
            name: "Aylık Lisans",
            price: "₺600",
            period: "/ 30 Gün",
            popular: true,
            description: "Aktif MTA:SA oyuncuları için en çok tercih edilen fiyat/performans paketi.",
            features: [
                "Haftalık paketteki tüm özellikler",
                "Özel Lua Script & Config Kütüphanesi",
                "Ücretsiz HWID Sıfırlama Hakkı",
                "Otomatik Loader (.exe) Güncellemeleri",
                "Öncelikli VIP Destek Kanalı"
            ]
        },
        {
            id: "lifetime",
            name: "Sınırsız (Lifetime)",
            price: "₺1.500",
            period: "/ Tek Seferlik",
            popular: false,
            description: "Tek seferlik ödeme ile ömür boyu tüm güncellemelere ve sürüm yükseltmelerine erişim.",
            features: [
                "Aylık paketteki tüm özellikler",
                "Ömür Boyu (Süresiz) Lisans Anahtarı",
                "Erken Erişim (Beta) Modülleri",
                "Sınırsız HWID Sıfırlama Desteği",
                "Özel Geliştirici İletişim Hattı"
            ]
        }
    ]
};

// ==========================================
// UYGULAMA MANTIĞI (Kayıt, Giriş, Panel, Önizleme)
// ==========================================

const STORAGE_USERS_KEY = "dragone_registered_users";
const STORAGE_SESSION_KEY = "dragone_active_user";

// Oyun İçi Menü Önizleme Sekmeleri
const SIM_TABS_DATA = {
    aimbot: [
        { label: "Enable Aimbot & Silent Aim", status: "Aktif [Mouse 2]" },
        { label: "Aimbot FOV Radius", status: "95.0 px" },
        { label: "Humanized Smoothness", status: "6.5 (Doğal)" },
        { label: "Target Bone Selection", status: "Head / Neck" },
        { label: "No Recoil & No Spread", status: "Aktif (%100)" }
    ],
    visuals: [
        { label: "Player 2D Box & Skeleton ESP", status: "Aktif" },
        { label: "Health, Armor & Weapon Info", status: "Aktif" },
        { label: "Vehicle ESP (Model & Lock Status)", status: "350m Mesafe" },
        { label: "Stream Proof & Anti-Screengrab", status: "Koruma Açık" }
    ],
    executor: [
        { label: "Client-Side Lua Executor", status: "Hazır (Bypassed)" },
        { label: "Server Resource / Script Dumper", status: "Aktif" },
        { label: "Anti-Cheat Event Blocker", status: "Koruma Açık" },
        { label: "Custom .lua Script Loader", status: "12 Script Yüklü" }
    ],
    spoofer: [
        { label: "MTA:SA Serial Spoofer", status: "Aktif (Maskelendi)" },
        { label: "MAC & Disk HWID Cleaner", status: "Temiz" },
        { label: "Registry & Cache Trace Wiper", status: "Otomatik" }
    ],
    misc: [
        { label: "Airbreak / Smooth Fly", status: "Kapalı [RShift]" },
        { label: "Vehicle Godmode & Instant Repair", status: "Aktif" },
        { label: "Custom Handling & Speed Multiplier", status: "1.4x" },
        { label: "Panic Key (Unload from Memory)", status: "[END] Tuşu" }
    ]
};

document.addEventListener("DOMContentLoaded", () => {
    renderPricing();
    switchSimTab("aimbot", document.querySelector(".sim-tab"));
    document.getElementById("footerDiscordLink").href = SITE_CONFIG.discordUrl;
    checkSession();
});

function switchSimTab(tabKey, btnElement) {
    document.querySelectorAll(".sim-tab").forEach(btn => btn.classList.remove("active"));
    if (btnElement) btnElement.classList.add("active");

    const container = document.getElementById("simContent");
    const items = SIM_TABS_DATA[tabKey] || [];
    container.innerHTML = items.map(item => `
        <div class="sim-row">
            <span>${item.label}</span>
            <span class="sim-toggle mono">● ${item.status}</span>
        </div>
    `).join("");
}

function renderPricing() {
    const grid = document.getElementById("pricingGrid");
    grid.innerHTML = SITE_CONFIG.pricingPlans.map(plan => `
        <div class="card price-card ${plan.popular ? 'featured' : ''}">
            ${plan.popular ? '<span class="popular-tag">En Popüler</span>' : ''}
            <h3>${plan.name}</h3>
            <p class="text-muted" style="font-size: 0.88rem; margin-top: 0.25rem;">${plan.description}</p>
            <div class="price-amount">
                ${plan.price} <span class="price-period">${plan.period}</span>
            </div>
            <ul class="price-features">
                ${plan.features.map(f => `<li>${f}</li>`).join("")}
            </ul>
            <button class="btn ${plan.popular ? 'btn-primary' : 'btn-outline'} btn-full" onclick="handleSelectPlan('${plan.id}')">
                Paketi Seç & Satın Al
            </button>
        </div>
    `).join("");
}

// ==========================================
// KAYIT OL & GİRİŞ SİSTEMİ
// ==========================================

function getUsers() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_USERS_KEY) || "[]");
    } catch {
        return [];
    }
}

function saveUsers(users) {
    localStorage.setItem(STORAGE_USERS_KEY, JSON.stringify(users));
}

function getActiveUser() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_SESSION_KEY) || "null");
    } catch {
        return null;
    }
}

function setActiveUser(user) {
    if (user) {
        localStorage.setItem(STORAGE_SESSION_KEY, JSON.stringify(user));
    } else {
        localStorage.removeItem(STORAGE_SESSION_KEY);
    }
    checkSession();
}

function openAuthModal(mode = "login") {
    document.getElementById("authModal").classList.remove("hidden");
    switchAuthTab(mode);
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.add("hidden");
}

function closeModalOnBackdrop(event, modalId) {
    if (event.target.id === modalId) {
        closeModal(modalId);
    }
}

function switchAuthTab(mode) {
    const isLogin = mode === "login";
    document.getElementById("tabLoginBtn").classList.toggle("active", isLogin);
    document.getElementById("tabRegisterBtn").classList.toggle("active", !isLogin);
    document.getElementById("loginForm").classList.toggle("hidden", !isLogin);
    document.getElementById("registerForm").classList.toggle("hidden", isLogin);
    document.getElementById("loginError").classList.add("hidden");
    document.getElementById("registerError").classList.add("hidden");
}

function handleRegister(e) {
    e.preventDefault();
    const username = document.getElementById("regUsername").value.trim();
    const email = document.getElementById("regEmail").value.trim();
    const password = document.getElementById("regPassword").value;
    const errorEl = document.getElementById("registerError");

    const users = getUsers();
    if (users.some(u => u.username.toLowerCase() === username.toLowerCase() || u.email.toLowerCase() === email.toLowerCase())) {
        errorEl.textContent = "Bu kullanıcı adı veya e-posta zaten kayıtlı.";
        errorEl.classList.remove("hidden");
        return;
    }

    const newUser = {
        username,
        email,
        password,
        plan: null,
        licenseKey: null,
        hwid: null,
        createdAt: new Date().toISOString()
    };

    users.push(newUser);
    saveUsers(users);
    setActiveUser(newUser);
    closeModal("authModal");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function handleLogin(e) {
    e.preventDefault();
    const identifier = document.getElementById("loginUsername").value.trim().toLowerCase();
    const password = document.getElementById("loginPassword").value;
    const errorEl = document.getElementById("loginError");

    const users = getUsers();
    const found = users.find(
        u => (u.username.toLowerCase() === identifier || u.email.toLowerCase() === identifier) && u.password === password
    );

    if (!found) {
        errorEl.textContent = "Kullanıcı adı/e-posta veya şifre hatalı.";
        errorEl.classList.remove("hidden");
        return;
    }

    setActiveUser(found);
    closeModal("authModal");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function logoutUser() {
    setActiveUser(null);
}

function checkSession() {
    const user = getActiveUser();
    const navAuth = document.getElementById("navAuthArea");
    const dashSection = document.getElementById("dashboardSection");

    if (!user) {
        navAuth.innerHTML = `
            <button class="btn btn-ghost" onclick="openAuthModal('login')">Giriş Yap</button>
            <button class="btn btn-primary" onclick="openAuthModal('register')">Kayıt Ol</button>
        `;
        dashSection.classList.add("hidden");
        return;
    }

    navAuth.innerHTML = `
        <span class="mono" style="font-size: 0.85rem; color: var(--text-secondary);">${user.username}</span>
        <button class="btn btn-outline" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">Müşteri Paneli</button>
    `;

    dashSection.classList.remove("hidden");
    document.getElementById("dashboardWelcome").textContent = `Hoş geldin, ${user.username}`;
    document.getElementById("dashUsername").textContent = user.username;

    const licenseBadge = document.getElementById("licenseBadge");
    const downloadBtn = document.getElementById("downloadExeBtn");
    const lockedNotice = document.getElementById("downloadLockedNotice");

    if (user.plan) {
        licenseBadge.textContent = "Aktif Lisans";
        licenseBadge.className = "status-pill status-active";
        document.getElementById("dashPlan").textContent = user.plan;
        document.getElementById("dashHwid").textContent = user.hwid || "WIN10-9F8A-44C1 (Onaylı)";
        downloadBtn.disabled = false;
        lockedNotice.classList.add("hidden");
    } else {
        licenseBadge.textContent = "Lisans Yok";
        licenseBadge.className = "status-pill status-inactive";
        document.getElementById("dashPlan").textContent = "Ücretsiz Hesap (Paket Yok)";
        document.getElementById("dashHwid").textContent = "Kilitli Değil";
        downloadBtn.disabled = true;
        lockedNotice.classList.remove("hidden");
    }
}

function redeemLicenseKey() {
    const keyInput = document.getElementById("licenseKeyInput");
    const code = keyInput.value.trim().toUpperCase();
    const user = getActiveUser();

    if (!user) {
        openAuthModal("login");
        return;
    }

    const keyInfo = SITE_CONFIG.validLicenseKeys[code];
    if (!keyInfo) {
        alert("Geçersiz veya kullanılmış lisans anahtarı! Test için DRAGONE-TEST-2026 kodunu deneyebilirsiniz.");
        return;
    }

    user.plan = keyInfo.plan;
    user.licenseKey = code;
    user.hwid = "HWID-" + Math.random().toString(36).substring(2, 8).toUpperCase();

    // Kullanıcı listesini de güncelle
    const users = getUsers().map(u => u.username === user.username ? user : u);
    saveUsers(users);
    setActiveUser(user);
    keyInput.value = "";
    alert(`Tebrikler! ${keyInfo.plan} başarıyla hesabınıza tanımlandı. Artık DragoneLoader.exe dosyasını indirebilirsiniz.`);
}

function handleSelectPlan(planId) {
    const user = getActiveUser();
    if (!user) {
        // İlk başta kayıt olmasını iste
        openAuthModal("register");
        return;
    }

    const plan = SITE_CONFIG.pricingPlans.find(p => p.id === planId);
    if (!plan) return;

    document.getElementById("purchasePlanName").textContent = plan.name;
    document.getElementById("purchasePlanPrice").textContent = `${plan.price} ${plan.period}`;
    document.getElementById("purchaseDiscordBtn").href = SITE_CONFIG.discordUrl;
    document.getElementById("purchaseShopLinkBtn").href = SITE_CONFIG.paymentUrl;
    document.getElementById("purchaseModal").classList.remove("hidden");
}

function handleExeDownload() {
    const user = getActiveUser();
    if (!user || !user.plan) {
        alert("İndirme yapmak için aktif bir lisansınız olmalıdır.");
        return;
    }

    if (SITE_CONFIG.exeDownloadUrl.startsWith("http")) {
        window.open(SITE_CONFIG.exeDownloadUrl, "_blank");
    } else {
        alert("DragoneLoader.exe indirmesi başlatılıyor! (app.js içindeki SITE_CONFIG.exeDownloadUrl kısmına kendi .exe dosyanızın indirme linkini ekleyebilirsiniz.)");
    }
}
