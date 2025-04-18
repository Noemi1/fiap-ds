import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest';
import { DS_Input } from '.';
import { FaAt, FaLock } from 'react-icons/fa';


describe("Components/Button", () => {
    it('should rennder input for password with text Senha', () =>{
        render(<DS_Input state="default" label="Senha" iconPos="right" placeholder="******" icon={<FaLock />} ></DS_Input>)
        expect(screen.getByText('Senha')).toBeTruthy();
    })
    it('should rennder input for e-mail with text E-mail', () =>{
        render(<DS_Input state="default" label="E-mail" iconPos="right" placeholder="example@gmail.com" icon={<FaAt />} ></DS_Input>)
        expect(screen.getByText('E-mail')).toBeTruthy();
    })
})
