# Human-Engineered Production Workflow: Component-by-Component DOM Cloning

To make both your **Import-Export & Logistics Portal** and your **China Culture Explorer** look 100% like human-engineered production platforms, change your workflow from *"Prompting a Whole Page"* to *"Component-by-Component DOM Cloning."*

---

## Step 1: Enforce the "Anti-AI" CSS Reset
At the very start of your project, ban the CSS habits that make AI-generated sites look cheap:
- **Zero Border-Radius**: Set `border-radius: 0px` on all article thumbnails, section wrappers, tables, and buttons (only allow pill shapes on small status tags or VEC's video play button).
- **No Drop Shadows**: Set `box-shadow: none` across the entire layout. Separate content strictly with `1px solid` hairline borders (`#e5e5e5` on paper-white; `rgba(255,255,255,0.14)` on dark navy).
- **Tight Editorial Line-Heights and Gutters**: Never use `gap-8` (32px) between news items. Lock grid gaps to `15px–20px` and inner list padding to `10px–12px`.

---

## Step 2: Clone Real DOM Blocks Using Chrome DevTools (Do Not Let AI Guess)
Instead of telling an AI *"build me a homepage like VnExpress or VEC"* (which triggers generic AI templates), use this exact workflow:
1. Open `vnexpress.net` or `vec.global/en` in Chrome.
2. Press `F12` (DevTools), click the Element Inspector cursor (`Ctrl+Shift+C`), and click on one specific section (for example, VnExpress's `box-category` or VEC's `001` architectural grid).
3. Right-click that HTML node in the Elements tree and select **Copy -> Copy outerHTML** (and inspect the **Computed** tab for exact padding, font-size, and `grid-template-columns`).
4. Paste that raw HTML snippet into your prompt and instruct:
   > *"Convert this exact production HTML/CSS block into a reusable React/Next.js component for my Logistics site, keeping 100% of the DOM hierarchy, borders, and spacing intact."*

---

## Step 3: Apply Authentic Micro-Density to Your Two Projects

### A. For Your Import-Export, Logistics & Global Markets Website
- **Multi-link Category Headers**: Copy VnExpress's exact multi-link category headers (*Hải quan & Thuế $\rightarrow$ Phân loại HS | C/O ưu đãi | Trị giá hải quan | Thủ tục VNACCS*).
- **Dense Story Clusters**: Never display a lonely article card. Group stories into **1 Lead + 1 Side Text + 3 Bottom Bullet Links**.
- **Dense Operational Right Sidebar**: Pack the right sidebar with dense, tabular-font (`JetBrains Mono`) operational widgets:
  - 8-digit HS Code quick-lookup
  - Incoterms 2020 cost-split bar
  - Lạng Sơn / Móng Cái border gate congestion status
  - Shanghai–Haiphong / VN–EU container spot rates

### B. For Your China Culture Explorer Website
- **Edge-to-Edge Architectural Grid**: Copy VEC's edge-to-edge structural grid lines where `1px` borders extend all the way across the screen, intersecting at sharp 90-degree corners.
- **Primary-Source Scholarly Lockups**: Replace hollow AI summary cards with scholarly rigor. Every module should pair:
  - A vertical Hanzi water-ink stamp or bracketed index (e.g., `[01] 紫微斗数 • Tử Vi Đẩu Số`).
  - Exact classical text citations (e.g., 《滴天髓》 *Đích Thiên Tủy*).
  - A multi-tab switcher letting readers toggle between **Original Classical Chinese**, **Pinyin**, and **English Analytical Commentary** inside the exact same frame.
