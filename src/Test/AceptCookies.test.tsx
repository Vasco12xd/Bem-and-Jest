import {render,screen,fireEvent, getByLabelText} from '@testing-library/react';
import AceptCookies from '../Components/Aceptcookies';

describe('AceptCookies component', () => {

    let checkbox;
    let article;

    beforeEach(() => {
        render( < AceptCookies /> );
        checkbox = getByLabelText('Acepta las cookies');
        article = screen.getByRole('article', { name: 'Confirmación cookies' });
    })
    
    test('Comprobar checkbox', () => {
        expect(checkbox).toBeInTheDocument();
        expect(checkbox.checked).not.toBe(true);

    })

    test('Si cambia el checkbox al pulsar el boton', () => {
        fireEvent.click(checkbox);
        expect(checkbox.checked).toBe(true);
        expect(article.textContent).toBe('Has aceptado las cookies');
    })

})