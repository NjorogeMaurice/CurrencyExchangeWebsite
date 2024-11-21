import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import SearchBar from './components/SearchBar'; // Adjust the path if necessary

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}));

describe('SearchBar Component', () => {
    let mockOnSearch;
    let mockNavigate;

    beforeEach(() => {
        mockOnSearch = jest.fn();
        mockNavigate = jest.fn();
        useNavigate.mockReturnValue(mockNavigate);
    });

    test('renders the search bar and initializes with query from URL hash', () => {
        const mockLocation = { hash: '#search=USD' };
        jest.spyOn(require('react-router-dom'), 'useLocation').mockReturnValue(mockLocation);

        render(
            <MemoryRouter>
                <SearchBar onSearch={mockOnSearch} />
            </MemoryRouter>
        );

        const input = screen.getByPlaceholderText(/search currencies/i);
        expect(input.value).toBe('USD');
        expect(mockOnSearch).toHaveBeenCalledWith('USD');
    });

    test('updates the search term and calls onSearch on input change', () => {
        const mockLocation = { hash: '' };
        jest.spyOn(require('react-router-dom'), 'useLocation').mockReturnValue(mockLocation);

        render(
            <MemoryRouter>
                <SearchBar onSearch={mockOnSearch} />
            </MemoryRouter>
        );

        const input = screen.getByPlaceholderText(/search currencies/i);
        fireEvent.change(input, { target: { value: 'EUR' } });

        expect(input.value).toBe('EUR');
        expect(mockOnSearch).toHaveBeenCalledWith('EUR');
        expect(mockNavigate).toHaveBeenCalledWith('#search=EUR');
    });

    test('handles empty input correctly', () => {
        const mockLocation = { hash: '' };
        jest.spyOn(require('react-router-dom'), 'useLocation').mockReturnValue(mockLocation);

        render(
            <MemoryRouter>
                <SearchBar onSearch={mockOnSearch} />
            </MemoryRouter>
        );

        const input = screen.getByPlaceholderText(/search currencies/i);
        fireEvent.change(input, { target: { value: '' } });

        expect(input.value).toBe('');
        expect(mockOnSearch).toHaveBeenCalledWith('');
        expect(mockNavigate).toHaveBeenCalledWith('#search=');
    });
});
