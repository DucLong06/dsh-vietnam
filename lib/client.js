window.__ModuleLoader__.load({
	id: "dsh-vietnam",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		let react = require("react");
		let _deepseek_ai_dsh_client_ui_primitives = require("@deepseek-ai/dsh-client-ui-primitives");
		let react_jsx_runtime = require("react/jsx-runtime");
		//#region src/client/theme/palettes.ts
		const PALETTES = [
			{
				id: "sonmai",
				light: {
					base: "#f7efe2",
					layer1: "#fbf5ea",
					layer2: "#f3e8d6",
					layer3: "#ecdfc8",
					overlay: "#fffaf1",
					ink: "#2a120c",
					ink2: "#5c3a2c",
					ink3: "#7a5644",
					caption: "#8c6c58",
					accent: "#9e1b1b",
					accentInk: "#fbf3e6",
					accentHover: "#b52a22",
					link: "#9e1b1b",
					action: "#9e1b1b",
					actionHover: "#b52a22",
					code: "#efe3cf",
					tint: "158, 27, 27",
					success: "#4a7330",
					warn: "#975a0a",
					error: "#b3261e"
				},
				dark: {
					base: "#120c0a",
					layer1: "#1a1210",
					layer2: "#221714",
					layer3: "#2b1d19",
					overlay: "#241815",
					ink: "#f3e6d0",
					ink2: "#d2bc9f",
					ink3: "#ac9478",
					caption: "#957e66",
					accent: "#c9a14a",
					accentInk: "#1a1210",
					accentHover: "#d9b35e",
					link: "#e2b75c",
					action: "#9e1b1b",
					actionHover: "#b52a22",
					code: "#1e1512",
					tint: "201, 161, 74",
					success: "#8fb573",
					warn: "#e0a43a",
					error: "#ec6a55"
				}
			},
			{
				id: "halong",
				light: {
					base: "#eef3f2",
					layer1: "#f6f9f8",
					layer2: "#e6eeec",
					layer3: "#dce7e4",
					overlay: "#ffffff",
					ink: "#14282a",
					ink2: "#3c5457",
					ink3: "#55696c",
					caption: "#687b7e",
					accent: "#2a7370",
					accentInk: "#f4fbfa",
					accentHover: "#22625f",
					link: "#1f6b68",
					action: "#2a7370",
					actionHover: "#22625f",
					code: "#e3ecea",
					tint: "47, 125, 122",
					success: "#2a7348",
					warn: "#8a5f0e",
					error: "#ae3535"
				},
				dark: {
					base: "#0d1617",
					layer1: "#122022",
					layer2: "#172a2c",
					layer3: "#1d3336",
					overlay: "#162629",
					ink: "#e4efed",
					ink2: "#b2c6c3",
					ink3: "#8ea5a2",
					caption: "#7a928f",
					accent: "#5fb3ad",
					accentInk: "#0b1a1b",
					accentHover: "#74c4be",
					link: "#79c9c2",
					action: "#2a7370",
					actionHover: "#22625f",
					code: "#132326",
					tint: "95, 179, 173",
					success: "#6cc08f",
					warn: "#e0b45a",
					error: "#ec7a72"
				}
			},
			{
				id: "hoian",
				light: {
					base: "#fbf4e2",
					layer1: "#fffaee",
					layer2: "#f6ebd0",
					layer3: "#efe0bd",
					overlay: "#fffcf3",
					ink: "#2b1f0e",
					ink2: "#5a4524",
					ink3: "#735c3a",
					caption: "#85704e",
					accent: "#1f6f5c",
					accentInk: "#fdf8ea",
					accentHover: "#185a4b",
					link: "#1b6b58",
					action: "#1f6f5c",
					actionHover: "#185a4b",
					code: "#f3e7c8",
					tint: "31, 111, 92",
					success: "#2c723b",
					warn: "#975b00",
					error: "#b8322a"
				},
				dark: {
					base: "#16120b",
					layer1: "#1e180e",
					layer2: "#262012",
					layer3: "#2f2716",
					overlay: "#272013",
					ink: "#f6ead0",
					ink2: "#d8c59c",
					ink3: "#b5a37c",
					caption: "#9a8a68",
					accent: "#e0a526",
					accentInk: "#1a1408",
					accentHover: "#ecb648",
					link: "#f0bc4a",
					action: "#1f6f5c",
					actionHover: "#185a4b",
					code: "#201a0f",
					tint: "224, 165, 38",
					success: "#7fc28a",
					warn: "#f0b53e",
					error: "#ec6a5c"
				}
			}
		];
		const PALETTE_IDS = PALETTES.map((p) => p.id);
		/** DSH theme id for one palette + scheme, e.g. `viet-sonmai-dark`. */
		function themeId(palette, scheme) {
			return `viet-${palette}-${scheme}`;
		}
		/** Inverse of themeId; undefined for themes this plugin does not own. */
		function parseThemeId(id) {
			const match = /^viet-(sonmai|halong|hoian)-(light|dark)$/.exec(id);
			return match === null ? void 0 : {
				palette: match[1],
				scheme: match[2]
			};
		}
		//#endregion
		//#region src/client/backdrop/collections.ts
		const COLLECTIONS = [
			{
				id: "halong",
				label: "Vịnh Hạ Long · Lan Hạ",
				categories: [
					"Limestone islands in Ha Long Bay",
					"Panoramics in Ha Long Bay",
					"Sunsets of Ha Long Bay",
					"Lan Ha Bay"
				]
			},
			{
				id: "ruongbacthang",
				label: "Ruộng bậc thang",
				categories: [
					"Rice terraces in Vietnam",
					"Rice terraces in Sa Pa",
					"Mu Cang Chai District"
				]
			},
			{
				id: "nuida",
				label: "Tam Cốc · núi đá vôi",
				categories: ["Tam Coc", "Rock formations in Vietnam"]
			},
			{
				id: "hangdong",
				label: "Phong Nha · hang động",
				categories: ["Phong Nha-Ke Bang National Park", "Caves in Vietnam"]
			},
			{
				id: "songho",
				label: "Sông hồ · thác nước",
				categories: [
					"Lakes of Vietnam",
					"Ba Be Lake",
					"Waterfalls in Vietnam",
					"Hoan Kiem Lake"
				]
			},
			{
				id: "langque",
				label: "Làng quê",
				categories: ["Countryside in Vietnam", "Landscapes of Vietnam"]
			},
			{
				id: "bien",
				label: "Biển Việt Nam",
				categories: ["Beaches of Vietnam"]
			},
			{
				id: "tuyenchon",
				label: "Ảnh tuyển chọn Commons",
				categories: [
					"Featured pictures of Vietnam",
					"Quality images of Vietnam",
					"Valued images of Vietnam"
				]
			}
		];
		const DEFAULT_COLLECTIONS = [
			"halong",
			"ruongbacthang",
			"nuida",
			"hangdong",
			"songho",
			"tuyenchon"
		];
		//#endregion
		//#region src/client/backdrop/glass.ts
		const SCRIM_ALPHA = .35;
		const MAX_COVERAGE = .92;
		/** Combined photo coverage of the base surface for a visibility of 0–100. */
		function baseCoverage(visibility) {
			const v = Math.min(100, Math.max(0, visibility)) / 100;
			return MAX_COVERAGE - .27 * v;
		}
		/** Surface alpha giving `coverage` once stacked on the scrim. */
		function surfaceAlpha(coverage) {
			return 1 - (1 - coverage) / .65;
		}
		/** Neutral seeds for DSH's own light/dark themes (approximate base colours). */
		const NEUTRAL_SEEDS = {
			light: {
				base: "#ffffff",
				layer1: "#ffffff",
				layer2: "#f6f7f9",
				layer3: "#eef0f3"
			},
			dark: {
				base: "#16181c",
				layer1: "#1c1f24",
				layer2: "#22252b",
				layer3: "#292d34"
			}
		};
		const alpha = (color, a) => `color-mix(in srgb, ${color} ${Math.round(a * 100)}%, transparent)`;
		/** Override values for one scheme: translucent page and sidebar. */
		function glassTokens(seed, visibility) {
			const base = surfaceAlpha(baseCoverage(visibility));
			const panel = Math.min(1, base + .15);
			return {
				"--dsw-alias-bg-base": alpha(seed.base, base),
				"--dsw-specific-sidebar-fill": alpha(seed.layer2, panel)
			};
		}
		//#endregion
		//#region src/client/backdrop/pool.ts
		function shuffle(items, random = Math.random) {
			const out = [...items];
			for (let i = out.length - 1; i > 0; i--) {
				const j = Math.floor(random() * (i + 1));
				[out[i], out[j]] = [out[j], out[i]];
			}
			return out;
		}
		var Pool = class {
			random;
			order = [];
			cursor = 0;
			last;
			constructor(random = Math.random) {
				this.random = random;
			}
			/** Replace the candidates (dedupe by URL) and start a new cycle. */
			reset(candidates) {
				const unique = [...new Map(candidates.map((c) => [c.url, c])).values()];
				this.order = shuffle(unique, this.random);
				this.cursor = 0;
				this.avoidImmediateRepeat();
			}
			get size() {
				return this.order.length;
			}
			next() {
				if (this.order.length === 0) return void 0;
				if (this.cursor >= this.order.length) {
					this.order = shuffle(this.order, this.random);
					this.cursor = 0;
					this.avoidImmediateRepeat();
				}
				this.last = this.order[this.cursor++];
				return this.last;
			}
			avoidImmediateRepeat() {
				if (this.order.length > 1 && this.order[0].url === this.last?.url) [this.order[0], this.order[1]] = [this.order[1], this.order[0]];
			}
		};
		//#endregion
		//#region src/client/backdrop/slideshow.ts
		/**
		* The backdrop element: a fixed layer behind the DSH app holding two photo
		* layers that crossfade, a scrim, and a palette gradient underneath for when
		* no photo is available. Owns no policy — the controller tells it what to show.
		*/
		const STYLE$1 = `
#dsh-vietnam-backdrop{position:fixed;inset:0;z-index:-1;pointer-events:none;overflow:hidden;background:var(--dshvn-gradient)}
#dsh-vietnam-backdrop .dshvn-photo{position:absolute;inset:-24px;background-size:cover;background-position:center;opacity:0;transition:opacity 1.2s ease;filter:blur(var(--dshvn-blur,0px))}
#dsh-vietnam-backdrop .dshvn-photo.dshvn-on{opacity:1}
#dsh-vietnam-backdrop.dshvn-kb .dshvn-photo.dshvn-on{animation:dshvn-kenburns var(--dshvn-kb-duration,300s) ease-in-out forwards}
#dsh-vietnam-backdrop .dshvn-scrim{position:absolute;inset:0;background:var(--dshvn-scrim)}
@keyframes dshvn-kenburns{from{transform:scale(1) translate3d(0,0,0)}to{transform:scale(1.08) translate3d(-1.5%,-1%,0)}}
/* The glass layer makes --dsw-alias-bg-base translucent so the page shows the
   photo, but DSH also paints overlays, menus, sticky headers and docks with that
   token as a solid mask. Re-declare it solid inside them, via semantic hooks
   (ARIA roles, data attributes) rather than hashed class names. Re-declaring a
   variable only changes elements that actually paint with it. */
[role=dialog],[role=presentation],[role=menu],[role=listbox],[aria-expanded],[data-disclosure-row],[data-queue-dock]{--dsw-alias-bg-base:var(--dshvn-solid-base)}
@media (prefers-reduced-motion:reduce){#dsh-vietnam-backdrop .dshvn-photo{transition:none}#dsh-vietnam-backdrop.dshvn-kb .dshvn-photo.dshvn-on{animation:none}}
`;
		var Slideshow = class {
			root;
			style;
			layers;
			front = 0;
			objectUrl;
			disposed = false;
			constructor() {
				this.style = document.createElement("style");
				this.style.dataset.plugin = "dsh-vietnam";
				this.style.textContent = STYLE$1;
				this.root = document.createElement("div");
				this.root.id = "dsh-vietnam-backdrop";
				this.root.setAttribute("aria-hidden", "true");
				const layer = () => Object.assign(document.createElement("div"), { className: "dshvn-photo" });
				this.layers = [layer(), layer()];
				const scrim = Object.assign(document.createElement("div"), { className: "dshvn-scrim" });
				this.root.append(...this.layers, scrim);
				document.head.append(this.style);
				document.body.prepend(this.root);
			}
			setLook(look) {
				const s = this.root.style;
				s.setProperty("--dshvn-gradient", look.gradient);
				s.setProperty("--dshvn-scrim", `color-mix(in srgb, ${look.base} ${Math.round(SCRIM_ALPHA * 100)}%, transparent)`);
				s.setProperty("--dshvn-blur", `${look.blur}px`);
				s.setProperty("--dshvn-kb-duration", `${look.seconds}s`);
				this.root.classList.toggle("dshvn-kb", look.kenBurns);
			}
			/** Solid base colour of the active scheme, used to re-solidify masks (see STYLE). */
			setSolidBase(color) {
				document.documentElement.style.setProperty("--dshvn-solid-base", color);
			}
			/**
			* Crossfade to an image: a blob (fetched, cacheable) or a URL loaded
			* directly. Resolves false when the slideshow was disposed meanwhile.
			*/
			async show(source) {
				const owned = typeof source !== "string";
				const url = owned ? URL.createObjectURL(source) : source;
				const img = new Image();
				img.src = url;
				try {
					await img.decode();
				} catch {
					if (owned) URL.revokeObjectURL(url);
					throw new Error("image decode failed");
				}
				if (this.disposed) {
					if (owned) URL.revokeObjectURL(url);
					return false;
				}
				const next = this.layers[1 - this.front];
				const prev = this.layers[this.front];
				next.style.backgroundImage = `url("${url.replace(/["\\\n]/g, encodeURIComponent)}")`;
				next.classList.remove("dshvn-on");
				next.offsetWidth;
				next.classList.add("dshvn-on");
				prev.classList.remove("dshvn-on");
				const stale = this.objectUrl;
				this.objectUrl = owned ? url : void 0;
				this.front = 1 - this.front;
				if (stale !== void 0) setTimeout(() => URL.revokeObjectURL(stale), 1500);
				return true;
			}
			/** Drop the photo, leaving the gradient. */
			clear() {
				for (const layer of this.layers) layer.classList.remove("dshvn-on");
			}
			dispose() {
				this.disposed = true;
				document.documentElement.style.removeProperty("--dshvn-solid-base");
				this.root.remove();
				this.style.remove();
				if (this.objectUrl !== void 0) URL.revokeObjectURL(this.objectUrl);
			}
		};
		//#endregion
		//#region src/client/backdrop/wikimedia.ts
		const API_USER_AGENT = "dsh-vietnam/0.1 (https://github.com/DucLong06/dsh-vietnam)";
		const ENDPOINT = "https://commons.wikimedia.org/w/api.php";
		const MIN_WIDTH = 1920;
		const MIN_ASPECT = 1.3;
		/** Licences that allow display with attribution. */
		const LICENSE = /^(cc0|public domain|pd\b|cc by(-sa)? [0-9.]+)/i;
		/**
		* Non-photo files that landscape categories still contain (maps, banners…).
		* Unicode-aware word boundaries: `\b` is ASCII-only and misses "bản đồ".
		*/
		const NOT_A_VIEW = /(?<![\p{L}\p{N}])(maps?|bản đồ|ban do|karte|carte|mapa|plan|diagram|logo|banner|poster|chart|sơ đồ|so do)(?![\p{L}\p{N}])/iu;
		function isHttps(url) {
			return /^https:\/\//i.test(url);
		}
		/** Commons metadata values are HTML fragments (links, spans); keep the text. */
		function plainText(html) {
			if (html === void 0) return "";
			return html.replace(/<[^>]*>/g, " ").replace(/&amp;/g, "&").replace(/&quot;/g, "\"").replace(/&#0?39;/g, "'").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
		}
		/** Accept a Commons file only when it is a wide, large, attributable JPEG. */
		function toCandidate(page) {
			const info = page.imageinfo?.[0];
			if (info === void 0 || info.mime !== "image/jpeg") return void 0;
			const width = info.width ?? 0;
			const height = info.height ?? 0;
			if (width < MIN_WIDTH || height === 0 || width / height < MIN_ASPECT) return void 0;
			const meta = info.extmetadata ?? {};
			const license = plainText(meta.LicenseShortName?.value);
			if (!LICENSE.test(license)) return void 0;
			const url = info.thumburl ?? info.url;
			if (url === void 0 || !isHttps(url) || info.descriptionurl === void 0 || !isHttps(info.descriptionurl)) return void 0;
			const title = plainText(meta.ObjectName?.value) || (page.title ?? "").replace(/^File:/, "").replace(/\.[a-z]+$/i, "");
			if (NOT_A_VIEW.test(title) || NOT_A_VIEW.test(page.title ?? "")) return void 0;
			return {
				url,
				title,
				author: plainText(meta.Artist?.value) || "Wikimedia Commons",
				license,
				pageUrl: info.descriptionurl
			};
		}
		/** Thumbnail width matched to the screen, capped at 2560. */
		function targetWidth() {
			const screenWidth = typeof screen === "object" ? screen.width : 1920;
			return Math.min(2560, Math.max(1280, Math.round(screenWidth * (typeof devicePixelRatio === "number" ? devicePixelRatio : 1) / 320) * 320));
		}
		async function fetchCategory(category, signal) {
			const params = new URLSearchParams({
				action: "query",
				generator: "categorymembers",
				gcmtitle: `Category:${category}`,
				gcmtype: "file",
				gcmlimit: "100",
				prop: "imageinfo",
				iiprop: "url|size|mime|extmetadata",
				iiextmetadatafilter: "Artist|LicenseShortName|ObjectName",
				iiurlwidth: String(targetWidth()),
				format: "json",
				origin: "*"
			});
			const response = await fetch(`${ENDPOINT}?${params}`, {
				headers: { "Api-User-Agent": API_USER_AGENT },
				signal
			});
			if (!response.ok) throw new Error(`Wikimedia ${response.status}`);
			const body = await response.json();
			return Object.values(body.query?.pages ?? {}).flatMap((page) => toCandidate(page) ?? []);
		}
		//#endregion
		//#region src/client/backdrop/store.ts
		/**
		* Caches for the backdrop: candidate lists per category in localStorage
		* (24h, so Commons is queried at most daily per category) and recently shown
		* images in the Cache API (bounded LRU) so the backdrop survives offline.
		* Every storage access is best-effort — blocked storage just means no cache.
		*/
		const LIST_PREFIX = "dsh-vietnam.bg.list.v2.";
		const LIST_TTL_MS = 864e5;
		const IMAGE_CACHE = "dsh-vietnam-bg";
		const IMAGE_CACHE_LIMIT = 30;
		const SHOWN_KEY = "dsh-vietnam.bg.shown";
		function readList(category) {
			try {
				const raw = localStorage.getItem(LIST_PREFIX + category);
				return raw === null ? void 0 : JSON.parse(raw);
			} catch {
				return;
			}
		}
		/** Candidates for one category: fresh cache, else network, else stale cache. */
		async function candidatesFor(category, signal) {
			const cached = readList(category);
			if (cached !== void 0 && Date.now() - cached.at < LIST_TTL_MS) return cached.candidates;
			try {
				const candidates = await fetchCategory(category, signal);
				try {
					localStorage.setItem(LIST_PREFIX + category, JSON.stringify({
						at: Date.now(),
						candidates
					}));
				} catch {}
				return candidates;
			} catch (error) {
				if (cached !== void 0) return cached.candidates;
				throw error;
			}
		}
		async function openCache() {
			try {
				return typeof caches === "object" ? await caches.open(IMAGE_CACHE) : void 0;
			} catch {
				return;
			}
		}
		/**
		* Load an image as a blob: network first (and remember it), cache on failure.
		* Returns undefined when neither source has it.
		*/
		async function loadImage(candidate, signal) {
			const cache = await openCache();
			try {
				const response = await fetch(candidate.url, {
					mode: "cors",
					signal
				});
				if (!response.ok) throw new Error(String(response.status));
				const blob = await response.blob();
				if (cache !== void 0) remember(cache, candidate, blob);
				return blob;
			} catch {
				if (signal?.aborted === true) return void 0;
				const hit = await cache?.match(candidate.url);
				return hit === void 0 ? void 0 : await hit.blob();
			}
		}
		/** Images cached for offline use (with their credits), most recent last. */
		function cachedCandidates() {
			try {
				const raw = JSON.parse(localStorage.getItem(SHOWN_KEY) ?? "[]");
				return Array.isArray(raw) ? raw.filter((c) => typeof c?.url === "string" && isHttps(c.url) && typeof c.pageUrl === "string") : [];
			} catch {
				return [];
			}
		}
		async function remember(cache, candidate, blob) {
			try {
				await cache.put(candidate.url, new Response(blob, { headers: { "content-type": blob.type } }));
				const shown = [...cachedCandidates().filter((c) => c.url !== candidate.url), candidate];
				for (const evicted of shown.splice(0, Math.max(0, shown.length - IMAGE_CACHE_LIMIT))) await cache.delete(evicted.url);
				localStorage.setItem(SHOWN_KEY, JSON.stringify(shown));
			} catch {}
		}
		//#endregion
		//#region src/client/backdrop/index.ts
		/** Seeds of the active theme in both schemes: a Viet palette or DSH's neutrals. */
		function activeSeeds(snapshot) {
			const parsed = parseThemeId(snapshot.active.id);
			const palette = parsed === void 0 ? void 0 : PALETTES.find((p) => p.id === parsed.palette);
			return palette === void 0 ? {
				key: "neutral",
				light: NEUTRAL_SEEDS.light,
				dark: NEUTRAL_SEEDS.dark,
				scheme: snapshot.active.colorScheme
			} : {
				key: palette.id,
				light: palette.light,
				dark: palette.dark,
				scheme: snapshot.active.colorScheme
			};
		}
		function gradientOf(seed) {
			return `radial-gradient(120% 90% at 85% 10%, color-mix(in srgb, ${seed.accent ?? seed.layer3} 28%, transparent), transparent 60%), linear-gradient(160deg, ${seed.layer3}, ${seed.base})`;
		}
		/**
		* Custom URLs as candidates credited to their host. They load directly as
		* images (no fetch), so hosts without CORS headers work; they are therefore
		* not cached for offline use.
		*/
		function customCandidates(urls) {
			return urls.flatMap((url) => {
				try {
					const host = new URL(url).hostname;
					return [{
						url,
						title: decodeURIComponent(url.split("/").pop() ?? "") || host,
						author: host,
						license: "—",
						pageUrl: url,
						direct: true
					}];
				} catch {
					return [];
				}
			});
		}
		var BackdropController = class {
			ctx;
			settings;
			slideshow;
			pool = new Pool();
			timer;
			abort;
			disposeGlass;
			glassKey = "";
			sourcesKey = "";
			view = {
				status: { kind: "off" },
				current: void 0
			};
			listeners = /* @__PURE__ */ new Set();
			/** Bumped by every reload/teardown; in-flight work from older generations is dropped. */
			generation = 0;
			advancingGeneration;
			offline = false;
			intervalMinutes = 0;
			constructor(ctx, settings) {
				this.ctx = ctx;
				this.settings = settings;
			}
			getView = () => this.view;
			subscribe = (listener) => {
				this.listeners.add(listener);
				return () => {
					this.listeners.delete(listener);
				};
			};
			/** Start reacting to settings, theme and tab visibility; returns the disposer. */
			start() {
				const offSettings = this.settings.subscribe(() => this.sync());
				let lookPending = false;
				const offTheme = this.ctx.on("theme/change", () => {
					if (lookPending) return;
					lookPending = true;
					queueMicrotask(() => {
						lookPending = false;
						this.syncLook();
					});
				});
				const onVisibility = () => {
					if (document.hidden) this.stopTimer();
					else if (this.slideshow !== void 0) this.schedule();
				};
				document.addEventListener("visibilitychange", onVisibility);
				const onOnline = () => {
					if (this.offline && this.slideshow !== void 0) this.reload();
				};
				window.addEventListener("online", onOnline);
				this.sync();
				return () => {
					offSettings();
					offTheme();
					document.removeEventListener("visibilitychange", onVisibility);
					window.removeEventListener("online", onOnline);
					this.teardown();
				};
			}
			/** Skip to the next photo now. */
			next() {
				this.advance();
			}
			sync() {
				const s = this.settings.get();
				if (!s.enabled) {
					this.teardown();
					return;
				}
				this.slideshow ??= new Slideshow();
				this.syncLook();
				const sourcesKey = JSON.stringify([s.collections, s.customUrls]);
				if (sourcesKey !== this.sourcesKey) {
					this.sourcesKey = sourcesKey;
					this.intervalMinutes = s.intervalMinutes;
					this.reload();
				} else if (s.intervalMinutes !== this.intervalMinutes) {
					this.intervalMinutes = s.intervalMinutes;
					this.schedule();
				}
			}
			/** Re-derive gradient, scrim and glass from the active theme + settings. */
			syncLook() {
				if (this.slideshow === void 0) return;
				const s = this.settings.get();
				const seeds = activeSeeds(this.ctx.theme.getTheme());
				const seed = seeds[seeds.scheme];
				this.slideshow.setLook({
					gradient: gradientOf(seed),
					base: seed.base,
					blur: s.blur,
					kenBurns: s.kenBurns,
					seconds: s.intervalMinutes * 60
				});
				this.slideshow.setSolidBase(seed.base);
				const glassKey = `${seeds.key}:${s.visibility}`;
				if (glassKey === this.glassKey) return;
				this.glassKey = glassKey;
				const light = glassTokens(seeds.light, s.visibility);
				const dark = glassTokens(seeds.dark, s.visibility);
				const tokens = Object.fromEntries(Object.keys(light).map((name) => [name, {
					light: light[name],
					dark: dark[name]
				}]));
				this.disposeGlass?.();
				this.disposeGlass = this.ctx.theme.overrideTokens("dsh-vietnam:glass", tokens);
			}
			/** Rebuild the rotation from the selected sources, then show the first photo. */
			async reload() {
				const generation = ++this.generation;
				this.abort?.abort();
				const abort = this.abort = new AbortController();
				const s = this.settings.get();
				this.offline = false;
				this.setView({ status: { kind: "loading" } });
				const categories = COLLECTIONS.filter((c) => s.collections.includes(c.id)).flatMap((c) => c.categories);
				const results = await Promise.allSettled(categories.map((c) => candidatesFor(c, abort.signal)));
				if (generation !== this.generation) return;
				const online = [...results.flatMap((r) => r.status === "fulfilled" ? r.value : []), ...customCandidates(s.customUrls)];
				if (online.length === 0 && results.length > 0 && results.every((r) => r.status === "rejected")) this.goOffline();
				else this.pool.reset(online);
				if (this.pool.size === 0) {
					this.slideshow?.clear();
					this.setView({
						status: { kind: "empty" },
						current: void 0
					});
					return;
				}
				if (!this.offline) this.setView({ status: {
					kind: "ready",
					count: this.pool.size
				} });
				await this.advance(generation);
			}
			/** Rotate through the images cached for offline use instead. */
			goOffline() {
				this.offline = true;
				this.pool.reset(cachedCandidates());
				this.setView({ status: this.pool.size === 0 ? { kind: "empty" } : {
					kind: "offline",
					count: this.pool.size
				} });
			}
			/**
			* Show the next loadable photo (tries a few), then schedule the following
			* one. A reload or teardown bumps the generation: an advance from an older
			* generation stops at its next await and touches nothing.
			*/
			async advance(generation = this.generation) {
				if (this.advancingGeneration === generation || this.slideshow === void 0) return;
				this.advancingGeneration = generation;
				this.stopTimer();
				const signal = this.abort?.signal;
				let shown = false;
				try {
					for (let attempt = 0; attempt < 4 && !shown; attempt++) {
						const candidate = this.pool.next();
						if (candidate === void 0) break;
						const source = candidate.direct === true ? candidate.url : await loadImage(candidate, signal);
						if (generation !== this.generation) return;
						if (source === void 0 || this.slideshow === void 0) continue;
						try {
							shown = await this.slideshow.show(source);
						} catch {
							continue;
						}
						if (generation !== this.generation) return;
						if (shown) this.setView({ current: candidate });
					}
					if (!shown && !this.offline && cachedCandidates().length > 0) {
						this.goOffline();
						this.advancingGeneration = void 0;
						await this.advance(generation);
						return;
					}
				} finally {
					if (this.advancingGeneration === generation) this.advancingGeneration = void 0;
					if (generation === this.generation) this.schedule();
				}
			}
			schedule() {
				this.stopTimer();
				if (this.slideshow === void 0 || this.pool.size === 0 || document.hidden) return;
				this.timer = setTimeout(() => void this.advance(), this.settings.get().intervalMinutes * 6e4);
			}
			stopTimer() {
				if (this.timer !== void 0) clearTimeout(this.timer);
				this.timer = void 0;
			}
			teardown() {
				this.generation++;
				this.stopTimer();
				this.abort?.abort();
				this.abort = void 0;
				this.disposeGlass?.();
				this.disposeGlass = void 0;
				this.glassKey = "";
				this.sourcesKey = "";
				this.offline = false;
				this.slideshow?.dispose();
				this.slideshow = void 0;
				this.setView({
					status: { kind: "off" },
					current: void 0
				});
			}
			setView(patch) {
				this.view = {
					...this.view,
					...patch
				};
				for (const listener of this.listeners) listener();
			}
		};
		//#endregion
		//#region src/client/backdrop/credit.ts
		const STYLE = `
.dshvn-credit{position:fixed;right:10px;bottom:6px;z-index:40;max-width:min(46vw,520px);padding:2px 10px;border-radius:999px;
  font:11px/18px system-ui,sans-serif;color:var(--dsw-alias-label-secondary);text-decoration:none;
  background:color-mix(in srgb,var(--dsw-alias-bg-layer-1) 82%,transparent);backdrop-filter:blur(6px);
  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;opacity:.6;transition:opacity .2s}
.dshvn-credit:hover,.dshvn-credit:focus-visible{opacity:1;color:var(--dsw-alias-label-primary)}
`;
		function mountCredit(controller, t, onLocale) {
			const style = Object.assign(document.createElement("style"), { textContent: STYLE });
			style.dataset.plugin = "dsh-vietnam";
			const link = document.createElement("a");
			link.className = "dshvn-credit";
			link.target = "_blank";
			link.rel = "noopener noreferrer";
			document.head.append(style);
			document.body.append(link);
			const render = () => {
				const { current, status } = controller.getView();
				const visible = current !== void 0 && status.kind !== "off";
				link.hidden = !visible;
				if (!visible) return;
				if (/^https?:\/\//i.test(current.pageUrl)) link.href = current.pageUrl;
				else link.removeAttribute("href");
				link.textContent = t("credit.label", {
					title: current.title,
					author: current.author,
					license: current.license
				});
				link.title = `${link.textContent}\n${t("credit.open")}`;
			};
			const offView = controller.subscribe(render);
			const offLocale = onLocale(render);
			render();
			return () => {
				offView();
				offLocale();
				link.remove();
				style.remove();
			};
		}
		//#endregion
		//#region src/client/locales/vi/index.ts
		/** Vietnamese dictionaries keyed by the DSH locale namespace they translate. */
		const VI_DICTIONARIES = {
			"agent-team": {
				blocked: "Bị chặn bởi phụ thuộc",
				blockedBy: "Bị chặn bởi",
				current: "Cuộc trò chuyện hiện tại",
				empty: "Chưa có tác vụ chung nào. Hãy tạo qua cuộc trò chuyện.",
				failure: "Bản ghi nhóm đã lưu không hợp lệ: {message}",
				loading: "Đang tải nhóm…",
				"memberStatus.failed": "Thất bại",
				"memberStatus.inactive": "Không hoạt động",
				"memberStatus.provisioning": "Đang khởi tạo",
				"memberStatus.running": "Đang chạy",
				model: "Mô hình",
				open: "Mở cuộc trò chuyện của thành viên",
				owner: "Người phụ trách",
				ready: "Sẵn sàng",
				roster: "Thành viên",
				"status.completed": "Hoàn tất",
				"status.in_progress": "Đang thực hiện",
				"status.pending": "Đang chờ",
				"task.collapse": "Thu gọn",
				"task.expand": "Xem thêm",
				tasks: "Tác vụ chung",
				trigger: "Nhóm agent",
				unavailable: "Nhóm không khả dụng",
				unowned: "Chưa có người phụ trách",
				writeScopes: "Phạm vi ghi"
			},
			"approval": {
				allowOnce: "Cho phép một lần",
				"detail.aria": "Chi tiết phê duyệt",
				escalation: "Công cụ {toolName} yêu cầu chạy với đặc quyền",
				reject: "Từ chối",
				waiting: "Đang chờ phê duyệt"
			},
			"chat": {
				"chat.deepDiving": "Đang đào sâu",
				"chat.deepDivingFor": "Đang đào sâu {duration} ···",
				"chat.loadError": "Không tải được lịch sử: {message} ({code})",
				"chat.loadOlder": "Tải tin nhắn cũ hơn",
				"chat.loadingHistory": "Đang tải lịch sử…",
				"chat.toBottom": "Về cuối",
				"chat.turnNavigation.jump": "Đến lượt {turn}",
				"chat.turnNavigation.jumpLoad": "Tải và đến lượt {turn}",
				"chat.turnNavigation.label": "Điều hướng lượt",
				"chat.turnNavigation.turn": "Lượt {turn}",
				"clock.md": "{d}/{m}",
				"clock.ymd": "{d}/{m}/{y}",
				"command.done": "Hoàn tất",
				"command.failed": "Lệnh thất bại",
				"command.running": "Đang chạy…",
				"command.title": "Lệnh",
				"duration.compactMinutes": "{minutes} phút {seconds} giây",
				"duration.compactSeconds": "{seconds} giây",
				"duration.hourUnit": " giờ ",
				"duration.milliseconds": "{milliseconds} ms",
				"duration.minuteUnit": " phút ",
				"duration.secondUnit": " giây",
				"fileOpen.title": "Không mở được tệp",
				"fileOpen.unknown": "Không mở được tệp này",
				"image.close": "Đóng xem trước ảnh",
				"image.dialog": "Xem trước ảnh",
				"image.failed": "Không xem trước được ảnh",
				"image.loading": "Đang tải ảnh…",
				"image.open": "Xem ảnh đầy đủ",
				"json.truncated": "… đã cắt bớt, tổng {total} ký tự",
				"message.accountStopped": "Tác vụ đã dừng",
				"message.branch": "Rẽ nhánh sang cuộc trò chuyện mới",
				"message.branchUnavailable": "Chỉ dùng được ở tin nhắn cuối của lượt đã hoàn tất",
				"message.compaction": "Đã nén ngữ cảnh",
				"message.compaction.commandTitle": "compact",
				"message.compaction.completed": "Đã nén {items} mục lịch sử (~{tokens} token)",
				"message.compaction.expand": "Xem tóm tắt nén ngữ cảnh",
				"message.compaction.running": "Đang nén ngữ cảnh…",
				"message.compaction.unavailable": "Không có tóm tắt nén ngữ cảnh",
				"message.context.catalog.more": "… thêm {count} mục",
				"message.context.catalog.replaced": "Danh mục thay thế",
				"message.context.instructions.added": "đã thêm",
				"message.context.instructions.loaded": "đã tải",
				"message.context.instructions.removed": "đã gỡ",
				"message.context.instructions.updated": "đã cập nhật",
				"message.context.recall.counts": "giữ {retained} · bỏ {omitted}",
				"message.context.recall.truncated": "đã cắt bớt",
				"message.context.relay.from": "Từ phiên {session}",
				"message.context.snapshot.supersedes": "Thay thế các bản chụp trước",
				"message.contextInjection": "Chèn ngữ cảnh",
				"message.contextRecall": "Gợi lại phiên",
				"message.extraBlock": "Khối nội dung bổ sung",
				"message.failure.accountSignInRequired": "Hãy đăng nhập DeepSeek và đảm bảo đích của yêu cầu hỗ trợ xác thực bằng tài khoản.",
				"message.failure.accountSignedOut": "Đã dừng vì bạn đã đăng xuất khỏi DeepSeek.",
				"message.failure.auth": "API key không hợp lệ",
				"message.failure.quota": "Đã hết hạn mức yêu cầu.",
				"message.maxTokens": "Đã chạm giới hạn token đầu ra",
				"message.maxTokens.hint": "Câu trả lời bị cắt ngang; phần đầu ra trước đó vẫn được giữ trong cuộc trò chuyện. Gửi \"tiếp tục\" để mô hình làm tiếp.",
				"message.referenceSeparator": ", ",
				"message.referenceSummary": "Phiên được tham chiếu · {labels}",
				"message.retry.active": "Đang thử lại yêu cầu mô hình",
				"message.retry.cancelled": "Đã hủy thử lại yêu cầu mô hình",
				"message.retry.delay": "Thời gian chờ thử lại: ",
				"message.retry.failure": "Lý do lỗi: ",
				"message.retry.scheduled": "Đang chờ thử lại yêu cầu mô hình",
				"message.retry.started": "Đã thử lại yêu cầu mô hình",
				"message.retry.status": "{label} ({retry}/{maximum}) · {seconds} giây",
				"message.stepProcess.code": "Đang chạy mã",
				"message.stepProcess.comma": ", ",
				"message.stepProcess.commands": "Đang chạy lệnh",
				"message.stepProcess.done.code": "Đã chạy mã",
				"message.stepProcess.done.commands": "Đã chạy lệnh",
				"message.stepProcess.done.edit": "Đã sửa tệp",
				"message.stepProcess.done.plan": "Đã cập nhật kế hoạch",
				"message.stepProcess.done.questions": "Đã đặt câu hỏi",
				"message.stepProcess.done.read": "Đã đọc tệp",
				"message.stepProcess.done.readImage": "Đã đọc ảnh",
				"message.stepProcess.done.search": "Đã tìm trong mã",
				"message.stepProcess.done.subagents": "Đã điều phối subagent",
				"message.stepProcess.done.thinking": "Đã phân tích xong",
				"message.stepProcess.done.tools": "Đã gọi công cụ",
				"message.stepProcess.done.webFetch": "Đã truy cập trang web",
				"message.stepProcess.done.webSearch": "Đã tìm kiếm web",
				"message.stepProcess.done.write": "Đã ghi tệp",
				"message.stepProcess.edit": "Đang sửa tệp",
				"message.stepProcess.joinTwo": "{first} và {second}",
				"message.stepProcess.more": "{title}, v.v.",
				"message.stepProcess.plan": "Đang cập nhật kế hoạch",
				"message.stepProcess.prepare.code": "Chuẩn bị chạy mã",
				"message.stepProcess.prepare.commands": "Chuẩn bị chạy lệnh",
				"message.stepProcess.prepare.edit": "Chuẩn bị sửa tệp",
				"message.stepProcess.prepare.plan": "Chuẩn bị cập nhật kế hoạch",
				"message.stepProcess.prepare.questions": "Đang soạn câu hỏi",
				"message.stepProcess.prepare.read": "Chuẩn bị đọc tệp",
				"message.stepProcess.prepare.readImage": "Chuẩn bị đọc ảnh",
				"message.stepProcess.prepare.search": "Chuẩn bị tìm trong mã",
				"message.stepProcess.prepare.subagents": "Chuẩn bị điều phối subagent",
				"message.stepProcess.prepare.tools": "Chuẩn bị gọi công cụ",
				"message.stepProcess.prepare.webFetch": "Chuẩn bị truy cập trang web",
				"message.stepProcess.prepare.webSearch": "Chuẩn bị tìm kiếm web",
				"message.stepProcess.prepare.write": "Chuẩn bị ghi tệp",
				"message.stepProcess.questions": "Đang chờ bạn thao tác",
				"message.stepProcess.read": "Đang đọc tệp",
				"message.stepProcess.readImage": "Đang đọc ảnh",
				"message.stepProcess.search": "Đang tìm trong mã",
				"message.stepProcess.sharedPrefix": "",
				"message.stepProcess.subagents": "Đang điều phối subagent",
				"message.stepProcess.thinking": "Đang phân tích yêu cầu",
				"message.stepProcess.tools": "Đang gọi công cụ",
				"message.stepProcess.webFetch": "Đang truy cập trang web",
				"message.stepProcess.webSearch": "Đang tìm kiếm web",
				"message.stepProcess.write": "Đang ghi tệp",
				"message.stopped": "Đã dừng",
				"message.systemPrompt": "Prompt hệ thống",
				"message.systemPromptUpdate": "Cập nhật prompt hệ thống",
				"message.think": "Suy nghĩ",
				"message.tokensPerSecond": "{tps} tok/s",
				"message.toolAdded": "Đã thêm công cụ: {name}",
				"message.toolRemoved": "Đã gỡ công cụ: {name}",
				"message.toolsAdded": "Đã thêm: {names}",
				"message.toolsAddedCount": "Đã thêm {count}",
				"message.toolsChanged": "Thêm {added}, gỡ {removed}",
				"message.toolsRemoved": "Đã gỡ: {names}",
				"message.toolsRemovedCount": "Đã gỡ {count}",
				"message.toolsUpdated": "Đã cập nhật công cụ",
				"message.trigger.agent": "Đã nhận tin nhắn tác vụ",
				"message.trigger.explanation": "Thông báo này đã kích hoạt câu trả lời này.",
				"message.trigger.github": "Đã nhận sự kiện GitHub",
				"message.trigger.goal": "Tiếp tục mục tiêu",
				"message.trigger.job": "Tác vụ nền đã cập nhật",
				"message.trigger.plugin": "Trạng thái plugin đã cập nhật",
				"message.trigger.request": "Đã nhận yêu cầu thực thi",
				"message.trigger.schedule": "Tác vụ tự động",
				"message.trigger.subagent": "Trạng thái tác vụ con đã cập nhật",
				"message.trigger.team": "Đã nhận tin nhắn nhóm",
				"message.trigger.webhook": "Đã nhận sự kiện bên ngoài",
				"message.turnError": "Lượt này thất bại",
				"message.turnProcess.failed": "Thất bại",
				"message.turnProcess.messages.one": "{count} tin nhắn",
				"message.turnProcess.messages.other": "{count} tin nhắn",
				"message.turnProcess.separator": " · ",
				"message.turnProcess.subagents.one": "{count} subagent",
				"message.turnProcess.subagents.other": "{count} subagent",
				"message.turnProcess.thoughtForAWhile": "Đã suy nghĩ một lúc",
				"message.turnProcess.took": "Hoàn tất sau ",
				"message.turnProcess.toolCalls.one": "{count} lệnh gọi công cụ",
				"message.turnProcess.toolCalls.other": "{count} lệnh gọi công cụ",
				"message.turnProcess.worked": "Hoàn tất",
				"message.turnUsage.cacheHit": "Trúng cache",
				"message.turnUsage.cacheRead": "Đầu vào từ cache",
				"message.turnUsage.cacheWrite": "Ghi cache",
				"message.turnUsage.consumed": "Đã dùng {total}",
				"message.turnUsage.count": "{count} tok",
				"message.turnUsage.input": "Đầu vào không cache",
				"message.turnUsage.model": "Nhà cung cấp / mô hình",
				"message.turnUsage.output": "Đầu ra",
				"message.turnUsage.reasoning": " ({tokens} suy luận)",
				"message.turnUsage.title": "Mức dùng của lượt",
				"message.unknownBlock": "Khối nội dung không xác định",
				"message.unknownSurface": "Sự kiện giao diện không xác định: {type}",
				"number.groupSeparator": ",",
				"row.failed": "Thất bại",
				"row.running": "Đang chạy",
				"settings.links.description": "Chọn nơi mở liên kết web",
				"settings.links.newTab": "Trình duyệt mặc định",
				"settings.links.sidebar": "Thanh bên trong ứng dụng",
				"settings.links.title": "Mở liên kết trong chat bằng",
				"settings.performance.compact": "Gọn",
				"settings.performance.description": "Chọn mức thông tin hiệu năng và mức dùng hiển thị",
				"settings.performance.detailed": "Chi tiết",
				"settings.performance.title": "Hiệu năng & mức dùng",
				"settings.transcript.compact": "Gọn",
				"settings.transcript.description": "Chọn mức chi tiết hiển thị cho lệnh gọi công cụ",
				"settings.transcript.detailed": "Chi tiết",
				"settings.transcript.standard": "Tiêu chuẩn",
				"settings.transcript.title": "Chi tiết công việc",
				"settings.transcript.verbose": "Đầy đủ",
				"stats.cacheHit": "Trúng cache {percent}%",
				"stats.counts": "{turns} lượt {steps} bước",
				"stats.dialog.llmTime": "Thời gian LLM",
				"stats.dialog.speed": "Token mỗi giây (TPS)",
				"stats.dialog.title": "Thống kê phiên",
				"stats.dialog.toolTime": "Thời gian công cụ",
				"stats.dialog.ttft": "Thời gian TB tới token đầu (TTFT)",
				"stats.dialog.usageTitle": "Mức dùng token",
				"view.chat": "Chat"
			},
			"command": {
				"description.compact": "Nén lịch sử cũ của cuộc trò chuyện",
				"description.export": "Tải nhật ký phiên này dưới dạng tệp ZIP",
				"description.feedback": "Ghi lại phản hồi về phiên này",
				"description.goal": "Đặt hoặc xem mục tiêu cho tác vụ chạy dài",
				"description.permission": "Đổi preset quyền (chế độ sandbox + chính sách phê duyệt)",
				"description.plan": "Vào hoặc thoát chế độ kế hoạch",
				"label.compact": "Nén",
				"label.export": "Xuất",
				"label.feedback": "Phản hồi",
				"label.goal": "Mục tiêu",
				"label.permission": "Quyền",
				"label.plan": "Kế hoạch",
				"listbox.aria": "Kết quả khớp /{command}",
				"notice.attachmentsUnsupported": "/{command} không nhận tệp đính kèm; hãy gỡ chúng trước",
				"overlay.aria": "Tùy chọn /{command}",
				"search.aria": "Lọc tùy chọn",
				"search.placeholder": "Tìm kiếm…",
				"section.add": "Thêm",
				"section.commands": "Lệnh",
				"status.applying": "Đang áp dụng…",
				"status.empty": "Không có tùy chọn",
				"status.loading": "Đang tải tùy chọn…",
				"token.compact": "compact",
				"token.export": "export",
				"token.feedback": "feedback",
				"token.goal": "goal",
				"token.permission": "permission",
				"token.plan": "plan"
			},
			"common": {
				back: "Quay lại",
				"brand.localBuild": "DSH bản dựng cục bộ",
				cancel: "Hủy",
				close: "Đóng",
				"codeBlock.title": "Khối mã",
				"codeBlock.unwrap": "Không ngắt dòng",
				"codeBlock.wrap": "Ngắt dòng",
				collapse: "Thu gọn",
				copied: "Đã sao chép",
				copy: "Sao chép",
				"copy.compactJson": "Sao chép JSON rút gọn",
				"copy.failed": "Sao chép thất bại",
				"copy.json": "Sao chép JSON",
				"copy.optionsHint": "{action}; nhấp chuột phải để xem tùy chọn sao chép",
				"copy.path": "Sao chép đường dẫn thuộc tính",
				"copy.prettyJson": "Sao chép JSON định dạng đẹp",
				"copy.value": "Sao chép giá trị",
				"delete": "Xóa",
				edit: "Sửa",
				expand: "Mở rộng",
				"json.label": "JSON",
				"load.failed": "Tải thất bại",
				loading: "Đang tải…",
				"markdown.footnotes": "Chú thích",
				"markdown.truncatedCharacters": "… đã cắt bớt ở {total} ký tự",
				more: "Thêm",
				next: "Tiếp",
				none: "Không có",
				"number.million": "{value}Tr",
				"number.thousand": "{value}K",
				ok: "OK",
				previous: "Trước",
				retry: "Thử lại",
				save: "Lưu",
				search: "Tìm kiếm",
				skip: "Bỏ qua",
				submit: "Gửi",
				submitting: "Đang gửi…",
				truncated: "Đã cắt bớt",
				unknown: "Không rõ",
				"workspace.defaultName": "Không gian làm việc mặc định"
			},
			"conversation": {
				"ask.answered": "Đã trả lời {answered}/{total}",
				"ask.cancelled": "đã hủy",
				"ask.cancelledDetail": "Bộ câu hỏi này đã bị hủy trước khi gửi câu trả lời.",
				"ask.closed": "đã đóng",
				"ask.closedDetail": "Câu hỏi này đã đóng; kết quả nằm trong cuộc trò chuyện bên dưới.",
				"ask.interrupted": "bị gián đoạn",
				"ask.interruptedDetail": "Bộ câu hỏi này bị gián đoạn trước khi gửi câu trả lời.",
				"ask.pending": "đã tiếp tục; vẫn có thể trả lời",
				"ask.pendingDetail": "Vẫn có thể trả lời các câu hỏi đang chờ này từ ô soạn tin.",
				"ask.reopen": "Trả lời",
				"ask.review": "Xem câu trả lời",
				"ask.rowTitle": "Đặt câu hỏi",
				"ask.skipped": "Chưa trả lời",
				"ask.waiting": "đang chờ",
				"attachment.directoryDesktopOnly": "Chỉ thêm được thư mục trong ứng dụng desktop; trên trình duyệt hãy thêm từng tệp",
				"attachment.dropBlocked": "Hiện không thể thêm tệp và hình ảnh",
				"attachment.dropDesc": "Giới hạn ảnh: tối đa {count} ảnh, mỗi ảnh {size}",
				"attachment.dropTitle": "Kéo tệp hoặc hình ảnh vào đây để thêm",
				"attachment.pathUnavailable": "Không lấy được đường dẫn thư mục; hãy kéo vào lại",
				"attachment.pathUnsupported": "Đường dẫn chứa ký tự mà tham chiếu không hỗ trợ; hãy đổi tên rồi thử lại",
				"attachment.pending": "Tệp đính kèm đang chờ",
				"attachment.scrollLeft": "Cuộn tệp đính kèm sang trái",
				"attachment.scrollRight": "Cuộn tệp đính kèm sang phải",
				"bash.failed": "Thất bại",
				"bash.running": "Đang chạy",
				"bash.stopped": "Đã dừng",
				"command.attachmentsUnsupported": "/{command} không nhận tệp đính kèm; hãy gỡ chúng trước",
				"context.aria": "Đã dùng {percent} ngữ cảnh",
				"context.messages": "Tin nhắn",
				"context.system": "Prompt hệ thống",
				"context.tools": "Định nghĩa công cụ",
				"context.used": "ngữ cảnh đã dùng",
				"detail.agent.reply": "Phản hồi của agent",
				"detail.agents.count": "{count} agent",
				"detail.days": "{count} ngày",
				"detail.empty": "Không có kết quả",
				"detail.event.neighbors": "Sự kiện lân cận",
				"detail.field.agent": "ID agent",
				"detail.field.agents": "Agent đã khởi chạy",
				"detail.field.availability": "Khả dụng",
				"detail.field.bestMatch": "Khớp nhất",
				"detail.field.callId": "ID lệnh gọi",
				"detail.field.content": "Nội dung",
				"detail.field.context": "Ngữ cảnh",
				"detail.field.currentPackage": "Gói hiện tại",
				"detail.field.data": "Dữ liệu",
				"detail.field.dependencies": "Phụ thuộc",
				"detail.field.depth": "Độ sâu",
				"detail.field.diagnostics": "Chẩn đoán",
				"detail.field.exitCode": "Mã thoát",
				"detail.field.id": "ID",
				"detail.field.inputSchema": "Schema đầu vào",
				"detail.field.job": "ID công việc",
				"detail.field.latestRun": "Lần chạy gần nhất",
				"detail.field.message": "Tin nhắn",
				"detail.field.messageId": "ID tin nhắn",
				"detail.field.methods": "Phương thức",
				"detail.field.model": "Mô hình",
				"detail.field.nextPackage": "Gói tiếp theo",
				"detail.field.outputSchema": "Schema đầu ra",
				"detail.field.owner": "Chủ sở hữu",
				"detail.field.packages": "Gói",
				"detail.field.parent": "Cha",
				"detail.field.pid": "ID tiến trình",
				"detail.field.platform": "Nền tảng",
				"detail.field.previousStatus": "Trạng thái trước",
				"detail.field.processGroup": "Nhóm tiến trình",
				"detail.field.props": "Props",
				"detail.field.provider": "Nhà cung cấp",
				"detail.field.ready": "Sẵn sàng",
				"detail.field.registrations": "Đăng ký",
				"detail.field.result": "Kết quả",
				"detail.field.revision": "Bản sửa đổi",
				"detail.field.role": "Vai trò",
				"detail.field.root": "Gốc",
				"detail.field.seq": "Thứ tự sự kiện",
				"detail.field.signal": "Tín hiệu",
				"detail.field.source": "Nguồn",
				"detail.field.step": "Bước",
				"detail.field.surface": "Trạng thái bản ghi",
				"detail.field.target": "Sự kiện đích",
				"detail.field.task": "Tác vụ",
				"detail.field.time": "Thời gian",
				"detail.field.turn": "Lượt",
				"detail.field.type": "Loại",
				"detail.field.warnings": "Cảnh báo",
				"detail.field.writeScopes": "Phạm vi ghi",
				"detail.goal.active": "Đang hoạt động",
				"detail.goal.blocked": "Bị chặn",
				"detail.goal.complete": "Hoàn tất",
				"detail.goal.disarmed": "Chờ tiếp tục",
				"detail.goal.empty": "Chưa có mục tiêu",
				"detail.goal.paused": "Tạm dừng",
				"detail.goal.reason": "Vướng mắc",
				"detail.goal.rounds": "Số vòng",
				"detail.hours": "{count} giờ",
				"detail.jobs.count": "{count} công việc nền",
				"detail.location": "Dòng {line}, cột {column}",
				"detail.locations.count": "{count} vị trí",
				"detail.matches.capped": "Đã đạt giới hạn kết quả; thu hẹp tìm kiếm để xem thêm",
				"detail.matches.count": "{count} kết quả khớp",
				"detail.minutes": "{count} phút",
				"detail.models.title": "Mô hình khả dụng",
				"detail.moreInInspect": "Còn {count} mục khác trong Kiểm tra",
				"detail.no": "Không",
				"detail.none": "Không có",
				"detail.output.lines": "Dòng {begin}–{end} / {total}",
				"detail.output.truncated": "Đầu ra đã bị cắt bớt",
				"detail.plugins.count": "{count} plugin động",
				"detail.providers.count": "{count} nhà cung cấp kiểm tra",
				"detail.ralph.limit": "Đã đạt giới hạn số vòng",
				"detail.ralph.reportedBlocker": "Worker báo có vướng mắc",
				"detail.ralph.reportedComplete": "Worker báo đã hoàn tất",
				"detail.receipt.alreadyFinished": "Đã kết thúc trước đó",
				"detail.receipt.cancel": "Đã yêu cầu hủy",
				"detail.receipt.closed": "Đã đóng",
				"detail.receipt.closing": "Đang đóng",
				"detail.receipt.delivered": "Đã gửi tin nhắn",
				"detail.receipt.interrupt": "Đã yêu cầu ngắt",
				"detail.receipt.signal": "Đã gửi tín hiệu",
				"detail.receipt.started": "Đã bắt đầu",
				"detail.recordedResult": "Kết quả đã ghi",
				"detail.report.nextSteps": "Việc còn lại",
				"detail.schedule.count": "{count} lời nhắc",
				"detail.schedule.cron": "Cron {expression} ({zone})",
				"detail.schedule.daily": "Hằng ngày lúc {time} ({zone})",
				"detail.schedule.deleted": "Đã xóa",
				"detail.schedule.empty": "Không có lời nhắc",
				"detail.schedule.every": "Mỗi {interval}",
				"detail.schedule.frequency": "Lặp lại",
				"detail.schedule.once": "Một lần",
				"detail.schedule.overdue": "Quá hạn, chờ tiếp tục phiên",
				"detail.schedule.scheduled": "Đã lên lịch",
				"detail.schedule.weekly": "Hằng tuần vào {days} lúc {time} ({zone})",
				"detail.schedule.when": "Lên lịch vào",
				"detail.seconds": "{count} giây",
				"detail.state": "Trạng thái",
				"detail.status.accepted": "Đã chấp nhận",
				"detail.status.completed": "Hoàn tất",
				"detail.status.deleted": "Đã xóa",
				"detail.status.exited": "Đã thoát",
				"detail.status.failed": "Thất bại",
				"detail.status.idle": "Rảnh",
				"detail.status.inactive": "Không hoạt động",
				"detail.status.killed": "Đã hủy",
				"detail.status.provisioning": "Đang chuẩn bị",
				"detail.status.queued": "Trong hàng đợi",
				"detail.status.ready": "Sẵn sàng",
				"detail.status.running": "Đang chạy",
				"detail.tasks.count": "{count} tác vụ nhóm",
				"detail.tasks.nextPage": "Còn tác vụ khác; con trỏ tiếp theo là {cursor}",
				"detail.terminals.count": "{count} terminal",
				"detail.todo.completed": "Hoàn tất",
				"detail.todo.empty": "Danh sách việc cần làm trống",
				"detail.todo.in_progress": "Đang làm",
				"detail.todo.pending": "Đang chờ",
				"detail.trace.ancestors": "Phiên tổ tiên",
				"detail.trace.derived": "Sự kiện dẫn xuất",
				"detail.trace.descendants": "Phiên hậu duệ",
				"detail.trace.replacedBy": "Được thay bởi",
				"detail.trace.replacementChain": "Chuỗi thay thế",
				"detail.trace.replaces": "Sự kiện bị thay thế",
				"detail.trace.sources": "Sự kiện nguồn",
				"detail.wait.changed": "Phát hiện thay đổi",
				"detail.wait.noProgress": "Không có subagent nào đang hoạt động",
				"detail.wait.timeout": "Hết thời gian chờ",
				"detail.wait.title": "Hoạt động của subagent",
				"detail.weekday.1": "T2",
				"detail.weekday.2": "T3",
				"detail.weekday.3": "T4",
				"detail.weekday.4": "T5",
				"detail.weekday.5": "T6",
				"detail.weekday.6": "T7",
				"detail.weekday.7": "CN",
				"detail.weekday.join": ", ",
				"detail.workflow.script": "Script quy trình",
				"detail.yes": "Có",
				"details.running": "Đang chạy…",
				"diff.collapseAria": "Thu gọn diff",
				"diff.expandAria": "Mở rộng thêm {count} dòng diff",
				"diff.expandRest": "… thêm {count} dòng",
				"error.sessionInUse": "Phiên này đang được dùng, có thể bởi một phiên bản DSH khác đang chạy (như dsh web hoặc ứng dụng desktop). Hãy thoát các phiên bản DSH khác rồi thử lại.",
				"file.label": "Tệp",
				"file.notStaged": "Tệp chưa tải lên xong; hãy thêm lại rồi thử lại",
				"file.pending": "Tệp đang chờ",
				"file.remove": "Gỡ tệp {name}",
				"file.retry": "Tải lại {name}",
				"file.sessionUnavailable": "Phiên không khả dụng; không thể tải tệp lên",
				"file.stillUploading": "Tệp vẫn đang tải lên; hãy gửi sau khi xong",
				"file.uploadFailed": "Tải lên thất bại; nhấp để thử lại",
				"file.uploading": "Đang tải lên…",
				"hero.chooseWorkspace": "Chọn không gian làm việc",
				"hero.headline": "Bước vào điều chưa biết",
				"hero.preview": "Xem trước",
				"hint.goal": "mô tả mục tiêu cho tác vụ chạy dài",
				"hint.goal.active": "mục tiêu đang chạy — sửa / tạm dừng / tiếp tục / xóa",
				"hint.plan": "mô tả tác vụ để tạo kế hoạch",
				"image.closePreview": "Đóng xem trước ảnh gốc",
				"image.dimensionTooLarge": "Mỗi cạnh ảnh tối đa {size}px; hãy thu nhỏ rồi thử lại",
				"image.fileTooLarge": "Mỗi ảnh phải nhỏ hơn {size}",
				"image.label": "Ảnh",
				"image.loadFailed": "Không tải được ảnh; nhấp để thử lại",
				"image.loading": "Đang tải ảnh…",
				"image.modelUnsupported": "Mô hình hiện tại không hỗ trợ ảnh; hãy chuyển sang mô hình có hỗ trợ",
				"image.openOriginal": "Xem ảnh gốc",
				"image.openOriginalLabel": "{label}, nhấp để xem ảnh gốc",
				"image.original": "Ảnh gốc",
				"image.pending": "Ảnh đang chờ",
				"image.preview": "Xem trước ảnh gốc",
				"image.remove": "Gỡ ảnh {name}",
				"image.sendFailed": "Gửi ảnh thất bại ({reason}); hãy thêm lại rồi thử lại",
				"image.tooMany": "Mỗi tin nhắn có tối đa {count} ảnh",
				"image.tooManyPixels": "Độ phân giải ảnh quá cao; hãy nén rồi thử lại",
				"image.totalTooLarge": "Tổng dung lượng ảnh vượt quá {size}; hãy gỡ bớt rồi thử lại",
				"image.unsupportedType": "Chỉ hỗ trợ ảnh PNG, JPG, WebP và GIF",
				"input.commands": "Thêm tệp hoặc chạy lệnh",
				"input.file": "Tệp",
				"input.send": "Gửi tin nhắn",
				"input.send.queue": "Xếp tin nhắn vào hàng đợi",
				"input.send.steer": "Chèn tin nhắn để điều hướng",
				"input.stop": "Dừng tạo",
				"placeholder.default": "Nhắn tin hoặc chạy tác vụ, / để dùng lệnh, @ để chọn tệp hoặc phiên",
				"placeholder.hero": "Mô tả thứ bạn muốn xây dựng, / để dùng lệnh, @ để chọn tệp hoặc phiên",
				"placeholder.parentOffline": "Phiên cha đang ngoại tuyến; không gửi được nhưng vẫn có thể dừng lượt chạy",
				"placeholder.plan": "mô tả tác vụ để tạo kế hoạch",
				"placeholder.steerQueue": "Cmd/Ctrl+Enter chèn mọi tin nhắn trong hàng đợi để điều hướng",
				"placeholder.unavailable": "Phiên không khả dụng",
				"placeholder.workspace": "Chọn không gian làm việc để bắt đầu",
				"queue.cancelEdit": "Hủy sửa",
				"queue.count": "{n} tin nhắn trong hàng đợi",
				"queue.edit": "Sửa tin nhắn trong hàng đợi",
				"queue.edit.unsupported": "Có nội dung không phải văn bản; chưa hỗ trợ sửa",
				"queue.editFailed": "Sửa thất bại: tin nhắn này có thể đã bắt đầu được gửi.",
				"queue.file": "Tệp trong hàng đợi {name}",
				"queue.image": "Ảnh của tin nhắn trong hàng đợi",
				"queue.remove": "Gỡ tin nhắn khỏi hàng đợi",
				"queue.removeFailed": "Gỡ thất bại: tin nhắn này có thể đã bắt đầu được gửi.",
				"queue.save": "Lưu tin nhắn trong hàng đợi",
				"queue.sending": "Đang gửi…",
				"queue.steer": "Chèn tin nhắn trong hàng đợi để điều hướng",
				"queue.steer.unavailable": "Chỉ điều hướng được khi agent đang chạy",
				"queue.steerFailed": "Điều hướng thất bại. Hãy thử lại.",
				"read.collapseAria": "Thu gọn nội dung",
				"read.expandAria": "Mở rộng thêm {count} dòng",
				"read.expandRest": "… thêm {count} dòng",
				"read.window": "Đang hiện {shown} / {total} dòng",
				"row.failed": "Thất bại",
				"row.input": "VÀO",
				"row.inspect": "Kiểm tra",
				"row.output": "RA",
				"row.preparing": "Đang chuẩn bị lệnh gọi công cụ",
				"row.running": "Đang chạy",
				"row.stopped": "Đã dừng",
				"search.collapseAria": "Thu gọn kết quả",
				"search.expandAria": "Mở rộng thêm {count} dòng kết quả",
				"search.expandRest": "… thêm {count} dòng",
				"search.matches": "{shown} kết quả · {files} tệp",
				"search.matches.truncated": "Đang hiện {shown} / {total} kết quả · {files} tệp",
				"search.noResults": "Không có kết quả",
				"search.paths": "{shown} đường dẫn",
				"search.paths.truncated": "Đang hiện {shown} / {total} đường dẫn",
				"session.hierarchy": "Cây phiên",
				"settings.enter.description": "Hành vi của Enter và nút Gửi khi agent đang chạy; Cmd/Ctrl+Enter dùng hành vi còn lại",
				"settings.enter.queue": "Xếp hàng",
				"settings.enter.steer": "Điều hướng",
				"settings.enter.title": "Hành vi gửi khi đang bận",
				"shortcut.complementary": "Dùng thao tác còn lại (Xếp hàng / Điều hướng)",
				"shortcut.mention": "Mở menu tham chiếu",
				"shortcut.newline": "Xuống dòng",
				"shortcut.slash": "Mở menu lệnh",
				"terminal.collapseAria": "Thu gọn đầu ra",
				"terminal.done": "Xong",
				"terminal.exitCode": "mã thoát {code}",
				"terminal.expandAria": "Mở rộng {n} dòng đầu ra còn lại",
				"terminal.expandRest": "… thêm {n} dòng",
				"terminal.failed": "Thất bại",
				"terminal.noExitCode": "không có mã thoát",
				"terminal.noOutput": "Không có đầu ra",
				"terminal.running": "Đang chạy",
				"terminal.sendInput": "(gửi đầu vào)",
				"terminal.session": "Terminal {sessionId}",
				"terminal.signal": "tín hiệu {signal}",
				"todo.completed": "Hoàn tất {done}/{total}",
				"todo.diff.added": "{count} đã thêm",
				"todo.diff.addedItem": "Đã thêm",
				"todo.diff.compare": "Thay đổi so với danh sách trước",
				"todo.diff.initial": "Danh sách ban đầu",
				"todo.diff.movedItem": "Đã sắp xếp lại",
				"todo.diff.noChanges": "Danh sách không thay đổi",
				"todo.diff.removed": "{count} đã gỡ",
				"todo.diff.removedItem": "Đã gỡ",
				"todo.diff.unavailable": "Không có danh sách trước",
				"todo.diff.unchanged": "{count} không đổi",
				"todo.diff.updated": "{count} đã cập nhật",
				"todo.diff.updatedItem": "Đã đổi trạng thái",
				"todo.progress.active": "{active} đang làm",
				"todo.progress.done": "{done} hoàn tất",
				"todo.progress.pending": "{pending} đang chờ",
				"todo.rowTitle": "Cập nhật danh sách việc cần làm",
				"todo.status.completed": "Hoàn tất",
				"todo.status.inProgress": "Đang làm",
				"todo.status.pending": "Đang chờ",
				"todo.title": "Việc cần làm",
				"tool.autoReviewNotExecuted": "Công cụ chưa được thực thi. Lý do: {reason}",
				"tool.autoReviewReasonFallback": "Tự động duyệt không cho phép thao tác này",
				"tool.autoReviewRejected": "Bị Tự động duyệt từ chối",
				"tool.preparing.content": "Đang chuẩn bị nội dung {kilobytes}KB",
				"tool.title.bash": "Bash",
				"tool.title.closeTerminal": "Đóng terminal",
				"tool.title.code": "Mã",
				"tool.title.createGoal": "Tạo mục tiêu",
				"tool.title.createSchedule": "Tạo lời nhắc",
				"tool.title.createTeamTask": "Tạo tác vụ nhóm",
				"tool.title.deleteSchedule": "Xóa lời nhắc",
				"tool.title.edit": "Sửa",
				"tool.title.findDefinition": "Tìm định nghĩa",
				"tool.title.findImplementation": "Tìm triển khai",
				"tool.title.findReferences": "Tìm tham chiếu",
				"tool.title.generic": "Lệnh gọi công cụ",
				"tool.title.getGoal": "Xem mục tiêu",
				"tool.title.getTeamTask": "Đọc tác vụ nhóm",
				"tool.title.glob": "Glob",
				"tool.title.grep": "Grep",
				"tool.title.hoverSymbol": "Kiểm tra ký hiệu",
				"tool.title.inspect": "Truy vấn môi trường Cordis",
				"tool.title.inspectPlugins": "Kiểm tra plugin",
				"tool.title.inspectProviders": "Kiểm tra nhà cung cấp",
				"tool.title.interruptAgent": "Ngắt agent",
				"tool.title.killJob": "Hủy công việc nền",
				"tool.title.listAgents": "Liệt kê subagent",
				"tool.title.listJobs": "Liệt kê công việc nền",
				"tool.title.listModels": "Liệt kê mô hình",
				"tool.title.listSchedules": "Liệt kê lời nhắc",
				"tool.title.listTeamTasks": "Liệt kê tác vụ nhóm",
				"tool.title.listTerminals": "Liệt kê terminal",
				"tool.title.lsp": "Truy vấn ký hiệu mã",
				"tool.title.openTerminal": "Mở terminal",
				"tool.title.pwsh": "Pwsh",
				"tool.title.queryRuntime": "Truy vấn runtime",
				"tool.title.ralph": "Chạy vòng lặp ralph",
				"tool.title.read": "Đọc",
				"tool.title.readEvent": "Đọc sự kiện",
				"tool.title.readImage": "Đọc ảnh",
				"tool.title.readJob": "Đọc đầu ra công việc",
				"tool.title.readTerminal": "Đọc terminal",
				"tool.title.removeCordis": "Gỡ plugin Cordis",
				"tool.title.runCordis": "Chạy plugin Cordis",
				"tool.title.search": "Tìm kiếm",
				"tool.title.searchEvents": "Tìm sự kiện",
				"tool.title.searchSessions": "Tìm phiên",
				"tool.title.sendMessage": "Gửi tin nhắn",
				"tool.title.signalTerminal": "Gửi tín hiệu terminal",
				"tool.title.spawnTeammate": "Tạo thành viên nhóm",
				"tool.title.stopCordis": "Dừng plugin Cordis",
				"tool.title.subagent": "Tạo subagent",
				"tool.title.traceEvent": "Truy vết sự kiện",
				"tool.title.traceSession": "Truy vết phiên",
				"tool.title.updateGoal": "Cập nhật mục tiêu",
				"tool.title.updateSchedule": "Cập nhật lời nhắc",
				"tool.title.updateTeamTask": "Cập nhật tác vụ nhóm",
				"tool.title.waitAgent": "Chờ subagent",
				"tool.title.webFetch": "Tải trang",
				"tool.title.webSearch": "Tìm kiếm",
				"tool.title.workflow": "Chạy quy trình",
				"tool.title.write": "Ghi",
				"web.contentTruncated": "Nội dung đã bị cắt bớt",
				"web.http": "HTTP",
				"web.noResults": "Không tìm thấy kết quả",
				"web.sourcesTruncated": "Danh sách nguồn đã bị cắt bớt"
			},
			"cordis": {
				"a11y.defining": "Đang định nghĩa plugin",
				"a11y.failed": "Định nghĩa thất bại",
				"a11y.preparing": "Đang chuẩn bị lệnh gọi công cụ Cordis",
				"a11y.stopped": "Định nghĩa bị gián đoạn",
				"action.approve": "Cho phép",
				"action.approveOnce": "Chỉ cho phép phiên bản này",
				"action.approvePlugin": "Cho phép các phiên bản sau của plugin này",
				"action.decline": "Từ chối",
				"action.inspect": "Kiểm tra",
				"action.remove": "Gỡ",
				"action.retry": "Thử lại",
				"action.rollback": "Khôi phục",
				"action.run": "Chạy",
				"action.stop": "Dừng",
				"body.clientCode": "Client",
				"body.copied": "Đã sao chép",
				"body.copy": "Sao chép",
				"body.hostCode": "Host",
				"body.output": "Kết quả",
				"body.source": "Mã nguồn plugin",
				"panel.approvals.aria": "Phê duyệt Cordis",
				"panel.current": "Hiện tại: {packageId}",
				"panel.empty": "Chưa định nghĩa plugin nào",
				"panel.group.current": "Phiên này",
				"panel.group.others": "Phiên khác",
				"panel.hint": "Điều khiển chạy nằm ở bảng Cordis phía trên Cài đặt",
				"panel.loading": "Đang đọc…",
				"panel.next": "Tiếp theo: {packageId}",
				"panel.plugins.aria": "Plugin Cordis",
				"panel.readFailed": "Không đọc được danh sách plugin: {message}",
				"panel.runningCount": "{count} đang chạy",
				"panel.title": "Plugin Cordis",
				"panel.trigger": "Plugin Cordis",
				"panel.version": "Phiên bản",
				"purpose.missing": "(không nêu mục đích)",
				"render.failedAbdicated": "Hiển thị thất bại tại {slot}; đã khôi phục giao diện mặc định:",
				"render.failedHeld": "Hiển thị thất bại tại {slot}:",
				"row.defineTitle": "Đăng ký plugin Cordis",
				"row.removeTitle": "Gỡ plugin Cordis",
				"row.runTitle": "Chạy plugin Cordis",
				"row.stopTitle": "Dừng plugin Cordis",
				"row.updateTitle": "Cập nhật plugin Cordis",
				"run.removed": "Gói này không còn tồn tại",
				"run.superseded": "Có thẻ chạy mới hơn ở bên dưới",
				"status.awaitingApproval": "Đang chờ phê duyệt",
				"status.clientPending": "Client sẵn sàng kích hoạt",
				"status.failed": "Chạy thất bại",
				"status.idle": "Sẵn sàng",
				"status.removed": "Đã gỡ",
				"status.running": "Đang chạy",
				"status.superseded": "Có lần chạy mới hơn"
			},
			"deliverables": {
				"changes.added": "+{count}",
				"changes.all": "Tất cả {count} tệp",
				"changes.binary": "nhị phân",
				"changes.collapse": "Thu gọn",
				"changes.collapseAria": "Thu gọn các tệp đã thay đổi",
				"changes.deleted": "-{count}",
				"changes.expandAria": "Hiện tất cả {count} tệp đã thay đổi",
				"changes.openReview": "Xem lại thay đổi của lượt này ở thanh bên",
				"changes.oversized": "quá lớn",
				"changes.singleTitle": "Đã sửa {name}",
				"changes.title": "Đã sửa {count} tệp",
				"changes.viewDiff": "Xem thay đổi của {name}",
				"diff.binary": "Tệp nhị phân; không thể hiển thị thay đổi",
				"diff.coarse": "So sánh theo dòng quá thời gian; hiển thị như thay thế toàn bộ tệp",
				"diff.created": "Được tạo trong lượt này",
				"diff.deleted": "Bị xóa trong lượt này",
				"diff.error": "Không đọc được thay đổi",
				"diff.loading": "Đang đọc thay đổi…",
				"diff.missing": "Nội dung thay đổi của lượt này không còn nữa",
				"diff.oversized": "Tệp quá lớn; không thể hiển thị thay đổi",
				"diff.truncated": "Đang hiển thị {count} dòng đầu",
				"diff.unchanged": "Hai bên có nội dung giống nhau",
				"presented.all": "Tất cả {count} tệp",
				"presented.collapse": "Thu gọn",
				"presented.collapseAria": "Thu gọn các tệp đã bàn giao",
				"presented.directoryError": "Không mở được thư mục chứa. Hãy thử lại.",
				"presented.directoryOpened": "Đã yêu cầu mở thư mục chứa",
				"presented.directoryOpening": "Đang mở thư mục chứa…",
				"presented.error": "Không mở được. Nhấp để thử lại.",
				"presented.expandAria": "Hiện tất cả {count} tệp đã bàn giao",
				"presented.file": "Tệp",
				"presented.hostError": "Không đọc được thông tin desktop của Host",
				"presented.nativeUnavailable": "Tệp này không có đường dẫn trên Host. Hãy xem trước ở thanh bên.",
				"presented.opened": "Đã yêu cầu mở",
				"presented.opening": "Đang mở…",
				"presented.preview": "Xem trước ở thanh bên",
				"presented.previewButton": "Mở {name} ở thanh bên",
				"presented.previewCard": "Xem trước {name} ở thanh bên",
				"presented.retry": "Thử lại",
				"presented.revealError": "Không hiện được trong trình quản lý tệp. Hãy thử lại.",
				"presented.revealed": "Đã yêu cầu hiện trong trình quản lý tệp",
				"presented.revealing": "Đang hiện trong trình quản lý tệp…",
				"presented.unavailable": "Host này không có desktop để mở tệp hoặc thư mục bằng ứng dụng ngoài. Vẫn có thể xem trước tệp ở thanh bên.",
				"review.nowrap": "Tắt ngắt dòng",
				"review.openFile": "Mở toàn bộ tệp ở thanh bên",
				"review.openFileAria": "Mở {name} ở thanh bên",
				"review.selectFile": "Chọn tệp để xem lại",
				"review.split": "Chuyển sang chế độ chia đôi",
				"review.splitAria": "Chia đôi",
				"review.title": "Xem lại · lượt {turn}",
				"review.unified": "Chuyển sang chế độ gộp",
				"review.wrap": "Bật ngắt dòng",
				"review.wrapAria": "Ngắt dòng",
				"row.error": "Bàn giao thất bại",
				"row.inspect": "Xem lệnh gọi",
				"row.ok": "Đã bàn giao",
				"row.preparing": "Đang chuẩn bị sản phẩm bàn giao",
				"row.running": "Đang bàn giao",
				"row.stopped": "Bị gián đoạn",
				"row.title": "Bàn giao tệp"
			},
			"directory-browser": {
				"browser.cancel": "Hủy",
				"browser.create": "Tạo",
				"browser.createIn": "Thư mục mới trong \"{name}\"",
				"browser.editPath": "Sửa đường dẫn",
				"browser.folderName": "Tên thư mục",
				"browser.home": "Thư mục chính",
				"browser.loading": "Đang tải…",
				"browser.newFolder": "Thư mục mới",
				"browser.open": "Mở",
				"browser.showHidden": "Hiện tệp ẩn",
				"browser.title": "Chọn thư mục không gian làm việc",
				"browser.truncated": "Quá nhiều thư mục để liệt kê; chỉ hiển thị phần đầu.",
				"browser.untitledFolder": "Thư mục chưa đặt tên"
			},
			"documentHtml": {
				failed: "Không xem trước được tài liệu HTML này.",
				frame: "Xem trước tài liệu HTML",
				loading: "Đang hiển thị tài liệu...",
				title: "HTML"
			},
			"documentMarkdown": {
				"code.copied": "Đã sao chép",
				"code.copy": "Sao chép",
				footnotes: "Chú thích",
				"viewer.label": "Markdown"
			},
			"feedback": {
				"action.dislike": "Phản hồi chưa tốt",
				"action.dislikeActive": "Bỏ đánh giá",
				"action.like": "Phản hồi tốt",
				"action.likeActive": "Bỏ đánh giá",
				"category.instruction-following": "Hiểu và làm theo chỉ dẫn",
				"category.other": "Khác",
				"category.product-interaction": "Tính năng và tương tác sản phẩm",
				"category.resource-cost": "Mức dùng tài nguyên và chi phí",
				"category.security-privacy-permission": "Bảo mật, quyền riêng tư và quyền",
				"category.service-stability": "Độ ổn định và tốc độ",
				"category.task-result": "Kết quả tác vụ",
				"dialog.categories": "Loại phản hồi",
				"dialog.detail": "Chi tiết phản hồi",
				"dialog.hint": "Thêm chi tiết để giúp chúng tôi cải thiện. Nội dung gửi sẽ kèm nhật ký cuộc trò chuyện hiện tại.",
				"dialog.title": "Gửi phản hồi",
				"error.conflict": "Phản hồi này đã được thay đổi ở nơi khác; đang hiển thị trạng thái mới nhất",
				"error.generic": "Không lưu được phản hồi",
				"error.load": "Không tải được phản hồi",
				"error.noteTooLarge": "Mô tả quá dài; hãy rút gọn rồi gửi lại",
				"toast.recorded": "Cảm ơn phản hồi của bạn"
			},
			"goal": {
				"action.cancel": "Hủy sửa",
				"action.clear": "Xóa mục tiêu",
				"action.edit": "Sửa mục tiêu",
				"action.pause": "Tạm dừng mục tiêu",
				"action.resume": "Tiếp tục mục tiêu",
				"action.save": "Lưu mục tiêu",
				"commandInput.aria": "Ô nhập lệnh",
				"objective.aria": "Nội dung mục tiêu",
				"phase.active": "Mục tiêu đang thực hiện",
				"phase.active.disarmed": "Mục tiêu chưa kích hoạt",
				"phase.blocked": "Mục tiêu bị chặn",
				"phase.paused": "Mục tiêu tạm dừng"
			},
			"job": {
				"count.idle.one": "{count} công việc nền",
				"count.idle.other": "{count} công việc nền",
				"count.live.one": "{count} công việc nền đang chạy",
				"count.live.other": "{count} công việc nền đang chạy",
				"duration.hours": "{hours} giờ {minutes} phút",
				"duration.minutes": "{minutes} phút {seconds} giây",
				"duration.seconds": "{seconds} giây",
				"duration.title.done": "Mất {duration}",
				"duration.title.live": "Đã chạy {duration}",
				"kill.confirm": "Nhấp lần nữa để xác nhận",
				"kill.confirmAction": "Xác nhận dừng",
				"kill.failed": "Dừng thất bại",
				"kill.stop": "Dừng tác vụ {label}",
				"list.aria": "Công việc nền",
				"output.error": "luồng đầu ra trực tiếp bị gián đoạn: {error}",
				"output.gap": "… đã bỏ bớt đầu ra trước đó …",
				"row.collapseAria": "Ẩn đầu ra trực tiếp của {label}",
				"row.expandAria": "Hiện đầu ra trực tiếp của {label}",
				"section.clear": "Xóa",
				"section.live": "Đang chạy",
				"section.settledCount": "Đã xong {count}",
				"status.completed": "hoàn tất",
				"status.failed": "thất bại",
				"status.killed": "đã hủy",
				"status.running": "đang chạy",
				"status.stopping": "đang dừng",
				"terminal.collapse": "Thu gọn",
				"terminal.collapseAria": "Thu gọn đầu ra",
				"terminal.copied": "Đã sao chép",
				"terminal.copy": "Sao chép",
				"terminal.done": "xong",
				"terminal.exitCode": "thoát {code}",
				"terminal.expand": "Hiện thêm {n} dòng",
				"terminal.expandAria": "Mở rộng {n} dòng đầu ra đã thu gọn",
				"terminal.failed": "thất bại",
				"terminal.noExitCode": "không có mã thoát",
				"terminal.noOutput": "(không có đầu ra)",
				"terminal.running": "đang chạy",
				"terminal.signal": "tín hiệu {signal}"
			},
			"model": {
				"action.reload": "Tải lại",
				"command.description": "Chọn mô hình cho cuộc trò chuyện này",
				"command.label": "Mô hình",
				"effort.providerDefault": "Mặc định",
				"empty.efforts": "Mô hình này không có mức suy luận nào.",
				"empty.models": "Không có mô hình khả dụng.",
				"error.action": "Thao tác mô hình thất bại: {message}",
				"error.sessionInUse": "Phiên này đang được dùng, có thể bởi một phiên bản DSH khác đang chạy (như dsh web hoặc ứng dụng desktop). Hãy thoát các phiên bản DSH khác rồi thử lại.",
				"menu.aria": "Mô hình và mức suy luận",
				"menu.effort": "Mức suy luận",
				"menu.model": "Mô hình",
				"option.loadError": "Không tải được danh mục: {message}",
				"provider.account": "Tài khoản DeepSeek",
				"search.clear": "Xóa tìm kiếm",
				"search.empty": "Không có mô hình phù hợp.",
				"search.placeholder": "Tìm mô hình…",
				"status.loading": "Đang làm mới danh sách mô hình…",
				"trigger.aria": "Chọn mô hình, hiện tại {model}",
				"trigger.ariaEffort": "Chọn mô hình, hiện tại {model}, mức suy luận {effort}",
				"trigger.fallback": "Chọn mô hình",
				"trigger.loading": "Đang tải mô hình…",
				"trigger.selectAria": "Chọn mô hình",
				"warning.groupLoad": "Không tải được {name}: {message}"
			},
			"open-in-app": {
				"app.androidstudio": "Android Studio",
				"app.cursor": "Cursor",
				"app.explorer": "File Explorer",
				"app.filemanager": "Tệp",
				"app.finder": "Finder",
				"app.fork": "Fork",
				"app.ghostty": "Ghostty",
				"app.gitbash": "Git Bash",
				"app.github": "GitHub Desktop",
				"app.gitkraken": "GitKraken",
				"app.gnometerminal": "GNOME Terminal",
				"app.goland": "GoLand",
				"app.intellij": "IntelliJ IDEA",
				"app.iterm": "iTerm2",
				"app.kitty": "kitty",
				"app.konsole": "Konsole",
				"app.phpstorm": "PhpStorm",
				"app.pycharm": "PyCharm",
				"app.rider": "Rider",
				"app.rustrover": "RustRover",
				"app.smartgit": "SmartGit",
				"app.sourcetree": "Sourcetree",
				"app.sublimemerge": "Sublime Merge",
				"app.sublimetext": "Sublime Text",
				"app.terminal": "Terminal",
				"app.tower": "Tower",
				"app.vscode": "VS Code",
				"app.vscodeinsiders": "VS Code Insiders",
				"app.warp": "Warp",
				"app.webstorm": "WebStorm",
				"app.windowsterminal": "Windows Terminal",
				"app.windsurf": "Windsurf",
				"app.xcode": "Xcode",
				"app.zed": "Zed",
				"open.title": "Mở trong {app}",
				"open.tooltip": "Mở trên máy",
				"path.appDefault": "{app} (mặc định)",
				"path.appsError": "Không tải được danh sách ứng dụng",
				"path.more": "Cách mở khác",
				"path.open": "Mở",
				"path.openError": "Không mở được. Hãy thử lại.",
				"path.reveal": "Hiện vị trí tệp",
				"path.revealError": "Không hiện được vị trí tệp. Hãy thử lại.",
				"shortcut.busy": "Đang mở không gian làm việc",
				"shortcut.unavailable": "Không gian làm việc hiện tại hoặc ứng dụng trên máy không khả dụng"
			},
			"permission.access": {
				"auto.badge": "Thử nghiệm",
				"auto.confirm.acknowledge": "Tôi hiểu các rủi ro này và muốn tiếp tục",
				"auto.confirm.description": "Tự động duyệt chạy không có sandbox. Trước mỗi lệnh gọi công cụ gốc và lệnh gọi bên trong PTC, chính mô hình của agent hiện tại sẽ xem xét có cho phép hay không; bạn duyệt hoặc từ chối từng lệnh gọi bị nó từ chối. Tính năng này đang thử nghiệm, có thể cho phép hoặc từ chối nhầm, và tốn thêm token.",
				"auto.confirm.enable": "Bật Tự động duyệt",
				"auto.confirm.title": "Bật Tự động duyệt (thử nghiệm)?",
				"auto.description": "Chạy không có sandbox sau khi chính mô hình hiện tại xem xét (thử nghiệm) mọi lệnh gọi công cụ gốc và lệnh gọi bên trong PTC.",
				"auto.label": "Tự động duyệt",
				close: "Đóng",
				"confirm.acknowledge": "Tôi hiểu các rủi ro và muốn tiếp tục",
				"confirm.cancel": "Hủy",
				"confirm.description": "Toàn quyền giảm bớt bước xác nhận và cho phép agent trực tiếp làm nhiều việc hơn, kể cả thao tác nhạy cảm, thay đổi tệp hay chạy lệnh bên ngoài. Chỉ dùng khi bạn tin tưởng tác vụ hiện tại.",
				"confirm.enable": "Bật Toàn quyền",
				"confirm.title": "Bật Toàn quyền?",
				mode: "Chế độ truy cập, hiện tại: {name}",
				"preset.fullAccess": "Toàn quyền",
				"preset.readOnly": "Chỉ đọc",
				"preset.workspaceWrite": "Ghi trong không gian làm việc"
			},
			"plan": {
				"chip.exitFailed": "Không thoát được chế độ kế hoạch",
				"chip.label": "Kế hoạch",
				"chip.on.aria": "Chế độ kế hoạch đang bật, nhấn để tắt",
				"chip.on.title": "Chế độ kế hoạch đang bật — nhấn để tắt (/plan off)",
				"preview.action": "Mở",
				"preview.document": "Kế hoạch · Markdown",
				"preview.expired": "Bản xem trước kế hoạch tạm thời này đã hết hạn. Hãy mở lại từ thẻ đang chờ xem lại.",
				"preview.failed": "Không tải được kế hoạch",
				"preview.full": "Xem toàn bộ kế hoạch",
				"preview.historyUnavailable": "Lịch sử phiên không khả dụng",
				"preview.invalidAddress": "Địa chỉ kế hoạch không hợp lệ",
				"preview.loading": "Đang tải kế hoạch…",
				"preview.notFound": "Không tìm thấy kế hoạch này",
				"preview.open": "Mở kế hoạch ở thanh bên",
				"preview.openNamed": "Mở kế hoạch: {title}",
				"preview.title": "Kế hoạch",
				"preview.unavailable": "Không xem trước được kế hoạch"
			},
			"pluginManager": {
				addPlugin: "Thêm plugin",
				backToList: "Quay lại danh sách plugin",
				backToPackage: "Quay lại {name}",
				bundlesTitle: "Đã cài đặt",
				cancel: "Hủy",
				close: "Đóng",
				configureRow: "Cấu hình {name}",
				confirmUninstall: "Gỡ cài đặt",
				confirmUninstallDescription: "Những gì plugin cung cấp sẽ mất sau khi gỡ cài đặt.",
				confirmUninstallTitle: "Gỡ cài đặt \"{name}\"?",
				crumbRoot: "Plugin",
				empty: "Chưa cài đặt plugin nào.",
				enableToggle: "Bật {name}",
				error: "Không đọc được toàn bộ plugin, có thể do sự cố mạng",
				failedDisable: "Không tắt được: {reason}",
				failedEnable: "Không bật được: {reason}",
				failedRowDisable: "Không tắt được thành phần: {reason}",
				failedRowEnable: "Không bật được thành phần: {reason}",
				failedUninstall: "Không gỡ cài đặt được: {reason}",
				infoDescription: "Cấu hình plugin chính thức, cài đặt hoặc quản lý plugin khác tại đây. Xem danh sách plugin tích hợp và trạng thái chạy trong Cài đặt → Plugin tích hợp.",
				infoLabel: "Về plugin",
				installApplying: "Đang áp dụng cấu hình, vui lòng chờ…",
				installApplyingCancellationError: "Chưa xác nhận được việc hủy. Bản cài đặt đang được áp dụng; hãy chờ kết quả. {reason}",
				installApprovalCaution: "Chỉ cho phép các gói bạn tin cậy.",
				installApprovalConsequence: "Khi được cho phép, các script sẽ chạy tại đây với quyền của bạn, và quyền này được lưu trong hồ sơ này.",
				installApprovalDescription: "Các gói này có script cài đặt mà pnpm chưa chạy.",
				installApprovalTitle: "Script cài đặt cần được cấp quyền",
				installApproveAndRetry: "Cho phép các script này và thử lại",
				installAttempt: "{previous} không cung cấp được gói; đang thử lại qua {registry} (registry {index}/{total})",
				installAttemptBadge: "Lần thử {index} · {registry}",
				installAwaitingAcceptance: "Đang chờ Host chấp nhận cài đặt. Việc hủy sẽ tự thử lại sau khi được xác nhận.",
				installBackgroundApplying: "Bản cài đặt đang được áp dụng và không thể hủy. Xem tiến độ cài đặt.",
				installBackgroundDone: "Cài đặt đã xong. Xem chi tiết cài đặt.",
				installBackgroundFailed: "Cài đặt thất bại. Xem chi tiết cài đặt.",
				installBackgroundUnconfirmed: "Chưa xác nhận được trạng thái cài đặt. Xem chi tiết cài đặt.",
				installBackgroundUnknown: "Không có kết quả cài đặt. Hãy kiểm tra danh sách plugin.",
				installCancel: "Hủy cài đặt",
				installCancelAndEdit: "Hủy cài đặt và quay lại chỉnh sửa",
				installCancelUnconfirmed: "Chưa xác nhận được cài đặt đã dừng. Hãy thử hủy lại hoặc chờ kết quả cài đặt. {reason}",
				installCancelled: "Đã hủy cài đặt; plugin chưa được bật, các tệp đã tải có thể vẫn còn",
				installCancelledShort: "Đã hủy",
				installCancelling: "Đang dừng cài đặt…",
				installChangeRegistry: "Đổi registry",
				installChecking: "Đang kiểm tra…",
				installClose: "Xong",
				installCloseCancels: "Hủy cài đặt và đóng",
				installDescription: "Nhập tên gói plugin, địa chỉ kho GitHub hoặc đường dẫn thư mục cục bộ.",
				installDetailsHide: "Ẩn chi tiết cài đặt",
				installDetailsShow: "Hiện chi tiết cài đặt",
				installDoneApproved: "Đã cho phép script cài đặt cho {names}",
				installDoneNothing: "Cài đặt xong, không có phụ thuộc mới.",
				installDoneRestart: "Đã cài đặt; plugin sẽ được tải ở lần khởi động tới.",
				installEdit: "Sửa",
				installEditAria: "Quay lại chỉnh sửa",
				installEnableNow: "Bật ngay",
				installFailedTitle: "Không cài đặt được plugin",
				installFailureBuildBlocked: "Script cài đặt của một phụ thuộc cần bạn cấp quyền trước khi tiếp tục cài đặt",
				installFailureBuildBlockedManual: "pnpm đã chặn script cài đặt; hãy cho phép chúng trong allowBuilds của pnpm-workspace.yaml rồi thử lại",
				installFailureDiskFull: "Ổ đĩa đã đầy; quá trình cài đặt đã dừng",
				installFailureGeneric: "Đã xảy ra lỗi khi cài đặt; xem chi tiết để biết nguyên nhân",
				installFailureIntegrity: "Gói đã tải không vượt qua kiểm tra toàn vẹn",
				installFailureNetwork: "Kết nối mạng thất bại",
				installFailureNetworkAll: "Không kết nối được registry nào (đã thử: {registries}). Hãy kiểm tra mạng hoặc cài đặt proxy, hoặc đổi registry rồi thử lại.",
				installFailureNetworkHost: "Không kết nối được {host}. Địa chỉ GitHub hoặc liên kết .tgz không được tải qua registry: máy này phải truy cập trực tiếp hoặc qua proxy. Nếu plugin cũng được phát hành trên npm, hãy nhập tên gói thay thế.",
				installFailureNoMatchingVersion: "Không có phiên bản nào khớp với yêu cầu",
				installFailureNotFound: "Không tìm thấy plugin này",
				installFailurePermission: "Không có quyền ghi; không thể cài đặt plugin",
				installFailurePnpmMissing: "Không tìm thấy pnpm nên không thể cài đặt",
				installFailureTimeout: "Cài đặt quá thời gian",
				installGitTemplateHint: "Thay bằng địa chỉ kho Git thực tế.",
				installGithubFailedDescription: "Hãy thử nguồn cài đặt khác.",
				installGithubFailedTitle: "Không truy cập được GitHub",
				installGithubTimeoutTitle: "Kết nối GitHub quá thời gian",
				installGuideExampleLabel: "Ví dụ: ",
				installGuideFill: "Dùng ví dụ",
				installGuideFillAria: "Dùng ví dụ {example}",
				installGuideHide: "Ẩn hướng dẫn",
				installGuideIdExample: "dsh-plugin-whale-pet",
				installGuideIdHint: "Tên gói plugin là tên gói npm (như dsh-xxx hoặc @author/plugin): phần đứng sau dsh plugin add hoặc pnpm add trong lệnh cài đặt ở README của plugin cộng đồng.",
				installGuideIdTitle: "Nhập tên gói npm của plugin",
				installGuideSafety: "Chỉ cài đặt plugin bạn tin cậy: chúng chạy với quyền của bạn và có thể làm hỏng DeepSeek Harness hoặc làm lộ dữ liệu của bạn.",
				installGuideToggle: "Hướng dẫn cài đặt và ví dụ",
				installLocation: "Cài vào {dir}",
				installPackageLabel: "Tên gói plugin",
				installPathTemplateHint: "Thay bằng đường dẫn thực tế tới thư mục plugin cục bộ.",
				installProblemInstalled: "Plugin này đã được cài đặt. Để nâng cấp, hãy gỡ cài đặt rồi cài lại",
				installProblemInvalid: "Đây không phải tên gói hoặc địa chỉ có thể cài đặt: {reason}",
				installProblemNetwork: "Không kết nối được registry plugin; hãy kiểm tra mạng rồi thử lại",
				installProblemNetworkAll: "Không kết nối được registry nào (đã thử: {registries}); hãy kiểm tra mạng hoặc cài đặt proxy, hoặc đổi registry",
				installProblemNotBundle: "Gói này không khai báo bundle nên không thể cài đặt như plugin: {reason}",
				installProblemNotFound: "Không tìm thấy plugin này",
				installProblemNotPackage: "Đường dẫn không tồn tại hoặc không phải gói plugin hợp lệ",
				installProblemShipped: "Plugin này đi kèm DSH; nâng cấp DSH sẽ cập nhật nó",
				installProblemUnknown: "Không tra cứu được plugin: {reason}",
				installReconcile: "Kiểm tra trạng thái cài đặt",
				installResultUnconfirmed: "Chưa nhận được kết quả cài đặt. Hãy kiểm tra trạng thái cài đặt. {reason}",
				installRetry: "Thử lại",
				installRun: "Cài đặt",
				installSpecLabel: "Tên gói hoặc địa chỉ",
				installSpecPlaceholder: "ví dụ dsh-plugin-whale-pet",
				installStarting: "Đang chuẩn bị cài đặt…",
				installSubjectGit: "Kho Git",
				installSubjectPath: "Thư mục cục bộ",
				installSubjectTarball: "Tarball",
				installTitle: "Thêm plugin",
				installTryAnotherWay: "Thử cách khác",
				installUnconfirmedTitle: "Chưa xác nhận trạng thái cài đặt",
				installUnknownDescription: "Host không có tiến trình cài đặt nào đang chạy với ID yêu cầu này. Hãy kiểm tra danh sách plugin trước khi thử lại.",
				installUnknownTitle: "Không có kết quả cài đặt",
				installUpgradeNotice: "Plugin đã cài đặt chưa tự cập nhật. Để nâng cấp, hãy gỡ cài đặt rồi cài phiên bản mới. Các bản phát hành sau sẽ tiếp tục cải thiện trải nghiệm nâng cấp.",
				installUseGithubMirror: "Dùng mirror Trung Quốc đại lục",
				installVersion: "Phiên bản {version}",
				installViewTask: "Xem cài đặt",
				installedTitle: "Đã cài đặt",
				installingTitle: "Đang cài đặt plugin…",
				intro: "Cài đặt, bật và cấu hình plugin",
				loading: "Đang đọc plugin…",
				metadataError: "Lỗi metadata của gói: {error}",
				officialTitle: "Chính thức",
				openDetail: "Xem {name}",
				overriddenNotice: "Đã lưu {name}, nhưng một cấu hình ưu tiên cao hơn ghi đè nên chưa có hiệu lực",
				panel: "Plugin",
				partOff: "Tắt",
				partToggle: "Bật thành phần {name}",
				partsCountFailed: "{count} lỗi",
				partsCountOff: "{count} tắt",
				partsCountRunning: "{count} đang chạy",
				partsCountTotal: "Tổng {count}",
				partsEmpty: "Gói plugin này không có thành phần nào.",
				partsFilter: "Lọc thành phần",
				partsFilterEmpty: "Không có thành phần nào khớp.",
				partsLabel: "Thành phần",
				reasonAmbiguousInstall: "Không xác định được gói nào đã được cài từ thay đổi phụ thuộc.",
				reasonBundleInUse: "Cấu hình khác vẫn đang dùng thành phần của bundle này; hãy tắt chúng trước.",
				reasonIncompatibleInstall: "Hãy cài phiên bản plugin tương thích với DSH này.",
				reasonIncompatibleInstalled: "Hãy gỡ cài đặt rồi cài phiên bản tương thích với DSH này.",
				reasonIncompatibleVersion: "{plugin} không tương thích với DSH {runtime} (yêu cầu {peers}); chạy nó có thể gây treo hoặc mất dữ liệu.",
				reasonIncompatibleVersionUnnamed: "Plugin này không tương thích với phiên bản DSH đang chạy; chạy nó có thể gây treo hoặc mất dữ liệu.",
				reasonInvalidSpec: "Hãy nhập tên gói hoặc địa chỉ hợp lệ.",
				reasonLabel: "Lý do",
				reasonManagementRequired: "Trình quản lý plugin cần nó; không thể tắt hoặc gỡ cài đặt.",
				reasonNotBundle: "Gói này không khai báo bundle nên không thể quản lý như plugin.",
				reasonNotRemovable: "Gói này không thuộc hồ sơ, hoặc trình quản lý plugin cần nó.",
				reasonOperationError: "Host báo lỗi.",
				reasonStaleApproval: "Các phê duyệt script đang chờ đã thay đổi; hãy cài đặt lại để làm mới.",
				reasonStopProfile: "Hồ sơ này chạy không có HMR; hãy dừng nó rồi gỡ gói bằng dsh plugin.",
				reasonUnaddressable: "Bản vá hồ sơ không thể xác định duy nhất mục này.",
				reasonUnknownPlugin: "Không có plugin này.",
				refresh: "Làm mới",
				refreshError: "Làm mới thất bại. Vui lòng thử lại.",
				registryCustom: "Địa chỉ tùy chỉnh",
				registryCustomHint: "Nhập địa chỉ registry npm nội bộ hoặc riêng, bắt đầu bằng http:// hoặc https://. Nếu cần đăng nhập, hãy lưu thông tin xác thực trong ~/.npmrc trên máy này.",
				registryCustomInvalid: "Nhập địa chỉ bắt đầu bằng http:// hoặc https://",
				registryCustomPlaceholder: "https://npm.example.com/",
				registryDefault: "Registry mặc định",
				registryLegend: "Registry npm dùng để tải plugin",
				registryListSeparator: ", ",
				registryNpmmirror: "Mirror Trung Quốc đại lục",
				registryOfficial: "Registry npm chính thức",
				registryToggle: "Registry",
				restartNotice: "Thay đổi có hiệu lực ở lần khởi động tới",
				retry: "Thử lại",
				rowPhaseActive: "Đang chạy",
				rowPhaseFailed: "Có lỗi",
				rowPhaseLoading: "Đang tải",
				rowPhasePending: "Đang chờ phụ thuộc",
				rowPhaseUnloading: "Đang gỡ tải",
				rowStateIdle: "Không chạy",
				sentenceSeparator: " ",
				statusBeta: "Thử nghiệm",
				statusProblem: "Có lỗi",
				terminalCollapse: "Thu gọn",
				terminalCollapseAria: "Thu gọn đầu ra",
				terminalCopied: "Đã sao chép",
				terminalCopy: "Sao chép",
				terminalDone: "Xong",
				terminalExitCode: "mã thoát {code}",
				terminalExpand: "… thêm {n} dòng",
				terminalExpandAria: "Mở rộng {n} dòng đầu ra còn lại",
				terminalFailed: "Thất bại",
				terminalNoExitCode: "không có mã thoát",
				terminalNoOutput: "Không có đầu ra",
				terminalRunning: "Đang chạy",
				terminalSignal: "tín hiệu {signal}",
				title: "Plugin",
				unavailable: "Bản triển khai này chạy không có hồ sơ quản lý được, nên không thể cài đặt hoặc bật/tắt plugin tại đây.",
				uninstall: "Gỡ cài đặt",
				uninstallLabel: "Gỡ cài đặt {name}",
				versionTag: "v{version}"
			},
			"question": {
				"action.next": "Tiếp",
				"action.skip": "Bỏ qua",
				"custom.placeholder": "Nhập câu trả lời",
				"error.incomplete": "Vui lòng hoàn thành câu hỏi này trước.",
				"error.resubmit": "Câu trả lời chưa đến kịp trước khi công việc tiếp tục; hãy gửi lại.",
				"error.unanswered": "Vui lòng chọn một phương án hoặc nhập câu trả lời riêng.",
				"error.unavailable": "Hiện chưa gửi được; vui lòng thử lại sau giây lát.",
				"nav.cancel": "Bỏ qua mọi câu hỏi",
				"nav.close": "Đóng bảng — mở lại từ lệnh gọi công cụ",
				"nav.maximize": "Mở rộng thẻ câu hỏi",
				"nav.minimize": "Thu gọn thẻ câu hỏi",
				"nav.next": "Câu hỏi tiếp theo",
				"nav.prev": "Câu hỏi trước",
				"option.recommended": "Đề xuất",
				"plan.approve": "Duyệt",
				"plan.decline": "Từ chối",
				"plan.discuss": "Yêu cầu chỉnh sửa",
				"plan.header": "Xem lại kế hoạch",
				"reply.answerLabel": "Trả lời: ",
				"reply.close": "Đóng chi tiết câu hỏi",
				"reply.label": "Trả lời các câu hỏi đang chờ trước đó",
				"reply.open": "Mở chi tiết câu hỏi",
				"reply.skipped": "Đã bỏ qua",
				"review.skipped": "Câu hỏi này đã bị bỏ qua.",
				"review.status": "Đã trả lời",
				"status.sent": "Đã gửi câu trả lời; không đóng được bảng.",
				"wait.continued": "Công việc đã tiếp tục — vẫn có thể trả lời",
				"wait.countdown": "Tiếp tục sau {seconds} giây",
				"wait.held": "Đang chờ câu trả lời",
				"wait.paused": "Đã tạm dừng · còn {seconds} giây",
				"wait.takeTime": "Chờ tôi"
			},
			"reference": {
				"candidate.noCwd": "(không có thư mục làm việc)",
				"crumb.root": "Không gian làm việc",
				"section.files": "Tệp và thư mục",
				"section.sessions": "Phiên",
				"section.subagents": "Subagent",
				"time.days": "{n} ngày",
				"time.hours": "{n} giờ",
				"time.minutes": "{n} phút",
				"time.months": "{n} tháng",
				"time.now": "vừa xong",
				"time.years": "{n} năm"
			},
			"schedule.catalog": {
				"cron.day.both": "Ngày {days} hằng tháng hoặc {weekdays}{months}",
				"cron.day.bothStarred": "Ngày {days} hằng tháng và {weekdays}{months}",
				"cron.day.every": "Hằng ngày{months}",
				"cron.day.monthDays": "Ngày {days} hằng tháng{months}",
				"cron.day.weekdays": "{weekdays}{months}",
				"cron.hours.list": "{hours}",
				"cron.hours.range": "{from}–{to}",
				"cron.list.join": ", ",
				"cron.months": " vào {months}",
				"cron.part.join": " ",
				"cron.time.at": "lúc {times}",
				"cron.time.everyHour": "Mỗi giờ",
				"cron.time.everyMinute": "Mỗi phút",
				"cron.time.everyMinutes": "Mỗi {step} phút",
				"cron.time.everyNHours": "Mỗi {count} giờ",
				"cron.time.hourlyAt": "Mỗi giờ vào phút {minutes}",
				"cron.time.hoursAt": "vào phút {minutes} của các giờ {hours}",
				"cron.time.hoursEveryMinute": "mỗi phút trong các giờ {hours}",
				"cron.time.hoursEveryMinutes": "mỗi {step} phút trong các giờ {hours}",
				"cron.time.joinedEveryHour": "mỗi giờ",
				"cron.time.joinedEveryMinute": "mỗi phút",
				"cron.time.joinedEveryMinutes": "mỗi {step} phút",
				"cron.time.joinedEveryNHours": "mỗi {count} giờ",
				"cron.time.joinedHourlyAt": "mỗi giờ vào phút {minutes}",
				"cron.weekday.name": "{weekday}",
				"cron.weekday.range": "{from}–{to}",
				"delete.action": "Xóa",
				"delete.label": "Xóa lời nhắc: {title}",
				"delete.pending": "Đang xóa…",
				"frequency.cron": "Cron {expression} ({timeZone})",
				"frequency.cronLocal": "Cron {expression}",
				"frequency.cronRule": "{rule} ({timeZone})",
				"frequency.daily": "Hằng ngày lúc {time} ({timeZone})",
				"frequency.dailyLocal": "Hằng ngày lúc {time}",
				"frequency.every": "Mỗi {value} {unit}",
				"frequency.once": "Một lần",
				"frequency.weekday.1": "T2",
				"frequency.weekday.2": "T3",
				"frequency.weekday.3": "T4",
				"frequency.weekday.4": "T5",
				"frequency.weekday.5": "T6",
				"frequency.weekday.6": "T7",
				"frequency.weekday.7": "CN",
				"frequency.weekday.join": ", ",
				"frequency.weekly": "Hằng tuần vào {weekdays} lúc {time} ({timeZone})",
				"frequency.weeklyLocal": "Hằng tuần vào {weekdays} lúc {time}",
				"hover.more": "{count} mục khác",
				"list.aria": "Lời nhắc đang hoạt động",
				"list.error": "Không tải được lời nhắc.",
				"list.loading": "Đang tải lời nhắc…",
				"list.nextRun": "Lần chạy tới",
				"list.open": "Mở chi tiết lời nhắc: {title}",
				"list.retry": "Thử lại",
				"mark.aria": "{count} tác vụ theo lịch",
				"relative.future": "sau {value} {unit}",
				"relative.now": "Đến hạn",
				"relative.overdue": "quá hạn {value} {unit}",
				"time.locale": "vi",
				"time.utcPrefix": "UTC",
				"trigger.label": "Lời nhắc",
				"trigger.one": "{count} lời nhắc",
				"trigger.other": "{count} lời nhắc",
				"unit.day.one": "ngày",
				"unit.day.other": "ngày",
				"unit.hour.one": "giờ",
				"unit.hour.other": "giờ",
				"unit.minute.one": "phút",
				"unit.minute.other": "phút",
				"unit.second.one": "giây",
				"unit.second.other": "giây"
			},
			"schedule.manager": {
				"card.deleted": "Đã xóa",
				"card.open": "Mở",
				"card.openLabel": "Mở chi tiết tác vụ: {title}",
				"cron.day.both": "Ngày {days} hằng tháng hoặc {weekdays}{months}",
				"cron.day.bothStarred": "Ngày {days} hằng tháng và {weekdays}{months}",
				"cron.day.every": "Hằng ngày{months}",
				"cron.day.monthDays": "Ngày {days} hằng tháng{months}",
				"cron.day.weekdays": "{weekdays}{months}",
				"cron.hours.list": "{hours}",
				"cron.hours.range": "{from}–{to}",
				"cron.list.join": ", ",
				"cron.months": " trong {months}",
				"cron.part.join": " ",
				"cron.time.at": "lúc {times}",
				"cron.time.everyHour": "Mỗi giờ",
				"cron.time.everyMinute": "Mỗi phút",
				"cron.time.everyMinutes": "Mỗi {step} phút",
				"cron.time.everyNHours": "Mỗi {count} giờ",
				"cron.time.hourlyAt": "Mỗi giờ vào phút {minutes}",
				"cron.time.hoursAt": "vào phút {minutes} của các giờ {hours}",
				"cron.time.hoursEveryMinute": "mỗi phút trong các giờ {hours}",
				"cron.time.hoursEveryMinutes": "mỗi {step} phút trong các giờ {hours}",
				"cron.time.joinedEveryHour": "mỗi giờ",
				"cron.time.joinedEveryMinute": "mỗi phút",
				"cron.time.joinedEveryMinutes": "mỗi {step} phút",
				"cron.time.joinedEveryNHours": "mỗi {count} giờ",
				"cron.time.joinedHourlyAt": "mỗi giờ vào phút {minutes}",
				"cron.weekday.name": "{weekday}",
				"cron.weekday.range": "{from}–{to}",
				"cronForm.atMinute": "Vào phút",
				"cronForm.daily": "Hằng ngày",
				"cronForm.dateOption": "Ngày {day}",
				"cronForm.dates": "Vào các ngày",
				"cronForm.frequency": "Tần suất",
				"cronForm.minuteDecrease": "Giảm phút",
				"cronForm.minuteIncrease": "Tăng phút",
				"cronForm.monthly": "Hằng tháng",
				"cronForm.weekly": "Hằng tuần",
				"delete.action": "Xóa tác vụ",
				"delete.cancel": "Hủy",
				"delete.close": "Đóng hộp xác nhận xóa",
				"delete.confirm": "Xác nhận xóa",
				"delete.description": "Thao tác này dừng kích hoạt tác vụ và xóa tác vụ cùng các bản ghi gửi đã lưu. Phiên gốc và tin nhắn của phiên vẫn được giữ; các tin nhắn đang trong hàng đợi không bị rút lại.",
				"delete.pending": "Đang xóa…",
				"delete.title": "Xóa tác vụ này?",
				"delivery.collapse": "Thu gọn",
				"delivery.cursorError": "Bản ghi đã được cập nhật.",
				"delivery.empty": "Chưa có bản ghi gửi nào",
				"delivery.error": "Không tải được bản ghi gửi.",
				"delivery.expand": "Mở rộng",
				"delivery.label": "Bản ghi gửi đã lưu",
				"delivery.loadMore": "Tải thêm",
				"delivery.loading": "Đang tải bản ghi gửi…",
				"delivery.notFound": "Tác vụ này không còn khả dụng.",
				"delivery.pruned": "Các bản ghi gửi cũ hơn đã được dọn",
				"delivery.refresh": "Làm mới",
				"delivery.retention": "Quy tắc lưu giữ",
				"delivery.retentionBounds": "Mỗi tác vụ giữ tối đa {records} bản ghi gửi trong {days} ngày gần nhất.",
				"delivery.retentionExplanation": "Khi lưu bản ghi mới, các bản ghi cũ vượt quá giới hạn này sẽ tự động bị dọn. Việc dọn bản ghi không làm dừng tác vụ.",
				"delivery.retry": "Thử lại",
				"detail.close": "Đóng chi tiết",
				"detail.frequency": "Tần suất",
				"detail.id": "ID tác vụ",
				"detail.instruction": "Chỉ dẫn tác vụ tự động",
				"detail.label": "Chi tiết tác vụ",
				"detail.missing": "Tác vụ không khả dụng. Có thể đã bị xóa.",
				"detail.more": "Thao tác với tác vụ tự động",
				"detail.name": "Tên tác vụ tự động",
				"detail.next": "Lần chạy theo lịch tiếp theo",
				"detail.nextRun": "Lần chạy tiếp theo",
				"detail.openSession": "Phiên liên kết: mở phiên gốc",
				"detail.openSessionTitle": "Phiên liên kết {title}: mở phiên gốc",
				"detail.records": "Bản ghi gửi",
				"detail.rule": "Quy tắc",
				"detail.session": "Phiên liên kết",
				"detail.sessionArchived": "Phiên gốc đã được lưu trữ.",
				"detail.sessionLoading": "Đang tải thông tin phiên gốc.",
				"detail.sessionUnavailable": "Phiên gốc không khả dụng.",
				"detail.status": "Trạng thái",
				"detail.tabs": "Các chế độ xem chi tiết tác vụ",
				"empty.action": "Tác vụ tự động mới",
				"frequency.cron": "Cron {expression} ({timeZone})",
				"frequency.cronLocal": "Cron {expression}",
				"frequency.cronRule": "{rule} ({timeZone})",
				"frequency.daily": "Hằng ngày lúc {time} ({timeZone})",
				"frequency.dailyLocal": "Hằng ngày lúc {time}",
				"frequency.every": "Mỗi {value} {unit}",
				"frequency.once": "Một lần",
				"frequency.weekday.1": "T2",
				"frequency.weekday.2": "T3",
				"frequency.weekday.3": "T4",
				"frequency.weekday.4": "T5",
				"frequency.weekday.5": "T6",
				"frequency.weekday.6": "T7",
				"frequency.weekday.7": "CN",
				"frequency.weekday.join": ", ",
				"frequency.weekly": "Hằng tuần vào {weekdays} lúc {time} ({timeZone})",
				"frequency.weeklyLocal": "Hằng tuần vào {weekdays} lúc {time}",
				"list.empty": "Chưa có tác vụ nào. Tác vụ tạo trong các phiên sẽ hiện ở đây.",
				"list.emptyInactive": "Không có tác vụ tự động nào ngừng hoạt động",
				"list.error": "Không tải được danh sách tác vụ.",
				"list.label": "Danh mục tác vụ",
				"list.loading": "Đang tải tác vụ…",
				"list.nextPrefix": "Lần chạy theo lịch tiếp theo: ",
				"list.noMatches": "Không có tác vụ phù hợp",
				"list.retry": "Thử lại",
				"new.action": "Mới",
				panel: "Tác vụ tự động",
				"relative.future": "sau {value} {unit}",
				"relative.now": "Đến hạn",
				"relative.overdue": "trễ {value} {unit}",
				"rule.cancel": "Hủy",
				"rule.cron": "Tùy chỉnh",
				"rule.cronInvalid": "Nhập biểu thức cron gồm năm trường, ví dụ 0 9 * * 1-5.",
				"rule.cronLabel": "Biểu thức cron",
				"rule.daily": "Hằng ngày",
				"rule.error.conflict": "Tác vụ đã thay đổi trước khi bản cập nhật được lưu. Dòng này đang hiện quy tắc đã lưu; hãy thử lại.",
				"rule.error.notFound": "Tác vụ này không còn khả dụng.",
				"rule.error.unknown": "Không xác nhận được việc cập nhật quy tắc. Dòng này đang hiện quy tắc đã lưu.",
				"rule.everyHours": "Mỗi N giờ",
				"rule.everyMinutes": "Mỗi N phút",
				"rule.everySeconds": "Mỗi N giây",
				"rule.invalidPrompt": "Nhập chỉ dẫn cho tác vụ.",
				"rule.invalidTitle": "Nhập tên tác vụ tối đa 120 ký tự.",
				"rule.once": "Một lần",
				"rule.repeat": "Lặp lại",
				"rule.save": "Lưu thay đổi",
				"rule.saving": "Đang lưu…",
				"rule.title": "Thời gian chạy",
				"rule.unsaved": "Thay đổi chưa lưu",
				"rule.weekday": "Thứ trong tuần",
				"rule.weekdayOption": "Thứ {weekday}",
				"rule.weekdays": "Thứ Hai đến Thứ Sáu",
				"rule.weekly": "Hằng tuần",
				"rule.zone.system": " (hệ thống)",
				"search.clear": "Xóa tìm kiếm",
				"search.label": "Tìm tác vụ",
				"search.placeholder": "Tìm tác vụ tự động",
				"status.active": "Đang bật",
				"status.inactive": "Ngừng hoạt động",
				"statusFilter.all": "Tất cả",
				"statusFilter.label": "Trạng thái tác vụ",
				"time.locale": "vi",
				"time.utcPrefix": "UTC",
				"timing.conflict": "Tác vụ đã thay đổi trong lúc bạn sửa. Bản nháp vẫn được giữ. Hãy hủy và mở lại sau khi làm mới để sửa quy tắc mới nhất.",
				"timing.date": "Ngày",
				"timing.error": "Không xác nhận được việc cập nhật thời gian. Bản nháp vẫn được giữ. Hãy kiểm tra tác vụ trước khi thử lại.",
				"timing.hour": "Giờ",
				"timing.inactive": "Tác vụ ngừng hoạt động chỉ đọc. Không thể sửa thời gian chạy.",
				"timing.interval": "Lặp lại mỗi",
				"timing.intervalDecrease": "Giảm khoảng lặp",
				"timing.intervalHint.hour": "Tối thiểu 1 giờ. Khoảng lặp tính từ lúc tạo tác vụ hoặc lần đổi quy tắc gần nhất và không phụ thuộc múi giờ.",
				"timing.intervalHint.minute": "Tối thiểu 1 phút. Khoảng lặp tính từ lúc tạo tác vụ hoặc lần đổi quy tắc gần nhất và không phụ thuộc múi giờ.",
				"timing.intervalHint.second": "Tối thiểu 60 giây. Khoảng lặp tính từ lúc tạo tác vụ hoặc lần đổi quy tắc gần nhất và không phụ thuộc múi giờ.",
				"timing.intervalIncrease": "Tăng khoảng lặp",
				"timing.invalid": "Nhập ngày giờ hợp lệ hoặc kiểm tra các trường thời gian.",
				"timing.invalidInterval": "Nhập khoảng lặp tối thiểu 1 phút.",
				"timing.invalidInterval.hour": "Nhập khoảng lặp tối thiểu 1 giờ.",
				"timing.invalidInterval.minute": "Nhập khoảng lặp tối thiểu 1 phút.",
				"timing.invalidInterval.second": "Nhập khoảng lặp tối thiểu 60 giây.",
				"timing.invalidZone": "Nhập múi giờ IANA hợp lệ, ví dụ Asia/Ho_Chi_Minh.",
				"timing.minute": "Phút",
				"timing.nextMonth": "Tháng sau",
				"timing.notFound": "Tác vụ này không còn khả dụng. Bản nháp vẫn được giữ; hãy hủy để đóng trình sửa.",
				"timing.notFuture": "Chọn ngày giờ trong tương lai.",
				"timing.prevMonth": "Tháng trước",
				"timing.second": "Giây",
				"timing.time": "Giờ",
				"timing.unit.hour": "giờ",
				"timing.unit.minute": "phút",
				"timing.unit.second": "giây",
				"timing.zone": "Múi giờ",
				"timing.zoneNoResults": "Không có múi giờ phù hợp",
				"timing.zoneNoStored": "Tác vụ một lần chỉ lưu thời điểm đích, không lưu múi giờ. Ngày giờ được hiểu theo múi giờ đã chọn.",
				"timing.zoneSearch": "Tìm theo độ lệch UTC, ID IANA hoặc thành phố",
				title: "Tác vụ tự động",
				"toast.deleteFailed": "Không xóa được tác vụ.",
				"toast.deleted": "Đã xóa tác vụ.",
				"tool.invoked": "Đã gọi {name}",
				"unit.day.one": "ngày",
				"unit.day.other": "ngày",
				"unit.hour.one": "giờ",
				"unit.hour.other": "giờ",
				"unit.minute.one": "phút",
				"unit.minute.other": "phút",
				"unit.second.one": "giây",
				"unit.second.other": "giây"
			},
			"session-log-download": {
				"dialog.close": "Đóng",
				"dialog.commandFailed": "Không bắt đầu xuất phiên được.",
				"dialog.errorTitle": "Xuất phiên thất bại",
				"dialog.preparingDescription": "Đang chuẩn bị tệp ZIP gồm phiên này, các phiên con và tệp đính kèm.",
				"dialog.preparingTitle": "Đang xuất phiên",
				"dialog.successDescription": "Trình duyệt đang tải xuống tệp ZIP của phiên.",
				"dialog.successTitle": "Đã bắt đầu tải phiên",
				"header.more": "Thao tác khác",
				"menu.download": "Tải log phiên",
				"menu.feedback": "Phản hồi"
			},
			"settings": {
				close: "Đóng",
				"connection.connected": "Đã kết nối",
				"connection.connecting": "Đang kết nối lại",
				"connection.error": "Mất kết nối",
				"connection.reconnect": "Mất kết nối, kết nối lại ngay",
				"connection.restart": "Đang kết nối lại, kết nối lại ngay",
				"desktop.update.available": "Cập nhật",
				"desktop.update.checkFailed": "Không kiểm tra được bản cập nhật. Vui lòng thử lại sau.",
				"desktop.update.checkNetworkFailed": "Không kiểm tra được bản cập nhật. Hãy kiểm tra kết nối mạng rồi thử lại.",
				"desktop.update.checking": "Đang kiểm tra cập nhật…",
				"desktop.update.downloadDetail": "Đang tải bản cập nhật: {percent}%\nPhiên bản đích: {version}",
				"desktop.update.downloadFailed": "Không tải được bản cập nhật. Vui lòng thử lại.",
				"desktop.update.downloadNetworkFailed": "Không tải được bản cập nhật. Hãy kiểm tra kết nối mạng rồi thử lại.",
				"desktop.update.installFailed": "Không cài được bản cập nhật. Vui lòng thử lại sau.",
				"desktop.update.installNetworkFailed": "Không cài được bản cập nhật. Hãy kiểm tra kết nối mạng rồi thử lại.",
				"desktop.update.installing": "Đang chuẩn bị khởi động lại…",
				"desktop.update.progress": "{percent}%",
				"desktop.update.ready": "Cài đặt và khởi động lại",
				"desktop.update.retry": "Thử cập nhật lại",
				"desktop.update.stopFailed": "Không dừng được các tác vụ một cách an toàn. Bản cập nhật chưa được cài. Vui lòng thử lại sau.",
				"desktop.update.tasksChanged": "Có tác vụ mới vừa bắt đầu. Xác nhận lần nữa để dừng các tác vụ và cập nhật.",
				"desktop.update.tasksUnavailable": "Không lấy được trạng thái tác vụ. Hãy thử cập nhật lại khi không gian làm việc sẵn sàng.",
				"desktop.update.verifying": "Đang xác minh tệp cập nhật…",
				"desktop.update.versionDetail": "{label}: {version}",
				"developerTools.description": "Hiển thị quỹ đạo, diff mã và mọi preset Agent",
				"developerTools.error": "Không lưu được. Vui lòng thử lại.",
				"developerTools.title": "Hiện chế độ xem lập trình",
				"general.currentVersion": "Phiên bản hiện tại: {version}",
				"general.nav": "Chung",
				openDocument: "Mở tệp cấu hình",
				"openDocument.error": "Không mở được tệp cấu hình",
				"shortcut.open": "Mở cài đặt",
				title: "Cài đặt",
				trigger: "Cài đặt"
			},
			"settings.account": {
				accountInfo: "Thêm thông tin tài khoản",
				addApiKey: "Thêm API Key",
				backToHarness: "Quay lại DeepSeek Harness",
				balance: "Số dư đã nạp",
				balanceSignedOut: "Đăng nhập để xem",
				balanceUnavailable: "Xem trên Platform",
				bonusBalance: "Số dư được tặng",
				bonusNoticeTitle: "Đã cộng tiền thưởng",
				browserDescription: ", rồi mở trong trình duyệt để hoàn tất đăng nhập.",
				browserPrompt: "Trang không tự mở? ",
				browserTitle: "Đang chờ đăng nhập",
				cancel: "Hủy",
				close: "Đóng",
				completing: "Đang hoàn tất đăng nhập…",
				contactUs: "Phản hồi",
				copiedLink: "Đã sao chép liên kết",
				copyFailed: "Sao chép thất bại",
				copyLink: "Sao chép liên kết đăng nhập",
				expired: "Phiên đăng nhập đã hết hạn. Hãy thử lại.",
				failed: "Không hoàn tất được thao tác. Hãy thử lại.",
				failureTitle: "Không đăng nhập được",
				initializing: "Đang bắt đầu đăng nhập…",
				loading: "Đang tải…",
				loginDescription: "Đăng nhập tài khoản DeepSeek hoặc thêm API Key để bắt đầu. Dự án và tệp được lưu trên máy.",
				loginTitle: "Bắt đầu",
				menu: "Menu tài khoản",
				modelSignInRequired: "Mô hình không khả dụng. Vui lòng đăng nhập rồi thử lại.",
				more: "Thêm",
				nav: "Tài khoản",
				onboardingArtworkLocale: "en",
				onboardingBack: "Quay lại",
				onboardingBrand: "DeepSeek Harness",
				onboardingCompact: "Chỉ kết quả",
				onboardingCompactDescription: "Chỉ xem kết quả trong giao diện gọn gàng, đơn giản",
				onboardingContinue: "Tiếp tục",
				onboardingCredit: "Nạp tín dụng",
				onboardingCreditDescription: "DeepSeek Harness trừ tín dụng theo lượng token mà mô hình và công cụ sử dụng. Hãy nạp trước để tác vụ chạy liên tục không gián đoạn. Số dư chỉ bị trừ khi agent đang làm tác vụ.",
				onboardingDetailed: "Đầy đủ chi tiết",
				onboardingDetailedDescription: "Xem toàn bộ quá trình để dễ gỡ lỗi và khắc phục sự cố",
				onboardingDevelopment: "Lập trình & phát triển",
				onboardingDevelopmentDescription: "Sửa mã, gỡ lỗi, chạy lệnh, quản lý tệp dự án và nhiều việc khác",
				onboardingEnter: "Mở ứng dụng",
				onboardingFundedTopUp: "Nạp tín dụng",
				onboardingGoTopUp: "Nạp tín dụng",
				onboardingIntroduction: "DeepSeek Harness làm việc trong một thư mục cục bộ và dùng công cụ để đọc, ghi tệp trên máy tính. Nó có thể giúp nghiên cứu và sắp xếp thông tin, tạo tài liệu và bảng tính, viết mã, khắc phục sự cố và nhiều việc khác.",
				onboardingKeepSetting: "Tiếp tục thiết lập",
				onboardingLater: "Tiếp",
				onboardingLoading: "Đang tải cài đặt…",
				onboardingNoCreditDescription: "DeepSeek Harness không thể bắt đầu tác vụ mới khi không có tín dụng. Có thể nạp sau trong Cài đặt → Tài khoản.",
				onboardingNoCreditTitle: "Bỏ qua bước nạp tín dụng?",
				onboardingOffice: "Văn phòng & sáng tạo",
				onboardingOfficeDescription: "Sửa tài liệu, sắp xếp dữ liệu, tạo bài thuyết trình và nhiều việc khác",
				onboardingProcess: "Muốn xem tiến trình chi tiết đến mức nào?",
				onboardingProcessDescription: "Chỉ thay đổi cách hiển thị tiến trình, không ảnh hưởng đến khả năng của DeepSeek Harness.",
				onboardingPurposeDescription: "Giao diện và công cụ sẽ được điều chỉnh cho phù hợp với cách làm việc của bạn.",
				onboardingPurposePrefix: "Bạn muốn",
				onboardingPurposeSuffix: "giúp việc gì?",
				onboardingRetry: "Thử lại",
				onboardingSaveFailed: "Không lưu được cài đặt. Hãy thử lại.",
				onboardingSkip: "Bỏ qua",
				onboardingSkipDescription: "Có thể đổi cách hiển thị tiến trình, hiệu năng và mức sử dụng, hoặc bật Công cụ lập trình, bất cứ lúc nào trong Cài đặt → Chung.",
				onboardingSkipTitle: "Bỏ qua thiết lập?",
				onboardingStandard: "Chi tiết chính",
				onboardingStandardDescription: "Tập trung vào kết quả, chỉ hiện các bước và thao tác quan trọng nhất",
				onboardingStart: "Bắt đầu",
				onboardingTopUp: "Nạp tín dụng",
				onboardingUnderstood: "Đã hiểu",
				onboardingWelcome: "Chào mừng đến với",
				open: "Mở trình duyệt",
				platformFailed: "Không hoàn tất được thao tác. Hãy thử lại.",
				platformRetry: "Thử lại",
				profileUnavailable: "Chưa có thông tin tài khoản.",
				quotaDescription: "DeepSeek Harness không thể bắt đầu tác vụ mới với tài khoản này khi hết số dư. Nạp tiền ngay? Cũng có thể nạp sau trong Cài đặt → Tài khoản.",
				quotaTitle: "Hết số dư",
				quotaTopUp: "Nạp tiền",
				retry: "Đăng nhập lại",
				sessionExpired: "Đã đăng xuất khỏi tài khoản, vui lòng đăng nhập lại.",
				settings: "Cài đặt",
				settingsSignedOutDescription: "Đăng nhập DeepSeek Harness để nhận API Key riêng",
				settingsSignedOutTitle: "Chưa đăng nhập DeepSeek Harness",
				signIn: "Đăng nhập",
				signInDescription: "Dùng tài khoản DeepSeek để bắt đầu.",
				signOut: "Đăng xuất",
				signOutDescription: "Đăng xuất không xóa dữ liệu nào. Có thể đăng nhập lại tài khoản này.",
				signOutRunningDescription: "Có tác vụ đang chạy. Đăng xuất sẽ làm gián đoạn chúng. Đăng xuất ngay?",
				signOutUnknownDescription: "Không kiểm tra được tác vụ đang chạy. Đăng xuất có thể làm gián đoạn tác vụ dùng tài khoản này. Đăng xuất ngay?",
				signedIn: "Đã đăng nhập DeepSeek",
				signedOut: "Chưa đăng nhập",
				timeoutDescription: "Đăng nhập lại để tiếp tục.",
				timeoutTitle: "Hết thời gian đăng nhập",
				topUp: "Nạp tiền",
				usage: "Xem mức sử dụng",
				waiting: "Tiếp tục trong trình duyệt"
			},
			"settings.agentLoop": {
				description: "Kiểm soát cách agent điều phối lệnh gọi công cụ.",
				invalidNumber: "Nhập một số, hoặc để trống để dùng mặc định.",
				maxParallel: "Lệnh gọi công cụ song song",
				maxParallelHint: "Số lệnh gọi an toàn song song tối đa chạy cùng lúc trong một bước.",
				overridden: "Bị ghi đè",
				readOnly: "Bản triển khai này lưu cài đặt ở chế độ chỉ đọc.",
				reset: "Đặt lại mặc định",
				save: "Lưu",
				saveFailed: "Bản triển khai không chấp nhận các giá trị này; chúng được giữ lại để bạn sửa.",
				saving: "Đang lưu…",
				title: "Vòng lặp agent",
				unavailable: "Plugin này chưa được tải nên hiện không thể cấu hình."
			},
			"settings.agentPreset": {
				brokenBadge: "Không tải được",
				builtInGroup: "Có sẵn",
				close: "Đóng",
				creatorDraft: "Để agent giúp tôi tạo preset",
				customGroup: "Tùy chỉnh",
				guideCopied: "Đã sao chép",
				guideCopy: "Sao chép",
				guideCordisExplanation: "### Có thể tạo gì\n\nChế độ Sáng tạo có các công cụ của tác vụ tiêu chuẩn, cộng thêm kiểm tra runtime, quản lý plugin lâu dài và hướng dẫn viết plugin Cordis lẫn preset agent. Chế độ này có thể tạo plugin thêm tính năng hoặc giao diện, hoặc tạo preset kết hợp công cụ và prompt cho một công việc cụ thể.\n\n### Plugin và chế độ\n\nPlugin bổ sung năng lực cho DSH, như một công cụ, một kết nối dịch vụ hoặc một lối vào giao diện. Chế độ là một preset agent, dùng để chọn công cụ và quy định cách agent làm việc trong một tác vụ. Có thể đưa plugin vào preset tùy chỉnh.\n\n### Cách kết quả có hiệu lực\n\nHãy yêu cầu agent cài đặt và kiểm chứng kết quả, chứ không chỉ sinh mã nguồn. Plugin có thể được tải ngay hoặc cần khởi động lại, tùy vào nội dung thay đổi. Preset mới tạo được chọn khi bắt đầu tác vụ mới.",
				guideCordisIntro: "Chọn chế độ Sáng tạo cho tác vụ mới. Mô tả năng lực cần thêm, nơi nó sẽ xuất hiện và cách kiểm chứng.",
				guideCordisUsage: "### Thêm giao diện\n\n> Tạo một plugin DSH thêm mục ghi chú dự án vào thanh bên. Cho tôi duyệt các tệp Markdown trong không gian làm việc này và xem trước ghi chú được chọn. Cài đặt và kiểm tra trang mở được.\n\nSản phẩm mong đợi: một plugin đã cài với lối vào và trang xem trước hoạt động, kèm các bước kích hoạt còn lại nếu có.\n\n### Thêm công cụ\n\n> Tạo một plugin có công cụ đọc báo cáo kiểm thử của dự án này và tóm tắt các bài kiểm thử thất bại. Đăng ký công cụ và kiểm chứng bằng một báo cáo mẫu.\n\nSản phẩm mong đợi: một plugin có công cụ gọi được và một lần gọi mẫu đã kiểm chứng.\n\n### Tạo chế độ riêng\n\n> Tạo chế độ “Review mã” dựa trên chế độ Tiêu chuẩn. Ưu tiên tìm lỗi tiềm ẩn và chỗ thiếu kiểm thử, ghi rõ đường dẫn tệp và số dòng, và hỏi trước khi sửa tệp. Lưu thành preset có thể chọn.\n\nSản phẩm mong đợi: một preset tùy chỉnh cho tác vụ mới. Các yêu cầu review này định hướng agent; cài đặt quyền mới quyết định agent được thực hiện thao tác nào.",
				guideExampleTask: "Tác vụ mẫu",
				guideFootnotes: "Chú thích",
				guideMinimalExplanation: "### Gồm những gì\n\nMột công cụ shell duy trì và một prompt hệ thống cố định. Preset có sẵn này không tải Skills, kế hoạch, nén ngữ cảnh hay ngữ cảnh runtime tiêu chuẩn.\n\n### Khi nào nên chọn\n\nDùng làm mốc cơ sở cho thử nghiệm và so sánh. Chế độ này vẫn đọc tệp và chạy script qua lệnh shell, nhưng có ít cách dựng sẵn hơn để quản lý tác vụ dài. Ít công cụ không có nghĩa là dễ hơn cho người mới.",
				guideMinimalIntro: "Chọn chế độ Tối giản cho tác vụ mới. Khi so sánh, giữ nguyên mô hình, quyền, đầu vào và trạng thái ban đầu của không gian làm việc giữa các lần chạy.",
				guideMinimalUsage: "### So sánh hiệu quả khi sửa một lỗi nhỏ\n\n> Chạy các bài kiểm thử của dự án này, tìm nguyên nhân thất bại và sửa ở mức tối thiểu. Chạy lại các bài kiểm thử liên quan và báo cáo kết quả.\n\nChạy cùng tác vụ này riêng ở chế độ Tiêu chuẩn và Tối giản, từ cùng trạng thái ban đầu. So sánh mức hoàn thành, lệnh gọi công cụ và các thay đổi cuối cùng. Chế độ Tối giản làm việc qua lệnh terminal.",
				guidePtcExplanation: "### Cách gọi công cụ\n\nPTC là Programmatic Tool Calling, tức gọi công cụ bằng chương trình. Trong preset có sẵn này, agent dùng run_code để viết chương trình TypeScript gọi công cụ qua một SDK được sinh sẵn. Chương trình có thể dùng vòng lặp, điều kiện, xử lý lỗi và gọi đồng thời khi phù hợp.\n\n### Những gì đến được mô hình\n\nKết quả công cụ đi vào chương trình trước, nơi có thể lọc và gộp lại. Mô hình nhận những gì chương trình in ra hoặc trả về; kết quả ảnh được đính kèm riêng. Các lệnh gọi công cụ lồng bên trong vẫn được ghi lại và vẫn chịu quyền của công cụ.\n\n### So với chế độ Tiêu chuẩn\n\nCả hai chế độ đều lập trình và xử lý hàng loạt được. Chế độ Tiêu chuẩn đưa trực tiếp từng công cụ cho mô hình; PTC tổ chức lệnh gọi công cụ bằng mã. Preset PTC hiện tại tắt công cụ workflow. Tốc độ và lượng token dùng phụ thuộc vào tác vụ và cách chương trình xử lý kết quả.",
				guidePtcIntro: "Chọn chế độ PTC khi bắt đầu tác vụ mới. Nêu rõ tệp đầu vào, quy tắc xử lý và định dạng đầu ra. Agent sẽ viết mã.",
				guidePtcUsage: "### Kiểm tra một loạt tệp cấu hình\n\n> Kiểm tra mọi tệp JSON trong configs/. Liệt kê các trường bắt buộc bị thiếu và giá trị không hợp lệ theo schema.json. Lưu một tệp CSV, mỗi vấn đề một dòng. Ghi cả các tệp không đọc được vào báo cáo và tiếp tục kiểm tra phần còn lại. Giữ nguyên các tệp gốc.\n\nSản phẩm mong đợi: bản tóm tắt vấn đề và một báo cáo CSV. Chương trình có thể lặp lại cùng phép kiểm tra, xử lý lỗi từng tệp và gom kết quả.\n\n### Tổng hợp log lỗi\n\n> Phân tích các tệp log trong logs/. Nhóm lỗi theo dịch vụ và loại lỗi. Hiện mười nhóm xuất hiện nhiều nhất, mỗi nhóm kèm một ví dụ. Lưu toàn bộ số liệu vào tệp CSV.\n\nSản phẩm mong đợi: các nhóm lỗi hàng đầu và bảng đếm đầy đủ. Dữ liệu trung gian có thể được gộp trong chương trình trước khi bản tóm tắt đến mô hình.",
				guideSections: "Mục hướng dẫn",
				guideStandardExplanation: "### Cách hoạt động\n\nAgent gọi công cụ trực tiếp để đọc và sửa tệp, tìm kiếm và chạy lệnh terminal. Có sẵn Skills, lập kế hoạch, mục tiêu, subagent, workflow và nén ngữ cảnh.\n\n### Khi nào nên chọn\n\nBắt đầu từ đây cho lập trình hằng ngày, xử lý tệp và tra cứu. Chế độ Tiêu chuẩn cũng viết script và xử lý tệp hàng loạt được. PTC thay đổi cách tổ chức lệnh gọi công cụ; tác vụ hàng loạt không bắt buộc dùng PTC.",
				guideStandardIntro: "Chọn chế độ Tiêu chuẩn khi bắt đầu tác vụ mới. Mô tả việc cần làm, chỉ ra các tệp liên quan và cách kiểm tra kết quả.",
				guideStandardUsage: "### Sửa một lỗi\n\n> Tìm hiểu vì sao gửi biểu mẫu tìm kiếm hai lần thì kết quả biến mất. Sửa lỗi và chạy các bài kiểm thử liên quan. Giải thích nguyên nhân và những gì đã thay đổi.\n\nSản phẩm mong đợi: thay đổi mã, kết quả kiểm thử liên quan và lời giải thích nguyên nhân.\n\n### Sắp xếp ghi chú dự án\n\n> Đọc các ghi chú Markdown trong dự án này. Tóm tắt các quyết định đã thống nhất và câu hỏi còn mở, kèm liên kết đến tệp nguồn.\n\nSản phẩm mong đợi: bản tóm tắt có trích dẫn để đối chiếu với ghi chú gốc.",
				headerHint: "Preset agent được chọn khi tác vụ này bắt đầu",
				howToUse: "Cách dùng",
				inUse: "Mặc định cho tác vụ mới",
				modeExplanation: "Chi tiết chế độ",
				nav: "Preset agent",
				noDescription: "Không có mô tả.",
				presetCordisDescription: "Tùy biến DSH qua trò chuyện. Để agent viết plugin thêm tính năng hoặc giao diện, hoặc kết hợp công cụ và prompt để tạo chế độ riêng.",
				presetCordisName: "Chế độ Sáng tạo",
				presetMinimalDescription: "Agent chỉ làm việc với một công cụ terminal. Hữu ích để kiểm thử và so sánh hiệu năng cơ bản.",
				presetMinimalName: "Chế độ Tối giản",
				presetPtcDescription: "Có mọi năng lực của chế độ Tiêu chuẩn. Phù hợp hơn với tác vụ gọi công cụ hàng loạt rồi lọc, sắp xếp, loại trùng, đếm hoặc tóm tắt kết quả.",
				presetPtcName: "Chế độ PTC",
				presetStandardDescription: "Làm việc với mã, tệp và thông tin. Phù hợp với hầu hết tác vụ, có sẵn tìm kiếm, chỉnh sửa, lệnh terminal và các công cụ khác khi cần.",
				presetStandardName: "Chế độ Tiêu chuẩn",
				seatHint: "Chọn preset agent cho tác vụ mới",
				sectionIntro: "Chọn công cụ và cách làm việc của agent. Dùng chế độ Tiêu chuẩn cho việc hằng ngày, hoặc chế độ Sáng tạo để thêm năng lực cho DSH.",
				setDefault: "Đặt làm mặc định cho tác vụ mới",
				switchRefused: "Không chuyển được sang {name}: {reason}",
				view: "Xem cấu hình"
			},
			"settings.locale": { "language.title": "Ngôn ngữ" },
			"settings.models": {
				add: "Thêm nhà cung cấp mô hình",
				addCatalog: "Nhà cung cấp mô hình bên thứ ba",
				addCatalogExhausted: "Mọi nhà cung cấp trong danh mục đều đã được cấu hình.",
				addCatalogHint: "Chọn OpenAI, Anthropic, Kimi hoặc nhà cung cấp khác trong danh mục có sẵn rồi nhập API key.",
				addCustom: "API mô hình tùy chỉnh",
				addCustomHint: "Kết nối relay, máy chủ tự host hoặc bất kỳ endpoint nào tương thích OpenAI/Anthropic qua base URL, giao thức và danh sách mô hình.",
				addCustomUnavailable: "Không có giao thức API nào để khai báo.",
				addMode: "Cách thêm",
				addModel: "Thêm mô hình",
				advancedHint: "Các trường khác nằm trong cordis.patch.yml; hãy sửa trực tiếp mục đó.",
				apply: "Áp dụng",
				applying: "Đang áp dụng…",
				baseUrl: "Base URL",
				baseUrlDefault: "Mặc định của nhà cung cấp",
				cancel: "Hủy",
				close: "Đóng",
				conflict: "Có người khác đã thay đổi các cài đặt này khi thẻ đang mở. Đóng rồi mở lại để sửa giá trị hiện tại.",
				contextWindow: "Cửa sổ ngữ cảnh",
				contextWindowPlaceholder: "Dùng mặc định của nhà cung cấp",
				create: "Tạo nhà cung cấp",
				creating: "Đang tạo…",
				credentialConfigured: "Đã cấu hình API key",
				credentialMissing: "Thiếu API key",
				customAnthropicBaseUrlPlaceholder: "https://gateway.example",
				customApi: "Giao thức API",
				customApiUnset: "Chưa chọn",
				customBaseUrlInvalid: "Nhập URL HTTP hoặc HTTPS hợp lệ.",
				customBaseUrlPlaceholder: "https://gateway.example/v1",
				customDisplayName: "Tên hiển thị",
				customNeedsBaseUrl: "Nhà cung cấp tùy chỉnh cần có base URL.",
				customNeedsModels: "Nhà cung cấp tùy chỉnh cần ít nhất một mô hình.",
				customRoute: "ID nhà cung cấp",
				customRouteHint: "Định danh viết thường, bắt đầu bằng chữ cái, xác định duy nhất nhà cung cấp này trong yêu cầu và làm tên thông tin xác thực.",
				customRouteInvalid: "Bắt đầu bằng chữ cái thường; sau đó là chữ thường, chữ số và dấu gạch ngang.",
				customRouteTaken: "ID này đã được một nhà cung cấp khác dùng.",
				customTag: "Tùy chỉnh",
				customized: "Cài đặt đã tùy chỉnh",
				deepSeekAccount: "Tài khoản DeepSeek",
				deepSeekBaseUrl: "https://api.deepseek.com/anthropic",
				deepSeekEndpointHint: "Dùng endpoint API tương thích Anthropic Messages.",
				deleteConfirm: "Xóa {provider}",
				deleteDescription: "Xóa {provider} sẽ gỡ cấu hình của nó. Thông tin xác thực nó dùng được quản lý ở nơi khác và sẽ được giữ lại.",
				deleteDescriptionWithCredential: "Xóa {provider} sẽ gỡ cấu hình và API key đã lưu của nó.",
				deleteTitle: "Xóa {provider}?",
				deleting: "Đang xóa {provider}…",
				edit: "Sửa",
				editProvider: "Sửa {provider}",
				fetchAdopt: "Thêm mục đã chọn",
				fetchDescription: "Đây là các mô hình nhà cung cấp này đang có. Chọn những mô hình cần thêm.",
				fetchDeselectAll: "Bỏ chọn tất cả",
				fetchEmpty: "Nhà cung cấp không liệt kê mô hình nào. Hãy thêm thủ công.",
				fetchModels: "Lấy danh sách mô hình",
				fetchNeedsBaseUrl: "Nhập base URL trước, rồi lấy danh sách.",
				fetchNoMatches: "Không có mô hình phù hợp.",
				fetchSearch: "Tìm mô hình",
				fetchSelectAll: "Chọn tất cả",
				fetchTitle: "Chọn mô hình cần thêm",
				fetching: "Đang hỏi nhà cung cấp…",
				intro: "Nhập API key để dùng mô hình từ các nhà cung cấp sau.",
				keyBlank: "Nhập API key, hoặc để trống để giữ key đã lưu.",
				keyBlankNew: "Nhập API key, hoặc để trống nếu nhà cung cấp này xác thực theo cách khác.",
				keyEnvLocked: "Do môi trường khởi chạy cung cấp (chỉ đọc)",
				keyIllegalCharacters: "API key này sai định dạng. Vui lòng kiểm tra lại.",
				keyInput: "API key",
				keyPlaceholder: "Nhập API key",
				keyPlaceholderNative: "Nhập API key, hoặc để trống để dùng xác thực từ môi trường",
				keyRequired: "Nhập API key để tiếp tục.",
				keyStored: "Đã cấu hình — nhập giá trị mới để thay thế",
				loadFailed: "Không tải được danh sách nhà cung cấp",
				maxTokens: "Số token đầu ra tối đa",
				maxTokensPlaceholder: "Dùng mặc định của nhà cung cấp",
				model: "Mô hình",
				modelAdvanced: "Tùy chọn mô hình",
				modelCapacityInvalid: "Dung lượng phải là số, có thể kèm hậu tố K hoặc M.",
				modelContextInvalid: "Cửa sổ ngữ cảnh phải là số dương, như 131072, 256K hoặc 1M.",
				modelDuplicate: "Mỗi ID mô hình chỉ được xuất hiện một lần.",
				modelId: "ID mô hình",
				modelIdDuplicate: "ID mô hình phải là duy nhất.",
				modelIdRequired: "Cần nhập ID mô hình.",
				modelInputImage: "Ảnh",
				modelInputText: "Văn bản",
				modelInputTypes: "Loại đầu vào",
				modelMaxTokensInvalid: "Số token đầu ra tối đa phải là số dương, như 8192, 64K hoặc 1M.",
				modelName: "Tên hiển thị",
				modelNameInvalid: "Tên hiển thị không được để trống.",
				modelNamePlaceholder: "Để trống sẽ dùng ID mô hình",
				models: "Mô hình",
				modelsCustomized: "Danh mục mô hình đã tùy chỉnh",
				modelsEmpty: "Bộ chọn sẽ không hiện mô hình nào. Vẫn có thể gửi trực tiếp các ID không có trong danh sách.",
				modelsInherited: "Đang dùng mặc định của adapter",
				nav: "Mô hình",
				onboardingDescription: "Cấu hình nhà cung cấp DeepSeek chính thức để bắt đầu.",
				onboardingLater: "Cấu hình sau",
				onboardingSave: "Lưu và tiếp tục",
				onboardingSaving: "Đang lưu…",
				onboardingTitle: "Thêm API key để bắt đầu",
				protocolAnthropicMessages: "Anthropic Messages",
				protocolOpenAiCompletions: "OpenAI Chat Completions",
				protocolOpenAiResponses: "OpenAI Responses",
				provider: "Nhà cung cấp",
				readOnly: "Tài liệu cài đặt ở chế độ chỉ đọc trong bản triển khai này.",
				remove: "Xóa",
				removeModel: "Xóa mô hình",
				removeProvider: "Xóa {provider}",
				resetModels: "Khôi phục mặc định",
				retry: "Thử lại",
				savedProvider: "Đã lưu {provider}.",
				settingsPathUnresolvable: "không xác định được đường dẫn cài đặt",
				title: "Mô hình",
				welcomeBody: "DeepSeek Harness 0.2 vẫn đang ở giai đoạn xem trước, nhiều phần còn cần tiếp tục cải thiện và hoàn thiện. Chúng tôi hoan nghênh mọi phản hồi và góp ý từ các nhà phát triển và người dùng. Ứng dụng desktop mới hướng tới nhiều đối tượng người dùng, còn các tính năng nâng cao dành cho nhà phát triển có thể bật trong cài đặt. Tính năng sản phẩm và API plugin của DeepSeek Harness dự kiến sẽ tiếp tục thay đổi và phát triển nhanh, rồi dần ổn định theo thời gian.\n\nChúng tôi mong được cùng người dùng và nhà phát triển khắp thế giới khám phá giới hạn của trí tuệ, trên nền tảng hạ tầng mã nguồn mở, tái sử dụng và kết hợp được. Mời mọi người hiện thực hóa ý tưởng của mình với DeepSeek Harness và tham gia cộng đồng để làm phong phú hệ sinh thái plugin.",
				welcomeContinue: "Tiếp tục",
				welcomeError: "Không lưu được xác nhận. Vui lòng thử lại.",
				welcomeTitle: "Thông báo bản xem trước"
			},
			"settings.permission": {
				"confirm.acknowledge": "Tôi hiểu rủi ro và muốn tiếp tục",
				"confirm.cancel": "Hủy",
				"confirm.description": "Toàn quyền cho phép phiên mới giảm bớt bước xác nhận và trực tiếp thực hiện nhiều thao tác hơn, gồm cả thao tác nhạy cảm, thay đổi tệp hoặc lệnh bên ngoài. Chỉ dùng khi tin tưởng các tác vụ sau đó.",
				"confirm.enable": "Bật toàn quyền",
				"confirm.title": "Bật toàn quyền?",
				description: "Chọn chế độ quyền mặc định cho phiên mới",
				loading: "Đang tải",
				"preset.fullAccess": "Toàn quyền",
				"preset.readOnly": "Chỉ đọc",
				"preset.workspaceWrite": "Ghi trong không gian làm việc",
				title: "Quyền",
				unavailable: "Không khả dụng"
			},
			"settings.pluginInventory": {
				active: "Đang chạy",
				clientSyncFailed: "Một số plugin không đồng bộ được trên trang này. Trạng thái bật trên máy chủ không đổi.",
				clientSyncRetry: "Thử lại trang này",
				clientSyncing: "Đang đồng bộ plugin trên trang này…",
				condition: "Tắt khi",
				conditionalTag: "Có điều kiện",
				configuration: "Cấu hình",
				countUnit: "plugin",
				disabledTag: "Đã tắt",
				empty: "Không có plugin nào.",
				emptySearch: "Không có plugin phù hợp.",
				enabledIn: "Bật trong",
				enabledTag: "Đã bật",
				error: "Plugin tạm thời không khả dụng.",
				failed: "Khởi động thất bại",
				failedCountLabel: "thất bại",
				failedTag: "Thất bại",
				fromPreset: "Từ",
				globalSubtitle: "Dùng chung cho hệ thống và mọi phiên",
				globalTitle: "Plugin toàn cục",
				loading: "Đang đọc plugin…",
				loadingPhase: "Đang tải",
				matchesInOtherPresets: "Thêm {count} kết quả ở preset khác: ",
				metadataError: "Lỗi siêu dữ liệu gói: {error}",
				moduleLabel: "Mô-đun",
				pending: "Đang chờ phụ thuộc",
				presetEnabledTag: "Qua preset",
				presetOptionBroken: "{name} (tải thất bại)",
				presetOptionDefault: "{name} (mặc định)",
				presetProvidedDetail: "Tắt toàn cục; preset agent cung cấp theo từng phiên",
				presetSubtitle: "Do preset agent kết hợp cho từng phiên",
				presetTitle: "Plugin phiên",
				retry: "Thử lại",
				runtime: "Trạng thái",
				search: "Tìm plugin",
				switcherLabel: "Chọn preset agent để xem",
				tab: "Danh sách plugin",
				unloading: "Đang gỡ tải",
				unobserved: "Không chạy",
				viewInPreset: "Xem trong nhóm preset"
			},
			"settings.plugins": {
				empty: "Bản triển khai này không cung cấp chế độ xem plugin nào.",
				intro: "Xem các plugin đi kèm bản triển khai này.",
				nav: "Plugin tích hợp sẵn",
				tabs: "Chế độ xem plugin",
				title: "Plugin tích hợp sẵn"
			},
			"settings.sessionLog": {
				description: "Góp phần cải thiện mô hình và sản phẩm DeepSeek.",
				failed: "Không lưu được tùy chọn",
				saved: "Đã lưu tùy chọn",
				title: "Tải lên log phiên khi dùng API mô hình chính thức"
			},
			"settings.shell": {
				description: "Giới hạn thời gian chạy và lượng đầu ra của mỗi lệnh.",
				invalidNumber: "Nhập một số, hoặc để trống để dùng mặc định.",
				maxOutputBytes: "Giới hạn đầu ra mỗi luồng (byte)",
				maxOutputBytesHint: "Phần vượt quá sẽ được ghi ra tệp tạm thay vì bị mất.",
				overridden: "Đã ghi đè",
				readOnly: "Bản triển khai này lưu cài đặt ở chế độ chỉ đọc.",
				reset: "Đặt lại mặc định",
				save: "Lưu",
				saveFailed: "Bản triển khai không chấp nhận các giá trị này; giá trị được giữ nguyên để sửa lại.",
				saving: "Đang lưu…",
				timeoutMs: "Thời gian chờ lệnh (ms)",
				timeoutMsHint: "Thời gian tối đa một lệnh được chạy trước khi bị dừng.",
				title: "Shell",
				unavailable: "Plugin này chưa được tải nên hiện chưa thể cấu hình."
			},
			"settings.subagent": {
				overridden: "Đã ghi đè",
				readOnly: "Bản triển khai này lưu cài đặt ở chế độ chỉ đọc.",
				reset: "Khôi phục mặc định",
				save: "Lưu",
				saveFailed: "Bản triển khai không chấp nhận các giá trị này; chúng được giữ lại để bạn sửa.",
				saving: "Đang lưu…",
				subagentCapacityHelp: "Tổng số subagent đang chạy dưới cùng một agent chính, tính mọi cấp đệ quy, không gồm agent chính. Yêu cầu khởi chạy mới sẽ bị từ chối khi đạt giới hạn.",
				subagentCapacityHelpLabel: "Về giới hạn subagent song song",
				subagentCapacityInvalid: "Nhập số nguyên từ 1 trở lên.",
				subagentDepthHelp: "Giới hạn số cấp subagent mà một agent có thể tạo.",
				subagentDepthHelpLabel: "Về độ sâu đệ quy tối đa",
				subagentDepthInvalid: "Nhập số nguyên từ 0 trở lên.",
				subagentDepthOne: "Chỉ agent chính được tạo subagent",
				subagentDepthOverride: "Nếu một công cụ tự định nghĩa độ sâu đệ quy tối đa, giá trị đó được ưu tiên.",
				subagentDepthZero: "Tắt subagent",
				subagentDescription: "Thiết lập độ sâu đệ quy, số lượng và mô hình cho subagent.",
				subagentLimitsTitle: "Giới hạn",
				subagentMaxActive: "Giới hạn subagent song song",
				subagentMaxDepth: "Độ sâu đệ quy tối đa",
				subagentModelSelectionAllowed: "Mô hình agent được chọn",
				subagentModelSelectionChoose: "Khi bật, agent có thể chọn nhà cung cấp, mô hình và mức suy luận cho từng subagent trong số các mô hình được cho phép bên dưới. Chỉ áp dụng cho phiên mới.",
				subagentModelSelectionConflict: "Cài đặt đã bị thay đổi ở nơi khác. Hãy bỏ bản nháp và thử lại.",
				subagentModelSelectionEmpty: "Hiện chưa có nhà cung cấp nào công bố mô hình.",
				subagentModelSelectionLoadFailed: "Không tải được mô hình.",
				subagentModelSelectionLoading: "Đang tải mô hình…",
				subagentModelSelectionOff: "Subagent dùng mặc định đã cấu hình hoặc kế thừa mô hình của agent cha. Các lựa chọn mô hình đã lưu vẫn được giữ.",
				subagentModelSelectionPartial: "Không tải được một số nhà cung cấp; các lựa chọn đã lưu vẫn gỡ được.",
				subagentModelSelectionRequired: "Chọn ít nhất một mô hình trước khi lưu.",
				subagentModelSelectionRetry: "Thử lại",
				subagentModelSelectionTitle: "Chọn mô hình",
				subagentModelSelectionToggle: "Cho phép agent chọn mô hình cho subagent",
				subagentModelSelectionUnavailable: "Hiện không khả dụng",
				subagentModelSelectionUnavailableGroup: "Đã lưu nhưng hiện không khả dụng",
				subagentTitle: "Subagent",
				unavailable: "Plugin này chưa được tải nên hiện chưa thể cấu hình."
			},
			"settings.theme": {
				"appearance.dark": "Tối",
				"appearance.light": "Sáng",
				"appearance.system": "Theo hệ thống",
				"appearance.title": "Diện mạo",
				"fontSize.decrease": "Giảm cỡ chữ",
				"fontSize.description": "Chỉ áp dụng cho nội dung cuộc trò chuyện",
				"fontSize.increase": "Tăng cỡ chữ",
				"fontSize.title": "Cỡ chữ",
				"fontSize.unit": "px"
			},
			"settings.webSearch": {
				apiKey: "API key",
				apiKeyHint: "Được lưu ngoài tệp cài đặt. Để trống để giữ key hiện tại.",
				apiKeySet: "Đã cấu hình key.",
				apiKeyUnset: "Chưa cấu hình key; chỉ các cuộc trò chuyện dùng mô hình Tài khoản DeepSeek mới tìm kiếm được, qua endpoint mặc định.",
				baseUrl: "Endpoint",
				baseUrlHint: "Để trống để dùng mặc định của nhà cung cấp.",
				description: "Thiết lập nhà cung cấp tìm kiếm DeepSeek.",
				invalidNumber: "Nhập một số, hoặc để trống để dùng mặc định.",
				maxUses: "Số lần tìm tối đa mỗi yêu cầu",
				maxUsesHint: "Số lần một yêu cầu được tìm kiếm trước khi phải trả lời.",
				overridden: "Đã ghi đè",
				readOnly: "Bản triển khai này lưu cài đặt ở chế độ chỉ đọc.",
				reset: "Khôi phục mặc định",
				save: "Lưu",
				saveFailed: "Bản triển khai không chấp nhận các giá trị này; chúng được giữ lại để bạn sửa.",
				saving: "Đang lưu…",
				title: "Tìm kiếm web",
				unavailable: "Plugin này chưa được tải nên hiện chưa thể cấu hình."
			},
			"shortcuts": {
				application: "Ứng dụng",
				approval: "Khu vực phê duyệt",
				cancel: "Hủy",
				clear: "Gỡ",
				"clear-search": "Xóa tìm kiếm",
				close: "Đóng phím tắt",
				"close-confirmation": "Đóng hộp xác nhận",
				conflict: "Đã dùng cho “{commands}”",
				description: "Xem và sửa các phím tắt và thao tác nhập hiện có",
				"desktop-document": "userData/keybindings.json",
				"desktop-reload": "khởi động lại Harness",
				dismiss: "Đóng menu hoặc hộp thoại trên cùng",
				"edit-label": "Sửa phím tắt cho {command}",
				empty: "Không có phím tắt phù hợp",
				future: "Cấu hình phím tắt trong {location} được tạo bởi phiên bản mới hơn. Hãy nâng cấp Harness rồi thử lại.",
				"global-hint": "Mở từ bất kỳ đâu",
				input: "Ô nhập tin nhắn",
				invalid: "Cấu hình phím tắt trong {location} bị hỏng. Hãy sao lưu và sửa cấu hình này, rồi {reload}.",
				"macos-web-help": "Dùng Command+/, Command+,, Command+Backslash, Control+Backquote, Command+Option+phím hoặc Command+Shift+phím. Cũng hỗ trợ tổ hợp có ba hoặc bốn phím bổ trợ khác nhau. Phím tắt của trình duyệt hoặc hệ thống có thể không đến được trang.",
				menus: "Menu và hộp thoại",
				"modified-count": "Đã tùy chỉnh {count}",
				"modifier-required": "Tổ hợp phải có Command, Ctrl hoặc Alt.",
				move: "Di chuyển lựa chọn trong menu",
				"native-failed": "Không bảo vệ được việc ghi phím trên desktop. Hãy thoát chế độ ghi rồi thử lại.",
				"not-ready": "Phím tắt chưa sẵn sàng. Vui lòng thử lại.",
				open: "Mở phím tắt",
				read: "Không đọc được {location}. Hãy kiểm tra quyền truy cập, rồi {reload}.",
				record: "Nhấn tổ hợp phím",
				"record-help": "Thả phím để lưu. Tab chuyển giữa các thao tác; Esc để hủy.",
				reserved: "Tổ hợp này được dành cho thao tác hệ thống hoặc soạn thảo văn bản.",
				reset: "Khôi phục mặc định",
				"reset-all": "Khôi phục tất cả mặc định",
				"reset-description": "Khôi phục phím tắt mặc định cho nền tảng này. Mọi phím tắt đã sửa hoặc đã gỡ sẽ được khôi phục. Các nền tảng khác không bị ảnh hưởng.",
				"reset-failed": "Không khôi phục được mặc định. Phím tắt của bạn không thay đổi. Vui lòng thử lại.",
				"reset-saved": "Đã khôi phục phím tắt mặc định",
				"reset-title": "Khôi phục tất cả phím tắt mặc định?",
				"retry-save": "Thử lưu lại",
				review: "Tôi đã xem cấu hình mới nhất",
				saved: "Đã sửa",
				search: "Tìm phím tắt",
				select: "Chọn mục trong menu",
				settings: "Phím tắt",
				stale: "Cấu hình phím tắt hoặc các lệnh hiện có đã thay đổi. Hãy xem lại các gán phím mới nhất trước khi lưu.",
				title: "Phím tắt",
				"too-many-keys": "Giữ tối đa hai phím không phải phím bổ trợ. Thả phím để thử lại.",
				unbound: "Chưa có phím tắt",
				"unsupported-browser": "Trình duyệt này chưa hỗ trợ tổ hợp này.",
				"unsupported-key": "Phím này không được hỗ trợ.",
				"using-accepted": "Các gán phím đọc thành công gần nhất vẫn đang có hiệu lực.",
				"using-defaults": "Đang dùng gán phím mặc định.",
				view: "Sửa phím tắt",
				"web-document": "mục localStorage dsh.keybindings.v1 của trang này",
				"web-help": "Tổ hợp trên trình duyệt: Mod+/, Mod+Shift+,, Mod+Shift+.. Mod là Command trên Mac và Ctrl ở nơi khác.",
				"web-reload": "tải lại trang",
				"windows-web-help": "Dùng Ctrl+/, Ctrl+,, Ctrl+Alt+phím hoặc Ctrl+Shift+phím. Cũng hỗ trợ tổ hợp có ba hoặc bốn phím bổ trợ khác nhau. Phím tắt của trình duyệt hoặc hệ thống có thể không đến được trang.",
				"write-failed": "Không lưu được. Phím tắt trước đó và bản nháp hiện tại vẫn được giữ. Vui lòng thử lại."
			},
			"shortcuts.layout": { toggle: "Bật/tắt thanh bên trái" },
			"sidebar": {
				"panels.label": "Bảng chung",
				"session.new": "Phiên mới",
				"session.new.label": "Phiên mới",
				"toggle.collapse": "Thu gọn thanh bên",
				"toggle.open": "Mở thanh bên"
			},
			"sidebarBrowser": {
				"address.changed": "URL đã thay đổi",
				"address.placeholder": "Nhập địa chỉ HTTP(S)",
				"address.unknown": "Trang đã chuyển hướng; trình chứa này không đọc được URL mới.",
				back: "Lùi",
				"error.application-origin": "Trình duyệt nhúng không thể mở chính ứng dụng DSH.",
				"error.credentials": "Địa chỉ không được chứa tên người dùng hoặc mật khẩu.",
				"error.empty": "Hãy nhập địa chỉ.",
				"error.invalid": "Địa chỉ không hợp lệ hoặc quá dài.",
				"error.protocol": "Chỉ hỗ trợ địa chỉ HTTP và HTTPS; dùng Xem trước tài liệu cho tệp cục bộ.",
				external: "Mở trong trình duyệt hệ thống",
				forward: "Tiến",
				go: "Đi",
				"guide.description": "Duyệt trang web",
				"guide.title": "Trình duyệt",
				"load.failed": "Không tải được trang; hãy tải lại hoặc mở trong trình duyệt hệ thống.",
				"load.failed.detail": "Tải trang thất bại ({code}): {description}",
				loading: "Đang mở…",
				reload: "Tải lại",
				"restore.action": "Khôi phục trang",
				"restore.previous": "Đã mở trước đó",
				"sandbox.disable": "Tắt giới hạn sandbox",
				"sandbox.enable": "Khôi phục giới hạn sandbox",
				"sandbox.warning": "Giới hạn sandbox đã tắt; trang có thể điều hướng ứng dụng cấp cao nhất và dùng tải xuống, hộp thoại modal và khóa nhập liệu.",
				"shortcut.noSession": "Hãy mở một phiên trước",
				start: "Nhập địa chỉ HTTP(S) để bắt đầu duyệt web",
				"type.label": "Trình duyệt"
			},
			"sidebarCodePreview": {
				copied: "Đã sao chép",
				copy: "Sao chép",
				title: "Mã"
			},
			"sidebarDocumentPreview": {
				autoRefresh: "Tự động làm mới",
				"autoRefresh.disable": "Tắt tự động làm mới",
				"autoRefresh.enable": "Bật tự động làm mới",
				changed: "Tệp đã thay đổi, đang hiện nội dung trước đó.",
				"error.notFound": "Không tìm thấy tệp. Có thể tệp đã bị di chuyển hoặc xóa.",
				"error.notRegularFile": "Không phải tệp thông thường, không có gì để hiển thị.",
				"error.notText": "Chưa hỗ trợ xem trước loại tệp này.",
				"error.tooLarge": "Trang này vượt giới hạn {limit} nên không đọc được.",
				"error.unavailable": "Đọc thất bại: {message}",
				loadMore: "Tải thêm",
				loading: "Đang hiển thị tài liệu...",
				openWith: "Mở bằng",
				reload: "Đọc lại tệp",
				reloadNow: "Tải lại",
				rendererUnavailable: "Không khả dụng chế độ xem trước {name}.",
				resourceUnavailable: "Dịch vụ tài nguyên tệp không khả dụng.",
				retry: "Thử lại",
				unsupportedFile: "Chưa hỗ trợ xem trước loại tệp này.",
				"viewer.text": "Văn bản thuần",
				"wrap.aria": "Ngắt dòng",
				"wrap.disable": "Tắt ngắt dòng",
				"wrap.enable": "Bật ngắt dòng"
			},
			"sidebarExcel": {
				charts: "biểu đồ",
				conditionalFormatting: "định dạng có điều kiện",
				encoding: "Không đọc được bảng mã văn bản này. Hãy lưu tệp dạng UTF-8 hoặc UTF-16 có BOM rồi thử lại.",
				featureSeparator: ", ",
				formulaWarning: "Bảng tính này có công thức. Kết quả hiển thị có thể thiếu hoặc không chính xác.",
				images: "hình ảnh",
				invalid: "Không mở được bảng tính này. Hãy kiểm tra định dạng, nội dung hoặc mật khẩu bảo vệ.",
				language: "en",
				loading: "Đang hiển thị tài liệu...",
				retry: "Thử lại",
				shapes: "hình vẽ",
				timeout: "Mở bảng tính này quá thời gian. Hãy thử tệp nhỏ hơn.",
				title: "Bảng tính",
				tooLarge: "Bảng tính này vượt giới hạn kích thước xem trước.",
				unsupportedNotice: "Bản xem trước không hỗ trợ {features} trong bảng tính này. Hãy mở bằng ứng dụng hệ thống để xem đầy đủ."
			},
			"sidebarFiles": {
				autoRefresh: "Tự động làm mới",
				"autoRefresh.disable": "Tắt tự động làm mới",
				"autoRefresh.enable": "Bật tự động làm mới",
				empty: "Thư mục trống",
				"entry.other": "Không phải tệp hay thư mục nên không mở được.",
				"error.notDirectory": "Đó không phải thư mục.",
				"error.notFound": "Thư mục đó không còn. Có thể đã bị di chuyển hoặc xóa.",
				"error.outsideWorkspace": "Thư mục đó nằm ngoài không gian làm việc nên thanh bên sẽ không đọc.",
				"error.unavailable": "Đọc thất bại: {message}",
				"guide.description": "Duyệt tệp trong không gian làm việc của phiên này",
				"guide.title": "Tệp trong không gian làm việc",
				loading: "Đang đọc…",
				noWorkspace: "Phiên này không có thư mục không gian làm việc.",
				reload: "Tải lại",
				"shortcut.noSession": "Hãy chọn một phiên trước",
				truncated: "Quá nhiều mục, chỉ hiện một phần.",
				"type.label": "Tệp"
			},
			"sidebarImage": {
				failed: "Không hiển thị được ảnh này.",
				loading: "Đang hiển thị tài liệu...",
				preview: "Xem trước ảnh: {name}",
				title: "Ảnh",
				unsupported: "Xem trước ảnh cần toàn bộ nội dung tệp.",
				zoomControls: "Điều khiển thu phóng",
				zoomFitWidth: "Vừa chiều rộng",
				zoomIn: "Phóng to",
				zoomMenu: "Chọn mức thu phóng",
				zoomOut: "Thu nhỏ",
				zoomValue: "{percent}%"
			},
			"sidebarOffice": {
				busy: "Dịch vụ xem trước Office đang bận. Hãy thử lại sau ít phút.",
				changed: "Tệp đã thay đổi trong lúc đọc. Hãy mở lại bản xem trước.",
				closeDetails: "Đóng chi tiết phông chữ",
				failed: "Chuyển đổi Office không tạo ra PDF dùng được. Hãy kiểm tra tệp rồi thử lại.",
				invalid: "Không thể xem trước tệp Office này. Tệp có thể bị hỏng, có mật khẩu bảo vệ hoặc sai phần mở rộng.",
				loading: "Đang hiển thị tài liệu...",
				missingFontsCount: "Phông chữ: {count}",
				missingFontsDescription: "Các phông chữ này không khả dụng cho bản xem trước. Văn bản và bố cục có thể khác tài liệu gốc.",
				missingFontsTitle: "Thiếu phông chữ",
				retry: "Thử lại",
				timeout: "Chuyển đổi Office quá thời gian. Hãy thử lại.",
				title: "Tài liệu Office",
				tooLarge: "Tệp Office hoặc PDF sau chuyển đổi vượt giới hạn kích thước xem trước. Hãy giảm kích thước tệp hoặc điều chỉnh cấu hình xem trước.",
				unavailable: "Xem trước Office không khả dụng. Hãy bật dịch vụ xem trước tài liệu trên máy đang chạy DeepSeek Harness.",
				viewMissingFonts: "Thiếu {count} phông chữ. Nhấn để xem."
			},
			"sidebarPdf": {
				failed: "Không thể hiển thị PDF: {message}",
				loading: "Đang hiển thị tài liệu...",
				pageImage: "Trang PDF {page}",
				password: "PDF này yêu cầu mật khẩu; không hỗ trợ xem trước tệp có mật khẩu.",
				rendering: "Đang hiển thị trang…",
				retry: "Thử lại",
				title: "PDF",
				unsupported: "Xem trước PDF cần toàn bộ nội dung tệp.",
				workerFailed: "Tiến trình hiển thị PDF không thể tiếp tục. Vui lòng thử lại.",
				zoomControls: "Điều khiển thu phóng",
				zoomFitWidth: "Vừa chiều rộng",
				zoomIn: "Phóng to",
				zoomMenu: "Chọn mức thu phóng",
				zoomOut: "Thu nhỏ",
				zoomValue: "{percent}%"
			},
			"sidebarRight": {
				"chrome.collapse": "Thu gọn thanh bên",
				"chrome.collapseAria": "Thu gọn thanh bên phải",
				"chrome.exitFullscreen": "Thoát toàn màn hình",
				"chrome.expand": "Mở thanh bên",
				"chrome.expandAria": "Mở thanh bên phải",
				"chrome.toFullscreen": "Toàn màn hình",
				"command.budget": "Tối đa hai ngăn",
				"command.close": "Đóng trang hoặc cửa sổ hiện tại",
				"command.collapsed": "Hãy mở rộng thanh bên phải trước",
				"command.empty": "Hãy mở một trang trước",
				"command.float": "Thao tác này không khả dụng trong bảng nổi",
				"command.fullscreen": "Bật/tắt toàn màn hình cho bảng",
				"command.noFocus": "Hãy chọn một ngăn của thanh bên phải trước",
				"command.noRefresh": "Không thể làm mới trang này",
				"command.noSession": "Hãy chọn một phiên trước",
				"command.refresh": "Làm mới trang hiện tại",
				"command.stale": "Trang đã thay đổi; hãy chọn lại",
				"command.toggle": "Bật/tắt thanh bên phải",
				"command.width": "Không đủ rộng để chia, hãy nới rộng thanh bên",
				"dock.addTab": "Thẻ mới",
				"dock.closeFloat": "Đóng",
				"dock.closeTab": "Đóng",
				"dock.dockFloat": "Đưa về thanh bên",
				"dock.drop.bottom": "Chia ngăn dưới",
				"dock.drop.center": "Chuyển vào đây",
				"dock.drop.left": "Chia ngăn trái",
				"dock.drop.right": "Chia ngăn phải",
				"dock.drop.top": "Chia ngăn trên",
				"dock.emptyPane": "Ngăn trống",
				"dock.splitPane": "Chia ngăn",
				"dock.splitPaneDisabled": "Tối đa hai ngăn",
				"dock.splitPaneNarrow": "Không đủ rộng để chia, hãy nới rộng thanh bên",
				"tab.guide.title": "Bắt đầu",
				"tab.unavailable": "Chưa có trình xem nào cho loại nội dung này."
			},
			"sidebarTerminal": {
				attachmentEnded: "Kết nối terminal đã kết thúc. Hãy kết nối lại để tiếp tục.",
				cleanupFailed: "Không kết thúc được terminal “{title}”: {message}",
				closed: "Terminal đã đóng.",
				connecting: "Đang kết nối…",
				control: "Giành quyền điều khiển",
				creating: "Đang khởi động…",
				description: "Chạy lệnh trong không gian làm việc của phiên",
				disconnected: "Đã ngắt kết nối.",
				exited: "Tiến trình đã thoát ({code})",
				failed: "Lỗi terminal: {message}",
				inputFull: "Bộ đệm đầu vào đã đầy. Hãy kết nối lại rồi thử lại.",
				invalidOutput: "Không nhận được màn hình terminal. Hãy kết nối lại để khôi phục.",
				loading: "Đang đọc môi trường terminal…",
				missingTerminal: "Terminal này không còn tồn tại. Hãy mở terminal mới.",
				"new": "Terminal mới",
				readonly: "Chế độ xem này chỉ đọc.",
				reconnect: "Kết nối lại",
				recoveryFailed: "Khôi phục terminal thất bại: {message}",
				rename: "Tên terminal",
				retry: "Thử lại",
				retryRecovery: "Thử khôi phục terminal lại",
				shell: "Chọn shell",
				shellEmpty: "Không có shell nào",
				shellLoading: "Đang tải shell…",
				"shortcut.noSession": "Hãy chọn một phiên trước",
				terminalLimit: "Đã đạt giới hạn số terminal. Hãy đóng terminal không dùng rồi thử lại. Terminal đã thoát cũng được tính vào giới hạn.",
				title: "Terminal",
				unavailable: "Không khả dụng"
			},
			"skill": {
				"menu.userOnly": "chỉ người dùng",
				"row.failed": "Tải skill thất bại",
				"row.inspect": "Xem chi tiết",
				"row.instructions": "Chỉ dẫn",
				"row.preparing": "Đang chuẩn bị tải skill",
				"row.running": "Đang tải skill",
				"row.stopped": "Đã dừng tải skill",
				"row.title": "Skill"
			},
			"slash.menu": {
				command: "Lệnh",
				"crumbs.aria": "Điều hướng thư mục",
				"drill.aria": "Duyệt thư mục",
				"drill.hint": "Duyệt thư mục",
				"drill.key": "Tab",
				loading: "Đang tải…",
				skill: "Skill",
				subagent: "Subagent",
				"suggestions.aria": "Gợi ý kích hoạt"
			},
			"subagent": {
				"activity.completed": "hoàn tất",
				"activity.inactive": "không chạy",
				"activity.running": "đang chạy",
				"branch.collapse": "Thu gọn nhánh con của {label}",
				"branch.expand": "Mở rộng nhánh con của {label}",
				"count.running.one": "{count} subagent đang chạy",
				"count.running.other": "{count} subagent đang chạy",
				"count.total.one": "{count} subagent",
				"count.total.other": "{count} subagent",
				"duration.days": "{days} ngày",
				"duration.daysHours": "{days} ngày {hours} giờ",
				"duration.exactDays": "{days} ngày {hours} giờ {minutes} phút {seconds} giây",
				"duration.exactTitle": "Tổng thời gian hoạt động: {duration}",
				"duration.hours": "{hours} giờ {minutes} phút {seconds} giây",
				"duration.minutes": "{minutes} phút {seconds} giây",
				"duration.months": "~{months} tháng",
				"duration.monthsDays": "~{months} tháng {days} ngày",
				"duration.seconds": "{seconds} giây",
				"duration.years": "~{years} năm",
				"duration.yearsMonths": "~{years} năm {months} tháng",
				"load.error": "Không tải được subagent",
				"loading.label": "Đang tải subagent…",
				"mode.continuable": "tiếp tục được",
				"mode.oneShot": "một lần",
				"mode.unknown": "chế độ không rõ",
				"open.sidebar": "Mở trong thanh bên",
				"open.sidebar.aria": "Mở {label} trong thanh bên",
				"readonly.body": "Phiên cha đang ngoại tuyến; hãy mở lại phiên đó để tiếp tục gửi tin nhắn.",
				"readonly.oneShot.body": "Tác vụ một lần không nhận tin nhắn tiếp theo; xem toàn bộ bản ghi thực thi tại đây.",
				"readonly.oneShot.title": "Bản ghi subagent một lần",
				"readonly.title": "Subagent này tạm thời chỉ đọc",
				"readonly.unknown.body": "Hãy đọc phiên con để biết có thể tiếp tục hay không.",
				retry: "Thử lại",
				"sidebar.chat": "Trò chuyện",
				"switcher.aria": "Chuyển subagent: {title}",
				"tokens.million": "{value}M",
				"tokens.thousand": "{value}K",
				"tokens.total": "{value} token",
				"tree.aria": "Các phiên subagent"
			},
			"trajectory": {
				"attachment.imageName": "Ảnh {index}",
				"attachment.list": "Tệp đính kèm",
				"block.label": "Khối #{index} {type}",
				"block.openSummary": "Mở tóm tắt lệnh gọi công cụ của khối #{index}",
				"block.openSummaryTitle": "Mở tóm tắt lệnh gọi công cụ",
				"code.copyOutput": "Sao chép đầu ra",
				"code.copySource": "Sao chép mã",
				"code.originalJson": "JSON gốc",
				"code.output": "Đầu ra",
				"code.running": "Đang chạy…",
				"code.source": "Mã",
				"column.input": "Đầu vào",
				"column.model": "Mô hình",
				"column.output": "Đầu ra",
				"column.think": "Suy nghĩ",
				"column.time": "Thời gian",
				"column.tools": "Công cụ",
				"details.assistantMessage": "Tin nhắn trợ lý",
				"details.close": "Đóng chi tiết",
				"details.compacted": "Đã nén",
				"details.error": "Lỗi",
				"details.event": "Chi tiết sự kiện",
				"details.failure.auth": "API key không hợp lệ",
				"details.hierarchy": "Phân cấp",
				"details.model": "Mô hình",
				"details.provider": "Nhà cung cấp",
				"details.purpose": "Mục đích",
				"details.resize": "Đổi kích thước chi tiết sự kiện",
				"details.resizeTitle": "Kéo để đổi kích thước. Nhấp đúp để đặt lại.",
				"details.result": "Kết quả",
				"details.retry": "Thử lại",
				"details.retryDelay": "Độ trễ thử lại",
				"details.scheduled": "Đã lên lịch",
				"details.source": "Nguồn",
				"details.status": "Trạng thái",
				"details.subtoolCalls": "Lệnh gọi công cụ con",
				"details.toolCall": "Lệnh gọi công cụ",
				"details.toolCalls": "Lệnh gọi công cụ",
				"group.compaction": "Nén ngữ cảnh {seq}",
				"group.message": "Tin nhắn",
				"group.step": "Bước {step}",
				"history.clickToLoadEarlier": "Nhấp để tải lịch sử cũ hơn",
				"history.loadEarlier": "Tải lịch sử cũ hơn",
				"history.loadingEarlier": "Đang tải lịch sử cũ hơn…",
				"history.loadingEarlierAria": "Đang tải lịch sử cũ hơn…",
				"history.loadingTrajectory": "Đang tải quỹ đạo…",
				"kind.assistant": "TRỢ LÝ",
				"kind.compacted": "ĐÃ NÉN",
				"kind.context": "NGỮ CẢNH",
				"kind.message": "Tin nhắn",
				"kind.sub": "Con",
				"kind.subtool": "CÔNG CỤ CON",
				"kind.system": "HỆ THỐNG",
				"kind.tool": "CÔNG CỤ",
				"kind.user": "NGƯỜI DÙNG",
				"layout.compacted": "Đã nén ngữ cảnh",
				"layout.compacting": "Đang nén ngữ cảnh…",
				"layout.compactionFailed": "Nén ngữ cảnh thất bại",
				"layout.compactionInterrupted": "Quá trình nén ngữ cảnh bị gián đoạn trước khi hoàn tất.",
				"layout.fileAttachments": "Tệp ×{count}",
				"layout.imageCount": "Ảnh ×{count}",
				"layout.initialSystemPrompt": "System prompt ban đầu",
				"layout.systemPromptAndToolsUpdated": "Đã cập nhật system prompt và công cụ",
				"layout.systemPromptUpdated": "Đã cập nhật system prompt",
				"layout.toolAdded": "Đã thêm công cụ: {name}",
				"layout.toolCallOnly": "Chỉ có lệnh gọi công cụ",
				"layout.toolRemoved": "Đã gỡ công cụ: {name}",
				"layout.toolUpdateNotice": "Đã cập nhật công cụ",
				"layout.toolsAdded": "Đã thêm: {names}",
				"layout.toolsAddedCount": "Đã thêm {count}",
				"layout.toolsChanged": "Thêm {added}, gỡ {removed}",
				"layout.toolsRemoved": "Đã gỡ: {names}",
				"layout.toolsRemovedCount": "Đã gỡ {count}",
				"layout.toolsUpdated": "Đã cập nhật công cụ",
				"options.json": "JSON tùy chọn yêu cầu",
				"options.notRecorded": "Không ghi lại tùy chọn",
				"record.json": "JSON",
				"record.namedParametersJson": "JSON tham số {name}",
				"record.noContent": "Không có nội dung",
				"record.noOutput": "Không có đầu ra",
				"record.noPayload": "Không ghi lại payload",
				"record.noResult": "Không ghi lại kết quả",
				"record.outputJson": "JSON kết quả",
				"record.parameters": "Tham số",
				"record.parametersJson": "JSON tham số",
				"record.payloadJson": "JSON payload",
				"record.resultJson": "JSON kết quả",
				"record.schemaUnavailable": "Schema không khả dụng",
				"record.systemPrompt": "System prompt",
				"record.systemPromptMissing": "Yêu cầu này không có system prompt",
				"record.thinking": "Suy nghĩ",
				"record.toolCallOnly": "(chỉ có lệnh gọi công cụ)",
				"record.tools": "Công cụ",
				"record.toolsMissing": "Yêu cầu này không có công cụ",
				"record.wrapLines": "Xuống dòng",
				"request.collapsedAssistant": "trợ lý",
				"request.collapsedSummary": "Tóm tắt {kind} đã thu gọn, {summary}",
				"request.collapsedTurn": "lượt",
				"request.compaction": "Nén ngữ cảnh · {section}",
				"request.compactionPurpose": "Nén ngữ cảnh",
				"request.label": "Yêu cầu #{request}",
				"request.labelCompaction": "Yêu cầu #{request} · Nén ngữ cảnh",
				"request.noContent": "không có nội dung",
				"request.retryProgress": "{retry}/{maximum}",
				"request.rowAria": "{request}{kind}, {content}",
				"request.rowAriaCompaction": "Yêu cầu {request}, nén ngữ cảnh",
				"request.rowPrefix": "Yêu cầu {request}, ",
				"section.betweenTurns": "Giữa các lượt",
				"source.goal": "Mục tiêu",
				"source.goalRound": "Mục tiêu · Vòng {round}",
				"source.messageJson": "JSON nguồn tin nhắn",
				"source.notRecorded": "Không ghi lại nguồn",
				"source.plugin": "Plugin",
				"source.pluginNamed": "Plugin · {plugin}",
				"source.unknown": "Không rõ",
				"source.user": "Người dùng",
				"status.completed": "Hoàn tất",
				"status.failed": "Thất bại",
				"status.pending": "Đang chờ",
				"summary.steps.one": "{count} bước",
				"summary.steps.other": "{count} bước",
				"summary.toolCalls.one": "{count} lệnh gọi công cụ",
				"summary.toolCalls.other": "{count} lệnh gọi công cụ",
				"tab.diff": "Diff",
				"tab.options": "Tùy chọn",
				"tab.payload": "Payload",
				"tab.preview": "Xem trước",
				"tab.raw": "Thô",
				"tab.rawOutput": "Đầu ra thô",
				"tab.result": "Kết quả",
				"tab.schema": "Schema",
				"tab.source": "Nguồn",
				"tab.summary": "Tóm tắt",
				"tab.systemPrompt": "System prompt",
				"tab.timing": "Thời gian",
				"tab.tools": "Công cụ",
				"tab.usage": "Mức sử dụng",
				"timeline.aria": "Dòng thời gian quỹ đạo",
				"timeline.noTimingData": "Không có dữ liệu thời gian",
				"timeline.overviewAria": "Tổng quan dòng thời gian; kéo ngang để tập trung vào sự kiện",
				"timeline.started": "Bắt đầu {time}",
				"timeline.total": "Tổng {duration}",
				"timeline.ttftDecoding": "TTFT {ttft} · Giải mã {decoding}",
				"timing.duration": "Thời lượng",
				"timing.durationTooShort": "Thời lượng quá ngắn",
				"timing.firstTokenUnavailable": "Không có token đầu tiên",
				"timing.generation": "Sinh",
				"timing.notAvailable": "Không khả dụng",
				"timing.notRecorded": "Không ghi lại",
				"timing.outputTokensUnavailable": "Không có số token đầu ra",
				"timing.request": "Thời gian yêu cầu",
				"timing.sessionTimestamps": "Mốc thời gian phiên",
				"timing.sessionTimestampsRunning": "Mốc thời gian phiên (đang chạy)",
				"timing.showLocalTime": "Hiện giờ địa phương",
				"timing.showUnixTimestamp": "Hiện Unix timestamp",
				"timing.source": "Nguồn thời gian",
				"timing.started": "Bắt đầu",
				"timing.stepStartUnavailable": "Không có thời điểm bắt đầu bước",
				"timing.throughput": "Thông lượng",
				"timing.totalDuration": "Tổng thời lượng",
				"timing.ttft": "TTFT",
				"timing.usageUnavailable": "Không có dữ liệu sử dụng",
				"toolbar.actualTime": "Thời gian thực",
				"toolbar.aria": "Thanh công cụ quỹ đạo",
				"toolbar.calls": "Lệnh gọi",
				"toolbar.collapseCalls": "Thu gọn lệnh gọi",
				"toolbar.collapseTurns": "Thu gọn lượt",
				"toolbar.duration": "Thời lượng",
				"toolbar.expandCalls": "Mở rộng lệnh gọi",
				"toolbar.expandTurns": "Mở rộng lượt",
				"toolbar.search": "Tìm trong quỹ đạo",
				"toolbar.searchPlaceholder": "Tìm kiếm",
				"toolbar.turns": "Lượt",
				"toolbar.useActualDuration": "Dùng thời lượng thực",
				"toolbar.useEqualWidth": "Dùng độ rộng đều cho thao tác",
				"turn.label": "Lượt {turn}",
				"unit.milliseconds": "{value} ms",
				"unit.seconds": "{value} giây",
				"unit.tokens": "{value} tok",
				"unit.tokensPerSecond": "{value} tok/s",
				"usage.cacheCreated": "Đã tạo cache",
				"usage.cached": "Đã cache",
				"usage.content": "Nội dung",
				"usage.input": "Đầu vào",
				"usage.notReported": "Không báo cáo mức sử dụng",
				"usage.other": "Khác",
				"usage.output": "Đầu ra",
				"usage.reasoning": "Suy luận",
				"usage.sessionCumulative": "Lũy kế phiên",
				"usage.thisRequest": "Yêu cầu này",
				"usage.tokens": "Token",
				"view.trajectory": "Quỹ đạo"
			},
			"voice-input": {
				auto: "Tự động nhận diện",
				cancel: "Hủy",
				cancelPrepare: "Hủy chuẩn bị",
				cancelled: "Đã hủy nhập bằng giọng nói.",
				cloud: "Âm thanh sẽ được gửi tới dịch vụ đám mây đã chọn.",
				cloudReady: "Nhận dạng giọng nói trên đám mây đã sẵn sàng.",
				conflict: "Bản nháp đã thay đổi. Bản chép lời vẫn được giữ và có thể chèn tại vị trí con trỏ hiện tại.",
				dictate: "Đọc chính tả",
				discard: "Bỏ bản chép lời",
				"download.certificate": "Không tải được {resource}: xác minh chứng chỉ thất bại.",
				"download.dns": "Không tải được {resource}: không phân giải được địa chỉ tải xuống.",
				"download.http": "Không tải được {resource}: dịch vụ tải xuống trả về HTTP {status}.",
				"download.integrity": "Bản tải xuống của {resource} chưa đầy đủ hoặc không qua được xác minh.",
				"download.network": "Không tải được {resource}: kết nối tới dịch vụ tải xuống thất bại.",
				"download.storage": "Không lưu được {resource}: không đủ dung lượng đĩa hoặc không có quyền ghi.",
				"download.timeout": "Tải {resource} quá thời gian.",
				"download.unknown": "Không chuẩn bị được {resource}.",
				"downloadAdvice.certificate": "Kiểm tra đồng hồ hệ thống, chứng chỉ tin cậy và cài đặt proxy trên máy chạy DSH, rồi thử lại.",
				"downloadAdvice.dns": "Kiểm tra cài đặt DNS và proxy trên máy chạy DSH. Xác nhận máy phân giải được tên miền nguồn tải, rồi thử lại.",
				"downloadAdvice.http": "Xác nhận địa chỉ tải xuống còn hoạt động và proxy truy cập được dịch vụ tải xuống, hoặc thử lại sau.",
				"downloadAdvice.integrity": "Hãy tải lại. Các tệp khác đã tải xong và đã xác minh vẫn được giữ.",
				"downloadAdvice.network": "Kiểm tra máy chạy DSH có truy cập được nguồn tải và các dịch vụ tải mô hình của nguồn đó. Cấu hình proxy trên máy đó nếu cần, rồi thử lại.",
				"downloadAdvice.storage": "Kiểm tra dung lượng đĩa trống và quyền ghi vào thư mục mô hình trên máy chạy DSH, rồi thử lại.",
				"downloadAdvice.timeout": "Kiểm tra kết nối mạng hoặc proxy trên máy chạy DSH, rồi thử lại sau. Các tệp đã tải và đã xác minh vẫn được giữ.",
				"downloadAdvice.unknown": "Kiểm tra mạng, dung lượng đĩa và quyền thư mục mô hình trên máy chạy DSH, rồi thử lại.",
				downloadBytes: "Tải xuống: {completed} / {total} MB, {percent}%",
				downloadCode: "Mã lỗi: {code}",
				downloadProgress: "Tiến độ tải xuống",
				downloadSource: "Nguồn tải: {source}",
				downloadUnknown: "Đã tải {completed} MB",
				elapsed: "Đang chờ {seconds} giây",
				empty: "Không nhận dạng được lời nói",
				en: "Tiếng Anh",
				failed: "Nhận dạng giọng nói thất bại: {message}",
				insert: "Chèn văn bản",
				interrupted: "Ghi âm bị gián đoạn. Vui lòng thử lại.",
				ja: "Tiếng Nhật",
				ko: "Tiếng Hàn",
				language: "Ngôn ngữ nhận dạng",
				loading: "Đang tải dịch vụ nhận dạng…",
				local: "Âm thanh được nhận dạng trên máy chạy DSH. Nếu cần tải mô hình, máy đó phải truy cập được nguồn đã chọn và các dịch vụ tệp của nguồn. Cấu hình proxy trên máy đó nếu cần.",
				permission: "Quyền truy cập micro đang bị tắt. Hãy cho phép trong cài đặt trình duyệt và hệ thống.",
				"preparation.cancelled": "Đã hủy chuẩn bị. Các bản tải đã hoàn tất vẫn được giữ.",
				"preparation.cancelling": "Đang hủy chuẩn bị…",
				"preparation.checking": "Đang kiểm tra tài nguyên cục bộ…",
				"preparation.loading": "Đang tải {name}…",
				"preparation.ready": "Nhận dạng giọng nói cục bộ đã sẵn sàng.",
				"preparation.standby": "Tài nguyên cục bộ đã sẵn sàng. Khi ghi âm, bộ nhận dạng sẽ được đánh thức.",
				"preparation.unprepared": "Lần dùng đầu sẽ tải các mô hình nhận dạng cục bộ.",
				"preparation.waking": "Đang đánh thức nhận dạng giọng nói cục bộ…",
				preparationFailed: "Chuẩn bị thất bại: {message}",
				preparationSteps: "Các bước chuẩn bị",
				prepare: "Tải xuống và chuẩn bị",
				provider: "Dịch vụ nhận dạng",
				reconnecting: "Đang kết nối tới nhận dạng giọng nói…",
				recording: "Đang ghi âm…",
				requesting: "Cho phép truy cập micro để tiếp tục…",
				retryPrepare: "Thử chuẩn bị lại",
				retryRecording: "Ghi âm lại",
				"setup.disk": "Dung lượng đĩa",
				"setup.diskValue": "Cần khoảng {gb} GB cho mô hình, runtime và bộ đệm tải xuống",
				"setup.estimateNote": "Đây là ước tính; mạng chậm có thể mất lâu hơn. Bản tải được dùng lại; mô hình nhàn rỗi mặc định sẽ giải phóng bộ nhớ.",
				"setup.local": "Mô hình cục bộ sẽ được tải về máy chạy DSH. Không cần Python hay trình biên dịch.",
				"setup.memory": "Bộ nhớ",
				"setup.memoryValue": "Khoảng {gb} GB khi đã nạp mô hình; nhận dạng có thể dùng nhiều hơn",
				"setup.time": "Thiết lập lần đầu",
				"setup.timeValue": "Khoảng {min}–{max} phút, tùy mạng và máy",
				"setupPrompt.body": "Nhập bằng giọng nói đã được bật. Lần dùng đầu cần tải và chuẩn bị mô hình nhận dạng cục bộ. Mở chi tiết plugin để xem ước tính dung lượng đĩa, bộ nhớ và thời gian trước khi bắt đầu thiết lập.",
				"setupPrompt.details": "Mở cài đặt plugin giọng nói",
				"setupPrompt.later": "Để sau",
				"setupPrompt.open": "Đi tới thiết lập",
				"setupPrompt.title": "Thiết lập nhập bằng giọng nói trước khi ghi âm",
				"setupPrompt.trigger": "Mở thiết lập nhập bằng giọng nói",
				"setupPrompt.unavailableBody": "Mở chi tiết plugin giọng nói để kiểm tra trạng thái nhận dạng, tiến độ chuẩn bị hoặc lỗi.",
				"setupPrompt.unavailableTitle": "Nhận dạng giọng nói chưa sẵn sàng",
				"short.downloading": "Đang tải xuống",
				"short.failed": "Thiết lập thất bại",
				sourceAuto: "Tự động (khuyến nghị)",
				sourceAutoHelp: "Ưu tiên nguồn phản hồi đầu tiên và thử nguồn khác nếu tải xuống thất bại.",
				sourceChoice: "Nguồn tải mô hình",
				sourceHuggingFace: "Hugging Face",
				sourceManualHelp: "Chỉ tải từ nguồn đã chọn. Các tệp đã tải và đã xác minh sẽ được dùng lại.",
				sourceMirror: "HF-Mirror (mirror Trung Quốc)",
				start: "Bắt đầu ghi âm",
				"step.check": "Kiểm tra tài nguyên cục bộ",
				"step.load": "Tải {name}",
				"step.model": "Chuẩn bị mô hình nhận dạng",
				"step.vad": "Chuẩn bị mô hình phát hiện giọng nói",
				"step.verify": "Xác minh tệp mô hình",
				"stepStatus.cancelled": "Đã hủy",
				"stepStatus.complete": "Hoàn tất",
				"stepStatus.failed": "Thất bại",
				"stepStatus.pending": "Chưa bắt đầu",
				"stepStatus.running": "Đang thực hiện",
				stop: "Dừng và chép lời",
				tooLarge: "Bản ghi vượt giới hạn của dịch vụ. Hãy thử ghi ngắn hơn.",
				transcribingShort: "Đang chép lời…",
				unavailable: "Trình duyệt này không thể ghi âm. Hãy dùng trình duyệt hỗ trợ micro.",
				wakingShort: "Đang đánh thức…",
				yue: "Tiếng Quảng Đông",
				zh: "Tiếng Trung"
			},
			"workflowRun": {
				"member.empty": "Tên thành viên trống",
				"member.open": "Mở {name}",
				"phase.empty": "Tên giai đoạn trống",
				"phase.unassigned": "Chưa phân giai đoạn",
				"run.empty": "Chưa có thành viên nào bắt đầu",
				"run.members.one": "{count} thành viên",
				"run.members.other": "{count} thành viên",
				"run.title": "{name}",
				"status.cancelled": "Đã hủy",
				"status.completed": "Hoàn tất",
				"status.failed": "Thất bại",
				"status.interrupted": "Bị gián đoạn",
				"status.running": "Đang chạy",
				"statusCount.cancelled": "Đã hủy {count}",
				"statusCount.completed": "Hoàn tất {count}",
				"statusCount.failed": "Thất bại {count}",
				"statusCount.interrupted": "Gián đoạn {count}",
				"statusCount.running": "Đang chạy {count}"
			},
			"workspace": {
				"actions.archive": "Lưu trữ",
				"actions.newSession": "Phiên mới",
				"actions.newSession.aria": "Phiên mới trong {name}",
				"actions.pin": "Ghim",
				"actions.session.aria": "Thao tác phiên cho {name}",
				"actions.unarchive": "Bỏ lưu trữ",
				"actions.unpin": "Bỏ ghim",
				"actions.workspace.aria": "Thao tác không gian làm việc cho {name}",
				"archive.confirm.action": "Dừng và lưu trữ",
				"archive.confirm.activity": "Công việc sẽ bị dừng",
				"archive.confirm.desc": "“{title}” vẫn còn công việc đang chạy. Lưu trữ sẽ dừng chúng trước; bạn có thể khôi phục phiên sau từ bộ lọc “Tất cả cuộc trò chuyện (hiện mục đã lưu trữ)” ở thanh bên, và công việc đã dừng sẽ không tự chạy lại.",
				"archive.confirm.jobs.one": "{n} công việc nền: {names}",
				"archive.confirm.jobs.other": "{n} công việc nền: {names}",
				"archive.confirm.listSeparator": ", ",
				"archive.confirm.other.one": "{n} công việc khác ({kind})",
				"archive.confirm.other.other": "{n} công việc khác ({kind})",
				"archive.confirm.pending": "Đang dừng và lưu trữ…",
				"archive.confirm.schedules.one": "{n} lời nhắc theo lịch: {names}",
				"archive.confirm.schedules.other": "{n} lời nhắc theo lịch: {names}",
				"archive.confirm.subagents.one": "{n} subagent đang chạy: {names}",
				"archive.confirm.subagents.other": "{n} subagent đang chạy: {names}",
				"archive.confirm.title": "Dừng và lưu trữ phiên này?",
				"archive.confirm.turn": "Lượt đang chạy",
				"conflict.named": "Đã có không gian làm việc tên “{name}”.",
				"date.ymd": "{d}/{m}/{y}",
				"defaultWorkspace.failed": "Không tạo được không gian làm việc mặc định. Hãy dùng Chọn không gian làm việc để chọn một thư mục.",
				"delete.desc": "Thao tác này gỡ “{name}” khỏi danh sách không gian làm việc. Thư mục và nhật ký phiên vẫn được giữ. Các phiên của nó sẽ hiện trong mục Chưa nhóm.",
				"delete.pending": "Đang xóa không gian làm việc…",
				"delete.workspace": "Xóa không gian làm việc",
				"empty.noMatches": "Không có kết quả",
				"empty.none": "Chưa có phiên nào",
				"empty.noneArchived": "Chưa có phiên nào được lưu trữ",
				"empty.viewOthers": "Xem các phiên khác",
				"field.sessionName": "Tên phiên",
				"field.workspaceName": "Tên không gian làm việc",
				"filterBy.label": "Lọc phiên",
				"folderError.retry": "Chọn lại",
				"folderError.title": "Không mở được thư mục",
				"group.ungrouped": "Chưa nhóm",
				"groupBy.flat": "Một danh sách",
				"groupBy.label": "Nhóm theo",
				"groupBy.workspace": "Không gian làm việc",
				"groupBy.workspaceTree": "Cây không gian làm việc",
				"hover.copied": "Đã sao chép",
				"hover.created": "Tạo lúc {time}",
				"menu.addWorkspace": "Thêm không gian làm việc…",
				"menu.archiveSession": "Lưu trữ phiên",
				"menu.fork": "Rẽ nhánh phiên",
				"menu.pinSession": "Ghim phiên",
				"menu.unarchiveSession": "Bỏ lưu trữ phiên",
				"menu.unpinSession": "Bỏ ghim phiên",
				"orderBy.label": "Sắp xếp theo",
				"orderBy.manual": "Thủ công",
				"orderBy.updated": "Cập nhật gần nhất",
				"picker.loading": "Đang tải không gian làm việc…",
				rename: "Đổi tên",
				"rename.session.title": "Đổi tên phiên",
				"rename.workspace.title": "Đổi tên không gian làm việc",
				"row.archived": "Đã lưu trữ",
				"row.pinned": "Đã ghim",
				"search.clear": "Xóa tìm kiếm",
				"search.hasMore": "Đang hiện {n} kết quả đầu tiên. Hãy thu hẹp tìm kiếm.",
				"search.noMatches": "Không có phiên phù hợp",
				"search.pending": "Đang tìm trong lịch sử phiên…",
				"search.placeholder": "Tìm tên phiên",
				"search.results.aria": "Kết quả tìm kiếm",
				"search.sessions.aria": "Tìm phiên",
				"section.sessions": "Phiên",
				"section.workspaces": "Không gian làm việc",
				"session.new": "Phiên mới",
				"session.untitled": "Chưa đặt tên",
				"sessions.collapse": "Thu gọn",
				"sessions.count.one": "{n} phiên",
				"sessions.count.other": "{n} phiên",
				"sessions.expand": "Hiện thêm {n} phiên",
				"shortcut.directoryBusy": "Đang chọn hoặc thêm không gian làm việc",
				"shortcut.forkFailed": "Không rẽ nhánh được phiên. Hãy thử lại.",
				"shortcut.noCompletedTurn": "Phiên này chưa có lượt nào hoàn tất",
				"shortcut.noPicker": "Trình chọn thư mục không khả dụng",
				"shortcut.noSession": "Hãy chọn một phiên trước",
				"status.compact.answer": "Trả lời",
				"status.compact.approval": "Phê duyệt",
				"status.compact.planReview": "Xem lại kế hoạch",
				"status.completed": "Hoàn tất",
				"status.idle": "Rảnh",
				"status.planReview": "Kế hoạch chờ xem lại",
				"status.running": "Đang chạy",
				"status.subagentsRunning.one": "{n} subagent đang chạy",
				"status.subagentsRunning.other": "{n} subagent đang chạy",
				"status.waitingAnswer": "Đang chờ trả lời",
				"status.waitingApproval": "Đang chờ phê duyệt",
				"time.ago": "{t} trước",
				"time.days": "{n} ngày",
				"time.hours": "{n} giờ",
				"time.minutes": "{n} phút",
				"time.months": "{n} tháng",
				"time.now": "vừa xong",
				"time.years": "{n} năm",
				"toast.archived": "Đã lưu trữ phiên. Bạn có thể ",
				"toast.archivedFilter": "lọc phiên đã lưu trữ",
				"toast.archivedNotOpenable": "Không thể mở phiên đã lưu trữ. Hãy bỏ lưu trữ để xem.",
				"toast.archivedOr": " hoặc ",
				"toast.archivedUndo": "hoàn tác",
				"toast.createFailed": "Tạo phiên mới thất bại: {message}",
				"toast.pinFailed": "Ghim thất bại. Hãy thử lại sau.",
				"toast.stoppedAndArchived": "Đã dừng và lưu trữ phiên. Bạn có thể ",
				"toast.unpinFailed": "Bỏ ghim thất bại. Hãy thử lại sau.",
				"viewOptions.hideArchived": "Ẩn mục đã lưu trữ",
				"viewOptions.label": "Tùy chọn hiển thị",
				"viewOptions.onlyArchived": "Chỉ mục đã lưu trữ",
				"viewOptions.showArchived": "Tất cả cuộc trò chuyện (hiện mục đã lưu trữ)",
				"workspace.add": "Thêm không gian làm việc"
			}
		};
		//#endregion
		//#region src/client/locale/index.ts
		const VI_LANGUAGE = {
			id: "vi",
			label: "Tiếng Việt",
			fallback: "en"
		};
		function applyVietnameseLocale(ctx) {
			ctx.effect(() => {
				const disposers = [];
				try {
					disposers.push(ctx.locale.addLanguage(VI_LANGUAGE));
				} catch (error) {
					console.warn("[dsh-vietnam] vi language not added:", error);
				}
				for (const [ns, dict] of Object.entries(VI_DICTIONARIES)) {
					if (Object.keys(dict).length === 0) continue;
					try {
						disposers.push(ctx.locale.register(ns, VI_LANGUAGE.id, dict));
					} catch (error) {
						console.warn(`[dsh-vietnam] vi dictionary for "${ns}" not registered:`, error);
					}
				}
				return () => {
					for (const dispose of disposers.reverse()) dispose();
				};
			}, "dsh-vietnam: vi language + dictionaries");
		}
		//#endregion
		//#region src/client/locales/plugin.ts
		/** Strings for DSH Việt Nam's own UI (settings row, photo credit). */
		const NS = "dsh-vietnam";
		const vi = {
			"row.title": "Giao diện Việt",
			"row.description": "Bảng màu Việt và hình nền phong cảnh Việt Nam tự đổi.",
			"palette.label": "Bảng màu",
			"palette.off": "Mặc định DSH",
			"palette.sonmai": "Sơn mài",
			"palette.halong": "Hạ Long sương",
			"palette.hoian": "Lụa Hội An",
			"scheme.label": "Chế độ",
			"scheme.light": "Sáng",
			"scheme.dark": "Tối",
			"scheme.system": "Theo hệ thống",
			"backdrop.title": "Hình nền Việt Nam",
			"backdrop.description": "Ảnh từ Wikimedia Commons, tự đổi theo chu kỳ. Trình duyệt sẽ tải ảnh trực tiếp từ Wikimedia.",
			"backdrop.collections": "Bộ sưu tập",
			"backdrop.interval": "Đổi ảnh sau",
			"backdrop.minutes": "{n} phút",
			"backdrop.visibility": "Độ hiện ảnh",
			"backdrop.blur": "Làm mờ ảnh",
			"backdrop.kenBurns": "Hiệu ứng chuyển động chậm",
			"backdrop.next": "Ảnh tiếp",
			"backdrop.customUrls": "Ảnh riêng (mỗi dòng một URL)",
			"backdrop.status.loading": "Đang tải ảnh…",
			"backdrop.status.ready": "{count} ảnh trong vòng xoay",
			"backdrop.status.offline": "Không tải được ảnh mới — đang dùng {count} ảnh đã lưu",
			"backdrop.status.empty": "Chưa có ảnh — đang dùng nền màu",
			"credit.label": "Ảnh: {title} — {author}, {license}",
			"credit.open": "Mở trang ảnh trên Wikimedia Commons"
		};
		const en = {
			"row.title": "Viet appearance",
			"row.description": "Vietnamese palettes and a rotating Vietnam-landscape backdrop.",
			"palette.label": "Palette",
			"palette.off": "DSH default",
			"palette.sonmai": "Lacquer (Sơn mài)",
			"palette.halong": "Ha Long mist",
			"palette.hoian": "Hoi An silk",
			"scheme.label": "Mode",
			"scheme.light": "Light",
			"scheme.dark": "Dark",
			"scheme.system": "System",
			"backdrop.title": "Vietnam backdrop",
			"backdrop.description": "Photos from Wikimedia Commons, rotated on a timer. Your browser loads them directly from Wikimedia.",
			"backdrop.collections": "Collections",
			"backdrop.interval": "Change every",
			"backdrop.minutes": "{n} min",
			"backdrop.visibility": "Photo visibility",
			"backdrop.blur": "Photo blur",
			"backdrop.kenBurns": "Slow motion effect",
			"backdrop.next": "Next photo",
			"backdrop.customUrls": "Your own photos (one URL per line)",
			"backdrop.status.loading": "Loading photos…",
			"backdrop.status.ready": "{count} photos in rotation",
			"backdrop.status.offline": "Could not load new photos — using {count} saved ones",
			"backdrop.status.empty": "No photos yet — showing the palette gradient",
			"credit.label": "Photo: {title} — {author}, {license}",
			"credit.open": "Open the photo page on Wikimedia Commons"
		};
		const zh = {
			"row.title": "越南外观",
			"row.description": "越南配色与自动轮换的越南风景背景。",
			"palette.label": "配色",
			"palette.off": "DSH 默认",
			"palette.sonmai": "漆画",
			"palette.halong": "下龙湾薄雾",
			"palette.hoian": "会安丝绸",
			"scheme.label": "模式",
			"scheme.light": "浅色",
			"scheme.dark": "深色",
			"scheme.system": "跟随系统",
			"backdrop.title": "越南风景背景",
			"backdrop.description": "图片来自 Wikimedia Commons，定时轮换。浏览器会直接从 Wikimedia 加载图片。",
			"backdrop.collections": "图集",
			"backdrop.interval": "切换间隔",
			"backdrop.minutes": "{n} 分钟",
			"backdrop.visibility": "图片可见度",
			"backdrop.blur": "图片模糊",
			"backdrop.kenBurns": "缓慢运动效果",
			"backdrop.next": "下一张",
			"backdrop.customUrls": "自定义图片（每行一个 URL）",
			"backdrop.status.loading": "正在加载图片…",
			"backdrop.status.ready": "轮换中共 {count} 张图片",
			"backdrop.status.offline": "无法加载新图片 — 正在使用 {count} 张已保存的图片",
			"backdrop.status.empty": "暂无图片 — 显示配色渐变",
			"credit.label": "图片：{title} — {author}，{license}",
			"credit.open": "在 Wikimedia Commons 打开图片页面"
		};
		//#endregion
		//#region src/client/state.ts
		/**
		* Backdrop preferences, persisted per browser in localStorage and observable
		* by the settings row and the slideshow. Unknown or corrupt stored values fall
		* back to defaults field by field.
		*/
		const INTERVAL_CHOICES = [
			1,
			5,
			15,
			30,
			60
		];
		const DEFAULT_SETTINGS = {
			enabled: true,
			collections: [...DEFAULT_COLLECTIONS],
			intervalMinutes: 5,
			kenBurns: true,
			visibility: 100,
			blur: 0,
			customUrls: []
		};
		const STORAGE_KEY$1 = "dsh-vietnam.backdrop";
		function sanitize(raw) {
			const r = raw !== null && typeof raw === "object" ? raw : {};
			const known = new Set(COLLECTIONS.map((c) => c.id));
			const num = (v, lo, hi, fallback) => typeof v === "number" && Number.isFinite(v) ? Math.min(hi, Math.max(lo, Math.round(v))) : fallback;
			const collections = Array.isArray(r.collections) ? r.collections.filter((c) => typeof c === "string" && known.has(c)) : void 0;
			return {
				enabled: typeof r.enabled === "boolean" ? r.enabled : DEFAULT_SETTINGS.enabled,
				collections: collections !== void 0 && (collections.length > 0 || r.collections.length === 0) ? collections : [...DEFAULT_SETTINGS.collections],
				intervalMinutes: INTERVAL_CHOICES.includes(r.intervalMinutes) ? r.intervalMinutes : DEFAULT_SETTINGS.intervalMinutes,
				kenBurns: typeof r.kenBurns === "boolean" ? r.kenBurns : DEFAULT_SETTINGS.kenBurns,
				visibility: num(r.visibility, 0, 100, DEFAULT_SETTINGS.visibility),
				blur: num(r.blur, 0, 24, DEFAULT_SETTINGS.blur),
				customUrls: Array.isArray(r.customUrls) ? r.customUrls.filter((u) => typeof u === "string" && /^https?:\/\//i.test(u)) : []
			};
		}
		var SettingsStore = class {
			value;
			listeners = /* @__PURE__ */ new Set();
			constructor() {
				let raw;
				try {
					raw = JSON.parse(localStorage.getItem(STORAGE_KEY$1) ?? "null");
				} catch {}
				this.value = sanitize(raw);
			}
			get = () => this.value;
			subscribe = (listener) => {
				this.listeners.add(listener);
				return () => {
					this.listeners.delete(listener);
				};
			};
			update(patch) {
				this.value = sanitize({
					...this.value,
					...patch
				});
				try {
					localStorage.setItem(STORAGE_KEY$1, JSON.stringify(this.value));
				} catch {}
				for (const listener of this.listeners) listener();
			}
		};
		//#endregion
		//#region \0dsh-css:src/client/settings/VietRow.module.css.mjs
		const css = ".NriVtW_section{border-bottom:.5px solid var(--dsw-alias-border-l2);padding:16px 0}.NriVtW_title{font-size:14px;line-height:20px}.NriVtW_description{color:var(--dsw-alias-label-secondary);margin-top:4px;font-size:12px;line-height:18px}.NriVtW_row{flex-wrap:wrap;justify-content:space-between;align-items:center;gap:16px;margin-top:12px;display:flex}.NriVtW_label{color:var(--dsw-alias-label-secondary);font-size:13px;line-height:20px}.NriVtW_head{justify-content:space-between;align-items:flex-start;gap:24px;display:flex}.NriVtW_chips{flex-wrap:wrap;gap:6px;margin-top:8px;display:flex}.NriVtW_chip{border:.5px solid var(--dsw-alias-border-l3);color:var(--dsw-alias-label-secondary);font:inherit;cursor:pointer;background:0 0;border-radius:999px;padding:3px 10px;font-size:12px;line-height:18px}.NriVtW_chip[aria-pressed=true]{border-color:var(--dsw-alias-brand-primary);background:color-mix(in srgb, var(--dsw-alias-brand-primary) 14%, transparent);color:var(--dsw-alias-label-primary)}.NriVtW_chip:focus-visible,.NriVtW_range:focus-visible,.NriVtW_urls:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:2px}.NriVtW_range{width:min(180px,45vw);accent-color:var(--dsw-alias-brand-primary)}.NriVtW_status{color:var(--dsw-alias-label-tertiary);font-size:12px;line-height:18px}.NriVtW_urls{box-sizing:border-box;border:.5px solid var(--dsw-alias-border-l3);background:var(--dsw-alias-bg-layer-1);width:100%;min-height:56px;color:var(--dsw-alias-label-primary);resize:vertical;border-radius:8px;margin-top:6px;padding:6px 8px;font:12px/18px ui-monospace,monospace}";
		const tagId = "dsh-vietnam/VietRow.module.css";
		if (typeof document !== "undefined" && document.querySelector("style[data-plugin-css=" + JSON.stringify(tagId) + "]") === null) {
			const tag = document.createElement("style");
			tag.dataset.plugin = "dsh-vietnam";
			tag.dataset.pluginCss = tagId;
			tag.textContent = css;
			document.head.appendChild(tag);
		}
		var VietRow_module_css_default = {
			"chip": "NriVtW_chip",
			"chips": "NriVtW_chips",
			"description": "NriVtW_description",
			"head": "NriVtW_head",
			"label": "NriVtW_label",
			"range": "NriVtW_range",
			"row": "NriVtW_row",
			"section": "NriVtW_section",
			"status": "NriVtW_status",
			"title": "NriVtW_title",
			"urls": "NriVtW_urls"
		};
		//#endregion
		//#region src/client/settings/VietRow.tsx
		/** "Giao diện Việt" row in Settings → General: palette, mode and backdrop controls. */
		function statusText(status, t) {
			switch (status.kind) {
				case "loading": return t("backdrop.status.loading");
				case "ready": return t("backdrop.status.ready", { count: status.count });
				case "offline": return t("backdrop.status.offline", { count: status.count });
				case "empty": return t("backdrop.status.empty");
				default: return "";
			}
		}
		function VietRow({ t, themes, settings, backdrop }) {
			const id = (0, react.useId)();
			const s = (0, react.useSyncExternalStore)(settings.subscribe, settings.get);
			const view = (0, react.useSyncExternalStore)(backdrop.subscribe, backdrop.getView);
			const choice = (0, react.useSyncExternalStore)(themes.subscribe, themes.current);
			const [urls, setUrls] = (0, react.useState)(s.customUrls.join("\n"));
			const selectPalette = (palette) => {
				themes.select(palette === "off" ? void 0 : {
					palette,
					scheme: choice?.scheme ?? "system"
				});
			};
			const selectScheme = (scheme) => {
				if (choice !== void 0) themes.select({
					...choice,
					scheme
				});
			};
			const toggleCollection = (cid) => {
				const next = s.collections.includes(cid) ? s.collections.filter((c) => c !== cid) : [...s.collections, cid];
				settings.update({ collections: next });
			};
			return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: VietRow_module_css_default.section,
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: VietRow_module_css_default.title,
						children: t("row.title")
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: VietRow_module_css_default.description,
						children: t("row.description")
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: VietRow_module_css_default.row,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: VietRow_module_css_default.label,
							children: t("palette.label")
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.SegmentedControl, {
							id: `${id}-palette`,
							label: t("palette.label"),
							value: choice?.palette ?? "off",
							options: [{
								value: "off",
								label: t("palette.off")
							}, ...PALETTE_IDS.map((p) => ({
								value: p,
								label: t(`palette.${p}`)
							}))],
							onChange: selectPalette
						})]
					}),
					choice !== void 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: VietRow_module_css_default.row,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
							className: VietRow_module_css_default.label,
							children: t("scheme.label")
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.SegmentedControl, {
							id: `${id}-scheme`,
							label: t("scheme.label"),
							value: choice.scheme,
							options: [
								"light",
								"dark",
								"system"
							].map((v) => ({
								value: v,
								label: t(`scheme.${v}`)
							})),
							onChange: selectScheme
						})]
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: VietRow_module_css_default.row,
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: VietRow_module_css_default.head,
							children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: VietRow_module_css_default.title,
								children: t("backdrop.title")
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
								className: VietRow_module_css_default.description,
								children: t("backdrop.description")
							})] })
						}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Switch, {
							checked: s.enabled,
							label: t("backdrop.title"),
							onChange: (enabled) => {
								settings.update({ enabled });
							}
						})]
					}),
					s.enabled && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: VietRow_module_css_default.row,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: VietRow_module_css_default.status,
								role: "status",
								children: statusText(view.status, t)
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Button, {
								variant: "ghost",
								onClick: () => {
									backdrop.next();
								},
								children: t("backdrop.next")
							})]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: VietRow_module_css_default.label,
							style: { marginTop: 12 },
							children: t("backdrop.collections")
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: VietRow_module_css_default.chips,
							children: COLLECTIONS.map((c) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)("button", {
								type: "button",
								className: VietRow_module_css_default.chip,
								"aria-pressed": s.collections.includes(c.id),
								onClick: () => {
									toggleCollection(c.id);
								},
								children: c.label
							}, c.id))
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: VietRow_module_css_default.row,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: VietRow_module_css_default.label,
								children: t("backdrop.interval")
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.SegmentedControl, {
								id: `${id}-interval`,
								label: t("backdrop.interval"),
								value: String(s.intervalMinutes),
								options: INTERVAL_CHOICES.map((n) => ({
									value: String(n),
									label: t("backdrop.minutes", { n })
								})),
								onChange: (v) => {
									settings.update({ intervalMinutes: Number(v) });
								}
							})]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: VietRow_module_css_default.row,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("label", {
								className: VietRow_module_css_default.label,
								htmlFor: `${id}-visibility`,
								children: t("backdrop.visibility")
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
								id: `${id}-visibility`,
								className: VietRow_module_css_default.range,
								type: "range",
								min: 0,
								max: 100,
								step: 5,
								value: s.visibility,
								onChange: (e) => {
									settings.update({ visibility: Number(e.currentTarget.value) });
								}
							})]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: VietRow_module_css_default.row,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("label", {
								className: VietRow_module_css_default.label,
								htmlFor: `${id}-blur`,
								children: t("backdrop.blur")
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("input", {
								id: `${id}-blur`,
								className: VietRow_module_css_default.range,
								type: "range",
								min: 0,
								max: 24,
								step: 1,
								value: s.blur,
								onChange: (e) => {
									settings.update({ blur: Number(e.currentTarget.value) });
								}
							})]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
							className: VietRow_module_css_default.row,
							children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
								className: VietRow_module_css_default.label,
								children: t("backdrop.kenBurns")
							}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_deepseek_ai_dsh_client_ui_primitives.Switch, {
								checked: s.kenBurns,
								label: t("backdrop.kenBurns"),
								onChange: (kenBurns) => {
									settings.update({ kenBurns });
								}
							})]
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("label", {
							className: VietRow_module_css_default.label,
							style: {
								display: "block",
								marginTop: 12
							},
							htmlFor: `${id}-urls`,
							children: t("backdrop.customUrls")
						}),
						/* @__PURE__ */ (0, react_jsx_runtime.jsx)("textarea", {
							id: `${id}-urls`,
							className: VietRow_module_css_default.urls,
							value: urls,
							spellCheck: false,
							placeholder: "https://…",
							onChange: (e) => {
								setUrls(e.currentTarget.value);
							},
							onBlur: () => {
								settings.update({ customUrls: urls.split("\n").map((u) => u.trim()).filter(Boolean) });
							}
						})
					] })
				]
			});
		}
		//#endregion
		//#region src/client/theme/tokens.ts
		function aliasTokens(seed, scheme) {
			const tint = (alpha) => `rgba(${seed.tint}, ${alpha})`;
			const mix = (color, pct) => `color-mix(in srgb, ${color} ${pct}%, transparent)`;
			return {
				"--dsw-alias-bg-base": seed.base,
				"--dsw-alias-bg-layer-1": seed.layer1,
				"--dsw-alias-bg-layer-2": seed.layer2,
				"--dsw-alias-bg-layer-3": seed.layer3,
				"--dsw-alias-bg-overlay": seed.overlay,
				"--dsw-alias-bg-module-platform": seed.layer2,
				"--dsw-alias-bg-multi-select": seed.layer2,
				"--dsw-alias-bg-document-preview": seed.layer2,
				"--dsw-alias-bg-document-selection": mix(seed.accent, 35),
				"--dsw-specific-sidebar-fill": seed.layer2,
				"--dsw-alias-label-primary": seed.ink,
				"--dsw-alias-label-primary-dimmed": seed.ink2,
				"--dsw-alias-label-primary-bluish": seed.ink,
				"--dsw-alias-label-secondary": seed.ink2,
				"--dsw-alias-label-tertiary": seed.ink3,
				"--dsw-alias-label-caption": seed.caption,
				"--dsw-alias-label-dimmed": mix(seed.ink3, 60),
				"--dsw-alias-label-document-preview": seed.ink2,
				"--dsw-alias-label-primary-foreground": seed.accentInk,
				"--dsw-alias-label-primary-inverted": seed.accentInk,
				"--dsw-alias-brand-primary": seed.accent,
				"--dsw-alias-brand-primary-invert": seed.accentInk,
				"--dsw-alias-brand-primary-new-colorprimary-new-color": seed.accent,
				"--dsw-alias-brand-text": seed.accent,
				"--dsw-alias-button-primary-fill": seed.accent,
				"--dsw-alias-button-primary-hover": seed.accentHover,
				"--dsw-alias-button-primary-dimmed": mix(seed.accent, 45),
				"--dsw-alias-link": seed.link,
				"--dsw-alias-button-info-fill": seed.action,
				"--dsw-alias-button-info-hover": seed.actionHover,
				"--dsw-alias-interactive-bg-hover": tint(scheme === "dark" ? .1 : .07),
				"--dsw-alias-interactive-bg-active": tint(scheme === "dark" ? .16 : .12),
				"--dsw-alias-interactive-bg-hover-accent": tint(scheme === "dark" ? .2 : .16),
				"--dsw-alias-interactive-bg-hover-solid": seed.layer3,
				"--dsw-alias-markdown-code-block": seed.code,
				"--dsw-alias-markdown-code-block-banner": seed.code,
				"--dsw-alias-markdown-inline-code": tint(scheme === "dark" ? .16 : .1),
				"--dsw-alias-scrollbar-bg-l1": tint(.18),
				"--dsw-alias-scrollbar-hover-l1": tint(.32),
				"--dsw-alias-tooltip-bg": seed.ink,
				"--dsw-alias-toast-bg": seed.ink,
				"--dsw-alias-toast-label": seed.base,
				"--dsw-alias-state-success-primary": seed.success,
				"--dsw-alias-state-warn-primary": seed.warn,
				"--dsw-alias-state-warn-label": seed.warn,
				"--dsw-alias-state-error-primary": seed.error
			};
		}
		//#endregion
		//#region src/client/theme/index.ts
		const STORAGE_KEY = "dsh-vietnam.theme";
		/** The built-in preference (light/dark/system) the user had before picking a Viet palette. */
		const RESTORE_KEY = "dsh-vietnam.theme.restore";
		const BUILTIN_PREFERENCES = [
			"light",
			"dark",
			"system"
		];
		const DARK_QUERY = "(prefers-color-scheme: dark)";
		function readChoice() {
			try {
				const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "null");
				if (raw !== null && PALETTES.some((p) => p.id === raw.palette) && [
					"light",
					"dark",
					"system"
				].includes(raw.scheme)) return raw;
			} catch {}
		}
		function writeChoice(choice) {
			try {
				if (choice === void 0) localStorage.removeItem(STORAGE_KEY);
				else localStorage.setItem(STORAGE_KEY, JSON.stringify(choice));
			} catch {}
		}
		function rememberBuiltin(preference) {
			if (!BUILTIN_PREFERENCES.includes(preference)) return;
			try {
				localStorage.setItem(RESTORE_KEY, preference);
			} catch {}
		}
		function restoredBuiltin() {
			try {
				const stored = localStorage.getItem(RESTORE_KEY);
				if (stored !== null && BUILTIN_PREFERENCES.includes(stored)) return stored;
			} catch {}
			return "system";
		}
		function resolveScheme(scheme) {
			if (scheme !== "system") return scheme;
			return typeof matchMedia === "function" && matchMedia(DARK_QUERY).matches ? "dark" : "light";
		}
		function applyVietThemes(ctx) {
			let choice = readChoice();
			const listeners = /* @__PURE__ */ new Set();
			const setChoice = (next) => {
				choice = next;
				writeChoice(next);
				for (const listener of listeners) listener();
			};
			let switching = false;
			const activate = () => {
				if (choice === void 0) return;
				switching = true;
				try {
					ctx.theme.setTheme(themeId(choice.palette, resolveScheme(choice.scheme)));
				} finally {
					switching = false;
				}
			};
			ctx.effect(() => {
				const disposers = PALETTES.flatMap((p) => ["light", "dark"].map((scheme) => ctx.theme.register({
					id: themeId(p.id, scheme),
					colorScheme: scheme,
					tokens: aliasTokens(p[scheme], scheme)
				})));
				activate();
				return () => {
					for (const dispose of disposers) dispose();
				};
			}, "dsh-vietnam: viet themes");
			ctx.effect(() => {
				const runtime = ctx.theme;
				const original = runtime.setTheme;
				const wrapped = function(id) {
					const result = original.call(this, id);
					if (!switching && choice !== void 0 && parseThemeId(id) === void 0) setChoice(void 0);
					return result;
				};
				runtime.setTheme = wrapped;
				return () => {
					if (runtime.setTheme === wrapped) runtime.setTheme = original;
				};
			}, "dsh-vietnam: observe explicit theme picks");
			let restorePending = false;
			ctx.effect(() => ctx.on("theme/change", (snapshot) => {
				if (switching || choice === void 0 || restorePending) return;
				if (parseThemeId(snapshot.preference) !== void 0) return;
				restorePending = true;
				queueMicrotask(() => {
					restorePending = false;
					if (choice !== void 0 && parseThemeId(ctx.theme.getTheme().preference) === void 0) activate();
				});
			}), "dsh-vietnam: keep viet theme");
			ctx.effect(() => {
				if (typeof matchMedia !== "function") return () => {};
				const media = matchMedia(DARK_QUERY);
				const onChange = () => {
					if (choice?.scheme === "system") activate();
				};
				media.addEventListener("change", onChange);
				return () => media.removeEventListener("change", onChange);
			}, "dsh-vietnam: follow system scheme");
			return {
				current: () => choice,
				select(next) {
					if (next !== void 0 && choice === void 0) rememberBuiltin(ctx.theme.getTheme().preference);
					setChoice(next);
					if (next === void 0) ctx.theme.setTheme(restoredBuiltin());
					else activate();
				},
				subscribe(listener) {
					listeners.add(listener);
					return () => {
						listeners.delete(listener);
					};
				}
			};
		}
		//#endregion
		//#region src/client/index.ts
		const name = "dsh-vietnam";
		/** Services resolved from the client root context: `ctx.locale`, `ctx.theme`, `ctx.slots`. */
		const inject = [
			"locale",
			"theme",
			"slots"
		];
		function apply(ctx) {
			applyVietnameseLocale(ctx);
			ctx.effect(() => {
				const disposers = [
					ctx.locale.register(NS, "zh", zh),
					ctx.locale.register(NS, "en", en),
					ctx.locale.register(NS, "vi", vi)
				];
				return () => {
					for (const dispose of disposers) dispose();
				};
			}, "dsh-vietnam: plugin dictionaries");
			const themes = applyVietThemes(ctx);
			const settings = new SettingsStore();
			const backdrop = new BackdropController(ctx, settings);
			ctx.effect(() => backdrop.start(), "dsh-vietnam: backdrop");
			ctx.effect(() => mountCredit(backdrop, ctx.locale.bind(NS), (cb) => ctx.on("locale/change", cb)), "dsh-vietnam: photo credit");
			ctx.slots.inject("settings.general.item", () => ctx.slots.register({
				name: "settings.general.item",
				id: "dsh-vietnam",
				order: 25,
				locale: NS,
				inject: () => ({
					themes,
					settings,
					backdrop
				})
			}, VietRow));
		}
		//#endregion
		exports.apply = apply;
		exports.inject = inject;
		exports.name = name;
		return module.exports;
	}
});

//# sourceMappingURL=client.js.map