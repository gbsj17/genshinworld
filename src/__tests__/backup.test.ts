import { beforeEach, describe, expect, it } from 'vitest'
import { buildBackup, restoreBackup } from '../backup'

const file = (data: unknown, extra: object = {}) => JSON.stringify({ app: 'genshinworld', version: 1, exportedAt: 'x', data, ...extra })

describe('backup dos dados', () => {
  beforeEach(() => localStorage.clear())

  it('exporta só o que está salvo e importa de volta igual', () => {
    localStorage.setItem('genshinworld:favorites', JSON.stringify(['diluc']))
    localStorage.setItem('genshinworld:pity', JSON.stringify({ character: { pity: 3 } }))
    localStorage.setItem('genshinworld:theme', 'light') // fora do backup
    const b = buildBackup()
    expect(Object.keys(b.data).sort()).toEqual(['favorites', 'pity'])

    localStorage.clear()
    const r = restoreBackup(JSON.stringify(b))
    expect(r.ok).toBe(true)
    expect(JSON.parse(localStorage.getItem('genshinworld:favorites') ?? '')).toEqual(['diluc'])
  })

  it('recusa arquivo de outro app, JSON quebrado e versão desconhecida', () => {
    expect(restoreBackup('{nao e json').ok).toBe(false)
    expect(restoreBackup(file({ favorites: [] }, { app: 'outro' })).ok).toBe(false)
    expect(restoreBackup(file({ favorites: [] }, { version: 2 })).ok).toBe(false)
  })

  it('não grava nada se algum valor estiver no formato errado', () => {
    localStorage.setItem('genshinworld:favorites', JSON.stringify(['antigo']))
    const r = restoreBackup(file({ favorites: ['novo'], pity: 'texto' }))
    expect(r.ok).toBe(false)
    expect(JSON.parse(localStorage.getItem('genshinworld:favorites') ?? '')).toEqual(['antigo'])
  })

  it('ignora chaves desconhecidas e recusa arquivo sem nenhuma chave válida', () => {
    expect(restoreBackup(file({ lang: 'en', qualquer: [1] })).ok).toBe(false)
    const r = restoreBackup(file({ wishlist: ['diluc'], lang: 'en' }))
    expect(r.ok && r.keys).toEqual(['wishlist'])
    expect(localStorage.getItem('genshinworld:lang')).toBeNull()
  })
})

describe('metas "Evoluindo" no backup', () => {
  beforeEach(() => localStorage.clear())

  it('entram no backup e voltam na importação', () => {
    localStorage.setItem('genshinworld:goal-chars', JSON.stringify(['diluc']))
    localStorage.setItem('genshinworld:goal-weapons', JSON.stringify(['Wolf\'s Gravestone']))
    const b = buildBackup()
    expect(Object.keys(b.data).sort()).toEqual(['goal-chars', 'goal-weapons'])
    localStorage.clear()
    expect(restoreBackup(JSON.stringify(b)).ok).toBe(true)
    expect(JSON.parse(localStorage.getItem('genshinworld:goal-chars') ?? '')).toEqual(['diluc'])
  })
})
