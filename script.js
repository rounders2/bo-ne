(function () {
  const T = {
    vi: {
      navMenu: 'Thực đơn', navHours: 'Giờ mở cửa', navFind: 'Tìm đường',
      heroBadge: 'Quán ăn sáng · Quy Nhơn',
      heroTitle1: 'Nghe tiếng xèo', heroTitle2: 'là tới bữa sáng',
      heroSub: 'Chảo gang nóng rực, bò mềm, trứng ốp la, pate béo và ổ bánh mì giòn rụm. Bò né Lăng Ông — món ăn sáng trứ danh của người Quy Nhơn, dọn ra còn sôi xèo xèo.',
      heroCta: 'Xem thực đơn', heroPrice: 'Chỉ từ 35.000₫', heroTag: 'Xèo! Xèo!',
      menuKicker: 'Thực đơn', menuTitle: 'Ăn gì sáng nay?',
      menuSub: 'Giá niêm yết, không phụ thu. Gọi thêm bánh mì thoải mái — nước sốt trên chảo là để chấm cho sạch.',
      hoursKicker: 'Giờ mở cửa', hoursTitle: 'Dậy sớm mới có phần',
      hoursSub: 'Quán nhỏ, bàn ghế vỉa hè, bán mỗi buổi sáng. Bò tươi lấy mỗi ngày nên hết là nghỉ — thường trước 11 giờ là cạn chảo.',
      hoursDaily: 'Chủ nhật — Thứ bảy',
      sellOut: 'Hết là hết!', sellOutSub: 'Cuối tuần và ngày lễ quán rất đông, quý khách nên đến sớm để có chỗ ngồi.',
      galleryKicker: 'Hình ảnh', galleryTitle: 'Góc bếp & góc phố',
      reviewKicker: 'Khách nói gì', reviewTitle: 'Người thật, bụng no thật',
      findKicker: 'Tìm đường', findTitle: 'Quán nhỏ, dễ tìm',
      addrLabel: 'Địa chỉ', addr: 'Số 73b đường Lê Lợi nối dài, phường Quy Nhơn, tỉnh Gia Lai',
      addrNote: 'Quán vỉa hè — nhìn khói và nghe tiếng xèo là đúng chỗ.',
      landmarkLabel: 'Mẹo tìm quán',
      phoneLabel: 'Điện thoại',
      footerLine: 'Bò né chảo nóng · phục vụ từ tờ mờ sáng',
      drinksTitle: 'Cà phê & nước ép', drinksSub: 'Ép tươi tại chỗ mỗi sáng',
      coffeeHeading: 'Cà phê & rau má', vegLegend: 'Món chay',
      hoursHeading: 'Mở cửa mỗi ngày!', juiceHeading: 'Nước ép',
      quote: 'Bò né là thức ăn được nhiều người yêu thích.',
      quoteSub: '“Bò né” nghĩa đen là “bò né tránh” — vì chảo gang dọn ra còn sôi xèo xèo, dầu bắn tứ tung khiến thực khách phải né người! Món ăn mang dấu ấn ẩm thực Pháp thời thuộc địa: bít tết, trứng ốp la, pate và bánh mì baguette — người Việt biến tấu thành bữa sáng đường phố nóng hổi, đậm đà hơn.',
    },
    en: {
      navMenu: 'Menu', navHours: 'Hours', navFind: 'Find us',
      heroBadge: 'Breakfast quán · Quy Nhon',
      heroTitle1: 'Follow', heroTitle2: 'the sizzle',
      heroSub: 'A cast-iron plate arrives still roaring: tender beef, a runny fried egg, rich pâté and a crackly Vietnamese baguette for dipping. Bò né is Quy Nhon’s favorite breakfast — and this little street quán does it best.',
      heroCta: 'See the menu', heroPrice: 'From 35,000₫', heroTag: 'Ssssizzle!',
      menuKicker: 'The menu', menuTitle: 'What’s for breakfast?',
      menuSub: 'Prices as listed, no surprises. Extra bread is cheap — the pan sauce is made for dipping.',
      hoursKicker: 'Hours', hoursTitle: 'Get here early',
      hoursSub: 'We’re a small open-air spot with sidewalk stools, mornings only. The beef is bought fresh daily — when it’s gone, we close, usually before 11am.',
      hoursDaily: 'Sunday — Saturday',
      sellOut: 'We close when we sell out!', sellOutSub: 'We get busy during weekends and holidays, make sure you come early to secure a table.',
      galleryKicker: 'Gallery', galleryTitle: 'The pan & the street',
      reviewKicker: 'Reviews', reviewTitle: 'Real people, full bellies',
      findKicker: 'Find us', findTitle: 'Small quán, easy to find',
      addrLabel: 'Address', addr: '73b Lê Lợi (extension), Quy Nhơn ward, Gia Lai province',
      addrNote: 'Street-side spot — follow the smoke and the sizzling sound.',
      landmarkLabel: 'How to spot us',
      phoneLabel: 'Phone',
      footerLine: 'Sizzling-pan breakfast · served hot every morning',
      drinksTitle: 'Coffee and fresh juices', drinksSub: 'Squeezed fresh every morning',
      coffeeHeading: 'Coffee & rau má', vegLegend: 'Vegetarian',
      hoursHeading: 'Open everyday!', juiceHeading: 'Fresh juice',
      quote: 'Bò né is a dish loved by many.',
      quoteSub: '“Bò né” literally means “dodging beef” — the cast-iron plate arrives still spitting hot oil, so diners lean away from the sizzle! The dish carries French colonial influence: steak, fried eggs, pâté and a baguette — reinvented by the Vietnamese into a hotter, bolder street-side breakfast.',
    },
  };

  const M = {
    vi: [
      { title: 'Bò né', badge: 'Món đinh', icon: '🍳', photo: 'beef', items: [
        { name: 'Bò né', desc: 'Bò + trứng + pate + xíu mại', price: '' },
        { name: '1 trứng', desc: '', price: '35k' },
        { name: '2 trứng', desc: '', price: '40k' },
        { name: 'Bò né đặc biệt', desc: 'Bò nhiều + 1 trứng + pate + thịt nướng + xíu mại', price: '45k' },
        { name: 'Bò né phô mai', desc: 'Bò nhiều + 1 trứng + phô mai Con Bò Cười + pate + xúc xích', price: '50k' },
      ]},
      { title: 'Ốp la', badge: 'Chảo nóng', icon: '🍳', photo: 'egg', items: [
        { name: 'Ốp la', desc: '2 trứng trên chảo gang', price: '25k', veg: true },
        { name: 'Ốp la + pate', desc: '2 trứng + pate', price: '30k' },
        { name: 'Ốp la đặc biệt', desc: '2 trứng + phô mai Con Bò Cười + xúc xích', price: '35k' },
      ]},
      { title: 'Mì & hơn nữa', badge: 'No bụng', icon: '🍜', photo: 'noodles', items: [
        { name: 'Mì Ý sốt thịt bò băm', desc: '', price: '40k' },
        { name: 'Mì xào thịt bò + trứng', desc: '', price: '40k' },
        { name: 'Mì xào bò', desc: '', price: '35k' },
        { name: 'Mì xào trứng', desc: '', price: '25k', veg: true },
        { name: 'Bò kho bánh mì', desc: 'Bò kho đậm đà, ăn kèm bánh mì', price: '45k' },
      ]},
      { title: 'Bánh mì kẹp', badge: 'Mang đi', icon: '🥖', photo: 'banhmi', items: [
        { name: 'Bánh mì kẹp thập cẩm', desc: '', price: '15–20k' },
        { name: 'Bánh mì kẹp bò', desc: '', price: '30k' },
        { name: 'Bánh mì kẹp trứng', desc: '', price: '', veg: true },
        { name: '1 trứng', desc: '', price: '15k' },
        { name: '2 trứng', desc: '', price: '20k' },
        { name: 'Bánh mì xúc xích / thịt nướng', desc: '', price: '15k' },
      ]},
      { title: 'Món thêm', badge: 'Ăn kèm', icon: '🍟', photo: 'fruit', items: [
        { name: 'Lạp xưởng chiên', desc: '', price: '15k/cây' },
        { name: 'Khoai tây chiên', desc: '', price: '', veg: true },
        { name: 'Phần nhỏ', desc: '', price: '10k' },
        { name: 'Phần lớn', desc: '', price: '20k' },
        { name: 'Dĩa trái cây', desc: 'Trái cây tươi theo mùa', price: '25k', veg: true },
      ]},
      { title: 'Bánh bèo', badge: 'Đặc sản', icon: '🥟', photo: 'banhbeo', items: [
        { name: 'Bánh bèo', desc: 'Chén nhỏ, tôm cháy hành phi', price: '3k/chén' },
        { name: 'Bánh bèo dĩa', desc: 'Phần lớn', price: '15k/dĩa' },
      ]},
    ],
    en: [
      { title: 'Sizzling beef', badge: 'Signature', icon: '🍳', photo: 'beef', items: [
        { name: 'Bò né', desc: 'Beef + egg + pâté + pork meatball', price: '' },
        { name: '1 egg', desc: '', price: '35k' },
        { name: '2 eggs', desc: '', price: '40k' },
        { name: 'Bò né special', desc: 'Extra beef + egg + pâté + grilled pork + pork meatball', price: '45k' },
        { name: 'Bò né with cheese', desc: 'Extra beef + egg + Laughing Cow cheese + pâté + pork sausage', price: '50k' },
      ]},
      { title: 'Sizzling eggs', badge: 'Hot pan', icon: '🍳', photo: 'egg', items: [
        { name: 'Sizzling eggs', desc: '2 eggs fried in onions', price: '25k', veg: true },
        { name: 'Sizzling eggs + pâté', desc: '2 eggs fried in onions + pâté', price: '30k' },
        { name: 'Sizzling eggs special', desc: '2 eggs fried in onions + Laughing Cow cheese + pork sausage', price: '35k' },
      ]},
      { title: 'Noodles & more', badge: 'Filling', icon: '🍜', photo: 'noodles', items: [
        { name: 'Spaghetti with minced beef sauce', desc: '', price: '40k' },
        { name: 'Stir-fried noodles with beef + egg', desc: '', price: '40k' },
        { name: 'Stir-fried noodles with beef', desc: '', price: '35k' },
        { name: 'Stir-fried noodles with egg', desc: '', price: '25k', veg: true },
        { name: 'Bò kho with bread', desc: 'Rich beef stew, baguette for dipping', price: '45k' },
      ]},
      { title: 'Bánh mì sandwiches', badge: 'To go', icon: '🥖', photo: 'banhmi', items: [
        { name: 'Mixed bánh mì', desc: 'A bit of everything', price: '15–20k' },
        { name: 'Beef bánh mì', desc: '', price: '30k' },
        { name: 'Egg bánh mì', desc: '', price: '', veg: true },
        { name: '1 egg', desc: '', price: '15k' },
        { name: '2 eggs', desc: '', price: '20k' },
        { name: 'Pork sausage / grilled pork bánh mì', desc: '', price: '15k' },
      ]},
      { title: 'Extras', badge: 'On the side', icon: '🍟', photo: 'fruit', items: [
        { name: 'Fried Chinese sausage', desc: '', price: '15k ea' },
        { name: 'French fries', desc: '', price: '', veg: true },
        { name: 'Small', desc: '', price: '10k' },
        { name: 'Large', desc: '', price: '20k' },
        { name: 'Fruit plate', desc: 'Fresh seasonal fruit', price: '25k', veg: true },
      ]},
      { title: 'Steamed rice cakes', badge: 'Local classic', icon: '🥟', photo: 'banhbeo', items: [
        { name: 'Bánh bèo', desc: 'Silky steamed rice cakes topped with dried shrimp & scallion oil', price: '3k/cup' },
        { name: 'Bánh bèo platter', desc: 'Large portion', price: '15k' },
      ]},
    ],
  };
  const order = [0, 1, 5, 3, 2, 4];

  const D = {
    vi: [
      { name: 'Cà phê đen / sữa đá', price: '15k' },
      { name: 'Cà phê muối', price: '20k' },
      { name: 'Cà phê bọt biển', price: '20k' },
      { name: 'Nước cam ép', price: '25k' },
      { name: 'Nước ép thơm', price: '20k' },
      { name: 'Nước ép ổi', price: '20k' },
      { name: 'Nước ép cà rốt', price: '20k' },
      { name: 'Nước ép cà chua', price: '20k' },
      { name: 'Nước ép dưa hấu', price: '20k' },
      { name: 'Rau má đậu xanh', price: '20k' },
      { name: 'Rau má đường sữa', price: '15k' },
      { name: 'Rau má kem muối trân châu', price: '25k' },
    ],
    en: [
      { name: 'Coffee — black / iced milk', price: '15k' },
      { name: 'Salted coffee', price: '20k' },
      { name: 'Dalgona coffee (whipped coffee)', price: '20k' },
      { name: 'Orange juice', price: '25k' },
      { name: 'Pineapple juice', price: '20k' },
      { name: 'Guava juice', price: '20k' },
      { name: 'Carrot juice', price: '20k' },
      { name: 'Tomato juice', price: '20k' },
      { name: 'Watermelon juice', price: '20k' },
      { name: 'Pennywort + soy milk', price: '20k' },
      { name: 'Pennywort + milk', price: '15k' },
      { name: 'Pennywort + salted cream & pearls', price: '25k' },
    ],
  };

  const R = {
    vi: [
      { text: 'Chảo bò né dọn ra còn sôi, bánh mì nóng giòn. Ăn ở đây từ hồi sinh viên tới giờ.', who: 'Anh Tuấn, khách quen' },
      { text: 'Pate nhà làm béo mà không ngán. 7 giờ sáng đã đông, đi trễ là hết bò.', who: 'Chị Hằng, Quy Nhơn' },
      { text: 'Quán vỉa hè đúng chất — ngồi ghế nhựa, cà phê sữa đá, nhìn phố buổi sáng.', who: 'Minh, food blogger' },
      { text: 'Xíu mại mềm, nước sốt chấm bánh mì là hết ý. Giá sinh viên, phần ăn no tới trưa.', who: 'Bảo, sinh viên' },
      { text: 'Dẫn khách du lịch tới ai cũng mê. Chủ quán vui vẻ, làm nhanh dù đông khách.', who: 'Cô Lan, hướng dẫn viên' },
    ],
    en: [
      { text: 'The pan comes out still sizzling and the bread is warm and crackly. Best breakfast of our whole Vietnam trip.', who: 'Sarah, Australia' },
      { text: 'Under $2 for a huge sizzling beef-and-egg plate plus iced coffee. Locals everywhere — always a good sign.', who: 'James, UK' },
      { text: 'Point at the menu, sit on a tiny stool, dip your bánh mì in the pan sauce. Perfect Quy Nhon morning.', who: 'Elena, travel blogger' },
      { text: 'Came once, then came back every morning of our stay. The pâté is homemade and incredible.', who: 'Tom & Mia, Germany' },
      { text: 'Friendly owner, fast service even when packed. Get the special with extra bread.', who: 'Kenji, Japan' },
    ],
  };

  const L = {
    vi: [
      { n: '1', text: 'Ở khu Lăng Ông — hỏi người dân “bò né Lăng Ông” ai cũng biết.' },
      { n: '2', text: 'Từ biển đi lên, quán là hàng ăn cuối cùng trên đường Lê Lợi trước vòng xoay.' },
      { n: '3', text: 'Nghe tiếng xèo xèo và mùi bơ thơm từ đầu ngõ.' },
    ],
    en: [
      { n: '1', text: 'In the Lăng Ông area — ask any local for “bò né Lăng Ông”, everyone knows it.' },
      { n: '2', text: 'Coming up from the beach, we are the last food stall on Lê Lợi before the roundabout.' },
      { n: '3', text: 'Or just follow the sizzling sound and buttery smell down the street.' },
    ],
  };

  const vegLeafSvg = '<svg width="14" height="14" viewBox="0 0 24 24" fill="#2E5230" aria-label="Vegetarian" class="veg-leaf"><path d="M20 4c-8 0-14 3-15 11 0 0 5-7 12-8-6 3-9 7-10 12 1-1 2-2 4-3 1 .5 2.5 1 4 1 6 0 7-7 5-13z"></path></svg>';

  function isSubItem(name) {
    return /^((1|2) (trứng|eggs?)|Small|Large|Phần nhỏ|Phần lớn)$/.test(name);
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  function renderMenu(lang) {
    const grid = document.getElementById('menu-grid');
    grid.innerHTML = order.map((idx, i) => {
      const sec = M[lang][idx];
      const footnote = (idx === 0 || idx === 1)
        ? (lang === 'vi' ? 'Kèm bánh mì giòn, rau tươi và nước chấm nhà làm' : 'Served with crusty baguette, fresh veggies and house dipping sauce')
        : null;
      const photoSrc = { egg: './assets/bone-egg-photo.jpg', beef: './assets/bone-beef-photo.jpg', banhbeo: './assets/bone-banhbeo-photo.jpg', banhmi: './assets/bone-banhmi-photo.jpg', noodles: './assets/bone-noodles-photo.jpg', fruit: './assets/bone-fruit-photo.jpg' }[sec.photo];
      const photoPos = { egg: '55% 72%', beef: '50% 68%', banhbeo: '55% 58%', banhmi: '57% 62%', noodles: '62% 55%', fruit: '48% 27%' }[sec.photo];
      const photoZoom = { egg: 1.55, beef: 1.3, banhbeo: 1.35, banhmi: 1.45, noodles: 1.5, fruit: 1.05 }[sec.photo];
      const photoHtml = photoSrc
        ? `<img src="${photoSrc}" alt="${escapeHtml(sec.title)}" style="width:100%;height:100%;object-fit:cover;object-position:${photoPos};transform:scale(${photoZoom});transform-origin:${photoPos}">`
        : `<div class="photo-tile" style="--tile-bg:${sec.tile}"><span class="icon">${sec.icon}</span></div>`;
      const itemsHtml = sec.items.map((it) => {
        const sub = isSubItem(it.name);
        const indent = sub ? '18px' : '0';
        const color = sub ? '#C93A2B' : '#1E2418';
        const pad = sub ? '2px' : '7px';
        return `<div class="menu-item" style="padding:${pad} 0;margin-left:${indent}">
          <div style="min-width:0">
            <p class="name" style="color:${color}">${it.veg ? vegLeafSvg : ''}${escapeHtml(it.name)}</p>
            ${it.desc ? `<p class="desc">${escapeHtml(it.desc)}</p>` : ''}
          </div>
          <span class="price">${escapeHtml(it.price)}</span>
        </div>`;
      }).join('');
      return `<div class="menu-card">
        <div class="menu-photo">${photoHtml}</div>
        <div class="menu-card-body">
          <div class="menu-card-head">
            <h3>${escapeHtml(sec.title)}</h3>
            <span class="menu-badge">${escapeHtml(sec.badge)}</span>
          </div>
          ${itemsHtml}
          ${footnote ? `<p class="menu-footnote">${escapeHtml(footnote)}</p>` : ''}
        </div>
      </div>`;
    }).join('');
  }

  function renderDrinks(lang) {
    const isCoffee = (name) => /cà phê|coffee|rau má|pennywort/i.test(name);
    const coffee = D[lang].filter((d) => isCoffee(d.name));
    const juice = D[lang].filter((d) => !isCoffee(d.name));
    const row = (d) => `<div class="drink-row"><p>${escapeHtml(d.name)}</p><span>${escapeHtml(d.price)}</span></div>`;
    document.getElementById('drinks-coffee').innerHTML = coffee.map(row).join('');
    document.getElementById('drinks-juice').innerHTML = juice.map(row).join('');
  }

  function renderReviews(lang) {
    document.getElementById('reviews-rail').innerHTML = R[lang].map((r) => `
      <figure class="review-card">
        <div class="review-stars">★★★★★</div>
        <blockquote>“${escapeHtml(r.text)}”</blockquote>
        <figcaption>— ${escapeHtml(r.who)}</figcaption>
      </figure>
    `).join('');
  }

  function renderLandmarks(lang) {
    document.getElementById('landmarks').innerHTML = L[lang].map((l) => `
      <div class="landmark-row">
        <span class="landmark-num">${l.n}</span>
        <p>${escapeHtml(l.text)}</p>
      </div>
    `).join('');
  }

  function renderMarquee(lang) {
    const marq = lang === 'vi'
      ? 'Xèo xèo xèo · Bò né 35k · Bánh mì nóng giòn · Cà phê sữa đá · Mở cửa 6:00 sáng mỗi ngày · Nước ép tươi mỗi sáng · '
      : 'Sizzle sizzle · Bò né 35k · Warm crusty bánh mì · Iced milk coffee · Open 6am everyday · Fresh-squeezed juices · ';
    document.getElementById('marquee-a').textContent = marq;
    document.getElementById('marquee-b').textContent = marq;
  }

  function renderText(lang) {
    const dict = T[lang];
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
  }

  function setLang(lang) {
    try { localStorage.setItem('bnlo-lang', lang); } catch (e) {}
    document.documentElement.lang = lang;
    document.getElementById('btn-vi').classList.toggle('active', lang === 'vi');
    document.getElementById('btn-en').classList.toggle('active', lang === 'en');
    renderText(lang);
    renderMenu(lang);
    renderDrinks(lang);
    renderReviews(lang);
    renderLandmarks(lang);
    renderMarquee(lang);
  }

  document.getElementById('btn-vi').addEventListener('click', () => setLang('vi'));
  document.getElementById('btn-en').addEventListener('click', () => setLang('en'));

  const rail = document.getElementById('reviews-rail');
  document.getElementById('reviews-prev').addEventListener('click', () => rail.scrollBy({ left: -362, behavior: 'smooth' }));
  document.getElementById('reviews-next').addEventListener('click', () => rail.scrollBy({ left: 362, behavior: 'smooth' }));

  const heroVideo = document.querySelector('.hero-plate video');
  if (heroVideo) {
    heroVideo.muted = true;
    heroVideo.play().catch(() => {});
  }

  let initialLang = 'vi';
  try {
    initialLang = localStorage.getItem('bnlo-lang') || 'vi';
  } catch (e) {}
  setLang(initialLang);
})();
