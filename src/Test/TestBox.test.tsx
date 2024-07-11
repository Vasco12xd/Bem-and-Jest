import { render, screen, fireEvent } from '@testing-library/react';
import TestBox from '../Components/TestBox';

describe('TestBox component', () => {

    let article;
    let button;

    beforeEach(() => {
        render( < TestBox /> );
        article = screen.getByRole('article', { name: 'Parrafo principal' });
        button = screen.getByRole('button', { name: 'Pulsa para cambiar' });
    })
    
    test('La caja de texto se encuentra en el documento', () => {
        expect(article).toBeInTheDocument();
    });

    test('la caja con el texto tiene un color inicial', () => {
        expect(article).toHaveStyle({backgroundColor: 'slateblue'});
    })

    test('Comprobar si pulsar el boton cambia de fondo', () => {
        fireEvent.click(button);
        expect(article).toHaveStyle({
            backgroundColor: 'indigo'
        });
    }
    )
})