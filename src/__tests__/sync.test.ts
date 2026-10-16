import { beforeEach, describe, expect, it } from 'vitest'
import { isEmptyData, readAll, replaceAll } from '../backup'
import { decide, stable } from '../syncLogic'

const base = { remoteAt: 100, syncedAt: 100, dirty: false, localEmpty: false, same: false }

describe('decide (sincronização)', () => {
  it('nuvem vazia: envia se o aparelho tem dados', () => {
    expect(decide({ ...base, remoteAt: null })).toBe('upload')
    expect(decide({ ...base, remoteAt: null, localEmpty: true })).toBe('none')
  })
  it('dados iguais: nada a fazer', () => {
    expect(decide({ ...base, syncedAt: null, same: true })).toBe('none')
  })
  it('primeira vez na conta: baixa se o aparelho está vazio, senão pergunta', () => {
    expect(decide({ ...base, syncedAt: null, localEmpty: true })).toBe('download')
    expect(decide({ ...base, syncedAt: null })).toBe('conflict')
  })
  it('nuvem mais nova: baixa, ou pergunta se o aparelho também mudou', () => {
    expect(decide({ ...base, remoteAt: 200 })).toBe('download')
    expect(decide({ ...base, remoteAt: 200, dirty: true })).toBe('conflict')
  })
  it('só o aparelho mudou: envia', () => {
    expect(decide({ ...base, dirty: true })).toBe('upload')
    expect(decide(base)).toBe('none')
  })
  it('stable ignora a ordem das chaves', () => {
    expect(stable({ b: 1, a: [1, { d: 2, c: 3 }] })).toBe(stable({ a: [1, { c: 3, d: 2 }], b: 1 }))
  })
})

describe('replaceAll / isEmptyData', () => {
  beforeEach(() => localStorage.clear())
  it('grava os dados da nuvem e apaga o que a nuvem não tem', () => {
    localStorage.setItem('genshinworld:teams', '[{"id":"x"}]')
    expect(replaceAll({ favorites: ['diluc'], pity: {} })).toBe(true)
    expect(readAll()).toEqual({ favorites: ['diluc'], pity: {} })
  })
  it('recusa formato errado sem mexer em nada', () => {
    localStorage.setItem('genshinworld:favorites', '["a"]')
    expect(replaceAll({ favorites: 'diluc' })).toBe(false)
    expect(readAll()).toEqual({ favorites: ['a'] })
  })
  it('vazio = sem listas e objetos com conteúdo', () => {
    expect(isEmptyData({})).toBe(true)
    expect(isEmptyData({ favorites: [], pity: {} })).toBe(true)
    expect(isEmptyData({ favorites: ['a'] })).toBe(false)
  })
})
