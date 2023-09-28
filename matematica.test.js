const {soma, fatorial} = require('./matematica.js')


describe('Calcular básicos', () => {
    test('Soma de 1 + 1 deve ser 2', () => {
        expect(soma(1,1)).toBe(2)
    })
    
    test('Soma de 0 + 1 deve ser 1', () => {
        expect(soma(0,1)).toBe(1)
    })
    
    test('Soma de -1 + 1 deve ser 0', () => {
        expect(soma(-1,1)).toBe(0)
    })
    
    test('Soma de -1 + -1 deve ser -2', () => {
        expect(soma(-1,-1)).toBe(-2)
    })
})

describe('Calcular avançados', () => {
    test('Fatorial de 0 deve ser 1', () => {
        expect(fatorial(0)).toBe(1)
    })
    
    test('Fatorial de 1 deve ser 1', () => {
        expect(fatorial(1)).toBe(1)
    })
    
    test('Fatorial de 5 deve ser 120', () => {
        expect(fatorial(5)).toBe(120)
    })
})