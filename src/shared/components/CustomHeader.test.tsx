import { describe, test, expect } from 'vitest'
import { render, screen } from "@testing-library/react";
import { CustomHeader } from './CustomHeader';

describe('CustomHeader', () => {
    const title = 'Test title';
    const description = 'descripcion de ejemplo';

    test('should render the title correctly', () => {
        // Renderiza el componente como si estuviera en el navegador
        render(<CustomHeader title={title} />);
        // Busca un elemento que tenga el texto "Test title"
        // Si no lo encuentra, el test falla automáticamente
        expect(screen.getByText(title)).toBeDefined();
    });
    test('should render the description when provided', () => {

        render(<CustomHeader title={title} description={description} />);
        // Comprueba que existe un elemento con ese texto
        expect(screen.getByText(description)).toBeDefined();
        expect(screen.getByRole('paragraph')).toBeDefined();
        // Comprobamos que el contenido es el esperado
        expect(screen.getByRole('paragraph').innerHTML).toBe(description);
    });
    test('should render description when not provided', () => {
        //container = render()
        const { container } = render(<CustomHeader title={title} />);
        // Buscamos el div con la clase content-center
        const divElement = container.querySelector('.content-center');
        // Dentro del div buscamos el h1
        const h1 = divElement?.querySelector('h1');
        // Comprobamos que el h1 contiene el título
        expect(h1?.innerHTML).toBe(title);
        // Buscamos un párrafo
        const p = divElement?.querySelector('p');
        // Como NO enviamos description,
        // esperamos que no exista ningún <p>
        expect(p).toBeNull();
    });
});