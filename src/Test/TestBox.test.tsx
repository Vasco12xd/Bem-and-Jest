import { render, screen } from '@testing-library/react';
import TestBox from '../Components/TestBox';

describe('TestBox component', () => {
    
    test('La caja de texto se encuentra en el documento', () => {
       render( < TestBox /> );
       const article = screen.getByRole('article', { name: 'Parrafo principal' });
        expect(article).toBeInTheDocument();
    });

    test('la caja con el texto tiene un color inicial', () => {
        render( < TestBox /> );
        const article = screen.getByRole('article', { name: 'Parrafo principal' });
        expect(article).toHaveStyle({backgroundColor: 'slateblue'});
    })

})