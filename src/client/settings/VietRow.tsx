/** "Giao diện Việt" row in Settings → General: palette, mode and backdrop controls. */
import { useId, useState, useSyncExternalStore } from 'react'
import { Button, SegmentedControl, Switch } from '@deepseek-ai/dsh-client-ui-primitives'
import type { BackdropController, BackdropStatus } from '../backdrop/index.ts'
import { COLLECTIONS } from '../backdrop/collections.ts'
import { INTERVAL_CHOICES, type SettingsStore } from '../state.ts'
import type { VietScheme, VietThemeController } from '../theme/index.ts'
import { PALETTE_IDS, type PaletteId } from '../theme/palettes.ts'
import type { PluginKey } from '../locales/plugin.ts'
import css from './VietRow.module.css'

export interface VietRowInjected {
  themes: VietThemeController
  settings: SettingsStore
  backdrop: BackdropController
}

type Translate = (key: PluginKey, params?: Record<string, unknown>) => string

function statusText(status: BackdropStatus, t: Translate): string {
  switch (status.kind) {
    case 'loading': return t('backdrop.status.loading')
    case 'ready': return t('backdrop.status.ready', { count: status.count })
    case 'offline': return t('backdrop.status.offline', { count: status.count })
    case 'empty': return t('backdrop.status.empty')
    default: return ''
  }
}

export function VietRow({ t, themes, settings, backdrop }: { t: Translate } & VietRowInjected) {
  const id = useId()
  const s = useSyncExternalStore(settings.subscribe, settings.get)
  const view = useSyncExternalStore(backdrop.subscribe, backdrop.getView)
  // Changes through this row or DSH's own Appearance row both notify here.
  const choice = useSyncExternalStore(themes.subscribe, themes.current)
  const [urls, setUrls] = useState(s.customUrls.join('\n'))

  const selectPalette = (palette: PaletteId | 'off') => {
    themes.select(palette === 'off' ? undefined : { palette, scheme: choice?.scheme ?? 'system' })
  }
  const selectScheme = (scheme: VietScheme) => {
    if (choice !== undefined) themes.select({ ...choice, scheme })
  }
  const toggleCollection = (cid: string) => {
    const next = s.collections.includes(cid) ? s.collections.filter((c) => c !== cid) : [...s.collections, cid]
    settings.update({ collections: next })
  }

  return <div className={css.section}>
    <div className={css.title}>{t('row.title')}</div>
    <div className={css.description}>{t('row.description')}</div>

    <div className={css.row}>
      <span className={css.label}>{t('palette.label')}</span>
      <SegmentedControl id={`${id}-palette`} label={t('palette.label')} value={choice?.palette ?? 'off'}
        options={[{ value: 'off', label: t('palette.off') }, ...PALETTE_IDS.map((p) => ({ value: p, label: t(`palette.${p}`) }))]}
        onChange={selectPalette} />
    </div>
    {choice !== undefined && <div className={css.row}>
      <span className={css.label}>{t('scheme.label')}</span>
      <SegmentedControl id={`${id}-scheme`} label={t('scheme.label')} value={choice.scheme}
        options={(['light', 'dark', 'system'] as const).map((v) => ({ value: v, label: t(`scheme.${v}`) }))}
        onChange={selectScheme} />
    </div>}

    <div className={css.row}>
      <div className={css.head}>
        <div>
          <div className={css.title}>{t('backdrop.title')}</div>
          <div className={css.description}>{t('backdrop.description')}</div>
        </div>
      </div>
      <Switch checked={s.enabled} label={t('backdrop.title')} onChange={(enabled) => { settings.update({ enabled }) }} />
    </div>

    {s.enabled && <>
      <div className={css.row}>
        <span className={css.status} role="status">{statusText(view.status, t)}</span>
        <Button variant="ghost" onClick={() => { backdrop.next() }}>{t('backdrop.next')}</Button>
      </div>

      <div className={css.label} style={{ marginTop: 12 }}>{t('backdrop.collections')}</div>
      <div className={css.chips}>
        {COLLECTIONS.map((c) => <button key={c.id} type="button" className={css.chip}
          aria-pressed={s.collections.includes(c.id)} onClick={() => { toggleCollection(c.id) }}>{c.label}</button>)}
      </div>

      <div className={css.row}>
        <span className={css.label}>{t('backdrop.interval')}</span>
        <SegmentedControl id={`${id}-interval`} label={t('backdrop.interval')} value={String(s.intervalMinutes)}
          options={INTERVAL_CHOICES.map((n) => ({ value: String(n), label: t('backdrop.minutes', { n }) }))}
          onChange={(v) => { settings.update({ intervalMinutes: Number(v) as typeof s.intervalMinutes }) }} />
      </div>

      <div className={css.row}>
        <label className={css.label} htmlFor={`${id}-visibility`}>{t('backdrop.visibility')}</label>
        <input id={`${id}-visibility`} className={css.range} type="range" min={0} max={100} step={5} value={s.visibility}
          onChange={(e) => { settings.update({ visibility: Number(e.currentTarget.value) }) }} />
      </div>
      <div className={css.row}>
        <label className={css.label} htmlFor={`${id}-blur`}>{t('backdrop.blur')}</label>
        <input id={`${id}-blur`} className={css.range} type="range" min={0} max={24} step={1} value={s.blur}
          onChange={(e) => { settings.update({ blur: Number(e.currentTarget.value) }) }} />
      </div>
      <div className={css.row}>
        <span className={css.label}>{t('backdrop.kenBurns')}</span>
        <Switch checked={s.kenBurns} label={t('backdrop.kenBurns')} onChange={(kenBurns) => { settings.update({ kenBurns }) }} />
      </div>

      <label className={css.label} style={{ display: 'block', marginTop: 12 }} htmlFor={`${id}-urls`}>{t('backdrop.customUrls')}</label>
      <textarea id={`${id}-urls`} className={css.urls} value={urls} spellCheck={false} placeholder="https://…"
        onChange={(e) => { setUrls(e.currentTarget.value) }}
        onBlur={() => { settings.update({ customUrls: urls.split('\n').map((u) => u.trim()).filter(Boolean) }) }} />
    </>}
  </div>
}
