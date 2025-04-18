import { render, screen } from '@testing-library/react'
import { DS_Button } from '.';
import { describe, it, expect } from 'vitest';


describe("Components/Button", () => {
    it('should rennder primary button with children text ENTRAR', () =>{
        render(<DS_Button label="ENTRAR" textAlignment="center" severity="primary"></DS_Button>)
        expect(screen.getByText('ENTRAR')).toBeTruthy();
    })
    it('should rennder secondary button with children text CRIAR CONTA', () =>{
        render(<DS_Button label="CRIAR CONTA" textAlignment="center" severity="secondary"></DS_Button>)
        expect(screen.getByText('CRIAR CONTA')).toBeTruthy();
    })
})
