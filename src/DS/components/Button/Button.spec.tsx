import { render, screen } from '@testing-library/react'
import { DS_Button } from '.';
import { describe, it, expect, vi } from 'vitest';
import { FaHome } from 'react-icons/fa';


describe("Components/Button", () => {
    it('should render default button with children text', () => {
        render(<DS_Button state="default" leftIcon={<FaHome />} rightIcon={<FaHome />}>Entrar</DS_Button>)
        expect(screen.getByText('Entrar')).toBeTruthy();
    })
    it('should render outlined button with children text', () => {
        const handleClick = vi.fn();
        render(<DS_Button onClick={handleClick}
            state="outlined" leftIcon={<FaHome />} rightIcon={<FaHome />}>Entrar</DS_Button>)

        fileEvent.click()

        expect(screen.getByText('Entrar')).toBeTruthy();
    })
});
