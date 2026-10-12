import { describe, expect, it } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useFavorites } from '../favorites'

describe('favoritos', () => {
  it('marca e desmarca', () => {
    const { result } = renderHook(() => useFavorites('weapons'))
    act(() => result.current.toggle('Aquila Favonia'))
    expect(result.current.isFavorite('Aquila Favonia')).toBe(true)
    act(() => result.current.toggle('Aquila Favonia'))
    expect(result.current.isFavorite('Aquila Favonia')).toBe(false)
  })
})
