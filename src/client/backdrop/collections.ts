/**
 * Wikimedia Commons categories grouped into user-facing collections. Only
 * landscape-specific categories are used: broad place categories (a city, a
 * province) mix in markets, food, hotels and interiors. Each was probed
 * (2026-10-02) to yield ≥9 landscape JPEGs ≥1920px wide under CC0 / public
 * domain / CC BY / CC BY-SA.
 */

export interface Collection {
  id: string
  /** Display name (Vietnamese proper names; identical in every UI language). */
  label: string
  categories: readonly string[]
}

export const COLLECTIONS: readonly Collection[] = [
  { id: 'halong', label: 'Vịnh Hạ Long · Lan Hạ', categories: ['Limestone islands in Ha Long Bay', 'Panoramics in Ha Long Bay', 'Sunsets of Ha Long Bay', 'Lan Ha Bay'] },
  { id: 'ruongbacthang', label: 'Ruộng bậc thang', categories: ['Rice terraces in Vietnam', 'Rice terraces in Sa Pa', 'Mu Cang Chai District'] },
  { id: 'nuida', label: 'Tam Cốc · núi đá vôi', categories: ['Tam Coc', 'Rock formations in Vietnam'] },
  { id: 'hangdong', label: 'Phong Nha · hang động', categories: ['Phong Nha-Ke Bang National Park', 'Caves in Vietnam'] },
  { id: 'songho', label: 'Sông hồ · thác nước', categories: ['Lakes of Vietnam', 'Ba Be Lake', 'Waterfalls in Vietnam', 'Hoan Kiem Lake'] },
  { id: 'langque', label: 'Làng quê', categories: ['Countryside in Vietnam', 'Landscapes of Vietnam'] },
  { id: 'bien', label: 'Biển Việt Nam', categories: ['Beaches of Vietnam'] },
  { id: 'tuyenchon', label: 'Ảnh tuyển chọn Commons', categories: ['Featured pictures of Vietnam', 'Quality images of Vietnam', 'Valued images of Vietnam'] },
]

export const DEFAULT_COLLECTIONS: readonly string[] = ['halong', 'ruongbacthang', 'nuida', 'hangdong', 'songho', 'tuyenchon']
