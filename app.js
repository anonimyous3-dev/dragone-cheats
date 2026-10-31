const SITE_CONFIG = {
    discordUrl: "https://discord.gg/Xp8QvyQGb2",
    exeDownloadUrl: "#",

    validKeys: {
        "DRAGON-TEST-2026": "Deneme Paketi (24 Saat)",
        "DRAGON-WEEK-120": "1 Haftalık MTA Lisansı",
        "DRAGON-MONTH-290": "1 Aylık MTA Lisansı",
        "DRAGON-LIFE-650": "Sınırsız (Lifetime) MTA Lisansı"
    },

    products: [
        {
            id: 6,
            game: "MTA",
            name_tr: "Dragon MTA Cheat",
            name_en: "Dragon MTA Cheat",
            sub_tr: "MTA External/Internal Hile & Spoofer",
            sub_en: "MTA External/Internal Cheat & Spoofer",
            desc_tr: "⚡ Bu ürün hem Internal hem de External hile modüllerini içerir.\n\n🛡️ External Hile Sistemi: Oyun sürecinin (process) dışında çalışır, doğrudan enjeksiyon yapmadan bellek okuma/yazma ile etkileşime girer. Tespit edilme riskini sıfıra indirir.\n\n🔥 Internal Hile Sistemi: Doğrudan oyun içerisine entegre olarak Lua Executor, Silent Aim, RCON, Server Script Dumper ve gelişmiş araç/oyuncu kontrollerine tam erişim sağlar.",
            desc_en: "⚡ This product includes both Internal and External cheats.\n\n🛡️ External Cheat System: Operates outside the game process without direct injection, significantly reducing detection risk for long-term safe use.\n\n🔥 Internal Cheat System: Injected directly into the game process, giving deep-level access to Lua Executor, Silent Aim, RCON, Server Scripts, and advanced modules.",
            features: [
                "🎯 [AIMBOT] — Silent Aim • Aimbot • Crosshair • WallShot • Ignore Driver • Visibility Check • Bone Selection • Skeleton • Trace • FOV • Death Filter",
                "👁️ [VISUALS] — Player ESP • Vehicle ESP • Dynamic Color • Stream Proof",
                "🏃 [LOCAL PLAYER] — Airbrake • Fast Sprint/Swim/Rotation • God Mode • Slapper • Invisible • Game Speed • No Fall • Infinite Energy • Health/Armor • Super Jump",
                "🚗 [VEHICLE] — Speed • Hop • Super Brake • Backspace • God Mode • Invisible • Slapper • Heli Blading • NOS • Engine • Water Driving • Repair • Hunt • Explode • Spin • Teleport Nearby",
                "📋 [LISTS] — Explode/Teleport/Spectate Player • Teleport/Explode Vehicle • Vehicle Color",
                "🔫 [WEAPONS] — Rapid Fire • Infinite Ammo • No Reload • No Recoil • Damage Divider • Crasher • Give Weapon",
                "💻 [EXPLOIT & NET] — HUD • Weather/Sky/FOV Changer • FPS Unlock • BlockWatch • RCON • Lua Executor • Hook Bypass • Server Scripts • Trigger Event • Packet Info • HWID Spoofer",
                "⚙️ [SYSTEM] — Panic Button • Cloud Config • Account • Watermark"
            ],
            prices: { week: 120, month: 290, lifetime: 650 },
            status: "online",
            rating: "4.9",
            reviews: 142,
            image: "mta.png",
            isPremium: true
        },
        {
            id: 9,
            game: "CS2",
            name_tr: "Dragon CS2 Cheat",
            name_en: "Dragon CS2 Cheat",
            sub_tr: "External/Internal Yakında...",
            sub_en: "External/Internal Soon...",
            desc_tr: "Çok yakında stoklarda...",
            desc_en: "Coming soon...",
            features: ["Soon..."],
            prices: { week: 120, month: 290, lifetime: 650 },
            status: "offline",
            rating: "5.0",
            reviews: 0,
            image: "cs2.png",
            isPremium: false
        }
    ]
};

const I18N = {
    tr: {
        nav_home: "Ana Ekran",
        nav_products: "Ürünler",
        nav_account: "Account & Loader",
        nav_support: "Discord Destek",
        btn_login: "Giriş Yap",
        btn_signup: "Kayıt Ol",
        btn_logout: "Çıkış",
        btn_activate: "Aktifleştir",
        dash_sub: "Satın aldığınız lisans kodunu girerek DragonLoader.exe dosyasını indirebilirsiniz. (Test kodu: DRAGON-TEST-2026)",
        system_online: "Sistem Aktif",
        hero_desc_1: "Görünmezlik için tasarlanmış elit yazılım.",
        hero_desc_2: "Kernel seviyesinde güvenlik",
        hero_desc_3: "profesyonel performans ile buluşuyor.",
        btn_get_started: "Hemen Başla",
        stat_members: "Aktif Üye",
        stat_status: "Durum",
        stat_uptime: "Çalışma Süresi",
        core_sub: "Tespit edilemez operasyonlar için özel olarak geliştirildi.",
        feat_1_title: "External & Internal Mod",
        feat_1_desc: "Oyun belleğine doğrudan müdahale etmeden çalışan External mod veya tam erişimli Internal mod.",
        feat_2_title: "AntiCheat Bypass",
        feat_2_desc: "Gerçek zamanlı güncellemelerle oyun anti-cheat sistemlerinin önünde kalan gelişmiş algoritmalar.",
        feat_3_title: "Cloud Sync",
        feat_3_desc: "Tüm ayarlarınız şifrelenir ve tüm cihazlarınız arasında anında senkronize edilir.",
        feat_4_title: "Humanized Aim",
        feat_4_desc: "Bezier eğrisi yumuşatması izleyicilere tamamen doğal görünen fare hareketleri oluşturur.",
        feat_5_title: "Stream Proof",
        feat_5_desc: "OBS, Discord ve tüm ekran yakalama yazılımlarında tamamen görünmezdir.",
        feat_6_title: "HWID Spoofer",
        feat_6_desc: "Dahili donanım kimliği değiştirici, gerçek donanım kimliğinizi banlardan korur.",
        cat_all: "Tüm Oyunlar",
        search_placeholder: "Ürün ara...",
        tier_week: "1 Hafta",
        tier_month: "1 Ay",
        tier_lifetime: "Sınırsız",
        btn_purchase: "Satın Al",
        btn_offline: "Yakında",
        status_active: "Aktif",
        status_offline: "Yakında",
        btn_join_discord: "Discord'a Katıl",
        select_duration: "Lisans Süresi Seçin:",
        btn_add_cart: "Sepete Ekle",
        btn_buy_now: "Hemen Satın Al (Discord)",
        cart_title: "Alışveriş Sepeti",
        cart_subtotal: "Ara Toplam",
        cart_fee: "İşlem Ücreti",
        cart_total: "Toplam",
        btn_checkout: "Ödemeye Geç (Discord)",
        cart_empty: "Sepetiniz şu an boş."
    },
    en: {
        nav_home: "Home",
        nav_products: "Products",
        nav_account: "Account & Loader",
        nav_support: "Discord Support",
        btn_login: "Login",
        btn_signup: "Sign Up",
        btn_logout: "Log Out",
        btn_activate: "Activate",
        dash_sub: "Enter your purchased license key to unlock DragonLoader.exe download. (Test key: DRAGON-TEST-2026)",
        system_online: "System Online",
        hero_desc_1: "Elite software designed for invisibility.",
        hero_desc_2: "Kernel-level security",
        hero_desc_3: "meets professional performance.",
        btn_get_started: "Get Started",
        stat_members: "Active Members",
        stat_status: "Status",
        stat_uptime: "Uptime",
        core_sub: "Engineered for undetectable operations.",
        feat_1_title: "External & Internal Mode",
        feat_1_desc: "Operates outside the game environment without memory injection, or use Internal mode for deep access.",
        feat_2_title: "AntiCheat Bypass",
        feat_2_desc: "Advanced evasion algorithms that stay ahead of game anti-cheat systems with real-time updates.",
        feat_3_title: "Cloud Sync",
        feat_3_desc: "Your configurations are encrypted and instantly synchronized across all your devices.",
        feat_4_title: "Humanized Aim",
        feat_4_desc: "Bezier curve smoothing creates mouse movements that appear natural to spectators.",
        feat_5_title: "Stream Proof",
        feat_5_desc: "Completely invisible to OBS, Discord, and all screen capture software.",
        feat_6_title: "HWID Spoofer",
        feat_6_desc: "Built-in hardware ID spoofer protects your real hardware identity from bans.",
        cat_all: "All Games",
        search_placeholder: "Search products...",
        tier_week: "1 Week",
        tier_month: "1 Month",
        tier_lifetime: "Lifetime",
        btn_purchase: "Purchase",
        btn_offline: "Offline",
        status_active: "Active",
        status_offline: "Offline",
        btn_join_discord: "Join Discord",
        select_duration: "Select License Duration:",
        btn_add_cart: "Add to Cart",
        btn_buy_now: "Buy Now (Discord)",
        cart_title: "Shopping Cart",
        cart_subtotal: "Subtotal",
        cart_fee: "Transaction Fee",
        cart_total: "Total",
        btn_checkout: "Proceed to Checkout",
        cart_empty: "Your cart is currently empty."
    }
};

let currentLang = localStorage.getItem("dragon_lang") || "tr";
let cart = JSON.parse(localStorage.getItem("dragon_cart") || "[]");
let selectedProduct = null;
let selectedTier = "week";
let cardSelectedTiers = { 6: "week", 9: "week" };

const STORAGE_USERS_KEY = "dragon_users";
const STORAGE_SESSION_KEY = "dragon_active_user";

document.addEventListener("DOMContentLoaded", () => {
    setLanguage(currentLang);
    updateCartUI();
    checkSession();
});

function goToStage(stage) {
    const landing = document.getElementById("landingStage");
    const store = document.getElementById("storeStage");

    if (stage === "store") {
        landing.classList.add("hidden");
        store.classList.remove("hidden");
        window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
        store.classList.add("hidden");
        landing.classList.remove("hidden");
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
}

function switchStoreTab(tabName) {
    document.getElementById("storeTabProducts").classList.toggle("hidden", tabName !== "products");
    document.getElementById("storeTabFeatures").classList.toggle("hidden", tabName !== "features");
    document.getElementById("storeTabAccount").classList.toggle("hidden", tabName !== "account");

    document.getElementById("tabBtnProducts").classList.toggle("active", tabName === "products");
    document.getElementById("tabBtnFeatures").classList.toggle("active", tabName === "features");
    document.getElementById("tabBtnAccount").classList.toggle("active", tabName === "account");
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("dragon_lang", lang);
    document.documentElement.lang = lang;

    document.querySelectorAll(".lang-tr").forEach(b => b.classList.toggle("active", lang === "tr"));
    document.querySelectorAll(".lang-en").forEach(b => b.classList.toggle("active", lang === "en"));

    const dict = I18N[lang];
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (dict[key]) el.textContent = dict[key];
    });

    const searchInput = document.getElementById("productSearchInput");
    if (searchInput) searchInput.placeholder = dict.search_placeholder;

    renderProducts();
    updateCartUI();
    checkSession();
}

function selectCardTier(productId, tierKey) {
    cardSelectedTiers[productId] = tierKey;
    renderProducts();
}

function renderProducts() {
    const dict = I18N[currentLang];
    const query = (document.getElementById("productSearchInput")?.value || "").toLowerCase();
    const cat = document.getElementById("categoryFilter")?.value || "all";

    const filtered = SITE_CONFIG.products.filter(p => {
        const title = currentLang === "tr" ? p.name_tr : p.name_en;
        const matchSearch = title.toLowerCase().includes(query) || p.game.toLowerCase().includes(query);
        const matchCat = cat === "all" || p.game.toLowerCase() === cat.toLowerCase();
        return matchSearch && matchCat;
    });

    const tierLabelMap = {
        week: dict.tier_week,
        month: dict.tier_month,
        lifetime: dict.tier_lifetime
    };

    const grid = document.getElementById("productsGrid");
    if (!grid) return;

    grid.innerHTML = filtered.map(p => {
        const isOnline = p.status === "online";
        const title = currentLang === "tr" ? p.name_tr : p.name_en;
        const sub = currentLang === "tr" ? p.sub_tr : p.sub_en;
        const activeTier = cardSelectedTiers[p.id] || "week";
        const activePrice = p.prices[activeTier];
        const activeTierLabel = tierLabelMap[activeTier];

        return `
            <div class="product-card">
                <div class="product-thumb">
                    <img src="${p.image}" alt="${title}" class="product-cover" onerror="this.src='logo.png'">
                    <img src="logo.png" alt="Dragon" class="product-dragon-watermark">
                    <div class="thumb-top-left">
                        <span class="tag-game">${p.game}</span>
                        ${p.isPremium ? '<span class="tag-premium">Premium</span>' : ''}
                    </div>
                    <div class="thumb-top-right">
                        <span class="rating-pill">★ ${p.rating} (${p.reviews})</span>
                        <span class="status-badge ${isOnline ? 'status-online' : 'status-offline'}">
                            ${isOnline ? dict.status_active : dict.status_offline}
                        </span>
                    </div>
                </div>

                <div class="product-body">
                    <h3>${title}</h3>
                    <p>${sub}</p>

                    <div class="product-tier-pills">
                        <div class="tier-mini ${activeTier === 'week' ? 'active' : ''}" onclick="selectCardTier(${p.id}, 'week')">
                            <span>${dict.tier_week}</span>
                            <strong>${p.prices.week} TL</strong>
                        </div>
                        <div class="tier-mini ${activeTier === 'month' ? 'active' : ''}" onclick="selectCardTier(${p.id}, 'month')">
                            <span>${dict.tier_month}</span>
                            <strong>${p.prices.month} TL</strong>
                        </div>
                        <div class="tier-mini ${activeTier === 'lifetime' ? 'active' : ''}" onclick="selectCardTier(${p.id}, 'lifetime')">
                            <span>${dict.tier_lifetime}</span>
                            <strong>${p.prices.lifetime} TL</strong>
                        </div>
                    </div>

                    <div class="product-footer">
                        <div class="from-price">
                            <span>${activeTierLabel}</span>
                            <strong>${activePrice} TL</strong>
                        </div>
                        <button class="btn ${isOnline ? 'btn-gradient' : 'btn-outline'}" 
                                ${!isOnline ? 'disabled' : ''} 
                                onclick="openProductModal(${p.id})">
                            ${isOnline ? dict.btn_purchase : dict.btn_offline}
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join("");
}

function openProductModal(productId) {
    const p = SITE_CONFIG.products.find(x => x.id === productId);
    if (!p) return;
    selectedProduct = p;
    selectedTier = cardSelectedTiers[productId] || "week";

    document.getElementById("modalProductTitle").textContent = currentLang === "tr" ? p.name_tr : p.name_en;
    document.getElementById("modalProductSub").textContent = currentLang === "tr" ? p.sub_tr : p.sub_en;
    document.getElementById("modalProductDesc").textContent = currentLang === "tr" ? p.desc_tr : p.desc_en;

    const featContainer = document.getElementById("modalProductFeatures");
    featContainer.innerHTML = p.features.map(f => `<div class="feat-line">${f}</div>`).join("");

    renderModalPlans();
    document.getElementById("productModal").classList.remove("hidden");
}

function renderModalPlans() {
    if (!selectedProduct) return;
    const dict = I18N[currentLang];
    const plans = [
        { key: "week", label: dict.tier_week, price: selectedProduct.prices.week },
        { key: "month", label: dict.tier_month, price: selectedProduct.prices.month },
        { key: "lifetime", label: dict.tier_lifetime, price: selectedProduct.prices.lifetime }
    ];

    const container = document.getElementById("modalPlanSelector");
    container.innerHTML = plans.map(pl => `
        <div class="plan-option ${selectedTier === pl.key ? 'selected' : ''}" onclick="selectTier('${pl.key}')">
            <span class="plan-name">${pl.label}</span>
            <span class="plan-price">${pl.price} TL</span>
        </div>
    `).join("");
}

function selectTier(tierKey) {
    selectedTier = tierKey;
    if (selectedProduct) {
        cardSelectedTiers[selectedProduct.id] = tierKey;
        renderProducts();
    }
    renderModalPlans();
}

function addSelectedToCart() {
    if (!selectedProduct) return;
    const dict = I18N[currentLang];
    const tierLabels = {
        week: dict.tier_week,
        month: dict.tier_month,
        lifetime: dict.tier_lifetime
    };

    cart.push({
        uid: Date.now() + Math.random(),
        productId: selectedProduct.id,
        name: currentLang === "tr" ? selectedProduct.name_tr : selectedProduct.name_en,
        tier: tierLabels[selectedTier],
        price: selectedProduct.prices[selectedTier]
    });

    localStorage.setItem("dragon_cart", JSON.stringify(cart));
    updateCartUI();
    closeModal("productModal");
    toggleCartDrawer(true);
}

function buySelectedNow() {
    addSelectedToCart();
    window.open(SITE_CONFIG.discordUrl, "_blank");
}

function toggleCartDrawer(open) {
    document.getElementById("cartDrawerBackdrop").classList.toggle("hidden", !open);
}

function removeFromCart(uid) {
    cart = cart.filter(item => item.uid !== uid);
    localStorage.setItem("dragon_cart", JSON.stringify(cart));
    updateCartUI();
}

function updateCartUI() {
    const dict = I18N[currentLang];
    const badge = document.getElementById("cartBadge");
    if (cart.length > 0) {
        badge.textContent = cart.length;
        badge.classList.remove("hidden");
    } else {
        badge.classList.add("hidden");
    }

    const container = document.getElementById("cartItemsContainer");
    if (cart.length === 0) {
        container.innerHTML = `<p class="text-muted" style="text-align:center; margin-top: 2rem;">${dict.cart_empty}</p>`;
    } else {
        container.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div>
                    <div style="font-weight: 600; font-size: 0.92rem;">${item.name}</div>
                    <div class="text-muted" style="font-size: 0.78rem;">${item.tier}</div>
                </div>
                <div style="display:flex; align-items:center; gap: 0.75rem;">
                    <strong style="color: var(--dragon-gold);">${item.price} TL</strong>
                    <button class="modal-close" style="font-size: 1.1rem;" onclick="removeFromCart(${item.uid})">&times;</button>
                </div>
            </div>
        `).join("");
    }

    const total = cart.reduce((sum, i) => sum + i.price, 0);
    document.getElementById("cartSubtotalVal").textContent = `${total} TL`;
    document.getElementById("cartTotalVal").textContent = `${total} TL`;
}

function proceedToCheckout() {
    window.open(SITE_CONFIG.discordUrl, "_blank");
}

function getUsers() {
    try { return JSON.parse(localStorage.getItem(STORAGE_USERS_KEY) || "[]"); } catch { return []; }
}

function saveUsers(users) {
    localStorage.setItem(STORAGE_USERS_KEY, JSON.stringify(users));
}

function getActiveUser() {
    try { return JSON.parse(localStorage.getItem(STORAGE_SESSION_KEY) || "null"); } catch { return null; }
}

function setActiveUser(user) {
    if (user) localStorage.setItem(STORAGE_SESSION_KEY, JSON.stringify(user));
    else localStorage.removeItem(STORAGE_SESSION_KEY);
    checkSession();
}

function switchLandingAuthTab(mode) {
    const isLogin = mode === "login";
    document.getElementById("landTabLogin").classList.toggle("active", isLogin);
    document.getElementById("landTabRegister").classList.toggle("active", !isLogin);
    document.getElementById("landingLoginForm").classList.toggle("hidden", !isLogin);
    document.getElementById("landingRegisterForm").classList.toggle("hidden", isLogin);
}

function handleLandingRegister(e) {
    e.preventDefault();
    const username = document.getElementById("landRegUser").value.trim();
    const email = document.getElementById("landRegEmail").value.trim();
    const password = document.getElementById("landRegPass").value;

    const users = getUsers();
    const newUser = { username, email, password, plan: null };
    users.push(newUser);
    saveUsers(users);
    setActiveUser(newUser);
}

function handleLandingLogin(e) {
    e.preventDefault();
    const id = document.getElementById("landLoginUser").value.trim().toLowerCase();
    const pw = document.getElementById("landLoginPass").value;
    const users = getUsers();
    const found = users.find(u => (u.username.toLowerCase() === id || u.email.toLowerCase() === id) && u.password === pw);

    if (!found) {
        const err = document.getElementById("landLoginError");
        err.textContent = currentLang === "tr" ? "Kullanıcı veya şifre hatalı." : "Invalid username or password.";
        err.classList.remove("hidden");
        return;
    }
    setActiveUser(found);
}

function logoutUser() {
    setActiveUser(null);
}

function closeModal(id) {
    document.getElementById(id).classList.add("hidden");
}

function closeModalOnBackdrop(e, id) {
    if (e.target.id === id) closeModal(id);
}

function checkSession() {
    const dict = I18N[currentLang];
    const user = getActiveUser();

    const guestView = document.getElementById("landingGuestView");
    const loggedView = document.getElementById("landingLoggedView");
    const storeNavUser = document.getElementById("storeNavUser");

    if (!user) {
        guestView.classList.remove("hidden");
        loggedView.classList.add("hidden");
        storeNavUser.innerHTML = `
            <button class="btn btn-outline btn-sm" onclick="goToStage('landing')">${dict.btn_login}</button>
        `;
        return;
    }

    guestView.classList.add("hidden");
    loggedView.classList.remove("hidden");
    document.getElementById("landingUserName").textContent = user.username;
    document.getElementById("landingUserLicense").textContent = user.plan ? user.plan : (currentLang === "tr" ? "Üye Hesabı (Aktif)" : "Member Account");

    storeNavUser.innerHTML = `
        <button class="btn btn-outline btn-sm" onclick="switchStoreTab('account')">👤 ${user.username}</button>
    `;

    document.getElementById("dashWelcomeText").textContent = `${user.username} — Account`;
    const badge = document.getElementById("dashLicenseBadge");
    const dlBtn = document.getElementById("downloadExeBtn");

    if (user.plan) {
        badge.textContent = user.plan;
        badge.className = "status-badge status-online";
        dlBtn.disabled = false;
    } else {
        badge.textContent = currentLang === "tr" ? "Lisans Yok" : "No License";
        badge.className = "status-badge status-offline";
        dlBtn.disabled = true;
    }
}

function redeemLicenseKey() {
    const code = document.getElementById("licenseKeyInput").value.trim().toUpperCase();
    let user = getActiveUser();
    if (!user) {
        user = { username: "DragonUser", email: "", password: "", plan: null };
    }

    const planName = SITE_CONFIG.validKeys[code];
    if (!planName) {
        alert(currentLang === "tr" ? "Geçersiz lisans kodu! Test için DRAGON-TEST-2026 kodunu deneyin." : "Invalid key! Try DRAGON-TEST-2026.");
        return;
    }

    user.plan = planName;
    setActiveUser(user);
    alert(currentLang === "tr" ? `Lisans aktif edildi: ${planName}!` : `License activated: ${planName}!`);
}

function handleExeDownload() {
    const user = getActiveUser();
    if (!user || !user.plan) return;
    if (SITE_CONFIG.exeDownloadUrl.startsWith("http")) {
        window.open(SITE_CONFIG.exeDownloadUrl, "_blank");
    } else {
        alert("DragonLoader.exe indirmesi başlatılıyor!");
    }
}
